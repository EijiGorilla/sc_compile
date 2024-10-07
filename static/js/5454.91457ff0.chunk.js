"use strict";(self.webpackChunksc_compile=self.webpackChunksc_compile||[]).push([[5454],{51344:(e,t,n)=>{function s(e){return null!=a(e)||null!=o(e)}function i(e){return l.test(e)}function r(e){return a(e)??o(e)}function o(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(d&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,s=0;for(;!t&&s<=e.length;)t=!u.test(e[s]),s++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function a(e){const t=l.exec(e);if(!t?.groups)return null;const n=t.groups,s=+n.year,i=+n.month-1,r=+n.day,o=+(n.hours??"0"),a=+(n.minutes??"0"),u=+(n.seconds??"0");if(o>23)return null;if(a>59)return null;if(u>59)return null;const d=n.ms??"0",h=d?+d.padEnd(3,"0").substring(0,3):0;let c;if(n.isUTC||!n.offsetSign)c=Date.UTC(s,i,r,o,a,u,h);else{const e=+n.offsetHours,t=+n.offsetMinutes;c=6e4*("+"===n.offsetSign?-1:1)*(60*e+t)+Date.UTC(s,i,r,o,a,u,h)}return Number.isNaN(c)?null:c}n.d(t,{Br:()=>i,Cq:()=>s,_U:()=>r});const l=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const u=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,d=!Number.isNaN(new Date("technology 10").getTime())},70373:(e,t,n)=>{n.d(t,{w:()=>o});var s=n(18690),i=(n(81806),n(30015)),r=n(61196);class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,t=arguments.length>1?arguments[1]:void 0;this._compareMinX=h,this._compareMinY=c,this._toBBox=e=>e,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this._toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),I.prune(),b.prune(),B.prune(),F.prune()}all(e){a(this._data,e)}search(e,t){let n=this._data;const s=this._toBBox;if(_(e,n))for(I.clear();n;){for(let i=0,r=n.children.length;i<r;i++){const r=n.children[i],o=n.leaf?s(r):r;_(e,o)&&(n.leaf?t(r):g(e,o)?a(r,t):I.push(r))}n=I.pop()}}collides(e){let t=this._data;const n=this._toBBox;if(!_(e,t))return!1;for(I.clear();t;){for(let s=0,i=t.children.length;s<i;s++){const i=t.children[s],r=t.leaf?n(i):i;if(_(e,r)){if(t.leaf||g(e,r))return!0;I.push(i)}}t=I.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this._data.children.length)if(this._data.height===t.height)this._splitRoot(this._data,t);else{if(this._data.height<t.height){const e=this._data;this._data=t,t=e}this._insert(t,this._data.height-t.height-1,!0)}else this._data=t;return this}insert(e){return e&&this._insert(e,this._data.height-1),this}clear(){return this._data=new E([]),this}remove(e){if(!e)return this;let t,n=this._data,i=null,r=0,o=!1;const a=this._toBBox(e);for(B.clear(),F.clear();n||B.length>0;){if(n||(n=B.pop(),i=B.data[B.length-1],r=F.pop()??0,o=!0),n.leaf&&(t=(0,s.qh)(n.children,e,n.children.length,n.indexHint),-1!==t))return n.children.splice(t,1),B.push(n),this._condense(B),this;o||n.leaf||!g(n,a)?i?(r++,n=i.children[r],o=!1):n=null:(B.push(n),F.push(r),r=0,i=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(e){return this._data=e,this}_build(e,t,n,s){const i=n-t+1;let r=this._maxEntries;if(i<=r){const s=new E(e.slice(t,n+1));return l(s,this._toBBox),s}s||(s=Math.ceil(Math.log(i)/Math.log(r)),r=Math.ceil(i/r**(s-1)));const o=new T([]);o.height=s;const a=Math.ceil(i/r),u=a*Math.ceil(Math.sqrt(r));x(e,t,n,u,this._compareMinX);for(let l=t;l<=n;l+=u){const t=Math.min(l+u-1,n);x(e,l,t,a,this._compareMinY);for(let n=l;n<=t;n+=a){const i=Math.min(n+a-1,t);o.children.push(this._build(e,n,i,s-1))}}return l(o,this._toBBox),o}_insert(e,t,n){const s=this._toBBox,i=n?e:s(e);B.clear();const r=function(e,t,n,s){for(;s.push(t),!0!==t.leaf&&s.length-1!==n;){let n,s=1/0,i=1/0;for(let r=0,o=t.children.length;r<o;r++){const o=t.children[r],a=f(o),l=p(e,o)-a;l<i?(i=l,s=a<s?a:s,n=o):l===i&&a<s&&(s=a,n=o)}t=n||t.children[0]}return t}(i,this._data,t,B);for(r.children.push(e),d(r,i);t>=0&&B.data[t].children.length>this._maxEntries;)this._split(B,t),t--;!function(e,t,n){for(let s=n;s>=0;s--)d(t.data[s],e)}(i,B,t)}_split(e,t){const n=e.data[t],s=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,s);const r=this._chooseSplitIndex(n,i,s);if(!r)return;const o=n.children.splice(r,n.children.length-r),a=n.leaf?new E(o):new T(o);a.height=n.height,l(n,this._toBBox),l(a,this._toBBox),t?e.data[t-1].children.push(a):this._splitRoot(n,a)}_splitRoot(e,t){this._data=new T([e,t]),this._data.height=e.height+1,l(this._data,this._toBBox)}_chooseSplitIndex(e,t,n){let s,i,r;s=i=1/0;for(let o=t;o<=n-t;o++){const t=u(e,0,o,this._toBBox),a=u(e,o,n,this._toBBox),l=y(t,a),d=f(t)+f(a);l<s?(s=l,r=o,i=d<i?d:i):l===s&&d<i&&(i=d,r=o)}return r}_chooseSplitAxis(e,t,n){const s=e.leaf?this._compareMinX:h,i=e.leaf?this._compareMinY:c;this._allDistMargin(e,t,n,s)<this._allDistMargin(e,t,n,i)&&e.children.sort(s)}_allDistMargin(e,t,n,s){e.children.sort(s);const i=this._toBBox,r=u(e,0,t,i),o=u(e,n-t,n,i);let a=m(r)+m(o);for(let l=t;l<n-t;l++){const t=e.children[l];d(r,e.leaf?i(t):t),a+=m(r)}for(let l=n-t-1;l>=t;l--){const t=e.children[l];d(o,e.leaf?i(t):t),a+=m(o)}return a}_condense(e){for(let t=e.length-1;t>=0;t--){const n=e.data[t];if(0===n.children.length)if(t>0){const i=e.data[t-1],r=i.children;r.splice((0,s.qh)(r,n,r.length,i.indexHint),1)}else this.clear();else l(n,this._toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this._compareMinX=new Function("a","b",t.join(e[0])),this._compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function a(e,t){let n=e;for(b.clear();n;){if(!0===n.leaf)for(const e of n.children)t(e);else b.pushArray(n.children);n=b.pop()??null}}function l(e,t){u(e,0,e.children.length,t,e)}function u(e,t,n,s,i){i||(i=new E([])),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let r,o=t;o<n;o++)r=e.children[o],d(i,e.leaf?s(r):r);return i}function d(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function h(e,t){return e.minX-t.minX}function c(e,t){return e.minY-t.minY}function f(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function m(e){return e.maxX-e.minX+(e.maxY-e.minY)}function p(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function y(e,t){const n=Math.max(e.minX,t.minX),s=Math.max(e.minY,t.minY),i=Math.min(e.maxX,t.maxX),r=Math.min(e.maxY,t.maxY);return Math.max(0,i-n)*Math.max(0,r-s)}function g(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function _(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function x(e,t,n,s,i){const o=[t,n];for(;o.length;){const t=o.pop(),n=o.pop();if(t-n<=s)continue;const a=n+Math.ceil((t-n)/s/2)*s;(0,r.q)(e,a,n,t,i),o.push(n,a,a,t)}}const I=new i.A,b=new i.A,B=new i.A,F=new i.A({deallocator:void 0});class M{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class v extends M{constructor(){super(...arguments),this.height=1,this.indexHint=new s.vW}}class E extends v{constructor(e){super(),this.children=e,this.leaf=!0}}class T extends v{constructor(e){super(),this.children=e,this.leaf=!1}}},10947:(e,t,n)=>{n.d(t,{F:()=>l});var s=n(81806),i=n(70373),r=n(2413);const o={minX:0,minY:0,maxX:0,maxY:0};function a(e,t,n){(function(e){o.minX=e[0],o.minY=e[1],o.maxX=e[2],o.maxY=e[3]})(t),e.search(o,n)}class l{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new i.w(9,(0,s.A)("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((n,s)=>{e[t++]=s})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const e=(0,r.Ie)();for(const t of this._boundsById.values())t&&(e[0]=Math.min(t[0],e[0]),e[1]=Math.min(t[1],e[1]),e[2]=Math.max(t[2],e[2]),e[3]=Math.max(t[3],e[3]));return e}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),a(this._index,e,(e=>t(this._idByBounds.get(e))))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},72547:(e,t,n)=>{n.d(t,{A:()=>m});var s=n(18690),i=n(50076),r=n(54099),o=n(76460),a=n(42294),l=n(2413),u=n(98618),d=n(10947),h=n(55167),c=n(33376);const f=(0,a.vt)();class m{constructor(e){this.geometryInfo=e,this._boundsStore=new d.F,this._featuresById=new Map,this._markedIds=new Set,this.events=new r.A,this.featureAdapter=c.T}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{null!=t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if(null==this.fullBounds)return null;const[t,n,s,i]=this.fullBounds;return{xmin:t,ymin:n,xmax:s,ymax:i,spatialReference:(0,h.ag)(e)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}upsertMany(e){const t=e.map((e=>this._upsert(e)));return this._emitChanged(),t.filter(s.Ru)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t){for(const n of e){const e=this._boundsStore.get(n.objectId);e&&t((0,a.Jt)(f,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,n)=>{this._markedIds.has(n)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void o.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new i.A("featurestore:invalid-feature","feature id is missing",{feature:e}));const n=this._featuresById.get(t);let s;if(this._markedIds.add(t),n?(e.displayId=n.displayId,s=this._boundsStore.get(t),this._boundsStore.delete(t)):null!=this.onFeatureAdd&&this.onFeatureAdd(e),!e.geometry?.coords?.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);s=(0,u.jQ)(null!=s?s:(0,l.vt)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),null!=s&&this._boundsStore.set(t,s),this._featuresById.set(t,e)}_upsert(e){const t=e?.objectId;if(null==t)return o.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new i.A("featurestore:invalid-feature","feature id is missing",{feature:e})),null;const n=this._featuresById.get(t);if(!n)return this._add(e),e;this._markedIds.add(t);const{geometry:s,attributes:r}=e;for(const i in r)n.attributes[i]=r[i];return s&&(n.geometry=s,this._boundsStore.set(t,(0,u.jQ)((0,l.vt)(),s,this.geometryInfo.hasZ,this.geometryInfo.hasM)??null)),n}_remove(e){null!=this.onFeatureRemove&&this.onFeatureRemove(e);const t=e.objectId;return this._markedIds.delete(t),this._boundsStore.delete(t),this._featuresById.delete(t),e}}},33754:(e,t,n)=>{n.d(t,{H:()=>i,L:()=>s});const s=1;function i(e,t){let n=0;for(const s of t){const t=s.attributes?.[e];"number"==typeof t&&isFinite(t)&&(n=Math.max(n,t))}return n}},35454:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var s=n(50076),i=n(19902),r=n(80963),o=n(98618),a=n(33754),l=n(72547),u=n(24586),d=n(26151),h=n(40296),c=n(40098),f=n(1900),m=n(6127),p=n(53430),y=n(67478);const g=r.KK,_={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:r.KK},x={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function I(e){return(0,i.fT)(e)?null!=e.z:!!e.hasZ}function b(e){return(0,i.fT)(e)?null!=e.m:!!e.hasM}class B{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){const t=[],{features:n}=e,i=this._inferLayerProperties(n,e.fields),r=e.fields||[],o=null!=e.hasM?e.hasM:!!i.hasM,c=null!=e.hasZ?e.hasZ:!!i.hasZ,I=!e.spatialReference&&!i.spatialReference,b=I?g:e.spatialReference||i.spatialReference,B=I?_:null,F=e.geometryType||i.geometryType,M=!F;let v=e.objectIdField||i.objectIdField,E=e.timeInfo;const T=new f.A(r);if(!M&&(I&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!F))throw new s.A("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!v)throw new s.A("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(i.objectIdField&&v!==i.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${v}" doesn't match the field name "${i.objectIdField}", found in the provided fields`}),v=i.objectIdField),v&&!i.objectIdField){const e=T.get(v);e?(v=e.name,e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):r.unshift({alias:v,name:v,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const a of r){if(null==a.name&&(a.name=a.alias),null==a.alias&&(a.alias=a.name),!a.name)throw new s.A("feature-layer:invalid-field-name","field name is missing",{field:a});if(a.name===v&&(a.type="esriFieldTypeOID"),!m.m.jsonValues.includes(a.type))throw new s.A("feature-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a});null==a.length&&(a.length=(0,p._b)(a))}const w={};for(const s of r)if("esriFieldTypeOID"!==s.type&&"esriFieldTypeGlobalID"!==s.type){const e=(0,p.lD)(s);void 0!==e&&(w[s.name]=e)}if(E){if(E.startTimeField){const e=T.get(E.startTimeField);e?(E.startTimeField=e.name,e.type="esriFieldTypeDate"):E.startTimeField=null}if(E.endTimeField){const e=T.get(E.endTimeField);e?(E.endTimeField=e.name,e.type="esriFieldTypeDate"):E.endTimeField=null}if(E.trackIdField){const e=T.get(E.trackIdField);e?E.trackIdField=e.name:(E.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:E}}))}E.startTimeField||E.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:E}}),E=null)}const A=T.dateFields.length?{timeZoneIANA:e.dateFieldsTimeZone??y.n$}:null;this._createDefaultAttributes=(0,h.Vx)(w,v);const S={warnings:t,featureErrors:[],layerDefinition:{...x,drawingInfo:(0,h.F0)(F),templates:(0,h.e2)(w),extent:B,geometryType:F,objectIdField:v,fields:r,hasZ:c,hasM:o,timeInfo:E,dateFieldsTimeReference:A},assignedObjectIds:{}};if(this._queryEngine=new d.d({fieldsIndex:f.A.fromLayerJSON({fields:r,timeInfo:E,dateFieldsTimeReference:A}),geometryType:F,hasM:o,hasZ:c,objectIdField:v,spatialReference:b,featureStore:new l.A({geometryType:F,hasM:o,hasZ:c}),timeInfo:E,cacheSpatialQueries:!0}),!n?.length)return this._nextObjectId=a.L,S;const Y=(0,a.H)(v,n);return this._nextObjectId=Y+1,await(0,u.Nk)(n,b),this._loadInitialFeatures(S,n)}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([(0,c.$1)(t,n),(0,u.Nk)(e.adds,t),(0,u.Nk)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let n,s,r=null,o=null,a=null;for(const l of e){const e=l.geometry;if(null!=e&&(r||(r=(0,i.$B)(e)),o||(o=e.spatialReference),null==n&&(n=I(e)),null==s&&(s=b(e)),r&&o&&null!=n&&null!=s))break}if(t&&t.length){let e=null;t.some((t=>{const n="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,n||s}))&&(a=e.name)}return{geometryType:r,spatialReference:o,objectIdField:a,hasM:s,hasZ:n}}async _loadInitialFeatures(e,t){const{geometryType:n,hasM:s,hasZ:r,objectIdField:a,spatialReference:l,featureStore:d,fieldsIndex:h}=this._queryEngine,f=[];for(const o of t){if(null!=o.uid&&(e.assignedObjectIds[o.uid]=-1),o.geometry&&n!==(0,i.$B)(o.geometry)){e.featureErrors.push((0,c.Yx)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),s=(0,c.MB)(h,t,o.attributes,!0);s?e.featureErrors.push(s):(this._assignObjectId(t,o.attributes,!0),o.attributes=t,null!=o.uid&&(e.assignedObjectIds[o.uid]=o.attributes[a]),null!=o.geometry&&(o.geometry=(0,u.Cv)(o.geometry,o.geometry.spatialReference,l)),f.push(o))}d.addMany((0,o.Di)([],f,n,r,s,a));const{fullExtent:m,timeExtent:p}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=m,p){const{start:t,end:n}=p;e.layerDefinition.timeInfo.timeExtent=[t,n]}return e}async _applyEdits(e){const{adds:t,updates:n,deletes:s}=e,i={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t?.length&&this._applyAddEdits(i,t),n?.length&&this._applyUpdateEdits(i,n),s?.length){for(const e of s)i.deleteResults.push((0,c.bP)(e));this._queryEngine.featureStore.removeManyById(s)}const{fullExtent:r,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();return{extent:r,timeExtent:o,featureEditResults:i}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:s,hasM:r,hasZ:a,objectIdField:l,spatialReference:d,featureStore:h,fieldsIndex:f}=this._queryEngine,m=[];for(const o of t){if(o.geometry&&s!==(0,i.$B)(o.geometry)){n.push((0,c.Yx)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=(0,c.MB)(f,t,o.attributes);if(r)n.push(r);else{if(this._assignObjectId(t,o.attributes),o.attributes=t,null!=o.uid){const t=o.attributes[l];e.uidToObjectId[o.uid]=t}if(null!=o.geometry){const e=o.geometry.spatialReference??d;o.geometry=(0,u.Cv)((0,c.CR)(o.geometry,e),e,d)}m.push(o),n.push((0,c.bP)(o.attributes[l]))}}h.addMany((0,o.Di)([],m,s,a,r,l))}_applyUpdateEdits(e,t){let{updateResults:n}=e;const{geometryType:s,hasM:r,hasZ:a,objectIdField:l,spatialReference:d,featureStore:h,fieldsIndex:f}=this._queryEngine;for(const m of t){const{attributes:e,geometry:t}=m,p=e?.[l];if(null==p){n.push((0,c.Yx)(`Identifier field ${l} missing`));continue}if(!h.has(p)){n.push((0,c.Yx)(`Feature with object id ${p} missing`));continue}const y=(0,o.oN)(h.getFeature(p),s,a,r);if(null!=t){if(s!==(0,i.$B)(t)){n.push((0,c.Yx)("Incorrect geometry type."));continue}const e=t.spatialReference??d;y.geometry=(0,u.Cv)((0,c.CR)(t,e),e,d)}if(e){const t=(0,c.MB)(f,y.attributes,e);if(t){n.push(t);continue}}h.add((0,o.E2)(y,s,a,r,l)),n.push((0,c.bP)(p))}}_assignObjectId(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const s=this._queryEngine.objectIdField;n&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}}},40296:(e,t,n)=>{n.d(t,{F0:()=>a,Vx:()=>d,e2:()=>c,f:()=>f});var s=n(81806),i=n(53084),r=n(8298),o=n(44460);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.Cb:"esriGeometryPolyline"===e?o.yM:o.WR}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function d(e,t){if((0,s.A)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n=`this${h(t)} = null;`;for(const t in e)n+=`this${h(t)} = ${JSON.stringify(e[t])};`;const s=new Function(`\n      return class AttributesClass$${u++} {\n        constructor() {\n          ${n};\n        }\n      }\n    `)();return()=>new s}catch(n){return()=>({[t]:null,...e})}}function h(e){return l.test(e)?`.${e}`:`["${e}"]`}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,i.o8)(e)}}]}function f(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:r.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},40098:(e,t,n)=>{n.d(t,{$1:()=>y,CR:()=>p,MB:()=>c,Yx:()=>l,bP:()=>d});var s=n(51344),i=n(80963),r=n(53430);class o{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function l(e){return new a(e)}class u{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function d(e){return new u(e)}const h=new Set;function c(e,t,n){let s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];h.clear();for(const i in n){const o=e.get(i);if(!o)continue;const a=f(o,n[i]);if(h.add(o.name),o&&(s||o.editable)){const e=(0,r.CJ)(o,a);if(e)return l((0,r.uo)(e,o,a));t[o.name]=a}}for(const i of e?.requiredFields??[])if(!h.has(i.name))return l(`missing required field "${i.name}"`);return null}function f(e,t){let n=t;return(0,r.WA)(e)&&"string"==typeof t?n=parseFloat(t):(0,r.yM)(e)&&null!=t&&"string"!=typeof t?n=String(t):(0,r.vE)(e)&&"string"==typeof t&&(n=(0,s._U)(t)),(0,r.WX)(n)}let m;function p(e,t){if(!e||!(0,i.fn)(t))return e;if("rings"in e||"paths"in e){if(null==m)throw new TypeError("geometry engine not loaded");return m.simplify(t,e)}return e}async function y(e,t){!(0,i.fn)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return null==m&&(m=await Promise.all([n.e(2612),n.e(1669)]).then(n.bind(n,1669))),m}()}}}]);
//# sourceMappingURL=5454.91457ff0.chunk.js.map