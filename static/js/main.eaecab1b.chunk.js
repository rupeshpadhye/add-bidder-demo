(this["webpackJsonpadd-bidder-example"]=this["webpackJsonpadd-bidder-example"]||[]).push([[0],[,,,function(e,i,t){e.exports=t(10)},function(e,i,t){},,,,,function(e,i,t){},function(e,i,t){"use strict";t.r(i);t(4);var n=t(0),u=t.n(n),a=t(2),r=t.n(a);t(9),"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function s(e,i){try{var t=e()}catch(n){return i(n)}return t&&t.then?t.then(void 0,i):t}var l=Object(n.createContext)({advertisers:[],registerAdd:function(){},addConversion:function(){}}),o="_2cHmE",c="_3Ye3t",m="_uRz1r",d="https://https://add-bidder-qbtzze4rda-de.a.run.app",v={banner:{width:468,height:60}},f=function(e){var i=Object(n.useContext)(l),t=i.registerAdd,a=i.advertisers,r=i.addConversion,f=Object(n.useState)(),p=f[0],g=f[1],b=Object(n.useState)(!1),h=b[0],q=b[1],E=Object(n.useState)(),S=E[0],y=E[1],P=e.size,N=v[P],j=function(e){try{var i=s((function(){var i=e.advertiser;return Promise.resolve(function(e,i){try{return Promise.resolve(fetch(d+"/advertisers/"+e+"/advertise?size="+i+"&random=true")).then((function(e){return e.json()}))}catch(t){return Promise.reject(t)}}(i,P)).then((function(e){y(e)}))}),(function(e){console.error(e)}));return Promise.resolve(i&&i.then?i.then((function(){})):void 0)}catch(t){return Promise.reject(t)}};return Object(n.useEffect)((function(){var e=""+Math.floor(1e6*Math.random());t(e),g(e)}),[]),Object(n.useEffect)((function(){var e=a.find((function(e){return e.addKey===p}));e&&!S&&j(e)}),[a]),u.a.createElement("a",{className:o,style:{width:N.width,height:N.height,display:"inline-block"},key:p,href:S&&S.url,target:"_blank",rel:"noreferrer",onClick:function(){S&&r(S.uid)}},h&&u.a.createElement("span",{className:c},"Ad"),h?null:u.a.createElement("img",{decoding:"async",src:"https://via.placeholder.com/"+N.width+"x"+N.height+".png?text=AD"}),S&&u.a.createElement("img",{decoding:"async",onLoad:function(){return q(!0)},className:m,src:S.img,alt:S.title,style:{visibility:h?"visible":"hidden"}}))};function p(){return(p=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var g=function(e,i){var t=i.type,n=i.payload;switch(t){case"GET_ADVERTISER_REQUEST":return p(p({},e),{},{addSlots:[].concat(e.addSlots,[n])});case"SET_ADVERTISERS":return p(p({},e),{},{advertisers:[].concat(e.advertisers,i.payload),addSlots:[]});default:return e}},b={advertisers:[],addSlots:[]},h=function(e){var i=e.clientId,t=e.children,a=Object(n.useReducer)(g,b),r=a[0],o=a[1],c=r.advertisers,m=r.addSlots,v=function(e){try{var t=s((function(){return Promise.resolve(function(e,i,t){try{return console.log("exclude",i),Promise.resolve(fetch(d+"/advertisers?count="+e+"&clientId="+t)).then((function(e){return e.json()}))}catch(n){return Promise.reject(n)}}(e.length,c,i)).then((function(i){var t=i.map((function(i,t){return{advertiser:i,addKey:e[t]}}));console.log(t),o({type:"SET_ADVERTISERS",payload:t})}))}),(function(e){console.log(e)}));return Promise.resolve(t&&t.then?t.then((function(){})):void 0)}catch(n){return Promise.reject(n)}};return Object(n.useEffect)((function(){i||console.error("clientId is required."),i&&m.length>0&&v(m)}),[m]),u.a.createElement("div",null,u.a.createElement(l.Provider,{value:{advertisers:c,registerAdd:function(e){o({type:"GET_ADVERTISER_REQUEST",payload:e})},addConversion:function(e){try{var i=s((function(){return Promise.resolve(function(e){try{return Promise.resolve(fetch(d+"/advertise/"+e+"/conversion",{method:"POST"})).then((function(e){return e.ok}))}catch(i){return Promise.reject(i)}}(e)).then((function(){}))}),(function(e){console.log(e)}));return Promise.resolve(i&&i.then?i.then((function(){})):void 0)}catch(t){return Promise.reject(t)}}}},t))},q=function(){return u.a.createElement("main",null,u.a.createElement("header",null,u.a.createElement("h1",null,"Add Bidder Demo ")),u.a.createElement(f,{size:"banner"}),u.a.createElement("div",{className:"articles"},u.a.createElement("article",{className:"card"},u.a.createElement("h3",null,"Lorem ipsum "),u.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum nunc quam, et tincidunt nunc lobortis at. Vivamus vestibulum sagittis dapibus. Integer in ante tortor. Aliquam nec dolor neque. In magna massa, ultricies et risus a, efficitur consequat magna. Nunc varius lorem nisi. Aliquam fermentum maximus cursus. Integer eget nisl vitae magna vehicula ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi malesuada in sapien sed commodo. Pellentesque vitae ornare magna. Aenean at nulla vitae mauris sollicitudin faucibus. Vivamus feugiat leo eget neque vestibulum, in elementum mi congue. Suspendisse pharetra, diam et vestibulum rhoncus, velit magna feugiat arcu, at cursus risus urna sed libero. Sed gravida, nulla in molestie auctor, nulla ex vulputate est, id viverra ligula ipsum quis felis. Curabitur purus erat, faucibus ut odio id, consectetur eleifend risus. Etiam nec turpis sed urna aliquet blandit. Ut in volutpat enim. Nunc tincidunt ex nulla, quis bibendum nibh ullamcorper in. Ut aliquam bibendum odio, vel interdum justo ullamcorper vel. Nulla eu cursus felis. Sed eget enim id lectus mattis eleifend nec vitae nisi. Sed metus urna, eleifend id scelerisque dictum, commodo a purus. Integer eget consequat nisl. Proin id ipsum luctus, sollicitudin risus nec, vulputate ipsum. Nulla in dui sit amet lectus pulvinar fringilla id sed elit. Quisque quis dolor dignissim, mattis odio quis, porttitor velit. Etiam sodales purus vitae elit suscipit, ut laoreet nisl blandit. Nunc sem leo, dictum ut dignissim ac, feugiat et ex. Sed in tincidunt turpis. Sed fermentum dui vel tellus semper, vel porttitor neque aliquam. Nulla aliquam rhoncus justo. Sed nulla purus, consectetur vitae erat eget, pharetra ullamcorper risus. Suspendisse ac ligula non lectus fermentum dignissim. Duis congue erat ac est blandit tempor. Donec fringilla nisi finibus, vulputate ligula quis, sollicitudin eros. Duis vitae aliquam nisi. Quisque congue rhoncus dui, ut auctor lacus mollis vitae. Proin tempor mollis quam, interdum lobortis tellus pulvinar non. Suspendisse varius sollicitudin sodales. Nullam commodo magna at dolor euismod, id euismod enim laoreet. Nullam ac ipsum in mi fermentum bibendum non sit amet felis. Cras vehicula felis tortor, convallis condimentum est varius vel. Etiam non odio ultrices, fringilla ligula nec, cursus metus. Pellentesque nisl felis, venenatis eget iaculis nec, sagittis vitae odio. Nullam luctus facilisis dictum. Sed elementum quis libero at viverra. Etiam ex dolor, blandit quis venenatis eu, aliquet sit amet erat. Morbi nec sapien in dui fermentum hendrerit. Maecenas felis eros, sollicitudin quis eleifend et, feugiat id enim.")),u.a.createElement(f,{size:"banner"}),u.a.createElement("article",{className:"card"},u.a.createElement("h3",null,"Lorem ipsum "),u.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum nunc quam, et tincidunt nunc lobortis at. Vivamus vestibulum sagittis dapibus. Integer in ante tortor. Aliquam nec dolor neque. In magna massa, ultricies et risus a, efficitur consequat magna. Nunc varius lorem nisi. Aliquam fermentum maximus cursus. Integer eget nisl vitae magna vehicula ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi malesuada in sapien sed commodo. Pellentesque vitae ornare magna. Aenean at nulla vitae mauris sollicitudin faucibus. Vivamus feugiat leo eget neque vestibulum, in elementum mi congue. Suspendisse pharetra, diam et vestibulum rhoncus, velit magna feugiat arcu, at cursus risus urna sed libero. Sed gravida, nulla in molestie auctor, nulla ex vulputate est, id viverra ligula ipsum quis felis. Curabitur purus erat, faucibus ut odio id, consectetur eleifend risus. Etiam nec turpis sed urna aliquet blandit. Ut in volutpat enim. Nunc tincidunt ex nulla, quis bibendum nibh ullamcorper in. Ut aliquam bibendum odio, vel interdum justo ullamcorper vel. Nulla eu cursus felis. Sed eget enim id lectus mattis eleifend nec vitae nisi. Sed metus urna, eleifend id scelerisque dictum, commodo a purus. Integer eget consequat nisl. Proin id ipsum luctus, sollicitudin risus nec, vulputate ipsum. Nulla in dui sit amet lectus pulvinar fringilla id sed elit. Quisque quis dolor dignissim, mattis odio quis, porttitor velit. Etiam sodales purus vitae elit suscipit, ut laoreet nisl blandit. Nunc sem leo, dictum ut dignissim ac, feugiat et ex. Sed in tincidunt turpis. Sed fermentum dui vel tellus semper, vel porttitor neque aliquam. Nulla aliquam rhoncus justo. Sed nulla purus, consectetur vitae erat eget, pharetra ullamcorper risus. Suspendisse ac ligula non lectus fermentum dignissim. Duis congue erat ac est blandit tempor. Donec fringilla nisi finibus, vulputate ligula quis, sollicitudin eros. Duis vitae aliquam nisi. Quisque congue rhoncus dui, ut auctor lacus mollis vitae. Proin tempor mollis quam, interdum lobortis tellus pulvinar non. Suspendisse varius sollicitudin sodales. Nullam commodo magna at dolor euismod, id euismod enim laoreet. Nullam ac ipsum in mi fermentum bibendum non sit amet felis. Cras vehicula felis tortor, convallis condimentum est varius vel. Etiam non odio ultrices, fringilla ligula nec, cursus metus. Pellentesque nisl felis, venenatis eget iaculis nec, sagittis vitae odio. Nullam luctus facilisis dictum. Sed elementum quis libero at viverra. Etiam ex dolor, blandit quis venenatis eu, aliquet sit amet erat. Morbi nec sapien in dui fermentum hendrerit. Maecenas felis eros, sollicitudin quis eleifend et, feugiat id enim."))))},E=function(){return u.a.createElement(h,{clientId:"client-233434"},u.a.createElement(q,null))};r.a.render(u.a.createElement(E,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.eaecab1b.chunk.js.map