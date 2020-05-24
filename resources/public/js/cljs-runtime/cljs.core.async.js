goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__57275 = arguments.length;
switch (G__57275) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57276 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57276 = (function (f,blockable,meta57277){
this.f = f;
this.blockable = blockable;
this.meta57277 = meta57277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57278,meta57277__$1){
var self__ = this;
var _57278__$1 = this;
return (new cljs.core.async.t_cljs$core$async57276(self__.f,self__.blockable,meta57277__$1));
}));

(cljs.core.async.t_cljs$core$async57276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57278){
var self__ = this;
var _57278__$1 = this;
return self__.meta57277;
}));

(cljs.core.async.t_cljs$core$async57276.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57276.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57276.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async57276.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async57276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta57277","meta57277",1767743024,null)], null);
}));

(cljs.core.async.t_cljs$core$async57276.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57276");

(cljs.core.async.t_cljs$core$async57276.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57276");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57276.
 */
cljs.core.async.__GT_t_cljs$core$async57276 = (function cljs$core$async$__GT_t_cljs$core$async57276(f__$1,blockable__$1,meta57277){
return (new cljs.core.async.t_cljs$core$async57276(f__$1,blockable__$1,meta57277));
});

}

return (new cljs.core.async.t_cljs$core$async57276(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__57281 = arguments.length;
switch (G__57281) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__57283 = arguments.length;
switch (G__57283) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__57285 = arguments.length;
switch (G__57285) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_58772 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_58772) : fn1.call(null,val_58772));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_58772) : fn1.call(null,val_58772));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__57287 = arguments.length;
switch (G__57287) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___58783 = n;
var x_58784 = (0);
while(true){
if((x_58784 < n__4613__auto___58783)){
(a[x_58784] = x_58784);

var G__58785 = (x_58784 + (1));
x_58784 = G__58785;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57288 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57288 = (function (flag,meta57289){
this.flag = flag;
this.meta57289 = meta57289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57290,meta57289__$1){
var self__ = this;
var _57290__$1 = this;
return (new cljs.core.async.t_cljs$core$async57288(self__.flag,meta57289__$1));
}));

(cljs.core.async.t_cljs$core$async57288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57290){
var self__ = this;
var _57290__$1 = this;
return self__.meta57289;
}));

(cljs.core.async.t_cljs$core$async57288.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57288.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async57288.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57288.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async57288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta57289","meta57289",531107284,null)], null);
}));

(cljs.core.async.t_cljs$core$async57288.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57288");

(cljs.core.async.t_cljs$core$async57288.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57288");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57288.
 */
cljs.core.async.__GT_t_cljs$core$async57288 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async57288(flag__$1,meta57289){
return (new cljs.core.async.t_cljs$core$async57288(flag__$1,meta57289));
});

}

return (new cljs.core.async.t_cljs$core$async57288(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57291 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57291 = (function (flag,cb,meta57292){
this.flag = flag;
this.cb = cb;
this.meta57292 = meta57292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57293,meta57292__$1){
var self__ = this;
var _57293__$1 = this;
return (new cljs.core.async.t_cljs$core$async57291(self__.flag,self__.cb,meta57292__$1));
}));

(cljs.core.async.t_cljs$core$async57291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57293){
var self__ = this;
var _57293__$1 = this;
return self__.meta57292;
}));

(cljs.core.async.t_cljs$core$async57291.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57291.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async57291.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57291.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async57291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta57292","meta57292",-743744353,null)], null);
}));

(cljs.core.async.t_cljs$core$async57291.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57291");

(cljs.core.async.t_cljs$core$async57291.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57291");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57291.
 */
cljs.core.async.__GT_t_cljs$core$async57291 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async57291(flag__$1,cb__$1,meta57292){
return (new cljs.core.async.t_cljs$core$async57291(flag__$1,cb__$1,meta57292));
});

}

