"use strict";(self.webpackChunksc_compile=self.webpackChunksc_compile||[]).push([[9119],{69119:(t,e,n)=>{n.r(e),n.d(e,{executeForTopIds:()=>u});var r=n(54994),o=n(10415),l=n(58672);async function u(t,e,n){const u=(0,r.Dl)(t);return(await(0,o.KW)(u,l.A.from(e),{...n})).data.objectIds}},10415:(t,e,n)=>{n.d(e,{$K:()=>m,KW:()=>p,Yb:()=>a,xs:()=>F});var r=n(3825),o=n(90534),l=n(19902),u=n(1438),i=n(80963),s=n(78238),d=n(57831);const y="Layer does not support extent calculation.";function c(t,e){const n=t.geometry,r=t.toJSON(),o=r;if(null!=n&&(o.geometry=JSON.stringify(n),o.geometryType=(0,l.$B)(n),o.inSR=(0,i.YX)(n.spatialReference)),r.topFilter?.groupByFields&&(o.topFilter.groupByFields=r.topFilter.groupByFields.join(",")),r.topFilter?.orderByFields&&(o.topFilter.orderByFields=r.topFilter.orderByFields.join(",")),r.topFilter&&(o.topFilter=JSON.stringify(o.topFilter)),r.objectIds&&(o.objectIds=r.objectIds.join(",")),r.orderByFields&&(o.orderByFields=r.orderByFields.join(",")),r.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?r.outFields.includes("*")?o.outFields="*":o.outFields=r.outFields.join(","):delete o.outFields,r.outSR?o.outSR=(0,i.YX)(r.outSR):n&&r.returnGeometry&&(o.outSR=o.inSR),r.returnGeometry&&delete r.returnGeometry,r.timeExtent){const t=r.timeExtent,{start:e,end:n}=t;null==e&&null==n||(o.time=e===n?e:`${e??"null"},${n??"null"}`),delete r.timeExtent}return o}async function a(t,e,n,r){const o=await f(t,e,"json",r);return(0,d.q)(e,n,o.data),o}async function p(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:f(t,e,"json",n,{returnIdsOnly:!0})}async function m(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:f(t,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(y);if(e.hasOwnProperty("count"))throw new Error(y);return t}))}function F(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):f(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function f(t,e,n){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const d="string"==typeof t?(0,o.An)(t):t,y=e.geometry?[e.geometry]:[];return l.responseType="json",(0,u.el)(y,null,l).then((t=>{const u=t?.[0];null!=u&&((e=e.clone()).geometry=u);const y=(0,s.z)({...d.query,f:n,...i,...c(e,i)});return(0,r.A)((0,o.fj)(d.path,"queryTopFeatures"),{...l,query:{...y,...l.query}})}))}}}]);
//# sourceMappingURL=9119.149b3654.chunk.js.map