// Compiled by ClojureScript 0.0-2138
goog.provide('om_sandbox.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
om_sandbox.core.hello_world_widget = (function hello_world_widget(data,owner){if(typeof om_sandbox.core.t5524 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_sandbox.core.t5524 = (function (owner,data,hello_world_widget,meta5525){
this.owner = owner;
this.data = data;
this.hello_world_widget = hello_world_widget;
this.meta5525 = meta5525;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_sandbox.core.t5524.cljs$lang$type = true;
om_sandbox.core.t5524.cljs$lang$ctorStr = "om-sandbox.core/t5524";
om_sandbox.core.t5524.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"om-sandbox.core/t5524");
});
om_sandbox.core.t5524.prototype.om$core$IRender$ = true;
om_sandbox.core.t5524.prototype.om$core$IRender$render$arity$1 = (function (this__4931__auto__){var self__ = this;
var this__4931__auto____$1 = this;return React.DOM.div(null,"Hello World");
});
om_sandbox.core.t5524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5526){var self__ = this;
var _5526__$1 = this;return self__.meta5525;
});
om_sandbox.core.t5524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5526,meta5525__$1){var self__ = this;
var _5526__$1 = this;return (new om_sandbox.core.t5524(self__.owner,self__.data,self__.hello_world_widget,meta5525__$1));
});
om_sandbox.core.__GT_t5524 = (function __GT_t5524(owner__$1,data__$1,hello_world_widget__$1,meta5525){return (new om_sandbox.core.t5524(owner__$1,data__$1,hello_world_widget__$1,meta5525));
});
}
return (new om_sandbox.core.t5524(owner,data,hello_world_widget,null));
});
om.core.root.call(null,cljs.core.PersistentArrayMap.EMPTY,om_sandbox.core.hello_world_widget,document.getElementById("some-id"));

//# sourceMappingURL=core.js.map