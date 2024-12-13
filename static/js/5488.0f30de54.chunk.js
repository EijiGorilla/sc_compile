"use strict";(self.webpackChunksc_compile=self.webpackChunksc_compile||[]).push([[5488],{96111:(e,t,i)=>{i.d(t,{L:()=>m,b:()=>f});var n=i(34761),r=i(13191),s=i(19555),a=i(72745),l=i(31484),o=i(95756),c=i(21390),h=i(64839),d=i(43425),u=i(32307),p=i(66470);function f(e){const t=new u.N5;t.include(l.K,e);const{vertex:i,fragment:r}=t;i.uniforms.add(new d.X("modelView",((e,t)=>{let{camera:i}=t;return(0,n.Tl)(_,i.viewMatrix,e.origin)})),new d.X("proj",((e,t)=>{let{camera:i}=t;return i.projectionMatrix})),new c.m("glowWidth",((e,t)=>{let{camera:i}=t;return e.glowWidth*i.pixelRatio})),new o.G("pixelToNDC",((e,t)=>{let{camera:i}=t;return(0,s.hZ)(g,2/i.fullViewport[2],2/i.fullViewport[3])}))),t.attributes.add(p.r.START,"vec3"),t.attributes.add(p.r.END,"vec3"),e.spherical&&(t.attributes.add(p.r.START_UP,"vec3"),t.attributes.add(p.r.END_UP,"vec3")),t.attributes.add(p.r.EXTRUDE,"vec2"),t.varyings.add("uv","vec2"),t.varyings.add("vViewStart","vec3"),t.varyings.add("vViewEnd","vec3"),t.varyings.add("vViewSegmentNormal","vec3"),t.varyings.add("vViewStartNormal","vec3"),t.varyings.add("vViewEndNormal","vec3");const a=!e.spherical;return i.main.add(h.H`
    vec3 pos = mix(start, end, extrude.x);

    vec4 viewPos = modelView * vec4(pos, 1);
    vec4 projPos = proj * viewPos;
    vec2 ndcPos = projPos.xy / projPos.w;

    // in planar we hardcode the up vectors to be Z-up */
    ${(0,h.If)(a,h.H`vec3 startUp = vec3(0, 0, 1);`)}
    ${(0,h.If)(a,h.H`vec3 endUp = vec3(0, 0, 1);`)}

    // up vector corresponding to the location of the vertex, selecting either startUp or endUp */
    vec3 up = extrude.y * mix(startUp, endUp, extrude.x);
    vec3 viewUp = (modelView * vec4(up, 0)).xyz;

    vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
    vec2 projUp = normalize(projPosUp.xy / projPosUp.w - ndcPos);

    // extrude ndcPos along projUp to the edge of the screen
    vec2 lxy = abs(sign(projUp) - ndcPos);
    ndcPos += length(lxy) * projUp;

    vViewStart = (modelView * vec4(start, 1)).xyz;
    vViewEnd = (modelView * vec4(end, 1)).xyz;

    vec3 viewStartEndDir = vViewEnd - vViewStart;

    vec3 viewStartUp = (modelView * vec4(startUp, 0)).xyz;

    // the normal of the plane that aligns with the segment and the up vector
    vViewSegmentNormal = normalize(cross(viewStartUp, viewStartEndDir));

    // the normal orthogonal to the segment normal and the start up vector
    vViewStartNormal = -normalize(cross(vViewSegmentNormal, viewStartUp));

    // the normal orthogonal to the segment normal and the end up vector
    vec3 viewEndUp = (modelView * vec4(endUp, 0)).xyz;
    vViewEndNormal = normalize(cross(vViewSegmentNormal, viewEndUp));

    // Add enough padding in the X screen space direction for "glow"
    float xPaddingPixels = sign(dot(vViewSegmentNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
    ndcPos.x += xPaddingPixels * pixelToNDC.x;

    // uv is used to read back depth to reconstruct the position at the fragment
    uv = ndcPos * 0.5 + 0.5;

    gl_Position = vec4(ndcPos, 0, 1);
  `),r.uniforms.add(new c.m("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),r.code.add(h.H`float planeDistance(vec3 planeNormal, vec3 planeOrigin, vec3 pos) {
return dot(planeNormal, pos - planeOrigin);
}
float segmentDistancePixels(vec3 segmentNormal, vec3 startNormal, vec3 endNormal, vec3 pos, vec3 start, vec3 end) {
float distSegmentPlane = planeDistance(segmentNormal, start, pos);
float distStartPlane = planeDistance(startNormal, start, pos);
float distEndPlane = planeDistance(endNormal, end, pos);
float dist = max(max(distStartPlane, distEndPlane), abs(distSegmentPlane));
float width = fwidth(distSegmentPlane);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}`),r.main.add(h.H`fragColor = vec4(0.0);
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
return;
}
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
return;
}
float distance = segmentDistancePixels(
vViewSegmentNormal,
vViewStartNormal,
vViewEndNormal,
pos,
vViewStart,
vViewEnd
);
vec4 color = laserlineProfile(distance);
float alpha = (1.0 - smoothstep(0.995 - angleCutoffAdjust, 0.999 - angleCutoffAdjust, abs(dot(normal, vViewSegmentNormal))));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);`),t}const g=(0,a.vt)(),_=(0,r.vt)(),m=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}))},71467:(e,t,i)=>{i.d(t,{L:()=>R,b:()=>w,d:()=>E});var n=i(15941),r=i(19555),s=i(72745),a=i(20664),l=i(9392),o=i(43047),c=i(55855),h=i(44230),d=i(13927),u=i(78315),p=i(31484),f=i(73398),g=i(95756),_=i(5517),m=i(58350),v=i(21390),P=i(64839),b=i(32307);const E=(0,n.kU)(6);function w(e){const t=new b.N5;t.include(f.c),t.include(p.K,e);const i=t.fragment;if(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)if(i.uniforms.add(new v.m("maxPixelDistance",((t,i)=>e.heightManifoldEnabled?2*i.camera.computeScreenPixelSizeAt(t.heightManifoldTarget):2*i.camera.computeScreenPixelSizeAt(t.lineVerticalPlaneSegment.origin)))),i.code.add(P.H`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.spherical){const e=(e,t,i)=>(0,a.t)(e,t.heightManifoldTarget,i.camera.viewMatrix),t=(e,t)=>(0,a.t)(e,[0,0,0],t.camera.viewMatrix);i.uniforms.add(new m.E("heightManifoldOrigin",((i,n)=>(e(V,i,n),t(L,n),(0,a.d)(L,L,V),(0,a.n)(C,L),C[3]=(0,a.l)(L),C))),new _.t("globalOrigin",((e,i)=>t(V,i))),new v.m("cosSphericalAngleThreshold",((e,t)=>1-Math.max(2,(0,a.j)(t.camera.eye,e.heightManifoldTarget)*t.camera.perRenderPixelRatio)/(0,a.l)(e.heightManifoldTarget)))),i.code.add(P.H`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else i.code.add(P.H`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(e.pointDistanceEnabled&&(i.uniforms.add(new v.m("maxPixelDistance",((e,t)=>2*t.camera.computeScreenPixelSizeAt(e.pointDistanceTarget)))),i.code.add(P.H`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),e.intersectsLineEnabled&&(i.uniforms.add(new v.m("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),i.code.add(P.H`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&i.code.add(P.H`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),i.main.add(P.H`vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
fragColor = vec4(0.0);
return;
}
vec4 color = vec4(0.0);`),e.heightManifoldEnabled){i.uniforms.add(new g.G("angleCutoff",(e=>D(e))),new m.E("heightPlane",((e,t)=>x(e.heightManifoldTarget,e.renderCoordsHelper.worldUpAtPosition(e.heightManifoldTarget,V),t.camera.viewMatrix))));const t=e.spherical?P.H`normalize(globalOrigin - pos)`:P.H`heightPlane.xyz`;i.main.add(P.H`
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;
      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${t})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);`)}return e.pointDistanceEnabled&&(i.uniforms.add(new g.G("angleCutoff",(e=>D(e))),new m.E("pointDistanceSphere",((e,t)=>function(e,t){return(0,a.t)((0,u.a)(T),e.pointDistanceOrigin,t.camera.viewMatrix),T[3]=(0,a.j)(e.pointDistanceOrigin,e.pointDistanceTarget),T}(e,t)))),i.main.add(P.H`float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);`)),e.lineVerticalPlaneEnabled&&(i.uniforms.add(new g.G("angleCutoff",(e=>D(e))),new m.E("lineVerticalPlane",((e,t)=>function(e,t){const i=(0,h.sd)(e.lineVerticalPlaneSegment,.5,V),n=e.renderCoordsHelper.worldUpAtPosition(i,y),r=(0,a.n)(L,e.lineVerticalPlaneSegment.vector),s=(0,a.e)(V,n,r);return(0,a.n)(s,s),x(e.lineVerticalPlaneSegment.origin,s,t.camera.viewMatrix)}(e,t))),new _.t("lineVerticalStart",((e,t)=>function(e,t){const i=(0,a.c)(V,e.lineVerticalPlaneSegment.origin);return e.renderCoordsHelper.setAltitude(i,0),(0,a.t)(i,i,t.camera.viewMatrix)}(e,t))),new _.t("lineVerticalEnd",((e,t)=>function(e,t){const i=(0,a.g)(V,e.lineVerticalPlaneSegment.origin,e.lineVerticalPlaneSegment.vector);return e.renderCoordsHelper.setAltitude(i,0),(0,a.t)(i,i,t.camera.viewMatrix)}(e,t)))),i.main.add(P.H`if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}`)),e.intersectsLineEnabled&&(i.uniforms.add(new g.G("angleCutoff",(e=>D(e))),new _.t("intersectsLineStart",((e,t)=>(0,a.t)(V,e.lineStartWorld,t.camera.viewMatrix))),new _.t("intersectsLineEnd",((e,t)=>(0,a.t)(V,e.lineEndWorld,t.camera.viewMatrix))),new _.t("intersectsLineDirection",((e,t)=>((0,a.c)(C,e.intersectsLineSegment.vector),C[3]=0,(0,a.n)(V,(0,o.t)(C,C,t.camera.viewMatrix))))),new v.m("intersectsLineRadius",(e=>e.intersectsLineRadius))),i.main.add(P.H`if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}`)),i.main.add(P.H`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);`),t}function D(e){return(0,r.hZ)(S,Math.cos(e.angleCutoff),Math.cos(Math.max(0,e.angleCutoff-(0,n.kU)(2))))}function x(e,t,i){return(0,a.t)(A,e,i),(0,a.c)(C,t),C[3]=0,(0,o.t)(C,C,i),(0,d.O_)(A,C,M)}const S=(0,s.vt)(),V=(0,l.vt)(),C=(0,c.vt)(),y=(0,l.vt)(),L=(0,l.vt)(),A=(0,l.vt)(),M=(0,d.vt)(),T=(0,u.c)(),R=Object.freeze(Object.defineProperty({__proto__:null,build:w,defaultAngleCutoff:E},Symbol.toStringTag,{value:"Module"}))},1307:(e,t,i)=>{i.d(t,{o:()=>K});i(81806);var n=i(20664),r=i(9392),s=i(44230),a=i(69230),l=i(35143),o=i(30726),c=i(46053),h=(i(76460),i(47249),i(85842)),d=i(49595),u=i(4763),p=i(95925),f=i(64465),g=i(90364),_=i(36451),m=i(35202),v=i(44815),P=i(57481),b=i(48549),E=i(16506),w=i(59246),D=i(15941),x=i(64839),S=i(71467);class V extends x.Y{constructor(){super(...arguments),this.innerColor=(0,r.fA)(1,1,1),this.innerWidth=1,this.glowColor=(0,r.fA)(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=(0,D.kU)(6),this.pointDistanceOrigin=(0,r.vt)(),this.pointDistanceTarget=(0,r.vt)(),this.lineVerticalPlaneSegment=(0,s.vt)(),this.intersectsLineSegment=(0,s.vt)(),this.intersectsLineRadius=3,this.heightManifoldTarget=(0,r.vt)(),this.lineStartWorld=(0,r.vt)(),this.lineEndWorld=(0,r.vt)()}}class C extends w.w{constructor(e,t,n){super(e,t,new E.$(S.L,(()=>i.e(1877).then(i.bind(i,51877)))),n)}}var y=i(66470),L=i(96111);class A extends V{constructor(){super(...arguments),this.origin=(0,r.vt)()}}class M extends w.w{constructor(e,t,n){super(e,t,new E.$(L.L,(()=>i.e(7657).then(i.bind(i,37657)))),n,T)}}const T=new Map([[y.r.START,0],[y.r.END,1],[y.r.EXTRUDE,2],[y.r.START_UP,3],[y.r.END_UP,4]]);var R=i(69008),U=i(76718),I=i(93345);class z{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=(0,r.vt)(),this._dirty=!1,this._count=0,this._vao=null}set vertices(e){const t=(0,v.jh)(3*e.length);let i=0;for(const n of e)t[i++]=n[0],t[i++]=n[1],t[i++]=n[2];this.buffers=[t]}set buffers(e){if(this._buffers=e,this._buffers.length>0){const e=this._buffers[0],t=3*Math.floor(e.length/3/2);(0,n.i)(this._origin,e[t],e[t+1],e[t+2])}else(0,n.i)(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(e){const t=this._ensureVAO(e);null!=t&&(e.bindVAO(t),e.drawArrays(I.WR.TRIANGLES,0,this._count))}dispose(){null!=this._vao&&this._vao.dispose()}get _layout(){return this._renderCoordsHelper.viewingMode===f.RT.Global?N:j}_ensureVAO(e){return null==this._buffers?null:(this._vao??=this._createVAO(e,this._buffers),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,t){const i=this._createDataBuffer(t);return this._dirty=!1,new R.Z(e,T,new Map([["data",(0,P.U)(this._layout)]]),new Map([["data",U.g.createVertex(e,I._U.STATIC_DRAW,i)]]))}_ensureVertexData(e,t){if(!this._dirty)return;const i=this._createDataBuffer(t);e.vertexBuffers.get("data")?.setData(i),this._dirty=!1}_createDataBuffer(e){const t=e.reduce(((e,t)=>e+O(t)),0);this._count=t;const i=this._layout.createBuffer(t),r=this._origin;let s=0,a=0;const l="startUp"in i?this._setUpVectors.bind(this,i):void 0;for(const o of e){for(let e=0;e<o.length;e+=3){const t=(0,n.i)(H,o[e],o[e+1],o[e+2]);0===e?a=this._renderCoordsHelper.getAltitude(t):this._renderCoordsHelper.setAltitude(t,a);const c=s+2*e;l?.(e,c,o,t);const h=(0,n.d)(H,t,r);if(e<o.length-3){for(let e=0;e<6;e++)i.start.setVec(c+e,h);i.extrude.setValues(c,0,-1),i.extrude.setValues(c+1,1,-1),i.extrude.setValues(c+2,1,1),i.extrude.setValues(c+3,0,-1),i.extrude.setValues(c+4,1,1),i.extrude.setValues(c+5,0,1)}if(e>0)for(let e=-6;e<0;e++)i.end.setVec(c+e,h)}s+=O(o)}return i.buffer}_setUpVectors(e,t,i,n,r){const s=this._renderCoordsHelper.worldUpAtPosition(r,q);if(t<n.length-3)for(let a=0;a<6;a++)e.startUp.setVec(i+a,s);if(t>0)for(let a=-6;a<0;a++)e.endUp.setVec(i+a,s)}}function O(e){return 2*(e.length/3-1)*3}const q=(0,r.vt)(),H=(0,r.vt)(),N=(0,b.BP)().vec3f(y.r.START).vec3f(y.r.END).vec2f(y.r.EXTRUDE).vec3f(y.r.START_UP).vec3f(y.r.END_UP),j=(0,b.BP)().vec3f(y.r.START).vec3f(y.r.END).vec2f(y.r.EXTRUDE);var W=i(6485);class G extends W.K{constructor(){super(...arguments),this.contrastControlEnabled=!1,this.spherical=!1}}(0,l._)([(0,W.W)()],G.prototype,"contrastControlEnabled",void 0),(0,l._)([(0,W.W)()],G.prototype,"spherical",void 0);class B extends G{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1}}(0,l._)([(0,W.W)()],B.prototype,"heightManifoldEnabled",void 0),(0,l._)([(0,W.W)()],B.prototype,"pointDistanceEnabled",void 0),(0,l._)([(0,W.W)()],B.prototype,"lineVerticalPlaneEnabled",void 0),(0,l._)([(0,W.W)()],B.prototype,"intersectsLineEnabled",void 0);var F=i(83490),Z=i(99362),k=i(84093);let X=class extends _.A{constructor(e){super(e),this.produces=g.OG.LASERLINES,this.consumes={required:[g.OG.LASERLINES,"normals"]},this.requireGeometryDepth=!0,this._configuration=new B,this._pathTechniqueConfiguration=new G,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._pathVerticalPlaneEnabled=!1,this._passParameters=new A;const t=e.view._stage.renderView.techniques,i=new G;i.contrastControlEnabled=e.contrastControlEnabled,t.precompile(M,i)}initialize(){this._passParameters.renderCoordsHelper=this.view.renderCoordsHelper,this._pathTechniqueConfiguration.spherical=this.view.state.viewingMode===f.RT.Global,this._pathTechniqueConfiguration.contrastControlEnabled=this.contrastControlEnabled,this._techniques.precompile(M,this._pathTechniqueConfiguration),this._blit=new m.G(this._techniques,k.d.PremultipliedAlpha)}destroy(){this._pathVerticalPlaneData=(0,o.WD)(this._pathVerticalPlaneData),this._blit=null}get _techniques(){return this.view._stage.renderView.techniques}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(e){this._heightManifoldEnabled!==e&&(this._heightManifoldEnabled=e,this.requestRender(F.C7.UPDATE))}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(e){(0,n.c)(this._passParameters.heightManifoldTarget,e),this.requestRender(F.C7.UPDATE)}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(e){e!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=e,this.requestRender(F.C7.UPDATE))}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(e){(0,n.c)(this._passParameters.pointDistanceTarget,e),this.requestRender(F.C7.UPDATE)}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(e){(0,n.c)(this._passParameters.pointDistanceOrigin,e),this.requestRender(F.C7.UPDATE)}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(e){e!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=e,this.requestRender(F.C7.UPDATE))}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){(0,s.C)(e,this._passParameters.lineVerticalPlaneSegment),this.requestRender(F.C7.UPDATE)}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(e){e!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=e,this.requestRender(F.C7.UPDATE))}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(e){(0,s.C)(e,this._passParameters.intersectsLineSegment),this.requestRender(F.C7.UPDATE)}get intersectsLineRadius(){return this._passParameters.intersectsLineRadius}set intersectsLineRadius(e){e!==this._passParameters.intersectsLineRadius&&(this._passParameters.intersectsLineRadius=e,this.requestRender(F.C7.UPDATE))}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){e!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=e,this.requestRender(F.C7.UPDATE))}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(e){e!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=e,null!=this._pathVerticalPlaneData&&this.requestRender(F.C7.UPDATE))}set pathVerticalPlaneVertices(e){null==this._pathVerticalPlaneData&&(this._pathVerticalPlaneData=new z(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=e,this.pathVerticalPlaneEnabled&&this.requestRender(F.C7.UPDATE)}set pathVerticalPlaneBuffers(e){null==this._pathVerticalPlaneData&&(this._pathVerticalPlaneData=new z(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=e,this.pathVerticalPlaneEnabled&&this.requestRender(F.C7.UPDATE)}setParameters(e){(0,Z.MB)(this._passParameters,e)&&this.requestRender(F.C7.UPDATE)}precompile(){this._acquireTechnique().release()}render(e){const t=e.find((e=>{let{name:t}=e;return t===g.OG.LASERLINES}));if(!this.bindParameters.decorations||null==this._blit)return t;const i=this.renderingContext,n=e.find((e=>{let{name:t}=e;return"normals"===t}));this._passParameters.normals=n?.getTexture();const r=()=>{(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(),this.pathVerticalPlaneEnabled&&this._renderPath()};if(!this.contrastControlEnabled)return i.bindFramebuffer(t.fbo),r(),t;this._passParameters.colors=t.getTexture();const s=this.fboCache.acquire(t.fbo.width,t.fbo.height,"laser lines");return i.bindFramebuffer(s.fbo),i.setClearColor(0,0,0,0),i.clear(I.NV.COLOR|I.NV.DEPTH),r(),i.unbindTexture(t.getTexture()),this._blit.blend(i,s,t,this.bindParameters)||this.requestRender(F.C7.UPDATE),s.release(),t}_acquireTechnique(){return this._configuration.heightManifoldEnabled=this.heightManifoldEnabled,this._configuration.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._configuration.pointDistanceEnabled=this.pointDistanceEnabled,this._configuration.intersectsLineEnabled=this.intersectsLineEnabled,this._configuration.contrastControlEnabled=this.contrastControlEnabled,this._configuration.spherical=this.view.state.viewingMode===f.RT.Global,this._techniques.acquire(C,this._configuration)}_renderUnified(){if(!this._updatePassParameters())return;const e=this._acquireTechnique();if(e.compiled){const t=this.renderingContext;t.bindTechnique(e,this.bindParameters,this._passParameters),t.screen.draw()}else this.requestRender(F.C7.UPDATE);e.release()}_renderPath(){if(null==this._pathVerticalPlaneData)return;const e=this._techniques.acquire(M,this._pathTechniqueConfiguration);if(e.compiled){const t=this.renderingContext;this._passParameters.origin=this._pathVerticalPlaneData.origin,t.bindTechnique(e,this.bindParameters,this._passParameters),this._pathVerticalPlaneData.draw(t)}else this.requestRender(F.C7.UPDATE);e.release()}_updatePassParameters(){if(!this._intersectsLineEnabled)return!0;const e=this.bindParameters.camera,t=this._passParameters;if(this._intersectsLineInfinite){if((0,d.$e)((0,p.LV)(t.intersectsLineSegment.origin,t.intersectsLineSegment.vector),$),$.c0=-Number.MAX_VALUE,!(0,u.ig)(e.frustum,$))return!1;(0,d.j1)($,t.lineStartWorld),(0,d.mO)($,t.lineEndWorld)}else(0,n.c)(t.lineStartWorld,t.intersectsLineSegment.origin),(0,n.g)(t.lineEndWorld,t.intersectsLineSegment.origin,t.intersectsLineSegment.vector);return!0}get test(){}};(0,l._)([(0,c.MZ)({constructOnly:!0})],X.prototype,"contrastControlEnabled",void 0),(0,l._)([(0,c.MZ)({constructOnly:!0})],X.prototype,"isDecoration",void 0),(0,l._)([(0,c.MZ)()],X.prototype,"produces",void 0),(0,l._)([(0,c.MZ)()],X.prototype,"consumes",void 0),X=(0,l._)([(0,h.$)("esri.views.3d.webgl-engine.effects.laserlines.LaserLineRenderer")],X);const $=(0,d.vt)();class K extends a.B{constructor(e){super(e),this._angleCutoff=S.d,this._style={},this._heightManifoldTarget=(0,r.vt)(),this._heightManifoldEnabled=!1,this._intersectsLine=(0,s.vt)(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProperties(e)}get testData(){}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(e){null!=e?((0,n.c)(this._heightManifoldTarget,e),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(e){if(null==e)return void(this.intersectsLine=null);const t=this.view.renderCoordsHelper.worldUpAtPosition(e,J);this.intersectsLine=(0,s.fA)(e,t),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(e){null!=e?((0,s.C)(e,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){this._lineVerticalPlaneSegment=null!=e?(0,s.C)(e):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(e){this._pointDistanceLine=null!=e?{origin:(0,r.o8)(e.origin),target:e.target?(0,r.o8)(e.target):null}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||null!=this._pointDistanceLine||null!=this._pathVerticalPlaneBuffers)?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){null==this._renderer&&(this._renderer=new X({view:this.view,contrastControlEnabled:!0,isDecoration:this.isDecoration}),this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff())}_syncStyle(){null!=this._renderer&&(this._renderer.setParameters(this._style),null!=this._style.intersectsLineRadius&&(this._renderer.intersectsLineRadius=this._style.intersectsLineRadius))}_syncAngleCutoff(){null!=this._renderer&&this._renderer.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){null!=this._renderer&&(this._renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this._renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){null!=this._renderer&&(this._renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this._renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){null!=this._renderer&&(this._renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){null!=this._renderer&&(this._renderer.pathVerticalPlaneEnabled=null!=this._pathVerticalPlaneBuffers&&this.visible,null!=this._pathVerticalPlaneBuffers&&(this._renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){null!=this._renderer&&(this._renderer.lineVerticalPlaneEnabled=null!=this._lineVerticalPlaneSegment&&this.visible,null!=this._lineVerticalPlaneSegment&&(this._renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){if(null==this._renderer)return;const e=this._pointDistanceLine,t=null!=e;this._renderer.pointDistanceEnabled=t&&null!=e.target&&this.visible,t&&(this._renderer.pointDistanceOrigin=e.origin,null!=e.target&&(this._renderer.pointDistanceTarget=e.target))}_disposeRenderer(){null!=this._renderer&&this.view._stage&&(this._renderer.destroy(),this._renderer=null)}}const J=(0,r.vt)()},83574:(e,t,i)=>{i.d(t,{l:()=>P});var n=i(15941),r=i(20664),s=i(9392),a=i(43047),l=i(55855),o=i(14487),c=i(42294),h=i(75762),d=i(64465),u=i(32314),p=i(67425),f=i(49296),g=i(72900),_=i(62577),m=i(66470),v=i(84248);class P extends u.X{constructor(e){super(e),this._material=null,this._texture=null,this._geometry=null,this._size=3,this._color=(0,l.fA)(1,0,1,1),this._pixelSnappingEnabled=!0,this._primitive="square",this._outlineSize=1,this._outlineColor=(0,l.fA)(1,1,1,1),this._elevationInfo=null,this.applyProperties(e)}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get size(){return this._size}set size(e){if(e!==this._size){const t=this._preferredTextureSize;this._size=e,t<this._preferredTextureSize?this.recreate():this._updateSizeAttribute()}}get color(){return this._color}set color(e){(0,a.a)(e,this._color)||((0,a.c)(this._color,e),this._updateMaterial())}get pixelSnappingEnabled(){return this._pixelSnappingEnabled}set pixelSnappingEnabled(e){this._pixelSnappingEnabled!==e&&(this._pixelSnappingEnabled=e,this._updateMaterial())}get primitive(){return this._primitive}set primitive(e){this._primitive!==e&&(this._primitive=e,this.recreate())}get outlineSize(){return this._outlineSize}set outlineSize(e){e!==this._outlineSize&&(this._outlineSize=e,this._updateMaterial())}get outlineColor(){return this._outlineColor}set outlineColor(e){(0,a.a)(e,this._outlineColor)||((0,a.c)(this._outlineColor,e),this._updateMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this.recreateGeometry()}_updateMaterial(){this._material?.setParameters(this._materialParameters)}_updateSizeAttribute(){const e=this.object;if(null==e)return;const t=e.geometries[0];if(null==t)return;const i=t.getMutableAttribute(m.r.SIZE).data,n=this._geometrySize;i[0]=n,i[1]=n,e.geometryVertexAttributeUpdated(e.geometries[0],m.r.SIZE)}get _materialParameters(){return{color:this._color,textureIsSignedDistanceField:!0,sampleSignedDistanceFieldTexelCenter:(0,g.ny)(this._primitive),distanceFieldBoundingBox:E,occlusionTest:!1,outlineColor:this._outlineColor,outlineSize:this._outlineSize,textureId:this._texture?.id,polygonOffset:!1,shaderPolygonOffset:0,drawInSecondSlot:!0,depthEnabled:!1,pixelSnappingEnabled:this.pixelSnappingEnabled,isDecoration:this.isDecoration}}get _geometrySize(){return this._size/b}createExternalResources(){this._texture=(0,g.sZ)(this._primitive,this._preferredTextureSize),this._material=new v.R(this._materialParameters,this.view.state.viewingMode===d.RT.Global);const e=this.view._stage;this._texture.load(e.renderView.renderingContext),e.add(this._texture)}destroyExternalResources(){this._texture&&(this.view._stage.remove(this._texture),this._texture.dispose(),this._texture=null),this._material=null}createGeometries(e){const t=this._createRenderGeometry();null!=t&&e.addGeometry(t)}forEachExternalMaterial(e){this._material&&e(this._material)}get _preferredTextureSize(){return(0,n.qE)(2*this._geometrySize,16,128)}calculateMapBounds(e){const t=this.object?.geometries[0];if(!t)return!1;const i=t.attributes.get(m.r.POSITION).data;return(0,o.F)(i,this.view.renderCoordsHelper.spatialReference,w,this.view.spatialReference),(0,c.Hq)(e,w),!0}_createRenderGeometry(){const{geometry:e,_material:t}=this;if(null==e||null==t)return null;const{renderCoordsHelper:i,elevationProvider:n}=this.view,s=(0,p.nG)(e,n,f.F.fromElevationInfo(this.elevationInfo),i),a=(0,r.i)(h.rq.get(),e.x,e.y,s),l=h.rq.get();(0,o.F)(a,e.spatialReference,l,i.spatialReference);const c=this._geometrySize;return(0,_.DJ)(t,null,l,null,null,[c,c],[0,0,0,1])}}const b=g.CN,E=[b/2,b/2,1-b/2,1-b/2],w=(0,s.vt)()},31484:(e,t,i)=>{i.d(t,{K:()=>c});var n=i(65058),r=i(27963),s=i(5517),a=i(21390),l=i(64839),o=i(70367);function c(e,t){const i=e.fragment;i.include(n.E),e.include(r.Ir),i.uniforms.add(new a.m("globalAlpha",(e=>e.globalAlpha)),new s.t("glowColor",(e=>e.glowColor)),new a.m("glowWidth",((e,t)=>e.glowWidth*t.camera.pixelRatio)),new a.m("glowFalloff",(e=>e.glowFalloff)),new s.t("innerColor",(e=>e.innerColor)),new a.m("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio)),new o.N("depthMap",((e,t)=>t.depth?.attachment)),new o.N("normalMap",(e=>e.normals))),i.code.add(l.H`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),i.code.add(l.H`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),i.code.add(l.H`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),i.code.add(l.H`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float angleCutoffAdjust, out float depthDiscontinuityAlpha) {
float depth = depthFromTexture(depthMap, uv);
if (depth == 1.0) {
return false;
}
float linearDepth = linearizeDepth(depth);
pos = reconstructPosition(gl_FragCoord.xy, linearDepth);
float minStep = 6e-8;
float depthStep = clamp(depth + minStep, 0.0, 1.0);
float linearDepthStep = linearizeDepth(depthStep);
float depthError = abs(linearDepthStep - linearDepth);
if (depthError > 0.2) {
normal = texture(normalMap, uv).xyz * 2.0 - 1.0;
angleCutoffAdjust = 0.004;
} else {
normal = normalize(cross(dFdx(pos), dFdy(pos)));
angleCutoffAdjust = 0.0;
}
float ddepth = fwidth(linearDepth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / linearDepth);
return true;
}`),t.contrastControlEnabled?(i.uniforms.add(new o.N("frameColor",((e,t)=>e.colors)),new a.m("globalAlphaContrastBoost",(e=>null!=e.globalAlphaContrastBoost?e.globalAlphaContrastBoost:1))),i.code.add(l.H`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):i.code.add(l.H`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}}}]);
//# sourceMappingURL=5488.0f30de54.chunk.js.map