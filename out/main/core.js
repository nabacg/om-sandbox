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
main.core.hello_world_widget = (function hello_world_widget(data,owner){if(typeof main.core.t22964 !== 'undefined')
{} else
{
/**
* @constructor
*/
main.core.t22964 = (function (owner,data,hello_world_widget,meta22965){
this.owner = owner;
this.data = data;
this.hello_world_widget = hello_world_widget;
this.meta22965 = meta22965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
main.core.t22964.cljs$lang$type = true;
main.core.t22964.cljs$lang$ctorStr = "main.core/t22964";
main.core.t22964.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"main.core/t22964");
});
main.core.t22964.prototype.om$core$IRender$ = true;
main.core.t22964.prototype.om$core$IRender$render$arity$1 = (function (this__4931__auto__){var self__ = this;
var this__4931__auto____$1 = this;return React.DOM.div(null,[cljs.core.str("Hello World"),cljs.core.str(self__.owner)].join(''));
});
main.core.t22964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22966){var self__ = this;
var _22966__$1 = this;return self__.meta22965;
});
main.core.t22964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22966,meta22965__$1){var self__ = this;
var _22966__$1 = this;return (new main.core.t22964(self__.owner,self__.data,self__.hello_world_widget,meta22965__$1));
});
main.core.__GT_t22964 = (function __GT_t22964(owner__$1,data__$1,hello_world_widget__$1,meta22965){return (new main.core.t22964(owner__$1,data__$1,hello_world_widget__$1,meta22965));
});
}
return (new main.core.t22964(owner,data,hello_world_widget,null));
});
main.core.counter = (function counter(data,owner_component){if(typeof main.core.t22970 !== 'undefined')
{} else
{
/**
* @constructor
*/
main.core.t22970 = (function (owner_component,data,counter,meta22971){
this.owner_component = owner_component;
this.data = data;
this.counter = counter;
this.meta22971 = meta22971;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
main.core.t22970.cljs$lang$type = true;
main.core.t22970.cljs$lang$ctorStr = "main.core/t22970";
main.core.t22970.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"main.core/t22970");
});
main.core.t22970.prototype.om$core$IRender$ = true;
main.core.t22970.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var n = om.core.get_state.call(null,self__.owner_component,new cljs.core.Keyword(null,"number","number",4274507451));console.log("Rendering n: ",n);
return React.DOM.div(null,React.DOM.h2(null,new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(self__.data)),React.DOM.button({"onClick": (function (){return om.core.set_state_BANG_.call(null,self__.owner_component,new cljs.core.Keyword(null,"number","number",4274507451),(n + 1));
})},"Click Me!"),React.DOM.p(null,[cljs.core.str("My State: "),cljs.core.str(n)].join('')));
});
main.core.t22970.prototype.om$core$IInitState$ = true;
main.core.t22970.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",4274507451),0], null);
});
main.core.t22970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22972){var self__ = this;
var _22972__$1 = this;return self__.meta22971;
});
main.core.t22970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22972,meta22971__$1){var self__ = this;
var _22972__$1 = this;return (new main.core.t22970(self__.owner_component,self__.data,self__.counter,meta22971__$1));
});
main.core.__GT_t22970 = (function __GT_t22970(owner_component__$1,data__$1,counter__$1,meta22971){return (new main.core.t22970(owner_component__$1,data__$1,counter__$1,meta22971));
});
}
return (new main.core.t22970(owner_component,data,counter,null));
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
main.core.init_timer = (function init_timer(channel,interval){var timer = (new goog.Timer(interval));goog.events.listen(timer,goog.Timer.TICK,(function (e){var max_rpm = cljs.core.deref.call(null,main.core.app_state).call(null,new cljs.core.Keyword(null,"max-rpm","max-rpm",1856861560));var new_rpm = main.core.get_new_value.call(null,cljs.core.deref.call(null,main.core.app_state),new cljs.core.Keyword(null,"rpm","rpm",1014017377),new cljs.core.Keyword(null,"max-rpm","max-rpm",1856861560),((function (max_rpm){
return (function (p1__22973_SHARP_){return (10 + p1__22973_SHARP_);
});})(max_rpm))
);var new_speed = main.core.get_new_value.call(null,cljs.core.deref.call(null,main.core.app_state),new cljs.core.Keyword(null,"speed","speed",1123546041),new cljs.core.Keyword(null,"max-speed","max-speed",3642954256),((function (max_rpm,new_rpm){
return (function (p1__22974_SHARP_){return (((1 / (new_rpm / max_rpm)) | 0) + p1__22974_SHARP_);
});})(max_rpm,new_rpm))
);cljs.core.swap_BANG_.call(null,main.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"rpm","rpm",1014017377),new_rpm);
cljs.core.swap_BANG_.call(null,main.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"speed","speed",1123546041),new_speed);
return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rpm","rpm",1014017377),new_rpm,new cljs.core.Keyword(null,"speed","speed",1123546041),new_speed], null));
}));
timer.start();
return timer;
});
main.core.init_user_input = (function init_user_input(channel){return goog.events.listen(window,goog.events.EventType.KEYDOWN,(function (e){var new_gear = main.core.get_new_value.call(null,cljs.core.deref.call(null,main.core.app_state),new cljs.core.Keyword(null,"gear","gear",1017072897),new cljs.core.Keyword(null,"max-gear","max-gear",1375438794));var new_rpm = 0;cljs.core.swap_BANG_.call(null,main.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"gear","gear",1017072897),new_gear);
cljs.core.swap_BANG_.call(null,main.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"rpm","rpm",1014017377),new_rpm);
return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gear","gear",1017072897),new_gear,new cljs.core.Keyword(null,"rpm","rpm",1014017377),new_rpm], null));
}));
});
main.core.start = (function start(){var channel = cljs.core.async.chan.call(null);return om.core.root.call(null,cljs.core.deref.call(null,main.core.app_state),(function (state,component){main.core.init_timer.call(null,channel,main.core.timer_int);
main.core.init_user_input.call(null,channel);
if(typeof main.core.t23035 !== 'undefined')
{} else
{
/**
* @constructor
*/
main.core.t23035 = (function (component,state,channel,start,meta23036){
this.component = component;
this.state = state;
this.channel = channel;
this.start = start;
this.meta23036 = meta23036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
main.core.t23035.cljs$lang$type = true;
main.core.t23035.cljs$lang$ctorStr = "main.core/t23035";
main.core.t23035.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"main.core/t23035");
});
main.core.t23035.prototype.om$core$IRender$ = true;
main.core.t23035.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.h2(null,"Your stats:"),React.DOM.p(null,[cljs.core.str(new cljs.core.Keyword(null,"rpm","rpm",1014017377)),cljs.core.str(" "),cljs.core.str(om.core.get_state.call(null,self__.component,new cljs.core.Keyword(null,"rpm","rpm",1014017377)))].join('')),React.DOM.p(null,[cljs.core.str(new cljs.core.Keyword(null,"speed","speed",1123546041)),cljs.core.str(" "),cljs.core.str(om.core.get_state.call(null,self__.component,new cljs.core.Keyword(null,"speed","speed",1123546041)))].join('')),React.DOM.p(null,[cljs.core.str(new cljs.core.Keyword(null,"gear","gear",1017072897)),cljs.core.str(" "),cljs.core.str(om.core.get_state.call(null,self__.component,new cljs.core.Keyword(null,"gear","gear",1017072897)))].join('')));
});
main.core.t23035.prototype.om$core$IWillMount$ = true;
main.core.t23035.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6929__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6930__auto__ = (function (){var switch__6859__auto__ = (function (state_23067){var state_val_23068 = (state_23067[1]);if((state_val_23068 === 1))
{var state_23067__$1 = state_23067;var statearr_23069_23095 = state_23067__$1;(statearr_23069_23095[2] = null);
(statearr_23069_23095[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23068 === 2))
{var state_23067__$1 = state_23067;if(true)
{var statearr_23070_23096 = state_23067__$1;(statearr_23070_23096[1] = 4);
} else
{var statearr_23071_23097 = state_23067__$1;(statearr_23071_23097[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23068 === 3))
{var inst_23065 = (state_23067[2]);var state_23067__$1 = state_23067;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23067__$1,inst_23065);
} else
{if((state_val_23068 === 4))
{var state_23067__$1 = state_23067;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23067__$1,7,self__.channel);
} else
{if((state_val_23068 === 5))
{var state_23067__$1 = state_23067;var statearr_23072_23098 = state_23067__$1;(statearr_23072_23098[2] = null);
(statearr_23072_23098[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23068 === 6))
{var inst_23063 = (state_23067[2]);var state_23067__$1 = state_23067;var statearr_23073_23099 = state_23067__$1;(statearr_23073_23099[2] = inst_23063);
(statearr_23073_23099[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23068 === 7))
{var inst_23042 = (state_23067[7]);var inst_23041 = (state_23067[8]);var inst_23041__$1 = (state_23067[2]);var inst_23042__$1 = inst_23041__$1.call(null,new cljs.core.Keyword(null,"speed","speed",1123546041));var state_23067__$1 = (function (){var statearr_23074 = state_23067;(statearr_23074[7] = inst_23042__$1);
(statearr_23074[8] = inst_23041__$1);
return statearr_23074;
})();if(cljs.core.truth_(inst_23042__$1))
{var statearr_23075_23100 = state_23067__$1;(statearr_23075_23100[1] = 8);
} else
{var statearr_23076_23101 = state_23067__$1;(statearr_23076_23101[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23068 === 8))
{var inst_23042 = (state_23067[7]);var inst_23041 = (state_23067[8]);var inst_23044 = console.log("Timer msg received.. ");var inst_23045 = inst_23041.call(null,new cljs.core.Keyword(null,"rpm","rpm",1014017377));var inst_23046 = om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"rpm","rpm",1014017377),inst_23045);var inst_23047 = om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"speed","speed",1123546041),inst_23042);var state_23067__$1 = (function (){var statearr_23077 = state_23067;(statearr_23077[9] = inst_23046);
(statearr_23077[10] = inst_23044);
return statearr_23077;
})();var statearr_23078_23102 = state_23067__$1;(statearr_23078_23102[2] = inst_23047);
(statearr_23078_23102[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23068 === 9))
{var state_23067__$1 = state_23067;var statearr_23079_23103 = state_23067__$1;(statearr_23079_23103[2] = null);
(statearr_23079_23103[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23068 === 10))
{var inst_23041 = (state_23067[8]);var inst_23051 = (state_23067[11]);var inst_23050 = (state_23067[2]);var inst_23051__$1 = inst_23041.call(null,new cljs.core.Keyword(null,"gear","gear",1017072897));var state_23067__$1 = (function (){var statearr_23080 = state_23067;(statearr_23080[12] = inst_23050);
(statearr_23080[11] = inst_23051__$1);
return statearr_23080;
})();if(cljs.core.truth_(inst_23051__$1))
{var statearr_23081_23104 = state_23067__$1;(statearr_23081_23104[1] = 11);
} else
{var statearr_23082_23105 = state_23067__$1;(statearr_23082_23105[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23068 === 11))
{var inst_23041 = (state_23067[8]);var inst_23051 = (state_23067[11]);var inst_23053 = console.log("Keydown msg received.. ");var inst_23054 = om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"gear","gear",1017072897),inst_23051);var inst_23055 = inst_23041.call(null,new cljs.core.Keyword(null,"rpm","rpm",1014017377));var inst_23056 = om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"rpm","rpm",1014017377),inst_23055);var state_23067__$1 = (function (){var statearr_23083 = state_23067;(statearr_23083[13] = inst_23053);
(statearr_23083[14] = inst_23054);
return statearr_23083;
})();var statearr_23084_23106 = state_23067__$1;(statearr_23084_23106[2] = inst_23056);
(statearr_23084_23106[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23068 === 12))
{var state_23067__$1 = state_23067;var statearr_23085_23107 = state_23067__$1;(statearr_23085_23107[2] = null);
(statearr_23085_23107[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23068 === 13))
{var inst_23059 = (state_23067[2]);var state_23067__$1 = (function (){var statearr_23086 = state_23067;(statearr_23086[15] = inst_23059);
return statearr_23086;
})();var statearr_23087_23108 = state_23067__$1;(statearr_23087_23108[2] = null);
(statearr_23087_23108[1] = 2);
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
});return ((function (switch__6859__auto__){
return (function() {
var state_machine__6860__auto__ = null;
var state_machine__6860__auto____0 = (function (){var statearr_23091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23091[0] = state_machine__6860__auto__);
(statearr_23091[1] = 1);
return statearr_23091;
});
var state_machine__6860__auto____1 = (function (state_23067){while(true){
var ret_value__6861__auto__ = (function (){try{while(true){
var result__6862__auto__ = switch__6859__auto__.call(null,state_23067);if(cljs.core.keyword_identical_QMARK_.call(null,result__6862__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6862__auto__;
}
break;
}
}catch (e23092){if((e23092 instanceof Object))
{var ex__6863__auto__ = e23092;var statearr_23093_23109 = state_23067;(statearr_23093_23109[5] = ex__6863__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23067);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23092;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23110 = state_23067;
state_23067 = G__23110;
continue;
}
} else
{return ret_value__6861__auto__;
}
break;
}
});
state_machine__6860__auto__ = function(state_23067){
switch(arguments.length){
case 0:
return state_machine__6860__auto____0.call(this);
case 1:
return state_machine__6860__auto____1.call(this,state_23067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6860__auto____0;
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6860__auto____1;
return state_machine__6860__auto__;
})()
;})(switch__6859__auto__))
})();var state__6931__auto__ = (function (){var statearr_23094 = f__6930__auto__.call(null);(statearr_23094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6929__auto__);
return statearr_23094;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6931__auto__);
}));
return c__6929__auto__;
});
main.core.t23035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23037){var self__ = this;
var _23037__$1 = this;return self__.meta23036;
});
main.core.t23035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23037,meta23036__$1){var self__ = this;
var _23037__$1 = this;return (new main.core.t23035(self__.component,self__.state,self__.channel,self__.start,meta23036__$1));
});
main.core.__GT_t23035 = (function __GT_t23035(component__$1,state__$1,channel__$1,start__$1,meta23036){return (new main.core.t23035(component__$1,state__$1,channel__$1,start__$1,meta23036));
});
}
return (new main.core.t23035(component,state,channel,start,null));
}),document.getElementById("some-id"));
});
main.core.start.call(null);

//# sourceMappingURL=core.js.map