
shadow.cljs.devtools.client.env.module_loaded('client');

try { word_game.core.run(); } catch (e) { console.error("An error occurred when calling (word-game.core/run)"); throw(e); }