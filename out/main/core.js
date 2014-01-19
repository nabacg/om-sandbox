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
main.core.hello_world_widget = (function hello_world_widget(data,owner){if(typeof main.core.t25814 !== 'undefined')
{} else
{
/**
* @constructor
*/
main.core.t25814 = (function (owner,data,hello_world_widget,meta25815){
this.owner = owner;
this.data = data;
this.hello_world_widget = hello_world_widget;
this.meta25815 = meta25815;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
main.core.t25814.cljs$lang$type = true;
main.core.t25814.cljs$lang$ctorStr = "main.core/t25814";
main.core.t25814.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"main.core/t25814");
});
main.core.t25814.prototype.om$core$IRender$ = true;
main.core.t25814.prototype.om$core$IRender$render$arity$1 = (function (this__4931__auto__){var self__ = this;
var this__4931__auto____$1 = this;return React.DOM.div(null,[cljs.core.str("Hello World"),cljs.core.str(self__.owner)].join(''));
});
main.core.t25814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25816){var self__ = this;
var _25816__$1 = this;return self__.meta25815;
});
main.core.t25814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25816,meta25815__$1){var self__ = this;
var _25816__$1 = this;return (new main.core.t25814(self__.owner,self__.data,self__.hello_world_widget,meta25815__$1));
});
main.core.__GT_t25814 = (function __GT_t25814(owner__$1,data__$1,hello_world_widget__$1,meta25815){return (new main.core.t25814(owner__$1,data__$1,hello_world_widget__$1,meta25815));
});
}
return (new main.core.t25814(owner,data,hello_world_widget,null));
});
main.core.counter = (function counter(data,owner_component){if(typeof main.core.t25820 !== 'undefined')
{} else
{
/**
* @constructor
*/
main.core.t25820 = (function (owner_component,data,counter,meta25821){
this.owner_component = owner_component;
this.data = data;
this.counter = counter;
this.meta25821 = meta25821;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
main.core.t25820.cljs$lang$type = true;
main.core.t25820.cljs$lang$ctorStr = "main.core/t25820";
main.core.t25820.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"main.core/t25820");
});
main.core.t25820.prototype.om$core$IRender$ = true;
main.core.t25820.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var n = om.core.get_state.call(null,self__.owner_component,new cljs.core.Keyword(null,"number","number",4274507451));console.log("Rendering n: ",n);
return React.DOM.div(null,React.DOM.h2(null,new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(self__.data)),React.DOM.button({"onClick": (function (){return om.core.set_state_BANG_.call(null,self__.owner_component,new cljs.core.Keyword(null,"number","number",4274507451),(n + 1));
})},"Click Me!"),React.DOM.p(null,[cljs.core.str("My State: "),cljs.core.str(n)].join('')));
});
main.core.t25820.prototype.om$core$IInitState$ = true;
main.core.t25820.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",4274507451),0], null);
});
main.core.t25820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25822){var self__ = this;
var _25822__$1 = this;return self__.meta25821;
});
main.core.t25820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25822,meta25821__$1){var self__ = this;
var _25822__$1 = this;return (new main.core.t25820(self__.owner_component,self__.data,self__.counter,meta25821__$1));
});
main.core.__GT_t25820 = (function __GT_t25820(owner_component__$1,data__$1,counter__$1,meta25821){return (new main.core.t25820(owner_component__$1,data__$1,counter__$1,meta25821));
});
}
return (new main.core.t25820(owner_component,data,counter,null));
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
return (function (p1__25823_SHARP_){return (100 + p1__25823_SHARP_);
});})(max_rpm))
);var new_speed = main.core.get_new_value.call(null,cljs.core.deref.call(null,main.core.app_state),new cljs.core.Keyword(null,"speed","speed",1123546041),new cljs.core.Keyword(null,"max-speed","max-speed",3642954256),((function (max_rpm,new_rpm){
return (function (p1__25824_SHARP_){return main.core.calc_new_speed.call(null,p1__25824_SHARP_,new_rpm,max_rpm);
});})(max_rpm,new_rpm))
);cljs.core.swap_BANG_.call(null,main.core.app_state,(function (prev_state){return cljs.core.assoc.call(null,cljs.core.assoc.call(null,prev_state,new cljs.core.Keyword(null,"rpm","rpm",1014017377),new_rpm),new cljs.core.Keyword(null,"speed","speed",1123546041),new_speed);
}));
return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rpm","rpm",1014017377),new_rpm,new cljs.core.Keyword(null,"speed","speed",1123546041),new_speed], null));
}));
timer.start();
return timer;
});
main.core.init_user_input = (function init_user_input(channel){return goog.events.listen(window,goog.events.EventType.KEYDOWN,(function (e){var new_gear = main.core.get_new_value.call(null,cljs.core.deref.call(null,main.core.app_state),new cljs.core.Keyword(null,"gear","gear",1017072897),new cljs.core.Keyword(null,"max-gear","max-gear",1375438794));var new_rpm = 0;cljs.core.swap_BANG_.call(null,main.core.app_state,(function (prev_state){return cljs.core.assoc.call(null,cljs.core.assoc.call(null,prev_state,new cljs.core.Keyword(null,"gear","gear",1017072897),new_gear),new cljs.core.Keyword(null,"rpm","rpm",1014017377),new_rpm);
}));
return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gear","gear",1017072897),new_gear,new cljs.core.Keyword(null,"rpm","rpm",1014017377),new_rpm], null));
}));
});
main.core.start = (function start(){var channel = cljs.core.async.chan.call(null);return om.core.root.call(null,cljs.core.deref.call(null,main.core.app_state),(function (state,component){main.core.init_timer.call(null,channel,main.core.timer_int);
main.core.init_user_input.call(null,channel);
if(typeof main.core.t25885 !== 'undefined')
{} else
{
/**
* @constructor
*/
main.core.t25885 = (function (component,state,channel,start,meta25886){
this.component = component;
this.state = state;
this.channel = channel;
this.start = start;
this.meta25886 = meta25886;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
main.core.t25885.cljs$lang$type = true;
main.core.t25885.cljs$lang$ctorStr = "main.core/t25885";
main.core.t25885.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"main.core/t25885");
});
main.core.t25885.prototype.om$core$IRender$ = true;
main.core.t25885.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.h2(null,"Your stats:"),React.DOM.p(null,[cljs.core.str(new cljs.core.Keyword(null,"rpm","rpm",1014017377)),cljs.core.str(" "),cljs.core.str(om.core.get_state.call(null,self__.component,new cljs.core.Keyword(null,"rpm","rpm",1014017377)))].join('')),React.DOM.p(null,[cljs.core.str(new cljs.core.Keyword(null,"speed","speed",1123546041)),cljs.core.str(" "),cljs.core.str(om.core.get_state.call(null,self__.component,new cljs.core.Keyword(null,"speed","speed",1123546041)))].join('')),React.DOM.p(null,[cljs.core.str(new cljs.core.Keyword(null,"gear","gear",1017072897)),cljs.core.str(" "),cljs.core.str(om.core.get_state.call(null,self__.component,new cljs.core.Keyword(null,"gear","gear",1017072897)))].join('')));
});
main.core.t25885.prototype.om$core$IWillMount$ = true;
main.core.t25885.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6929__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6930__auto__ = (function (){var switch__6859__auto__ = (function (state_25917){var state_val_25918 = (state_25917[1]);if((state_val_25918 === 1))
{var state_25917__$1 = state_25917;var statearr_25919_25945 = state_25917__$1;(statearr_25919_25945[2] = null);
(statearr_25919_25945[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25918 === 2))
{var state_25917__$1 = state_25917;if(true)
{var statearr_25920_25946 = state_25917__$1;(statearr_25920_25946[1] = 4);
} else
{var statearr_25921_25947 = state_25917__$1;(statearr_25921_25947[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25918 === 3))
{var inst_25915 = (state_25917[2]);var state_25917__$1 = state_25917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25917__$1,inst_25915);
} else
{if((state_val_25918 === 4))
{var state_25917__$1 = state_25917;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25917__$1,7,self__.channel);
} else
{if((state_val_25918 === 5))
{var state_25917__$1 = state_25917;var statearr_25922_25948 = state_25917__$1;(statearr_25922_25948[2] = null);
(statearr_25922_25948[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25918 === 6))
{var inst_25913 = (state_25917[2]);var state_25917__$1 = state_25917;var statearr_25923_25949 = state_25917__$1;(statearr_25923_25949[2] = inst_25913);
(statearr_25923_25949[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25918 === 7))
{var inst_25891 = (state_25917[7]);var inst_25892 = (state_25917[8]);var inst_25891__$1 = (state_25917[2]);var inst_25892__$1 = inst_25891__$1.call(null,new cljs.core.Keyword(null,"speed","speed",1123546041));var state_25917__$1 = (function (){var statearr_25924 = state_25917;(statearr_25924[7] = inst_25891__$1);
(statearr_25924[8] = inst_25892__$1);
return statearr_25924;
})();if(cljs.core.truth_(inst_25892__$1))
{var statearr_25925_25950 = state_25917__$1;(statearr_25925_25950[1] = 8);
} else
{var statearr_25926_25951 = state_25917__$1;(statearr_25926_25951[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25918 === 8))
{var inst_25891 = (state_25917[7]);var inst_25892 = (state_25917[8]);var inst_25894 = console.log("Timer msg received.. ");var inst_25895 = inst_25891.call(null,new cljs.core.Keyword(null,"rpm","rpm",1014017377));var inst_25896 = om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"rpm","rpm",1014017377),inst_25895);var inst_25897 = om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"speed","speed",1123546041),inst_25892);var state_25917__$1 = (function (){var statearr_25927 = state_25917;(statearr_25927[9] = inst_25894);
(statearr_25927[10] = inst_25896);
return statearr_25927;
})();var statearr_25928_25952 = state_25917__$1;(statearr_25928_25952[2] = inst_25897);
(statearr_25928_25952[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25918 === 9))
{var state_25917__$1 = state_25917;var statearr_25929_25953 = state_25917__$1;(statearr_25929_25953[2] = null);
(statearr_25929_25953[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25918 === 10))
{var inst_25891 = (state_25917[7]);var inst_25901 = (state_25917[11]);var inst_25900 = (state_25917[2]);var inst_25901__$1 = inst_25891.call(null,new cljs.core.Keyword(null,"gear","gear",1017072897));var state_25917__$1 = (function (){var statearr_25930 = state_25917;(statearr_25930[12] = inst_25900);
(statearr_25930[11] = inst_25901__$1);
return statearr_25930;
})();if(cljs.core.truth_(inst_25901__$1))
{var statearr_25931_25954 = state_25917__$1;(statearr_25931_25954[1] = 11);
} else
{var statearr_25932_25955 = state_25917__$1;(statearr_25932_25955[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25918 === 11))
{var inst_25891 = (state_25917[7]);var inst_25901 = (state_25917[11]);var inst_25903 = console.log("Keydown msg received.. ");var inst_25904 = om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"gear","gear",1017072897),inst_25901);var inst_25905 = inst_25891.call(null,new cljs.core.Keyword(null,"rpm","rpm",1014017377));var inst_25906 = om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"rpm","rpm",1014017377),inst_25905);var state_25917__$1 = (function (){var statearr_25933 = state_25917;(statearr_25933[13] = inst_25904);
(statearr_25933[14] = inst_25903);
return statearr_25933;
})();var statearr_25934_25956 = state_25917__$1;(statearr_25934_25956[2] = inst_25906);
(statearr_25934_25956[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25918 === 12))
{var state_25917__$1 = state_25917;var statearr_25935_25957 = state_25917__$1;(statearr_25935_25957[2] = null);
(statearr_25935_25957[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25918 === 13))
{var inst_25909 = (state_25917[2]);var state_25917__$1 = (function (){var statearr_25936 = state_25917;(statearr_25936[15] = inst_25909);
return statearr_25936;
})();var statearr_25937_25958 = state_25917__$1;(statearr_25937_25958[2] = null);
(statearr_25937_25958[1] = 2);
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
var state_machine__6860__auto____0 = (function (){var statearr_25941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25941[0] = state_machine__6860__auto__);
(statearr_25941[1] = 1);
return statearr_25941;
});
var state_machine__6860__auto____1 = (function (state_25917){while(true){
var ret_value__6861__auto__ = (function (){try{while(true){
var result__6862__auto__ = switch__6859__auto__.call(null,state_25917);if(cljs.core.keyword_identical_QMARK_.call(null,result__6862__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6862__auto__;
}
break;
}
}catch (e25942){if((e25942 instanceof Object))
{var ex__6863__auto__ = e25942;var statearr_25943_25959 = state_25917;(statearr_25943_25959[5] = ex__6863__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25917);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25942;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25960 = state_25917;
state_25917 = G__25960;
continue;
}
} else
{return ret_value__6861__auto__;
}
break;
}
});
state_machine__6860__auto__ = function(state_25917){
switch(arguments.length){
case 0:
return state_machine__6860__auto____0.call(this);
case 1:
return state_machine__6860__auto____1.call(this,state_25917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6860__auto____0;
state_machine__6860__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6860__auto____1;
return state_machine__6860__auto__;
})()
;})(switch__6859__auto__))
})();var state__6931__auto__ = (function (){var statearr_25944 = f__6930__auto__.call(null);(statearr_25944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6929__auto__);
return statearr_25944;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6931__auto__);
}));
return c__6929__auto__;
});
main.core.t25885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25887){var self__ = this;
var _25887__$1 = this;return self__.meta25886;
});
main.core.t25885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25887,meta25886__$1){var self__ = this;
var _25887__$1 = this;return (new main.core.t25885(self__.component,self__.state,self__.channel,self__.start,meta25886__$1));
});
main.core.__GT_t25885 = (function __GT_t25885(component__$1,state__$1,channel__$1,start__$1,meta25886){return (new main.core.t25885(component__$1,state__$1,channel__$1,start__$1,meta25886));
});
}
return (new main.core.t25885(component,state,channel,start,null));
}),document.getElementById("some-id"));
});
main.core.start.call(null);

//# sourceMappingURL=core.js.map