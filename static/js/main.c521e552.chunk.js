(this["webpackJsonpinfinite-scroll-poc"]=this["webpackJsonpinfinite-scroll-poc"]||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),c=t(2),a=t.n(c),i=(t(12),t(3)),s=t(4),l=t(5),u=t(6),d=function(e){return r.a.createElement("section",{style:{backgroundColor:e.color}},r.a.createElement("h1",null,e.index," section"))};function h(){return"#".concat((16777215*Math.random()<<0).toString(16))}var m=function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=n.call(this,e)).state={sections:[r.a.createElement(d,{color:h(),index:1,key:1}),r.a.createElement(d,{color:h(),index:2,key:2}),r.a.createElement(d,{color:h(),index:3,key:3})]},o}return Object(s.a)(t,[{key:"render",value:function(){var e=this,n=this.state.sections;return window.addEventListener("scroll",(function(){if(window.scrollY>window.innerHeight){var t=n[n.length-1].props.index;n.shift(),n.push(r.a.createElement(d,{color:h(),index:t+1,key:t+1})),e.setState({sections:n})}})),n}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,n,t){e.exports=t(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.c521e552.chunk.js.map