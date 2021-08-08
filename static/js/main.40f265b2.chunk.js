(this.webpackJsonpmovieapp_hooks=this.webpackJsonpmovieapp_hooks||[]).push([[0],{101:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(23),c=a.n(i),s=a(59),r=a(28),d=a(114),o=a(110),m=a(111);var j=function(){return[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]},l=(a(86),a(6)),u=function(){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("div",{className:"chosen",children:Object(l.jsx)("span",{children:"Search"})}),Object(l.jsx)("div",{children:Object(l.jsx)("span",{children:"Rated"})})]})},b=a(115),O=a(112);a(88);var h=function(e){var t=e.movie,a=Object(n.useState)(!0),i=Object(r.a)(a,2),c=i[0],s=i[1],d=t.title,m=t.release_date,j=t.poster_path,u=t.overview,h=t.vote_average,v=t.genre_ids,p=j?"https://image.tmdb.org/t/p/w200".concat(j):"https://apps.alldbx.de/images/default_person.1d043.png",f=m?Object(O.a)(new Date(m),"MMMM dd, yyyy"):"NA",x=c?Object(l.jsx)(o.a,{}):null,g=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],y=v.map((function(e){return Object(l.jsx)("span",{className:"genre",children:g.find((function(t){return t.id===e})).name},e)}));return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)("div",{className:"moviePoster",children:[x,Object(l.jsx)("img",{src:p,alt:"poster",onLoad:function(){return s(!1)}})]}),Object(l.jsxs)("div",{className:"movieInfo",children:[Object(l.jsxs)("div",{className:"movieTitle",children:[Object(l.jsx)("span",{children:d}),Object(l.jsx)("div",{className:"movieRating",children:Object(l.jsx)("p",{children:h})})]}),Object(l.jsx)("div",{className:"date",children:Object(l.jsx)("span",{children:f})}),Object(l.jsx)("div",{className:"movieGenres",children:y}),Object(l.jsx)("div",{className:"movieSinops",children:Object(l.jsx)("span",{children:u})}),Object(l.jsx)("div",{className:"stars",children:Object(l.jsx)(b.a,{count:10,allowHalf:!0,defaultValue:h})})]})]})};a(101);var v=function(e){var t=e.movieList;return Object(l.jsx)("div",{className:"movieslist",children:t.map((function(e){return Object(l.jsx)(h,{movie:e},e.id)}))})},p=a(113),f=a(73);var x=function e(t){var a=t.submit;return e.defaultProps={submit:function(){}},Object(l.jsx)("form",{onChange:Object(f.debounce)((function(e){return function(e){var t=e.target.value;t&&a(t)}(e)}),1e3),onSubmit:function(e){return e.preventDefault()},children:Object(l.jsx)(p.a,{placeholder:"Type to search"})})};a(103),a(104);var g=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(1),b=Object(r.a)(c,2),O=b[0],h=b[1],p=Object(n.useState)(1),f=Object(r.a)(p,2),g=f[0],y=f[1],N=Object(n.useState)([]),S=Object(r.a)(N,2),M=S[0],_=S[1],w=Object(n.useState)(null),A=Object(r.a)(w,2),C=A[0],T=A[1],D=Object(n.useState)(!1),F=Object(r.a)(D,2),k=F[0],H=F[1],R=Object(n.useState)(!1),W=Object(r.a)(R,2),E=W[0],L=W[1];Object(n.useEffect)((function(){if(a)try{fetch("".concat("https://api.themoviedb.org/3/","search/movie?api_key=").concat("382c03696044ec7006f5212f1c181827","&language=en-US&query=").concat(a,"&page=").concat(O,"&include_adult=false")).then((function(e){return e.json()})).then((function(e){_(Object(s.a)(e.results)),T(e.total_results),H(!1)}))}catch(e){L(!0)}}),[a,g,O]);var V=g%2===0?Object(s.a)(M.slice(10)):Object(s.a)(M.slice(0,10)),z=j(),B=Object(l.jsx)(d.a,{className:"alert",message:"Error Text",description:"Something goes wrong! But truth is out there...",type:"error"}),I=k?Object(l.jsx)("div",{className:"spin",children:Object(l.jsx)(o.a,{size:"large"})}):Object(l.jsxs)("div",{children:[Object(l.jsx)(v,{movieList:V,genres:z}),Object(l.jsx)("div",{className:"paginator",children:Object(l.jsx)(m.a,{current:g,total:C,onChange:function(e){var t=Math.ceil(e/2);Math.ceil(g/2)!==t?(h(t),y(e)):y(e)},showSizeChanger:!1})})]});return Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(u,{}),Object(l.jsx)(x,{submit:function(e){i(e),L(!1),H(!0),h(1),y(1)}}),E?B:I]})};a(105);c.a.render(Object(l.jsx)(g,{}),document.getElementById("root"))},86:function(e,t,a){},88:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.40f265b2.chunk.js.map