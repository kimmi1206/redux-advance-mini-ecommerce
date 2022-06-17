(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(t,e,c){t.exports={item:"CartItem_item__1zMOi",details:"CartItem_details__2_Z3n",quantity:"CartItem_quantity__DfEXm",price:"CartItem_price__2Nl0j",itemprice:"CartItem_itemprice__j9ZSt",actions:"CartItem_actions__UwVPJ"}},,,function(t,e,c){t.exports={item:"ProductItem_item__WYS0J",price:"ProductItem_price__1GiPR",actions:"ProductItem_actions__14Yr-"}},function(t,e,c){t.exports={notification:"Notification_notification__3D5S5",error:"Notification_error__2ILHS",success:"Notification_success__3Ww1I"}},,,function(t,e,c){t.exports={button:"CartButton_button__3nU_b",badge:"CartButton_badge__3njqM"}},,,,function(t,e,c){t.exports={card:"Card_card__1m44e"}},function(t,e,c){t.exports={cart:"Cart_cart__3GqLz"}},function(t,e,c){t.exports={header:"MainHeader_header__k5Wsz"}},function(t,e,c){t.exports={products:"Products_products__1PCvW"}},,,,,,,,,,,function(t,e,c){},,function(t,e,c){"use strict";c.r(e);var n=c(13),r=c.n(n),i=c(2),a=c(5),s=Object(a.b)({name:"ui",initialState:{cartIsVisible:!1,notification:null},reducers:{toggle:function(t){t.cartIsVisible=!t.cartIsVisible},showNotification:function(t,e){t.notification={status:e.payload.status,title:e.payload.title,message:e.payload.message}}}}),o=s.actions,u=s,d=Object(a.b)({name:"cart",initialState:{items:[],totalQuantity:0,changed:!1},reducers:{replaceCart:function(t,e){t.totalQuantity=e.payload.totalQuantity,t.items=e.payload.items},addItemToCart:function(t,e){var c=e.payload,n=t.items.find((function(t){return t.id===c.id}));t.totalQuantity++,t.changed=!0,n?(n.quantity++,n.totalPrice=n.totalPrice+c.price):t.items.push({id:c.id,price:c.price,quantity:1,totalPrice:c.price,name:c.title})},removeItemFromCart:function(t,e){var c=e.payload,n=t.items.find((function(t){return t.id===c}));t.totalQuantity--,t.changed=!0,1===n.quantity?t.items=t.items.filter((function(t){return t.id!==c})):(n.quantity--,n.totalPrice=n.totalPrice-n.price)}}}),l=d.actions,j=d,b=Object(a.a)({reducer:{ui:u.reducer,cart:j.reducer}}),p=(c(29),c(1)),f=c(15),h=c.n(f),m=c(0),O=function(t){return Object(m.jsx)("section",{className:"".concat(h.a.card," ").concat(t.className?t.className:""),children:t.children})},x=c(16),_=c.n(x),y=c(4),v=c.n(y),g=function(t){var e=Object(i.b)(),c=t.item,n=c.title,r=c.quantity,a=c.total,s=c.price,o=c.id;return Object(m.jsxs)("li",{className:v.a.item,children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("h3",{children:n}),Object(m.jsxs)("div",{className:v.a.price,children:["$",a.toFixed(2)," ",Object(m.jsxs)("span",{className:v.a.itemprice,children:["($",s.toFixed(2),"/item)"]})]})]}),Object(m.jsxs)("div",{className:v.a.details,children:[Object(m.jsxs)("div",{className:v.a.quantity,children:["x ",Object(m.jsx)("span",{children:r})]}),Object(m.jsxs)("div",{className:v.a.actions,children:[Object(m.jsx)("button",{onClick:function(){e(l.removeItemFromCart(o))},children:"-"}),Object(m.jsx)("button",{onClick:function(){e(l.addItemToCart({id:o,title:n,price:s}))},children:"+"})]})]})]})},C=function(t){var e=Object(i.c)((function(t){return t.cart.items}));return Object(m.jsxs)(O,{className:_.a.cart,children:[Object(m.jsx)("h2",{children:"Your Shopping Cart"}),Object(m.jsx)("ul",{children:e.map((function(t){return Object(m.jsx)(g,{item:{id:t.id,title:t.name,quantity:t.quantity,total:t.totalPrice,price:t.price}},t.id)}))})]})},N=c(11),w=c.n(N),I=function(t){var e=Object(i.b)(),c=Object(i.c)((function(t){return t.cart.totalQuantity}));return Object(m.jsxs)("button",{className:w.a.button,onClick:function(){e(o.toggle())},children:[Object(m.jsx)("span",{children:"My Cart"}),Object(m.jsx)("span",{className:w.a.badge,children:c})]})},k=c(17),P=c.n(k),S=function(t){return Object(m.jsxs)("header",{className:P.a.header,children:[Object(m.jsx)("h1",{children:"ReduxCart"}),Object(m.jsx)("nav",{children:Object(m.jsx)("ul",{children:Object(m.jsx)("li",{children:Object(m.jsx)(I,{})})})})]})},q=function(t){return Object(m.jsxs)(p.Fragment,{children:[Object(m.jsx)(S,{}),Object(m.jsx)("main",{children:t.children})]})},Q=c(7),E=c.n(Q),F=function(t){var e=Object(i.b)(),c=t.title,n=t.price,r=t.description,a=t.id;return Object(m.jsx)("li",{className:E.a.item,children:Object(m.jsxs)(O,{children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("h3",{children:c}),Object(m.jsxs)("div",{className:E.a.price,children:["$",n.toFixed(2)]})]}),Object(m.jsx)("p",{children:r}),Object(m.jsx)("div",{className:E.a.actions,children:Object(m.jsx)("button",{onClick:function(){e(l.addItemToCart({id:a,title:c,price:n}))},children:"Add to Cart"})})]})})},T=c(18),B=c.n(T),M=[{id:"p1",price:6,title:"My First Book",description:"The first book I ever wrote"},{id:"p2",price:5,title:"My Second Book",description:"The second book I ever wrote"}],W=function(t){return Object(m.jsxs)("section",{className:B.a.products,children:[Object(m.jsx)("h2",{children:"Buy your favorite products"}),Object(m.jsx)("ul",{children:M.map((function(t){return Object(m.jsx)(F,{id:t.id,title:t.title,price:t.price,description:t.description},t.id)}))})]})},z=c(8),J=c.n(z),V=function(t){var e="";"error"===t.status&&(e=J.a.error),"success"===t.status&&(e=J.a.success);var c="".concat(J.a.notification," ").concat(e);return Object(m.jsxs)("section",{className:c,children:[Object(m.jsx)("h2",{children:t.title}),Object(m.jsx)("p",{children:t.message})]})},G=c(3),R=c(6),D=!0;var H=function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.ui.cartIsVisible})),c=Object(i.c)((function(t){return t.cart})),n=Object(i.c)((function(t){return t.ui.notification}));return Object(p.useEffect)((function(){t(function(){var t=Object(R.a)(Object(G.a)().mark((function t(e){var c,n;return Object(G.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){var t=Object(R.a)(Object(G.a)().mark((function t(){var e,c;return Object(G.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://react-router-test-app-default-rtdb.firebaseio.com/cart.json","?auth=").concat("W8ll6RkGftQAhXG1giDb0aEH5dPe4TzglQWCzxCp"));case 2:if((e=t.sent).ok){t.next=5;break}throw new Error("Could not fetch cart data!");case 5:return t.next=7,e.json();case 7:return c=t.sent,t.abrupt("return",c);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=1,t.next=4,c();case 4:n=t.sent,e(l.replaceCart({items:n.items||[],totalQuantity:n.totalQuantity})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(o.showNotification({status:"error",title:"Error!",message:"Fetching cart data failed!"}));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())}),[t]),Object(p.useEffect)((function(){D?D=!1:c.changed&&t(function(t){return function(){var e=Object(R.a)(Object(G.a)().mark((function e(c){var n;return Object(G.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(o.showNotification({status:"pending",title:"Sending...",message:"Sending cart data!"})),n=function(){var e=Object(R.a)(Object(G.a)().mark((function e(){return Object(G.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-router-test-app-default-rtdb.firebaseio.com/cart.json",{method:"PUT",body:JSON.stringify({items:t.items,totalQuantity:t.totalQuantity})});case 2:if(e.sent.ok){e.next=5;break}throw new Error("Sending cart data failed.");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=2,e.next=5,n();case 5:c(o.showNotification({status:"success",title:"Success!",message:"Sent cart data successfully!"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),c(o.showNotification({status:"error",title:"Error!",message:"Sending cart data failed!"}));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()}(c))}),[c,t]),Object(m.jsxs)(p.Fragment,{children:[n&&Object(m.jsx)(V,{status:n.status,title:n.title,message:n.message}),Object(m.jsxs)(q,{children:[e&&Object(m.jsx)(C,{}),Object(m.jsx)(W,{})]})]})};r.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(i.a,{store:b,children:Object(m.jsx)(H,{})}))}],[[31,1,2]]]);
//# sourceMappingURL=main.85a76328.chunk.js.map