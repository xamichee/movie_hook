(this.webpackJsonpmovieapp_hooks=this.webpackJsonpmovieapp_hooks||[]).push([[0],{102:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(24),i=a.n(s),r=a(63),o=a(21),l=a(115),u=a(112),j=a(111),d=(a(87),a(6));function b(e){var t=e.tabClick,a={};return a[e.active]="chosen",Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:a.Search,type:"button",onClick:t,name:"Search",children:"Search"})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:a.Rated,type:"button",onClick:t,name:"Rated",children:"Rated"})})]})}var h=a(116),v=a(113),O=(a(89),n.a.createContext([]));var m=function(e){var t,a=e.movie,n=e.rateMovie,s=e.active,i=Object(c.useState)(!0),r=Object(o.a)(i,2),l=r[0],u=r[1],b=a.id,m=a.title,f=a.release_date,p=a.poster_path,g=a.overview,x=a.rating,y=a.vote_average,S=a.genre_ids,N=p?"https://image.tmdb.org/t/p/w200".concat(p):"https://apps.alldbx.de/images/default_person.1d043.png",_=f?Object(v.a)(new Date(f),"MMMM dd, yyyy"):"NA",k=l?Object(d.jsx)(j.a,{}):null,w=Object(c.useContext)(O),C=S.map((function(e){return Object(d.jsx)("span",{className:"genre",children:w.find((function(t){return t.id===e})).name},e)})),R=(t=y)<=3?"#E90000":t<=5?"#E97E00":t<=7?"#E9D100":"#66E900",M="Rated"===s?x:y;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("div",{className:"cardTop",children:[Object(d.jsxs)("div",{className:"moviePoster",children:[k,Object(d.jsx)("img",{src:N,alt:"poster",onLoad:function(){return u(!1)}})]}),Object(d.jsxs)("div",{className:"movieInfo",children:[Object(d.jsxs)("div",{className:"movieTitle",children:[Object(d.jsx)("span",{children:m}),Object(d.jsx)("div",{className:"movieRating",style:{backgroundColor:"".concat(R)},children:Object(d.jsx)("p",{children:M})})]}),Object(d.jsx)("div",{className:"date",children:Object(d.jsx)("span",{children:_})}),Object(d.jsx)("div",{className:"movieGenres",children:C}),Object(d.jsxs)("div",{className:"highRes",children:[Object(d.jsx)("div",{className:"movieSinops",children:Object(d.jsx)("span",{children:g})}),Object(d.jsx)("div",{className:"stars",children:Object(d.jsx)(h.a,{count:10,allowHalf:!0,defaultValue:M,onChange:function(e){return n(e,b)}})})]})]})]}),Object(d.jsxs)("div",{className:"lowRes",children:[Object(d.jsx)("div",{className:"movieSinops",children:Object(d.jsx)("span",{children:g})}),Object(d.jsx)("div",{className:"stars",children:Object(d.jsx)(h.a,{count:10,allowHalf:!0,defaultValue:M,onChange:function(e){return n(e,b)}})})]})]})};a(102);var f=function(e){var t=e.movieList,a=e.rateMovie,c=e.active;return Object(d.jsx)("div",{className:"movieslist",children:t.map((function(e){return Object(d.jsx)(m,{movie:e,rateMovie:a,active:c},e.id)}))})},p=a(114),g=a(73);var x=function e(t){var a=t.submit;return e.defaultProps={submit:function(){}},Object(d.jsx)("form",{onChange:Object(g.debounce)((function(e){return function(e){var t=e.target.value;t&&a(t)}(e)}),1e3),onSubmit:function(e){return e.preventDefault()},children:Object(d.jsx)(p.a,{placeholder:"Type to search"})})},y=a(74),S=function e(){var t=this;Object(y.a)(this,e),this.apiBase="https://api.themoviedb.org/3/",this.apiKey="382c03696044ec7006f5212f1c181827",this.getGuestKey=function(){var e=localStorage.getItem("guestKey");return e||fetch("".concat(t.apiBase,"authentication/guest_session/new?api_key=").concat(t.apiKey)).then((function(e){return e.json()})).then((function(t){localStorage.setItem("guestKey",t.guest_session_id),e=localStorage.getItem("guestKey")})),e},this.rateMovie=function(e,a){var c=t.getGuestKey();fetch("".concat(t.apiBase,"movie/").concat(a,"/rating?api_key=").concat(t.apiKey,"&guest_session_id=").concat(c),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({value:e})})},this.getGenres=function(){return fetch("".concat(t.apiBase,"genre/movie/list?api_key=").concat(t.apiKey,"&language=en-US")).then((function(e){return e.json()})).then((function(e){return e.genres}))},this.setPage=function(e,t,a,c){var n=Math.ceil(e/2);Math.ceil(c/2)!==n?(a(n),t(e)):t(e)}};a(104),a(105);var N=function(){var e=new S,t=e.getGuestKey,a=e.getGenres,n=e.rateMovie,s=e.setPage,i=Object(c.useState)(null),h=Object(o.a)(i,2),v=h[0],m=h[1],p=Object(c.useState)(!1),g=Object(o.a)(p,2),y=g[0],N=g[1],_=Object(c.useState)(!1),k=Object(o.a)(_,2),w=k[0],C=k[1],R=Object(c.useState)("Search"),M=Object(o.a)(R,2),T=M[0],K=M[1],P=Object(c.useState)(""),E=Object(o.a)(P,2),B=E[0],G=E[1],I=Object(c.useState)(1),D=Object(o.a)(I,2),J=D[0],L=D[1],U=Object(c.useState)(1),z=Object(o.a)(U,2),H=z[0],V=z[1],q=Object(c.useState)([]),A=Object(o.a)(q,2),F=A[0],Q=A[1],W=Object(c.useState)(null),X=Object(o.a)(W,2),Y=X[0],Z=X[1],$=Object(c.useState)([]),ee=Object(o.a)($,2),te=ee[0],ae=ee[1],ce=Object(c.useState)(null),ne=Object(o.a)(ce,2),se=ne[0],ie=ne[1],re=Object(c.useState)(1),oe=Object(o.a)(re,2),le=oe[0],ue=oe[1],je=Object(c.useState)(1),de=Object(o.a)(je,2),be=de[0],he=de[1],ve="https://api.themoviedb.org/3/",Oe="382c03696044ec7006f5212f1c181827",me=t(),fe="Search"===T;v||a().then((function(e){return m(e)})),Object(c.useEffect)((function(){if(fe){if(B)try{fetch("".concat(ve,"search/movie?api_key=").concat(Oe,"&language=en-US&query=").concat(B,"&page=").concat(J,"&include_adult=false")).then((function(e){return e.json()})).then((function(e){Q(e.results),Z(e.total_results),N(!1)}))}catch(e){C(!0)}}else{N(!0);try{fetch("".concat(ve,"guest_session/").concat(me,"/rated/movies?api_key=").concat(Oe,"&page=").concat(le,"&language=en-US&sort_by=created_at.asc}")).then((function(e){return e.json()})).then((function(e){ue(e.page),ie(e.total_results),ae(e.results),N(!1)}))}catch(e){N(!1),C(!0)}}}),[fe,B,H,J,le,me]);var pe=Object(d.jsx)(l.a,{className:"alert",message:"Error Text",description:"Something goes wrong! But truth is out there...",type:"error"}),ge=fe?{filmsToRender:F,totalToRender:Y,activePage:H}:{filmsToRender:te,totalToRender:se,activePage:be},xe=ge.filmsToRender,ye=ge.totalToRender,Se=ge.activePage,Ne=Se%2===0?Object(r.a)(xe.slice(10)):Object(r.a)(xe.slice(0,10)),_e=xe.length?Object(d.jsx)(u.a,{current:Se,total:ye,onChange:function(e){return fe?s(e,V,L,H):s(e,he,ue,be)},showSizeChanger:!1}):null,ke=y?Object(d.jsx)("div",{className:"spin",children:Object(d.jsx)(j.a,{size:"large"})}):Object(d.jsxs)("div",{children:[Object(d.jsx)(O.Provider,{value:v,children:Object(d.jsx)(f,{movieList:Ne,rateMovie:n,active:T})}),Object(d.jsx)("div",{className:"paginator",children:_e})]});return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(b,{tabClick:function(e){return K(e.target.name)},active:T}),fe?Object(d.jsx)(x,{submit:function(e){G(e),C(!1),N(!0),L(1),V(1)}}):null,w?pe:ke]})};a(106);i.a.render(Object(d.jsx)(N,{}),document.getElementById("root"))},87:function(e,t,a){},89:function(e,t,a){}},[[107,1,2]]]);
//# sourceMappingURL=main.6ee902f8.chunk.js.map