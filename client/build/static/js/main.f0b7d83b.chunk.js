(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,n,t){},44:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var a=t(2),c=t.n(a),i=t(13),r=t.n(i),o=(t(24),t(14)),h=t(15),p=t(16),l=t(19),u=t(18),d=t(4),s=t.n(d),b=t(17),j=(t(44),t(1)),f=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(h.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=n.call.apply(n,[this].concat(c))).state={name:"",receiptId:"",quantity:0,price1:0,price2:0},e.handleChange=function(n){var t=n.target,a=t.value,c=t.name;return e.setState(Object(o.a)({},c,a))},e.createAndDownloadPdf=function(){return s.a.post("/create-pdf",e.state).then((function(){return s.a.get("fetch-pdf",{responseType:"blob"})})).then((function(e){var n=new Blob([e.data],{type:"application/pdf"});Object(b.saveAs)(n,"newPdf.pdf")}))},e}return Object(p.a)(t,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("input",{type:"text",placeholder:"Name",name:"name",onChange:this.handleChange}),Object(j.jsx)("input",{type:"number",placeholder:"Receipt Id",name:"receiptid",onChange:this.handleChange}),Object(j.jsx)("input",{type:"number",placeholder:"Quantity",name:"quantity",onChange:this.handleChange}),Object(j.jsx)("input",{type:"number",placeholder:"Price 1",name:"price1",onChange:this.handleChange}),Object(j.jsx)("input",{type:"number",placeholder:"Price 2",name:"price2",onChange:this.handleChange}),Object(j.jsx)("button",{onClick:this.createDownloadPdf,children:"Download Invoice"})]})}}]),t}(a.Component),g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),g()}},[[46,1,2]]]);
//# sourceMappingURL=main.f0b7d83b.chunk.js.map