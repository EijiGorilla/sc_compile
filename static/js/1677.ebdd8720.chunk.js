"use strict";(self.webpackChunksc_compile=self.webpackChunksc_compile||[]).push([[1677],{91677:(e,t,i)=>{i.r(t),i.d(t,{default:()=>P});var s=i(65043),a=i(42562),r=i(37368),l=i(8203),o=i(7552),n=i(93305),h=i(56889),d=i(91120),c=i(2955),p=i(81088),u=i(81046),f=i(41876),g=i(68061),y=i(89867),m=i(68444),w=i(11501),v=i(68067),b=i(56375),_=i(62512),x=i(85486),A=i(54289),N=i(83595),D=i(62935),O=(i(44050),i(23421)),k=i(70579);const P=e=>{const t=(0,s.useRef)({}),i=(0,s.useRef)({}),[P,j]=(0,s.useState)([]),[C,E]=(0,s.useState)([]),S="viaduct-bar";(0,s.useEffect)((()=>{(0,O.a3)(e.contractp).then((e=>{j(e)})),(0,O.D8)(e.contractp).then((e=>{E(e)}))}),[e.contractp]);return(0,s.useEffect)((()=>{var s,k;k=S,o.__(n.u5.rootElements,(function(e){e.dom.id===k&&e.dispose()}));var j=h.b.new(S);j.container.children.clear(),null===(s=j._logo)||void 0===s||s.dispose(),j.setThemes([N.A.new(j),D.A.new(j)]);var C=j.container.children.push(m.C.new(j,{panX:!1,panY:!1,layout:j.verticalLayout,marginTop:0,marginLeft:0,marginRight:0,marginBottom:0,paddingTop:10,paddingLeft:5,paddingRight:5,paddingBottom:0,scale:1,height:d.KN(100)}));i.current=C;var E=w.Q.new(j,{inversed:!0}),T=C.yAxes.push(v.a.new(j,{categoryField:"category",renderer:E,bullet:function(e,t,i){return b.s.new(e,{location:.5,sprite:c.V.new(e,{width:35,height:35,centerY:d.yP,centerX:d.yP,x:-21,src:i.dataContext.icon})})},tooltip:p.m.new(j,{})}));E.labels.template.setAll({paddingRight:45}),E.grid.template.setAll({location:1}),T.get("renderer").labels.template.setAll({oversizedBehavior:"wrap",textAlign:"center",fill:u.yW("#ffffff"),fontSize:"0.8vw"}),T.data.setAll(P);var X=C.xAxes.push(_.F.new(j,{min:0,max:100,strictMinMax:!0,numberFormat:"#'%'",calculateTotals:!0,renderer:x.j.new(j,{strokeOpacity:0,strokeWidth:1,stroke:u.yW("#ffffff")})}));X.get("renderer").labels.template.setAll({textAlign:"center",fill:u.yW("#ffffff"),fontSize:"0.8vw"});var L=C.children.push(f.s.new(j,{centerX:d.yP,centerY:d.KN(50),x:d.KN(60),y:d.KN(97),marginTop:20,scale:.8,layout:j.horizontalLayout}));function I(t,i){var s=C.series.push(A.k.new(j,{name:t,stacked:!0,xAxis:X,yAxis:T,baseAxis:T,valueXField:i,valueXShow:"valueXTotalPercent",categoryYField:"category",fill:"delay"===i?"incomp"===i?u.yW("#000000"):u.yW("#FF0000"):u.yW("#0070ff"),stroke:u.yW("#00c5ff")}));s.columns.template.setAll({fillOpacity:"comp"===i?"incomp"===i?0:1:"delay"===i?.5:0,tooltipText:"{name}: {valueX}",tooltipY:d.KN(90),strokeWidth:.4}),s.data.setAll(P),s.appear(),s.bullets.push((function(){return g.D.new(j,{sprite:y.J.new(j,{text:"incomp"===i||"delay"===i?"":"{valueXTotalPercent.formatNumber('#.')}%",fill:j.interfaceColors.get("alternativeText"),opacity:"incomp"===i?0:1,fontSize:"1vw",centerY:d.yP,centerX:d.yP,populateText:!0})})})),s.columns.template.events.on("click",(t=>{var s;const o=(null===(s=t.target.dataItem)||void 0===s?void 0:s.dataContext).category,n=O.S6.find((e=>e.category===o)),h=null===n||void 0===n?void 0:n.value,d="comp"===i?"incomp"===i?1:4:"delay"===i?3:1,c="CP = '"+e.contractp+"' AND Type = "+h+" AND Status = "+d;var p=r.IX.createQuery();let u;a.Up.when((()=>{a.Up.whenLayerView(r.IX).then((e=>{r.IX.queryFeatures(p).then((t=>{const i=t.features.length;let s=[];for(var r=0;r<i;r++){var o=t.features[r].attributes.OBJECTID;s.push(o)}u&&u.remove(),u=e.highlight(s),a.Up.on("click",(()=>{e.filter=new l.A({where:void 0}),u.remove()}))})),e.filter=new l.A({where:c})}))}))})),L.data.push(s)}return t.current=L,L.labels.template.setAll({oversizedBehavior:"truncate",fill:u.yW("#ffffff"),fontSize:"0.8vw",scale:1.2}),I("Complete","comp"),I("Incomplete","incomp"),C.appear(1e3,100),()=>{j.dispose()}})),(0,k.jsxs)("div",{children:[(0,k.jsxs)("div",{className:"lotNumberImage",children:[(0,k.jsxs)("div",{children:[(0,k.jsx)("div",{className:"totalLotsLabel",children:"TOTAL PROGRESS"}),(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),(0,k.jsxs)("b",{className:"totalLotsNumber",children:[(0,O.n3)(C[2])," %"," ",(0,k.jsxs)("div",{className:"totalLotsNumber2",children:["(",(0,O.n3)(C[0]),")"]})]})]}),(0,k.jsx)("img",{src:"https://EijiGorilla.github.io/Symbols/Viaduct_Images/Viaduct_All_Logo.svg",alt:"Utility Logo",height:"15%",width:"15%",style:{padding:"10px",margin:"auto"}})]}),(0,k.jsx)("div",{id:S,style:{width:"23vw",height:"55vh",backgroundColor:"rgb(0,0,0,0)",color:"white",marginRight:"10px",marginTop:"20px"}})]})}},56375:(e,t,i)=>{i.d(t,{s:()=>r});var s=i(2857),a=i(40730);class r extends s.wC{constructor(){super(...arguments),Object.defineProperty(this,"axis",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}_beforeChanged(){super._beforeChanged();const e=this.get("sprite");if(this.isDirty("sprite")&&e&&(e.setAll({position:"absolute",role:"figure"}),this._disposers.push(e)),this.isDirty("location")){const t=e.dataItem;this.axis&&e&&t&&this.axis._prepareDataItem(t)}}dispose(){const e=this.axis;e&&a.__(e._bullets,((t,i)=>{i.uid==this.uid&&delete e._bullets[t]})),super.dispose()}}Object.defineProperty(r,"className",{enumerable:!0,configurable:!0,writable:!0,value:"AxisBullet"}),Object.defineProperty(r,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:s.wC.classNames.concat([r.className])})},2955:(e,t,i)=>{i.d(t,{V:()=>r});var s=i(76652),a=i(55077);class r extends s.k{constructor(){super(...arguments),Object.defineProperty(this,"_display",{enumerable:!0,configurable:!0,writable:!0,value:this._root._renderer.makePicture(void 0)})}_changed(){if(super._changed(),this.isDirty("width")){const e=this.get("width");this._display.width=a.Et(e)?e:void 0}if(this.isDirty("height")){const e=this.get("height");this._display.height=a.Et(e)?e:void 0}if(this.isDirty("shadowColor")){this._display.clear();const e=this.get("shadowColor");this._display.shadowColor=null==e?void 0:e}this.isDirty("shadowBlur")&&(this._display.clear(),this._display.shadowBlur=this.get("shadowBlur")),this.isDirty("shadowOffsetX")&&(this._display.clear(),this._display.shadowOffsetX=this.get("shadowOffsetX")),this.isDirty("shadowOffsetY")&&(this._display.clear(),this._display.shadowOffsetY=this.get("shadowOffsetY")),this.isDirty("shadowOpacity")&&(this._display.clear(),this._display.shadowOpacity=this.get("shadowOpacity")),(this.isDirty("src")||this.isDirty("cors"))&&(this._display.clear(),this._load())}_load(){const e=this.get("src");if(e){const t=new Image;t.crossOrigin=this.get("cors","anonymous"),t.src=e;const i=this.events;t.decode().then((()=>{this._display.image=t,this._updateSize(),!i.isDisposed()&&i.isEnabled("loaded")&&i.dispatch("loaded",{type:"loaded",target:this})})).catch((e=>{!i.isDisposed()&&i.isEnabled("loaderror")&&i.dispatch("loaderror",{type:"loaderror",target:this})}))}}_updateSize(){super._updateSize();const e=this._display.image;if(e){let t=this.getPrivate("width",this.get("width")),i=this.getPrivate("height",this.get("height"));const s=e.width&&e.height?e.width/e.height:0;a.Et(t)&&a.Et(i)?(this._display.width=t,this._display.height=i):a.Et(t)&&s?i=t/s:a.Et(i)&&s?t=i*s:(t=e.width,i=e.height),a.Et(t)&&(this._display.width=t),a.Et(i)&&(this._display.height=i),this.markDirtyBounds(),this.markDirty()}}}Object.defineProperty(r,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Picture"}),Object.defineProperty(r,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:s.k.classNames.concat([r.className])})}}]);
//# sourceMappingURL=1677.ebdd8720.chunk.js.map