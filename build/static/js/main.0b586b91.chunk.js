(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),u=n.n(o),c=(n(20),n(4)),l=n(2),i=n(3),m=n.n(i),d="/api/persons/",s=function(){return m.a.get(d).then((function(e){return e.data}))},f=function(e){return m.a.post(d,e).then((function(e){return e.data}))},h=function(e){var t=d.concat(e),n=m.a.delete(t);return n.then((function(e){return e}))},b=function(e,t){var n=d.concat(e),a=m.a.put(n,t);return a.then((function(e){return e}))},g=function(e){var t=e.style,n=e.message;return null===n?null:r.a.createElement("div",{style:t},n)},p=function(e){var t=e.string,n=e.method;return r.a.createElement(r.a.Fragment,null,"filter shown with ",r.a.createElement("input",{value:t,onChange:n}))},v=function(e){var t=e.submitMethod,n=e.nameInput,a=e.nameOnChange,o=e.numberInput,u=e.numberOnChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:o,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},E=function(e){var t=e.filterString,n=e.arrayList,a=e.deleteMethod;return r.a.createElement(r.a.Fragment,null,0===t.length?n.map((function(e){return r.a.createElement("p",{key:e.id},e.name," ",e.number," ",r.a.createElement("button",{value:JSON.stringify(e),type:"button",onClick:a},"delete"))})):n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return r.a.createElement("p",{key:e.id},e.name," ",e.number," ",r.a.createElement("button",{value:JSON.stringify(e),type:"button",onClick:a},"delete"))})))},y=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],u=Object(a.useState)(""),i=Object(l.a)(u,2),m=i[0],d=i[1],y=Object(a.useState)(""),O=Object(l.a)(y,2),w=O[0],S=O[1],j=Object(a.useState)(""),k=Object(l.a)(j,2),C=k[0],I=k[1],J=Object(a.useState)(null),M=Object(l.a)(J,2),B=M[0],L=M[1],N=Object(a.useState)(null),F=Object(l.a)(N,2),A=F[0],R=F[1];return Object(a.useEffect)((function(){s().then((function(e){return o(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{message:A,style:{color:"green",background:"lightgrey",fontStyle:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}}),r.a.createElement(g,{message:B,style:{color:"red",background:"lightgrey",fontStyle:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}}),r.a.createElement(p,{string:C,method:function(e){I(e.target.value)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(v,{submitMethod:function(e){e.preventDefault();var t={name:m,number:w};void 0===n.find((function(e){return e.name===m}))?f(t).then((function(e){o(n.concat(e)),R("Added ".concat(m)),setTimeout((function(){return R(null)}),5e3)})):window.confirm("".concat(m," is already added to phonebook, replace the old number with a new one?"))?b(n.find((function(e){return e.name===m})).id,Object(c.a)(Object(c.a)({},n.find((function(e){return e.name===m}))),{},{number:w})).then((function(){return s().then((function(e){return o(e)}))})):console.log("Cancelled"),d(""),S("")},nameInput:m,nameOnChange:function(e){d(e.target.value)},numberInput:w,numberOnChange:function(e){S(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(E,{filterString:C,arrayList:n,deleteMethod:function(e){var t=JSON.parse(e.target.value);h(t.id).then((function(){return s().then((function(e){return o(e)}))})).catch((function(e){L("".concat(t.name," has already been removed from the server."))}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.0b586b91.chunk.js.map