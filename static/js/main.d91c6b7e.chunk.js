(this["webpackJsonpapp-demo"]=this["webpackJsonpapp-demo"]||[]).push([[0],{58:function(e,a,t){e.exports=t(70)},70:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),i=t.n(l),o=t(108),c=t(25),m=t(95),s=t(97),u=t(42),d=t.n(u),p=t(72),E=Object(p.a)((function(){return{typographyStyles:{textAlign:"center",flex:1},root:{textAlign:"center"}}})),g=function(){var e=E();return r.a.createElement(m.a,{position:"static"},r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(c.a,{textAlign:"center",m:1,className:e.typographyStyles},"PirloTV")),r.a.createElement(d.a,null)))},v=t(18),h=t(98),y=t(99),f=t(103),b=t(102),O=t(104),C=t(43),w=t.n(C),x=t(100),k=t(101),N=t(111),j=t(105),A=t(106),P=t(107),B=function(e){var a=r.a.useState(!1),t=Object(v.a)(a,2),n=t[0],l=t[1],i=function(){l(!1)},o=e.title,m=e.liga,s=e.dia,u=e.imageUrl,d=e.m3u81;return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(y.a,{action:r.a.createElement(x.a,{"aria-label":"settings"},r.a.createElement(w.a,null)),title:m,subheader:s}),r.a.createElement(k.a,{style:{height:"150px"},image:u}),r.a.createElement(b.a,null,r.a.createElement(c.a,{variant:"body2",component:"p"},o)),r.a.createElement(f.a,null,r.a.createElement(O.a,{size:"small",onClick:function(){l(!0)}},"Abrir"),r.a.createElement(O.a,{color:"secondary"},"Estadisticas"))),r.a.createElement(N.a,{open:n,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(j.a,{id:"alert-dialog-title"},"Opciones Disponibles"),r.a.createElement(A.a,null,r.a.createElement(O.a,{variant:"outlined",color:"primary",href:d},"OPCION 1")," \xa0",r.a.createElement(O.a,{variant:"outlined",color:"primary",href:d},"OPCION 2")," \xa0",r.a.createElement(O.a,{variant:"outlined",color:"primary",href:d},"OPCION 3")," \xa0"),r.a.createElement(P.a,null,r.a.createElement(O.a,{onClick:i,color:"primary"},"Disagree"),r.a.createElement(O.a,{onClick:i,color:"primary",autoFocus:!0},"Agree"))))},I=[{title:"RB Leipzig - Atletico Madrid",dia:"13/08/2020",liga:"Champions League",imageUrl:"https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/08/15/15975065154256.png",m3u81:"go:m3u81",m3u82:"https://cdm.dailysport.pw/2/2.m3u8?1107",m3u83:"https://cdm.dailysport.pw/3/3.m3u8?1107"}],z=function(){return r.a.createElement(o.a,{container:!0,spacing:1},I.map((function(e){return function(e){return r.a.createElement(o.a,{item:!0,xs:12,sm:8},r.a.createElement(B,e))}(e)})))},L=t(44),S=t.n(L),U={size:40,count:5,isHalf:!1,value:4,color:"blue",activeColor:"yellow",onChange:function(e){console.log("Example 3: new value is ".concat(e)),alert(1===e?"redireccion del valor 1":2===e?"redireccion del valor 2":3===e?"redireccion del valor 3":4===e?"redireccion del valor 4":"redireccion del valor 5")}};function D(){return r.a.createElement("div",{className:"App"},r.a.createElement(S.a,U))}var _=function(){var e=r.a.useState(!0),a=Object(v.a)(e,2),t=a[0],n=a[1],l=function(){n(!1)};return r.a.createElement("div",null,r.a.createElement(N.a,{open:t,onClose:l,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(j.a,{id:"alert-dialog-title"},"Puntuar APP"),r.a.createElement(A.a,null,r.a.createElement(D,null)),r.a.createElement(P.a,null,r.a.createElement(O.a,{onClick:l,color:"primary"},"Despues"),r.a.createElement(O.a,{onClick:l,color:"primary",autoFocus:!0},"Aceptar"))))},F=t(109),T=Object(F.a)({root:{width:"100%",maxWidth:500}}),V=function(e){var a=e.title,t=T();return r.a.createElement("div",{className:t.root},r.a.createElement(c.a,{variant:"h6",gutterBottom:!0},a))},W=t(46),J=t(4),K=t(45),M=t.n(K),R=Object(J.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var a=e.children,t=e.classes,n=e.onClose,l=Object(W.a)(e,["children","classes","onClose"]);return r.a.createElement(j.a,Object.assign({disableTypography:!0,className:t.root},l),r.a.createElement(c.a,{variant:"h6"},a),n?r.a.createElement(x.a,{"aria-label":"close",className:t.closeButton,onClick:n},r.a.createElement(M.a,null)):null)})),G=Object(J.a)((function(e){return{root:{padding:e.spacing(2)}}}))(A.a),H=Object(J.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(P.a),Y=function(e){var a=e.m3u81,t=r.a.useState(!1),n=Object(v.a)(t,2),l=n[0],i=n[1],o=function(){i(!1)};return r.a.createElement("div",null,r.a.createElement(O.a,{variant:"outlined",color:"primary",onClick:function(){i(!0)}},"Ver Opciones"),r.a.createElement(N.a,{onClose:o,"aria-labelledby":"customized-dialog-title",open:l},r.a.createElement(R,{id:"customized-dialog-title",onClose:o},"Opciones Disponibles"),r.a.createElement(G,{dividers:!0},r.a.createElement(O.a,{variant:"outlined",color:"primary",href:a},"OPCION 1")," \xa0",r.a.createElement(O.a,{variant:"outlined",color:"primary",href:a},"OPCION 2")," \xa0",r.a.createElement(O.a,{variant:"outlined",color:"primary",href:a},"OPCION 3")," \xa0"),r.a.createElement(H,null,r.a.createElement(O.a,{autoFocus:!0,onClick:o,color:"primary"},"Aceptar"))))},$=t(47),q=[{title:"RB Leipzig - Atletico Madrid",dia:"08/2020",m3u81:"https://cdm.dailysport.pw/1/1.m3u8?1107",m3u82:"https://cdm.dailysport.pw/2/2.m3u8?1107",m3u83:"https://cdm.dailysport.pw/3/3.m3u8?1107",avatarUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e0/Keurig_Logo.png",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61-KUPluVYL._AC_SL1500_.jpg"}],Q=Object(F.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),color:e.palette.text.primary}}})),X=function(){var e=Q();return r.a.createElement(o.a,{container:!0,spacing:12},q.map((function(a){return function(a){return r.a.createElement("div",{className:e.root},r.a.createElement(o.a,{container:!0,spacing:3},r.a.createElement(o.a,{item:!0,xs:12},r.a.createElement($.a,{className:e.paper},r.a.createElement(V,a),r.a.createElement(Y,a)))))}(a)})))},Z=t(110),ee=function(){return r.a.createElement(o.a,{container:!0,direction:"column",spacing:3,xs:12},r.a.createElement(_,null),r.a.createElement(o.a,{item:!0},r.a.createElement(g,null),r.a.createElement(Z.a,null)),r.a.createElement(o.a,{item:!0,container:!0},r.a.createElement(o.a,{item:!0,xs:!1,sm:2}),r.a.createElement(o.a,{item:!0,xs:12,sm:8},r.a.createElement(c.a,{variant:"h5",gutterBottom:!0},"Partidos destacados:"),r.a.createElement(z,null),r.a.createElement("br",null),r.a.createElement(Z.a,{variant:"middle"}),r.a.createElement("br",null),r.a.createElement(o.a,{item:!0,xs:!1,sm:2}),r.a.createElement(c.a,{variant:"h5",gutterBottom:!0},"Todos los partidos de hoy:"),r.a.createElement(Z.a,null),r.a.createElement(X,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.d91c6b7e.chunk.js.map