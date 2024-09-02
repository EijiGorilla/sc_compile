"use strict";(self.webpackChunksc_compile=self.webpackChunksc_compile||[]).push([[765],{10765:(e,t,a)=>{a.d(t,{save:()=>O,saveAs:()=>P});var r=a(18690),n=(a(50076),a(97924)),s=a(13096),o=a(11668),i=a(31933),l=a(62487),c=a(72945);const u="Feature Service",y="feature-layer-utils",f=`${y}-save`,d=`${y}-save-as`;function p(e){return{isValid:(0,i.W_)(e)&&("feature"!==e.type||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function m(e){const t=[],a=[];for(const{layer:r,layerJSON:n}of e)r.isTable?a.push(n):t.push(n);return{layers:t,tables:a}}function w(e){return m([e])}async function h(e,t){return/\/\d+\/?$/.test(e.url)?w(t[0]):v(t,e)}async function v(e,t){if(e.reverse(),!t)return m(e);const a=await async function(e,t){let a=await e.fetchData("json");if(function(e){return!!(e&&Array.isArray(e.layers)&&Array.isArray(e.tables))}(a))return a;a||={},function(e){e.layers||=[],e.tables||=[]}(a);const{layer:{url:r,customParameters:n,apiKey:s}}=t[0];return await async function(e,t,a){const{url:r,customParameters:n,apiKey:s}=t,{serviceJSON:i,layersJSON:c}=await(0,o.Q)(r,{customParameters:n,apiKey:s}),u=L(e.layers,i.layers,a),y=L(e.tables,i.tables,a);e.layers=u.itemResources,e.tables=y.itemResources;const f=[...u.added,...y.added],d=c?[...c.layers,...c.tables]:[];await async function(e,t,a,r){const n=await async function(e){const t=[];e.forEach((e=>{let{type:a}=e;const r=(0,o.K)(a),n=l.S[r];t.push(n())}));const a=await Promise.all(t),r=new Map;return e.forEach(((e,t)=>{let{type:n}=e;r.set(n,a[t])})),r}(t),s=t.map((e=>{let{id:t,type:s}=e;return new(n.get(s))({url:a,layerId:t,sourceJSON:r.find((e=>{let{id:a}=e;return a===t}))})}));await Promise.allSettled(s.map((e=>e.load()))),s.forEach((t=>{const{layerId:a,loaded:r,defaultPopupTemplate:n}=t;if(!r||null==n)return;const s={id:a,popupInfo:n.toJSON()};"ArcGISFeatureLayer"!==t.operationalLayerType&&(s.layerType=t.operationalLayerType),S(t,s,e)}))}(e,f,r,d)}(a,{url:r??"",customParameters:n,apiKey:s},t.map((e=>e.layer.layerId))),a}(t,e);for(const r of e)S(r.layer,r.layerJSON,a);return function(e,t){const a=[],r=[];for(const{layer:n}of t){const{isTable:e,layerId:t}=n;e?r.push(t):a.push(t)}b(e.layers,a),b(e.tables,r)}(a,e),a}function b(e,t){if(e.length<2)return;const a=[];for(const{id:r}of e)a.push(r);(0,r.aI)(a.sort(I),t.slice().sort(I))&&e.sort(((e,a)=>{const r=t.indexOf(e.id),n=t.indexOf(a.id);return r<n?-1:r>n?1:0}))}function I(e,t){return e<t?-1:e>t?1:0}function L(e,t,a){const n=(0,r.iv)(e,t,((e,t)=>e.id===t.id));e=e.filter((e=>!n.removed.some((t=>t.id===e.id))));const s=n.added;return s.forEach((t=>{let{id:a}=t;e.push({id:a})})),{itemResources:e,added:s.filter((e=>{let{id:t}=e;return!a.includes(t)}))}}function S(e,t,a){e.isTable?N(a.tables,t):N(a.layers,t)}function N(e,t){const a=e.findIndex((e=>{let{id:a}=e;return a===t.id}));-1===a?e.push(t):e[a]=t}async function T(e,t){const{url:a,layerId:r,title:n,fullExtent:o,isTable:i}=e,l=(0,s.qg)(a);t.url=("FeatureServer"===l?.serverType?a:`${a}/${r}`)??null,t.title||=n,t.extent=null,i||null==o||(t.extent=await(0,c.sQ)(o)),(0,c.OM)(t,c.mm.METADATA),(0,c.OM)(t,c.mm.MULTI_LAYER),(0,c.LG)(t,c.mm.SINGLE_LAYER),i&&(0,c.LG)(t,c.mm.TABLE)}async function O(e,t){return(0,n.UN)({layer:e,itemType:u,validateLayer:p,createItemData:(e,t)=>h(t,[e]),errorNamePrefix:f},t)}async function P(e,t,a){return(0,n.Uh)({layer:e,itemType:u,validateLayer:p,createItemData:(e,t)=>Promise.resolve(w(e)),errorNamePrefix:d,newItem:t,setItemProperties:T},a)}},97924:(e,t,a)=>{a.d(t,{UN:()=>b,Uh:()=>I});var r=a(50076),n=a(37888),s=a(65308),o=a(70652),i=a(79942),l=a(72945),c=a(65526),u=a(24907);async function y(e){const{layer:t,errorNamePrefix:a,validateLayer:n}=e;await t.load(),function(e,t,a){const n=a(e);if(!n.isValid)throw new r.A(`${t}:invalid-parameters`,n.errorMessage,{layer:e})}(t,a,n)}function f(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function d(e){const{item:t,errorNamePrefix:a,layer:n,validateItem:s}=e;if((0,c.X)(t),function(e){const{item:t,itemType:a,additionalItemType:n,errorNamePrefix:s,layer:o}=e,i=[a];if(n&&i.push(n),!i.includes(t.type)){const e=i.map((e=>`'${e}'`)).join(", ");throw new r.A(`${s}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:o})}}(e),s){const e=s(t);if(!e.isValid)throw new r.A(`${a}:invalid-parameters`,e.errorMessage,{layer:n})}}function p(e){const{layer:t,errorNamePrefix:a}=e,{portalItem:n}=t;if(!n)throw new r.A(`${a}:portal-item-not-set`,f(t,"requires the portalItem property to be set"));if(!n.loaded)throw new r.A(`${a}:portal-item-not-loaded`,f(t,"cannot be saved to a portal item that does not exist or is inaccessible"));d({...e,item:n})}function m(e){const{newItem:t,itemType:a}=e;let r=o.default.from(t);return r.id&&(r=r.clone(),r.id=null),r.type??=a,r.portal??=s.A.getDefault(),d({...e,item:r}),r}function w(e){return(0,i.m)(e,"portal-item")}async function h(e,t,a){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const r=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,u.c)(t,{errorName:"layer-write:unsupported"},a),r}function v(e){(0,l.LG)(e,l.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,a)=>a.indexOf(e)===t)))}async function b(e,t){const{layer:a,createItemData:r,createJSONContext:s,setItemProperties:o,saveResources:i,supplementalUnsupportedErrors:l}=e;await y(e),p(e);const c=a.portalItem,u=s?s(c):w(c),f=await h(a,u,{...t,supplementalUnsupportedErrors:l}),d=await r({layer:a,layerJSON:f},c);return await(o?.(a,c)),v(c),await c.update({data:d}),(0,n.v)(u),await(i?.(c,u)),c}async function I(e,t){const{layer:a,createItemData:r,createJSONContext:s,setItemProperties:o,saveResources:i,supplementalUnsupportedErrors:l}=e;await y(e);const c=m(e),u=s?s(c):w(c),f=await h(a,u,{...t,supplementalUnsupportedErrors:l}),d=await r({layer:a,layerJSON:f},c);return await o(a,c),v(c),await async function(e,t,a){const r=e.portal;await r.signIn(),await(r.user?.addItem({item:e,data:t,folder:a?.folder}))}(c,d,t),a.portalItem=c,(0,n.v)(u),await(i?.(c,u)),c}},11668:(e,t,a)=>{a.d(t,{K:()=>f,Q:()=>s});var r=a(67061);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function s(e,t){const{loadContext:a,...n}=t||{},s=a?await a.fetchServiceMetadata(e,n):await(0,r.V)(e,n);y(s),l(s);const o={serviceJSON:s};if((s.currentVersion??0)<10.5)return o;const i=`${e}/layers`,c=a?await a.fetchServiceMetadata(i,n):await(0,r.V)(i,n);return y(c),l(c),o.layersJSON={layers:c.layers,tables:c.tables},o}function o(e){const{type:t}=e;return!!t&&n.has(t)}function i(e){return"Table"===e.type}function l(e){e.layers=e.layers?.filter(o),e.tables=e.tables?.filter(i)}function c(e){e.type||="Feature Layer"}function u(e){e.type||="Table"}function y(e){e.layers?.forEach(c),e.tables?.forEach(u)}function f(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},67061:(e,t,a)=>{a.d(t,{V:()=>n});var r=a(3825);async function n(e,t){const{data:a}=await(0,r.A)(e,{responseType:"json",query:{f:"json",...t?.customParameters,token:t?.apiKey}});return a}}}]);
//# sourceMappingURL=765.1402f890.chunk.js.map