"use strict";(self.webpackChunksc_compile=self.webpackChunksc_compile||[]).push([[964],{20964:(e,t,a)=>{a.d(t,{save:()=>u,saveAs:()=>d});var r=a(97924),i=a(72945);const n="Image Service",o="imagery-layer-save",s="imagery-layer-save-as",l="imagery-tile-layer-save",c="imagery-tile-layer-save-as";function m(e){if("imagery"===e.type)return{isValid:!0};const{raster:t}=e,a="Function"===t?.datasetFormat?t.primaryRasters?.rasters[0]:t;return{isValid:"RasterTileServer"===a?.datasetFormat&&("Raster"===a.tileType||"Map"===a.tileType),errorMessage:"imagery tile layer should be created from a tiled image service."}}function p(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function y(e,t){const{parsedUrl:a,title:r,fullExtent:n}=e;t.url=a.path,t.title||=r;try{t.extent=await(0,i.sQ)(n)}catch{t.extent=void 0}(0,i.OM)(t,i.mm.METADATA),"imagery-tile"===e.type&&(0,i.LG)(t,i.mm.TILED_IMAGERY)}async function u(e,t){const a="imagery"===e.type?o:l;return(0,r.UN)({layer:e,itemType:n,validateLayer:m,createItemData:p,errorNamePrefix:a},t)}async function d(e,t,a){const i="imagery"===e.type?s:c;return(0,r.Uh)({layer:e,itemType:n,validateLayer:m,createItemData:p,errorNamePrefix:i,newItem:t,setItemProperties:y},a)}},97924:(e,t,a)=>{a.d(t,{UN:()=>g,Uh:()=>h});var r=a(50076),i=a(37888),n=a(65308),o=a(70652),s=a(79942),l=a(72945),c=a(65526),m=a(24907);async function p(e){const{layer:t,errorNamePrefix:a,validateLayer:i}=e;await t.load(),function(e,t,a){const i=a(e);if(!i.isValid)throw new r.A(`${t}:invalid-parameters`,i.errorMessage,{layer:e})}(t,a,i)}function y(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function u(e){const{item:t,errorNamePrefix:a,layer:i,validateItem:n}=e;if((0,c.X)(t),function(e){const{item:t,itemType:a,additionalItemType:i,errorNamePrefix:n,layer:o}=e,s=[a];if(i&&s.push(i),!s.includes(t.type)){const e=s.map((e=>`'${e}'`)).join(", ");throw new r.A(`${n}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:o})}}(e),n){const e=n(t);if(!e.isValid)throw new r.A(`${a}:invalid-parameters`,e.errorMessage,{layer:i})}}function d(e){const{layer:t,errorNamePrefix:a}=e,{portalItem:i}=t;if(!i)throw new r.A(`${a}:portal-item-not-set`,y(t,"requires the portalItem property to be set"));if(!i.loaded)throw new r.A(`${a}:portal-item-not-loaded`,y(t,"cannot be saved to a portal item that does not exist or is inaccessible"));u({...e,item:i})}function f(e){const{newItem:t,itemType:a}=e;let r=o.default.from(t);return r.id&&(r=r.clone(),r.id=null),r.type??=a,r.portal??=n.A.getDefault(),u({...e,item:r}),r}function w(e){return(0,s.m)(e,"portal-item")}async function v(e,t,a){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const r=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,m.c)(t,{errorName:"layer-write:unsupported"},a),r}function I(e){(0,l.LG)(e,l.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,a)=>a.indexOf(e)===t)))}async function g(e,t){const{layer:a,createItemData:r,createJSONContext:n,setItemProperties:o,saveResources:s,supplementalUnsupportedErrors:l}=e;await p(e),d(e);const c=a.portalItem,m=n?n(c):w(c),y=await v(a,m,{...t,supplementalUnsupportedErrors:l}),u=await r({layer:a,layerJSON:y},c);return await(o?.(a,c)),I(c),await c.update({data:u}),(0,i.v)(m),await(s?.(c,m)),c}async function h(e,t){const{layer:a,createItemData:r,createJSONContext:n,setItemProperties:o,saveResources:s,supplementalUnsupportedErrors:l}=e;await p(e);const c=f(e),m=n?n(c):w(c),y=await v(a,m,{...t,supplementalUnsupportedErrors:l}),u=await r({layer:a,layerJSON:y},c);return await o(a,c),I(c),await async function(e,t,a){const r=e.portal;await r.signIn(),await(r.user?.addItem({item:e,data:t,folder:a?.folder}))}(c,u,t),a.portalItem=c,(0,i.v)(m),await(s?.(c,m)),c}}}]);
//# sourceMappingURL=964.51ac4e10.chunk.js.map