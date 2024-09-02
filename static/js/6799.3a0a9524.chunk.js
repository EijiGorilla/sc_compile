"use strict";(self.webpackChunksc_compile=self.webpackChunksc_compile||[]).push([[6799],{51344:(e,t,n)=>{function r(e){return null!=l(e)||null!=s(e)}function o(e){return a.test(e)}function i(e){return l(e)??s(e)}function s(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(c&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,r=0;for(;!t&&r<=e.length;)t=!u.test(e[r]),r++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function l(e){const t=a.exec(e);if(!t?.groups)return null;const n=t.groups,r=+n.year,o=+n.month-1,i=+n.day,s=+(n.hours??"0"),l=+(n.minutes??"0"),u=+(n.seconds??"0");if(s>23)return null;if(l>59)return null;if(u>59)return null;const c=n.ms??"0",d=c?+c.padEnd(3,"0").substring(0,3):0;let f;if(n.isUTC||!n.offsetSign)f=Date.UTC(r,o,i,s,l,u,d);else{const e=+n.offsetHours,t=+n.offsetMinutes;f=6e4*("+"===n.offsetSign?-1:1)*(60*e+t)+Date.UTC(r,o,i,s,l,u,d)}return Number.isNaN(f)?null:f}n.d(t,{Br:()=>o,Cq:()=>r,_U:()=>i});const a=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const u=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,c=!Number.isNaN(new Date("technology 10").getTime())},10907:(e,t,n)=>{n.d(t,{BM:()=>I,bd:()=>S,sO:()=>j,xD:()=>c});var r=n(51344),o=n(50076),i=n(80963),s=n(20176),l=n(1484),a=n(53430);const u={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function c(e){return u[e]}function*d(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*f(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function p(e){for(const t of e)if(t.length>2)return!0;return!1}function y(e){let t=0;for(let n=0;n<e.length;n++){const r=e[n],o=e[(n+1)%e.length];t+=r[0]*o[1]-o[0]*r[1]}return t<=0}function m(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function g(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return b(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const r of t.coordinates)b(e,r,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const r of t.coordinates){h(e,r[0],n);for(let t=1;t<r.length;t++)w(e,r[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return A(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const r=t.coordinates;h(e,r[0],n);for(let o=1;o<r.length;o++)w(e,r[o],n);return e}(e,t,n)}}function h(e,t,n){const r=m(t);!function(e){return!y(e)}(r)?b(e,r,n):F(e,r,n)}function w(e,t,n){const r=m(t);!function(e){return y(e)}(r)?b(e,r,n):F(e,r,n)}function b(e,t,n){for(const r of t)A(e,r,n);e.lengths.push(t.length)}function F(e,t,n){for(let r=t.length-1;r>=0;r--)A(e,t[r],n);e.lengths.push(t.length)}function A(e,t,n){const[r,o,i]=t;e.coords.push(r,o),n.hasZ&&e.coords.push(i||0)}function T(e){switch(typeof e){case"string":return(0,r.Br)(e)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function j(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4326;if(!e)throw new o.A("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new o.A("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:n}=e;if(!n)return;const r="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,s=(0,i.oT)({wkid:t})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${t})$`,"i");if(!r||!s.test(r))throw new o.A("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function I(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=[],r=new Set,o=new Set;let i,s=!1,l=null,u=!1,{geometryType:y=null}=t,m=!1;for(const h of d(e)){const{geometry:e,properties:t,id:d}=h;if((!e||(y||(y=c(e.type)),c(e.type)===y))&&(s||(s=p(f(e))),u||(u=null!=d,u&&(i=typeof d,t&&(l=Object.keys(t).filter((e=>t[e]===d))))),t&&l&&u&&null!=d&&(l.length>1?l=l.filter((e=>t[e]===d)):1===l.length&&(l=t[l[0]]===d?l:[])),!m&&t)){let e=!0;for(const i in t){if(r.has(i))continue;const s=t[i];if(null==s){e=!1,o.add(i);continue}const l=T(s);if("unknown"===l){o.add(i);continue}o.delete(i),r.add(i);const u=(0,a.rS)(i);u&&n.push({name:u,alias:i,type:l})}m=e}}const g=(0,a.rS)(1===l?.length&&l[0]||null)??void 0;if(g)for(const c of n)if(c.name===g&&(0,a.WA)(c)){c.type="esriFieldTypeOID";break}return{fields:n,geometryType:y,hasZ:s,objectIdFieldName:g,objectIdFieldType:i,unknownFields:Array.from(o)}}function S(e,t){return Array.from(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function*(){const{geometryType:n,objectIdField:r}=t;for(const o of e){const{geometry:e,properties:i,id:a}=o;if(e&&c(e.type)!==n)continue;const u=i||{};let d;r&&(d=u[r],null==a||d||(u[r]=d=a));const f=new s.Om(e?g(new l.A,e,t):null,u,null,d??void 0);yield f}}()}(d(e),t))}},40296:(e,t,n)=>{n.d(t,{F0:()=>l,Vx:()=>c,e2:()=>f,f:()=>p});var r=n(81806),o=n(53084),i=n(8298),s=n(44460);function l(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?s.Cb:"esriGeometryPolyline"===e?s.yM:s.WR}}}const a=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function c(e,t){if((0,r.A)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n=`this${d(t)} = null;`;for(const t in e)n+=`this${d(t)} = ${JSON.stringify(e[t])};`;const r=new Function(`\n      return class AttributesClass$${u++} {\n        constructor() {\n          ${n};\n        }\n      }\n    `)();return()=>new r}catch(n){return()=>({[t]:null,...e})}}function d(e){return a.test(e)?`.${e}`:`["${e}"]`}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,o.o8)(e)}}]}function p(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:i.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},40098:(e,t,n)=>{n.d(t,{$1:()=>g,CR:()=>m,MB:()=>f,Yx:()=>a,bP:()=>c});var r=n(51344),o=n(80963),i=n(53430);class s{constructor(){this.code=null,this.description=null}}class l{constructor(e){this.error=new s,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function a(e){return new l(e)}class u{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function c(e){return new u(e)}const d=new Set;function f(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];d.clear();for(const o in n){const s=e.get(o);if(!s)continue;const l=p(s,n[o]);if(d.add(s.name),s&&(r||s.editable)){const e=(0,i.CJ)(s,l);if(e)return a((0,i.uo)(e,s,l));t[s.name]=l}}for(const o of e?.requiredFields??[])if(!d.has(o.name))return a(`missing required field "${o.name}"`);return null}function p(e,t){let n=t;return(0,i.WA)(e)&&"string"==typeof t?n=parseFloat(t):(0,i.yM)(e)&&null!=t&&"string"!=typeof t?n=String(t):(0,i.vE)(e)&&"string"==typeof t&&(n=(0,r._U)(t)),(0,i.WX)(n)}let y;function m(e,t){if(!e||!(0,o.fn)(t))return e;if("rings"in e||"paths"in e){if(null==y)throw new TypeError("geometry engine not loaded");return y.simplify(t,e)}return e}async function g(e,t){!(0,o.fn)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return null==y&&(y=await Promise.all([n.e(2612),n.e(1669)]).then(n.bind(n,1669))),y}()}},26799:(e,t,n)=>{n.d(t,{GA:()=>C,GL:()=>S,I:()=>$,J0:()=>x,Ki:()=>P,Px:()=>v,QE:()=>T,bV:()=>k,bW:()=>N,vJ:()=>A});n(35238);var r=n(3825),o=n(50076),i=n(76460),s=n(90534),l=n(80963),a=n(45417),u=n(98618),c=n(75146),d=n(10907),f=n(40296),p=n(40098),y=n(1900),m=n(6127),g=n(67478),h=n(13312);const w=()=>i.A.getLogger("esri.layers.ogc.ogcFeatureUtils"),b="startindex",F=new Set([b,"offset"]),A="http://www.opengis.net/def/crs/",T=`${A}OGC/1.3/CRS84`;var j,I;async function S(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5;const{links:l}=e,a=D(l,"items",j.geojson)||D(l,"http://www.opengis.net/def/rel/ogc/1.0/items",j.geojson);if(null==a)throw new o.A("ogc-feature-layer:missing-items-page","Missing items url");const{apiKey:u,customParameters:c,signal:p}=n,h=(0,s.s2)(a.href,e.landingPage.url),F={limit:i,...c,token:u},A=(0,s.a6)(h,F),T={accept:j.geojson},{data:I}=await(0,r.A)(A,{signal:p,headers:T}),S=R(A,i,I.links)??b;(0,d.sO)(I);const k=(0,d.BM)(I,{geometryType:t.geometryType}),v=t.fields||k.fields||[],P=null!=t.hasZ?t.hasZ:k.hasZ,C=k.geometryType,x=t.objectIdField||k.objectIdFieldName||"OBJECTID";let N=t.timeInfo;const $=v.find((e=>{let{name:t}=e;return t===x}));if($)$.editable=!1,$.nullable=!1;else{if(!k.objectIdFieldType)throw new o.A("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");v.unshift({name:x,alias:x,type:"number"===k.objectIdFieldType?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(x!==k.objectIdFieldName){const e=v.find((e=>{let{name:t}=e;return t===k.objectIdFieldName}));e&&(e.type="esriFieldTypeInteger")}v===k.fields&&k.unknownFields.length>0&&w().warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:k.unknownFields}});for(const r of v){if(null==r.name&&(r.name=r.alias),null==r.alias&&(r.alias=r.name),"esriFieldTypeOID"!==r.type&&"esriFieldTypeGlobalID"!==r.type&&(r.editable=null==r.editable||!!r.editable,r.nullable=null==r.nullable||!!r.nullable),!r.name)throw new o.A("ogc-feature-layer:invalid-field-name","field name is missing",{field:r});if(!m.m.jsonValues.includes(r.type))throw new o.A("ogc-feature-layer:invalid-field-type",`invalid type for field "${r.name}"`,{field:r})}if(N){const e=new y.A(v);if(N.startTimeField){const t=e.get(N.startTimeField);t?(N.startTimeField=t.name,t.type="esriFieldTypeDate"):N.startTimeField=null}if(N.endTimeField){const t=e.get(N.endTimeField);t?(N.endTimeField=t.name,t.type="esriFieldTypeDate"):N.endTimeField=null}if(N.trackIdField){const t=e.get(N.trackIdField);t?N.trackIdField=t.name:(N.trackIdField=null,w().warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:N}}))}N.timeReference||={timeZoneIANA:g.n$},N.startTimeField||N.endTimeField||(w().warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:N}}),N=void 0)}return{drawingInfo:C?(0,f.F0)(C):null,extent:q(e),geometryType:C,fields:v,hasZ:!!P,objectIdField:x,paginationParameter:S,timeInfo:N}}async function k(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{links:n,url:i}=e,l=D(n,"data",j.json)||D(n,"http://www.opengis.net/def/rel/ogc/1.0/data",j.json);if(null==l)throw new o.A("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:a,customParameters:u,signal:c}=t,d=(0,s.s2)(l.href,i),{data:f}=await(0,r.A)(d,{signal:c,headers:{accept:j.json},query:{...u,token:a}});for(const r of f.collections)r.landingPage=e;return f}async function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{links:n,url:i}=e,l=D(n,"conformance",j.json)||D(n,"http://www.opengis.net/def/rel/ogc/1.0/conformance",j.json);if(null==l)throw new o.A("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:a,customParameters:u,signal:c}=t,d=(0,s.s2)(l.href,i),{data:f}=await(0,r.A)(d,{signal:c,headers:{accept:j.json},query:{...u,token:a}});return f}async function P(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{apiKey:n,customParameters:o,signal:i}=t,{data:s}=await(0,r.A)(e,{signal:i,headers:{accept:j.json},query:{...o,token:n}});return s.url=e,s}async function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{links:n,url:o}=e,i=D(n,"service-desc",j.openapi);if(null==i)return w().warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:l,customParameters:a,signal:u}=t,c=(0,s.s2)(i.href,o),{data:d}=await(0,r.A)(c,{signal:u,headers:{accept:j.openapi},query:{...a,token:l}});return d}function x(e){const t=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e),n=t?.groups;if(!n)return null;const{authority:r,code:o}=n;switch(r.toLowerCase()){case"ogc":switch(o.toLowerCase()){case"crs27":return h.A.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return h.A.WGS84.wkid;default:return null}case"esri":case"epsg":{const e=Number.parseInt(o,10);return Number.isNaN(e)?null:e}default:return null}}async function N(e,t,n){const r=await $(e,t,n);return(0,u.ZF)(r)}async function $(e,t,n){const{collection:{links:i,landingPage:{url:f}},layerDefinition:m,maxRecordCount:g,queryParameters:{apiKey:w,customParameters:b},spatialReference:F,supportedCrs:A}=e,T=D(i,"items",j.geojson)||D(i,"http://www.opengis.net/def/rel/ogc/1.0/items",j.geojson);if(null==T)throw new o.A("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:I,num:S,start:k,timeExtent:v,where:P}=t;if(t.objectIds)throw new o.A("ogc-feature-layer:query-by-objectids-not-supported","Queries with object ids are not supported");const C=h.A.fromJSON(F),x=t.outSpatialReference??C,N=x.isWGS84?null:G(x,A),$=O(I,A),M=function(e){if(null==e)return null;const{start:t,end:n}=e;return`${null!=t?t.toISOString():".."}/${null!=n?n.toISOString():".."}`}(v),q=null!=(Q=P)&&Q&&"1=1"!==Q?Q:null,R=S??(null==k?g:10),W=0===k?void 0:k,{fields:Z,geometryType:U,hasZ:E,objectIdField:L,paginationParameter:B}=m,J=(0,s.s2)(T.href,f),{data:z}=await(0,r.A)(J,{...n,query:{...b,...$,crs:N,datetime:M,query:q,limit:R,[B]:W,token:w},headers:{accept:j.geojson}}),K=(0,d.bd)(z,{geometryType:U,hasZ:E,objectIdField:L}),_=K.length===R&&!!D(z.links??[],"next",j.geojson),H=new y.A(Z);var Q;for(const r of K){const e={};(0,p.MB)(H,e,r.attributes),e[L]=r.attributes[L],r.attributes=e}if(!N&&x.isWebMercator)for(const r of K)if(null!=r.geometry&&null!=U){const e=(0,u.zv)(r.geometry,U,E,!1);e.spatialReference=h.A.WGS84,r.geometry=(0,u.Ux)((0,a.Cv)(e,x))}for(const r of K)r.objectId=r.attributes[L];const V=N||!N&&x.isWebMercator?x.toJSON():l.KK,X=new c.A;return X.exceededTransferLimit=_,X.features=K,X.fields=Z,X.geometryType=U,X.hasZ=E,X.objectIdFieldName=L,X.spatialReference=V,X}function G(e,t){const{isWebMercator:n,wkid:r}=e;if(!r)return null;const o=n?t[3857]??t[102100]??t[102113]??t[900913]:t[e.wkid];return o?`${A}${o}`:null}function M(e){if(null==e)return"";const{xmin:t,ymin:n,xmax:r,ymax:o}=e;return`${t},${n},${r},${o}`}function O(e,t){if(!function(e){return null!=e&&"extent"===e.type}(e))return null;const{spatialReference:n}=e;if(!n||n.isWGS84)return{bbox:M(e)};const r=G(n,t);return null!=r?{bbox:M(e),"bbox-crs":r}:n.isWebMercator?{bbox:M((0,a.Cv)(e,h.A.WGS84))}:null}function q(e){const t=e.extent?.spatial;if(!t)return null;const n=t.bbox[0],r=4===n.length,[o,i]=n,s=r?void 0:n[2];return{xmin:o,ymin:i,xmax:r?n[2]:n[3],ymax:r?n[3]:n[4],zmin:s,zmax:r?void 0:n[5],spatialReference:h.A.WGS84.toJSON()}}function D(e,t,n){return e.find((e=>{let{rel:r,type:o}=e;return r===t&&o===n}))??e.find((e=>{let{rel:n,type:r}=e;return n===t&&!r}))}function R(e,t,n){if(!n)return;const r=D(n,"next",j.geojson),o=(0,s.An)(r?.href)?.query;if(!o)return;const i=(0,s.An)(e).query,l=Object.keys(i??{}),a=Object.entries(o).filter((e=>{let[t]=e;return!l.includes(t)})).find((e=>{let[n,r]=e;return F.has(n.toLowerCase())&&Number.parseInt(r,10)===t})),u=a?.[0];return u}(I=j||(j={})).json="application/json",I.geojson="application/geo+json",I.openapi="application/vnd.oai.openapi+json;version=3.0"}}]);
//# sourceMappingURL=6799.3a0a9524.chunk.js.map