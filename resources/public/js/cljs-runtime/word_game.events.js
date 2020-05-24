goog.provide('word_game.events');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('reagent.core');
if((typeof word_game !== 'undefined') && (typeof word_game.events !== 'undefined') && (typeof word_game.events.timeouts !== 'undefined')){
} else {
word_game.events.timeouts = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"word-input","word-input",-803037823),new cljs.core.Keyword(null,"modal-visibility","modal-visibility",-1614794557),new cljs.core.Keyword(null,"points-ranking","points-ranking",-1491027421),new cljs.core.Keyword(null,"letter-core","letter-core",1731173929),new cljs.core.Keyword(null,"words-found","words-found",-680970678),new cljs.core.Keyword(null,"toast-visibility","toast-visibility",1071157162),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"toast-message","toast-message",-1838430128),new cljs.core.Keyword(null,"allowed-words","allowed-words",-1877994032),new cljs.core.Keyword(null,"letter-others","letter-others",264849745)],[cljs.core.PersistentVector.EMPTY,"",(0),"R",cljs.core.PersistentHashSet.EMPTY,"",(0),"Howdy!!!",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 25, ["arbor",null,"roar",null,"roof",null,"affray",null,"boar",null,"arroyo",null,"afar",null,"afro",null,"pray",null,"pyro",null,"proof",null,"barb",null,"parry",null,"farro",null,"boor",null,"poor",null,"foray",null,"prop",null,"fora",null,"ropy",null,"barf",null,"fray",null,"bray",null,"babyproof",null,"array",null], null), null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","B","F","O","P","Y"], null)]);
}));
document.addEventListener("keydown",(function (p1__66775_SHARP_){
var input = p1__66775_SHARP_.which;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),input)){
var G__66776 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-input-delete-letter","word-input-delete-letter",-33129363)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__66776) : re_frame.core.dispatch.call(null,G__66776));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),input)){
var G__66777_66827 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert-word","insert-word",1259807519),cljs.core.deref((function (){var G__66778 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-input","word-input",-803037823)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__66778) : re_frame.core.subscribe.call(null,G__66778));
})())], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__66777_66827) : re_frame.core.dispatch.call(null,G__66777_66827));

