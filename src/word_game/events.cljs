(ns word-game.events
  (:require [reagent.dom]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [reagent.core :as r]))


;; -- Domino 1 - Event Dispatch -----------------------------------------------

(defonce timeouts (r/atom {}))

(defn keyboard-input []
  (r/with-let [handler #(let [input (.-which %)]
                          (cond
                            (= 8 input)
                            (rf/dispatch [:word-input-delete-letter])

                            (= 13 input)
                            (do (rf/dispatch [:insert-word @(rf/subscribe [:word-input])])
                                (rf/dispatch [:clear-word-input]))

                            (re-seq #"[a-zA-Z]" (char input))
                            (rf/dispatch [:word-input-add-letter (clojure.string/capitalize (char input))])))
               _   (.addEventListener js/document "keydown" handler)]
    @(rf/subscribe [:word-input])
    (finally
      (.removeEventListener js/document "keydown" handler))))

;; -- Domino 2 - Event Handlers -----------------------------------------------

(rf/reg-event-db              ;; sets up initial application state
 :initialize                 ;; usage:  (dispatch [:initialize])
 (fn [_ _]                   ;; the two parameters are not important here, so use _
   {:words-found #{}
    :word-input []
    :toast-visibility ""
    :modal-visibility ""
    :toast-message "Howdy!!!"
    :letter-core "R"
    :letter-others ["A" "B" "F" "O" "P" "Y"]
    :points 0
    :points-ranking 0
    :points-ranking-pairs {0 [0 "Beginner"] 2 [1 "Good Start"] 5 [2 "Moving Up"] 7 [3 "Good"]
                           14 [4 "Solid"] 23 [5 "Nice"] 37 [6 "Great"] 47 [7 "Amazing"]
                           65 [8 "Genius"]}
    :allowed-words #{"babyproof" "afar" "affray" "afro" "arbor" "array"
                     "arroyo" "barb" "barf" "boar" "boor" "bray" "farro"
                     "fora" "foray" "fray" "parry" "poor" "pray" "proof"
                     "prop" "pyro" "roar" "roof" "ropy"}}))

(rf/reg-event-db
 :word-input-change
 (fn [db [_ changed-input-value]]
   (assoc db :word-input (clojure.string/upper-case changed-input-value))))

(rf/reg-event-db
 :clear-word-input
 (fn [db _]
   (assoc db :word-input [])))

(rf/reg-event-db
 :word-input-delete-letter
 (fn [db _]
   (assoc db :word-input (vec (drop-last (:word-input db))))))

(rf/reg-event-db
 :show-toast
 (fn [db _]
   (assoc db :toast-visibility "show")))

(rf/reg-event-db
 :hide-toast
 (fn [db _]
   (assoc db :toast-visibility "")))

(rf/reg-event-db
 :show-modal
 (fn [db _]
   (assoc db :modal-visibility "block")))

(rf/reg-event-db
 :hide-modal
 (fn [db _]
   (assoc db :modal-visibility "")))

(defn calculate-points
  "Returns how many points a word is worth"
  [word]
  (let [letter-count (count word)
        points (if (= 4 letter-count)
                 1
                 letter-count)]
    (if (= 7 (count (set (clojure.string/upper-case word))))
      (+ points 7)
      points)))

(rf/reg-event-fx
 :add-points
 (fn [{:keys [db]} [_ word]]
   (let [curr-points (:points db)
         new-points (+ curr-points
                       (calculate-points word))]
     {:db (assoc db :points new-points)
      :dispatch [:calculate-ranking new-points]})))

(defn current-rank-info
  "Returns the rank-info which contains:
   [Minimum-Points [Rank, Rank-Text]]
   corresponding to CURR-POINTS"
  [curr-points ranking-map]
  (last
   (sort-by first
            (filter
             #(<= (key %) curr-points)
             ranking-map))))

(rf/reg-event-db
 :calculate-ranking
 (fn [db [_ points]]
   (let [[_ [ranking _]] (current-rank-info points (:point-ranking-pairs db))]
     (assoc db :points-ranking ranking))))


(rf/reg-event-fx
 :new-toast-alert
 (fn [{:keys [db]} [_ message]]
   {:db (assoc db :toast-message message)
    :dispatch [:show-toast]
    :dispatch-later [{:ms 3000 :dispatch [:hide-toast]}]}))

(rf/reg-event-db
 :word-input-add-letter
 (fn [db [_ letter]]
   (let [letter-others (:letter-others db)
         letter-core (:letter-core db)
         color (cond
                 (some (set letter-others) letter) "black"
                 (some (set letter-core) letter) "gold"
                 :else "grey")]
     (assoc db :word-input (conj (:word-input db) [letter color])))))

(rf/reg-event-db
 :shuffle-letters
 (fn [db _]
   (assoc db :letter-others (shuffle (:letter-others db)))))

(defn format-word
  "Returns a trimmed and capitalized WORD"
  [word]
  (let [word (reduce #(str %1 (first %2)) "" word)]
    (-> (clojure.string/trim word)
        (clojure.string/capitalize))))

(defn word-exists? 
  [db word]
  (some #{word} (:words-found db)))

(defn allowed-word?
  [db word]
  (some (:allowed-words db) [(clojure.string/lower-case word)]))

; Split into helper functions
(rf/reg-event-fx
 :insert-word
 (fn [{:keys [db]} [_ new-word]]
   (let [new-word (format-word new-word)]
     (cond
       (empty? new-word)
       {:dispatch [:new-toast-alert "EMPTY"]}

       (word-exists? db new-word)
       {:dispatch [:new-toast-alert "WORD ALREADY EXISTS"]}

       (allowed-word? db new-word)
       {:db (assoc db :words-found (conj (:words-found db) new-word))
        :dispatch [:add-points new-word]}

       :else
       {:dispatch [:new-toast-alert "NOT ALLOWED"]}))))


;; -- Domino 3 - Effect Handling  -------------------------------------------------------

;; ;; Sets javascript timeouts for animations
;; (rf/reg-fx
;;  :timeout
;;  (fn [{:keys [id event time]}]
;;    (when-some [existing (get @timeouts id)] ; If there is already a time out then clear it
;;      (js/clearTimeout existing)
;;      (swap! timeouts dissoc id))
;;    (when (some? event) ; Add the timeout to the event and dispatch it
;;      (swap! timeouts assoc id
;;             (js/setTimeout
;;              (fn []
;;                (rf/dispatch event))
;;              time)))))