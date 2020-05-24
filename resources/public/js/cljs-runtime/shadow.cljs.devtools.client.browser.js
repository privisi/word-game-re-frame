goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60898 = arguments.length;
var i__4737__auto___60899 = (0);
while(true){
if((i__4737__auto___60899 < len__4736__auto___60898)){
args__4742__auto__.push((arguments[i__4737__auto___60899]));

var G__60900 = (i__4737__auto___60899 + (1));
i__4737__auto___60899 = G__60900;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq60772){
var G__60773 = cljs.core.first(seq60772);
var seq60772__$1 = cljs.core.next(seq60772);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60773,seq60772__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__60774 = cljs.core.seq(sources);
var chunk__60775 = null;
var count__60776 = (0);
var i__60777 = (0);
while(true){
if((i__60777 < count__60776)){
var map__60784 = chunk__60775.cljs$core$IIndexed$_nth$arity$2(null,i__60777);
var map__60784__$1 = (((((!((map__60784 == null))))?(((((map__60784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60784):map__60784);
var src = map__60784__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60784__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60784__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60784__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60784__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e60786){var e_60901 = e60786;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_60901);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_60901.message)].join('')));
}

var G__60902 = seq__60774;
var G__60903 = chunk__60775;
var G__60904 = count__60776;
var G__60905 = (i__60777 + (1));
seq__60774 = G__60902;
chunk__60775 = G__60903;
count__60776 = G__60904;
i__60777 = G__60905;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60774);
if(temp__5735__auto__){
var seq__60774__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60774__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60774__$1);
var G__60906 = cljs.core.chunk_rest(seq__60774__$1);
var G__60907 = c__4556__auto__;
var G__60908 = cljs.core.count(c__4556__auto__);
var G__60909 = (0);
seq__60774 = G__60906;
chunk__60775 = G__60907;
count__60776 = G__60908;
i__60777 = G__60909;
continue;
} else {
var map__60787 = cljs.core.first(seq__60774__$1);
var map__60787__$1 = (((((!((map__60787 == null))))?(((((map__60787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60787):map__60787);
var src = map__60787__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60787__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60787__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60787__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60787__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e60789){var e_60910 = e60789;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_60910);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_60910.message)].join('')));
}

var G__60911 = cljs.core.next(seq__60774__$1);
var G__60912 = null;
var G__60913 = (0);
var G__60914 = (0);
seq__60774 = G__60911;
chunk__60775 = G__60912;
count__60776 = G__60913;
i__60777 = G__60914;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__60790 = cljs.core.seq(js_requires);
var chunk__60791 = null;
var count__60792 = (0);
var i__60793 = (0);
while(true){
if((i__60793 < count__60792)){
var js_ns = chunk__60791.cljs$core$IIndexed$_nth$arity$2(null,i__60793);
var require_str_60915 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_60915);


var G__60916 = seq__60790;
var G__60917 = chunk__60791;
var G__60918 = count__60792;
var G__60919 = (i__60793 + (1));
seq__60790 = G__60916;
chunk__60791 = G__60917;
count__60792 = G__60918;
i__60793 = G__60919;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60790);
if(temp__5735__auto__){
var seq__60790__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60790__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60790__$1);
var G__60920 = cljs.core.chunk_rest(seq__60790__$1);
var G__60921 = c__4556__auto__;
var G__60922 = cljs.core.count(c__4556__auto__);
var G__60923 = (0);
seq__60790 = G__60920;
chunk__60791 = G__60921;
count__60792 = G__60922;
i__60793 = G__60923;
continue;
} else {
var js_ns = cljs.core.first(seq__60790__$1);
var require_str_60924 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_60924);


var G__60925 = cljs.core.next(seq__60790__$1);
var G__60926 = null;
var G__60927 = (0);
var G__60928 = (0);
seq__60790 = G__60925;
chunk__60791 = G__60926;
count__60792 = G__60927;
i__60793 = G__60928;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__60794 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__60794) : callback.call(null,G__60794));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__60796){
var map__60797 = p__60796;
var map__60797__$1 = (((((!((map__60797 == null))))?(((((map__60797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60797):map__60797);
var msg = map__60797__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60797__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60797__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60799(s__60800){
return (new cljs.core.LazySeq(null,(function (){
var s__60800__$1 = s__60800;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60800__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__60805 = cljs.core.first(xs__6292__auto__);
var map__60805__$1 = (((((!((map__60805 == null))))?(((((map__60805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60805):map__60805);
var src = map__60805__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60805__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60805__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__60800__$1,map__60805,map__60805__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60797,map__60797__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60799_$_iter__60801(s__60802){
return (new cljs.core.LazySeq(null,((function (s__60800__$1,map__60805,map__60805__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60797,map__60797__$1,msg,info,reload_info){
return (function (){
var s__60802__$1 = s__60802;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60802__$1);
if(temp__5735__auto____$1){
var s__60802__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60802__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60802__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60804 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60803 = (0);
while(true){
if((i__60803 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__60803);
cljs.core.chunk_append(b__60804,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__60929 = (i__60803 + (1));
i__60803 = G__60929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60804),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60799_$_iter__60801(cljs.core.chunk_rest(s__60802__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60804),null);
}
} else {
var warning = cljs.core.first(s__60802__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60799_$_iter__60801(cljs.core.rest(s__60802__$2)));
}
} else {
return null;
}
break;
}
});})(s__60800__$1,map__60805,map__60805__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60797,map__60797__$1,msg,info,reload_info))
,null,null));
});})(s__60800__$1,map__60805,map__60805__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60797,map__60797__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60799(cljs.core.rest(s__60800__$1)));
} else {
var G__60930 = cljs.core.rest(s__60800__$1);
s__60800__$1 = G__60930;
continue;
}
} else {
var G__60931 = cljs.core.rest(s__60800__$1);
s__60800__$1 = G__60931;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__60807_60932 = cljs.core.seq(warnings);
var chunk__60808_60933 = null;
var count__60809_60934 = (0);
var i__60810_60935 = (0);
while(true){
if((i__60810_60935 < count__60809_60934)){
var map__60815_60936 = chunk__60808_60933.cljs$core$IIndexed$_nth$arity$2(null,i__60810_60935);
var map__60815_60937__$1 = (((((!((map__60815_60936 == null))))?(((((map__60815_60936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60815_60936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60815_60936):map__60815_60936);
var w_60938 = map__60815_60937__$1;
var msg_60939__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60815_60937__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_60940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60815_60937__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_60941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60815_60937__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_60942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60815_60937__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_60942)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_60940),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_60941),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_60939__$1)].join(''));


var G__60943 = seq__60807_60932;
var G__60944 = chunk__60808_60933;
var G__60945 = count__60809_60934;
var G__60946 = (i__60810_60935 + (1));
seq__60807_60932 = G__60943;
chunk__60808_60933 = G__60944;
count__60809_60934 = G__60945;
i__60810_60935 = G__60946;
continue;
} else {
var temp__5735__auto___60947 = cljs.core.seq(seq__60807_60932);
if(temp__5735__auto___60947){
var seq__60807_60948__$1 = temp__5735__auto___60947;
if(cljs.core.chunked_seq_QMARK_(seq__60807_60948__$1)){
var c__4556__auto___60949 = cljs.core.chunk_first(seq__60807_60948__$1);
var G__60950 = cljs.core.chunk_rest(seq__60807_60948__$1);
var G__60951 = c__4556__auto___60949;
var G__60952 = cljs.core.count(c__4556__auto___60949);
var G__60953 = (0);
seq__60807_60932 = G__60950;
chunk__60808_60933 = G__60951;
count__60809_60934 = G__60952;
i__60810_60935 = G__60953;
continue;
} else {
var map__60817_60954 = cljs.core.first(seq__60807_60948__$1);
var map__60817_60955__$1 = (((((!((map__60817_60954 == null))))?(((((map__60817_60954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60817_60954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60817_60954):map__60817_60954);
var w_60956 = map__60817_60955__$1;
var msg_60957__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60817_60955__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_60958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60817_60955__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_60959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60817_60955__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_60960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60817_60955__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_60960)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_60958),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_60959),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_60957__$1)].join(''));


var G__60961 = cljs.core.next(seq__60807_60948__$1);
var G__60962 = null;
var G__60963 = (0);
var G__60964 = (0);
seq__60807_60932 = G__60961;
chunk__60808_60933 = G__60962;
count__60809_60934 = G__60963;
i__60810_60935 = G__60964;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__60795_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__60795_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__60819){
var map__60820 = p__60819;
var map__60820__$1 = (((((!((map__60820 == null))))?(((((map__60820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60820):map__60820);
var msg = map__60820__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60820__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__60822 = cljs.core.seq(updates);
var chunk__60824 = null;
var count__60825 = (0);
var i__60826 = (0);
while(true){
if((i__60826 < count__60825)){
var path = chunk__60824.cljs$core$IIndexed$_nth$arity$2(null,i__60826);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__60852_60965 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__60855_60966 = null;
var count__60856_60967 = (0);
var i__60857_60968 = (0);
while(true){
if((i__60857_60968 < count__60856_60967)){
var node_60969 = chunk__60855_60966.cljs$core$IIndexed$_nth$arity$2(null,i__60857_60968);
var path_match_60970 = shadow.cljs.devtools.client.browser.match_paths(node_60969.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60970)){
var new_link_60971 = (function (){var G__60862 = node_60969.cloneNode(true);
G__60862.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60970),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60862;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60970], 0));

goog.dom.insertSiblingAfter(new_link_60971,node_60969);

goog.dom.removeNode(node_60969);


var G__60972 = seq__60852_60965;
var G__60973 = chunk__60855_60966;
var G__60974 = count__60856_60967;
var G__60975 = (i__60857_60968 + (1));
seq__60852_60965 = G__60972;
chunk__60855_60966 = G__60973;
count__60856_60967 = G__60974;
i__60857_60968 = G__60975;
continue;
} else {
var G__60976 = seq__60852_60965;
var G__60977 = chunk__60855_60966;
var G__60978 = count__60856_60967;
var G__60979 = (i__60857_60968 + (1));
seq__60852_60965 = G__60976;
chunk__60855_60966 = G__60977;
count__60856_60967 = G__60978;
i__60857_60968 = G__60979;
continue;
}
} else {
var temp__5735__auto___60980 = cljs.core.seq(seq__60852_60965);
if(temp__5735__auto___60980){
var seq__60852_60981__$1 = temp__5735__auto___60980;
if(cljs.core.chunked_seq_QMARK_(seq__60852_60981__$1)){
var c__4556__auto___60982 = cljs.core.chunk_first(seq__60852_60981__$1);
var G__60983 = cljs.core.chunk_rest(seq__60852_60981__$1);
var G__60984 = c__4556__auto___60982;
var G__60985 = cljs.core.count(c__4556__auto___60982);
var G__60986 = (0);
seq__60852_60965 = G__60983;
chunk__60855_60966 = G__60984;
count__60856_60967 = G__60985;
i__60857_60968 = G__60986;
continue;
} else {
var node_60987 = cljs.core.first(seq__60852_60981__$1);
var path_match_60988 = shadow.cljs.devtools.client.browser.match_paths(node_60987.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60988)){
var new_link_60989 = (function (){var G__60863 = node_60987.cloneNode(true);
G__60863.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60988),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60863;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60988], 0));

goog.dom.insertSiblingAfter(new_link_60989,node_60987);

goog.dom.removeNode(node_60987);


var G__60990 = cljs.core.next(seq__60852_60981__$1);
var G__60991 = null;
var G__60992 = (0);
var G__60993 = (0);
seq__60852_60965 = G__60990;
chunk__60855_60966 = G__60991;
count__60856_60967 = G__60992;
i__60857_60968 = G__60993;
continue;
} else {
var G__60994 = cljs.core.next(seq__60852_60981__$1);
var G__60995 = null;
var G__60996 = (0);
var G__60997 = (0);
seq__60852_60965 = G__60994;
chunk__60855_60966 = G__60995;
count__60856_60967 = G__60996;
i__60857_60968 = G__60997;
continue;
}
}
} else {
}
}
break;
}


var G__60998 = seq__60822;
var G__60999 = chunk__60824;
var G__61000 = count__60825;
var G__61001 = (i__60826 + (1));
seq__60822 = G__60998;
chunk__60824 = G__60999;
count__60825 = G__61000;
i__60826 = G__61001;
continue;
} else {
var G__61002 = seq__60822;
var G__61003 = chunk__60824;
var G__61004 = count__60825;
var G__61005 = (i__60826 + (1));
seq__60822 = G__61002;
chunk__60824 = G__61003;
count__60825 = G__61004;
i__60826 = G__61005;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60822);
if(temp__5735__auto__){
var seq__60822__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60822__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60822__$1);
var G__61006 = cljs.core.chunk_rest(seq__60822__$1);
var G__61007 = c__4556__auto__;
var G__61008 = cljs.core.count(c__4556__auto__);
var G__61009 = (0);
seq__60822 = G__61006;
chunk__60824 = G__61007;
count__60825 = G__61008;
i__60826 = G__61009;
continue;
} else {
var path = cljs.core.first(seq__60822__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__60864_61010 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__60867_61011 = null;
var count__60868_61012 = (0);
var i__60869_61013 = (0);
while(true){
if((i__60869_61013 < count__60868_61012)){
var node_61014 = chunk__60867_61011.cljs$core$IIndexed$_nth$arity$2(null,i__60869_61013);
var path_match_61015 = shadow.cljs.devtools.client.browser.match_paths(node_61014.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61015)){
var new_link_61016 = (function (){var G__60874 = node_61014.cloneNode(true);
G__60874.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61015),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60874;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61015], 0));

goog.dom.insertSiblingAfter(new_link_61016,node_61014);

goog.dom.removeNode(node_61014);


var G__61017 = seq__60864_61010;
var G__61018 = chunk__60867_61011;
var G__61019 = count__60868_61012;
var G__61020 = (i__60869_61013 + (1));
seq__60864_61010 = G__61017;
chunk__60867_61011 = G__61018;
count__60868_61012 = G__61019;
i__60869_61013 = G__61020;
continue;
} else {
var G__61021 = seq__60864_61010;
var G__61022 = chunk__60867_61011;
var G__61023 = count__60868_61012;
var G__61024 = (i__60869_61013 + (1));
seq__60864_61010 = G__61021;
chunk__60867_61011 = G__61022;
count__60868_61012 = G__61023;
i__60869_61013 = G__61024;
continue;
}
} else {
var temp__5735__auto___61025__$1 = cljs.core.seq(seq__60864_61010);
if(temp__5735__auto___61025__$1){
var seq__60864_61026__$1 = temp__5735__auto___61025__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60864_61026__$1)){
var c__4556__auto___61027 = cljs.core.chunk_first(seq__60864_61026__$1);
var G__61028 = cljs.core.chunk_rest(seq__60864_61026__$1);
var G__61029 = c__4556__auto___61027;
var G__61030 = cljs.core.count(c__4556__auto___61027);
var G__61031 = (0);
seq__60864_61010 = G__61028;
chunk__60867_61011 = G__61029;
count__60868_61012 = G__61030;
i__60869_61013 = G__61031;
continue;
} else {
var node_61032 = cljs.core.first(seq__60864_61026__$1);
var path_match_61033 = shadow.cljs.devtools.client.browser.match_paths(node_61032.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61033)){
var new_link_61034 = (function (){var G__60875 = node_61032.cloneNode(true);
G__60875.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61033),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60875;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61033], 0));

goog.dom.insertSiblingAfter(new_link_61034,node_61032);

goog.dom.removeNode(node_61032);


var G__61035 = cljs.core.next(seq__60864_61026__$1);
var G__61036 = null;
var G__61037 = (0);
var G__61038 = (0);
seq__60864_61010 = G__61035;
chunk__60867_61011 = G__61036;
count__60868_61012 = G__61037;
i__60869_61013 = G__61038;
continue;
} else {
var G__61039 = cljs.core.next(seq__60864_61026__$1);
var G__61040 = null;
var G__61041 = (0);
var G__61042 = (0);
seq__60864_61010 = G__61039;
chunk__60867_61011 = G__61040;
count__60868_61012 = G__61041;
i__60869_61013 = G__61042;
continue;
}
}
} else {
}
}
break;
}


var G__61043 = cljs.core.next(seq__60822__$1);
var G__61044 = null;
var G__61045 = (0);
var G__61046 = (0);
seq__60822 = G__61043;
chunk__60824 = G__61044;
count__60825 = G__61045;
i__60826 = G__61046;
continue;
} else {
var G__61047 = cljs.core.next(seq__60822__$1);
var G__61048 = null;
var G__61049 = (0);
var G__61050 = (0);
seq__60822 = G__61047;
chunk__60824 = G__61048;
count__60825 = G__61049;
i__60826 = G__61050;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__60876){
var map__60877 = p__60876;
var map__60877__$1 = (((((!((map__60877 == null))))?(((((map__60877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60877):map__60877);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60877__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60877__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__60879,done){
var map__60880 = p__60879;
var map__60880__$1 = (((((!((map__60880 == null))))?(((((map__60880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60880):map__60880);
var msg = map__60880__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60880__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60880__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60880__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60880__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__60882){
var map__60883 = p__60882;
var map__60883__$1 = (((((!((map__60883 == null))))?(((((map__60883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60883):map__60883);
var src = map__60883__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60883__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e60885){var e = e60885;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__60886,done){
var map__60887 = p__60886;
var map__60887__$1 = (((((!((map__60887 == null))))?(((((map__60887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60887):map__60887);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60887__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60887__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__60889){
var map__60890 = p__60889;
var map__60890__$1 = (((((!((map__60890 == null))))?(((((map__60890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60890):map__60890);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60890__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60890__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__60892,done){
var map__60893 = p__60892;
var map__60893__$1 = (((((!((map__60893 == null))))?(((((map__60893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60893):map__60893);
var msg = map__60893__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60893__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__60895_61051 = type;
var G__60895_61052__$1 = (((G__60895_61051 instanceof cljs.core.Keyword))?G__60895_61051.fqn:null);
switch (G__60895_61052__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__60896 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__60896.cljs$core$IFn$_invoke$arity$1 ? fexpr__60896.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__60896.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4126__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e60897){var e = e60897;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___61060 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___61060)){
var s_61061 = temp__5735__auto___61060;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_61061.onclose = (function (e){
return null;
}));

s_61061.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

if(cljs.core.truth_(goog.global.window)){
window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = goog.global.document;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",goog.global.document.readyState);
} else {
return and__4115__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
