!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.MiniVdom=t():e.MiniVdom=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=1)}([function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r.hook=r.hook||{},this.type=t,this.data=r,this.children=n,this.text=o,this.elm=a,this.key=r.key}var t,r,o;return t=e,o=[{key:"isVNode",value:function(t){return t instanceof e}},{key:"isSameVNode",value:function(e,t){return e.key===t.key&&e.type===t.type}}],(r=null)&&n(t.prototype,r),o&&n(t,o),e}();t.default=o},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(2));t.patch=o.default;var a=n(r(7));t.h=a.default;var u=n(r(0));t.VNode=u.default,t.default={patch:o.default,h:a.default,VNode:u.default}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(0)),a=n(r(3)),u=n(r(4)),i=n(r(5)),l=r(6),f=new o.default("");t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={create:[],insert:[],update:[],destroy:[],remove:[]},r=!0,n=!1,a=void 0;try{for(var u,i=function(){var e=u.value;l.hooks.forEach((function(r){return e[r]&&t[r].push(e[r])}))},d=e[Symbol.iterator]();!(r=(u=d.next()).done);r=!0)i()}catch(e){n=!0,a=e}finally{try{r||null==d.return||d.return()}finally{if(n)throw a}}function c(e,r,n){for(var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n.length-1,u=function(){var a=n[o];e.insertBefore(function e(r){return"!"===r.type?r.elm=document.createComment(r.text):r.type?(r.elm=r.data.ns?document.createElementNS(r.data.ns,r.type):document.createElement(r.type),r.children&&r.children.forEach((function(t){r.elm.appendChild(e(t))})),r.text&&r.text.length&&r.elm.appendChild(document.createTextNode(r.text))):r.elm=document.createTextNode(r.text),t.create.forEach((function(e){return e(f,r)})),r.data.hook.create&&r.data.hook.create(),r.elm}(a),r),t.insert.forEach((function(e){return e(f,a)})),a.data.hook.insert&&a.data.hook.insert()};o<=a;o++)u()}function s(e,r){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r.length-1,a=function(){var o=r[n];e&&e.removeChild(o.elm),t.destroy.forEach((function(e){return e(o,f)})),o.data.hook.destroy&&o.data.hook.destroy()};n<=o;n++)a()}function p(e,r){var n=r.elm=e.elm,a=e.children,u=r.children;e!==r&&(void 0===r.text||r.text===e.text?(a&&u?a!==u&&function(e,t,r){for(var n=t.slice(),a=function(t){var a=r[t],u=n.findIndex((function(e){return e&&o.default.isSameVNode(e,a)}));if(~u){var i=n[u];n[u]=void 0,u!==t&&e.insertBefore(i.elm,e.children[t+1]),p(i,a)}else c(e,e.children[t+1],[a])},u=0;u<r.length;u++)a(u);var i=n.filter((function(e){return!!e}));i.length&&s(e,i)}(n,a,u):u?(e.text&&(n.textContent=""),c(n,null,u)):a?(s(n,a),r.text&&(n.textContent=r.text)):e.text!==r.text&&(n.textContent=r.text),t.update.forEach((function(t){return t(e,r)})),r.data.hook.update&&r.data.hook.update()):n.textContent=r.text)}return function(e,r){if(o.default.isVNode(e)||(e=new o.default("",{},[],void 0,e)),o.default.isSameVNode(e,r))p(e,r);else{var n=e.elm;c(n.parentNode,n,[r]),s(n.parentNode,[e]),t.insert.forEach((function(t){return t(e,r)}))}return r}}([a.default,u.default,i.default])},function(e,t,r){"use strict";function n(e,t){var r=e.data.attrs,n=t.data.attrs,o=t.elm;if((r||n)&&r!==n){for(var a in r=r||{},n=n||{}){var u=n[a];u!==r[a]&&o.setAttribute(a,u+"")}for(var i in r)i in n||o.removeAttribute(i)}}Object.defineProperty(t,"__esModule",{value:!0}),t.updateAttrs=n,t.attrsModule={create:n,update:n},t.default=t.attrsModule},function(e,t,r){"use strict";function n(e,t){var r=e.data.props,n=t.data.props,o=t.elm;if((r||n)&&r!==n){for(var a in n=n||{},r=r||{})n[a]||delete o[a];for(var u in n)n[u]!==r[u]&&(o[u]=n[u])}}Object.defineProperty(t,"__esModule",{value:!0}),t.updateProp=n,t.propsModule={create:n,update:n},t.default=t.propsModule},function(e,t,r){"use strict";function n(e,t){var r=e.data.on,n=e.elm,o=t.data.on,a=t.elm;if(r!==o){if(r)for(var u in r)n.removeEventListener(u,r[u]);if(o)for(var i in o)a.addEventListener(i,o[i])}}Object.defineProperty(t,"__esModule",{value:!0}),t.EventModule={create:n,update:n,destroy:n},t.default=t.EventModule},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hooks=["create","insert","update","destroy","remove"]},function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(0)),u=r(8);t.default=function e(t,r,o){var i,l,f,d=u.getType(r),c=u.getType(o);if("object"===d?(i=r,"array"===c?f=o:"string"===c&&(l=o)):"array"===d?f=r:"string"===d&&(l=r),t&&null!=l&&(f=[e("",l)],l=void 0),t.length){i=i||{};var s=t.match(/#([^#\.\[\]]+)/);s&&(i.props=i.props||{},i.props.id=s[1]);var p=u.getMatchList(t,/\.([^#\.\[\]]+)/g).map((function(e){return e[1]}));p.length&&(i.attrs=i.attrs||{},i.attrs.class&&p.push.apply(p,n(i.attrs.class.split(" ").filter((function(e){return e&&e.length})))),i.attrs.class=p.join(" "));var v=u.getMatchList(t,/\[(\S+?)=(\S+?)\]/g);v.length&&(i.attrs=i.attrs||{},v.forEach((function(e){i.attrs[e[1]]=e[2]}))),t=t.replace(/(#|\.|\[)\S*/g,"").toLowerCase().trim()}var h=new a.default(t,i,f,l);return"svg"===h.type&&function e(t){t.type&&(t.data.ns="http://www.w3.org/2000/svg",t.children&&t.children.length&&t.children.forEach((function(t){return e(t)})))}(h),h}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getType=function(e){return Object.prototype.toString.call(e).toLowerCase().match(/\s(\S+?)\]/)[1]},t.getMatchList=function(e,t){for(var r,n=[];r=t.exec(e);)n.push([].slice.call(r));return n}}]).default}));