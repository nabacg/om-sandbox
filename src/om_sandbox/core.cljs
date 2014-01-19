(ns main.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! chan put! dropping-buffer]]
            [goog.events :as events]
            [goog.events.EventType :as event-type]
            [goog.Timer :as timer]))

(enable-console-print!)

(defn hello-world-widget [data owner]
  (om/component
   (dom/div nil (str "Hello World" owner))))

(defn counter [data owner-component]
  (reify
    om/IInitState
    (init-state [_] {:number 0})
    om/IRender
    (render [_]
      (let [n (om/get-state owner-component :number)]
        (.log js/console "Rendering n: " n)
        (dom/div nil
                 (dom/h2 nil (:title data))
                 (dom/button
                  #js {:onClick #(om/set-state! owner-component :number (inc n))}
                  "Click Me!")
                 (dom/p nil (str "My State: " n)))))))

;(om/root {:title "My Counter"} counter (.getElementById js/document "some-id"))
;--------------------------------------------------------------------------------------
(def app-state (atom {:title "SR game" :rpm 0 :max-rpm 6000 :speed 0 :max-speed 300 :gear 0 :max-gear 6}))
(def timer-int (/ 1000 0.5))

(defn listen [element event-type]
  (let [out-channel (chan)]
    (events/listen element type
                   (fn [e] (put! out-channel e)))
    out-channel))

(defn get-new-value
  ([state state-key max-state-key] (get-new-value state state-key max-state-key inc))
  ([state state-key max-state-key inc-fn]
  (let [value (state state-key) max-value (state max-state-key)]
    
    (let [new-val (inc-fn value)]
      ;(.log js/console (str "New state " state-key " " new-val))
       (if (< new-val max-value)
         new-val
         value)))))

(defn calc-new-speed [speed rpm max-rpm]
  (if (= speed 0)
    35
    (let [rpm-ratio (/ rpm max-rpm)]
      (int
       (+ speed
          (* speed 0.2
             (+ (* rpm-ratio rpm-ratio -1) rpm-ratio)))))))

(defn init-timer [channel interval]
  (let [timer (goog.Timer. interval)]
    (events/listen
     timer goog.Timer/TICK
     (fn [e]
       (let [max-rpm (@app-state :max-rpm)
             new-rpm (get-new-value @app-state :rpm :max-rpm #(+ 100 %))
             new-speed (get-new-value
                        @app-state :speed :max-speed
                        #(calc-new-speed % new-rpm max-rpm))] ;so the
                                        ;formula tries to reduce the
                                        ;speed gain as we approach the max-rpm
         (swap! app-state (fn [prev-state]
                  (-> prev-state
                      (assoc :rpm new-rpm)
                      (assoc :speed new-speed))))
         (put! channel {:type :timer}))))
    (.start timer)
    timer))

;Uncaught Error: Assert failed: No more than 1024 pending puts are allowed on a single channel. C;onsider using a windowed buffer.
;(< (.-length puts) impl/MAX-QUEUE-SIZE) 
(defn init-user-input [channel]
  (events/listen js/window event-type/CLICK
                 (fn [e]
                   (let [new-gear (get-new-value @app-state :gear :max-gear)
                         new-rpm 0]
                     (swap! app-state (fn [prev-state]
                                        (-> prev-state
                                            (assoc :gear new-gear)
                                            (assoc :rpm new-rpm))))
                     (.log js/console "Gear pressed" new-gear)
                     (put! channel {:type :keyboard})))))

(defn start []
  (let [channel (chan (dropping-buffer 1))] ;declare some channels and create things that
                        ;will write to them!
    (om/root
     @app-state
     (fn [state component]
                                        ;this worked a bit better
       (init-timer channel timer-int)
     ;  (init-user-input channel)
       (reify
         om/IWillMount
         (will-mount [_]
           ;this will constantly listen on timer channel
           (go (while true
                 (let [msg (<! channel)] ;when msg arrives set
                                        ;component state
                   (let [rpm (@app-state :rpm)
                         speed (@app-state :speed)
                         gear (@app-state :gear)]
                     (.log js/console rpm speed gear)
                     (om/set-state! component :rpm rpm)
                     (om/set-state! component :speed speed)
                     (om/set-state! component :gear gear))))))
         om/IRender
         (render [_]
           (dom/div #js {:onClick (fn [e]
                   (let [new-gear (get-new-value @app-state :gear :max-gear)
                         new-rpm 0]
                     (swap! app-state (fn [prev-state]
                                        (-> prev-state
                                            (assoc :gear new-gear)
                                            (assoc :rpm new-rpm))))
                     (.log js/console "Gear pressed" new-gear)
                     (put! channel {:type :keyboard})))}
                    (dom/h2 nil "Your stats:")
                      ;we render current state
                      (dom/p nil (str :rpm " " (om/get-state component :rpm)))
                      (dom/p nil (str :speed " " (om/get-state component :speed)))
                      (dom/p nil (str :gear " " (om/get-state component :gear)))))))
     (.getElementById js/document "some-id"))))

(start)

;(om/root {} hello-world-widget (.getElementById js/document "some-id"))

;(. js/console (log "Hello world!"))
; (om/root initial-state-dictionary (fn [state-dictionary
; owner-component] returns-component-class)
                                        ; dom-object-to-render-component)
;(om/om/build-all component-fn) (om/build component-fn) <- serves
; dynamicaly building comp using state and function that creates
; single component 