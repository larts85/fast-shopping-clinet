(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,n,t){},109:function(e,n,t){},137:function(e,n,t){"use strict";t.r(n);var r,o,a,i,c,d,l,s,u,b,p,h,j,f,x,g,m,O,v,w,y,C,L,k,M,S,P,V,R,H,E,T,I,D=t(0),_=t.n(D),z=t(12),N=t.n(z),q=(t(108),t(20)),A=(t(109),t(36)),Z=t(15),F=t(40),B=t(7),U=t(8),J=U.a.button(r||(r=Object(B.a)(["\n  padding: 5px;\n  padding-inline: 10px;\n  font-weight: bold;\n  color: ",";\n  border: solid 2px;\n  border-color: ",";\n  border-radius: ",";\n  background-color: ",";\n  box-shadow: ",";\n  outline: none;\n  cursor: ",";\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.disabled?ee[e.mode].colors.disable:ee[e.mode].colors.text}),(function(e){return e.disabled?ee[e.mode].colors.disable:ee[e.mode].colors.borderColor}),(function(e){return ee[e.border].borderRadius}),(function(e){return ee[e.mode].colors.bgPrimary}),(function(e){return e.disabled?ee[e.mode].colors.disabledShadow:ee[e.mode].colors.shadows}),(function(e){return e.disabled?"initial":"pointer"}),(function(e){var n;return e.disabled?ee[e.mode].colors.bgPrimary:null===(n=ee[e.mode])||void 0===n?void 0:n.colors.hover})),X="375px",Y="425px",Q="768px",$="1024px",G="1440px",W="2560px",K={mobileS:"(max-width: ".concat("320px",")"),mobileM:"(max-width: ".concat(X,")"),mobileL:"(max-width: ".concat(Y,")"),tablet:"(max-width: ".concat(Q,")"),laptop:"(max-width: ".concat($,")"),laptopL:"(max-width: ".concat(G,")"),desktop:"(max-width: ".concat(W,")"),desktopL:"(max-width: ".concat(W,")")},ee={darkMode:{colors:{bgPrimary:"#333333",bgSecondary:"#292929",text:"#e9e9e9",borderColor:"#e9e9e9",shadows:"2px 2px 1px #b6b6b6",disabledShadow:"2px 2px 2px #000000",hover:"#b2b2b2",disable:"#000",icons:"#000"}},lightMode:{colors:{bgPrimary:"#ffffff",bgSecondary:"#eeeeee",text:"#333333",borderColor:"#2d2d2d",shadows:"2px 2px 2px #000000",disabledShadow:"2px 2px 2px #b6b6b6",hover:"#d3d3d3",disable:"#d3d3d3",icons:"#333333"}},rounded:{borderRadius:"12px"},cornered:{borderRadius:0}},ne=U.a.div(o||(o=Object(B.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  padding-inline: 30px;\n  padding-block: 30px;\n  @media "," {\n    padding: 10px;\n  }\n"])),K.mobileM),te=t(43),re=t(11),oe=U.a.div(a||(a=Object(B.a)(["\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 500px;\n  height: 250px;\n  padding: 15px;\n  padding-right: 25px;\n  padding-left: 25px;\n  margin: 20px;\n  border: solid 3px;\n  background-color: ",";\n  border-radius: ",";\n  border-color: ",";\n  @media "," {\n    transform: scale(0.9);\n  }\n  @media "," {\n    transform: scale(0.8);\n  }\n  @media "," {\n    transform: scale(0.7);\n  }\n"])),(function(e){var n;return null===(n=ee[e.mode])||void 0===n?void 0:n.colors.bgSecondary}),(function(e){return ee[e.border].borderRadius}),(function(e){var n;return null===(n=ee[e.mode])||void 0===n?void 0:n.colors.borderColor}),K.mobileL,K.mobileM,K.mobileS),ae=U.a.h2(i||(i=Object(B.a)(["\n  margin: 0;\n"]))),ie=U.a.h5(c||(c=Object(B.a)(["\n  margin: 0;\n  margin-top: 5px;\n  margin-bottom: 10px;\n"]))),ce=U.a.div(d||(d=Object(B.a)(["\n  height: 100%;\n  overflow-y: auto;\n  margin-bottom: 10px;\n  & p {\n    text-align: start;\n    font-weight: 500;\n    margin-top: 0;\n    padding-right: 5px;\n    line-height: 20px;\n  }\n"]))),de=U.a.div(l||(l=Object(B.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),le=U.a.h3(s||(s=Object(B.a)(['\n  display: inline;\n  margin: 0;\n  &::before {\n    content: "$";\n  }\n  font-size: large;\n']))),se=t(14),ue="GET_PRODUCTS",be="EMPTY_PRODUCTS",pe="CREATE_ORDER",he="DELETE_ORDER",je="MODIFY_TOTAL",fe="SET_FINISHED_ORDER",xe="ADD_PRODUCT_TO_CART",ge="DELETE_CART_ITEM",me="UPDATE_CART_PRODUCT",Oe="EMPTY_CART",ve=function(e){return function(n){n({type:ge,payload:e})}},we=function(e){return function(n){n({type:me,payload:e})}},ye=t(2),Ce=function(e){var n=e.productData,t=e.darkMode,r=e.rounded,o=Object(se.b)(),a=Object(D.useState)(!1),i=Object(q.a)(a,2),c=i[0],d=i[1],l=Object(se.c)((function(e){return e.orderlines})).cart,s=Object(D.useState)(""),u=Object(q.a)(s,2),b=u[0],p=u[1],h=Object(D.useState)(n.stock),j=Object(q.a)(h,2),f=j[0],x=j[1];Object(D.useEffect)((function(){!function(){var e="";n.categories.forEach((function(n){var t=n.name;e+=e?", "+t:t})),p(e)}()}),[]);Object(D.useEffect)((function(){!function(e){var t=(l.find((function(n){return n.productsId===e}))||{}).quantity;0===n.stock||t&&t>=n.stock?d(!0):t&&x(n.stock-t)}(n.id)}),[l]);return Object(ye.jsxs)(oe,{mode:t,border:r,children:[Object(ye.jsx)(ae,{children:null===n||void 0===n?void 0:n.name}),Object(ye.jsx)(ie,{children:b}),Object(ye.jsx)(ce,{className:"p",children:Object(ye.jsx)("p",{children:null===n||void 0===n?void 0:n.description})}),Object(ye.jsxs)(de,{children:[Object(ye.jsxs)("span",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:10},children:[Object(ye.jsx)(J,{disabled:c,onClick:function(){var e,t=l.find((function(e){return e.productsId===n.id}));if(t){var r=l.filter((function(e){return e.productsId!==n.id})),a=t.price*(t.quantity+1),i=[].concat(Object(te.a)(r),[Object(re.a)(Object(re.a)({},t),{},{quantity:t.quantity+1,subTotal:a})]);o(we(i))}else o((e=Object(re.a)(Object(re.a)({},n),{},{id:null,productsId:n.id,quantity:1,categories:b,subTotal:Number(n.price)}),function(n){n({type:xe,payload:e})}))},mode:t,border:r,children:"Add to cart"}),Object(ye.jsx)("span",{children:c?"No products in stock":"".concat(f," in stock")})]}),Object(ye.jsx)(le,{children:null===n||void 0===n?void 0:n.price})]})]})},Le=t(44),ke=t.n(Le),Me=t(59),Se=t(60),Pe=t.n(Se),Ve="https://fast-shopping-cart.herokuapp.com",Re=function(){var e=Object(Me.a)(ke.a.mark((function e(){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pe.a.get("".concat(Ve,"/products"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),He=function(e){var n=e.pagination,t=e.darkMode,r=e.rounded,o=n.page,a=n.rowsPerPage,i=Object(se.b)(),c=Object(se.c)((function(e){return e.products})).products,d=Object(D.useState)([]),l=Object(q.a)(d,2),s=l[0],u=l[1];return Object(D.useEffect)((function(){u(c.slice(o*a,o*a+a))}),[c,o,a]),Object(D.useEffect)((function(){Re().then((function(e){var n=e.data;i(function(e){return function(n){n({type:ue,payload:e})}}(n))})).catch((function(e){throw e}))}),[]),Object(ye.jsxs)(ye.Fragment,{children:[Object(ye.jsx)(F.a,{children:Object(ye.jsx)("title",{children:"Products List"})}),Object(ye.jsx)(ne,{mode:t,rounded:r,children:s.map((function(e,n){return Object(ye.jsx)(Ce,{productData:e,darkMode:t,rounded:r},n)}))})]})},Ee=U.a.header(u||(u=Object(B.a)(["\n  display: flex;\n  position: sticky;\n  justify-content: space-between;\n  padding-inline: 65px;\n  height: ",";\n  align-items: center;\n  color: ",";\n  @media "," {\n    justify-content: space-evenly;\n    padding: 10px;\n  }\n  @media "," {\n    justify-content: center;\n    flex-direction: column;\n    padding: 10px;\n    height: 200px;\n  }\n"])),"100px",(function(e){var n;return null===(n=ee[e.mode])||void 0===n?void 0:n.colors.text}),K.tablet,K.tablet),Te=U.a.div(b||(b=Object(B.a)(["\n  display: flex;\n  align-items: center;\n  gap: 1em;\n"]))),Ie=U.a.div(p||(p=Object(B.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  & h1 {\n    margin-left: 0.5em;\n    letter-spacing: 1px;\n  }\n"]))),De=U.a.hr(h||(h=Object(B.a)(["\n  background-color: ",";\n  color: ",";\n  height: 3px;\n  margin-inline: 50px;\n  margin-block: 0;\n"])),(function(e){var n;return null===(n=ee[e.mode])||void 0===n?void 0:n.colors.borderColor}),(function(e){var n;return null===(n=ee[e.mode])||void 0===n?void 0:n.colors.borderColor})),_e=Ee,ze=t(90),Ne=t.n(ze),qe=t(172),Ae=t(175),Ze=t(176),Fe=Object(Ae.a)(Ze.a)((function(e){var n=e.mode;return{width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>\')')},"& + .MuiSwitch-track":{opacity:1,backgroundColor:"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:ee[n].colors.icons,width:32,height:32,"&:before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>\')')}},"& .MuiSwitch-track":{opacity:1,backgroundColor:"#aab4be",borderRadius:10}}})),Be=Object(Ae.a)(Ze.a)((function(e){var n=e.border,t=e.mode;return{width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{},"& + .MuiSwitch-track":{backgroundColor:"#aab4be",opacity:1}}},"& .MuiSwitch-thumb":{backgroundColor:ee[t].colors.icons,width:32,height:32,borderRadius:ee[n].borderRadius,"&:before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0}},"& .MuiSwitch-track":{opacity:1,backgroundColor:"#aab4be",borderRadius:10}}})),Ue=function(e){var n=(e||{}).mode;return Object(ye.jsx)("svg",{width:"70",height:"53",viewBox:"0 0 661 502",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(ye.jsxs)("g",{id:"shopping-cart",children:[Object(ye.jsxs)("g",{id:"Vector",children:[Object(ye.jsx)("path",{d:"M258.253 11.2043C259.259 4.7551 264.813 0 271.34 0C279.185 0 285.311 6.78042 284.517 14.5851L283 29.5C281.395 45.2858 293.785 59 309.652 59H623.36C650.315 59 668.223 86.8989 657 111.406L532.89 382.406C526.864 395.563 513.721 404 499.249 404H240.217C217.51 404 200.16 383.735 203.659 361.299L258.253 11.2043Z",fill:ee[n].colors.icons}),Object(ye.jsx)("path",{d:"M301.438 477.974C291.045 497.78 269.338 506.867 252.955 498.27C236.572 489.673 231.717 466.648 242.11 446.841C252.504 427.035 274.21 417.948 290.593 426.545C306.976 435.142 311.831 458.168 301.438 477.974Z",fill:ee[n].colors.icons}),Object(ye.jsx)("path",{d:"M453.164 478.066C442.771 497.872 421.064 506.959 404.681 498.362C388.299 489.765 383.443 466.74 393.836 446.934C404.23 427.128 425.936 418.041 442.319 426.638C458.702 435.235 463.557 458.26 453.164 478.066Z",fill:ee[n].colors.icons}),Object(ye.jsx)("path",{d:"M13.1819 107.243C14.285 104.669 16.8157 103 19.6159 103H145.544C150.528 103 153.915 108.06 152.016 112.667C150.936 115.289 148.38 117 145.544 117H19.6159C14.5905 117 11.2023 111.862 13.1819 107.243Z",fill:ee[n].colors.icons}),Object(ye.jsx)("path",{d:"M1.18192 291.243C2.28498 288.669 4.81574 287 7.61594 287H133.544C138.528 287 141.915 292.06 140.016 296.667C138.936 299.289 136.38 301 133.544 301H7.61592C2.59052 301 -0.797681 295.862 1.18192 291.243Z",fill:ee[n].colors.icons}),Object(ye.jsx)("path",{d:"M48.1819 206.243C49.285 203.669 51.8157 202 54.6159 202H180.544C185.528 202 188.915 207.06 187.016 211.667C185.936 214.289 183.38 216 180.544 216H54.6159C49.5905 216 46.2023 210.862 48.1819 206.243Z",fill:ee[n].colors.icons})]}),Object(ye.jsxs)("g",{id:"Vector_2",children:[Object(ye.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M609.954 83.7165C611.63 83.2841 613.408 83.7938 614.6 85.0479L625.259 96.2614C626.422 97.485 626.851 99.2327 626.385 100.856L622.037 116.031C621.572 117.653 620.282 118.909 618.647 119.331L603.667 123.196C601.992 123.629 600.214 123.119 599.022 121.865L588.363 110.652C587.2 109.428 586.771 107.68 587.236 106.058L591.585 90.8825C592.05 89.2597 593.339 88.0044 594.974 87.5825C594.974 87.5825 594.974 87.5825 594.974 87.5825L609.954 83.7165ZM613.15 86.4258C612.459 85.6979 611.426 85.4021 610.454 85.6531L595.474 89.5191C594.525 89.7639 593.777 90.4922 593.508 91.4335L589.159 106.609C588.889 107.55 589.138 108.564 589.813 109.274L600.471 120.487C601.163 121.215 602.195 121.511 603.168 121.26L618.148 117.394C618.148 117.394 618.148 117.394 618.148 117.394C619.096 117.149 619.844 116.421 620.114 115.48L624.463 100.305C624.733 99.3634 624.484 98.3494 623.809 97.6393C623.809 97.6393 623.809 97.6393 623.809 97.6393L613.15 86.4258Z",fill:"white"}),Object(ye.jsx)("path",{d:"M596.122 111.646V110.979L596.985 110.831V104.76L596.122 104.612V103.94H599.141C599.822 103.94 600.415 104.102 600.92 104.427C601.428 104.751 601.823 105.198 602.106 105.766C602.388 106.334 602.529 106.983 602.529 107.713V107.878C602.529 108.59 602.393 109.233 602.122 109.804C601.85 110.372 601.463 110.822 600.962 111.154C600.464 111.482 599.875 111.646 599.193 111.646H596.122ZM598.029 110.831H599.141C599.628 110.831 600.046 110.699 600.395 110.434C600.745 110.166 601.013 109.81 601.2 109.365C601.391 108.917 601.486 108.421 601.486 107.878V107.703C601.486 107.142 601.391 106.641 601.2 106.2C601.013 105.755 600.745 105.404 600.395 105.146C600.046 104.889 599.628 104.76 599.141 104.76H598.029V110.831ZM603.302 111.646V110.979L604.165 110.831V104.76L603.302 104.612V103.94H609.01V105.792H608.174L608.057 104.744H605.209V107.253H608.052V108.073H605.209V110.863H608.227L608.343 109.799H609.175V111.646H603.302ZM613.331 111.646L610.747 104.697L610.133 104.612V103.94H612.569V104.612L611.864 104.723L613.591 109.624L613.771 110.233H613.802L613.993 109.624L615.783 104.718L614.999 104.612V103.94H617.429V104.612L616.81 104.697L614.226 111.646H613.331Z",fill:"white"}),Object(ye.jsx)("path",{d:"M596.899 102.036V101.48L597.619 101.357V96.2976L596.899 96.174V95.6139H599.207V96.174L598.488 96.2976V101.357L599.207 101.48V102.036H596.899ZM600.262 97.6561L599.768 97.3297C599.906 97.1209 600.01 96.9077 600.081 96.6901C600.152 96.4695 600.187 96.2328 600.187 95.98V95.1551H601.056V95.9667C601.056 96.2608 600.984 96.5651 600.84 96.8798C600.699 97.1944 600.506 97.4532 600.262 97.6561ZM601.828 102.036V101.48L602.547 101.357V96.2976L601.828 96.174V95.6139H603.708L605.777 100.488H605.804L607.807 95.6139H609.744V96.174L609.025 96.2976V101.357L609.744 101.48V102.036H607.437V101.48L608.195 101.357V96.8004L608.173 96.796L606.086 101.807H605.508L603.351 96.8048L603.328 96.8092L603.359 99.4954V101.357L604.136 101.48V102.036H601.828ZM610.468 102.036V101.48L610.944 101.414L613.19 95.6139H613.936L616.142 101.414L616.615 101.48V102.036H614.77V101.48L615.255 101.396L614.832 100.214H612.259L611.823 101.396L612.308 101.48V102.036H610.468ZM612.529 99.4865H614.567L613.623 96.8754L613.57 96.7298H613.543L613.49 96.8754L612.529 99.4865Z",fill:"white"})]})]})})},Je=function(e){var n=e||{},t=n.darkMode,r=n.mode,o=n.setDarkMode,a=n.rounded,i=n.setRounded,c=n.border,d=Object(Z.f)(),l=Object(se.c)((function(e){return e.orderlines})).cart,s=function(e,n){"colors"===n?o(e.target.checked):i(e.target.checked)};return Object(ye.jsxs)(ye.Fragment,{children:[Object(ye.jsxs)(_e,{mode:r,children:[Object(ye.jsxs)(Ie,{children:[Object(ye.jsx)(A.b,{to:"/",children:Object(ye.jsx)(Ue,{mode:r})}),Object(ye.jsx)("h1",{children:"Fast Shopping"})]}),Object(ye.jsxs)(Te,{children:[Object(ye.jsxs)("form",{children:[Object(ye.jsx)(Fe,{mode:r,checked:t,onChange:function(e){return s(e,"colors")}}),Object(ye.jsx)(Be,{mode:r,border:c,checked:a,onChange:function(e){return s(e,"corners")}})]}),"/"===d.pathname&&Object(ye.jsx)(A.b,{to:l.length?"/cart":"/",children:Object(ye.jsx)(qe.a,{badgeContent:l.length,color:"error",children:Object(ye.jsx)(Ne.a,{style:{color:ee[r].colors.icons,fontSize:40}})})})]})]}),Object(ye.jsx)(De,{mode:r})]})},Xe=U.a.div(j||(j=Object(B.a)(["\n  display: flex;\n  margin: 0px;\n  width: 100%;\n  height: ",";\n  min-height: 50px;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  @media "," {\n    justify-content: flex-start;\n  }\n  @media "," {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"])),"100px",(function(e){var n;return null===(n=ee[e.mode])||void 0===n?void 0:n.colors.text}),K.mobileL,K.mobileS),Ye=t(173),Qe=function(e){var n=e.pagination,t=e.mode,r=n.productsQuantity,o=n.page,a=n.rowsPerPage,i=n.handleChangePage,c=n.handleChangeRowsPerPage;return Object(ye.jsx)(ye.Fragment,{children:Object(ye.jsx)(Ye.a,{style:{color:ee[t].colors.text},labelRowsPerPage:"Products per page",rowsPerPageOptions:[20],component:"div",count:r,rowsPerPage:a,page:o,onChangePage:i,onChangeRowsPerPage:c})})},$e=function(e){var n=e.pagination,t=e.darkMode,r=e.rounded,o=n.page,a=n.rowsPerPage,i=n.handleChangePage,c=n.handleChangeRowsPerPage,d=Object(se.c)((function(e){return e.products})).products;return Object(ye.jsx)(Xe,{mode:t,border:r,children:Object(ye.jsx)(Qe,{mode:t,pagination:{productsQuantity:null===d||void 0===d?void 0:d.length,handleChangePage:i,handleChangeRowsPerPage:c,page:o,rowsPerPage:a}})})},Ge=t(58),We=U.a.div(f||(f=Object(B.a)(["\n  padding-inline: 50px;\n  padding-top: 20px;\n  padding-bottom: 40px;\n  color: ",";\n  @media "," {\n    padding: 20px;\n  }\n"])),(function(e){var n;return null===(n=ee[e.mode])||void 0===n?void 0:n.colors.text}),K.mobileM),Ke=U.a.h2(x||(x=Object(B.a)(["\n  letter-spacing: 0.8px;\n"]))),en=U.a.div(g||(g=Object(B.a)(["\n  display: flex;\n  justify-content: flex-end;\n  & h2 {\n    margin: 0;\n    margin-right: 3px;\n  }\n"]))),nn=U.a.div(m||(m=Object(B.a)(["\n  display: flex;\n  align-items: center;\n  & a {\n    color: #235e9e;\n    font-weight: 500;\n    margin-left: 20px;\n  }\n"]))),tn=We,rn=U.a.div(O||(O=Object(B.a)(["\n  display: flex;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  padding: 15px;\n  padding-right: 25px;\n  padding-left: 25px;\n  margin: 20px;\n  margin-inline: 0;\n  border: solid 3px;\n  background-color: ",";\n  border-radius: ",";\n  border-color: ",";\n  & button {\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n  }\n  @media "," {\n    padding: 10px;\n  }\n"])),(function(e){var n;return null===(n=ee[e.mode])||void 0===n?void 0:n.colors.bgSecondary}),(function(e){return ee[e.border].borderRadius}),(function(e){var n;return null===(n=ee[e.mode])||void 0===n?void 0:n.colors.borderColor}),K.mobileM),on=U.a.div(v||(v=Object(B.a)(["\n  width: 70%;\n  padding-right: 10px;\n  flex-grow: 1;\n  & h3 {\n    font-weight: bold;\n    text-align: left;\n    margin: 0;\n    margin-bottom: 10px;\n  }\n  & h5 {\n    margin: 0;\n    text-align: left;\n    letter-spacing: 1px;\n  }\n  @media "," {\n    padding-right: 0;\n  }\n"])),K.mobileL),an=U.a.div(w||(w=Object(B.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  min-width: fit-content;\n  width: 30%;\n  flex-grow: 1;\n"]))),cn=U.a.div(y||(y=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: space-evenly;\n  text-align: center;\n"]))),dn=U.a.p(C||(C=Object(B.a)(["\n  margin: ",";\n  font-size: ",";\n  font-weight: 600;\n  text-align: center;\n  width: ",';\n  &::before {\n    content: "$";\n  }\n  @media '," {\n    font-size: 14px;\n    width: fit-content;\n  }\n"])),(function(e){return e.margin}),(function(e){return e.fontSize||"initial"}),(function(e){return e.width||"initial"}),K.mobileL),ln=U.a.div(L||(L=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  flex-grow: 2;\n  justify-content: space-evenly;\n  & span {\n    margin-bottom: 10px;\n  }\n"]))),sn=U.a.select(k||(k=Object(B.a)(["\n  flex-grow: 1;\n  outline: none;\n  width: 60px;\n  border: solid 1px;\n  padding-block: 2px;\n  padding-right: 5px;\n  padding-left: 5px;\n  color: ",";\n  border-color: ",";\n  border-radius: ",";\n  background-color: ",";\n  cursor: pointer;\n"])),(function(e){var n;return null===(n=ee[e.mode])||void 0===n?void 0:n.colors.text}),(function(e){var n;return null===(n=ee[e.mode])||void 0===n?void 0:n.colors.borderColor}),(function(e){return ee[e.border].borderRadius}),(function(e){var n;return null===(n=ee[e.mode])||void 0===n?void 0:n.colors.bgPrimary})),un=t(91),bn=t.n(un),pn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.orderline,t=e.stock,r=e.mode,o=e.border,a=n||{},i=a.productsId,c=a.name,d=a.categories,l=a.price,s=a.quantity,u=Object(se.b)(),b=Object(Z.e)(),p=Object(se.c)((function(e){return e.orderlines})),h=p.cart,j=Number(l)*s,f=function(){1===h.length&&b.push("/"),u(ve(i))},x=function(e){var t=e.target.value,r=Number(l)*t,o=h.filter((function(e){return e.productsId!==n.productsId})),a=[].concat(Object(te.a)(o),[Object(re.a)(Object(re.a)({},n),{},{quantity:Number(t),subTotal:r})]);u(we(a))};return Object(ye.jsxs)(rn,{mode:r,border:o,children:[Object(ye.jsxs)(on,{children:[Object(ye.jsx)("h3",{children:c}),Object(ye.jsx)("h5",{children:d})]}),Object(ye.jsxs)(an,{children:[Object(ye.jsxs)(cn,{children:[Object(ye.jsx)("span",{children:"Unit Price"}),Object(ye.jsx)(dn,{margin:0,children:l})]}),Object(ye.jsxs)(ln,{children:[Object(ye.jsx)("span",{children:"Quantity"}),Object(ye.jsx)(sn,{onChange:x,value:s,mode:r,border:o,children:Array.apply(null,{length:t}).map((function(e,n){return Object(ye.jsx)("option",{value:n+1,children:n+1},e)}))})]}),Object(ye.jsx)(bn.a,{style:{color:ee[r].colors.text,marginLeft:10,marginRight:15,alignSelf:"flex-end",cursor:"pointer"},onClick:f}),Object(ye.jsx)(dn,{margin:"auto",fontSize:"21px",width:"80px",children:j})]})]})},hn=U.a.div(M||(M=Object(B.a)(["\n  margin: 20px;\n  margin-inline: 0;\n  display: flex;\n"]))),jn=U.a.div(S||(S=Object(B.a)(["\n  padding: 15px;\n  border: solid 3px;\n  border-color: ",";\n  border-radius: ",";\n  background-color: ",";\n  padding-right: 55px;\n  flex-grow: 1;\n  @media "," {\n    padding: 20px;\n  }\n"])),(function(e){var n;return null===(n=ee[e.mode])||void 0===n?void 0:n.colors.borderColor}),(function(e){return ee[e.border].borderRadius}),(function(e){var n;return null===(n=ee[e.mode])||void 0===n?void 0:n.colors.bgSecondary}),"(max-width: 500px)"),fn=U.a.h4(P||(P=Object(B.a)(["\n  font-weight: bold;\n  text-align: left;\n  margin-left: calc(25% + 25px);\n  @media "," {\n    margin: 0 0 10px 0;\n    text-align: center;\n  }\n"])),"(max-width: 500px)"),xn=U.a.div(V||(V=Object(B.a)(["\n  display: flex;\n  align-items: center;\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n  @media "," {\n    flex-direction: column;\n  }\n"])),"(max-width: 500px)"),gn=U.a.label(R||(R=Object(B.a)(["\n  width: 25%;\n  font-weight: bold;\n  font-size: 14px;\n  text-align: right;\n  margin-right: 25px;\n  @media "," {\n    margin-right: 0;\n    text-align: left;\n    width: 100%;\n  }\n"])),"(max-width: 500px)"),mn=U.a.input(H||(H=Object(B.a)(["\n  outline: none;\n  border: solid 2px;\n  padding: 5px;\n  padding-left: 10px;\n  color: ",";\n  border-color: ",";\n  background-color: ",";\n  border-radius: ",";\n  text-align: left;\n  line-height: 22px;\n  width: 75%;\n  @media "," {\n    width: 100%;\n  }\n"])),(function(e){var n;return null===(n=ee[e.mode])||void 0===n?void 0:n.colors.text}),(function(e){var n;return null===(n=ee[e.mode])||void 0===n?void 0:n.colors.borderColor}),(function(e){var n;return null===(n=ee[e.mode])||void 0===n?void 0:n.colors.bgPrimary}),(function(e){return ee[e.border].borderRadius}),"(max-width: 500px)"),On=U.a.textarea(E||(E=Object(B.a)(["\n  outline: none;\n  padding: 10px;\n  color: ",";\n  width: 75%;\n  min-height: 28px;\n  border: solid 2px black;\n  border-color: ",";\n  background-color: ",";\n  border-radius: ",";\n  resize: vertical;\n  @media "," {\n    width: 100%;\n  }\n"])),(function(e){var n;return null===(n=ee[e.mode])||void 0===n?void 0:n.colors.text}),(function(e){var n;return null===(n=ee[e.mode])||void 0===n?void 0:n.colors.borderColor}),(function(e){var n;return null===(n=ee[e.mode])||void 0===n?void 0:n.colors.bgPrimary}),(function(e){return ee[e.border].borderRadius}),"(max-width: 500px)"),vn=U.a.div(T||(T=Object(B.a)(["\n  flex-grow: 5;\n  @media "," {\n    display: none;\n  }\n"])),K.tablet),wn=function(e){var n=e.formRows,t=e.handleChange,r=e.mode,o=e.border;return Object(ye.jsxs)(hn,{children:[Object(ye.jsxs)(jn,{mode:r,border:o,children:[Object(ye.jsx)(fn,{children:"Customer Information"}),Object.entries(n).map((function(e,n){var a=Object(q.a)(e,2),i=(a[0],a[1]),c=i.label,d=i.type,l=i.value,s=i.required,u=i.name;return"textarea"===d?Object(ye.jsxs)(xn,{children:[Object(ye.jsxs)(gn,{htmlFor:u,children:[c,s&&"*"]}),Object(ye.jsx)(On,{required:s,mode:r,border:o,rows:"3",onChange:function(e){return t(e)}})]},n):Object(ye.jsxs)(xn,{children:[Object(ye.jsxs)(gn,{children:[c,s&&"*"]}),Object(ye.jsx)(mn,{name:u,required:s,id:u,mode:r,border:o,value:l,type:d,onChange:function(e){return t(e)}})]},n)}))]}),Object(ye.jsx)(vn,{})]})},yn=function(){var e=Object(Me.a)(ke.a.mark((function e(n){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pe.a.post("".concat(Ve,"/orders"),n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Cn=function(e){var n=e.darkMode,t=e.rounded,r=Object(se.b)(),o=Object(Z.e)(),a=Object(se.c)((function(e){return e.orderlines})).cart,i=Object(se.c)((function(e){return e.order})).total,c=Object(se.c)((function(e){return e.products})).products,d=Object(D.useState)({name:{label:"Full Name",type:"text",value:"",required:!0,name:"name"},id:{label:"ID",type:"text",value:"",required:!0,name:"id"},address:{label:"Address",type:"textarea",value:"",required:!0,name:"address"},phone:{label:"Phone Number",type:"tel",value:"",required:!1,name:"phone"},email:{label:"Email",type:"email",value:"",required:!0,name:"email"}}),l=Object(q.a)(d,2),s=l[0],u=l[1];Object(D.useEffect)((function(){var e,n=a.reduce((function(e,n){return e+n.subTotal}),0);r((e=n,function(n){n({type:je,payload:e})}))}),[a]);var b=function(e){var n;return null===(n=c.find((function(n){return n.id===e})))||void 0===n?void 0:n.stock};return Object(ye.jsxs)(tn,{children:[Object(ye.jsx)(F.a,{children:Object(ye.jsx)("title",{children:" Shopping Cart"})}),Object(ye.jsx)(Ke,{children:"Shopping Cart"}),a.map((function(e,r){return Object(ye.jsx)("div",{children:Object(ye.jsx)(pn,{mode:n,border:t,orderline:e,stock:b(e.productsId)})},r)})),Object(ye.jsx)(en,{children:Object(ye.jsxs)("h2",{children:["Total: ",Object(ye.jsxs)("span",{children:["$",i.toFixed(2)]})]})}),Object(ye.jsx)(Ke,{children:"Ready to order?"}),Object(ye.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={fullName:s.name.value,id:s.id.value,address:s.address.value,phone:s.phone.value,email:s.email.value},t=[];a.map((function(e){var n=e.productsId,r=e.quantity,o=e.subTotal;t.push({productsId:n,quantity:r,subTotal:o})})),yn({total:i,orderlines:t}).then((function(e){var t,o=e.status,a=e.data;200===o&&(r((t=a,function(e){e({type:pe,payload:t})})),r(function(e){return function(n){n({type:fe,payload:e})}}(n)),r((function(e){e({type:Oe})})),r((function(e){e({type:be})})))})).finally((function(){o.push("/thanks")})).catch((function(e){console.error(e)}))},children:[Object(ye.jsx)(wn,{formRows:s,handleChange:function(e){var n=e.target.name||"address";u(Object(re.a)(Object(re.a)({},s),{},Object(Ge.a)({},n,Object(re.a)(Object(re.a)({},s[n]),{},{value:e.target.value}))))},mode:n,border:t}),Object(ye.jsxs)(nn,{children:[Object(ye.jsx)(J,{mode:n,border:t,type:"submit",children:"Place Order"}),Object(ye.jsx)(A.b,{to:"/",children:"Back to List"})]})]})]})},Ln=U.a.div(I||(I=Object(B.a)(["\n  padding-block: 50px;\n  padding-inline: 20px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  & h1 {\n    font-size: 3em;\n  }\n  & h2 {\n    margin-top: 0;\n    margin-bottom: 2em;\n  }\n"]))),kn=function(e){var n,t=e.darkMode,r=e.rounded,o=Object(Z.e)(),a=Object(se.b)(),i=Object(se.c)((function(e){return e.order})).order,c=function(){a((function(e){e({type:he})})),o.push("/")};return Object(ye.jsxs)(Ln,{children:[Object(ye.jsx)(F.a,{children:Object(ye.jsx)("title",{children:"Thank you!"})}),Object(ye.jsx)("h1",{children:"Thanks for your purchase"}),Object(ye.jsx)("h2",{children:"".concat(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Lianel Artiles Sotolongo";return e.substr(0,e.indexOf(" "))}(null===(n=i.costumerData)||void 0===n?void 0:n.fullName),", we have created your order #").concat(i.id||Date.now(),". Your items will be soon at your door.")}),Object(ye.jsx)(J,{mode:t,border:r,onClick:function(){return c()},children:"Start Again"})]})},Mn=t(33),Sn=t(92),Pn=t(63),Vn=(t(138),{products:[]});var Rn={order:{costumerData:{}},total:0};var Hn={cart:[]};var En=t(94),Tn={key:"root",storage:t.n(En).a},In=Object(Pn.a)(Tn,{products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case ue:return{products:n.payload};case be:return{products:[]};default:return e}},order:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case pe:return Object(re.a)(Object(re.a)({},e),{},{order:n.payload});case he:return{order:{costumerData:{}},total:0};case je:return Object(re.a)(Object(re.a)({},e),{},{total:n.payload});case fe:return Object(re.a)(Object(re.a)({},e),{},{order:Object(re.a)(Object(re.a)({},e.order),{},{costumerData:n.payload})});default:return e}},orderlines:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Hn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case xe:return Object(re.a)(Object(re.a)({},e),{},{cart:[].concat(Object(te.a)(e.cart),[n.payload])});case ge:return Object(re.a)(Object(re.a)({},e),{},{cart:e.cart.filter((function(e){return(null===e||void 0===e?void 0:e.productsId)!==n.payload}))});case me:return Object(re.a)(Object(re.a)({},e),{},{cart:n.payload});case Oe:return{cart:[]};default:return e}}}),Dn=t(95),_n=t.n(Dn),zn=[Sn.a],Nn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Mn.c,qn=Object(Mn.d)(In,{},Nn(Mn.a.apply(void 0,zn),_n()())),An=Object(Pn.b)(qn),Zn=(se.c,t(96));var Fn=function(){var e=Object(D.useState)(0),n=Object(q.a)(e,2),t=n[0],r=n[1],o=Object(D.useState)(20),a=Object(q.a)(o,2),i=a[0],c=a[1],d=Object(D.useState)(function(){var e="dark"in localStorage,n=JSON.parse(localStorage.getItem("dark")),t=function(){if(window.matchMedia)return window.matchMedia("(prefers-color-scheme: dark)").matches}();return e?n:!!t}()),l=Object(q.a)(d,2),s=l[0],u=l[1],b=Object(D.useState)(function(){var e="rounded"in localStorage,n=JSON.parse(localStorage.getItem("rounded"));return!!e&&n}()),p=Object(q.a)(b,2),h=p[0],j=p[1],f=document.getElementsByTagName("body")[0],x=s?"darkMode":"lightMode",g=h?"rounded":"cornered";Object(D.useEffect)((function(){localStorage.setItem("dark",JSON.stringify(s)),f.style.setProperty("--bg-color",ee[x].colors.bgPrimary),f.style.setProperty("--text-color",ee[x].colors.text)}),[s]),Object(D.useEffect)((function(){localStorage.setItem("rounded",JSON.stringify(h))}),[h]);var m={page:t,rowsPerPage:i,handleChangePage:function(e,n){r(n)},handleChangeRowsPerPage:function(e){c(parseInt(e.target.value,10)),r(0)}};return Object(ye.jsx)("div",{className:"App",children:Object(ye.jsx)(Zn.a,{persistor:An,children:Object(ye.jsxs)(A.a,{children:[Object(ye.jsx)(Z.a,{path:"/",children:Object(ye.jsx)(Je,{mode:x,darkMode:s,rounded:h,border:g,setDarkMode:u,setRounded:j})}),Object(ye.jsx)(Z.a,{exact:!0,path:"/",children:Object(ye.jsx)(He,{pagination:m,darkMode:x,rounded:g})}),Object(ye.jsx)(Z.a,{exact:!0,path:"/cart",children:Object(ye.jsx)(Cn,{darkMode:x,rounded:g})}),Object(ye.jsx)(Z.a,{exact:!0,path:"/thanks",children:Object(ye.jsx)(kn,{darkMode:x,rounded:g})}),Object(ye.jsx)(Z.a,{exact:!0,path:"/",children:Object(ye.jsx)($e,{pagination:m,darkMode:x,rounded:g})})]})})})},Bn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,178)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),o(e),a(e),i(e)}))};N.a.render(Object(ye.jsx)(_.a.StrictMode,{children:Object(ye.jsx)(se.a,{store:qn,children:Object(ye.jsx)(Fn,{})})}),document.getElementById("root")),Bn()}},[[137,1,2]]]);
//# sourceMappingURL=main.34edbd07.chunk.js.map