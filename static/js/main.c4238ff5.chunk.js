(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/poll.0a84d40a.jpg"},24:function(e,t,n){e.exports=n.p+"static/media/github.957c4dd9.png"},25:function(e,t,n){e.exports=n.p+"static/media/linkedin.dc4e8593.png"},27:function(e,t,n){e.exports=n(57)},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(18),r=n.n(c),o=(n(32),n(33),n(2)),s=n(3),l=n(5),u=n(4),d=n(1),h=n(6),p=(n(34),n(19)),g=n.n(p),m=(n(7),n(40),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).toggle=function(){n.setState({on:!n.state.on})},n.state={on:!1},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Accordion fadeIn"},i.a.createElement("div",{className:"Accordion__header",onClick:this.toggle},this.props.header," "),this.state.on&&this.props.children)}}]),t}(a.Component)),f=n(8),y=n.n(f),v=(n(41),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).loadDesc=function(e){var t="https://en.wikipedia.org/w/api.php?action=query&list=search&srwhat=text&format=json&srsearch="+e;" "!==e&&y()(t).then(function(e){return e.json()}).then(function(e){n.gotData(e),console.log(e)}).catch(function(e){console.log("parsing failed",e)})},n.state={pageid:"",content:"",slide:!1},n.handleText=n.handleText.bind(Object(d.a)(n)),n.gotData=n.gotData.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.handleText()}},{key:"gotData",value:function(e){var t=this;console.log(e);var n=e.query.search[0].pageid,a=e.query.search[0].title,i="https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&redirects=1&format=json&titles="+(a=a.replace(/\s+/g,"_"));" "!==a&&y()(i).then(function(e){return e.json()}).then(function(e){t.content(e,n)}).catch(function(e){console.log("parsing failed",e)})}},{key:"content",value:function(e,t){var n=e.query.pages[t].extract;this.setState({content:n})}},{key:"handleText",value:function(){this.props.city&&this.loadDesc(this.props.city)}},{key:"getAlert",value:function(){alert("klik")}},{key:"render",value:function(){return i.a.createElement("div",{className:"Accordion__desc slideDownDesc"},this.state.content)}}]),t}(a.Component)),k=n(20),b=n.n(k),C=n(23),x=n.n(C),E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).checkCountry=function(e){switch(e.toLowerCase()){case"poland":n.loadCities("PL");break;case"netherlands":n.loadCities("NL");break;case"belgium":n.loadCities("BE");break;case"great britain":n.loadCities("GB");break;default:n.loadCities("")}},n.onTextChanged=function(e){var t=e.target.value;n.checkCountry(t);var a=[];if(t.length>0){var i=new RegExp("^".concat(t),"i");a=n.arr.sort().filter(function(e){return i.test(e)})}n.setState({suggestion:a,text:t}),a.length>0&&t.length===a[0].length&&n.setState({suggestion:[],text:t})},n.handleKey=function(e){var t,a=parseInt(-1);40!==e.keyCode&&38!==e.keyCode||(40===e.keyCode&&(t=n.state.suggestion[++a]),38===e.keyCode&&(t=""),n.setState({text:t})),13===e.keyCode&&n.suggestionSelected(n.state.text)},n.state={isTyped:!1},n.arr=["Poland","Netherlands","Belgium","Great Britain"],n.state={suggestion:[],text:"",city:[]},n.loadCities=n.loadCities.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"loadCities",value:function(e){var t=this;""!==e?g.a.get("https://api.openaq.org/v1/latest?country="+e+"&order_by=measurements[0].value&sort=desc&limit=10").end(function(e,n){if(!e){var a=[];JSON.parse(n.text).results.map(function(e){return a.push(e.city)}),t.setState({city:a})}}):this.setState({city:[]})}},{key:"suggestionSelected",value:function(e){this.setState({text:e,suggestion:[]}),this.checkCountry(e)}},{key:"clearInput",value:function(){this.state.text&&this.setState({text:"",suggestion:[]})}},{key:"renderSuggestion",value:function(){var e=this;return 0===this.state.suggestion.length?null:i.a.createElement("ul",{className:"slideDown"},this.state.suggestion.map(function(t){return i.a.createElement("li",{key:t,onClick:function(){return e.suggestionSelected(t)}},t)}))}},{key:"renderCity",value:function(){var e=this.state.city;return this.state.text?i.a.createElement("div",{className:"Accordion-wrap"},e.map(function(t,n){return i.a.createElement(m,{header:t},i.a.createElement(v,{city:e[n]}))})):i.a.createElement("div",{className:"welcome"},i.a.createElement("h1",null,"Welcome"),i.a.createElement("p",null,"In this app you can check the most polluted cities currently in Poland, Netherlands, Belgium and Great Britain (by OpanAQ.org) and read about that cities short description (by Wikipedia.org)."))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"Wrapper"},i.a.createElement("div",{className:"Country"},i.a.createElement(b.a,{imageSrc:x.a,opacity:"0.5",minHeight:"50vh",parallaxOffset:"50"},i.a.createElement("h1",null,"Polluted countries"),i.a.createElement("input",{valuetype:"text",value:this.state.text,onKeyDown:this.handleKey,onClick:function(t){return e.clearInput(e.state.text)},onChange:this.onTextChanged,className:"Country__input",placeholder:"Country"}),this.renderSuggestion())),this.renderCity())}}]),t}(a.Component),w=(n(56),n(24)),j=n.n(w),O=n(25),N=n.n(O),S=function(){return i.a.createElement("div",{className:"Footer"},i.a.createElement("div",{className:"Footer__info"},i.a.createElement("h3",null,"Powered by Pawe\u0142 Jakubiec. Project done as a recruitment task")),i.a.createElement("div",{className:"Footer__social"},i.a.createElement("a",{href:"https://github.com/pawel14178"},i.a.createElement("img",{src:j.a,alt:"github",className:"Footer__social-github"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/pawe%C5%82-jakubiec-321426153/"},i.a.createElement("img",{src:N.a,alt:"linkedIn",className:"Footer__social-linkedin"}))))};var _=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(E,null),i.a.createElement(S,null))};r.a.render(i.a.createElement(_,null),document.getElementById("root"))},7:function(e,t,n){}},[[27,1,2]]]);
//# sourceMappingURL=main.c4238ff5.chunk.js.map