import{p as e,a as t,r as o,o as s,c as n,b as a,t as l,u as r,F as u,w as c,d as p,e as d}from"./vendor.e8ca8c53.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const s=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const l=new URL(e,s);if(self[t].moduleMap[l])return o(self[t].moduleMap[l]);const r=new Blob([`import * as m from '${l}';`,`${t}.moduleMap['${l}']=m;`],{type:"text/javascript"}),u=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){a(new Error(`Failed to import: ${e}`)),n(u)},onload(){o(self[t].moduleMap[l]),n(u)}});document.head.appendChild(u)})),self[t].moduleMap={}}}("/testRepo/assets/");const m=c("data-v-12117d15");e("data-v-12117d15");const i=a("p",null,[a("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"},"Vite Documentation"),p(" | "),a("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Documentation")],-1),f=a("p",null,[p(" Edit "),a("code",null,"components/HelloWorld.vue"),p(" to test hot module replacement. ")],-1);t();const g={expose:[],props:{msg:String},setup(e){const t=o({count:0});return m(((o,c)=>(s(),n(u,null,[a("h1",null,l(e.msg)+"!!!!!",1),i,a("button",{onClick:c[1]||(c[1]=e=>r(t).count++)},"count is: "+l(r(t).count),1),f],64))))},__scopeId:"data-v-12117d15"};const v=a("img",{alt:"Vue logo",src:"/testRepo/assets/logo.03d6d6da.png"},null,-1);d({expose:[],setup:e=>(e,t)=>(s(),n(u,null,[v,a(g,{msg:"Hello Vue 3 + Vite"})],64))}).mount("#app");
