"use strict";(self.webpackChunksc_compile=self.webpackChunksc_compile||[]).push([[6697],{16697:(e,t,l)=>{l.r(t),l.d(t,{default:()=>T});var i=l(65043),r=l(37368),a=l(42562),n=l(8203),s=l(68295),o=l(7552),c=l(93305),d=l(81046),u=l(91120),f=l(56889),h=l(89867),p=l(41876),v=l(28704),m=l(65061),g=l(83595),w=l(62935),x=l(23421),y=(l(44050),l(91665)),A=(l(62866),l(53751)),b=l(70579);function N(e){o.__(c.u5.rootElements,(function(t){t.dom.id===e&&t.dispose()}))}const T=e=>{const t=(0,i.useRef)({}),l=(0,i.useRef)({}),o=(0,i.useRef)({}),[c,T]=(0,i.useState)([{category:String,value:Number,sliceSettings:{fill:d.yW("#00c5ff")}}]),R="pie-cut",k=(0,i.useRef)({}),S=(0,i.useRef)({}),E=(0,i.useRef)({}),[L,K]=(0,i.useState)([{category:String,value:Number,sliceSettings:{fill:d.yW("#00c5ff")}}]),W="pie-compen",[B,C]=(0,i.useState)([]),j="CP = '"+e.contractp+"'";"All"===e.contractp?(r.sN.definitionExpression="1=1",r.wx.definitionExpression="1=1"):(r.sN.definitionExpression=j,r.wx.definitionExpression=j);u.KN(53);return(0,i.useEffect)((()=>{(0,x.Aw)().then((e=>{T(e)})),(0,x.g3)().then((e=>{K(e)})),(0,x.g6)().then((e=>{C(e)}))}),[e.contractp]),(0,i.useEffect)((()=>{var e;N(R);var i=f.b.new(R);i.container.children.clear(),null===(e=i._logo)||void 0===e||e.dispose(),i.setThemes([g.A.new(i),w.A.new(i)]);var y=i.container.children.push(v.r.new(i,{layout:i.verticalLayout}));o.current=y;var A=y.series.push(m.w.new(i,{name:"Series",categoryField:"category",valueField:"value",legendValueText:"{valuePercentTotal.formatNumber('#.')}% ({value})",radius:u.KN(45),innerRadius:u.KN(28),scale:1.8}));t.current=A,y.series.push(A);let b=A.children.push(h.J.new(i,{text:"[#ffffff]{valueSum}[/]\n[fontSize: 5px; #d3d3d3; verticalAlign: super]TREES[/]",fontSize:"1rem",centerX:u.KN(50),centerY:u.KN(40),populateText:!0,oversizedBehavior:"fit",textAlign:"center"}));A.onPrivate("width",(e=>{b.set("maxWidth",.7*e)})),A.slices.template.setAll({toggleKey:"none",fillOpacity:.9,stroke:d.yW("#ffffff"),strokeWidth:.5,strokeOpacity:1,templateField:"sliceSettings"}),A.labels.template.set("visible",!1),A.ticks.template.set("visible",!1),A.slices.template.events.on("click",(e=>{var t;const l=(null===(t=e.target.dataItem)||void 0===t?void 0:t.dataContext).category,i=x.lt.find((e=>e.category===l)),o=null===i||void 0===i?void 0:i.value;var c,d=r.sN.createQuery();a.Up.when((function(){a.Up.whenLayerView(r.sN).then((e=>{r.sN.queryFeatures(d).then((t=>{const l=t.features.length;let i=[];for(var o=0;o<l;o++){var d=t.features[o].attributes.OBJECTID;i.push(d)}var u=new s.A({objectIds:i});r.sN.queryExtent(u).then((e=>{e.extent&&a.Up.goTo(e.extent)})),c&&c.remove(),c=e.highlight(i),a.Up.on("click",(function(){e.filter=new n.A({where:void 0}),c.remove()}))})),e.filter=new n.A({where:"Status = "+o}),a.Up.on("click",(()=>{e.filter=new n.A({where:void 0}),void 0!==c?c.remove():console.log("")}))}))}))})),A.data.setAll(c);var T=y.children.push(p.s.new(i,{centerX:u.KN(50),x:u.KN(50)}));return l.current=T,T.data.setAll(A.dataItems),T.markers.template.setAll({width:18,height:18}),T.markerRectangles.template.setAll({cornerRadiusTL:10,cornerRadiusTR:10,cornerRadiusBL:10,cornerRadiusBR:10}),y.onPrivate("width",(function(e){var t=Math.max(e-y.height()-220,220);T.labels.template.setAll({width:t,maxWidth:t})})),T.labels.template.setAll({oversizedBehavior:"truncate",fill:d.yW("#ffffff")}),T.valueLabels.template.setAll({textAlign:"right",fill:d.yW("#ffffff")}),T.itemContainers.template.setAll({paddingTop:1.1,paddingBottom:2}),A.appear(1e3,100),()=>{i.dispose()}}),[R,c]),(0,i.useEffect)((()=>{var e,i;null===(e=t.current)||void 0===e||e.data.setAll(c),null===(i=l.current)||void 0===i||i.data.setAll(t.current.dataItems)})),(0,i.useEffect)((()=>{var e;N(W);var t=f.b.new(W);t.container.children.clear(),null===(e=t._logo)||void 0===e||e.dispose(),t.setThemes([g.A.new(t),w.A.new(t)]);var l=t.container.children.push(v.r.new(t,{layout:t.verticalLayout}));E.current=l;var i=l.series.push(m.w.new(t,{name:"Series",categoryField:"category",valueField:"value",legendValueText:"{valuePercentTotal.formatNumber('#.')}% ({value})",radius:u.KN(45),innerRadius:u.KN(28),scale:1.8}));k.current=i,l.series.push(i);let o=i.children.push(h.J.new(t,{text:"[#ffffff]{valueSum}[/]\n[fontSize: 5px; #d3d3d3; verticalAlign: super]TREES[/]",fontSize:"1rem",centerX:u.KN(50),centerY:u.KN(40),populateText:!0,oversizedBehavior:"fit",textAlign:"center"}));i.onPrivate("width",(e=>{o.set("maxWidth",.7*e)})),i.slices.template.setAll({toggleKey:"none",fillOpacity:.9,stroke:d.yW("#ffffff"),strokeWidth:.5,strokeOpacity:1,templateField:"sliceSettings"}),i.labels.template.set("visible",!1),i.ticks.template.set("visible",!1),i.slices.template.events.on("click",(e=>{var t;const l=(null===(t=e.target.dataItem)||void 0===t?void 0:t.dataContext).category,i=x.N7.find((e=>e.category===l)),o=null===i||void 0===i?void 0:i.value;var c,d=r.wx.createQuery();a.Up.when((function(){a.Up.whenLayerView(r.wx).then((e=>{r.wx.queryFeatures(d).then((t=>{const l=t.features.length;let i=[];for(var o=0;o<l;o++){var d=t.features[o].attributes.OBJECTID;i.push(d)}var u=new s.A({objectIds:i});r.wx.queryExtent(u).then((e=>{e.extent&&a.Up.goTo(e.extent)})),c&&c.remove(),c=e.highlight(i),a.Up.on("click",(function(){e.filter=new n.A({where:void 0}),c.remove()}))})),e.filter=new n.A({where:"Compensation = "+o}),a.Up.on("click",(()=>{e.filter=new n.A({where:void 0}),void 0!==c?c.remove():console.log("")}))}))}))})),i.data.setAll(L);var c=l.children.push(p.s.new(t,{centerX:u.KN(50),x:u.KN(50)}));return S.current=c,c.data.setAll(i.dataItems),c.markers.template.setAll({width:18,height:18}),c.markerRectangles.template.setAll({cornerRadiusTL:10,cornerRadiusTR:10,cornerRadiusBL:10,cornerRadiusBR:10}),l.onPrivate("width",(function(e){var t=Math.max(e-l.height()-220,220);c.labels.template.setAll({width:t,maxWidth:t})})),c.labels.template.setAll({oversizedBehavior:"truncate",fill:d.yW("#ffffff")}),c.valueLabels.template.setAll({textAlign:"right",fill:d.yW("#ffffff")}),c.itemContainers.template.setAll({paddingTop:1.1,paddingBottom:2}),i.appear(1e3,100),()=>{t.dispose()}}),[W,L]),(0,i.useEffect)((()=>{var e,t;null===(e=k.current)||void 0===e||e.data.setAll(L),null===(t=S.current)||void 0===t||t.data.setAll(k.current.dataItems)})),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{style:{color:y.IV,fontSize:"1.2rem",marginLeft:"13px",marginTop:"10px"},children:"TOTAL TREES"}),(0,b.jsx)(A.GH,{layout:"inline",children:(0,b.jsxs)("b",{className:"totalLotsNumber",style:{color:y.dl},children:[(0,b.jsx)("div",{style:{color:y.dl,fontSize:"2rem",fontWeight:"bold",fontFamily:"calibri",lineHeight:"1.2",marginLeft:"15px"},children:(0,x.n3)(B[0])}),(0,b.jsx)("img",{src:"https://EijiGorilla.github.io/Symbols/Tree_Logo.svg",alt:"Land Logo",height:"55px",width:"55px",style:{marginLeft:"260px",display:"flex",marginTop:"-50px"}})]})}),(0,b.jsx)("div",{id:R,style:{height:"35vh",backgroundColor:"rgb(0,0,0,0)",color:"white"}}),(0,b.jsx)("div",{id:W,style:{height:"35vh",backgroundColor:"rgb(0,0,0,0)",color:"white"}})]})}}}]);
//# sourceMappingURL=6697.5d6932d4.chunk.js.map