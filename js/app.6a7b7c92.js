(function(){"use strict";var n={8754:function(n,t,e){var o=e(9963),r=e(6252);const i={class:"d-flex flex-column justify-content-center align-items-center",style:{"min-height":"calc(100vh - 200px)"}};function a(n,t,e,o,a,u){const c=(0,r.up)("Navbar"),s=(0,r.up)("router-view"),l=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(c),(0,r._)("div",i,[(0,r.Wm)(s)]),(0,r.Wm)(l)],64)}var u=e.p+"img/logo2.c7c11b7c.png";const c=n=>((0,r.dD)("data-v-e85c3296"),n=n(),(0,r.Cn)(),n),s={class:"navbar navbar-expand-xl navbar-ligth fondoImg"},l=c((()=>(0,r._)("div",{class:"container-fluid"},[(0,r._)("a",{class:"navbar-brand logo",href:"#"},[(0,r._)("img",{id:"logo",style:{width:"100%",height:"auto"},src:u})])],-1))),f=[l];function d(n,t,e,o,i,a){return(0,r.wg)(),(0,r.iD)("nav",s,f)}var p={name:"AppNavbar"},v=e(3744);const b=(0,v.Z)(p,[["render",d],["__scopeId","data-v-e85c3296"]]);var g=b;const m={class:"footer mt-auto py-3",style:{background:"rgb(6 156 198)"}},h=(0,r._)("div",{class:"container"},[(0,r._)("span",{class:"text-white"},"© 2023 SwimOrg")],-1),y=[h];function w(n,t,e,o,i,a){return(0,r.wg)(),(0,r.iD)("footer",m,y)}var _={name:"AppFooter"};const x=(0,v.Z)(_,[["render",w]]);var O=x,k={name:"App",components:{Navbar:g,Footer:O}};const j=(0,v.Z)(k,[["render",a]]);var C=j,T=(e(3734),e(2201));const A=n=>((0,r.dD)("data-v-43851d5f"),n=n(),(0,r.Cn)(),n),P={class:"container my-5"},S={class:"d-grid gap-4 col-6 mx-auto"},D=A((()=>(0,r._)("button",{class:"btn btn-primary btn-xl globalColor",type:"button"},"Preguntas Frecuentes",-1))),E=A((()=>(0,r._)("button",{class:"btn btn-primary btn-xl globalColor",type:"button"},"Configuración",-1)));function F(n,t,e,o,i,a){return(0,r.wg)(),(0,r.iD)("div",P,[(0,r._)("div",S,[(0,r._)("button",{class:"btn btn-primary btn-xl globalColor",type:"button",onClick:t[0]||(t[0]=n=>a.goTo("login"))},"Iniciar Sesión"),D,E])])}e(7658);var N={name:"AppHome",methods:{goTo(n){console.log(n),this.$router.push("/login")}}};const I=(0,v.Z)(N,[["render",F],["__scopeId","data-v-43851d5f"]]);var Z=I;const W=[{path:"/",name:"home",component:Z},{path:"/login",name:"login",component:()=>e.e(443).then(e.bind(e,9917))}],H=(0,T.p7)({history:(0,T.r5)(),routes:W});var L=H;(0,o.ri)(C).use(L).mount("#app")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return n[o].call(i.exports,i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,o,r,i){if(!o){var a=1/0;for(l=0;l<n.length;l++){o=n[l][0],r=n[l][1],i=n[l][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(e.O).every((function(n){return e.O[n](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){n.splice(l--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[o,r,i]}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.f={},e.e=function(n){return Promise.all(Object.keys(e.f).reduce((function(t,o){return e.f[o](n,t),t}),[]))}}(),function(){e.u=function(n){return"js/about.d6592153.js"}}(),function(){e.miniCssF=function(n){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={},t="swim-org:";e.l=function(o,r,i,a){if(n[o])n[o].push(r);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+i){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,e.nc&&u.setAttribute("nonce",e.nc),u.setAttribute("data-webpack",t+i),u.src=o),n[o]=[r];var d=function(t,e){u.onerror=u.onload=null,clearTimeout(p);var r=n[o];if(delete n[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(n){return n(e)})),t)return t(e)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){e.p="/aprendiendo_vue/"}(),function(){var n={143:0};e.f.j=function(t,o){var r=e.o(n,t)?n[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(e,o){r=n[t]=[e,o]}));o.push(r[2]=i);var a=e.p+e.u(t),u=new Error,c=function(o){if(e.o(n,t)&&(r=n[t],0!==r&&(n[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};e.l(a,c,"chunk-"+t,t)}},e.O.j=function(t){return 0===n[t]};var t=function(t,o){var r,i,a=o[0],u=o[1],c=o[2],s=0;if(a.some((function(t){return 0!==n[t]}))){for(r in u)e.o(u,r)&&(e.m[r]=u[r]);if(c)var l=c(e)}for(t&&t(o);s<a.length;s++)i=a[s],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(l)},o=self["webpackChunkswim_org"]=self["webpackChunkswim_org"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(8754)}));o=e.O(o)})();
//# sourceMappingURL=app.6a7b7c92.js.map