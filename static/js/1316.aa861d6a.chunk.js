"use strict";(self.webpackChunksc_compile=self.webpackChunksc_compile||[]).push([[1316],{51344:(e,t,n)=>{function r(e){return null!=s(e)||null!=a(e)}function o(e){return u.test(e)}function i(e){return s(e)??a(e)}function a(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(c&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,r=0;for(;!t&&r<=e.length;)t=!l.test(e[r]),r++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function s(e){const t=u.exec(e);if(!t?.groups)return null;const n=t.groups,r=+n.year,o=+n.month-1,i=+n.day,a=+(n.hours??"0"),s=+(n.minutes??"0"),l=+(n.seconds??"0");if(a>23)return null;if(s>59)return null;if(l>59)return null;const c=n.ms??"0",p=c?+c.padEnd(3,"0").substring(0,3):0;let f;if(n.isUTC||!n.offsetSign)f=Date.UTC(r,o,i,a,s,l,p);else{const e=+n.offsetHours,t=+n.offsetMinutes;f=6e4*("+"===n.offsetSign?-1:1)*(60*e+t)+Date.UTC(r,o,i,a,s,l,p)}return Number.isNaN(f)?null:f}n.d(t,{Br:()=>o,Cq:()=>r,_U:()=>i});const u=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const l=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,c=!Number.isNaN(new Date("technology 10").getTime())},10907:(e,t,n)=>{n.d(t,{BM:()=>x,bd:()=>P,sO:()=>A,xD:()=>c});var r=n(51344),o=n(50076),i=n(80963),a=n(20176),s=n(1484),u=n(53430);const l={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function c(e){return l[e]}function*p(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*f(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function d(e){for(const t of e)if(t.length>2)return!0;return!1}function y(e){let t=0;for(let n=0;n<e.length;n++){const r=e[n],o=e[(n+1)%e.length];t+=r[0]*o[1]-o[0]*r[1]}return t<=0}function m(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function g(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return b(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const r of t.coordinates)b(e,r,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const r of t.coordinates){w(e,r[0],n);for(let t=1;t<r.length;t++)h(e,r[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return S(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const r=t.coordinates;w(e,r[0],n);for(let o=1;o<r.length;o++)h(e,r[o],n);return e}(e,t,n)}}function w(e,t,n){const r=m(t);!function(e){return!y(e)}(r)?b(e,r,n):T(e,r,n)}function h(e,t,n){const r=m(t);!function(e){return y(e)}(r)?b(e,r,n):T(e,r,n)}function b(e,t,n){for(const r of t)S(e,r,n);e.lengths.push(t.length)}function T(e,t,n){for(let r=t.length-1;r>=0;r--)S(e,t[r],n);e.lengths.push(t.length)}function S(e,t,n){const[r,o,i]=t;e.coords.push(r,o),n.hasZ&&e.coords.push(i||0)}function F(e){switch(typeof e){case"string":return(0,r.Br)(e)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function A(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4326;if(!e)throw new o.A("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new o.A("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:n}=e;if(!n)return;const r="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,a=(0,i.oT)({wkid:t})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${t})$`,"i");if(!r||!a.test(r))throw new o.A("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function x(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=[],r=new Set,o=new Set;let i,a=!1,s=null,l=!1,{geometryType:y=null}=t,m=!1;for(const w of p(e)){const{geometry:e,properties:t,id:p}=w;if((!e||(y||(y=c(e.type)),c(e.type)===y))&&(a||(a=d(f(e))),l||(l=null!=p,l&&(i=typeof p,t&&(s=Object.keys(t).filter((e=>t[e]===p))))),t&&s&&l&&null!=p&&(s.length>1?s=s.filter((e=>t[e]===p)):1===s.length&&(s=t[s[0]]===p?s:[])),!m&&t)){let e=!0;for(const i in t){if(r.has(i))continue;const a=t[i];if(null==a){e=!1,o.add(i);continue}const s=F(a);if("unknown"===s){o.add(i);continue}o.delete(i),r.add(i);const l=(0,u.rS)(i);l&&n.push({name:l,alias:i,type:s})}m=e}}const g=(0,u.rS)(1===s?.length&&s[0]||null)??void 0;if(g)for(const c of n)if(c.name===g&&(0,u.WA)(c)){c.type="esriFieldTypeOID";break}return{fields:n,geometryType:y,hasZ:a,objectIdFieldName:g,objectIdFieldType:i,unknownFields:Array.from(o)}}function P(e,t){return Array.from(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function*(){const{geometryType:n,objectIdField:r}=t;for(const o of e){const{geometry:e,properties:i,id:u}=o;if(e&&c(e.type)!==n)continue;const l=i||{};let p;r&&(p=l[r],null==u||p||(l[r]=p=u));const f=new a.Om(e?g(new s.A,e,t):null,l,null,p??void 0);yield f}}()}(p(e),t))}},11316:(e,t,n)=>{n.d(t,{E:()=>W,Fu:()=>R,O8:()=>D,UH:()=>q,YW:()=>O,i5:()=>b,mG:()=>I,x$:()=>V});n(35238);var r=n(3825),o=n(50076),i=n(85361),a=n(90534),s=n(9624),u=n(80963),l=n(31608),c=n(10907),p=n(83497),f=n(13096),d=n(44135),y=n(53430),m=n(76797),g=n(13312);const w="xlink:href",h="2.0.0",b="__esri_wfs_id__",T="wfs-layer:getWFSLayerTypeInfo-error",S="wfs-layer:empty-service",F="wfs-layer:feature-type-not-found",A="wfs-layer:geojson-not-supported",x="wfs-layer:kvp-encoding-not-supported",P="wfs-layer:malformed-json",C="wfs-layer:unknown-geometry-type",k="wfs-layer:unknown-field-type",N="wfs-layer:unsupported-spatial-reference",E="wfs-layer:unsupported-wfs-version";async function R(e,t){const n=function(e){const t=X(e);(function(e){const t=e.firstElementChild?.getAttribute("version");if(t&&t!==h)throw new o.A(E,`Unsupported WFS version ${t}. Supported version: ${h}`)})(t),z(t);const n=t.firstElementChild,r=(0,i.PP)(function(e){return(0,p.i)(e,{FeatureTypeList:{FeatureType:e=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},n=new Set;return(0,p.p)(e,{Name:e=>{const{name:n,prefix:r}=Y(e.textContent);t.typeName=`${r}:${n}`,t.name=n,t.namespacePrefix=r,t.namespaceUri=e.lookupNamespaceURI(r)},Abstract:e=>{t.description=e.textContent},Title:e=>{t.title=e.textContent},WGS84BoundingBox:e=>{t.extent=m.A.fromJSON(function(e){let t,n,r,o;for(const i of e.children)switch(i.localName){case"LowerCorner":[t,n]=i.textContent.split(" ").map((e=>Number.parseFloat(e)));break;case"UpperCorner":[r,o]=i.textContent.split(" ").map((e=>Number.parseFloat(e)))}return{xmin:t,ymin:n,xmax:r,ymax:o,spatialReference:u.KK}}(e))},DefaultCRS:e=>{const r=j(e);r&&(t.defaultSpatialReference=r,n.add(r))},OtherCRS:e=>{const t=j(e);t&&n.add(t)}}),t.title||(t.title=t.name),n.add(4326),t.supportedSpatialReferences.push(...n),t}}})}(n));return{operations:M(n),get featureTypes(){return Array.from(r())},readFeatureTypes:r}}((await(0,r.A)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:h,...t?.customParameters},signal:t?.signal})).data);return function(e,t){(0,a.m3)(e)&&((0,a.FX)(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=(0,a.lM)(t.operations.DescribeFeatureType.url)),(0,a.FX)(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=(0,a.lM)(t.operations.GetFeature.url)))}(e,n),n}const v=["json","application/json","geojson","application/json; subtype=geojson","application/geo+json"];function G(e){for(const t of v){const n=e.findIndex((e=>e.toLowerCase()===t));if(n>=0)return e[n]}return null}function M(e){let t=!1;const n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}},r=[],i=[];if((0,p.p)(e,{OperationsMetadata:{Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:e=>{let{textContent:t}=e;t&&r.push(t)}}}},Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:e=>{n.GetCapabilities.url=e.getAttribute(w)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:e=>{n.DescribeFeatureType.url=e.getAttribute(w)}}}};case"GetFeature":return{DCP:{HTTP:{Get:e=>{n.GetFeature.url=e.getAttribute(w)}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:e=>{let{textContent:t}=e;t&&i.push(t)}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:e=>{t="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:e=>{n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),n.GetFeature.outputFormat=G(i)??G(r),!t)throw new o.A(x,"WFS service doesn't support key/value pair (KVP) encoding");if(null==n.GetFeature.outputFormat)throw new o.A(A,"WFS service doesn't support GeoJSON output format");return n}function j(e){const t=parseInt(e.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??"",10);if(!Number.isNaN(t))return t}function I(e,t,n){return(0,i.I6)(e,(e=>n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t))}async function D(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{featureType:i,extent:a}=await async function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i=e.readFeatureTypes(),a=t?I(i,t,n):i.next().value,{spatialReference:l=new g.A({wkid:a?.defaultSpatialReference})}=r;if(null==a)throw t?new o.A(F,`The type '${t}' could not be found in the service`):new o.A(S,"The service is empty");let c=a.extent;if(c&&!(0,u.aI)(c.spatialReference,l))try{await(0,s.initializeProjection)(c.spatialReference,l,void 0,r),c=(0,s.project)(c,l)}catch{throw new o.A(N,"Projection not supported")}return{extent:c,spatialReference:l,featureType:a}}(e,t,n,r),{spatialReference:l}=q(e.operations.GetFeature.url,i,r.spatialReference),{fields:c,geometryType:p,swapXY:f,objectIdField:d,geometryField:y}=await async function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{typeName:i}=t,[a,s]=await Promise.allSettled([$(e.operations.DescribeFeatureType.url,i,r),U(e,i,n,r)]),u=e=>new o.A(T,`An error occurred while getting info about the feature type '${i}'`,{error:e});if("rejected"===a.status)throw u(a.reason);if("rejected"===s.status)throw u(s.reason);const{fields:l,errors:c}=a.value??{},p=a.value?.geometryType||s.value?.geometryType,f=s.value?.swapXY??!1;if(null==p)throw new o.A(C,`The geometry type could not be determined for type '${i}`,{typeName:i,geometryType:p,fields:l,errors:c});return{...O(l??[]),geometryType:p,swapXY:f}}(e,i,l,r);return{url:e.operations.GetCapabilities.url,name:i.name,namespaceUri:i.namespaceUri,fields:c,geometryField:y,geometryType:p,objectIdField:d,spatialReference:r.spatialReference??new g.A({wkid:i.defaultSpatialReference}),extent:a,swapXY:f,wfsCapabilities:e,customParameters:r.customParameters}}function O(e){const t=e.find((e=>"geometry"===e.type));let n=e.find((e=>"oid"===e.type));return e=e.filter((e=>"geometry"!==e.type)),n||(n=new d.A({name:b,type:"oid",alias:b}),e.unshift(n)),{geometryField:t?.name??null,objectIdField:n.name,fields:e}}async function U(e,t,n){let o,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=!1;const[s,u]=await Promise.all([V(e.operations.GetFeature.url,t,n,e.operations.GetFeature.outputFormat,{...i,count:1}),(0,r.A)(e.operations.GetFeature.url,{responseType:"text",query:_(t,n,void 0,{...i,count:1}),signal:i?.signal})]),p="FeatureCollection"===s.type&&s.features[0]?.geometry;if(p){let e;switch(o=l.g.fromJSON((0,c.xD)(p.type)),p.type){case"Point":e=p.coordinates;break;case"LineString":case"MultiPoint":e=p.coordinates[0];break;case"MultiLineString":case"Polygon":e=p.coordinates[0][0];break;case"MultiPolygon":e=p.coordinates[0][0][0]}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(u.data);if(t){const n=e[0].toFixed(3),r=e[1].toFixed(3),o=parseFloat(t[1]).toFixed(3);n===parseFloat(t[2]).toFixed(3)&&r===o&&(a=!0)}}return{geometryType:o,swapXY:a}}async function $(e,t,n){return function(e,t){const{name:n}=Y(e),r=X(t);z(r);const a=(0,i.I6)((0,p.i)(r.firstElementChild,{element:e=>e}),(e=>e.getAttribute("name")===n));if(null!=a){const e=a.getAttribute("type"),t=e?(0,i.I6)((0,p.i)(r.firstElementChild,{complexType:e=>e}),(t=>t.getAttribute("name")===Y(e).name)):(0,i.I6)((0,p.i)(a,{complexType:e=>e}),(()=>!0));if(t)return function(e){const t=[],n=[];let r;const i=(0,p.i)(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const a of i){const i=a.getAttribute("name");if(!i)continue;let s,u;if(a.hasAttribute("type")?s=Y(a.getAttribute("type")).name:(0,p.p)(a,{simpleType:{restriction:e=>(s=Y(e.getAttribute("base")).name,{maxLength:e=>{u=+e.getAttribute("value")}})}}),!s)continue;const l="true"===a.getAttribute("nillable");let c=!1;switch(s.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":n.push(new d.A({name:i,alias:i,type:"integer",nullable:l,length:(0,y._b)("integer")}));break;case"float":case"double":case"decimal":n.push(new d.A({name:i,alias:i,type:"double",nullable:l,length:(0,y._b)("double")}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":n.push(new d.A({name:i,alias:i,type:"string",nullable:l,length:u??(0,y._b)("string")}));break;case"datetime":case"date":n.push(new d.A({name:i,alias:i,type:"date",nullable:l,length:u??(0,y._b)("date")}));break;case"pointpropertytype":r="point",c=!0;break;case"multipointpropertytype":r="multipoint",c=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":r="polyline",c=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":r="polygon",c=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":c=!0,t.push(new o.A(C,`geometry type '${s}' is not supported`,{type:(new XMLSerializer).serializeToString(e)}));break;default:t.push(new o.A(k,`Unknown field type '${s}'`,{type:(new XMLSerializer).serializeToString(e)}))}c&&n.push(new d.A({name:i,alias:i,type:"geometry",nullable:l}))}for(const o of n)if("integer"===o.type&&!o.nullable&&L.has(o.name.toLowerCase())){o.type="oid";break}return{geometryType:r,fields:n,errors:t}}(t)}throw new o.A(F,`Type '${e}' not found in document`,{document:(new XMLSerializer).serializeToString(r)})}(t,(await(0,r.A)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:h,TYPENAME:t,TYPENAMES:t,...n?.customParameters},signal:n?.signal})).data)}const L=new Set(["objectid","fid"]);async function V(e,t,n,i,a){let{data:s}=await(0,r.A)(e,{responseType:"text",query:_(t,n,i,a),signal:a?.signal});s=s.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{return JSON.parse(s)}catch(u){throw new o.A(P,"Error while parsing the\xa0response",{response:s,error:u})}}function _(e,t,n,r){const o="number"==typeof t?t:t.wkid;return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:h,TYPENAMES:e,OUTPUTFORMAT:n,SRSNAME:"EPSG:"+o,STARTINDEX:r?.startIndex,COUNT:r?.count,...r?.customParameters}}async function W(e,t,n){const o=await(0,r.A)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:h,TYPENAMES:t,RESULTTYPE:"hits",...n?.customParameters},signal:n?.signal}),i=/numberMatched=["'](?<numberMatched>\d+)["']/gi.exec(o.data);if(i?.groups)return+i.groups.numberMatched}function X(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function Y(e){const[t,n]=e.split(":");return{prefix:n?t:"",name:n??t}}function z(e){let t="",n="";if((0,p.p)(e.firstElementChild,{Exception:e=>(t=e.getAttribute("exceptionCode"),{ExceptionText:e=>{n=e.textContent}})}),t)throw new o.A(`wfs-layer:${t}`,n)}function q(e,t,n){const r={wkid:t.defaultSpatialReference},o=null!=n?.wkid?{wkid:n.wkid}:r;return{spatialReference:o,getFeatureSpatialReference:(0,f.Fi)(e)||o.wkid&&t.supportedSpatialReferences.includes(o.wkid)?{wkid:o.wkid}:{wkid:t.defaultSpatialReference}}}},83497:(e,t,n)=>{function r(e,t){if(e&&t)for(const n of e.children)if(n.localName in t){const e=t[n.localName];if("function"==typeof e){const t=e(n);t&&r(n,t)}else r(n,e)}}function*o(e,t){for(const n of e.children)if(n.localName in t){const e=t[n.localName];"function"==typeof e?yield e(n):yield*o(n,e)}}n.d(t,{i:()=>o,p:()=>r})}}]);
//# sourceMappingURL=1316.aa861d6a.chunk.js.map