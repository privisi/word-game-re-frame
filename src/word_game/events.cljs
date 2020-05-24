(ns word-game.events
  (:require [reagent.dom]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [reagent.core :as r]))


;; -- Domino 1 - Event Dispatch -----------------------------------------------

(defonce timeouts (r/atom {}))

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
    :allowed-words #{"babyproof" "afar" "affray" "afro" "arbor" "array"
                     "arroyo" "barb" "barf" "boar" "boor" "bray" "farro"
                     "fora" "foray" "fray" "parry" "poor" "pray" "proof"
                     "prop" "pyro" "roar" "roof" "ropy"}}))

(.addEventListener js/document "keydown" #(let [input (.-which %)]
                                            (cond
                                              (= 8 input)
                                              (rf/dispatch [:word-input-delete-letter])

                                              (= 13 input)
                                              (do (rf/dispatch [:insert-word @(rf/subscribe [:word-input])])
                                                  (rf/dispatch [:clear-word-input]))

                                              (re-seq #"[a-zA-Z]" (char input))
                                              (rf/dispatch [:word-input-add-letter (clojure.string/capitalize (char input))]))))

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

(defn calculate-ranking-text
  [points-ranking]
  (condp = points-ranking
    8 "Genius"
    7 "Amazing"
    6 "Great"
    5 "Nice"
    4 "Solid"
    3 "Good"
    2 "Moving Up"
    1 "Good Start"
    0 "Beginner"))

(rf/reg-event-db
 :calculate-ranking
 (fn [db [_ points]]
   (let [ranking (condp <= points
                   65 8
                   47 7
                   37 6
                   23 5
                   14 4
                   7  3
                   5  2
                   2  1
                   0  0)]
     (assoc db :points-ranking ranking))))

(rf/reg-event-fx
 :new-toast-alert
 (fn [{:keys [db]} [_ message]]
   {:db (assoc db :toast-message message)
    :dispatch [:show-toast]
    :timeout {:id :toast-message
              :event [:hide-toast]
              :time 3000}}))

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

(defn format-word [word]
  (let [word (reduce #(str %1 (first %2)) "" word)]
    (-> (clojure.string/trim word)
        (clojure.string/capitalize))))

(rf/reg-event-fx
 :insert-word
 (fn [{:keys [db]} [_ new-word]]
   (let [new-word (format-word new-word)]
     (cond
       (> (count (clojure.string/split new-word #"\s")) 1)
       {:dispatch [:new-toast-alert "ONE WORD ONLY"]}

       (some #{new-word} (:words-found db))
       {:dispatch [:new-toast-alert "WORD ALREADY EXISTS"]}

       (empty? new-word)
       {:dispatch [:new-toast-alert "EMPTY"]}

       (some (:allowed-words db) [(clojure.string/lower-case new-word)])
       {:db (assoc db :words-found (conj (:words-found db) new-word))
        :dispatch [:add-points new-word]}

       :else
       {:dispatch [:new-toast-alert "NOT ALLOWED"]}))))


;; -- Domino 3 - Effect Handling  -------------------------------------------------------

(rf/reg-fx
 :timeout
 (fn [{:keys [id event time]}]
   (when-some [existing (get @timeouts id)]
     (js/clearTimeout existing)
     (swap! timeouts dissoc id))
   (when (some? event)
     (swap! timeouts assoc id
            (js/setTimeout
             (fn []
               (rf/dispatch event))
             time)))))