return (new cljs.core.async.t_cljs$core$async57291(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__57294_SHARP_){
var G__57296 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__57294_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__57296) : fret.call(null,G__57296));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__57295_SHARP_){
var G__57297 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__57295_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__57297) : fret.call(null,G__57297));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__58805 = (i + (1));
i = G__58805;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58811 = arguments.length;
var i__4737__auto___58812 = (0);
while(true){
if((i__4737__auto___58812 < len__4736__auto___58811)){
args__4742__auto__.push((arguments[i__4737__auto___58812]));

var G__58813 = (i__4737__auto___58812 + (1));
i__4737__auto___58812 = G__58813;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__57300){
var map__57301 = p__57300;
var map__57301__$1 = (((((!((map__57301 == null))))?(((((map__57301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57301):map__57301);
var opts = map__57301__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq57298){
var G__57299 = cljs.core.first(seq57298);
var seq57298__$1 = cljs.core.next(seq57298);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57299,seq57298__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__57304 = arguments.length;
switch (G__57304) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__57217__auto___58822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57218__auto__ = (function (){var switch__57181__auto__ = (function (state_57328){
var state_val_57329 = (state_57328[(1)]);
if((state_val_57329 === (7))){
var inst_57324 = (state_57328[(2)]);
var state_57328__$1 = state_57328;
var statearr_57330_58824 = state_57328__$1;
(statearr_57330_58824[(2)] = inst_57324);

(statearr_57330_58824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57329 === (1))){
var state_57328__$1 = state_57328;
var statearr_57331_58825 = state_57328__$1;
(statearr_57331_58825[(2)] = null);

(statearr_57331_58825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57329 === (4))){
var inst_57307 = (state_57328[(7)]);
var inst_57307__$1 = (state_57328[(2)]);
var inst_57308 = (inst_57307__$1 == null);
var state_57328__$1 = (function (){var statearr_57332 = state_57328;
(statearr_57332[(7)] = inst_57307__$1);

return statearr_57332;
})();
if(cljs.core.truth_(inst_57308)){
var statearr_57333_58826 = state_57328__$1;
(statearr_57333_58826[(1)] = (5));

} else {
var statearr_57334_58827 = state_57328__$1;
(statearr_57334_58827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57329 === (13))){
var state_57328__$1 = state_57328;
var statearr_57335_58828 = state_57328__$1;
(statearr_57335_58828[(2)] = null);

(statearr_57335_58828[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57329 === (6))){
var inst_57307 = (state_57328[(7)]);
var state_57328__$1 = state_57328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57328__$1,(11),to,inst_57307);
} else {
if((state_val_57329 === (3))){
var inst_57326 = (state_57328[(2)]);
var state_57328__$1 = state_57328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57328__$1,inst_57326);
} else {
if((state_val_57329 === (12))){
var state_57328__$1 = state_57328;
var statearr_57336_58831 = state_57328__$1;
(statearr_57336_58831[(2)] = null);

(statearr_57336_58831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57329 === (2))){
var state_57328__$1 = state_57328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57328__$1,(4),from);
} else {
if((state_val_57329 === (11))){
var inst_57317 = (state_57328[(2)]);
var state_57328__$1 = state_57328;
if(cljs.core.truth_(inst_57317)){
var statearr_57337_58834 = state_57328__$1;
(statearr_57337_58834[(1)] = (12));

} else {
var statearr_57338_58835 = state_57328__$1;
(statearr_57338_58835[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57329 === (9))){
var state_57328__$1 = state_57328;
var statearr_57339_58836 = state_57328__$1;
(statearr_57339_58836[(2)] = null);

(statearr_57339_58836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57329 === (5))){
var state_57328__$1 = state_57328;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57340_58837 = state_57328__$1;
(statearr_57340_58837[(1)] = (8));

} else {
var statearr_57341_58838 = state_57328__$1;
(statearr_57341_58838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57329 === (14))){
var inst_57322 = (state_57328[(2)]);
var state_57328__$1 = state_57328;
var statearr_57342_58839 = state_57328__$1;
(statearr_57342_58839[(2)] = inst_57322);

(statearr_57342_58839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57329 === (10))){
var inst_57314 = (state_57328[(2)]);
var state_57328__$1 = state_57328;
var statearr_57343_58840 = state_57328__$1;
(statearr_57343_58840[(2)] = inst_57314);

(statearr_57343_58840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57329 === (8))){
var inst_57311 = cljs.core.async.close_BANG_(to);
var state_57328__$1 = state_57328;
var statearr_57344_58843 = state_57328__$1;
(statearr_57344_58843[(2)] = inst_57311);

(statearr_57344_58843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
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
return (function() {
var cljs$core$async$state_machine__57182__auto__ = null;
var cljs$core$async$state_machine__57182__auto____0 = (function (){
var statearr_57345 = [null,null,null,null,null,null,null,null];
(statearr_57345[(0)] = cljs$core$async$state_machine__57182__auto__);

(statearr_57345[(1)] = (1));

return statearr_57345;
});
var cljs$core$async$state_machine__57182__auto____1 = (function (state_57328){
while(true){
var ret_value__57183__auto__ = (function (){try{while(true){
var result__57184__auto__ = switch__57181__auto__(state_57328);
if(cljs.core.keyword_identical_QMARK_(result__57184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57184__auto__;
}
break;
}
}catch (e57346){var ex__57185__auto__ = e57346;
var statearr_57347_58846 = state_57328;
(statearr_57347_58846[(2)] = ex__57185__auto__);


if(cljs.core.seq((state_57328[(4)]))){
var statearr_57348_58848 = state_57328;
(statearr_57348_58848[(1)] = cljs.core.first((state_57328[(4)])));

} else {
throw ex__57185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58851 = state_57328;
state_57328 = G__58851;
continue;
} else {
return ret_value__57183__auto__;
}
break;
}
});
cljs$core$async$state_machine__57182__auto__ = function(state_57328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57182__auto____1.call(this,state_57328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57182__auto____0;
cljs$core$async$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57182__auto____1;
return cljs$core$async$state_machine__57182__auto__;
})()
})();
var state__57219__auto__ = (function (){var statearr_57349 = f__57218__auto__();
(statearr_57349[(6)] = c__57217__auto___58822);

return statearr_57349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57219__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__57350){
var vec__57351 = p__57350;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57351,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57351,(1),null);
var job = vec__57351;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__57217__auto___58853 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57218__auto__ = (function (){var switch__57181__auto__ = (function (state_57358){
var state_val_57359 = (state_57358[(1)]);
if((state_val_57359 === (1))){
var state_57358__$1 = state_57358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57358__$1,(2),res,v);
} else {
if((state_val_57359 === (2))){
var inst_57355 = (state_57358[(2)]);
var inst_57356 = cljs.core.async.close_BANG_(res);
var state_57358__$1 = (function (){var statearr_57360 = state_57358;
(statearr_57360[(7)] = inst_57355);

return statearr_57360;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57358__$1,inst_57356);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____0 = (function (){
var statearr_57361 = [null,null,null,null,null,null,null,null];
(statearr_57361[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__);

(statearr_57361[(1)] = (1));

return statearr_57361;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____1 = (function (state_57358){
while(true){
var ret_value__57183__auto__ = (function (){try{while(true){
var result__57184__auto__ = switch__57181__auto__(state_57358);
if(cljs.core.keyword_identical_QMARK_(result__57184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57184__auto__;
}
break;
}
}catch (e57362){var ex__57185__auto__ = e57362;
var statearr_57363_58858 = state_57358;
(statearr_57363_58858[(2)] = ex__57185__auto__);


if(cljs.core.seq((state_57358[(4)]))){
var statearr_57364_58859 = state_57358;
(statearr_57364_58859[(1)] = cljs.core.first((state_57358[(4)])));

} else {
throw ex__57185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58860 = state_57358;
state_57358 = G__58860;
continue;
} else {
return ret_value__57183__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__ = function(state_57358){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____1.call(this,state_57358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__;
})()
})();
var state__57219__auto__ = (function (){var statearr_57365 = f__57218__auto__();
(statearr_57365[(6)] = c__57217__auto___58853);

return statearr_57365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57219__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__57366){
var vec__57367 = p__57366;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57367,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57367,(1),null);
var job = vec__57367;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___58872 = n;
var __58873 = (0);
while(true){
if((__58873 < n__4613__auto___58872)){
var G__57370_58875 = type;
var G__57370_58876__$1 = (((G__57370_58875 instanceof cljs.core.Keyword))?G__57370_58875.fqn:null);
switch (G__57370_58876__$1) {
case "compute":
var c__57217__auto___58878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__58873,c__57217__auto___58878,G__57370_58875,G__57370_58876__$1,n__4613__auto___58872,jobs,results,process,async){
return (function (){
var f__57218__auto__ = (function (){var switch__57181__auto__ = ((function (__58873,c__57217__auto___58878,G__57370_58875,G__57370_58876__$1,n__4613__auto___58872,jobs,results,process,async){
return (function (state_57383){
var state_val_57384 = (state_57383[(1)]);
if((state_val_57384 === (1))){
var state_57383__$1 = state_57383;
var statearr_57385_58881 = state_57383__$1;
(statearr_57385_58881[(2)] = null);

(statearr_57385_58881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57384 === (2))){
var state_57383__$1 = state_57383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57383__$1,(4),jobs);
} else {
if((state_val_57384 === (3))){
var inst_57381 = (state_57383[(2)]);
var state_57383__$1 = state_57383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57383__$1,inst_57381);
} else {
if((state_val_57384 === (4))){
var inst_57373 = (state_57383[(2)]);
var inst_57374 = process(inst_57373);
var state_57383__$1 = state_57383;
if(cljs.core.truth_(inst_57374)){
var statearr_57386_58883 = state_57383__$1;
(statearr_57386_58883[(1)] = (5));

} else {
var statearr_57387_58885 = state_57383__$1;
(statearr_57387_58885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57384 === (5))){
var state_57383__$1 = state_57383;
var statearr_57388_58886 = state_57383__$1;
(statearr_57388_58886[(2)] = null);

(statearr_57388_58886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57384 === (6))){
var state_57383__$1 = state_57383;
var statearr_57389_58887 = state_57383__$1;
(statearr_57389_58887[(2)] = null);

(statearr_57389_58887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57384 === (7))){
var inst_57379 = (state_57383[(2)]);
var state_57383__$1 = state_57383;
var statearr_57390_58890 = state_57383__$1;
(statearr_57390_58890[(2)] = inst_57379);

(statearr_57390_58890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__58873,c__57217__auto___58878,G__57370_58875,G__57370_58876__$1,n__4613__auto___58872,jobs,results,process,async))
;
return ((function (__58873,switch__57181__auto__,c__57217__auto___58878,G__57370_58875,G__57370_58876__$1,n__4613__auto___58872,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____0 = (function (){
var statearr_57391 = [null,null,null,null,null,null,null];
(statearr_57391[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__);

(statearr_57391[(1)] = (1));

return statearr_57391;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____1 = (function (state_57383){
while(true){
var ret_value__57183__auto__ = (function (){try{while(true){
var result__57184__auto__ = switch__57181__auto__(state_57383);
if(cljs.core.keyword_identical_QMARK_(result__57184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57184__auto__;
}
break;
}
}catch (e57392){var ex__57185__auto__ = e57392;
var statearr_57393_58891 = state_57383;
(statearr_57393_58891[(2)] = ex__57185__auto__);


if(cljs.core.seq((state_57383[(4)]))){
var statearr_57394_58892 = state_57383;
(statearr_57394_58892[(1)] = cljs.core.first((state_57383[(4)])));

} else {
throw ex__57185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58893 = state_57383;
state_57383 = G__58893;
continue;
} else {
return ret_value__57183__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__ = function(state_57383){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____1.call(this,state_57383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__;
})()
;})(__58873,switch__57181__auto__,c__57217__auto___58878,G__57370_58875,G__57370_58876__$1,n__4613__auto___58872,jobs,results,process,async))
})();
var state__57219__auto__ = (function (){var statearr_57395 = f__57218__auto__();
(statearr_57395[(6)] = c__57217__auto___58878);

return statearr_57395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57219__auto__);
});})(__58873,c__57217__auto___58878,G__57370_58875,G__57370_58876__$1,n__4613__auto___58872,jobs,results,process,async))
);


break;
case "async":
var c__57217__auto___58894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__58873,c__57217__auto___58894,G__57370_58875,G__57370_58876__$1,n__4613__auto___58872,jobs,results,process,async){
return (function (){
var f__57218__auto__ = (function (){var switch__57181__auto__ = ((function (__58873,c__57217__auto___58894,G__57370_58875,G__57370_58876__$1,n__4613__auto___58872,jobs,results,process,async){
return (function (state_57408){
var state_val_57409 = (state_57408[(1)]);
if((state_val_57409 === (1))){
var state_57408__$1 = state_57408;
var statearr_57410_58895 = state_57408__$1;
(statearr_57410_58895[(2)] = null);

(statearr_57410_58895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57409 === (2))){
var state_57408__$1 = state_57408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57408__$1,(4),jobs);
} else {
if((state_val_57409 === (3))){
var inst_57406 = (state_57408[(2)]);
var state_57408__$1 = state_57408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57408__$1,inst_57406);
} else {
if((state_val_57409 === (4))){
var inst_57398 = (state_57408[(2)]);
var inst_57399 = async(inst_57398);
var state_57408__$1 = state_57408;
if(cljs.core.truth_(inst_57399)){
var statearr_57411_58896 = state_57408__$1;
(statearr_57411_58896[(1)] = (5));

} else {
var statearr_57412_58897 = state_57408__$1;
(statearr_57412_58897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57409 === (5))){
var state_57408__$1 = state_57408;
var statearr_57413_58898 = state_57408__$1;
(statearr_57413_58898[(2)] = null);

(statearr_57413_58898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57409 === (6))){
var state_57408__$1 = state_57408;
var statearr_57414_58899 = state_57408__$1;
(statearr_57414_58899[(2)] = null);

(statearr_57414_58899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57409 === (7))){
var inst_57404 = (state_57408[(2)]);
var state_57408__$1 = state_57408;
var statearr_57415_58900 = state_57408__$1;
(statearr_57415_58900[(2)] = inst_57404);

(statearr_57415_58900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__58873,c__57217__auto___58894,G__57370_58875,G__57370_58876__$1,n__4613__auto___58872,jobs,results,process,async))
;
return ((function (__58873,switch__57181__auto__,c__57217__auto___58894,G__57370_58875,G__57370_58876__$1,n__4613__auto___58872,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____0 = (function (){
var statearr_57416 = [null,null,null,null,null,null,null];
(statearr_57416[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__);

(statearr_57416[(1)] = (1));

return statearr_57416;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____1 = (function (state_57408){
while(true){
var ret_value__57183__auto__ = (function (){try{while(true){
var result__57184__auto__ = switch__57181__auto__(state_57408);
if(cljs.core.keyword_identical_QMARK_(result__57184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57184__auto__;
}
break;
}
}catch (e57417){var ex__57185__auto__ = e57417;
var statearr_57418_58905 = state_57408;
(statearr_57418_58905[(2)] = ex__57185__auto__);


if(cljs.core.seq((state_57408[(4)]))){
var statearr_57419_58906 = state_57408;
(statearr_57419_58906[(1)] = cljs.core.first((state_57408[(4)])));

} else {
throw ex__57185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58907 = state_57408;
state_57408 = G__58907;
continue;
} else {
return ret_value__57183__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__ = function(state_57408){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____1.call(this,state_57408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__;
})()
;})(__58873,switch__57181__auto__,c__57217__auto___58894,G__57370_58875,G__57370_58876__$1,n__4613__auto___58872,jobs,results,process,async))
})();
var state__57219__auto__ = (function (){var statearr_57420 = f__57218__auto__();
(statearr_57420[(6)] = c__57217__auto___58894);

return statearr_57420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57219__auto__);
});})(__58873,c__57217__auto___58894,G__57370_58875,G__57370_58876__$1,n__4613__auto___58872,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57370_58876__$1)].join('')));

}

var G__58909 = (__58873 + (1));
__58873 = G__58909;
continue;
} else {
}
break;
}

var c__57217__auto___58910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57218__auto__ = (function (){var switch__57181__auto__ = (function (state_57442){
var state_val_57443 = (state_57442[(1)]);
if((state_val_57443 === (7))){
var inst_57438 = (state_57442[(2)]);
var state_57442__$1 = state_57442;
var statearr_57444_58913 = state_57442__$1;
(statearr_57444_58913[(2)] = inst_57438);

(statearr_57444_58913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57443 === (1))){
var state_57442__$1 = state_57442;
var statearr_57445_58915 = state_57442__$1;
(statearr_57445_58915[(2)] = null);

(statearr_57445_58915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57443 === (4))){
var inst_57423 = (state_57442[(7)]);
var inst_57423__$1 = (state_57442[(2)]);
var inst_57424 = (inst_57423__$1 == null);
var state_57442__$1 = (function (){var statearr_57446 = state_57442;
(statearr_57446[(7)] = inst_57423__$1);

return statearr_57446;
})();
if(cljs.core.truth_(inst_57424)){
var statearr_57447_58917 = state_57442__$1;
(statearr_57447_58917[(1)] = (5));

} else {
var statearr_57448_58918 = state_57442__$1;
(statearr_57448_58918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57443 === (6))){
var inst_57423 = (state_57442[(7)]);
var inst_57428 = (state_57442[(8)]);
var inst_57428__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_57429 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57430 = [inst_57423,inst_57428__$1];
var inst_57431 = (new cljs.core.PersistentVector(null,2,(5),inst_57429,inst_57430,null));
var state_57442__$1 = (function (){var statearr_57449 = state_57442;
(statearr_57449[(8)] = inst_57428__$1);

return statearr_57449;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57442__$1,(8),jobs,inst_57431);
} else {
if((state_val_57443 === (3))){
var inst_57440 = (state_57442[(2)]);
var state_57442__$1 = state_57442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57442__$1,inst_57440);
} else {
if((state_val_57443 === (2))){
var state_57442__$1 = state_57442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57442__$1,(4),from);
} else {
if((state_val_57443 === (9))){
var inst_57435 = (state_57442[(2)]);
var state_57442__$1 = (function (){var statearr_57450 = state_57442;
(statearr_57450[(9)] = inst_57435);

return statearr_57450;
})();
var statearr_57451_58919 = state_57442__$1;
(statearr_57451_58919[(2)] = null);

(statearr_57451_58919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57443 === (5))){
var inst_57426 = cljs.core.async.close_BANG_(jobs);
var state_57442__$1 = state_57442;
var statearr_57452_58920 = state_57442__$1;
(statearr_57452_58920[(2)] = inst_57426);

(statearr_57452_58920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57443 === (8))){
var inst_57428 = (state_57442[(8)]);
var inst_57433 = (state_57442[(2)]);
var state_57442__$1 = (function (){var statearr_57453 = state_57442;
(statearr_57453[(10)] = inst_57433);

return statearr_57453;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57442__$1,(9),results,inst_57428);
} else {
return null;
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
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____0 = (function (){
var statearr_57454 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57454[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__);

(statearr_57454[(1)] = (1));

return statearr_57454;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____1 = (function (state_57442){
while(true){
var ret_value__57183__auto__ = (function (){try{while(true){
var result__57184__auto__ = switch__57181__auto__(state_57442);
if(cljs.core.keyword_identical_QMARK_(result__57184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57184__auto__;
}
break;
}
}catch (e57455){var ex__57185__auto__ = e57455;
var statearr_57456_58924 = state_57442;
(statearr_57456_58924[(2)] = ex__57185__auto__);


if(cljs.core.seq((state_57442[(4)]))){
var statearr_57457_58925 = state_57442;
(statearr_57457_58925[(1)] = cljs.core.first((state_57442[(4)])));

} else {
throw ex__57185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58927 = state_57442;
state_57442 = G__58927;
continue;
} else {
return ret_value__57183__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__ = function(state_57442){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____1.call(this,state_57442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__;
})()
})();
var state__57219__auto__ = (function (){var statearr_57458 = f__57218__auto__();
(statearr_57458[(6)] = c__57217__auto___58910);

return statearr_57458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57219__auto__);
}));


var c__57217__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57218__auto__ = (function (){var switch__57181__auto__ = (function (state_57496){
var state_val_57497 = (state_57496[(1)]);
if((state_val_57497 === (7))){
var inst_57492 = (state_57496[(2)]);
var state_57496__$1 = state_57496;
var statearr_57498_58930 = state_57496__$1;
(statearr_57498_58930[(2)] = inst_57492);

(statearr_57498_58930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57497 === (20))){
var state_57496__$1 = state_57496;
var statearr_57499_58932 = state_57496__$1;
(statearr_57499_58932[(2)] = null);

(statearr_57499_58932[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57497 === (1))){
var state_57496__$1 = state_57496;
var statearr_57500_58934 = state_57496__$1;
(statearr_57500_58934[(2)] = null);

(statearr_57500_58934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57497 === (4))){
var inst_57461 = (state_57496[(7)]);
var inst_57461__$1 = (state_57496[(2)]);
var inst_57462 = (inst_57461__$1 == null);
var state_57496__$1 = (function (){var statearr_57501 = state_57496;
(statearr_57501[(7)] = inst_57461__$1);

return statearr_57501;
})();
if(cljs.core.truth_(inst_57462)){
var statearr_57502_58935 = state_57496__$1;
(statearr_57502_58935[(1)] = (5));

} else {
var statearr_57503_58936 = state_57496__$1;
(statearr_57503_58936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57497 === (15))){
var inst_57474 = (state_57496[(8)]);
var state_57496__$1 = state_57496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57496__$1,(18),to,inst_57474);
} else {
if((state_val_57497 === (21))){
var inst_57487 = (state_57496[(2)]);
var state_57496__$1 = state_57496;
var statearr_57504_58938 = state_57496__$1;
(statearr_57504_58938[(2)] = inst_57487);

(statearr_57504_58938[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57497 === (13))){
var inst_57489 = (state_57496[(2)]);
var state_57496__$1 = (function (){var statearr_57505 = state_57496;
(statearr_57505[(9)] = inst_57489);

return statearr_57505;
})();
var statearr_57506_58940 = state_57496__$1;
(statearr_57506_58940[(2)] = null);

(statearr_57506_58940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57497 === (6))){
var inst_57461 = (state_57496[(7)]);
var state_57496__$1 = state_57496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57496__$1,(11),inst_57461);
} else {
if((state_val_57497 === (17))){
var inst_57482 = (state_57496[(2)]);
var state_57496__$1 = state_57496;
if(cljs.core.truth_(inst_57482)){
var statearr_57507_58941 = state_57496__$1;
(statearr_57507_58941[(1)] = (19));

} else {
var statearr_57508_58942 = state_57496__$1;
(statearr_57508_58942[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57497 === (3))){
var inst_57494 = (state_57496[(2)]);
var state_57496__$1 = state_57496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57496__$1,inst_57494);
} else {
if((state_val_57497 === (12))){
var inst_57471 = (state_57496[(10)]);
var state_57496__$1 = state_57496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57496__$1,(14),inst_57471);
} else {
if((state_val_57497 === (2))){
var state_57496__$1 = state_57496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57496__$1,(4),results);
} else {
if((state_val_57497 === (19))){
var state_57496__$1 = state_57496;
var statearr_57509_58944 = state_57496__$1;
(statearr_57509_58944[(2)] = null);

(statearr_57509_58944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57497 === (11))){
var inst_57471 = (state_57496[(2)]);
var state_57496__$1 = (function (){var statearr_57510 = state_57496;
(statearr_57510[(10)] = inst_57471);

return statearr_57510;
})();
var statearr_57511_58946 = state_57496__$1;
(statearr_57511_58946[(2)] = null);

(statearr_57511_58946[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57497 === (9))){
var state_57496__$1 = state_57496;
var statearr_57512_58947 = state_57496__$1;
(statearr_57512_58947[(2)] = null);

(statearr_57512_58947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57497 === (5))){
var state_57496__$1 = state_57496;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57513_58948 = state_57496__$1;
(statearr_57513_58948[(1)] = (8));

} else {
var statearr_57514_58949 = state_57496__$1;
(statearr_57514_58949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57497 === (14))){
var inst_57474 = (state_57496[(8)]);
var inst_57474__$1 = (state_57496[(2)]);
var inst_57475 = (inst_57474__$1 == null);
var inst_57476 = cljs.core.not(inst_57475);
var state_57496__$1 = (function (){var statearr_57515 = state_57496;
(statearr_57515[(8)] = inst_57474__$1);

return statearr_57515;
})();
if(inst_57476){
var statearr_57516_58950 = state_57496__$1;
(statearr_57516_58950[(1)] = (15));

} else {
var statearr_57517_58951 = state_57496__$1;
(statearr_57517_58951[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57497 === (16))){
var state_57496__$1 = state_57496;
var statearr_57518_58952 = state_57496__$1;
(statearr_57518_58952[(2)] = false);

(statearr_57518_58952[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57497 === (10))){
var inst_57468 = (state_57496[(2)]);
var state_57496__$1 = state_57496;
var statearr_57519_58955 = state_57496__$1;
(statearr_57519_58955[(2)] = inst_57468);

(statearr_57519_58955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57497 === (18))){
var inst_57479 = (state_57496[(2)]);
var state_57496__$1 = state_57496;
var statearr_57520_58956 = state_57496__$1;
(statearr_57520_58956[(2)] = inst_57479);

(statearr_57520_58956[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57497 === (8))){
var inst_57465 = cljs.core.async.close_BANG_(to);
var state_57496__$1 = state_57496;
var statearr_57521_58957 = state_57496__$1;
(statearr_57521_58957[(2)] = inst_57465);

(statearr_57521_58957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
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
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____0 = (function (){
var statearr_57522 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57522[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__);

(statearr_57522[(1)] = (1));

return statearr_57522;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____1 = (function (state_57496){
while(true){
var ret_value__57183__auto__ = (function (){try{while(true){
var result__57184__auto__ = switch__57181__auto__(state_57496);
if(cljs.core.keyword_identical_QMARK_(result__57184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57184__auto__;
}
break;
}
}catch (e57523){var ex__57185__auto__ = e57523;
var statearr_57524_58958 = state_57496;
(statearr_57524_58958[(2)] = ex__57185__auto__);


if(cljs.core.seq((state_57496[(4)]))){
var statearr_57525_58959 = state_57496;
(statearr_57525_58959[(1)] = cljs.core.first((state_57496[(4)])));

} else {
throw ex__57185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58961 = state_57496;
state_57496 = G__58961;
continue;
} else {
return ret_value__57183__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__ = function(state_57496){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____1.call(this,state_57496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57182__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57182__auto__;
})()
})();
var state__57219__auto__ = (function (){var statearr_57526 = f__57218__auto__();
(statearr_57526[(6)] = c__57217__auto__);

return statearr_57526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57219__auto__);
}));

return c__57217__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__57528 = arguments.length;
switch (G__57528) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__57530 = arguments.length;
switch (G__57530) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__57532 = arguments.length;
switch (G__57532) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__57217__auto___58968 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57218__auto__ = (function (){var switch__57181__auto__ = (function (state_57558){
var state_val_57559 = (state_57558[(1)]);
if((state_val_57559 === (7))){
var inst_57554 = (state_57558[(2)]);
var state_57558__$1 = state_57558;
var statearr_57560_58969 = state_57558__$1;
(statearr_57560_58969[(2)] = inst_57554);

(statearr_57560_58969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57559 === (1))){
var state_57558__$1 = state_57558;
var statearr_57561_58970 = state_57558__$1;
(statearr_57561_58970[(2)] = null);

(statearr_57561_58970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57559 === (4))){
var inst_57535 = (state_57558[(7)]);
var inst_57535__$1 = (state_57558[(2)]);
var inst_57536 = (inst_57535__$1 == null);
var state_57558__$1 = (function (){var statearr_57562 = state_57558;
(statearr_57562[(7)] = inst_57535__$1);

return statearr_57562;
})();
if(cljs.core.truth_(inst_57536)){
var statearr_57563_58971 = state_57558__$1;
(statearr_57563_58971[(1)] = (5));

} else {
var statearr_57564_58972 = state_57558__$1;
(statearr_57564_58972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57559 === (13))){
var state_57558__$1 = state_57558;
var statearr_57565_58973 = state_57558__$1;
(statearr_57565_58973[(2)] = null);

(statearr_57565_58973[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57559 === (6))){
var inst_57535 = (state_57558[(7)]);
var inst_57541 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_57535) : p.call(null,inst_57535));
var state_57558__$1 = state_57558;
if(cljs.core.truth_(inst_57541)){
var statearr_57566_58974 = state_57558__$1;
(statearr_57566_58974[(1)] = (9));

} else {
var statearr_57567_58975 = state_57558__$1;
(statearr_57567_58975[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57559 === (3))){
var inst_57556 = (state_57558[(2)]);
var state_57558__$1 = state_57558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57558__$1,inst_57556);
} else {
if((state_val_57559 === (12))){
var state_57558__$1 = state_57558;
var statearr_57568_58977 = state_57558__$1;
(statearr_57568_58977[(2)] = null);

(statearr_57568_58977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57559 === (2))){
var state_57558__$1 = state_57558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57558__$1,(4),ch);
} else {
if((state_val_57559 === (11))){
var inst_57535 = (state_57558[(7)]);
var inst_57545 = (state_57558[(2)]);
var state_57558__$1 = state_57558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57558__$1,(8),inst_57545,inst_57535);
} else {
if((state_val_57559 === (9))){
var state_57558__$1 = state_57558;
var statearr_57569_58979 = state_57558__$1;
(statearr_57569_58979[(2)] = tc);

(statearr_57569_58979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57559 === (5))){
var inst_57538 = cljs.core.async.close_BANG_(tc);
var inst_57539 = cljs.core.async.close_BANG_(fc);
var state_57558__$1 = (function (){var statearr_57570 = state_57558;
(statearr_57570[(8)] = inst_57538);

return statearr_57570;
})();
var statearr_57571_58980 = state_57558__$1;
(statearr_57571_58980[(2)] = inst_57539);

(statearr_57571_58980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57559 === (14))){
var inst_57552 = (state_57558[(2)]);
var state_57558__$1 = state_57558;
var statearr_57572_58981 = state_57558__$1;
(statearr_57572_58981[(2)] = inst_57552);

(statearr_57572_58981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57559 === (10))){
var state_57558__$1 = state_57558;
var statearr_57573_58982 = state_57558__$1;
(statearr_57573_58982[(2)] = fc);

(statearr_57573_58982[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57559 === (8))){
var inst_57547 = (state_57558[(2)]);
var state_57558__$1 = state_57558;
if(cljs.core.truth_(inst_57547)){
var statearr_57574_58983 = state_57558__$1;
(statearr_57574_58983[(1)] = (12));

} else {
var statearr_57575_58984 = state_57558__$1;
(statearr_57575_58984[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
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
return (function() {
var cljs$core$async$state_machine__57182__auto__ = null;
var cljs$core$async$state_machine__57182__auto____0 = (function (){
var statearr_57576 = [null,null,null,null,null,null,null,null,null];
(statearr_57576[(0)] = cljs$core$async$state_machine__57182__auto__);

(statearr_57576[(1)] = (1));

return statearr_57576;
});
var cljs$core$async$state_machine__57182__auto____1 = (function (state_57558){
while(true){
var ret_value__57183__auto__ = (function (){try{while(true){
var result__57184__auto__ = switch__57181__auto__(state_57558);
if(cljs.core.keyword_identical_QMARK_(result__57184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57184__auto__;
}
break;
}
}catch (e57577){var ex__57185__auto__ = e57577;
var statearr_57578_58986 = state_57558;
(statearr_57578_58986[(2)] = ex__57185__auto__);


if(cljs.core.seq((state_57558[(4)]))){
var statearr_57579_58987 = state_57558;
(statearr_57579_58987[(1)] = cljs.core.first((state_57558[(4)])));

} else {
throw ex__57185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58988 = state_57558;
state_57558 = G__58988;
continue;
} else {
return ret_value__57183__auto__;
}
break;
}
});
cljs$core$async$state_machine__57182__auto__ = function(state_57558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57182__auto____1.call(this,state_57558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57182__auto____0;
cljs$core$async$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57182__auto____1;
return cljs$core$async$state_machine__57182__auto__;
})()
})();
var state__57219__auto__ = (function (){var statearr_57580 = f__57218__auto__();
(statearr_57580[(6)] = c__57217__auto___58968);

return statearr_57580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57219__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__57217__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57218__auto__ = (function (){var switch__57181__auto__ = (function (state_57602){
var state_val_57603 = (state_57602[(1)]);
if((state_val_57603 === (7))){
var inst_57598 = (state_57602[(2)]);
var state_57602__$1 = state_57602;
var statearr_57604_58989 = state_57602__$1;
(statearr_57604_58989[(2)] = inst_57598);

(statearr_57604_58989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57603 === (1))){
var inst_57581 = init;
var inst_57582 = inst_57581;
var state_57602__$1 = (function (){var statearr_57605 = state_57602;
(statearr_57605[(7)] = inst_57582);

return statearr_57605;
})();
var statearr_57606_58990 = state_57602__$1;
(statearr_57606_58990[(2)] = null);

(statearr_57606_58990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57603 === (4))){
var inst_57585 = (state_57602[(8)]);
var inst_57585__$1 = (state_57602[(2)]);
var inst_57586 = (inst_57585__$1 == null);
var state_57602__$1 = (function (){var statearr_57607 = state_57602;
(statearr_57607[(8)] = inst_57585__$1);

return statearr_57607;
})();
if(cljs.core.truth_(inst_57586)){
var statearr_57608_58991 = state_57602__$1;
(statearr_57608_58991[(1)] = (5));

} else {
var statearr_57609_58992 = state_57602__$1;
(statearr_57609_58992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57603 === (6))){
var inst_57585 = (state_57602[(8)]);
var inst_57589 = (state_57602[(9)]);
var inst_57582 = (state_57602[(7)]);
var inst_57589__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_57582,inst_57585) : f.call(null,inst_57582,inst_57585));
var inst_57590 = cljs.core.reduced_QMARK_(inst_57589__$1);
var state_57602__$1 = (function (){var statearr_57610 = state_57602;
(statearr_57610[(9)] = inst_57589__$1);

return statearr_57610;
})();
if(inst_57590){
var statearr_57611_58997 = state_57602__$1;
(statearr_57611_58997[(1)] = (8));

} else {
var statearr_57612_58998 = state_57602__$1;
(statearr_57612_58998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57603 === (3))){
var inst_57600 = (state_57602[(2)]);
var state_57602__$1 = state_57602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57602__$1,inst_57600);
} else {
if((state_val_57603 === (2))){
var state_57602__$1 = state_57602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57602__$1,(4),ch);
} else {
if((state_val_57603 === (9))){
var inst_57589 = (state_57602[(9)]);
var inst_57582 = inst_57589;
var state_57602__$1 = (function (){var statearr_57613 = state_57602;
(statearr_57613[(7)] = inst_57582);

return statearr_57613;
})();
var statearr_57614_58999 = state_57602__$1;
(statearr_57614_58999[(2)] = null);

(statearr_57614_58999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57603 === (5))){
var inst_57582 = (state_57602[(7)]);
var state_57602__$1 = state_57602;
var statearr_57615_59000 = state_57602__$1;
(statearr_57615_59000[(2)] = inst_57582);

(statearr_57615_59000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57603 === (10))){
var inst_57596 = (state_57602[(2)]);
var state_57602__$1 = state_57602;
var statearr_57616_59001 = state_57602__$1;
(statearr_57616_59001[(2)] = inst_57596);

(statearr_57616_59001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57603 === (8))){
var inst_57589 = (state_57602[(9)]);
var inst_57592 = cljs.core.deref(inst_57589);
var state_57602__$1 = state_57602;
var statearr_57617_59002 = state_57602__$1;
(statearr_57617_59002[(2)] = inst_57592);

(statearr_57617_59002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
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
return (function() {
var cljs$core$async$reduce_$_state_machine__57182__auto__ = null;
var cljs$core$async$reduce_$_state_machine__57182__auto____0 = (function (){
var statearr_57618 = [null,null,null,null,null,null,null,null,null,null];
(statearr_57618[(0)] = cljs$core$async$reduce_$_state_machine__57182__auto__);

(statearr_57618[(1)] = (1));

return statearr_57618;
});
var cljs$core$async$reduce_$_state_machine__57182__auto____1 = (function (state_57602){
while(true){
var ret_value__57183__auto__ = (function (){try{while(true){
var result__57184__auto__ = switch__57181__auto__(state_57602);
if(cljs.core.keyword_identical_QMARK_(result__57184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57184__auto__;
}
break;
}
}catch (e57619){var ex__57185__auto__ = e57619;
var statearr_57620_59003 = state_57602;
(statearr_57620_59003[(2)] = ex__57185__auto__);


if(cljs.core.seq((state_57602[(4)]))){
var statearr_57621_59004 = state_57602;
(statearr_57621_59004[(1)] = cljs.core.first((state_57602[(4)])));

} else {
throw ex__57185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59005 = state_57602;
state_57602 = G__59005;
continue;
} else {
return ret_value__57183__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__57182__auto__ = function(state_57602){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__57182__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__57182__auto____1.call(this,state_57602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__57182__auto____0;
cljs$core$async$reduce_$_state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__57182__auto____1;
return cljs$core$async$reduce_$_state_machine__57182__auto__;
})()
})();
var state__57219__auto__ = (function (){var statearr_57622 = f__57218__auto__();
(statearr_57622[(6)] = c__57217__auto__);

return statearr_57622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57219__auto__);
}));

return c__57217__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__57217__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57218__auto__ = (function (){var switch__57181__auto__ = (function (state_57628){
var state_val_57629 = (state_57628[(1)]);
if((state_val_57629 === (1))){
var inst_57623 = cljs.core.async.reduce(f__$1,init,ch);
var state_57628__$1 = state_57628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57628__$1,(2),inst_57623);
} else {
if((state_val_57629 === (2))){
var inst_57625 = (state_57628[(2)]);
var inst_57626 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_57625) : f__$1.call(null,inst_57625));
var state_57628__$1 = state_57628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57628__$1,inst_57626);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__57182__auto__ = null;
var cljs$core$async$transduce_$_state_machine__57182__auto____0 = (function (){
var statearr_57630 = [null,null,null,null,null,null,null];
(statearr_57630[(0)] = cljs$core$async$transduce_$_state_machine__57182__auto__);

(statearr_57630[(1)] = (1));

return statearr_57630;
});
var cljs$core$async$transduce_$_state_machine__57182__auto____1 = (function (state_57628){
while(true){
var ret_value__57183__auto__ = (function (){try{while(true){
var result__57184__auto__ = switch__57181__auto__(state_57628);
if(cljs.core.keyword_identical_QMARK_(result__57184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57184__auto__;
}
break;
}
}catch (e57631){var ex__57185__auto__ = e57631;
var statearr_57632_59008 = state_57628;
(statearr_57632_59008[(2)] = ex__57185__auto__);


if(cljs.core.seq((state_57628[(4)]))){
var statearr_57633_59009 = state_57628;
(statearr_57633_59009[(1)] = cljs.core.first((state_57628[(4)])));

} else {
throw ex__57185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59010 = state_57628;
state_57628 = G__59010;
continue;
} else {
return ret_value__57183__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__57182__auto__ = function(state_57628){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__57182__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__57182__auto____1.call(this,state_57628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__57182__auto____0;
cljs$core$async$transduce_$_state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__57182__auto____1;
return cljs$core$async$transduce_$_state_machine__57182__auto__;
})()
})();
var state__57219__auto__ = (function (){var statearr_57634 = f__57218__auto__();
(statearr_57634[(6)] = c__57217__auto__);

return statearr_57634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57219__auto__);
}));

return c__57217__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__57636 = arguments.length;
switch (G__57636) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__57217__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57218__auto__ = (function (){var switch__57181__auto__ = (function (state_57661){
var state_val_57662 = (state_57661[(1)]);
if((state_val_57662 === (7))){
var inst_57643 = (state_57661[(2)]);
var state_57661__$1 = state_57661;
var statearr_57663_59012 = state_57661__$1;
(statearr_57663_59012[(2)] = inst_57643);

(statearr_57663_59012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57662 === (1))){
var inst_57637 = cljs.core.seq(coll);
var inst_57638 = inst_57637;
var state_57661__$1 = (function (){var statearr_57664 = state_57661;
(statearr_57664[(7)] = inst_57638);

return statearr_57664;
})();
var statearr_57665_59017 = state_57661__$1;
(statearr_57665_59017[(2)] = null);

(statearr_57665_59017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57662 === (4))){
var inst_57638 = (state_57661[(7)]);
var inst_57641 = cljs.core.first(inst_57638);
var state_57661__$1 = state_57661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57661__$1,(7),ch,inst_57641);
} else {
if((state_val_57662 === (13))){
var inst_57655 = (state_57661[(2)]);
var state_57661__$1 = state_57661;
var statearr_57666_59021 = state_57661__$1;
(statearr_57666_59021[(2)] = inst_57655);

(statearr_57666_59021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57662 === (6))){
var inst_57646 = (state_57661[(2)]);
var state_57661__$1 = state_57661;
if(cljs.core.truth_(inst_57646)){
var statearr_57667_59022 = state_57661__$1;
(statearr_57667_59022[(1)] = (8));

} else {
var statearr_57668_59026 = state_57661__$1;
(statearr_57668_59026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57662 === (3))){
var inst_57659 = (state_57661[(2)]);
var state_57661__$1 = state_57661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57661__$1,inst_57659);
} else {
if((state_val_57662 === (12))){
var state_57661__$1 = state_57661;
var statearr_57669_59027 = state_57661__$1;
(statearr_57669_59027[(2)] = null);

(statearr_57669_59027[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57662 === (2))){
var inst_57638 = (state_57661[(7)]);
var state_57661__$1 = state_57661;
if(cljs.core.truth_(inst_57638)){
var statearr_57670_59031 = state_57661__$1;
(statearr_57670_59031[(1)] = (4));

} else {
var statearr_57671_59032 = state_57661__$1;
(statearr_57671_59032[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57662 === (11))){
var inst_57652 = cljs.core.async.close_BANG_(ch);
var state_57661__$1 = state_57661;
var statearr_57672_59033 = state_57661__$1;
(statearr_57672_59033[(2)] = inst_57652);

(statearr_57672_59033[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57662 === (9))){
var state_57661__$1 = state_57661;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57673_59034 = state_57661__$1;
(statearr_57673_59034[(1)] = (11));

} else {
var statearr_57674_59035 = state_57661__$1;
(statearr_57674_59035[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57662 === (5))){
var inst_57638 = (state_57661[(7)]);
var state_57661__$1 = state_57661;
var statearr_57675_59039 = state_57661__$1;
(statearr_57675_59039[(2)] = inst_57638);

(statearr_57675_59039[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57662 === (10))){
var inst_57657 = (state_57661[(2)]);
var state_57661__$1 = state_57661;
var statearr_57676_59040 = state_57661__$1;
(statearr_57676_59040[(2)] = inst_57657);

(statearr_57676_59040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57662 === (8))){
var inst_57638 = (state_57661[(7)]);
var inst_57648 = cljs.core.next(inst_57638);
var inst_57638__$1 = inst_57648;
var state_57661__$1 = (function (){var statearr_57677 = state_57661;
(statearr_57677[(7)] = inst_57638__$1);

return statearr_57677;
})();
var statearr_57678_59041 = state_57661__$1;
(statearr_57678_59041[(2)] = null);

(statearr_57678_59041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
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
return (function() {
var cljs$core$async$state_machine__57182__auto__ = null;
var cljs$core$async$state_machine__57182__auto____0 = (function (){
var statearr_57679 = [null,null,null,null,null,null,null,null];
(statearr_57679[(0)] = cljs$core$async$state_machine__57182__auto__);

(statearr_57679[(1)] = (1));

return statearr_57679;
});
var cljs$core$async$state_machine__57182__auto____1 = (function (state_57661){
while(true){
var ret_value__57183__auto__ = (function (){try{while(true){
var result__57184__auto__ = switch__57181__auto__(state_57661);
if(cljs.core.keyword_identical_QMARK_(result__57184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57184__auto__;
}
break;
}
}catch (e57680){var ex__57185__auto__ = e57680;
var statearr_57681_59049 = state_57661;
(statearr_57681_59049[(2)] = ex__57185__auto__);


if(cljs.core.seq((state_57661[(4)]))){
var statearr_57682_59050 = state_57661;
(statearr_57682_59050[(1)] = cljs.core.first((state_57661[(4)])));

} else {
throw ex__57185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59051 = state_57661;
state_57661 = G__59051;
continue;
} else {
return ret_value__57183__auto__;
}
break;
}
});
cljs$core$async$state_machine__57182__auto__ = function(state_57661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57182__auto____1.call(this,state_57661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57182__auto____0;
cljs$core$async$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57182__auto____1;
return cljs$core$async$state_machine__57182__auto__;
})()
})();
var state__57219__auto__ = (function (){var statearr_57683 = f__57218__auto__();
(statearr_57683[(6)] = c__57217__auto__);

return statearr_57683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57219__auto__);
}));

return c__57217__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_59055 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_59055(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_59059 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_59059(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_59063 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_59063(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_59065 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_59065(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57684 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57684 = (function (ch,cs,meta57685){
this.ch = ch;
this.cs = cs;
this.meta57685 = meta57685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57686,meta57685__$1){
var self__ = this;
var _57686__$1 = this;
return (new cljs.core.async.t_cljs$core$async57684(self__.ch,self__.cs,meta57685__$1));
}));

(cljs.core.async.t_cljs$core$async57684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57686){
var self__ = this;
var _57686__$1 = this;
return self__.meta57685;
}));

(cljs.core.async.t_cljs$core$async57684.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57684.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async57684.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57684.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async57684.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async57684.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async57684.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta57685","meta57685",-207185327,null)], null);
}));

(cljs.core.async.t_cljs$core$async57684.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57684");

(cljs.core.async.t_cljs$core$async57684.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57684");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57684.
 */
cljs.core.async.__GT_t_cljs$core$async57684 = (function cljs$core$async$mult_$___GT_t_cljs$core$async57684(ch__$1,cs__$1,meta57685){
return (new cljs.core.async.t_cljs$core$async57684(ch__$1,cs__$1,meta57685));
});

}

return (new cljs.core.async.t_cljs$core$async57684(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__57217__auto___59066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57218__auto__ = (function (){var switch__57181__auto__ = (function (state_57819){
var state_val_57820 = (state_57819[(1)]);
if((state_val_57820 === (7))){
var inst_57815 = (state_57819[(2)]);
var state_57819__$1 = state_57819;
var statearr_57821_59067 = state_57819__$1;
(statearr_57821_59067[(2)] = inst_57815);

(statearr_57821_59067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (20))){
var inst_57720 = (state_57819[(7)]);
var inst_57732 = cljs.core.first(inst_57720);
var inst_57733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57732,(0),null);
var inst_57734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57732,(1),null);
var state_57819__$1 = (function (){var statearr_57822 = state_57819;
(statearr_57822[(8)] = inst_57733);

return statearr_57822;
})();
if(cljs.core.truth_(inst_57734)){
var statearr_57823_59068 = state_57819__$1;
(statearr_57823_59068[(1)] = (22));

} else {
var statearr_57824_59069 = state_57819__$1;
(statearr_57824_59069[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (27))){
var inst_57769 = (state_57819[(9)]);
var inst_57689 = (state_57819[(10)]);
var inst_57764 = (state_57819[(11)]);
var inst_57762 = (state_57819[(12)]);
var inst_57769__$1 = cljs.core._nth(inst_57762,inst_57764);
var inst_57770 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_57769__$1,inst_57689,done);
var state_57819__$1 = (function (){var statearr_57825 = state_57819;
(statearr_57825[(9)] = inst_57769__$1);

return statearr_57825;
})();
if(cljs.core.truth_(inst_57770)){
var statearr_57826_59073 = state_57819__$1;
(statearr_57826_59073[(1)] = (30));

} else {
var statearr_57827_59074 = state_57819__$1;
(statearr_57827_59074[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (1))){
var state_57819__$1 = state_57819;
var statearr_57828_59078 = state_57819__$1;
(statearr_57828_59078[(2)] = null);

(statearr_57828_59078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (24))){
var inst_57720 = (state_57819[(7)]);
var inst_57739 = (state_57819[(2)]);
var inst_57740 = cljs.core.next(inst_57720);
var inst_57698 = inst_57740;
var inst_57699 = null;
var inst_57700 = (0);
var inst_57701 = (0);
var state_57819__$1 = (function (){var statearr_57829 = state_57819;
(statearr_57829[(13)] = inst_57739);

(statearr_57829[(14)] = inst_57698);

(statearr_57829[(15)] = inst_57699);

(statearr_57829[(16)] = inst_57701);

(statearr_57829[(17)] = inst_57700);

return statearr_57829;
})();
var statearr_57830_59080 = state_57819__$1;
(statearr_57830_59080[(2)] = null);

(statearr_57830_59080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (39))){
var state_57819__$1 = state_57819;
var statearr_57834_59082 = state_57819__$1;
(statearr_57834_59082[(2)] = null);

(statearr_57834_59082[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (4))){
var inst_57689 = (state_57819[(10)]);
var inst_57689__$1 = (state_57819[(2)]);
var inst_57690 = (inst_57689__$1 == null);
var state_57819__$1 = (function (){var statearr_57835 = state_57819;
(statearr_57835[(10)] = inst_57689__$1);

return statearr_57835;
})();
if(cljs.core.truth_(inst_57690)){
var statearr_57836_59084 = state_57819__$1;
(statearr_57836_59084[(1)] = (5));

} else {
var statearr_57837_59085 = state_57819__$1;
(statearr_57837_59085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (15))){
var inst_57698 = (state_57819[(14)]);
var inst_57699 = (state_57819[(15)]);
var inst_57701 = (state_57819[(16)]);
var inst_57700 = (state_57819[(17)]);
var inst_57716 = (state_57819[(2)]);
var inst_57717 = (inst_57701 + (1));
var tmp57831 = inst_57698;
var tmp57832 = inst_57699;
var tmp57833 = inst_57700;
var inst_57698__$1 = tmp57831;
var inst_57699__$1 = tmp57832;
var inst_57700__$1 = tmp57833;
var inst_57701__$1 = inst_57717;
var state_57819__$1 = (function (){var statearr_57838 = state_57819;
(statearr_57838[(14)] = inst_57698__$1);

(statearr_57838[(15)] = inst_57699__$1);

(statearr_57838[(18)] = inst_57716);

(statearr_57838[(16)] = inst_57701__$1);

(statearr_57838[(17)] = inst_57700__$1);

return statearr_57838;
})();
var statearr_57839_59086 = state_57819__$1;
(statearr_57839_59086[(2)] = null);

(statearr_57839_59086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (21))){
var inst_57743 = (state_57819[(2)]);
var state_57819__$1 = state_57819;
var statearr_57843_59087 = state_57819__$1;
(statearr_57843_59087[(2)] = inst_57743);

(statearr_57843_59087[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (31))){
var inst_57769 = (state_57819[(9)]);
var inst_57773 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_57769);
var state_57819__$1 = state_57819;
var statearr_57844_59088 = state_57819__$1;
(statearr_57844_59088[(2)] = inst_57773);

(statearr_57844_59088[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (32))){
var inst_57763 = (state_57819[(19)]);
var inst_57761 = (state_57819[(20)]);
var inst_57764 = (state_57819[(11)]);
var inst_57762 = (state_57819[(12)]);
var inst_57775 = (state_57819[(2)]);
var inst_57776 = (inst_57764 + (1));
var tmp57840 = inst_57763;
var tmp57841 = inst_57761;
var tmp57842 = inst_57762;
var inst_57761__$1 = tmp57841;
var inst_57762__$1 = tmp57842;
var inst_57763__$1 = tmp57840;
var inst_57764__$1 = inst_57776;
var state_57819__$1 = (function (){var statearr_57845 = state_57819;
(statearr_57845[(21)] = inst_57775);

(statearr_57845[(19)] = inst_57763__$1);

(statearr_57845[(20)] = inst_57761__$1);

(statearr_57845[(11)] = inst_57764__$1);

(statearr_57845[(12)] = inst_57762__$1);

return statearr_57845;
})();
var statearr_57846_59093 = state_57819__$1;
(statearr_57846_59093[(2)] = null);

(statearr_57846_59093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (40))){
var inst_57788 = (state_57819[(22)]);
var inst_57792 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_57788);
var state_57819__$1 = state_57819;
var statearr_57847_59094 = state_57819__$1;
(statearr_57847_59094[(2)] = inst_57792);

(statearr_57847_59094[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (33))){
var inst_57779 = (state_57819[(23)]);
var inst_57781 = cljs.core.chunked_seq_QMARK_(inst_57779);
var state_57819__$1 = state_57819;
if(inst_57781){
var statearr_57848_59099 = state_57819__$1;
(statearr_57848_59099[(1)] = (36));

} else {
var statearr_57849_59100 = state_57819__$1;
(statearr_57849_59100[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (13))){
var inst_57710 = (state_57819[(24)]);
var inst_57713 = cljs.core.async.close_BANG_(inst_57710);
var state_57819__$1 = state_57819;
var statearr_57850_59101 = state_57819__$1;
(statearr_57850_59101[(2)] = inst_57713);

(statearr_57850_59101[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (22))){
var inst_57733 = (state_57819[(8)]);
var inst_57736 = cljs.core.async.close_BANG_(inst_57733);
var state_57819__$1 = state_57819;
var statearr_57851_59102 = state_57819__$1;
(statearr_57851_59102[(2)] = inst_57736);

(statearr_57851_59102[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (36))){
var inst_57779 = (state_57819[(23)]);
var inst_57783 = cljs.core.chunk_first(inst_57779);
var inst_57784 = cljs.core.chunk_rest(inst_57779);
var inst_57785 = cljs.core.count(inst_57783);
var inst_57761 = inst_57784;
var inst_57762 = inst_57783;
var inst_57763 = inst_57785;
var inst_57764 = (0);
var state_57819__$1 = (function (){var statearr_57852 = state_57819;
(statearr_57852[(19)] = inst_57763);

(statearr_57852[(20)] = inst_57761);

(statearr_57852[(11)] = inst_57764);

(statearr_57852[(12)] = inst_57762);

return statearr_57852;
})();
var statearr_57853_59110 = state_57819__$1;
(statearr_57853_59110[(2)] = null);

(statearr_57853_59110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (41))){
var inst_57779 = (state_57819[(23)]);
var inst_57794 = (state_57819[(2)]);
var inst_57795 = cljs.core.next(inst_57779);
var inst_57761 = inst_57795;
var inst_57762 = null;
var inst_57763 = (0);
var inst_57764 = (0);
var state_57819__$1 = (function (){var statearr_57854 = state_57819;
(statearr_57854[(19)] = inst_57763);

(statearr_57854[(25)] = inst_57794);

(statearr_57854[(20)] = inst_57761);

(statearr_57854[(11)] = inst_57764);

(statearr_57854[(12)] = inst_57762);

return statearr_57854;
})();
var statearr_57855_59117 = state_57819__$1;
(statearr_57855_59117[(2)] = null);

(statearr_57855_59117[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (43))){
var state_57819__$1 = state_57819;
var statearr_57856_59118 = state_57819__$1;
(statearr_57856_59118[(2)] = null);

(statearr_57856_59118[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (29))){
var inst_57803 = (state_57819[(2)]);
var state_57819__$1 = state_57819;
var statearr_57857_59119 = state_57819__$1;
(statearr_57857_59119[(2)] = inst_57803);

(statearr_57857_59119[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (44))){
var inst_57812 = (state_57819[(2)]);
var state_57819__$1 = (function (){var statearr_57858 = state_57819;
(statearr_57858[(26)] = inst_57812);

return statearr_57858;
})();
var statearr_57859_59120 = state_57819__$1;
(statearr_57859_59120[(2)] = null);

(statearr_57859_59120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (6))){
var inst_57753 = (state_57819[(27)]);
var inst_57752 = cljs.core.deref(cs);
var inst_57753__$1 = cljs.core.keys(inst_57752);
var inst_57754 = cljs.core.count(inst_57753__$1);
var inst_57755 = cljs.core.reset_BANG_(dctr,inst_57754);
var inst_57760 = cljs.core.seq(inst_57753__$1);
var inst_57761 = inst_57760;
var inst_57762 = null;
var inst_57763 = (0);
var inst_57764 = (0);
var state_57819__$1 = (function (){var statearr_57860 = state_57819;
(statearr_57860[(28)] = inst_57755);

(statearr_57860[(19)] = inst_57763);

(statearr_57860[(27)] = inst_57753__$1);

(statearr_57860[(20)] = inst_57761);

(statearr_57860[(11)] = inst_57764);

(statearr_57860[(12)] = inst_57762);

return statearr_57860;
})();
var statearr_57861_59121 = state_57819__$1;
(statearr_57861_59121[(2)] = null);

(statearr_57861_59121[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (28))){
var inst_57779 = (state_57819[(23)]);
var inst_57761 = (state_57819[(20)]);
var inst_57779__$1 = cljs.core.seq(inst_57761);
var state_57819__$1 = (function (){var statearr_57862 = state_57819;
(statearr_57862[(23)] = inst_57779__$1);

return statearr_57862;
})();
if(inst_57779__$1){
var statearr_57863_59122 = state_57819__$1;
(statearr_57863_59122[(1)] = (33));

} else {
var statearr_57864_59123 = state_57819__$1;
(statearr_57864_59123[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (25))){
var inst_57763 = (state_57819[(19)]);
var inst_57764 = (state_57819[(11)]);
var inst_57766 = (inst_57764 < inst_57763);
var inst_57767 = inst_57766;
var state_57819__$1 = state_57819;
if(cljs.core.truth_(inst_57767)){
var statearr_57865_59124 = state_57819__$1;
(statearr_57865_59124[(1)] = (27));

} else {
var statearr_57866_59125 = state_57819__$1;
(statearr_57866_59125[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (34))){
var state_57819__$1 = state_57819;
var statearr_57867_59126 = state_57819__$1;
(statearr_57867_59126[(2)] = null);

(statearr_57867_59126[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (17))){
var state_57819__$1 = state_57819;
var statearr_57868_59133 = state_57819__$1;
(statearr_57868_59133[(2)] = null);

(statearr_57868_59133[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (3))){
var inst_57817 = (state_57819[(2)]);
var state_57819__$1 = state_57819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57819__$1,inst_57817);
} else {
if((state_val_57820 === (12))){
var inst_57748 = (state_57819[(2)]);
var state_57819__$1 = state_57819;
var statearr_57869_59134 = state_57819__$1;
(statearr_57869_59134[(2)] = inst_57748);

(statearr_57869_59134[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (2))){
var state_57819__$1 = state_57819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57819__$1,(4),ch);
} else {
if((state_val_57820 === (23))){
var state_57819__$1 = state_57819;
var statearr_57870_59135 = state_57819__$1;
(statearr_57870_59135[(2)] = null);

(statearr_57870_59135[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (35))){
var inst_57801 = (state_57819[(2)]);
var state_57819__$1 = state_57819;
var statearr_57871_59136 = state_57819__$1;
(statearr_57871_59136[(2)] = inst_57801);

(statearr_57871_59136[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (19))){
var inst_57720 = (state_57819[(7)]);
var inst_57724 = cljs.core.chunk_first(inst_57720);
var inst_57725 = cljs.core.chunk_rest(inst_57720);
var inst_57726 = cljs.core.count(inst_57724);
var inst_57698 = inst_57725;
var inst_57699 = inst_57724;
var inst_57700 = inst_57726;
var inst_57701 = (0);
var state_57819__$1 = (function (){var statearr_57872 = state_57819;
(statearr_57872[(14)] = inst_57698);

(statearr_57872[(15)] = inst_57699);

(statearr_57872[(16)] = inst_57701);

(statearr_57872[(17)] = inst_57700);

return statearr_57872;
})();
var statearr_57873_59137 = state_57819__$1;
(statearr_57873_59137[(2)] = null);

(statearr_57873_59137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (11))){
var inst_57698 = (state_57819[(14)]);
var inst_57720 = (state_57819[(7)]);
var inst_57720__$1 = cljs.core.seq(inst_57698);
var state_57819__$1 = (function (){var statearr_57874 = state_57819;
(statearr_57874[(7)] = inst_57720__$1);

return statearr_57874;
})();
if(inst_57720__$1){
var statearr_57875_59138 = state_57819__$1;
(statearr_57875_59138[(1)] = (16));

} else {
var statearr_57876_59139 = state_57819__$1;
(statearr_57876_59139[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (9))){
var inst_57750 = (state_57819[(2)]);
var state_57819__$1 = state_57819;
var statearr_57877_59140 = state_57819__$1;
(statearr_57877_59140[(2)] = inst_57750);

(statearr_57877_59140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (5))){
var inst_57696 = cljs.core.deref(cs);
var inst_57697 = cljs.core.seq(inst_57696);
var inst_57698 = inst_57697;
var inst_57699 = null;
var inst_57700 = (0);
var inst_57701 = (0);
var state_57819__$1 = (function (){var statearr_57878 = state_57819;
(statearr_57878[(14)] = inst_57698);

(statearr_57878[(15)] = inst_57699);

(statearr_57878[(16)] = inst_57701);

(statearr_57878[(17)] = inst_57700);

return statearr_57878;
})();
var statearr_57879_59147 = state_57819__$1;
(statearr_57879_59147[(2)] = null);

(statearr_57879_59147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (14))){
var state_57819__$1 = state_57819;
var statearr_57880_59148 = state_57819__$1;
(statearr_57880_59148[(2)] = null);

(statearr_57880_59148[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (45))){
var inst_57809 = (state_57819[(2)]);
var state_57819__$1 = state_57819;
var statearr_57881_59149 = state_57819__$1;
(statearr_57881_59149[(2)] = inst_57809);

(statearr_57881_59149[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (26))){
var inst_57753 = (state_57819[(27)]);
var inst_57805 = (state_57819[(2)]);
var inst_57806 = cljs.core.seq(inst_57753);
var state_57819__$1 = (function (){var statearr_57882 = state_57819;
(statearr_57882[(29)] = inst_57805);

return statearr_57882;
})();
if(inst_57806){
var statearr_57883_59150 = state_57819__$1;
(statearr_57883_59150[(1)] = (42));

} else {
var statearr_57884_59151 = state_57819__$1;
(statearr_57884_59151[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (16))){
var inst_57720 = (state_57819[(7)]);
var inst_57722 = cljs.core.chunked_seq_QMARK_(inst_57720);
var state_57819__$1 = state_57819;
if(inst_57722){
var statearr_57885_59152 = state_57819__$1;
(statearr_57885_59152[(1)] = (19));

} else {
var statearr_57886_59153 = state_57819__$1;
(statearr_57886_59153[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (38))){
var inst_57798 = (state_57819[(2)]);
var state_57819__$1 = state_57819;
var statearr_57887_59154 = state_57819__$1;
(statearr_57887_59154[(2)] = inst_57798);

(statearr_57887_59154[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (30))){
var state_57819__$1 = state_57819;
var statearr_57888_59155 = state_57819__$1;
(statearr_57888_59155[(2)] = null);

(statearr_57888_59155[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (10))){
var inst_57699 = (state_57819[(15)]);
var inst_57701 = (state_57819[(16)]);
var inst_57709 = cljs.core._nth(inst_57699,inst_57701);
var inst_57710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57709,(0),null);
var inst_57711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57709,(1),null);
var state_57819__$1 = (function (){var statearr_57889 = state_57819;
(statearr_57889[(24)] = inst_57710);

return statearr_57889;
})();
if(cljs.core.truth_(inst_57711)){
var statearr_57890_59156 = state_57819__$1;
(statearr_57890_59156[(1)] = (13));

} else {
var statearr_57891_59157 = state_57819__$1;
(statearr_57891_59157[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (18))){
var inst_57746 = (state_57819[(2)]);
var state_57819__$1 = state_57819;
var statearr_57892_59158 = state_57819__$1;
(statearr_57892_59158[(2)] = inst_57746);

(statearr_57892_59158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (42))){
var state_57819__$1 = state_57819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57819__$1,(45),dchan);
} else {
if((state_val_57820 === (37))){
var inst_57779 = (state_57819[(23)]);
var inst_57788 = (state_57819[(22)]);
var inst_57689 = (state_57819[(10)]);
var inst_57788__$1 = cljs.core.first(inst_57779);
var inst_57789 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_57788__$1,inst_57689,done);
var state_57819__$1 = (function (){var statearr_57893 = state_57819;
(statearr_57893[(22)] = inst_57788__$1);

return statearr_57893;
})();
if(cljs.core.truth_(inst_57789)){
var statearr_57894_59165 = state_57819__$1;
(statearr_57894_59165[(1)] = (39));

} else {
var statearr_57895_59166 = state_57819__$1;
(statearr_57895_59166[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57820 === (8))){
var inst_57701 = (state_57819[(16)]);
var inst_57700 = (state_57819[(17)]);
var inst_57703 = (inst_57701 < inst_57700);
var inst_57704 = inst_57703;
var state_57819__$1 = state_57819;
if(cljs.core.truth_(inst_57704)){
var statearr_57896_59167 = state_57819__$1;
(statearr_57896_59167[(1)] = (10));

} else {
var statearr_57897_59168 = state_57819__$1;
(statearr_57897_59168[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
return (function() {
var cljs$core$async$mult_$_state_machine__57182__auto__ = null;
var cljs$core$async$mult_$_state_machine__57182__auto____0 = (function (){
var statearr_57898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57898[(0)] = cljs$core$async$mult_$_state_machine__57182__auto__);

(statearr_57898[(1)] = (1));

return statearr_57898;
});
var cljs$core$async$mult_$_state_machine__57182__auto____1 = (function (state_57819){
while(true){
var ret_value__57183__auto__ = (function (){try{while(true){
var result__57184__auto__ = switch__57181__auto__(state_57819);
if(cljs.core.keyword_identical_QMARK_(result__57184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57184__auto__;
}
break;
}
}catch (e57899){var ex__57185__auto__ = e57899;
var statearr_57900_59169 = state_57819;
(statearr_57900_59169[(2)] = ex__57185__auto__);


if(cljs.core.seq((state_57819[(4)]))){
var statearr_57901_59170 = state_57819;
(statearr_57901_59170[(1)] = cljs.core.first((state_57819[(4)])));

} else {
throw ex__57185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59171 = state_57819;
state_57819 = G__59171;
continue;
} else {
return ret_value__57183__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__57182__auto__ = function(state_57819){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__57182__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__57182__auto____1.call(this,state_57819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__57182__auto____0;
cljs$core$async$mult_$_state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__57182__auto____1;
return cljs$core$async$mult_$_state_machine__57182__auto__;
})()
})();
var state__57219__auto__ = (function (){var statearr_57902 = f__57218__auto__();
(statearr_57902[(6)] = c__57217__auto___59066);

return statearr_57902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57219__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__57904 = arguments.length;
switch (G__57904) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_59173 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_59173(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_59174 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_59174(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_59175 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_59175(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_59176 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_59176(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_59178 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_59178(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59183 = arguments.length;
var i__4737__auto___59184 = (0);
while(true){
if((i__4737__auto___59184 < len__4736__auto___59183)){
args__4742__auto__.push((arguments[i__4737__auto___59184]));

var G__59185 = (i__4737__auto___59184 + (1));
i__4737__auto___59184 = G__59185;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__57909){
var map__57910 = p__57909;
var map__57910__$1 = (((((!((map__57910 == null))))?(((((map__57910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57910):map__57910);
var opts = map__57910__$1;
var statearr_57912_59186 = state;
(statearr_57912_59186[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_57913_59187 = state;
(statearr_57913_59187[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_57914_59188 = state;
(statearr_57914_59188[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq57905){
var G__57906 = cljs.core.first(seq57905);
var seq57905__$1 = cljs.core.next(seq57905);
var G__57907 = cljs.core.first(seq57905__$1);
var seq57905__$2 = cljs.core.next(seq57905__$1);
var G__57908 = cljs.core.first(seq57905__$2);
var seq57905__$3 = cljs.core.next(seq57905__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57906,G__57907,G__57908,seq57905__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57915 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57915 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta57916){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta57916 = meta57916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57917,meta57916__$1){
var self__ = this;
var _57917__$1 = this;
return (new cljs.core.async.t_cljs$core$async57915(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta57916__$1));
}));

(cljs.core.async.t_cljs$core$async57915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57917){
var self__ = this;
var _57917__$1 = this;
return self__.meta57916;
}));

(cljs.core.async.t_cljs$core$async57915.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57915.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async57915.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57915.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57915.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57915.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57915.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57915.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta57916","meta57916",882857097,null)], null);
}));

(cljs.core.async.t_cljs$core$async57915.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57915");

(cljs.core.async.t_cljs$core$async57915.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57915");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57915.
 */
cljs.core.async.__GT_t_cljs$core$async57915 = (function cljs$core$async$mix_$___GT_t_cljs$core$async57915(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57916){
return (new cljs.core.async.t_cljs$core$async57915(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57916));
});

}

return (new cljs.core.async.t_cljs$core$async57915(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__57217__auto___59193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57218__auto__ = (function (){var switch__57181__auto__ = (function (state_58019){
var state_val_58020 = (state_58019[(1)]);
if((state_val_58020 === (7))){
var inst_57934 = (state_58019[(2)]);
var state_58019__$1 = state_58019;
var statearr_58021_59194 = state_58019__$1;
(statearr_58021_59194[(2)] = inst_57934);

(statearr_58021_59194[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (20))){
var inst_57946 = (state_58019[(7)]);
var state_58019__$1 = state_58019;
var statearr_58022_59195 = state_58019__$1;
(statearr_58022_59195[(2)] = inst_57946);

(statearr_58022_59195[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (27))){
var state_58019__$1 = state_58019;
var statearr_58023_59196 = state_58019__$1;
(statearr_58023_59196[(2)] = null);

(statearr_58023_59196[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (1))){
var inst_57921 = (state_58019[(8)]);
var inst_57921__$1 = calc_state();
var inst_57923 = (inst_57921__$1 == null);
var inst_57924 = cljs.core.not(inst_57923);
var state_58019__$1 = (function (){var statearr_58024 = state_58019;
(statearr_58024[(8)] = inst_57921__$1);

return statearr_58024;
})();
if(inst_57924){
var statearr_58025_59199 = state_58019__$1;
(statearr_58025_59199[(1)] = (2));

} else {
var statearr_58026_59200 = state_58019__$1;
(statearr_58026_59200[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (24))){
var inst_57970 = (state_58019[(9)]);
var inst_57979 = (state_58019[(10)]);
var inst_57993 = (state_58019[(11)]);
var inst_57993__$1 = (inst_57970.cljs$core$IFn$_invoke$arity$1 ? inst_57970.cljs$core$IFn$_invoke$arity$1(inst_57979) : inst_57970.call(null,inst_57979));
var state_58019__$1 = (function (){var statearr_58027 = state_58019;
(statearr_58027[(11)] = inst_57993__$1);

return statearr_58027;
})();
if(cljs.core.truth_(inst_57993__$1)){
var statearr_58028_59201 = state_58019__$1;
(statearr_58028_59201[(1)] = (29));

} else {
var statearr_58029_59202 = state_58019__$1;
(statearr_58029_59202[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (4))){
var inst_57937 = (state_58019[(2)]);
var state_58019__$1 = state_58019;
if(cljs.core.truth_(inst_57937)){
var statearr_58030_59203 = state_58019__$1;
(statearr_58030_59203[(1)] = (8));

} else {
var statearr_58031_59204 = state_58019__$1;
(statearr_58031_59204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (15))){
var inst_57964 = (state_58019[(2)]);
var state_58019__$1 = state_58019;
if(cljs.core.truth_(inst_57964)){
var statearr_58032_59205 = state_58019__$1;
(statearr_58032_59205[(1)] = (19));

} else {
var statearr_58033_59206 = state_58019__$1;
(statearr_58033_59206[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (21))){
var inst_57969 = (state_58019[(12)]);
var inst_57969__$1 = (state_58019[(2)]);
var inst_57970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57969__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57969__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57969__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_58019__$1 = (function (){var statearr_58034 = state_58019;
(statearr_58034[(13)] = inst_57971);

(statearr_58034[(9)] = inst_57970);

(statearr_58034[(12)] = inst_57969__$1);

return statearr_58034;
})();
return cljs.core.async.ioc_alts_BANG_(state_58019__$1,(22),inst_57972);
} else {
if((state_val_58020 === (31))){
var inst_58001 = (state_58019[(2)]);
var state_58019__$1 = state_58019;
if(cljs.core.truth_(inst_58001)){
var statearr_58035_59207 = state_58019__$1;
(statearr_58035_59207[(1)] = (32));

} else {
var statearr_58036_59208 = state_58019__$1;
(statearr_58036_59208[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (32))){
var inst_57978 = (state_58019[(14)]);
var state_58019__$1 = state_58019;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58019__$1,(35),out,inst_57978);
} else {
if((state_val_58020 === (33))){
var inst_57969 = (state_58019[(12)]);
var inst_57946 = inst_57969;
var state_58019__$1 = (function (){var statearr_58037 = state_58019;
(statearr_58037[(7)] = inst_57946);

return statearr_58037;
})();
var statearr_58038_59209 = state_58019__$1;
(statearr_58038_59209[(2)] = null);

(statearr_58038_59209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (13))){
var inst_57946 = (state_58019[(7)]);
var inst_57953 = inst_57946.cljs$lang$protocol_mask$partition0$;
var inst_57954 = (inst_57953 & (64));
var inst_57955 = inst_57946.cljs$core$ISeq$;
var inst_57956 = (cljs.core.PROTOCOL_SENTINEL === inst_57955);
var inst_57957 = ((inst_57954) || (inst_57956));
var state_58019__$1 = state_58019;
if(cljs.core.truth_(inst_57957)){
var statearr_58039_59210 = state_58019__$1;
(statearr_58039_59210[(1)] = (16));

} else {
var statearr_58040_59211 = state_58019__$1;
(statearr_58040_59211[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (22))){
var inst_57979 = (state_58019[(10)]);
var inst_57978 = (state_58019[(14)]);
var inst_57977 = (state_58019[(2)]);
var inst_57978__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57977,(0),null);
var inst_57979__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57977,(1),null);
var inst_57980 = (inst_57978__$1 == null);
var inst_57981 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57979__$1,change);
var inst_57982 = ((inst_57980) || (inst_57981));
var state_58019__$1 = (function (){var statearr_58041 = state_58019;
(statearr_58041[(10)] = inst_57979__$1);

(statearr_58041[(14)] = inst_57978__$1);

return statearr_58041;
})();
if(cljs.core.truth_(inst_57982)){
var statearr_58042_59212 = state_58019__$1;
(statearr_58042_59212[(1)] = (23));

} else {
var statearr_58043_59213 = state_58019__$1;
(statearr_58043_59213[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (36))){
var inst_57969 = (state_58019[(12)]);
var inst_57946 = inst_57969;
var state_58019__$1 = (function (){var statearr_58044 = state_58019;
(statearr_58044[(7)] = inst_57946);

return statearr_58044;
})();
var statearr_58045_59214 = state_58019__$1;
(statearr_58045_59214[(2)] = null);

(statearr_58045_59214[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (29))){
var inst_57993 = (state_58019[(11)]);
var state_58019__$1 = state_58019;
var statearr_58046_59216 = state_58019__$1;
(statearr_58046_59216[(2)] = inst_57993);

(statearr_58046_59216[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (6))){
var state_58019__$1 = state_58019;
var statearr_58047_59217 = state_58019__$1;
(statearr_58047_59217[(2)] = false);

(statearr_58047_59217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (28))){
var inst_57989 = (state_58019[(2)]);
var inst_57990 = calc_state();
var inst_57946 = inst_57990;
var state_58019__$1 = (function (){var statearr_58048 = state_58019;
(statearr_58048[(15)] = inst_57989);

(statearr_58048[(7)] = inst_57946);

return statearr_58048;
})();
var statearr_58049_59218 = state_58019__$1;
(statearr_58049_59218[(2)] = null);

(statearr_58049_59218[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (25))){
var inst_58015 = (state_58019[(2)]);
var state_58019__$1 = state_58019;
var statearr_58050_59219 = state_58019__$1;
(statearr_58050_59219[(2)] = inst_58015);

(statearr_58050_59219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (34))){
var inst_58013 = (state_58019[(2)]);
var state_58019__$1 = state_58019;
var statearr_58051_59224 = state_58019__$1;
(statearr_58051_59224[(2)] = inst_58013);

(statearr_58051_59224[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (17))){
var state_58019__$1 = state_58019;
var statearr_58052_59225 = state_58019__$1;
(statearr_58052_59225[(2)] = false);

(statearr_58052_59225[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (3))){
var state_58019__$1 = state_58019;
var statearr_58053_59226 = state_58019__$1;
(statearr_58053_59226[(2)] = false);

(statearr_58053_59226[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (12))){
var inst_58017 = (state_58019[(2)]);
var state_58019__$1 = state_58019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58019__$1,inst_58017);
} else {
if((state_val_58020 === (2))){
var inst_57921 = (state_58019[(8)]);
var inst_57926 = inst_57921.cljs$lang$protocol_mask$partition0$;
var inst_57927 = (inst_57926 & (64));
var inst_57928 = inst_57921.cljs$core$ISeq$;
var inst_57929 = (cljs.core.PROTOCOL_SENTINEL === inst_57928);
var inst_57930 = ((inst_57927) || (inst_57929));
var state_58019__$1 = state_58019;
if(cljs.core.truth_(inst_57930)){
var statearr_58054_59227 = state_58019__$1;
(statearr_58054_59227[(1)] = (5));

} else {
var statearr_58055_59228 = state_58019__$1;
(statearr_58055_59228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (23))){
var inst_57978 = (state_58019[(14)]);
var inst_57984 = (inst_57978 == null);
var state_58019__$1 = state_58019;
if(cljs.core.truth_(inst_57984)){
var statearr_58056_59229 = state_58019__$1;
(statearr_58056_59229[(1)] = (26));

} else {
var statearr_58057_59230 = state_58019__$1;
(statearr_58057_59230[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (35))){
var inst_58004 = (state_58019[(2)]);
var state_58019__$1 = state_58019;
if(cljs.core.truth_(inst_58004)){
var statearr_58058_59231 = state_58019__$1;
(statearr_58058_59231[(1)] = (36));

} else {
var statearr_58059_59232 = state_58019__$1;
(statearr_58059_59232[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (19))){
var inst_57946 = (state_58019[(7)]);
var inst_57966 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_57946);
var state_58019__$1 = state_58019;
var statearr_58060_59233 = state_58019__$1;
(statearr_58060_59233[(2)] = inst_57966);

(statearr_58060_59233[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (11))){
var inst_57946 = (state_58019[(7)]);
var inst_57950 = (inst_57946 == null);
var inst_57951 = cljs.core.not(inst_57950);
var state_58019__$1 = state_58019;
if(inst_57951){
var statearr_58061_59234 = state_58019__$1;
(statearr_58061_59234[(1)] = (13));

} else {
var statearr_58062_59235 = state_58019__$1;
(statearr_58062_59235[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (9))){
var inst_57921 = (state_58019[(8)]);
var state_58019__$1 = state_58019;
var statearr_58063_59240 = state_58019__$1;
(statearr_58063_59240[(2)] = inst_57921);

(statearr_58063_59240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (5))){
var state_58019__$1 = state_58019;
var statearr_58064_59244 = state_58019__$1;
(statearr_58064_59244[(2)] = true);

(statearr_58064_59244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (14))){
var state_58019__$1 = state_58019;
var statearr_58065_59245 = state_58019__$1;
(statearr_58065_59245[(2)] = false);

(statearr_58065_59245[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (26))){
var inst_57979 = (state_58019[(10)]);
var inst_57986 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_57979);
var state_58019__$1 = state_58019;
var statearr_58066_59249 = state_58019__$1;
(statearr_58066_59249[(2)] = inst_57986);

(statearr_58066_59249[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (16))){
var state_58019__$1 = state_58019;
var statearr_58067_59250 = state_58019__$1;
(statearr_58067_59250[(2)] = true);

(statearr_58067_59250[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (38))){
var inst_58009 = (state_58019[(2)]);
var state_58019__$1 = state_58019;
var statearr_58068_59254 = state_58019__$1;
(statearr_58068_59254[(2)] = inst_58009);

(statearr_58068_59254[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (30))){
var inst_57971 = (state_58019[(13)]);
var inst_57970 = (state_58019[(9)]);
var inst_57979 = (state_58019[(10)]);
var inst_57996 = cljs.core.empty_QMARK_(inst_57970);
var inst_57997 = (inst_57971.cljs$core$IFn$_invoke$arity$1 ? inst_57971.cljs$core$IFn$_invoke$arity$1(inst_57979) : inst_57971.call(null,inst_57979));
var inst_57998 = cljs.core.not(inst_57997);
var inst_57999 = ((inst_57996) && (inst_57998));
var state_58019__$1 = state_58019;
var statearr_58069_59258 = state_58019__$1;
(statearr_58069_59258[(2)] = inst_57999);

(statearr_58069_59258[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (10))){
var inst_57921 = (state_58019[(8)]);
var inst_57942 = (state_58019[(2)]);
var inst_57943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57942,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57942,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57942,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_57946 = inst_57921;
var state_58019__$1 = (function (){var statearr_58070 = state_58019;
(statearr_58070[(16)] = inst_57945);

(statearr_58070[(17)] = inst_57943);

(statearr_58070[(7)] = inst_57946);

(statearr_58070[(18)] = inst_57944);

return statearr_58070;
})();
var statearr_58071_59263 = state_58019__$1;
(statearr_58071_59263[(2)] = null);

(statearr_58071_59263[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (18))){
var inst_57961 = (state_58019[(2)]);
var state_58019__$1 = state_58019;
var statearr_58072_59264 = state_58019__$1;
(statearr_58072_59264[(2)] = inst_57961);

(statearr_58072_59264[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (37))){
var state_58019__$1 = state_58019;
var statearr_58073_59265 = state_58019__$1;
(statearr_58073_59265[(2)] = null);

(statearr_58073_59265[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58020 === (8))){
var inst_57921 = (state_58019[(8)]);
var inst_57939 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_57921);
var state_58019__$1 = state_58019;
var statearr_58074_59266 = state_58019__$1;
(statearr_58074_59266[(2)] = inst_57939);

(statearr_58074_59266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
return (function() {
var cljs$core$async$mix_$_state_machine__57182__auto__ = null;
var cljs$core$async$mix_$_state_machine__57182__auto____0 = (function (){
var statearr_58075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58075[(0)] = cljs$core$async$mix_$_state_machine__57182__auto__);

(statearr_58075[(1)] = (1));

return statearr_58075;
});
var cljs$core$async$mix_$_state_machine__57182__auto____1 = (function (state_58019){
while(true){
var ret_value__57183__auto__ = (function (){try{while(true){
var result__57184__auto__ = switch__57181__auto__(state_58019);
if(cljs.core.keyword_identical_QMARK_(result__57184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57184__auto__;
}
break;
}
}catch (e58076){var ex__57185__auto__ = e58076;
var statearr_58077_59269 = state_58019;
(statearr_58077_59269[(2)] = ex__57185__auto__);


if(cljs.core.seq((state_58019[(4)]))){
var statearr_58078_59270 = state_58019;
(statearr_58078_59270[(1)] = cljs.core.first((state_58019[(4)])));

} else {
throw ex__57185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59271 = state_58019;
state_58019 = G__59271;
continue;
} else {
return ret_value__57183__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__57182__auto__ = function(state_58019){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__57182__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__57182__auto____1.call(this,state_58019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__57182__auto____0;
cljs$core$async$mix_$_state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__57182__auto____1;
return cljs$core$async$mix_$_state_machine__57182__auto__;
})()
})();
var state__57219__auto__ = (function (){var statearr_58079 = f__57218__auto__();
(statearr_58079[(6)] = c__57217__auto___59193);

return statearr_58079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57219__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_59272 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_59272(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_59273 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_59273(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_59278 = (function() {
var G__59279 = null;
var G__59279__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__59279__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__59279 = function(p,v){
switch(arguments.length){
case 1:
return G__59279__1.call(this,p);
case 2:
return G__59279__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__59279.cljs$core$IFn$_invoke$arity$1 = G__59279__1;
G__59279.cljs$core$IFn$_invoke$arity$2 = G__59279__2;
return G__59279;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__58081 = arguments.length;
switch (G__58081) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_59278(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_59278(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__58084 = arguments.length;
switch (G__58084) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__58082_SHARP_){
if(cljs.core.truth_((p1__58082_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__58082_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__58082_SHARP_.call(null,topic)))){
return p1__58082_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__58082_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58085 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58085 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta58086){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta58086 = meta58086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58087,meta58086__$1){
var self__ = this;
var _58087__$1 = this;
return (new cljs.core.async.t_cljs$core$async58085(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta58086__$1));
}));

(cljs.core.async.t_cljs$core$async58085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58087){
var self__ = this;
var _58087__$1 = this;
return self__.meta58086;
}));

(cljs.core.async.t_cljs$core$async58085.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58085.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async58085.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58085.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async58085.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async58085.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async58085.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async58085.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta58086","meta58086",780044010,null)], null);
}));

(cljs.core.async.t_cljs$core$async58085.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58085");

(cljs.core.async.t_cljs$core$async58085.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58085");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58085.
 */
cljs.core.async.__GT_t_cljs$core$async58085 = (function cljs$core$async$__GT_t_cljs$core$async58085(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58086){
return (new cljs.core.async.t_cljs$core$async58085(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58086));
});

}

return (new cljs.core.async.t_cljs$core$async58085(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__57217__auto___59292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57218__auto__ = (function (){var switch__57181__auto__ = (function (state_58159){
var state_val_58160 = (state_58159[(1)]);
if((state_val_58160 === (7))){
var inst_58155 = (state_58159[(2)]);
var state_58159__$1 = state_58159;
var statearr_58161_59296 = state_58159__$1;
(statearr_58161_59296[(2)] = inst_58155);

(statearr_58161_59296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58160 === (20))){
var state_58159__$1 = state_58159;
var statearr_58162_59297 = state_58159__$1;
(statearr_58162_59297[(2)] = null);

(statearr_58162_59297[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58160 === (1))){
var state_58159__$1 = state_58159;
var statearr_58163_59298 = state_58159__$1;
(statearr_58163_59298[(2)] = null);

(statearr_58163_59298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58160 === (24))){
var inst_58138 = (state_58159[(7)]);
var inst_58147 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_58138);
var state_58159__$1 = state_58159;
var statearr_58164_59299 = state_58159__$1;
(statearr_58164_59299[(2)] = inst_58147);

(statearr_58164_59299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58160 === (4))){
var inst_58090 = (state_58159[(8)]);
var inst_58090__$1 = (state_58159[(2)]);
var inst_58091 = (inst_58090__$1 == null);
var state_58159__$1 = (function (){var statearr_58165 = state_58159;
(statearr_58165[(8)] = inst_58090__$1);

return statearr_58165;
})();
if(cljs.core.truth_(inst_58091)){
var statearr_58166_59300 = state_58159__$1;
(statearr_58166_59300[(1)] = (5));

} else {
var statearr_58167_59301 = state_58159__$1;
(statearr_58167_59301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58160 === (15))){
var inst_58132 = (state_58159[(2)]);
var state_58159__$1 = state_58159;
var statearr_58168_59302 = state_58159__$1;
(statearr_58168_59302[(2)] = inst_58132);

(statearr_58168_59302[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58160 === (21))){
var inst_58152 = (state_58159[(2)]);
var state_58159__$1 = (function (){var statearr_58169 = state_58159;
(statearr_58169[(9)] = inst_58152);

return statearr_58169;
})();
var statearr_58170_59303 = state_58159__$1;
(statearr_58170_59303[(2)] = null);

(statearr_58170_59303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58160 === (13))){
var inst_58114 = (state_58159[(10)]);
var inst_58116 = cljs.core.chunked_seq_QMARK_(inst_58114);
var state_58159__$1 = state_58159;
if(inst_58116){
var statearr_58171_59304 = state_58159__$1;
(statearr_58171_59304[(1)] = (16));

} else {
var statearr_58172_59306 = state_58159__$1;
(statearr_58172_59306[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58160 === (22))){
var inst_58144 = (state_58159[(2)]);
var state_58159__$1 = state_58159;
if(cljs.core.truth_(inst_58144)){
var statearr_58173_59307 = state_58159__$1;
(statearr_58173_59307[(1)] = (23));

} else {
var statearr_58174_59308 = state_58159__$1;
(statearr_58174_59308[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58160 === (6))){
var inst_58138 = (state_58159[(7)]);
var inst_58090 = (state_58159[(8)]);
var inst_58140 = (state_58159[(11)]);
var inst_58138__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_58090) : topic_fn.call(null,inst_58090));
var inst_58139 = cljs.core.deref(mults);
var inst_58140__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58139,inst_58138__$1);
var state_58159__$1 = (function (){var statearr_58175 = state_58159;
(statearr_58175[(7)] = inst_58138__$1);

(statearr_58175[(11)] = inst_58140__$1);

return statearr_58175;
})();
if(cljs.core.truth_(inst_58140__$1)){
var statearr_58176_59309 = state_58159__$1;
(statearr_58176_59309[(1)] = (19));

} else {
var statearr_58177_59310 = state_58159__$1;
(statearr_58177_59310[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58160 === (25))){
var inst_58149 = (state_58159[(2)]);
var state_58159__$1 = state_58159;
var statearr_58178_59311 = state_58159__$1;
(statearr_58178_59311[(2)] = inst_58149);

(statearr_58178_59311[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58160 === (17))){
var inst_58114 = (state_58159[(10)]);
var inst_58123 = cljs.core.first(inst_58114);
var inst_58124 = cljs.core.async.muxch_STAR_(inst_58123);
var inst_58125 = cljs.core.async.close_BANG_(inst_58124);
var inst_58126 = cljs.core.next(inst_58114);
var inst_58100 = inst_58126;
var inst_58101 = null;
var inst_58102 = (0);
var inst_58103 = (0);
var state_58159__$1 = (function (){var statearr_58179 = state_58159;
(statearr_58179[(12)] = inst_58101);

(statearr_58179[(13)] = inst_58125);

(statearr_58179[(14)] = inst_58100);

(statearr_58179[(15)] = inst_58102);

(statearr_58179[(16)] = inst_58103);

return statearr_58179;
})();
var statearr_58180_59316 = state_58159__$1;
(statearr_58180_59316[(2)] = null);

(statearr_58180_59316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58160 === (3))){
var inst_58157 = (state_58159[(2)]);
var state_58159__$1 = state_58159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58159__$1,inst_58157);
} else {
if((state_val_58160 === (12))){
var inst_58134 = (state_58159[(2)]);
var state_58159__$1 = state_58159;
var statearr_58181_59318 = state_58159__$1;
(statearr_58181_59318[(2)] = inst_58134);

(statearr_58181_59318[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58160 === (2))){
var state_58159__$1 = state_58159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58159__$1,(4),ch);
} else {
if((state_val_58160 === (23))){
var state_58159__$1 = state_58159;
var statearr_58182_59319 = state_58159__$1;
(statearr_58182_59319[(2)] = null);

(statearr_58182_59319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58160 === (19))){
var inst_58090 = (state_58159[(8)]);
var inst_58140 = (state_58159[(11)]);
var inst_58142 = cljs.core.async.muxch_STAR_(inst_58140);
var state_58159__$1 = state_58159;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58159__$1,(22),inst_58142,inst_58090);
} else {
if((state_val_58160 === (11))){
var inst_58114 = (state_58159[(10)]);
var inst_58100 = (state_58159[(14)]);
var inst_58114__$1 = cljs.core.seq(inst_58100);
var state_58159__$1 = (function (){var statearr_58183 = state_58159;
(statearr_58183[(10)] = inst_58114__$1);

return statearr_58183;
})();
if(inst_58114__$1){
var statearr_58184_59321 = state_58159__$1;
(statearr_58184_59321[(1)] = (13));

} else {
var statearr_58185_59322 = state_58159__$1;
(statearr_58185_59322[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58160 === (9))){
var inst_58136 = (state_58159[(2)]);
var state_58159__$1 = state_58159;
var statearr_58186_59323 = state_58159__$1;
(statearr_58186_59323[(2)] = inst_58136);

(statearr_58186_59323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58160 === (5))){
var inst_58097 = cljs.core.deref(mults);
var inst_58098 = cljs.core.vals(inst_58097);
var inst_58099 = cljs.core.seq(inst_58098);
var inst_58100 = inst_58099;
var inst_58101 = null;
var inst_58102 = (0);
var inst_58103 = (0);
var state_58159__$1 = (function (){var statearr_58187 = state_58159;
(statearr_58187[(12)] = inst_58101);

(statearr_58187[(14)] = inst_58100);

(statearr_58187[(15)] = inst_58102);

(statearr_58187[(16)] = inst_58103);

return statearr_58187;
})();
var statearr_58188_59328 = state_58159__$1;
(statearr_58188_59328[(2)] = null);

(statearr_58188_59328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58160 === (14))){
var state_58159__$1 = state_58159;
var statearr_58192_59329 = state_58159__$1;
(statearr_58192_59329[(2)] = null);

(statearr_58192_59329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58160 === (16))){
var inst_58114 = (state_58159[(10)]);
var inst_58118 = cljs.core.chunk_first(inst_58114);
var inst_58119 = cljs.core.chunk_rest(inst_58114);
var inst_58120 = cljs.core.count(inst_58118);
var inst_58100 = inst_58119;
var inst_58101 = inst_58118;
var inst_58102 = inst_58120;
var inst_58103 = (0);
var state_58159__$1 = (function (){var statearr_58193 = state_58159;
(statearr_58193[(12)] = inst_58101);

(statearr_58193[(14)] = inst_58100);

(statearr_58193[(15)] = inst_58102);

(statearr_58193[(16)] = inst_58103);

return statearr_58193;
})();
var statearr_58194_59330 = state_58159__$1;
(statearr_58194_59330[(2)] = null);

(statearr_58194_59330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58160 === (10))){
var inst_58101 = (state_58159[(12)]);
var inst_58100 = (state_58159[(14)]);
var inst_58102 = (state_58159[(15)]);
var inst_58103 = (state_58159[(16)]);
var inst_58108 = cljs.core._nth(inst_58101,inst_58103);
var inst_58109 = cljs.core.async.muxch_STAR_(inst_58108);
var inst_58110 = cljs.core.async.close_BANG_(inst_58109);
var inst_58111 = (inst_58103 + (1));
var tmp58189 = inst_58101;
var tmp58190 = inst_58100;
var tmp58191 = inst_58102;
var inst_58100__$1 = tmp58190;
var inst_58101__$1 = tmp58189;
var inst_58102__$1 = tmp58191;
var inst_58103__$1 = inst_58111;
var state_58159__$1 = (function (){var statearr_58195 = state_58159;
(statearr_58195[(12)] = inst_58101__$1);

(statearr_58195[(14)] = inst_58100__$1);

(statearr_58195[(17)] = inst_58110);

(statearr_58195[(15)] = inst_58102__$1);

(statearr_58195[(16)] = inst_58103__$1);

return statearr_58195;
})();
var statearr_58196_59331 = state_58159__$1;
(statearr_58196_59331[(2)] = null);

(statearr_58196_59331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58160 === (18))){
var inst_58129 = (state_58159[(2)]);
var state_58159__$1 = state_58159;
var statearr_58197_59332 = state_58159__$1;
(statearr_58197_59332[(2)] = inst_58129);

(statearr_58197_59332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58160 === (8))){
var inst_58102 = (state_58159[(15)]);
var inst_58103 = (state_58159[(16)]);
var inst_58105 = (inst_58103 < inst_58102);
var inst_58106 = inst_58105;
var state_58159__$1 = state_58159;
if(cljs.core.truth_(inst_58106)){
var statearr_58198_59333 = state_58159__$1;
(statearr_58198_59333[(1)] = (10));

} else {
var statearr_58199_59334 = state_58159__$1;
(statearr_58199_59334[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
return (function() {
var cljs$core$async$state_machine__57182__auto__ = null;
var cljs$core$async$state_machine__57182__auto____0 = (function (){
var statearr_58200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58200[(0)] = cljs$core$async$state_machine__57182__auto__);

(statearr_58200[(1)] = (1));

return statearr_58200;
});
var cljs$core$async$state_machine__57182__auto____1 = (function (state_58159){
while(true){
var ret_value__57183__auto__ = (function (){try{while(true){
var result__57184__auto__ = switch__57181__auto__(state_58159);
if(cljs.core.keyword_identical_QMARK_(result__57184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57184__auto__;
}
break;
}
}catch (e58201){var ex__57185__auto__ = e58201;
var statearr_58202_59335 = state_58159;
(statearr_58202_59335[(2)] = ex__57185__auto__);


if(cljs.core.seq((state_58159[(4)]))){
var statearr_58203_59336 = state_58159;
(statearr_58203_59336[(1)] = cljs.core.first((state_58159[(4)])));

} else {
throw ex__57185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59340 = state_58159;
state_58159 = G__59340;
continue;
} else {
return ret_value__57183__auto__;
}
break;
}
});
cljs$core$async$state_machine__57182__auto__ = function(state_58159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57182__auto____1.call(this,state_58159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57182__auto____0;
cljs$core$async$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57182__auto____1;
return cljs$core$async$state_machine__57182__auto__;
})()
})();
var state__57219__auto__ = (function (){var statearr_58204 = f__57218__auto__();
(statearr_58204[(6)] = c__57217__auto___59292);

return statearr_58204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57219__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__58206 = arguments.length;
switch (G__58206) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__58208 = arguments.length;
switch (G__58208) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__58210 = arguments.length;
switch (G__58210) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__57217__auto___59345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57218__auto__ = (function (){var switch__57181__auto__ = (function (state_58253){
var state_val_58254 = (state_58253[(1)]);
if((state_val_58254 === (7))){
var state_58253__$1 = state_58253;
var statearr_58255_59346 = state_58253__$1;
(statearr_58255_59346[(2)] = null);

(statearr_58255_59346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58254 === (1))){
var state_58253__$1 = state_58253;
var statearr_58256_59347 = state_58253__$1;
(statearr_58256_59347[(2)] = null);

(statearr_58256_59347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58254 === (4))){
var inst_58213 = (state_58253[(7)]);
var inst_58214 = (state_58253[(8)]);
var inst_58216 = (inst_58214 < inst_58213);
var state_58253__$1 = state_58253;
if(cljs.core.truth_(inst_58216)){
var statearr_58257_59348 = state_58253__$1;
(statearr_58257_59348[(1)] = (6));

} else {
var statearr_58258_59349 = state_58253__$1;
(statearr_58258_59349[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58254 === (15))){
var inst_58239 = (state_58253[(9)]);
var inst_58244 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_58239);
var state_58253__$1 = state_58253;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58253__$1,(17),out,inst_58244);
} else {
if((state_val_58254 === (13))){
var inst_58239 = (state_58253[(9)]);
var inst_58239__$1 = (state_58253[(2)]);
var inst_58240 = cljs.core.some(cljs.core.nil_QMARK_,inst_58239__$1);
var state_58253__$1 = (function (){var statearr_58259 = state_58253;
(statearr_58259[(9)] = inst_58239__$1);

return statearr_58259;
})();
if(cljs.core.truth_(inst_58240)){
var statearr_58260_59350 = state_58253__$1;
(statearr_58260_59350[(1)] = (14));

} else {
var statearr_58261_59351 = state_58253__$1;
(statearr_58261_59351[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58254 === (6))){
var state_58253__$1 = state_58253;
var statearr_58262_59352 = state_58253__$1;
(statearr_58262_59352[(2)] = null);

(statearr_58262_59352[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58254 === (17))){
var inst_58246 = (state_58253[(2)]);
var state_58253__$1 = (function (){var statearr_58264 = state_58253;
(statearr_58264[(10)] = inst_58246);

return statearr_58264;
})();
var statearr_58265_59353 = state_58253__$1;
(statearr_58265_59353[(2)] = null);

(statearr_58265_59353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58254 === (3))){
var inst_58251 = (state_58253[(2)]);
var state_58253__$1 = state_58253;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58253__$1,inst_58251);
} else {
if((state_val_58254 === (12))){
var _ = (function (){var statearr_58266 = state_58253;
(statearr_58266[(4)] = cljs.core.rest((state_58253[(4)])));

return statearr_58266;
})();
var state_58253__$1 = state_58253;
var ex58263 = (state_58253__$1[(2)]);
var statearr_58267_59354 = state_58253__$1;
(statearr_58267_59354[(5)] = ex58263);


if((ex58263 instanceof Object)){
var statearr_58268_59355 = state_58253__$1;
(statearr_58268_59355[(1)] = (11));

(statearr_58268_59355[(5)] = null);

} else {
throw ex58263;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58254 === (2))){
var inst_58212 = cljs.core.reset_BANG_(dctr,cnt);
var inst_58213 = cnt;
var inst_58214 = (0);
var state_58253__$1 = (function (){var statearr_58269 = state_58253;
(statearr_58269[(11)] = inst_58212);

(statearr_58269[(7)] = inst_58213);

(statearr_58269[(8)] = inst_58214);

return statearr_58269;
})();
var statearr_58270_59356 = state_58253__$1;
(statearr_58270_59356[(2)] = null);

(statearr_58270_59356[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58254 === (11))){
var inst_58218 = (state_58253[(2)]);
var inst_58219 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_58253__$1 = (function (){var statearr_58271 = state_58253;
(statearr_58271[(12)] = inst_58218);

return statearr_58271;
})();
var statearr_58272_59357 = state_58253__$1;
(statearr_58272_59357[(2)] = inst_58219);

(statearr_58272_59357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58254 === (9))){
var inst_58214 = (state_58253[(8)]);
var _ = (function (){var statearr_58273 = state_58253;
(statearr_58273[(4)] = cljs.core.cons((12),(state_58253[(4)])));

return statearr_58273;
})();
var inst_58225 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_58214) : chs__$1.call(null,inst_58214));
var inst_58226 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_58214) : done.call(null,inst_58214));
var inst_58227 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_58225,inst_58226);
var ___$1 = (function (){var statearr_58274 = state_58253;
(statearr_58274[(4)] = cljs.core.rest((state_58253[(4)])));

return statearr_58274;
})();
var state_58253__$1 = state_58253;
var statearr_58275_59362 = state_58253__$1;
(statearr_58275_59362[(2)] = inst_58227);

(statearr_58275_59362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58254 === (5))){
var inst_58237 = (state_58253[(2)]);
var state_58253__$1 = (function (){var statearr_58276 = state_58253;
(statearr_58276[(13)] = inst_58237);

return statearr_58276;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58253__$1,(13),dchan);
} else {
if((state_val_58254 === (14))){
var inst_58242 = cljs.core.async.close_BANG_(out);
var state_58253__$1 = state_58253;
var statearr_58277_59367 = state_58253__$1;
(statearr_58277_59367[(2)] = inst_58242);

(statearr_58277_59367[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58254 === (16))){
var inst_58249 = (state_58253[(2)]);
var state_58253__$1 = state_58253;
var statearr_58278_59368 = state_58253__$1;
(statearr_58278_59368[(2)] = inst_58249);

(statearr_58278_59368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58254 === (10))){
var inst_58214 = (state_58253[(8)]);
var inst_58230 = (state_58253[(2)]);
var inst_58231 = (inst_58214 + (1));
var inst_58214__$1 = inst_58231;
var state_58253__$1 = (function (){var statearr_58279 = state_58253;
(statearr_58279[(14)] = inst_58230);

(statearr_58279[(8)] = inst_58214__$1);

return statearr_58279;
})();
var statearr_58280_59371 = state_58253__$1;
(statearr_58280_59371[(2)] = null);

(statearr_58280_59371[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58254 === (8))){
var inst_58235 = (state_58253[(2)]);
var state_58253__$1 = state_58253;
var statearr_58281_59372 = state_58253__$1;
(statearr_58281_59372[(2)] = inst_58235);

(statearr_58281_59372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
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
return (function() {
var cljs$core$async$state_machine__57182__auto__ = null;
var cljs$core$async$state_machine__57182__auto____0 = (function (){
var statearr_58282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58282[(0)] = cljs$core$async$state_machine__57182__auto__);

(statearr_58282[(1)] = (1));

return statearr_58282;
});
var cljs$core$async$state_machine__57182__auto____1 = (function (state_58253){
while(true){
var ret_value__57183__auto__ = (function (){try{while(true){
var result__57184__auto__ = switch__57181__auto__(state_58253);
if(cljs.core.keyword_identical_QMARK_(result__57184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57184__auto__;
}
break;
}
}catch (e58283){var ex__57185__auto__ = e58283;
var statearr_58284_59373 = state_58253;
(statearr_58284_59373[(2)] = ex__57185__auto__);


if(cljs.core.seq((state_58253[(4)]))){
var statearr_58285_59374 = state_58253;
(statearr_58285_59374[(1)] = cljs.core.first((state_58253[(4)])));

} else {
throw ex__57185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59375 = state_58253;
state_58253 = G__59375;
continue;
} else {
return ret_value__57183__auto__;
}
break;
}
});
cljs$core$async$state_machine__57182__auto__ = function(state_58253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57182__auto____1.call(this,state_58253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57182__auto____0;
cljs$core$async$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57182__auto____1;
return cljs$core$async$state_machine__57182__auto__;
})()
})();
var state__57219__auto__ = (function (){var statearr_58286 = f__57218__auto__();
(statearr_58286[(6)] = c__57217__auto___59345);

return statearr_58286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57219__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__58289 = arguments.length;
switch (G__58289) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__57217__auto___59377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57218__auto__ = (function (){var switch__57181__auto__ = (function (state_58321){
var state_val_58322 = (state_58321[(1)]);
if((state_val_58322 === (7))){
var inst_58300 = (state_58321[(7)]);
var inst_58301 = (state_58321[(8)]);
var inst_58300__$1 = (state_58321[(2)]);
var inst_58301__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58300__$1,(0),null);
var inst_58302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58300__$1,(1),null);
var inst_58303 = (inst_58301__$1 == null);
var state_58321__$1 = (function (){var statearr_58323 = state_58321;
(statearr_58323[(7)] = inst_58300__$1);

(statearr_58323[(9)] = inst_58302);

(statearr_58323[(8)] = inst_58301__$1);

return statearr_58323;
})();
if(cljs.core.truth_(inst_58303)){
var statearr_58324_59378 = state_58321__$1;
(statearr_58324_59378[(1)] = (8));

} else {
var statearr_58325_59379 = state_58321__$1;
(statearr_58325_59379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58322 === (1))){
var inst_58290 = cljs.core.vec(chs);
var inst_58291 = inst_58290;
var state_58321__$1 = (function (){var statearr_58326 = state_58321;
(statearr_58326[(10)] = inst_58291);

return statearr_58326;
})();
var statearr_58327_59380 = state_58321__$1;
(statearr_58327_59380[(2)] = null);

(statearr_58327_59380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58322 === (4))){
var inst_58291 = (state_58321[(10)]);
var state_58321__$1 = state_58321;
return cljs.core.async.ioc_alts_BANG_(state_58321__$1,(7),inst_58291);
} else {
if((state_val_58322 === (6))){
var inst_58317 = (state_58321[(2)]);
var state_58321__$1 = state_58321;
var statearr_58328_59381 = state_58321__$1;
(statearr_58328_59381[(2)] = inst_58317);

(statearr_58328_59381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58322 === (3))){
var inst_58319 = (state_58321[(2)]);
var state_58321__$1 = state_58321;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58321__$1,inst_58319);
} else {
if((state_val_58322 === (2))){
var inst_58291 = (state_58321[(10)]);
var inst_58293 = cljs.core.count(inst_58291);
var inst_58294 = (inst_58293 > (0));
var state_58321__$1 = state_58321;
if(cljs.core.truth_(inst_58294)){
var statearr_58330_59382 = state_58321__$1;
(statearr_58330_59382[(1)] = (4));

} else {
var statearr_58331_59383 = state_58321__$1;
(statearr_58331_59383[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58322 === (11))){
var inst_58291 = (state_58321[(10)]);
var inst_58310 = (state_58321[(2)]);
var tmp58329 = inst_58291;
var inst_58291__$1 = tmp58329;
var state_58321__$1 = (function (){var statearr_58336 = state_58321;
(statearr_58336[(10)] = inst_58291__$1);

(statearr_58336[(11)] = inst_58310);

return statearr_58336;
})();
var statearr_58337_59384 = state_58321__$1;
(statearr_58337_59384[(2)] = null);

(statearr_58337_59384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58322 === (9))){
var inst_58301 = (state_58321[(8)]);
var state_58321__$1 = state_58321;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58321__$1,(11),out,inst_58301);
} else {
if((state_val_58322 === (5))){
var inst_58315 = cljs.core.async.close_BANG_(out);
var state_58321__$1 = state_58321;
var statearr_58341_59385 = state_58321__$1;
(statearr_58341_59385[(2)] = inst_58315);

(statearr_58341_59385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58322 === (10))){
var inst_58313 = (state_58321[(2)]);
var state_58321__$1 = state_58321;
var statearr_58342_59386 = state_58321__$1;
(statearr_58342_59386[(2)] = inst_58313);

(statearr_58342_59386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58322 === (8))){
var inst_58291 = (state_58321[(10)]);
var inst_58300 = (state_58321[(7)]);
var inst_58302 = (state_58321[(9)]);
var inst_58301 = (state_58321[(8)]);
var inst_58305 = (function (){var cs = inst_58291;
var vec__58296 = inst_58300;
var v = inst_58301;
var c = inst_58302;
return (function (p1__58287_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__58287_SHARP_);
});
})();
var inst_58306 = cljs.core.filterv(inst_58305,inst_58291);
var inst_58291__$1 = inst_58306;
var state_58321__$1 = (function (){var statearr_58343 = state_58321;
(statearr_58343[(10)] = inst_58291__$1);

return statearr_58343;
})();
var statearr_58344_59387 = state_58321__$1;
(statearr_58344_59387[(2)] = null);

(statearr_58344_59387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
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
return (function() {
var cljs$core$async$state_machine__57182__auto__ = null;
var cljs$core$async$state_machine__57182__auto____0 = (function (){
var statearr_58345 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58345[(0)] = cljs$core$async$state_machine__57182__auto__);

(statearr_58345[(1)] = (1));

return statearr_58345;
});
var cljs$core$async$state_machine__57182__auto____1 = (function (state_58321){
while(true){
var ret_value__57183__auto__ = (function (){try{while(true){
var result__57184__auto__ = switch__57181__auto__(state_58321);
if(cljs.core.keyword_identical_QMARK_(result__57184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57184__auto__;
}
break;
}
}catch (e58346){var ex__57185__auto__ = e58346;
var statearr_58347_59388 = state_58321;
(statearr_58347_59388[(2)] = ex__57185__auto__);


if(cljs.core.seq((state_58321[(4)]))){
var statearr_58348_59389 = state_58321;
(statearr_58348_59389[(1)] = cljs.core.first((state_58321[(4)])));

} else {
throw ex__57185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59390 = state_58321;
state_58321 = G__59390;
continue;
} else {
return ret_value__57183__auto__;
}
break;
}
});
cljs$core$async$state_machine__57182__auto__ = function(state_58321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57182__auto____1.call(this,state_58321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57182__auto____0;
cljs$core$async$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57182__auto____1;
return cljs$core$async$state_machine__57182__auto__;
})()
})();
var state__57219__auto__ = (function (){var statearr_58350 = f__57218__auto__();
(statearr_58350[(6)] = c__57217__auto___59377);

return statearr_58350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57219__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__58353 = arguments.length;
switch (G__58353) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__57217__auto___59392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57218__auto__ = (function (){var switch__57181__auto__ = (function (state_58377){
var state_val_58378 = (state_58377[(1)]);
if((state_val_58378 === (7))){
var inst_58359 = (state_58377[(7)]);
var inst_58359__$1 = (state_58377[(2)]);
var inst_58360 = (inst_58359__$1 == null);
var inst_58361 = cljs.core.not(inst_58360);
var state_58377__$1 = (function (){var statearr_58379 = state_58377;
(statearr_58379[(7)] = inst_58359__$1);

return statearr_58379;
})();
if(inst_58361){
var statearr_58380_59393 = state_58377__$1;
(statearr_58380_59393[(1)] = (8));

} else {
var statearr_58381_59394 = state_58377__$1;
(statearr_58381_59394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58378 === (1))){
var inst_58354 = (0);
var state_58377__$1 = (function (){var statearr_58382 = state_58377;
(statearr_58382[(8)] = inst_58354);

return statearr_58382;
})();
var statearr_58383_59398 = state_58377__$1;
(statearr_58383_59398[(2)] = null);

(statearr_58383_59398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58378 === (4))){
var state_58377__$1 = state_58377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58377__$1,(7),ch);
} else {
if((state_val_58378 === (6))){
var inst_58372 = (state_58377[(2)]);
var state_58377__$1 = state_58377;
var statearr_58384_59399 = state_58377__$1;
(statearr_58384_59399[(2)] = inst_58372);

(statearr_58384_59399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58378 === (3))){
var inst_58374 = (state_58377[(2)]);
var inst_58375 = cljs.core.async.close_BANG_(out);
var state_58377__$1 = (function (){var statearr_58385 = state_58377;
(statearr_58385[(9)] = inst_58374);

return statearr_58385;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58377__$1,inst_58375);
} else {
if((state_val_58378 === (2))){
var inst_58354 = (state_58377[(8)]);
var inst_58356 = (inst_58354 < n);
var state_58377__$1 = state_58377;
if(cljs.core.truth_(inst_58356)){
var statearr_58386_59407 = state_58377__$1;
(statearr_58386_59407[(1)] = (4));

} else {
var statearr_58387_59408 = state_58377__$1;
(statearr_58387_59408[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58378 === (11))){
var inst_58354 = (state_58377[(8)]);
var inst_58364 = (state_58377[(2)]);
var inst_58365 = (inst_58354 + (1));
var inst_58354__$1 = inst_58365;
var state_58377__$1 = (function (){var statearr_58388 = state_58377;
(statearr_58388[(10)] = inst_58364);

(statearr_58388[(8)] = inst_58354__$1);

return statearr_58388;
})();
var statearr_58389_59409 = state_58377__$1;
(statearr_58389_59409[(2)] = null);

(statearr_58389_59409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58378 === (9))){
var state_58377__$1 = state_58377;
var statearr_58390_59410 = state_58377__$1;
(statearr_58390_59410[(2)] = null);

(statearr_58390_59410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58378 === (5))){
var state_58377__$1 = state_58377;
var statearr_58391_59411 = state_58377__$1;
(statearr_58391_59411[(2)] = null);

(statearr_58391_59411[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58378 === (10))){
var inst_58369 = (state_58377[(2)]);
var state_58377__$1 = state_58377;
var statearr_58392_59412 = state_58377__$1;
(statearr_58392_59412[(2)] = inst_58369);

(statearr_58392_59412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58378 === (8))){
var inst_58359 = (state_58377[(7)]);
var state_58377__$1 = state_58377;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58377__$1,(11),out,inst_58359);
} else {
return null;
}
}
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
return (function() {
var cljs$core$async$state_machine__57182__auto__ = null;
var cljs$core$async$state_machine__57182__auto____0 = (function (){
var statearr_58393 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58393[(0)] = cljs$core$async$state_machine__57182__auto__);

(statearr_58393[(1)] = (1));

return statearr_58393;
});
var cljs$core$async$state_machine__57182__auto____1 = (function (state_58377){
while(true){
var ret_value__57183__auto__ = (function (){try{while(true){
var result__57184__auto__ = switch__57181__auto__(state_58377);
if(cljs.core.keyword_identical_QMARK_(result__57184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57184__auto__;
}
break;
}
}catch (e58395){var ex__57185__auto__ = e58395;
var statearr_58396_59416 = state_58377;
(statearr_58396_59416[(2)] = ex__57185__auto__);


if(cljs.core.seq((state_58377[(4)]))){
var statearr_58397_59417 = state_58377;
(statearr_58397_59417[(1)] = cljs.core.first((state_58377[(4)])));

} else {
throw ex__57185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59418 = state_58377;
state_58377 = G__59418;
continue;
} else {
return ret_value__57183__auto__;
}
break;
}
});
cljs$core$async$state_machine__57182__auto__ = function(state_58377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57182__auto____1.call(this,state_58377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57182__auto____0;
cljs$core$async$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57182__auto____1;
return cljs$core$async$state_machine__57182__auto__;
})()
})();
var state__57219__auto__ = (function (){var statearr_58400 = f__57218__auto__();
(statearr_58400[(6)] = c__57217__auto___59392);

return statearr_58400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57219__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58402 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58402 = (function (f,ch,meta58403){
this.f = f;
this.ch = ch;
this.meta58403 = meta58403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58404,meta58403__$1){
var self__ = this;
var _58404__$1 = this;
return (new cljs.core.async.t_cljs$core$async58402(self__.f,self__.ch,meta58403__$1));
}));

(cljs.core.async.t_cljs$core$async58402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58404){
var self__ = this;
var _58404__$1 = this;
return self__.meta58403;
}));

(cljs.core.async.t_cljs$core$async58402.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58402.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58402.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58402.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58402.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58406 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58406 = (function (f,ch,meta58403,_,fn1,meta58407){
this.f = f;
this.ch = ch;
this.meta58403 = meta58403;
this._ = _;
this.fn1 = fn1;
this.meta58407 = meta58407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58408,meta58407__$1){
var self__ = this;
var _58408__$1 = this;
return (new cljs.core.async.t_cljs$core$async58406(self__.f,self__.ch,self__.meta58403,self__._,self__.fn1,meta58407__$1));
}));

(cljs.core.async.t_cljs$core$async58406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58408){
var self__ = this;
var _58408__$1 = this;
return self__.meta58407;
}));

(cljs.core.async.t_cljs$core$async58406.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58406.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async58406.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58406.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__58401_SHARP_){
var G__58411 = (((p1__58401_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__58401_SHARP_) : self__.f.call(null,p1__58401_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__58411) : f1.call(null,G__58411));
});
}));

(cljs.core.async.t_cljs$core$async58406.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58403","meta58403",-445837154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async58402","cljs.core.async/t_cljs$core$async58402",-1076681596,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta58407","meta58407",2074636148,null)], null);
}));

(cljs.core.async.t_cljs$core$async58406.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58406.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58406");

(cljs.core.async.t_cljs$core$async58406.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58406");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58406.
 */
cljs.core.async.__GT_t_cljs$core$async58406 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58406(f__$1,ch__$1,meta58403__$1,___$2,fn1__$1,meta58407){
return (new cljs.core.async.t_cljs$core$async58406(f__$1,ch__$1,meta58403__$1,___$2,fn1__$1,meta58407));
});

}

return (new cljs.core.async.t_cljs$core$async58406(self__.f,self__.ch,self__.meta58403,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__58413 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__58413) : self__.f.call(null,G__58413));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async58402.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58402.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async58402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58403","meta58403",-445837154,null)], null);
}));

(cljs.core.async.t_cljs$core$async58402.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58402");

(cljs.core.async.t_cljs$core$async58402.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58402");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58402.
 */
cljs.core.async.__GT_t_cljs$core$async58402 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58402(f__$1,ch__$1,meta58403){
return (new cljs.core.async.t_cljs$core$async58402(f__$1,ch__$1,meta58403));
});

}

return (new cljs.core.async.t_cljs$core$async58402(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58416 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58416 = (function (f,ch,meta58417){
this.f = f;
this.ch = ch;
this.meta58417 = meta58417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58418,meta58417__$1){
var self__ = this;
var _58418__$1 = this;
return (new cljs.core.async.t_cljs$core$async58416(self__.f,self__.ch,meta58417__$1));
}));

(cljs.core.async.t_cljs$core$async58416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58418){
var self__ = this;
var _58418__$1 = this;
return self__.meta58417;
}));

(cljs.core.async.t_cljs$core$async58416.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58416.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58416.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58416.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async58416.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58416.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async58416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58417","meta58417",932206893,null)], null);
}));

(cljs.core.async.t_cljs$core$async58416.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58416.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58416");

(cljs.core.async.t_cljs$core$async58416.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58416");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58416.
 */
cljs.core.async.__GT_t_cljs$core$async58416 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async58416(f__$1,ch__$1,meta58417){
return (new cljs.core.async.t_cljs$core$async58416(f__$1,ch__$1,meta58417));
});

}

return (new cljs.core.async.t_cljs$core$async58416(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58420 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58420 = (function (p,ch,meta58421){
this.p = p;
this.ch = ch;
this.meta58421 = meta58421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58422,meta58421__$1){
var self__ = this;
var _58422__$1 = this;
return (new cljs.core.async.t_cljs$core$async58420(self__.p,self__.ch,meta58421__$1));
}));

(cljs.core.async.t_cljs$core$async58420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58422){
var self__ = this;
var _58422__$1 = this;
return self__.meta58421;
}));

(cljs.core.async.t_cljs$core$async58420.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58420.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58420.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58420.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58420.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async58420.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58420.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async58420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58421","meta58421",1028758155,null)], null);
}));

(cljs.core.async.t_cljs$core$async58420.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58420");

(cljs.core.async.t_cljs$core$async58420.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58420");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58420.
 */
cljs.core.async.__GT_t_cljs$core$async58420 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async58420(p__$1,ch__$1,meta58421){
return (new cljs.core.async.t_cljs$core$async58420(p__$1,ch__$1,meta58421));
});

}

return (new cljs.core.async.t_cljs$core$async58420(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__58424 = arguments.length;
switch (G__58424) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__57217__auto___59448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57218__auto__ = (function (){var switch__57181__auto__ = (function (state_58445){
var state_val_58446 = (state_58445[(1)]);
if((state_val_58446 === (7))){
var inst_58441 = (state_58445[(2)]);
var state_58445__$1 = state_58445;
var statearr_58447_59449 = state_58445__$1;
(statearr_58447_59449[(2)] = inst_58441);

(statearr_58447_59449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58446 === (1))){
var state_58445__$1 = state_58445;
var statearr_58448_59450 = state_58445__$1;
(statearr_58448_59450[(2)] = null);

(statearr_58448_59450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58446 === (4))){
var inst_58427 = (state_58445[(7)]);
var inst_58427__$1 = (state_58445[(2)]);
var inst_58428 = (inst_58427__$1 == null);
var state_58445__$1 = (function (){var statearr_58449 = state_58445;
(statearr_58449[(7)] = inst_58427__$1);

return statearr_58449;
})();
if(cljs.core.truth_(inst_58428)){
var statearr_58450_59457 = state_58445__$1;
(statearr_58450_59457[(1)] = (5));

} else {
var statearr_58451_59458 = state_58445__$1;
(statearr_58451_59458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58446 === (6))){
var inst_58427 = (state_58445[(7)]);
var inst_58432 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_58427) : p.call(null,inst_58427));
var state_58445__$1 = state_58445;
if(cljs.core.truth_(inst_58432)){
var statearr_58452_59459 = state_58445__$1;
(statearr_58452_59459[(1)] = (8));

} else {
var statearr_58453_59460 = state_58445__$1;
(statearr_58453_59460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58446 === (3))){
var inst_58443 = (state_58445[(2)]);
var state_58445__$1 = state_58445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58445__$1,inst_58443);
} else {
if((state_val_58446 === (2))){
var state_58445__$1 = state_58445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58445__$1,(4),ch);
} else {
if((state_val_58446 === (11))){
var inst_58435 = (state_58445[(2)]);
var state_58445__$1 = state_58445;
var statearr_58454_59461 = state_58445__$1;
(statearr_58454_59461[(2)] = inst_58435);

(statearr_58454_59461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58446 === (9))){
var state_58445__$1 = state_58445;
var statearr_58455_59462 = state_58445__$1;
(statearr_58455_59462[(2)] = null);

(statearr_58455_59462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58446 === (5))){
var inst_58430 = cljs.core.async.close_BANG_(out);
var state_58445__$1 = state_58445;
var statearr_58456_59463 = state_58445__$1;
(statearr_58456_59463[(2)] = inst_58430);

(statearr_58456_59463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58446 === (10))){
var inst_58438 = (state_58445[(2)]);
var state_58445__$1 = (function (){var statearr_58457 = state_58445;
(statearr_58457[(8)] = inst_58438);

return statearr_58457;
})();
var statearr_58458_59464 = state_58445__$1;
(statearr_58458_59464[(2)] = null);

(statearr_58458_59464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58446 === (8))){
var inst_58427 = (state_58445[(7)]);
var state_58445__$1 = state_58445;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58445__$1,(11),out,inst_58427);
} else {
return null;
}
}
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
return (function() {
var cljs$core$async$state_machine__57182__auto__ = null;
var cljs$core$async$state_machine__57182__auto____0 = (function (){
var statearr_58459 = [null,null,null,null,null,null,null,null,null];
(statearr_58459[(0)] = cljs$core$async$state_machine__57182__auto__);

(statearr_58459[(1)] = (1));

return statearr_58459;
});
var cljs$core$async$state_machine__57182__auto____1 = (function (state_58445){
while(true){
var ret_value__57183__auto__ = (function (){try{while(true){
var result__57184__auto__ = switch__57181__auto__(state_58445);
if(cljs.core.keyword_identical_QMARK_(result__57184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57184__auto__;
}
break;
}
}catch (e58460){var ex__57185__auto__ = e58460;
var statearr_58461_59465 = state_58445;
(statearr_58461_59465[(2)] = ex__57185__auto__);


if(cljs.core.seq((state_58445[(4)]))){
var statearr_58462_59472 = state_58445;
(statearr_58462_59472[(1)] = cljs.core.first((state_58445[(4)])));

} else {
throw ex__57185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59473 = state_58445;
state_58445 = G__59473;
continue;
} else {
return ret_value__57183__auto__;
}
break;
}
});
cljs$core$async$state_machine__57182__auto__ = function(state_58445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57182__auto____1.call(this,state_58445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57182__auto____0;
cljs$core$async$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57182__auto____1;
return cljs$core$async$state_machine__57182__auto__;
})()
})();
var state__57219__auto__ = (function (){var statearr_58463 = f__57218__auto__();
(statearr_58463[(6)] = c__57217__auto___59448);

return statearr_58463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57219__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__58465 = arguments.length;
switch (G__58465) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__57217__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57218__auto__ = (function (){var switch__57181__auto__ = (function (state_58527){
var state_val_58528 = (state_58527[(1)]);
if((state_val_58528 === (7))){
var inst_58523 = (state_58527[(2)]);
var state_58527__$1 = state_58527;
var statearr_58529_59475 = state_58527__$1;
(statearr_58529_59475[(2)] = inst_58523);

(statearr_58529_59475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (20))){
var inst_58493 = (state_58527[(7)]);
var inst_58504 = (state_58527[(2)]);
var inst_58505 = cljs.core.next(inst_58493);
var inst_58479 = inst_58505;
var inst_58480 = null;
var inst_58481 = (0);
var inst_58482 = (0);
var state_58527__$1 = (function (){var statearr_58530 = state_58527;
(statearr_58530[(8)] = inst_58480);

(statearr_58530[(9)] = inst_58504);

(statearr_58530[(10)] = inst_58481);

(statearr_58530[(11)] = inst_58479);

(statearr_58530[(12)] = inst_58482);

return statearr_58530;
})();
var statearr_58531_59476 = state_58527__$1;
(statearr_58531_59476[(2)] = null);

(statearr_58531_59476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (1))){
var state_58527__$1 = state_58527;
var statearr_58532_59477 = state_58527__$1;
(statearr_58532_59477[(2)] = null);

(statearr_58532_59477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (4))){
var inst_58468 = (state_58527[(13)]);
var inst_58468__$1 = (state_58527[(2)]);
var inst_58469 = (inst_58468__$1 == null);
var state_58527__$1 = (function (){var statearr_58533 = state_58527;
(statearr_58533[(13)] = inst_58468__$1);

return statearr_58533;
})();
if(cljs.core.truth_(inst_58469)){
var statearr_58534_59478 = state_58527__$1;
(statearr_58534_59478[(1)] = (5));

} else {
var statearr_58535_59479 = state_58527__$1;
(statearr_58535_59479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (15))){
var state_58527__$1 = state_58527;
var statearr_58539_59480 = state_58527__$1;
(statearr_58539_59480[(2)] = null);

(statearr_58539_59480[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (21))){
var state_58527__$1 = state_58527;
var statearr_58540_59481 = state_58527__$1;
(statearr_58540_59481[(2)] = null);

(statearr_58540_59481[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (13))){
var inst_58480 = (state_58527[(8)]);
var inst_58481 = (state_58527[(10)]);
var inst_58479 = (state_58527[(11)]);
var inst_58482 = (state_58527[(12)]);
var inst_58489 = (state_58527[(2)]);
var inst_58490 = (inst_58482 + (1));
var tmp58536 = inst_58480;
var tmp58537 = inst_58481;
var tmp58538 = inst_58479;
var inst_58479__$1 = tmp58538;
var inst_58480__$1 = tmp58536;
var inst_58481__$1 = tmp58537;
var inst_58482__$1 = inst_58490;
var state_58527__$1 = (function (){var statearr_58541 = state_58527;
(statearr_58541[(8)] = inst_58480__$1);

(statearr_58541[(14)] = inst_58489);

(statearr_58541[(10)] = inst_58481__$1);

(statearr_58541[(11)] = inst_58479__$1);

(statearr_58541[(12)] = inst_58482__$1);

return statearr_58541;
})();
var statearr_58542_59484 = state_58527__$1;
(statearr_58542_59484[(2)] = null);

(statearr_58542_59484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (22))){
var state_58527__$1 = state_58527;
var statearr_58543_59485 = state_58527__$1;
(statearr_58543_59485[(2)] = null);

(statearr_58543_59485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (6))){
var inst_58468 = (state_58527[(13)]);
var inst_58477 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_58468) : f.call(null,inst_58468));
var inst_58478 = cljs.core.seq(inst_58477);
var inst_58479 = inst_58478;
var inst_58480 = null;
var inst_58481 = (0);
var inst_58482 = (0);
var state_58527__$1 = (function (){var statearr_58544 = state_58527;
(statearr_58544[(8)] = inst_58480);

(statearr_58544[(10)] = inst_58481);

(statearr_58544[(11)] = inst_58479);

(statearr_58544[(12)] = inst_58482);

return statearr_58544;
})();
var statearr_58545_59486 = state_58527__$1;
(statearr_58545_59486[(2)] = null);

(statearr_58545_59486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (17))){
var inst_58493 = (state_58527[(7)]);
var inst_58497 = cljs.core.chunk_first(inst_58493);
var inst_58498 = cljs.core.chunk_rest(inst_58493);
var inst_58499 = cljs.core.count(inst_58497);
var inst_58479 = inst_58498;
var inst_58480 = inst_58497;
var inst_58481 = inst_58499;
var inst_58482 = (0);
var state_58527__$1 = (function (){var statearr_58546 = state_58527;
(statearr_58546[(8)] = inst_58480);

(statearr_58546[(10)] = inst_58481);

(statearr_58546[(11)] = inst_58479);

(statearr_58546[(12)] = inst_58482);

return statearr_58546;
})();
var statearr_58547_59488 = state_58527__$1;
(statearr_58547_59488[(2)] = null);

(statearr_58547_59488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (3))){
var inst_58525 = (state_58527[(2)]);
var state_58527__$1 = state_58527;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58527__$1,inst_58525);
} else {
if((state_val_58528 === (12))){
var inst_58513 = (state_58527[(2)]);
var state_58527__$1 = state_58527;
var statearr_58548_59490 = state_58527__$1;
(statearr_58548_59490[(2)] = inst_58513);

(statearr_58548_59490[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (2))){
var state_58527__$1 = state_58527;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58527__$1,(4),in$);
} else {
if((state_val_58528 === (23))){
var inst_58521 = (state_58527[(2)]);
var state_58527__$1 = state_58527;
var statearr_58549_59491 = state_58527__$1;
(statearr_58549_59491[(2)] = inst_58521);

(statearr_58549_59491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (19))){
var inst_58508 = (state_58527[(2)]);
var state_58527__$1 = state_58527;
var statearr_58550_59492 = state_58527__$1;
(statearr_58550_59492[(2)] = inst_58508);

(statearr_58550_59492[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (11))){
var inst_58493 = (state_58527[(7)]);
var inst_58479 = (state_58527[(11)]);
var inst_58493__$1 = cljs.core.seq(inst_58479);
var state_58527__$1 = (function (){var statearr_58551 = state_58527;
(statearr_58551[(7)] = inst_58493__$1);

return statearr_58551;
})();
if(inst_58493__$1){
var statearr_58552_59493 = state_58527__$1;
(statearr_58552_59493[(1)] = (14));

} else {
var statearr_58553_59494 = state_58527__$1;
(statearr_58553_59494[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (9))){
var inst_58515 = (state_58527[(2)]);
var inst_58516 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_58527__$1 = (function (){var statearr_58554 = state_58527;
(statearr_58554[(15)] = inst_58515);

return statearr_58554;
})();
if(cljs.core.truth_(inst_58516)){
var statearr_58555_59495 = state_58527__$1;
(statearr_58555_59495[(1)] = (21));

} else {
var statearr_58556_59496 = state_58527__$1;
(statearr_58556_59496[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (5))){
var inst_58471 = cljs.core.async.close_BANG_(out);
var state_58527__$1 = state_58527;
var statearr_58557_59497 = state_58527__$1;
(statearr_58557_59497[(2)] = inst_58471);

(statearr_58557_59497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (14))){
var inst_58493 = (state_58527[(7)]);
var inst_58495 = cljs.core.chunked_seq_QMARK_(inst_58493);
var state_58527__$1 = state_58527;
if(inst_58495){
var statearr_58558_59502 = state_58527__$1;
(statearr_58558_59502[(1)] = (17));

} else {
var statearr_58559_59505 = state_58527__$1;
(statearr_58559_59505[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (16))){
var inst_58511 = (state_58527[(2)]);
var state_58527__$1 = state_58527;
var statearr_58560_59506 = state_58527__$1;
(statearr_58560_59506[(2)] = inst_58511);

(statearr_58560_59506[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (10))){
var inst_58480 = (state_58527[(8)]);
var inst_58482 = (state_58527[(12)]);
var inst_58487 = cljs.core._nth(inst_58480,inst_58482);
var state_58527__$1 = state_58527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58527__$1,(13),out,inst_58487);
} else {
if((state_val_58528 === (18))){
var inst_58493 = (state_58527[(7)]);
var inst_58502 = cljs.core.first(inst_58493);
var state_58527__$1 = state_58527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58527__$1,(20),out,inst_58502);
} else {
if((state_val_58528 === (8))){
var inst_58481 = (state_58527[(10)]);
var inst_58482 = (state_58527[(12)]);
var inst_58484 = (inst_58482 < inst_58481);
var inst_58485 = inst_58484;
var state_58527__$1 = state_58527;
if(cljs.core.truth_(inst_58485)){
var statearr_58561_59508 = state_58527__$1;
(statearr_58561_59508[(1)] = (10));

} else {
var statearr_58562_59509 = state_58527__$1;
(statearr_58562_59509[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__57182__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__57182__auto____0 = (function (){
var statearr_58563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58563[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__57182__auto__);

(statearr_58563[(1)] = (1));

return statearr_58563;
});
var cljs$core$async$mapcat_STAR__$_state_machine__57182__auto____1 = (function (state_58527){
while(true){
var ret_value__57183__auto__ = (function (){try{while(true){
var result__57184__auto__ = switch__57181__auto__(state_58527);
if(cljs.core.keyword_identical_QMARK_(result__57184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57184__auto__;
}
break;
}
}catch (e58564){var ex__57185__auto__ = e58564;
var statearr_58565_59514 = state_58527;
(statearr_58565_59514[(2)] = ex__57185__auto__);


if(cljs.core.seq((state_58527[(4)]))){
var statearr_58566_59515 = state_58527;
(statearr_58566_59515[(1)] = cljs.core.first((state_58527[(4)])));

} else {
throw ex__57185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59516 = state_58527;
state_58527 = G__59516;
continue;
} else {
return ret_value__57183__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__57182__auto__ = function(state_58527){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__57182__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__57182__auto____1.call(this,state_58527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__57182__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__57182__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__57182__auto__;
})()
})();
var state__57219__auto__ = (function (){var statearr_58567 = f__57218__auto__();
(statearr_58567[(6)] = c__57217__auto__);

return statearr_58567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57219__auto__);
}));

return c__57217__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__58569 = arguments.length;
switch (G__58569) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__58571 = arguments.length;
switch (G__58571) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__58573 = arguments.length;
switch (G__58573) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__57217__auto___59521 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57218__auto__ = (function (){var switch__57181__auto__ = (function (state_58597){
var state_val_58598 = (state_58597[(1)]);
if((state_val_58598 === (7))){
var inst_58592 = (state_58597[(2)]);
var state_58597__$1 = state_58597;
var statearr_58599_59522 = state_58597__$1;
(statearr_58599_59522[(2)] = inst_58592);

(statearr_58599_59522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58598 === (1))){
var inst_58574 = null;
var state_58597__$1 = (function (){var statearr_58600 = state_58597;
(statearr_58600[(7)] = inst_58574);

return statearr_58600;
})();
var statearr_58601_59523 = state_58597__$1;
(statearr_58601_59523[(2)] = null);

(statearr_58601_59523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58598 === (4))){
var inst_58577 = (state_58597[(8)]);
var inst_58577__$1 = (state_58597[(2)]);
var inst_58578 = (inst_58577__$1 == null);
var inst_58579 = cljs.core.not(inst_58578);
var state_58597__$1 = (function (){var statearr_58602 = state_58597;
(statearr_58602[(8)] = inst_58577__$1);

return statearr_58602;
})();
if(inst_58579){
var statearr_58603_59524 = state_58597__$1;
(statearr_58603_59524[(1)] = (5));

} else {
var statearr_58604_59525 = state_58597__$1;
(statearr_58604_59525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58598 === (6))){
var state_58597__$1 = state_58597;
var statearr_58605_59527 = state_58597__$1;
(statearr_58605_59527[(2)] = null);

(statearr_58605_59527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58598 === (3))){
var inst_58594 = (state_58597[(2)]);
var inst_58595 = cljs.core.async.close_BANG_(out);
var state_58597__$1 = (function (){var statearr_58606 = state_58597;
(statearr_58606[(9)] = inst_58594);

return statearr_58606;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58597__$1,inst_58595);
} else {
if((state_val_58598 === (2))){
var state_58597__$1 = state_58597;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58597__$1,(4),ch);
} else {
if((state_val_58598 === (11))){
var inst_58577 = (state_58597[(8)]);
var inst_58586 = (state_58597[(2)]);
var inst_58574 = inst_58577;
var state_58597__$1 = (function (){var statearr_58607 = state_58597;
(statearr_58607[(10)] = inst_58586);

(statearr_58607[(7)] = inst_58574);

return statearr_58607;
})();
var statearr_58608_59529 = state_58597__$1;
(statearr_58608_59529[(2)] = null);

(statearr_58608_59529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58598 === (9))){
var inst_58577 = (state_58597[(8)]);
var state_58597__$1 = state_58597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58597__$1,(11),out,inst_58577);
} else {
if((state_val_58598 === (5))){
var inst_58577 = (state_58597[(8)]);
var inst_58574 = (state_58597[(7)]);
var inst_58581 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_58577,inst_58574);
var state_58597__$1 = state_58597;
if(inst_58581){
var statearr_58610_59530 = state_58597__$1;
(statearr_58610_59530[(1)] = (8));

} else {
var statearr_58611_59531 = state_58597__$1;
(statearr_58611_59531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58598 === (10))){
var inst_58589 = (state_58597[(2)]);
var state_58597__$1 = state_58597;
var statearr_58612_59532 = state_58597__$1;
(statearr_58612_59532[(2)] = inst_58589);

(statearr_58612_59532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58598 === (8))){
var inst_58574 = (state_58597[(7)]);
var tmp58609 = inst_58574;
var inst_58574__$1 = tmp58609;
var state_58597__$1 = (function (){var statearr_58613 = state_58597;
(statearr_58613[(7)] = inst_58574__$1);

return statearr_58613;
})();
var statearr_58614_59533 = state_58597__$1;
(statearr_58614_59533[(2)] = null);

(statearr_58614_59533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
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
return (function() {
var cljs$core$async$state_machine__57182__auto__ = null;
var cljs$core$async$state_machine__57182__auto____0 = (function (){
var statearr_58615 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58615[(0)] = cljs$core$async$state_machine__57182__auto__);

(statearr_58615[(1)] = (1));

return statearr_58615;
});
var cljs$core$async$state_machine__57182__auto____1 = (function (state_58597){
while(true){
var ret_value__57183__auto__ = (function (){try{while(true){
var result__57184__auto__ = switch__57181__auto__(state_58597);
if(cljs.core.keyword_identical_QMARK_(result__57184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57184__auto__;
}
break;
}
}catch (e58616){var ex__57185__auto__ = e58616;
var statearr_58617_59534 = state_58597;
(statearr_58617_59534[(2)] = ex__57185__auto__);


if(cljs.core.seq((state_58597[(4)]))){
var statearr_58618_59535 = state_58597;
(statearr_58618_59535[(1)] = cljs.core.first((state_58597[(4)])));

} else {
throw ex__57185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59536 = state_58597;
state_58597 = G__59536;
continue;
} else {
return ret_value__57183__auto__;
}
break;
}
});
cljs$core$async$state_machine__57182__auto__ = function(state_58597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57182__auto____1.call(this,state_58597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57182__auto____0;
cljs$core$async$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57182__auto____1;
return cljs$core$async$state_machine__57182__auto__;
})()
})();
var state__57219__auto__ = (function (){var statearr_58619 = f__57218__auto__();
(statearr_58619[(6)] = c__57217__auto___59521);

return statearr_58619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57219__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__58621 = arguments.length;
switch (G__58621) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__57217__auto___59539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57218__auto__ = (function (){var switch__57181__auto__ = (function (state_58659){
var state_val_58660 = (state_58659[(1)]);
if((state_val_58660 === (7))){
var inst_58655 = (state_58659[(2)]);
var state_58659__$1 = state_58659;
var statearr_58661_59541 = state_58659__$1;
(statearr_58661_59541[(2)] = inst_58655);

(statearr_58661_59541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58660 === (1))){
var inst_58622 = (new Array(n));
var inst_58623 = inst_58622;
var inst_58624 = (0);
var state_58659__$1 = (function (){var statearr_58662 = state_58659;
(statearr_58662[(7)] = inst_58624);

(statearr_58662[(8)] = inst_58623);

return statearr_58662;
})();
var statearr_58663_59543 = state_58659__$1;
(statearr_58663_59543[(2)] = null);

(statearr_58663_59543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58660 === (4))){
var inst_58627 = (state_58659[(9)]);
var inst_58627__$1 = (state_58659[(2)]);
var inst_58628 = (inst_58627__$1 == null);
var inst_58629 = cljs.core.not(inst_58628);
var state_58659__$1 = (function (){var statearr_58664 = state_58659;
(statearr_58664[(9)] = inst_58627__$1);

return statearr_58664;
})();
if(inst_58629){
var statearr_58665_59545 = state_58659__$1;
(statearr_58665_59545[(1)] = (5));

} else {
var statearr_58666_59546 = state_58659__$1;
(statearr_58666_59546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58660 === (15))){
var inst_58649 = (state_58659[(2)]);
var state_58659__$1 = state_58659;
var statearr_58667_59547 = state_58659__$1;
(statearr_58667_59547[(2)] = inst_58649);

(statearr_58667_59547[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58660 === (13))){
var state_58659__$1 = state_58659;
var statearr_58668_59548 = state_58659__$1;
(statearr_58668_59548[(2)] = null);

(statearr_58668_59548[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58660 === (6))){
var inst_58624 = (state_58659[(7)]);
var inst_58645 = (inst_58624 > (0));
var state_58659__$1 = state_58659;
if(cljs.core.truth_(inst_58645)){
var statearr_58669_59549 = state_58659__$1;
(statearr_58669_59549[(1)] = (12));

} else {
var statearr_58670_59550 = state_58659__$1;
(statearr_58670_59550[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58660 === (3))){
var inst_58657 = (state_58659[(2)]);
var state_58659__$1 = state_58659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58659__$1,inst_58657);
} else {
if((state_val_58660 === (12))){
var inst_58623 = (state_58659[(8)]);
var inst_58647 = cljs.core.vec(inst_58623);
var state_58659__$1 = state_58659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58659__$1,(15),out,inst_58647);
} else {
if((state_val_58660 === (2))){
var state_58659__$1 = state_58659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58659__$1,(4),ch);
} else {
if((state_val_58660 === (11))){
var inst_58639 = (state_58659[(2)]);
var inst_58640 = (new Array(n));
var inst_58623 = inst_58640;
var inst_58624 = (0);
var state_58659__$1 = (function (){var statearr_58671 = state_58659;
(statearr_58671[(7)] = inst_58624);

(statearr_58671[(10)] = inst_58639);

(statearr_58671[(8)] = inst_58623);

return statearr_58671;
})();
var statearr_58672_59552 = state_58659__$1;
(statearr_58672_59552[(2)] = null);

(statearr_58672_59552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58660 === (9))){
var inst_58623 = (state_58659[(8)]);
var inst_58637 = cljs.core.vec(inst_58623);
var state_58659__$1 = state_58659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58659__$1,(11),out,inst_58637);
} else {
if((state_val_58660 === (5))){
var inst_58624 = (state_58659[(7)]);
var inst_58632 = (state_58659[(11)]);
var inst_58627 = (state_58659[(9)]);
var inst_58623 = (state_58659[(8)]);
var inst_58631 = (inst_58623[inst_58624] = inst_58627);
var inst_58632__$1 = (inst_58624 + (1));
var inst_58633 = (inst_58632__$1 < n);
var state_58659__$1 = (function (){var statearr_58673 = state_58659;
(statearr_58673[(12)] = inst_58631);

(statearr_58673[(11)] = inst_58632__$1);

return statearr_58673;
})();
if(cljs.core.truth_(inst_58633)){
var statearr_58674_59554 = state_58659__$1;
(statearr_58674_59554[(1)] = (8));

} else {
var statearr_58675_59555 = state_58659__$1;
(statearr_58675_59555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58660 === (14))){
var inst_58652 = (state_58659[(2)]);
var inst_58653 = cljs.core.async.close_BANG_(out);
var state_58659__$1 = (function (){var statearr_58677 = state_58659;
(statearr_58677[(13)] = inst_58652);

return statearr_58677;
})();
var statearr_58678_59556 = state_58659__$1;
(statearr_58678_59556[(2)] = inst_58653);

(statearr_58678_59556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58660 === (10))){
var inst_58643 = (state_58659[(2)]);
var state_58659__$1 = state_58659;
var statearr_58679_59557 = state_58659__$1;
(statearr_58679_59557[(2)] = inst_58643);

(statearr_58679_59557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58660 === (8))){
var inst_58632 = (state_58659[(11)]);
var inst_58623 = (state_58659[(8)]);
var tmp58676 = inst_58623;
var inst_58623__$1 = tmp58676;
var inst_58624 = inst_58632;
var state_58659__$1 = (function (){var statearr_58680 = state_58659;
(statearr_58680[(7)] = inst_58624);

(statearr_58680[(8)] = inst_58623__$1);

return statearr_58680;
})();
var statearr_58681_59558 = state_58659__$1;
(statearr_58681_59558[(2)] = null);

(statearr_58681_59558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
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
return (function() {
var cljs$core$async$state_machine__57182__auto__ = null;
var cljs$core$async$state_machine__57182__auto____0 = (function (){
var statearr_58682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58682[(0)] = cljs$core$async$state_machine__57182__auto__);

(statearr_58682[(1)] = (1));

return statearr_58682;
});
var cljs$core$async$state_machine__57182__auto____1 = (function (state_58659){
while(true){
var ret_value__57183__auto__ = (function (){try{while(true){
var result__57184__auto__ = switch__57181__auto__(state_58659);
if(cljs.core.keyword_identical_QMARK_(result__57184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57184__auto__;
}
break;
}
}catch (e58683){var ex__57185__auto__ = e58683;
var statearr_58684_59560 = state_58659;
(statearr_58684_59560[(2)] = ex__57185__auto__);


if(cljs.core.seq((state_58659[(4)]))){
var statearr_58685_59561 = state_58659;
(statearr_58685_59561[(1)] = cljs.core.first((state_58659[(4)])));

} else {
throw ex__57185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59566 = state_58659;
state_58659 = G__59566;
continue;
} else {
return ret_value__57183__auto__;
}
break;
}
});
cljs$core$async$state_machine__57182__auto__ = function(state_58659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57182__auto____1.call(this,state_58659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57182__auto____0;
cljs$core$async$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57182__auto____1;
return cljs$core$async$state_machine__57182__auto__;
})()
})();
var state__57219__auto__ = (function (){var statearr_58686 = f__57218__auto__();
(statearr_58686[(6)] = c__57217__auto___59539);

return statearr_58686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57219__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__58688 = arguments.length;
switch (G__58688) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__57217__auto___59579 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57218__auto__ = (function (){var switch__57181__auto__ = (function (state_58730){
var state_val_58731 = (state_58730[(1)]);
if((state_val_58731 === (7))){
var inst_58726 = (state_58730[(2)]);
var state_58730__$1 = state_58730;
var statearr_58732_59581 = state_58730__$1;
(statearr_58732_59581[(2)] = inst_58726);

(statearr_58732_59581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (1))){
var inst_58689 = [];
var inst_58690 = inst_58689;
var inst_58691 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_58730__$1 = (function (){var statearr_58733 = state_58730;
(statearr_58733[(7)] = inst_58691);

(statearr_58733[(8)] = inst_58690);

return statearr_58733;
})();
var statearr_58734_59582 = state_58730__$1;
(statearr_58734_59582[(2)] = null);

(statearr_58734_59582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (4))){
var inst_58694 = (state_58730[(9)]);
var inst_58694__$1 = (state_58730[(2)]);
var inst_58695 = (inst_58694__$1 == null);
var inst_58696 = cljs.core.not(inst_58695);
var state_58730__$1 = (function (){var statearr_58735 = state_58730;
(statearr_58735[(9)] = inst_58694__$1);

return statearr_58735;
})();
if(inst_58696){
var statearr_58736_59583 = state_58730__$1;
(statearr_58736_59583[(1)] = (5));

} else {
var statearr_58737_59584 = state_58730__$1;
(statearr_58737_59584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (15))){
var inst_58720 = (state_58730[(2)]);
var state_58730__$1 = state_58730;
var statearr_58738_59585 = state_58730__$1;
(statearr_58738_59585[(2)] = inst_58720);

(statearr_58738_59585[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (13))){
var state_58730__$1 = state_58730;
var statearr_58739_59586 = state_58730__$1;
(statearr_58739_59586[(2)] = null);

(statearr_58739_59586[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (6))){
var inst_58690 = (state_58730[(8)]);
var inst_58715 = inst_58690.length;
var inst_58716 = (inst_58715 > (0));
var state_58730__$1 = state_58730;
if(cljs.core.truth_(inst_58716)){
var statearr_58740_59591 = state_58730__$1;
(statearr_58740_59591[(1)] = (12));

} else {
var statearr_58741_59592 = state_58730__$1;
(statearr_58741_59592[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (3))){
var inst_58728 = (state_58730[(2)]);
var state_58730__$1 = state_58730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58730__$1,inst_58728);
} else {
if((state_val_58731 === (12))){
var inst_58690 = (state_58730[(8)]);
var inst_58718 = cljs.core.vec(inst_58690);
var state_58730__$1 = state_58730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58730__$1,(15),out,inst_58718);
} else {
if((state_val_58731 === (2))){
var state_58730__$1 = state_58730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58730__$1,(4),ch);
} else {
if((state_val_58731 === (11))){
var inst_58698 = (state_58730[(10)]);
var inst_58694 = (state_58730[(9)]);
var inst_58708 = (state_58730[(2)]);
var inst_58709 = [];
var inst_58710 = inst_58709.push(inst_58694);
var inst_58690 = inst_58709;
var inst_58691 = inst_58698;
var state_58730__$1 = (function (){var statearr_58742 = state_58730;
(statearr_58742[(11)] = inst_58710);

(statearr_58742[(7)] = inst_58691);

(statearr_58742[(8)] = inst_58690);

(statearr_58742[(12)] = inst_58708);

return statearr_58742;
})();
var statearr_58743_59605 = state_58730__$1;
(statearr_58743_59605[(2)] = null);

(statearr_58743_59605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (9))){
var inst_58690 = (state_58730[(8)]);
var inst_58706 = cljs.core.vec(inst_58690);
var state_58730__$1 = state_58730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58730__$1,(11),out,inst_58706);
} else {
if((state_val_58731 === (5))){
var inst_58691 = (state_58730[(7)]);
var inst_58698 = (state_58730[(10)]);
var inst_58694 = (state_58730[(9)]);
var inst_58698__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_58694) : f.call(null,inst_58694));
var inst_58699 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_58698__$1,inst_58691);
var inst_58700 = cljs.core.keyword_identical_QMARK_(inst_58691,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_58701 = ((inst_58699) || (inst_58700));
var state_58730__$1 = (function (){var statearr_58744 = state_58730;
(statearr_58744[(10)] = inst_58698__$1);

return statearr_58744;
})();
if(cljs.core.truth_(inst_58701)){
var statearr_58745_59617 = state_58730__$1;
(statearr_58745_59617[(1)] = (8));

} else {
var statearr_58746_59619 = state_58730__$1;
(statearr_58746_59619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (14))){
var inst_58723 = (state_58730[(2)]);
var inst_58724 = cljs.core.async.close_BANG_(out);
var state_58730__$1 = (function (){var statearr_58748 = state_58730;
(statearr_58748[(13)] = inst_58723);

return statearr_58748;
})();
var statearr_58749_59621 = state_58730__$1;
(statearr_58749_59621[(2)] = inst_58724);

(statearr_58749_59621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (10))){
var inst_58713 = (state_58730[(2)]);
var state_58730__$1 = state_58730;
var statearr_58750_59622 = state_58730__$1;
(statearr_58750_59622[(2)] = inst_58713);

(statearr_58750_59622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (8))){
var inst_58690 = (state_58730[(8)]);
var inst_58698 = (state_58730[(10)]);
var inst_58694 = (state_58730[(9)]);
var inst_58703 = inst_58690.push(inst_58694);
var tmp58747 = inst_58690;
var inst_58690__$1 = tmp58747;
var inst_58691 = inst_58698;
var state_58730__$1 = (function (){var statearr_58751 = state_58730;
(statearr_58751[(7)] = inst_58691);

(statearr_58751[(8)] = inst_58690__$1);

(statearr_58751[(14)] = inst_58703);

return statearr_58751;
})();
var statearr_58752_59625 = state_58730__$1;
(statearr_58752_59625[(2)] = null);

(statearr_58752_59625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
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
return (function() {
var cljs$core$async$state_machine__57182__auto__ = null;
var cljs$core$async$state_machine__57182__auto____0 = (function (){
var statearr_58753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58753[(0)] = cljs$core$async$state_machine__57182__auto__);

(statearr_58753[(1)] = (1));

return statearr_58753;
});
var cljs$core$async$state_machine__57182__auto____1 = (function (state_58730){
while(true){
var ret_value__57183__auto__ = (function (){try{while(true){
var result__57184__auto__ = switch__57181__auto__(state_58730);
if(cljs.core.keyword_identical_QMARK_(result__57184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57184__auto__;
}
break;
}
}catch (e58754){var ex__57185__auto__ = e58754;
var statearr_58755_59627 = state_58730;
(statearr_58755_59627[(2)] = ex__57185__auto__);


if(cljs.core.seq((state_58730[(4)]))){
var statearr_58756_59628 = state_58730;
(statearr_58756_59628[(1)] = cljs.core.first((state_58730[(4)])));

} else {
throw ex__57185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59629 = state_58730;
state_58730 = G__59629;
continue;
} else {
return ret_value__57183__auto__;
}
break;
}
});
cljs$core$async$state_machine__57182__auto__ = function(state_58730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57182__auto____1.call(this,state_58730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57182__auto____0;
cljs$core$async$state_machine__57182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57182__auto____1;
return cljs$core$async$state_machine__57182__auto__;
})()
})();
var state__57219__auto__ = (function (){var statearr_58757 = f__57218__auto__();
(statearr_58757[(6)] = c__57217__auto___59579);

return statearr_58757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57219__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