var G__66779 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-word-input","clear-word-input",-483228827)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__66779) : re_frame.core.dispatch.call(null,G__66779));
} else {
if(cljs.core.truth_(cljs.core.re_seq(/[a-zA-Z]/,cljs.core.char$(input)))){
var G__66780 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-input-add-letter","word-input-add-letter",52253262),clojure.string.capitalize(cljs.core.char$(input))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__66780) : re_frame.core.dispatch.call(null,G__66780));
} else {
return null;
}
}
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"word-input-change","word-input-change",2057957243),(function (db,p__66781){
var vec__66782 = p__66781;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66782,(0),null);
var changed_input_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66782,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"word-input","word-input",-803037823),clojure.string.upper_case(changed_input_value));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-word-input","clear-word-input",-483228827),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"word-input","word-input",-803037823),cljs.core.PersistentVector.EMPTY);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"word-input-delete-letter","word-input-delete-letter",-33129363),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"word-input","word-input",-803037823),cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"word-input","word-input",-803037823).cljs$core$IFn$_invoke$arity$1(db))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"show-toast","show-toast",2009544543),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"toast-visibility","toast-visibility",1071157162),"show");
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hide-toast","hide-toast",1804312981),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"toast-visibility","toast-visibility",1071157162),"");
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"show-modal","show-modal",-11429385),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"modal-visibility","modal-visibility",-1614794557),"block");
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hide-modal","hide-modal",619662220),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"modal-visibility","modal-visibility",-1614794557),"");
}));
word_game.events.calculate_points = (function word_game$events$calculate_points(word){
var letter_count = cljs.core.count(word);
var points = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),letter_count))?(1):letter_count);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),cljs.core.count(cljs.core.set(clojure.string.upper_case(word))))){
return (points + (7));
} else {
return points;
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-points","add-points",-85865654),(function (p__66785,p__66786){
var map__66787 = p__66785;
var map__66787__$1 = (((((!((map__66787 == null))))?(((((map__66787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66787):map__66787);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66787__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__66788 = p__66786;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66788,(0),null);
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66788,(1),null);
var curr_points = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(db);
var new_points = (curr_points + word_game.events.calculate_points(word));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"points","points",-1486596883),new_points),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"calculate-ranking","calculate-ranking",1360620859),new_points], null)], null);
}));
word_game.events.calculate_ranking_text = (function word_game$events$calculate_ranking_text(points_ranking){
var pred__66792 = cljs.core._EQ_;
var expr__66793 = points_ranking;
if(cljs.core.truth_((pred__66792.cljs$core$IFn$_invoke$arity$2 ? pred__66792.cljs$core$IFn$_invoke$arity$2((8),expr__66793) : pred__66792.call(null,(8),expr__66793)))){
return "Genius";
} else {
if(cljs.core.truth_((pred__66792.cljs$core$IFn$_invoke$arity$2 ? pred__66792.cljs$core$IFn$_invoke$arity$2((7),expr__66793) : pred__66792.call(null,(7),expr__66793)))){
return "Amazing";
} else {
if(cljs.core.truth_((pred__66792.cljs$core$IFn$_invoke$arity$2 ? pred__66792.cljs$core$IFn$_invoke$arity$2((6),expr__66793) : pred__66792.call(null,(6),expr__66793)))){
return "Great";
} else {
if(cljs.core.truth_((pred__66792.cljs$core$IFn$_invoke$arity$2 ? pred__66792.cljs$core$IFn$_invoke$arity$2((5),expr__66793) : pred__66792.call(null,(5),expr__66793)))){
return "Nice";
} else {
if(cljs.core.truth_((pred__66792.cljs$core$IFn$_invoke$arity$2 ? pred__66792.cljs$core$IFn$_invoke$arity$2((4),expr__66793) : pred__66792.call(null,(4),expr__66793)))){
return "Solid";
} else {
if(cljs.core.truth_((pred__66792.cljs$core$IFn$_invoke$arity$2 ? pred__66792.cljs$core$IFn$_invoke$arity$2((3),expr__66793) : pred__66792.call(null,(3),expr__66793)))){
return "Good";
} else {
if(cljs.core.truth_((pred__66792.cljs$core$IFn$_invoke$arity$2 ? pred__66792.cljs$core$IFn$_invoke$arity$2((2),expr__66793) : pred__66792.call(null,(2),expr__66793)))){
return "Moving Up";
} else {
if(cljs.core.truth_((pred__66792.cljs$core$IFn$_invoke$arity$2 ? pred__66792.cljs$core$IFn$_invoke$arity$2((1),expr__66793) : pred__66792.call(null,(1),expr__66793)))){
return "Good Start";
} else {
if(cljs.core.truth_((pred__66792.cljs$core$IFn$_invoke$arity$2 ? pred__66792.cljs$core$IFn$_invoke$arity$2((0),expr__66793) : pred__66792.call(null,(0),expr__66793)))){
return "Beginner";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__66793)].join('')));
}
}
}
}
}
}
}
}
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"calculate-ranking","calculate-ranking",1360620859),(function (db,p__66795){
var vec__66796 = p__66795;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66796,(0),null);
var points = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66796,(1),null);
var ranking = (function (){var pred__66799 = cljs.core._LT__EQ_;
var expr__66800 = points;
if(cljs.core.truth_((pred__66799.cljs$core$IFn$_invoke$arity$2 ? pred__66799.cljs$core$IFn$_invoke$arity$2((65),expr__66800) : pred__66799.call(null,(65),expr__66800)))){
return (8);
} else {
if(cljs.core.truth_((pred__66799.cljs$core$IFn$_invoke$arity$2 ? pred__66799.cljs$core$IFn$_invoke$arity$2((47),expr__66800) : pred__66799.call(null,(47),expr__66800)))){
return (7);
} else {
if(cljs.core.truth_((pred__66799.cljs$core$IFn$_invoke$arity$2 ? pred__66799.cljs$core$IFn$_invoke$arity$2((37),expr__66800) : pred__66799.call(null,(37),expr__66800)))){
return (6);
} else {
if(cljs.core.truth_((pred__66799.cljs$core$IFn$_invoke$arity$2 ? pred__66799.cljs$core$IFn$_invoke$arity$2((23),expr__66800) : pred__66799.call(null,(23),expr__66800)))){
return (5);
} else {
if(cljs.core.truth_((pred__66799.cljs$core$IFn$_invoke$arity$2 ? pred__66799.cljs$core$IFn$_invoke$arity$2((14),expr__66800) : pred__66799.call(null,(14),expr__66800)))){
return (4);
} else {
if(cljs.core.truth_((pred__66799.cljs$core$IFn$_invoke$arity$2 ? pred__66799.cljs$core$IFn$_invoke$arity$2((7),expr__66800) : pred__66799.call(null,(7),expr__66800)))){
return (3);
} else {
if(cljs.core.truth_((pred__66799.cljs$core$IFn$_invoke$arity$2 ? pred__66799.cljs$core$IFn$_invoke$arity$2((5),expr__66800) : pred__66799.call(null,(5),expr__66800)))){
return (2);
} else {
if(cljs.core.truth_((pred__66799.cljs$core$IFn$_invoke$arity$2 ? pred__66799.cljs$core$IFn$_invoke$arity$2((2),expr__66800) : pred__66799.call(null,(2),expr__66800)))){
return (1);
} else {
if(cljs.core.truth_((pred__66799.cljs$core$IFn$_invoke$arity$2 ? pred__66799.cljs$core$IFn$_invoke$arity$2((0),expr__66800) : pred__66799.call(null,(0),expr__66800)))){
return (0);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__66800)].join('')));
}
}
}
}
}
}
}
}
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"points-ranking","points-ranking",-1491027421),ranking);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-toast-alert","new-toast-alert",1551323698),(function (p__66802,p__66803){
var map__66804 = p__66802;
var map__66804__$1 = (((((!((map__66804 == null))))?(((((map__66804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66804):map__66804);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66804__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__66805 = p__66803;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66805,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66805,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"toast-message","toast-message",-1838430128),message),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-toast","show-toast",2009544543)], null),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"toast-message","toast-message",-1838430128),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hide-toast","hide-toast",1804312981)], null),new cljs.core.Keyword(null,"time","time",1385887882),(3000)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"word-input-add-letter","word-input-add-letter",52253262),(function (db,p__66809){
var vec__66810 = p__66809;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66810,(0),null);
var letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66810,(1),null);
var letter_others = new cljs.core.Keyword(null,"letter-others","letter-others",264849745).cljs$core$IFn$_invoke$arity$1(db);
var letter_core = new cljs.core.Keyword(null,"letter-core","letter-core",1731173929).cljs$core$IFn$_invoke$arity$1(db);
var color = (cljs.core.truth_(cljs.core.some(cljs.core.set(letter_others),letter))?"black":(cljs.core.truth_(cljs.core.some(cljs.core.set(letter_core),letter))?"gold":"grey"
));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"word-input","word-input",-803037823),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"word-input","word-input",-803037823).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [letter,color], null)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shuffle-letters","shuffle-letters",-111702996),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"letter-others","letter-others",264849745),cljs.core.shuffle(new cljs.core.Keyword(null,"letter-others","letter-others",264849745).cljs$core$IFn$_invoke$arity$1(db)));
}));
word_game.events.format_word = (function word_game$events$format_word(word){
var word__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__66813_SHARP_,p2__66814_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__66813_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p2__66814_SHARP_))].join('');
}),"",word);
return clojure.string.capitalize(clojure.string.trim(word__$1));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"insert-word","insert-word",1259807519),(function (p__66815,p__66816){
var map__66817 = p__66815;
var map__66817__$1 = (((((!((map__66817 == null))))?(((((map__66817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66817):map__66817);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66817__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__66818 = p__66816;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66818,(0),null);
var new_word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66818,(1),null);
var new_word__$1 = word_game.events.format_word(new_word);
if((cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(new_word__$1,/\s/)) > (1))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-toast-alert","new-toast-alert",1551323698),"ONE WORD ONLY"], null)], null);
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new_word__$1]),new cljs.core.Keyword(null,"words-found","words-found",-680970678).cljs$core$IFn$_invoke$arity$1(db)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-toast-alert","new-toast-alert",1551323698),"WORD ALREADY EXISTS"], null)], null);
} else {
if(cljs.core.empty_QMARK_(new_word__$1)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-toast-alert","new-toast-alert",1551323698),"EMPTY"], null)], null);
} else {
if(cljs.core.truth_(cljs.core.some(new cljs.core.Keyword(null,"allowed-words","allowed-words",-1877994032).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case(new_word__$1)], null)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"words-found","words-found",-680970678),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"words-found","words-found",-680970678).cljs$core$IFn$_invoke$arity$1(db),new_word__$1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-points","add-points",-85865654),new_word__$1], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-toast-alert","new-toast-alert",1551323698),"NOT ALLOWED"], null)], null);

}
}
}
}
}));
var G__66822_66830 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__66823_66831 = (function (p__66824){
var map__66825 = p__66824;
var map__66825__$1 = (((((!((map__66825 == null))))?(((((map__66825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66825):map__66825);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66825__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66825__$1,new cljs.core.Keyword(null,"event","event",301435442));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66825__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var temp__5739__auto___66832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(word_game.events.timeouts),id);
if((temp__5739__auto___66832 == null)){
} else {
var existing_66833 = temp__5739__auto___66832;
clearTimeout(existing_66833);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(word_game.events.timeouts,cljs.core.dissoc,id);
}

if((!((event == null)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(word_game.events.timeouts,cljs.core.assoc,id,setTimeout((function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
}),time));
} else {
return null;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__66822_66830,G__66823_66831) : re_frame.core.reg_fx.call(null,G__66822_66830,G__66823_66831));

//# sourceMappingURL=word_game.events.js.map
