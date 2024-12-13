"use strict";(self.webpackChunksc_compile=self.webpackChunksc_compile||[]).push([[1432],{88849:(e,t,r)=>{r.d(t,{L:()=>E,b:()=>A});var i=r(99443),a=r(34981),s=r(26917),n=r(3838),o=r(48020),c=r(17698),l=r(94192),p=r(80883),d=r(81449),h=r(3799),v=r(95756),u=r(58350),m=r(21390),f=r(64839),S=r(43425),T=r(32307),P=r(70367),g=r(66470),O=r(50125),_=r(91911);function A(e){const t=new T.N5,r=e.terrainDepthTest&&e.output===a.V.Color,A=e.space===O.lM.World;t.include(n.s,e),t.include(c.r,e);const{vertex:E,fragment:y}=t;return y.include(d.W),(0,h.NB)(E,e),t.attributes.add(g.r.POSITION,"vec3"),t.attributes.add(g.r.PREVPOSITION,"vec3"),t.attributes.add(g.r.UV0,"vec2"),t.varyings.add("vColor","vec4"),t.varyings.add("vpos","vec3"),t.varyings.add("vUV","vec2"),t.varyings.add("vSize","float"),r&&t.varyings.add("depth","float"),e.hasTip&&t.varyings.add("vLineWidth","float"),E.uniforms.add(new v.G("nearFar",((e,t)=>t.camera.nearFar)),new u.E("viewport",((e,t)=>t.camera.fullViewport))),E.code.add(f.H`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),E.code.add(f.H`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`),A?(t.attributes.add(g.r.NORMAL,"vec3"),(0,h.S7)(E),E.constants.add("tiltThreshold","float",.7),E.code.add(f.H`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)):E.code.add(f.H`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`),E.code.add(f.H`
      #define vecN ${A?"vec3":"vec2"}

      vecN normalizedSegment(vecN pos, vecN prev) {
        vecN segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${A?"vec3(0.0, 0.0, 0.0)":"vec2(0.0, 0.0)"};
      }

      vecN displace(vecN pos, vecN prev, float displacementLen) {
        vecN segment = normalizedSegment(pos, prev);

        vecN displacementDirU = perpendicular(segment);
        vecN displacementDirV = segment;

        ${e.anchor===O.kJ.Tip?"pos -= 0.5 * displacementLen * displacementDirV;":""}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `),e.space===O.lM.Screen&&(E.uniforms.add(new S.X("inverseProjectionMatrix",((e,t)=>t.camera.inverseProjectionMatrix))),E.code.add(f.H`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),E.code.add(f.H`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),E.uniforms.add(new m.m("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),E.code.add(f.H`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${e.hasCap?"\n                if(prev.z > posLeft.z) {\n                  vec2 diff = posLeft.xy - posRight.xy;\n                  planeOrigin.xy += perpendicular(diff) / 2.0;\n                }\n              ":""};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `)),(0,h.Nz)(E),E.main.add(f.H`
    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      float lineWidth = getLineWidth();
      float screenMarkerSize = getScreenMarkerSize();

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      clip(pos, prev);

      ${A?f.H`${e.hideOnShortSegments?f.H`
                  if (areWorldMarkersHidden(pos, prev)) {
                    // Project out of clip space
                    gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
                    return;
                  }`:""}
            pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos));
            vec4 displacedPosScreen = projectAndScale(pos);`:f.H`
            vec4 posScreen = projectAndScale(pos);
            vec4 prevScreen = projectAndScale(prev);
            vec4 displacedPosScreen = posScreen;

            displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);
            ${e.space===O.lM.Screen?f.H`
                vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));

                // We need three points of the ribbon line in camera space to calculate the plane it lies in
                // Note that we approximate the third point, since we have no information about the join around prev
                vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
                vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);

                pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
                displacedPosScreen = projectAndScale(pos);`:""}`}

      ${r?"depth = pos.z;":""}

      // Convert back into NDC
      displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

      // Convert texture coordinate into [0,1]
      vUV = (uv0 + 1.0) / 2.0;
      ${A?"":"vUV *= displacedPosScreen.w;"}
      ${e.hasTip?"vLineWidth = lineWidth;":""}

      vSize = screenMarkerSize;
      vColor = getColor();

      // Use camera space for slicing
      vpos = pos.xyz;

      gl_Position = displacedPosScreen;
    }`),r&&t.include(l.Z,e),t.include(s.HQ,e),t.include(_.z,e),y.uniforms.add(new u.E("intrinsicColor",(e=>e.color)),new P.N("tex",(e=>e.markerTexture))),y.include(p.a),y.constants.add("texelSize","float",1/i.vO),y.code.add(f.H`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = rgba2float(texture(tex, samplePos)) - 0.5;
float distance = sdf * vSize;
distance -= 0.5;
return clamp(0.5 - distance, 0.0, 1.0);
}`),e.hasTip&&y.constants.add("relativeMarkerSize","float",i.Cz/i.vO).constants.add("relativeTipLineWidth","float",i.DZ).code.add(f.H`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * vLineWidth);

      ${A?"halfTipLineWidth *= fwidth(samplePos.y);":""}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `),t.include(o.Q,e),y.main.add(f.H`
    discardBySlice(vpos);
    ${r?"terrainDepthTest(depth);":""}

    vec4 finalColor = intrinsicColor * vColor;
    ${A?"vec2 samplePos = vUV;":"vec2 samplePos = vUV * gl_FragCoord.w;"}
    ${e.hasTip?"finalColor.a *= max(markerAlpha(samplePos), tipAlpha(samplePos));":"finalColor.a *= markerAlpha(samplePos);"}
    outputColorHighlightOID(finalColor, vpos);`),t}const E=Object.freeze(Object.defineProperty({__proto__:null,build:A},Symbol.toStringTag,{value:"Module"}))},86401:(e,t,r)=>{r.d(t,{Ci:()=>s,Dq:()=>c,dB:()=>o,zK:()=>n});var i=r(48549),a=r(66470);const s=(0,i.BP)().vec3f(a.r.POSITION),n=(0,i.BP)().vec3f(a.r.POSITION).vec2f(a.r.UV0),o=(0,i.BP)().vec3f(a.r.POSITION).vec4u8(a.r.COLOR),c=(0,i.BP)().vec3f(a.r.POSITION).vec2f(a.r.UV0).vec4u8(a.r.OBJECTANDLAYERIDCOLOR)},60561:(e,t,r)=>{r.d(t,{i:()=>E});var i=r(20664),a=r(9392),s=r(48549),n=r(34981),o=r(90235),c=r(75803),l=r(45463),p=r(77730),d=r(66470),h=r(93684),v=r(16506),u=r(59246),m=r(60322),f=r(96643),S=r(88849),T=r(50125),P=r(93345),g=r(57162);class O extends u.w{constructor(e,t,i){super(e,t,new v.$(S.L,(()=>r.e(6419).then(r.bind(r,66419)))),i,_)}_makePipelineState(e,t){const{output:r,oitPass:i,space:a,hasOccludees:s}=e;return(0,g.Ey)({blending:r===n.V.Color?(0,m.Yf)(i):null,depthTest:a===T.lM.Draped?null:{func:(0,m.K_)(i)},depthWrite:(0,m.z5)(e),drawBuffers:r===n.V.Depth?{buffers:[P.Hr.NONE]}:(0,m.m6)(i,r),colorWrite:g.kn,stencilWrite:s?f.v0:null,stencilTest:s?t?f.a9:f.qh:null,polygonOffset:{factor:0,units:-10}})}initializePipeline(e){return e.occluder?(this._occluderPipelineTransparent=(0,g.Ey)({blending:g.Ky,depthTest:f.sf,depthWrite:null,colorWrite:g.kn,stencilWrite:null,stencilTest:f.mK}),this._occluderPipelineOpaque=(0,g.Ey)({blending:g.Ky,depthTest:f.sf,depthWrite:null,colorWrite:g.kn,stencilWrite:f.r8,stencilTest:f.I$}),this._occluderPipelineMaskWrite=(0,g.Ey)({blending:null,depthTest:f.m,depthWrite:null,colorWrite:null,stencilWrite:f.v0,stencilTest:f.a9})):this._occluderPipelineTransparent=this._occluderPipelineOpaque=this._occluderPipelineMaskWrite=null,this._occludeePipelineState=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){return e?this._occludeePipelineState:t===p.N.TRANSPARENT_OCCLUDER_MATERIAL?this._occluderPipelineTransparent??super.getPipeline():t===p.N.OCCLUDER_MATERIAL?this._occluderPipelineOpaque??super.getPipeline():this._occluderPipelineMaskWrite??super.getPipeline()}}const _=new Map([[d.r.POSITION,0],[d.r.PREVPOSITION,1],[d.r.UV0,2],[d.r.NORMAL,3],[d.r.COLOR,4],[d.r.COLORFEATUREATTRIBUTE,4],[d.r.SIZE,5],[d.r.SIZEFEATUREATTRIBUTE,5],[d.r.OPACITYFEATUREATTRIBUTE,6]]);var A=r(46259);class E extends l.im{constructor(e){super(e,N),this._configuration=new T.Dt,this.vertexAttributeLocations=_,this.produces=new Map([[p.N.OPAQUE_MATERIAL,e=>e===n.V.Highlight||(0,n._o)(e)&&this.parameters.renderOccluded===l.m$.OccludeAndTransparentStencil],[p.N.OPAQUE_MATERIAL_WITHOUT_NORMALS,e=>(0,n.eh)(e)],[p.N.OCCLUDER_MATERIAL,e=>(0,n.aD)(e)&&this.parameters.renderOccluded===l.m$.OccludeAndTransparentStencil],[p.N.TRANSPARENT_OCCLUDER_MATERIAL,e=>(0,n.aD)(e)&&this.parameters.renderOccluded===l.m$.OccludeAndTransparentStencil],[p.N.TRANSPARENT_MATERIAL,e=>(0,n._o)(e)&&this.parameters.writeDepth],[p.N.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>(0,n._o)(e)&&!this.parameters.writeDepth],[p.N.DRAPED_MATERIAL,e=>e===n.V.Color||e===n.V.Highlight]]),this._layout=this.createLayout()}getConfiguration(e,t){return this._configuration.output=e,this._configuration.space=t.slot===p.N.DRAPED_MATERIAL?T.lM.Draped:this.parameters.worldSpace?T.lM.World:T.lM.Screen,this._configuration.hideOnShortSegments=this.parameters.hideOnShortSegments,this._configuration.hasCap=this.parameters.cap!==A.x.BUTT,this._configuration.anchor=this.parameters.anchor,this._configuration.hasTip=this.parameters.hasTip,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasOccludees=t.hasOccludees,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.occluder=this.parameters.renderOccluded===l.m$.OccludeAndTransparentStencil,this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}get visible(){return this.parameters.color[3]>=o.Q}intersect(){}createLayout(){const e=(0,s.BP)().vec3f(d.r.POSITION).vec3f(d.r.PREVPOSITION).vec2f(d.r.UV0);return this.parameters.worldSpace&&e.vec3f(d.r.NORMAL),this.parameters.vvSize?e.f32(d.r.SIZEFEATUREATTRIBUTE):e.f32(d.r.SIZE),this.parameters.vvColor?e.f32(d.r.COLORFEATUREATTRIBUTE):e.vec4f(d.r.COLOR),this.parameters.vvOpacity&&e.f32(d.r.OPACITYFEATUREATTRIBUTE),e}createBufferWriter(){return new w(this._layout,this.parameters)}createGLMaterial(e){return new y(e)}}class y extends c.m8{constructor(){super(...arguments),this._markerPrimitive=null}dispose(){super.dispose(),this._markerTextures.release(this._markerPrimitive),this._markerPrimitive=null}beginSlot(e){const t=this._material.parameters.markerPrimitive;return t!==this._markerPrimitive&&(this._material.setParameters({markerTexture:this._markerTextures.swap(t,this._markerPrimitive)}),this._markerPrimitive=t),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(O,e)}}class N extends h.S{constructor(){super(...arguments),this.width=0,this.color=[1,1,1,1],this.markerPrimitive="arrow",this.placement="end",this.cap=A.x.BUTT,this.anchor=T.kJ.Center,this.hasTip=!1,this.worldSpace=!1,this.hideOnShortSegments=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.markerTexture=null}}class w{constructor(e,t){this.vertexBufferLayout=e,this._parameters=t}elementCount(){return"begin-end"===this._parameters.placement?12:6}write(e,t,r,a,s,n){const o=r.get(d.r.POSITION).data,c=o.length/3;let l=[1,0,0];const p=r.get(d.r.NORMAL);this._parameters.worldSpace&&null!=p&&(l=p.data);let h=1,v=0;this._parameters.vvSize?v=r.get(d.r.SIZEFEATUREATTRIBUTE).data[0]:r.has(d.r.SIZE)&&(h=r.get(d.r.SIZE).data[0]);let u=[1,1,1,1],m=0;this._parameters.vvColor?m=r.get(d.r.COLORFEATUREATTRIBUTE).data[0]:r.has(d.r.COLOR)&&(u=r.get(d.r.COLOR).data);let f=0;this._parameters.vvOpacity&&(f=r.get(d.r.OPACITYFEATUREATTRIBUTE).data[0]);const S=new Float32Array(s.buffer);let T=n*(this.vertexBufferLayout.stride/4);const P=(e,t,r,i)=>{if(S[T++]=e[0],S[T++]=e[1],S[T++]=e[2],S[T++]=t[0],S[T++]=t[1],S[T++]=t[2],S[T++]=r[0],S[T++]=r[1],this._parameters.worldSpace&&(S[T++]=l[0],S[T++]=l[1],S[T++]=l[2]),this._parameters.vvSize?S[T++]=v:S[T++]=h,this._parameters.vvColor)S[T++]=m;else{const e=Math.min(4*i,u.length-4);S[T++]=u[e],S[T++]=u[e+1],S[T++]=u[e+2],S[T++]=u[e+3]}this._parameters.vvOpacity&&(S[T++]=f)};let g;var O;(O=g||(g={}))[O.ASCENDING=1]="ASCENDING",O[O.DESCENDING=-1]="DESCENDING";const _=(t,r)=>{const a=(0,i.i)(R,o[3*t],o[3*t+1],o[3*t+2]),s=x;let n=t+r;do{(0,i.i)(s,o[3*n],o[3*n+1],o[3*n+2]),n+=r}while((0,i.H)(a,s)&&n>=0&&n<c);e&&((0,i.t)(a,a,e),(0,i.t)(s,s,e)),P(a,s,[-1,-1],t),P(a,s,[1,-1],t),P(a,s,[1,1],t),P(a,s,[-1,-1],t),P(a,s,[1,1],t),P(a,s,[-1,1],t)},A=this._parameters.placement;"begin"!==A&&"begin-end"!==A||_(0,g.ASCENDING),"end"!==A&&"begin-end"!==A||_(c-1,g.DESCENDING)}}const R=(0,a.vt)(),x=(0,a.vt)()},63928:(e,t,r)=>{r.d(t,{W:()=>s});var i=r(45463),a=r(48168);class s extends i.im{intersect(e,t,r,i,s,n){return(0,a.Uy)(e,r,i,s,void 0,n)}}}}]);
//# sourceMappingURL=1432.dbda15f3.chunk.js.map