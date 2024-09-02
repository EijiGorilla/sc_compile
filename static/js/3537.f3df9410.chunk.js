"use strict";(self.webpackChunksc_compile=self.webpackChunksc_compile||[]).push([[3537],{12016:(e,t,r)=>{r.d(t,{B:()=>d});var s=r(18690),i=r(54901),n=r(76460),a=r(50346),o=r(16783);class d{constructor(e,t,r,s){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};this._mainMethod=t,this._transferLists=r,this._listeners=[],this._promise=(0,o.ho)(e,{...i,schedule:s}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,i.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>n.A.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${t}`)))}on(e,t){const r={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(r),this._connectListener(r),(0,i.hA)((()=>{r.removed=!0,(0,s.TF)(this._listeners,r),this._thread&&null!=r.threadHandle&&r.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,r){if(this._thread){const s=this._transferLists[e],i=s?s(t):[];return this._thread.invoke(e,t,{transferList:i,signal:r})}return this._promise?this._promise.then((()=>((0,a.Te)(r),this.invokeMethod(e,t,r)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}},12580:(e,t,r)=>{r.d(t,{L:()=>i,s:()=>n});var s=r(48549);function i(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:new s.l5(e.layout)}}function n(e){return new s.q3(e.layout).createView(e.buffer)}},74527:(e,t,r)=>{r.d(t,{U:()=>o});var s=r(78393),i=r(12016),n=r(12580),a=r(8775);class o extends i.B{constructor(e){super("EdgeProcessingWorker","extract",{extract:e=>[e.dataBuffer],extractComponentsEdgeLocations:e=>[e.dataBuffer],extractEdgeLocations:e=>[e.dataBuffer]},e)}async process(e,t,r){return r?(0,a.o6)(e):function(e){return{regular:{instancesData:(0,n.s)(e.regular.instancesData),lodInfo:{lengths:new Float32Array(e.regular.lodInfo.lengths)}},silhouette:{instancesData:(0,n.s)(e.silhouette.instancesData),lodInfo:{lengths:new Float32Array(e.silhouette.lodInfo.lengths)}},averageEdgeLength:e.averageEdgeLength}}(await this.invoke(new d(e),t))}async extractEdgeLocations(e,t){const r=await this.invokeMethod("extractEdgeLocations",new d(e),t);return(0,n.s)(r)}async extractComponentsEdgeLocations(e,t){const r=await this.invokeMethod("extractComponentsEdgeLocations",new d(e),t);return(0,n.s)(r)}}class d{constructor(e){this.dataBuffer=e.data.buffer,this.writerSettings=e.writerSettings,this.skipDeduplicate=e.skipDeduplicate,this.indices=(0,s.cy)(e.indices)?e.indices:e.indices.buffer,this.indicesType=(0,s.cy)(e.indices)?"Array":(0,s.XJ)(e.indices)?"Uint32Array":"Uint16Array",this.indicesLength=e.indicesLength}}},72317:(e,t,r)=>{r.d(t,{C:()=>a});var s=r(75543),i=r(61751),n=r(23241);class a extends i.w{constructor(e){super({...e,constraint:new s.i7(e.targetPoint)})}get hints(){return[new n._(this.targetPoint,this.isDraped,this.domain)]}}},13537:(e,t,r)=>{r.r(t),r.d(t,{SceneLayerSnappingSource:()=>b});var s=r(35143),i=r(91967),n=r(18690),a=r(50346),o=r(46053),d=(r(81806),r(76460),r(85842)),c=r(54901),h=r(30726),l=(r(47249),r(19451)),u=r(74527),p=r(9392),_=r(12016),g=r(93582),y=r(23862),f=r(9876),w=r(72317);let v=class extends i.A{constructor(e){super(e),this.availability=0,this._ids=new Set}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new m(this.schedule,{fetchAllEdgeLocations:(e,t)=>this._fetchAllEdgeLocations(e,t)})}async fetchCandidates(e,t){const r=e.coordinateHelper,{point:s}=e,i=S;this.renderCoordsHelper.toRenderCoords(s,r.spatialReference,i);const n=e.distance,a="number"==typeof n?n:n.distance,o=await this._workerHandle.invoke({bounds:(0,g.f)(i[0],i[1],i[2],a),returnEdge:e.returnEdge,returnVertex:"none"!==e.vertexMode},t);return o.candidates.sort(((e,t)=>e.distance-t.distance)),o.candidates.map((e=>this._convertCandidate(r,e)))}async add(e,t){this._ids.add(e.id),await this._workerHandle.invokeMethod("add",e,t)}async remove(e,t){this._ids.delete(e.id),await this._workerHandle.invokeMethod("remove",e,t)}_convertCandidate(e,t){switch(t.type){case"edge":return new f.z({objectId:t.objectId,targetPoint:(0,y.de)(this._convertRenderCoordinate(e,t.target)),edgeStart:this._convertRenderCoordinate(e,t.start),edgeEnd:this._convertRenderCoordinate(e,t.end),isDraped:!1});case"vertex":return new w.C({objectId:t.objectId,targetPoint:(0,y.de)(this._convertRenderCoordinate(e,t.target)),isDraped:!1})}}_convertRenderCoordinate(e,t){let{spatialReference:r}=e;const s=(0,p.vt)();return this.renderCoordsHelper.fromRenderCoords(t,s,r),(0,y._7)(s)}async _fetchAllEdgeLocations(e,t){const r=[],s=[];for(const{id:i,uid:n}of e.components)this._ids.has(i)&&r.push((async()=>{const e=await this.fetchEdgeLocations(i,t.signal),r=e.locations.buffer;return s.push(r),{id:i,uid:n,objectIds:e.objectIds,locations:r,origin:e.origin,type:e.type}})());return{result:{components:(await Promise.all(r)).filter((e=>{let{id:t}=e;return this._ids.has(t)}))},transferList:s}}};(0,s._)([(0,o.MZ)({constructOnly:!0})],v.prototype,"renderCoordsHelper",void 0),(0,s._)([(0,o.MZ)({constructOnly:!0})],v.prototype,"fetchEdgeLocations",void 0),(0,s._)([(0,o.MZ)({constructOnly:!0})],v.prototype,"schedule",void 0),(0,s._)([(0,o.MZ)({readOnly:!0})],v.prototype,"availability",void 0),v=(0,s._)([(0,d.$)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorkerHandle")],v);class m extends _.B{constructor(e,t){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:t})}}const S=(0,p.vt)();let k=class extends i.A{get updating(){return this._updatingHandles.updating}constructor(e){super(e),this.availability=1,this._updatingHandles=new l.U,this._abortController=new AbortController}destroy(){this._tracker=(0,h.xt)(this._tracker),this._abortController=(0,h.DC)(this._abortController),this._updatingHandles.destroy()}initialize(){const{view:e}=this,t=e.resourceController;this._edgeWorker=new u.U(L(t)),this._workerHandle=new v({renderCoordsHelper:this.view.renderCoordsHelper,schedule:L(t),fetchEdgeLocations:async(e,t)=>{if(null==this._tracker)throw new Error("tracker-not-initialized");return this._tracker.fetchEdgeLocations(e,this._edgeWorker,t)}}),this._updatingHandles.addPromise(this._setupLayerView()),this.addHandles([(0,c.DQ)(this._workerHandle),(0,c.DQ)(this._edgeWorker)])}async fetchCandidates(e,t){return this._workerHandle.fetchCandidates(e,t)}refresh(){}async _setupLayerView(){if(this.destroyed)return;const e=this._abortController?.signal,t=await this.getLayerView();null==t||(0,a.G4)(e)||(this._tracker=t.trackSnappingSources({add:(t,r)=>{this._updatingHandles.addPromise(this._workerHandle.add({id:t,bounds:r},e))},remove:t=>{this._updatingHandles.addPromise(this._workerHandle.remove({id:t},e))}}))}};function L(e){return t=>e.immediate.schedule(t)}(0,s._)([(0,o.MZ)({constructOnly:!0})],k.prototype,"getLayerView",void 0),(0,s._)([(0,o.MZ)({constructOnly:!0})],k.prototype,"view",void 0),(0,s._)([(0,o.MZ)({readOnly:!0})],k.prototype,"updating",null),(0,s._)([(0,o.MZ)({readOnly:!0})],k.prototype,"availability",void 0),k=(0,s._)([(0,d.$)("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],k);let b=class extends i.A{get updating(){return this._i3sSources.some((e=>e.updating))}constructor(e){super(e),this.availability=1,this._i3sSources=[]}destroy(){this._i3sSources.forEach((e=>e.destroy())),this._i3sSources.length=0}initialize(){const{view:e}=this,t=this.layerSource.layer;this._i3sSources="building-scene"===t.type?this._getBuildingSceneI3SSources(e,t):[this._getSceneLayerI3SSource(e,t)]}async fetchCandidates(e,t){const r=await Promise.all(this._i3sSources.map((r=>r.fetchCandidates(e,t))));return(0,a.Te)(t),r.flat()}refresh(){this._i3sSources.forEach((e=>e.refresh()))}_getBuildingSceneI3SSources(e,t){return t.allSublayers.toArray().map((r=>"building-component"===r.type?new k({getLayerView:async()=>(await e.whenLayerView(t)).whenSublayerView(r),view:e}):null)).filter(n.Ru)}_getSceneLayerI3SSource(e,t){return new k({getLayerView:async()=>{const r=await e.whenLayerView(t);return"scene-layer-graphics-3d"===r.type?void 0:r},view:e})}};(0,s._)([(0,o.MZ)({constructOnly:!0})],b.prototype,"layerSource",void 0),(0,s._)([(0,o.MZ)({constructOnly:!0})],b.prototype,"view",void 0),(0,s._)([(0,o.MZ)({readOnly:!0})],b.prototype,"updating",null),(0,s._)([(0,o.MZ)({readOnly:!0})],b.prototype,"availability",void 0),b=(0,s._)([(0,d.$)("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],b)},23241:(e,t,r)=>{r.d(t,{_:()=>n});var s=r(20664),i=r(64753);class n extends i.m{constructor(e,t,r){super(t,r),this.point=e}equals(e){return e instanceof n&&(0,s.e)(this.point,e.point)}}}}]);
//# sourceMappingURL=3537.f3df9410.chunk.js.map