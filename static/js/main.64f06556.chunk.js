(this["webpackJsonpreact-api-news"]=this["webpackJsonpreact-api-news"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(3),a=n.n(r),i=(n(9),n(4)),j=n(0);var o=function(){return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("h1",{children:"Breaking News App"}),Object(j.jsx)("h6",{children:"Reported by Egerton Media"})]})};var l=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("a",{className:"project-links",href:"https://egertonk.github.io/react-wise-spender/",target:"_blank",children:"React-Wise-Spender"}),"|| ",Object(j.jsx)("a",{className:"project-links",href:"https://egertonk.github.io/react-todo-list/",target:"_blank",children:"React-Todo-List"}),"|| ",Object(j.jsx)("a",{className:"project-links",href:"http://mason.gmu.edu/~eduring/IT331_PROJECT/index.html",target:"_blank",children:"Front End Project"}),"|| ",Object(j.jsx)("a",{className:"project-links",href:"http://mason.gmu.edu/~eduring/bangladesh/Home.html",target:"_blank",children:"Bangladesh Web Project"})]})};var d=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("footer",{className:"App-footer",children:[Object(j.jsx)("p",{children:"App Provided By Egerton..."}),Object(j.jsx)("p",{children:Object(j.jsx)(l,{})})]})})};n(11);var h=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],s=t[1],r=[],a=new Request("https://newsapi.org/v2/top-headlines?country=us&apiKey=5bacaabc352f4b9fb9e382a0b72cdbdd");for(var l in Object(c.useEffect)((function(){fetch(a).then((function(e){return e.json()})).then((function(e){s(e)}))})),n){var h=n[l];for(var b in h)console.log("---------\x3e "+h[b].title),void 0!==h[b].title&&r.push(Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"media",children:[Object(j.jsx)("img",{className:"align-self-start mr-3",src:h[b].urlToImage,alt:"News Photo"}),Object(j.jsxs)("div",{className:"media-body",children:[Object(j.jsx)("h3",{className:"mt-0",children:h[b].title}),Object(j.jsx)("p",{children:h[b].description}),Object(j.jsxs)("p",{children:[h[b].content," ",Object(j.jsx)("a",{href:h[b].url,children:"Read More"})]}),Object(j.jsx)("p",{className:"author",children:Object(j.jsxs)("h5",{children:["Authors: ",h[b].author]})})]})]})}))}return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(o,{}),r,Object(j.jsx)(d,{})]})};n(12);var b=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(h,{})})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),u()},9:function(e,t,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.64f06556.chunk.js.map