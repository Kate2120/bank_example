/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return r};var n,r={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(n){d=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),c=new q(r||[]);return a(i,"_invoke",{value:T(t,n,c)}),i}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var v="suspendedStart",h="suspendedYield",m="executing",y="completed",g={};function w(){}function b(){}function x(){}var L={};d(L,s,(function(){return this}));var E=Object.getPrototypeOf,k=E&&E(E(P([])));k&&k!==o&&i.call(k,s)&&(L=k);var S=x.prototype=w.prototype=Object.create(L);function _(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function j(e,n){function r(o,a,c,s){var l=p(e[o],e,a);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==t(d)&&i.call(d,"__await")?n.resolve(d.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):n.resolve(d).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,s)}))}s(l.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(i,i):i()}})}function T(t,e,r){var o=v;return function(i,a){if(o===m)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:n,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var s=N(c,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===v)throw o=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var l=p(t,e,r);if("normal"===l.type){if(o=r.done?y:h,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=y,r.method="throw",r.arg=l.arg)}}}function N(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,N(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=p(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(e){if(e||""===e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=n,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return b.prototype=x,a(S,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=d(x,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,d(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},r.awrap=function(t){return{__await:t}},_(j.prototype),d(j.prototype,l,(function(){return this})),r.AsyncIterator=j,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new j(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(S),d(S,u,"Generator"),d(S,s,(function(){return this})),d(S,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},r.values=P,q.prototype={constructor:q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),M(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;M(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}},r}function n(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}function o(){var t=new Date,e=new Date(2024,0,1)-t;e<=0&&clearInterval(i);var n=e>0?Math.floor(e/1e3/60/60/24):"00",r=e>0?Math.floor(e/1e3/60/60)%24:"00",o=e>0?Math.floor(e/1e3/60)%60:"00",a=e>0?Math.floor(e/1e3)%60:"00";document.querySelectorAll(".item-time").forEach((function(t){switch(t.classList[1]){case"days-item":t.innerHTML=1===n.toString().length?"0"+n.toString():n;break;case"hours-item":t.innerHTML=1===r.toString().length?"0"+r.toString():r;break;case"minutes-item":t.innerHTML=1===o.toString().length?"0"+o.toString():o;break;case"seconds-item":t.innerHTML=1===a.toString().length?"0"+a.toString():a}}))}document.querySelectorAll(".items-nav li").forEach((function(t){t.addEventListener("click",(function(){var e=t.querySelector(".popap");e&&(e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active"))}))}));var i=setInterval(o,1e3);o();var a=document.querySelector("#progress-scale"),c=a.value;a.style.background="linear-gradient(to right, #08ddeb ".concat(100*c/a.max,"%, #ccc ").concat(c,"%)"),setInterval((function(){var t=Number(a.value)+Number(Math.random().toFixed(2));t>=Number(a.max)&&(a.value=0,t=0),a.value=t;var e=a.value;a.textContent=e;var n=e/a.max*100;a.style.background="linear-gradient(to right, #08ddeb ".concat(n,"%, #ccc ").concat(n,"%)");var r=document.getElementById("form-progress-slider");r.querySelector(".box-info-value").innerHTML=t+" mln",r.querySelector(".box-info-value").style.left="calc("+100*a.value/a.max+"% - 55px)"}),3e3);var s=document.createElement("script");s.src="https://www.youtube.com/player_api";var l=document.getElementsByTagName("script")[0];function u(){return(u=r(e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://katerynakoruma.com/api/progress/");case 2:return n=t.sent,t.next=5,n.json();case 5:t.sent.forEach((function(t){document.querySelector(".row-info-road-map").innerHTML+='\n\t\t\t<div class="item-info-road '.concat(Number(t.progress)<100?"inactive":"",'">\n\t\t\t\t<div class="wrapper-info">\n\t\t\t\t  <div class="date-box">').concat(t.date,'</div>\n\t\t\t\t  <div class="title-box">').concat(t.title,'</div>\n\t\t\t\t<div class="description-box">').concat(t.description,'</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="progress-box">\n\t\t\t\t\t<div class="progress-title">\n\t\t\t\t\t\t<div class="name">PROGRESS</div>\n\t\t\t\t\t\t<div class="persent">').concat(t.progress,'%</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="progress-line">\n\t\t\t\t\t<div class="current-progress" style="width: ').concat(t.progress,'%"></div>\n\t\t\t\t\t<div class="post-title-progress"> ').concat(Number(t.progress)<100?"in progress":"complited","</div>\n\t\t\t\t</div>\n\t\t\t</div>")}));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(){return(d=r(e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://katerynakoruma.com/api/employees/department/management");case 2:return n=t.sent,t.next=5,n.json();case 5:t.sent.forEach((function(t){document.querySelector(".row-core-team").innerHTML+='\n\t\t<div class="item-team">\n\t\t\t\t\t\t<div class="info-box">\n\t\t\t\t\t\t\t<div class="box-photo">\n\t\t\t\t\t\t\t\t<img src="'.concat(t.picture,'" alt="">\n\t\t\t\t\t\t\t\t<a href="mailto:test@gmail.com" class="mail-link"></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="name">').concat(t.name," ").concat(t.lastname,'</div>\n\t\t\t\t\t\t\t<div class="name-position">').concat(t.job_title,'</div>\n\t\t\t\t\t\t\t<div class="description">').concat(t.job_title_description,'</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a href="" class="linkedin"></a>\n\n\t\t\t\t\t</div>\n\t\t')}));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return(f=r(e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://katerynakoruma.com/api/employees/department/development");case 2:return n=t.sent,t.next=5,n.json();case 5:t.sent.forEach((function(t){document.querySelector(".developers-row").innerHTML+='\n\t\t<div class="item-team">\n\t\t\t\t\t\t<div class="info-box">\n\t\t\t\t\t\t\t<div class="box-photo">\n\t\t\t\t\t\t\t\t<img src="'.concat(t.picture,'" alt="">\n\t\t\t\t\t\t\t\t<a href="mailto:test@gmail.com" class="mail-link"></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="name">').concat(t.name," ").concat(t.lastname,'</div>\n\t\t\t\t\t\t\t<div class="name-position">').concat(t.job_title,'</div>\n\t\t\t\t\t\t\t<div class="description">').concat(t.job_title_description,'</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a href="" class="linkedin"></a>\n\n\t\t\t\t\t</div>\n\t\t')}));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){return(p=r(e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://katerynakoruma.com/api/employees/department/general");case 2:return n=t.sent,t.next=5,n.json();case 5:t.sent.forEach((function(t){document.querySelector(".row-employees").innerHTML+='\n\t\t<div class="item-team">\n\t\t\t\t\t\t<div class="info-box">\n\t\t\t\t\t\t\t<div class="box-photo">\n\t\t\t\t\t\t\t\t<img src="'.concat(t.picture,'" alt="">\n\t\t\t\t\t\t\t\t<a href="mailto:test@gmail.com" class="mail-link"></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="name">').concat(t.name," ").concat(t.lastname,'</div>\n\t\t\t\t\t\t\t<div class="name-position">').concat(t.job_title,'</div>\n\t\t\t\t\t\t\t<div class="description">').concat(t.job_title_description,'</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a href="" class="linkedin"></a>\n\n\t\t\t\t\t</div>\n\t\t')}));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}l.parentNode.insertBefore(s,l),document.querySelectorAll(".button-video").forEach((function(t){t.addEventListener("click",(function(t){console.log("work");var e=document.querySelector("body"),n=document.createElement("div");n.classList.add("popap-background-style"),e.appendChild(n),n.addEventListener("click",(function(){n.remove()}));var r=document.createElement("div");r.classList.add("video-wrapper"),n.appendChild(r);var o=document.createElement("div");o.classList.add("close-popap-but"),r.appendChild(o);var i,a=document.createElement("div");a.classList.add("video-container"),r.appendChild(a),"info-video"===t.target.getAttribute("id")&&(a.setAttribute("id","LvQossUx7ss"),i="LvQossUx7ss",new YT.Player(i,{height:"360",width:"640",videoId:i,playerVars:{autoplay:1}}))}))})),function(){u.apply(this,arguments)}(),function(){d.apply(this,arguments)}(),function(){f.apply(this,arguments)}(),function(){p.apply(this,arguments)}()})()})();