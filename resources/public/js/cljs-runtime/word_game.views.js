goog.provide('word_game.views');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('clojure.string');
word_game.views.word_list = (function word_game$views$word_list(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#word-list","div#word-list",-154691835),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#f88"], null)], null),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.deref((function (){var G__66636 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words-found","words-found",-680970678)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__66636) : re_frame.core.subscribe.call(null,G__66636));
})()))], null);
});
word_game.views.span_color = (function word_game$views$span_color(text,color){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join('')], null));
});
word_game.views.word_input = (function word_game$views$word_input(current_input){
var iter__4529__auto__ = (function word_game$views$word_input_$_iter__66637(s__66638){
return (new cljs.core.LazySeq(null,(function (){
var s__66638__$1 = s__66638;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__66638__$1);
if(temp__5735__auto__){
var s__66638__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66638__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__66638__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__66640 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__66639 = (0);
while(true){
if((i__66639 < size__4528__auto__)){
var vec__66641 = cljs.core._nth(c__4527__auto__,i__66639);
var letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66641,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66641,(1),null);
cljs.core.chunk_append(b__66640,word_game.views.span_color(letter,color));

var G__66683 = (i__66639 + (1));
i__66639 = G__66683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66640),word_game$views$word_input_$_iter__66637(cljs.core.chunk_rest(s__66638__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66640),null);
}
} else {
var vec__66644 = cljs.core.first(s__66638__$2);
var letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66644,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66644,(1),null);
return cljs.core.cons(word_game.views.span_color(letter,color),word_game$views$word_input_$_iter__66637(cljs.core.rest(s__66638__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(current_input);
});
word_game.views.alert_toast = (function word_game$views$alert_toast(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#toast","div#toast",-962016760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref((function (){var G__66647 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toast-visibility","toast-visibility",1071157162)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__66647) : re_frame.core.subscribe.call(null,G__66647));
})())], null),cljs.core.deref((function (){var G__66648 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toast-message","toast-message",-1838430128)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__66648) : re_frame.core.subscribe.call(null,G__66648));
})())], null);
});
word_game.views.enter_button = (function word_game$views$enter_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__66649_66684 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert-word","insert-word",1259807519),cljs.core.deref((function (){var G__66650 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-input","word-input",-803037823)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__66650) : re_frame.core.subscribe.call(null,G__66650));
})())], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__66649_66684) : re_frame.core.dispatch.call(null,G__66649_66684));

var G__66651 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-word-input","clear-word-input",-483228827),""], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__66651) : re_frame.core.dispatch.call(null,G__66651));
})], null),"Enter"], null);
});
word_game.views.delete_button = (function word_game$views$delete_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__66652 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-input-delete-letter","word-input-delete-letter",-33129363)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__66652) : re_frame.core.dispatch.call(null,G__66652));
})], null),"Delete"], null);
});
word_game.views.shuffle_button = (function word_game$views$shuffle_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__66653 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shuffle-letters","shuffle-letters",-111702996)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__66653) : re_frame.core.dispatch.call(null,G__66653));
})], null),"\uD83D\uDD00"], null);
});
word_game.views.available_letters = (function word_game$views$available_letters(letter_others,letter_core){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#letters","div#letters",-1736079973),(function (){var iter__4529__auto__ = (function word_game$views$available_letters_$_iter__66657(s__66658){
return (new cljs.core.LazySeq(null,(function (){
var s__66658__$1 = s__66658;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__66658__$1);
if(temp__5735__auto__){
var s__66658__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66658__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__66658__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__66660 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__66659 = (0);
while(true){
if((i__66659 < size__4528__auto__)){
var letter = cljs.core._nth(c__4527__auto__,i__66659);
cljs.core.chunk_append(b__66660,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__66659,letter,c__4527__auto__,size__4528__auto__,b__66660,s__66658__$2,temp__5735__auto__){
return (function (p1__66654_SHARP_){
var G__66661_66685 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-input-add-letter","word-input-add-letter",52253262),letter], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__66661_66685) : re_frame.core.dispatch.call(null,G__66661_66685));

return p1__66654_SHARP_.target.blur();
});})(i__66659,letter,c__4527__auto__,size__4528__auto__,b__66660,s__66658__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1)], null),letter], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),letter], null)));

var G__66686 = (i__66659 + (1));
i__66659 = G__66686;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66660),word_game$views$available_letters_$_iter__66657(cljs.core.chunk_rest(s__66658__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66660),null);
}
} else {
var letter = cljs.core.first(s__66658__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (letter,s__66658__$2,temp__5735__auto__){
return (function (p1__66654_SHARP_){
var G__66662_66687 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-input-add-letter","word-input-add-letter",52253262),letter], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__66662_66687) : re_frame.core.dispatch.call(null,G__66662_66687));

return p1__66654_SHARP_.target.blur();
});})(letter,s__66658__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1)], null),letter], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),letter], null)),word_game$views$available_letters_$_iter__66657(cljs.core.rest(s__66658__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),letter_others));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#letters-core","div#letters-core",836073192),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__66655_SHARP_){
var G__66663_66688 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-input-add-letter","word-input-add-letter",52253262),letter_core], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__66663_66688) : re_frame.core.dispatch.call(null,G__66663_66688));

