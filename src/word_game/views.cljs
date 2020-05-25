(ns word-game.views
  (:require [reagent.dom]
            [re-frame.core :as rf]
            [clojure.string :as str]))


;; -- Domino 5 - View Functions ----------------------------------------------

(defn word-list
  []
  [:div#word-list
   {:style {:color "#f88"}}
   (->>
    @(rf/subscribe [:words-found])
    (clojure.string/join " "))])

(defn span-color
  [text color]
  ^{:key (str text color (rand))} [:span {:style {:color color}} text])

(defn word-input
  [current-input]
  [:div#word-input
   "Word: "
   (for [[letter color] current-input]
     (span-color letter color))
   [:span {:style {:color "gold"}
           :class "blinker"} "|"]])

(defn alert-toast
  []
  [:div#toast {:class @(rf/subscribe [:toast-visibility])} @(rf/subscribe [:toast-message])])

(defn enter-button
  []
  [:button
   {:on-click #(do (rf/dispatch [:insert-word @(rf/subscribe [:word-input])])
                   (rf/dispatch [:clear-word-input ""]))}
   "Enter"])

(defn delete-button
  []
  [:button
   {:on-click #(rf/dispatch [:word-input-delete-letter])}
   "Delete"])

(defn shuffle-button
  []
  [:button
   {:on-click #(rf/dispatch [:shuffle-letters])}
   "🔀"])

(defn create-letter-buttons
  "Returns a row of buttons with each corresponding letter from LETTERS"
  [letters]
  (for [letter letters]
    ^{:key letter} [:button
                    {:on-click #(do (rf/dispatch [:word-input-add-letter letter])
                                    (.blur (-> % .-target)))
                     :tab-index -1}
                    letter]))

(defn available-letters
  [letter-others letter-core]
  [:div#letters
   (create-letter-buttons (take 3 letter-others))
   [:div#letters-core (create-letter-buttons letter-core)]
   (create-letter-buttons (drop 3 letter-others))])

(defn points
  []
  [:div#points
   [:p (str "Points: " @(rf/subscribe [:points]))]
   [:p (str "Current Ranking: " (word-game.events/calculate-ranking-text @(rf/subscribe [:points-ranking])))]
   [:input {:type "range" :min 0 :max 8 :steps 1
            :value @(rf/subscribe [:points-ranking])
            :class "slider"
            :on-click #(rf/dispatch [:show-modal])
            :read-only true}]
   [:div#sliderticks
    [:p 0]
    [:p 2]
    [:p 5]
    [:p 7]
    [:p 14]
    [:p 23]
    [:p 37]
    [:p 47]
    [:p 65]]])

(defn modal
  []
  [:div {:class "modal"
         :style {:display @(rf/subscribe [:modal-visibility])}}
   [:div {:class "modal-content"}
    [:span {:class "close"
            :on-click #(rf/dispatch [:hide-modal])}
     "X"]
    [:p "Ranks are based on a percentage of possible points
         in a puzzle." [:br] "The minimum scores to reach 
         each rank for today’s are:" [:br]]
    [:p "Beginner (0)"]
    [:p "Good Start (2)"]
    [:p "Moving Up (5)"]
    [:p "Good (7)"]
    [:p "Solid (14)"]
    [:p "Nice (23)"]
    [:p "Great (37)"]
    [:p "Amazing (47)"]
    [:p "Genius (65)"]]])

(defn words-found [words]
  [:p (str "Words Found: " (count words))])

(defn ui
  []
  [:div
   [:h1 "Word Game"]
   [alert-toast]
   [word-input @(rf/subscribe [:word-input])]
   [available-letters @(rf/subscribe [:letter-others])
                      @(rf/subscribe [:letter-core])]
   [enter-button]
   [shuffle-button]
   [delete-button]
   [points]
   [words-found @(rf/subscribe [:words-found])]
   [word-list]
   [modal]])