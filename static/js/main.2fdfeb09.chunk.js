(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,a){e.exports=a(39)},39:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(19),r=a.n(c),u=a(8),o=a(1),s=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"About the page"),l.a.createElement("p",null,"This is the page that you can find GitHub users."))},i=a(9);var m=function(e){return l.a.createElement("div",{className:"user-list"},l.a.createElement("a",{href:"https://github.com/".concat(e.login)},e.login))},h=a(20),p=a.n(h),E=Object(n.createContext)(),b=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],r=a[1],u=Object(n.useState)(!1),o=Object(i.a)(u,2),s=o[0],m=o[1],h=Object(n.useState)(""),b=Object(i.a)(h,2),f=b[0],g=b[1];return Object(n.useEffect)((function(){if(f){m(!0);var e=p()((function(){console.log("debounce"),fetch("https://api.github.com/search/users?q=".concat(encodeURIComponent(f)),{signal:t.signal}).then((function(e){return e.json()})).then((function(e){console.log(e),e.items&&(r(e.items),m(!1))})).catch((function(e){console.log(e)}))}),250),t=new AbortController;return e(),function(){t.abort()}}}),[f]),l.a.createElement(E.Provider,{className:"App",value:{users:c,loading:s,search:f,setSearch:g}},e.children)},f=function(){var e=Object(n.useContext)(E),t=e.search,a=e.setSearch,c=e.loading,r=(e.setLoading,e.users);e.setUsers;return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Github user searcher"),l.a.createElement("input",{type:"text",placeholder:"Search",onChange:function(e){return a(e.target.value)},value:t}),c&&l.a.createElement("p",null,"Loading..."),!c&&r.map((function(e,t){return l.a.createElement(m,Object.assign({key:t},e))})))};function g(){return l.a.createElement(u.a,{className:"App"},l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(u.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/about"},"About")))),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/about"},l.a.createElement(s,null)),"// ",l.a.createElement(o.a,{path:"/users"},"// // "),l.a.createElement(o.a,{path:"/"},l.a.createElement(b,null,l.a.createElement(f,null),l.a.createElement(m,null))))))}r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.2fdfeb09.chunk.js.map