return p1__66655_SHARP_.target.blur();
})], null),letter_core], null)], null),(function (){var iter__4529__auto__ = (function word_game$views$available_letters_$_iter__66664(s__66665){
return (new cljs.core.LazySeq(null,(function (){
var s__66665__$1 = s__66665;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__66665__$1);
if(temp__5735__auto__){
var s__66665__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66665__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__66665__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__66667 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__66666 = (0);
while(true){
if((i__66666 < size__4528__auto__)){
var letter = cljs.core._nth(c__4527__auto__,i__66666);
cljs.core.chunk_append(b__66667,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__66666,letter,c__4527__auto__,size__4528__auto__,b__66667,s__66665__$2,temp__5735__auto__){
return (function (p1__66656_SHARP_){
var G__66668_66694 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-input-add-letter","word-input-add-letter",52253262),letter], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__66668_66694) : re_frame.core.dispatch.call(null,G__66668_66694));

return p1__66656_SHARP_.target.blur();
});})(i__66666,letter,c__4527__auto__,size__4528__auto__,b__66667,s__66665__$2,temp__5735__auto__))
], null),letter], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),letter], null)));

var G__66695 = (i__66666 + (1));
i__66666 = G__66695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66667),word_game$views$available_letters_$_iter__66664(cljs.core.chunk_rest(s__66665__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66667),null);
}
} else {
var letter = cljs.core.first(s__66665__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (letter,s__66665__$2,temp__5735__auto__){
return (function (p1__66656_SHARP_){
var G__66669_66696 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-input-add-letter","word-input-add-letter",52253262),letter], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__66669_66696) : re_frame.core.dispatch.call(null,G__66669_66696));

return p1__66656_SHARP_.target.blur();
});})(letter,s__66665__$2,temp__5735__auto__))
], null),letter], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),letter], null)),word_game$views$available_letters_$_iter__66664(cljs.core.rest(s__66665__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),letter_others));
})()], null);
});
word_game.views.points = (function word_game$views$points(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#points","div#points",1430802443),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Points: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__66671 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__66671) : re_frame.core.subscribe.call(null,G__66671));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Current Ranking: ",word_game.events.calculate_ranking_text(cljs.core.deref((function (){var G__66673 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points-ranking","points-ranking",-1491027421)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__66673) : re_frame.core.subscribe.call(null,G__66673));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(8),new cljs.core.Keyword(null,"steps","steps",-128433302),(1),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref((function (){var G__66674 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points-ranking","points-ranking",-1491027421)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__66674) : re_frame.core.subscribe.call(null,G__66674));
})()),new cljs.core.Keyword(null,"class","class",-2030961996),"slider",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__66675 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-modal","show-modal",-11429385)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__66675) : re_frame.core.dispatch.call(null,G__66675));
}),new cljs.core.Keyword(null,"read-only","read-only",-191706886),true], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sliderticks","div#sliderticks",-960492534),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(14)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(23)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(37)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(47)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(65)], null)], null)], null);
});
word_game.views.modal = (function word_game$views$modal(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),cljs.core.deref((function (){var G__66676 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal-visibility","modal-visibility",-1614794557)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__66676) : re_frame.core.subscribe.call(null,G__66676));
})())], null)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"close",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__66677 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hide-modal","hide-modal",619662220)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__66677) : re_frame.core.dispatch.call(null,G__66677));
})], null),"X"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Ranks are based on a percentage of possible points\n         in a puzzle.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"The minimum scores to reach \n         each rank for today\u2019s are:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Beginner (0)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Good Start (2)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Moving Up (5)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Good (7)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Solid (14)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Nice (23)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Great (37)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Amazing (47)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Genius (65)"], null)], null)], null);
});
word_game.views.ui = (function word_game$views$ui(){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Word Game"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_game.views.alert_toast], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#word-input","div#word-input",1394706443),"Word: ",word_game.views.word_input(cljs.core.deref((function (){var G__66678 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-input","word-input",-803037823)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__66678) : re_frame.core.subscribe.call(null,G__66678));
})())),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gold"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"blinker"], null),"|"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_game.views.available_letters,cljs.core.deref((function (){var G__66679 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letter-others","letter-others",264849745)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__66679) : re_frame.core.subscribe.call(null,G__66679));
})()),cljs.core.deref((function (){var G__66680 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letter-core","letter-core",1731173929)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__66680) : re_frame.core.subscribe.call(null,G__66680));
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_game.views.enter_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_game.views.shuffle_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_game.views.delete_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_game.views.points], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Words Found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref((function (){var G__66682 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words-found","words-found",-680970678)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__66682) : re_frame.core.subscribe.call(null,G__66682));
})())))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_game.views.word_list], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_game.views.modal], null)], null);
});

//# sourceMappingURL=word_game.views.js.map
