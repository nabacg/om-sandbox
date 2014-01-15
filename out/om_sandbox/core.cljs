(ns om-sandbox.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defn hello-world-widget [data owner]
  (om/component
   (dom/div nil "Hello World")))

(om/root {} hello-world-widget (.getElementById js/document "some-id"))

;(. js/console (log "Hello world!"))
