(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,function(e,a,t){e.exports={activeBtn:"Affairs_activeBtn__vuyqF",nonActiveBtn:"Affairs_nonActiveBtn__3oHI6"}},,,function(e,a,t){e.exports={post:"Message_post__3rEq7",avatar:"Message_avatar__2Qh90",messageData:"Message_messageData__1UerQ",name:"Message_name__30Z7d",message:"Message_message__2reZU",time:"Message_time__3fhIr"}},,,,function(e,a,t){e.exports={someClass:"Greeting_someClass__3YZTH",error:"Greeting_error__2ZxYh",errorMessage:"Greeting_errorMessage__1oHCR",addBtn:"Greeting_addBtn__3hQgt"}},function(e,a,t){e.exports={blue:"HW4_blue__1ipKU",column:"HW4_column__2SDRh",superSpan:"HW4_superSpan__32_Sn"}},function(e,a,t){e.exports={navbar:"Header_navbar__3j3u3",hidden:"Header_hidden__1-FdI",shown:"Header_shown__2YftP"}},,function(e,a,t){e.exports={errorInput:"SuperInputText_errorInput__1Kdff",error:"SuperInputText_error__1u-hp",superInput:"SuperInputText_superInput__1rU1_"}},,function(e,a,t){e.exports={App:"App_App__2pN8f",menuBtn:"App_menuBtn__3e2NL"}},function(e,a,t){e.exports={smallerFont:"Affair_smallerFont__1Kfm5",removeBtn:"Affair_removeBtn__2nV2_"}},function(e,a,t){e.exports={default:"SuperButton_default__3d5ji",red:"SuperButton_red__1Zelp"}},function(e,a,t){e.exports={spanClassName:"SuperCheckbox_spanClassName__3b5mI",checkbox:"SuperCheckbox_checkbox__7LAb0"}},,,,,,,,,function(e,a,t){e.exports={error404:"Error404_error404__jpfC3"}},function(e,a,t){e.exports=t.p+"static/media/image.a6e13481.jpg"},function(e,a,t){e.exports=t.p+"static/media/imageArtem.08ac7b57.jpg"},,,,function(e,a,t){e.exports=t(51)},,,,,function(e,a,t){},,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(31),c=t.n(l),o=(t(43),t(3)),s=t(20),i=t.n(s),u=t(8),m=t(32),d=t.n(m),p=t(33),f=t.n(p);var E=function(){return r.a.createElement("div",{className:d.a.error404},r.a.createElement("div",null,"Error 404:"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"),r.a.createElement("br",null),r.a.createElement("img",{src:f.a}))},_=t(10),v=t.n(_);var h=function(e){return r.a.createElement("div",{className:v.a.post},r.a.createElement("div",{className:v.a.avatar},r.a.createElement("img",{src:e.avatar})),r.a.createElement("div",{className:v.a.messageData},r.a.createElement("div",{className:v.a.name},e.name),r.a.createElement("div",{className:v.a.message},r.a.createElement("span",null,e.message),r.a.createElement("span",{className:v.a.time},e.time))))},b=t(34),g={avatar:"".concat(t.n(b).a),name:"Artem",message:"npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",time:"20:00"};var C=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h4",null,"homework 1:"),r.a.createElement(h,{avatar:g.avatar,name:g.name,message:g.message,time:g.time}),r.a.createElement("hr",null),r.a.createElement("hr",null))},k=t(21),N=t.n(k);var j=function(e){return r.a.createElement("div",null,e.affair.name,r.a.createElement("span",{className:N.a.smallerFont},"(priority: ",e.affair.priority,")"),r.a.createElement("button",{className:N.a.removeBtn,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"x"))},x=t(7),y=t.n(x);var w=function(e){var a=e.data.map((function(a){return r.a.createElement(j,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{className:"all"===e.filter?y.a.activeBtn:y.a.nonActiveBtn,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:"high"===e.filter?y.a.activeBtn:y.a.nonActiveBtn,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:"medium"===e.filter?y.a.activeBtn:y.a.nonActiveBtn,onClick:function(){e.setFilter("medium")}},"Medium"),r.a.createElement("button",{className:"low"===e.filter?y.a.activeBtn:y.a.nonActiveBtn,onClick:function(){e.setFilter("low")}},"Low"))},A=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"medium"}];var O=function(){var e=Object(n.useState)(A),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(o.a)(c,2),i=s[0],u=s[1],m=function(e,a){return"high"===a?e.filter((function(e){return"high"===e.priority})):"medium"===a?e.filter((function(e){return"medium"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):e}(t,i);return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h4",null,"homework 2:"),r.a.createElement(w,{data:m,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},filter:i}),r.a.createElement("hr",null),r.a.createElement("hr",null))},B=t(37),S=t(14),I=t.n(S),U=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=e.onAddUserKeyPress,s=l?I.a.error:"";return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,onKeyPress:o,className:s}),r.a.createElement("span",{className:"".concat(I.a.someClass," ").concat(I.a.errorMessage)},l),r.a.createElement("button",{className:I.a.addBtn,onClick:function(){return n(a)}},"Add"),r.a.createElement("span",null,c))},H=function(e){var a=Object(n.useState)(""),t=Object(o.a)(a,2),l=t[0],c=t[1],s=Object(n.useState)(null),i=Object(o.a)(s,2),u=i[0],m=i[1],d=function(a){""!==a.trim()?(e.addUserCallback(a.trim()),alert("Hello ".concat(a.trim(),"!")),c("")):m("Username is required")},p=e.users.length;return r.a.createElement(U,{name:l,setNameCallback:function(e){var a=e.currentTarget.value;c(a)},addUser:d,error:u,totalUsers:p,onAddUserKeyPress:function(e){m(null),"Enter"===e.key&&d(l)}})},P=t(35);var T=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h4",null,"homework 3:"),r.a.createElement(H,{users:t,addUserCallback:function(e){var a={_id:Object(P.v1)(),name:e};l([a].concat(Object(B.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},F=t(11),M=t(18),K=t.n(M),D=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),s=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(K.a.error," ").concat(o||""),u="".concat(c?K.a.errorInput:K.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:u},s)),c&&r.a.createElement("span",{className:i},c))},W=t(15),Z=t.n(W),G=t(22),J=t.n(G),R=function(e){var a=e.red,t=e.className,n=Object(F.a)(e,["red","className"]),l="".concat(a?J.a.red:J.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},q=t(23),L=t.n(q),Q=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(L.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:L.a.spanClassName},l))};var Y=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],l=a[1],c=""!==t.trim()?"":"Error",s=function(){c?alert("Please enter text..."):alert(t)},i=Object(n.useState)(!1),u=Object(o.a)(i,2),m=u[0],d=u[1],p=Object(n.useState)(!1),f=Object(o.a)(p,2),E=f[0],_=f[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h4",null,"homework 4:"),r.a.createElement("div",{className:Z.a.column},r.a.createElement(D,{value:t,onChangeText:l,onEnter:s,error:c,className:Z.a.blue,spanClassName:Z.a.superSpan}),r.a.createElement(R,{red:!0,className:Z.a.blue,onClick:s},"Delete "),r.a.createElement(Q,{checked:m,onChangeChecked:d},"Text"),r.a.createElement(Q,{checked:E,onChange:function(e){return _(e.currentTarget.checked)}}),r.a.createElement("hr",null)))};var V=function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(O,null),r.a.createElement(T,null),r.a.createElement(Y,null))},$=t(1);var z=function(){return r.a.createElement("div",null,"Sorry, I got nothing.")};var X=function(){return r.a.createElement("div",null,"I'm PreJunior+")},ee="/pre-junior",ae="/pre-junior-plus",te="/empty-page";var ne=function(){return r.a.createElement("div",null,r.a.createElement($.d,null,r.a.createElement($.b,{path:"/",exact:!0,render:function(){return r.a.createElement($.a,{to:ee})}}),r.a.createElement($.b,{path:ee,render:function(){return r.a.createElement(V,null)}}),r.a.createElement($.b,{path:ae,render:function(){return r.a.createElement(X,null)}}),r.a.createElement($.b,{path:te,render:function(){return r.a.createElement(z,null)}}),r.a.createElement($.b,{render:function(){return r.a.createElement(E,null)}})))},re=t(16),le=t.n(re);var ce=function(e){return r.a.createElement("div",{className:e.visible?"".concat(le.a.navbar," ").concat(le.a.shown):"".concat(le.a.navbar," ").concat(le.a.hidden)},r.a.createElement("div",null,r.a.createElement(u.b,{to:ee},"Homeworks 1-4")),r.a.createElement("div",null,r.a.createElement(u.b,{to:ae},"PreJunior+")),r.a.createElement("div",null,r.a.createElement(u.b,{to:te},"Empty Page")))};var oe=function(e){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(ce,{visible:e.visible}),r.a.createElement(ne,null)))};var se=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:i.a.App},r.a.createElement("button",{className:i.a.menuBtn,onClick:function(){l(!t)}}),r.a.createElement("h3",null,"React homeworks:"),r.a.createElement(oe,{visible:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[38,1,2]]]);
//# sourceMappingURL=main.ff17c8ed.chunk.js.map