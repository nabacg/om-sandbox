// Compiled by ClojureScript 0.0-2138
goog.provide('main.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.Timer');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('goog.Timer');
goog.require('goog.events.EventType');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
main.core.hello_world_widget = (function hello_world_widget(data,owner){if(typeof main.core.t27312 !== 'undefined')
{} else
{
/**
* @constructor
*/
main.core.t27312 = (function (owner,data,hello_world_widget,meta27313){
this.owner = owner;
this.data = data;
this.hello_world_widget = hello_world_widget;
this.meta27313 = meta27313;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
main.core.t27312.cljs$lang$type = true;
main.core.t27312.cljs$lang$ctorStr = "main.core/t27312";
main.core.t27312.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"main.core/t27312");
});
main.core.t27312.prototype.om$core$IRender$ = true;
main.core.t27312.prototype.om$core$IRender$render$arity$1 = (function (this__4931__auto__){var self__ = this;
var this__4931__auto____$1 = this;return React.DOM.div(null,[cljs.core.str("Hello World"),cljs.core.str(self__.owner)].join(''));
});
main.core.t27312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27314){var self__ = this;
var _27314__$1 = this;return self__.meta27313;
});
main.core.t27312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27314,meta27313__$1){var self__ = this;
var _27314__$1 = this;return (new main.core.t27312(self__.owner,self__.data,self__.hello_world_widget,meta27313__$1));
});
main.core.__GT_t27312 = (function __GT_t27312(owner__$1,data__$1,hello_world_widget__$1,meta27313){return (new main.core.t27312(owner__$1,data__$1,hello_world_widget__$1,meta27313));
});
}
return (new main.core.t27312(owner,data,hello_world_widget,null));
});
main.core.counter = (function counter(data,owner_component){if(typeof main.core.t27318 !== 'undefined')
{} else
{
/**
* @constructor
*/
main.core.t27318 = (function (owner_component,data,counter,meta27319){
this.owner_component = owner_component;
this.data = data;
this.counter = counter;
this.meta27319 = meta27319;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
main.core.t27318.cljs$lang$type = true;
main.core.t27318.cljs$lang$ctorStr = "main.core/t27318";
main.core.t27318.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"main.core/t27318");
});
main.core.t27318.prototype.om$core$IRender$ = true;
main.core.t27318.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var n = om.core.get_state.call(null,self__.owner_component,new cljs.core.Keyword(null,"number","number",4274507451));console.log("Rendering n: ",n);
return React.DOM.div(null,React.DOM.h2(null,new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(self__.data)),React.DOM.button({"onClick": (function (){return om.core.set_state_BANG_.call(null,self__.owner_component,new cljs.core.Keyword(null,"number","number",4274507451),(n + 1));
})},"Click Me!"),React.DOM.p(null,[cljs.core.str("My State: "),cljs.core.str(n)].join('')));
});
main.core.t27318.prototype.om$core$IInitState$ = true;
main.core.t27318.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",4274507451),0], null);
});
main.core.t27318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27320){var self__ = this;
var _27320__$1 = this;return self__.meta27319;
});
main.core.t27318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27320,meta27319__$1){var self__ = this;
var _27320__$1 = this;return (new main.core.t27318(self__.owner_component,self__.data,self__.counter,meta27319__$1));
});
main.core.__GT_t27318 = (function __GT_t27318(owner_component__$1,data__$1,counter__$1,meta27319){return (new main.core.t27318(owner_component__$1,data__$1,counter__$1,meta27319));
});
}
return (new main.core.t27318(owner_component,data,counter,null));
});
main.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",1124275658),"SR game",new cljs.core.Keyword(null,"rpm","rpm",1014017377),0,new cljs.core.Keyword(null,"max-rpm","max-rpm",1856861560),6000,new cljs.core.Keyword(null,"speed","speed",1123546041),0,new cljs.core.Keyword(null,"max-speed","max-speed",3642954256),300,new cljs.core.Keyword(null,"gear","gear",1017072897),0,new cljs.core.Keyword(null,"max-gear","max-gear",1375438794),6], null));
main.core.timer_int = (1000 / 0.5);
main.core.listen = (function listen(element,event_type){var out_channel = cljs.core.async.chan.call(null);goog.events.listen(element,cljs.core.type,(function (e){return cljs.core.async.put_BANG_.call(null,out_channel,e);
}));
return out_channel;
});
main.core.get_new_value = (function() {
var get_new_value = null;
var get_new_value__3 = (function (state,state_key,max_state_key){return get_new_value.call(null,state,state_key,max_state_key,cljs.core.inc);
});
var get_new_value__4 = (function (state,state_key,max_state_key,inc_fn){var value = state.call(null,state_key);var max_value = state.call(null,max_state_key);var new_val = inc_fn.call(null,value);if((new_val < max_value))
{return new_val;
} else
{return value;
}
});
get_new_value = function(state,state_key,max_state_key,inc_fn){
switch(arguments.length){
case 3:
return get_new_value__3.call(this,state,state_key,max_state_key);
case 4:
return get_new_value__4.call(this,state,state_key,max_state_key,inc_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_new_value.cljs$core$IFn$_invoke$arity$3 = get_new_value__3;
get_new_value.cljs$core$IFn$_invoke$arity$4 = get_new_value__4;
return get_new_value;
})()
;
main.core.calc_new_speed = (function calc_new_speed(speed,rpm,max_rpm){if(cljs.core._EQ_.call(null,speed,0))
{return 35;
} else
{var rpm_ratio = (rpm / max_rpm);return ((speed + ((speed * 0.2) * (((rpm_ratio * rpm_ratio) * -1) + rpm_ratio))) | 0);
}
});
main.core.init_timer = (function init_timer(channel,interval){var timer = (new goog.Timer(interval));goog.events.listen(timer,goog.Timer.TICK,(function (e){var max_rpm = cljs.core.deref.call(null,main.core.app_state).call(null,new cljs.core.Keyword(null,"max-rpm","max-rpm",1856861560));var new_rpm = main.core.get_new_value.call(null,cljs.core.deref.call(null,main.core.app_state),new cljs.core.Keyword(null,"rpm","rpm",1014017377),new cljs.core.Keyword(null,"max-rpm","max-rpm",1856861560),((function (max_rpm){
return (function (p1__27321_SHARP_){return (100 + p1__27321_SHARP_);
});})(max_rpm))
);var new_speed = main.core.get_new_value.call(null,cljs.core.deref.call(null,main.core.app_state),new cljs.core.Keyword(null,"speed","speed",1123546041),new cljs.core.Keyword(null,"max-speed","max-speed",3642954256),((function (max_rpm,new_rpm){
return (function (p1__27322_SHARP_){return main.core.calc_new_speed.call(null,p1__27322_SHARP_,new_rpm,max_rpm);
});})(max_rpm,new_rpm))
);cljs.core.swap_BANG_.call(null,main.core.app_state,(function (prev_state){return cljs.core.assoc.call(null,cljs.core.assoc.call(null,prev_state,new cljs.core.Keyword(null,"rpm","rpm",1014017377),new_rpm),new cljs.core.Keyword(null,"speed","speed",1123546041),new_speed);
}));
return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"timer","timer",1124268727)], null));
}));
timer.start();
return timer;
});
main.core.init_user_input = (function init_user_input(channel){return goog.events.listen(window,goog.events.EventType.CLICK,(function (e){var new_gear = main.core.get_new_value.call(null,cljs.core.deref.call(null,main.core.app_state),new cljs.core.Keyword(null,"gear","gear",1017072897),new cljs.core.Keyword(null,"max-gear","max-gear",1375438794));var new_rpm = 0;cljs.core.swap_BANG_.call(null,main.core.app_state,(function (prev_state){return cljs.core.assoc.call(null,cljs.core.assoc.call(null,prev_state,new cljs.core.Keyword(null,"gear","gear",1017072897),new_gear),new cljs.core.Keyword(null,"rpm","rpm",1014017377),new_rpm);
}));
console.log("Gear pressed",new_gear);
return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"keyboard","keyboard",1517643609)], null));
}));
});
main.core.start = (function start(){var channel = cljs.core.async.chan.call(null,cljs.core.async.dropping_buffer.call(null,1));return om.core.root.call(null,cljs.core.deref.call(null,main.core.app_state),(function (state,component){main.core.init_timer.call(null,channel,main.core.timer_int);
if(typeof main.core.t27363 !== 'undefined')
{} else
{
/**
* @constructor
*/
main.core.t27363 = (function (component,state,channel,start,meta27364){
this.component = component;
this.state = state;
this.channel = channel;
this.start = start;
this.meta27364 = meta27364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
main.core.t27363.cljs$lang$type = true;
main.core.t27363.cljs$lang$ctorStr = "main.core/t27363";
main.core.t27363.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"main.core/t27363");
});
main.core.t27363.prototype.om$core$IRender$ = true;
main.core.t27363.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"onClick": (function (e){var new_gear = main.core.get_new_value.call(null,cljs.core.deref.call(null,main.core.app_state),new cljs.core.Keyword(null,"gear","gear",1017072897),new cljs.core.Keyword(null,"max-gear","max-gear",1375438794));var new_rpm = 0;cljs.core.swap_BANG_.call(null,main.core.app_state,(function (prev_state){return cljs.core.assoc.call(null,cljs.core.assoc.call(null,prev_state,new cljs.core.Keyword(null,"gear","gear",1017072897),new_gear),new cljs.core.Keyword(null,"rpm","rpm",1014017377),new_rpm);
}));
console.log("Gear pressed",new_gear);
return cljs.core.async.put_BANG_.call(null,self__.channel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"keyboard","keyboard",1517643609)], null));
})},React.DOM.h2(null,"Your stats:"),React.DOM.p(null,[cljs.core.str(new cljs.core.Keyword(null,"rpm","rpm",1014017377)),cljs.core.str(" "),cljs.core.str(om.core.get_state.call(null,self__.component,new cljs.core.Keyword(null,"rpm","rpm",1014017377)))].join('')),React.DOM.p(null,[cljs.core.str(new cljs.core.Keyword(null,"speed","speed",1123546041)),cljs.core.str(" "),cljs.core.str(om.core.get_state.call(null,self__.component,new cljs.core.Keyword(null,"speed","speed",1123546041)))].join('')),React.DOM.p(null,[cljs.core.str(new cljs.core.Keyword(null,"gear","gear",1017072897)),cljs.core.str(" "),cljs.core.str(om.core.get_state.call(null,self__.component,new cljs.core.Keyword(null,"gear","gear",1017072897)))].join('')));
});
main.core.t27363.prototype.om$core$IWillMount$ = true;
main.core.t27363.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6929__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6930__auto__ = (function (){var switch__6859__auto__ = (function (state_27387){var state_val_27388 = (state_27387[1]);if((state_val_27388 === 7))
{var inst_27369 = (state_27387[2]);var inst_27370 = cljs.core.deref.call(null,main.core.app_state);var inst_27371 = inst_27370.call(null,new cljs.core.Keyword(null,"rpm","rpm",1014017377));var inst_27372 = cljs.core.deref.call(null,main.core.app_state);var inst_27373 = inst_27372.call(null,new cljs.core.Keyword(null,"speed","speed",1123546041));var inst_27374 = cljs.core.deref.call(null,main.core.app_state);var inst_27375 = inst_27374.call(null,new cljs.core.Keyword(null,"gear","gear",1017072897));var inst_27376 = console.log(inst_27371,inst_27373,inst_27375);var inst_27377 = om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"rpm","rpm",1014017377),inst_27371);var inst_27378 = om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"speed","speed",1123546041),inst_27373);var inst_27379 = om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"gear","gear",1017072897),inst_27375);var state_27387__$1 = (function (){var statearr_27389 = state_27387;(statearr_27389[7] = inst_27369);
(statearr_27389[8] = inst_27378);
(statearr_27389[9] = inst_27379);
(statearr_27389[10] = inst_27376);
(statearr_27389[11] = inst_27377);
return statearr_27389;
})();var statearr_27390_27403 = state_27387__$1;(statearr_27390_27403[2] = null);
(statearr_27390_27403[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27388 === 6))
{var inst_27383 = (state_27387[2]);var state_27387__$1 = state_27387;var statearr_27391_27404 = state_27387__$1;(statearr_27391_27404[2] = inst_27383);
(statearr_27391_27404[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27388 === 5))
{var state_27387__$1 = state_27387;var statearr_27392_27405 = state_27387__$1;(statearr_27392_27405[2] = null);
(statearr_27392_27405[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27388 === 4))
{var state_27387__$1 = state_27387;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27387__$1,7,self__.channel);
} else
{if((state_val_27388 === 3))
{var inst_27385 = (state_27387[2]);var state_27387__$1 = state_27387;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27387__$1,inst_27385);
} else
{if((state_val_27388 === 2))
{var state_27387__$1 = state_27387;if(true)
{var statearr_27393_27406 = state_27387__$1;(statearr_27393_27406[1] = 4);
} else
{var statearr_27394_27407 = state_27387__$1;(statearr_27394_27407[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27388 === 1))
{var state_27387__$1 = state_27387;var statearr_27395_27408 = state_27387__$1;(statearr_27395_27408[2] = null);
(statearr_27395_27408[1] = 2);
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
var state_machine__6860__auto____0 = (function (){var statearr_27399 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27399[0] = state_machine__6860__auto__);
(statearr_27399[1] = 1);
return statearr_27399;
});
var state_machine__6860__auto____1 = (function (state_27387){while(true){
var ret_value__6861__auto__ = (function (){try{while(true){
var result__6862__auto__ = switch__6859__auto__.call(null,state_27387);if(cljs.core.keyword_identical_QMARK_.call(null,result__6862__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6862__auto__;
}
break;
}
}catch (e27400){if((e27400 instanceof Object))
{var ex__6863__auto__ = e27400;var statearr_27401_27409 = state_27387;(statearr_27401_27409[5] = ex__6863__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27387);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27400;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27410 = state_27387;
state_27387 = G__27410;
continue;
}
} else
{return ret_value__6861__auto__;
}
break;
}
});
state_machine__6860__auto__ = function(state_27387){
switch(arguments.length){
case 0:
return state_machine__6860__auto____0.call(this);
case 1:
return state_machine__6860__auto____1.call(this,state_27387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6860__auto____0;
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6860__auto____1;
return state_machine__6860__auto__;
})()
;})(switch__6859__auto__))
})();var state__6931__auto__ = (function (){var statearr_27402 = f__6930__auto__.call(null);(statearr_27402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6929__auto__);
return statearr_27402;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6931__auto__);
}));
return c__6929__auto__;
});
main.core.t27363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27365){var self__ = this;
var _27365__$1 = this;return self__.meta27364;
});
main.core.t27363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27365,meta27364__$1){var self__ = this;
var _27365__$1 = this;return (new main.core.t27363(self__.component,self__.state,self__.channel,self__.start,meta27364__$1));
});
main.core.__GT_t27363 = (function __GT_t27363(component__$1,state__$1,channel__$1,start__$1,meta27364){return (new main.core.t27363(component__$1,state__$1,channel__$1,start__$1,meta27364));
});
}
return (new main.core.t27363(component,state,channel,start,null));
}),document.getElementById("some-id"));
});
main.core.start.call(null);

//# sourceMappingURL=core.js.map