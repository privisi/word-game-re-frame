(ns word-game.subs
  (:require [reagent.dom]
            [re-frame.core :as rf]))

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