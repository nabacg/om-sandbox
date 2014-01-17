// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9255 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9255 = (function (f,fn_handler,meta9256){
this.f = f;
this.fn_handler = fn_handler;
this.meta9256 = meta9256;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9255.cljs$lang$type = true;
cljs.core.async.t9255.cljs$lang$ctorStr = "cljs.core.async/t9255";
cljs.core.async.t9255.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9255");
});
cljs.core.async.t9255.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9255.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9255.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9257){var self__ = this;
var _9257__$1 = this;return self__.meta9256;
});
cljs.core.async.t9255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9257,meta9256__$1){var self__ = this;
var _9257__$1 = this;return (new cljs.core.async.t9255(self__.f,self__.fn_handler,meta9256__$1));
});
cljs.core.async.__GT_t9255 = (function __GT_t9255(f__$1,fn_handler__$1,meta9256){return (new cljs.core.async.t9255(f__$1,fn_handler__$1,meta9256));
});
}
return (new cljs.core.async.t9255(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9259 = buff;if(G__9259)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__9259.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9259.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9259);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9259);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_9260 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9260);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9260);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3396__auto__ = ret;if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3396__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4250__auto___9261 = n;var x_9262 = 0;while(true){
if((x_9262 < n__4250__auto___9261))
{(a[x_9262] = 0);
{
var G__9263 = (x_9262 + 1);
x_9262 = G__9263;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__9264 = (i + 1);
i = G__9264;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9268 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9268 = (function (flag,alt_flag,meta9269){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9269 = meta9269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9268.cljs$lang$type = true;
cljs.core.async.t9268.cljs$lang$ctorStr = "cljs.core.async/t9268";
cljs.core.async.t9268.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9268");
});
cljs.core.async.t9268.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9268.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9268.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9270){var self__ = this;
var _9270__$1 = this;return self__.meta9269;
});
cljs.core.async.t9268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9270,meta9269__$1){var self__ = this;
var _9270__$1 = this;return (new cljs.core.async.t9268(self__.flag,self__.alt_flag,meta9269__$1));
});
cljs.core.async.__GT_t9268 = (function __GT_t9268(flag__$1,alt_flag__$1,meta9269){return (new cljs.core.async.t9268(flag__$1,alt_flag__$1,meta9269));
});
}
return (new cljs.core.async.t9268(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9274 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9274 = (function (cb,flag,alt_handler,meta9275){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9275 = meta9275;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9274.cljs$lang$type = true;
cljs.core.async.t9274.cljs$lang$ctorStr = "cljs.core.async/t9274";
cljs.core.async.t9274.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9274");
});
cljs.core.async.t9274.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9274.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9274.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9276){var self__ = this;
var _9276__$1 = this;return self__.meta9275;
});
cljs.core.async.t9274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9276,meta9275__$1){var self__ = this;
var _9276__$1 = this;return (new cljs.core.async.t9274(self__.cb,self__.flag,self__.alt_handler,meta9275__$1));
});
cljs.core.async.__GT_t9274 = (function __GT_t9274(cb__$1,flag__$1,alt_handler__$1,meta9275){return (new cljs.core.async.t9274(cb__$1,flag__$1,alt_handler__$1,meta9275));
});
}
return (new cljs.core.async.t9274(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9277_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9277_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3408__auto__ = wport;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__9278 = (i + 1);
i = G__9278;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3408__auto__ = ret;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3396__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3396__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__9279){var map__9281 = p__9279;var map__9281__$1 = ((cljs.core.seq_QMARK_.call(null,map__9281))?cljs.core.apply.call(null,cljs.core.hash_map,map__9281):map__9281);var opts = map__9281__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9279 = null;if (arguments.length > 1) {
  p__9279 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9279);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9282){
var ports = cljs.core.first(arglist__9282);
var p__9279 = cljs.core.rest(arglist__9282);
return alts_BANG___delegate(ports,p__9279);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9290 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9290 = (function (ch,f,map_LT_,meta9291){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9291 = meta9291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9290.cljs$lang$type = true;
cljs.core.async.t9290.cljs$lang$ctorStr = "cljs.core.async/t9290";
cljs.core.async.t9290.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9290");
});
cljs.core.async.t9290.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9290.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9290.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9290.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9293 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9293 = (function (fn1,_,meta9291,ch,f,map_LT_,meta9294){
this.fn1 = fn1;
this._ = _;
this.meta9291 = meta9291;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9294 = meta9294;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9293.cljs$lang$type = true;
cljs.core.async.t9293.cljs$lang$ctorStr = "cljs.core.async/t9293";
cljs.core.async.t9293.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9293");
});
cljs.core.async.t9293.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9293.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9293.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9293.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9283_SHARP_){return f1.call(null,(((p1__9283_SHARP_ == null))?null:self__.f.call(null,p1__9283_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9295){var self__ = this;
var _9295__$1 = this;return self__.meta9294;
});
cljs.core.async.t9293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9295,meta9294__$1){var self__ = this;
var _9295__$1 = this;return (new cljs.core.async.t9293(self__.fn1,self__._,self__.meta9291,self__.ch,self__.f,self__.map_LT_,meta9294__$1));
});
cljs.core.async.__GT_t9293 = (function __GT_t9293(fn1__$1,___$2,meta9291__$1,ch__$2,f__$2,map_LT___$2,meta9294){return (new cljs.core.async.t9293(fn1__$1,___$2,meta9291__$1,ch__$2,f__$2,map_LT___$2,meta9294));
});
}
return (new cljs.core.async.t9293(fn1,___$1,self__.meta9291,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3396__auto__ = ret;if(cljs.core.truth_(and__3396__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3396__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t9290.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9290.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9292){var self__ = this;
var _9292__$1 = this;return self__.meta9291;
});
cljs.core.async.t9290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9292,meta9291__$1){var self__ = this;
var _9292__$1 = this;return (new cljs.core.async.t9290(self__.ch,self__.f,self__.map_LT_,meta9291__$1));
});
cljs.core.async.__GT_t9290 = (function __GT_t9290(ch__$1,f__$1,map_LT___$1,meta9291){return (new cljs.core.async.t9290(ch__$1,f__$1,map_LT___$1,meta9291));
});
}
return (new cljs.core.async.t9290(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9299 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9299 = (function (ch,f,map_GT_,meta9300){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9300 = meta9300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9299.cljs$lang$type = true;
cljs.core.async.t9299.cljs$lang$ctorStr = "cljs.core.async/t9299";
cljs.core.async.t9299.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9299");
});
cljs.core.async.t9299.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9299.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9299.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9299.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9299.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9299.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9301){var self__ = this;
var _9301__$1 = this;return self__.meta9300;
});
cljs.core.async.t9299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9301,meta9300__$1){var self__ = this;
var _9301__$1 = this;return (new cljs.core.async.t9299(self__.ch,self__.f,self__.map_GT_,meta9300__$1));
});
cljs.core.async.__GT_t9299 = (function __GT_t9299(ch__$1,f__$1,map_GT___$1,meta9300){return (new cljs.core.async.t9299(ch__$1,f__$1,map_GT___$1,meta9300));
});
}
return (new cljs.core.async.t9299(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9305 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9305 = (function (ch,p,filter_GT_,meta9306){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9306 = meta9306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9305.cljs$lang$type = true;
cljs.core.async.t9305.cljs$lang$ctorStr = "cljs.core.async/t9305";
cljs.core.async.t9305.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9305");
});
cljs.core.async.t9305.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9305.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9305.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9305.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9305.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9305.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9307){var self__ = this;
var _9307__$1 = this;return self__.meta9306;
});
cljs.core.async.t9305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9307,meta9306__$1){var self__ = this;
var _9307__$1 = this;return (new cljs.core.async.t9305(self__.ch,self__.p,self__.filter_GT_,meta9306__$1));
});
cljs.core.async.__GT_t9305 = (function __GT_t9305(ch__$1,p__$1,filter_GT___$1,meta9306){return (new cljs.core.async.t9305(ch__$1,p__$1,filter_GT___$1,meta9306));
});
}
return (new cljs.core.async.t9305(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6929__auto___9390 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6930__auto__ = (function (){var switch__6859__auto__ = (function (state_9369){var state_val_9370 = (state_9369[1]);if((state_val_9370 === 1))
{var state_9369__$1 = state_9369;var statearr_9371_9391 = state_9369__$1;(statearr_9371_9391[2] = null);
(statearr_9371_9391[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9370 === 2))
{var state_9369__$1 = state_9369;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9369__$1,4,ch);
} else
{if((state_val_9370 === 3))
{var inst_9367 = (state_9369[2]);var state_9369__$1 = state_9369;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9369__$1,inst_9367);
} else
{if((state_val_9370 === 4))
{var inst_9351 = (state_9369[7]);var inst_9351__$1 = (state_9369[2]);var inst_9352 = (inst_9351__$1 == null);var state_9369__$1 = (function (){var statearr_9372 = state_9369;(statearr_9372[7] = inst_9351__$1);
return statearr_9372;
})();if(cljs.core.truth_(inst_9352))
{var statearr_9373_9392 = state_9369__$1;(statearr_9373_9392[1] = 5);
} else
{var statearr_9374_9393 = state_9369__$1;(statearr_9374_9393[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9370 === 5))
{var inst_9354 = cljs.core.async.close_BANG_.call(null,out);var state_9369__$1 = state_9369;var statearr_9375_9394 = state_9369__$1;(statearr_9375_9394[2] = inst_9354);
(statearr_9375_9394[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9370 === 6))
{var inst_9351 = (state_9369[7]);var inst_9356 = p.call(null,inst_9351);var state_9369__$1 = state_9369;if(cljs.core.truth_(inst_9356))
{var statearr_9376_9395 = state_9369__$1;(statearr_9376_9395[1] = 8);
} else
{var statearr_9377_9396 = state_9369__$1;(statearr_9377_9396[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9370 === 7))
{var inst_9365 = (state_9369[2]);var state_9369__$1 = state_9369;var statearr_9378_9397 = state_9369__$1;(statearr_9378_9397[2] = inst_9365);
(statearr_9378_9397[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9370 === 8))
{var inst_9351 = (state_9369[7]);var state_9369__$1 = state_9369;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9369__$1,11,out,inst_9351);
} else
{if((state_val_9370 === 9))
{var state_9369__$1 = state_9369;var statearr_9379_9398 = state_9369__$1;(statearr_9379_9398[2] = null);
(statearr_9379_9398[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9370 === 10))
{var inst_9362 = (state_9369[2]);var state_9369__$1 = (function (){var statearr_9380 = state_9369;(statearr_9380[8] = inst_9362);
return statearr_9380;
})();var statearr_9381_9399 = state_9369__$1;(statearr_9381_9399[2] = null);
(statearr_9381_9399[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9370 === 11))
{var inst_9359 = (state_9369[2]);var state_9369__$1 = state_9369;var statearr_9382_9400 = state_9369__$1;(statearr_9382_9400[2] = inst_9359);
(statearr_9382_9400[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6859__auto__){
return (function() {
var state_machine__6860__auto__ = null;
var state_machine__6860__auto____0 = (function (){var statearr_9386 = [null,null,null,null,null,null,null,null,null];(statearr_9386[0] = state_machine__6860__auto__);
(statearr_9386[1] = 1);
return statearr_9386;
});
var state_machine__6860__auto____1 = (function (state_9369){while(true){
var ret_value__6861__auto__ = (function (){try{while(true){
var result__6862__auto__ = switch__6859__auto__.call(null,state_9369);if(cljs.core.keyword_identical_QMARK_.call(null,result__6862__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6862__auto__;
}
break;
}
}catch (e9387){if((e9387 instanceof Object))
{var ex__6863__auto__ = e9387;var statearr_9388_9401 = state_9369;(statearr_9388_9401[5] = ex__6863__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9369);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9387;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9402 = state_9369;
state_9369 = G__9402;
continue;
}
} else
{return ret_value__6861__auto__;
}
break;
}
});
state_machine__6860__auto__ = function(state_9369){
switch(arguments.length){
case 0:
return state_machine__6860__auto____0.call(this);
case 1:
return state_machine__6860__auto____1.call(this,state_9369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6860__auto____0;
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6860__auto____1;
return state_machine__6860__auto__;
})()
;})(switch__6859__auto__))
})();var state__6931__auto__ = (function (){var statearr_9389 = f__6930__auto__.call(null);(statearr_9389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6929__auto___9390);
return statearr_9389;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6931__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6929__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6930__auto__ = (function (){var switch__6859__auto__ = (function (state_9554){var state_val_9555 = (state_9554[1]);if((state_val_9555 === 1))
{var state_9554__$1 = state_9554;var statearr_9556_9593 = state_9554__$1;(statearr_9556_9593[2] = null);
(statearr_9556_9593[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9555 === 2))
{var state_9554__$1 = state_9554;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9554__$1,4,in$);
} else
{if((state_val_9555 === 3))
{var inst_9552 = (state_9554[2]);var state_9554__$1 = state_9554;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9554__$1,inst_9552);
} else
{if((state_val_9555 === 4))
{var inst_9500 = (state_9554[7]);var inst_9500__$1 = (state_9554[2]);var inst_9501 = (inst_9500__$1 == null);var state_9554__$1 = (function (){var statearr_9557 = state_9554;(statearr_9557[7] = inst_9500__$1);
return statearr_9557;
})();if(cljs.core.truth_(inst_9501))
{var statearr_9558_9594 = state_9554__$1;(statearr_9558_9594[1] = 5);
} else
{var statearr_9559_9595 = state_9554__$1;(statearr_9559_9595[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9555 === 5))
{var inst_9503 = cljs.core.async.close_BANG_.call(null,out);var state_9554__$1 = state_9554;var statearr_9560_9596 = state_9554__$1;(statearr_9560_9596[2] = inst_9503);
(statearr_9560_9596[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9555 === 6))
{var inst_9500 = (state_9554[7]);var inst_9505 = f.call(null,inst_9500);var inst_9510 = cljs.core.seq.call(null,inst_9505);var inst_9511 = inst_9510;var inst_9512 = null;var inst_9513 = 0;var inst_9514 = 0;var state_9554__$1 = (function (){var statearr_9561 = state_9554;(statearr_9561[8] = inst_9514);
(statearr_9561[9] = inst_9512);
(statearr_9561[10] = inst_9513);
(statearr_9561[11] = inst_9511);
return statearr_9561;
})();var statearr_9562_9597 = state_9554__$1;(statearr_9562_9597[2] = null);
(statearr_9562_9597[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9555 === 7))
{var inst_9550 = (state_9554[2]);var state_9554__$1 = state_9554;var statearr_9563_9598 = state_9554__$1;(statearr_9563_9598[2] = inst_9550);
(statearr_9563_9598[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9555 === 8))
{var inst_9514 = (state_9554[8]);var inst_9513 = (state_9554[10]);var inst_9516 = (inst_9514 < inst_9513);var inst_9517 = inst_9516;var state_9554__$1 = state_9554;if(cljs.core.truth_(inst_9517))
{var statearr_9564_9599 = state_9554__$1;(statearr_9564_9599[1] = 10);
} else
{var statearr_9565_9600 = state_9554__$1;(statearr_9565_9600[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9555 === 9))
{var inst_9547 = (state_9554[2]);var state_9554__$1 = (function (){var statearr_9566 = state_9554;(statearr_9566[12] = inst_9547);
return statearr_9566;
})();var statearr_9567_9601 = state_9554__$1;(statearr_9567_9601[2] = null);
(statearr_9567_9601[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9555 === 10))
{var inst_9514 = (state_9554[8]);var inst_9512 = (state_9554[9]);var inst_9519 = cljs.core._nth.call(null,inst_9512,inst_9514);var state_9554__$1 = state_9554;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9554__$1,13,out,inst_9519);
} else
{if((state_val_9555 === 11))
{var inst_9511 = (state_9554[11]);var inst_9525 = (state_9554[13]);var inst_9525__$1 = cljs.core.seq.call(null,inst_9511);var state_9554__$1 = (function (){var statearr_9571 = state_9554;(statearr_9571[13] = inst_9525__$1);
return statearr_9571;
})();if(inst_9525__$1)
{var statearr_9572_9602 = state_9554__$1;(statearr_9572_9602[1] = 14);
} else
{var statearr_9573_9603 = state_9554__$1;(statearr_9573_9603[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9555 === 12))
{var inst_9545 = (state_9554[2]);var state_9554__$1 = state_9554;var statearr_9574_9604 = state_9554__$1;(statearr_9574_9604[2] = inst_9545);
(statearr_9574_9604[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9555 === 13))
{var inst_9514 = (state_9554[8]);var inst_9512 = (state_9554[9]);var inst_9513 = (state_9554[10]);var inst_9511 = (state_9554[11]);var inst_9521 = (state_9554[2]);var inst_9522 = (inst_9514 + 1);var tmp9568 = inst_9512;var tmp9569 = inst_9513;var tmp9570 = inst_9511;var inst_9511__$1 = tmp9570;var inst_9512__$1 = tmp9568;var inst_9513__$1 = tmp9569;var inst_9514__$1 = inst_9522;var state_9554__$1 = (function (){var statearr_9575 = state_9554;(statearr_9575[8] = inst_9514__$1);
(statearr_9575[9] = inst_9512__$1);
(statearr_9575[10] = inst_9513__$1);
(statearr_9575[11] = inst_9511__$1);
(statearr_9575[14] = inst_9521);
return statearr_9575;
})();var statearr_9576_9605 = state_9554__$1;(statearr_9576_9605[2] = null);
(statearr_9576_9605[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9555 === 14))
{var inst_9525 = (state_9554[13]);var inst_9527 = cljs.core.chunked_seq_QMARK_.call(null,inst_9525);var state_9554__$1 = state_9554;if(inst_9527)
{var statearr_9577_9606 = state_9554__$1;(statearr_9577_9606[1] = 17);
} else
{var statearr_9578_9607 = state_9554__$1;(statearr_9578_9607[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9555 === 15))
{var state_9554__$1 = state_9554;var statearr_9579_9608 = state_9554__$1;(statearr_9579_9608[2] = null);
(statearr_9579_9608[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9555 === 16))
{var inst_9543 = (state_9554[2]);var state_9554__$1 = state_9554;var statearr_9580_9609 = state_9554__$1;(statearr_9580_9609[2] = inst_9543);
(statearr_9580_9609[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9555 === 17))
{var inst_9525 = (state_9554[13]);var inst_9529 = cljs.core.chunk_first.call(null,inst_9525);var inst_9530 = cljs.core.chunk_rest.call(null,inst_9525);var inst_9531 = cljs.core.count.call(null,inst_9529);var inst_9511 = inst_9530;var inst_9512 = inst_9529;var inst_9513 = inst_9531;var inst_9514 = 0;var state_9554__$1 = (function (){var statearr_9581 = state_9554;(statearr_9581[8] = inst_9514);
(statearr_9581[9] = inst_9512);
(statearr_9581[10] = inst_9513);
(statearr_9581[11] = inst_9511);
return statearr_9581;
})();var statearr_9582_9610 = state_9554__$1;(statearr_9582_9610[2] = null);
(statearr_9582_9610[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9555 === 18))
{var inst_9525 = (state_9554[13]);var inst_9534 = cljs.core.first.call(null,inst_9525);var state_9554__$1 = state_9554;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9554__$1,20,out,inst_9534);
} else
{if((state_val_9555 === 19))
{var inst_9540 = (state_9554[2]);var state_9554__$1 = state_9554;var statearr_9583_9611 = state_9554__$1;(statearr_9583_9611[2] = inst_9540);
(statearr_9583_9611[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9555 === 20))
{var inst_9525 = (state_9554[13]);var inst_9536 = (state_9554[2]);var inst_9537 = cljs.core.next.call(null,inst_9525);var inst_9511 = inst_9537;var inst_9512 = null;var inst_9513 = 0;var inst_9514 = 0;var state_9554__$1 = (function (){var statearr_9584 = state_9554;(statearr_9584[8] = inst_9514);
(statearr_9584[9] = inst_9512);
(statearr_9584[10] = inst_9513);
(statearr_9584[11] = inst_9511);
(statearr_9584[15] = inst_9536);
return statearr_9584;
})();var statearr_9585_9612 = state_9554__$1;(statearr_9585_9612[2] = null);
(statearr_9585_9612[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6859__auto__){
return (function() {
var state_machine__6860__auto__ = null;
var state_machine__6860__auto____0 = (function (){var statearr_9589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9589[0] = state_machine__6860__auto__);
(statearr_9589[1] = 1);
return statearr_9589;
});
var state_machine__6860__auto____1 = (function (state_9554){while(true){
var ret_value__6861__auto__ = (function (){try{while(true){
var result__6862__auto__ = switch__6859__auto__.call(null,state_9554);if(cljs.core.keyword_identical_QMARK_.call(null,result__6862__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6862__auto__;
}
break;
}
}catch (e9590){if((e9590 instanceof Object))
{var ex__6863__auto__ = e9590;var statearr_9591_9613 = state_9554;(statearr_9591_9613[5] = ex__6863__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9554);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9590;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9614 = state_9554;
state_9554 = G__9614;
continue;
}
} else
{return ret_value__6861__auto__;
}
break;
}
});
state_machine__6860__auto__ = function(state_9554){
switch(arguments.length){
case 0:
return state_machine__6860__auto____0.call(this);
case 1:
return state_machine__6860__auto____1.call(this,state_9554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6860__auto____0;
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6860__auto____1;
return state_machine__6860__auto__;
})()
;})(switch__6859__auto__))
})();var state__6931__auto__ = (function (){var statearr_9592 = f__6930__auto__.call(null);(statearr_9592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6929__auto__);
return statearr_9592;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6931__auto__);
}));
return c__6929__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6929__auto___9695 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6930__auto__ = (function (){var switch__6859__auto__ = (function (state_9674){var state_val_9675 = (state_9674[1]);if((state_val_9675 === 1))
{var state_9674__$1 = state_9674;var statearr_9676_9696 = state_9674__$1;(statearr_9676_9696[2] = null);
(statearr_9676_9696[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9675 === 2))
{var state_9674__$1 = state_9674;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9674__$1,4,from);
} else
{if((state_val_9675 === 3))
{var inst_9672 = (state_9674[2]);var state_9674__$1 = state_9674;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9674__$1,inst_9672);
} else
{if((state_val_9675 === 4))
{var inst_9657 = (state_9674[7]);var inst_9657__$1 = (state_9674[2]);var inst_9658 = (inst_9657__$1 == null);var state_9674__$1 = (function (){var statearr_9677 = state_9674;(statearr_9677[7] = inst_9657__$1);
return statearr_9677;
})();if(cljs.core.truth_(inst_9658))
{var statearr_9678_9697 = state_9674__$1;(statearr_9678_9697[1] = 5);
} else
{var statearr_9679_9698 = state_9674__$1;(statearr_9679_9698[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9675 === 5))
{var state_9674__$1 = state_9674;if(cljs.core.truth_(close_QMARK_))
{var statearr_9680_9699 = state_9674__$1;(statearr_9680_9699[1] = 8);
} else
{var statearr_9681_9700 = state_9674__$1;(statearr_9681_9700[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9675 === 6))
{var inst_9657 = (state_9674[7]);var state_9674__$1 = state_9674;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9674__$1,11,to,inst_9657);
} else
{if((state_val_9675 === 7))
{var inst_9670 = (state_9674[2]);var state_9674__$1 = state_9674;var statearr_9682_9701 = state_9674__$1;(statearr_9682_9701[2] = inst_9670);
(statearr_9682_9701[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9675 === 8))
{var inst_9661 = cljs.core.async.close_BANG_.call(null,to);var state_9674__$1 = state_9674;var statearr_9683_9702 = state_9674__$1;(statearr_9683_9702[2] = inst_9661);
(statearr_9683_9702[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9675 === 9))
{var state_9674__$1 = state_9674;var statearr_9684_9703 = state_9674__$1;(statearr_9684_9703[2] = null);
(statearr_9684_9703[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9675 === 10))
{var inst_9664 = (state_9674[2]);var state_9674__$1 = state_9674;var statearr_9685_9704 = state_9674__$1;(statearr_9685_9704[2] = inst_9664);
(statearr_9685_9704[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9675 === 11))
{var inst_9667 = (state_9674[2]);var state_9674__$1 = (function (){var statearr_9686 = state_9674;(statearr_9686[8] = inst_9667);
return statearr_9686;
})();var statearr_9687_9705 = state_9674__$1;(statearr_9687_9705[2] = null);
(statearr_9687_9705[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6859__auto__){
return (function() {
var state_machine__6860__auto__ = null;
var state_machine__6860__auto____0 = (function (){var statearr_9691 = [null,null,null,null,null,null,null,null,null];(statearr_9691[0] = state_machine__6860__auto__);
(statearr_9691[1] = 1);
return statearr_9691;
});
var state_machine__6860__auto____1 = (function (state_9674){while(true){
var ret_value__6861__auto__ = (function (){try{while(true){
var result__6862__auto__ = switch__6859__auto__.call(null,state_9674);if(cljs.core.keyword_identical_QMARK_.call(null,result__6862__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6862__auto__;
}
break;
}
}catch (e9692){if((e9692 instanceof Object))
{var ex__6863__auto__ = e9692;var statearr_9693_9706 = state_9674;(statearr_9693_9706[5] = ex__6863__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9674);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9692;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9707 = state_9674;
state_9674 = G__9707;
continue;
}
} else
{return ret_value__6861__auto__;
}
break;
}
});
state_machine__6860__auto__ = function(state_9674){
switch(arguments.length){
case 0:
return state_machine__6860__auto____0.call(this);
case 1:
return state_machine__6860__auto____1.call(this,state_9674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6860__auto____0;
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6860__auto____1;
return state_machine__6860__auto__;
})()
;})(switch__6859__auto__))
})();var state__6931__auto__ = (function (){var statearr_9694 = f__6930__auto__.call(null);(statearr_9694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6929__auto___9695);
return statearr_9694;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6931__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6929__auto___9794 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6930__auto__ = (function (){var switch__6859__auto__ = (function (state_9772){var state_val_9773 = (state_9772[1]);if((state_val_9773 === 1))
{var state_9772__$1 = state_9772;var statearr_9774_9795 = state_9772__$1;(statearr_9774_9795[2] = null);
(statearr_9774_9795[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 2))
{var state_9772__$1 = state_9772;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9772__$1,4,ch);
} else
{if((state_val_9773 === 3))
{var inst_9770 = (state_9772[2]);var state_9772__$1 = state_9772;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9772__$1,inst_9770);
} else
{if((state_val_9773 === 4))
{var inst_9753 = (state_9772[7]);var inst_9753__$1 = (state_9772[2]);var inst_9754 = (inst_9753__$1 == null);var state_9772__$1 = (function (){var statearr_9775 = state_9772;(statearr_9775[7] = inst_9753__$1);
return statearr_9775;
})();if(cljs.core.truth_(inst_9754))
{var statearr_9776_9796 = state_9772__$1;(statearr_9776_9796[1] = 5);
} else
{var statearr_9777_9797 = state_9772__$1;(statearr_9777_9797[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 5))
{var inst_9756 = cljs.core.async.close_BANG_.call(null,tc);var inst_9757 = cljs.core.async.close_BANG_.call(null,fc);var state_9772__$1 = (function (){var statearr_9778 = state_9772;(statearr_9778[8] = inst_9756);
return statearr_9778;
})();var statearr_9779_9798 = state_9772__$1;(statearr_9779_9798[2] = inst_9757);
(statearr_9779_9798[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 6))
{var inst_9753 = (state_9772[7]);var inst_9759 = p.call(null,inst_9753);var state_9772__$1 = state_9772;if(cljs.core.truth_(inst_9759))
{var statearr_9780_9799 = state_9772__$1;(statearr_9780_9799[1] = 9);
} else
{var statearr_9781_9800 = state_9772__$1;(statearr_9781_9800[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 7))
{var inst_9768 = (state_9772[2]);var state_9772__$1 = state_9772;var statearr_9782_9801 = state_9772__$1;(statearr_9782_9801[2] = inst_9768);
(statearr_9782_9801[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 8))
{var inst_9765 = (state_9772[2]);var state_9772__$1 = (function (){var statearr_9783 = state_9772;(statearr_9783[9] = inst_9765);
return statearr_9783;
})();var statearr_9784_9802 = state_9772__$1;(statearr_9784_9802[2] = null);
(statearr_9784_9802[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 9))
{var state_9772__$1 = state_9772;var statearr_9785_9803 = state_9772__$1;(statearr_9785_9803[2] = tc);
(statearr_9785_9803[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 10))
{var state_9772__$1 = state_9772;var statearr_9786_9804 = state_9772__$1;(statearr_9786_9804[2] = fc);
(statearr_9786_9804[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 11))
{var inst_9753 = (state_9772[7]);var inst_9763 = (state_9772[2]);var state_9772__$1 = state_9772;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9772__$1,8,inst_9763,inst_9753);
} else
{return null;
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
});return ((function (switch__6859__auto__){
return (function() {
var state_machine__6860__auto__ = null;
var state_machine__6860__auto____0 = (function (){var statearr_9790 = [null,null,null,null,null,null,null,null,null,null];(statearr_9790[0] = state_machine__6860__auto__);
(statearr_9790[1] = 1);
return statearr_9790;
});
var state_machine__6860__auto____1 = (function (state_9772){while(true){
var ret_value__6861__auto__ = (function (){try{while(true){
var result__6862__auto__ = switch__6859__auto__.call(null,state_9772);if(cljs.core.keyword_identical_QMARK_.call(null,result__6862__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6862__auto__;
}
break;
}
}catch (e9791){if((e9791 instanceof Object))
{var ex__6863__auto__ = e9791;var statearr_9792_9805 = state_9772;(statearr_9792_9805[5] = ex__6863__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9772);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9791;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9806 = state_9772;
state_9772 = G__9806;
continue;
}
} else
{return ret_value__6861__auto__;
}
break;
}
});
state_machine__6860__auto__ = function(state_9772){
switch(arguments.length){
case 0:
return state_machine__6860__auto____0.call(this);
case 1:
return state_machine__6860__auto____1.call(this,state_9772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6860__auto____0;
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6860__auto____1;
return state_machine__6860__auto__;
})()
;})(switch__6859__auto__))
})();var state__6931__auto__ = (function (){var statearr_9793 = f__6930__auto__.call(null);(statearr_9793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6929__auto___9794);
return statearr_9793;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6931__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6929__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6930__auto__ = (function (){var switch__6859__auto__ = (function (state_9853){var state_val_9854 = (state_9853[1]);if((state_val_9854 === 7))
{var inst_9849 = (state_9853[2]);var state_9853__$1 = state_9853;var statearr_9855_9871 = state_9853__$1;(statearr_9855_9871[2] = inst_9849);
(statearr_9855_9871[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9854 === 6))
{var inst_9842 = (state_9853[7]);var inst_9839 = (state_9853[8]);var inst_9846 = f.call(null,inst_9839,inst_9842);var inst_9839__$1 = inst_9846;var state_9853__$1 = (function (){var statearr_9856 = state_9853;(statearr_9856[8] = inst_9839__$1);
return statearr_9856;
})();var statearr_9857_9872 = state_9853__$1;(statearr_9857_9872[2] = null);
(statearr_9857_9872[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9854 === 5))
{var inst_9839 = (state_9853[8]);var state_9853__$1 = state_9853;var statearr_9858_9873 = state_9853__$1;(statearr_9858_9873[2] = inst_9839);
(statearr_9858_9873[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9854 === 4))
{var inst_9842 = (state_9853[7]);var inst_9842__$1 = (state_9853[2]);var inst_9843 = (inst_9842__$1 == null);var state_9853__$1 = (function (){var statearr_9859 = state_9853;(statearr_9859[7] = inst_9842__$1);
return statearr_9859;
})();if(cljs.core.truth_(inst_9843))
{var statearr_9860_9874 = state_9853__$1;(statearr_9860_9874[1] = 5);
} else
{var statearr_9861_9875 = state_9853__$1;(statearr_9861_9875[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9854 === 3))
{var inst_9851 = (state_9853[2]);var state_9853__$1 = state_9853;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9853__$1,inst_9851);
} else
{if((state_val_9854 === 2))
{var state_9853__$1 = state_9853;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9853__$1,4,ch);
} else
{if((state_val_9854 === 1))
{var inst_9839 = init;var state_9853__$1 = (function (){var statearr_9862 = state_9853;(statearr_9862[8] = inst_9839);
return statearr_9862;
})();var statearr_9863_9876 = state_9853__$1;(statearr_9863_9876[2] = null);
(statearr_9863_9876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6859__auto__){
return (function() {
var state_machine__6860__auto__ = null;
var state_machine__6860__auto____0 = (function (){var statearr_9867 = [null,null,null,null,null,null,null,null,null];(statearr_9867[0] = state_machine__6860__auto__);
(statearr_9867[1] = 1);
return statearr_9867;
});
var state_machine__6860__auto____1 = (function (state_9853){while(true){
var ret_value__6861__auto__ = (function (){try{while(true){
var result__6862__auto__ = switch__6859__auto__.call(null,state_9853);if(cljs.core.keyword_identical_QMARK_.call(null,result__6862__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6862__auto__;
}
break;
}
}catch (e9868){if((e9868 instanceof Object))
{var ex__6863__auto__ = e9868;var statearr_9869_9877 = state_9853;(statearr_9869_9877[5] = ex__6863__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9853);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9868;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9878 = state_9853;
state_9853 = G__9878;
continue;
}
} else
{return ret_value__6861__auto__;
}
break;
}
});
state_machine__6860__auto__ = function(state_9853){
switch(arguments.length){
case 0:
return state_machine__6860__auto____0.call(this);
case 1:
return state_machine__6860__auto____1.call(this,state_9853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6860__auto____0;
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6860__auto____1;
return state_machine__6860__auto__;
})()
;})(switch__6859__auto__))
})();var state__6931__auto__ = (function (){var statearr_9870 = f__6930__auto__.call(null);(statearr_9870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6929__auto__);
return statearr_9870;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6931__auto__);
}));
return c__6929__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6929__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6930__auto__ = (function (){var switch__6859__auto__ = (function (state_9940){var state_val_9941 = (state_9940[1]);if((state_val_9941 === 1))
{var inst_9920 = cljs.core.seq.call(null,coll);var inst_9921 = inst_9920;var state_9940__$1 = (function (){var statearr_9942 = state_9940;(statearr_9942[7] = inst_9921);
return statearr_9942;
})();var statearr_9943_9961 = state_9940__$1;(statearr_9943_9961[2] = null);
(statearr_9943_9961[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9941 === 2))
{var inst_9921 = (state_9940[7]);var state_9940__$1 = state_9940;if(cljs.core.truth_(inst_9921))
{var statearr_9944_9962 = state_9940__$1;(statearr_9944_9962[1] = 4);
} else
{var statearr_9945_9963 = state_9940__$1;(statearr_9945_9963[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9941 === 3))
{var inst_9938 = (state_9940[2]);var state_9940__$1 = state_9940;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9940__$1,inst_9938);
} else
{if((state_val_9941 === 4))
{var inst_9921 = (state_9940[7]);var inst_9924 = cljs.core.first.call(null,inst_9921);var state_9940__$1 = state_9940;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9940__$1,7,ch,inst_9924);
} else
{if((state_val_9941 === 5))
{var state_9940__$1 = state_9940;if(cljs.core.truth_(close_QMARK_))
{var statearr_9946_9964 = state_9940__$1;(statearr_9946_9964[1] = 8);
} else
{var statearr_9947_9965 = state_9940__$1;(statearr_9947_9965[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9941 === 6))
{var inst_9936 = (state_9940[2]);var state_9940__$1 = state_9940;var statearr_9948_9966 = state_9940__$1;(statearr_9948_9966[2] = inst_9936);
(statearr_9948_9966[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9941 === 7))
{var inst_9921 = (state_9940[7]);var inst_9926 = (state_9940[2]);var inst_9927 = cljs.core.next.call(null,inst_9921);var inst_9921__$1 = inst_9927;var state_9940__$1 = (function (){var statearr_9949 = state_9940;(statearr_9949[8] = inst_9926);
(statearr_9949[7] = inst_9921__$1);
return statearr_9949;
})();var statearr_9950_9967 = state_9940__$1;(statearr_9950_9967[2] = null);
(statearr_9950_9967[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9941 === 8))
{var inst_9931 = cljs.core.async.close_BANG_.call(null,ch);var state_9940__$1 = state_9940;var statearr_9951_9968 = state_9940__$1;(statearr_9951_9968[2] = inst_9931);
(statearr_9951_9968[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9941 === 9))
{var state_9940__$1 = state_9940;var statearr_9952_9969 = state_9940__$1;(statearr_9952_9969[2] = null);
(statearr_9952_9969[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9941 === 10))
{var inst_9934 = (state_9940[2]);var state_9940__$1 = state_9940;var statearr_9953_9970 = state_9940__$1;(statearr_9953_9970[2] = inst_9934);
(statearr_9953_9970[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6859__auto__){
return (function() {
var state_machine__6860__auto__ = null;
var state_machine__6860__auto____0 = (function (){var statearr_9957 = [null,null,null,null,null,null,null,null,null];(statearr_9957[0] = state_machine__6860__auto__);
(statearr_9957[1] = 1);
return statearr_9957;
});
var state_machine__6860__auto____1 = (function (state_9940){while(true){
var ret_value__6861__auto__ = (function (){try{while(true){
var result__6862__auto__ = switch__6859__auto__.call(null,state_9940);if(cljs.core.keyword_identical_QMARK_.call(null,result__6862__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6862__auto__;
}
break;
}
}catch (e9958){if((e9958 instanceof Object))
{var ex__6863__auto__ = e9958;var statearr_9959_9971 = state_9940;(statearr_9959_9971[5] = ex__6863__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9940);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9958;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9972 = state_9940;
state_9940 = G__9972;
continue;
}
} else
{return ret_value__6861__auto__;
}
break;
}
});
state_machine__6860__auto__ = function(state_9940){
switch(arguments.length){
case 0:
return state_machine__6860__auto____0.call(this);
case 1:
return state_machine__6860__auto____1.call(this,state_9940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6860__auto____0;
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6860__auto____1;
return state_machine__6860__auto__;
})()
;})(switch__6859__auto__))
})();var state__6931__auto__ = (function (){var statearr_9960 = f__6930__auto__.call(null);(statearr_9960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6929__auto__);
return statearr_9960;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6931__auto__);
}));
return c__6929__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj9974 = {};return obj9974;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3396__auto__ = _;if(and__3396__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4029__auto__ = (((_ == null))?null:_);return (function (){var or__3408__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj9976 = {};return obj9976;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10200 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10200 = (function (cs,ch,mult,meta10201){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10201 = meta10201;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10200.cljs$lang$type = true;
cljs.core.async.t10200.cljs$lang$ctorStr = "cljs.core.async/t10200";
cljs.core.async.t10200.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10200");
});})(cs))
;
cljs.core.async.t10200.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10200.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10200.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10200.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10200.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10200.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10202){var self__ = this;
var _10202__$1 = this;return self__.meta10201;
});})(cs))
;
cljs.core.async.t10200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10202,meta10201__$1){var self__ = this;
var _10202__$1 = this;return (new cljs.core.async.t10200(self__.cs,self__.ch,self__.mult,meta10201__$1));
});})(cs))
;
cljs.core.async.__GT_t10200 = ((function (cs){
return (function __GT_t10200(cs__$1,ch__$1,mult__$1,meta10201){return (new cljs.core.async.t10200(cs__$1,ch__$1,mult__$1,meta10201));
});})(cs))
;
}
return (new cljs.core.async.t10200(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6929__auto___10423 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6930__auto__ = (function (){var switch__6859__auto__ = (function (state_10337){var state_val_10338 = (state_10337[1]);if((state_val_10338 === 32))
{var inst_10281 = (state_10337[7]);var inst_10205 = (state_10337[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10337,31,Object,null,30);var inst_10288 = cljs.core.async.put_BANG_.call(null,inst_10281,inst_10205,done);var state_10337__$1 = state_10337;var statearr_10339_10424 = state_10337__$1;(statearr_10339_10424[2] = inst_10288);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10337__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 1))
{var state_10337__$1 = state_10337;var statearr_10340_10425 = state_10337__$1;(statearr_10340_10425[2] = null);
(statearr_10340_10425[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 33))
{var inst_10294 = (state_10337[9]);var inst_10296 = cljs.core.chunked_seq_QMARK_.call(null,inst_10294);var state_10337__$1 = state_10337;if(inst_10296)
{var statearr_10341_10426 = state_10337__$1;(statearr_10341_10426[1] = 36);
} else
{var statearr_10342_10427 = state_10337__$1;(statearr_10342_10427[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 2))
{var state_10337__$1 = state_10337;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10337__$1,4,ch);
} else
{if((state_val_10338 === 34))
{var state_10337__$1 = state_10337;var statearr_10343_10428 = state_10337__$1;(statearr_10343_10428[2] = null);
(statearr_10343_10428[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 3))
{var inst_10335 = (state_10337[2]);var state_10337__$1 = state_10337;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10337__$1,inst_10335);
} else
{if((state_val_10338 === 35))
{var inst_10319 = (state_10337[2]);var state_10337__$1 = state_10337;var statearr_10344_10429 = state_10337__$1;(statearr_10344_10429[2] = inst_10319);
(statearr_10344_10429[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 4))
{var inst_10205 = (state_10337[8]);var inst_10205__$1 = (state_10337[2]);var inst_10206 = (inst_10205__$1 == null);var state_10337__$1 = (function (){var statearr_10345 = state_10337;(statearr_10345[8] = inst_10205__$1);
return statearr_10345;
})();if(cljs.core.truth_(inst_10206))
{var statearr_10346_10430 = state_10337__$1;(statearr_10346_10430[1] = 5);
} else
{var statearr_10347_10431 = state_10337__$1;(statearr_10347_10431[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 36))
{var inst_10294 = (state_10337[9]);var inst_10298 = cljs.core.chunk_first.call(null,inst_10294);var inst_10299 = cljs.core.chunk_rest.call(null,inst_10294);var inst_10300 = cljs.core.count.call(null,inst_10298);var inst_10273 = inst_10299;var inst_10274 = inst_10298;var inst_10275 = inst_10300;var inst_10276 = 0;var state_10337__$1 = (function (){var statearr_10348 = state_10337;(statearr_10348[10] = inst_10276);
(statearr_10348[11] = inst_10275);
(statearr_10348[12] = inst_10273);
(statearr_10348[13] = inst_10274);
return statearr_10348;
})();var statearr_10349_10432 = state_10337__$1;(statearr_10349_10432[2] = null);
(statearr_10349_10432[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 5))
{var inst_10212 = cljs.core.deref.call(null,cs);var inst_10213 = cljs.core.seq.call(null,inst_10212);var inst_10214 = inst_10213;var inst_10215 = null;var inst_10216 = 0;var inst_10217 = 0;var state_10337__$1 = (function (){var statearr_10350 = state_10337;(statearr_10350[14] = inst_10217);
(statearr_10350[15] = inst_10214);
(statearr_10350[16] = inst_10215);
(statearr_10350[17] = inst_10216);
return statearr_10350;
})();var statearr_10351_10433 = state_10337__$1;(statearr_10351_10433[2] = null);
(statearr_10351_10433[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 37))
{var inst_10294 = (state_10337[9]);var inst_10303 = cljs.core.first.call(null,inst_10294);var state_10337__$1 = (function (){var statearr_10352 = state_10337;(statearr_10352[18] = inst_10303);
return statearr_10352;
})();var statearr_10353_10434 = state_10337__$1;(statearr_10353_10434[2] = null);
(statearr_10353_10434[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 6))
{var inst_10265 = (state_10337[19]);var inst_10264 = cljs.core.deref.call(null,cs);var inst_10265__$1 = cljs.core.keys.call(null,inst_10264);var inst_10266 = cljs.core.count.call(null,inst_10265__$1);var inst_10267 = cljs.core.reset_BANG_.call(null,dctr,inst_10266);var inst_10272 = cljs.core.seq.call(null,inst_10265__$1);var inst_10273 = inst_10272;var inst_10274 = null;var inst_10275 = 0;var inst_10276 = 0;var state_10337__$1 = (function (){var statearr_10354 = state_10337;(statearr_10354[10] = inst_10276);
(statearr_10354[11] = inst_10275);
(statearr_10354[12] = inst_10273);
(statearr_10354[13] = inst_10274);
(statearr_10354[20] = inst_10267);
(statearr_10354[19] = inst_10265__$1);
return statearr_10354;
})();var statearr_10355_10435 = state_10337__$1;(statearr_10355_10435[2] = null);
(statearr_10355_10435[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 38))
{var inst_10316 = (state_10337[2]);var state_10337__$1 = state_10337;var statearr_10356_10436 = state_10337__$1;(statearr_10356_10436[2] = inst_10316);
(statearr_10356_10436[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 7))
{var inst_10333 = (state_10337[2]);var state_10337__$1 = state_10337;var statearr_10357_10437 = state_10337__$1;(statearr_10357_10437[2] = inst_10333);
(statearr_10357_10437[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 39))
{var inst_10294 = (state_10337[9]);var inst_10312 = (state_10337[2]);var inst_10313 = cljs.core.next.call(null,inst_10294);var inst_10273 = inst_10313;var inst_10274 = null;var inst_10275 = 0;var inst_10276 = 0;var state_10337__$1 = (function (){var statearr_10358 = state_10337;(statearr_10358[21] = inst_10312);
(statearr_10358[10] = inst_10276);
(statearr_10358[11] = inst_10275);
(statearr_10358[12] = inst_10273);
(statearr_10358[13] = inst_10274);
return statearr_10358;
})();var statearr_10359_10438 = state_10337__$1;(statearr_10359_10438[2] = null);
(statearr_10359_10438[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 8))
{var inst_10217 = (state_10337[14]);var inst_10216 = (state_10337[17]);var inst_10219 = (inst_10217 < inst_10216);var inst_10220 = inst_10219;var state_10337__$1 = state_10337;if(cljs.core.truth_(inst_10220))
{var statearr_10360_10439 = state_10337__$1;(statearr_10360_10439[1] = 10);
} else
{var statearr_10361_10440 = state_10337__$1;(statearr_10361_10440[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 40))
{var inst_10303 = (state_10337[18]);var inst_10304 = (state_10337[2]);var inst_10305 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10306 = cljs.core.async.untap_STAR_.call(null,m,inst_10303);var state_10337__$1 = (function (){var statearr_10362 = state_10337;(statearr_10362[22] = inst_10305);
(statearr_10362[23] = inst_10304);
return statearr_10362;
})();var statearr_10363_10441 = state_10337__$1;(statearr_10363_10441[2] = inst_10306);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10337__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 9))
{var inst_10262 = (state_10337[2]);var state_10337__$1 = state_10337;var statearr_10364_10442 = state_10337__$1;(statearr_10364_10442[2] = inst_10262);
(statearr_10364_10442[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 41))
{var inst_10205 = (state_10337[8]);var inst_10303 = (state_10337[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10337,40,Object,null,39);var inst_10310 = cljs.core.async.put_BANG_.call(null,inst_10303,inst_10205,done);var state_10337__$1 = state_10337;var statearr_10365_10443 = state_10337__$1;(statearr_10365_10443[2] = inst_10310);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10337__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 10))
{var inst_10217 = (state_10337[14]);var inst_10215 = (state_10337[16]);var inst_10223 = cljs.core._nth.call(null,inst_10215,inst_10217);var inst_10224 = cljs.core.nth.call(null,inst_10223,0,null);var inst_10225 = cljs.core.nth.call(null,inst_10223,1,null);var state_10337__$1 = (function (){var statearr_10366 = state_10337;(statearr_10366[24] = inst_10224);
return statearr_10366;
})();if(cljs.core.truth_(inst_10225))
{var statearr_10367_10444 = state_10337__$1;(statearr_10367_10444[1] = 13);
} else
{var statearr_10368_10445 = state_10337__$1;(statearr_10368_10445[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 42))
{var state_10337__$1 = state_10337;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10337__$1,45,dchan);
} else
{if((state_val_10338 === 11))
{var inst_10234 = (state_10337[25]);var inst_10214 = (state_10337[15]);var inst_10234__$1 = cljs.core.seq.call(null,inst_10214);var state_10337__$1 = (function (){var statearr_10369 = state_10337;(statearr_10369[25] = inst_10234__$1);
return statearr_10369;
})();if(inst_10234__$1)
{var statearr_10370_10446 = state_10337__$1;(statearr_10370_10446[1] = 16);
} else
{var statearr_10371_10447 = state_10337__$1;(statearr_10371_10447[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 43))
{var state_10337__$1 = state_10337;var statearr_10372_10448 = state_10337__$1;(statearr_10372_10448[2] = null);
(statearr_10372_10448[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 12))
{var inst_10260 = (state_10337[2]);var state_10337__$1 = state_10337;var statearr_10373_10449 = state_10337__$1;(statearr_10373_10449[2] = inst_10260);
(statearr_10373_10449[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 44))
{var inst_10330 = (state_10337[2]);var state_10337__$1 = (function (){var statearr_10374 = state_10337;(statearr_10374[26] = inst_10330);
return statearr_10374;
})();var statearr_10375_10450 = state_10337__$1;(statearr_10375_10450[2] = null);
(statearr_10375_10450[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 13))
{var inst_10224 = (state_10337[24]);var inst_10227 = cljs.core.async.close_BANG_.call(null,inst_10224);var state_10337__$1 = state_10337;var statearr_10376_10451 = state_10337__$1;(statearr_10376_10451[2] = inst_10227);
(statearr_10376_10451[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 45))
{var inst_10327 = (state_10337[2]);var state_10337__$1 = state_10337;var statearr_10380_10452 = state_10337__$1;(statearr_10380_10452[2] = inst_10327);
(statearr_10380_10452[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 14))
{var state_10337__$1 = state_10337;var statearr_10381_10453 = state_10337__$1;(statearr_10381_10453[2] = null);
(statearr_10381_10453[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 15))
{var inst_10217 = (state_10337[14]);var inst_10214 = (state_10337[15]);var inst_10215 = (state_10337[16]);var inst_10216 = (state_10337[17]);var inst_10230 = (state_10337[2]);var inst_10231 = (inst_10217 + 1);var tmp10377 = inst_10214;var tmp10378 = inst_10215;var tmp10379 = inst_10216;var inst_10214__$1 = tmp10377;var inst_10215__$1 = tmp10378;var inst_10216__$1 = tmp10379;var inst_10217__$1 = inst_10231;var state_10337__$1 = (function (){var statearr_10382 = state_10337;(statearr_10382[14] = inst_10217__$1);
(statearr_10382[27] = inst_10230);
(statearr_10382[15] = inst_10214__$1);
(statearr_10382[16] = inst_10215__$1);
(statearr_10382[17] = inst_10216__$1);
return statearr_10382;
})();var statearr_10383_10454 = state_10337__$1;(statearr_10383_10454[2] = null);
(statearr_10383_10454[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 16))
{var inst_10234 = (state_10337[25]);var inst_10236 = cljs.core.chunked_seq_QMARK_.call(null,inst_10234);var state_10337__$1 = state_10337;if(inst_10236)
{var statearr_10384_10455 = state_10337__$1;(statearr_10384_10455[1] = 19);
} else
{var statearr_10385_10456 = state_10337__$1;(statearr_10385_10456[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 17))
{var state_10337__$1 = state_10337;var statearr_10386_10457 = state_10337__$1;(statearr_10386_10457[2] = null);
(statearr_10386_10457[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 18))
{var inst_10258 = (state_10337[2]);var state_10337__$1 = state_10337;var statearr_10387_10458 = state_10337__$1;(statearr_10387_10458[2] = inst_10258);
(statearr_10387_10458[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 19))
{var inst_10234 = (state_10337[25]);var inst_10238 = cljs.core.chunk_first.call(null,inst_10234);var inst_10239 = cljs.core.chunk_rest.call(null,inst_10234);var inst_10240 = cljs.core.count.call(null,inst_10238);var inst_10214 = inst_10239;var inst_10215 = inst_10238;var inst_10216 = inst_10240;var inst_10217 = 0;var state_10337__$1 = (function (){var statearr_10388 = state_10337;(statearr_10388[14] = inst_10217);
(statearr_10388[15] = inst_10214);
(statearr_10388[16] = inst_10215);
(statearr_10388[17] = inst_10216);
return statearr_10388;
})();var statearr_10389_10459 = state_10337__$1;(statearr_10389_10459[2] = null);
(statearr_10389_10459[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 20))
{var inst_10234 = (state_10337[25]);var inst_10244 = cljs.core.first.call(null,inst_10234);var inst_10245 = cljs.core.nth.call(null,inst_10244,0,null);var inst_10246 = cljs.core.nth.call(null,inst_10244,1,null);var state_10337__$1 = (function (){var statearr_10390 = state_10337;(statearr_10390[28] = inst_10245);
return statearr_10390;
})();if(cljs.core.truth_(inst_10246))
{var statearr_10391_10460 = state_10337__$1;(statearr_10391_10460[1] = 22);
} else
{var statearr_10392_10461 = state_10337__$1;(statearr_10392_10461[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 21))
{var inst_10255 = (state_10337[2]);var state_10337__$1 = state_10337;var statearr_10393_10462 = state_10337__$1;(statearr_10393_10462[2] = inst_10255);
(statearr_10393_10462[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 22))
{var inst_10245 = (state_10337[28]);var inst_10248 = cljs.core.async.close_BANG_.call(null,inst_10245);var state_10337__$1 = state_10337;var statearr_10394_10463 = state_10337__$1;(statearr_10394_10463[2] = inst_10248);
(statearr_10394_10463[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 23))
{var state_10337__$1 = state_10337;var statearr_10395_10464 = state_10337__$1;(statearr_10395_10464[2] = null);
(statearr_10395_10464[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 24))
{var inst_10234 = (state_10337[25]);var inst_10251 = (state_10337[2]);var inst_10252 = cljs.core.next.call(null,inst_10234);var inst_10214 = inst_10252;var inst_10215 = null;var inst_10216 = 0;var inst_10217 = 0;var state_10337__$1 = (function (){var statearr_10396 = state_10337;(statearr_10396[14] = inst_10217);
(statearr_10396[29] = inst_10251);
(statearr_10396[15] = inst_10214);
(statearr_10396[16] = inst_10215);
(statearr_10396[17] = inst_10216);
return statearr_10396;
})();var statearr_10397_10465 = state_10337__$1;(statearr_10397_10465[2] = null);
(statearr_10397_10465[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 25))
{var inst_10276 = (state_10337[10]);var inst_10275 = (state_10337[11]);var inst_10278 = (inst_10276 < inst_10275);var inst_10279 = inst_10278;var state_10337__$1 = state_10337;if(cljs.core.truth_(inst_10279))
{var statearr_10398_10466 = state_10337__$1;(statearr_10398_10466[1] = 27);
} else
{var statearr_10399_10467 = state_10337__$1;(statearr_10399_10467[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 26))
{var inst_10265 = (state_10337[19]);var inst_10323 = (state_10337[2]);var inst_10324 = cljs.core.seq.call(null,inst_10265);var state_10337__$1 = (function (){var statearr_10400 = state_10337;(statearr_10400[30] = inst_10323);
return statearr_10400;
})();if(inst_10324)
{var statearr_10401_10468 = state_10337__$1;(statearr_10401_10468[1] = 42);
} else
{var statearr_10402_10469 = state_10337__$1;(statearr_10402_10469[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 27))
{var inst_10276 = (state_10337[10]);var inst_10274 = (state_10337[13]);var inst_10281 = cljs.core._nth.call(null,inst_10274,inst_10276);var state_10337__$1 = (function (){var statearr_10403 = state_10337;(statearr_10403[7] = inst_10281);
return statearr_10403;
})();var statearr_10404_10470 = state_10337__$1;(statearr_10404_10470[2] = null);
(statearr_10404_10470[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 28))
{var inst_10294 = (state_10337[9]);var inst_10273 = (state_10337[12]);var inst_10294__$1 = cljs.core.seq.call(null,inst_10273);var state_10337__$1 = (function (){var statearr_10408 = state_10337;(statearr_10408[9] = inst_10294__$1);
return statearr_10408;
})();if(inst_10294__$1)
{var statearr_10409_10471 = state_10337__$1;(statearr_10409_10471[1] = 33);
} else
{var statearr_10410_10472 = state_10337__$1;(statearr_10410_10472[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 29))
{var inst_10321 = (state_10337[2]);var state_10337__$1 = state_10337;var statearr_10411_10473 = state_10337__$1;(statearr_10411_10473[2] = inst_10321);
(statearr_10411_10473[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 30))
{var inst_10276 = (state_10337[10]);var inst_10275 = (state_10337[11]);var inst_10273 = (state_10337[12]);var inst_10274 = (state_10337[13]);var inst_10290 = (state_10337[2]);var inst_10291 = (inst_10276 + 1);var tmp10405 = inst_10275;var tmp10406 = inst_10273;var tmp10407 = inst_10274;var inst_10273__$1 = tmp10406;var inst_10274__$1 = tmp10407;var inst_10275__$1 = tmp10405;var inst_10276__$1 = inst_10291;var state_10337__$1 = (function (){var statearr_10412 = state_10337;(statearr_10412[31] = inst_10290);
(statearr_10412[10] = inst_10276__$1);
(statearr_10412[11] = inst_10275__$1);
(statearr_10412[12] = inst_10273__$1);
(statearr_10412[13] = inst_10274__$1);
return statearr_10412;
})();var statearr_10413_10474 = state_10337__$1;(statearr_10413_10474[2] = null);
(statearr_10413_10474[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10338 === 31))
{var inst_10281 = (state_10337[7]);var inst_10282 = (state_10337[2]);var inst_10283 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10284 = cljs.core.async.untap_STAR_.call(null,m,inst_10281);var state_10337__$1 = (function (){var statearr_10414 = state_10337;(statearr_10414[32] = inst_10282);
(statearr_10414[33] = inst_10283);
return statearr_10414;
})();var statearr_10415_10475 = state_10337__$1;(statearr_10415_10475[2] = inst_10284);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10337__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6859__auto__){
return (function() {
var state_machine__6860__auto__ = null;
var state_machine__6860__auto____0 = (function (){var statearr_10419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10419[0] = state_machine__6860__auto__);
(statearr_10419[1] = 1);
return statearr_10419;
});
var state_machine__6860__auto____1 = (function (state_10337){while(true){
var ret_value__6861__auto__ = (function (){try{while(true){
var result__6862__auto__ = switch__6859__auto__.call(null,state_10337);if(cljs.core.keyword_identical_QMARK_.call(null,result__6862__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6862__auto__;
}
break;
}
}catch (e10420){if((e10420 instanceof Object))
{var ex__6863__auto__ = e10420;var statearr_10421_10476 = state_10337;(statearr_10421_10476[5] = ex__6863__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10337);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10420;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10477 = state_10337;
state_10337 = G__10477;
continue;
}
} else
{return ret_value__6861__auto__;
}
break;
}
});
state_machine__6860__auto__ = function(state_10337){
switch(arguments.length){
case 0:
return state_machine__6860__auto____0.call(this);
case 1:
return state_machine__6860__auto____1.call(this,state_10337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6860__auto____0;
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6860__auto____1;
return state_machine__6860__auto__;
})()
;})(switch__6859__auto__))
})();var state__6931__auto__ = (function (){var statearr_10422 = f__6930__auto__.call(null);(statearr_10422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6929__auto___10423);
return statearr_10422;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6931__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj10479 = {};return obj10479;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t10589 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10589 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta10590){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta10590 = meta10590;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10589.cljs$lang$type = true;
cljs.core.async.t10589.cljs$lang$ctorStr = "cljs.core.async/t10589";
cljs.core.async.t10589.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10589");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10589.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10589.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10589.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10589.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10589.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10589.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10589.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10589.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10589.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10591){var self__ = this;
var _10591__$1 = this;return self__.meta10590;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10591,meta10590__$1){var self__ = this;
var _10591__$1 = this;return (new cljs.core.async.t10589(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta10590__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10589 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10589(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10590){return (new cljs.core.async.t10589(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10590));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10589(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6929__auto___10698 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6930__auto__ = (function (){var switch__6859__auto__ = (function (state_10656){var state_val_10657 = (state_10656[1]);if((state_val_10657 === 1))
{var inst_10595 = (state_10656[7]);var inst_10595__$1 = calc_state.call(null);var inst_10596 = cljs.core.seq_QMARK_.call(null,inst_10595__$1);var state_10656__$1 = (function (){var statearr_10658 = state_10656;(statearr_10658[7] = inst_10595__$1);
return statearr_10658;
})();if(inst_10596)
{var statearr_10659_10699 = state_10656__$1;(statearr_10659_10699[1] = 2);
} else
{var statearr_10660_10700 = state_10656__$1;(statearr_10660_10700[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10657 === 2))
{var inst_10595 = (state_10656[7]);var inst_10598 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10595);var state_10656__$1 = state_10656;var statearr_10661_10701 = state_10656__$1;(statearr_10661_10701[2] = inst_10598);
(statearr_10661_10701[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10657 === 3))
{var inst_10595 = (state_10656[7]);var state_10656__$1 = state_10656;var statearr_10662_10702 = state_10656__$1;(statearr_10662_10702[2] = inst_10595);
(statearr_10662_10702[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10657 === 4))
{var inst_10595 = (state_10656[7]);var inst_10601 = (state_10656[2]);var inst_10602 = cljs.core.get.call(null,inst_10601,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10603 = cljs.core.get.call(null,inst_10601,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10604 = cljs.core.get.call(null,inst_10601,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_10605 = inst_10595;var state_10656__$1 = (function (){var statearr_10663 = state_10656;(statearr_10663[8] = inst_10603);
(statearr_10663[9] = inst_10602);
(statearr_10663[10] = inst_10605);
(statearr_10663[11] = inst_10604);
return statearr_10663;
})();var statearr_10664_10703 = state_10656__$1;(statearr_10664_10703[2] = null);
(statearr_10664_10703[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10657 === 5))
{var inst_10605 = (state_10656[10]);var inst_10608 = cljs.core.seq_QMARK_.call(null,inst_10605);var state_10656__$1 = state_10656;if(inst_10608)
{var statearr_10665_10704 = state_10656__$1;(statearr_10665_10704[1] = 7);
} else
{var statearr_10666_10705 = state_10656__$1;(statearr_10666_10705[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10657 === 6))
{var inst_10654 = (state_10656[2]);var state_10656__$1 = state_10656;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10656__$1,inst_10654);
} else
{if((state_val_10657 === 7))
{var inst_10605 = (state_10656[10]);var inst_10610 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10605);var state_10656__$1 = state_10656;var statearr_10667_10706 = state_10656__$1;(statearr_10667_10706[2] = inst_10610);
(statearr_10667_10706[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10657 === 8))
{var inst_10605 = (state_10656[10]);var state_10656__$1 = state_10656;var statearr_10668_10707 = state_10656__$1;(statearr_10668_10707[2] = inst_10605);
(statearr_10668_10707[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10657 === 9))
{var inst_10613 = (state_10656[12]);var inst_10613__$1 = (state_10656[2]);var inst_10614 = cljs.core.get.call(null,inst_10613__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10615 = cljs.core.get.call(null,inst_10613__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10616 = cljs.core.get.call(null,inst_10613__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_10656__$1 = (function (){var statearr_10669 = state_10656;(statearr_10669[12] = inst_10613__$1);
(statearr_10669[13] = inst_10616);
(statearr_10669[14] = inst_10615);
return statearr_10669;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10656__$1,10,inst_10614);
} else
{if((state_val_10657 === 10))
{var inst_10620 = (state_10656[15]);var inst_10621 = (state_10656[16]);var inst_10619 = (state_10656[2]);var inst_10620__$1 = cljs.core.nth.call(null,inst_10619,0,null);var inst_10621__$1 = cljs.core.nth.call(null,inst_10619,1,null);var inst_10622 = (inst_10620__$1 == null);var inst_10623 = cljs.core._EQ_.call(null,inst_10621__$1,change);var inst_10624 = (inst_10622) || (inst_10623);var state_10656__$1 = (function (){var statearr_10670 = state_10656;(statearr_10670[15] = inst_10620__$1);
(statearr_10670[16] = inst_10621__$1);
return statearr_10670;
})();if(cljs.core.truth_(inst_10624))
{var statearr_10671_10708 = state_10656__$1;(statearr_10671_10708[1] = 11);
} else
{var statearr_10672_10709 = state_10656__$1;(statearr_10672_10709[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10657 === 11))
{var inst_10620 = (state_10656[15]);var inst_10626 = (inst_10620 == null);var state_10656__$1 = state_10656;if(cljs.core.truth_(inst_10626))
{var statearr_10673_10710 = state_10656__$1;(statearr_10673_10710[1] = 14);
} else
{var statearr_10674_10711 = state_10656__$1;(statearr_10674_10711[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10657 === 12))
{var inst_10616 = (state_10656[13]);var inst_10635 = (state_10656[17]);var inst_10621 = (state_10656[16]);var inst_10635__$1 = inst_10616.call(null,inst_10621);var state_10656__$1 = (function (){var statearr_10675 = state_10656;(statearr_10675[17] = inst_10635__$1);
return statearr_10675;
})();if(cljs.core.truth_(inst_10635__$1))
{var statearr_10676_10712 = state_10656__$1;(statearr_10676_10712[1] = 17);
} else
{var statearr_10677_10713 = state_10656__$1;(statearr_10677_10713[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10657 === 13))
{var inst_10652 = (state_10656[2]);var state_10656__$1 = state_10656;var statearr_10678_10714 = state_10656__$1;(statearr_10678_10714[2] = inst_10652);
(statearr_10678_10714[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10657 === 14))
{var inst_10621 = (state_10656[16]);var inst_10628 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10621);var state_10656__$1 = state_10656;var statearr_10679_10715 = state_10656__$1;(statearr_10679_10715[2] = inst_10628);
(statearr_10679_10715[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10657 === 15))
{var state_10656__$1 = state_10656;var statearr_10680_10716 = state_10656__$1;(statearr_10680_10716[2] = null);
(statearr_10680_10716[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10657 === 16))
{var inst_10631 = (state_10656[2]);var inst_10632 = calc_state.call(null);var inst_10605 = inst_10632;var state_10656__$1 = (function (){var statearr_10681 = state_10656;(statearr_10681[18] = inst_10631);
(statearr_10681[10] = inst_10605);
return statearr_10681;
})();var statearr_10682_10717 = state_10656__$1;(statearr_10682_10717[2] = null);
(statearr_10682_10717[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10657 === 17))
{var inst_10635 = (state_10656[17]);var state_10656__$1 = state_10656;var statearr_10683_10718 = state_10656__$1;(statearr_10683_10718[2] = inst_10635);
(statearr_10683_10718[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10657 === 18))
{var inst_10616 = (state_10656[13]);var inst_10615 = (state_10656[14]);var inst_10621 = (state_10656[16]);var inst_10638 = cljs.core.empty_QMARK_.call(null,inst_10616);var inst_10639 = inst_10615.call(null,inst_10621);var inst_10640 = cljs.core.not.call(null,inst_10639);var inst_10641 = (inst_10638) && (inst_10640);var state_10656__$1 = state_10656;var statearr_10684_10719 = state_10656__$1;(statearr_10684_10719[2] = inst_10641);
(statearr_10684_10719[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10657 === 19))
{var inst_10643 = (state_10656[2]);var state_10656__$1 = state_10656;if(cljs.core.truth_(inst_10643))
{var statearr_10685_10720 = state_10656__$1;(statearr_10685_10720[1] = 20);
} else
{var statearr_10686_10721 = state_10656__$1;(statearr_10686_10721[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10657 === 20))
{var inst_10620 = (state_10656[15]);var state_10656__$1 = state_10656;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10656__$1,23,out,inst_10620);
} else
{if((state_val_10657 === 21))
{var state_10656__$1 = state_10656;var statearr_10687_10722 = state_10656__$1;(statearr_10687_10722[2] = null);
(statearr_10687_10722[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10657 === 22))
{var inst_10613 = (state_10656[12]);var inst_10649 = (state_10656[2]);var inst_10605 = inst_10613;var state_10656__$1 = (function (){var statearr_10688 = state_10656;(statearr_10688[10] = inst_10605);
(statearr_10688[19] = inst_10649);
return statearr_10688;
})();var statearr_10689_10723 = state_10656__$1;(statearr_10689_10723[2] = null);
(statearr_10689_10723[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10657 === 23))
{var inst_10646 = (state_10656[2]);var state_10656__$1 = state_10656;var statearr_10690_10724 = state_10656__$1;(statearr_10690_10724[2] = inst_10646);
(statearr_10690_10724[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6859__auto__){
return (function() {
var state_machine__6860__auto__ = null;
var state_machine__6860__auto____0 = (function (){var statearr_10694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10694[0] = state_machine__6860__auto__);
(statearr_10694[1] = 1);
return statearr_10694;
});
var state_machine__6860__auto____1 = (function (state_10656){while(true){
var ret_value__6861__auto__ = (function (){try{while(true){
var result__6862__auto__ = switch__6859__auto__.call(null,state_10656);if(cljs.core.keyword_identical_QMARK_.call(null,result__6862__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6862__auto__;
}
break;
}
}catch (e10695){if((e10695 instanceof Object))
{var ex__6863__auto__ = e10695;var statearr_10696_10725 = state_10656;(statearr_10696_10725[5] = ex__6863__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10656);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10695;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10726 = state_10656;
state_10656 = G__10726;
continue;
}
} else
{return ret_value__6861__auto__;
}
break;
}
});
state_machine__6860__auto__ = function(state_10656){
switch(arguments.length){
case 0:
return state_machine__6860__auto____0.call(this);
case 1:
return state_machine__6860__auto____1.call(this,state_10656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6860__auto____0;
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6860__auto____1;
return state_machine__6860__auto__;
})()
;})(switch__6859__auto__))
})();var state__6931__auto__ = (function (){var statearr_10697 = f__6930__auto__.call(null);(statearr_10697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6929__auto___10698);
return statearr_10697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6931__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj10728 = {};return obj10728;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3408__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3408__auto__,mults){
return (function (p1__10729_SHARP_){if(cljs.core.truth_(p1__10729_SHARP_.call(null,topic)))
{return p1__10729_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__10729_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3408__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t10854 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10854 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta10855){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta10855 = meta10855;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10854.cljs$lang$type = true;
cljs.core.async.t10854.cljs$lang$ctorStr = "cljs.core.async/t10854";
cljs.core.async.t10854.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10854");
});})(mults,ensure_mult))
;
cljs.core.async.t10854.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t10854.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t10854.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t10854.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t10854.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t10854.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10854.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t10854.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10856){var self__ = this;
var _10856__$1 = this;return self__.meta10855;
});})(mults,ensure_mult))
;
cljs.core.async.t10854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10856,meta10855__$1){var self__ = this;
var _10856__$1 = this;return (new cljs.core.async.t10854(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta10855__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t10854 = ((function (mults,ensure_mult){
return (function __GT_t10854(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10855){return (new cljs.core.async.t10854(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10855));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t10854(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6929__auto___10978 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6930__auto__ = (function (){var switch__6859__auto__ = (function (state_10930){var state_val_10931 = (state_10930[1]);if((state_val_10931 === 1))
{var state_10930__$1 = state_10930;var statearr_10932_10979 = state_10930__$1;(statearr_10932_10979[2] = null);
(statearr_10932_10979[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10931 === 2))
{var state_10930__$1 = state_10930;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10930__$1,4,ch);
} else
{if((state_val_10931 === 3))
{var inst_10928 = (state_10930[2]);var state_10930__$1 = state_10930;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10930__$1,inst_10928);
} else
{if((state_val_10931 === 4))
{var inst_10859 = (state_10930[7]);var inst_10859__$1 = (state_10930[2]);var inst_10860 = (inst_10859__$1 == null);var state_10930__$1 = (function (){var statearr_10933 = state_10930;(statearr_10933[7] = inst_10859__$1);
return statearr_10933;
})();if(cljs.core.truth_(inst_10860))
{var statearr_10934_10980 = state_10930__$1;(statearr_10934_10980[1] = 5);
} else
{var statearr_10935_10981 = state_10930__$1;(statearr_10935_10981[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10931 === 5))
{var inst_10866 = cljs.core.deref.call(null,mults);var inst_10867 = cljs.core.vals.call(null,inst_10866);var inst_10868 = cljs.core.seq.call(null,inst_10867);var inst_10869 = inst_10868;var inst_10870 = null;var inst_10871 = 0;var inst_10872 = 0;var state_10930__$1 = (function (){var statearr_10936 = state_10930;(statearr_10936[8] = inst_10869);
(statearr_10936[9] = inst_10872);
(statearr_10936[10] = inst_10871);
(statearr_10936[11] = inst_10870);
return statearr_10936;
})();var statearr_10937_10982 = state_10930__$1;(statearr_10937_10982[2] = null);
(statearr_10937_10982[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10931 === 6))
{var inst_10909 = (state_10930[12]);var inst_10907 = (state_10930[13]);var inst_10859 = (state_10930[7]);var inst_10907__$1 = topic_fn.call(null,inst_10859);var inst_10908 = cljs.core.deref.call(null,mults);var inst_10909__$1 = cljs.core.get.call(null,inst_10908,inst_10907__$1);var state_10930__$1 = (function (){var statearr_10938 = state_10930;(statearr_10938[12] = inst_10909__$1);
(statearr_10938[13] = inst_10907__$1);
return statearr_10938;
})();if(cljs.core.truth_(inst_10909__$1))
{var statearr_10939_10983 = state_10930__$1;(statearr_10939_10983[1] = 19);
} else
{var statearr_10940_10984 = state_10930__$1;(statearr_10940_10984[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10931 === 7))
{var inst_10926 = (state_10930[2]);var state_10930__$1 = state_10930;var statearr_10941_10985 = state_10930__$1;(statearr_10941_10985[2] = inst_10926);
(statearr_10941_10985[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10931 === 8))
{var inst_10872 = (state_10930[9]);var inst_10871 = (state_10930[10]);var inst_10874 = (inst_10872 < inst_10871);var inst_10875 = inst_10874;var state_10930__$1 = state_10930;if(cljs.core.truth_(inst_10875))
{var statearr_10945_10986 = state_10930__$1;(statearr_10945_10986[1] = 10);
} else
{var statearr_10946_10987 = state_10930__$1;(statearr_10946_10987[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10931 === 9))
{var inst_10905 = (state_10930[2]);var state_10930__$1 = state_10930;var statearr_10947_10988 = state_10930__$1;(statearr_10947_10988[2] = inst_10905);
(statearr_10947_10988[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10931 === 10))
{var inst_10869 = (state_10930[8]);var inst_10872 = (state_10930[9]);var inst_10871 = (state_10930[10]);var inst_10870 = (state_10930[11]);var inst_10877 = cljs.core._nth.call(null,inst_10870,inst_10872);var inst_10878 = cljs.core.async.muxch_STAR_.call(null,inst_10877);var inst_10879 = cljs.core.async.close_BANG_.call(null,inst_10878);var inst_10880 = (inst_10872 + 1);var tmp10942 = inst_10869;var tmp10943 = inst_10871;var tmp10944 = inst_10870;var inst_10869__$1 = tmp10942;var inst_10870__$1 = tmp10944;var inst_10871__$1 = tmp10943;var inst_10872__$1 = inst_10880;var state_10930__$1 = (function (){var statearr_10948 = state_10930;(statearr_10948[8] = inst_10869__$1);
(statearr_10948[14] = inst_10879);
(statearr_10948[9] = inst_10872__$1);
(statearr_10948[10] = inst_10871__$1);
(statearr_10948[11] = inst_10870__$1);
return statearr_10948;
})();var statearr_10949_10989 = state_10930__$1;(statearr_10949_10989[2] = null);
(statearr_10949_10989[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10931 === 11))
{var inst_10869 = (state_10930[8]);var inst_10883 = (state_10930[15]);var inst_10883__$1 = cljs.core.seq.call(null,inst_10869);var state_10930__$1 = (function (){var statearr_10950 = state_10930;(statearr_10950[15] = inst_10883__$1);
return statearr_10950;
})();if(inst_10883__$1)
{var statearr_10951_10990 = state_10930__$1;(statearr_10951_10990[1] = 13);
} else
{var statearr_10952_10991 = state_10930__$1;(statearr_10952_10991[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10931 === 12))
{var inst_10903 = (state_10930[2]);var state_10930__$1 = state_10930;var statearr_10953_10992 = state_10930__$1;(statearr_10953_10992[2] = inst_10903);
(statearr_10953_10992[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10931 === 13))
{var inst_10883 = (state_10930[15]);var inst_10885 = cljs.core.chunked_seq_QMARK_.call(null,inst_10883);var state_10930__$1 = state_10930;if(inst_10885)
{var statearr_10954_10993 = state_10930__$1;(statearr_10954_10993[1] = 16);
} else
{var statearr_10955_10994 = state_10930__$1;(statearr_10955_10994[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10931 === 14))
{var state_10930__$1 = state_10930;var statearr_10956_10995 = state_10930__$1;(statearr_10956_10995[2] = null);
(statearr_10956_10995[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10931 === 15))
{var inst_10901 = (state_10930[2]);var state_10930__$1 = state_10930;var statearr_10957_10996 = state_10930__$1;(statearr_10957_10996[2] = inst_10901);
(statearr_10957_10996[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10931 === 16))
{var inst_10883 = (state_10930[15]);var inst_10887 = cljs.core.chunk_first.call(null,inst_10883);var inst_10888 = cljs.core.chunk_rest.call(null,inst_10883);var inst_10889 = cljs.core.count.call(null,inst_10887);var inst_10869 = inst_10888;var inst_10870 = inst_10887;var inst_10871 = inst_10889;var inst_10872 = 0;var state_10930__$1 = (function (){var statearr_10958 = state_10930;(statearr_10958[8] = inst_10869);
(statearr_10958[9] = inst_10872);
(statearr_10958[10] = inst_10871);
(statearr_10958[11] = inst_10870);
return statearr_10958;
})();var statearr_10959_10997 = state_10930__$1;(statearr_10959_10997[2] = null);
(statearr_10959_10997[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10931 === 17))
{var inst_10883 = (state_10930[15]);var inst_10892 = cljs.core.first.call(null,inst_10883);var inst_10893 = cljs.core.async.muxch_STAR_.call(null,inst_10892);var inst_10894 = cljs.core.async.close_BANG_.call(null,inst_10893);var inst_10895 = cljs.core.next.call(null,inst_10883);var inst_10869 = inst_10895;var inst_10870 = null;var inst_10871 = 0;var inst_10872 = 0;var state_10930__$1 = (function (){var statearr_10960 = state_10930;(statearr_10960[16] = inst_10894);
(statearr_10960[8] = inst_10869);
(statearr_10960[9] = inst_10872);
(statearr_10960[10] = inst_10871);
(statearr_10960[11] = inst_10870);
return statearr_10960;
})();var statearr_10961_10998 = state_10930__$1;(statearr_10961_10998[2] = null);
(statearr_10961_10998[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10931 === 18))
{var inst_10898 = (state_10930[2]);var state_10930__$1 = state_10930;var statearr_10962_10999 = state_10930__$1;(statearr_10962_10999[2] = inst_10898);
(statearr_10962_10999[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10931 === 19))
{var state_10930__$1 = state_10930;var statearr_10963_11000 = state_10930__$1;(statearr_10963_11000[2] = null);
(statearr_10963_11000[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10931 === 20))
{var state_10930__$1 = state_10930;var statearr_10964_11001 = state_10930__$1;(statearr_10964_11001[2] = null);
(statearr_10964_11001[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10931 === 21))
{var inst_10923 = (state_10930[2]);var state_10930__$1 = (function (){var statearr_10965 = state_10930;(statearr_10965[17] = inst_10923);
return statearr_10965;
})();var statearr_10966_11002 = state_10930__$1;(statearr_10966_11002[2] = null);
(statearr_10966_11002[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10931 === 22))
{var inst_10920 = (state_10930[2]);var state_10930__$1 = state_10930;var statearr_10967_11003 = state_10930__$1;(statearr_10967_11003[2] = inst_10920);
(statearr_10967_11003[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10931 === 23))
{var inst_10907 = (state_10930[13]);var inst_10911 = (state_10930[2]);var inst_10912 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10907);var state_10930__$1 = (function (){var statearr_10968 = state_10930;(statearr_10968[18] = inst_10911);
return statearr_10968;
})();var statearr_10969_11004 = state_10930__$1;(statearr_10969_11004[2] = inst_10912);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10930__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10931 === 24))
{var inst_10909 = (state_10930[12]);var inst_10859 = (state_10930[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10930,23,Object,null,22);var inst_10916 = cljs.core.async.muxch_STAR_.call(null,inst_10909);var state_10930__$1 = state_10930;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10930__$1,25,inst_10916,inst_10859);
} else
{if((state_val_10931 === 25))
{var inst_10918 = (state_10930[2]);var state_10930__$1 = state_10930;var statearr_10970_11005 = state_10930__$1;(statearr_10970_11005[2] = inst_10918);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10930__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6859__auto__){
return (function() {
var state_machine__6860__auto__ = null;
var state_machine__6860__auto____0 = (function (){var statearr_10974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10974[0] = state_machine__6860__auto__);
(statearr_10974[1] = 1);
return statearr_10974;
});
var state_machine__6860__auto____1 = (function (state_10930){while(true){
var ret_value__6861__auto__ = (function (){try{while(true){
var result__6862__auto__ = switch__6859__auto__.call(null,state_10930);if(cljs.core.keyword_identical_QMARK_.call(null,result__6862__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6862__auto__;
}
break;
}
}catch (e10975){if((e10975 instanceof Object))
{var ex__6863__auto__ = e10975;var statearr_10976_11006 = state_10930;(statearr_10976_11006[5] = ex__6863__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10930);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10975;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11007 = state_10930;
state_10930 = G__11007;
continue;
}
} else
{return ret_value__6861__auto__;
}
break;
}
});
state_machine__6860__auto__ = function(state_10930){
switch(arguments.length){
case 0:
return state_machine__6860__auto____0.call(this);
case 1:
return state_machine__6860__auto____1.call(this,state_10930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6860__auto____0;
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6860__auto____1;
return state_machine__6860__auto__;
})()
;})(switch__6859__auto__))
})();var state__6931__auto__ = (function (){var statearr_10977 = f__6930__auto__.call(null);(statearr_10977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6929__auto___10978);
return statearr_10977;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6931__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6929__auto___11144 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6930__auto__ = (function (){var switch__6859__auto__ = (function (state_11114){var state_val_11115 = (state_11114[1]);if((state_val_11115 === 1))
{var state_11114__$1 = state_11114;var statearr_11116_11145 = state_11114__$1;(statearr_11116_11145[2] = null);
(statearr_11116_11145[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11115 === 2))
{var inst_11077 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11078 = 0;var state_11114__$1 = (function (){var statearr_11117 = state_11114;(statearr_11117[7] = inst_11077);
(statearr_11117[8] = inst_11078);
return statearr_11117;
})();var statearr_11118_11146 = state_11114__$1;(statearr_11118_11146[2] = null);
(statearr_11118_11146[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11115 === 3))
{var inst_11112 = (state_11114[2]);var state_11114__$1 = state_11114;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11114__$1,inst_11112);
} else
{if((state_val_11115 === 4))
{var inst_11078 = (state_11114[8]);var inst_11080 = (inst_11078 < cnt);var state_11114__$1 = state_11114;if(cljs.core.truth_(inst_11080))
{var statearr_11119_11147 = state_11114__$1;(statearr_11119_11147[1] = 6);
} else
{var statearr_11120_11148 = state_11114__$1;(statearr_11120_11148[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11115 === 5))
{var inst_11098 = (state_11114[2]);var state_11114__$1 = (function (){var statearr_11121 = state_11114;(statearr_11121[9] = inst_11098);
return statearr_11121;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11114__$1,12,dchan);
} else
{if((state_val_11115 === 6))
{var state_11114__$1 = state_11114;var statearr_11122_11149 = state_11114__$1;(statearr_11122_11149[2] = null);
(statearr_11122_11149[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11115 === 7))
{var state_11114__$1 = state_11114;var statearr_11123_11150 = state_11114__$1;(statearr_11123_11150[2] = null);
(statearr_11123_11150[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11115 === 8))
{var inst_11096 = (state_11114[2]);var state_11114__$1 = state_11114;var statearr_11124_11151 = state_11114__$1;(statearr_11124_11151[2] = inst_11096);
(statearr_11124_11151[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11115 === 9))
{var inst_11078 = (state_11114[8]);var inst_11091 = (state_11114[2]);var inst_11092 = (inst_11078 + 1);var inst_11078__$1 = inst_11092;var state_11114__$1 = (function (){var statearr_11125 = state_11114;(statearr_11125[10] = inst_11091);
(statearr_11125[8] = inst_11078__$1);
return statearr_11125;
})();var statearr_11126_11152 = state_11114__$1;(statearr_11126_11152[2] = null);
(statearr_11126_11152[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11115 === 10))
{var inst_11082 = (state_11114[2]);var inst_11083 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11114__$1 = (function (){var statearr_11127 = state_11114;(statearr_11127[11] = inst_11082);
return statearr_11127;
})();var statearr_11128_11153 = state_11114__$1;(statearr_11128_11153[2] = inst_11083);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11114__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11115 === 11))
{var inst_11078 = (state_11114[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11114,10,Object,null,9);var inst_11087 = chs__$1.call(null,inst_11078);var inst_11088 = done.call(null,inst_11078);var inst_11089 = cljs.core.async.take_BANG_.call(null,inst_11087,inst_11088);var state_11114__$1 = state_11114;var statearr_11129_11154 = state_11114__$1;(statearr_11129_11154[2] = inst_11089);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11114__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11115 === 12))
{var inst_11100 = (state_11114[12]);var inst_11100__$1 = (state_11114[2]);var inst_11101 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11100__$1);var state_11114__$1 = (function (){var statearr_11130 = state_11114;(statearr_11130[12] = inst_11100__$1);
return statearr_11130;
})();if(cljs.core.truth_(inst_11101))
{var statearr_11131_11155 = state_11114__$1;(statearr_11131_11155[1] = 13);
} else
{var statearr_11132_11156 = state_11114__$1;(statearr_11132_11156[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11115 === 13))
{var inst_11103 = cljs.core.async.close_BANG_.call(null,out);var state_11114__$1 = state_11114;var statearr_11133_11157 = state_11114__$1;(statearr_11133_11157[2] = inst_11103);
(statearr_11133_11157[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11115 === 14))
{var inst_11100 = (state_11114[12]);var inst_11105 = cljs.core.apply.call(null,f,inst_11100);var state_11114__$1 = state_11114;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11114__$1,16,out,inst_11105);
} else
{if((state_val_11115 === 15))
{var inst_11110 = (state_11114[2]);var state_11114__$1 = state_11114;var statearr_11134_11158 = state_11114__$1;(statearr_11134_11158[2] = inst_11110);
(statearr_11134_11158[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11115 === 16))
{var inst_11107 = (state_11114[2]);var state_11114__$1 = (function (){var statearr_11135 = state_11114;(statearr_11135[13] = inst_11107);
return statearr_11135;
})();var statearr_11136_11159 = state_11114__$1;(statearr_11136_11159[2] = null);
(statearr_11136_11159[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6859__auto__){
return (function() {
var state_machine__6860__auto__ = null;
var state_machine__6860__auto____0 = (function (){var statearr_11140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11140[0] = state_machine__6860__auto__);
(statearr_11140[1] = 1);
return statearr_11140;
});
var state_machine__6860__auto____1 = (function (state_11114){while(true){
var ret_value__6861__auto__ = (function (){try{while(true){
var result__6862__auto__ = switch__6859__auto__.call(null,state_11114);if(cljs.core.keyword_identical_QMARK_.call(null,result__6862__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6862__auto__;
}
break;
}
}catch (e11141){if((e11141 instanceof Object))
{var ex__6863__auto__ = e11141;var statearr_11142_11160 = state_11114;(statearr_11142_11160[5] = ex__6863__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11114);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11141;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11161 = state_11114;
state_11114 = G__11161;
continue;
}
} else
{return ret_value__6861__auto__;
}
break;
}
});
state_machine__6860__auto__ = function(state_11114){
switch(arguments.length){
case 0:
return state_machine__6860__auto____0.call(this);
case 1:
return state_machine__6860__auto____1.call(this,state_11114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6860__auto____0;
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6860__auto____1;
return state_machine__6860__auto__;
})()
;})(switch__6859__auto__))
})();var state__6931__auto__ = (function (){var statearr_11143 = f__6930__auto__.call(null);(statearr_11143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6929__auto___11144);
return statearr_11143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6931__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6929__auto___11269 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6930__auto__ = (function (){var switch__6859__auto__ = (function (state_11245){var state_val_11246 = (state_11245[1]);if((state_val_11246 === 1))
{var inst_11216 = cljs.core.vec.call(null,chs);var inst_11217 = inst_11216;var state_11245__$1 = (function (){var statearr_11247 = state_11245;(statearr_11247[7] = inst_11217);
return statearr_11247;
})();var statearr_11248_11270 = state_11245__$1;(statearr_11248_11270[2] = null);
(statearr_11248_11270[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11246 === 2))
{var inst_11217 = (state_11245[7]);var inst_11219 = cljs.core.count.call(null,inst_11217);var inst_11220 = (inst_11219 > 0);var state_11245__$1 = state_11245;if(cljs.core.truth_(inst_11220))
{var statearr_11249_11271 = state_11245__$1;(statearr_11249_11271[1] = 4);
} else
{var statearr_11250_11272 = state_11245__$1;(statearr_11250_11272[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11246 === 3))
{var inst_11243 = (state_11245[2]);var state_11245__$1 = state_11245;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11245__$1,inst_11243);
} else
{if((state_val_11246 === 4))
{var inst_11217 = (state_11245[7]);var state_11245__$1 = state_11245;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11245__$1,7,inst_11217);
} else
{if((state_val_11246 === 5))
{var inst_11239 = cljs.core.async.close_BANG_.call(null,out);var state_11245__$1 = state_11245;var statearr_11251_11273 = state_11245__$1;(statearr_11251_11273[2] = inst_11239);
(statearr_11251_11273[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11246 === 6))
{var inst_11241 = (state_11245[2]);var state_11245__$1 = state_11245;var statearr_11252_11274 = state_11245__$1;(statearr_11252_11274[2] = inst_11241);
(statearr_11252_11274[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11246 === 7))
{var inst_11224 = (state_11245[8]);var inst_11225 = (state_11245[9]);var inst_11224__$1 = (state_11245[2]);var inst_11225__$1 = cljs.core.nth.call(null,inst_11224__$1,0,null);var inst_11226 = cljs.core.nth.call(null,inst_11224__$1,1,null);var inst_11227 = (inst_11225__$1 == null);var state_11245__$1 = (function (){var statearr_11253 = state_11245;(statearr_11253[8] = inst_11224__$1);
(statearr_11253[9] = inst_11225__$1);
(statearr_11253[10] = inst_11226);
return statearr_11253;
})();if(cljs.core.truth_(inst_11227))
{var statearr_11254_11275 = state_11245__$1;(statearr_11254_11275[1] = 8);
} else
{var statearr_11255_11276 = state_11245__$1;(statearr_11255_11276[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11246 === 8))
{var inst_11224 = (state_11245[8]);var inst_11217 = (state_11245[7]);var inst_11225 = (state_11245[9]);var inst_11226 = (state_11245[10]);var inst_11229 = (function (){var c = inst_11226;var v = inst_11225;var vec__11222 = inst_11224;var cs = inst_11217;return ((function (c,v,vec__11222,cs,inst_11224,inst_11217,inst_11225,inst_11226,state_val_11246){
return (function (p1__11162_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11162_SHARP_);
});
;})(c,v,vec__11222,cs,inst_11224,inst_11217,inst_11225,inst_11226,state_val_11246))
})();var inst_11230 = cljs.core.filterv.call(null,inst_11229,inst_11217);var inst_11217__$1 = inst_11230;var state_11245__$1 = (function (){var statearr_11256 = state_11245;(statearr_11256[7] = inst_11217__$1);
return statearr_11256;
})();var statearr_11257_11277 = state_11245__$1;(statearr_11257_11277[2] = null);
(statearr_11257_11277[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11246 === 9))
{var inst_11225 = (state_11245[9]);var state_11245__$1 = state_11245;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11245__$1,11,out,inst_11225);
} else
{if((state_val_11246 === 10))
{var inst_11237 = (state_11245[2]);var state_11245__$1 = state_11245;var statearr_11259_11278 = state_11245__$1;(statearr_11259_11278[2] = inst_11237);
(statearr_11259_11278[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11246 === 11))
{var inst_11217 = (state_11245[7]);var inst_11234 = (state_11245[2]);var tmp11258 = inst_11217;var inst_11217__$1 = tmp11258;var state_11245__$1 = (function (){var statearr_11260 = state_11245;(statearr_11260[7] = inst_11217__$1);
(statearr_11260[11] = inst_11234);
return statearr_11260;
})();var statearr_11261_11279 = state_11245__$1;(statearr_11261_11279[2] = null);
(statearr_11261_11279[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6859__auto__){
return (function() {
var state_machine__6860__auto__ = null;
var state_machine__6860__auto____0 = (function (){var statearr_11265 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11265[0] = state_machine__6860__auto__);
(statearr_11265[1] = 1);
return statearr_11265;
});
var state_machine__6860__auto____1 = (function (state_11245){while(true){
var ret_value__6861__auto__ = (function (){try{while(true){
var result__6862__auto__ = switch__6859__auto__.call(null,state_11245);if(cljs.core.keyword_identical_QMARK_.call(null,result__6862__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6862__auto__;
}
break;
}
}catch (e11266){if((e11266 instanceof Object))
{var ex__6863__auto__ = e11266;var statearr_11267_11280 = state_11245;(statearr_11267_11280[5] = ex__6863__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11245);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11266;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11281 = state_11245;
state_11245 = G__11281;
continue;
}
} else
{return ret_value__6861__auto__;
}
break;
}
});
state_machine__6860__auto__ = function(state_11245){
switch(arguments.length){
case 0:
return state_machine__6860__auto____0.call(this);
case 1:
return state_machine__6860__auto____1.call(this,state_11245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6860__auto____0;
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6860__auto____1;
return state_machine__6860__auto__;
})()
;})(switch__6859__auto__))
})();var state__6931__auto__ = (function (){var statearr_11268 = f__6930__auto__.call(null);(statearr_11268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6929__auto___11269);
return statearr_11268;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6931__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6929__auto___11374 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6930__auto__ = (function (){var switch__6859__auto__ = (function (state_11351){var state_val_11352 = (state_11351[1]);if((state_val_11352 === 1))
{var inst_11328 = 0;var state_11351__$1 = (function (){var statearr_11353 = state_11351;(statearr_11353[7] = inst_11328);
return statearr_11353;
})();var statearr_11354_11375 = state_11351__$1;(statearr_11354_11375[2] = null);
(statearr_11354_11375[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11352 === 2))
{var inst_11328 = (state_11351[7]);var inst_11330 = (inst_11328 < n);var state_11351__$1 = state_11351;if(cljs.core.truth_(inst_11330))
{var statearr_11355_11376 = state_11351__$1;(statearr_11355_11376[1] = 4);
} else
{var statearr_11356_11377 = state_11351__$1;(statearr_11356_11377[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11352 === 3))
{var inst_11348 = (state_11351[2]);var inst_11349 = cljs.core.async.close_BANG_.call(null,out);var state_11351__$1 = (function (){var statearr_11357 = state_11351;(statearr_11357[8] = inst_11348);
return statearr_11357;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11351__$1,inst_11349);
} else
{if((state_val_11352 === 4))
{var state_11351__$1 = state_11351;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11351__$1,7,ch);
} else
{if((state_val_11352 === 5))
{var state_11351__$1 = state_11351;var statearr_11358_11378 = state_11351__$1;(statearr_11358_11378[2] = null);
(statearr_11358_11378[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11352 === 6))
{var inst_11346 = (state_11351[2]);var state_11351__$1 = state_11351;var statearr_11359_11379 = state_11351__$1;(statearr_11359_11379[2] = inst_11346);
(statearr_11359_11379[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11352 === 7))
{var inst_11333 = (state_11351[9]);var inst_11333__$1 = (state_11351[2]);var inst_11334 = (inst_11333__$1 == null);var inst_11335 = cljs.core.not.call(null,inst_11334);var state_11351__$1 = (function (){var statearr_11360 = state_11351;(statearr_11360[9] = inst_11333__$1);
return statearr_11360;
})();if(inst_11335)
{var statearr_11361_11380 = state_11351__$1;(statearr_11361_11380[1] = 8);
} else
{var statearr_11362_11381 = state_11351__$1;(statearr_11362_11381[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11352 === 8))
{var inst_11333 = (state_11351[9]);var state_11351__$1 = state_11351;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11351__$1,11,out,inst_11333);
} else
{if((state_val_11352 === 9))
{var state_11351__$1 = state_11351;var statearr_11363_11382 = state_11351__$1;(statearr_11363_11382[2] = null);
(statearr_11363_11382[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11352 === 10))
{var inst_11343 = (state_11351[2]);var state_11351__$1 = state_11351;var statearr_11364_11383 = state_11351__$1;(statearr_11364_11383[2] = inst_11343);
(statearr_11364_11383[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11352 === 11))
{var inst_11328 = (state_11351[7]);var inst_11338 = (state_11351[2]);var inst_11339 = (inst_11328 + 1);var inst_11328__$1 = inst_11339;var state_11351__$1 = (function (){var statearr_11365 = state_11351;(statearr_11365[10] = inst_11338);
(statearr_11365[7] = inst_11328__$1);
return statearr_11365;
})();var statearr_11366_11384 = state_11351__$1;(statearr_11366_11384[2] = null);
(statearr_11366_11384[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6859__auto__){
return (function() {
var state_machine__6860__auto__ = null;
var state_machine__6860__auto____0 = (function (){var statearr_11370 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11370[0] = state_machine__6860__auto__);
(statearr_11370[1] = 1);
return statearr_11370;
});
var state_machine__6860__auto____1 = (function (state_11351){while(true){
var ret_value__6861__auto__ = (function (){try{while(true){
var result__6862__auto__ = switch__6859__auto__.call(null,state_11351);if(cljs.core.keyword_identical_QMARK_.call(null,result__6862__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6862__auto__;
}
break;
}
}catch (e11371){if((e11371 instanceof Object))
{var ex__6863__auto__ = e11371;var statearr_11372_11385 = state_11351;(statearr_11372_11385[5] = ex__6863__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11351);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11371;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11386 = state_11351;
state_11351 = G__11386;
continue;
}
} else
{return ret_value__6861__auto__;
}
break;
}
});
state_machine__6860__auto__ = function(state_11351){
switch(arguments.length){
case 0:
return state_machine__6860__auto____0.call(this);
case 1:
return state_machine__6860__auto____1.call(this,state_11351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6860__auto____0;
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6860__auto____1;
return state_machine__6860__auto__;
})()
;})(switch__6859__auto__))
})();var state__6931__auto__ = (function (){var statearr_11373 = f__6930__auto__.call(null);(statearr_11373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6929__auto___11374);
return statearr_11373;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6931__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6929__auto___11483 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6930__auto__ = (function (){var switch__6859__auto__ = (function (state_11458){var state_val_11459 = (state_11458[1]);if((state_val_11459 === 1))
{var inst_11435 = null;var state_11458__$1 = (function (){var statearr_11460 = state_11458;(statearr_11460[7] = inst_11435);
return statearr_11460;
})();var statearr_11461_11484 = state_11458__$1;(statearr_11461_11484[2] = null);
(statearr_11461_11484[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 2))
{var state_11458__$1 = state_11458;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11458__$1,4,ch);
} else
{if((state_val_11459 === 3))
{var inst_11455 = (state_11458[2]);var inst_11456 = cljs.core.async.close_BANG_.call(null,out);var state_11458__$1 = (function (){var statearr_11462 = state_11458;(statearr_11462[8] = inst_11455);
return statearr_11462;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11458__$1,inst_11456);
} else
{if((state_val_11459 === 4))
{var inst_11438 = (state_11458[9]);var inst_11438__$1 = (state_11458[2]);var inst_11439 = (inst_11438__$1 == null);var inst_11440 = cljs.core.not.call(null,inst_11439);var state_11458__$1 = (function (){var statearr_11463 = state_11458;(statearr_11463[9] = inst_11438__$1);
return statearr_11463;
})();if(inst_11440)
{var statearr_11464_11485 = state_11458__$1;(statearr_11464_11485[1] = 5);
} else
{var statearr_11465_11486 = state_11458__$1;(statearr_11465_11486[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 5))
{var inst_11438 = (state_11458[9]);var inst_11435 = (state_11458[7]);var inst_11442 = cljs.core._EQ_.call(null,inst_11438,inst_11435);var state_11458__$1 = state_11458;if(inst_11442)
{var statearr_11466_11487 = state_11458__$1;(statearr_11466_11487[1] = 8);
} else
{var statearr_11467_11488 = state_11458__$1;(statearr_11467_11488[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 6))
{var state_11458__$1 = state_11458;var statearr_11469_11489 = state_11458__$1;(statearr_11469_11489[2] = null);
(statearr_11469_11489[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 7))
{var inst_11453 = (state_11458[2]);var state_11458__$1 = state_11458;var statearr_11470_11490 = state_11458__$1;(statearr_11470_11490[2] = inst_11453);
(statearr_11470_11490[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 8))
{var inst_11435 = (state_11458[7]);var tmp11468 = inst_11435;var inst_11435__$1 = tmp11468;var state_11458__$1 = (function (){var statearr_11471 = state_11458;(statearr_11471[7] = inst_11435__$1);
return statearr_11471;
})();var statearr_11472_11491 = state_11458__$1;(statearr_11472_11491[2] = null);
(statearr_11472_11491[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 9))
{var inst_11438 = (state_11458[9]);var state_11458__$1 = state_11458;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11458__$1,11,out,inst_11438);
} else
{if((state_val_11459 === 10))
{var inst_11450 = (state_11458[2]);var state_11458__$1 = state_11458;var statearr_11473_11492 = state_11458__$1;(statearr_11473_11492[2] = inst_11450);
(statearr_11473_11492[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 11))
{var inst_11438 = (state_11458[9]);var inst_11447 = (state_11458[2]);var inst_11435 = inst_11438;var state_11458__$1 = (function (){var statearr_11474 = state_11458;(statearr_11474[10] = inst_11447);
(statearr_11474[7] = inst_11435);
return statearr_11474;
})();var statearr_11475_11493 = state_11458__$1;(statearr_11475_11493[2] = null);
(statearr_11475_11493[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6859__auto__){
return (function() {
var state_machine__6860__auto__ = null;
var state_machine__6860__auto____0 = (function (){var statearr_11479 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11479[0] = state_machine__6860__auto__);
(statearr_11479[1] = 1);
return statearr_11479;
});
var state_machine__6860__auto____1 = (function (state_11458){while(true){
var ret_value__6861__auto__ = (function (){try{while(true){
var result__6862__auto__ = switch__6859__auto__.call(null,state_11458);if(cljs.core.keyword_identical_QMARK_.call(null,result__6862__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6862__auto__;
}
break;
}
}catch (e11480){if((e11480 instanceof Object))
{var ex__6863__auto__ = e11480;var statearr_11481_11494 = state_11458;(statearr_11481_11494[5] = ex__6863__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11458);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11480;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11495 = state_11458;
state_11458 = G__11495;
continue;
}
} else
{return ret_value__6861__auto__;
}
break;
}
});
state_machine__6860__auto__ = function(state_11458){
switch(arguments.length){
case 0:
return state_machine__6860__auto____0.call(this);
case 1:
return state_machine__6860__auto____1.call(this,state_11458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6860__auto____0;
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6860__auto____1;
return state_machine__6860__auto__;
})()
;})(switch__6859__auto__))
})();var state__6931__auto__ = (function (){var statearr_11482 = f__6930__auto__.call(null);(statearr_11482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6929__auto___11483);
return statearr_11482;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6931__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6929__auto___11630 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6930__auto__ = (function (){var switch__6859__auto__ = (function (state_11600){var state_val_11601 = (state_11600[1]);if((state_val_11601 === 1))
{var inst_11563 = (new Array(n));var inst_11564 = inst_11563;var inst_11565 = 0;var state_11600__$1 = (function (){var statearr_11602 = state_11600;(statearr_11602[7] = inst_11565);
(statearr_11602[8] = inst_11564);
return statearr_11602;
})();var statearr_11603_11631 = state_11600__$1;(statearr_11603_11631[2] = null);
(statearr_11603_11631[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11601 === 2))
{var state_11600__$1 = state_11600;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11600__$1,4,ch);
} else
{if((state_val_11601 === 3))
{var inst_11598 = (state_11600[2]);var state_11600__$1 = state_11600;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11600__$1,inst_11598);
} else
{if((state_val_11601 === 4))
{var inst_11568 = (state_11600[9]);var inst_11568__$1 = (state_11600[2]);var inst_11569 = (inst_11568__$1 == null);var inst_11570 = cljs.core.not.call(null,inst_11569);var state_11600__$1 = (function (){var statearr_11604 = state_11600;(statearr_11604[9] = inst_11568__$1);
return statearr_11604;
})();if(inst_11570)
{var statearr_11605_11632 = state_11600__$1;(statearr_11605_11632[1] = 5);
} else
{var statearr_11606_11633 = state_11600__$1;(statearr_11606_11633[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11601 === 5))
{var inst_11568 = (state_11600[9]);var inst_11573 = (state_11600[10]);var inst_11565 = (state_11600[7]);var inst_11564 = (state_11600[8]);var inst_11572 = (inst_11564[inst_11565] = inst_11568);var inst_11573__$1 = (inst_11565 + 1);var inst_11574 = (inst_11573__$1 < n);var state_11600__$1 = (function (){var statearr_11607 = state_11600;(statearr_11607[11] = inst_11572);
(statearr_11607[10] = inst_11573__$1);
return statearr_11607;
})();if(cljs.core.truth_(inst_11574))
{var statearr_11608_11634 = state_11600__$1;(statearr_11608_11634[1] = 8);
} else
{var statearr_11609_11635 = state_11600__$1;(statearr_11609_11635[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11601 === 6))
{var inst_11565 = (state_11600[7]);var inst_11586 = (inst_11565 > 0);var state_11600__$1 = state_11600;if(cljs.core.truth_(inst_11586))
{var statearr_11611_11636 = state_11600__$1;(statearr_11611_11636[1] = 12);
} else
{var statearr_11612_11637 = state_11600__$1;(statearr_11612_11637[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11601 === 7))
{var inst_11596 = (state_11600[2]);var state_11600__$1 = state_11600;var statearr_11613_11638 = state_11600__$1;(statearr_11613_11638[2] = inst_11596);
(statearr_11613_11638[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11601 === 8))
{var inst_11573 = (state_11600[10]);var inst_11564 = (state_11600[8]);var tmp11610 = inst_11564;var inst_11564__$1 = tmp11610;var inst_11565 = inst_11573;var state_11600__$1 = (function (){var statearr_11614 = state_11600;(statearr_11614[7] = inst_11565);
(statearr_11614[8] = inst_11564__$1);
return statearr_11614;
})();var statearr_11615_11639 = state_11600__$1;(statearr_11615_11639[2] = null);
(statearr_11615_11639[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11601 === 9))
{var inst_11564 = (state_11600[8]);var inst_11578 = cljs.core.vec.call(null,inst_11564);var state_11600__$1 = state_11600;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11600__$1,11,out,inst_11578);
} else
{if((state_val_11601 === 10))
{var inst_11584 = (state_11600[2]);var state_11600__$1 = state_11600;var statearr_11616_11640 = state_11600__$1;(statearr_11616_11640[2] = inst_11584);
(statearr_11616_11640[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11601 === 11))
{var inst_11580 = (state_11600[2]);var inst_11581 = (new Array(n));var inst_11564 = inst_11581;var inst_11565 = 0;var state_11600__$1 = (function (){var statearr_11617 = state_11600;(statearr_11617[12] = inst_11580);
(statearr_11617[7] = inst_11565);
(statearr_11617[8] = inst_11564);
return statearr_11617;
})();var statearr_11618_11641 = state_11600__$1;(statearr_11618_11641[2] = null);
(statearr_11618_11641[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11601 === 12))
{var inst_11564 = (state_11600[8]);var inst_11588 = cljs.core.vec.call(null,inst_11564);var state_11600__$1 = state_11600;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11600__$1,15,out,inst_11588);
} else
{if((state_val_11601 === 13))
{var state_11600__$1 = state_11600;var statearr_11619_11642 = state_11600__$1;(statearr_11619_11642[2] = null);
(statearr_11619_11642[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11601 === 14))
{var inst_11593 = (state_11600[2]);var inst_11594 = cljs.core.async.close_BANG_.call(null,out);var state_11600__$1 = (function (){var statearr_11620 = state_11600;(statearr_11620[13] = inst_11593);
return statearr_11620;
})();var statearr_11621_11643 = state_11600__$1;(statearr_11621_11643[2] = inst_11594);
(statearr_11621_11643[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11601 === 15))
{var inst_11590 = (state_11600[2]);var state_11600__$1 = state_11600;var statearr_11622_11644 = state_11600__$1;(statearr_11622_11644[2] = inst_11590);
(statearr_11622_11644[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6859__auto__){
return (function() {
var state_machine__6860__auto__ = null;
var state_machine__6860__auto____0 = (function (){var statearr_11626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11626[0] = state_machine__6860__auto__);
(statearr_11626[1] = 1);
return statearr_11626;
});
var state_machine__6860__auto____1 = (function (state_11600){while(true){
var ret_value__6861__auto__ = (function (){try{while(true){
var result__6862__auto__ = switch__6859__auto__.call(null,state_11600);if(cljs.core.keyword_identical_QMARK_.call(null,result__6862__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6862__auto__;
}
break;
}
}catch (e11627){if((e11627 instanceof Object))
{var ex__6863__auto__ = e11627;var statearr_11628_11645 = state_11600;(statearr_11628_11645[5] = ex__6863__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11600);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11627;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11646 = state_11600;
state_11600 = G__11646;
continue;
}
} else
{return ret_value__6861__auto__;
}
break;
}
});
state_machine__6860__auto__ = function(state_11600){
switch(arguments.length){
case 0:
return state_machine__6860__auto____0.call(this);
case 1:
return state_machine__6860__auto____1.call(this,state_11600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6860__auto____0;
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6860__auto____1;
return state_machine__6860__auto__;
})()
;})(switch__6859__auto__))
})();var state__6931__auto__ = (function (){var statearr_11629 = f__6930__auto__.call(null);(statearr_11629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6929__auto___11630);
return statearr_11629;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6931__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6929__auto___11789 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6930__auto__ = (function (){var switch__6859__auto__ = (function (state_11759){var state_val_11760 = (state_11759[1]);if((state_val_11760 === 1))
{var inst_11718 = [];var inst_11719 = inst_11718;var inst_11720 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_11759__$1 = (function (){var statearr_11761 = state_11759;(statearr_11761[7] = inst_11720);
(statearr_11761[8] = inst_11719);
return statearr_11761;
})();var statearr_11762_11790 = state_11759__$1;(statearr_11762_11790[2] = null);
(statearr_11762_11790[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11760 === 2))
{var state_11759__$1 = state_11759;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11759__$1,4,ch);
} else
{if((state_val_11760 === 3))
{var inst_11757 = (state_11759[2]);var state_11759__$1 = state_11759;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11759__$1,inst_11757);
} else
{if((state_val_11760 === 4))
{var inst_11723 = (state_11759[9]);var inst_11723__$1 = (state_11759[2]);var inst_11724 = (inst_11723__$1 == null);var inst_11725 = cljs.core.not.call(null,inst_11724);var state_11759__$1 = (function (){var statearr_11763 = state_11759;(statearr_11763[9] = inst_11723__$1);
return statearr_11763;
})();if(inst_11725)
{var statearr_11764_11791 = state_11759__$1;(statearr_11764_11791[1] = 5);
} else
{var statearr_11765_11792 = state_11759__$1;(statearr_11765_11792[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11760 === 5))
{var inst_11720 = (state_11759[7]);var inst_11723 = (state_11759[9]);var inst_11727 = (state_11759[10]);var inst_11727__$1 = f.call(null,inst_11723);var inst_11728 = cljs.core._EQ_.call(null,inst_11727__$1,inst_11720);var inst_11729 = cljs.core.keyword_identical_QMARK_.call(null,inst_11720,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_11730 = (inst_11728) || (inst_11729);var state_11759__$1 = (function (){var statearr_11766 = state_11759;(statearr_11766[10] = inst_11727__$1);
return statearr_11766;
})();if(cljs.core.truth_(inst_11730))
{var statearr_11767_11793 = state_11759__$1;(statearr_11767_11793[1] = 8);
} else
{var statearr_11768_11794 = state_11759__$1;(statearr_11768_11794[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11760 === 6))
{var inst_11719 = (state_11759[8]);var inst_11744 = inst_11719.length;var inst_11745 = (inst_11744 > 0);var state_11759__$1 = state_11759;if(cljs.core.truth_(inst_11745))
{var statearr_11770_11795 = state_11759__$1;(statearr_11770_11795[1] = 12);
} else
{var statearr_11771_11796 = state_11759__$1;(statearr_11771_11796[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11760 === 7))
{var inst_11755 = (state_11759[2]);var state_11759__$1 = state_11759;var statearr_11772_11797 = state_11759__$1;(statearr_11772_11797[2] = inst_11755);
(statearr_11772_11797[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11760 === 8))
{var inst_11719 = (state_11759[8]);var inst_11723 = (state_11759[9]);var inst_11727 = (state_11759[10]);var inst_11732 = inst_11719.push(inst_11723);var tmp11769 = inst_11719;var inst_11719__$1 = tmp11769;var inst_11720 = inst_11727;var state_11759__$1 = (function (){var statearr_11773 = state_11759;(statearr_11773[11] = inst_11732);
(statearr_11773[7] = inst_11720);
(statearr_11773[8] = inst_11719__$1);
return statearr_11773;
})();var statearr_11774_11798 = state_11759__$1;(statearr_11774_11798[2] = null);
(statearr_11774_11798[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11760 === 9))
{var inst_11719 = (state_11759[8]);var inst_11735 = cljs.core.vec.call(null,inst_11719);var state_11759__$1 = state_11759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11759__$1,11,out,inst_11735);
} else
{if((state_val_11760 === 10))
{var inst_11742 = (state_11759[2]);var state_11759__$1 = state_11759;var statearr_11775_11799 = state_11759__$1;(statearr_11775_11799[2] = inst_11742);
(statearr_11775_11799[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11760 === 11))
{var inst_11723 = (state_11759[9]);var inst_11727 = (state_11759[10]);var inst_11737 = (state_11759[2]);var inst_11738 = [];var inst_11739 = inst_11738.push(inst_11723);var inst_11719 = inst_11738;var inst_11720 = inst_11727;var state_11759__$1 = (function (){var statearr_11776 = state_11759;(statearr_11776[7] = inst_11720);
(statearr_11776[8] = inst_11719);
(statearr_11776[12] = inst_11737);
(statearr_11776[13] = inst_11739);
return statearr_11776;
})();var statearr_11777_11800 = state_11759__$1;(statearr_11777_11800[2] = null);
(statearr_11777_11800[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11760 === 12))
{var inst_11719 = (state_11759[8]);var inst_11747 = cljs.core.vec.call(null,inst_11719);var state_11759__$1 = state_11759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11759__$1,15,out,inst_11747);
} else
{if((state_val_11760 === 13))
{var state_11759__$1 = state_11759;var statearr_11778_11801 = state_11759__$1;(statearr_11778_11801[2] = null);
(statearr_11778_11801[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11760 === 14))
{var inst_11752 = (state_11759[2]);var inst_11753 = cljs.core.async.close_BANG_.call(null,out);var state_11759__$1 = (function (){var statearr_11779 = state_11759;(statearr_11779[14] = inst_11752);
return statearr_11779;
})();var statearr_11780_11802 = state_11759__$1;(statearr_11780_11802[2] = inst_11753);
(statearr_11780_11802[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11760 === 15))
{var inst_11749 = (state_11759[2]);var state_11759__$1 = state_11759;var statearr_11781_11803 = state_11759__$1;(statearr_11781_11803[2] = inst_11749);
(statearr_11781_11803[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6859__auto__){
return (function() {
var state_machine__6860__auto__ = null;
var state_machine__6860__auto____0 = (function (){var statearr_11785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11785[0] = state_machine__6860__auto__);
(statearr_11785[1] = 1);
return statearr_11785;
});
var state_machine__6860__auto____1 = (function (state_11759){while(true){
var ret_value__6861__auto__ = (function (){try{while(true){
var result__6862__auto__ = switch__6859__auto__.call(null,state_11759);if(cljs.core.keyword_identical_QMARK_.call(null,result__6862__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6862__auto__;
}
break;
}
}catch (e11786){if((e11786 instanceof Object))
{var ex__6863__auto__ = e11786;var statearr_11787_11804 = state_11759;(statearr_11787_11804[5] = ex__6863__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11759);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11786;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11805 = state_11759;
state_11759 = G__11805;
continue;
}
} else
{return ret_value__6861__auto__;
}
break;
}
});
state_machine__6860__auto__ = function(state_11759){
switch(arguments.length){
case 0:
return state_machine__6860__auto____0.call(this);
case 1:
return state_machine__6860__auto____1.call(this,state_11759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6860__auto____0;
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6860__auto____1;
return state_machine__6860__auto__;
})()
;})(switch__6859__auto__))
})();var state__6931__auto__ = (function (){var statearr_11788 = f__6930__auto__.call(null);(statearr_11788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6929__auto___11789);
return statearr_11788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6931__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map