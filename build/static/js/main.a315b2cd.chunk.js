(this["webpackJsonpmanaging-a-component-tree-practice"]=this["webpackJsonpmanaging-a-component-tree-practice"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),l=n.n(r),o=n(6),u=n(3);var i=function(e){return c.a.createElement("div",{onClick:function(){e.onChecked(e.id)}},c.a.createElement("li",null,e.text))};var m=function(e){return c.a.createElement("div",{className:"form"},c.a.createElement("input",{onChange:e.handleChange,type:"text",name:"enter your work!!",value:e.inputText}),c.a.createElement("button",{onClick:e.addItem},c.a.createElement("span",null,"Add")))};var d=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)([]),d=Object(u.a)(l,2),s=d[0],p=d[1];function f(e){p((function(t){return t.filter((function(t,n){return n!==e}))}))}return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"heading"},c.a.createElement("h1",null,"To-Do List")),c.a.createElement(m,{handleChange:function(e){var t=e.target.value;console.log(t),r(t)},inputText:n,addItem:function(){p((function(e){return[].concat(Object(o.a)(e),[n])})),r("")}}),c.a.createElement("div",null,c.a.createElement("ul",null,s.map((function(e,t){return c.a.createElement(i,{key:t,id:t,text:e,onChecked:f})})))))};l.a.render(c.a.createElement(d,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.a315b2cd.chunk.js.map