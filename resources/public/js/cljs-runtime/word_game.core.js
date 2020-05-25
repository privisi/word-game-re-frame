goog.provide('word_game.core');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('word_game.events');
goog.require('word_game.subs');
goog.require('word_game.views');
word_game.core.render = (function word_game$core$render(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_game.views.ui], null),document.getElementById("app"));
});
word_game.core.clear_cache_and_render_BANG_ = (function word_game$core$clear_cache_and_render_BANG_(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return word_game.core.render();
});
word_game.core.run = (function word_game$core$run(){
var G__42539_42541 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__42539_42541) : re_frame.core.dispatch_sync.call(null,G__42539_42541));

return word_game.core.render();
});

//# sourceMappingURL=word_game.core.js.map
