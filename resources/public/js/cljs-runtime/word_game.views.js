goog.provide('word_game.views');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('clojure.string');
word_game.views.word_list = (function word_game$views$word_list(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#word-list","div#word-list",-154691835),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#f88"], null)], null),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.deref((function (){var G__42501 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words-found","words-found",-680970678)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42501) : re_frame.core.subscribe.call(null,G__42501));
})()))], null);
});
word_game.views.span_color = (function word_game$views$span_color(text,color){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join('')], null));
});
word_game.views.word_input = (function word_game$views$word_input(current_input){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#word-input","div#word-input",1394706443),"Word: ",(function (){var iter__4529__auto__ = (function word_game$views$word_input_$_iter__42502(s__42503){
return (new cljs.core.LazySeq(null,(function (){
var s__42503__$1 = s__42503;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42503__$1);
if(temp__5735__auto__){
var s__42503__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42503__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42503__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42505 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42504 = (0);
while(true){
if((i__42504 < size__4528__auto__)){
var vec__42506 = cljs.core._nth(c__4527__auto__,i__42504);
var letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42506,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42506,(1),null);
cljs.core.chunk_append(b__42505,word_game.views.span_color(letter,color));

var G__42538 = (i__42504 + (1));
i__42504 = G__42538;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42505),word_game$views$word_input_$_iter__42502(cljs.core.chunk_rest(s__42503__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42505),null);
}
} else {
var vec__42509 = cljs.core.first(s__42503__$2);
var letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42509,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42509,(1),null);
return cljs.core.cons(word_game.views.span_color(letter,color),word_game$views$word_input_$_iter__42502(cljs.core.rest(s__42503__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(current_input);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gold"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"blinker"], null),"|"], null)], null);
});
word_game.views.alert_toast = (function word_game$views$alert_toast(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#toast","div#toast",-962016760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref((function (){var G__42512 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toast-visibility","toast-visibility",1071157162)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42512) : re_frame.core.subscribe.call(null,G__42512));
})())], null),cljs.core.deref((function (){var G__42513 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toast-message","toast-message",-1838430128)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42513) : re_frame.core.subscribe.call(null,G__42513));
})())], null);
});
word_game.views.enter_button = (function word_game$views$enter_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__42514_42540 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert-word","insert-word",1259807519),cljs.core.deref((function (){var G__42515 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-input","word-input",-803037823)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42515) : re_frame.core.subscribe.call(null,G__42515));
})())], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42514_42540) : re_frame.core.dispatch.call(null,G__42514_42540));

var G__42516 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-word-input","clear-word-input",-483228827),""], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42516) : re_frame.core.dispatch.call(null,G__42516));
})], null),"Enter"], null);
});
word_game.views.delete_button = (function word_game$views$delete_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__42517 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-input-delete-letter","word-input-delete-letter",-33129363)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42517) : re_frame.core.dispatch.call(null,G__42517));
})], null),"Delete"], null);
});
word_game.views.shuffle_button = (function word_game$views$shuffle_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__42518 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shuffle-letters","shuffle-letters",-111702996)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42518) : re_frame.core.dispatch.call(null,G__42518));
})], null),"\uD83D\uDD00"], null);
});
/**
 * Returns a row of buttons with each corresponding letter from LETTERS
 */
