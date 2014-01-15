// Compiled by ClojureScript 0.0-2138
goog.provide('main.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
main.core.hello_world_widget = (function hello_world_widget(data,owner){if(typeof main.core.t5596 !== 'undefined')
{} else
{
/**
* @constructor
*/
main.core.t5596 = (function (owner,data,hello_world_widget,meta5597){
this.owner = owner;
this.data = data;
this.hello_world_widget = hello_world_widget;
this.meta5597 = meta5597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
main.core.t5596.cljs$lang$type = true;
main.core.t5596.cljs$lang$ctorStr = "main.core/t5596";
main.core.t5596.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"main.core/t5596");
});
main.core.t5596.prototype.om$core$IRender$ = true;
main.core.t5596.prototype.om$core$IRender$render$arity$1 = (function (this__4931__auto__){var self__ = this;
var this__4931__auto____$1 = this;return React.DOM.div(null,[cljs.core.str("Hello World"),cljs.core.str(self__.owner)].join(''));
});
main.core.t5596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5598){var self__ = this;
var _5598__$1 = this;return self__.meta5597;
});
main.core.t5596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5598,meta5597__$1){var self__ = this;
var _5598__$1 = this;return (new main.core.t5596(self__.owner,self__.data,self__.hello_world_widget,meta5597__$1));
});
main.core.__GT_t5596 = (function __GT_t5596(owner__$1,data__$1,hello_world_widget__$1,meta5597){return (new main.core.t5596(owner__$1,data__$1,hello_world_widget__$1,meta5597));
});
}
return (new main.core.t5596(owner,data,hello_world_widget,null));
});
main.core.counter = (function counter(data,owner_control){if(typeof main.core.t5602 !== 'undefined')
{} else
{
/**
* @constructor
*/
main.core.t5602 = (function (owner_control,data,counter,meta5603){
this.owner_control = owner_control;
this.data = data;
this.counter = counter;
this.meta5603 = meta5603;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
main.core.t5602.cljs$lang$type = true;
main.core.t5602.cljs$lang$ctorStr = "main.core/t5602";
main.core.t5602.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"main.core/t5602");
});
main.core.t5602.prototype.om$core$IRender$ = true;
main.core.t5602.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var n = om.core.get_state.call(null,self__.owner_control,new cljs.core.Keyword(null,"number","number",4274507451));console.log("Rendering n: ",n);
return React.DOM.div(null,React.DOM.h2(null,new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(self__.data)),React.DOM.button({"onClick": (function (){return om.core.set_state_BANG_.call(null,self__.owner_control,new cljs.core.Keyword(null,"number","number",4274507451),(n + 1));
})},"Click Me!"),React.DOM.p(null,[cljs.core.str("My State: "),cljs.core.str(n)].join('')));
});
main.core.t5602.prototype.om$core$IInitState$ = true;
main.core.t5602.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",4274507451),0], null);
});
main.core.t5602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5604){var self__ = this;
var _5604__$1 = this;return self__.meta5603;
});
main.core.t5602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5604,meta5603__$1){var self__ = this;
var _5604__$1 = this;return (new main.core.t5602(self__.owner_control,self__.data,self__.counter,meta5603__$1));
});
main.core.__GT_t5602 = (function __GT_t5602(owner_control__$1,data__$1,counter__$1,meta5603){return (new main.core.t5602(owner_control__$1,data__$1,counter__$1,meta5603));
});
}
return (new main.core.t5602(owner_control,data,counter,null));
});
om.core.root.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"My Counter"], null),main.core.counter,document.getElementById("some-id"));

//# sourceMappingURL=core.js.map