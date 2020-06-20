(ns word-game.subs
  (:require [reagent.dom]
            [re-frame.core :as rf]
            [word-game.events :as event]))

;; -- Domino 4 - Query  -------------------------------------------------------

(rf/reg-sub
 :words-found
 (fn [db _]
   (:words-found db)))

(rf/reg-sub
 :word-input
 (fn [db _]
   (:word-input db)))

(rf/reg-sub
 :toast-visibility
 (fn [db _]
   (:toast-visibility db)))

(rf/reg-sub
 :toast-message
 (fn [db _]
   (:toast-message db)))

(rf/reg-sub
 :letter-others
 (fn [db _]
   (:letter-others db)))

(rf/reg-sub
 :letter-core
 (fn [db _]
   (:letter-core db)))

(rf/reg-sub
 :modal-visibility
 (fn [db _]
   (:modal-visibility db)))

(rf/reg-sub
 :points
 (fn [db _]
   (:points db)))

(rf/reg-sub
 :points-ranking
 (fn [db _]
   (:points-ranking db)))

(rf/reg-sub
 :points-ranking-pairs
 (fn [db _]
   (:points-ranking-pairs db)))

;; Returns the required points for each rank
(rf/reg-sub
 :points-ranking-requirements
 (fn [_ _]
   (rf/subscribe [:points-ranking-pairs]))
 (fn [point-ranking-pairs _]
   (sort (mapv #(key %) point-ranking-pairs))))

;; Returns the rank text of current rank
(rf/reg-sub
 :rank-text
 (fn [_ _]
   [(rf/subscribe [:points])
    (rf/subscribe [:points-ranking-pairs])])
 (fn [[points point-ranking-pairs] _]
   (last (last (event/current-rank-info points point-ranking-pairs)))))