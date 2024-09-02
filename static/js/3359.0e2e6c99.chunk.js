"use strict";(self.webpackChunksc_compile=self.webpackChunksc_compile||[]).push([[3359],{7200:(e,t,i)=>{i.d(t,{S:()=>S,b:()=>m});var n=i(55855),s=i(18261),r=i(34981),a=i(26917),o=i(59395),c=i(81993),l=i(90235),h=i(80883),d=i(3799),u=i(5517),p=i(58350),_=i(64839),g=i(32307),v=i(10773),f=i(66470);function m(e){const t=new g.N5,i=e.multipassEnabled&&e.output===r.V.Color;t.include(o.d,e),t.include(s.L,e),t.include(a.HQ,e);const{vertex:n,fragment:m}=t;return m.include(h.a),(0,d.NB)(n,e),m.uniforms.add(new p.E("uColor",(e=>e.color))),t.attributes.add(f.r.POSITION,"vec3"),t.varyings.add("vWorldPosition","vec3"),i&&t.varyings.add("depth","float"),e.screenSizeEnabled&&t.attributes.add(f.r.OFFSET,"vec3"),e.shadingEnabled&&((0,d.S7)(n),t.attributes.add(f.r.NORMAL,"vec3"),t.varyings.add("vViewNormal","vec3")),n.code.add(_.H`
    void main(void) {
      vWorldPosition = ${e.screenSizeEnabled?"screenSizeScaling(offset, position)":"position"};
  `),e.shadingEnabled&&n.code.add(_.H`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`),n.code.add(_.H`
    ${i?"depth = (view * vec4(vWorldPosition, 1.0)).z;":""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `),i&&t.include(c.Q,e),m.code.add(_.H`
    void main() {
      discardBySlice(vWorldPosition);
      ${i?"terrainDepthTest(depth);":""}
    `),e.shadingEnabled?(m.uniforms.add(new u.t("shadingDirection",(e=>e.shadingDirection))),m.uniforms.add(new p.E("shadedColor",(e=>b(e.shadingTint,e.color)))),m.code.add(_.H`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`)):m.code.add(_.H`vec4 finalColor = uColor;`),e.transparencyPassType===v.y.ColorAlpha&&(t.outputs.add("fragColor","vec4",0),t.outputs.add("fragAlpha","float",1)),m.code.add(_.H`
      ${e.output===r.V.ObjectAndLayerIdColor?_.H`finalColor.a = 1.0;`:""}
      if (finalColor.a < ${_.H.float(l.y)}) {
        discard;
      }

      ${e.output===r.V.Color?_.H`fragColor = highlightSlice(finalColor, vWorldPosition); ${e.transparencyPassType===v.y.ColorAlpha?_.H`
                    fragColor = premultiplyAlpha(fragColor);
                    fragAlpha = fragColor.a;`:""}`:""}
    }
    `),t}function b(e,t){const i=1-e[3],n=e[3]+t[3]*i;return 0===n?(y[3]=n,y):(y[0]=(e[0]*e[3]+t[0]*t[3]*i)/n,y[1]=(e[1]*e[3]+t[1]*t[3]*i)/n,y[2]=(e[2]*e[3]+t[2]*t[3]*i)/n,y[3]=t[3],y)}const y=(0,n.vt)(),S=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}))},56121:(e,t,i)=>{i.d(t,{q:()=>F});i(35238);var n=i(4212),s=i(54099),r=i(54901),a=(i(81806),i(15941)),o=i(30726),c=i(76931),l=i(86300),h=i(44680),d=i(34761),u=i(13191),p=i(19555),_=i(20664),g=i(9392),v=i(34111),f=i(9624),m=i(4437),b=i(482),y=i(2413),S=i(44230),E=i(13927),w=i(95925),A=i(75762),T=i(32535),R=i(12482),O=i(80935),M=i(37431),L=i(33062),j=i(37046),z=i(44513),P=i(8918),x=i(76336),C=i(19247);class F{constructor(e){this.metadata=void 0,this._camera=new L.A,this._elevation={offset:0,override:null},this.collisionType={type:"point"},this.collisionPriority=0,this._renderObjects=new Array,this.autoScaleRenderObjects=!0,this._available=!0,this._noDisplayCount=0,this._radius=10,this._worldSized=!1,this.focusMultiplier=2,this.touchMultiplier=2.5,this.worldOriented=!1,this._modelTransform=(0,u.vt)(),this._worldFrame=null,this._renderLocation=(0,g.vt)(),this._renderLocationDirty=!0,this._location=new C.A({x:0,y:0,z:0}),this._elevationAlignedLocation=new C.A,this._elevationAlignedLocationDirty=!0,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.consumesClicks=!0,this.cursor=null,this.grabCursor=null,this._grabbing=!1,this.dragging=!1,this._hovering=!1,this._selected=!1,this._state=x.SJ.None,this._focused=!1,this.events=new s.A.EventEmitter,this._screenLocation={screenPointArray:(0,c.gs)(),renderScreenPointArray:(0,c.r_)(),pixelSize:0},this._screenLocationDirty=!0,this._engineResourcesAddedToStage=!1,this._attached=!1,this._location.spatialReference=e.view.spatialReference,Object.assign(this,e);const t=this.view.state?.camera;t&&this._camera.copyFrom(t)}destroy(){this._applyObjectTransform=K,this._removeResourcesFromStage(),this._engineResources=null,this.view=null,this._camera=null}get _stage(){return this.view?._stage}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this._elevationAlignedLocationDirty=!0,this._renderLocationDirty=!0,this._updateEngineObject()}get renderObjects(){return this._renderObjects}set renderObjects(e){this._removeResourcesFromStage(),this._engineResources=null,this._renderObjects=e.slice(),this._updateEngineObject()}set available(e){e!==this._available&&(this._available=e,this._updateEngineObject())}get available(){return this._available}disableDisplay(){return this._noDisplayCount++,1===this._noDisplayCount&&this._updateEngineObject(),(0,r.hA)((()=>{this._noDisplayCount--,0===this._noDisplayCount&&this._updateEngineObject()}))}set radius(e){e!==this._radius&&(this._radius=e,this._updateEngineObject())}get radius(){return this._radius}set worldSized(e){e!==this._worldSized&&(this._worldSized=e,this._updateEngineObject())}get worldSized(){return this._worldSized}get modelTransform(){return this._modelTransform}set modelTransform(e){D(e)&&(this._screenLocationDirty=!0),(0,d.C)(this._modelTransform,e),this._updateEngineObject()}get renderLocation(){return this._renderLocationDirty&&(this._renderLocationDirty=!1,this.view.renderCoordsHelper.toRenderCoords(this.elevationAlignedLocation,this._renderLocation),this.worldOriented?(this._worldFrame||(this._worldFrame=(0,u.vt)()),function(e,t,i){switch(e.viewingMode){case"local":return(0,d.D_)(i),!0;case"global":{const n=(0,v.tO)(e.renderCoordsHelper.spatialReference);(0,b.n4)(t,0,q,0,n.radius),(0,m.y)((0,a.kU)(q[0]),(0,a.kU)(q[1]),i)}}}(this.view,this._renderLocation,this._worldFrame)):this._worldFrame&&(this._worldFrame=null)),this._renderLocation}set renderLocation(e){this.view.renderCoordsHelper.fromRenderCoords(e,this._location),this.elevationAlignedLocation=this._location}get location(){return this._location}set location(e){(0,T.EL)(e,this._location),this._notifyLocationChanged()}_notifyLocationChanged(){this._renderLocationDirty=!0,this._screenLocationDirty=!0,this._elevationAlignedLocationDirty=!0,this._updateEngineObject(),this.events.emit("location-update",{location:this._location})}get elevationAlignedLocation(){return this._elevationAlignedLocationDirty?(this._evaluateElevationAlignment(),this._updateElevationAlignedLocation(),this._elevationAlignedLocation):this._elevationAlignedLocation}set elevationAlignedLocation(e){(0,T.EL)(e,this._location),this._evaluateElevationAlignment(),this._location.z-=this._elevation.offset,this._updateElevationAlignedLocation(),this._updateEngineObject(),this.events.emit("location-update",{location:this._location})}_updateElevationAlignedLocation(){const e=null!=this._elevation.override?this._elevation.override:this.location.z||0;this._elevationAlignedLocation.x=this.location.x,this._elevationAlignedLocation.y=this.location.y,this._elevationAlignedLocation.z=e+this._elevation.offset,this._elevationAlignedLocation.spatialReference=(0,T.RS)(this.location.spatialReference),this._renderLocationDirty=!0,this._screenLocationDirty=!0,this._elevationAlignedLocationDirty=!1}grabbableForEvent(){return!0}get grabbing(){return this._grabbing}set grabbing(e){e!==this._grabbing&&(this._grabbing=e,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}get hovering(){return this._hovering}set hovering(e){e!==this._hovering&&(this._hovering=e,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}get selected(){return this._selected}set selected(e){e!==this._selected&&(this._selected=e,this._updateEngineObject(),this.events.emit("select-changed",{action:e?"select":"deselect"}))}get state(){return this._state}set state(e){e!==this._state&&(this._state=e,this._updateEngineObject())}updateStateEnabled(e,t){t?this.state|=e:this.state&=~e}_setFocused(e){e!==this._focused&&(this._focused=e,this.events.emit("focus-changed",{action:!0===e?"focus":"unfocus"}))}get focused(){return this._focused}get screenLocation(){return this._ensureScreenLocation(),this._screenLocation}_ensureScreenLocation(){if(!this._screenLocationDirty)return;let e;if(this._screenLocation.pixelSize=this._camera.computeScreenPixelSizeAt(this.renderLocation),this._screenLocationDirty=!1,D(this._modelTransform)){const t=this._calculateModelTransformOffset($);e=(0,_.g)(t,t,this.renderLocation)}else e=this.renderLocation;this._camera.projectToRenderScreen(e,this._screenLocation.renderScreenPointArray),this._camera.renderToScreen(this._screenLocation.renderScreenPointArray,this._screenLocation.screenPointArray)}get applyObjectTransform(){return this._applyObjectTransform}set applyObjectTransform(e){this._applyObjectTransform=e,this._screenLocationDirty=!0,this._updateEngineObject()}get attached(){return this._attached}intersectionDistance(e,t){if(!this.available)return null;const i=(0,c.WA)(e,I),s=this._getCollisionRadius(t),r=-1*this.collisionPriority;switch(this.collisionType.type){case"point":if((0,p.hG)(this.screenLocation.screenPointArray,i)<s*s)return this.screenLocation.renderScreenPointArray[2]+r;break;case"line":{const e=this.collisionType.paths,t=this._getWorldToScreenObjectScale(),n=this._calculateObjectTransform(t,H),a=s*this.screenLocation.pixelSize,o=(0,M.Z4)(this._camera,i,W);if(null==o)return null;for(const i of e){if(0===i.length)continue;const e=(0,_.h)(q,i[0],n);for(let t=1;t<i.length;t++){const s=(0,_.h)(B,i[t],n),l=(0,S.dz)((0,S.Cr)(e,s,N),o);if(null!=l&&l<a*a){const t=(0,_.g)(A.rq.get(),e,s);(0,_.j)(t,t,.5);const i=(0,c.rX)(A.rq.get());return this._camera.projectToRenderScreen(t,i),i[2]+r}(0,_.c)(e,s)}}break}case"disc":{const e=this.collisionType.direction,t=this.collisionType.offset??g.uY,n=this._getWorldToScreenObjectScale(),a=this._calculateObjectTransform(n,H),o=s*this.screenLocation.pixelSize,c=(0,M.Z4)(this._camera,i,W);if(null==c)return null;const h=(0,l.z0)(k,a),d=(0,_.t)(U,e,h),u=(0,_.h)(X,t,a);(0,E.O_)(u,d,Z);const p=G;if((0,E.Ui)(Z,c,p)&&(0,_.a)(p,u)<o*o)return this.screenLocation.renderScreenPointArray[2]+r;break}case"ribbon":{const{paths:e,direction:t}=this.collisionType,n=this._getWorldToScreenObjectScale(),a=this._calculateObjectTransform(n,H),o=s*this._camera.computeScreenPixelSizeAt(this.renderLocation),h=(0,M.Z4)(this._camera,i,W);if(null==h)return null;const d=(0,l.z0)(k,a),u=(0,_.t)(U,t,d),p=this._calculateModelTransformPosition(X);(0,E.O_)(p,u,Z);const g=G;if(!(0,E.Ui)(Z,h,g))break;for(const i of e){if(0===i.length)continue;const e=(0,_.h)(q,i[0],a);for(let t=1;t<i.length;t++){const n=(0,_.h)(B,i[t],a),s=(0,S.kb)((0,S.Cr)(e,n,N),g);if(null!=s&&s<o*o){const t=(0,_.g)(A.rq.get(),e,n);(0,_.j)(t,t,.5);const i=(0,c.rX)(A.rq.get());return this._camera.projectToRenderScreen(t,i),i[2]+r}(0,_.c)(e,n)}}break}default:(0,n.Xb)(this.collisionType)}return null}attach(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{manipulator3D:{}};const t=this._stage;if(!t)return;const i=e.manipulator3D;null==i.engineLayerId?(this._engineLayer=new P.x(t,{pickable:!1,updatePolicy:z.q.SYNC}),i.engineLayerId=this._engineLayer.id):t?.getObject&&(this._engineLayer=t.getObject(i.engineLayerId)),i.engineLayerReferences=(i.engineLayerReferences||0)+1,this._materialIdReferences=i.materialIdReferences,null==this._materialIdReferences&&(this._materialIdReferences=new Map,i.materialIdReferences=this._materialIdReferences),this._camera.copyFrom(this.view.state.camera),this._attached=!0,this._updateEngineObject(),(0,f.canProjectWithoutEngine)(this._location.spatialReference,this.view.spatialReference)||(this.location=new C.A({x:0,y:0,z:0,spatialReference:this.view.spatialReference}))}detach(){const e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{manipulator3D:{}}).manipulator3D;e.engineLayerReferences--;const t=0===e.engineLayerReferences;this._removeResourcesFromStage(),t&&(e.engineLayerId=null,(0,o.pR)(this._engineLayer)),this._engineResources=null,this._engineLayer=null,this._materialIdReferences=null,this._attached=!1}onViewChange(){this._camera.copyFrom(this.view.state.camera),this._screenLocationDirty=!0,this._updateEngineObject()}onElevationChange(e){(0,f.projectPoint)(this.location,Y,e.spatialReference)&&(0,y.vR)(e.extent,Y)&&this._notifyLocationChanged()}_evaluateElevationAlignment(){if(null==this.elevationInfo)return;let e=null,t=0;const i=(0,R.Ze)(this.elevationInfo,this.location.spatialReference??this.view.elevationProvider.spatialReference);switch(this.elevationInfo.mode){case"on-the-ground":e=(0,O.R1)(this.view.elevationProvider,this.location,"ground")??0;break;case"relative-to-ground":t=((0,O.R1)(this.view.elevationProvider,this.location,"ground")??0)+i;break;case"relative-to-scene":t=((0,O.R1)(this.view.elevationProvider,this.location,"scene")??0)+i;break;case"absolute-height":t=i}return t!==this._elevation.offset||e!==this._elevation.override?(this._elevation.offset=t,void(this._elevation.override=e)):void 0}_updateEngineObject(){if(!this._attached)return;if(!this.available)return void this._removeResourcesFromStage();const e=this._getWorldToScreenObjectScale(),t=H;if(!0===this.autoScaleRenderObjects){const i=this._getFocusedSize(this._radius,this.focused)*e;this._calculateObjectTransform(i,t)}else this._calculateObjectTransform(e,t);const{objectsByState:i}=this._ensureEngineResources(),n=(this.focused?x.p7.Focused:x.p7.Unfocused)|(this.selected?x.p7.Selected:x.p7.Unselected),s=this._noDisplayCount>0;for(const{stateMask:r,objects:a}of i){if(s){for(const e of a)e.visible=!1;continue}const e=(r&x.p7.All)!==x.p7.None,i=(r&x.SJ.All)!==x.SJ.None,o=!e||(n&r)==(r&x.p7.All),c=!i||(this.state&r)==(r&x.SJ.All);if(o&&c)for(const n of a)n.visible=!0,n.transformation=t;else for(const t of a)t.visible=!1}}_ensureEngineResources(){if(null==this._engineResources){const e=this._engineLayer,t=[],i=new Set;this.renderObjects.forEach((e=>{let{geometry:{material:n}}=e;i.has(n)||(t.push(n),i.add(n))}));const n=new Map;this._renderObjects.forEach((e=>{const t=new j.B({castShadow:!1,geometries:[e.geometry]}),i=n.get(e.stateMask)||[];i.push(t),n.set(e.stateMask,i)}));const s=[];n.forEach(((e,t)=>s.push({stateMask:t,objects:e}))),this._engineResources={objectsByState:s,layer:e,materials:t}}return this._addResourcesToStage(),this._engineResources}_addResourcesToStage(){const e=this._stage;if(this._engineResourcesAddedToStage||null==this._engineResources||!e)return;const{objectsByState:t,layer:i,materials:n}=this._engineResources;n.forEach((t=>{const i=this._materialIdReferences,n=i.get(t.id)||0;0===n&&e.add(t),i.set(t.id,n+1)})),t.forEach((t=>{let{objects:n}=t;i.addMany(n),e.addMany(n)})),this._engineResourcesAddedToStage=!0}_removeResourcesFromStage(){const e=this._stage;if(!this._engineResourcesAddedToStage||null==this._engineResources||!e)return;const{objectsByState:t,layer:i,materials:n}=this._engineResources;t.forEach((t=>{let{objects:n}=t;i.removeMany(n),e.removeMany(n)})),n.forEach((t=>{const i=this._materialIdReferences,n=i.get(t.id);1===n?(e.remove(t),i.delete(t.id)):i.set(t.id,n-1)})),this._engineResourcesAddedToStage=!1}_getCollisionRadius(e){return this._getFocusedSize(this.radius,!0)*("touch"===e?this.touchMultiplier:1)}_getFocusedSize(e,t){return e*(t?this.focusMultiplier:1)}_getWorldToScreenObjectScale(){return this._worldSized?1:this.screenLocation.pixelSize}_calculateModelTransformPosition(e){const t=this._getWorldToScreenObjectScale(),i=this._calculateObjectTransform(t,V);return(0,_.s)(e,i[12],i[13],i[14])}_calculateModelTransformOffset(e){const t=this._calculateModelTransformPosition(e);return(0,_.f)(e,t,this.renderLocation)}_calculateObjectTransform(e,t){return(0,d.hZ)(t,e,0,0,0,0,e,0,0,0,0,e,0,0,0,0,1),this._worldFrame&&(0,d.lw)(t,t,this._worldFrame),(0,d.lw)(t,t,this._modelTransform),t[12]+=this.renderLocation[0],t[13]+=this.renderLocation[1],t[14]+=this.renderLocation[2],t[15]=1,null!=this._applyObjectTransform&&this._applyObjectTransform(t),t}get test(){}}function D(e){return 0!==e[12]||0!==e[13]||0!==e[14]}const I=(0,c.gs)(),N=(0,S.vt)(),W=(0,w.vt)(),k=(0,h.vt)(),V=(0,u.vt)(),H=(0,u.vt)(),Z=(0,E.vt)(),q=(0,g.vt)(),B=(0,g.vt)(),G=(0,g.vt)(),U=(0,g.vt)(),X=(0,g.vt)(),$=(0,g.vt)(),Y=new C.A({x:0,y:0,z:0,spatialReference:null}),K=()=>{}},91175:(e,t,i)=>{i.d(t,{M:()=>s});var n=i(76336);class s{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.p7.None;this.geometry=e,this.stateMask=t}}},35946:(e,t,i)=>{function n(e){return e?.operations?.data.geometry}i.d(t,{U:()=>n})},38317:(e,t,i)=>{i.d(t,{FY:()=>m,MO:()=>f,QI:()=>g,UM:()=>_,Yi:()=>S,Yk:()=>y,eO:()=>v,wQ:()=>b});var n=i(59784),s=i(34761),r=i(20664),a=i(75762),o=i(32535),c=i(35946),l=i(36423),h=i(83490),d=i(45463),u=i(76956),p=i(84294);function _(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.m$.OccludeAndTransparent,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const s=(0,n.pf)(e),r=!(e[3]<1);return i?new p.A({color:s,writeDepth:r,cullFace:h.s2.Back,renderOccluded:t,isDecoration:!0}):new u.v({color:s,writeDepth:r,cullFace:h.s2.Back,renderOccluded:t,isDecoration:!0})}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.m$.OccludeAndTransparent;const i=(0,n.pf)(e);return new u.v({color:i,writeDepth:!0,cullFace:h.s2.Front,renderOccluded:t,isDecoration:!0})}const v=Object.freeze({calloutLength:40,calloutWidth:1,discRadius:27,focusMultiplier:1.1}),f=Object.freeze({autoScaleRenderObjects:!1,worldSized:!0});function m(e,t,i,n){const o=(0,r.f)(a.rq.get(),e,i),c=b(o,(0,r.b)(a.rq.get(),n,o),i,a.Rc.get());(0,s.B8)(c,c);const l=(0,r.h)(a.rq.get(),t,c);return Math.atan2(l[1],l[0])}function b(e,t,i,n){const s=(0,r.n)(a.rq.get(),e),o=(0,r.n)(a.rq.get(),t),c=(0,r.b)(a.rq.get(),s,o);return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=0,n[4]=o[0],n[5]=o[1],n[6]=o[2],n[7]=0,n[8]=c[0],n[9]=c[1],n[10]=c[2],n[11]=0,n[12]=i[0],n[13]=i[1],n[14]=i[2],n[15]=1,n}function y(e,t){const i=e.getViewForGraphic(t);return null!=i&&"computeAttachmentOrigin"in i?i.computeAttachmentOrigin(t,e.spatialReference):null}function S(e,t){const i=t.origin;null==i?function(e,t){if(null==t)return;const i="mesh"===t.type?t.anchor:(0,l.W$)(t);null!=i&&(e.location=(0,o.wZ)(i))}(e,(0,c.U)(t)):e.elevationAlignedLocation=i}},32314:(e,t,i)=>{i.d(t,{X:()=>l});var n=i(34761),s=i(13191),r=i(69230),a=i(37046),o=i(44513),c=i(8918);class l extends r.B{constructor(e){super(e),this._resources=null,this._transform=(0,s.vt)()}get object(){return null!=this._resources?this._resources.object:null}get transform(){return this._transform}set transform(e){(0,n.C)(this._transform,e),null!=this._resources&&(this._resources.object.transformation=this._transform)}recreate(){this.attached&&this.createResources()}recreateGeometry(){if(null==this._resources)return;const e=this._resources.object,t=this.view._stage;t.removeMany(e.geometries),e.removeAllGeometries(),this.createGeometries(e),e.visible=this.visible,t.addMany(e.geometries)}createResources(){this.destroyResources();const e=this.view._stage;if(!e)return;const t=new c.x(e,{pickable:!1,updatePolicy:o.q.SYNC}),i=new a.B({castShadow:!1});i.transformation=this._transform,this.createExternalResources(),this.createGeometries(i),e.addMany(i.geometries),this.forEachExternalMaterial((t=>e.add(t))),e.add(i),t.add(i),i.visible=this.visible,this._resources={layer:t,object:i}}destroyResources(){const e=this.view._stage;null!=this._resources&&e&&(e.remove(this._resources.object),this._resources.layer.destroy(),this.forEachExternalMaterial((t=>{e.remove(t)})),e.removeMany(this._resources.object.geometries),this._resources.object.dispose(),this.destroyExternalResources(),this._resources=null)}updateVisibility(e){null!=this._resources&&(this._resources.object.visible=e)}}},69230:(e,t,i)=>{i.d(t,{B:()=>s});i(81806);var n=i(68134);class s{get isDecoration(){return this._isDecoration}set isDecoration(e){this._isDecoration=e}constructor(e){this._isDecoration=!1,this._attached=!1,this._resourcesCreated=!1,this._visible=!0,this.view=e.view,this._handle=(0,n.wB)((()=>e.view.ready),(e=>{this._resourcesCreated&&(e?this._createResources():this._destroyResources())}))}applyProperties(e){let t=!1;for(const i in e)i in this&&("attached"===i?t=e[i]:this[i]=e[i]);this.attached=t}destroy(){this.attached=!1,this._handle.remove()}get attached(){return this._attached}set attached(e){e!==this._attached&&this.view._stage&&(this._attached=e,this._attached&&!this._resourcesCreated?this._createResources():!this._attached&&this._resourcesCreated&&this._destroyResources(),this.onAttachedChange(e))}onAttachedChange(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.attached&&this.updateVisibility(e))}_createResources(){this.createResources(),this._resourcesCreated=!0,this.updateVisibility(this.visible)}_destroyResources(){this.destroyResources(),this._resourcesCreated=!1}}},18261:(e,t,i)=>{i.d(t,{L:()=>a});var n=i(3799),s=i(21390),r=i(64839);function a(e,t){if(!t.screenSizeEnabled)return;const i=e.vertex;(0,n.yu)(i,t),i.uniforms.add(new s.m("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio)),new s.m("screenSizeScale",(e=>e.screenSizeScale))),i.code.add(r.H`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`)}},84294:(e,t,i)=>{i.d(t,{A:()=>P});var n=i(20664),s=i(9392),r=i(55855),a=i(42294),o=i(88105),c=i(48549),l=i(34981),h=i(83490),d=i(59696),u=i(45463),p=i(48168),_=i(77730),g=i(86994),v=i(66470),f=i(52757),m=i(35143),b=i(16506),y=i(42693),S=i(99415),E=i(60322),w=i(28584),A=i(10773),T=i(92656),R=i(7200),O=i(93345),M=i(57162);class L extends y.w{initializeProgram(e){return new w.B(e.rctx,L.shader.get().build(this.configuration),z)}_setPipelineState(e){const t=this.configuration,i=e===A.y.NONE,n=e===A.y.FrontFace;return(0,M.Ey)({blending:t.output===l.V.Color&&t.transparent?i?E.V0:(0,E.ez)(e):null,culling:(0,M.Xt)(t.cullFace),depthTest:{func:n?O.MT.LESS:t.shadingEnabled?O.MT.LEQUAL:O.MT.LESS},depthWrite:i?t.writeDepth?M.kn:null:(0,E.XO)(e),drawBuffers:(0,E.cl)(e),colorWrite:M.wE,polygonOffset:i||n?null:E.SE})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}L.shader=new b.$(R.S,(()=>i.e(9086).then(i.bind(i,19086))));class j extends T.E{constructor(){super(...arguments),this.output=l.V.Color,this.cullFace=h.s2.None,this.transparencyPassType=A.y.NONE,this.hasSlicePlane=!1,this.transparent=!1,this.writeDepth=!0,this.screenSizeEnabled=!0,this.shadingEnabled=!0,this.multipassEnabled=!1,this.cullAboveGround=!1}}(0,m._)([(0,S.W)({count:l.V.COUNT})],j.prototype,"output",void 0),(0,m._)([(0,S.W)({count:h.s2.COUNT})],j.prototype,"cullFace",void 0),(0,m._)([(0,S.W)({count:A.y.COUNT})],j.prototype,"transparencyPassType",void 0),(0,m._)([(0,S.W)()],j.prototype,"hasSlicePlane",void 0),(0,m._)([(0,S.W)()],j.prototype,"transparent",void 0),(0,m._)([(0,S.W)()],j.prototype,"writeDepth",void 0),(0,m._)([(0,S.W)()],j.prototype,"screenSizeEnabled",void 0),(0,m._)([(0,S.W)()],j.prototype,"shadingEnabled",void 0),(0,m._)([(0,S.W)()],j.prototype,"multipassEnabled",void 0),(0,m._)([(0,S.W)()],j.prototype,"cullAboveGround",void 0),(0,m._)([(0,S.W)({constValue:!1})],j.prototype,"occlusionPass",void 0);const z=new Map([[v.r.POSITION,0],[v.r.NORMAL,1],[v.r.OFFSET,2]]);class P extends u.im{constructor(e){super(e,new C),this.supportsEdges=!0,this.produces=new Map([[_.N.OPAQUE_MATERIAL,e=>e===l.V.Highlight||(0,l.zW)(e)&&!this._isTransparent],[_.N.TRANSPARENT_MATERIAL,e=>(0,l.zW)(e)&&this._isTransparent&&this.parameters.writeDepth],[_.N.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>(0,l.zW)(e)&&this._isTransparent&&!this.parameters.writeDepth]]),this._configuration=new j,this._vertexAttributeLocations=z}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this._isTransparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.screenSizeEnabled=this.parameters.screenSizeEnabled,this._configuration.shadingEnabled=this.parameters.shadingEnabled,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}intersect(e,t,i,s,r,o){if(this.parameters.screenSizeEnabled){const t=e.attributes.get(v.r.OFFSET),c={applyToVertex:(e,s,r,a)=>{const o=(0,n.s)(D,t.data[3*a],t.data[3*a+1],t.data[3*a+2]),c=(0,n.s)(I,e,s,r);return(0,n.j)(o,o,this.parameters.screenSizeScale*i.camera.computeScreenPixelSizeAt(o)),(0,n.g)(c,c,o),[c[0],c[1],c[2]]},applyToAabb:e=>{const t=(0,a.gX)(e,D);return(0,a.hs)(e,this.parameters.screenSizeScale*i.camera.computeScreenPixelSizeAt(t))}};(0,p.Uy)(e,i,s,r,c,o)}else(0,p.Uy)(e,i,s,r,void 0,o)}createGLMaterial(e){return new x(e)}createBufferWriter(){return new F(this.parameters.screenSizeEnabled)}get _isTransparent(){return this.parameters.color[3]<1||this.parameters.forceTransparentMode}}class x extends d.A{beginSlot(e){return this.ensureTechnique(L,e)}}class C extends u.qA{constructor(){super(...arguments),this.color=(0,r.fA)(1,1,1,1),this.shadingTint=(0,r.fA)(0,0,0,.25),this.shadingDirection=(0,n.n)((0,s.vt)(),[.5,-.5,-.5]),this.screenSizeScale=14,this.forceTransparentMode=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=h.s2.None,this.screenSizeEnabled=!1,this.shadingEnabled=!0}}class F{constructor(e){this.screenSizeEnabled=e;const t=(0,c.BP)().vec3f(v.r.POSITION).vec3f(v.r.NORMAL);this.screenSizeEnabled&&t.vec3f(v.r.OFFSET),this.vertexBufferLayout=t}elementCount(e){return e.attributes.get(v.r.POSITION).indices.length}write(e,t,i,n,s){if((0,f.SA)(i,this.vertexBufferLayout,e,t,n,s),this.screenSizeEnabled){if(!i.attributes.has(v.r.OFFSET))throw new Error(`${v.r.OFFSET} vertex attribute required for screenSizeEnabled ShadedColorMaterial`);{const e=i.attributes.get(v.r.OFFSET);(0,g.vA)(3===e.size);const r=n.getField(v.r.OFFSET,o.xs);if(!r)throw new Error("unable to acquire view for "+v.r.OFFSET);(0,f.Hk)(e,t,r,s)}}}}const D=(0,s.vt)(),I=(0,s.vt)()},56829:(e,t,i)=>{i.d(t,{g:()=>h});var n=i(35143),s=i(91967),r=(i(81806),i(76460),i(50346)),a=i(46053),o=(i(47249),i(85842)),c=i(76336),l=i(38386);let h=class extends s.A{constructor(e){super(e),this.manipulators=new l.t,this.automaticManipulatorSelection=!0,this.hasGrabbedManipulators=!1,this.hasHoveredManipulators=!1,this.firstGrabbedManipulator=null,this.created=!1,this.removeIncompleteOnCancel=!0,this._editableFlags=new Map([[c.PK.MANAGER,!0],[c.PK.USER,!0]]),this._creationFinishedResolver=(0,r.Tw)()}get active(){return null!=this.view&&this.view.activeTool===this}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this._syncVisible())}get editable(){return this.getEditableFlag(c.PK.USER)}set editable(e){this.setEditableFlag(c.PK.USER,e)}get updating(){return!1}get cursor(){return null}get hasFocusedManipulators(){return this.hasGrabbedManipulators||this.hasHoveredManipulators}destroy(){this.manipulators.destroy(),this._set("view",null)}onAdd(){this._syncVisible()}activate(){null!=this.view&&(this.view.focus(),this.onActivate())}deactivate(){this.onDeactivate()}handleInputEvent(e){this.onInputEvent(e)}handleInputEventAfter(e){this.onInputEventAfter(e)}setEditableFlag(e,t){this._editableFlags.set(e,t),this.manipulators.isToolEditable=this.internallyEditable,this._updateManipulatorAttachment(),e===c.PK.USER&&this.notifyChange("editable"),this.onEditableChange(),this.onManipulatorSelectionChanged()}getEditableFlag(e){return this._editableFlags.get(e)??!1}whenCreated(){return this._creationFinishedResolver.promise}onManipulatorSelectionChanged(){}onActivate(){}onDeactivate(){}onShow(){}onHide(){}onEditableChange(){}onInputEvent(e){}onInputEventAfter(e){}get internallyEditable(){return this.getEditableFlag(c.PK.USER)&&this.getEditableFlag(c.PK.MANAGER)}finishToolCreation(){this.created||this._creationFinishedResolver.resolve(this),this._set("created",!0)}_syncVisible(){if(this.initialized)if(this.visible)this._show();else if(this._hide(),this.active)return void(this.view.activeTool=null)}_show(){this._updateManipulatorAttachment(),this.onShow()}_hide(){this._updateManipulatorAttachment(),this.onHide()}_updateManipulatorAttachment(){this.visible?this.manipulators.attach():this.manipulators.detach()}};(0,n._)([(0,a.MZ)({constructOnly:!0})],h.prototype,"view",void 0),(0,n._)([(0,a.MZ)({readOnly:!0})],h.prototype,"active",null),(0,n._)([(0,a.MZ)({value:!0})],h.prototype,"visible",null),(0,n._)([(0,a.MZ)({value:!0})],h.prototype,"editable",null),(0,n._)([(0,a.MZ)({readOnly:!0})],h.prototype,"manipulators",void 0),(0,n._)([(0,a.MZ)({readOnly:!0})],h.prototype,"updating",null),(0,n._)([(0,a.MZ)()],h.prototype,"cursor",null),(0,n._)([(0,a.MZ)({readOnly:!0})],h.prototype,"automaticManipulatorSelection",void 0),(0,n._)([(0,a.MZ)()],h.prototype,"hasFocusedManipulators",null),(0,n._)([(0,a.MZ)()],h.prototype,"hasGrabbedManipulators",void 0),(0,n._)([(0,a.MZ)()],h.prototype,"hasHoveredManipulators",void 0),(0,n._)([(0,a.MZ)()],h.prototype,"firstGrabbedManipulator",void 0),(0,n._)([(0,a.MZ)({readOnly:!0})],h.prototype,"created",void 0),(0,n._)([(0,a.MZ)({readOnly:!0})],h.prototype,"removeIncompleteOnCancel",void 0),h=(0,n._)([(0,o.$)("esri.views.interactive.InteractiveToolBase")],h)},38386:(e,t,i)=>{i.d(t,{t:()=>a});var n,s,r=i(19276);(s=n||(n={}))[s.WhenToolEditable=0]="WhenToolEditable",s[s.WhenToolNotEditable=1]="WhenToolNotEditable",s[s.Always=2]="Always";class a{constructor(){this._isToolEditable=!0,this._manipulators=new r.A,this._resourceContexts={manipulator3D:{}},this._attached=!1}set isToolEditable(e){this._isToolEditable=e}get length(){return this._manipulators.length}add(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.WhenToolEditable;this.addMany([e],t)}addMany(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.WhenToolEditable;for(const i of e){const e={manipulator:i,visibilityPredicate:t,attached:!1};this._manipulators.add(e),this._attached&&this._updateManipulatorAttachment(e)}}remove(e){for(let t=0;t<this._manipulators.length;t++)if(this._manipulators.at(t).manipulator===e){const e=this._manipulators.splice(t,1)[0];this._detachManipulator(e);break}}removeAll(){this._manipulators.forEach((e=>{this._detachManipulator(e)})),this._manipulators.removeAll()}attach(){this._manipulators.forEach((e=>{this._updateManipulatorAttachment(e)})),this._attached=!0}detach(){this._manipulators.forEach((e=>{this._detachManipulator(e)})),this._attached=!1}destroy(){this.detach(),this._manipulators.forEach((e=>{let{manipulator:t}=e;return t.destroy()})),this._manipulators.destroy(),this._resourceContexts=null}on(e,t){return this._manipulators.on(e,(e=>{t(e)}))}forEach(e){for(const t of this._manipulators.items)e(t)}some(e){return this._manipulators.items.some(e)}toArray(){const e=[];return this.forEach((t=>e.push(t.manipulator))),e}intersect(e,t){let i=null,n=Number.MAX_VALUE;return this._manipulators.forEach((s=>{let{manipulator:r,attached:a}=s;if(!a||!r.interactive)return;const o=r.intersectionDistance(e,t);null!=o&&o<n&&(n=o,i=r)})),i}_updateManipulatorAttachment(e){this._isManipulatorItemVisible(e)?this._attachManipulator(e):this._detachManipulator(e)}_attachManipulator(e){e.attached||(e.manipulator.attach&&e.manipulator.attach(this._resourceContexts),e.attached=!0)}_detachManipulator(e){if(!e.attached)return;const t=e.manipulator;t.grabbing=!1,t.dragging=!1,t.hovering=!1,t.selected=!1,t.detach&&t.detach(this._resourceContexts),e.attached=!1}_isManipulatorItemVisible(e){return e.visibilityPredicate===n.Always||(this._isToolEditable?e.visibilityPredicate===n.WhenToolEditable:e.visibilityPredicate===n.WhenToolNotEditable)}}},17046:(e,t,i)=>{i.d(t,{EX:()=>E,RS:()=>L,Tp:()=>A,VG:()=>b,Wp:()=>_,Xt:()=>u,an:()=>p,bl:()=>m,dp:()=>y,mc:()=>S,pg:()=>O,rh:()=>R,sO:()=>w,y$:()=>f});var n=i(18690),s=(i(81806),i(53084)),r=i(15941),a=i(76931),o=i(9624),c=i(99773),l=i(32535),h=i(12482),d=i(59833);function u(e,t){return e.events.on("drag",function(e,t){let i=null,n=null;return s=>{if("cancel"===s.action)return void(null!=n&&(n.execute({action:"cancel"}),i=null,n=null));const r={action:s.action,screenStart:s.start,screenEnd:s.screenPoint};"start"===s.action&&null==i&&(i=new R,n=new R,t(e,i,n,s.pointerType,r)),null!=i&&i.execute(r),"end"===s.action&&null!=i&&(i=null,n=null)}}(e,t))}function p(e,t){const i=[e.x,e.y,e.z??0],n=t,s=[Math.cos(n),Math.sin(n)],r=Math.sqrt(s[0]*s[0]+s[1]*s[1]);if(0===r)return null;s[0]/=r,s[1]/=r;const a=e=>{const t=(e.x-i[0])*s[0]+(e.y-i[1])*s[1];e.x=i[0]+t*s[0],e.y=i[1]+t*s[1]};return e=>(a(e.mapStart),a(e.mapEnd),{...e,axis:s})}function _(e){let t=null;return i=>{if("start"===i.action&&(t=function(e,t){const i=e.operations;if(!i)return null;const n=i.data.geometry,s=(0,l.RS)(t);if(n.spatialReference.equals(s))return v(e,i,(()=>{}));if("mesh"!==n.type){const t=g(n,s);if(null==t)return null;const r=n.spatialReference;return v(e,d.p.fromGeometry(t,i.viewingMode),(()=>{const e=(0,o.project)(n,r);i.trySetGeometry(e)}))}if((0,c.CK)(n)){const t=g(n.origin,s);if(!t)return null;const r=n.spatialReference,a=d.p.fromGeometry(t,i.viewingMode);return v(e,i,(()=>{const e=(0,o.project)(a.data.geometry,r),t=e.x-n.origin.x,s=e.y-n.origin.y,c=(e.z??0)-(n.origin.z??0);i.move(t,s,c)}))}return null}(e,i.mapStart.spatialReference)),null==t)return null;const n=i.mapEnd.x-i.mapStart.x,s=i.mapEnd.y-i.mapStart.y,r=(i.mapEnd.z??0)-(i.mapStart.z??0);return t.move(n,s,r,i.action),{...i,translationX:n,translationY:s,translationZ:r}}}function g(e,t){return null==e?null:e.spatialReference.equals(t)?e.clone():(0,o.project)(e,t)}function v(e,t,i){let n=0,s=0,r=0;return{move:(a,o,c,l)=>{"start"===l&&(n=0,s=0,r=0);const h=a-n,d=o-s,u=c-r;t.move(h,d,u),n+=h,s+=d,r+=u,i(),"end"===l&&e.endInteraction?.()}}}function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2?arguments[2]:void 0,n=null;const s=null==t||e.spatialReference?.equals(t)?e=>e:e=>null!=e?(0,o.project)(e,t):e,r={exclude:[],...i};return t=>{if("start"===t.action&&(n=s(e.toMap(t.screenStart,r))),null==n)return null;const i=s(e.toMap(t.screenEnd,r));return null!=i?{...t,mapStart:n,mapEnd:i}:null}}function m(e){const t=e.map((e=>_(e))).filter(n.Ru);return e=>{const i=e.mapEnd.x-e.mapStart.x,n=e.mapEnd.y-e.mapStart.y,s=e.mapEnd.z-e.mapStart.z;return t.forEach((t=>t(e))),{...e,translationX:i,translationY:n,translationZ:s}}}function b(e,t){const i=new Map;for(const n of t)i.set(n,(0,s.o8)(e[n]));return t=>(i.forEach(((t,i)=>{e[i]=t})),t)}function y(e){const t=e.operations?.createResetState();return e=>(t?.remove(),e)}function S(e){const t=e.map((e=>y(e))).filter((e=>null!=e));return e=>(t.forEach((t=>t(e))),e)}function E(){let e=0,t=0,i=0;return n=>{"start"===n.action&&(e=n.mapStart.x,t=n.mapStart.y,i=n.mapStart.z);const s=n.mapEnd.x-e,r=n.mapEnd.y-t,a=n.mapEnd.z-i;return e=n.mapEnd.x,t=n.mapEnd.y,i=n.mapEnd.z,{...n,mapDeltaX:s,mapDeltaY:r,mapDeltaZ:a,mapDeltaSpatialReference:n.mapStart.spatialReference}}}function w(){let e=0,t=0;return i=>{"start"===i.action&&(e=i.screenStart.x,t=i.screenStart.y);const n=i.screenEnd.x-e,s=i.screenEnd.y-t;return e=i.screenEnd.x,t=i.screenEnd.y,{...i,screenDeltaX:n,screenDeltaY:s}}}function A(e,t){let i=null,n=0,s=0;return o=>{if("start"===o.action&&(i=e.toScreen?.(t),null!=i&&(i.x<0||i.x>e.width||i.y<0||i.y>e.height?i=null:(n=o.screenStart.x-i.x,s=o.screenStart.y-i.y))),null==i)return null;const c=(0,r.qE)(o.screenEnd.x-n,0,e.width),l=(0,r.qE)(o.screenEnd.y-s,0,e.height),h=(0,a.tc)(c,l);return o.screenStart=i,o.screenEnd=h,o}}const T=()=>{};class R{constructor(){this.execute=T}next(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new R;return null!=e&&(this.execute=i=>{const n=e(i);null!=n&&t.execute(n)}),t}}function O(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if("2d"===e.type)return e=>e;let n=null;return s=>{"start"===s.action&&(n=e.toMap(s.screenStart,{exclude:i}),null!=n&&(n.z=(0,h.id)(n,e,t)));const r=e.toMap(s.screenEnd,{exclude:i});null!=r&&(r.z=(0,h.id)(r,e,t));const a=null!=n&&null!=r?{sceneStart:n,sceneEnd:r}:null;return{...s,scenePoints:a}}}function M(e,t,i){const n=t.elevationProvider.getElevation(e.x,e.y,e.z??0,e.spatialReference,"scene")??0,s=(0,l.EL)(e);return s.z=n,s.hasZ=!0,s.z=(0,h.id)(s,t,i),s}function L(e,t){if("2d"===e.type)return e=>e;let i=null;return n=>{"start"===n.action&&(i=M(n.mapStart,e,t));const s=M(n.mapEnd,e,t),r=null!=i&&null!=s?{sceneStart:i,sceneEnd:s}:null;return{...n,scenePoints:r}}}}}]);
//# sourceMappingURL=3359.0e2e6c99.chunk.js.map