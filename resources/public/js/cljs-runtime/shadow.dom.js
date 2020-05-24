goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_59526 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_59526(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_59528 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_59528(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__58911 = coll;
var G__58912 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__58911,G__58912) : shadow.dom.lazy_native_coll_seq.call(null,G__58911,G__58912));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__58939 = arguments.length;
switch (G__58939) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__58945 = arguments.length;
switch (G__58945) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__58954 = arguments.length;
switch (G__58954) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__58962 = arguments.length;
switch (G__58962) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__58966 = arguments.length;
switch (G__58966) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__58978 = arguments.length;
switch (G__58978) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e58985){if((e58985 instanceof Object)){
var e = e58985;
return console.log("didnt support attachEvent",el,e);
} else {
throw e58985;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__58993 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__58994 = null;
var count__58995 = (0);
var i__58996 = (0);
while(true){
if((i__58996 < count__58995)){
var el = chunk__58994.cljs$core$IIndexed$_nth$arity$2(null,i__58996);
var handler_59559__$1 = ((function (seq__58993,chunk__58994,count__58995,i__58996,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__58993,chunk__58994,count__58995,i__58996,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_59559__$1);


var G__59562 = seq__58993;
var G__59563 = chunk__58994;
var G__59564 = count__58995;
var G__59565 = (i__58996 + (1));
seq__58993 = G__59562;
chunk__58994 = G__59563;
count__58995 = G__59564;
i__58996 = G__59565;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58993);
if(temp__5735__auto__){
var seq__58993__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58993__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58993__$1);
var G__59567 = cljs.core.chunk_rest(seq__58993__$1);
var G__59568 = c__4556__auto__;
var G__59569 = cljs.core.count(c__4556__auto__);
var G__59570 = (0);
seq__58993 = G__59567;
chunk__58994 = G__59568;
count__58995 = G__59569;
i__58996 = G__59570;
continue;
} else {
var el = cljs.core.first(seq__58993__$1);
var handler_59571__$1 = ((function (seq__58993,chunk__58994,count__58995,i__58996,el,seq__58993__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__58993,chunk__58994,count__58995,i__58996,el,seq__58993__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_59571__$1);


var G__59573 = cljs.core.next(seq__58993__$1);
var G__59574 = null;
var G__59575 = (0);
var G__59576 = (0);
seq__58993 = G__59573;
chunk__58994 = G__59574;
count__58995 = G__59575;
i__58996 = G__59576;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__59007 = arguments.length;
switch (G__59007) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__59013 = cljs.core.seq(events);
var chunk__59014 = null;
var count__59015 = (0);
var i__59016 = (0);
while(true){
if((i__59016 < count__59015)){
var vec__59028 = chunk__59014.cljs$core$IIndexed$_nth$arity$2(null,i__59016);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59028,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59028,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__59587 = seq__59013;
var G__59588 = chunk__59014;
var G__59589 = count__59015;
var G__59590 = (i__59016 + (1));
seq__59013 = G__59587;
chunk__59014 = G__59588;
count__59015 = G__59589;
i__59016 = G__59590;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59013);
if(temp__5735__auto__){
var seq__59013__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59013__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59013__$1);
var G__59593 = cljs.core.chunk_rest(seq__59013__$1);
var G__59594 = c__4556__auto__;
var G__59595 = cljs.core.count(c__4556__auto__);
var G__59596 = (0);
seq__59013 = G__59593;
chunk__59014 = G__59594;
count__59015 = G__59595;
i__59016 = G__59596;
continue;
} else {
var vec__59036 = cljs.core.first(seq__59013__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59036,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59036,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__59597 = cljs.core.next(seq__59013__$1);
var G__59598 = null;
var G__59599 = (0);
var G__59600 = (0);
seq__59013 = G__59597;
chunk__59014 = G__59598;
count__59015 = G__59599;
i__59016 = G__59600;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__59042 = cljs.core.seq(styles);
var chunk__59043 = null;
var count__59044 = (0);
var i__59045 = (0);
while(true){
if((i__59045 < count__59044)){
var vec__59056 = chunk__59043.cljs$core$IIndexed$_nth$arity$2(null,i__59045);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59056,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59056,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__59601 = seq__59042;
var G__59602 = chunk__59043;
var G__59603 = count__59044;
var G__59604 = (i__59045 + (1));
seq__59042 = G__59601;
chunk__59043 = G__59602;
count__59044 = G__59603;
i__59045 = G__59604;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59042);
if(temp__5735__auto__){
var seq__59042__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59042__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59042__$1);
var G__59606 = cljs.core.chunk_rest(seq__59042__$1);
var G__59607 = c__4556__auto__;
var G__59608 = cljs.core.count(c__4556__auto__);
var G__59609 = (0);
seq__59042 = G__59606;
chunk__59043 = G__59607;
count__59044 = G__59608;
i__59045 = G__59609;
continue;
} else {
var vec__59060 = cljs.core.first(seq__59042__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59060,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59060,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__59610 = cljs.core.next(seq__59042__$1);
var G__59611 = null;
var G__59612 = (0);
var G__59613 = (0);
seq__59042 = G__59610;
chunk__59043 = G__59611;
count__59044 = G__59612;
i__59045 = G__59613;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__59064_59615 = key;
var G__59064_59616__$1 = (((G__59064_59615 instanceof cljs.core.Keyword))?G__59064_59615.fqn:null);
switch (G__59064_59616__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_59624 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_59624,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_59624,"aria-");
}
})())){
el.setAttribute(ks_59624,value);
} else {
(el[ks_59624] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__59070){
var map__59071 = p__59070;
var map__59071__$1 = (((((!((map__59071 == null))))?(((((map__59071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59071):map__59071);
var props = map__59071__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59071__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__59075 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59075,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59075,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59075,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__59079 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__59079,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__59079;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__59083 = arguments.length;
switch (G__59083) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__59089){
var vec__59090 = p__59089;
var seq__59091 = cljs.core.seq(vec__59090);
var first__59092 = cljs.core.first(seq__59091);
var seq__59091__$1 = cljs.core.next(seq__59091);
var nn = first__59092;
var first__59092__$1 = cljs.core.first(seq__59091__$1);
var seq__59091__$2 = cljs.core.next(seq__59091__$1);
var np = first__59092__$1;
var nc = seq__59091__$2;
var node = vec__59090;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59095 = nn;
var G__59096 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__59095,G__59096) : create_fn.call(null,G__59095,G__59096));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59097 = nn;
var G__59098 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__59097,G__59098) : create_fn.call(null,G__59097,G__59098));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__59103 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59103,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59103,(1),null);
var seq__59106_59635 = cljs.core.seq(node_children);
var chunk__59107_59636 = null;
var count__59108_59637 = (0);
var i__59109_59638 = (0);
while(true){
if((i__59109_59638 < count__59108_59637)){
var child_struct_59639 = chunk__59107_59636.cljs$core$IIndexed$_nth$arity$2(null,i__59109_59638);
var children_59640 = shadow.dom.dom_node(child_struct_59639);
if(cljs.core.seq_QMARK_(children_59640)){
var seq__59141_59641 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_59640));
var chunk__59143_59642 = null;
var count__59144_59643 = (0);
var i__59145_59644 = (0);
while(true){
if((i__59145_59644 < count__59144_59643)){
var child_59645 = chunk__59143_59642.cljs$core$IIndexed$_nth$arity$2(null,i__59145_59644);
if(cljs.core.truth_(child_59645)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59645);


var G__59646 = seq__59141_59641;
var G__59647 = chunk__59143_59642;
var G__59648 = count__59144_59643;
var G__59649 = (i__59145_59644 + (1));
seq__59141_59641 = G__59646;
chunk__59143_59642 = G__59647;
count__59144_59643 = G__59648;
i__59145_59644 = G__59649;
continue;
} else {
var G__59650 = seq__59141_59641;
var G__59651 = chunk__59143_59642;
var G__59652 = count__59144_59643;
var G__59653 = (i__59145_59644 + (1));
seq__59141_59641 = G__59650;
chunk__59143_59642 = G__59651;
count__59144_59643 = G__59652;
i__59145_59644 = G__59653;
continue;
}
} else {
var temp__5735__auto___59654 = cljs.core.seq(seq__59141_59641);
if(temp__5735__auto___59654){
var seq__59141_59655__$1 = temp__5735__auto___59654;
if(cljs.core.chunked_seq_QMARK_(seq__59141_59655__$1)){
var c__4556__auto___59656 = cljs.core.chunk_first(seq__59141_59655__$1);
var G__59657 = cljs.core.chunk_rest(seq__59141_59655__$1);
var G__59658 = c__4556__auto___59656;
var G__59659 = cljs.core.count(c__4556__auto___59656);
var G__59660 = (0);
seq__59141_59641 = G__59657;
chunk__59143_59642 = G__59658;
count__59144_59643 = G__59659;
i__59145_59644 = G__59660;
continue;
} else {
var child_59662 = cljs.core.first(seq__59141_59655__$1);
if(cljs.core.truth_(child_59662)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59662);


var G__59664 = cljs.core.next(seq__59141_59655__$1);
var G__59665 = null;
var G__59666 = (0);
var G__59667 = (0);
seq__59141_59641 = G__59664;
chunk__59143_59642 = G__59665;
count__59144_59643 = G__59666;
i__59145_59644 = G__59667;
continue;
} else {
var G__59669 = cljs.core.next(seq__59141_59655__$1);
var G__59670 = null;
var G__59671 = (0);
var G__59672 = (0);
seq__59141_59641 = G__59669;
chunk__59143_59642 = G__59670;
count__59144_59643 = G__59671;
i__59145_59644 = G__59672;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_59640);
}


var G__59673 = seq__59106_59635;
var G__59674 = chunk__59107_59636;
var G__59675 = count__59108_59637;
var G__59676 = (i__59109_59638 + (1));
seq__59106_59635 = G__59673;
chunk__59107_59636 = G__59674;
count__59108_59637 = G__59675;
i__59109_59638 = G__59676;
continue;
} else {
var temp__5735__auto___59677 = cljs.core.seq(seq__59106_59635);
if(temp__5735__auto___59677){
var seq__59106_59679__$1 = temp__5735__auto___59677;
if(cljs.core.chunked_seq_QMARK_(seq__59106_59679__$1)){
var c__4556__auto___59680 = cljs.core.chunk_first(seq__59106_59679__$1);
var G__59681 = cljs.core.chunk_rest(seq__59106_59679__$1);
var G__59682 = c__4556__auto___59680;
var G__59683 = cljs.core.count(c__4556__auto___59680);
var G__59684 = (0);
seq__59106_59635 = G__59681;
chunk__59107_59636 = G__59682;
count__59108_59637 = G__59683;
i__59109_59638 = G__59684;
continue;
} else {
var child_struct_59686 = cljs.core.first(seq__59106_59679__$1);
var children_59687 = shadow.dom.dom_node(child_struct_59686);
if(cljs.core.seq_QMARK_(children_59687)){
var seq__59159_59688 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_59687));
var chunk__59161_59689 = null;
var count__59162_59691 = (0);
var i__59163_59692 = (0);
while(true){
if((i__59163_59692 < count__59162_59691)){
var child_59693 = chunk__59161_59689.cljs$core$IIndexed$_nth$arity$2(null,i__59163_59692);
if(cljs.core.truth_(child_59693)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59693);


var G__59694 = seq__59159_59688;
var G__59695 = chunk__59161_59689;
var G__59696 = count__59162_59691;
var G__59697 = (i__59163_59692 + (1));
seq__59159_59688 = G__59694;
chunk__59161_59689 = G__59695;
count__59162_59691 = G__59696;
i__59163_59692 = G__59697;
continue;
} else {
var G__59698 = seq__59159_59688;
var G__59699 = chunk__59161_59689;
var G__59700 = count__59162_59691;
var G__59701 = (i__59163_59692 + (1));
seq__59159_59688 = G__59698;
chunk__59161_59689 = G__59699;
count__59162_59691 = G__59700;
i__59163_59692 = G__59701;
continue;
}
} else {
var temp__5735__auto___59702__$1 = cljs.core.seq(seq__59159_59688);
if(temp__5735__auto___59702__$1){
var seq__59159_59703__$1 = temp__5735__auto___59702__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59159_59703__$1)){
var c__4556__auto___59704 = cljs.core.chunk_first(seq__59159_59703__$1);
var G__59705 = cljs.core.chunk_rest(seq__59159_59703__$1);
var G__59706 = c__4556__auto___59704;
var G__59707 = cljs.core.count(c__4556__auto___59704);
var G__59708 = (0);
seq__59159_59688 = G__59705;
chunk__59161_59689 = G__59706;
count__59162_59691 = G__59707;
i__59163_59692 = G__59708;
continue;
} else {
var child_59709 = cljs.core.first(seq__59159_59703__$1);
if(cljs.core.truth_(child_59709)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59709);


var G__59710 = cljs.core.next(seq__59159_59703__$1);
var G__59711 = null;
var G__59712 = (0);
var G__59713 = (0);
seq__59159_59688 = G__59710;
chunk__59161_59689 = G__59711;
count__59162_59691 = G__59712;
i__59163_59692 = G__59713;
continue;
} else {
var G__59714 = cljs.core.next(seq__59159_59703__$1);
var G__59715 = null;
var G__59716 = (0);
var G__59717 = (0);
seq__59159_59688 = G__59714;
chunk__59161_59689 = G__59715;
count__59162_59691 = G__59716;
i__59163_59692 = G__59717;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_59687);
}


var G__59718 = cljs.core.next(seq__59106_59679__$1);
var G__59719 = null;
var G__59720 = (0);
var G__59721 = (0);
seq__59106_59635 = G__59718;
chunk__59107_59636 = G__59719;
count__59108_59637 = G__59720;
i__59109_59638 = G__59721;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__59179 = cljs.core.seq(node);
var chunk__59180 = null;
var count__59181 = (0);
var i__59182 = (0);
while(true){
if((i__59182 < count__59181)){
var n = chunk__59180.cljs$core$IIndexed$_nth$arity$2(null,i__59182);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__59725 = seq__59179;
var G__59726 = chunk__59180;
var G__59727 = count__59181;
var G__59728 = (i__59182 + (1));
seq__59179 = G__59725;
chunk__59180 = G__59726;
count__59181 = G__59727;
i__59182 = G__59728;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59179);
if(temp__5735__auto__){
var seq__59179__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59179__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59179__$1);
var G__59729 = cljs.core.chunk_rest(seq__59179__$1);
var G__59730 = c__4556__auto__;
var G__59731 = cljs.core.count(c__4556__auto__);
var G__59732 = (0);
seq__59179 = G__59729;
chunk__59180 = G__59730;
count__59181 = G__59731;
i__59182 = G__59732;
continue;
} else {
var n = cljs.core.first(seq__59179__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__59733 = cljs.core.next(seq__59179__$1);
var G__59734 = null;
var G__59735 = (0);
var G__59736 = (0);
seq__59179 = G__59733;
chunk__59180 = G__59734;
count__59181 = G__59735;
i__59182 = G__59736;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__59190 = arguments.length;
switch (G__59190) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__59192 = arguments.length;
switch (G__59192) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__59198 = arguments.length;
switch (G__59198) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59748 = arguments.length;
var i__4737__auto___59749 = (0);
while(true){
if((i__4737__auto___59749 < len__4736__auto___59748)){
args__4742__auto__.push((arguments[i__4737__auto___59749]));

var G__59750 = (i__4737__auto___59749 + (1));
i__4737__auto___59749 = G__59750;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__59220_59751 = cljs.core.seq(nodes);
var chunk__59221_59752 = null;
var count__59222_59753 = (0);
var i__59223_59754 = (0);
while(true){
if((i__59223_59754 < count__59222_59753)){
var node_59755 = chunk__59221_59752.cljs$core$IIndexed$_nth$arity$2(null,i__59223_59754);
fragment.appendChild(shadow.dom._to_dom(node_59755));


var G__59756 = seq__59220_59751;
var G__59757 = chunk__59221_59752;
var G__59758 = count__59222_59753;
var G__59759 = (i__59223_59754 + (1));
seq__59220_59751 = G__59756;
chunk__59221_59752 = G__59757;
count__59222_59753 = G__59758;
i__59223_59754 = G__59759;
continue;
} else {
var temp__5735__auto___59760 = cljs.core.seq(seq__59220_59751);
if(temp__5735__auto___59760){
var seq__59220_59761__$1 = temp__5735__auto___59760;
if(cljs.core.chunked_seq_QMARK_(seq__59220_59761__$1)){
var c__4556__auto___59762 = cljs.core.chunk_first(seq__59220_59761__$1);
var G__59763 = cljs.core.chunk_rest(seq__59220_59761__$1);
var G__59764 = c__4556__auto___59762;
var G__59765 = cljs.core.count(c__4556__auto___59762);
var G__59766 = (0);
seq__59220_59751 = G__59763;
chunk__59221_59752 = G__59764;
count__59222_59753 = G__59765;
i__59223_59754 = G__59766;
continue;
} else {
var node_59767 = cljs.core.first(seq__59220_59761__$1);
fragment.appendChild(shadow.dom._to_dom(node_59767));


var G__59768 = cljs.core.next(seq__59220_59761__$1);
var G__59769 = null;
var G__59770 = (0);
var G__59771 = (0);
seq__59220_59751 = G__59768;
chunk__59221_59752 = G__59769;
count__59222_59753 = G__59770;
i__59223_59754 = G__59771;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq59215){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59215));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__59236_59772 = cljs.core.seq(scripts);
var chunk__59237_59773 = null;
var count__59238_59774 = (0);
var i__59239_59775 = (0);
while(true){
if((i__59239_59775 < count__59238_59774)){
var vec__59251_59776 = chunk__59237_59773.cljs$core$IIndexed$_nth$arity$2(null,i__59239_59775);
var script_tag_59777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59251_59776,(0),null);
var script_body_59778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59251_59776,(1),null);
eval(script_body_59778);


var G__59779 = seq__59236_59772;
var G__59780 = chunk__59237_59773;
var G__59781 = count__59238_59774;
var G__59782 = (i__59239_59775 + (1));
seq__59236_59772 = G__59779;
chunk__59237_59773 = G__59780;
count__59238_59774 = G__59781;
i__59239_59775 = G__59782;
continue;
} else {
var temp__5735__auto___59783 = cljs.core.seq(seq__59236_59772);
if(temp__5735__auto___59783){
var seq__59236_59784__$1 = temp__5735__auto___59783;
if(cljs.core.chunked_seq_QMARK_(seq__59236_59784__$1)){
var c__4556__auto___59785 = cljs.core.chunk_first(seq__59236_59784__$1);
var G__59786 = cljs.core.chunk_rest(seq__59236_59784__$1);
var G__59787 = c__4556__auto___59785;
var G__59788 = cljs.core.count(c__4556__auto___59785);
var G__59789 = (0);
seq__59236_59772 = G__59786;
chunk__59237_59773 = G__59787;
count__59238_59774 = G__59788;
i__59239_59775 = G__59789;
continue;
} else {
var vec__59255_59790 = cljs.core.first(seq__59236_59784__$1);
var script_tag_59791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59255_59790,(0),null);
var script_body_59792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59255_59790,(1),null);
eval(script_body_59792);


var G__59796 = cljs.core.next(seq__59236_59784__$1);
var G__59797 = null;
var G__59798 = (0);
var G__59799 = (0);
seq__59236_59772 = G__59796;
chunk__59237_59773 = G__59797;
count__59238_59774 = G__59798;
i__59239_59775 = G__59799;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__59259){
var vec__59260 = p__59259;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59260,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59260,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__59268 = arguments.length;
switch (G__59268) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__59274 = cljs.core.seq(style_keys);
var chunk__59275 = null;
var count__59276 = (0);
var i__59277 = (0);
while(true){
if((i__59277 < count__59276)){
var it = chunk__59275.cljs$core$IIndexed$_nth$arity$2(null,i__59277);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__59801 = seq__59274;
var G__59802 = chunk__59275;
var G__59803 = count__59276;
var G__59804 = (i__59277 + (1));
seq__59274 = G__59801;
chunk__59275 = G__59802;
count__59276 = G__59803;
i__59277 = G__59804;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59274);
if(temp__5735__auto__){
var seq__59274__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59274__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59274__$1);
var G__59805 = cljs.core.chunk_rest(seq__59274__$1);
var G__59806 = c__4556__auto__;
var G__59807 = cljs.core.count(c__4556__auto__);
var G__59808 = (0);
seq__59274 = G__59805;
chunk__59275 = G__59806;
count__59276 = G__59807;
i__59277 = G__59808;
continue;
} else {
var it = cljs.core.first(seq__59274__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__59812 = cljs.core.next(seq__59274__$1);
var G__59813 = null;
var G__59814 = (0);
var G__59815 = (0);
seq__59274 = G__59812;
chunk__59275 = G__59813;
count__59276 = G__59814;
i__59277 = G__59815;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k59281,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__59286 = k59281;
var G__59286__$1 = (((G__59286 instanceof cljs.core.Keyword))?G__59286.fqn:null);
switch (G__59286__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59281,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__59288){
var vec__59289 = p__59288;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59289,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59289,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59280){
var self__ = this;
var G__59280__$1 = this;
return (new cljs.core.RecordIter((0),G__59280__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59282,other59283){
var self__ = this;
var this59282__$1 = this;
return (((!((other59283 == null)))) && ((this59282__$1.constructor === other59283.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59282__$1.x,other59283.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59282__$1.y,other59283.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59282__$1.__extmap,other59283.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__59280){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__59293 = cljs.core.keyword_identical_QMARK_;
var expr__59294 = k__4388__auto__;
if(cljs.core.truth_((pred__59293.cljs$core$IFn$_invoke$arity$2 ? pred__59293.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__59294) : pred__59293.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__59294)))){
return (new shadow.dom.Coordinate(G__59280,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__59293.cljs$core$IFn$_invoke$arity$2 ? pred__59293.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__59294) : pred__59293.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__59294)))){
return (new shadow.dom.Coordinate(self__.x,G__59280,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__59280),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__59280){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__59280,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__59284){
var extmap__4419__auto__ = (function (){var G__59305 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__59284,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__59284)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59305);
} else {
return G__59305;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__59284),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__59284),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k59313,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__59320 = k59313;
var G__59320__$1 = (((G__59320 instanceof cljs.core.Keyword))?G__59320.fqn:null);
switch (G__59320__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59313,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__59324){
var vec__59325 = p__59324;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59325,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59325,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59312){
var self__ = this;
var G__59312__$1 = this;
return (new cljs.core.RecordIter((0),G__59312__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59314,other59315){
var self__ = this;
var this59314__$1 = this;
return (((!((other59315 == null)))) && ((this59314__$1.constructor === other59315.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59314__$1.w,other59315.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59314__$1.h,other59315.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59314__$1.__extmap,other59315.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__59312){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__59337 = cljs.core.keyword_identical_QMARK_;
var expr__59338 = k__4388__auto__;
if(cljs.core.truth_((pred__59337.cljs$core$IFn$_invoke$arity$2 ? pred__59337.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__59338) : pred__59337.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__59338)))){
return (new shadow.dom.Size(G__59312,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__59337.cljs$core$IFn$_invoke$arity$2 ? pred__59337.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__59338) : pred__59337.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__59338)))){
return (new shadow.dom.Size(self__.w,G__59312,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__59312),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__59312){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__59312,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__59317){
var extmap__4419__auto__ = (function (){var G__59344 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__59317,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__59317)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59344);
} else {
return G__59344;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__59317),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__59317),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__59835 = (i + (1));
var G__59836 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__59835;
ret = G__59836;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59363){
var vec__59364 = p__59363;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59364,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59364,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__59370 = arguments.length;
switch (G__59370) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__59841 = ps;
var G__59842 = (i + (1));
el__$1 = G__59841;
i = G__59842;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__59395 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59395,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59395,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59395,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__59400_59846 = cljs.core.seq(props);
var chunk__59401_59847 = null;
var count__59402_59848 = (0);
var i__59403_59849 = (0);
while(true){
if((i__59403_59849 < count__59402_59848)){
var vec__59419_59850 = chunk__59401_59847.cljs$core$IIndexed$_nth$arity$2(null,i__59403_59849);
var k_59851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59419_59850,(0),null);
var v_59852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59419_59850,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_59851);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_59851),v_59852);


var G__59853 = seq__59400_59846;
var G__59854 = chunk__59401_59847;
var G__59855 = count__59402_59848;
var G__59856 = (i__59403_59849 + (1));
seq__59400_59846 = G__59853;
chunk__59401_59847 = G__59854;
count__59402_59848 = G__59855;
i__59403_59849 = G__59856;
continue;
} else {
var temp__5735__auto___59858 = cljs.core.seq(seq__59400_59846);
if(temp__5735__auto___59858){
var seq__59400_59862__$1 = temp__5735__auto___59858;
if(cljs.core.chunked_seq_QMARK_(seq__59400_59862__$1)){
var c__4556__auto___59863 = cljs.core.chunk_first(seq__59400_59862__$1);
var G__59864 = cljs.core.chunk_rest(seq__59400_59862__$1);
var G__59865 = c__4556__auto___59863;
var G__59866 = cljs.core.count(c__4556__auto___59863);
var G__59867 = (0);
seq__59400_59846 = G__59864;
chunk__59401_59847 = G__59865;
count__59402_59848 = G__59866;
i__59403_59849 = G__59867;
continue;
} else {
var vec__59422_59868 = cljs.core.first(seq__59400_59862__$1);
var k_59869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59422_59868,(0),null);
var v_59870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59422_59868,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_59869);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_59869),v_59870);


var G__59871 = cljs.core.next(seq__59400_59862__$1);
var G__59872 = null;
var G__59873 = (0);
var G__59874 = (0);
seq__59400_59846 = G__59871;
chunk__59401_59847 = G__59872;
count__59402_59848 = G__59873;
i__59403_59849 = G__59874;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__59426 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59426,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59426,(1),null);
var seq__59429_59875 = cljs.core.seq(node_children);
var chunk__59431_59876 = null;
var count__59432_59877 = (0);
var i__59433_59878 = (0);
while(true){
if((i__59433_59878 < count__59432_59877)){
var child_struct_59879 = chunk__59431_59876.cljs$core$IIndexed$_nth$arity$2(null,i__59433_59878);
if((!((child_struct_59879 == null)))){
if(typeof child_struct_59879 === 'string'){
var text_59880 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_59880),child_struct_59879].join(''));
} else {
var children_59881 = shadow.dom.svg_node(child_struct_59879);
if(cljs.core.seq_QMARK_(children_59881)){
var seq__59451_59882 = cljs.core.seq(children_59881);
var chunk__59453_59883 = null;
var count__59454_59884 = (0);
var i__59455_59885 = (0);
while(true){
if((i__59455_59885 < count__59454_59884)){
var child_59886 = chunk__59453_59883.cljs$core$IIndexed$_nth$arity$2(null,i__59455_59885);
if(cljs.core.truth_(child_59886)){
node.appendChild(child_59886);


var G__59887 = seq__59451_59882;
var G__59888 = chunk__59453_59883;
var G__59889 = count__59454_59884;
var G__59890 = (i__59455_59885 + (1));
seq__59451_59882 = G__59887;
chunk__59453_59883 = G__59888;
count__59454_59884 = G__59889;
i__59455_59885 = G__59890;
continue;
} else {
var G__59891 = seq__59451_59882;
var G__59892 = chunk__59453_59883;
var G__59893 = count__59454_59884;
var G__59894 = (i__59455_59885 + (1));
seq__59451_59882 = G__59891;
chunk__59453_59883 = G__59892;
count__59454_59884 = G__59893;
i__59455_59885 = G__59894;
continue;
}
} else {
var temp__5735__auto___59895 = cljs.core.seq(seq__59451_59882);
if(temp__5735__auto___59895){
var seq__59451_59896__$1 = temp__5735__auto___59895;
if(cljs.core.chunked_seq_QMARK_(seq__59451_59896__$1)){
var c__4556__auto___59897 = cljs.core.chunk_first(seq__59451_59896__$1);
var G__59898 = cljs.core.chunk_rest(seq__59451_59896__$1);
var G__59899 = c__4556__auto___59897;
var G__59900 = cljs.core.count(c__4556__auto___59897);
var G__59901 = (0);
seq__59451_59882 = G__59898;
chunk__59453_59883 = G__59899;
count__59454_59884 = G__59900;
i__59455_59885 = G__59901;
continue;
} else {
var child_59902 = cljs.core.first(seq__59451_59896__$1);
if(cljs.core.truth_(child_59902)){
node.appendChild(child_59902);


var G__59903 = cljs.core.next(seq__59451_59896__$1);
var G__59904 = null;
var G__59905 = (0);
var G__59906 = (0);
seq__59451_59882 = G__59903;
chunk__59453_59883 = G__59904;
count__59454_59884 = G__59905;
i__59455_59885 = G__59906;
continue;
} else {
var G__59907 = cljs.core.next(seq__59451_59896__$1);
var G__59908 = null;
var G__59909 = (0);
var G__59910 = (0);
seq__59451_59882 = G__59907;
chunk__59453_59883 = G__59908;
count__59454_59884 = G__59909;
i__59455_59885 = G__59910;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_59881);
}
}


var G__59911 = seq__59429_59875;
var G__59912 = chunk__59431_59876;
var G__59913 = count__59432_59877;
var G__59914 = (i__59433_59878 + (1));
seq__59429_59875 = G__59911;
chunk__59431_59876 = G__59912;
count__59432_59877 = G__59913;
i__59433_59878 = G__59914;
continue;
} else {
var G__59915 = seq__59429_59875;
var G__59916 = chunk__59431_59876;
var G__59917 = count__59432_59877;
var G__59918 = (i__59433_59878 + (1));
seq__59429_59875 = G__59915;
chunk__59431_59876 = G__59916;
count__59432_59877 = G__59917;
i__59433_59878 = G__59918;
continue;
}
} else {
var temp__5735__auto___59919 = cljs.core.seq(seq__59429_59875);
if(temp__5735__auto___59919){
var seq__59429_59920__$1 = temp__5735__auto___59919;
if(cljs.core.chunked_seq_QMARK_(seq__59429_59920__$1)){
var c__4556__auto___59921 = cljs.core.chunk_first(seq__59429_59920__$1);
var G__59922 = cljs.core.chunk_rest(seq__59429_59920__$1);
var G__59923 = c__4556__auto___59921;
var G__59924 = cljs.core.count(c__4556__auto___59921);
var G__59925 = (0);
seq__59429_59875 = G__59922;
chunk__59431_59876 = G__59923;
count__59432_59877 = G__59924;
i__59433_59878 = G__59925;
continue;
} else {
var child_struct_59926 = cljs.core.first(seq__59429_59920__$1);
if((!((child_struct_59926 == null)))){
if(typeof child_struct_59926 === 'string'){
var text_59927 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_59927),child_struct_59926].join(''));
} else {
var children_59930 = shadow.dom.svg_node(child_struct_59926);
if(cljs.core.seq_QMARK_(children_59930)){
var seq__59466_59931 = cljs.core.seq(children_59930);
var chunk__59468_59932 = null;
var count__59469_59933 = (0);
var i__59470_59934 = (0);
while(true){
if((i__59470_59934 < count__59469_59933)){
var child_59935 = chunk__59468_59932.cljs$core$IIndexed$_nth$arity$2(null,i__59470_59934);
if(cljs.core.truth_(child_59935)){
node.appendChild(child_59935);


var G__59936 = seq__59466_59931;
var G__59937 = chunk__59468_59932;
var G__59938 = count__59469_59933;
var G__59939 = (i__59470_59934 + (1));
seq__59466_59931 = G__59936;
chunk__59468_59932 = G__59937;
count__59469_59933 = G__59938;
i__59470_59934 = G__59939;
continue;
} else {
var G__59940 = seq__59466_59931;
var G__59941 = chunk__59468_59932;
var G__59942 = count__59469_59933;
var G__59943 = (i__59470_59934 + (1));
seq__59466_59931 = G__59940;
chunk__59468_59932 = G__59941;
count__59469_59933 = G__59942;
i__59470_59934 = G__59943;
continue;
}
} else {
var temp__5735__auto___59944__$1 = cljs.core.seq(seq__59466_59931);
if(temp__5735__auto___59944__$1){
var seq__59466_59945__$1 = temp__5735__auto___59944__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59466_59945__$1)){
var c__4556__auto___59946 = cljs.core.chunk_first(seq__59466_59945__$1);
var G__59947 = cljs.core.chunk_rest(seq__59466_59945__$1);
var G__59948 = c__4556__auto___59946;
var G__59949 = cljs.core.count(c__4556__auto___59946);
var G__59950 = (0);
seq__59466_59931 = G__59947;
chunk__59468_59932 = G__59948;
count__59469_59933 = G__59949;
i__59470_59934 = G__59950;
continue;
} else {
var child_59952 = cljs.core.first(seq__59466_59945__$1);
if(cljs.core.truth_(child_59952)){
node.appendChild(child_59952);


var G__59953 = cljs.core.next(seq__59466_59945__$1);
var G__59954 = null;
var G__59955 = (0);
var G__59956 = (0);
seq__59466_59931 = G__59953;
chunk__59468_59932 = G__59954;
count__59469_59933 = G__59955;
i__59470_59934 = G__59956;
continue;
} else {
var G__59957 = cljs.core.next(seq__59466_59945__$1);
var G__59958 = null;
var G__59959 = (0);
var G__59960 = (0);
seq__59466_59931 = G__59957;
chunk__59468_59932 = G__59958;
count__59469_59933 = G__59959;
i__59470_59934 = G__59960;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_59930);
}
}


var G__59961 = cljs.core.next(seq__59429_59920__$1);
var G__59962 = null;
var G__59963 = (0);
var G__59964 = (0);
seq__59429_59875 = G__59961;
chunk__59431_59876 = G__59962;
count__59432_59877 = G__59963;
i__59433_59878 = G__59964;
continue;
} else {
var G__59965 = cljs.core.next(seq__59429_59920__$1);
var G__59966 = null;
var G__59967 = (0);
var G__59968 = (0);
seq__59429_59875 = G__59965;
chunk__59431_59876 = G__59966;
count__59432_59877 = G__59967;
i__59433_59878 = G__59968;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59969 = arguments.length;
var i__4737__auto___59970 = (0);
while(true){
if((i__4737__auto___59970 < len__4736__auto___59969)){
args__4742__auto__.push((arguments[i__4737__auto___59970]));

var G__59971 = (i__4737__auto___59970 + (1));
i__4737__auto___59970 = G__59971;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq59482){
var G__59483 = cljs.core.first(seq59482);
var seq59482__$1 = cljs.core.next(seq59482);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59483,seq59482__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__59489 = arguments.length;
switch (G__59489) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__57217__auto___59974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57218__auto__ = (function (){var switch__57181__auto__ = (function (state_59503){
var state_val_59504 = (state_59503[(1)]);
if((state_val_59504 === (1))){
var state_59503__$1 = state_59503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59503__$1,(2),once_or_cleanup);
} else {
if((state_val_59504 === (2))){
var inst_59499 = (state_59503[(2)]);
var inst_59500 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_59503__$1 = (function (){var statearr_59507 = state_59503;
(statearr_59507[(7)] = inst_59499);

return statearr_59507;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59503__$1,inst_59500);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__57182__auto__ = null;
var shadow$dom$state_machine__57182__auto____0 = (function (){
var statearr_59510 = [null,null,null,null,null,null,null,null];
(statearr_59510[(0)] = shadow$dom$state_machine__57182__auto__);

(statearr_59510[(1)] = (1));

return statearr_59510;
});
var shadow$dom$state_machine__57182__auto____1 = (function (state_59503){
while(true){
var ret_value__57183__auto__ = (function (){try{while(true){
var result__57184__auto__ = switch__57181__auto__(state_59503);
if(cljs.core.keyword_identical_QMARK_(result__57184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57184__auto__;
}
break;
}
}catch (e59511){var ex__57185__auto__ = e59511;
var statearr_59512_59976 = state_59503;
(statearr_59512_59976[(2)] = ex__57185__auto__);


if(cljs.core.seq((state_59503[(4)]))){
var statearr_59513_59977 = state_59503;
(statearr_59513_59977[(1)] = cljs.core.first((state_59503[(4)])));

} else {
throw ex__57185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59978 = state_59503;
state_59503 = G__59978;
continue;
} else {
return ret_value__57183__auto__;
}
break;
}
});
shadow$dom$state_machine__57182__auto__ = function(state_59503){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__57182__auto____0.call(this);
case 1:
return shadow$dom$state_machine__57182__auto____1.call(this,state_59503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__57182__auto____0;
shadow$dom$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__57182__auto____1;
return shadow$dom$state_machine__57182__auto__;
})()
})();
var state__57219__auto__ = (function (){var statearr_59517 = f__57218__auto__();
(statearr_59517[(6)] = c__57217__auto___59974);

return statearr_59517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57219__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
