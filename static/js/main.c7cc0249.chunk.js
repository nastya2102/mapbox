(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{71:function(e,t,a){e.exports=a(84)},82:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),l=a(36),c=a(28);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(49),u=a(61),m=a(29),d="layer/add-point",p=Object(c.b)({layer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(m.a)({},e,{features:[].concat(Object(u.a)(e.features),[t.payload])});default:return e}}}),f=a(11),y=a(38),b=a.n(y),g=a(51),v=a(37),h=a(47),E=a.n(h),x=a(40),O=a(136),j=a(135),w=a(138),k=a(129),S=a(127),C=a(128),z=a(126),F=function(e){var t=e.open,a=e.handleClose,o=e.addPoint,i=Object(n.useState)({name:"",description:""}),l=Object(v.a)(i,2),c=l[0],s=l[1],u=function(e){s(Object(m.a)({},c,Object(x.a)({},e.target.id,e.target.value)))};return r.a.createElement(w.a,{open:t,onClose:a,"aria-labelledby":"form-dialog-title"},r.a.createElement(z.a,{id:"form-dialog-title"},"Add marker"),r.a.createElement(S.a,null,r.a.createElement(C.a,null,"Add marker to map"),r.a.createElement(j.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name",type:"text",fullWidth:!0,value:c.name,onChange:u}),r.a.createElement(j.a,{margin:"dense",id:"description",label:"Description",type:"text",fullWidth:!0,value:c.description,onChange:u})),r.a.createElement(k.a,null,r.a.createElement(O.a,{onClick:a,color:"primary"},"Cancel"),r.a.createElement(O.a,{onClick:function(){o(c)},color:"primary"},"Add marker")))},L=a(130),N=a(63),I=function(e){var t=e.name,a=e.description;return r.a.createElement(L.a,null,r.a.createElement(N.a,{color:"textSecondary",gutterBottom:!0},"Name"),r.a.createElement(N.a,{variant:"h5",component:"h2",color:"textPrimary"},t),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{color:"textSecondary",gutterBottom:!0},"Description"),r.a.createElement(N.a,{variant:"h5",component:"h2",color:"textPrimary"},a)))};function M(e){var t=e.points,a=e.properties;return{type:d,payload:{type:"Feature",geometry:{type:"Point",coordinates:t},properties:a}}}var W=function(e){return{container:e,style:"mapbox://styles/mapbox/streets-v11",center:[-74.0066,40.7135],zoom:15.5,pitch:45,bearing:-17.6,antialias:!0}},q={id:"3d-buildings",source:"composite","source-layer":"building",filter:["==","extrude","true"],type:"fill-extrusion",minzoom:15,paint:{"fill-extrusion-color":"#aaa","fill-extrusion-height":["interpolate",["linear"],["zoom"],15,0,15.05,["get","height"]],"fill-extrusion-base":["interpolate",["linear"],["zoom"],15,0,15.05,["get","min_height"]],"fill-extrusion-opacity":.6}},B={type:"geojson",data:{type:"FeatureCollection",features:[]}},J={id:"random-points-layer",source:"random-points-data",type:"symbol",layout:{"icon-image":"bakery-15","icon-padding":0,"icon-allow-overlap":!0,"icon-size":1.5}};a(82);var D=function(){var e=Object(l.b)(),t=Object(n.useRef)(null),a=Object(n.useRef)(new E.a.Popup({offset:15})),o=Object(n.useState)(null),c=Object(v.a)(o,2),s=c[0],u=c[1],d=Object(n.useState)({open:!1,points:[]}),p=Object(v.a)(d,2),f=p[0],y=p[1],h=Object(l.c)(function(e){return e.layer}),x=function(e){var t=s.queryRenderedFeatures(e.point,{layers:["random-points-layer"]}),a=s.queryRenderedFeatures(e.point,{layers:["building"]});if(!t.length&&a.length&&e.point){var n=e.lngLat,r=n.lat,o=n.lng;y({open:!0,points:[o,r]})}},O=function(e){if(e.point){var t=e.lngLat,n=e.features[0].properties,o=document.createElement("div");i.a.render(r.a.createElement(I,n),o),a.current.setLngLat(t).setDOMContent(o).addTo(s)}},j=function(){a&&a.current&&a.current.remove()};Object(n.useEffect)(function(){E.a.accessToken="pk.eyJ1IjoibmFzdHlha3V6NCIsImEiOiJja2RrNzBtOWEwbHM4MnJsY29td3ZxY2d2In0.dsKMvFZ38esAjLE9_5L1zw",s&&(h&&h.features&&h.features.length&&s.getSource("random-points-data").setData(h),s.on("click",x),s.on("mouseover","random-points-layer",O),s.on("mouseout","random-points-layer",j)),s||function(e){var t=e.setMap,a=e.mapContainer,n=new E.a.Map(W(a.current));n.on("load",Object(g.a)(b.a.mark(function e(){var a,r,o;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.addSource("random-points-data",B),n.addLayer(J),a=n.getStyle().layers,o=0;case 4:if(!(o<a.length)){e.next=11;break}if("symbol"!==a[o].type||!a[o].layout["text-field"]){e.next=8;break}return r=a[o].id,e.abrupt("break",11);case 8:o++,e.next=4;break;case 11:n.addLayer(q,r),t(n),n.resize();case 14:case"end":return e.stop()}},e)})))}({setMap:u,mapContainer:t})},[s]);var w=function(){y({open:!1,points:[]})},k=function(){var t=Object(g.a)(b.a.mark(function t(a){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e(M({points:f.points,properties:Object(m.a)({},a,{id:"test"})})),w();case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return Object(n.useEffect)(function(){s&&h&&s.getSource("random-points-data").setData(h)},[h]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"map-container",ref:t}),f.open&&r.a.createElement(F,Object.assign({},f,{handleClose:w,addPoint:k})))},P=a(131),R=a(133),A=a(134),H=a(132),T=Object(P.a)({root:{minWidth:275,maxWidth:350},title:{fontSize:14},pos:{marginBottom:12}});var Y=function(){var e=T();return r.a.createElement(H.a,{maxWidth:"sm"},r.a.createElement(R.a,{className:e.root},r.a.createElement(L.a,null,r.a.createElement(N.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"Category name"),r.a.createElement(N.a,{variant:"h5",component:"h2"},"Important title"),r.a.createElement(N.a,{className:e.pos,color:"textSecondary"},"Sub title"),r.a.createElement(N.a,{variant:"body2",component:"p"},'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."')),r.a.createElement(A.a,null,r.a.createElement(O.a,{size:"small"},"Learn More"))))};var Z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:D}),r.a.createElement(f.a,{exact:!0,path:"/test",component:Y})))},_=localStorage.getItem("layer"),K={layer:_&&JSON.parse(_)||{type:"FeatureCollection",features:[]}},U=Object(c.c)(p,K);U.subscribe(function(){localStorage.setItem("layer",JSON.stringify(U.getState().layer))}),i.a.render(r.a.createElement(s.a,null,r.a.createElement(l.a,{store:U},r.a.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[71,1,2]]]);
//# sourceMappingURL=main.c7cc0249.chunk.js.map