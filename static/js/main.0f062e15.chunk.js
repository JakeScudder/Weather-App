(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{44:function(e,t,a){e.exports=a(76)},50:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(36),i=a.n(r),o=(a(49),a(50),a(15)),l=a(16),s=a(19),u=a(17),d=a(20),m=a(11),h=a(12),f=a(78),b=a(77),g=a(5),p=a(79),v=a(39),E=a(40),k=a(80),j=Object(h.f)((function(e){var t=Object(n.useState)(""),a=Object(g.a)(t,2),r=a[0],i=a[1];return c.a.createElement(p.a,{onSubmit:function(t){t.preventDefault();var a="/search/".concat(r);e.history.push(a),e.handleSearch(r),i("")},inline:!0},c.a.createElement(v.a,{id:"searchBarContainer"},c.a.createElement(E.a,{id:"searchBar",type:"search",name:"search",placeholder:"What's the weather like in...",value:r,onChange:function(e){i(e.target.value)}}))," ",c.a.createElement(k.a,{id:"searchButton",type:"submit"},"Search"))})),O=function(e){var t,a,n,r,i,o,l,s,u=e.data;console.log(u);return u.weather&&u.weather[0]&&(a=(t=u.weather[0].description).charAt(0).toUpperCase()+t.slice(1),function(){var e=u.main.temp;e=Math.round(e),n=Math.trunc(e)}(),function(){var e=u.main.feels_like;e=Math.round(e),o=Math.trunc(e)}(),function(){var e=u.main.temp_min;e=Math.round(e),l=Math.trunc(e)}(),function(){var e=u.main.temp_max;e=Math.round(e),s=Math.trunc(e)}(),function(){var e=u.wind.speed;e=Math.round(e),r=Math.trunc(e),((i=u.wind.deg)>=334||i<=25)&&(i="N"),(i>=26||i<=65)&&(i="NE"),(i>=66||i<=115)&&(i="E"),(i>=116||i<=155)&&(i="SE"),(i>=156||i<=205)&&(i="S"),(i>=206||i<=245)&&(i="SW"),(i>=246||i<=295)&&(i="W"),(i>=296||i<=335)&&(i="NW")}()),c.a.createElement("div",{id:"forecast-container"},c.a.createElement("div",{id:"conditions"},c.a.createElement("h6",{id:"conditions-header"},"Current Conditions in ".concat(u.name,":")),c.a.createElement("h6",{id:"conditions-desc"},a)),c.a.createElement("div",{id:"forecast-div"},c.a.createElement("div",{id:"forecast-flex"},c.a.createElement("div",null,"Currently: ".concat(n,"\xb0")),c.a.createElement("div",null,"Feels Like: ".concat(o,"\xb0")),c.a.createElement("div",null,"Low Today: ".concat(l,"\xb0")),c.a.createElement("div",null,"High Today: ".concat(s,"\xb0")),c.a.createElement("div",null,"Wind: ".concat(i).concat(r,"mph")),c.a.createElement("div",{className:"tide"},c.a.createElement("p",null,"High Tide: N/A"),c.a.createElement("p",null,"Low Tide: N/A")))))},S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).waitForIt=function(){setTimeout((function(){a.setBackgroundImg()}),1e3)},a.setBackgroundImg=function(){a.backgroundRef.current.style.background=a.props.background,a.backgroundRef.current.style.backgroundSize="cover"},a.state={loading:!0},a.backgroundRef=c.a.createRef(),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.waitForIt(),c.a.createElement(b.a,{ref:this.backgroundRef,id:"resultsContainer"},c.a.createElement(O,{data:this.props.data}))}}]),t}(n.Component),y=a(9),w=a.n(y),N=function(e){var t=Object(n.useState)(w.a.getJSON("nav1")||"Virginia"),a=Object(g.a)(t,2),r=a[0],i=a[1],o=Object(n.useState)(w.a.getJSON("url1")||"Virginia"),l=Object(g.a)(o,2),s=l[0],u=l[1],d=Object(n.useState)(w.a.getJSON("nav2")||"Maine"),h=Object(g.a)(d,2),f=h[0],b=h[1],p=Object(n.useState)(w.a.getJSON("url2")||"Maine"),v=Object(g.a)(p,2),E=v[0],k=v[1],j=Object(n.useState)(w.a.getJSON("nav3")||"Florida"),O=Object(g.a)(j,2),S=O[0],y=O[1],N=Object(n.useState)(w.a.getJSON("url3")||"Florida"),C=Object(g.a)(N,2),x=C[0],_=C[1],B=Object(n.useState)(""),M=Object(g.a)(B,2),R=M[0],W=M[1],D=Object(n.useState)(!1),I=Object(g.a)(D,2),F=I[0],J=I[1],T=Object(n.useState)(!1),A=Object(g.a)(T,2),H=A[0],L=A[1],z=Object(n.useState)(!1),q=Object(g.a)(z,2),P=q[0],V=q[1],U=Object(n.useState)(!1),$=Object(g.a)(U,2),G=$[0],K=$[1],Q=function(t){var a=t.target.name;e.fetchNav(a)},X=function(e){if(e.length>10){var t=e.substring(0,8);return"".concat(t,"..")}return e};return c.a.createElement("div",{id:"nav-container"},c.a.createElement("div",{id:"mainNav"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(m.b,{exact:!0,to:"link1",name:r,onClick:Q},s)),c.a.createElement("li",null,c.a.createElement(m.b,{to:"link2",name:f,onClick:Q},E)),c.a.createElement("li",null,c.a.createElement(m.b,{to:"link3",name:S,onClick:Q},x)))),c.a.createElement("div",{id:"form-div"},c.a.createElement("form",{id:"form-options"},c.a.createElement("select",{id:"favorite-options",onChange:function(){var e=document.getElementById("first").selected,t=document.getElementById("second").selected,a=document.getElementById("third").selected;L(!!e),V(!!t),K(!!a),e||t||a?(console.log("an option is selected"),F||J(!0)):J(!1)}},c.a.createElement("option",{id:"homeOption"},"\u2665Change Links"),c.a.createElement("option",{id:"first"},"Change 1st"),c.a.createElement("option",{id:"second"},"Change 2nd"),c.a.createElement("option",{id:"third"},"Change 3rd"))),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(){if(H){i(R),w.a.set("nav1",R,{expires:30});var e=X(R);w.a.set("url1",e,{expires:30}),u(e)}if(P){b(R),w.a.set("nav2",R,{expires:30});var t=X(R);w.a.set("url2",t,{expires:30}),k(t)}if(G){y(R),w.a.set("nav3",R,{expires:30});var a=X(R);w.a.set("url3",a,{expires:30}),_(a)}}(),J(!1),W(""),document.getElementById("homeOption").selected=!0},style:{display:F?"block":"none"}},H||P||G?c.a.createElement("input",{id:"new-link",type:"text",placeholder:"New Location is...",ref:function(e){return e&&e.focus()},className:"edit-nav",value:R,onChange:function(e){W(e.target.value)}}):null)))},C=function(e){var t=function(e){e.preventDefault()};return c.a.createElement("div",{id:"footer"},c.a.createElement(m.b,{to:"/",className:"footer-link",style:{textDecoration:"none"},onClick:t},c.a.createElement("i",{className:"material-icons footer-icon"},"dashboard"),c.a.createElement("span",{className:"footer-text"},"Home")),c.a.createElement(m.b,{to:"/hourly",className:"footer-link",style:{textDecoration:"none"},onClick:t},c.a.createElement("i",{className:"material-icons footer-icon"},"access_time"),c.a.createElement("span",{className:"footer-text"},"Hourly")),c.a.createElement(m.b,{to:"/3-day",className:"footer-link",style:{textDecoration:"none"},onClick:t},c.a.createElement("i",{className:"material-icons footer-icon"},"calendar_today"),c.a.createElement("span",{className:"footer-text"},"3 Day")),c.a.createElement(m.b,{to:"/5-day",className:"footer-link",style:{textDecoration:"none"},onClick:t},c.a.createElement("i",{className:"material-icons footer-icon"},"calendar_today"),c.a.createElement("span",{className:"footer-text"},"5 Day")))},x=a(43),_=a.n(x),B="d77262e5a1d388bebb698bab17c0b153",M=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).setBackground=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"clear sky",a={clearSky:"url(https://live.staticflickr.com/4671/40268815811_1244a6b370_z.jpg)",lightRain:"url(https://live.staticflickr.com/3906/14674848444_e04aeab462.jpg)",moderateRain:"url(https://live.staticflickr.com/4576/24410968298_7e29e77769.jpg)",heavyRain:"url(https://live.staticflickr.com/4017/4394669806_ab806947fb_z.jpg)",lightSnow:"url(https://live.staticflickr.com/4746/25604711047_5f06f28d8b.jpg)",moderateSnow:"url(https://live.staticflickr.com/4746/25604711047_5f06f28d8b.jpg)",heavySnow:"url(https://live.staticflickr.com/4746/25604711047_5f06f28d8b.jpg)",scatteredCloud:"url(https://live.staticflickr.com/3229/2887338950_0a190905a1.jpg)",overcastCloud:"url(https://live.staticflickr.com/3229/2887338950_0a190905a1.jpg)"};e.setState({background:a.clearSky}),t.includes("clear")?e.setState({background:a.clearSky}):t.includes("rain")?e.setState({background:a.lightRain}):t.includes("light rain")?e.setState({background:a.lightRain}):t.includes("moderate rain")?e.setState({background:a.moderateRain}):t.includes("heavy rain")?e.setState({background:a.HeavyRain}):t.includes("snow")?e.setState({background:a.lightSnow}):t.includes("clouds")&&e.setState({background:a.scatteredCloud})},e.handleWeatherFetch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"charlottesville";e.setState({loading:!0,location:t}),_.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=imperial&APPID=").concat(B)).then((function(t){var a=t.data.weather[0].description;e.setState({results:t.data,conditions:a,loading:!1}),e.setBackground(e.state.conditions)})).catch((function(e){console.log("Error fetching the weather data:",e)}))},e.state={location:"",results:[],conditions:"",background:"",jumboSmall:!0,loading:!0},e.jumbo=c.a.createRef(),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.handleWeatherFetch()}},{key:"render",value:function(){var e=this;return c.a.createElement(m.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(f.a,{ref:this.jumbo},c.a.createElement(b.a,null,c.a.createElement("h5",{id:"appTitle"},"Weather The Elements"),c.a.createElement(j,{handleSearch:this.handleWeatherFetch}),c.a.createElement(N,{jumbo:this.handleJumboStyle,fetchNav:this.handleWeatherFetch}))),c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return c.a.createElement(S,Object.assign({},t,{data:e.state.results,background:e.state.background}))}}),c.a.createElement(h.a,{exact:!0,path:"/link1",render:function(t){return c.a.createElement(S,Object.assign({},t,{data:e.state.results,background:e.state.background}))}}),c.a.createElement(h.a,{exact:!0,path:"/link2",render:function(t){return c.a.createElement(S,Object.assign({},t,{data:e.state.results,background:e.state.background}))}}),c.a.createElement(h.a,{exact:!0,path:"/link3",render:function(t){return c.a.createElement(S,Object.assign({},t,{data:e.state.results,background:e.state.background}))}}),c.a.createElement(h.a,{exact:!0,path:"/search/:query",render:function(t){return c.a.createElement(S,Object.assign({},t,{data:e.state.results,background:e.state.background}))}})),c.a.createElement(C,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.0f062e15.chunk.js.map