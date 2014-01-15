(ns main.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

(defn hello-world-widget [data owner]
  (om/component
   (dom/div nil (str "Hello World" owner))))

(defn counter [data owner-control]
  (reify
    om/IInitState
    (init-state [_] {:number 0})
    om/IRender
    (render [_]
      (let [n (om/get-state owner-control :number)]
        (.log js/console "Rendering n: " n)
        (dom/div nil
                 (dom/h2 nil (:title data))
                 (dom/button
                  #js {:onClick #(om/set-state! owner-control :number (inc n))}
                  "Click Me!")
                 (dom/p nil (str "My State: " n)))))))

(om/root {:title "My Counter"} counter (.getElementById js/document "some-id"))
;(om/root {} hello-world-widget (.getElementById js/document "some-id"))

;(. js/console (log "Hello world!"))
