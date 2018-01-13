!function e(t,n,r){function o(u,c){if(!n[u]){if(!t[u]){var a="function"==typeof require&&require;if(!c&&a)return a(u,!0);if(i)return i(u,!0);var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}var s=n[u]={exports:{}};t[u][0].call(s.exports,function(e){var n=t[u][1][e];return o(n||e)},s,s.exports,e,t,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,t,n){function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(f===setTimeout)return setTimeout(e,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function u(e){if(p===clearTimeout)return clearTimeout(e);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function c(){g&&d&&(g=!1,d.length?h=d.concat(h):v=-1,h.length&&a())}function a(){if(!g){var e=i(c);g=!0;for(var t=h.length;t;){for(d=h,h=[];++v<t;)d&&d[v].run();v=-1,t=h.length}d=null,g=!1,u(e)}}function l(e,t){this.fun=e,this.array=t}function s(){}var f,p,y=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(e){f=r}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(e){p=o}}();var d,h=[],g=!1,v=-1;y.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new l(e,t)),1!==h.length||g||i(a)},l.prototype.run=function(){this.fun.apply(null,this.array)},y.title="browser",y.browser=!0,y.env={},y.argv=[],y.version="",y.versions={},y.on=s,y.addListener=s,y.once=s,y.off=s,y.removeListener=s,y.removeAllListeners=s,y.emit=s,y.prependListener=s,y.prependOnceListener=s,y.listeners=function(e){return[]},y.binding=function(e){throw new Error("process.binding is not supported")},y.cwd=function(){return"/"},y.chdir=function(e){throw new Error("process.chdir is not supported")},y.umask=function(){return 0}},{}],2:[function(e,t,n){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],3:[function(e,t,n){t.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},{}],4:[function(e,t,n){(function(t,r){function o(e,t){var r={seen:[],stylize:u};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),h(t)?r.showHidden=t:t&&n._extend(r,t),j(r.showHidden)&&(r.showHidden=!1),j(r.depth)&&(r.depth=2),j(r.colors)&&(r.colors=!1),j(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=i),a(r,e,r.depth)}function i(e,t){var n=o.styles[t];return n?"["+o.colors[n][0]+"m"+e+"["+o.colors[n][1]+"m":e}function u(e,t){return e}function c(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}function a(e,t,r){if(e.customInspect&&t&&E(t.inspect)&&t.inspect!==n.inspect&&(!t.constructor||t.constructor.prototype!==t)){var o=t.inspect(r,e);return b(o)||(o=a(e,o,r)),o}var i=l(e,t);if(i)return i;var u=Object.keys(t),h=c(u);if(e.showHidden&&(u=Object.getOwnPropertyNames(t)),x(t)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return s(t);if(0===u.length){if(E(t)){var g=t.name?": "+t.name:"";return e.stylize("[Function"+g+"]","special")}if(O(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(S(t))return e.stylize(Date.prototype.toString.call(t),"date");if(x(t))return s(t)}var v="",m=!1,w=["{","}"];if(d(t)&&(m=!0,w=["[","]"]),E(t)){v=" [Function"+(t.name?": "+t.name:"")+"]"}if(O(t)&&(v=" "+RegExp.prototype.toString.call(t)),S(t)&&(v=" "+Date.prototype.toUTCString.call(t)),x(t)&&(v=" "+s(t)),0===u.length&&(!m||0==t.length))return w[0]+v+w[1];if(r<0)return O(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special");e.seen.push(t);var j;return j=m?f(e,t,r,h,u):u.map(function(n){return p(e,t,r,h,n,m)}),e.seen.pop(),y(j,v,w)}function l(e,t){if(j(t))return e.stylize("undefined","undefined");if(b(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return m(t)?e.stylize(""+t,"number"):h(t)?e.stylize(""+t,"boolean"):g(t)?e.stylize("null","null"):void 0}function s(e){return"["+Error.prototype.toString.call(e)+"]"}function f(e,t,n,r,o){for(var i=[],u=0,c=t.length;u<c;++u)C(t,String(u))?i.push(p(e,t,n,r,String(u),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(p(e,t,n,r,o,!0))}),i}function p(e,t,n,r,o,i){var u,c,l;if(l=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]},l.get?c=l.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):l.set&&(c=e.stylize("[Setter]","special")),C(r,o)||(u="["+o+"]"),c||(e.seen.indexOf(l.value)<0?(c=g(n)?a(e,l.value,null):a(e,l.value,n-1),c.indexOf("\n")>-1&&(c=i?c.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+c.split("\n").map(function(e){return"   "+e}).join("\n"))):c=e.stylize("[Circular]","special")),j(u)){if(i&&o.match(/^\d+$/))return c;u=JSON.stringify(""+o),u.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+c}function y(e,t,n){var r=0;return e.reduce(function(e,t){return r++,t.indexOf("\n")>=0&&r++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function d(e){return Array.isArray(e)}function h(e){return"boolean"==typeof e}function g(e){return null===e}function v(e){return null==e}function m(e){return"number"==typeof e}function b(e){return"string"==typeof e}function w(e){return"symbol"==typeof e}function j(e){return void 0===e}function O(e){return _(e)&&"[object RegExp]"===T(e)}function _(e){return"object"==typeof e&&null!==e}function S(e){return _(e)&&"[object Date]"===T(e)}function x(e){return _(e)&&("[object Error]"===T(e)||e instanceof Error)}function E(e){return"function"==typeof e}function z(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e}function T(e){return Object.prototype.toString.call(e)}function k(e){return e<10?"0"+e.toString(10):e.toString(10)}function D(){var e=new Date,t=[k(e.getHours()),k(e.getMinutes()),k(e.getSeconds())].join(":");return[e.getDate(),N[e.getMonth()],t].join(" ")}function C(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var M=/%[sdj%]/g;n.format=function(e){if(!b(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(o(arguments[n]));return t.join(" ")}for(var n=1,r=arguments,i=r.length,u=String(e).replace(M,function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}}),c=r[n];n<i;c=r[++n])g(c)||!_(c)?u+=" "+c:u+=" "+o(c);return u},n.deprecate=function(e,o){function i(){if(!u){if(t.throwDeprecation)throw new Error(o);t.traceDeprecation?console.trace(o):console.error(o),u=!0}return e.apply(this,arguments)}if(j(r.process))return function(){return n.deprecate(e,o).apply(this,arguments)};if(!0===t.noDeprecation)return e;var u=!1;return i};var q,A={};n.debuglog=function(e){if(j(q)&&(q=t.env.NODE_DEBUG||""),e=e.toUpperCase(),!A[e])if(new RegExp("\\b"+e+"\\b","i").test(q)){var r=t.pid;A[e]=function(){var t=n.format.apply(n,arguments);console.error("%s %d: %s",e,r,t)}}else A[e]=function(){};return A[e]},n.inspect=o,o.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},o.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},n.isArray=d,n.isBoolean=h,n.isNull=g,n.isNullOrUndefined=v,n.isNumber=m,n.isString=b,n.isSymbol=w,n.isUndefined=j,n.isRegExp=O,n.isObject=_,n.isDate=S,n.isError=x,n.isFunction=E,n.isPrimitive=z,n.isBuffer=e("./support/isBuffer");var N=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];n.log=function(){console.log("%s - %s",D(),n.format.apply(n,arguments))},n.inherits=e("inherits"),n._extend=function(e,t){if(!t||!_(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./support/isBuffer":3,_process:1,inherits:2}],5:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=e("./gallery_template"),c=r(u),a=e("./util"),l=r(a),s=function(){function e(t,n){o(this,e),this.apiKey="&api_key="+t,this.searchInput=n,this.format="&format=json&nojsoncallback=1",this.search()}return i(e,null,[{key:"getInstance",value:function(t,n){return e._instance?(c.default.cleanContent(),e._instance=new e(t,n),e._instance):(e._instance=new e(t,n),e._instance)}}]),i(e,[{key:"apiRequest",value:function(e){for(var t=[],n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t.push.apply(t,r);var i=t.join("");try{var u=fetch("\n      https://api.flickr.com/services/rest/?method="+e+this.apiKey+i+this.format),a=u.json();return"fail"===a.stat&&c.default.error("Ops, something went wrong :("),a}catch(e){return e}}},{key:"search",value:function(){var e=this;this.apiRequest("flickr.photos.search","&text="+this.searchInput,"&per_page=25","&safe_search=3","&content_type=1").then(function(t){var n=t.photos.photo;0===n.length&&c.default.error("Sorry, no results found, try another keyword!"),n.map(function(t){e.apiRequest("flickr.photos.getSizes","&photo_id="+t.id).then(function(e){var t=e.sizes.size.length-1;c.default.home(e.sizes.size[t].source)})})}).then(function(e){return l.default.loaded()})}}]),e}();n.default=s},{"./gallery_template":6,"./util":8}],6:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e)}return o(e,null,[{key:"home",value:function(e){var t=document.querySelector(".gallery ul"),n='\n    <li>\n      <div class="bg-photos" style="background-image: url('+e+')"></div>\n    </li>';t.insertAdjacentHTML("beforeend",n)}},{key:"cleanContent",value:function(){document.querySelector(".gallery ul").innerHTML=null}},{key:"error",value:function(e){var t=document.querySelector(".gallery ul"),n='<h1 class="alert-no-results">'+e+"</h1>";t.insertAdjacentHTML("beforeend",n)}}]),e}();n.default=i},{}],7:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=e("./gallery"),i=r(o),u=e("util"),c=(r(u),e("./gallery_template")),a=r(c);window.addEventListener("load",function(){var e=new Date;console.log(e);document.querySelector(".searchForm").addEventListener("submit",function(e){e.preventDefault();var t=document.querySelector(".searchInput").value;if(""!==t){a.default.cleanContent();i.default.getInstance("a31291fbb92c2078dc081e40fa6ab76c",t)}else{a.default.cleanContent();var n=String.fromCodePoint(128517);a.default.error("Don't be shy! just type on the search "+n)}})})},{"./gallery":5,"./gallery_template":6,util:4}],8:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e)}return o(e,null,[{key:"loading",value:function(){console.log("loading")}},{key:"loaded",value:function(){console.log("loaded")}}]),e}();n.default=i},{}]},{},[7]);