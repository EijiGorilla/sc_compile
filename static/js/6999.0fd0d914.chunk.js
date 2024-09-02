"use strict";(self.webpackChunksc_compile=self.webpackChunksc_compile||[]).push([[6999],{19112:(t,e,i)=>{var a;i.d(e,{r:()=>a}),function(t){t[t.TRANSLATE_Z=0]="TRANSLATE_Z",t[t.TRANSLATE_XY=1]="TRANSLATE_XY",t[t.SCALE=2]="SCALE",t[t.ROTATE=3]="ROTATE",t[t.SCALE_ROTATE=4]="SCALE_ROTATE"}(a||(a={}))},60428:(t,e,i)=>{i.d(e,{c:()=>s});var a=i(56121);class s{constructor(){this._available=!0}set location(t){this._forEachManipulator3D((e=>e.location=t))}set elevationAlignedLocation(t){this._forEachManipulator3D((e=>e.elevationAlignedLocation=t))}set elevationInfo(t){this._forEachManipulator3D((e=>e.elevationInfo=t))}get renderLocation(){let t;return this._forEachManipulator3D((e=>{t||(t=e.renderLocation)})),t}get available(){return this._available}set available(t){this._available=t,this._forEachManipulator3D((e=>e.available=t))}get hovering(){return this.someManipulator((t=>t.hovering))}get grabbing(){return this.someManipulator((t=>t.grabbing))}get dragging(){return this.someManipulator((t=>t.dragging))}get selected(){return this.someManipulator((t=>t.selected))}hasManipulator(t){return this.someManipulator((e=>e===t))}someManipulator(t){let e=!1;return this.forEachManipulator((i=>{!e&&t(i)&&(e=!0)})),e}_forEachManipulator3D(t){this.forEachManipulator(((e,i)=>{e instanceof a.q&&t(e,i)}))}}},96999:(t,e,i)=>{i.d(e,{K:()=>B,v:()=>Y});var a=i(88321),s=i(54901),n=i(81806),r=i(68134),o=i(19112),l=i(46947),c=i(60428),h=i(69539),u=i(54099),p=i(30726),d=i(34761),_=i(13191),f=i(20664),g=i(9392),M=i(75762),m=i(56121),w=i(91175),v=i(7947),A=i(14471),y=i(83490),T=i(62577),x=i(45463),E=i(76956),S=i(17046),O=i(76336);class b extends c.c{constructor(t){super(),this._handles=new a.A,this._arrowManipulatorInfos=new Array,this._angle=0,this._scale=1,this._radius=l.Gz,this._updateAfterDrag=!1,this.events=new u.A,this._tool=t.tool,this._view=t.view,this._opaqueMaterial=this._createMaterial(),this._transparentMaterial=this._createMaterial(.5),null!=t.radius&&(this._radius=t.radius),this._createManipulators(),this.forEachManipulator((t=>this._tool.manipulators.add(t)))}set orthogonalAvailable(t){this._arrowManipulatorInfos.length>=3&&(this._arrowManipulatorInfos[1].manipulator.available=t,this._arrowManipulatorInfos[3].manipulator.available=t)}destroy(){this._handles=(0,p.pR)(this._handles),this.forEachManipulator((t=>{this._tool.manipulators.remove(t),t.destroy()})),this._tool=null,this._view=null,this._arrowManipulatorInfos.length=0}forEachManipulator(t){for(const{manipulator:e}of this._arrowManipulatorInfos)t(e,o.r.TRANSLATE_XY)}createManipulatedObjectDragPipeline(t,e,i){if(!e.operations)return(0,s.hA)();const a=e.operations.data.spatialReference,n=e.graphic;return(0,A.q)(e,i,(i=>this.createDragPipeline(((e,a,s,n,r)=>(({steps:a,cancel:s}=t(e,a,s,n,r)),i(e,a,s))),e.elevationInfo,a,n)))}createDragPipeline(t,e,i,a){return(0,s.vE)(this._arrowManipulatorInfos.map(((s,n)=>{let{manipulator:r}=s;return(0,S.Xt)(r,((s,r,l,c,h)=>{const u=r.next((t=>({...t,manipulatorType:o.r.TRANSLATE_XY}))).next((0,S.Tp)(this._view,s.elevationAlignedLocation)).next((0,v.PW)(this._view,s.elevationAlignedLocation,e,i,a)).next((0,S.an)(s.location,this.angle+(n+1)*Math.PI*.5)).next((0,S.sO)());t(s,u,l,c,h)}))})))}get angle(){return this._angle}set angle(t){this._angle=t,this.dragging?this._updateAfterDrag=!0:this._updateManipulatorTransform()}get displayScale(){return this._scale}set displayScale(t){this._scale=t,this._updateManipulatorTransform()}get radius(){return this._radius}set radius(t){this._radius!==t&&(this._radius=t,this._updateManipulators())}_updateManipulators(){for(let t=0;t<this._arrowManipulatorInfos.length;t++)this._updateArrowManipulator(this._arrowManipulatorInfos[t],t);this._updateManipulatorTransform()}_updateArrowManipulator(t,e){let{manipulator:i,transform:a}=t;const s=this._radius/l.Gz,n=l.cy*s,r=n*Math.sqrt(3)/2,o=(0,T._B)(this._opaqueMaterial,r,n/2,n/2,l.Tq);(0,T.xh)(o,(0,d.kN)(M.Rc.get(),(0,f.s)(M.rq.get(),0,-r/3,0))),i.renderObjects=[new w.M(o,O.p7.Focused),new w.M(o.instantiate({material:this._transparentMaterial}),O.p7.Unfocused)],i.radius=r/3*2*1.2;const c=(0,d.N9)(M.Rc.get(),e*Math.PI/2),h=(0,d.kN)(M.Rc.get(),(0,f.s)(M.rq.get(),0,l.my*s,0));(0,d.lw)(a,c,h)}_createManipulators(){for(let t=0;t<4;t++){const e=this._createArrowManipulator(t);this._arrowManipulatorInfos.push(e)}this._updateManipulatorTransform()}_updateManipulatorTransform(){const t=this.angle,e=(0,d.$0)(M.Rc.get(),t,(0,g.fA)(0,0,1));if(null==e)return;const i=(0,d.CV)(M.Rc.get(),(0,f.s)(M.rq.get(),this.displayScale,this.displayScale,this.displayScale)),a=(0,d.lw)(M.Rc.get(),i,e);for(const s of this._arrowManipulatorInfos){const t=(0,d.lw)(M.Rc.get(),a,s.transform);s.manipulator.modelTransform=t}}_createArrowManipulator(t){const e=new m.q({view:this._view,autoScaleRenderObjects:!1,worldOriented:!0,focusMultiplier:1,touchMultiplier:1,collisionType:{type:"disc",direction:(0,g.fA)(0,0,1)}}),i={manipulator:e,transform:(0,_.vt)()};return this._updateArrowManipulator(i,t),this._handles.add(e.events.on("drag",(t=>{this._updateAfterDrag&&"end"===t.action&&!this.dragging&&(this._updateManipulatorTransform(),this._updateAfterDrag=!1)}))),i}_createMaterial(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;const e=new E.v({cullFace:y.s2.Back,renderOccluded:x.m$.Transparent,isDecoration:!0});return this._handles.add((0,r.wB)((()=>h.A.toUnitRGBA(this._view.effectiveTheme.accentColor)),(i=>{i[3]*=t,e.setParameters({color:i})}),r.Vh)),e}get test(){}}var C=i(12482);class P{constructor(){this._view=null,this._elevationInfo=null,this._lastDragEvent=null,this._next=null,this._enabled=!1}get enabled(){return this._enabled}set enabled(t){if(this._enabled!==t&&null!=this._lastDragEvent&&null!=this._next){const e=this._lastDragEvent.mapEnd,i=this._snap(this._lastDragEvent.screenEnd);if(null!=i){const a={action:"update",mapStart:this._lastDragEvent.mapStart,mapEnd:!0===t?i:e,screenStart:this._lastDragEvent.screenEnd,screenEnd:this._lastDragEvent.screenEnd};this._next.execute(a)}}this._enabled=t}_snap(t){const e=null!=this._view?this._view.toMap(t,{exclude:[]}):null;return null!=e&&null!=this._view&&(e.z=(0,C.id)(e,this._view,this._elevationInfo)),e}createDragEventPipelineStep(t,e){this._view=t,this._elevationInfo=e,this._lastDragEvent=null;const i=new S.rh;return this._next=i,[t=>{if(this._lastDragEvent="end"!==t.action?{...t}:null,this._enabled){const e=this._snap(t.screenEnd);return null!=e?{action:t.action,mapStart:t.mapStart,mapEnd:e,screenStart:t.screenStart,screenEnd:t.screenEnd}:null}return{action:t.action,mapStart:t.mapStart,mapEnd:t.mapEnd,screenStart:t.screenStart,screenEnd:t.screenEnd}},i]}}class D extends c.c{constructor(t){super(),this._handles=new a.A,this._snapToScene=new P,this._scale=1,this._radius=l.Gz,this._view=t.view,this._tool=t.tool,this._discMaterial=this._createMaterial(),this._discMaterialTransparent=this._createMaterial(.5),null!=t.snapToScene&&(this.snapToScene=t.snapToScene),null!=t.radius&&(this._radius=t.radius),this._createManipulator(),this.forEachManipulator((t=>this._tool.manipulators.add(t)))}destroy(){this._handles=(0,p.pR)(this._handles),this.forEachManipulator((t=>{this._tool.manipulators.remove(t),t.destroy()})),this._tool=null,this._view=null,this._manipulator=null}forEachManipulator(t){t(this._manipulator,o.r.TRANSLATE_XY)}get displayScale(){return this._scale}set displayScale(t){this._scale=t,this._updateManipulatorTransform()}get snapToScene(){return this._snapToScene.enabled}set snapToScene(t){this._snapToScene.enabled=t}get radius(){return this._radius}set radius(t){t!==this._radius&&(this._radius=t,this._updateManipulator())}get discManipulator(){return this._manipulator}createManipulatedObjectDragPipeline(t,e,i){if(!e.operations)return(0,s.hA)();const a=e.graphic,n=e.elevationInfo,r=e.operations.data.spatialReference;return(0,A.q)(e,i,(e=>this.createDragPipeline(((i,a,s,n,r)=>(({steps:a,cancel:s}=t(i,a,s,n,r)),e(i,a,s))),n,r,a)))}createDragPipeline(t,e,i,a){const s=this._view;return(0,S.Xt)(this._manipulator,((n,r,l,c,h)=>{const u=r.next((0,S.Tp)(s,n.elevationAlignedLocation)).next((0,v.PW)(s,n.elevationAlignedLocation,e,i,a)).next(...this._snapToScene.createDragEventPipelineStep(s,e)).next((t=>({...t,manipulatorType:o.r.TRANSLATE_XY}))).next((0,S.sO)());t(n,u,l,c,h)}))}_updateManipulatorTransform(){const t=(0,d.CV)(M.Rc.get(),(0,f.s)(M.rq.get(),this.displayScale,this.displayScale,this.displayScale));this._manipulator.modelTransform=t}_createManipulator(){const t=this._view;this._manipulator=new m.q({view:t,worldSized:!1,autoScaleRenderObjects:!1,focusMultiplier:1,touchMultiplier:1,collisionType:{type:"disc",direction:(0,g.fA)(0,0,1)},worldOriented:!0}),this._updateManipulator()}_updateManipulator(){const t=(0,T.nW)(this._discMaterial,l.Tq,1,l.zu,(0,g.fA)(0,0,1),(0,g.fA)(0,0,0));t.transformation=(0,d.CV)((0,_.vt)(),(0,g.fA)(this._radius,this._radius,this._radius)),this._manipulator.renderObjects=[new w.M(t,O.p7.Focused),new w.M(t.instantiate({material:this._discMaterialTransparent}),O.p7.Unfocused)],this._manipulator.radius=l.Wv*(this._radius/l.Gz)}_createMaterial(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;const e=new E.v({cullFace:y.s2.Back,renderOccluded:x.m$.Transparent,isDecoration:!0});return this._handles.add((0,r.wB)((()=>h.A.toUnitRGBA(this._view.effectiveTheme.accentColor)),(i=>{i[3]*=t,e.setParameters({color:i})}),r.Vh)),e}get test(){}}var z=i(59784),R=i(15941),L=i(38317),I=i(14835);class X extends c.c{constructor(t){super(),this._radius=l.Gz,this.events=new u.A,this._tool=t.tool,this._view=t.view;const e=new I.w({getTheme:()=>this._view.effectiveTheme});this._settings=e,null!=t.radius&&(this._radius=t.radius);const i=this._view.effectiveTheme.accentColor;this._materials={materialUnfocused:(0,L.UM)(W(i,1,.25),x.m$.Occlude),materialFocused:(0,L.UM)(W(i,1,0),x.m$.Occlude),materialOccludedUnfocused:(0,L.UM)(W(i,.7,0),e.zManipulator.renderOccluded),materialOccludedFocused:(0,L.UM)(W(i,.85,0),e.zManipulator.renderOccluded)},this._themeHandle=(0,r.wB)((()=>this._view.effectiveTheme.accentColor),(t=>{const e=W(t,1,.25),i=W(t,1,0),a=W(t,.7,0),s=W(t,.85,0),{materialUnfocused:n,materialFocused:r,materialOccludedUnfocused:o,materialOccludedFocused:l}=this._materials;n.setParameters({color:e}),r.setParameters({color:i}),o.setParameters({color:a}),l.setParameters({color:s})})),this._createManipulator(),this.forEachManipulator((t=>this._tool.manipulators.add(t)))}destroy(){this._themeHandle=(0,p.xt)(this._themeHandle),this._manipulator.applyObjectTransform=j,this.forEachManipulator((t=>{this._tool.manipulators.remove(t),t.destroy()}))}forEachManipulator(t){t(this._manipulator,o.r.TRANSLATE_Z)}createManipulatedObjectDragPipeline(t,e,i){if(!e.operations)return(0,s.hA)();const a=e.operations.data.spatialReference;return(0,A.q)(e,i,(e=>this.createDragPipeline(((i,a,s,n,r)=>(({steps:a,cancel:s}=t(i,a,s,n,r)),e(i,a,s))),a)))}createDragPipeline(t,e){const i=this._view;return(0,S.Xt)(this._manipulator,((a,s,n,r,l)=>{const c=s.next((t=>({...t,manipulatorType:o.r.TRANSLATE_Z}))).next((0,v.iv)(i,a.renderLocation,e)).next((0,S.sO)());t(a,c,n,r,l)}))}get radius(){return this._radius}set radius(t){t!==this._radius&&(this._radius=t,this._updateManipulator())}_updateManipulator(){const t=this._settings,e=this._radius/l.Gz,i=t.zManipulator.height*e,a=t.zManipulator.coneHeight*e,s=t.zManipulator.coneWidth*e,n=t.zManipulator.width*e,r=[(0,g.fA)(0,0,0),(0,g.fA)(0,0,i)],o=[(0,g.fA)(0,0,0),(0,g.fA)(0,0,i+a)],c=(()=>{const t=(0,_.vt)();return(0,d.Tl)(t,t,[0,0,i]),(0,d.eL)(t,t,Math.PI/2),t})(),{materialUnfocused:h,materialFocused:u,materialOccludedUnfocused:p,materialOccludedFocused:f}=this._materials,M=(0,T.Nb)(h,r,n/2,16,!1),m=(0,T.EE)(h,a,s/2,16,!1);m.transformation=c,this._manipulator.renderObjects=[new w.M(m,O.p7.Unfocused),new w.M(M,O.p7.Unfocused),new w.M(m.instantiate({material:u}),O.p7.Focused),new w.M(M.instantiate({material:u}),O.p7.Focused),new w.M(m.instantiate({material:p}),O.p7.Unfocused),new w.M(M.instantiate({material:p}),O.p7.Unfocused),new w.M(m.instantiate({material:f}),O.p7.Focused),new w.M(M.instantiate({material:f}),O.p7.Focused)],this._manipulator.radius=n/2+2,this._manipulator.collisionType={type:"line",paths:[o]}}_createManipulator(){const t=this._view,e=new m.q({view:t,autoScaleRenderObjects:!1,worldSized:!1,selectable:!1,cursor:"ns-resize",elevationInfo:this.elevationInfo,worldOriented:!0,collisionPriority:1.6});e.applyObjectTransform=e=>{const i=t.state.camera,a=q;t.renderCoordsHelper.toRenderCoords(this._manipulator.elevationAlignedLocation,a);const s=(0,f.F)(i.eye,a),n=i.computeRenderPixelSizeAtDist(s),r=(0,f.f)(F,a,i.eye);(0,f.n)(r,r);const o=U;t.renderCoordsHelper.worldUpAtPosition(q,o);const c=Math.abs((0,f.m)(r,o)),h=(0,f.b)(F,r,o),u=(0,f.b)(F,h,o),p=(0,R.qE)(c,.01,1),d=1-Math.sqrt(1-p*p)/p/i.fullWidth,_=this._settings,g=this._radius/l.Gz,M=_.zManipulator.width*g;(0,f.j)(u,(0,f.n)(u,u),(1/d-1)*s+n*M),e[12]-=F[0],e[13]-=F[1],e[14]-=F[2]},this._manipulator=e,this._updateManipulator()}get test(){}}function W(t,e,i){const a=(0,z.e$)(t,i);return a.a*=e,h.A.toUnitRGBA(a)}const q=(0,g.vt)(),F=(0,g.vt)(),U=(0,g.vt)(),j=()=>{};class Y extends c.c{constructor(t){super(),this._handles=new a.A,this._interactive=!0;const{tool:e,view:i,snapToScene:s,radius:n}=t;this._view=i,this.xyManipulation=new D({tool:e,view:i,snapToScene:s,radius:n}),this.xyAxisManipulation=new b({tool:e,view:i,radius:n}),this.zManipulation=new X({tool:e,view:i,radius:n}),this.xyManipulation.available=t.xyAvailable,this.xyAxisManipulation.available=t.xyAxisAvailable,this.zManipulation.available=t.zAvailable,this._autoHideXYAxis(),this.forEachManipulator((t=>this._handles.add(t.events.on("grab-changed",(()=>this._updateManipulatorInteractivity())))))}destroy(){this._handles.destroy(),this.xyManipulation.destroy(),this.xyAxisManipulation.destroy(),this.zManipulation.destroy()}createManipulatedObjectDragPipeline(t,e,i){return(0,s.vE)([this.xyManipulation.createManipulatedObjectDragPipeline(((e,i,a,s,n)=>t(B.XY,e,i,a,s,n)),e,i),this.xyAxisManipulation.createManipulatedObjectDragPipeline(((e,i,a,s,n)=>t(B.XY_AXIS,e,i,a,s,n)),e,i),this.zManipulation.createManipulatedObjectDragPipeline(((e,i,a,s,n)=>t(B.Z,e,i,a,s,n)),e,i)])}createDragPipeline(t,e,i,a){return(0,s.vE)([this.xyManipulation.createDragPipeline(((e,i,a,s,n)=>t(B.XY,e,i,a,s,n)),e,i,a),this.xyAxisManipulation.createDragPipeline(((e,i,a,s,n)=>t(B.XY_AXIS,e,i,a,s,n)),e,i,a),this.zManipulation.createDragPipeline(((e,i,a,s,n)=>t(B.Z,e,i,a,s,n)),i)])}set snapToScene(t){this.xyManipulation.snapToScene=t}set angle(t){this.xyAxisManipulation.angle=t}set interactive(t){this._interactive!==t&&(this._interactive=t,this._updateManipulatorInteractivity())}set radius(t){this.xyAxisManipulation.radius=t,this.xyManipulation.radius=t,this.zManipulation.radius=t}set displayScale(t){this.xyManipulation.displayScale=t,this.xyAxisManipulation.displayScale=t}forEachManipulator(t){this.xyManipulation.forEachManipulator((e=>t(e,o.r.TRANSLATE_XY))),this.xyAxisManipulation.forEachManipulator((e=>t(e,o.r.TRANSLATE_XY))),this.zManipulation.forEachManipulator((e=>t(e,o.r.TRANSLATE_Z)))}get _xyAxisVisible(){const t=this.xyManipulation.someManipulator((t=>t.focused))||this.xyAxisManipulation.someManipulator((t=>t.focused));return this._view.inputManager&&"touch"===this._view.inputManager.latestPointerType||t}_autoHideXYAxis(){const t=this.xyAxisManipulation,e=this.xyManipulation;if((0,n.A)("esri-mobile"))return;const i=[];e.forEachManipulator((t=>i.push(t))),t.forEachManipulator((t=>i.push(t)));const a=()=>{const e=[];this._xyAxisVisible||t.forEachManipulator((t=>e.push(t.disableDisplay()))),this._handles.remove(N),this._handles.add(e,N)};for(const s of i)this._handles.add(s.events.on("focus-changed",a));this._view.inputManager&&this._handles.add((0,r.z7)((()=>this._view.inputManager?.latestPointerType),a)),a()}_updateManipulatorInteractivity(){const t=this.grabbing;this.forEachManipulator((e=>{e.interactive=!t&&this._interactive||e.grabbing}))}static radiusForSymbol(t){const e=null!=t&&"point-3d"===t.type&&t.symbolLayers;return e&&e.some((t=>"icon"===t.type))?l.HJ:l.Gz}}const N="disable-xy-axis-display";var B,G;(G=B||(B={}))[G.XY=0]="XY",G[G.XY_AXIS=1]="XY_AXIS",G[G.Z=2]="Z"},46947:(t,e,i)=>{i.d(e,{$s:()=>f,Cq:()=>u,D7:()=>T,Dh:()=>x,Ej:()=>O,Gz:()=>s,HJ:()=>c,Je:()=>h,M1:()=>y,Ov:()=>E,P3:()=>g,Tq:()=>r,V1:()=>S,Vj:()=>M,Wv:()=>n,_L:()=>v,cg:()=>w,cy:()=>o,gB:()=>d,jR:()=>m,my:()=>l,nI:()=>p,qf:()=>_,vo:()=>A,zT:()=>b,zu:()=>a});const a=128,s=70,n=80,r=.02,o=54,l=100,c=Math.ceil(s/3*2),h=160,u=.5,p=24,d=9,_=h+30,f=h+53,g=60,M=23,m=5*Math.PI/12,w=1*Math.PI/3,v=10,A=.2,y=30,T=53,x=.2,E=.3,S=200,O=3,b=1e6},14471:(t,e,i)=>{i.d(e,{P:()=>n,q:()=>s});var a=i(17046);function s(t,e,i){const s=(i,a)=>{e({action:i,object:t,dxScreen:a.screenDeltaX,dyScreen:a.screenDeltaY})};return i(((e,i,n)=>(i.next((t=>("start"===t.action&&s("start",t),t))).next((0,a.Wp)(t)).next((t=>{switch(t.action){case"start":case"update":(t.translationX||t.translationY||t.translationZ)&&s("update",t);break;case"end":s("end",t)}return t})),{steps:i,cancel:n=n.next((0,a.dp)(t)).next((t=>(s("end",{screenDeltaX:0,screenDeltaY:0}),t)))})))}function n(t){if(null==t?.axis)return 1;const{mapStart:e,mapEnd:i,axis:a}=t,s=[i.x-e.x,i.y-e.y];return s[0]*a[0]+s[1]*a[1]>0?1:-1}},14835:(t,e,i)=>{i.d(e,{w:()=>E});var a=i(35143),s=i(69539),n=i(91967),r=i(59784),o=i(46053),l=(i(81806),i(76460),i(47249),i(85842)),c=i(75655),h=i(45463),u=i(35925);const p=.3;function d(t,e){e&&Object.assign(t,e)}class _{constructor(t){this.height=90,this.coneHeight=40,this.coneWidth=23,this.width=3,this.renderOccluded=h.m$.Opaque,this.color=t.accent}}class f{constructor(t){let{colors:e,...i}=t;this.size=11,this.outlineSize=1,this.collisionPadding=9,this.color=e.accent,this.outlineColor=e.outline,this.renderOccluded=h.m$.Opaque,this.hoverOutlineColor=e.selectedOutline,d(this,i)}applyColor(t){this._apply(this.color,t)}applyOutline(t){this._apply(this.outlineColor,t)}applyHoverOutline(t){this._apply(this.hoverOutlineColor,t)}_apply(t,e){e.setParameters({color:(0,r.QP)(t),renderOccluded:this.renderOccluded})}}class g{constructor(t){let{colors:e,...i}=t;this.size=40,this.height=.2,this.offset=.25,this.collisionPadding=2,this.renderOccluded=h.m$.Transparent,this.minSquaredEdgeLength=900,this.color=(0,r._L)(e.accent,.5),this.hoverColor=e.accent,d(this,i)}applyColor(t){this._apply(this.color,t)}applyHover(t){this._apply(this.hoverColor,t)}_apply(t,e){e.setParameters({color:(0,r.QP)(t),renderOccluded:this.renderOccluded})}}class M{constructor(t){this.vertex=new f({colors:t,color:t.accent,outlineColor:t.outline}),this.edge=new f({colors:t,color:(0,r.Vl)((0,r._L)(t.accent,2/3),.5),outlineColor:(0,r._L)(t.outline,.5),size:8,collisionPadding:8}),this.selected=new f({colors:t,color:t.selected,outlineColor:t.outline}),this.edgeOffset=new g({colors:t})}}class m{constructor(t){let{colors:e,...i}=t;this.width=1.5,this.stipplePattern=(0,u.wk)(3.3),this.falloff=0,this.innerWidth=1.5,this.renderOccluded=h.m$.OccludeAndTransparent,this.color=e.selected,this.stippleOffColor=e.outline,this.innerColor=e.selected,d(this,i)}apply(t){t.color=(0,r.QP)(this.color),t.width=this.width,t.stipplePattern=this.stipplePattern,t.stippleOffColor=(0,r.QP)(this.stippleOffColor),t.falloff=this.falloff,t.innerWidth=this.innerWidth,t.innerColor=(0,r.QP)(this.innerColor),t.renderOccluded=this.renderOccluded}}class w{constructor(t){let{colors:e,...i}=t;this.size=4,this.outlineSize=1,this.shape="square",this.color=e.selected,this.outlineColor=e.outline,d(this,i)}apply(t){t.color=(0,r.QP)(this.color),t.size=this.size,t.outlineSize=this.outlineSize,t.outlineColor=(0,r.QP)(this.outlineColor),t.primitive=this.shape}}class v{constructor(t){let{colors:e,...i}=t;this.innerWidth=1,this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=p,this.globalAlphaContrastBoost=1.5,this.radius=3,this.innerColor=e.selected,this.glowColor=e.accent,this.heightFillColor=e.accent,d(this,i)}apply(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const i={glowColor:s.A.toUnitRGB(this.glowColor),glowFalloff:this.glowFalloff,glowWidth:this.glowWidth,innerColor:s.A.toUnitRGB(this.innerColor),innerWidth:this.innerWidth,globalAlpha:this.globalAlpha*e*this.glowColor.a,globalAlphaContrastBoost:this.globalAlphaContrastBoost,intersectsLineRadius:this.radius};"style"in t?t.style=i:t.laserlineStyle=i}}class A{constructor(t){this.outline=new m({colors:t,color:t.stippleOff,renderOccluded:h.m$.OccludeAndTransparentStencil,stippleOffColor:t.stippleOn,innerWidth:0}),this.staged=new m({colors:t,color:t.stippleOn,renderOccluded:h.m$.OccludeAndTransparentStencil,innerColor:t.stagedSolid,stippleOffColor:t.stippleOff}),this.shadowStyle=new v({colors:t,globalAlpha:p,glowColor:t.accent,glowFalloff:8,glowWidth:8,innerColor:t.selected,innerWidth:1})}}class y{constructor(t){this.outline=new w({colors:t,color:t.selected,outlineColor:t.outline,outlineSize:1,shape:"circle",size:4}),this.shadowStyle=new v({colors:t,globalAlpha:p,glowColor:t.accent,glowFalloff:1.5,glowWidth:6,innerColor:t.selected,innerWidth:1,radius:2})}}class T extends m{constructor(t){let{colors:e,...i}=t;super({colors:e}),this.extensionType=c.A.GROUND_RAY,d(this,i)}}class x{constructor(t){this.laserlineAlphaMultiplier=1.5,this.heightPlaneAngleCutoff=20,this.lineObjects=new A(t),this.pointObjects=new y(t),this.heightPlane=new v({colors:t,globalAlpha:p,glowColor:t.accent,glowFalloff:8,glowWidth:8,innerColor:t.selected,innerWidth:1}),this.heightBox=new v({colors:t,globalAlpha:p,glowColor:t.accent,glowFalloff:8,glowWidth:8,innerColor:t.selected,innerWidth:0,heightFillColor:t.accent}),this.zVerticalLine=new T({colors:t,color:(0,r._L)(t.accent,.5),falloff:2,innerColor:(0,r._L)(t.selected,0),renderOccluded:h.m$.OccludeAndTransparent,stipplePattern:null,width:5,extensionType:c.A.GROUND_RAY})}}let E=class extends n.A{constructor(t){super(t)}get colors(){const t=this.getTheme().accentColor,e=t.a;return{accent:t,contrast:(0,r.bJ)(t),selected:s.A.fromArray([255,255,255,e]),selectedOutline:s.A.fromArray([255,255,255,e]),staged:s.A.fromArray([12,207,255,e]),stagedSolid:s.A.fromArray([12,207,255,1]),outline:s.A.fromArray([0,0,0,.5*e]),stippleOn:s.A.fromArray([255,255,255,1]),stippleOff:s.A.fromArray([0,0,0,.5])}}get visualElements(){return new x(this.colors)}get manipulators(){return new M(this.colors)}get zManipulator(){return new _(this.colors)}};(0,a._)([(0,o.MZ)()],E.prototype,"colors",null),(0,a._)([(0,o.MZ)()],E.prototype,"visualElements",null),(0,a._)([(0,o.MZ)()],E.prototype,"manipulators",null),(0,a._)([(0,o.MZ)()],E.prototype,"zManipulator",null),(0,a._)([(0,o.MZ)()],E.prototype,"getTheme",void 0),E=(0,a._)([(0,l.$)("esri.views.3d.interactive.editingTools.settings")],E)}}]);
//# sourceMappingURL=6999.0fd0d914.chunk.js.map