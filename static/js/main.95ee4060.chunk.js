(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/poll.0a84d40a.jpg"},24:function(e,t,n){e.exports=n.p+"static/media/github.957c4dd9.png"},25:function(e,t,n){e.exports=n.p+"static/media/linkedin.dc4e8593.png"},27:function(e,t,n){e.exports=n(57)},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(18),s=n.n(c),r=(n(32),n(33),n(2)),o=n(3),l=n(5),u=n(4),d=n(1),h=n(6),p=(n(34),n(19)),g=n.n(p),f=(n(7),n(40),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).toggle=function(){n.setState({on:!n.state.on})},n.state={on:!1},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Accordion fadeIn"},i.a.createElement("div",{className:"Accordion__header",onClick:this.toggle},this.props.header," "),this.state.on&&this.props.children)}}]),t}(a.Component)),m=n(8),y=n.n(m),v=(n(41),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={pageid:"",content:"",slide:!1},n.handleText=n.handleText.bind(Object(d.a)(n)),n.gotData=n.gotData.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.handleText()}},{key:"loadDesc",value:function(e){var t=this,n="https://en.wikipedia.org/w/api.php?action=query&list=search&srwhat=text&format=json&srsearch="+e;" "!==e&&y()(n).then(function(e){return e.json()}).then(function(e){t.gotData(e)}).catch(function(e){console.log("parsing failed",e)})}},{key:"gotData",value:function(e){var t=this,n=e.query.search[0].pageid,a=e.query.search[0].title,i="https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&redirects=1&format=json&titles="+(a=a.replace(/\s+/g,"_"));" "!==a&&y()(i).then(function(e){return e.json()}).then(function(e){t.content(e,n)}).catch(function(e){console.log("parsing failed",e)})}},{key:"content",value:function(e,t){var n=e.query.pages[t].extract;this.setState({content:n})}},{key:"handleText",value:function(){this.props.city&&this.loadDesc(this.props.city)}},{key:"getAlert",value:function(){alert("klik")}},{key:"render",value:function(){return i.a.createElement("div",{className:"Accordion__desc slideDownDesc"},this.state.content)}}]),t}(a.Component)),k=n(20),b=n.n(k),C=n(23),x=n.n(C),E=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).checkCountry=function(e){switch(e.toLowerCase()){case"poland":n.loadCities("PL");break;case"germany":n.loadCities("DE");break;case"france":n.loadCities("FR");break;case"spain":n.loadCities("ES");break;default:n.loadCities("")}},n.onTextChanged=function(e){var t=e.target.value;n.checkCountry(t);var a=[];if(t.length>0){var i=new RegExp("^".concat(t),"i");a=n.arr.sort().filter(function(e){return i.test(e)})}n.setState({suggestion:a,text:t}),a.length>0&&t.length===a[0].length&&n.setState({suggestion:[],text:t})},n.handleKey=function(e){var t,a=parseInt(-1);40!==e.keyCode&&38!==e.keyCode||(40===e.keyCode&&(t=n.state.suggestion[++a]),38===e.keyCode&&(t=""),n.setState({text:t})),13===e.keyCode&&n.suggestionSelected(n.state.text)},n.state={isTyped:!1},n.arr=["Poland","Germany","France","Spain"],n.state={suggestion:[],text:"",city:[]},n.loadCities=n.loadCities.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"loadCities",value:function(e){var t=this;""!==e?g.a.get("https://api.openaq.org/v1/latest?country="+e+"&order_by=measurements[0].value&sort=desc&limit=10").end(function(e,n){if(!e){var a=[];JSON.parse(n.text).results.map(function(e){return a.push(e.city)}),t.setState({city:a})}}):this.setState({city:[]})}},{key:"suggestionSelected",value:function(e){this.setState({text:e,suggestion:[]}),this.checkCountry(e)}},{key:"clearInput",value:function(){this.state.text&&this.setState({text:"",suggestion:[]})}},{key:"renderSuggestion",value:function(){var e=this;return 0===this.state.suggestion.length?null:i.a.createElement("ul",{className:"slideDown"},this.state.suggestion.map(function(t){return i.a.createElement("li",{key:t.city,onClick:function(){return e.suggestionSelected(t)}},t)}))}},{key:"renderCity",value:function(){var e=this.state.city;return this.state.text?i.a.createElement("div",{className:"Accordion-wrap"},e.map(function(t,n){return i.a.createElement(f,{header:t},i.a.createElement(v,{city:e[n]}))})):null}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"Wrapper"},i.a.createElement("div",{className:"Country"},i.a.createElement(b.a,{imageSrc:x.a,opacity:"0.5",minHeight:"50vh",parallaxOffset:"50"},i.a.createElement("h1",null,"Polluted countries"),i.a.createElement("input",{valuetype:"text",value:this.state.text,onKeyDown:this.handleKey,onClick:function(t){return e.clearInput(e.state.text)},onChange:this.onTextChanged,className:"Country__input",placeholder:"Country"}),this.renderSuggestion())),this.renderCity())}}]),t}(a.Component),j=(n(56),n(24)),w=n.n(j),O=n(25),S=n.n(O),_=function(){return i.a.createElement("div",{className:"Footer"},i.a.createElement("div",{className:"Footer__info"},i.a.createElement("h3",null,"Powered by Pawe\u0142 Jakubiec. Project done as a recruitment task")),i.a.createElement("div",{className:"Footer__social"},i.a.createElement("a",{href:"https://github.com/pawel14178"},i.a.createElement("img",{src:w.a,alt:"github",className:"Footer__social-github"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/pawe%C5%82-jakubiec-321426153/"},i.a.createElement("img",{src:S.a,alt:"linkedIn",className:"Footer__social-linkedin"}))))};var N=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(E,null),i.a.createElement(_,null))};s.a.render(i.a.createElement(N,null),document.getElementById("root"))},7:function(e,t,n){}},[[27,1,2]]]);
//# sourceMappingURL=main.95ee4060.chunk.js.map