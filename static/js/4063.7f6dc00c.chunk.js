"use strict";(self.webpackChunksc_compile=self.webpackChunksc_compile||[]).push([[4063],{94063:(t,r,e)=>{e.r(r),e.d(r,{default:()=>A});var a=e(18690),n=e(78393),u=e(60008),o=e(4336),f=e(20664),i=e(83755),s=e(13312),l=e(45308),b=e(71869),c=e(59231);class p{transform(t){const r=this._transform(t),e=[r.points.buffer,r.rgb.buffer];null!=r.pointIdFilterMap&&e.push(r.pointIdFilterMap.buffer);for(const a of r.attributes)"buffer"in a.values&&(0,n.mw)(a.values.buffer)&&a.values.buffer!==r.rgb.buffer&&e.push(a.values.buffer);return Promise.resolve({result:r,transferList:e})}_transform(t){const r=(0,b.RC)(t.schema,t.geometryBuffer);let e=r.length/3,n=null;const u=new Array,o=(0,b.jy)(t.primaryAttributeData,r,e);null!=t.primaryAttributeData&&o&&u.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:o});const f=(0,b.jy)(t.modulationAttributeData,r,e);null!=t.modulationAttributeData&&f&&u.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:f});let i=(0,b.bh)(t.rendererInfo,o,f,e);if(t.filterInfo&&t.filterInfo.length>0&&null!=t.filterAttributesData){const o=t.filterAttributesData.filter(a.Ru).map((t=>{const a=(0,b.jy)(t,r,e),n={attributeInfo:t.attributeInfo,values:a};return u.push(n),n}));n=new Uint32Array(e),e=(0,b.$i)(r,i,n,t.filterInfo,o)}for(const a of t.userAttributesData){const t=(0,b.jy)(a,r,e);u.push({attributeInfo:a.attributeInfo,values:t})}3*e<i.length&&(i=new Uint8Array(i.buffer.slice(0,3*e))),function(t,r,e){if(0!==e)for(let a=0;a<r;a++)t[3*a+2]+=e}(r,e,t.elevationOffset);const l=h(r,e,c.ab.fromData(t.obbData),s.A.fromJSON(t.inSR),s.A.fromJSON(t.outSR));return{obbData:t.obbData,points:l,rgb:i,attributes:u,pointIdFilterMap:n}}}function h(t,r,e,a,n){if(!(0,l.projectBuffer)(t,a,0,t,n,0,r))throw new Error("Can't reproject");const o=(0,i.o8)(e.center),s=(0,i.vt)(),b=(0,i.vt)(),c=(0,i.o8)(e.halfSize);(0,u.Xr)(m,e.quaternion);const p=new Float32Array(3*r);for(let u=0;u<r;u++){let r=3*u;s[0]=t[r]-o[0],s[1]=t[r+1]-o[1],s[2]=t[r+2]-o[2],(0,f.u)(b,s,m),c[0]=Math.max(c[0],Math.abs(b[0])),c[1]=Math.max(c[1],Math.abs(b[1])),c[2]=Math.max(c[2],Math.abs(b[2])),p[r++]=s[0],p[r++]=s[1],p[r]=s[2]}return e.halfSize=c,p}const m=(0,o.vt)();function A(){return new p}}}]);
//# sourceMappingURL=4063.7f6dc00c.chunk.js.map