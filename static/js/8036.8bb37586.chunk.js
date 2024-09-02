"use strict";(self.webpackChunksc_compile=self.webpackChunksc_compile||[]).push([[8036],{53596:(e,t,r)=>{r.d(t,{DS:()=>s,J7:()=>n,w$:()=>i});const n="updating";function i(e){return"updating"===e?null:e}function s(e){return"updating"===e}},92081:(e,t,r)=>{r.d(t,{_:()=>T});var n=r(35143),i=(r(35238),r(91967)),s=r(18690),o=r(76460),a=r(15941),l=r(53596),u=r(68134),c=r(31633),d=r(46053),p=(r(81806),r(85842)),y=r(20664),h=r(9392),f=r(97216),g=r(34111),E=r(9624),m=r(79115),_=r(14487),w=r(42294),x=r(2413),S=r(44815),F=r(14556),v=r(80963),I=r(93582),b=r(45417),R=r(8203),M=r(74279),A=r(13312);const O="esri.views.3d.layers.i3s.I3SMeshViewFilter",D=()=>o.A.getLogger(O);let T=class extends i.A{constructor(e){super(e),this._projectionEngineLoaded=!1}initialize(){(0,u.C_)((()=>this.viewFilter?.geometry||null!=this.layerFilter)).then((()=>this.loadAsyncModule(Promise.all([r.e(2612),r.e(3391)]).then(r.bind(r,63391)).then((e=>{this.destroyed||(this._geometryEngine=e)})))))}get sortedObjectIds(){if(null==this.viewFilter?.objectIds)return null;const e=(0,S.xm)(this.viewFilter.objectIds);return e.sort(),e}get parsedWhereClause(){const e=this.viewFilter?.where;if(null==e||!e)return null;try{return f.WhereClause.create(e,this.layerFieldsIndex)}catch(t){D().error(`Failed to parse filter where clause: ${t}`)}return null}addFilters(e,t,r,n){const i=this.sortedObjectIds;null!=i&&e.push((e=>(0,M.Be)(i,!0,e))),this.addSqlFilter(e,this.parsedWhereClause),this.addTimeFilter(e,this.viewFilter?.timeExtent);const s=(0,l.w$)(this._layerMaskGeometries),o=this._geometryEngine;if(null!=s&&null!=this.layerFilter&&null!=o){const i=this.layerFilter.spatialRelationship;e.push(((e,a)=>k(o,e,a,n,t,r,s,i)))}const a=(0,l.w$)(this._viewMaskGeometries);if(null!=a&&null!=this.viewFilter&&null!=o){const i=this.viewFilter.spatialRelationship;e.push(((e,s)=>k(o,e,s,n,t,r,a,i)))}}isMBSGeometryVisible(e,t,r){const n=(0,l.w$)(this._layerMaskGeometries),i=this._geometryEngine;if(null!=n&&null!=this.layerFilter&&null!=i){const s=this.layerFilter.spatialRelationship,o=n[0].spatialReference||t;return(0,m.z)(e,r,G,o)?N(i,G,n,o,s):(D().warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}const s=(0,l.w$)(this._viewMaskGeometries);if(null!=s&&null!=this.viewFilter&&null!=i){const n=this.viewFilter.spatialRelationship,o=s[0].spatialReference||t;return(0,m.z)(e,r,G,o)?N(i,G,s,o,n):(D().warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}return!0}get parsedGeometry(){const e=(0,l.w$)(this._viewMaskGeometries),t=(0,l.w$)(this._layerMaskGeometries);return null==e||null==t?e||t:t.concat(e)}get _layerMaskGeometries(){const e=this.layerFilter;return null==e?null:null==this._geometryEngine?l.J7:"disjoint"===e.spatialRelationship?e.geometries.map((e=>({type:"polygon",rings:e.rings,spatialReference:e.spatialReference,cache:{}}))):[e.geometries.reduce(((e,t)=>(e.rings=[...e.rings,...t.rings],e)),{type:"polygon",rings:[],spatialReference:e.geometries[0].spatialReference,cache:{}})]}get _viewMaskGeometries(){if(null==this.viewFilter)return null;const{geometry:e}=this.viewFilter;if(null==e)return null;if(null==this.viewFilter||null==this._geometryEngine)return l.J7;const{distance:t,units:r}=this.viewFilter,n=this.viewFilter.spatialRelationship,i="mesh"===e.type?e.extent:e;if(null==t||0===t)return Z(this._geometryEngine,i,n);const s=r||(0,c.Ij)(i.spatialReference);if(i.spatialReference.isWGS84){const e=this._geometryEngine.geodesicBuffer(i,t,s);return Z(this._geometryEngine,e,n)}const o=(0,b.Cv)(i,A.A.WGS84);if(null!=o){const e=(0,b.Cv)(this._geometryEngine.geodesicBuffer(o,t,s),i.spatialReference);return Z(this._geometryEngine,e,n)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule((0,E.load)().then((()=>this._projectionEngineLoaded=!0))),!this._projectionEngineLoaded))return null;let a=null;try{a=(0,E.project)(i,A.A.WGS84)}catch(u){}if(a)try{a=(0,E.project)(this._geometryEngine.geodesicBuffer(a,t,s),i.spatialReference)}catch(u){a=null}return a||D().error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${i.spatialReference.wkid}) to WGS84.`),Z(this._geometryEngine,a,n)}get updating(){return(0,l.DS)(this._layerMaskGeometries)||(0,l.DS)(this._viewMaskGeometries)}static checkSupport(e){return null!=e&&(!!function(e){return null!=e&&j.includes(e)}(e.spatialRelationship)||(D().warn(`Filters with spatialRelationship other than ${j.join(", ")} are not supported for mesh scene layers`),!1))}};(0,n._)([(0,d.MZ)()],T.prototype,"layerFilter",void 0),(0,n._)([(0,d.MZ)({type:R.A})],T.prototype,"viewFilter",void 0),(0,n._)([(0,d.MZ)()],T.prototype,"layerFieldsIndex",void 0),(0,n._)([(0,d.MZ)()],T.prototype,"loadAsyncModule",void 0),(0,n._)([(0,d.MZ)()],T.prototype,"addSqlFilter",void 0),(0,n._)([(0,d.MZ)()],T.prototype,"addTimeFilter",void 0),(0,n._)([(0,d.MZ)({readOnly:!0})],T.prototype,"sortedObjectIds",null),(0,n._)([(0,d.MZ)({readOnly:!0})],T.prototype,"parsedWhereClause",null),(0,n._)([(0,d.MZ)({readOnly:!0})],T.prototype,"parsedGeometry",null),(0,n._)([(0,d.MZ)({readOnly:!0})],T.prototype,"_layerMaskGeometries",null),(0,n._)([(0,d.MZ)({readOnly:!0})],T.prototype,"_viewMaskGeometries",null),(0,n._)([(0,d.MZ)()],T.prototype,"updating",null),(0,n._)([(0,d.MZ)()],T.prototype,"_projectionEngineLoaded",void 0),(0,n._)([(0,d.MZ)()],T.prototype,"_geometryEngine",void 0),T=(0,n._)([(0,p.$)(O)],T);const j=["contains","intersects","disjoint"];var C,Q;function Z(e,t,r){if(null==t)return null;if("disjoint"===r&&"polygon"===t.type){const r=t.rings.length,n=t.spatialReference,i=new Array(r);for(let e=0;e<r;++e){const r=(0,x.fA)(1/0,1/0,-1/0,-1/0);(0,x.Jf)(r,t.rings[e]),i[e]={type:"polygon",rings:[t.rings[e]],spatialReference:n,cache:{},aabr:r}}i.sort(((e,t)=>e.aabr[0]-t.aabr[0]));const o=new Set,a=new s.vW;for(let t=0;t<i.length;++t){const r=i[t],n=r.aabr[0];o.forEach((t=>{if(n>=t.aabr[2])return void o.delete(t);if(r.aabr[1]>t.aabr[3]||r.aabr[3]<t.aabr[1]||!e.intersects(r,t))return;r.rings=r.rings.concat(t.rings),(0,x.fT)(r.aabr,t.aabr,r.aabr),r.cache={},o.delete(t);const l=(0,s.qh)(i,t,i.length,a);i.splice(l,1)})),o.add(r)}for(const e of i)e.aabr=void 0;return i}return[t]}function N(e,t,r,n,i){if(t[3]>=.5*(t[2]+(0,g.tO)(n).radius))return!0;const s=$(e,t,n);return r.every((t=>J(e,t,s,i)!==C.DISCARD))}function k(e,t,r,n,i,s,o,a){const l=o[0].spatialReference||i.spatialReference;if(!(0,m.z)(r.node.serviceMbsInIndexSR,s,G,l))return void D().warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const u=$(e,G,l),c=function(e,t,r,n,i){const s=t.renderSpatialReference,o=new Map,a={type:"polygon",rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],spatialReference:r};a.rings[0][3]=a.rings[0][0];const l={indices:null,data:null,stride:0,startIndex:0,endIndex:0};let u,c;switch(e){case"intersects":u=(e,t,r)=>e.intersects(t,r)?C.KEEP:C.TEST,c=L;break;case"contains":u=(e,t,r)=>e.contains(t,r)?C.TEST:C.DISCARD,c=L;break;default:u=(e,t,r)=>e.disjoint(t,r)?C.TEST:C.DISCARD,c=P}return{collection:n,object:i,type:e,maskSR:r,renderSR:s,aabbCache:o,triangle:a,positions:l,triangleTest:u,geometryTest:c}}(a,i,l,n,r.objectHandle);for(const d of o){if(0===t.length)return;switch(J(e,d,u,a)){case C.DISCARD:return void(t.length=0);case C.KEEP:continue}(0,M.$i)(t,r.featureIds,(t=>V(e,d,t,c)))}}(Q=C||(C={}))[Q.KEEP=0]="KEEP",Q[Q.DISCARD=1]="DISCARD",Q[Q.TEST=2]="TEST";const G=(0,I.f)(0,0,0,0);function $(e,t,r){const n={type:"point",x:t[0],y:t[1],hasZ:!1,hasM:!1,spatialReference:r},i=!(0,v.oT)(r)&&!(0,v.K8)(r),s=Number.isNaN(t[3])?0:(0,a.qE)(t[3],0,2*F.$O.radius),o=i?e.buffer(n,s,1):e.geodesicBuffer(n,s,1);return o.type="polygon",o}function J(e,t,r,n){switch(n){case"intersects":case"contains":return L(e,t,r);case"disjoint":return P(e,t,r)}}function L(e,t,r){return e.intersects(t,r)?e.contains(t,r)?C.KEEP:C.TEST:C.DISCARD}function P(e,t,r){return e.intersects(t,r)?e.contains(t,r)?C.DISCARD:C.TEST:C.KEEP}function V(e,t,r,n){const{collection:i,object:s,renderSR:o,maskSR:a,geometryTest:l,aabbCache:u}=n;let c=u.get(r);if(!c){const e=i.getObjectTransform(s);i.getComponentAabb(s,r,W);const t=[(0,h.fA)(W[0],W[1],0),(0,h.fA)(W[0],W[4],0),(0,h.fA)(W[3],W[4],0),(0,h.fA)(W[3],W[1],0)];for(let r=0;r<4;++r)(0,y.t)(t[r],t[r],e.rotationScale),(0,y.g)(t[r],t[r],e.position),(0,_.F)(t[r],o,t[r],a);c={type:"polygon",rings:[t],spatialReference:a,cache:{}},c.rings[0][4]=c.rings[0][0],u.set(r,c)}switch(l(e,t,c)){case C.DISCARD:return!1;case C.KEEP:return!0}const{triangle:d,triangleTest:p,positions:f}=n,g=d.rings[0][0],E=d.rings[0][1],m=d.rings[0][2],w=i.getObjectTransform(s);i.getComponentPositions(s,r,f);const{indices:x,data:S,stride:F,startIndex:v,endIndex:I}=f;for(let h=v;h<I;h+=3){const r=F*x[h],n=F*x[h+1],i=F*x[h+2];switch((0,y.s)(g,S[r],S[r+1],S[r+2]),(0,y.s)(E,S[n],S[n+1],S[n+2]),(0,y.s)(m,S[i],S[i+1],S[i+2]),(0,y.t)(g,g,w.rotationScale),(0,y.t)(E,E,w.rotationScale),(0,y.t)(m,m,w.rotationScale),(0,y.g)(g,g,w.position),(0,y.g)(E,E,w.position),(0,y.g)(m,m,w.position),(0,_.F)(g,o,g,a),(0,_.F)(E,o,E,a),(0,_.F)(m,o,m,a),p(e,t,d)){case C.DISCARD:return!1;case C.KEEP:return!0}}return"intersects"!==n.type}const W=(0,w.vt)()},11149:(e,t,r)=>{r.d(t,{_:()=>g});var n=r(35143),i=r(91967),s=r(50076),o=r(30726),a=r(46053),l=(r(81806),r(76460),r(47249),r(85842)),u=r(76797),c=r(3569),d=r(26151),p=r(1900),y=r(77725),h=r(68295);const f=d.d;let g=class extends i.A{get spatialReference(){return this.layerView.view.spatialReference}get layer(){return this.layerView.i3slayer}get defaultQueryJSON(){return new h.A({outSpatialReference:this.spatialReference}).toJSON()}get _dataQueryEngine(){return this._ensureDataQueryEngine()}constructor(e){super(e)}initialize(){this.addHandles(this.layerView.on("visible-geometry-changed",(()=>this.spatialIndex.events.emit("changed"))))}destroy(){this._dataQueryEngineInstance=(0,o.pR)(this._dataQueryEngineInstance),this._set("layerView",null)}async executeQueryForCount(e,t){return this._dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),t)}async executeQueryForExtent(e,t){const{count:r,extent:n}=await this._dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),t);return{count:r,extent:u.A.fromJSON(n)}}async executeQueryForIds(e,t){return this._dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),t)}async executeQuery(e,t){const r=this._ensureQueryJSON(e);if(r.returnGeometry)throw new s.A("unsupported-query","returnGeometry is not supported when querying a mesh scene layer view, it is only supported when directly querying a scene layer");if(r.returnCentroid)throw new s.A("unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");const n=await this._dataQueryEngine.executeQuery(r,t),i=y.A.fromJSON(n);return i.features.forEach((e=>e.geometry=null)),i}_ensureQueryJSON(e){return null==e?this.defaultQueryJSON:e.toJSON()}_ensureDataQueryEngine(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e=this.layer.objectIdField||c.r,t=this.layer.fieldsIndex?.toJSON()||new p.A([]),r=this.layerView.view.resourceController.scheduler,n=this.spatialReference.toJSON(),i=this.priority,s=this.spatialIndex;return this._dataQueryEngineInstance=new f({hasZ:!0,hasM:!1,geometryType:"esriGeometryPolygon",fieldsIndex:t,timeInfo:null,spatialReference:n,objectIdField:e,featureStore:s,scheduler:r,priority:i}),this._dataQueryEngineInstance}};(0,n._)([(0,a.MZ)({constructOnly:!0})],g.prototype,"layerView",void 0),(0,n._)([(0,a.MZ)({constructOnly:!0})],g.prototype,"priority",void 0),(0,n._)([(0,a.MZ)({constructOnly:!0})],g.prototype,"spatialIndex",void 0),(0,n._)([(0,a.MZ)()],g.prototype,"spatialReference",null),(0,n._)([(0,a.MZ)()],g.prototype,"layer",null),(0,n._)([(0,a.MZ)()],g.prototype,"defaultQueryJSON",null),g=(0,n._)([(0,l.$)("esri.views.3d.layers.i3s.I3SQueryEngine")],g)},68830:(e,t,r)=>{r.d(t,{n:()=>a});var n=r(42294),i=r(90321),s=r(1484),o=r(74279);class a{constructor(e){this._objectIdField=e.objectIdField,this._getFeatureExtent=e.getFeatureExtent}getObjectId(e){return e.id}getAttributes(e){const{meta:t,index:r}=e,n={};this._objectIdField&&(n[this._objectIdField]=e.id);const i=t.attributeInfo?.attributeData;if(null!=i)for(const s of Object.keys(i))n[s]=(0,o.E5)(i[s],r);return n}getAttribute(e,t){if(t===this._objectIdField)return e.id;const{meta:r,index:n}=e,i=r.attributeInfo?.attributeData;return null!=i?(0,o.E5)(i[t],n):null}getGeometry(e){if(e.geometry)return e.geometry;const[t,r,n,i,o]=this._getFeatureExtent(e,l);return new s.A([5],[t,r,n,i,r,n,i,o,n,t,o,n,t,r,n])}getCentroid(e,t){if(e.geometry)return(0,i.Q)(new s.A,e.geometry,t.hasZ,t.hasM);const[r,n,o,a,u,c]=this._getFeatureExtent(e,l);return new s.A([0],[(r+a)/2,(n+u)/2,(o+c)/2])}cloneWithGeometry(e,t){const{id:r,index:n,meta:i}=e;return{id:r,index:n,meta:i,geometry:t}}}const l=(0,n.vt)()},81068:(e,t,r)=>{r.d(t,{D:()=>h});var n=r(35143),i=r(91967),s=r(54099),o=r(46053),a=(r(81806),r(76460),r(47249),r(85842)),l=r(79115),u=r(42294),c=r(2413),d=r(93582),p=r(9561);const y=(0,u.vt)();let h=class extends i.A{constructor(e){super(e),this.events=new s.A}forEach(e){this.forAllFeatures((t=>(e(t),p._R.CONTINUE)))}forEachBounds(e,t){const r=this.getFeatureExtent;for(const n of e)t(r(n,y))}forEachInBounds(e,t){this.forAllFeatures((r=>{const n=this.getFeatureExtent(r,g);return(0,c.HY)(e,(0,u.ES)(n,E))&&t(r),p._R.CONTINUE}),(t=>{if((0,l.z)(t.node.serviceMbsInIndexSR,this.sourceSpatialReference,f,this.viewSpatialReference),f[0]>=e[0]&&f[2]<=e[2]&&f[1]>=e[1]&&f[3]<=e[3])return p._R.CONTINUE;const r=Math.max(e[0],Math.min(f[0],e[2])),n=Math.max(e[1],Math.min(f[1],e[3])),i=f[0]-r,s=f[1]-n;return i*i+s*s<=f[3]*f[3]?p._R.CONTINUE:p._R.SKIP}))}};(0,n._)([(0,o.MZ)({constructOnly:!0})],h.prototype,"featureAdapter",void 0),(0,n._)([(0,o.MZ)({constructOnly:!0})],h.prototype,"forAllFeatures",void 0),(0,n._)([(0,o.MZ)({constructOnly:!0})],h.prototype,"getFeatureExtent",void 0),(0,n._)([(0,o.MZ)({constructOnly:!0})],h.prototype,"sourceSpatialReference",void 0),(0,n._)([(0,o.MZ)({constructOnly:!0})],h.prototype,"viewSpatialReference",void 0),h=(0,n._)([(0,a.$)("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],h);const f=(0,d.f)(0,0,0,0),g=(0,u.vt)(),E=(0,c.vt)()},39097:(e,t,r)=>{r.d(t,{E:()=>u});var n=r(35143),i=r(76460),s=r(46053),o=(r(81806),r(47249),r(85842)),a=r(97216),l=r(74279);const u=e=>{let t=class extends e{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=e=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&i.A.getLogger(this).error("Error while evaluating definitionExpression: "+e),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&i.A.getLogger(this).error("Further errors are ignored")}}get parsedDefinitionExpression(){if(!this.i3slayer?.definitionExpression)return null;try{const e=a.WhereClause.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!e.isStandardized)return i.A.getLogger(this).error("definitionExpression is using non standard function"),null;const t=[],r=e.fieldNames;return(0,l.W)(r,this.i3slayer.fields,{missingFields:t}),t.length>0?(i.A.getLogger(this).error(`definitionExpression references unknown fields: ${t.join(", ")}`),null):(this._definitionExpressionErrors=0,e)}catch(e){return i.A.getLogger(this).error("Failed to parse definitionExpression: "+e),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:[]}_evaluateClause(e,t){try{return e.testFeature(t)}catch(r){return this.logError(r),!1}}_addDefinitionExpressionToQuery(e){if(!this.parsedDefinitionExpression)return e;const t=this.i3slayer.definitionExpression,r=e.clone();return r.where?r.where=`(${t}) AND (${r.where})`:r.where=t,r}};return(0,n._)([(0,s.MZ)({readOnly:!0})],t.prototype,"parsedDefinitionExpression",null),(0,n._)([(0,s.MZ)({readOnly:!0})],t.prototype,"definitionExpressionFields",null),t=(0,n._)([(0,o.$)("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],t),t}},50532:(e,t,r)=>{r.d(t,{P:()=>c});var n=r(35143),i=r(46053),s=(r(81806),r(76460),r(47249),r(85842)),o=r(23478),a=r(8203),l=r(31516),u=r(74279);const c=e=>{let t=class extends e{get timeExtent(){return(0,l.F)(this.i3slayer,this.view?.timeExtent,this._get("timeExtent"))}get mergedFilter(){const{filter:e,timeExtent:t}=this;if(null==t)return e;const r=e?.clone()??new a.A;return null!=t&&(r.timeExtent=r.timeExtent?.intersection(t)??t),r}getTimeFilterDependencies(){const{timeInfo:e}=this.i3slayer;if(null==e)return[];const{startField:t,endField:r}=e;return[t,r]}addTimeFilter(e,t){if(null==t)return;const{timeInfo:r}=this.i3slayer;if(null==r)return;const{startField:n,endField:i,useTime:s}=r;if(!s||null==n&&null==i)return;const a=r.toJSON(),l=t.toJSON();e.push(((e,t)=>function(e,t,r,n){const i=t.attributeInfo?.attributeData;if(null==i)return;const{startTimeField:s,endTimeField:a}=r;if(null!=s&&null==i[s]||null!=a&&null==i[a])return;const l=(0,o.I)(r,n,new d(i));if(null==l)return;const{featureIds:c}=t;(0,u.$i)(e,c,l)}(e,t,a,l)))}};return(0,n._)([(0,i.MZ)({readOnly:!0})],t.prototype,"timeExtent",null),(0,n._)([(0,i.MZ)()],t.prototype,"mergedFilter",null),t=(0,n._)([(0,s.$)("esri.views.3d.layers.support.TemporalSceneLayerView")],t),t};class d{constructor(e){this.attributeData=e}getAttribute(e,t){return(0,u.E5)(this.attributeData[t],e)}getAttributeAsTimestamp(e,t){const r=this.getAttribute(e,t);return"string"==typeof r?new Date(r).getTime():"number"==typeof r||null==r?r:null}}}}]);
//# sourceMappingURL=8036.8bb37586.chunk.js.map