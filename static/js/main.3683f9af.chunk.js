(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(9),s=a.n(n),i=a(8),r=a(2),o=a(3),c=a(1),l=a(5),d=a.n(l),u=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),m=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],b=(a(15),a(16),a(0)),h=function(e){var t=e.user;return Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{"data-cy":"username",children:t.name}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{"data-cy":"email",href:"mailto:".concat(t.email),children:t.email}),Object(b.jsx)("br",{}),"User ID: ",t.id]})},p=function(e){var t=e.card;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:d()("todo-card",{"todo-card__done":!0===t.completed}),children:[Object(b.jsx)("div",{className:"todo-title",children:Object(b.jsxs)("p",{children:["Title:\xa0\xa0",t.title]})}),Object(b.jsxs)("div",{children:["Responsible person:\xa0",Object(b.jsx)("br",{})]}),Object(b.jsx)("div",{className:"todo-person",children:Object(b.jsx)("p",{children:t.User?Object(b.jsx)(h,{user:t.User}):"user not assigned"})}),Object(b.jsxs)("div",{children:["Task ID: ",t.id]}),Object(b.jsxs)("p",{children:["status:\xa0",t.completed?"Done":"Undone"]})]})})},j=function(e){var t=e.preparedTodos;return Object(b.jsx)("div",{className:"todo-list",children:t.map((function(e){return Object(b.jsx)(p,{card:e},e.id)}))})},g=function(){var e=Object(c.useState)(m.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{User:u.find((function(t){return t.id===e.userId}))||null})}))),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),l=Object(o.a)(s,2),h=l[0],p=l[1],g=Object(c.useState)("0"),O=Object(o.a)(g,2),y=O[0],f=O[1],x=Object(c.useState)(!1),v=Object(o.a)(x,2),S=v[0],_=v[1],w=Object(c.useState)({titleError:!1,userError:!1}),k=Object(o.a)(w,2),C=k[0],N=k[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{className:"form__header",children:"Add todo form"}),Object(b.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var t={title:h,userId:+y,completed:S,id:Math.max.apply(Math,Object(i.a)(a.map((function(e){return e.id}))))+1,User:u.find((function(e){return e.id===+y}))||null};h.trim().length<=0&&N((function(e){return Object(r.a)(Object(r.a)({},e),{},{titleError:!0})})),"0"===y&&N((function(e){return Object(r.a)(Object(r.a)({},e),{},{userError:!0})})),h.trim().length<=0||"0"===y||(n([].concat(Object(i.a)(a),[t])),p(""),f("0"),_(!1))},onChange:function(){N({titleError:!1,userError:!1})},children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("label",{children:["Task title : ",Object(b.jsx)("input",{"data-cy":"titleInput",className:"form__title",type:"text",name:"title",placeholder:"TITLE",value:h,onChange:function(e){p(e.target.value.toUpperCase())}})]}),C.titleError&&Object(b.jsx)("span",{className:"warning",children:"Please enter the title"})]}),Object(b.jsxs)("label",{children:["Choose assignee for a task : ",Object(b.jsxs)("select",{"data-cy":"userSelect",className:"form__select",value:y,onChange:function(e){f(e.target.value)},children:[Object(b.jsx)("option",{value:"0",disabled:!0,hidden:!0,children:"CHOOSE A USER"}),u.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.name.toUpperCase()},e.id)}))]})]}),C.userError&&Object(b.jsx)("span",{className:"warning",children:"Please choose a user"}),Object(b.jsxs)("div",{children:["Task Status : ",Object(b.jsx)("label",{htmlFor:"todo_undone",className:d()("form__radioLabel",{unselected:!0===S}),children:"Undone"}),Object(b.jsx)("input",{type:"radio",name:"todoStatus",id:"todo_undone",value:"false",className:"form__radio",checked:!1===S,onChange:function(){_(!1)}}),"   ",Object(b.jsx)("label",{htmlFor:"todo_done",className:d()("form__radioLabel",{unselected:!1===S}),children:"Done"}),Object(b.jsx)("input",{type:"radio",name:"todoStatus",id:"todo_done",value:"true",className:"form__radio",checked:!0===S,onChange:function(){_(!0)}})]}),Object(b.jsx)("button",{type:"submit",className:"form__button",children:"ADD TASK"})]}),Object(b.jsx)(j,{preparedTodos:a})]})};s.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3683f9af.chunk.js.map