(this.webpackJsonpwallet_app=this.webpackJsonpwallet_app||[]).push([[91],{328:function(t,e,n){"use strict";n.r(e),n.d(e,"pwa_camera_modal_instance",(function(){return a}));var o=n(63),r=function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function a(t){try{l(o.next(t))}catch(e){i(e)}}function c(t){try{l(o.throw(t))}catch(e){i(e)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}l((o=o.apply(t,e||[])).next())}))},i=function(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(c){i=[6,c],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},a=function(){function t(t){Object(o.h)(this,t),this.onPhoto=Object(o.d)(this,"onPhoto",7)}return t.prototype.handlePhoto=function(t){return r(this,void 0,void 0,(function(){return i(this,(function(e){return this.onPhoto.emit(t),[2]}))}))},t.prototype.handleBackdropClick=function(t){t.target!==this.el&&this.onPhoto.emit(null)},t.prototype.handleComponentClick=function(t){t.stopPropagation()},t.prototype.handleBackdropKeyUp=function(t){"Escape"===t.key&&this.onPhoto.emit(null)},t.prototype.render=function(){var t=this;return Object(o.g)("div",{class:"wrapper",onClick:function(e){return t.handleBackdropClick(e)}},Object(o.g)("div",{class:"content"},Object(o.g)("pwa-camera",{onClick:function(e){return t.handleComponentClick(e)},onPhoto:function(e){return t.handlePhoto(e)}})))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:var(--inset-width);height:var(--inset-height)}@media only screen and (max-width:600px){.content{width:100%;height:100%}}"},enumerable:!0,configurable:!0}),t}()}}]);
//# sourceMappingURL=91.c54c1e68.chunk.js.map