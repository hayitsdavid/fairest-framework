(function(){"use strict";var t={4351:function(t,o,n){var e=n(9242),u=n(3396),r=n(7139);const s=(0,u._)("h1",null,"My Todos",-1),i={class:"todo-buttons"},a={class:"todos"},d=["onUpdate:modelValue"],l=["onClick"];function c(t,o,n,c,f,p){return(0,u.wg)(),(0,u.iD)(u.HY,null,[s,(0,u._)("p",null,"Total Time: "+(0,r.zw)(f.totalTime),1),(0,u._)("p",null,"Total Items: "+(0,r.zw)(f.totalItems),1),(0,u._)("form",{onSubmit:o[7]||(o[7]=(0,e.iM)(((...o)=>t.addTodo&&t.addTodo(...o)),["prevent"]))},[(0,u.wy)((0,u._)("input",{class:"todo-input","onUpdate:modelValue":o[0]||(o[0]=t=>f.newTodo=t)},null,512),[[e.nr,f.newTodo]]),(0,u._)("div",i,[(0,u._)("button",{class:"button",onClick:o[1]||(o[1]=t=>p.addXItems(1))},"Add 1"),(0,u._)("button",{class:"button",onClick:o[2]||(o[2]=t=>p.addXItems(1e3))},"Add 1K"),(0,u._)("button",{class:"button",onClick:o[3]||(o[3]=t=>p.addXItems(5e3))},"Add 5K"),(0,u._)("button",{class:"button",onClick:o[4]||(o[4]=t=>p.addXItems(1e4))},"Add 10K"),(0,u._)("button",{class:"button",onClick:o[5]||(o[5]=t=>p.addXItems(5e4))},"Add 50K"),(0,u._)("button",{class:"button",onClick:o[6]||(o[6]=t=>p.addXItems(1e5))},"Add 100K")])],32),(0,u._)("ul",a,[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(f.todos,(t=>((0,u.wg)(),(0,u.iD)("li",{class:"todo",key:t.id},[(0,u.wy)((0,u._)("input",{type:"checkbox","onUpdate:modelValue":o=>t.status=o},null,8,d),[[e.e8,t.status]]),(0,u._)("span",{class:(0,r.C_)(["text",{checked:t.status}])},(0,r.zw)(t.text),3),(0,u._)("button",{class:"button",onClick:o=>p.removeTodo(t)},"x",8,l)])))),128))])],64)}let f=0;var p={name:"App",data(){return{newTodo:"",todos:[],totalTime:"0 ms",totalItems:0}},methods:{addXItems(t){let o=performance.now();for(let u=0;u<t;u++)this.todos.push({id:f++,text:this.newTodo,status:!1});this.newTodo="";let n=performance.now(),e=n-o;this.totalTime=e<1e3?e.toFixed(3)+" ms":e/1e3+" s",this.totalItems=this.todos.length},removeTodo(t){this.todos=this.todos.filter((o=>o!==t))}}},m=n(89);const b=(0,m.Z)(p,[["render",c]]);var h=b;(0,e.ri)(h).mount("#app")}},o={};function n(e){var u=o[e];if(void 0!==u)return u.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(o,e,u,r){if(!e){var s=1/0;for(l=0;l<t.length;l++){e=t[l][0],u=t[l][1],r=t[l][2];for(var i=!0,a=0;a<e.length;a++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](e[a])}))?e.splice(a--,1):(i=!1,r<s&&(s=r));if(i){t.splice(l--,1);var d=u();void 0!==d&&(o=d)}}return o}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[e,u,r]}}(),function(){n.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(o,{a:o}),o}}(),function(){n.d=function(t,o){for(var e in o)n.o(o,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};n.O.j=function(o){return 0===t[o]};var o=function(o,e){var u,r,s=e[0],i=e[1],a=e[2],d=0;if(s.some((function(o){return 0!==t[o]}))){for(u in i)n.o(i,u)&&(n.m[u]=i[u]);if(a)var l=a(n)}for(o&&o(e);d<s.length;d++)r=s[d],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(l)},e=self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))}();var e=n.O(void 0,[998],(function(){return n(4351)}));e=n.O(e)})();
//# sourceMappingURL=app.bb3a06e1.js.map