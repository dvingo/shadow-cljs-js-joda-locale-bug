(ns browser.main
  (:require 
   ["@js-joda/core" :as js-joda]
   ["@js-joda/timezone"]
   ["@js-joda/locale_en-us" :as locale]))

(js/console.log "locale:" locale)

(defn init []
  (println "This is from the init function")
  (.appendChild (.-body js/document) (.createTextNode js/document "It works!")))
