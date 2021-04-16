(this["webpackJsonppoke-store"]=this["webpackJsonppoke-store"]||[]).push([[0],{26:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(20),s=n.n(r),o=(n(26),n(4)),i=n.n(o),l=n(7),j=n(6),u=n(2),b=n(0);function d(e){var t=e.pokemon,n=e.index,c=e.gotoDetailsPage,a=e.addPokemonToCart;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"row",children:n+1}),Object(b.jsx)("td",{children:t.name}),Object(b.jsxs)("td",{children:["Price: $",t.price]}),Object(b.jsxs)("td",{children:[Object(b.jsx)("button",{className:"btn btn-info btn-sm",id:t.name+"-details",onClick:function(){return c(t.url)},children:"See details"}),Object(b.jsx)("button",{className:"btn btn-primary btn-sm",id:t.name+"-cart",onClick:function(){return a(t)},children:"Add to cart"})]})]},t.name)}function m(e){var t=e.pokemons,n=e.gotoDetailsPage,c=e.addPokemonToCart;return Object(b.jsx)("div",{className:"pokemon-list-container",children:Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"#"}),Object(b.jsx)("th",{scope:"col",children:"Name"}),Object(b.jsx)("th",{scope:"col",children:"Price"}),Object(b.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e,t){return Object(b.jsx)(d,{pokemon:e,index:t,gotoDetailsPage:n,addPokemonToCart:c})}))})]})})}function p(e){var t=e.gotoNextPage,n=e.gotoPrevPage;return Object(b.jsxs)("div",{className:"d-flex justify-content-around mt-4 paginator",children:[n&&Object(b.jsx)("button",{className:"btn btn-secondary btn-sm",onClick:n,children:"Previous page"}),t&&Object(b.jsx)("button",{className:"btn btn-primary btn-sm",onClick:t,children:"Next page"})]})}function O(e){var t=e.pokemonDetails,n=e.pokemonName;return Object(b.jsxs)("div",{className:"card card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:"Pokemon details"}),Object(b.jsx)("h6",{className:"card-title",children:n}),t.map((function(e){return Object(b.jsx)("div",{className:"card-text",children:Object(b.jsxs)("h6",{className:"d-flex justify-content-between",children:[e.stat.name.toUpperCase(),Object(b.jsx)("span",{children:e.base_stat})]})},e.stat.name)}))]})}function h(e){var t=e.cart,n=e.removePokemonFromCart,c=t.reduce((function(e,t){return e+t.price}),0);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h4",{children:"Pokemon Cart"}),Object(b.jsxs)("p",{children:["Total: $",c]}),Object(b.jsx)("button",{className:"btn btn-primary btn-block",type:"button","data-toggle":"collapse","data-target":"#cartPokemon","aria-expanded":"false","aria-controls":"cartPokemon",children:"List of pokemons in cart"}),Object(b.jsx)("div",{className:"collapse",id:"cartPokemon",children:t.map((function(e){return Object(b.jsxs)("div",{className:"d-flex justify-content-around m-2 p-2 border border-top-0",children:[Object(b.jsx)("span",{children:e.name}),Object(b.jsx)("button",{className:"btn btn-warning btn-sm",onClick:function(){return n(e)},children:"Remove pokemon"})]},e.name)}))})]})}var f=function(){return Object(b.jsx)("nav",{className:"navbar navbar-dark",style:{backgroundColor:"#B22222",height:"60px"},children:Object(b.jsxs)("h5",{className:"text-white m-0",children:[Object(b.jsx)("img",{src:"pikachu.svg",width:"30",height:"30",className:"d-inline-block align-top",alt:"brand"}),"PokeStore"]})})},x=n(10),v=n.n(x),k=n(21),g=n(9);n(47),n(48);function N(e){var t=e.cart,n=e.cleanCart,a=Object(c.useState)(!1),r=Object(u.a)(a,2),s=r[0],o=r[1],l=Object(c.useState)(null),d=Object(u.a)(l,2),m=d[0],p=d[1],O=Object(c.useState)(""),h=Object(u.a)(O,2),f=h[0],x=h[1],v=Object(c.useState)(!0),k=Object(u.a)(v,2),N=k[0],P=k[1],y=Object(c.useState)(!1),C=Object(u.a)(y,2),S=C[0],w=C[1],T=Object(c.useState)([]),D=Object(u.a)(T,2),E=D[0],F=D[1],A=function(){var e=Object(j.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(t.empty),p(t.error?t.error.message:""),w(t.complete);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(j.a)(i.a.mark((function e(c){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.preventDefault(),x(!0),S?0===t.length?(p("You do not have items on your cart"),x(!1)):(F(t),p(null),x(!1),o(!0),n()):x(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("form",{id:"payment-form",onSubmit:I,children:[Object(b.jsx)(g.CardElement,{id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:A}),Object(b.jsx)("button",{className:"btn btn-success btn-block",disabled:f||N||s,id:"submit",children:Object(b.jsx)("span",{id:"button-text",children:f?Object(b.jsx)("div",{className:"spinner",id:"spinner"}):"Pay now"})}),m&&Object(b.jsx)("div",{className:"card-error",role:"alert",children:m}),Object(b.jsxs)("div",{className:s?"result-message":"result-message hidden",children:[Object(b.jsx)("p",{children:"Payment succeeded, see the result for your purchase"}),Object(b.jsxs)("p",{children:["Congratulations, these are your pokemons: ",E.map((function(e){return e.name})).join(", ")]}),Object(b.jsxs)("p",{children:["Total: $",E.reduce((function(e,t){return e+t.price}),0)]}),Object(b.jsx)("p",{children:"Refresh the page to pay again."})]})]})}var P=function(){var e="https://pokeapi.co/api/v2/pokemon/",t=Object(c.useState)([]),n=Object(u.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(e),o=Object(u.a)(s,2),d=o[0],x=o[1],P=Object(c.useState)(),y=Object(u.a)(P,2),C=y[0],S=y[1],w=Object(c.useState)(),T=Object(u.a)(w,2),D=T[0],E=T[1],F=Object(c.useState)(!0),A=Object(u.a)(F,2),I=A[0],$=A[1],_=Object(c.useState)(""),B=Object(u.a)(_,2),J=B[0],L=B[1],M=Object(c.useState)([]),R=Object(u.a)(M,2),Y=R[0],q=R[1],z=Object(c.useState)(),Q=Object(u.a)(z,2),U=Q[0],G=Q[1],H=Object(c.useState)([]),K=Object(u.a)(H,2),V=K[0],W=K[1],X=Object(k.a)("pk_test_TYooMQauvdEDq54NiTphI7jx");function Z(e){return ee.apply(this,arguments)}function ee(){return(ee=Object(j.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get(t,{cancelToken:new v.a.CancelToken((function(e){return n=e}))});case 3:return c=e.sent,e.abrupt("return",c);case 7:if(e.prev=7,e.t0=e.catch(0),!v.a.isCancel(n)){e.next=11;break}return e.abrupt("return",Promise.reject());case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function te(e){return{name:e.name,url:e.url,price:parseInt(e.url.match(/\d{1,4}/g)[1])}}function ne(e){var t;W([].concat(Object(l.a)(V),[e])),r((t=e,a.filter((function(e){return e!==t}))))}function ce(e){var t;W((t=e,V.filter((function(e){return e!==t})))),r([].concat(Object(l.a)(a),[e]))}return Object(c.useEffect)((function(){$(!0),Z(d).then((function(t){$(!1),S(t.data.next),E(t.data.previous);var n=t.data.results.map(te);n=n.filter((function(e){return V.every((function(t){return t.id!==e.id}))})),r(n),n.length>0&&G(e+n[0].price)}))}),[d]),Object(c.useEffect)((function(){U&&Z(U).then((function(e){q(e.data.stats),L(e.data.name)}))}),[U]),I?"Loading...":Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{}),Object(b.jsx)("div",{className:"container mb-5",children:Object(b.jsxs)("div",{className:"pokemon-page",children:[Object(b.jsxs)("div",{className:"pokemon-elements",children:[Object(b.jsx)(m,{pokemons:a,gotoDetailsPage:function(e){return function(e){G(e)}(e)},addPokemonToCart:function(e){return ne(e)}}),Object(b.jsx)(p,{gotoNextPage:C?function(){x(C)}:null,gotoPrevPage:D?function(){x(D)}:null})]}),Object(b.jsxs)("div",{className:"pokemon-elements-details",children:[Object(b.jsx)(O,{pokemonDetails:Y,pokemonName:J}),Object(b.jsx)(h,{cart:V,removePokemonFromCart:function(e){return ce(e)}}),Object(b.jsx)(g.Elements,{stripe:X,children:Object(b.jsx)(N,{cart:V,cleanCart:function(){return r([].concat(Object(l.a)(a),Object(l.a)(V))),void W([])}})})]})]})})]})};n(49),n(50),n(51);s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.f25ead26.chunk.js.map