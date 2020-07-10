(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,a,t){},27:function(e,a,t){e.exports=t(58)},32:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(25),s=t.n(o),r=t(8),c=t(1);t(32);var i=function(){return l.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement(r.b,{to:"/"},"Google Books"),l.a.createElement("div",{className:"navbar-end"},l.a.createElement("span",{className:"navbar-item"},l.a.createElement(r.b,{to:"/search",className:"/search"===window.location.pathname?"nav-link active":"nav-link"},"Search")),l.a.createElement("span",{className:"navbar-item"},l.a.createElement(r.b,{to:"/saved",className:"/saved"===window.location.pathname?"nav-link active":"nav-link"},"Saved")))))};var m=function(e){return l.a.createElement("main",Object.assign({className:"wrapper"},e))},u=t(9),d=t.n(u),h=e=>d.a.get("https://www.googleapis.com/books/v1/volumes?q="+e),v=()=>d.a.get("/api/books"),E=e=>d.a.post("/api/books",e),p=e=>d.a.delete("/api/books/"+e);t(55);var k=function(e){return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("div",null,l.a.createElement("input",{onChange:e.handleChange,value:e.search,name:"search",type:"text",className:"input",placeholder:"search for your book...",id:"search"}),l.a.createElement("button",{onClick:e.handleSearch,className:"button"},"Search"))))};t(56);var b=e=>l.a.createElement("div",null,e.books.map(a=>l.a.createElement("div",{key:a.id},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{src:a.image,alt:a.title})),l.a.createElement("p",null,a.title),l.a.createElement("p",null,"by: ",a.authors),l.a.createElement("div",{className:"content"},a.description),l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"button",id:a.id,onClick:a=>e.saveBooks(a)},"Save"),l.a.createElement("a",{href:a.link,rel:"noopener noreferrer",target:"_blank"},l.a.createElement("button",{type:"button",className:"button"},"More info")))))));t(24);class g extends n.Component{constructor(...e){super(...e),this.state={query:"",books:[]},this.handleChange=e=>{const a=e.target.value;this.setState({query:a})},this.saveBooks=e=>{e.preventDefault();let a=this.state.books.filter(a=>a.id===e.target.id);a=a[0],E(a).then(alert("Your book has been saved!")).catch(e=>console.log(e))},this.handleSearch=e=>{e.preventDefault(),h(this.state.query).then(e=>{let a=e.data.items;a=a.map(e=>e={id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,link:e.volumeInfo.infoLink,image:e.volumeInfo.imageLinks.thumbnail}),this.setState({books:a})}).catch(e=>console.log(e))}}render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"searchsave"}," Search 'n Save Your Favorite Books!"),l.a.createElement(k,{handleChange:this.handleChange,handleSearch:this.handleSearch}),this.state.books.length?l.a.createElement("div",null,l.a.createElement("h3",{className:"searchsave"},"Your Search Results"),l.a.createElement(b,{books:this.state.books,saveBooks:this.saveBooks})):l.a.createElement("h3",{className:"noresults"},"No Results Yet"))}}var f=g;t(57);var N=e=>l.a.createElement("div",null,e.data.map(a=>l.a.createElement("div",{key:a._id},l.a.createElement("div",null,l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{src:a.image,alt:a.title})),l.a.createElement("p",null,a.title),l.a.createElement("p",null,"by:",a.authors),l.a.createElement("div",{className:"description"},a.description),l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"button",id:a.id,onClick:()=>e.deleteBook(a._id)}," Delete")),l.a.createElement("div",null,l.a.createElement("a",{href:a.link,rel:"noopener noreferrer",target:"_blank"},l.a.createElement("button",{type:"button",className:"button"},"Google Book"))))))));class B extends n.Component{constructor(...e){super(...e),this.state={data:[]},this.loadBooks=()=>{v().then(e=>this.setState({data:e.data})).catch(e=>console.log(e))},this.deleteBook=e=>{p(e).then(e=>this.loadBooks()).catch(e=>console.log(e))}}componentDidMount(){this.loadBooks()}render(){return l.a.createElement(m,null,l.a.createElement("h1",{className:"searchsave"},"Saved Books"),this.state.data.length?l.a.createElement("div",null,l.a.createElement(N,{data:this.state.data,deleteBook:this.deleteBook})):l.a.createElement("h2",{className:"searchsave"},"No Saved Books Yet!"))}}var S=B;var y=function(){return l.a.createElement(r.a,null,l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement(m,null,l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:"/",component:f}),l.a.createElement(c.a,{exact:!0,path:"/saved",component:S}),l.a.createElement(c.a,{exact:!0,path:"/saved:id",component:S}),l.a.createElement(c.a,{exact:!0,path:"/search",component:f})))))};s.a.render(l.a.createElement(y,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.c62ebf39.chunk.js.map