word_game.views.create_letter_buttons = (function word_game$views$create_letter_buttons(letters){
var iter__4529__auto__ = (function word_game$views$create_letter_buttons_$_iter__42520(s__42521){
return (new cljs.core.LazySeq(null,(function (){
var s__42521__$1 = s__42521;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42521__$1);
if(temp__5735__auto__){
var s__42521__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42521__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42521__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42523 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42522 = (0);
while(true){
if((i__42522 < size__4528__auto__)){
var letter = cljs.core._nth(c__4527__auto__,i__42522);
cljs.core.chunk_append(b__42523,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42522,letter,c__4527__auto__,size__4528__auto__,b__42523,s__42521__$2,temp__5735__auto__){
return (function (p1__42519_SHARP_){
var G__42524_42542 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-input-add-letter","word-input-add-letter",52253262),letter], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42524_42542) : re_frame.core.dispatch.call(null,G__42524_42542));

return p1__42519_SHARP_.target.blur();
});})(i__42522,letter,c__4527__auto__,size__4528__auto__,b__42523,s__42521__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1)], null),letter], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),letter], null)));

var G__42543 = (i__42522 + (1));
i__42522 = G__42543;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42523),word_game$views$create_letter_buttons_$_iter__42520(cljs.core.chunk_rest(s__42521__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42523),null);
}
} else {
var letter = cljs.core.first(s__42521__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (letter,s__42521__$2,temp__5735__auto__){
return (function (p1__42519_SHARP_){
var G__42525_42544 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-input-add-letter","word-input-add-letter",52253262),letter], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42525_42544) : re_frame.core.dispatch.call(null,G__42525_42544));

return p1__42519_SHARP_.target.blur();
});})(letter,s__42521__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1)], null),letter], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),letter], null)),word_game$views$create_letter_buttons_$_iter__42520(cljs.core.rest(s__42521__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(letters);
});
word_game.views.available_letters = (function word_game$views$available_letters(letter_others,letter_core){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#letters","div#letters",-1736079973),word_game.views.create_letter_buttons(cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),letter_others)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#letters-core","div#letters-core",836073192),word_game.views.create_letter_buttons(letter_core)], null),word_game.views.create_letter_buttons(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),letter_others))], null);
});
word_game.views.points = (function word_game$views$points(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#points","div#points",1430802443),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Points: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__42527 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42527) : re_frame.core.subscribe.call(null,G__42527));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Current Ranking: ",word_game.events.calculate_ranking_text(cljs.core.deref((function (){var G__42529 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points-ranking","points-ranking",-1491027421)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42529) : re_frame.core.subscribe.call(null,G__42529));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(8),new cljs.core.Keyword(null,"steps","steps",-128433302),(1),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref((function (){var G__42530 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points-ranking","points-ranking",-1491027421)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42530) : re_frame.core.subscribe.call(null,G__42530));
})()),new cljs.core.Keyword(null,"class","class",-2030961996),"slider",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__42531 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-modal","show-modal",-11429385)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42531) : re_frame.core.dispatch.call(null,G__42531));
}),new cljs.core.Keyword(null,"read-only","read-only",-191706886),true], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sliderticks","div#sliderticks",-960492534),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(14)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(23)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(37)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(47)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(65)], null)], null)], null);
});
word_game.views.modal = (function word_game$views$modal(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),cljs.core.deref((function (){var G__42532 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal-visibility","modal-visibility",-1614794557)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42532) : re_frame.core.subscribe.call(null,G__42532));
})())], null)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"close",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__42533 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hide-modal","hide-modal",619662220)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42533) : re_frame.core.dispatch.call(null,G__42533));
})], null),"X"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Ranks are based on a percentage of possible points\n         in a puzzle.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"The minimum scores to reach \n         each rank for today\u2019s are:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Beginner (0)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Good Start (2)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Moving Up (5)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Good (7)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Solid (14)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Nice (23)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Great (37)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Amazing (47)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Genius (65)"], null)], null)], null);
});
word_game.views.words_found = (function word_game$views$words_found(words){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Words Found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(words))].join('')], null);
});
word_game.views.ui = (function word_game$views$ui(){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Word Game"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_game.views.alert_toast], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_game.views.word_input,cljs.core.deref((function (){var G__42534 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-input","word-input",-803037823)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42534) : re_frame.core.subscribe.call(null,G__42534));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_game.views.available_letters,cljs.core.deref((function (){var G__42535 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letter-others","letter-others",264849745)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42535) : re_frame.core.subscribe.call(null,G__42535));
})()),cljs.core.deref((function (){var G__42536 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letter-core","letter-core",1731173929)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42536) : re_frame.core.subscribe.call(null,G__42536));
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_game.views.enter_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_game.views.shuffle_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_game.views.delete_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_game.views.points], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_game.views.words_found,cljs.core.deref((function (){var G__42537 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words-found","words-found",-680970678)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42537) : re_frame.core.subscribe.call(null,G__42537));
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_game.views.word_list], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_game.views.modal], null)], null);
});

//# sourceMappingURL=word_game.views.js.map
