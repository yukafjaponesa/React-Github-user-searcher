(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,n){e.exports=n(40)},35:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(19),r=n.n(l),u=n(8),o=n(1),s=function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"About the page"),c.a.createElement("p",null,"This is the page that you can find GitHub users."))},i=n(9);var m=function(e){return c.a.createElement("div",{className:"user-list"},c.a.createElement("a",{href:"https://github.com/".concat(e.login)},e.login))},h=n(20),p=n.n(h),E=Object(a.createContext)(),b=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),l=n[0],r=n[1],u=Object(a.useState)(!1),o=Object(i.a)(u,2),s=o[0],m=o[1],h=Object(a.useState)(""),b=Object(i.a)(h,2),f=b[0],g=b[1];return Object(a.useEffect)((function(){if(f){m(!0);var e=p()((function(){console.log("debounce"),fetch("https://api.github.com/search/users?q=".concat(encodeURIComponent(f)),{signal:t.signal}).then((function(e){return e.json()})).then((function(e){console.log(e),e.items&&(r(e.items),m(!1))})).catch((function(e){console.log(e)}))}),250),t=new AbortController;return e(),function(){t.abort()}}}),[f]),c.a.createElement(E.Provider,{className:"App",value:{users:l,loading:s,search:f,setSearch:g}},e.children)},f=function(){var e=Object(a.useContext)(E),t=e.search,n=e.setSearch,l=e.loading,r=(e.setLoading,e.users);e.setUsers;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Github user searcher"),c.a.createElement("input",{className:"search-box",type:"text",placeholder:"Search",onChange:function(e){return n(e.target.value)},value:t}),l&&c.a.createElement("p",null,"Loading..."),!l&&r.map((function(e,t){return c.a.createElement(m,Object.assign({key:t},e))})))};n(35);function g(){return c.a.createElement(u.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(u.b,{to:"/",style:{textDecoration:"none"}},"Home")),c.a.createElement("li",null,c.a.createElement(u.b,{to:"/about",style:{textDecoration:"none"}},"About")))),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/about"},c.a.createElement(s,null)),"// ",c.a.createElement(o.a,{path:"/users"},"// // "),c.a.createElement(o.a,{path:"/"},c.a.createElement(b,null,c.a.createElement(f,null),c.a.createElement(m,null))))))}r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.015478d3.chunk.js.map