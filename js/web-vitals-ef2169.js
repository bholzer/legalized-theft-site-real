var e,t;function n({name:e,delta:t,id:n}){ga("send","event",{eventCategory:"Web Vitals",eventAction:e,eventValue:Math.round("CLS"===e?1e3*t:t),eventLabel:n,nonInteraction:!0,transport:"beacon"})}e=void 0,t=function(e){var t,n,i,a,r=function(e,t){return{name:e,value:void 0===t?-1:0,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},o=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},u=!1,c=function(e,t){u||"undefined"!=typeof InstallTrigger||(addEventListener("beforeunload",(function(){})),u=!0),addEventListener("visibilitychange",(function n(i){"hidden"===document.visibilityState&&(e(i),t&&removeEventListener("visibilitychange",n,!0))}),!0)},s=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},f=new WeakSet,d=function(e,t,n){var i;return function(){t.value>=0&&(n||f.has(t)||"hidden"===document.visibilityState)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},m=-1,p=function(){return"hidden"===document.visibilityState?0:1/0},v=function(){c((function(e){var t=e.timeStamp;m=t}),!0)},l=function(){return m<0&&(m=p(),v(),s((function(){setTimeout((function(){m=p(),v()}),0)}))),{get timeStamp(){return m}}},g={passive:!0,capture:!0},y=new Date,S=function(e,a){t||(t=a,n=e,i=new Date,L(removeEventListener),h())},h=function(){if(n>=0&&n<i-y){var e={entryType:"first-input",name:t.type,target:t.target,cancelable:t.cancelable,startTime:t.timeStamp,processingStart:t.timeStamp+n};a.map((function(t){t(e)})),a=[]}},b=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){S(e,t),a()},i=function(){a()},a=function(){removeEventListener("pointerup",n,g),removeEventListener("pointercancel",i,g)};addEventListener("pointerup",n,g),addEventListener("pointercancel",i,g)}(t,e):S(t,e)}},L=function(e){["mousedown","keydown","touchstart","pointerdown"].map((function(t){return e(t,b,g)}))};e.getCLS=function(e,t){var n,i=r("CLS",0),a=function(e){e.hadRecentInput||(i.value+=e.value,i.entries.push(e),n())},u=o("layout-shift",a);u&&(n=d(e,i,t),c((function(){u.takeRecords().map(a),n()})),s((function(){i=r("CLS",0),n=d(e,i,t)})))},e.getFCP=function(e,t){var n,i=l(),a=r("FCP"),u=o("paint",(function(e){"first-contentful-paint"===e.name&&(u&&u.disconnect(),e.startTime<i.timeStamp&&(a.value=e.startTime,a.entries.push(e),f.add(a),n()))}));u&&(n=d(e,a,t),s((function(i){a=r("FCP"),n=d(e,a,t),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,f.add(a),n()}))}))})))},e.getFID=function(e,i){var u,m=l(),p=r("FID"),v=function(e){e.startTime<m.timeStamp&&(p.value=e.processingStart-e.startTime,p.entries.push(e),f.add(p),u())},g=o("first-input",v);u=d(e,p,i),g&&c((function(){g.takeRecords().map(v),g.disconnect()}),!0),g&&s((function(){var o;p=r("FID"),u=d(e,p,i),a=[],n=-1,t=null,L(addEventListener),o=v,a.push(o),h()}))},e.getLCP=function(e,t){var n,i=l(),a=r("LCP"),u=function(e){var t=e.startTime;t<i.timeStamp&&(a.value=t,a.entries.push(e)),n()},m=o("largest-contentful-paint",u);if(m){n=d(e,a,t);var p=function(){f.has(a)||(m.takeRecords().map(u),m.disconnect(),f.add(a),n())};["keydown","click"].map((function(e){addEventListener(e,p,{once:!0,capture:!0})})),c(p,!0),s((function(i){a=r("LCP"),n=d(e,a,t),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,f.add(a),n()}))}))}))}},e.getTTFB=function(e){var t,n=r("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();n.value=n.delta=t.responseStart,n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)},Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).webVitals={}),webVitals.getCLS(n),webVitals.getFID(n),webVitals.getLCP(n);
