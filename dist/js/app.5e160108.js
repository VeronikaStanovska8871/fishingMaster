(function(e){function t(t){for(var o,c,u=t[0],a=t[1],i=t[2],s=0,b=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(l,c)&&l[c]&&b.push(l[c][0]),l[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);f&&f(t);while(b.length)b.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var a=n[c];0!==l[a]&&(o=!1)}o&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},l={app:0},r=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"36a256b9"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=l[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=l[e]=[t,o]}));t.push(n[2]=o);var r,a=document.createElement("script");a.charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.src=c(e);var i=new Error;r=function(t){a.onerror=a.onload=null,clearTimeout(s);var n=l[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",i.name="ChunkLoadError",i.type=o,i.request=r,n[1](i)}l[e]=void 0}};var s=setTimeout((function(){r({type:"timeout",target:a})}),12e4);a.onerror=a.onload=r,document.head.appendChild(a)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var f=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f62":function(e,t,n){e.exports=n.p+"img/user.280e24c8.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),l=n("eab1"),r=n.n(l),c=n("9b19"),u=n.n(c),a=n("6f5d"),i=n.n(a),s=n("0f62"),f=n.n(s),b={class:"backroundPage phoneBackgroundPage lg:m-3 px-14 text-black min-h-screen"},d=Object(o["f"])("img",{src:r.a},null,-1),m=[d],p={class:"flex flex-row pt-6"},g=Object(o["f"])("img",{src:u.a,class:"lg:flex lg:mx-0 lg:w-24 -mt-3 w-16",alt:""},null,-1),h={class:"lg:flex flex-row z-10 mx-auto phoneMenuBg -mr-20 mt-10 lg:mt-0 lg:m-auto absolutePhone"},O={class:"mainText lg:flex lg:flex-row flex-col hidden text-3xl",id:"links"},x=Object(o["g"])("HOME"),j=Object(o["g"])("PRODUCTS"),v=Object(o["g"])("ABOUT US"),y=Object(o["g"])("CONTACT"),w={class:"lg:flex flex-row"},P=Object(o["f"])("li",null,[Object(o["f"])("a",{href:""},[Object(o["f"])("img",{src:i.a,alt:"",class:"menuIcons lg:w-9 w-8 h-7 lg:h-9 mr-2"})])],-1),k=Object(o["f"])("img",{src:f.a,alt:"",class:"menuIcons w-9 h-9 lg:flex hidden"},null,-1),_=[k],T=Object(o["g"])("LOGIN"),E=Object(o["g"])("SIGN UP"),S=Object(o["g"])("ACCOUNT");function H(e,t,n,l,r,c){var u=Object(o["v"])("router-link"),a=Object(o["v"])("router-view");return Object(o["q"])(),Object(o["e"])("div",b,[Object(o["f"])("button",{onClick:t[0]||(t[0]=function(){return c.menuIcon&&c.menuIcon.apply(c,arguments)}),class:"w-6 flex float-right mt-7 lg:hidden opacity-70"},m),Object(o["f"])("div",p,[g,Object(o["f"])("nav",h,[Object(o["f"])("ul",O,[Object(o["h"])(u,{to:"/",class:"mx-8"},{default:Object(o["E"])((function(){return[x]})),_:1}),Object(o["h"])(u,{to:"/products",class:"mx-8"},{default:Object(o["E"])((function(){return[j]})),_:1}),Object(o["h"])(u,{to:"/aboutUs",class:"mx-8"},{default:Object(o["E"])((function(){return[v]})),_:1}),Object(o["h"])(u,{to:"/contact",class:"mx-8"},{default:Object(o["E"])((function(){return[y]})),_:1})])]),Object(o["f"])("ul",w,[P,Object(o["f"])("li",null,[Object(o["f"])("a",{onMouseover:t[1]||(t[1]=function(e){return r.upHere=!0}),onMouseleave:t[2]||(t[2]=function(e){return r.upHere=!1}),href:""},_,32),Object(o["F"])(Object(o["f"])("ul",{onMouseover:t[3]||(t[3]=function(e){return r.upHere=!0}),onMouseleave:t[4]||(t[4]=function(e){return r.upHere=!1}),class:"z-10 absolute bgUser -ml-24 text-center flex flex-col justify-around mt-2"},[Object(o["f"])("li",null,[Object(o["h"])(u,{to:"/login",class:"mainText text-2xl mainStroked hover:text-yellow-300"},{default:Object(o["E"])((function(){return[T]})),_:1})]),Object(o["f"])("li",null,[Object(o["h"])(u,{to:"/signup",class:"mainText text-2xl mainStroked hover:text-yellow-300"},{default:Object(o["E"])((function(){return[E]})),_:1})]),Object(o["f"])("li",null,[Object(o["h"])(u,{to:"/account",class:"mainText text-2xl mainStroked hover:text-yellow-300"},{default:Object(o["E"])((function(){return[S]})),_:1})])],544),[[o["C"],r.upHere]])])])]),Object(o["h"])(a)])}var I={data:function(){return{upHere:!1}},methods:{menuIcon:function(){var e=document.getElementById("links");"flex"===e.style.display?e.style.display="none":e.style.display="flex"}}},M=n("6b0d"),U=n.n(M);const C=U()(I,[["render",H]]);var B=C,A=(n("d3b7"),n("3ca3"),n("ddb0"),n("bc3a"),n("6c02")),N=n("6597"),L=n.n(N),q={class:"flex flex-col lg:-mt-12 -mt-6"},z=Object(o["f"])("img",{src:L.a,alt:"",class:"mainImg m-auto lg:mainImgRounded mt-4 w-75% z-0"},null,-1),D=Object(o["f"])("ul",{class:"flex lg:flex-row flex-col justify-center lg:-mt-20"},[Object(o["f"])("li",{id:"product1",class:"productBox lg:w-48 w-full ml-0 lg:h-56 md:h-44 h-32 xl:w-60 xl:h-72 mx-10 my-4 lg:my-0 lg:hover:bg-yellow-200 lg:transform duration-300 hover:scale-110"}),Object(o["f"])("li",{id:"product2",class:"productBox lg:w-48 w-full ml-0 lg:h-56 md:h-44 h-32 xl:w-60 xl:h-72 mx-10 my-4 lg:my-0 lg:hover:bg-yellow-200 lg:transform duration-300 hover:scale-110"}),Object(o["f"])("li",{id:"product3",class:"productBox lg:w-48 w-full ml-0 lg:h-56 md:h-44 h-32 xl:w-60 xl:h-72 mx-10 my-4 lg:my-0 lg:hover:bg-yellow-200 lg:transform duration-300 hover:scale-110"}),Object(o["f"])("li",{id:"product4",class:"productBox lg:w-48 w-full ml-0 lg:h-56 md:h-44 h-32 xl:w-60 xl:h-72 mx-10 my-4 lg:my-0 lg:hover:bg-yellow-200 lg:transform duration-300 hover:scale-110"})],-1),R=Object(o["g"])("SHOP NOW");function G(e,t,n,l,r,c){var u=Object(o["v"])("router-link");return Object(o["q"])(),Object(o["e"])("body",null,[Object(o["f"])("main",q,[z,D,Object(o["h"])(u,{to:"/products",class:"bg-white mainText text-2xl w-56 rounded-2xl h-16 flex justify-center items-center mt-8 m-auto shadow-md text-black transform duration-200 hover:scale-110"},{default:Object(o["E"])((function(){return[R]})),_:1})])])}var J={components:{},name:"Home"};const F=U()(J,[["render",G]]);var W=F,K=[{path:"/",name:"Home",component:W},{path:"/products",name:"Products",component:function(){return n.e("about").then(n.bind(null,"e6dc"))}},{path:"/aboutUs",name:"AboutUs",component:function(){return n.e("about").then(n.bind(null,"2664"))}},{path:"/contact",name:"contact",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}},{path:"/product/details/:id",name:"ProductDetails",component:function(){return n.e("about").then(n.bind(null,"a635"))}},{path:"/product/details/reels/:id",name:"ProductDetailsReels",component:function(){return n.e("about").then(n.bind(null,"0b8e"))}},{path:"/signup",name:"SignUp",component:function(){return n.e("about").then(n.bind(null,"5c9c"))}},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/account",name:"Account",component:function(){return n.e("about").then(n.bind(null,"77be"))}}],Q=Object(A["a"])({history:Object(A["b"])("/"),routes:K}),V=Q;n("a766");Object(o["c"])(B).use(V).mount("#app")},6597:function(e,t,n){e.exports=n.p+"img/fly-fishing-gcc81d574e_1920.3644982c.jpg"},"6f5d":function(e,t,n){e.exports=n.p+"img/cart.9445dad2.svg"},"9b19":function(e,t,n){e.exports=n.p+"img/logo.d35bafaf.svg"},a766:function(e,t,n){},eab1:function(e,t,n){e.exports=n.p+"img/hamburger.7fd05f52.svg"}});
//# sourceMappingURL=app.5e160108.js.map