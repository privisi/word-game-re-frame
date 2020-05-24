goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__62351 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__62352 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__62352);

try{try{var seq__62354 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__62355 = null;
var count__62356 = (0);
var i__62357 = (0);
while(true){
if((i__62357 < count__62356)){
var vec__62367 = chunk__62355.cljs$core$IIndexed$_nth$arity$2(null,i__62357);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62367,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62367,(1),null);
var temp__5733__auto___62429 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___62429)){
var effect_fn_62430 = temp__5733__auto___62429;
(effect_fn_62430.cljs$core$IFn$_invoke$arity$1 ? effect_fn_62430.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_62430.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__62431 = seq__62354;
var G__62432 = chunk__62355;
var G__62433 = count__62356;
var G__62434 = (i__62357 + (1));
seq__62354 = G__62431;
chunk__62355 = G__62432;
count__62356 = G__62433;
i__62357 = G__62434;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62354);
if(temp__5735__auto__){
var seq__62354__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62354__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62354__$1);
var G__62435 = cljs.core.chunk_rest(seq__62354__$1);
var G__62436 = c__4556__auto__;
var G__62437 = cljs.core.count(c__4556__auto__);
var G__62438 = (0);
seq__62354 = G__62435;
chunk__62355 = G__62436;
count__62356 = G__62437;
i__62357 = G__62438;
continue;
} else {
var vec__62372 = cljs.core.first(seq__62354__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62372,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62372,(1),null);
var temp__5733__auto___62439 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___62439)){
var effect_fn_62440 = temp__5733__auto___62439;
(effect_fn_62440.cljs$core$IFn$_invoke$arity$1 ? effect_fn_62440.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_62440.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__62441 = cljs.core.next(seq__62354__$1);
var G__62442 = null;
var G__62443 = (0);
var G__62444 = (0);
seq__62354 = G__62441;
chunk__62355 = G__62442;
count__62356 = G__62443;
i__62357 = G__62444;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__62081__auto___62445 = re_frame.interop.now();
var duration__62082__auto___62446 = (end__62081__auto___62445 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__62082__auto___62446,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__62081__auto___62445);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__62351);
}} else {
var seq__62376 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__62377 = null;
var count__62378 = (0);
var i__62379 = (0);
while(true){
if((i__62379 < count__62378)){
var vec__62387 = chunk__62377.cljs$core$IIndexed$_nth$arity$2(null,i__62379);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62387,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62387,(1),null);
var temp__5733__auto___62447 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___62447)){
var effect_fn_62448 = temp__5733__auto___62447;
(effect_fn_62448.cljs$core$IFn$_invoke$arity$1 ? effect_fn_62448.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_62448.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__62449 = seq__62376;
var G__62450 = chunk__62377;
var G__62451 = count__62378;
var G__62452 = (i__62379 + (1));
seq__62376 = G__62449;
chunk__62377 = G__62450;
count__62378 = G__62451;
i__62379 = G__62452;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62376);
if(temp__5735__auto__){
var seq__62376__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62376__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62376__$1);
var G__62453 = cljs.core.chunk_rest(seq__62376__$1);
var G__62454 = c__4556__auto__;
var G__62455 = cljs.core.count(c__4556__auto__);
var G__62456 = (0);
seq__62376 = G__62453;
chunk__62377 = G__62454;
count__62378 = G__62455;
i__62379 = G__62456;
continue;
} else {
var vec__62390 = cljs.core.first(seq__62376__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62390,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62390,(1),null);
var temp__5733__auto___62457 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___62457)){
var effect_fn_62458 = temp__5733__auto___62457;
(effect_fn_62458.cljs$core$IFn$_invoke$arity$1 ? effect_fn_62458.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_62458.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__62459 = cljs.core.next(seq__62376__$1);
var G__62460 = null;
var G__62461 = (0);
var G__62462 = (0);
seq__62376 = G__62459;
chunk__62377 = G__62460;
count__62378 = G__62461;
i__62379 = G__62462;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__62393 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__62394 = null;
var count__62395 = (0);
var i__62396 = (0);
while(true){
if((i__62396 < count__62395)){
var map__62404 = chunk__62394.cljs$core$IIndexed$_nth$arity$2(null,i__62396);
var map__62404__$1 = (((((!((map__62404 == null))))?(((((map__62404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62404):map__62404);
var effect = map__62404__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62404__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62404__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__62393,chunk__62394,count__62395,i__62396,map__62404,map__62404__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__62393,chunk__62394,count__62395,i__62396,map__62404,map__62404__$1,effect,ms,dispatch))
,ms);
}


var G__62463 = seq__62393;
var G__62464 = chunk__62394;
var G__62465 = count__62395;
var G__62466 = (i__62396 + (1));
seq__62393 = G__62463;
chunk__62394 = G__62464;
count__62395 = G__62465;
i__62396 = G__62466;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62393);
if(temp__5735__auto__){
var seq__62393__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62393__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62393__$1);
var G__62467 = cljs.core.chunk_rest(seq__62393__$1);
var G__62468 = c__4556__auto__;
var G__62469 = cljs.core.count(c__4556__auto__);
var G__62470 = (0);
seq__62393 = G__62467;
chunk__62394 = G__62468;
count__62395 = G__62469;
i__62396 = G__62470;
continue;
} else {
var map__62407 = cljs.core.first(seq__62393__$1);
var map__62407__$1 = (((((!((map__62407 == null))))?(((((map__62407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62407):map__62407);
var effect = map__62407__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62407__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62407__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__62393,chunk__62394,count__62395,i__62396,map__62407,map__62407__$1,effect,ms,dispatch,seq__62393__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__62393,chunk__62394,count__62395,i__62396,map__62407,map__62407__$1,effect,ms,dispatch,seq__62393__$1,temp__5735__auto__))
,ms);
}


var G__62471 = cljs.core.next(seq__62393__$1);
var G__62472 = null;
var G__62473 = (0);
var G__62474 = (0);
seq__62393 = G__62471;
chunk__62394 = G__62472;
count__62395 = G__62473;
i__62396 = G__62474;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__62421 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__62422 = null;
var count__62423 = (0);
var i__62424 = (0);
while(true){
if((i__62424 < count__62423)){
var event = chunk__62422.cljs$core$IIndexed$_nth$arity$2(null,i__62424);
re_frame.router.dispatch(event);


var G__62475 = seq__62421;
var G__62476 = chunk__62422;
var G__62477 = count__62423;
var G__62478 = (i__62424 + (1));
seq__62421 = G__62475;
chunk__62422 = G__62476;
count__62423 = G__62477;
i__62424 = G__62478;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62421);
if(temp__5735__auto__){
var seq__62421__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62421__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62421__$1);
var G__62479 = cljs.core.chunk_rest(seq__62421__$1);
var G__62480 = c__4556__auto__;
var G__62481 = cljs.core.count(c__4556__auto__);
var G__62482 = (0);
seq__62421 = G__62479;
chunk__62422 = G__62480;
count__62423 = G__62481;
i__62424 = G__62482;
continue;
} else {
var event = cljs.core.first(seq__62421__$1);
re_frame.router.dispatch(event);


var G__62483 = cljs.core.next(seq__62421__$1);
var G__62484 = null;
var G__62485 = (0);
var G__62486 = (0);
seq__62421 = G__62483;
chunk__62422 = G__62484;
count__62423 = G__62485;
i__62424 = G__62486;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__62425 = cljs.core.seq(value);
var chunk__62426 = null;
var count__62427 = (0);
var i__62428 = (0);
while(true){
if((i__62428 < count__62427)){
var event = chunk__62426.cljs$core$IIndexed$_nth$arity$2(null,i__62428);
clear_event(event);


var G__62487 = seq__62425;
var G__62488 = chunk__62426;
var G__62489 = count__62427;
var G__62490 = (i__62428 + (1));
seq__62425 = G__62487;
chunk__62426 = G__62488;
count__62427 = G__62489;
i__62428 = G__62490;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62425);
if(temp__5735__auto__){
var seq__62425__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62425__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62425__$1);
var G__62491 = cljs.core.chunk_rest(seq__62425__$1);
var G__62492 = c__4556__auto__;
var G__62493 = cljs.core.count(c__4556__auto__);
var G__62494 = (0);
seq__62425 = G__62491;
chunk__62426 = G__62492;
count__62427 = G__62493;
i__62428 = G__62494;
continue;
} else {
var event = cljs.core.first(seq__62425__$1);
clear_event(event);


var G__62495 = cljs.core.next(seq__62425__$1);
var G__62496 = null;
var G__62497 = (0);
var G__62498 = (0);
seq__62425 = G__62495;
chunk__62426 = G__62496;
count__62427 = G__62497;
i__62428 = G__62498;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
