/*! For license information please see 88.26576ad2.chunk.js.LICENSE.txt */
(this.webpackJsonpnano_connect_terminal=this.webpackJsonpnano_connect_terminal||[]).push([[88],{348:function(t,e,n){"use strict";n.r(e),n.d(e,"scopeCss",(function(){return C}));var r=n(25),o=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",c=new RegExp("(-shadowcsshost"+o,"gim"),s=new RegExp("(-shadowcsscontext"+o,"gim"),a=new RegExp("(-shadowcssslotted"+o,"gim"),i=/-shadowcsshost-no-combinator([^\s]*)/,u=[/::shadow/g,/::content/g],l=/-shadowcsshost/gim,h=/:host/gim,p=/::slotted/gim,f=/:host-context/gim,d=/\/\*\s*[\s\S]*?\*\//g,g=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,m=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,v=/([{}])/g,w=function(t,e){var n=_(t),r=0;return n.escapedString.replace(m,(function(){var t=arguments.length<=2?void 0:arguments[2],o="",c=arguments.length<=4?void 0:arguments[4],s="";c&&c.startsWith("{%BLOCK%")&&(o=n.blocks[r++],c=c.substring("%BLOCK%".length+1),s="{");var a={selector:t,content:o},i=e(a);return"".concat(arguments.length<=1?void 0:arguments[1]).concat(i.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(s).concat(i.content).concat(c)}))},_=function(t){for(var e=t.split(v),n=[],r=[],o=0,c=[],s=0;s<e.length;s++){var a=e[s];"}"===a&&o--,o>0?c.push(a):(c.length>0&&(r.push(c.join("")),n.push("%BLOCK%"),c=[]),n.push(a)),"{"===a&&o++}return c.length>0&&(r.push(c.join("")),n.push("%BLOCK%")),{escapedString:n.join(""),blocks:r}},x=function(t,e,n){return t.replace(e,(function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];if(e[2]){for(var o=e[2].split(","),c=[],s=0;s<o.length;s++){var a=o[s].trim();if(!a)break;c.push(n("-shadowcsshost-no-combinator",a,e[3]))}return c.join(",")}return"-shadowcsshost-no-combinator"+e[3]}))},b=function(t,e,n){return t+e.replace("-shadowcsshost","")+n},O=function(t,e,n){return e.indexOf("-shadowcsshost")>-1?b(t,e,n):t+e+n+", "+e+" "+t+n},S=function(t,e){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(e).test(t)},W=function(t,e,n){for(var r,o="."+(e=e.replace(/\[is=([^\]]*)\]/g,(function(t){return arguments.length<=1?void 0:arguments[1]}))),c=function(t){var r=t.trim();if(!r)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)r=function(t,e,n){if(l.lastIndex=0,l.test(t)){var r=".".concat(n);return t.replace(i,(function(t,e){return e.replace(/([^:]*)(:*)(.*)/,(function(t,e,n,o){return e+r+n+o}))})).replace(l,r+" ")}return e+" "+t}(t,e,n);else{var c=t.replace(l,"");if(c.length>0){var s=c.match(/([^:]*)(:*)(.*)/);s&&(r=s[1]+o+s[2]+s[3])}}return r},s=function(t){var e=[],n=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,r){var o="__ph-".concat(n,"__");return e.push(r),n++,o}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,r,o){var c="__ph-".concat(n,"__");return e.push(o),n++,r+c})),placeholders:e}}(t),a="",u=0,h=/( |>|\+|~(?!=))\s*/g,p=!((t=s.content).indexOf("-shadowcsshost-no-combinator")>-1);null!==(r=h.exec(t));){var f=r[1],d=t.slice(u,r.index).trim(),g=(p=p||d.indexOf("-shadowcsshost-no-combinator")>-1)?c(d):d;a+="".concat(g," ").concat(f," "),u=h.lastIndex}var m,v=t.substring(u);return a+=(p=p||v.indexOf("-shadowcsshost-no-combinator")>-1)?c(v):v,m=s.placeholders,a.replace(/__ph-(\d+)__/g,(function(t,e){return m[+e]}))},j=function t(e,n,r,o,c){return w(e,(function(e){var c=e.selector,s=e.content;return"@"!==e.selector[0]?c=function(t,e,n,r){return t.split(",").map((function(t){return r&&t.indexOf("."+r)>-1?t.trim():S(t,e)?W(t,e,n).trim():t.trim()})).join(", ")}(e.selector,n,r,o):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(s=t(e.content,n,r,o)),{selector:c.replace(/\s{2,}/g," ").trim(),content:s}}))},k=function(t,e,n,r,o){var i=function(t,e){var n="."+e+" > ",r=[];return t=t.replace(a,(function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];if(e[2]){for(var c=e[2].trim(),s=e[3],a=n+c+s,i="",u=e[4]-1;u>=0;u--){var l=e[5][u];if("}"===l||","===l)break;i=l+i}var h=i+a,p="".concat(i.trimRight()).concat(a.trim());if(h.trim()!==p.trim()){var f="".concat(p,", ").concat(h);r.push({orgSelector:h,updatedSelector:f})}return a}return"-shadowcsshost-no-combinator"+e[3]})),{selectors:r,cssText:t}}(t=function(t){return x(t,s,O)}(t=function(t){return x(t,c,b)}(t=t.replace(f,"-shadowcsscontext").replace(h,"-shadowcsshost").replace(p,"-shadowcssslotted"))),r);return t=function(t){return u.reduce((function(t,e){return t.replace(e," ")}),t)}(t=i.cssText),e&&(t=j(t,e,n,r)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,".".concat(n))).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:i.selectors}},C=function(t,e,n){var o=e+"-h",c=e+"-s",s=t.match(g)||[];t=function(t){return t.replace(d,"")}(t);var a=[];if(n){var i=function(t){var e="/*!@___".concat(a.length,"___*/"),n="/*!@".concat(t.selector,"*/");return a.push({placeholder:e,comment:n}),t.selector=e+t.selector,t};t=w(t,(function(t){return"@"!==t.selector[0]?i(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=w(t.content,i),t):t}))}var u=k(t,e,o,c);return t=[u.cssText].concat(Object(r.a)(s)).join("\n"),n&&a.forEach((function(e){var n=e.placeholder,r=e.comment;t=t.replace(n,r)})),u.slottedSelectors.forEach((function(e){t=t.replace(e.orgSelector,e.updatedSelector)})),t}}}]);
//# sourceMappingURL=88.26576ad2.chunk.js.map