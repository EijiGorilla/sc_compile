"use strict";(self.webpackChunksc_compile=self.webpackChunksc_compile||[]).push([[3391,5617],{35617:(e,t,n)=>{n.r(t),n.d(t,{hydratedAdapter:()=>u});var r=n(76797),a=n(66388),i=n(19247),c=n(65215),o=n(23701);const u={convertToGEGeometry:function(e,t){if(null==t)return null;let n="cache"in t?t.cache._geVersion:void 0;return null==n&&(n=e.convertJSONToGeometry(t),"cache"in t&&(t.cache._geVersion=n)),n},exportPoint:function(e,t,n){const r=e.hasZ(t),a=e.hasM(t),c=new i.A({x:e.getPointX(t),y:e.getPointY(t),spatialReference:n});return r&&(c.z=e.getPointZ(t)),a&&(c.m=e.getPointM(t)),c.cache._geVersion=t,c},exportPolygon:function(e,t,n){const r=new c.A({rings:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return r.cache._geVersion=t,r},exportPolyline:function(e,t,n){const r=new o.A({paths:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return r.cache._geVersion=t,r},exportMultipoint:function(e,t,n){const r=new a.A({hasZ:e.hasZ(t),hasM:e.hasM(t),points:e.exportPoints(t),spatialReference:n});return r.cache._geVersion=t,r},exportExtent:function(e,t,n){const a=e.hasZ(t),i=e.hasM(t),c=new r.A({xmin:e.getXMin(t),ymin:e.getYMin(t),xmax:e.getXMax(t),ymax:e.getYMax(t),spatialReference:n});if(a){const n=e.getZExtent(t);c.zmin=n.vmin,c.zmax=n.vmax}if(i){const n=e.getMExtent(t);c.mmin=n.vmin,c.mmax=n.vmax}return c.cache._geVersion=t,c}}},63391:(e,t,n)=>{n.r(t),n.d(t,{buffer:()=>S,changeDefaultSpatialReferenceTolerance:()=>Y,clearDefaultSpatialReferenceTolerance:()=>j,clip:()=>o,contains:()=>d,convexHull:()=>w,crosses:()=>s,cut:()=>u,densify:()=>C,difference:()=>R,disjoint:()=>A,distance:()=>f,equals:()=>l,extendedSpatialReferenceInfo:()=>c,flipHorizontal:()=>L,flipVertical:()=>b,generalize:()=>k,geodesicArea:()=>O,geodesicBuffer:()=>Z,geodesicDensify:()=>H,geodesicLength:()=>I,intersect:()=>M,intersectLinesToPoints:()=>X,intersects:()=>p,isSimple:()=>x,nearestCoordinate:()=>_,nearestVertex:()=>D,nearestVertices:()=>T,offset:()=>P,overlaps:()=>g,planarArea:()=>J,planarLength:()=>N,relate:()=>G,rotate:()=>E,simplify:()=>m,symmetricDifference:()=>v,touches:()=>h,union:()=>V,within:()=>y});var r=n(52612),a=n(35617);function i(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function c(e){return r.G.extendedSpatialReferenceInfo(e)}function o(e,t){return r.G.clip(a.hydratedAdapter,i(e),e,t)}function u(e,t){return r.G.cut(a.hydratedAdapter,i(e),e,t)}function d(e,t){return r.G.contains(a.hydratedAdapter,i(e),e,t)}function s(e,t){return r.G.crosses(a.hydratedAdapter,i(e),e,t)}function f(e,t,n){return r.G.distance(a.hydratedAdapter,i(e),e,t,n)}function l(e,t){return r.G.equals(a.hydratedAdapter,i(e),e,t)}function p(e,t){return r.G.intersects(a.hydratedAdapter,i(e),e,t)}function h(e,t){return r.G.touches(a.hydratedAdapter,i(e),e,t)}function y(e,t){return r.G.within(a.hydratedAdapter,i(e),e,t)}function A(e,t){return r.G.disjoint(a.hydratedAdapter,i(e),e,t)}function g(e,t){return r.G.overlaps(a.hydratedAdapter,i(e),e,t)}function G(e,t,n){return r.G.relate(a.hydratedAdapter,i(e),e,t,n)}function x(e){return r.G.isSimple(a.hydratedAdapter,i(e),e)}function m(e){return r.G.simplify(a.hydratedAdapter,i(e),e)}function w(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r.G.convexHull(a.hydratedAdapter,i(e),e,t)}function R(e,t){return r.G.difference(a.hydratedAdapter,i(e),e,t)}function v(e,t){return r.G.symmetricDifference(a.hydratedAdapter,i(e),e,t)}function M(e,t){return r.G.intersect(a.hydratedAdapter,i(e),e,t)}function V(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return r.G.union(a.hydratedAdapter,i(e),e,t)}function P(e,t,n,c,o,u){return r.G.offset(a.hydratedAdapter,i(e),e,t,n,c,o,u)}function S(e,t,n){let c=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return r.G.buffer(a.hydratedAdapter,i(e),e,t,n,c)}function Z(e,t,n,c,o,u){return r.G.geodesicBuffer(a.hydratedAdapter,i(e),e,t,n,c,o,u)}function _(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return r.G.nearestCoordinate(a.hydratedAdapter,i(e),e,t,n)}function D(e,t){return r.G.nearestVertex(a.hydratedAdapter,i(e),e,t)}function T(e,t,n,c){return r.G.nearestVertices(a.hydratedAdapter,i(e),e,t,n,c)}function z(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent?.center??null:null}function E(e,t,n){if(null==e)throw new q;const a=e.spatialReference;if(null==(n=n??z(e)))throw new q;const i=e.constructor.fromJSON(r.G.rotate(e,t,n));return i.spatialReference=a,i}function L(e,t){if(null==e)throw new q;const n=e.spatialReference;if(null==(t=t??z(e)))throw new q;const a=e.constructor.fromJSON(r.G.flipHorizontal(e,t));return a.spatialReference=n,a}function b(e,t){if(null==e)throw new q;const n=e.spatialReference;if(null==(t=t??z(e)))throw new q;const a=e.constructor.fromJSON(r.G.flipVertical(e,t));return a.spatialReference=n,a}function k(e,t,n,c){return r.G.generalize(a.hydratedAdapter,i(e),e,t,n,c)}function C(e,t,n){return r.G.densify(a.hydratedAdapter,i(e),e,t,n)}function H(e,t,n){let c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return r.G.geodesicDensify(a.hydratedAdapter,i(e),e,t,n,c)}function J(e,t){return r.G.planarArea(a.hydratedAdapter,i(e),e,t)}function N(e,t){return r.G.planarLength(a.hydratedAdapter,i(e),e,t)}function O(e,t,n){return r.G.geodesicArea(a.hydratedAdapter,i(e),e,t,n)}function I(e,t,n){return r.G.geodesicLength(a.hydratedAdapter,i(e),e,t,n)}function X(e,t){return r.G.intersectLinesToPoints(a.hydratedAdapter,i(e),e,t)}function Y(e,t){r.G.changeDefaultSpatialReferenceTolerance(e,t)}function j(e){r.G.clearDefaultSpatialReferenceTolerance(e)}class q extends Error{constructor(){super("Illegal Argument Exception")}}}}]);
//# sourceMappingURL=3391.b17b6b80.chunk.js.map