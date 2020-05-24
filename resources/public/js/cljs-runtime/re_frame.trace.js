goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__62101){
var map__62102 = p__62101;
var map__62102__$1 = (((((!((map__62102 == null))))?(((((map__62102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62102):map__62102);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62102__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62102__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62102__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62102__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__62104_62131 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__62105_62132 = null;
var count__62106_62133 = (0);
var i__62107_62134 = (0);
while(true){
if((i__62107_62134 < count__62106_62133)){
var vec__62118_62135 = chunk__62105_62132.cljs$core$IIndexed$_nth$arity$2(null,i__62107_62134);
var k_62136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62118_62135,(0),null);
var cb_62137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62118_62135,(1),null);
try{var G__62122_62138 = cljs.core.deref(re_frame.trace.traces);
(cb_62137.cljs$core$IFn$_invoke$arity$1 ? cb_62137.cljs$core$IFn$_invoke$arity$1(G__62122_62138) : cb_62137.call(null,G__62122_62138));
}catch (e62121){var e_62139 = e62121;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_62136,"while storing",cljs.core.deref(re_frame.trace.traces),e_62139], 0));
}

var G__62140 = seq__62104_62131;
var G__62141 = chunk__62105_62132;
var G__62142 = count__62106_62133;
var G__62143 = (i__62107_62134 + (1));
seq__62104_62131 = G__62140;
chunk__62105_62132 = G__62141;
count__62106_62133 = G__62142;
i__62107_62134 = G__62143;
continue;
} else {
var temp__5735__auto___62144 = cljs.core.seq(seq__62104_62131);
if(temp__5735__auto___62144){
var seq__62104_62145__$1 = temp__5735__auto___62144;
if(cljs.core.chunked_seq_QMARK_(seq__62104_62145__$1)){
var c__4556__auto___62146 = cljs.core.chunk_first(seq__62104_62145__$1);
var G__62147 = cljs.core.chunk_rest(seq__62104_62145__$1);
var G__62148 = c__4556__auto___62146;
var G__62149 = cljs.core.count(c__4556__auto___62146);
var G__62150 = (0);
seq__62104_62131 = G__62147;
chunk__62105_62132 = G__62148;
count__62106_62133 = G__62149;
i__62107_62134 = G__62150;
continue;
} else {
var vec__62123_62151 = cljs.core.first(seq__62104_62145__$1);
var k_62152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62123_62151,(0),null);
var cb_62153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62123_62151,(1),null);
try{var G__62127_62154 = cljs.core.deref(re_frame.trace.traces);
(cb_62153.cljs$core$IFn$_invoke$arity$1 ? cb_62153.cljs$core$IFn$_invoke$arity$1(G__62127_62154) : cb_62153.call(null,G__62127_62154));
}catch (e62126){var e_62155 = e62126;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_62152,"while storing",cljs.core.deref(re_frame.trace.traces),e_62155], 0));
}

var G__62156 = cljs.core.next(seq__62104_62145__$1);
var G__62157 = null;
var G__62158 = (0);
var G__62159 = (0);
seq__62104_62131 = G__62156;
chunk__62105_62132 = G__62157;
count__62106_62133 = G__62158;
i__62107_62134 = G__62159;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
