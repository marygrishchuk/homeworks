(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports={activeBtn:"Affairs_activeBtn__2BWMx",nonActiveBtn:"Affairs_nonActiveBtn__3iHJL"}},,function(e,a,t){e.exports={post:"Message_post__2-7D9",avatar:"Message_avatar__Vk0--",messageData:"Message_messageData__1AT51",name:"Message_name__cN0Wx",message:"Message_message__1hH8J",time:"Message_time__1cSnw"}},function(e,a,t){e.exports={header:"Header_header__3Dyd9",navbar:"Header_navbar__3znXh",hidden:"Header_hidden__8Njhl",shown:"Header_shown__2kVof",btn:"Header_btn__33ECS"}},,,function(e,a,t){e.exports={someClass:"Greeting_someClass__2Pyw9",error:"Greeting_error__3LttT",errorMessage:"Greeting_errorMessage__7lSic",addBtn:"Greeting_addBtn__1MvXP"}},function(e,a,t){e.exports={blue:"HW4_blue__3Yyox",column:"HW4_column__Oxj-U",superSpan:"HW4_superSpan__3m1VB"}},,,function(e,a,t){e.exports={errorInput:"SuperInputText_errorInput__1bYT9",error:"SuperInputText_error__1zZ9O",superInput:"SuperInputText_superInput__12vEX"}},function(e,a,t){e.exports={clock:"Clock_clock__2S_64",time:"Clock_time__3IMt8",date:"Clock_date__Z1Ifj"}},,function(e,a,t){e.exports={smallerFont:"Affair_smallerFont__1vymG",removeBtn:"Affair_removeBtn__1146q"}},function(e,a,t){e.exports={default:"SuperButton_default__3Z_vG",red:"SuperButton_red__2nqGO"}},function(e,a,t){e.exports={spanClassName:"SuperCheckbox_spanClassName__1Z4dW",checkbox:"SuperCheckbox_checkbox__3r3zE"}},,,,,,,,,function(e,a,t){e.exports={App:"App_App__yRWUV"}},function(e,a,t){e.exports={error404:"Error404_error404__GZ8wQ"}},function(e,a,t){e.exports=t.p+"static/media/image.a6e13481.jpg"},function(e,a,t){e.exports=t.p+"static/media/imageArtem.08ac7b57.jpg"},,function(e,a,t){e.exports={span:"SuperEditableSpan_span__2S1Wd"}},function(e,a,t){e.exports={select:"SuperSelect_select__1qDBX"}},function(e,a,t){e.exports={radio:"SuperRadio_radio__TLxyH"}},,function(e,a,t){e.exports=t(55)},,,,,function(e,a,t){},,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(32),c=t.n(l),o=(t(47),t(33)),u=t.n(o),i=t(1),s=t(7),m=t(34),E=t.n(m),d=t(35),p=t.n(d);var f=function(){return r.a.createElement("div",{className:E.a.error404},r.a.createElement("div",null,"Error 404:"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"),r.a.createElement("br",null),r.a.createElement("img",{src:p.a}))},h=t(11),v=t.n(h);var _=function(e){return r.a.createElement("div",{className:v.a.post},r.a.createElement("div",{className:v.a.avatar},r.a.createElement("img",{src:e.avatar})),r.a.createElement("div",{className:v.a.messageData},r.a.createElement("div",{className:v.a.name},e.name),r.a.createElement("div",{className:v.a.message},r.a.createElement("span",null,e.message),r.a.createElement("span",{className:v.a.time},e.time))))},b=t(36),g={avatar:"".concat(t.n(b).a),name:"Artem",message:"npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",time:"20:00"};var k=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h4",null,"homework 1:"),r.a.createElement(_,{avatar:g.avatar,name:g.name,message:g.message,time:g.time}),r.a.createElement("hr",null),r.a.createElement("hr",null))},C=t(22),O=t.n(C);var j=function(e){return r.a.createElement("div",null,e.affair.name,r.a.createElement("span",{className:O.a.smallerFont},"(priority: ",e.affair.priority,")"),r.a.createElement("button",{className:O.a.removeBtn,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"x"))},y=t(9),N=t.n(y);var w=function(e){var a=e.data.map((function(a){return r.a.createElement(j,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{className:"all"===e.filter?N.a.activeBtn:N.a.nonActiveBtn,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:"high"===e.filter?N.a.activeBtn:N.a.nonActiveBtn,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:"medium"===e.filter?N.a.activeBtn:N.a.nonActiveBtn,onClick:function(){e.setFilter("medium")}},"Medium"),r.a.createElement("button",{className:"low"===e.filter?N.a.activeBtn:N.a.nonActiveBtn,onClick:function(){e.setFilter("low")}},"Low"))},x=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"medium"}];var S=function(){var e=Object(n.useState)(x),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(i.a)(c,2),u=o[0],s=o[1],m=function(e,a){return"high"===a?e.filter((function(e){return"high"===e.priority})):"medium"===a?e.filter((function(e){return"medium"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):e}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h4",null,"homework 2:"),r.a.createElement(w,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},filter:u}),r.a.createElement("hr",null),r.a.createElement("hr",null))},B=t(18),A=t(15),T=t.n(A),H=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=e.onAddUserKeyPress,u=l?T.a.error:"";return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,onKeyPress:o,className:u}),r.a.createElement("span",{className:"".concat(T.a.someClass," ").concat(T.a.errorMessage)},l),r.a.createElement("button",{className:T.a.addBtn,onClick:function(){return n(a)}},"Add"),r.a.createElement("span",null,c))},I=function(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(null),u=Object(i.a)(o,2),s=u[0],m=u[1],E=function(a){""!==a.trim()?(e.addUserCallback(a.trim()),alert("Hello ".concat(a.trim(),"!")),c("")):m("Username is required")},d=e.users.length;return r.a.createElement(H,{name:l,setNameCallback:function(e){var a=e.currentTarget.value;c(a)},addUser:E,error:s,totalUsers:d,onAddUserKeyPress:function(e){m(null),"Enter"===e.key&&E(l)}})},P=t(37);var M=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h4",null,"homework 3:"),r.a.createElement(I,{users:t,addUserCallback:function(e){var a={_id:Object(P.v1)(),name:e};l([a].concat(Object(B.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},F=t(4),D=t(19),U=t.n(D),W=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),u=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(U.a.error," ").concat(o||""),s="".concat(c?U.a.errorInput:U.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:s},u)),c&&r.a.createElement("span",{className:i},c))},G=t(16),J=t.n(G),L=t(23),K=t.n(L),Z=function(e){var a=e.red,t=e.className,n=Object(F.a)(e,["red","className"]),l="".concat(a?K.a.red:K.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},q=t(24),z=t.n(q),R=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(z.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:z.a.spanClassName},l))};var V=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],c=""!==t.trim()?"":"Error",o=function(){c?alert("Please enter text..."):alert(t)},u=Object(n.useState)(!1),s=Object(i.a)(u,2),m=s[0],E=s[1],d=Object(n.useState)(!1),p=Object(i.a)(d,2),f=p[0],h=p[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h4",null,"homework 4:"),r.a.createElement("div",{className:J.a.column},r.a.createElement(W,{value:t,onChangeText:l,onEnter:o,error:c,className:J.a.blue,spanClassName:J.a.superSpan}),r.a.createElement(Z,{red:!0,className:J.a.blue,onClick:o},"Delete "),r.a.createElement(R,{checked:m,onChangeChecked:E},"Text"),r.a.createElement(R,{checked:f,onChange:function(e){return h(e.currentTarget.checked)}}),r.a.createElement("hr",null)))};var X=function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(S,null),r.a.createElement(M,null),r.a.createElement(V,null))},Y=t(2);var Q=function(){return r.a.createElement("div",null,"Sorry, I got nothing.")};var $=function(){return r.a.createElement("div",null,"I'm PreJunior+")},ee=t(38),ae=t.n(ee),te=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(F.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(i.a)(o,2),s=u[0],m=u[1],E=l||{},d=E.children,p=E.onDoubleClick,f=E.className,h=Object(F.a)(E,["children","onDoubleClick","className"]),v="".concat(ae.a.span," ").concat(f);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(W,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),p&&p(e)},className:v},h),d||c.value))};function ne(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function re(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}ne("test",{x:"A",y:1});re("test",{x:"",y:0});var le=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h4",null,"homeworks 6:"),r.a.createElement("div",null,r.a.createElement(te,{value:t,onChangeText:l,spanProps:{children:t?void 0:"Enter your text here..."}})),r.a.createElement("br",null),r.a.createElement(Z,{onClick:function(){ne("editable-span-value",t)}},"save"),r.a.createElement(Z,{onClick:function(){var e=re("editable-span-value","nothing to restore");l(e)}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))},ce=t(39),oe=t.n(ce),ue=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=Object(F.a)(e,["options","onChange","onChangeOption"]),c=a&&a.map((function(e,a){return r.a.createElement("option",{key:a},e)}));return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},className:oe.a.select},l),c)},ie=t(40),se=t.n(ie),me=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=Object(F.a)(e,["type","name","options","value","onChange","onChangeOption"]),o=function(e){l&&l(e.currentTarget.value)},u=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",Object.assign({type:"radio",name:a,checked:e===n,value:e,onChange:o,className:se.a.radio},c)),e)})):[];return r.a.createElement(r.a.Fragment,null,u)},Ee=["x","y","z"];var de=function(){var e=Object(n.useState)(Ee[1]),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h4",null,"homeworks 7:"),r.a.createElement("div",null,r.a.createElement(ue,{options:Ee,value:t,onChangeOption:l})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(me,{name:"radio",options:Ee,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},pe=function(e,a){switch(a.type){case"sort":var t=Object(B.a)(e);return"up"===a.payload&&t.sort((function(e,a){return e.name>a.name?1:-1})),"down"===a.payload&&t.sort((function(e,a){return e.name>a.name?-1:1})),t;case"check-age":return e.filter((function(e){return e.age>=a.payload}));default:return e}},fe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var he=function(){var e=Object(n.useState)(fe),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("18"),o=Object(i.a)(c,2),u=o[0],s=o[1],m=t.map((function(e){return r.a.createElement("div",{key:e._id},e.name,", ",e.age)}));return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h4",null,"homeworks 8:"),m,r.a.createElement("div",null,r.a.createElement(Z,{onClick:function(){return l(pe(fe,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(Z,{onClick:function(){return l(pe(fe,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(Z,{onClick:function(){return l(pe(fe,{type:"check-age",payload:+u}))}},"check age: "),r.a.createElement(te,{value:u,onChangeText:s,spanProps:{children:u?void 0:"Enter age..."}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},ve=t(20),_e=t.n(ve);var be=function(){var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(new Date),o=Object(i.a)(c,2),u=o[0],s=o[1],m=Object(n.useState)(!1),E=Object(i.a)(m,2),d=E[0],p=E[1],f=function(){clearInterval(t)},h=u.toLocaleTimeString(),v=u.toLocaleDateString();return r.a.createElement("div",{className:_e.a.clock},r.a.createElement("div",{onMouseEnter:function(){p(!0)},onMouseLeave:function(){p(!1)},className:_e.a.time},h),d&&r.a.createElement("div",{className:_e.a.date},v),r.a.createElement(Z,{onClick:function(){f();var e=window.setInterval((function(){s(new Date)}),1e3);l(e)}},"start"),r.a.createElement(Z,{onClick:f},"stop"))};var ge=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h4",null,"homeworks 9:"),r.a.createElement(be,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},ke="/pre-junior",Ce="/pre-junior-plus",Oe="/empty-page",je="/homework-6",ye="/homework-7",Ne="/homework-8",we="/homework-9";var xe=function(){return r.a.createElement("div",null,r.a.createElement(Y.d,null,r.a.createElement(Y.b,{path:"/",exact:!0,render:function(){return r.a.createElement(Y.a,{to:ke})}}),r.a.createElement(Y.b,{path:ke,render:function(){return r.a.createElement(X,null)}}),r.a.createElement(Y.b,{path:Ce,render:function(){return r.a.createElement($,null)}}),r.a.createElement(Y.b,{path:Oe,render:function(){return r.a.createElement(Q,null)}}),r.a.createElement(Y.b,{path:je,render:function(){return r.a.createElement(le,null)}}),r.a.createElement(Y.b,{path:ye,render:function(){return r.a.createElement(de,null)}}),r.a.createElement(Y.b,{path:Ne,render:function(){return r.a.createElement(he,null)}}),r.a.createElement(Y.b,{path:we,render:function(){return r.a.createElement(ge,null)}}),r.a.createElement(Y.b,{render:function(){return r.a.createElement(f,null)}})))},Se=t(12),Be=t.n(Se);var Ae=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1],c=function(){l(!t)};return r.a.createElement("div",{className:Be.a.header},r.a.createElement("div",{className:t?"".concat(Be.a.navbar," ").concat(Be.a.shown):"".concat(Be.a.navbar," ").concat(Be.a.hidden)},r.a.createElement(s.b,{to:ke,onClick:c},"Homeworks 1-4"),r.a.createElement(s.b,{to:Ce,onClick:c},"PreJunior+"),r.a.createElement(s.b,{to:Oe,onClick:c},"Empty Page"),r.a.createElement(s.b,{to:je,onClick:c},"Homework 6"),r.a.createElement(s.b,{to:ye,onClick:c},"Homework 7"),r.a.createElement(s.b,{to:Ne,onClick:c},"Homework 8"),r.a.createElement(s.b,{to:we,onClick:c},"Homework 9")),r.a.createElement("button",{className:Be.a.btn,onClick:c}))};var Te=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(Ae,null),r.a.createElement(xe,null)))};var He=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("h3",null,"React homeworks:"),r.a.createElement(Te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(He,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[42,1,2]]]);
//# sourceMappingURL=main.16fb0a81.chunk.js.map