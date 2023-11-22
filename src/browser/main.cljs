(ns browser.main
  (:require
   ["@js-joda/core" :refer [ZonedDateTime] :as js-joda]
   ["@js-joda/timezone/dist/js-joda-timezone-10-year-range"]
   ["@js-joda/locale_en-us" :as locale]
   ["@tanstack/react-query" :as rc :refer [QueryClient]]))

;; (js/console.log " joda locale: " Locale)
(def us-locale (. locale/Locale -US))
(js/console.log "US locale:" us-locale)
(js/console.log "today: " (. ZonedDateTime now))
(js/console.log "rc: " rc)
(js/console.log "QueryClient: " QueryClient)

(defn add-date []
  (let [zdt (.of ZonedDateTime 2016 1 1 0 0 0 0 (.of js-joda/ZoneId "Europe/Berlin"))
        formatter (.withLocale (.ofPattern js-joda/DateTimeFormatter "eeee MMMM dd yyyy GGGG, hh:mm:ss a zzzz, 'Week ' ww, 'Quarter ' QQQ") us-locale #_(.-US Locale))
        formatter-with-locale (.withLocale formatter us-locale #_(. Locale -US))
        date-str (str "en_US formatted str: " (.format zdt formatter-with-locale))]
    (.appendChild (.-body js/document)
                  (.createTextNode js/document (str "It works! \n " date-str)))))

(defn init []
  (println "This is from the init function ")
  (.appendChild (.-body js/document)
                (.createTextNode js/document (str "It works! ")))

  (add-date))
