(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t(25)},22:function(e,a,t){},25:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),s=t.n(l),i=(t(21),t(22),t(3)),c=t.n(i),o=t(7),m=t(1),d=t(8),u=t(9),h=t(13),y=t(10),p=t(14),f=t(4),b=t(12),E=function(e){var a=e.className,t=void 0===a?"":a,n=e.width;return r.a.createElement("div",{className:"skeleton-line ".concat(t),style:{width:n}})},v=function(e){var a=e.entries,t=void 0===a?50:a;return r.a.createElement("div",null,r.a.createElement("div",{className:"mb2 flex items-center justify-between"},r.a.createElement(E,{width:70}),r.a.createElement(E,{className:"h2",width:100})),Object(b.a)(Array(t)).map(function(e,a){return r.a.createElement("div",{key:a,className:"mb3 pl2 py2 result"},r.a.createElement("div",{className:"mb2"},r.a.createElement(E,{className:"mb1 h3",width:"60%"}),r.a.createElement(E,{className:"mb1 h3",width:"80%"})),r.a.createElement(E,{className:"h5",width:"30%"}))}))},g=t(11),N=t(2),k=function(e){return Object.entries(e).filter(function(e){var a=Object(N.a)(e,2);a[0];return""!==a[1]}).map(function(e){var a=Object(N.a)(e,2),t=a[0],n=a[1];return"".concat(t,"=").concat(encodeURIComponent(n))}).join("&")},j="https://late-night-jokes-api.herokuapp.com/",w=[{id:"",display:"All hosts"},{id:"Conan",display:"Conan O'Brien"},{id:"Ferguson",display:"Craig Ferguson"},{id:"Letterman",display:"David Letterman"},{id:"Corden",display:"James Corden"},{id:"Leno",display:"Jay Leno"},{id:"Fallon",display:"Jimmy Fallon"},{id:"Kimmel",display:"Jimmy Kimmel"},{id:"Meyers",display:"Seth Meyers"},{id:"Colbert",display:"Stephen Colbert"}],x=[{id:"",display:"All years"},{id:"2009",display:"2009"},{id:"2010",display:"2010"},{id:"2011",display:"2011"},{id:"2012",display:"2012"},{id:"2013",display:"2013"},{id:"2014",display:"2014"},{id:"2015",display:"2015"},{id:"2016",display:"2016"},{id:"2017",display:"2017"},{id:"2018",display:"2018"}],S=[{id:"",display:"New to old"},{id:"date",display:"Old to new"},{id:"host",display:"Host (A to Z)"}],C={host:w,year:x,order:S},O=w.slice(1).reduce(function(e,a){return Object(g.a)({},e,Object(m.a)({},a.id,a.display))},{}),J=function(e,a){var t=C[e];return t&&t.find(function(e){return e.id===a})?a:t[0].id},L=["Trump","NFL","Pope","Facebook"],q=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(y.a)(a).call(this,e))).handleQueryChange=function(e){var a=e.target.value;t.setState({query:a},t.updateUrl)},t.handleSelectChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(m.a)({},n,r),t.fetchJokes)},t.handleSuggestionClick=function(e){return function(){t.setState({query:e},t.fetchJokes)}},t.handleSubmit=function(e){e.preventDefault(),t.fetchJokes()},t.fetchJokes=Object(o.a)(c.a.mark(function e(){var a,n,r,l,s,i,o,m;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.updateUrl(),a=t.state,n=a.query,r=a.host,l=a.year,s=a.order,n){e.next=4;break}return e.abrupt("return");case 4:return t.setState({jokes:[],isLoading:!0,lastSearchedQuery:n}),i=k({query:n,host:r,year:l,order:s}),e.next=8,fetch("".concat(j,"?").concat(i));case 8:return o=e.sent,e.next=11,o.json();case 11:m=e.sent,t.setState({jokes:m.results,isLoading:!1});case 13:case"end":return e.stop()}},e)})),t.updateUrl=function(){var e=t.state,a=e.query,n=e.host,r=e.year,l=e.order;window.location.hash=k({query:a,host:n,year:r,order:l})},t.state={jokes:null,isLoading:!1,lastSearchedQuery:null,query:e.initialQuery,host:e.initialHost,year:e.initialYear,order:e.initialOrder},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchJokes()}},{key:"render",value:function(){var e,a=this,t=this.state,n=t.host,l=t.jokes,s=t.order,i=t.query,c=t.year,o=t.isLoading,m=t.lastSearchedQuery;return r.a.createElement("div",{className:"container mx-auto p2"},r.a.createElement("div",{className:"mb2 flex"},r.a.createElement("div",{className:"flex-auto"},r.a.createElement("h1",{className:"m0 h2 sm-h1"},r.a.createElement("a",{href:"/",className:"text-decoration-none"},"Late Night Joke Library")),r.a.createElement("p",{className:"m0 h4 sm-h3 line-height-1"},"Explore 10+ years of monologue jokes")),r.a.createElement("div",{className:"flex flex-column justify-end right-align xs-hide"},r.a.createElement("div",{className:"line-height-1"},r.a.createElement("a",{href:"#!"},r.a.createElement(f.b,{className:"ml1"})),r.a.createElement("a",{href:"#!"},r.a.createElement(f.a,{className:"ml1"}))),r.a.createElement("div",{className:"h6"},r.a.createElement("a",{href:"mailto:brendansudol@gmail.com?Subject=Late%20Night%20Joke%20Library"},"Send feedback")))),r.a.createElement("form",{className:"mb2 p2 sm-p3 bg-light rounded sm-flex justify-between",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"flex sm-col-6 mb2 sm-m0"},r.a.createElement("input",{className:"input m0 rounded-left",type:"search",name:"query",placeholder:"Search...",value:i,onChange:this.handleQueryChange,required:!0}),r.a.createElement("button",{className:"btn btn-primary rounded-right",type:"submit",disabled:o},"Go")),r.a.createElement("div",{className:"flex sm-col-5 mxn1 h5"},r.a.createElement("select",{className:"select mx1 my0 col-7",name:"host",value:n,onChange:this.handleSelectChange},w.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.display)})),r.a.createElement("select",{className:"select mx1 my0 col-5",name:"year",value:c,onChange:this.handleSelectChange},x.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.display)})))),null==m&&r.a.createElement("div",{className:"py1"},r.a.createElement("span",{className:"mr1"},"A few suggestions to get you started:"),L.map(function(e){return r.a.createElement("a",{key:e,className:"mr1 bold",href:"#!",onClick:a.handleSuggestionClick(e)},e)})),null!=l&&(0===l.length?o?r.a.createElement(v,null):r.a.createElement("p",{className:"my3 p2 h3 center rounded no-results"},r.a.createElement("strong",null,"Sorry!")," We couldn't find any results for"," ",r.a.createElement("em",null,m),"."):r.a.createElement("div",null,r.a.createElement("div",{className:"mb2 flex items-center justify-between"},r.a.createElement("h5",{className:"m0"},(e=l.length,"".concat(e).concat(500===e?"+":""," result").concat(1!==e?"s":""))),r.a.createElement("div",{className:"flex items-center justify-center"},r.a.createElement("h5",{className:"m0 pr1 flex-none"},"Sort by:"),r.a.createElement("select",{className:"m0 select select-skinny h5",name:"order",value:s,onChange:this.handleSelectChange},S.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.display)})))),l.map(function(e){return r.a.createElement("div",{key:e.id,className:"mb3 pl2 py2 result"},r.a.createElement("div",{className:"mb2"},e.text),r.a.createElement("div",{className:"h5"},O[e.host]||e.host,r.a.createElement("span",{className:"px1"},"/"),e.date))}))))}}]),a}(n.Component),Q=window.location.hash.slice(1).split("&").filter(function(e){return e.length}).reduce(function(e,a){var t=a.split("="),n=Object(N.a)(t,2),r=n[0],l=n[1],s=void 0===l?null:decodeURIComponent(l);return Object.assign(e,Object(m.a)({},r,s))},{}),F=Q.query,A=Q.host,U=Q.year,D=Q.order;s.a.render(r.a.createElement(q,{initialQuery:F||"",initialHost:J("host",A),initialYear:J("year",U),initialOrder:J("order",D)}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.59c2c26c.chunk.js.map