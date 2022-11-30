(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{24:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),i=s(10),r=s.n(i),n=(s(24),s(2)),l=s(0);var o=function(e){return Object(l.jsx)("div",{className:"tabs is-centered",children:Object(l.jsx)("ul",{className:"nav nav-tabs",children:["About","Portfolio","Contact","Resume"].map((function(t){return Object(l.jsx)("li",{className:e.currentPage===t?"nav-item is-active":"nav-item",children:Object(l.jsx)("a",{href:"#"+t.toLowerCase(),onClick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"nav-link active":"nav-link",children:t})},t)}))})})};var j=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"content is-medium",children:"Full Stack Developer"}),Object(l.jsx)("hr",{}),Object(l.jsx)("img",{className:"my-pic",src:"/react-portfolio/img/profile.jpg",alt:"Scott Wattenbarger"}),Object(l.jsx)("p",{className:"content is-italic mt-4",children:"I'm Scott, a full stack developer that loves to learn and is always trying to improve my study."}),Object(l.jsx)("p",{className:"content",children:"I know that technology is always changing and improving. My goal is to keep ontop of the technologies and always better myself"})]})},d=s(4),h=s(9),b=s(19);s(35).config();var m=function(){var e=Object(b.a)("mbjbvdjq"),t=Object(n.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)({name:"",email:"",message:""}),r=Object(n.a)(i,2),o=r[0],j=r[1],m=Object(a.useState)(""),u=Object(n.a)(m,2),p=u[0],g=u[1],O=o.name,x=o.email,f=o.message;if(s.succeeded)return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Thanks for reaching out!"}),Object(l.jsx)("button",{className:"button is-medium is-primary is-half m-6",onClick:function(){return window.open("/#contact")},children:"Back to About"})]});var v=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);g(t?"":"Your email is invalid.")}else e.target.value.length?g(""):g("A ".concat(e.target.name," is required."));p||(j(Object(h.a)(Object(h.a)({},o),{},Object(d.a)({},e.target.name,e.target.value))),console.log("Handle Form",o))};return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"content is-medium",children:"Contact Me"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:c,children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"name",children:"Name"}),Object(l.jsx)("input",{className:"input",type:"text",name:"name",defaultValue:O,onBlur:v})]}),Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"email",children:"Email Address"}),Object(l.jsx)("input",{className:"input",type:"email",name:"email",defaultValue:x,onBlur:v})]}),Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"message",children:"Message"}),Object(l.jsx)("textarea",{className:"textarea",name:"message",rows:"5",defaultValue:f,onBlur:v})]}),p&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"is-danger",children:p})}),Object(l.jsx)("button",{className:"button is-medium is-primary is-fullwidth","data-testid":"button",type:"submit",children:"Submit"})]})]})};var u=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row",children:e.projects.map((function(e){return Object(l.jsx)("div",{className:"column is-half",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("a",{href:e.live,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:"/react-portfolio"+e.image,alt:"Placeholder image"})})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left"}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-4",children:e.title},e.id)})]}),Object(l.jsxs)("div",{className:"content has-text-left",children:[e.description,Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"content is-family-code",children:["Languages: ",e.languages,Object(l.jsx)("br",{}),"NPM Packages: ",e.packages]}),Object(l.jsx)("div",{className:"card",children:Object(l.jsxs)("footer",{className:"card-footer",children:[Object(l.jsx)("a",{href:e.repo,className:"card-footer-item",target:"_blank",rel:"noreferrer",children:"See the Repo!"}),Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:e.live,className:"card-footer-item",target:"_blank",rel:"noreferrer",children:"See the Live Site!"})]})})]})]})]})})}))})})},p=[{id:0,title:"Blackjack",languages:"html, css, js",packages:"none",image:"/img/blackjack.png",description:"Allows you to play blackjack against the dealer!",repo:"https://github.com/scottwatt/blackjack",live:"https://scottwatt.github.io/blackjack//"},{id:1,title:"AGI Website",languages:"html, php, bootstrap, css, sass, js",packages:"none",image:"/img/AGI.png",description:"A company website!",repo:"https://github.com/scottwatt/Agi",live:"https://scottwatt.github.io/Agi/"},{id:2,title:"edTrance",languages:"html, css, handelbars, js, bootsrap",packages:"bcrypt, dotenv, express, express-handlebars, express-session, handlebars, mysql2, sweetalert2, sequelize",image:"/img/school_signup.gif",description:"Organizes schedule for schools and adds comments!",live:"https://ucb-school-portal.herokuapp.com/login",repo:"https://github.com/cassandrakise/school-portal"},{id:3,title:"Movie Search",languages:"html, css, js, materialize",image:"/img/moviesearch.png",packages:"none",description:"Search movies and see the description and where it is streaming.",repo:"https://github.com/scottwatt/Movie_Search",live:"https://scottwatt.github.io/Movie_Search/"},{id:4,title:"Note Taker",languages:"html, css, js",packages:"Express.js, Generate Unique IDs",image:"/img/NoteTaker.png",description:"Write notes that you can save or delete.",repo:"https://github.com/scottwatt/noteTaker",live:"https://fast-chamber-64929.herokuapp.com/"},{id:5,title:"Basic Portfolio",languages:"html, css",packages:"none",image:"/img/portfolio.png",description:"My first portfolio that keeps track of my work!",repo:"https://github.com/scottwatt/Portfolio",live:"https://scottwatt.github.io/Portfolio/"},{id:6,title:"Weather Dashboard",languages:"html, css, js",packages:"none",image:"/img/weatherdashboard.png",description:"An app that allows you to check the weather for searched cities and save them.",repo:"https://github.com/scottwatt/weather_dashboard",live:"https://scottwatt.github.io/weather_dashboard/"}];var g=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"content is-medium",children:"Portfolio"}),Object(l.jsx)("hr",{}),Object(l.jsx)(u,{projects:p})]})};var O=function(){return Object(l.jsxs)("div",{className:"columns",children:[Object(l.jsxs)("div",{className:"column",children:[Object(l.jsx)("p",{className:"content is-medium",children:"Resume"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("a",{className:"button is-primary",href:"/react-portfolio/ScottResume.pdf",target:"_blank",rel:"noreferrer",children:[Object(l.jsx)("span",{className:"icon",children:Object(l.jsx)("i",{className:"fas fa-download"})}),Object(l.jsx)("span",{children:"Download My Resume"})]})]}),Object(l.jsxs)("div",{className:"column",children:[Object(l.jsx)("p",{className:"content is-medium",children:"Skills"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"HTML, CSS, Javascript"}),Object(l.jsx)("li",{children:"OpenAPI, Express, JSON"}),Object(l.jsx)("li",{children:"React, Node.js, PHP"}),Object(l.jsx)("li",{children:"Markdown"}),Object(l.jsx)("li",{children:"Git"}),Object(l.jsx)("li",{children:"Github Repo Management"})]})]})]})};var x=function(){var e=Object(a.useState)("About"),t=Object(n.a)(e,2),s=t[0],c=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("nav",{className:"navbar",children:Object(l.jsx)("div",{className:"navbar-brand",children:Object(l.jsx)("a",{className:"navbar-item",rel:"noreferrer",target:"_blank",href:"https://github.com/scottwatt?tab=repositories",children:Object(l.jsx)("span",{className:"content is-large",children:"Scott Wattenbarger"})})})}),Object(l.jsx)(o,{currentPage:s,handlePageChange:c}),Object(l.jsx)("main",{children:Object(l.jsx)("div",{children:function(){switch(s){default:return Object(l.jsx)(j,{});case"Portfolio":return Object(l.jsx)(g,{});case"Contact":return Object(l.jsx)(m,{});case"Resume":return Object(l.jsx)(O,{})}}()})})]})};var f=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("div",{className:"content has-text-centered",children:Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"My Full Stack Development Portfolio"})," - a React site by"," ",Object(l.jsx)("a",{href:"https://github.com/scottwatt",target:"_blank",rel:"noreferrer",children:"Scott Wattenbarger"}),".",Object(l.jsx)("hr",{}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/scott-wattenbarger-057652123/",target:"_blank",rel:"noreferrer",children:"LinkedIn"})," ","|"," "," "]})})})};var v=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(x,{}),Object(l.jsx)(f,{})]})},N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,40)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),N()}},[[39,1,2]]]);
//# sourceMappingURL=main.14d3a811.chunk.js.map