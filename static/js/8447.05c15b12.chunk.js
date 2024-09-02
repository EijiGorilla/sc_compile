"use strict";(self.webpackChunksc_compile=self.webpackChunksc_compile||[]).push([[8447],{60767:(t,e,n)=>{n.d(e,{A:()=>r});var i=n(99486),s=n(99702);class r{constructor(t){this._observable=new s.I,this._set=new Set(t)}get size(){return(0,i.gc)(this._observable),this._set.size}add(t){const e=this._set.size;return this._set.add(t),this._set.size!==e&&this._observable.notify(),this}clear(){this._set.size>0&&(this._set.clear(),this._observable.notify())}delete(t){const e=this._set.delete(t);return e&&this._observable.notify(),e}entries(){return(0,i.gc)(this._observable),this._set.entries()}forEach(t,e){(0,i.gc)(this._observable),this._set.forEach(((n,i)=>t.call(e,n,i,this)),e)}has(t){return(0,i.gc)(this._observable),this._set.has(t)}keys(){return(0,i.gc)(this._observable),this._set.keys()}values(){return(0,i.gc)(this._observable),this._set.values()}[Symbol.iterator](){return(0,i.gc)(this._observable),this._set[Symbol.iterator]()}get[Symbol.toStringTag](){return this._set[Symbol.toStringTag]}}},63733:(t,e,n)=>{n.d(e,{A:()=>d});var i=n(35143),s=n(46053),r=(n(81806),n(76460),n(47249),n(85842)),o=n(5364),a=n(25515),l=n(65624),c=n(5682),h=n(64519),p=n(731);let u=class extends((0,l.dM)((0,c.j)(a.A))){constructor(t){super(t),this.elevationInfo=null,this.graphics=new h.Y,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(t){return this.graphics.add(t),this}addMany(t){return this.graphics.addMany(t),this}removeAll(){return this.graphics.removeAll(),this}remove(t){this.graphics.remove(t)}removeMany(t){this.graphics.removeMany(t)}on(t,e){return super.on(t,e)}graphicChanged(t){this.emit("graphic-update",t)}};(0,i._)([(0,s.MZ)({type:p.A})],u.prototype,"elevationInfo",void 0),(0,i._)([(0,s.MZ)((0,o.C)(h.Y,"graphics"))],u.prototype,"graphics",void 0),(0,i._)([(0,s.MZ)({type:["show","hide"]})],u.prototype,"listMode",void 0),(0,i._)([(0,s.MZ)()],u.prototype,"screenSizePerspectiveEnabled",void 0),(0,i._)([(0,s.MZ)({readOnly:!0})],u.prototype,"type",void 0),(0,i._)([(0,s.MZ)({constructOnly:!0})],u.prototype,"internal",void 0),u=(0,i._)([(0,r.$)("esri.layers.GraphicsLayer")],u);const d=u},4955:(t,e,n)=>{function i(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function s(t,e){return"number"==typeof t?t:t?.stops?.length?function(t){let e=0,n=0;for(let i=0;i<t.length;i++){const s=t[i].size;"number"==typeof s&&(e+=s,n++)}return e/n}(t.stops):e}function r(t,e){if(!e)return t;const n=e.filter((t=>"size"===t.type)).map((e=>{const{maxSize:n,minSize:i}=e;return(s(n,t)+s(i,t))/2}));let i=0;const r=n.length;if(0===r)return t;for(let s=0;s<r;s++)i+=n[s];const o=Math.floor(i/r);return Math.max(o,t)}function o(t){const e=t?.renderer,n=t?.pointerType,s="touch"===n?9:6;if(!e)return s;const o="visualVariables"in e?r(s,e.visualVariables):s;if("simple"===e.type)return i(o,e.symbol);if("unique-value"===e.type){let t=o;return e.uniqueValueInfos?.forEach((e=>{t=i(t,e.symbol)})),t}if("class-breaks"===e.type){let t=o;return e.classBreakInfos.forEach((e=>{t=i(t,e.symbol)})),t}return"dot-density"===e.type||e.type,o}n.d(e,{o:()=>o})},35384:(t,e,n)=>{n.d(e,{O0:()=>H});var i=n(35143),s=n(91967),r=n(54099),o=n(53084),a=n(30726),l=n(56002),c=n(50346),h=n(60767),p=n(68134),u=n(76931),d=n(46053),g=(n(81806),n(76460),n(85842)),m=n(15011),y=n(19451),_=n(74e3),v=n(12482),f=n(64465),b=n(56061);class x{constructor(t){let{consumesClicks:e,grabbableForEvent:n}=t;this.events=new r.A,this.interactive=!0,this.selectable=!1,this.cursor=null,this.grabbable=!0,this.consumesClicks=e,this.grabbableForEvent=n}destroy(){}intersectionDistance(t,e){return 0}attach(){}detach(){}onElevationChange(){}onViewChange(){}}var S=n(89238),w=n(17046),M=n(974),C=n(59833),T=n(75543),P=n(48851),Z=n(95327),R=n(13284),V=n(61237),I=n(14318),O=n(9730);const D=Symbol(),A=Symbol();let H=class extends(r.A.EventedMixin(s.A)){constructor(t){super(t),this._createOperationCompleted=!1,this._hideDefaultCursor=!1,this._pointerDownStates=new h.A,this._stagedScreenPoint=null,this._stagedPointerType=null,this._updatingHandles=new y.U,this._stagedPointerId=null,this.constraintsEnabled=!1,this.constraints=void 0,this._getPointConstraint=(0,l.B)(P.cx),this._getPolylineOrPolygonConstraint=(0,l.B)(P.lJ),this.constraintZ=null,this.defaultZ=null,this.isDraped=!0,this.labelOptions=new Z.A,this.cursor=null,this.loading=!1,this.snapToSceneEnabled=null,this.firstVertex=null,this.lastVertex=null,this.secondToLastVertex=null,null==t.elevationInfo&&(this.elevationInfo=(0,v.bK)(!!t.hasZ))}initialize(){const{geometryType:t,view:e}=this,n=e.spatialReference,i="viewingMode"in e.state?e.state.viewingMode:f.RT.Local,s="segment"===t||"multipoint"===t?"polyline":t;this.coordinateHelper=(0,S.BV)(this.hasZ,this.hasM,n),this._editGeometryOperations=new C.p(new M.ZE(s,this.coordinateHelper),i),this._snappingOperation=new I.O({view:e}),this.addHandles([(0,p.wB)((()=>({stagedPoint:this._snappingOperation.stagedPoint,constraint:this._constraint})),((t,e)=>{let{stagedPoint:n,constraint:i}=t;const{snappingOptions:s}=this;if(s&&(s.forceDisabled=null!=i&&(0,T.fT)(i)),null!=e&&n===e.stagedPoint&&i!==e.constraint)return this._onKeyboardBasedChange();this._processCursor(n??this._screenToMap(this._stagedScreenPoint))}),{equals:(t,e)=>t.stagedPoint===e.stagedPoint&&(0,a.CM)(t.constraint,e.constraint)}),(0,p.wB)((()=>this.view.viewpoint),((t,e)=>{t&&e&&(0,m.Ui)(t,e)&&this._onKeyboardBasedChange()}))]),this._activeComponent=new M.uA(n,i),this._editGeometryOperations.data.components.push(this._activeComponent);const r=this.segmentLabels;null!=r&&(r.context={view:e,editGeometryOperations:this._editGeometryOperations,elevationInfo:this.elevationInfo,labelOptions:this.labelOptions},this.addHandles((0,p.wB)((()=>this.labelOptions.enabled),(t=>{r.visible=t}),p.pc))),this.addHandles(this._editGeometryOperations.on(["vertex-add","vertex-update","vertex-remove"],(t=>{const e=t.vertices.map((t=>({componentIndex:0,vertexIndex:t.index,coordinates:this.coordinateHelper.vectorToArray(t.pos)}))),n=e.map((t=>t.coordinates)),i=this.coordinateHelper.vectorToDehydratedPoint(this._activeComponent.getFirstVertex()?.pos)??null;(0,_.CI)(i,this.firstVertex)||(this.firstVertex=i);const s=this.coordinateHelper.vectorToDehydratedPoint(this._activeComponent.getLastVertex()?.pos)??null;(0,_.CI)(s,this.lastVertex)||(this.lastVertex=s);const r=this.coordinateHelper.vectorToDehydratedPoint(this._activeComponent.edges.at(-1)?.leftVertex?.pos)??null;switch((0,_.CI)(r,this.secondToLastVertex)||(this.secondToLastVertex=r),this._processCursor(this.cursorVertex),t.type){case"vertex-add":this.emit(t.type,{...t,added:n,vertices:e});break;case"vertex-update":this.emit(t.type,{...t,updated:n,vertices:e});break;case"vertex-remove":this.emit(t.type,{...t,removed:n,vertices:e})}})));const o=this._manipulator=new x({consumesClicks:!1,grabbableForEvent:t=>"click"!==this.drawingMode||"touch"===t.pointerType&&this._snappingEnabled&&1===this._pointerDownStates.size});this.manipulators.add(o),o.grabbable="point"!==t,this.addHandles([o.events.on("immediate-click",(t=>this._onImmediateClick(t))),o.events.on("immediate-double-click",(t=>this._onImmediateDoubleClick(t))),(0,p.wB)((()=>this.drawingMode),(()=>{this.removeHandles(D),this.addHandles(this._createManipulatorDragPipeline(o),D)}),p.pc),(0,p.wB)((()=>({effectiveCursor:this.effectiveCursor})),(t=>{let{effectiveCursor:e}=t;o.cursor=e}),p.pc)]),(0,O.BY)(this,(()=>{const t=this.view.inputManager.latestPointerType??"mouse",e=this._getSnappingContext(t);if(null!=this.snappingManager){const t=this._snappingOperation.snapAgainNearPreviousMapPoint(this.snappingManager,e);this._updatingHandles.addPromise((0,c.QZ)(t))}}))}destroy(){(0,a.pR)(this.segmentLabels),(0,a.pR)(this._snappingOperation),this._editGeometryOperations=(0,a.pR)(this._editGeometryOperations),this._updatingHandles.destroy()}get _isDragging(){const{_stagedPointerId:t,_manipulator:e}=this;return null!=t&&this._pointerDownStates.has(t)||e.grabbing||!e.interactive}get _snappingEnabled(){return null!=this.snappingManager&&this.snappingManager.options.effectiveEnabled}get _requiresScenePoint(){const t=this._updateAndGetEffectiveDrawSurface();return"3d"===this.view.type&&this.drawSurface!==t}get canRedo(){return this._editGeometryOperations.canRedo}get canUndo(){return this._editGeometryOperations.canUndo}get committedVertices(){return this._activeComponent.vertices.map((t=>this.coordinateHelper.vectorToArray(t.pos)))}get _constraint(){const{constraints:t,constraintsEnabled:e}=this;if(t&&e)switch(this.geometryType){case"point":return this._getPointConstraint(t);case"polygon":case"polyline":return this._getPolylineOrPolygonConstraint(this.lastVertex,this.secondToLastVertex,t)}}set drawingMode(t){this._set("drawingMode",t??b.t)}get effectiveCursor(){return this.loading?"progress":this._hideDefaultCursor?null:this.cursor||"crosshair"}get interactive(){return this._manipulator.interactive}set interactive(t){this._manipulator.interactive=t}get isCompleted(){return this._createOperationCompleted}get numCommittedVertices(){return this._activeComponent.vertices.length}get snappingOptions(){return null!=this.snappingManager?this.snappingManager.options:null}get cursorVertex(){return this._get("cursorVertex")}get visualizationCursorVertex(){return"mouse"===this._stagedPointerType?this.cursorVertex:null}get committableVertex(){const{cursorVertex:t,lastVertex:e,firstVertex:n,geometryType:i}=this;return"polygon"===i&&(0,_.fk)(t,n)||(0,_.fk)(t,e)?null:t}get updating(){return this._updatingHandles.updating}get geometryIncludingUncommittedVertices(){const{committedVertices:t,committableVertex:e,coordinateHelper:n}=this,i=t.slice();return null!=e&&i.push(n.pointToArray(e)),i}cancel(){this.complete({aborted:!0})}commitStagedVertex(){this._snappingOperation.abort();const{committableVertex:t}=this;null!=t&&this._editGeometryOperations.appendVertex(this.coordinateHelper.pointToVector(t))}complete(t){const e=t?.aborted||!1;this._snappingOperation.abort(),this.snappingManager?.doneSnapping();const{geometryType:n,numCommittedVertices:i}=this,s="multipoint"===n&&0===i||"polyline"===n&&i<2||"polygon"===n&&i<3;"segment"!==n&&"point"!==n||this.commitStagedVertex(),this._createOperationCompleted=!s,(this.isCompleted||e)&&(this._stagedScreenPoint=null,this._stagedPointerId=null,this._stagedPointerType=null,this._processCursor(null),this.emit("complete",{vertices:this.committedVertices.map(((t,e)=>({componentIndex:0,vertexIndex:e,coordinates:t}))),aborted:e,type:"complete"}))}onInputEvent(t){switch(t.type){case"pointer-down":this._pointerDownStates.add(t.pointerId);break;case"pointer-up":this._pointerDownStates.delete(t.pointerId)}switch(t.type){case"pointer-move":return this._onPointerMove(t);case"hold":return this._onHold(t)}}redo(){this._editGeometryOperations.redo()}undo(){null!=this.snappingManager&&this.snappingManager.doneSnapping(),this._editGeometryOperations.undo()}_processCursor(t){const e=(0,o.o8)(this.cursorVertex),n=(0,o.o8)(t),i=n&&(this._updateAndGetEffectiveDrawSurface()?.constrainZ(n)??n),s=this._snapToClosingVertex(i),r=this._applyConstraints(s);(0,_.fk)(e,r)||(this._set("cursorVertex",r),this.segmentLabels?.set("stagedVertex",null!=r?this.coordinateHelper.pointToVector(r):null),null==r||"mouse"!==this._stagedPointerType?this.emit("cursor-remove"):this.emit("cursor-update",{updated:null,vertices:[{componentIndex:0,vertexIndex:this._activeComponent.vertices.length,coordinates:this.coordinateHelper.pointToArray(r)}],operation:"apply",type:"vertex-update"}))}_snapToClosingVertex(t){if(null==t||this._isDragging||"polygon"!==this.geometryType||this.numCommittedVertices<=2)return t;const e=this._mapToScreen(t);if(!e)return t;const n=this._activeComponent;return this._vertexWithinPointerDistance(n.vertices[0].pos,e)?this.firstVertex:this._vertexWithinPointerDistance(n.vertices.at(-1).pos,e)?this.lastVertex:t}_createManipulatorDragPipeline(t){switch(this.drawingMode){case"click":return this._createManipulatorDragPipelineClick(t);case"freehand":return this._createManipulatorDragPipelineFreehand(t);case"hybrid":return this._createManipulatorDragPipelineHybrid(t)}}_createManipulatorDragPipelineClick(t){return(0,w.Xt)(t,((t,e,n,i)=>{const s="touch"===i&&this._snappingEnabled;if(this.isCompleted||!s)return;const{snappingStep:r,cancelSnapping:o}=(0,V.L)({predicate:()=>s,snappingManager:this.snappingManager,snappingContext:new R.e({editGeometryOperations:this._editGeometryOperations,elevationInfo:this.elevationInfo,feature:this.graphic,pointer:i,visualizer:this.snappingVisualizer,drawConstraints:this.constraints}),updatingHandles:this._updatingHandles,useZ:!this._requiresScenePoint});n=n.next((t=>(s&&null!=this.snappingManager&&this.snappingManager.doneSnapping(),t))).next(o),e.next(this._screenToMapDragEventStep()).next((t=>("start"===t.action&&(this._processCursor(t.mapStart),("segment"===this.geometryType||s&&!this.numCommittedVertices)&&this.commitStagedVertex()),t))).next((0,w.pg)(this.view,this.elevationInfo)).next(...r).next((t=>(s&&(this._processCursor(t.mapEnd),"end"===t.action&&this.commitStagedVertex()),t))).next((t=>("end"===t.action&&("mouse"!==this._stagedPointerType&&this._snappingOperation.abort(),"segment"!==this.geometryType&&"point"!==this.geometryType||this.complete()),t)))}))}_createManipulatorDragPipelineFreehand(t){return(0,w.Xt)(t,((t,e)=>{this.isCompleted||e.next(this._screenToMapDragEventStep()).next((t=>("start"===t.action&&(this._snappingOperation.abort(),null==this.committableVertex&&this._processCursor(t.mapStart),"segment"===this.geometryType&&this.commitStagedVertex()),t))).next((t=>{switch(t.action){case"start":case"update":this._processCursor(t.mapEnd),"polygon"!==this.geometryType&&"polyline"!==this.geometryType||this.commitStagedVertex();break;case"end":this.complete()}return t}))}))}_createManipulatorDragPipelineHybrid(t){return(0,w.Xt)(t,((t,e)=>{this.isCompleted||e.next(this._screenToMapDragEventStep()).next((t=>("start"===t.action&&(this._snappingOperation.abort(),this.addHandles(this._editGeometryOperations.createUndoGroup(),A),this._processCursor(t.mapStart),this.commitStagedVertex()),t))).next((t=>{switch(t.action){case"start":case"update":this._processCursor(t.mapEnd),"polygon"!==this.geometryType&&"polyline"!==this.geometryType||this.commitStagedVertex();break;case"end":"mouse"!==this._stagedPointerType&&this._snappingOperation.abort(),this.removeHandles(A),"segment"!==this.geometryType&&"point"!==this.geometryType||this.complete()}return t}))}))}get _drawAtFixedElevation(){const{constraintsEnabled:t,constraintZ:e,geometryType:n,numCommittedVertices:i}=this;return t?null!=e||"segment"===n&&i>0:("segment"===n||"polygon"===n)&&i>0}_updateAndGetEffectiveDrawSurface(){const{constraintsEnabled:t,coordinateHelper:e,drawSurface:n,elevationDrawSurface:i,snapToSceneEnabled:s}=this;if(null==i)return n;if(!this.hasZ)return i.defaultZ=null,i;const r=this.elevationInfo?.mode;let o=this.defaultZ,a=t||"absolute-height"===r;return null!=s&&(a=s),"on-the-ground"===r&&(a=!1),this._drawAtFixedElevation&&(o=(t?this.constraintZ:null)??e.getZ(this._activeComponent.vertices[0].pos),a=!1),a?n:(i.defaultZ=o,i)}_mapToScreen(t){return this._updateAndGetEffectiveDrawSurface()?.mapToScreen(t)}_onHold(t){this._snappingOperation.abort(),"click"===this.drawingMode&&"touch"===t.pointerType&&this._snappingEnabled&&this._processCursor(t.mapPoint),t.stopPropagation()}_onImmediateClick(t){if(!("mouse"===t.pointerType&&2===t.button||this._manipulator.dragging))try{const{drawingMode:e,geometryType:n}=this;this._stagedPointerType=t.pointerType,this._stagedScreenPoint=t.screenPoint;const i=this._screenToMap(t.screenPoint);if(null==i)return;if(null==i||"freehand"===e&&"point"!==n)return;if(this._snappingEnabled&&null!=this.cursorVertex||this._processCursor(i),null==this.committableVertex)return void this.complete();this.commitStagedVertex(),"mouse"!==t.pointerType&&this._processCursor(null),("freehand"===e||"point"===n||"segment"===n&&2===this.numCommittedVertices||"segment"===n&&"hybrid"===e&&1===this.numCommittedVertices)&&this.complete()}finally{t.stopPropagation()}}_onImmediateDoubleClick(t){this._manipulator.dragging||"point"===this.geometryType||(this.complete(),t.stopPropagation())}_onPointerMove(t){const e=(0,u.tc)(t.x,t.y);this._stagedScreenPoint=e,this._stagedPointerType=t.pointerType,this._stagedPointerId=t.pointerId,this._isDragging?this._snappingOperation.abort():(t.stopPropagation(),this._processCursorMovementRelativeToSurface(e,t.pointerType))}_onKeyboardBasedChange(){"mouse"===this._stagedPointerType&&this._stagedScreenPoint&&null!=this._stagedPointerId&&!this._isDragging?this._processCursorMovementRelativeToSurface(this._stagedScreenPoint,this._stagedPointerType):this._snappingOperation.abort()}_processCursorMovementRelativeToSurface(t,e){const n=this._snappingOperation,i=this._screenToMap(t),s=this._requiresScenePoint?this.drawSurface?.screenToMap(t):null;if(null==i)return this._hideDefaultCursor=!0,this._processCursor(null),void n.abort();this._hideDefaultCursor=!1;const r=this.snappingManager;if(null==r)return this._processCursor(i),void n.abort();const o=this._getSnappingContext(e);this._updatingHandles.addPromise((0,c.QZ)(n.snap({point:i,scenePoint:s},r,o)))}_applyConstraints(t){const{_constraint:e,constraints:n}=this;if(!t||!n||!e)return t;const{context:i}=n,s=(0,P.dz)(t,i),r=s?e.closestTo(s):void 0;if(!r)return t;const o=(0,P.tC)(r,t,i),a="2d"===this.view.type||"absolute-height"!==i.elevationInfo.mode;return null!=o&&a&&null!=this.constraintZ&&this.hasZ&&(o.z=this.constraintZ),o}_screenToMap(t){return t?this._updateAndGetEffectiveDrawSurface()?.screenToMap(t):null}_screenToMapDragEventStep(){let t=null;return e=>{if("start"===e.action&&(t=this._screenToMap(e.screenStart)),null==t)return null;const n=this._screenToMap(e.screenEnd);return null!=n?{...e,mapStart:t,mapEnd:n}:null}}_vertexWithinPointerDistance(t,e){const n=this._mapToScreen(this.coordinateHelper.vectorToDehydratedPoint(t));return null!=n&&function(t,e,n){const i=t.x-e.x,s=t.y-e.y;return i*i+s*s<=n}(n,e,25)}_getSnappingContext(t){const e=this._drawAtFixedElevation?this.elevationDrawSurface?.defaultZ:null;return new R.e({editGeometryOperations:this._editGeometryOperations,elevationInfo:this.elevationInfo,pointer:t,feature:this.graphic,visualizer:this.snappingVisualizer,selfSnappingZ:null!=e?{value:e,elevationInfo:this.elevationInfo}:null,drawConstraints:this.constraints})}};(0,i._)([(0,d.MZ)()],H.prototype,"_hideDefaultCursor",void 0),(0,i._)([(0,d.MZ)()],H.prototype,"_stagedPointerId",void 0),(0,i._)([(0,d.MZ)()],H.prototype,"_isDragging",null),(0,i._)([(0,d.MZ)()],H.prototype,"_snappingOperation",void 0),(0,i._)([(0,d.MZ)()],H.prototype,"_snappingEnabled",null),(0,i._)([(0,d.MZ)({constructOnly:!0})],H.prototype,"graphic",void 0),(0,i._)([(0,d.MZ)()],H.prototype,"constraintsEnabled",void 0),(0,i._)([(0,d.MZ)()],H.prototype,"constraints",void 0),(0,i._)([(0,d.MZ)()],H.prototype,"_constraint",null),(0,i._)([(0,d.MZ)()],H.prototype,"constraintZ",void 0),(0,i._)([(0,d.MZ)()],H.prototype,"defaultZ",void 0),(0,i._)([(0,d.MZ)()],H.prototype,"isDraped",void 0),(0,i._)([(0,d.MZ)({value:b.t})],H.prototype,"drawingMode",null),(0,i._)([(0,d.MZ)({constructOnly:!0})],H.prototype,"elevationDrawSurface",void 0),(0,i._)([(0,d.MZ)({constructOnly:!0})],H.prototype,"elevationInfo",void 0),(0,i._)([(0,d.MZ)({constructOnly:!0,type:Z.A})],H.prototype,"labelOptions",void 0),(0,i._)([(0,d.MZ)({constructOnly:!0})],H.prototype,"geometryType",void 0),(0,i._)([(0,d.MZ)({constructOnly:!0})],H.prototype,"hasM",void 0),(0,i._)([(0,d.MZ)({constructOnly:!0})],H.prototype,"hasZ",void 0),(0,i._)([(0,d.MZ)()],H.prototype,"cursor",void 0),(0,i._)([(0,d.MZ)()],H.prototype,"effectiveCursor",null),(0,i._)([(0,d.MZ)()],H.prototype,"loading",void 0),(0,i._)([(0,d.MZ)({constructOnly:!0})],H.prototype,"manipulators",void 0),(0,i._)([(0,d.MZ)({constructOnly:!0})],H.prototype,"drawSurface",void 0),(0,i._)([(0,d.MZ)({constructOnly:!0})],H.prototype,"segmentLabels",void 0),(0,i._)([(0,d.MZ)({constructOnly:!0})],H.prototype,"snappingManager",void 0),(0,i._)([(0,d.MZ)({constructOnly:!0})],H.prototype,"snappingVisualizer",void 0),(0,i._)([(0,d.MZ)()],H.prototype,"snapToSceneEnabled",void 0),(0,i._)([(0,d.MZ)({readOnly:!0})],H.prototype,"cursorVertex",null),(0,i._)([(0,d.MZ)({readOnly:!0})],H.prototype,"visualizationCursorVertex",null),(0,i._)([(0,d.MZ)()],H.prototype,"committableVertex",null),(0,i._)([(0,d.MZ)()],H.prototype,"firstVertex",void 0),(0,i._)([(0,d.MZ)()],H.prototype,"lastVertex",void 0),(0,i._)([(0,d.MZ)()],H.prototype,"secondToLastVertex",void 0),(0,i._)([(0,d.MZ)()],H.prototype,"updating",null),(0,i._)([(0,d.MZ)({constructOnly:!0})],H.prototype,"view",void 0),H=(0,i._)([(0,g.$)("esri.views.draw.DrawOperation")],H)},56061:(t,e,n)=>{n.d(e,{t:()=>s,x:()=>i});const i=["freehand","hybrid","click"],s="click"},66812:(t,e,n)=>{n.d(e,{IX:()=>h,rT:()=>c});n(35238);var i=n(76931),s=n(18117),r=n(32535),o=n(12482),a=n(13312),l=n(19247);class c{constructor(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;this._elevationInfo=t,this.defaultZ=e,this._view=n,this._excludeGraphics=i}screenToMap(t){const{defaultZ:e,_view:n}=this,s=n.sceneIntersectionHelper.intersectElevationFromScreen((0,i.gs)(t.x,t.y),this._elevationInfo,e??0,this._excludeGraphics);return null==e&&null!=s&&(s.z=void 0),s}mapToScreen(t){const e=(0,s.T)(t.x,t.y,(0,o.wS)(this._view,t,this._elevationInfo),t.spatialReference);return this._view.toScreen(e)}constrainZ(t){const{defaultZ:e}=this;return null!=e&&t.z!==e&&((t=(0,r.EL)(t)).z=e),t}}class h{constructor(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];this.view=t,this.elevationInfo=e,this.exclude=n}screenToMap(t){const e=this.view.toMap(t,{exclude:this.exclude,excludeHud:!0});return null!=e&&(e.z=(0,o.id)(e,this.view,this.elevationInfo)),e}mapToScreen(t){let e=t;return null!=this.elevationInfo&&(e=(0,s.T)(t.x,t.y,(0,o.wS)(this.view,t,this.elevationInfo),t.spatialReference)),this.view.toScreen(e)}constrainZ(t){return t}}class p{screenToMap(t){const{x:e,y:n}=t;return new l.A({x:e,y:n,spatialReference:p.spatialReference})}mapToScreen(t){return(0,i.tc)(t.x,t.y)}constrainZ(t){return t}}p.spatialReference=new a.A},42151:(t,e,n)=>{n.d(e,{E5:()=>d,ZP:()=>_});n(35238);var i=n(18690),s=n(94967),r=n(99809),o=n(60008),a=n(4336),l=n(20664),c=n(9392),h=n(5568),p=n(19247);function u(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return null!=n?[t,e,n]:[t,e]}function d(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return null!=n?{x:t,y:e,z:n}:{x:t,y:e}}class g{constructor(t){this.spatialReference=t}mapToLocalMultiple(t){return t.map((t=>this.mapToLocal(t))).filter(i.Ru)}get doUnnormalization(){return!1}}class m extends g{constructor(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;super(e),this._defaultZ=n,this.transform=(0,r.vt)(),this.transformInv=(0,r.vt)(),this.transform=(0,r.o8)(t),(0,s.B8)(this.transformInv,this.transform)}makeMapPoint(t,e){return u(t,e,this._defaultZ)}mapToLocal(t){return d(this.transform[0]*t[0]+this.transform[2]*t[1]+this.transform[4],this.transform[1]*t[0]+this.transform[3]*t[1]+this.transform[5])}localToMap(t){return u(this.transformInv[0]*t.x+this.transformInv[2]*t.y+this.transformInv[4],this.transformInv[1]*t.x+this.transformInv[3]*t.y+this.transformInv[5],this._defaultZ)}}class y extends g{constructor(t,e){super(t.spatialReference),this.view=t,this.defaultZ=null,this.pWS=(0,c.vt)(),this.tangentFrameUpWS=(0,c.vt)(),this.tangentFrameRightWS=(0,c.vt)(),this.tangentFrameForwardWS=(0,c.vt)(),this.localFrameRightWS=(0,c.vt)(),this.localFrameUpWS=(0,c.vt)(),this.worldToLocalTransform=(0,a.vt)(),this.localToWorldTransform=(0,a.vt)(),this.scale=1,this.scale=t.resolution,this.referenceMapPoint=e,this.defaultZ=e.hasZ?e.z:null;const n=t.state.camera.viewRight;this.view.renderCoordsHelper.toRenderCoords(this.referenceMapPoint,this.pWS),this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS,h._.X,this.tangentFrameRightWS),this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS,h._.Y,this.tangentFrameUpWS),this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS,h._.Z,this.tangentFrameForwardWS);const i=(0,c.vt)();(0,l.j)(i,this.tangentFrameForwardWS,(0,l.m)(n,this.tangentFrameForwardWS)),(0,l.f)(this.localFrameRightWS,n,i),(0,l.n)(this.localFrameRightWS,this.localFrameRightWS),(0,l.b)(this.localFrameUpWS,this.tangentFrameForwardWS,this.localFrameRightWS),(0,o.Yc)(this.worldToLocalTransform,this.localFrameRightWS,this.tangentFrameRightWS),(0,o.B8)(this.localToWorldTransform,this.worldToLocalTransform)}get doUnnormalization(){return"global"===this.view.viewingMode}makeMapPoint(t,e){return u(t,e,this.defaultZ)}mapToLocal(t){const e=(0,c.vt)();this.view.renderCoordsHelper.toRenderCoords(new p.A({x:t[0],y:t[1],spatialReference:this.spatialReference}),e),(0,l.u)(e,e,this.worldToLocalTransform);const n=this.view.renderCoordsHelper.fromRenderCoords(e,new p.A({spatialReference:this.view.spatialReference}));return null!=n?d(n.x/this.scale,n.y/this.scale):null}localToMap(t){const e=(0,c.vt)();this.view.renderCoordsHelper.toRenderCoords(new p.A({x:t.x*this.scale,y:t.y*this.scale,spatialReference:this.spatialReference}),e),(0,l.u)(e,e,this.localToWorldTransform);const n=this.view.renderCoordsHelper.fromRenderCoords(e,new p.A({spatialReference:this.view.spatialReference}));return null!=n?u(n.x,n.y,this.defaultZ):null}}function _(t,e){if("2d"===t.type)return new m(t.state.transform,t.spatialReference,e.length>2?e[2]:null);if("3d"===t.type){const n=e.length>2?new p.A({x:e[0],y:e[1],z:e[2],spatialReference:t.spatialReference}):new p.A({x:e[0],y:e[1],spatialReference:t.spatialReference});return new y(t,n)}return null}},70321:(t,e,n)=>{n.d(e,{l:()=>f});var i=n(35143),s=n(91967),r=n(54099),o=n(68134),a=n(76931),l=n(46053),c=(n(81806),n(76460),n(47249),n(85842)),h=n(19555),p=n(20664),u=n(9392),d=n(9624),g=n(64232),m=n(12482),y=n(84202),_=n(731);var v=n(55754);let f=class extends s.A{set graphic(t){this._circleCollisionCache=null,this._originalSymbol=t.symbol,this._set("graphic",t),this.attachSymbolChanged()}get elevationInfo(){const{layer:t}=this.graphic,e=t&&"elevationInfo"in t?t.elevationInfo:null,n=(0,m.ky)(this.graphic),i=e?e.offset:0;return new _.A({mode:n,offset:i})}set focusedSymbol(t){t!==this._get("focusedSymbol")&&(this._set("focusedSymbol",t),this._updateGraphicSymbol(),this._circleCollisionCache=null)}grabbableForEvent(){return!0}set grabbing(t){t!==this._get("grabbing")&&(this._set("grabbing",t),this._updateGraphicSymbol())}set hovering(t){t!==this._get("hovering")&&(this._set("hovering",t),this._updateGraphicSymbol())}set selected(t){t!==this._get("selected")&&(this._set("selected",t),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:t?"select":"deselect"}))}get _focused(){return this._get("hovering")||this._get("grabbing")}constructor(t){super(t),this.layer=null,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.dragging=!1,this.cursor=null,this.consumesClicks=!0,this.events=new r.A.EventEmitter,this._circleCollisionCache=null,this._graphicSymbolChangedHandle=null,this._originalSymbol=null}destroy(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}intersectionDistance(t){const e=this.graphic;if(!1===e.visible)return null;const n=e.geometry;if(null==n)return null;const i=this._get("focusedSymbol"),s=null!=i?i:e.symbol;return"2d"===this.view.type?this._intersectDistance2D(this.view,t,n,s):this._intersectDistance3D(this.view,t,e)}attach(){this.attachSymbolChanged(),null!=this.layer&&this.layer.add(this.graphic)}detach(){this.detachSymbolChanged(),this._resetGraphicSymbol(),null!=this.layer&&this.layer.remove(this.graphic)}attachSymbolChanged(){this.detachSymbolChanged(),this._graphicSymbolChangedHandle=(0,o.wB)((()=>this.graphic?.symbol),(t=>{null!=t&&t!==this.focusedSymbol&&t!==this._originalSymbol&&(this._originalSymbol=t,this._focused&&null!=this.focusedSymbol&&(this.graphic.symbol=this.focusedSymbol))}),o.OH)}detachSymbolChanged(){null!=this._graphicSymbolChangedHandle&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}onElevationChange(){}onViewChange(){}_updateGraphicSymbol(){this.graphic.symbol=this._focused&&null!=this.focusedSymbol?this.focusedSymbol:this._originalSymbol}_resetGraphicSymbol(){this.graphic.symbol=this._originalSymbol}_intersectDistance2D(t,e,n,i){if(null==(i=i||(0,y.SF)(n)))return null;let s=this._circleCollisionCache;if("point"===n.type&&"cim"===i.type&&"CIMPointSymbol"===i.data.symbol?.type&&i.data.symbol.symbolLayers){const{offsetX:s,offsetY:r,size:o}=function(t){let e=0,n=0,i=0;return t?("cim"===t.type&&t.data.symbol&&"symbolLayers"in t.data.symbol&&t.data.symbol.symbolLayers&&t.data.symbol.symbolLayers.map((t=>{"CIMVectorMarker"===t.type&&t.anchorPoint&&(Math.abs(t.anchorPoint.x)>e&&(e=t.anchorPoint.x),Math.abs(t.anchorPoint.y)>n&&(n=t.anchorPoint.y),null!=t.size&&t.size>i&&(i=t.size))})),e=(0,a.Lz)(e),n=(0,a.Lz)(n),i=(0,a.Lz)(i),{offsetX:e,offsetY:n,size:i}):{offsetX:e,offsetY:n,size:i}}(i),l=(0,a.WA)(e,x),c=o/2,p=t.toScreen(n),u=p.x+s,d=p.y+r;return(0,h.hG)(l,[u,d])<c*c?1:null}if("point"!==n.type||"simple-marker"!==i.type)return(0,v.t)(e,n,t)?1:null;if(null==s||!s.originalPoint.equals(n)){const e=n,r=t.spatialReference;if((0,d.canProjectWithoutEngine)(e.spatialReference,r)){const t=(0,d.project)(e,r);s={originalPoint:e.clone(),mapPoint:t,radiusPx:(0,a.Lz)(i.size)},this._circleCollisionCache=s}}if(null!=s){const n=(0,a.WA)(e,x),r=t.toScreen?.(s.mapPoint);if(!r)return null;const o=s.radiusPx,l=r.x+(0,a.Lz)(i.xoffset),c=r.y-(0,a.Lz)(i.yoffset);return(0,h.hG)(n,[l,c])<o*o?1:null}return null}_intersectDistance3D(t,e,n){const i=t.toMap(e,{include:[n]});return i&&(0,g.g)(i,b,t.renderSpatialReference)?(0,p.p)(b,t.state.camera.eye):null}};(0,i._)([(0,l.MZ)({constructOnly:!0,nonNullable:!0})],f.prototype,"graphic",null),(0,i._)([(0,l.MZ)()],f.prototype,"elevationInfo",null),(0,i._)([(0,l.MZ)({constructOnly:!0,nonNullable:!0})],f.prototype,"view",void 0),(0,i._)([(0,l.MZ)({value:null})],f.prototype,"focusedSymbol",null),(0,i._)([(0,l.MZ)({constructOnly:!0})],f.prototype,"layer",void 0),(0,i._)([(0,l.MZ)()],f.prototype,"interactive",void 0),(0,i._)([(0,l.MZ)()],f.prototype,"selectable",void 0),(0,i._)([(0,l.MZ)()],f.prototype,"grabbable",void 0),(0,i._)([(0,l.MZ)({value:!1})],f.prototype,"grabbing",null),(0,i._)([(0,l.MZ)()],f.prototype,"dragging",void 0),(0,i._)([(0,l.MZ)()],f.prototype,"hovering",null),(0,i._)([(0,l.MZ)({value:!1})],f.prototype,"selected",null),(0,i._)([(0,l.MZ)()],f.prototype,"cursor",void 0),f=(0,i._)([(0,c.$)("esri.views.interactive.GraphicManipulator")],f);const b=(0,u.vt)(),x=(0,a.gs)()},95327:(t,e,n)=>{n.d(e,{A:()=>l});var i=n(35143),s=n(91967),r=n(46053),o=(n(81806),n(76460),n(47249),n(85842));let a=class extends s.A{constructor(t){super(t),this.enabled=!1}};(0,i._)([(0,r.MZ)({type:Boolean,nonNullable:!0})],a.prototype,"enabled",void 0),a=(0,i._)([(0,o.$)("esri.views.interactive.sketch.SketchLabelOptions")],a);const l=a},48851:(t,e,n)=>{n.d(e,{cx:()=>f,dz:()=>S,hj:()=>g,lJ:()=>b,tC:()=>w});n(35238);var i=n(24648),s=n(31633),r=n(20664),o=n(14487),a=n(7137),l=n(18117),c=n(12482),h=n(75543),p=n(23862),u=n(89646),d=n(13312);function g(t,e,n,i,s,r){let l="geodesic",c=(0,a.Xn)(n);const h=(0,p.Hh)();return(0,p.vf)(t,e,i,h),h[2]=0,c&&(0,o.F)(h,n,h,c)||(l="euclidean",c=n),{mode:l,view:e,elevationInfo:i,hasZ:s,directionMode:r,spatialReference:t.spatialReference,measurementSR:c,origin:h}}function m(t,e,n){if(null==e||null==t)return;const r=(0,s._H)(n.measurementSR);if(null==r)return;const o=S(t,n);if(null==o)return;const a=(0,i.l3)(e,r);return new h.ej(o,a)}function y(t,e,n,s){if(null==n||null==t)return;const r=S(t,s);if(null==r)return;const o=(0,u.hF)(n),a=t=>{if(null==t)return;const e=(0,p.Hh)(),n=(0,i.Wq)(t,"degrees","geographic");return(0,u.rT)(e,r,s.measurementSR,10,n,s.mode)?new h.FX(r,e):void 0},l=()=>{if(null!=e&&null!=t)return(0,u.hF)((0,u.$h)(e,t))};switch(s.directionMode){case u.rZ.Absolute:return a(o);case u.rZ.Relative:{const t=l();if(null==t)return;return a(t+o)}case u.rZ.RelativeBilateral:{const t=l();if(null==t)return;return(0,h.xW)([a(t+o),a(t-o)])}}}function _(t,e){const n=function(t,e){return C(t,e)?.value??void 0}(t,e);return null!=n?new h.qR(n):void 0}function v(t,e,n){const{context:s,longitude:r,latitude:a,direction:l,distance:c,elevation:d}=n;if(null!=r||null!=a||null!=c||null!=d||null!=l){if(null!=r||null!=a){const t=(0,u.hF)(r),e=(0,u.hF)(a),n=M(d,s);return new h.QT(t,e,n)}return function(t,e,n){let{context:s,direction:r,distance:a,elevation:l}=n;if(null==e)return _(l,s);const{view:c,elevationInfo:d,measurementSR:g}=s,m=(0,p.vf)(e,c,d);if(!g||!(0,o.F)(m,e.spatialReference,T,g))return;const[y,v]=T,f=null!=a?(0,i.l3)(a,"meters"):void 0,b=(0,u.hF)(r),x=M(l,s),S=t=>{const e=new h.jf([y,v],g,f,x,t);return null==f||null==t||null==x&&s.hasZ?e:new h.i7(e.closestTo(m))};if(null==b)return S(void 0);const w=()=>{if(null!=t&&null!=e)return(0,u.hF)((0,u.$h)(t,e))};switch(s.directionMode){case u.rZ.Absolute:return S(b);case u.rZ.Relative:{const t=w();if(null==t)return;return S(t+b)}case u.rZ.RelativeBilateral:{const t=w();if(null==t)return;return(0,h.xW)([S(t+b),S(t-b)])}}}(t,e,n)}}function f(t){return"geodesic"===t.context.mode?v(null,null,t):x(t)}function b(t,e,n){const{context:i,x:s,y:r,distance:o,direction:a,elevation:l}=n;return"geodesic"===i.mode?v(e,t,n):null!=s||null!=r?x(n):function(t){let e;for(const n of t)n&&(e=e?.intersect(n)??n);return e}([m(t,o,i),y(t,e,a,i),_(l,i)])}function x(t){let{x:e,y:n,elevation:i,context:s}=t;R.x=e?.value??0,R.y=n?.value??0,R.spatialReference=s.spatialReference;const r=S(R,s,P);return new h.QT(null!=e&&null!=r?r[0]:void 0,null!=n&&null!=r?r[1]:void 0,M(i,s))}function S(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,p.Hh)();const{view:i,elevationInfo:s,measurementSR:a,origin:l,mode:c}=e;if((0,p.vf)(t,i,s,n),(0,o.F)(n,t.spatialReference,n,a))return"geodesic"!==c&&(0,r.f)(n,n,l),n}function w(t,e,n,i){const{view:s,measurementSR:a,spatialReference:l,origin:c,mode:h}=n;if("geodesic"===h?(0,r.c)(Z,t):(0,r.g)(Z,t,c),(0,o.F)(Z,a,Z,l))return(0,p.xF)(Z,s,e,n,i)}function M(t,e){const n=C(t,e);return null!=n?(0,i.l3)(n,"meters"):void 0}function C(t,e){let{view:n,origin:r,elevationInfo:o,hasZ:a,measurementSR:l}=e;if(null==t||!a)return;const h=(0,s.mq)(l);if(null==h)return;const[p,u]=r,d=(0,i.l3)(t,h),g="3d"===n?.type?(0,c.Fo)(n,p,u,d,l,o):d;return null!=g?(0,i.d_)(g,h):void 0}const T=(0,p.Hh)(),P=(0,p.Hh)(),Z=(0,p.Hh)(),R=(0,l.T)(0,0,0,d.A.WGS84)},14318:(t,e,n)=>{n.d(e,{O:()=>h});var i=n(35143),s=n(91967),r=n(30726),o=n(50346),a=n(46053),l=(n(81806),n(76460),n(47249),n(85842)),c=n(59752);let h=class extends s.A{constructor(t){super(t),this.constrainResult=t=>t,this._snapPoints=null,this._frameTask=null,this._abortController=null,this._stagedPoint=null,this._snap=(0,o.sg)((async(t,e,n,i)=>{const s=this._frameTask;if(null==s)return;const r=await s.schedule((()=>e.snap({...t,context:n,signal:i})),i);r.valid&&await s.schedule((()=>{this.stagedPoint=r.apply(),t!==this._snapPoints&&null!=this._snapPoints&&(this.stagedPoint=e.update({...this._snapPoints,context:n}))}),i)}))}get stagedPoint(){return this._stagedPoint}set stagedPoint(t){this._stagedPoint=this.constrainResult(t)}initialize(){const t="3d"===this.view.type?this.view?.resourceController?.scheduler:null;this._frameTask=null!=t?t.registerTask(c.W6.SNAPPING):c.nu}destroy(){this._abortController=(0,r.DC)(this._abortController),this._frameTask=(0,r.xt)(this._frameTask)}update(t,e,n){this._snapPoints=t;const{point:i,scenePoint:s}=t,r=e.update({point:i,scenePoint:s,context:n});return this.stagedPoint=r,r}async snap(t,e,n){const{point:i,scenePoint:s}=t;return this.stagedPoint=e.update({point:i,scenePoint:s,context:n}),this._snapPoints=t,null==this._abortController&&(this._abortController=new AbortController),this._snap(t,e,n,this._abortController.signal)}async snapAgainNearPreviousMapPoint(t,e){null!=this._snapPoints&&await this.snap(this._snapPoints,t,e)}abort(){this._abortController=(0,r.DC)(this._abortController),this._snapPoints=null}};(0,i._)([(0,a.MZ)({constructOnly:!0})],h.prototype,"view",void 0),(0,i._)([(0,a.MZ)()],h.prototype,"stagedPoint",null),(0,i._)([(0,a.MZ)()],h.prototype,"constrainResult",void 0),(0,i._)([(0,a.MZ)()],h.prototype,"_stagedPoint",void 0),h=(0,i._)([(0,l.$)("esri.views.interactive.snapping.SnappingOperation")],h)},55754:(t,e,n)=>{n.d(e,{V:()=>o,t:()=>a});n(35238);var i=n(31633),s=n(4955),r=n(76797);function o(t,e,n){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new r.A,o=0;if("2d"===n.type)o=e*(n.resolution??0);else if("3d"===n.type){const s=n.overlayPixelSizeInMapUnits(t),r=n.basemapSpatialReference;o=null==r||r.equals(n.spatialReference)?e*s:(0,i.GA)(r)/(0,i.GA)(n.spatialReference)}const a=t.x-o,l=t.y-o,c=t.x+o,h=t.y+o,{spatialReference:p}=n;return s.xmin=Math.min(a,c),s.ymin=Math.min(l,h),s.xmax=Math.max(a,c),s.ymax=Math.max(l,h),s.spatialReference=p,s}function a(t,e,n){const i=n.toMap(t);return null!=i&&o(i,(0,s.o)(),n,l).intersects(e)}const l=new r.A}}]);
//# sourceMappingURL=8447.05c15b12.chunk.js.map