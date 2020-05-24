(defproject word-game "0.1.0-SNAPSHOT"

  :dependencies [[org.clojure/clojure       "1.10.1"]
                 [org.clojure/clojurescript "1.10.764"
                  :exclusions [com.google.javascript/closure-compiler-unshaded
                               org.clojure/google-closure-library
                               org.clojure/google-closure-library-third-party]]
                 [thheller/shadow-cljs      "2.8.110"]
                 ;; We repeat re-frame's own dependencies here as instead of
                 ;; depending on a re-frame artifact we add the re-frame source
                 ;; from this repository directly to the :source-paths.
                 [reagent                   "0.10.0"]
                 [re-frame "0.12.0"]]

  :plugins      [[lein-shadow          "0.2.0"]]

  :source-paths ["src"]

  :clean-targets ^{:protect false} [:target-path
                                    "shadow-cljs.edn"
                                    "resources/public/js"]

  :shadow-cljs {:nrepl  {:port 8777}

                :builds {:client {:target     :browser
                                  :output-dir "resources/public/js"
                                  :modules    {:client {:init-fn word-game.core/run}}
                                  :devtools   {:http-root "resources/public"
                                               :http-port 8280}}}}

  :aliases {"dev-auto" ["shadow" "watch" "client"]})
