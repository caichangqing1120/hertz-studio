// SPDX-License-Identifier: MIT
// Copyright (c) 2026 hertz-studio contributors
//
// 「星座 · 十二星图」three.js 粒子舞台场景引擎（three r186 + 背景星云/单粒子池汇聚散开/十二座三维造型）。
// 生成产物 —— 源码在 tools/zodiac-stage/src/，改动后执行：
//   cd tools/zodiac-stage && npm install && node build.mjs
// 为本项目独立实现，不包含任何参照项目的源文件（见 NOTICE）。
var ZodiacStagePure=(()=>{var id=Object.defineProperty;var i_=Object.getOwnPropertyDescriptor;var s_=Object.getOwnPropertyNames;var r_=Object.prototype.hasOwnProperty;var Ip=(i,t)=>{for(var e in t)id(i,e,{get:t[e],enumerable:!0})},a_=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of s_(t))!r_.call(i,s)&&s!==e&&id(i,s,{get:()=>t[s],enumerable:!(n=i_(t,s))||n.enumerable});return i};var o_=i=>a_(id({},"__esModule",{value:!0}),i);var j1={};Ip(j1,{capture:()=>K1,debug:()=>$1,mount:()=>k1,probe:()=>V1,pure:()=>Q1,resize:()=>W1,setAudio:()=>q1,setInteraction:()=>e_,setPrefs:()=>Y1,setRig:()=>Z1,setTime:()=>X1,stats:()=>J1,unmount:()=>t_});var hp={};Ip(hp,{ACESFilmicToneMapping:()=>bu,AddEquation:()=>is,AddOperation:()=>Mf,AdditiveAnimationBlendMode:()=>Du,AdditiveBlending:()=>mu,AgXToneMapping:()=>wu,AlphaFormat:()=>Lu,AlwaysCompare:()=>Uf,AlwaysDepth:()=>qa,AlwaysStencilFunc:()=>Rf,AmbientLight:()=>Qo,AnimationAction:()=>cl,AnimationClip:()=>ts,AnimationLoader:()=>Th,AnimationMixer:()=>zh,AnimationObjectGroup:()=>Bh,AnimationUtils:()=>wh,ArcCurve:()=>xo,ArrayCamera:()=>rl,ArrowHelper:()=>lu,AttachedBindMode:()=>sh,Audio:()=>ol,AudioAnalyser:()=>Oh,AudioContext:()=>Qr,AudioListener:()=>Uh,AudioLoader:()=>Nh,AxesHelper:()=>cu,BackSide:()=>cn,BasicDepthPacking:()=>Ef,BasicShadowMap:()=>qm,BatchedMesh:()=>lo,BezierInterpolant:()=>qo,Bone:()=>Rr,BooleanKeyframeTrack:()=>oi,Box2:()=>hl,Box3:()=>Ye,Box3Helper:()=>au,BoxGeometry:()=>Ki,BoxHelper:()=>ru,BufferAttribute:()=>be,BufferGeometry:()=>ie,BufferGeometryLoader:()=>il,ByteType:()=>Cu,Cache:()=>Yn,Camera:()=>Ds,CameraHelper:()=>su,CanvasTexture:()=>Mh,CapsuleGeometry:()=>po,CatmullRomCurve3:()=>vo,CineonToneMapping:()=>Mu,CircleGeometry:()=>mo,ClampToEdgeWrapping:()=>mn,Clock:()=>qh,Color:()=>Et,ColorKeyframeTrack:()=>Yr,ColorManagement:()=>he,Compatibility:()=>Dg,CompressedArrayTexture:()=>yh,CompressedCubeTexture:()=>Sh,CompressedTexture:()=>Es,CompressedTextureLoader:()=>Eh,ConeGeometry:()=>Nr,ConstantAlphaFactor:()=>vf,ConstantColorFactor:()=>_f,Controls:()=>uu,CubeCamera:()=>sl,CubeDepthTexture:()=>fo,CubeReflectionMapping:()=>ti,CubeRefractionMapping:()=>Ni,CubeTexture:()=>$i,CubeTextureLoader:()=>Ch,CubeUVReflectionMapping:()=>Os,CubicBezierCurve:()=>Dr,CubicBezierCurve3:()=>yo,CubicInterpolant:()=>Wo,CullFaceBack:()=>pu,CullFaceFront:()=>tf,CullFaceFrontBack:()=>Xm,CullFaceNone:()=>jd,Curve:()=>wn,CurvePath:()=>Mo,CustomBlending:()=>nf,CustomToneMapping:()=>Au,CylinderGeometry:()=>Lr,Cylindrical:()=>Zh,Data3DTexture:()=>Ms,DataArrayTexture:()=>Ss,DataTexture:()=>gn,DataTextureLoader:()=>Rh,DataUtils:()=>ch,DecrementStencilOp:()=>ug,DecrementWrapStencilOp:()=>fg,DefaultLoadingManager:()=>kf,DepthFormat:()=>Zn,DepthStencilFormat:()=>Di,DepthTexture:()=>Ri,DetachedBindMode:()=>bf,DirectionalLight:()=>Ko,DirectionalLightHelper:()=>iu,DiscreteInterpolant:()=>Xo,DodecahedronGeometry:()=>go,DoubleSide:()=>Qn,DstAlphaFactor:()=>df,DstColorFactor:()=>pf,DynamicCopyUsage:()=>Cg,DynamicDrawUsage:()=>Mg,DynamicReadUsage:()=>wg,EdgesGeometry:()=>_o,EllipseCurve:()=>Cs,EqualCompare:()=>Lf,EqualDepth:()=>Za,EqualStencilFunc:()=>_g,EquirectangularReflectionMapping:()=>ea,EquirectangularRefractionMapping:()=>na,Euler:()=>zn,EventDispatcher:()=>An,ExternalTexture:()=>Ir,ExtrudeGeometry:()=>To,FileLoader:()=>Vn,Float16BufferAttribute:()=>mh,Float32BufferAttribute:()=>Rt,FloatType:()=>on,Fog:()=>eo,FogExp2:()=>to,FramebufferTexture:()=>vh,FrontSide:()=>Li,Frustum:()=>ai,FrustumArray:()=>oo,GLBufferAttribute:()=>Wh,GLSL1:()=>Pg,GLSL3:()=>Uu,GreaterCompare:()=>Nf,GreaterDepth:()=>$a,GreaterEqualCompare:()=>$l,GreaterEqualDepth:()=>Ja,GreaterEqualStencilFunc:()=>Sg,GreaterStencilFunc:()=>vg,GridHelper:()=>eu,Group:()=>wi,HTMLTexture:()=>bh,HalfFloatType:()=>kn,HemisphereLight:()=>Zo,HemisphereLightHelper:()=>tu,IcosahedronGeometry:()=>Eo,ImageBitmapLoader:()=>Lh,ImageLoader:()=>es,ImageUtils:()=>ja,IncrementStencilOp:()=>hg,IncrementWrapStencilOp:()=>dg,InstancedBufferAttribute:()=>Ci,InstancedBufferGeometry:()=>nl,InstancedInterleavedBuffer:()=>Hh,InstancedMesh:()=>ao,Int16BufferAttribute:()=>fh,Int32BufferAttribute:()=>ph,Int8BufferAttribute:()=>hh,IntType:()=>dl,InterleavedBuffer:()=>Ts,InterleavedBufferAttribute:()=>Ji,Interpolant:()=>Ii,InterpolateBezier:()=>rh,InterpolateDiscrete:()=>vr,InterpolateLinear:()=>Qa,InterpolateSmooth:()=>za,InterpolationSamplingMode:()=>Ng,InterpolationSamplingType:()=>Lg,InvertStencilOp:()=>pg,KeepStencilOp:()=>Va,KeyframeTrack:()=>xn,LOD:()=>io,LatheGeometry:()=>Co,Layers:()=>bs,LessCompare:()=>If,LessDepth:()=>Ya,LessEqualCompare:()=>Jl,LessEqualDepth:()=>vs,LessEqualStencilFunc:()=>xg,LessStencilFunc:()=>gg,Light:()=>Kn,LightProbe:()=>tl,LightShadow:()=>Ns,Line:()=>$n,Line3:()=>$h,LineBasicMaterial:()=>Qe,LineCurve:()=>Ur,LineCurve3:()=>So,LineDashedMaterial:()=>Ho,LineLoop:()=>co,LineSegments:()=>In,LinearFilter:()=>Ce,LinearInterpolant:()=>qr,LinearMipMapLinearFilter:()=>Km,LinearMipMapNearestFilter:()=>$m,LinearMipmapLinearFilter:()=>ei,LinearMipmapNearestFilter:()=>ia,LinearSRGBColorSpace:()=>Sr,LinearToneMapping:()=>yu,LinearTransfer:()=>Mr,Loader:()=>en,LoaderUtils:()=>Kr,LoadingManager:()=>Jr,LoopOnce:()=>Af,LoopPingPong:()=>Tf,LoopRepeat:()=>wf,MOUSE:()=>Hm,Material:()=>qe,MaterialBlending:()=>Ym,MaterialLoader:()=>el,MathUtils:()=>Gg,Matrix2:()=>Jh,Matrix3:()=>jt,Matrix4:()=>Jt,MaxEquation:()=>of,Mesh:()=>Ne,MeshBasicMaterial:()=>Jn,MeshDepthMaterial:()=>Wr,MeshDistanceMaterial:()=>Xr,MeshLambertMaterial:()=>ko,MeshMatcapMaterial:()=>Go,MeshNormalMaterial:()=>Vo,MeshPhongMaterial:()=>Bo,MeshPhysicalMaterial:()=>Oo,MeshStandardMaterial:()=>Hr,MeshToonMaterial:()=>zo,MinEquation:()=>af,MirroredRepeatWrapping:()=>xr,MixOperation:()=>Sf,MultiplyBlending:()=>_u,MultiplyOperation:()=>ta,NearestFilter:()=>Be,NearestMipMapLinearFilter:()=>Jm,NearestMipMapNearestFilter:()=>Zm,NearestMipmapLinearFilter:()=>Bs,NearestMipmapNearestFilter:()=>Eu,NeutralToneMapping:()=>Tu,NeverCompare:()=>Pf,NeverDepth:()=>Xa,NeverStencilFunc:()=>mg,NoBlending:()=>jn,NoColorSpace:()=>hi,NoNormalPacking:()=>rg,NoToneMapping:()=>Tn,NormalAnimationBlendMode:()=>Zl,NormalBlending:()=>Fs,NormalGAPacking:()=>og,NormalRGPacking:()=>ag,NotEqualCompare:()=>Df,NotEqualDepth:()=>Ka,NotEqualStencilFunc:()=>yg,NumberKeyframeTrack:()=>Is,Object3D:()=>xe,ObjectLoader:()=>Ih,ObjectSpaceNormalMap:()=>Cf,OctahedronGeometry:()=>Vr,OneFactor:()=>cf,OneMinusConstantAlphaFactor:()=>yf,OneMinusConstantColorFactor:()=>xf,OneMinusDstAlphaFactor:()=>ff,OneMinusDstColorFactor:()=>mf,OneMinusSrcAlphaFactor:()=>vu,OneMinusSrcColorFactor:()=>uf,OrthographicCamera:()=>ns,PCFShadowMap:()=>jr,PCFSoftShadowMap:()=>ef,PMREMGenerator:()=>ec,Path:()=>Qi,PerspectiveCamera:()=>Oe,Plane:()=>Fn,PlaneGeometry:()=>Ps,PlaneHelper:()=>ou,PointLight:()=>$o,PointLightHelper:()=>jh,Points:()=>ho,PointsMaterial:()=>Pr,PolarGridHelper:()=>nu,PolyhedronGeometry:()=>Pi,PositionalAudio:()=>Fh,PropertyBinding:()=>Me,PropertyMixer:()=>ll,QuadraticBezierCurve:()=>Fr,QuadraticBezierCurve3:()=>Or,Quaternion:()=>Ke,QuaternionKeyframeTrack:()=>Ls,QuaternionLinearInterpolant:()=>Yo,R11_EAC_Format:()=>wl,RED_GREEN_RGTC2_Format:()=>ha,RED_RGTC1_Format:()=>Xl,REVISION:()=>Qd,RG11_EAC_Format:()=>ca,RGBADepthPacking:()=>ng,RGBAFormat:()=>ln,RGBAIntegerFormat:()=>_l,RGBA_ASTC_10x10_Format:()=>zl,RGBA_ASTC_10x5_Format:()=>Fl,RGBA_ASTC_10x6_Format:()=>Ol,RGBA_ASTC_10x8_Format:()=>Bl,RGBA_ASTC_12x10_Format:()=>Vl,RGBA_ASTC_12x12_Format:()=>kl,RGBA_ASTC_4x4_Format:()=>Cl,RGBA_ASTC_5x4_Format:()=>Rl,RGBA_ASTC_5x5_Format:()=>Pl,RGBA_ASTC_6x5_Format:()=>Il,RGBA_ASTC_6x6_Format:()=>Ll,RGBA_ASTC_8x5_Format:()=>Nl,RGBA_ASTC_8x6_Format:()=>Dl,RGBA_ASTC_8x8_Format:()=>Ul,RGBA_BPTC_Format:()=>Gl,RGBA_ETC2_EAC_Format:()=>Al,RGBA_PVRTC_2BPPV1_Format:()=>Sl,RGBA_PVRTC_4BPPV1_Format:()=>yl,RGBA_S3TC_DXT1_Format:()=>aa,RGBA_S3TC_DXT3_Format:()=>oa,RGBA_S3TC_DXT5_Format:()=>la,RGBDepthPacking:()=>ig,RGBFormat:()=>Nu,RGBIntegerFormat:()=>Qm,RGB_BPTC_SIGNED_Format:()=>Hl,RGB_BPTC_UNSIGNED_Format:()=>Wl,RGB_ETC1_Format:()=>Ml,RGB_ETC2_Format:()=>bl,RGB_PVRTC_2BPPV1_Format:()=>vl,RGB_PVRTC_4BPPV1_Format:()=>xl,RGB_S3TC_DXT1_Format:()=>ra,RGDepthPacking:()=>sg,RGFormat:()=>Ui,RGIntegerFormat:()=>gl,RawShaderMaterial:()=>Gr,Ray:()=>Ei,Raycaster:()=>Xh,RectAreaLight:()=>jo,RedFormat:()=>ml,RedIntegerFormat:()=>sa,ReinhardToneMapping:()=>Su,RenderObjectRefreshType:()=>Ug,RenderTarget:()=>wr,RenderTarget3D:()=>Vh,RepeatWrapping:()=>_r,ReplaceStencilOp:()=>cg,ReverseSubtractEquation:()=>rf,RingGeometry:()=>Ro,SIGNED_R11_EAC_Format:()=>Tl,SIGNED_RED_GREEN_RGTC2_Format:()=>Yl,SIGNED_RED_RGTC1_Format:()=>ql,SIGNED_RG11_EAC_Format:()=>El,SRGBColorSpace:()=>je,SRGBTransfer:()=>ye,Scene:()=>ws,ShaderChunk:()=>oe,ShaderLib:()=>ni,ShaderMaterial:()=>_n,ShadowMaterial:()=>Fo,Shape:()=>ji,ShapeGeometry:()=>Po,ShapePath:()=>hu,ShapeUtils:()=>Bn,ShortType:()=>Ru,Skeleton:()=>ro,SkeletonHelper:()=>Qh,SkinnedMesh:()=>so,Source:()=>ah,Sphere:()=>Xe,SphereGeometry:()=>kr,Spherical:()=>Yh,SphericalHarmonics3:()=>$r,SplineCurve:()=>Br,SpotLight:()=>Jo,SpotLightHelper:()=>Kh,Sprite:()=>no,SpriteMaterial:()=>Cr,SrcAlphaFactor:()=>xu,SrcAlphaSaturateFactor:()=>gf,SrcColorFactor:()=>hf,StaticCopyUsage:()=>Eg,StaticDrawUsage:()=>Kl,StaticReadUsage:()=>Ag,StereoCamera:()=>Dh,StreamCopyUsage:()=>Rg,StreamDrawUsage:()=>bg,StreamReadUsage:()=>Tg,StringKeyframeTrack:()=>li,SubtractEquation:()=>sf,SubtractiveBlending:()=>gu,TOUCH:()=>Wm,TangentSpaceNormalMap:()=>ci,TetrahedronGeometry:()=>Io,Texture:()=>ze,TextureLoader:()=>Ph,TextureSource:()=>On,TextureUtils:()=>du,Timer:()=>al,TimestampQuery:()=>Ig,TorusGeometry:()=>Lo,TorusKnotGeometry:()=>No,Triangle:()=>qn,TriangleFanDrawMode:()=>eg,TriangleStripDrawMode:()=>tg,TrianglesDrawMode:()=>jm,TubeGeometry:()=>Do,UVMapping:()=>ul,Uint16BufferAttribute:()=>Tr,Uint32BufferAttribute:()=>Er,Uint8BufferAttribute:()=>uh,Uint8ClampedBufferAttribute:()=>dh,Uniform:()=>kh,UniformsGroup:()=>Gh,UniformsLib:()=>wt,UniformsUtils:()=>Vf,UnsignedByteType:()=>vn,UnsignedInt101111Type:()=>Iu,UnsignedInt248Type:()=>Vs,UnsignedInt5999Type:()=>Pu,UnsignedIntType:()=>Ln,UnsignedShort4444Type:()=>fl,UnsignedShort5551Type:()=>pl,UnsignedShortType:()=>zs,VSMShadowMap:()=>Us,Vector2:()=>rt,Vector3:()=>P,Vector4:()=>Ae,VectorKeyframeTrack:()=>Zr,VideoFrameTexture:()=>xh,VideoTexture:()=>uo,WebGL3DRenderTarget:()=>lh,WebGLArrayRenderTarget:()=>oh,WebGLCoordinateSystem:()=>bn,WebGLCubeRenderTarget:()=>nc,WebGLRenderTarget:()=>tn,WebGLRenderer:()=>ic,WebGLUtils:()=>T0,WebGPUCoordinateSystem:()=>Yi,WebXRController:()=>As,WireframeGeometry:()=>Uo,WrapAroundEnding:()=>yr,ZeroCurvatureEnding:()=>Xi,ZeroFactor:()=>lf,ZeroSlopeEnding:()=>qi,ZeroStencilOp:()=>lg,createCanvasElement:()=>Ff,error:()=>Vt,getConsoleFunction:()=>Bg,log:()=>Ar,setConsoleFunction:()=>Og,warn:()=>vt,warnOnce:()=>ri});var Qd="186",Hm={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wm={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jd=0,pu=1,tf=2,Xm=3,qm=0,jr=1,ef=2,Us=3,Li=0,cn=1,Qn=2,jn=0,Fs=1,mu=2,gu=3,_u=4,nf=5,Ym=6,is=100,sf=101,rf=102,af=103,of=104,lf=200,cf=201,hf=202,uf=203,xu=204,vu=205,df=206,ff=207,pf=208,mf=209,gf=210,_f=211,xf=212,vf=213,yf=214,Xa=0,qa=1,Ya=2,vs=3,Za=4,Ja=5,$a=6,Ka=7,ta=0,Sf=1,Mf=2,Tn=0,yu=1,Su=2,Mu=3,bu=4,Au=5,wu=6,Tu=7,sh="attached",bf="detached",ul=300,ti=301,Ni=302,ea=303,na=304,Os=306,_r=1e3,mn=1001,xr=1002,Be=1003,Eu=1004,Zm=1004,Bs=1005,Jm=1005,Ce=1006,ia=1007,$m=1007,ei=1008,Km=1008,vn=1009,Cu=1010,Ru=1011,zs=1012,dl=1013,Ln=1014,on=1015,kn=1016,fl=1017,pl=1018,Vs=1020,Pu=35902,Iu=35899,Lu=1021,Nu=1022,ln=1023,Zn=1026,Di=1027,ml=1028,sa=1029,Ui=1030,gl=1031,Qm=1032,_l=1033,ra=33776,aa=33777,oa=33778,la=33779,xl=35840,vl=35841,yl=35842,Sl=35843,Ml=36196,bl=37492,Al=37496,wl=37488,Tl=37489,ca=37490,El=37491,Cl=37808,Rl=37809,Pl=37810,Il=37811,Ll=37812,Nl=37813,Dl=37814,Ul=37815,Fl=37816,Ol=37817,Bl=37818,zl=37819,Vl=37820,kl=37821,Gl=36492,Hl=36494,Wl=36495,Xl=36283,ql=36284,ha=36285,Yl=36286,Af=2200,wf=2201,Tf=2202,vr=2300,Qa=2301,za=2302,rh=2303,Xi=2400,qi=2401,yr=2402,Zl=2500,Du=2501,jm=0,tg=1,eg=2,Ef=3200,ng=3201,ig=3202,sg=3203,ci=0,Cf=1,hi="",je="srgb",Sr="srgb-linear",Mr="linear",ye="srgb",rg="",ag="rg",og="ga",lg=0,Va=7680,cg=7681,hg=7682,ug=7683,dg=34055,fg=34056,pg=5386,mg=512,gg=513,_g=514,xg=515,vg=516,yg=517,Sg=518,Rf=519,Pf=512,If=513,Lf=514,Jl=515,Nf=516,Df=517,$l=518,Uf=519,Kl=35044,Mg=35048,bg=35040,Ag=35045,wg=35049,Tg=35041,Eg=35046,Cg=35050,Rg=35042,Pg="100",Uu="300 es",bn=2e3,Yi=2001,Ig={COMPUTE:"compute",RENDER:"render"},Lg={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Ng={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},Dg={TEXTURE_COMPARE:"depthTextureCompare"},Ug={NONE:0,SHARED:1,FULL:2};function l_(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}var c_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function mr(i,t){return new c_[i](t)}function Fg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ff(){let i=br("canvas");return i.style.display="block",i}var Lp={},Zi=null;function Og(i){Zi=i}function Bg(){return Zi}function Ar(...i){let t="THREE."+i.shift();Zi?Zi("log",t,...i):console.log(t,...i)}function zg(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function vt(...i){i=zg(i);let t="THREE."+i.shift();if(Zi)Zi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Vt(...i){i=zg(i);let t="THREE."+i.shift();if(Zi)Zi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ri(...i){let t=i.join(" ");t in Lp||(Lp[t]=!0,vt(...i))}function Vg(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var kg={[Xa]:qa,[Ya]:$a,[Za]:Ka,[vs]:Ja,[qa]:Xa,[$a]:Ya,[Ka]:Za,[Ja]:vs},An=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Np=1234567,xs=Math.PI/180,ys=180/Math.PI;function Pn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function Of(i,t){return(i%t+t)%t}function h_(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function u_(i,t,e){return i!==t?(e-i)/(t-i):0}function ka(i,t,e){return(1-e)*i+e*t}function d_(i,t,e,n){return ka(i,t,1-Math.exp(-e*n))}function f_(i,t=1){return t-Math.abs(Of(i,t*2)-t)}function p_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function m_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function g_(i,t){return i+Math.floor(Math.random()*(t-i+1))}function __(i,t){return i+Math.random()*(t-i)}function x_(i){return i*(.5-Math.random())}function v_(i){i!==void 0&&(Np=i);let t=Np+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function y_(i){return i*xs}function S_(i){return i*ys}function M_(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function b_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function A_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function w_(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),p=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*h,o*c);break;default:vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Gg={DEG2RAD:xs,RAD2DEG:ys,generateUUID:Pn,clamp:Zt,euclideanModulo:Of,mapLinear:h_,inverseLerp:u_,lerp:ka,damp:d_,pingpong:f_,smoothstep:p_,smootherstep:m_,randInt:g_,randFloat:__,randFloatSpread:x_,seededRandom:v_,degToRad:y_,radToDeg:S_,isPowerOfTwo:M_,ceilPowerOfTwo:b_,floorPowerOfTwo:A_,setQuaternionFromProperEuler:w_,normalize:ae,denormalize:pn},Wf=class Wf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wf.prototype.isVector2=!0;var rt=Wf,Ke=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(d!==_||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*_;g<0&&(u=-u,f=-f,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){let y=Math.acos(g),M=Math.sin(y);m=Math.sin(m*y)/M,o=Math.sin(o*y)/M,l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+_*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+_*o;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-o*f,t[e+2]=c*p+h*f+o*u-l*d,t[e+3]=h*p-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Xf=class Xf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sd.copy(this).projectOnVector(t),this.sub(sd)}reflect(t){return this.sub(sd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xf.prototype.isVector3=!0;var P=Xf,sd=new P,Dp=new Ke,qf=class qf{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],_=s[0],g=s[3],m=s[6],y=s[1],M=s[4],x=s[7],A=s[2],b=s[5],E=s[8];return r[0]=a*_+o*y+l*A,r[3]=a*g+o*M+l*b,r[6]=a*m+o*x+l*E,r[1]=c*_+h*y+d*A,r[4]=c*g+h*M+d*b,r[7]=c*m+h*x+d*E,r[2]=u*_+f*y+p*A,r[5]=u*g+f*M+p*b,r[8]=u*m+f*x+p*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=e*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=d*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ri("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rd.makeScale(t,e)),this}rotate(t){return ri("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rd.makeRotation(-t)),this}translate(t,e){return ri("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};qf.prototype.isMatrix3=!0;var jt=qf,rd=new jt,Up=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fp=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T_(){let i={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ye&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ye&&(s.r=gr(s.r),s.g=gr(s.g),s.b=gr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?Mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ri("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ri("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Sr]:{primaries:t,whitePoint:n,transfer:Mr,toXYZ:Up,fromXYZ:Fp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:Up,fromXYZ:Fp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),i}var he=T_();function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Js,ja=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Js===void 0&&(Js=br("canvas")),Js.width=t.width,Js.height=t.height;let s=Js.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Js}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=br("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ti(e[n]/255)*255):e[n]=Ti(e[n]);return{data:e,width:t.width,height:t.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},E_=0,On=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=Pn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ad(s[a].image)):r.push(ad(s[a]))}else r=ad(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ad(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ja.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}var ah=class extends On{constructor(t=null){ri('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(t),this.isSource=!0}},C_=0,od=new P,ze=class i extends An{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=mn,s=mn,r=Ce,a=ei,o=ln,l=vn,c=i.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Pn(),this.name="",this.source=new On(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(od).x}get height(){return this.source.getSize(od).y}get depth(){return this.source.getSize(od).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ul)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _r:t.x=t.x-Math.floor(t.x);break;case mn:t.x=t.x<0?0:1;break;case xr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _r:t.y=t.y-Math.floor(t.y);break;case mn:t.y=t.y<0?0:1;break;case xr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=ul;ze.DEFAULT_ANISOTROPY=1;var Yf=class Yf{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,x=(f+1)/2,A=(m+1)/2,b=(h+u)/4,E=(d+_)/4,v=(p+g)/4;return M>x&&M>A?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=b/n,r=E/n):x>A?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=v/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=E/r,s=v/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-p)*(g-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yf.prototype.isVector4=!0;var Ae=Yf,wr=class extends An{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ce,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new ze(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ce,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new On(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends wr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ss=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},oh=class extends tn{constructor(t=1,e=1,n=1,s={}){super(t,e,s),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Ss(null,t,e,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}},Ms=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},lh=class extends tn{constructor(t=1,e=1,n=1,s={}){super(t,e,s),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Ms(null,t,e,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}},fu=class fu{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,p,_,g)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,p,_,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fu().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/$s.setFromMatrixColumn(t,0).length(),r=1/$s.setFromMatrixColumn(t,1).length(),a=1/$s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,p=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u+_*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u-_*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,p=o*h,_=o*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,p=o*l,_=o*c;e[0]=l*h,e[4]=_-u*d,e[8]=p*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-_*d}else if(t.order==="XZY"){let u=a*l,f=a*c,p=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=a*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(R_,t,P_)}lookAt(t,e,n){let s=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),zi.crossVectors(n,Cn),zi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),zi.crossVectors(n,Cn)),zi.normalize(),mc.crossVectors(Cn,zi),s[0]=zi.x,s[4]=mc.x,s[8]=Cn.x,s[1]=zi.y,s[5]=mc.y,s[9]=Cn.y,s[2]=zi.z,s[6]=mc.z,s[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],y=n[3],M=n[7],x=n[11],A=n[15],b=s[0],E=s[4],v=s[8],T=s[12],R=s[1],I=s[5],U=s[9],O=s[13],L=s[2],B=s[6],q=s[10],X=s[14],at=s[3],Y=s[7],et=s[11],it=s[15];return r[0]=a*b+o*R+l*L+c*at,r[4]=a*E+o*I+l*B+c*Y,r[8]=a*v+o*U+l*q+c*et,r[12]=a*T+o*O+l*X+c*it,r[1]=h*b+d*R+u*L+f*at,r[5]=h*E+d*I+u*B+f*Y,r[9]=h*v+d*U+u*q+f*et,r[13]=h*T+d*O+u*X+f*it,r[2]=p*b+_*R+g*L+m*at,r[6]=p*E+_*I+g*B+m*Y,r[10]=p*v+_*U+g*q+m*et,r[14]=p*T+_*O+g*X+m*it,r[3]=y*b+M*R+x*L+A*at,r[7]=y*E+M*I+x*B+A*Y,r[11]=y*v+M*U+x*q+A*et,r[15]=y*T+M*O+x*X+A*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15],y=l*f-c*u,M=o*f-c*d,x=o*u-l*d,A=a*f-c*h,b=a*u-l*h,E=a*d-o*h;return e*(_*y-g*M+m*x)-n*(p*y-g*A+m*b)+s*(p*M-_*A+m*E)-r*(p*x-_*b+g*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],y=e*o-n*a,M=e*l-s*a,x=e*c-r*a,A=n*l-s*o,b=n*c-r*o,E=s*c-r*l,v=h*_-d*p,T=h*g-u*p,R=h*m-f*p,I=d*g-u*_,U=d*m-f*_,O=u*m-f*g,L=y*O-M*U+x*I+A*R-b*T+E*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/L;return t[0]=(o*O-l*U+c*I)*B,t[1]=(s*U-n*O-r*I)*B,t[2]=(_*E-g*b+m*A)*B,t[3]=(u*b-d*E-f*A)*B,t[4]=(l*R-a*O-c*T)*B,t[5]=(e*O-s*R+r*T)*B,t[6]=(g*x-p*E-m*M)*B,t[7]=(h*E-u*x+f*M)*B,t[8]=(a*U-o*R+c*v)*B,t[9]=(n*R-e*U-r*v)*B,t[10]=(p*b-_*x+m*y)*B,t[11]=(d*x-h*b-f*y)*B,t[12]=(o*T-a*I-l*v)*B,t[13]=(e*I-n*T+s*v)*B,t[14]=(_*M-p*A-g*y)*B,t[15]=(h*A-d*M+u*y)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,_=a*h,g=a*d,m=o*d,y=l*c,M=l*h,x=l*d,A=n.x,b=n.y,E=n.z;return s[0]=(1-(_+m))*A,s[1]=(f+x)*A,s[2]=(p-M)*A,s[3]=0,s[4]=(f-x)*b,s[5]=(1-(u+m))*b,s[6]=(g+y)*b,s[7]=0,s[8]=(p+M)*E,s[9]=(g-y)*E,s[10]=(1-(u+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=$s.set(s[0],s[1],s[2]).length(),o=$s.set(s[4],s[5],s[6]).length(),l=$s.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Gn.copy(this);let c=1/a,h=1/o,d=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,e.setFromRotationMatrix(Gn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=bn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===bn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Yi)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=bn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===bn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===Yi)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};fu.prototype.isMatrix4=!0;var Jt=fu,$s=new P,Gn=new Jt,R_=new P(0,0,0),P_=new P(1,1,1),zi=new P,mc=new P,Cn=new P,Op=new Jt,Bp=new Ke,zn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Op.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Op,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bp.setFromEuler(this),this.setFromQuaternion(Bp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},I_=0,zp=new P,Ks=new Ke,xi=new Jt,gc=new P,wa=new P,L_=new P,N_=new Ke,Vp=new P(1,0,0),kp=new P(0,1,0),Gp=new P(0,0,1),Hp={type:"added"},D_={type:"removed"},Qs={type:"childadded",child:null},ld={type:"childremoved",child:null},xe=class i extends An{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new zn,n=new Ke,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new jt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ks.setFromAxisAngle(t,e),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(t,e){return Ks.setFromAxisAngle(t,e),this.quaternion.premultiply(Ks),this}rotateX(t){return this.rotateOnAxis(Vp,t)}rotateY(t){return this.rotateOnAxis(kp,t)}rotateZ(t){return this.rotateOnAxis(Gp,t)}translateOnAxis(t,e){return zp.copy(t).applyQuaternion(this.quaternion),this.position.add(zp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vp,t)}translateY(t){return this.translateOnAxis(kp,t)}translateZ(t){return this.translateOnAxis(Gp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gc.copy(t):gc.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(wa,gc,this.up):xi.lookAt(gc,wa,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Ks.setFromRotationMatrix(xi),this.quaternion.premultiply(Ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hp),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(D_),ld.child=t,this.dispatchEvent(ld),ld.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hp),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,t,L_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,N_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xe.DEFAULT_UP=new P(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wi=class extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},U_={type:"move"},As=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(U_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new wi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Hg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},_c={h:0,s:0,l:0};function cd(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Et=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=Of(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=cd(a,r,t+1/3),this.g=cd(a,r,t),this.b=cd(a,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=je){function n(r){r!==void 0&&parseFloat(r)<1&&vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){let n=Hg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return he.workingToColorSpace(rn.copy(this),t),Math.round(Zt(rn.r*255,0,255))*65536+Math.round(Zt(rn.g*255,0,255))*256+Math.round(Zt(rn.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(rn.copy(this),e);let n=rn.r,s=rn.g,r=rn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=je){he.workingToColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,s=rn.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(_c);let n=ka(Vi.h,_c.h,e),s=ka(Vi.s,_c.s,e),r=ka(Vi.l,_c.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Et;Et.NAMES=Hg;var to=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},eo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Et(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ws=class extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Hn=new P,vi=new P,hd=new P,yi=new P,js=new P,tr=new P,Wp=new P,ud=new P,dd=new P,fd=new P,pd=new Ae,md=new Ae,gd=new Ae,qn=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Hn.subVectors(t,e),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Hn.subVectors(s,e),vi.subVectors(n,e),hd.subVectors(t,e);let a=Hn.dot(Hn),o=Hn.dot(vi),l=Hn.dot(hd),c=vi.dot(vi),h=vi.dot(hd),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return pd.setScalar(0),md.setScalar(0),gd.setScalar(0),pd.fromBufferAttribute(t,e),md.fromBufferAttribute(t,n),gd.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(pd,r.x),a.addScaledVector(md,r.y),a.addScaledVector(gd,r.z),a}static isFrontFacing(t,e,n,s){return Hn.subVectors(n,e),vi.subVectors(t,e),Hn.cross(vi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Hn.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;js.subVectors(s,n),tr.subVectors(r,n),ud.subVectors(t,n);let l=js.dot(ud),c=tr.dot(ud);if(l<=0&&c<=0)return e.copy(n);dd.subVectors(t,s);let h=js.dot(dd),d=tr.dot(dd);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(js,a);fd.subVectors(t,r);let f=js.dot(fd),p=tr.dot(fd);if(p>=0&&f<=p)return e.copy(r);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(tr,o);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return Wp.subVectors(r,s),o=(d-h)/(d-h+(f-p)),e.copy(s).addScaledVector(Wp,o);let m=1/(g+_+u);return a=_*m,o=u*m,e.copy(n).addScaledVector(js,a).addScaledVector(tr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ye=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Wn):Wn.fromBufferAttribute(r,a),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xc.copy(n.boundingBox)),xc.applyMatrix4(t.matrixWorld),this.union(xc)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ta),vc.subVectors(this.max,Ta),er.subVectors(t.a,Ta),nr.subVectors(t.b,Ta),ir.subVectors(t.c,Ta),ki.subVectors(nr,er),Gi.subVectors(ir,nr),as.subVectors(er,ir);let e=[0,-ki.z,ki.y,0,-Gi.z,Gi.y,0,-as.z,as.y,ki.z,0,-ki.x,Gi.z,0,-Gi.x,as.z,0,-as.x,-ki.y,ki.x,0,-Gi.y,Gi.x,0,-as.y,as.x,0];return!_d(e,er,nr,ir,vc)||(e=[1,0,0,0,1,0,0,0,1],!_d(e,er,nr,ir,vc))?!1:(yc.crossVectors(ki,Gi),e=[yc.x,yc.y,yc.z],_d(e,er,nr,ir,vc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Si=[new P,new P,new P,new P,new P,new P,new P,new P],Wn=new P,xc=new Ye,er=new P,nr=new P,ir=new P,ki=new P,Gi=new P,as=new P,Ta=new P,vc=new P,yc=new P,os=new P;function _d(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){os.fromArray(i,r);let o=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),l=t.dot(os),c=e.dot(os),h=n.dot(os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ai=F_();function F_(){let i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Mn(i){Math.abs(i)>65504&&vt("DataUtils.toHalfFloat(): Value out of range."),i=Zt(i,-65504,65504),Ai.floatView[0]=i;let t=Ai.uint32View[0],e=t>>23&511;return Ai.baseTable[e]+((t&8388607)>>Ai.shiftTable[e])}function Oa(i){let t=i>>10;return Ai.uint32View[0]=Ai.mantissaTable[Ai.offsetTable[t]+(i&1023)]+Ai.exponentTable[t],Ai.floatView[0]}var ch=class{static toHalfFloat(t){return Mn(t)}static fromHalfFloat(t){return Oa(t)}},We=new P,Sc=new rt,O_=0,be=class extends An{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:O_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kl,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Sc.fromBufferAttribute(this,e),Sc.applyMatrix3(t),this.setXY(e,Sc.x,Sc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},hh=class extends be{constructor(t,e,n){super(new Int8Array(t),e,n)}},uh=class extends be{constructor(t,e,n){super(new Uint8Array(t),e,n)}},dh=class extends be{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}},fh=class extends be{constructor(t,e,n){super(new Int16Array(t),e,n)}},Tr=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}},ph=class extends be{constructor(t,e,n){super(new Int32Array(t),e,n)}},Er=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}},mh=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=Oa(this.array[t*this.itemSize]);return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=Mn(e),this}getY(t){let e=Oa(this.array[t*this.itemSize+1]);return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=Mn(e),this}getZ(t){let e=Oa(this.array[t*this.itemSize+2]);return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=Mn(e),this}getW(t){let e=Oa(this.array[t*this.itemSize+3]);return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=Mn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=Mn(e),this.array[t+1]=Mn(n),this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.array[t+0]=Mn(e),this.array[t+1]=Mn(n),this.array[t+2]=Mn(s),this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.array[t+0]=Mn(e),this.array[t+1]=Mn(n),this.array[t+2]=Mn(s),this.array[t+3]=Mn(r),this}},Rt=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}},B_=new Ye,Ea=new P,xd=new P,Xe=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):B_.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ea.subVectors(t,this.center);let e=Ea.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ea,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ea.copy(t.center).add(xd)),this.expandByPoint(Ea.copy(t.center).sub(xd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},z_=0,Un=new Jt,vd=new xe,sr=new P,Rn=new Ye,Ca=new Ye,$e=new P,ie=class i extends An{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(l_(t)?Er:Tr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,e,n){return Un.makeTranslation(t,e,n),this.applyMatrix4(Un),this}scale(t,e,n){return Un.makeScale(t,e,n),this.applyMatrix4(Un),this}lookAt(t){return vd.lookAt(t),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ye);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ca.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(Rn.min,Ca.min),Rn.expandByPoint($e),$e.addVectors(Rn.max,Ca.max),Rn.expandByPoint($e)):(Rn.expandByPoint(Ca.min),Rn.expandByPoint(Ca.max))}Rn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared($e));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)$e.fromBufferAttribute(o,c),l&&(sr.fromBufferAttribute(t,c),$e.add(sr)),s=Math.max(s,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new be(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new P,l[v]=new P;let c=new P,h=new P,d=new P,u=new rt,f=new rt,p=new rt,_=new P,g=new P;function m(v,T,R){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(I),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),o[v].add(_),o[T].add(_),o[R].add(_),l[v].add(g),l[T].add(g),l[R].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,T=y.length;v<T;++v){let R=y[v],I=R.start,U=R.count;for(let O=I,L=I+U;O<L;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let M=new P,x=new P,A=new P,b=new P;function E(v){A.fromBufferAttribute(s,v),b.copy(A);let T=o[v];M.copy(T),M.sub(A.multiplyScalar(A.dot(T))).normalize(),x.crossVectors(b,T);let I=x.dot(l[v])<0?-1:1;a.setXYZW(v,M.x,M.y,M.z,I)}for(let v=0,T=y.length;v<T;++v){let R=y[v],I=R.start,U=R.count;for(let O=I,L=I+U;O<L;O+=3)E(t.getX(O+0)),E(t.getX(O+1)),E(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new be(u,h,d)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ts=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Kl,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},fn=new P,Ji=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ar("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ar("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},yd=new P,V_=new P,k_=new jt,Fn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=yd.subVectors(n,e).cross(V_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(yd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||k_.getNormalMatrix(t),s=this.coplanarPoint(yd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},G_=0,qe=class extends An{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=Fs,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xu,this.blendDst=vu,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Va,this.stencilZFail=Va,this.stencilZPass=Va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){vt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Fn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Cr=class extends qe{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},rr,Ra=new P,ar=new P,or=new P,lr=new rt,Pa=new rt,Wg=new Jt,Mc=new P,Ia=new P,bc=new P,Xp=new rt,Sd=new rt,qp=new rt,no=class extends xe{constructor(t=new Cr){if(super(),this.isSprite=!0,this.type="Sprite",rr===void 0){rr=new ie;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ts(e,5);rr.setIndex([0,1,2,0,2,3]),rr.setAttribute("position",new Ji(n,3,0,!1)),rr.setAttribute("uv",new Ji(n,2,3,!1))}this.geometry=rr,this.material=t,this.center=new rt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Vt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ar.setFromMatrixScale(this.matrixWorld),Wg.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),or.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ar.multiplyScalar(-or.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ac(Mc.set(-.5,-.5,0),or,a,ar,s,r),Ac(Ia.set(.5,-.5,0),or,a,ar,s,r),Ac(bc.set(.5,.5,0),or,a,ar,s,r),Xp.set(0,0),Sd.set(1,0),qp.set(1,1);let o=t.ray.intersectTriangle(Mc,Ia,bc,!1,Ra);if(o===null&&(Ac(Ia.set(-.5,.5,0),or,a,ar,s,r),Sd.set(0,1),o=t.ray.intersectTriangle(Mc,bc,Ia,!1,Ra),o===null))return;let l=t.ray.origin.distanceTo(Ra);l<t.near||l>t.far||e.push({distance:l,point:Ra.clone(),uv:qn.getInterpolation(Ra,Mc,Ia,bc,Xp,Sd,qp,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ac(i,t,e,n,s,r){lr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Pa.x=r*lr.x-s*lr.y,Pa.y=s*lr.x+r*lr.y):Pa.copy(lr),i.copy(t),i.x+=Pa.x,i.y+=Pa.y,i.applyMatrix4(Wg)}var wc=new P,Yp=new P,io=class extends xe{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);let e=t.levels;for(let n=0,s=e.length;n<s;n++){let r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);let s=this.levels,r;for(r=0;r<s.length&&!(e<s[r].distance);r++);return s.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){let e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){let s=e.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){let e=this.levels;if(e.length>0){let n,s;for(n=1,s=e.length;n<s;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){wc.setFromMatrixPosition(this.matrixWorld);let s=t.ray.origin.distanceTo(wc);this.getObjectForDistance(s).raycast(t,e)}}update(t){let e=this.levels;if(e.length>1){wc.setFromMatrixPosition(t.matrixWorld),Yp.setFromMatrixPosition(this.matrixWorld);let n=wc.distanceTo(Yp)/t.zoom;e[0].object.visible=!0;let s,r;for(s=1,r=e.length;s<r;s++){let a=e[s].distance;if(e[s].object.visible&&(a-=a*e[s].hysteresis),n>=a)e[s-1].object.visible=!1,e[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)e[s].object.visible=!1}}toJSON(t){let e=super.toJSON(t);e.object.autoUpdate=this.autoUpdate,e.object.levels=[];let n=this.levels;for(let s=0,r=n.length;s<r;s++){let a=n[s];e.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return e}},Mi=new P,Md=new P,Tc=new P,Ec=new P,Ei=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mi.copy(this.origin).addScaledVector(this.direction,e),Mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Md.copy(t).add(e).multiplyScalar(.5),Tc.copy(e).sub(t).normalize(),Ec.copy(this.origin).sub(Md);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Tc),o=Ec.dot(this.direction),l=-Ec.dot(Tc),c=Ec.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Md).addScaledVector(Tc,u),f}intersectSphere(t,e){if(t.radius<0)return null;Mi.subVectors(t.center,this.origin);let n=Mi.dot(this.direction),s=Mi.dot(Mi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,p=e.x-a.x,_=e.y-a.y,g=e.z-a.z,m=n.x-a.x,y=n.y-a.y,M=n.z-a.z,x=Math.abs(l),A=Math.abs(c),b=Math.abs(h),E,v,T,R,I,U,O,L,B,q,X,at;if(x>=A&&x>=b?(T=l,U=d,B=p,at=m,l>=0?(E=c,v=h,R=u,I=f,O=_,L=g,q=y,X=M):(E=h,v=c,R=f,I=u,O=g,L=_,q=M,X=y)):A>=b?(T=c,U=u,B=_,at=y,c>=0?(E=h,v=l,R=f,I=d,O=g,L=p,q=M,X=m):(E=l,v=h,R=d,I=f,O=p,L=g,q=m,X=M)):(T=h,U=f,B=g,at=M,h>=0?(E=l,v=c,R=d,I=u,O=p,L=_,q=m,X=y):(E=c,v=l,R=u,I=d,O=_,L=p,q=y,X=m)),T===0)return null;let Y=E/T,et=v/T,it=1/T,Ut=R-Y*U,Ct=I-et*U,fe=O-Y*B,ee=L-et*B,se=q-Y*at,Z=X-et*at,nt=se*ee-Z*fe,Mt=Ut*Z-Ct*se,Yt=fe*Ct-ee*Ut;if(s){if(nt<0||Mt<0||Yt<0)return null}else if((nt<0||Mt<0||Yt<0)&&(nt>0||Mt>0||Yt>0))return null;let pt=nt+Mt+Yt;if(pt===0)return null;let Xt=it*(nt*U+Mt*B+Yt*at);return(pt>0?Xt<0:Xt>0)?null:this.at(Xt/pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jn=class extends qe{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Zp=new Jt,ls=new Ei,Cc=new Xe,Jp=new P,Rc=new P,Pc=new P,Ic=new P,bd=new P,Lc=new P,$p=new P,Nc=new P,Ne=class extends xe{constructor(t=new ie,e=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Lc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(bd.fromBufferAttribute(d,t),a?Lc.addScaledVector(bd,h):Lc.addScaledVector(bd.sub(e),h))}e.add(Lc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cc.copy(n.boundingSphere),Cc.applyMatrix4(r),ls.copy(t.ray).recast(t.near),!(Cc.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Cc,Jp)===null||ls.origin.distanceToSquared(Jp)>(t.far-t.near)**2))&&(Zp.copy(r).invert(),ls.copy(t.ray).applyMatrix4(Zp),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ls)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),M=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,A=M;x<A;x+=3){let b=o.getX(x),E=o.getX(x+1),v=o.getX(x+2);s=Dc(this,m,t,n,c,h,d,b,E,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let y=o.getX(g),M=o.getX(g+1),x=o.getX(g+2);s=Dc(this,a,t,n,c,h,d,y,M,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,A=M;x<A;x+=3){let b=x,E=x+1,v=x+2;s=Dc(this,m,t,n,c,h,d,b,E,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let y=g,M=g+1,x=g+2;s=Dc(this,a,t,n,c,h,d,y,M,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function H_(i,t,e,n,s,r,a,o){let l;if(t.side===cn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Li,o),l===null)return null;Nc.copy(o),Nc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Nc);return c<e.near||c>e.far?null:{distance:c,point:Nc.clone(),object:i}}function Dc(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Rc),i.getVertexPosition(l,Pc),i.getVertexPosition(c,Ic);let h=H_(i,t,e,n,Rc,Pc,Ic,$p);if(h){let d=new P;qn.getBarycoord($p,Rc,Pc,Ic,d),s&&(h.uv=qn.getInterpolatedAttribute(s,o,l,c,d,new rt)),r&&(h.uv1=qn.getInterpolatedAttribute(r,o,l,c,d,new rt)),a&&(h.normal=qn.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};qn.getNormal(Rc,Pc,Ic,u.normal),h.face=u,h.barycoord=d}return h}var La=new Ae,Kp=new Ae,Qp=new Ae,W_=new Ae,jp=new Jt,Uc=new P,Ad=new Xe,tm=new Jt,wd=new Ei,so=class extends Ne{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sh,this.bindMatrix=new Jt,this.bindMatrixInverse=new Jt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ye),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Uc),this.boundingBox.expandByPoint(Uc)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xe),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Uc),this.boundingSphere.expandByPoint(Uc)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ad.copy(this.boundingSphere),Ad.applyMatrix4(s),t.ray.intersectsSphere(Ad)!==!1&&(tm.copy(s).invert(),wd.copy(t.ray).applyMatrix4(tm),!(this.boundingBox!==null&&wd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,wd)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Ae,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===sh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bf?this.bindMatrixInverse.copy(this.bindMatrix).invert():vt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;Kp.fromBufferAttribute(s.attributes.skinIndex,t),Qp.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(La.copy(e),e.set(0,0,0,0)):(La.set(...e,1),e.set(0,0,0)),La.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Qp.getComponent(r);if(a!==0){let o=Kp.getComponent(r);jp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(W_.copy(La).applyMatrix4(jp),a)}}return e.isVector4&&(e.w=La.w),e.applyMatrix4(this.bindMatrixInverse)}},Rr=class extends xe{constructor(){super(),this.isBone=!0,this.type="Bone"}},gn=class extends ze{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Be,h=Be,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},em=new Jt,X_=new Jt,ro=class i{constructor(t=[],e=[]){this.uuid=Pn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){vt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Jt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Jt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let o=t[r]?t[r].matrixWorld:X_;em.multiplyMatrices(o,e[r]),em.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new gn(e,t,t,ln,on);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],a=e[r];a===void 0&&(vt("Skeleton: No bone found with UUID:",r),a=new Rr),this.bones.push(a),this.boneInverses.push(new Jt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let a=e[s];t.bones.push(a.uuid);let o=n[s];t.boneInverses.push(o.toArray())}return t}},Ci=class extends be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},cr=new Jt,nm=new Jt,Fc=[],im=new Ye,q_=new Jt,Na=new Ne,Da=new Xe,ao=class extends Ne{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ci(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,q_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ye),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cr),im.copy(t.boundingBox).applyMatrix4(cr),this.boundingBox.union(im)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xe),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cr),Da.copy(t.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(Da)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Na.geometry=this.geometry,Na.material=this.material,Na.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Da.copy(this.boundingSphere),Da.applyMatrix4(n),t.ray.intersectsSphere(Da)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cr),nm.multiplyMatrices(n,cr),Na.matrixWorld=nm,Na.raycast(t,Fc);for(let a=0,o=Fc.length;a<o;a++){let l=Fc[a];l.instanceId=r,l.object=this,e.push(l)}Fc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ci(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new gn(new Float32Array(s*this.count),s,this.count,ml,on));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},cs=new Xe,Y_=new rt(.5,.5),Oc=new P,ai=class{constructor(t=new Fn,e=new Fn,n=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],y=r[12],M=r[13],x=r[14],A=r[15];if(s[0].setComponents(c-a,f-h,m-p,A-y).normalize(),s[1].setComponents(c+a,f+h,m+p,A+y).normalize(),s[2].setComponents(c+o,f+d,m+_,A+M).normalize(),s[3].setComponents(c-o,f-d,m-_,A-M).normalize(),n)s[4].setComponents(l,u,g,x).normalize(),s[5].setComponents(c-l,f-u,m-g,A-x).normalize();else if(s[4].setComponents(c-l,f-u,m-g,A-x).normalize(),e===bn)s[5].setComponents(c+l,f+u,m+g,A+x).normalize();else if(e===Yi)s[5].setComponents(l,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(t){cs.center.set(0,0,0);let e=Y_.distanceTo(t.center);return cs.radius=.7071067811865476+e,cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Oc.x=s.normal.x>0?t.max.x:t.min.x,Oc.y=s.normal.y>0?t.max.y:t.min.y,Oc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},sm=new Jt,oo=class i{constructor(){this.coordinateSystem=bn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];sm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ai),n[s].setFromProjectionMatrix(sm,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ai),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};function Td(i,t){return i-t}function Z_(i,t){return i.z-t.z}function J_(i,t){return t.z-i.z}var Vd=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,s){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];a.push(o),this.index++,o.start=t,o.count=e,o.z=n,o.index=s}reset(){this.list.length=0,this.index=0}},Sn=new Jt,$_=new Et(1,1,1),K_=new ai,Q_=new oo,Bc=new Ye,hs=new Xe,Ua=new P,rm=new P,j_=new P,Ed=new Vd,an=new Ne,zc=[];function tx(i,t,e=0){let n=t.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==t.array.constructor){let s=i.count;for(let r=0;r<s;r++)for(let a=0;a<n;a++)t.setComponent(r+e,a,i.getComponent(r,a))}else t.array.set(i.array,e*n);t.needsUpdate=!0}function us(i,t){if(i.constructor!==t.constructor){let e=Math.min(i.length,t.length);for(let n=0;n<e;n++)t[n]=i[n]}else{let e=Math.min(i.length,t.length);t.set(new i.constructor(i.buffer,0,e))}}var lo=class extends Ne{constructor(t,e,n=e*2,s){super(new ie,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4),n=new gn(e,t,t,ln,on);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Uint32Array(t*t),n=new gn(e,t,t,sa,Ln);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Float32Array(t*t*4).fill(1),n=new gn(e,t,t,ln,on);n.colorSpace=he.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){let e=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in t.attributes){let a=t.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),d=new be(h,l,c);e.setAttribute(r,d)}if(t.getIndex()!==null){let r=n>65535?new Uint32Array(s):new Uint16Array(s);e.setIndex(new be(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){let e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let s=t.getAttribute(n),r=e.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){let e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){let e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ye);let t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,Sn),this.getBoundingBoxAt(r,Bc).applyMatrix4(Sn),t.union(Bc)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xe);let t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,Sn),this.getBoundingSphereAt(r,hs).applyMatrix4(Sn),t.union(hs)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:t},s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Td),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;Sn.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;let a=this._colorsTexture;return a&&($_.toArray(a.image.data,s*4),a.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);let s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=e===-1?t.getAttribute("position").count:e;let a=t.getIndex();if(a!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?a.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Td),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,t),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);let n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),a=e.getIndex(),o=this._geometryInfo[t];if(s&&a.count>o.reservedIndexCount||e.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=e.getAttribute("position").count;for(let h in n.attributes){let d=e.getAttribute(h),u=n.getAttribute(h);tx(d,u,l);let f=d.itemSize;for(let p=d.count,_=c;p<_;p++){let g=l+p;for(let m=0;m<f;m++)u.setComponent(g,m,0)}u.needsUpdate=!0,u.addUpdateRange(l*f,c*f)}if(s){let h=o.indexStart,d=o.reservedIndexCount;o.indexCount=e.getIndex().count;for(let u=0;u<a.count;u++)r.setX(h+u,l+a.getX(u));for(let u=a.count,f=d;u<f;u++)r.setX(h+u,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=s?o.indexStart:o.vertexStart,o.count=s?o.indexCount:o.vertexCount,o.boundingBox=null,e.boundingBox!==null&&(o.boundingBox=e.boundingBox.clone()),o.boundingSphere=null,e.boundingSphere!==null&&(o.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){let e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;let n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].active&&n[s].geometryIndex===t&&this.deleteInstance(s);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0,n=this._geometryInfo,s=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){let l=s[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){let{indexStart:h,vertexStart:d,reservedIndexCount:u}=c,f=r.index,p=f.array,_=t-d;for(let g=h;g<h+u;g++)p[g]=p[g]+_;f.array.copyWithin(e,h,h+u),f.addUpdateRange(e,u),f.needsUpdate=!0,c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){let{vertexStart:h,reservedVertexCount:d}=c,u=r.attributes;for(let f in u){let p=u[f],{array:_,itemSize:g}=p;_.copyWithin(t*g,h*g,(h+d)*g),p.addUpdateRange(t*g,d*g),p.needsUpdate=!0}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,s=this._geometryInfo[t];if(s.boundingBox===null){let r=new Ye,a=n.index,o=n.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(Ua.fromBufferAttribute(o,h))}s.boundingBox=r}return e.copy(s.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,s=this._geometryInfo[t];if(s.boundingSphere===null){let r=new Xe;this.getBoundingBoxAt(t,Bc),Bc.getCenter(r.center);let a=n.index,o=n.attributes.position,l=0;for(let c=s.start,h=s.start+s.count;c<h;c++){let d=c;a&&(d=a.getX(d)),Ua.fromBufferAttribute(o,d),l=Math.max(l,r.center.distanceToSquared(Ua))}r.radius=Math.sqrt(l),s.boundingSphere=r}return e.copy(s.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);let n=this._matricesTexture,s=this._matricesTexture.image.data;return e.toArray(s,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this._visibilityChanged=!0,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);let n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){let e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(Td);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);let s=new Int32Array(t),r=new Int32Array(t);us(this._multiDrawCounts,s),us(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=t;let a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),us(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),us(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),us(l.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){let n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new ie,this._initializeGeometry(r));let a=this.geometry;r.index&&us(r.index.array,a.index.array);for(let o in r.attributes)us(r.attributes[o].array,a.attributes[o].array)}raycast(t,e){let n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,a=this.geometry;an.material=this.material,an.geometry.index=a.index,an.geometry.attributes=a.attributes,an.geometry.boundingBox===null&&(an.geometry.boundingBox=new Ye),an.geometry.boundingSphere===null&&(an.geometry.boundingSphere=new Xe);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;let c=n[o].geometryIndex,h=s[c];an.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,an.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,an.geometry.boundingBox),this.getBoundingSphereAt(c,an.geometry.boundingSphere),an.raycast(t,zc);for(let d=0,u=zc.length;d<u;d++){let f=zc[d];f.object=this,f.batchId=o,e.push(f)}zc.length=0}an.material=null,an.geometry.index=null,an.geometry.attributes={},an.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._multiDrawBytesPerElement=t._multiDrawBytesPerElement,this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(t,e,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let a=s.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=1;r.wireframe&&(l=2,o=s.attributes.position.count>65535?4:2);let c=this._instanceInfo,h=this._multiDrawStarts,d=this._multiDrawCounts,u=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,_=p.image.data,g=n.isArrayCamera?Q_:K_;f&&(n.isArrayCamera?g.setFromArrayCamera(n):(Sn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),g.setFromProjectionMatrix(Sn,n.coordinateSystem,n.reversedDepth)));let m=0;if(this.sortObjects){Sn.copy(this.matrixWorld).invert(),Ua.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Sn),rm.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Sn);for(let x=0,A=c.length;x<A;x++)if(c[x].visible&&c[x].active){let b=c[x].geometryIndex;this.getMatrixAt(x,Sn),this.getBoundingSphereAt(b,hs).applyMatrix4(Sn);let E=!1;if(f&&(E=!g.intersectsSphere(hs)),!E){let v=u[b],T=j_.subVectors(hs.center,Ua).dot(rm);Ed.push(v.start,v.count,T,x)}}let y=Ed.list,M=this.customSort;M===null?y.sort(r.transparent?J_:Z_):M.call(this,y,n);for(let x=0,A=y.length;x<A;x++){let b=y[x];h[m]=b.start*o*l,d[m]=b.count*l,_[m]=b.index,m++}Ed.reset()}else for(let y=0,M=c.length;y<M;y++)if(c[y].visible&&c[y].active){let x=c[y].geometryIndex,A=!1;if(f&&(this.getMatrixAt(y,Sn),this.getBoundingSphereAt(x,hs).applyMatrix4(Sn),A=!g.intersectsSphere(hs)),!A){let b=u[x];h[m]=b.start*o*l,d[m]=b.count*l,_[m]=y,m++}}p.needsUpdate=!0,this._multiDrawCount=m,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeShadow(t,e,n,s,r,a){this.onBeforeRender(t,null,s,r,a)}},Qe=class extends qe{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},gh=new P,_h=new P,am=new Jt,Fa=new Ei,Vc=new Xe,Cd=new P,om=new P,$n=class extends xe{constructor(t=new ie,e=new Qe){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)gh.fromBufferAttribute(e,s-1),_h.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=gh.distanceTo(_h);t.setAttribute("lineDistance",new Rt(n,1))}else vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vc.copy(n.boundingSphere),Vc.applyMatrix4(s),Vc.radius+=r,t.ray.intersectsSphere(Vc)===!1)return;am.copy(s).invert(),Fa.copy(t.ray).applyMatrix4(am);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=c){let m=h.getX(_),y=h.getX(_+1),M=kc(this,t,Fa,l,m,y,_);M&&e.push(M)}if(this.isLineLoop){let _=h.getX(p-1),g=h.getX(f),m=kc(this,t,Fa,l,_,g,p-1);m&&e.push(m)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=c){let m=kc(this,t,Fa,l,_,_+1,_);m&&e.push(m)}if(this.isLineLoop){let _=kc(this,t,Fa,l,p-1,f,p-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function kc(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(gh.fromBufferAttribute(o,s),_h.fromBufferAttribute(o,r),e.distanceSqToSegment(gh,_h,Cd,om)>n)return;Cd.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Cd);if(!(c<t.near||c>t.far))return{distance:c,point:om.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var lm=new P,cm=new P,In=class extends $n{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)lm.fromBufferAttribute(e,s),cm.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+lm.distanceTo(cm);t.setAttribute("lineDistance",new Rt(n,1))}else vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},co=class extends $n{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Pr=class extends qe{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},hm=new Jt,kd=new Ei,Gc=new Xe,Hc=new P,ho=class extends xe{constructor(t=new ie,e=new Pr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gc.copy(n.boundingSphere),Gc.applyMatrix4(s),Gc.radius+=r,t.ray.intersectsSphere(Gc)===!1)return;hm.copy(s).invert(),kd.copy(t.ray).applyMatrix4(hm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,_=f;p<_;p++){let g=c.getX(p);Hc.fromBufferAttribute(d,g),um(Hc,g,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,_=f;p<_;p++)Hc.fromBufferAttribute(d,p),um(Hc,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function um(i,t,e,n,s,r,a){let o=kd.distanceSqToPoint(i);if(o<e){let l=new P;kd.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var uo=class extends ze{constructor(t,e,n,s,r=Ce,a=Ce,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},xh=class extends uo{constructor(t,e,n,s,r,a,o,l){super({},t,e,n,s,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}},vh=class extends ze{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Be,this.minFilter=Be,this.generateMipmaps=!1,this.needsUpdate=!0}},Es=class extends ze{constructor(t,e,n,s,r,a,o,l,c,h,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}},yh=class extends Es{constructor(t,e,n,s,r,a){super(t,e,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=mn,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Sh=class extends Es{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,ti),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}},$i=class extends ze{constructor(t=[],e=ti,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Mh=class extends ze{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bh=class extends ze{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let h=t?t.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){let t=this.image?this.image.parentNode:null;t!==null&&"onpaint"in t&&(t.onpaint=null),super.dispose()}},Ri=class extends ze{constructor(t,e,n=Ln,s,r,a,o=Be,l=Be,c,h=Zn,d=1){if(h!==Zn&&h!==Di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new On(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},fo=class extends Ri{constructor(t,e=Ln,n=ti,s,r,a=Be,o=Be,l,c=Zn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ir=class extends ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ki=class i extends ie{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(d,2));function p(_,g,m,y,M,x,A,b,E,v,T){let R=x/E,I=A/v,U=x/2,O=A/2,L=b/2,B=E+1,q=v+1,X=0,at=0,Y=new P;for(let et=0;et<q;et++){let it=et*I-O;for(let Ut=0;Ut<B;Ut++){let Ct=Ut*R-U;Y[_]=Ct*y,Y[g]=it*M,Y[m]=L,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[g]=0,Y[m]=b>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Ut/E),d.push(1-et/v),X+=1}}for(let et=0;et<v;et++)for(let it=0;it<E;it++){let Ut=u+it+B*et,Ct=u+it+B*(et+1),fe=u+(it+1)+B*(et+1),ee=u+(it+1)+B*et;l.push(Ut,Ct,ee),l.push(Ct,fe,ee),at+=6}o.addGroup(f,at,T),f+=at,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},po=class i extends ie{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=n*2+r,_=s+1,g=new P,m=new P;for(let y=0;y<=p;y++){let M=0,x=0,A=0,b=0;if(y<=n){let T=y/n,R=T*Math.PI/2;x=-h-t*Math.cos(R),A=t*Math.sin(R),b=-t*Math.cos(R),M=T*d}else if(y<=n+r){let T=(y-n)/r;x=-h+T*e,A=t,b=0,M=d+T*u}else{let T=(y-n-r)/n,R=T*Math.PI/2;x=h+t*Math.sin(R),A=t*Math.cos(R),b=t*Math.sin(R),M=d+u+T*d}let E=Math.max(0,Math.min(1,M/f)),v=0;y===0?v=.5/s:y===p&&(v=-.5/s);for(let T=0;T<=s;T++){let R=T/s,I=R*Math.PI*2,U=Math.sin(I),O=Math.cos(I);m.x=-A*O,m.y=x,m.z=A*U,o.push(m.x,m.y,m.z),g.set(-A*O,b,A*U),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+v,E)}if(y>0){let T=(y-1)*_;for(let R=0;R<s;R++){let I=T+R,U=T+R+1,O=y*_+R,L=y*_+R+1;a.push(I,U,O),a.push(U,L,O)}}}this.setIndex(a),this.setAttribute("position",new Rt(o,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},mo=class i extends ie{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new P,h=new rt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(o,3)),this.setAttribute("uv",new Rt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Lr=class i extends ie{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,_=[],g=n/2,m=0;y(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Rt(d,3)),this.setAttribute("normal",new Rt(u,3)),this.setAttribute("uv",new Rt(f,2));function y(){let x=new P,A=new P,b=0,E=(e-t)/n;for(let v=0;v<=r;v++){let T=[],R=v/r,I=R*(e-t)+t;for(let U=0;U<=s;U++){let O=U/s,L=O*l+o,B=Math.sin(L),q=Math.cos(L);A.x=I*B,A.y=-R*n+g,A.z=I*q,d.push(A.x,A.y,A.z),x.set(B,E,q).normalize(),u.push(x.x,x.y,x.z),f.push(O,1-R),T.push(p++)}_.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){let R=_[T][v],I=_[T+1][v],U=_[T+1][v+1],O=_[T][v+1];(t>0||T!==0)&&(h.push(R,I,O),b+=3),(e>0||T!==r-1)&&(h.push(I,U,O),b+=3)}c.addGroup(m,b,0),m+=b}function M(x){let A=p,b=new rt,E=new P,v=0,T=x===!0?t:e,R=x===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,g*R,0),u.push(0,R,0),f.push(.5,.5),p++;let I=p;for(let U=0;U<=s;U++){let L=U/s*l+o,B=Math.cos(L),q=Math.sin(L);E.x=T*q,E.y=g*R,E.z=T*B,d.push(E.x,E.y,E.z),u.push(0,R,0),b.x=B*.5+.5,b.y=q*.5*R+.5,f.push(b.x,b.y),p++}for(let U=0;U<s;U++){let O=A+U,L=I+U;x===!0?h.push(L,L+1,O):h.push(L+1,L,O),v+=3}c.addGroup(m,v,x===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Nr=class i extends Lr{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pi=class i extends ie{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Rt(r,3)),this.setAttribute("normal",new Rt(r.slice(),3)),this.setAttribute("uv",new Rt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let M=new P,x=new P,A=new P;for(let b=0;b<e.length;b+=3)f(e[b+0],M),f(e[b+1],x),f(e[b+2],A),l(M,x,A,y)}function l(y,M,x,A){let b=A+1,E=[];for(let v=0;v<=b;v++){E[v]=[];let T=y.clone().lerp(x,v/b),R=M.clone().lerp(x,v/b),I=b-v;for(let U=0;U<=I;U++)U===0&&v===b?E[v][U]=T:E[v][U]=T.clone().lerp(R,U/I)}for(let v=0;v<b;v++)for(let T=0;T<2*(b-v)-1;T++){let R=Math.floor(T/2);T%2===0?(u(E[v][R+1]),u(E[v+1][R]),u(E[v][R])):(u(E[v][R+1]),u(E[v+1][R+1]),u(E[v+1][R]))}}function c(y){let M=new P;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(y),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){let y=new P;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let x=g(y)/2/Math.PI+.5,A=m(y)/Math.PI+.5;a.push(x,1-A)}p(),d()}function d(){for(let y=0;y<a.length;y+=6){let M=a[y+0],x=a[y+2],A=a[y+4],b=Math.max(M,x,A),E=Math.min(M,x,A);b>.9&&E<.1&&(M<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,M){let x=y*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function p(){let y=new P,M=new P,x=new P,A=new P,b=new rt,E=new rt,v=new rt;for(let T=0,R=0;T<r.length;T+=9,R+=6){y.set(r[T+0],r[T+1],r[T+2]),M.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),b.set(a[R+0],a[R+1]),E.set(a[R+2],a[R+3]),v.set(a[R+4],a[R+5]),A.copy(y).add(M).add(x).divideScalar(3);let I=g(A);_(b,R+0,y,I),_(E,R+2,M,I),_(v,R+4,x,I)}}function _(y,M,x,A){A<0&&y.x===1&&(a[M]=y.x-1),x.x===0&&x.z===0&&(a[M]=A/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},go=class i extends Pi{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Wc=new P,Xc=new P,Rd=new P,qc=new qn,_o=class extends ie{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(xs*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:_,b:g,c:m}=qc;if(_.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),qc.getNormal(Rd),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let y=0;y<3;y++){let M=(y+1)%3,x=d[y],A=d[M],b=qc[h[y]],E=qc[h[M]],v=`${x}_${A}`,T=`${A}_${x}`;T in u&&u[T]?(Rd.dot(u[T].normal)<=r&&(f.push(b.x,b.y,b.z),f.push(E.x,E.y,E.z)),u[T]=null):v in u||(u[v]={index0:c[y],index1:c[M],normal:Rd.clone()})}}for(let p in u)if(u[p]){let{index0:_,index1:g}=u[p];Wc.fromBufferAttribute(o,_),Xc.fromBufferAttribute(o,g),f.push(Wc.x,Wc.y,Wc.z),f.push(Xc.x,Xc.y,Xc.z)}this.setAttribute("position",new Rt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new rt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new Jt;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Zt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Cs=class extends wn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new rt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},xo=class extends Cs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Bf(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var dm=new P,fm=new P,Pd=new Bf,Id=new Bf,Ld=new Bf,vo=class extends wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(fm.subVectors(s[0],s[1]).add(s[0]),c=fm);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(dm.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=dm),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Pd.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,_,g),Id.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,_,g),Ld.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Pd.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Id.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Ld.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Pd.calc(l),Id.calc(l),Ld.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function pm(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function ex(i,t){let e=1-i;return e*e*t}function nx(i,t){return 2*(1-i)*i*t}function ix(i,t){return i*i*t}function Ga(i,t,e,n){return ex(i,t)+nx(i,e)+ix(i,n)}function sx(i,t){let e=1-i;return e*e*e*t}function rx(i,t){let e=1-i;return 3*e*e*i*t}function ax(i,t){return 3*(1-i)*i*i*t}function ox(i,t){return i*i*i*t}function Ha(i,t,e,n,s){return sx(i,t)+rx(i,e)+ax(i,n)+ox(i,s)}var Dr=class extends wn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ha(t,s.x,r.x,a.x,o.x),Ha(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},yo=class extends wn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ha(t,s.x,r.x,a.x,o.x),Ha(t,s.y,r.y,a.y,o.y),Ha(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ur=class extends wn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},So=class extends wn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fr=class extends wn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ga(t,s.x,r.x,a.x),Ga(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends wn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ga(t,s.x,r.x,a.x),Ga(t,s.y,r.y,a.y),Ga(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Br=class extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(pm(o,l.x,c.x,h.x,d.x),pm(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new rt().fromArray(s))}return this}},Ah=Object.freeze({__proto__:null,ArcCurve:xo,CatmullRomCurve3:vo,CubicBezierCurve:Dr,CubicBezierCurve3:yo,EllipseCurve:Cs,LineCurve:Ur,LineCurve3:So,QuadraticBezierCurve:Fr,QuadraticBezierCurve3:Or,SplineCurve:Br}),Mo=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ah[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ah[s.type]().fromJSON(s))}return this}},Qi=class extends Mo{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ur(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Fr(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Dr(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Br(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Cs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ji=class extends Qi{constructor(t){super(t),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Qi().fromJSON(s))}return this}};function lx(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Xg(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=fx(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=i[u],p=i[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return bo(r,a,e,o,l,c,0),a}function Xg(i,t,e,n,s){let r;if(s===Ax(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=mm(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=mm(a/n|0,i[a],i[a+1],r);return r&&zr(r,r.next)&&(wo(r),r=r.next),r}function Rs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(zr(e,e.next)||Le(e.prev,e,e.next)===0)){if(wo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function bo(i,t,e,n,s,r,a){if(!i)return;!a&&r&&xx(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?hx(i,n,s,r):cx(i)){t.push(l.i,i.i,c.i),wo(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=ux(Rs(i),t),bo(i,t,e,n,s,r,2)):a===2&&dx(i,t,e,n,s,r):bo(Rs(i),t,e,n,s,r,1);break}}}function cx(i){let t=i.prev,e=i,n=i.next;if(Le(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Ba(s,o,r,l,a,c,p.x,p.y)&&Le(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function hx(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Le(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),_=Math.max(o,l,c),g=Math.max(h,d,u),m=Gd(f,p,t,e,n),y=Gd(_,g,t,e,n),M=i.prevZ,x=i.nextZ;for(;M&&M.z>=m&&x&&x.z<=y;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=g&&M!==s&&M!==a&&Ba(o,h,l,d,c,u,M.x,M.y)&&Le(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==a&&Ba(o,h,l,d,c,u,x.x,x.y)&&Le(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=m;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=g&&M!==s&&M!==a&&Ba(o,h,l,d,c,u,M.x,M.y)&&Le(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==a&&Ba(o,h,l,d,c,u,x.x,x.y)&&Le(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function ux(i,t){let e=i;do{let n=e.prev,s=e.next.next;!zr(n,s)&&Yg(n,e,e.next,s)&&Ao(n,s)&&Ao(s,n)&&(t.push(n.i,e.i,s.i),wo(e),wo(e.next),e=i=s),e=e.next}while(e!==i);return Rs(e)}function dx(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Sx(a,o)){let l=Zg(a,o);a=Rs(a,a.next),l=Rs(l,l.next),bo(a,t,e,n,s,r,0),bo(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function fx(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Xg(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(yx(c))}s.sort(px);for(let r=0;r<s.length;r++)e=mx(s[r],e);return e}function px(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function mx(i,t){let e=gx(i,t);if(!e)return t;let n=Zg(e,i);return Rs(n,n.next),Rs(e,e.next)}function gx(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(zr(i,e))return e;do{if(zr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&qg(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Ao(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&_x(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function _x(i,t){return Le(i.prev,i,t.prev)<0&&Le(t.next,i,i.next)<0}function xx(i,t,e,n){let s=i;do s.z===0&&(s.z=Gd(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,vx(s)}function vx(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Gd(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function yx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function qg(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ba(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&qg(i,t,e,n,s,r,a,o)}function Sx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Mx(i,t)&&(Ao(i,t)&&Ao(t,i)&&bx(i,t)&&(Le(i.prev,i,t.prev)||Le(i,t.prev,t))||zr(i,t)&&Le(i.prev,i,i.next)>0&&Le(t.prev,t,t.next)>0)}function Le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function zr(i,t){return i.x===t.x&&i.y===t.y}function Yg(i,t,e,n){let s=Zc(Le(i,t,e)),r=Zc(Le(i,t,n)),a=Zc(Le(e,n,i)),o=Zc(Le(e,n,t));return!!(s!==r&&a!==o||s===0&&Yc(i,e,t)||r===0&&Yc(i,n,t)||a===0&&Yc(e,i,n)||o===0&&Yc(e,t,n))}function Yc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Zc(i){return i>0?1:i<0?-1:0}function Mx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Yg(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ao(i,t){return Le(i.prev,i,i.next)<0?Le(i,t,i.next)>=0&&Le(i,i.prev,t)>=0:Le(i,t,i.prev)<0||Le(i,i.next,t)<0}function bx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Zg(i,t){let e=Hd(i.i,i.x,i.y),n=Hd(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function mm(i,t,e,n){let s=Hd(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function wo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hd(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ax(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Wd=class{static triangulate(t,e,n=2){return lx(t,e,n)}},Bn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];gm(t),_m(n,t);let a=t.length;e.forEach(gm);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,_m(n,e[l]);let o=Wd.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function gm(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function _m(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var To=class i extends ie{constructor(t=new ji([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Rt(s,3)),this.setAttribute("uv",new Rt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:wx,M,x=!1,A,b,E,v;if(m){M=m.getSpacedPoints(h),x=!0,u=!1;let tt=m.isCatmullRomCurve3?m.closed:!1;A=m.computeFrenetFrames(h,tt),b=new P,E=new P,v=new P}u||(g=0,f=0,p=0,_=0);let T=o.extractPoints(c),R=T.shape,I=T.holes;if(!Bn.isClockWise(R)){R=R.reverse();for(let tt=0,ot=I.length;tt<ot;tt++){let lt=I[tt];Bn.isClockWise(lt)&&(I[tt]=lt.reverse())}}function O(tt){let lt=10000000000000001e-36,ht=tt[0];for(let dt=1;dt<=tt.length;dt++){let kt=dt%tt.length,Lt=tt[kt],qt=Lt.x-ht.x,Kt=Lt.y-ht.y,N=qt*qt+Kt*Kt,me=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(ht.x),Math.abs(ht.y)),ce=lt*me*me;if(N<=ce){tt.splice(kt,1),dt--;continue}ht=Lt}}O(R),I.forEach(O);let L=I.length,B=R;for(let tt=0;tt<L;tt++){let ot=I[tt];R=R.concat(ot)}function q(tt,ot,lt){return ot||Vt("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(ot,lt)}let X=R.length;function at(tt,ot,lt){let ht,dt,kt,Lt=tt.x-ot.x,qt=tt.y-ot.y,Kt=lt.x-tt.x,N=lt.y-tt.y,me=Lt*Lt+qt*qt,ce=Lt*N-qt*Kt;if(Math.abs(ce)>Number.EPSILON){let C=Math.sqrt(me),S=Math.sqrt(Kt*Kt+N*N),z=ot.x-qt/C,H=ot.y+Lt/C,J=lt.x-N/S,ut=lt.y+Kt/S,ft=((J-z)*N-(ut-H)*Kt)/(Lt*N-qt*Kt);ht=z+Lt*ft-tt.x,dt=H+qt*ft-tt.y;let $=ht*ht+dt*dt;if($<=2)return new rt(ht,dt);kt=Math.sqrt($/2)}else{let C=!1;Lt>Number.EPSILON?Kt>Number.EPSILON&&(C=!0):Lt<-Number.EPSILON?Kt<-Number.EPSILON&&(C=!0):Math.sign(qt)===Math.sign(N)&&(C=!0),C?(ht=-qt,dt=Lt,kt=Math.sqrt(me)):(ht=Lt,dt=qt,kt=Math.sqrt(me/2))}return new rt(ht/kt,dt/kt)}let Y=[];for(let tt=0,ot=B.length,lt=ot-1,ht=tt+1;tt<ot;tt++,lt++,ht++)lt===ot&&(lt=0),ht===ot&&(ht=0),Y[tt]=at(B[tt],B[lt],B[ht]);let et=[],it,Ut=Y.concat();for(let tt=0,ot=L;tt<ot;tt++){let lt=I[tt];it=[];for(let ht=0,dt=lt.length,kt=dt-1,Lt=ht+1;ht<dt;ht++,kt++,Lt++)kt===dt&&(kt=0),Lt===dt&&(Lt=0),it[ht]=at(lt[ht],lt[kt],lt[Lt]);et.push(it),Ut=Ut.concat(it)}let Ct;if(g===0)Ct=Bn.triangulateShape(B,I);else{let tt=[],ot=[];for(let lt=0;lt<g;lt++){let ht=lt/g,dt=f*Math.cos(ht*Math.PI/2),kt=p*Math.sin(ht*Math.PI/2)+_;for(let Lt=0,qt=B.length;Lt<qt;Lt++){let Kt=q(B[Lt],Y[Lt],kt);Mt(Kt.x,Kt.y,-dt),ht===0&&tt.push(Kt)}for(let Lt=0,qt=L;Lt<qt;Lt++){let Kt=I[Lt];it=et[Lt];let N=[];for(let me=0,ce=Kt.length;me<ce;me++){let C=q(Kt[me],it[me],kt);Mt(C.x,C.y,-dt),ht===0&&N.push(C)}ht===0&&ot.push(N)}}Ct=Bn.triangulateShape(tt,ot)}let fe=Ct.length,ee=p+_;for(let tt=0;tt<X;tt++){let ot=u?q(R[tt],Ut[tt],ee):R[tt];x?(E.copy(A.normals[0]).multiplyScalar(ot.x),b.copy(A.binormals[0]).multiplyScalar(ot.y),v.copy(M[0]).add(E).add(b),Mt(v.x,v.y,v.z)):Mt(ot.x,ot.y,0)}for(let tt=1;tt<=h;tt++)for(let ot=0;ot<X;ot++){let lt=u?q(R[ot],Ut[ot],ee):R[ot];x?(E.copy(A.normals[tt]).multiplyScalar(lt.x),b.copy(A.binormals[tt]).multiplyScalar(lt.y),v.copy(M[tt]).add(E).add(b),Mt(v.x,v.y,v.z)):Mt(lt.x,lt.y,d/h*tt)}for(let tt=g-1;tt>=0;tt--){let ot=tt/g,lt=f*Math.cos(ot*Math.PI/2),ht=p*Math.sin(ot*Math.PI/2)+_;for(let dt=0,kt=B.length;dt<kt;dt++){let Lt=q(B[dt],Y[dt],ht);Mt(Lt.x,Lt.y,d+lt)}for(let dt=0,kt=I.length;dt<kt;dt++){let Lt=I[dt];it=et[dt];for(let qt=0,Kt=Lt.length;qt<Kt;qt++){let N=q(Lt[qt],it[qt],ht);x?Mt(N.x,N.y+M[h-1].y,M[h-1].x+lt):Mt(N.x,N.y,d+lt)}}}se(),Z();function se(){let tt=s.length/3;if(u){let ot=0,lt=X*ot;for(let ht=0;ht<fe;ht++){let dt=Ct[ht];Yt(dt[2]+lt,dt[1]+lt,dt[0]+lt)}ot=h+g*2,lt=X*ot;for(let ht=0;ht<fe;ht++){let dt=Ct[ht];Yt(dt[0]+lt,dt[1]+lt,dt[2]+lt)}}else{for(let ot=0;ot<fe;ot++){let lt=Ct[ot];Yt(lt[2],lt[1],lt[0])}for(let ot=0;ot<fe;ot++){let lt=Ct[ot];Yt(lt[0]+X*h,lt[1]+X*h,lt[2]+X*h)}}n.addGroup(tt,s.length/3-tt,0)}function Z(){let tt=s.length/3,ot=0;nt(B,ot),ot+=B.length;for(let lt=0,ht=I.length;lt<ht;lt++){let dt=I[lt];nt(dt,ot),ot+=dt.length}n.addGroup(tt,s.length/3-tt,1)}function nt(tt,ot){let lt=tt.length;for(;--lt>=0;){let ht=lt,dt=lt-1;dt<0&&(dt=tt.length-1);for(let kt=0,Lt=h+g*2;kt<Lt;kt++){let qt=X*kt,Kt=X*(kt+1),N=ot+ht+qt,me=ot+dt+qt,ce=ot+dt+Kt,C=ot+ht+Kt;pt(N,me,ce,C)}}}function Mt(tt,ot,lt){l.push(tt),l.push(ot),l.push(lt)}function Yt(tt,ot,lt){Xt(tt),Xt(ot),Xt(lt);let ht=s.length/3,dt=y.generateTopUV(n,s,ht-3,ht-2,ht-1);pe(dt[0]),pe(dt[1]),pe(dt[2])}function pt(tt,ot,lt,ht){Xt(tt),Xt(ot),Xt(ht),Xt(ot),Xt(lt),Xt(ht);let dt=s.length/3,kt=y.generateSideWallUV(n,s,dt-6,dt-3,dt-2,dt-1);pe(kt[0]),pe(kt[1]),pe(kt[3]),pe(kt[1]),pe(kt[2]),pe(kt[3])}function Xt(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function pe(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Tx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ah[s.type]().fromJSON(s)),new i(n,t.options)}},wx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new rt(r,a),new rt(o,l),new rt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],p=t[s*3+2],_=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new rt(a,1-l),new rt(c,1-d),new rt(u,1-p),new rt(_,1-m)]:[new rt(o,1-l),new rt(h,1-d),new rt(f,1-p),new rt(g,1-m)]}};function Tx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Eo=class i extends Pi{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Co=class i extends ie{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Zt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new P,u=new rt,f=new P,p=new P,_=new P,g=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let y=0;y<=e;y++){let M=n+y*h*s,x=Math.sin(M),A=Math.cos(M);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*x,d.y=t[b].y,d.z=t[b].x*A,a.push(d.x,d.y,d.z),u.x=y/e,u.y=b/(t.length-1),o.push(u.x,u.y);let E=l[3*b+0]*x,v=l[3*b+1],T=l[3*b+0]*A;c.push(E,v,T)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){let x=M+y*t.length,A=x,b=x+t.length,E=x+t.length+1,v=x+1;r.push(A,b,v),r.push(E,v,b)}this.setIndex(r),this.setAttribute("position",new Rt(a,3)),this.setAttribute("uv",new Rt(o,2)),this.setAttribute("normal",new Rt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Vr=class i extends Pi{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Ps=class i extends ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let y=m*u-a;for(let M=0;M<c;M++){let x=M*d-r;p.push(x,-y,0),_.push(0,0,1),g.push(M/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let M=y+c*m,x=y+c*(m+1),A=y+1+c*(m+1),b=y+1+c*m;f.push(M,x,b),f.push(x,A,b)}this.setIndex(f),this.setAttribute("position",new Rt(p,3)),this.setAttribute("normal",new Rt(_,3)),this.setAttribute("uv",new Rt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ro=class i extends ie{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new P,p=new rt;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){let m=r+g/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let _=0;_<s;_++){let g=_*(n+1);for(let m=0;m<n;m++){let y=m+g,M=y,x=y+n+1,A=y+n+2,b=y+1;o.push(M,x,b),o.push(x,A,b)}}this.setIndex(o),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Po=class i extends ie{constructor(t=new ji([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Rt(s,3)),this.setAttribute("normal",new Rt(r,3)),this.setAttribute("uv",new Rt(a,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,p=u.holes;Bn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let y=p[g];Bn.isClockWise(y)===!0&&(p[g]=y.reverse())}let _=Bn.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let y=p[g];f=f.concat(y)}for(let g=0,m=f.length;g<m;g++){let y=f[g];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let g=0,m=_.length;g<m;g++){let y=_[g],M=y[0]+d,x=y[1]+d,A=y[2]+d;n.push(M,x,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Ex(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Ex(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var kr=class i extends ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new P,u=new P,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){let y=[],M=m/n,x=a+M*o,A=t*Math.cos(x),b=Math.sqrt(t*t-A*A),E=0;m===0&&a===0?E=.5/e:m===n&&l===Math.PI&&(E=-.5/e);for(let v=0;v<=e;v++){let T=v/e,R=s+T*r;d.x=-b*Math.cos(R),d.y=A,d.z=b*Math.sin(R),p.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(T+E,1-M),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){let M=h[m][y+1],x=h[m][y],A=h[m+1][y],b=h[m+1][y+1];(m!==0||a>0)&&f.push(M,x,b),(m!==n-1||l<Math.PI)&&f.push(x,A,b)}this.setIndex(f),this.setAttribute("position",new Rt(p,3)),this.setAttribute("normal",new Rt(_,3)),this.setAttribute("uv",new Rt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Io=class i extends Pi{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Lo=class i extends ie{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new P,f=new P,p=new P;for(let _=0;_<=n;_++){let g=a+_/n*o;for(let m=0;m<=s;m++){let y=m/s*r;f.x=(t+e*Math.cos(g))*Math.cos(y),f.y=(t+e*Math.cos(g))*Math.sin(y),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){let m=(s+1)*_+g-1,y=(s+1)*(_-1)+g-1,M=(s+1)*(_-1)+g,x=(s+1)*_+g;l.push(m,y,x),l.push(y,M,x)}this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},No=class i extends ie{constructor(t=1,e=.4,n=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:s,p:r,q:a},n=Math.floor(n),s=Math.floor(s);let o=[],l=[],c=[],h=[],d=new P,u=new P,f=new P,p=new P,_=new P,g=new P,m=new P;for(let M=0;M<=n;++M){let x=M/n*r*Math.PI*2;y(x,r,a,t,f),y(x+.01,r,a,t,p),g.subVectors(p,f),m.addVectors(p,f),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let A=0;A<=s;++A){let b=A/s*Math.PI*2,E=-e*Math.cos(b),v=e*Math.sin(b);d.x=f.x+(E*m.x+v*_.x),d.y=f.y+(E*m.y+v*_.y),d.z=f.z+(E*m.z+v*_.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(M/n),h.push(A/s)}}for(let M=1;M<=n;M++)for(let x=1;x<=s;x++){let A=(s+1)*(M-1)+(x-1),b=(s+1)*M+(x-1),E=(s+1)*M+x,v=(s+1)*(M-1)+x;o.push(A,b,v),o.push(b,E,v)}this.setIndex(o),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(h,2));function y(M,x,A,b,E){let v=Math.cos(M),T=Math.sin(M),R=A/x*M,I=Math.cos(R);E.x=b*(2+I)*.5*v,E.y=b*(2+I)*T*.5,E.z=b*Math.sin(R)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Do=class i extends ie{constructor(t=new Or(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new rt,h=new P,d=[],u=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Rt(d,3)),this.setAttribute("normal",new Rt(u,3)),this.setAttribute("uv",new Rt(f,2));function _(){for(let M=0;M<e;M++)g(M);g(r===!1?e:0),y(),m()}function g(M){h=t.getPointAt(M/e,h);let x=a.normals[M],A=a.binormals[M];for(let b=0;b<=s;b++){let E=b/s*Math.PI*2,v=Math.sin(E),T=-Math.cos(E);l.x=T*x.x+v*A.x,l.y=T*x.y+v*A.y,l.z=T*x.z+v*A.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let M=1;M<=e;M++)for(let x=1;x<=s;x++){let A=(s+1)*(M-1)+(x-1),b=(s+1)*M+(x-1),E=(s+1)*M+x,v=(s+1)*(M-1)+x;p.push(A,b,v),p.push(b,E,v)}}function y(){for(let M=0;M<=e;M++)for(let x=0;x<=s;x++)c.x=M/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ah[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Uo=class extends ie{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new P,r=new P;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start,f=d.count;for(let p=u,_=u+f;p<_;p+=3)for(let g=0;g<3;g++){let m=o.getX(p+g),y=o.getX(p+(g+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,y),xm(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,d=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),xm(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Rt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function xm(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}var vm=Object.freeze({__proto__:null,BoxGeometry:Ki,CapsuleGeometry:po,CircleGeometry:mo,ConeGeometry:Nr,CylinderGeometry:Lr,DodecahedronGeometry:go,EdgesGeometry:_o,ExtrudeGeometry:To,IcosahedronGeometry:Eo,LatheGeometry:Co,OctahedronGeometry:Vr,PlaneGeometry:Ps,PolyhedronGeometry:Pi,RingGeometry:Ro,ShapeGeometry:Po,SphereGeometry:kr,TetrahedronGeometry:Io,TorusGeometry:Lo,TorusKnotGeometry:No,TubeGeometry:Do,WireframeGeometry:Uo}),Fo=class extends qe{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Et(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function ks(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ym(s))s.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ym(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function hn(i){let t={};for(let e=0;e<i.length;e++){let n=ks(i[e]);for(let s in n)t[s]=n[s]}return t}function ym(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Cx(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var Vf={clone:ks,merge:hn},Rx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_n=class extends qe{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rx,this.fragmentShader=Px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=Cx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Et().setHex(s.value);break;case"v2":this.uniforms[n].value=new rt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ae().fromArray(s.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Jt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Gr=class extends _n{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Hr=class extends qe{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Oo=class extends Hr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},Bo=class extends qe{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Et(16777215),this.specular=new Et(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=ta,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},zo=class extends qe{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Et(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Vo=class extends qe{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},ko=class extends qe{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=ta,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Wr=class extends qe{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xr=class extends qe{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Go=class extends qe{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Et(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ho=class extends Qe{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Xn(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Wa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Jg(i){function t(s,r){return i[s]-i[r]}let e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Xd(i,t,e){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=e[r]*t;for(let l=0;l!==t;++l)s[a++]=i[o+l]}return s}function $g(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=i[s++];while(r!==void 0)}function Ix(i,t,e,n,s=30){let r=i.clone();r.name=t;let a=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){let p=c.times[f]*s;if(!(p<e||p>=n)){d.push(c.times[f]);for(let _=0;_<h;++_)u.push(c.values[f*h+_])}}d.length!==0&&(c.times=Xn(d,c.times.constructor),c.values=Xn(u,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function Lx(i,t=0,e=i,n=30){n<=0&&(n=30);let s=e.tracks.length,r=t/n;for(let a=0;a<s;++a){let o=e.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let c=i.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0,d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);let p=o.times.length-1,_;if(r<=o.times[0]){let m=h,y=d-h;_=o.values.slice(m,y)}else if(r>=o.times[p]){let m=p*d+h,y=m+d-h;_=o.values.slice(m,y)}else{let m=o.createInterpolant(),y=h,M=d-h;m.evaluate(r),_=m.resultBuffer.slice(y,M)}l==="quaternion"&&new Ke().fromArray(_).normalize().conjugate().toArray(_);let g=c.times.length;for(let m=0;m<g;++m){let y=m*f+u;if(l==="quaternion")Ke.multiplyQuaternionsFlat(c.values,y,_,0,c.values,y);else{let M=f-u*2;for(let x=0;x<M;++x)c.values[y+x]-=_[x]}}}return i.blendMode=Du,i}var wh=class{static convertArray(t,e){return Xn(t,e)}static isTypedArray(t){return Fg(t)}static hasTangents(t){return Wa(t)}static getKeyframeOrder(t){return Jg(t)}static sortedArray(t,e,n){return Xd(t,e,n)}static flattenJSON(t,e,n,s){$g(t,e,n,s)}static subclip(t,e,n,s,r=30){return Ix(t,e,n,s,r)}static makeClipAdditive(t,e=0,n=t,s=30){return Lx(t,e,n,s)}},Ii=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break e}a=e.length;break n}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Wo=class extends Ii{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xi,endingEnd:Xi}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case qi:r=t,o=2*e-n;break;case yr:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qi:a=t,l=2*n-e;break;case yr:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),_=p*p,g=_*p,m=-u*g+2*u*_-u*p,y=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*p+1,M=(-1-f)*g+(1.5+f)*_+.5*p,x=f*g-f*_;for(let A=0;A!==o;++A)r[A]=m*a[h+A]+y*a[c+A]+M*a[l+A]+x*a[d+A];return r}},qr=class extends Ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Xo=class extends Ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},qo=class extends Ii{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(s-e),_=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*_+a[l+g]*p;return r}let u=o*2,f=t-1;for(let p=0;p!==o;++p){let _=a[c+p],g=a[l+p],m=f*u+p*2,y=d[m],M=d[m+1],x=t*u+p*2,A=h[x],b=h[x+1],E=Dx(n,e,y,A,s);r[p]=Kg(E,_,M,b,g)}return r}};function Kg(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Nx(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Dx(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Kg(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Nx(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var xn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xn(e,this.TimeBufferType),this.values=Xn(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Xn(t.times,Array),values:Xn(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Wa(t.settings)&&(n.settings={inTangents:Xn(t.settings.inTangents,Array),outTangents:Xn(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new qo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case vr:e=this.InterpolantFactoryMethodDiscrete;break;case Qa:e=this.InterpolantFactoryMethodLinear;break;case za:e=this.InterpolantFactoryMethodSmooth;break;case rh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return Qa;case this.InterpolantFactoryMethodSmooth:return za;case this.InterpolantFactoryMethodBezier:return rh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Wa(this.settings)&&(Sm(this.settings.inTangents,t),Sm(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Vt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Vt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Fg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Vt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===za,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let _=e[d+p];if(_!==e[u+p]||_!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Wa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Sm(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Qa;var oi=class extends xn{constructor(t,e,n){super(t,e,n)}};oi.prototype.ValueTypeName="bool";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=vr;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yr=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}};Yr.prototype.ValueTypeName="color";var Is=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}};Is.prototype.ValueTypeName="number";var Yo=class extends Ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ke.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ls=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Yo(this.times,this.values,this.getValueSize(),t)}};Ls.prototype.ValueTypeName="quaternion";Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends xn{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=vr;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}};Zr.prototype.ValueTypeName="vector";var ts=class{constructor(t="",e=-1,n=[],s=Zl){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Pn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,s=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(Fx(n[a]).scale(s));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=n.length;r!==a;++r)e.push(xn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){let r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Jg(l);l=Xd(l,1,h),c=Xd(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Is(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){let c=t[o],h=c.name.match(r);if(h&&h.length>1){let d=h[1],u=s[d];u||(s[d]=u=[]),u.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],e,n));return a}resetDuration(){let t=this.tracks,e=0;for(let n=0,s=t.length;n!==s;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function Ux(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Is;case"vector":case"vector2":case"vector3":case"vector4":return Zr;case"color":return Yr;case"quaternion":return Ls;case"bool":case"boolean":return oi;case"string":return li}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Fx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=Ux(i.type);if(i.times===void 0){let n=[],s=[];$g(i.keys,n,s,"value"),i.times=n,i.values=s}let e;return t.parse!==void 0?e=t.parse(i):e=new t(i.name,i.times,i.values,i.interpolation),Wa(i.settings)&&(e.settings={inTangents:Xn(i.settings.inTangents,Float32Array),outTangents:Xn(i.settings.outTangents,Float32Array)}),e}var Yn={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Mm(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Mm(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Mm(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Jr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kf=new Jr,en=class{constructor(t){this.manager=t!==void 0?t:kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};en.DEFAULT_MATERIAL_NAME="__DEFAULT";var bi={},qd=class extends Error{constructor(t,e){super(t),this.response=e}},Vn=class extends en{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Yn.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(bi[t]!==void 0){bi[t].push({onLoad:e,onProgress:n,onError:s});return}bi[t]=[],bi[t].push({onLoad:e,onProgress:n,onError:s});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&vt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=bi[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0,_=0,g=new ReadableStream({start(m){y();function y(){d.read().then(({done:M,value:x})=>{if(M)m.close();else{_+=x.byteLength;let A=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let b=0,E=h.length;b<E;b++){let v=h[b];v.onProgress&&v.onProgress(A)}m.enqueue(x),y()}},M=>{m.error(M)})}}});return new Response(g)}else throw new qd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Yn.add(`file:${t}`,c);let h=bi[t];delete bi[t];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=bi[t];if(h===void 0)throw this.manager.itemError(t),c;delete bi[t];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Th=class extends en{constructor(t){super(t)}load(t,e,n,s){let r=this,a=new Vn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){s?s(l):Vt(l),r.manager.itemError(t)}},n,s)}parse(t){let e=[];for(let n=0;n<t.length;n++){let s=ts.parse(t[n]);e.push(s)}return e}},Eh=class extends en{constructor(t){super(t)}load(t,e,n,s){let r=this,a=[],o=new Es,l=new Vn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(d){l.load(t[d],function(u){let f=r.parse(u,!0);a[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=Ce),o.image=a,o.format=f.format,o.needsUpdate=!0,e&&e(o))},n,s)}if(Array.isArray(t))for(let d=0,u=t.length;d<u;++d)h(d);else l.load(t,function(d){let u=r.parse(d,!0);if(u.isCubemap){let f=u.mipmaps.length/u.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let _=0;_<u.mipmapCount;_++)a[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+_]),a[p].format=u.format,a[p].width=u.width,a[p].height=u.height}o.image=a}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=Ce),o.format=u.format,o.needsUpdate=!0,e&&e(o)},n,s);return o}},hr=new WeakMap,es=class extends en{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Yn.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=hr.get(a);d===void 0&&(d=[],hr.set(a,d)),d.push({onLoad:e,onError:s})}return a}let o=br("img");function l(){h(),e&&e(this);let d=hr.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}hr.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),Yn.remove(`image:${t}`);let u=hr.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}hr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Yn.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}},Ch=class extends en{constructor(t){super(t)}load(t,e,n,s){let r=new $i;r.colorSpace=je;let a=new es(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,s)}for(let c=0;c<t.length;++c)l(c);return r}},Rh=class extends en{constructor(t){super(t)}load(t,e,n,s){let r=this,a=new gn,o=new Vn(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(l){let c;try{c=r.parse(l)}catch(h){s!==void 0?s(h):Vt(h);return}r._applyTexData(a,c),e&&e(a,c)},n,s),a}createDataTexture(t){let e=new gn;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:mn,t.wrapT=e.wrapT!==void 0?e.wrapT:mn,t.magFilter=e.magFilter!==void 0?e.magFilter:Ce,t.minFilter=e.minFilter!==void 0?e.minFilter:Ce,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=ei),e.mipmapCount===1&&(t.minFilter=Ce),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}},Ph=class extends en{constructor(t){super(t)}load(t,e,n,s){let r=new ze,a=new es(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Kn=class extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Zo=class extends Kn{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Nd=new Jt,bm=new P,Am=new P,Ns=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ai,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;bm.setFromMatrixPosition(t.matrixWorld),e.position.copy(bm),Am.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Am),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Nd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Nd,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Yi||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Nd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Jc=new P,$c=new Ke,si=new P,Ds=class extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Jc,$c,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jc,$c,si.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Jc,$c,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jc,$c,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hi=new P,wm=new rt,Tm=new rt,Oe=class extends Ds{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,wm,Tm),e.subVectors(Tm,wm)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Yd=class extends Ns{constructor(){super(new Oe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=ys*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Jo=class extends Kn{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Yd}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Zd=class extends Ns{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0}},$o=class extends Kn{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ns=class extends Ds{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Jd=class extends Ns{constructor(){super(new ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ko=class extends Kn{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new Jd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Qo=class extends Kn{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},jo=class extends Kn{constructor(t,e,n=10,s=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){let e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}},$r=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new P)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){let n=t.x,s=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*s),e.addScaledVector(a[2],.488603*r),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],1.092548*(n*s)),e.addScaledVector(a[5],1.092548*(s*r)),e.addScaledVector(a[6],.315392*(3*r*r-1)),e.addScaledVector(a[7],1.092548*(n*r)),e.addScaledVector(a[8],.546274*(n*n-s*s)),e}getIrradianceAt(t,e){let n=t.x,s=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*s),e.addScaledVector(a[2],2*.511664*r),e.addScaledVector(a[3],2*.511664*n),e.addScaledVector(a[4],2*.429043*n*s),e.addScaledVector(a[5],2*.429043*s*r),e.addScaledVector(a[6],.743125*r*r-.247708),e.addScaledVector(a[7],2*.429043*n*r),e.addScaledVector(a[8],.429043*(n*n-s*s)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){let n=this.coefficients;for(let s=0;s<9;s++)n[s].fromArray(t,e+s*3);return this}toArray(t=[],e=0){let n=this.coefficients;for(let s=0;s<9;s++)n[s].toArray(t,e+s*3);return t}static getBasisAt(t,e){let n=t.x,s=t.y,r=t.z;e[0]=.282095,e[1]=.488603*s,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*s,e[5]=1.092548*s*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-s*s)}},tl=class extends Kn{constructor(t=new $r,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){let e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}},Em={},el=class i extends en{constructor(t){super(t),this.textures={}}load(t,e,n,s){let r=this,a=new Vn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){s?s(l):Vt(l),r.manager.itemError(t)}},n,s)}parse(t){let e=this.createMaterialFromType(t.type);return e.fromJSON(t,this.textures),e}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return i.createMaterialFromType(t)}static createMaterialFromType(t){let n={ShadowMaterial:Fo,SpriteMaterial:Cr,RawShaderMaterial:Gr,ShaderMaterial:_n,PointsMaterial:Pr,MeshPhysicalMaterial:Oo,MeshStandardMaterial:Hr,MeshPhongMaterial:Bo,MeshToonMaterial:zo,MeshNormalMaterial:Vo,MeshLambertMaterial:ko,MeshDepthMaterial:Wr,MeshDistanceMaterial:Xr,MeshBasicMaterial:Jn,MeshMatcapMaterial:Go,LineDashedMaterial:Ho,LineBasicMaterial:Qe,Material:qe,...Em}[t],s;return n===void 0?(ri(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),s=new qe):s=new n,s}static registerMaterial(t,e){Em[t]=e}},Kr=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},nl=class extends ie{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}},il=class extends en{constructor(t){super(t)}load(t,e,n,s){let r=this,a=new Vn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){s?s(l):Vt(l),r.manager.itemError(t)}},n,s)}parse(t){let e={},n={};function s(f,p){if(e[p]!==void 0)return e[p];let g=f.interleavedBuffers[p],m=r(f,g.buffer),y=mr(g.type,m),M=new Ts(y,g.stride);return M.uuid=g.uuid,g.usage!==void 0&&M.setUsage(g.usage),e[p]=M,M}function r(f,p){if(n[p]!==void 0)return n[p];let g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}let a=t.isInstancedBufferGeometry?new nl:new ie,o=t.data.index;if(o!==void 0){let f=mr(o.type,o.array);a.setIndex(new be(f,1))}let l=t.data.attributes;for(let f in l){let p=l[f],_;if(p.isInterleavedBufferAttribute){let g=s(t.data,p.data);_=new Ji(g,p.itemSize,p.offset,p.normalized)}else{let g=mr(p.type,p.array),m=p.isInstancedBufferAttribute?Ci:be;_=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),p.gpuType!==void 0&&(_.gpuType=p.gpuType),a.setAttribute(f,_)}let c=t.data.morphAttributes;if(c)for(let f in c){let p=c[f],_=[];for(let g=0,m=p.length;g<m;g++){let y=p[g],M;if(y.isInterleavedBufferAttribute){let x=s(t.data,y.data);M=new Ji(x,y.itemSize,y.offset,y.normalized)}else{let x=mr(y.type,y.array);M=new be(x,y.itemSize,y.normalized)}y.name!==void 0&&(M.name=y.name),y.usage!==void 0&&M.setUsage(y.usage),y.gpuType!==void 0&&(M.gpuType=y.gpuType),_.push(M)}a.morphAttributes[f]=_}t.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);let d=t.data.groups||t.data.drawcalls||t.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){let _=d[f];a.addGroup(_.start,_.count,_.materialIndex)}let u=t.data.boundingSphere;return u!==void 0&&(a.boundingSphere=new Xe().fromJSON(u)),t.name&&(a.name=t.name),t.userData&&(a.userData=t.userData),a}},Dd={},Ih=class extends en{constructor(t){super(t)}load(t,e,n,s){let r=this,a=this.path===""?Kr.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||a;let o=new Vn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(d){s!==void 0&&s(d),Vt("ObjectLoader: Can't parse "+t+".",d.message);return}let h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){s!==void 0&&s(new Error("THREE.ObjectLoader: Can't load "+t)),Vt("ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,s)}async loadAsync(t,e){let n=this,s=this.path===""?Kr.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||s;let r=new Vn(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let a=await r.loadAsync(t,e),o;try{o=JSON.parse(a)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+t+". "+c.message)}let l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(o)}parse(t,e){let n=this.parseAnimations(t.animations),s=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,s),a=this.parseImages(t.images,function(){e!==void 0&&e(c)}),o=this.parseTextures(t.textures,a),l=this.parseMaterials(t.materials,o),c=this.parseObject(t.object,r,l,o,n),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),e!==void 0){let d=!1;for(let u in a)if(a[u].data instanceof HTMLImageElement){d=!0;break}d===!1&&e(c)}return c}async parseAsync(t){let e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),s=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),a=this.parseTextures(t.textures,r),o=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,s,o,a,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(t,e){Dd[t]=e}parseShapes(t){let e={};if(t!==void 0)for(let n=0,s=t.length;n<s;n++){let r=new ji().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){let n={},s={};if(e.traverse(function(r){r.isBone&&(s[r.uuid]=r)}),t!==void 0)for(let r=0,a=t.length;r<a;r++){let o=new ro().fromJSON(t[r],s);n[o.uuid]=o}return n}parseGeometries(t,e){let n={};if(t!==void 0){let s=new il;for(let r=0,a=t.length;r<a;r++){let o,l=t[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=s.parse(l);break;default:l.type in vm?o=vm[l.type].fromJSON(l,e):l.type in Dd?o=Dd[l.type].fromJSON(l,e):vt(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(t,e){let n={},s={};if(t!==void 0){let r=new el;r.setTextures(e);for(let a=0,o=t.length;a<o;a++){let l=t[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),s[l.uuid]=n[l.uuid]}}return s}parseAnimations(t){let e={};if(t!==void 0)for(let n=0;n<t.length;n++){let s=t[n],r=ts.parse(s);e[r.uuid]=r}return e}parseImages(t,e){let n=this,s={},r;function a(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){let c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:mr(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){let l=new Jr(e);r=new es(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){let d=t[c],u=d.url;if(Array.isArray(u)){let f=[];for(let p=0,_=u.length;p<_;p++){let g=u[p],m=o(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new gn(m.data,m.width,m.height)))}s[d.uuid]=new On(f)}else{let f=o(d.url);s[d.uuid]=new On(f)}}}return s}async parseImagesAsync(t){let e=this,n={},s;async function r(a){if(typeof a=="string"){let o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:e.resourcePath+o;return await s.loadAsync(l)}else return a.data?{data:mr(a.type,a.data),width:a.width,height:a.height}:null}if(t!==void 0&&t.length>0){s=new es(this.manager),s.setCrossOrigin(this.crossOrigin);for(let a=0,o=t.length;a<o;a++){let l=t[a],c=l.url;if(Array.isArray(c)){let h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new gn(p.data,p.width,p.height)))}n[l.uuid]=new On(h)}else{let h=await r(l.url);n[l.uuid]=new On(h)}}}return n}parseTextures(t,e){function n(r,a){return typeof r=="number"?r:(vt("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}let s={};if(t!==void 0)for(let r=0,a=t.length;r<a;r++){let o=t[r];o.image===void 0&&vt('ObjectLoader: No "image" specified for',o.uuid),e[o.image]===void 0&&vt("ObjectLoader: Undefined image",o.image);let l=e[o.image],c=l.data,h;Array.isArray(c)?(h=new $i,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new gn:h=new ze,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,Ox)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],Cm),h.wrapT=n(o.wrap[1],Cm)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,Rm)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,Rm)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.normalized!==void 0&&(h.normalized=o.normalized),o.userData!==void 0&&(h.userData=o.userData),s[o.uuid]=h}return s}parseObject(t,e,n,s,r){let a;function o(u){return e[u]===void 0&&vt("ObjectLoader: Undefined geometry",u),e[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){let f=[];for(let p=0,_=u.length;p<_;p++){let g=u[p];n[g]===void 0&&vt("ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[u]===void 0&&vt("ObjectLoader: Undefined material",u),n[u]}}function c(u){return s[u]===void 0&&vt("ObjectLoader: Undefined texture",u),s[u]}let h,d;switch(t.type){case"Scene":a=new ws,t.background!==void 0&&(Number.isInteger(t.background)?a.background=new Et(t.background):a.background=c(t.background)),t.environment!==void 0&&(a.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?a.fog=new eo(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(a.fog=new to(t.fog.color,t.fog.density)),t.fog.name!==""&&(a.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(a.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(a.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&a.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":a=new Oe(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(a.focus=t.focus),t.zoom!==void 0&&(a.zoom=t.zoom),t.filmGauge!==void 0&&(a.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(a.filmOffset=t.filmOffset),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"OrthographicCamera":a=new ns(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(a.zoom=t.zoom),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"AmbientLight":a=new Qo(t.color,t.intensity);break;case"DirectionalLight":a=new Ko(t.color,t.intensity),a.target=t.target||"";break;case"PointLight":a=new $o(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":a=new jo(t.color,t.intensity,t.width,t.height);break;case"SpotLight":a=new Jo(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),a.target=t.target||"";break;case"HemisphereLight":a=new Zo(t.color,t.groundColor,t.intensity);break;case"LightProbe":let u=new $r().fromArray(t.sh);a=new tl(u,t.intensity);break;case"SkinnedMesh":h=o(t.geometry),d=l(t.material),a=new so(h,d),t.bindMode!==void 0&&(a.bindMode=t.bindMode),t.bindMatrix!==void 0&&a.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(a.skeleton=t.skeleton);break;case"Mesh":h=o(t.geometry),d=l(t.material),a=new Ne(h,d);break;case"InstancedMesh":h=o(t.geometry),d=l(t.material);let f=t.count,p=t.instanceMatrix,_=t.instanceColor;a=new ao(h,d,f),a.instanceMatrix=new Ci(new Float32Array(p.array),16),_!==void 0&&(a.instanceColor=new Ci(new Float32Array(_.array),_.itemSize));break;case"BatchedMesh":h=o(t.geometry),d=l(t.material),a=new lo(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,d),a.geometry=h,a.perObjectFrustumCulled=t.perObjectFrustumCulled,a.sortObjects=t.sortObjects,a._drawRanges=t.drawRanges,a._reservedRanges=t.reservedRanges,a._geometryInfo=t.geometryInfo.map(g=>{let m=null,y=null;return g.boundingBox!==void 0&&(m=new Ye().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(y=new Xe().fromJSON(g.boundingSphere)),{...g,boundingBox:m,boundingSphere:y}}),a._instanceInfo=t.instanceInfo,a._availableInstanceIds=t._availableInstanceIds,a._availableGeometryIds=t._availableGeometryIds,a._nextIndexStart=t.nextIndexStart,a._nextVertexStart=t.nextVertexStart,a._geometryCount=t.geometryCount,a._maxInstanceCount=t.maxInstanceCount,a._maxVertexCount=t.maxVertexCount,a._maxIndexCount=t.maxIndexCount,a._geometryInitialized=t.geometryInitialized,a._matricesTexture=c(t.matricesTexture.uuid),a._indirectTexture=c(t.indirectTexture.uuid),t.colorsTexture!==void 0&&(a._colorsTexture=c(t.colorsTexture.uuid)),t.boundingSphere!==void 0&&(a.boundingSphere=new Xe().fromJSON(t.boundingSphere)),t.boundingBox!==void 0&&(a.boundingBox=new Ye().fromJSON(t.boundingBox));break;case"LOD":a=new io;break;case"Line":a=new $n(o(t.geometry),l(t.material));break;case"LineLoop":a=new co(o(t.geometry),l(t.material));break;case"LineSegments":a=new In(o(t.geometry),l(t.material));break;case"PointCloud":case"Points":a=new ho(o(t.geometry),l(t.material));break;case"Sprite":a=new no(l(t.material));break;case"Group":a=new wi;break;case"Bone":a=new Rr;break;default:a=new xe}if(a.uuid=t.uuid,t.name!==void 0&&(a.name=t.name),t.matrix!==void 0?(a.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=t.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(t.position!==void 0&&a.position.fromArray(t.position),t.rotation!==void 0&&a.rotation.fromArray(t.rotation),t.quaternion!==void 0&&a.quaternion.fromArray(t.quaternion),t.scale!==void 0&&a.scale.fromArray(t.scale)),t.up!==void 0&&a.up.fromArray(t.up),t.pivot!==void 0&&(a.pivot=new P().fromArray(t.pivot)),t.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),t.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=t.morphTargetInfluences.slice()),t.castShadow!==void 0&&(a.castShadow=t.castShadow),t.receiveShadow!==void 0&&(a.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(a.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(a.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(a.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(a.shadow.radius=t.shadow.radius),t.shadow.blurSamples!==void 0&&(a.shadow.blurSamples=t.shadow.blurSamples),t.shadow.focus!==void 0&&(a.shadow.focus=t.shadow.focus),t.shadow.aspect!==void 0&&(a.shadow.aspect=t.shadow.aspect),t.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(a.visible=t.visible),t.frustumCulled!==void 0&&(a.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(a.renderOrder=t.renderOrder),t.static!==void 0&&(a.static=t.static),t.userData!==void 0&&(a.userData=t.userData),t.layers!==void 0&&(a.layers.mask=t.layers),t.children!==void 0){let u=t.children;for(let f=0;f<u.length;f++)a.add(this.parseObject(u[f],e,n,s,r))}if(t.animations!==void 0){let u=t.animations;for(let f=0;f<u.length;f++){let p=u[f];a.animations.push(r[p])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(a.autoUpdate=t.autoUpdate);let u=t.levels;for(let f=0;f<u.length;f++){let p=u[f],_=a.getObjectByProperty("uuid",p.object);_!==void 0&&a.addLevel(_,p.distance,p.hysteresis)}}return a}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let s=e[n.skeleton];s===void 0?vt("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(s,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){let n=e.target,s=t.getObjectByProperty("uuid",n);s!==void 0?e.target=s:e.target=new xe}})}},Ox={UVMapping:ul,CubeReflectionMapping:ti,CubeRefractionMapping:Ni,EquirectangularReflectionMapping:ea,EquirectangularRefractionMapping:na,CubeUVReflectionMapping:Os},Cm={RepeatWrapping:_r,ClampToEdgeWrapping:mn,MirroredRepeatWrapping:xr},Rm={NearestFilter:Be,NearestMipmapNearestFilter:Eu,NearestMipmapLinearFilter:Bs,LinearFilter:Ce,LinearMipmapNearestFilter:ia,LinearMipmapLinearFilter:ei},Ud=new WeakMap,Lh=class extends en{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&vt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&vt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Yn.get(`image-bitmap:${t}`);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(c=>{Ud.has(a)===!0?(s&&s(Ud.get(a)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Yn.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),Ud.set(l,c),Yn.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Yn.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Kc,Qr=class{static getContext(){return Kc===void 0&&(Kc=new(window.AudioContext||window.webkitAudioContext)),Kc}static setContext(t){Kc=t}},Nh=class extends en{constructor(t){super(t)}load(t,e,n,s){let r=this,a=new Vn(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{let c=l.slice(0),h=Qr.getContext(),d=t+"#decode";r.manager.itemStart(d),h.decodeAudioData(c,function(u){e(u),r.manager.itemEnd(d)}).catch(function(u){o(u),r.manager.itemEnd(d)})}catch(c){o(c)}},n,s);function o(l){s?s(l):Vt(l),r.manager.itemError(t)}}},Pm=new Jt,Im=new Jt,ds=new Jt,Dh=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Oe,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Oe,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){let e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,ds.copy(t.projectionMatrix);let s=e.eyeSep/2,r=s*e.near/e.focus,a=e.near*Math.tan(xs*e.fov*.5)/e.zoom,o,l;Im.elements[12]=-s,Pm.elements[12]=s,o=-a*e.aspect+r,l=a*e.aspect+r,ds.elements[0]=2*e.near/(l-o),ds.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(ds),o=-a*e.aspect-r,l=a*e.aspect-r,ds.elements[0]=2*e.near/(l-o),ds.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(ds)}this.cameraL.matrix.copy(t.matrixWorld).multiply(Im),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(t.matrixWorld).multiply(Pm),this.cameraR.matrixWorldNeedsUpdate=!0}},ur=-90,dr=1,sl=class extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Oe(ur,dr,t,e);s.layers=this.layers,this.add(s);let r=new Oe(ur,dr,t,e);r.layers=this.layers,this.add(r);let a=new Oe(ur,dr,t,e);a.layers=this.layers,this.add(a);let o=new Oe(ur,dr,t,e);o.layers=this.layers,this.add(o);let l=new Oe(ur,dr,t,e);l.layers=this.layers,this.add(l);let c=new Oe(ur,dr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},rl=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},al=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Bx.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Bx(){this._document.hidden===!1&&this.reset()}var fs=new P,Fd=new Ke,zx=new P,ps=new P,ms=new P,Uh=class extends xe{constructor(){super(),this.type="AudioListener",this.context=Qr.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new al}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();let e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(fs,Fd,zx),ps.set(0,0,-1).applyQuaternion(Fd),ms.set(0,1,0).applyQuaternion(Fd),e.positionX){let n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(fs.x,n),e.positionY.linearRampToValueAtTime(fs.y,n),e.positionZ.linearRampToValueAtTime(fs.z,n),e.forwardX.linearRampToValueAtTime(ps.x,n),e.forwardY.linearRampToValueAtTime(ps.y,n),e.forwardZ.linearRampToValueAtTime(ps.z,n),e.upX.linearRampToValueAtTime(ms.x,n),e.upY.linearRampToValueAtTime(ms.y,n),e.upZ.linearRampToValueAtTime(ms.z,n)}else e.setPosition(fs.x,fs.y,fs.z),e.setOrientation(ps.x,ps.y,ps.z,ms.x,ms.y,ms.z)}},ol=class extends xe{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){vt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){vt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){vt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){vt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){vt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(vt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){vt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(vt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}},gs=new P,Lm=new Ke,Vx=new P,_s=new P,Fh=class extends ol{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(gs,Lm,Vx),_s.set(0,0,1).applyQuaternion(Lm);let e=this.panner;if(e.positionX){let n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(gs.x,n),e.positionY.linearRampToValueAtTime(gs.y,n),e.positionZ.linearRampToValueAtTime(gs.z,n),e.orientationX.linearRampToValueAtTime(_s.x,n),e.orientationY.linearRampToValueAtTime(_s.y,n),e.orientationZ.linearRampToValueAtTime(_s.z,n)}else e.setPosition(gs.x,gs.y,gs.z),e.setOrientation(_s.x,_s.y,_s.z)}},Oh=class{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0,e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}},ll=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,a;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,s=this.valueSize,r=t*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=e}else{a+=e;let o=e/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=e*this._origIndex;this._mixBufferRegion(n,s,l,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,s);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,a=s;r!==a;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,s){Ke.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){let a=this._workIndex*r;Ke.multiplyQuaternionsFlat(t,a,t,e,t,n),Ke.slerpFlat(t,e,t,e,t,a,s)}_lerp(t,e,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let l=e+o;t[l]=t[l]*a+t[n+o]*s}}_lerpAdditive(t,e,n,s,r){for(let a=0;a!==r;++a){let o=e+a;t[o]=t[o]+t[n+a]*s}}},Gf="\\[\\]\\.:\\/",kx=new RegExp("["+Gf+"]","g"),Hf="[^"+Gf+"]",Gx="[^"+Gf.replace("\\.","")+"]",Hx=/((?:WC+[\/:])*)/.source.replace("WC",Hf),Wx=/(WCOD+)?/.source.replace("WCOD",Gx),Xx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hf),qx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hf),Yx=new RegExp("^"+Hx+Wx+Xx+qx+"$"),Zx=["material","materials","bones","map"],$d=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kx,"")}static parseTrackName(t){let e=Yx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Zx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=$d;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bh=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Pn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,s=arguments.length;n!==s;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){let t=this._objects,e=this._indicesByUUID,n=this._paths,s=this._parsedPaths,r=this._bindings,a=r.length,o,l=t.length,c=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){let u=arguments[h],f=u.uuid,p=e[f];if(p===void 0){p=l++,e[f]=p,t.push(u);for(let _=0,g=a;_!==g;++_)r[_].push(new Me(u,n[_],s[_]))}else if(p<c){o=t[p];let _=--c,g=t[_];e[g.uuid]=p,t[p]=g,e[f]=_,t[_]=u;for(let m=0,y=a;m!==y;++m){let M=r[m],x=M[_],A=M[p];M[p]=x,A===void 0&&(A=new Me(u,n[m],s[m])),M[_]=A}}else t[p]!==o&&Vt("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,s=n.length,r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){let l=arguments[a],c=l.uuid,h=e[c];if(h!==void 0&&h>=r){let d=r++,u=t[d];e[u.uuid]=h,t[h]=u,e[c]=d,t[d]=l;for(let f=0,p=s;f!==p;++f){let _=n[f],g=_[d],m=_[h];_[h]=g,_[d]=m}}}this.nCachedObjects_=r}uncache(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,s=n.length,r=this.nCachedObjects_,a=t.length;for(let o=0,l=arguments.length;o!==l;++o){let c=arguments[o],h=c.uuid,d=e[h];if(d!==void 0)if(delete e[h],d<r){let u=--r,f=t[u],p=--a,_=t[p];d!==u&&(e[f.uuid]=d),t[d]=f,u!==p&&(e[_.uuid]=u),t[u]=_,t.pop();for(let g=0,m=s;g!==m;++g){let y=n[g],M=y[u],x=y[p];y[d]=M,y[u]=x,y.pop()}}else{let u=--a,f=t[u];d!==u&&(e[f.uuid]=d),t[d]=f,t.pop();for(let p=0,_=s;p!==_;++p){let g=n[p];g[d]=g[u],g.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){let n=this._bindingsIndicesByPath,s=n[t],r=this._bindings;if(s!==void 0)return r[s];let a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,d=new Array(c);s=r.length,n[t]=s,a.push(t),o.push(e),r.push(d);for(let u=h,f=l.length;u!==f;++u){let p=l[u];d[u]=new Me(p,t,e)}return d}unsubscribe_(t){let e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){let s=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=s[o];e[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),s[n]=s[o],s.pop()}}},cl=class{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;let r=e.tracks,a=r.length,o=new Array(a),l={endingStart:Xi,endingEnd:Xi};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=wf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let s=this._clip.duration,r=t._clip.duration,a=r/s,o=s/r;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);let a=this._updateTime(e),o=this._updateWeight(t);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Du:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Zl:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(s,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,s=this.time+t,r=this._loopCount,a=n===Tf;if(t===0)return r===-1?s:a&&(r&1)===1?e-s:s;if(n===Af){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=e||s<0){let o=Math.floor(s/e);s-=e*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){let c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){let s=this._interpolantSettings;n?(s.endingStart=qi,s.endingEnd=qi):(t?s.endingStart=this.zeroSlopeAtStart?qi:Xi:s.endingStart=yr,e?s.endingEnd=this.zeroSlopeAtEnd?qi:Xi:s.endingEnd=yr)}_scheduleFading(t,e,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=e,o[1]=r+t,l[1]=n,this}},Jx=new Float32Array(1),zh=class extends An{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){let n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){let u=s[d],f=u.name,p=h[f];if(p!==void 0)++p.referenceCount,a[d]=p;else{if(p=a[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let _=e&&e._propertyBindings[d].binding.parsedPath;p=new ll(Me.create(n,f,_),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[d]=p}o[d].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}let e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let s=this._actions,r=this._actionsByClip,a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{let o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=s.length,s.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;let d=o.actionByRoot,u=(t._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[e];a===void 0&&(a={},s[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new qr(new Float32Array(2),new Float32Array(2),1,Jx),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let s=e||this._root,r=s.uuid,a=typeof t=="string"?ts.findByName(s,t):t,o=a!==null?a.uuid:t,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Zl),l!==void 0){let d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new cl(this,a,e,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(t,e){let n=e||this._root,s=n.uuid,r=typeof t=="string"?ts.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(s,t,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Vh=class extends wr{constructor(t=1,e=1,n=1,s={}){super(t,e,s),this.isRenderTarget3D=!0,this.depth=n;for(let r=0;r<this.textures.length;r++){let a=new Ms(null,t,e,n);a.isRenderTargetTexture=!0,a.renderTarget=this,this.textures[r]=a}this._setTextureOptions(s)}},kh=class i{constructor(t){this.value=t}clone(){return new i(this.value.clone===void 0?this.value:this.value.clone())}},$x=0,Gh=class extends An{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:$x++}),this.name="",this.usage=Kl,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){let e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;let e=t.uniforms;this.uniforms.length=0;for(let n=0,s=e.length;n<s;n++){let r=Array.isArray(e[n])?e[n]:[e[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}},Hh=class extends Ts{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},Wh=class{constructor(t,e,n,s,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=s,this.count=r,this.normalized=a,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}},Nm=new Jt,Xh=class{constructor(t,e,n=0,s=1/0){this.ray=new Ei(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Vt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Nm.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nm),this}intersectObject(t,e=!0,n=[]){return Kd(t,this,n,e),n.sort(Dm),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Kd(t[s],this,n,e);return n.sort(Dm),n}};function Dm(i,t){return i.distance-t.distance}function Kd(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Kd(r[a],t,e,!0)}}var qh=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,vt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},Yh=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Zh=class{constructor(t=1,e=0,n=0){this.radius=t,this.theta=e,this.y=n}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}},Zf=class Zf{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Zf.prototype.isMatrix2=!0;var Jh=Zf,Um=new rt,hl=class{constructor(t=new rt(1/0,1/0),e=new rt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Um.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Um).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Fm=new P,Qc=new P,fr=new P,pr=new P,Od=new P,Kx=new P,Qx=new P,$h=class{constructor(t=new P,e=new P){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Fm.subVectors(t,this.start),Qc.subVectors(this.end,this.start);let n=Qc.dot(Qc);if(n===0)return 0;let r=Qc.dot(Fm)/n;return e&&(r=Zt(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Kx,n=Qx){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;fr.subVectors(c,o),pr.subVectors(h,l),Od.subVectors(o,l);let d=fr.dot(fr),u=pr.dot(pr),f=pr.dot(Od);if(d<=s&&u<=s)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(d<=s)r=0,a=f/u,a=Zt(a,0,1);else{let p=fr.dot(Od);if(u<=s)a=0,r=Zt(-p/d,0,1);else{let _=fr.dot(pr),g=d*u-_*_;g!==0?r=Zt((_*f-p*u)/g,0,1):r=0,a=(_*r+f)/u,a<0?(a=0,r=Zt(-p/d,0,1)):a>1&&(a=1,r=Zt((_-p)/d,0,1))}}return e.copy(o).addScaledVector(fr,r),n.copy(l).addScaledVector(pr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Om=new P,Kh=class extends xe{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";let n=new ie,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){let c=a/l*Math.PI*2,h=o/l*Math.PI*2;s.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Rt(s,3));let r=new Qe({fog:!1,toneMapped:!1});this.cone=new In(n,r),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;let t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Om.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Om),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},Wi=new P,jc=new Jt,Bd=new Jt,Qh=class extends In{constructor(t){let e=Qg(t),n=new ie,s=[],r=[];for(let c=0;c<e.length;c++){let h=e[c];h.parent&&h.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Rt(s,3)),n.setAttribute("color",new Rt(r,3));let a=new Qe({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;let o=new Et(255),l=new Et(65280);this.setColors(o,l)}updateMatrixWorld(t){let e=this.bones,n=this.geometry,s=n.getAttribute("position");Bd.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<e.length;r++){let o=e[r];o.parent&&o.parent.isBone&&(jc.multiplyMatrices(Bd,o.matrixWorld),Wi.setFromMatrixPosition(jc),s.setXYZ(a,Wi.x,Wi.y,Wi.z),jc.multiplyMatrices(Bd,o.parent.matrixWorld),Wi.setFromMatrixPosition(jc),s.setXYZ(a+1,Wi.x,Wi.y,Wi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){let s=this.geometry.getAttribute("color");for(let r=0;r<s.count;r+=2)s.setXYZ(r,t.r,t.g,t.b),s.setXYZ(r+1,e.r,e.g,e.b);return s.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function Qg(i){let t=[];i.isBone===!0&&t.push(i);for(let e=0;e<i.children.length;e++)t.push(...Qg(i.children[e]));return t}var jh=class extends Ne{constructor(t,e,n){let s=new kr(e,4,2),r=new Jn({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},jx=new P,Bm=new Et,zm=new Et,tu=class extends xe{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let s=new Vr(e);s.rotateY(Math.PI*.5),this.material=new Jn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=s.getAttribute("position"),a=new Float32Array(r.count*3);s.setAttribute("color",new be(a,3)),this.add(new Ne(s,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let e=t.geometry.getAttribute("color");Bm.copy(this.light.color),zm.copy(this.light.groundColor);for(let n=0,s=e.count;n<s;n++){let r=n<s/2?Bm:zm;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),t.lookAt(jx.setFromMatrixPosition(this.light.matrixWorld).negate())}},eu=class extends In{constructor(t=10,e=10,n=4473924,s=8947848){n=new Et(n),s=new Et(s);let r=e/2,a=t/e,o=t/2,l=[],c=[];for(let u=0,f=0,p=-o;u<=e;u++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);let _=u===r?n:s;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}let h=new ie;h.setAttribute("position",new Rt(l,3)),h.setAttribute("color",new Rt(c,3));let d=new Qe({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},nu=class extends In{constructor(t=10,e=16,n=8,s=64,r=4473924,a=8947848){r=new Et(r),a=new Et(a);let o=[],l=[];if(e>1)for(let d=0;d<e;d++){let u=d/e*(Math.PI*2),f=Math.sin(u)*t,p=Math.cos(u)*t;o.push(0,0,0),o.push(f,0,p);let _=d&1?r:a;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let d=0;d<n;d++){let u=d&1?r:a,f=t-t/n*d;for(let p=0;p<s;p++){let _=p/s*(Math.PI*2),g=Math.sin(_)*f,m=Math.cos(_)*f;o.push(g,0,m),l.push(u.r,u.g,u.b),_=(p+1)/s*(Math.PI*2),g=Math.sin(_)*f,m=Math.cos(_)*f,o.push(g,0,m),l.push(u.r,u.g,u.b)}}let c=new ie;c.setAttribute("position",new Rt(o,3)),c.setAttribute("color",new Rt(l,3));let h=new Qe({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Vm=new P,th=new P,km=new P,iu=class extends xe{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let s=new ie;s.setAttribute("position",new Rt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));let r=new Qe({fog:!1,toneMapped:!1});this.lightPlane=new $n(s,r),this.add(this.lightPlane),s=new ie,s.setAttribute("position",new Rt([0,0,0,0,0,1],3)),this.targetLine=new $n(s,r),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Vm.setFromMatrixPosition(this.light.matrixWorld),th.setFromMatrixPosition(this.light.target.matrixWorld),km.subVectors(th,Vm),this.lightPlane.lookAt(th),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(th),this.targetLine.scale.z=km.length()}},eh=new P,Fe=new Ds,su=class extends In{constructor(t){let e=new ie,n=new Qe({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,_){l(p),l(_)}function l(p){s.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(s.length/3-1)}e.setAttribute("position",new Rt(s,3)),e.setAttribute("color",new Rt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();let c=new Et(16755200),h=new Et(16711680),d=new Et(43775),u=new Et(16777215),f=new Et(3355443);this.setColors(c,h,d,u,f)}setColors(t,e,n,s,r){let o=this.geometry.getAttribute("color");return o.setXYZ(0,t.r,t.g,t.b),o.setXYZ(1,t.r,t.g,t.b),o.setXYZ(2,t.r,t.g,t.b),o.setXYZ(3,t.r,t.g,t.b),o.setXYZ(4,t.r,t.g,t.b),o.setXYZ(5,t.r,t.g,t.b),o.setXYZ(6,t.r,t.g,t.b),o.setXYZ(7,t.r,t.g,t.b),o.setXYZ(8,t.r,t.g,t.b),o.setXYZ(9,t.r,t.g,t.b),o.setXYZ(10,t.r,t.g,t.b),o.setXYZ(11,t.r,t.g,t.b),o.setXYZ(12,t.r,t.g,t.b),o.setXYZ(13,t.r,t.g,t.b),o.setXYZ(14,t.r,t.g,t.b),o.setXYZ(15,t.r,t.g,t.b),o.setXYZ(16,t.r,t.g,t.b),o.setXYZ(17,t.r,t.g,t.b),o.setXYZ(18,t.r,t.g,t.b),o.setXYZ(19,t.r,t.g,t.b),o.setXYZ(20,t.r,t.g,t.b),o.setXYZ(21,t.r,t.g,t.b),o.setXYZ(22,t.r,t.g,t.b),o.setXYZ(23,t.r,t.g,t.b),o.setXYZ(24,e.r,e.g,e.b),o.setXYZ(25,e.r,e.g,e.b),o.setXYZ(26,e.r,e.g,e.b),o.setXYZ(27,e.r,e.g,e.b),o.setXYZ(28,e.r,e.g,e.b),o.setXYZ(29,e.r,e.g,e.b),o.setXYZ(30,e.r,e.g,e.b),o.setXYZ(31,e.r,e.g,e.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,s.r,s.g,s.b),o.setXYZ(39,s.r,s.g,s.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){let t=this.geometry,e=this.pointMap,n=1,s=1,r,a;if(Fe.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===bn)r=-1,a=1;else if(this.camera.coordinateSystem===Yi)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);ke("c",e,t,Fe,0,0,r),ke("t",e,t,Fe,0,0,a),ke("n1",e,t,Fe,-n,-s,r),ke("n2",e,t,Fe,n,-s,r),ke("n3",e,t,Fe,-n,s,r),ke("n4",e,t,Fe,n,s,r),ke("f1",e,t,Fe,-n,-s,a),ke("f2",e,t,Fe,n,-s,a),ke("f3",e,t,Fe,-n,s,a),ke("f4",e,t,Fe,n,s,a),ke("u1",e,t,Fe,n*.7,s*1.1,r),ke("u2",e,t,Fe,-n*.7,s*1.1,r),ke("u3",e,t,Fe,0,s*2,r),ke("cf1",e,t,Fe,-n,0,a),ke("cf2",e,t,Fe,n,0,a),ke("cf3",e,t,Fe,0,-s,a),ke("cf4",e,t,Fe,0,s,a),ke("cn1",e,t,Fe,-n,0,r),ke("cn2",e,t,Fe,n,0,r),ke("cn3",e,t,Fe,0,-s,r),ke("cn4",e,t,Fe,0,s,r),t.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function ke(i,t,e,n,s,r,a){eh.set(s,r,a).unproject(n);let o=t[i];if(o!==void 0){let l=e.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],eh.x,eh.y,eh.z)}}var nh=new Ye,ru=class extends In{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new ie;r.setIndex(new be(n,1)),r.setAttribute("position",new be(s,3)),super(r,new Qe({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&nh.setFromObject(this.object),nh.isEmpty())return;let t=nh.min,e=nh.max,n=this.geometry.attributes.position,s=n.array;s[0]=e.x,s[1]=e.y,s[2]=e.z,s[3]=t.x,s[4]=e.y,s[5]=e.z,s[6]=t.x,s[7]=t.y,s[8]=e.z,s[9]=e.x,s[10]=t.y,s[11]=e.z,s[12]=e.x,s[13]=e.y,s[14]=t.z,s[15]=t.x,s[16]=e.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=e.x,s[22]=t.y,s[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},au=class extends In{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new ie;r.setIndex(new be(n,1)),r.setAttribute("position",new Rt(s,3)),super(r,new Qe({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},ou=class extends $n{constructor(t,e=1,n=16776960){let s=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new ie;a.setAttribute("position",new Rt(r,3)),a.computeBoundingSphere(),super(a,new Qe({color:s,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;let o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new ie;l.setAttribute("position",new Rt(o,3)),l.computeBoundingSphere(),this.add(new Ne(l,new Jn({color:s,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},Gm=new P,ih,zd,lu=class extends xe{constructor(t=new P(0,0,1),e=new P(0,0,0),n=1,s=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",ih===void 0&&(ih=new ie,ih.setAttribute("position",new Rt([0,0,0,0,1,0],3)),zd=new Nr(.5,1,5,1),zd.translate(0,-.5,0)),this.position.copy(e),this.line=new $n(ih,new Qe({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ne(zd,new Jn({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Gm.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Gm,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},cu=class extends In{constructor(t=1){let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new ie;s.setAttribute("position",new Rt(e,3)),s.setAttribute("color",new Rt(n,3));let r=new Qe({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,n){let s=new Et,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},hu=class{constructor(){this.type="ShapePath",this.color=new Et,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new Qi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,a){return this.currentPath.bezierCurveTo(t,e,n,s,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1,d=c.length;for(let u=0,f=d-1;u<d;f=u++){let p=c[u],_=c[f];p.y>l.y!=_.y>l.y&&l.x<(_.x-p.x)*(l.y-p.y)/(_.y-p.y)+p.x&&(h=!h)}return h}function e(l,c){let h=c.getCenter(new rt);if(t(h,l))return h;let d=h.y,u=[],f=l.length;for(let p=0;p<f;p++){let _=l[p],g=l[(p+1)%f];if(_.y>d!=g.y>d){let m=_.x+(d-_.y)*(g.x-_.x)/(g.y-_.y);u.push(m)}}return u.length>1&&(u.sort((p,_)=>p-_),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(vt('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let s=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=Bn.area(c);if(h===0)continue;let d=new hl;for(let u=0;u<c.length;u++)d.expandByPoint(c[u]);r.push({subPath:l,points:c,boundingBox:d,interiorPoint:e(c,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let d=l-1;d>=0;d--){let u=r[d];if(u.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}s(c.winding)===s(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let a=[],o=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new ji;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let h=new Qi;h.curves=l.subPath.curves,c.holes.push(h)}return a}},uu=class extends An{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function tv(i,t){let e=i.image&&i.image.width?i.image.width/i.image.height:1;return e>t?(i.repeat.x=1,i.repeat.y=e/t,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=t/e,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function ev(i,t){let e=i.image&&i.image.width?i.image.width/i.image.height:1;return e>t?(i.repeat.x=t/e,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=e/t,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function nv(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function Fu(i,t,e,n){let s=iv(n);switch(e){case Lu:return i*t;case ml:return i*t/s.components*s.byteLength;case sa:return i*t/s.components*s.byteLength;case Ui:return i*t*2/s.components*s.byteLength;case gl:return i*t*2/s.components*s.byteLength;case Nu:return i*t*3/s.components*s.byteLength;case ln:return i*t*4/s.components*s.byteLength;case _l:return i*t*4/s.components*s.byteLength;case ra:case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oa:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vl:case Sl:return Math.max(i,16)*Math.max(t,8)/4;case xl:case yl:return Math.max(i,8)*Math.max(t,8)/2;case Ml:case bl:case wl:case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Al:case ca:case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Gl:case Hl:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Xl:case ql:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ha:case Yl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function iv(i){switch(i){case vn:case Cu:return{byteLength:1,components:1};case zs:case Ru:case kn:return{byteLength:2,components:1};case fl:case pl:return{byteLength:2,components:4};case Ln:case dl:case on:return{byteLength:4,components:1};case Pu:case Iu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var du=class{static contain(t,e){return tv(t,e)}static cover(t,e){return ev(t,e)}static fill(t){return nv(t)}static getByteLength(t,e,n,s){return Fu(t,e,n,s)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function y0(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sv(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let _=d[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var rv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,av=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ov=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,pv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_v=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ev=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Cv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Iv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ov=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Bv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$v=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Kv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Qv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ny=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ry=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ay=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ly=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,my=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_y=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,My=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ay=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ry=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ly=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ny=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Uy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,By=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Gy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$y=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ky=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_S=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,TS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ES=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,DS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,US=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:rv,alphahash_pars_fragment:av,alphamap_fragment:ov,alphamap_pars_fragment:lv,alphatest_fragment:cv,alphatest_pars_fragment:hv,aomap_fragment:uv,aomap_pars_fragment:dv,batching_pars_vertex:fv,batching_vertex:pv,begin_vertex:mv,beginnormal_vertex:gv,bsdfs:_v,iridescence_fragment:xv,bumpmap_pars_fragment:vv,clipping_planes_fragment:yv,clipping_planes_pars_fragment:Sv,clipping_planes_pars_vertex:Mv,clipping_planes_vertex:bv,color_fragment:Av,color_pars_fragment:wv,color_pars_vertex:Tv,color_vertex:Ev,common:Cv,cube_uv_reflection_fragment:Rv,defaultnormal_vertex:Pv,displacementmap_pars_vertex:Iv,displacementmap_vertex:Lv,emissivemap_fragment:Nv,emissivemap_pars_fragment:Dv,colorspace_fragment:Uv,colorspace_pars_fragment:Fv,envmap_fragment:Ov,envmap_common_pars_fragment:Bv,envmap_pars_fragment:zv,envmap_pars_vertex:Vv,envmap_physical_pars_fragment:Kv,envmap_vertex:kv,fog_vertex:Gv,fog_pars_vertex:Hv,fog_fragment:Wv,fog_pars_fragment:Xv,gradientmap_pars_fragment:qv,lightmap_pars_fragment:Yv,lights_lambert_fragment:Zv,lights_lambert_pars_fragment:Jv,lights_pars_begin:$v,lights_toon_fragment:Qv,lights_toon_pars_fragment:jv,lights_phong_fragment:ty,lights_phong_pars_fragment:ey,lights_physical_fragment:ny,lights_physical_pars_fragment:iy,lights_fragment_begin:sy,lights_fragment_maps:ry,lights_fragment_end:ay,lightprobes_pars_fragment:oy,logdepthbuf_fragment:ly,logdepthbuf_pars_fragment:cy,logdepthbuf_pars_vertex:hy,logdepthbuf_vertex:uy,map_fragment:dy,map_pars_fragment:fy,map_particle_fragment:py,map_particle_pars_fragment:my,metalnessmap_fragment:gy,metalnessmap_pars_fragment:_y,morphinstance_vertex:xy,morphcolor_vertex:vy,morphnormal_vertex:yy,morphtarget_pars_vertex:Sy,morphtarget_vertex:My,normal_fragment_begin:by,normal_fragment_maps:Ay,normal_pars_fragment:wy,normal_pars_vertex:Ty,normal_vertex:Ey,normalmap_pars_fragment:Cy,clearcoat_normal_fragment_begin:Ry,clearcoat_normal_fragment_maps:Py,clearcoat_pars_fragment:Iy,iridescence_pars_fragment:Ly,opaque_fragment:Ny,packing:Dy,premultiplied_alpha_fragment:Uy,project_vertex:Fy,dithering_fragment:Oy,dithering_pars_fragment:By,roughnessmap_fragment:zy,roughnessmap_pars_fragment:Vy,shadowmap_pars_fragment:ky,shadowmap_pars_vertex:Gy,shadowmap_vertex:Hy,shadowmask_pars_fragment:Wy,skinbase_vertex:Xy,skinning_pars_vertex:qy,skinning_vertex:Yy,skinnormal_vertex:Zy,specularmap_fragment:Jy,specularmap_pars_fragment:$y,tonemapping_fragment:Ky,tonemapping_pars_fragment:Qy,transmission_fragment:jy,transmission_pars_fragment:tS,uv_pars_fragment:eS,uv_pars_vertex:nS,uv_vertex:iS,worldpos_vertex:sS,background_vert:rS,background_frag:aS,backgroundCube_vert:oS,backgroundCube_frag:lS,cube_vert:cS,cube_frag:hS,depth_vert:uS,depth_frag:dS,distance_vert:fS,distance_frag:pS,equirect_vert:mS,equirect_frag:gS,linedashed_vert:_S,linedashed_frag:xS,meshbasic_vert:vS,meshbasic_frag:yS,meshlambert_vert:SS,meshlambert_frag:MS,meshmatcap_vert:bS,meshmatcap_frag:AS,meshnormal_vert:wS,meshnormal_frag:TS,meshphong_vert:ES,meshphong_frag:CS,meshphysical_vert:RS,meshphysical_frag:PS,meshtoon_vert:IS,meshtoon_frag:LS,points_vert:NS,points_frag:DS,shadow_vert:US,shadow_frag:FS,sprite_vert:OS,sprite_frag:BS},wt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},ni={basic:{uniforms:hn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:hn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:hn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:hn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:hn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Et(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:hn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:hn([wt.points,wt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:hn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:hn([wt.common,wt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:hn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:hn([wt.sprite,wt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:hn([wt.common,wt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:hn([wt.lights,wt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};ni.physical={uniforms:hn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var Ou={r:0,b:0,g:0},zS=new Jt,S0=new jt;S0.set(-1,0,0,0,1,0,0,0,1);function VS(i,t,e,n,s,r){let a=new Et(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let x=y.backgroundBlurriness>0;M=t.get(M,x)}return M}function p(y){let M=!1,x=f(y);x===null?g(a,o):x&&x.isColor&&(g(x,1),M=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,M){let x=f(M);x&&(x.isCubeTexture||x.mapping===Os)?(c===void 0&&(c=new Ne(new Ki(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:ks(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zS.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(S0),c.material.toneMapped=he.getTransfer(x.colorSpace)!==ye,(h!==x||d!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ne(new Ps(2,2),new _n({name:"BackgroundMaterial",uniforms:ks(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=he.getTransfer(x.colorSpace)!==ye,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,M){y.getRGB(Ou,zf(i)),e.buffers.color.setClear(Ou.r,Ou.g,Ou.b,M,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:p,addToRenderList:_,dispose:m}}function kS(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(I,U,O,L,B){let q=!1,X=d(I,L,O,U);r!==X&&(r=X,c(r.object)),q=f(I,L,O,B),q&&p(I,L,O,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(I,U,O,L),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,U,O,L){let B=L.wireframe===!0,q=n[U.id];q===void 0&&(q={},n[U.id]=q);let X=I.isInstancedMesh===!0?I.id:0,at=q[X];at===void 0&&(at={},q[X]=at);let Y=at[O.id];Y===void 0&&(Y={},at[O.id]=Y);let et=Y[B];return et===void 0&&(et=u(l()),Y[B]=et),et}function u(I){let U=[],O=[],L=[];for(let B=0;B<e;B++)U[B]=0,O[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,U,O,L){let B=r.attributes,q=U.attributes,X=0,at=O.getAttributes();for(let Y in at)if(at[Y].location>=0){let it=B[Y],Ut=q[Y];if(Ut===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(Ut=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(Ut=I.instanceColor)),it===void 0||it.attribute!==Ut||Ut&&it.data!==Ut.data)return!0;X++}return r.attributesNum!==X||r.index!==L}function p(I,U,O,L){let B={},q=U.attributes,X=0,at=O.getAttributes();for(let Y in at)if(at[Y].location>=0){let it=q[Y];it===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(it=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(it=I.instanceColor));let Ut={};Ut.attribute=it,it&&it.data&&(Ut.data=it.data),B[Y]=Ut,X++}r.attributes=B,r.attributesNum=X,r.index=L}function _(){let I=r.newAttributes;for(let U=0,O=I.length;U<O;U++)I[U]=0}function g(I){m(I,0)}function m(I,U){let O=r.newAttributes,L=r.enabledAttributes,B=r.attributeDivisors;O[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),B[I]!==U&&(i.vertexAttribDivisor(I,U),B[I]=U)}function y(){let I=r.newAttributes,U=r.enabledAttributes;for(let O=0,L=U.length;O<L;O++)U[O]!==I[O]&&(i.disableVertexAttribArray(O),U[O]=0)}function M(I,U,O,L,B,q,X){X===!0?i.vertexAttribIPointer(I,U,O,B,q):i.vertexAttribPointer(I,U,O,L,B,q)}function x(I,U,O,L){_();let B=L.attributes,q=O.getAttributes(),X=U.defaultAttributeValues;for(let at in q){let Y=q[at];if(Y.location>=0){let et=B[at];if(et===void 0&&(at==="instanceMatrix"&&I.instanceMatrix&&(et=I.instanceMatrix),at==="instanceColor"&&I.instanceColor&&(et=I.instanceColor)),et!==void 0){let it=et.normalized,Ut=et.itemSize,Ct=t.get(et);if(Ct===void 0)continue;let fe=Ct.buffer,ee=Ct.type,se=Ct.bytesPerElement,Z=ee===i.INT||ee===i.UNSIGNED_INT||et.gpuType===dl;if(et.isInterleavedBufferAttribute){let nt=et.data,Mt=nt.stride,Yt=et.offset;if(nt.isInstancedInterleavedBuffer){for(let pt=0;pt<Y.locationSize;pt++)m(Y.location+pt,nt.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let pt=0;pt<Y.locationSize;pt++)g(Y.location+pt);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let pt=0;pt<Y.locationSize;pt++)M(Y.location+pt,Ut/Y.locationSize,ee,it,Mt*se,(Yt+Ut/Y.locationSize*pt)*se,Z)}else{if(et.isInstancedBufferAttribute){for(let nt=0;nt<Y.locationSize;nt++)m(Y.location+nt,et.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let nt=0;nt<Y.locationSize;nt++)g(Y.location+nt);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let nt=0;nt<Y.locationSize;nt++)M(Y.location+nt,Ut/Y.locationSize,ee,it,Ut*se,Ut/Y.locationSize*nt*se,Z)}}else if(X!==void 0){let it=X[at];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(Y.location,it);break;case 3:i.vertexAttrib3fv(Y.location,it);break;case 4:i.vertexAttrib4fv(Y.location,it);break;default:i.vertexAttrib1fv(Y.location,it)}}}}y()}function A(){T();for(let I in n){let U=n[I];for(let O in U){let L=U[O];for(let B in L){let q=L[B];for(let X in q)h(q[X].object),delete q[X];delete L[B]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;let U=n[I.id];for(let O in U){let L=U[O];for(let B in L){let q=L[B];for(let X in q)h(q[X].object),delete q[X];delete L[B]}}delete n[I.id]}function E(I){for(let U in n){let O=n[U];for(let L in O){let B=O[L];if(B[I.id]===void 0)continue;let q=B[I.id];for(let X in q)h(q[X].object),delete q[X];delete B[I.id]}}}function v(I){for(let U in n){let O=n[U],L=I.isInstancedMesh===!0?I.id:0,B=O[L];if(B!==void 0){for(let q in B){let X=B[q];for(let at in X)h(X[at].object),delete X[at];delete B[q]}delete O[L],Object.keys(O).length===0&&delete n[U]}}}function T(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function GS(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function HS(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==ln&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let v=E===kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==vn&&E!==on&&!v&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,maxSamples:A,samples:b}}function WS(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Fn,o=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let y=r?0:n,M=y*4,x=m.clippingState||null;l.value=x,x=h(p,u,M,f);for(let A=0;A!==M;++A)x[A]=e[A];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=f+_*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,x=f;M!==_;++M,x+=4)a.copy(d[M]).applyMatrix4(y,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var da=4,XS=6,qS=20,YS=256,Ql=new ns,jg=new Et,Jf=null,$f=0,Kf=0,Qf=!1,ZS=new P,Gs=new P,ec=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=ZS}=r;Jf=this._renderer.getRenderTarget(),$f=this._renderer.getActiveCubeFace(),Kf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Jf,$f,Kf),this._renderer.xr.enabled=Qf,t.scissorTest=!1,ua(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ti||t.mapping===Ni?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jf=this._renderer.getRenderTarget(),$f=this._renderer.getActiveCubeFace(),Kf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:kn,format:ln,colorSpace:Sr,depthBuffer:!1},s=t0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t0(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=JS(r)),this._blurMaterial=KS(r,t,e),this._ggxMaterial=$S(r,t,e)}return s}_compileMaterial(t){let e=new Ne(new ie,t);this._renderer.compile(e,Ql)}_sceneToCubeUV(t,e,n,s,r){let l=new Oe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(jg),d.toneMapping=Tn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new Ki,new Jn({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,m=!0):(g.color.copy(jg),m=!0);for(let M=0;M<6;M++){let x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let A=this._cubeSize;ua(s,x*A,M>2?A:0,A,A),d.setRenderTarget(s),m&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ti||t.mapping===Ni;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=n0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e0());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ua(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ql)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-da?n-p+da:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,ua(r,g,m,3*_,2*_),s.setRenderTarget(r),s.render(o,Ql),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,ua(t,g,m,3*_,2*_),s.setRenderTarget(t),s.render(o,Ql)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-da?s-this._lodMax+da:0),u=4*(this._cubeSize-h);ua(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Ql)}};function JS(i){let t=[],e=[],n=i,s=i-da+1+XS;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let m=0;m<d;m++){let y=m%3*2/3-1,M=m>2?0:-1,x=[y,M,0,y+2/3,M,0,y+2/3,M+1,0,y,M,0,y+2/3,M+1,0,y,M+1,0];p.set(x,f*u*m);for(let A=0;A<u;A++){let b=h[A*2]*2-1,E=h[A*2+1]*2-1;m===0?Gs.set(1,E,b):m===1?Gs.set(-b,1,-E):m===2?Gs.set(-b,E,1):m===3?Gs.set(-1,E,-b):m===4?Gs.set(-b,-1,E):Gs.set(b,E,-1),Gs.toArray(_,(m*u+A)*f)}}let g=new ie;g.setAttribute("position",new be(p,f)),g.setAttribute("outputDirection",new be(_,f)),e.push(new Ne(g,null)),n>da&&n--}return{lodMeshes:e,sizeLods:t}}function t0(i,t,e){let n=new tn(i,t,e);return n.texture.mapping=Os,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ua(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function $S(i,t,e){return new _n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:YS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function KS(i,t,e){return new _n({name:"SphericalGaussianBlur",defines:{SAMPLES:qS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function e0(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function n0(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function zu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var nc=class extends tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new $i(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ki(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:jn});r.uniforms.tEquirect.value=e;let a=new Ne(s,r),o=e.minFilter;return e.minFilter===ei&&(e.minFilter=Ce),new sl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function QS(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===ea||f===na)if(t.has(u)){let p=t.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new nc(p.height);return _.fromEquirectangularTexture(i,u),t.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,p=f===ea||f===na,_=f===ti||f===Ni;if(p||_){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new ec(i)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let y=u.image;return p&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new ec(i)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===ea?u.mapping=ti:f===na&&(u.mapping=Ni),u}function l(u){let f=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function jS(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ri("WebGLRenderer: "+n+" extension not supported."),s}}}function tM(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,_=0;if(p===void 0)return;if(f!==null){let y=f.array;_=f.version;for(let M=0,x=y.length;M<x;M+=3){let A=y[M+0],b=y[M+1],E=y[M+2];u.push(A,b,b,E,E,A)}}else{let y=p.array;_=p.version;for(let M=0,x=y.length/3-1;M<x;M+=3){let A=M+0,b=M+1,E=M+2;u.push(A,b,b,E,E,A)}}let g=new(p.count>=65535?Er:Tr)(u,1);g.version=_;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function eM(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function nM(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Vt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function iM(i,t,e){let n=new WeakMap,s=new Ae;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let T=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),_===!0&&(M=3);let x=o.attributes.position.count*M,A=1;x>t.maxTextureSize&&(A=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let b=new Float32Array(x*A*4*d),E=new Ss(b,x,A,d);E.type=on,E.needsUpdate=!0;let v=M*4;for(let R=0;R<d;R++){let I=g[R],U=m[R],O=y[R],L=x*A*4*R;for(let B=0;B<I.count;B++){let q=B*v;f===!0&&(s.fromBufferAttribute(I,B),b[L+q+0]=s.x,b[L+q+1]=s.y,b[L+q+2]=s.z,b[L+q+3]=0),p===!0&&(s.fromBufferAttribute(U,B),b[L+q+4]=s.x,b[L+q+5]=s.y,b[L+q+6]=s.z,b[L+q+7]=0),_===!0&&(s.fromBufferAttribute(O,B),b[L+q+8]=s.x,b[L+q+9]=s.y,b[L+q+10]=s.z,b[L+q+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:E,size:new rt(x,A)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function sM(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var rM={[yu]:"LINEAR_TONE_MAPPING",[Su]:"REINHARD_TONE_MAPPING",[Mu]:"CINEON_TONE_MAPPING",[bu]:"ACES_FILMIC_TONE_MAPPING",[wu]:"AGX_TONE_MAPPING",[Tu]:"NEUTRAL_TONE_MAPPING",[Au]:"CUSTOM_TONE_MAPPING"};function aM(i,t,e,n,s,r){let a=new tn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ie;c.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Rt([0,2,0,0,2,0],2));let h=new Gr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ne(c,h),u=new ns(-1,1,1,-1,0,1),f=null,p=null,_=!1,g,m=null,y=[],M=!1;this.setSize=function(x,A){a.setSize(x,A),o!==null&&o.setSize(x,A),l!==null&&l.setSize(x,A);for(let b=0;b<y.length;b++){let E=y[b];E.setSize&&E.setSize(x,A)}},this.setEffects=function(x){y=x,M=y.length>0&&y[0].isRenderPass===!0;let A=a.width,b=a.height;y.length>0&&o===null&&(o=new tn(A,b,{type:kn,depthBuffer:!1,stencilBuffer:!1}),l=new tn(A,b,{type:kn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<y.length;E++){let v=y[E];v.setSize&&v.setSize(A,b)}},this.begin=function(x,A){if(_||x.toneMapping===Tn&&y.length===0)return!1;if(m=A,A!==null){let b=A.width,E=A.height;(a.width!==b||a.height!==E)&&this.setSize(b,E)}return M===!1&&x.setRenderTarget(a),g=x.toneMapping,x.toneMapping=Tn,!0},this.hasRenderPass=function(){return M},this.end=function(x,A){x.toneMapping=g,_=!0;let b=a,E=o;for(let v=0;v<y.length;v++){let T=y[v];T.enabled!==!1&&(T.render(x,E,b,A),T.needsSwap!==!1&&(b=E,E=E===o?l:o))}if(f!==x.outputColorSpace||p!==x.toneMapping){f=x.outputColorSpace,p=x.toneMapping,h.defines={},he.getTransfer(f)===ye&&(h.defines.SRGB_TRANSFER="");let v=rM[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(m),x.render(d,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var M0=new ze,ep=new Ri(1,1),b0=new Ss,A0=new Ms,w0=new $i,i0=[],s0=[],r0=new Float32Array(16),a0=new Float32Array(9),o0=new Float32Array(4);function pa(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=i0[s];if(r===void 0&&(r=new Float32Array(s),i0[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Vu(i,t){let e=s0[t];e===void 0&&(e=new Int32Array(t),s0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function oM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function lM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function cM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function hM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function uM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;o0.set(n),i.uniformMatrix2fv(this.addr,!1,o0),Je(e,n)}}function dM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;a0.set(n),i.uniformMatrix3fv(this.addr,!1,a0),Je(e,n)}}function fM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;r0.set(n),i.uniformMatrix4fv(this.addr,!1,r0),Je(e,n)}}function pM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function mM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function gM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function _M(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function xM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function yM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function SM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function MM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ep.compareFunction=e.isReversedDepthBuffer()?$l:Jl,r=ep):r=M0,e.setTexture2D(t||r,s)}function bM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||A0,s)}function AM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||w0,s)}function wM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||b0,s)}function TM(i){switch(i){case 5126:return oM;case 35664:return lM;case 35665:return cM;case 35666:return hM;case 35674:return uM;case 35675:return dM;case 35676:return fM;case 5124:case 35670:return pM;case 35667:case 35671:return mM;case 35668:case 35672:return gM;case 35669:case 35673:return _M;case 5125:return xM;case 36294:return vM;case 36295:return yM;case 36296:return SM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return wM}}function EM(i,t){i.uniform1fv(this.addr,t)}function CM(i,t){let e=pa(t,this.size,2);i.uniform2fv(this.addr,e)}function RM(i,t){let e=pa(t,this.size,3);i.uniform3fv(this.addr,e)}function PM(i,t){let e=pa(t,this.size,4);i.uniform4fv(this.addr,e)}function IM(i,t){let e=pa(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function LM(i,t){let e=pa(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function NM(i,t){let e=pa(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function DM(i,t){i.uniform1iv(this.addr,t)}function UM(i,t){i.uniform2iv(this.addr,t)}function FM(i,t){i.uniform3iv(this.addr,t)}function OM(i,t){i.uniform4iv(this.addr,t)}function BM(i,t){i.uniform1uiv(this.addr,t)}function zM(i,t){i.uniform2uiv(this.addr,t)}function VM(i,t){i.uniform3uiv(this.addr,t)}function kM(i,t){i.uniform4uiv(this.addr,t)}function GM(i,t,e){let n=this.cache,s=t.length,r=Vu(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ep:a=M0;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function HM(i,t,e){let n=this.cache,s=t.length,r=Vu(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||A0,r[a])}function WM(i,t,e){let n=this.cache,s=t.length,r=Vu(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||w0,r[a])}function XM(i,t,e){let n=this.cache,s=t.length,r=Vu(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||b0,r[a])}function qM(i){switch(i){case 5126:return EM;case 35664:return CM;case 35665:return RM;case 35666:return PM;case 35674:return IM;case 35675:return LM;case 35676:return NM;case 5124:case 35670:return DM;case 35667:case 35671:return UM;case 35668:case 35672:return FM;case 35669:case 35673:return OM;case 5125:return BM;case 36294:return zM;case 36295:return VM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return GM;case 35679:case 36299:case 36307:return HM;case 35680:case 36300:case 36308:case 36293:return WM;case 36289:case 36303:case 36311:case 36292:return XM}}var np=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=TM(e.type)}},ip=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qM(e.type)}},sp=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},jf=/(\w+)(\])?(\[|\.)?/g;function l0(i,t){i.seq.push(t),i.map[t.id]=t}function YM(i,t,e){let n=i.name,s=n.length;for(jf.lastIndex=0;;){let r=jf.exec(n),a=jf.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){l0(e,c===void 0?new np(o,i,t):new ip(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new sp(o),l0(e,d)),e=d}}}var fa=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);YM(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function c0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ZM=37297,JM=0;function $M(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var h0=new jt;function KM(i){he._getMatrix(h0,he.workingColorSpace,i);let t=`mat3( ${h0.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case Mr:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function u0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+$M(i.getShaderSource(t),o)}else return r}function QM(i,t){let e=KM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var jM={[yu]:"Linear",[Su]:"Reinhard",[Mu]:"Cineon",[bu]:"ACESFilmic",[wu]:"AgX",[Tu]:"Neutral",[Au]:"Custom"};function tb(i,t){let e=jM[t];return e===void 0?(vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Bu=new P;function eb(){he.getLuminanceCoefficients(Bu);let i=Bu.x.toFixed(4),t=Bu.y.toFixed(4),e=Bu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tc).join(`
`)}function ib(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sb(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function tc(i){return i!==""}function d0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function f0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rb=/^[ \t]*#include +<([\w\d./]+)>/gm;function rp(i){return i.replace(rb,ob)}var ab=new Map;function ob(i,t){let e=oe[t];if(e===void 0){let n=ab.get(t);if(n!==void 0)e=oe[n],vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return rp(e)}var lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function p0(i){return i.replace(lb,cb)}function cb(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function m0(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var hb={[jr]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function ub(i){return hb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var db={[ti]:"ENVMAP_TYPE_CUBE",[Ni]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE_UV"};function fb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":db[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var pb={[Ni]:"ENVMAP_MODE_REFRACTION"};function mb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":pb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var gb={[ta]:"ENVMAP_BLENDING_MULTIPLY",[Sf]:"ENVMAP_BLENDING_MIX",[Mf]:"ENVMAP_BLENDING_ADD"};function _b(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":gb[i.combine]||"ENVMAP_BLENDING_NONE"}function xb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function vb(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ub(e),c=fb(e),h=mb(e),d=_b(e),u=xb(e),f=nb(e),p=ib(r),_=s.createProgram(),g,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(tc).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(tc).join(`
`),m.length>0&&(m+=`
`)):(g=[m0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tc).join(`
`),m=[m0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?oe.tonemapping_pars_fragment:"",e.toneMapping!==Tn?tb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,QM("linearToOutputTexel",e.outputColorSpace),eb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(tc).join(`
`)),a=rp(a),a=d0(a,e),a=f0(a,e),o=rp(o),o=d0(o,e),o=f0(o,e),a=p0(a),o=p0(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=y+g+a,x=y+m+o,A=c0(s,s.VERTEX_SHADER,M),b=c0(s,s.FRAGMENT_SHADER,x);s.attachShader(_,A),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(A)||"",L=s.getShaderInfoLog(b)||"",B=U.trim(),q=O.trim(),X=L.trim(),at=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,b);else{let et=u0(s,A,"vertex"),it=u0(s,b,"fragment");Vt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+et+`
`+it)}else B!==""?vt("WebGLProgram: Program Info Log:",B):(q===""||X==="")&&(Y=!1);Y&&(I.diagnostics={runnable:at,programLog:B,vertexShader:{log:q,prefix:g},fragmentShader:{log:X,prefix:m}})}s.deleteShader(A),s.deleteShader(b),v=new fa(s,_),T=sb(s,_)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,ZM)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=JM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=b,this}var yb=0,ap=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new op(t),e.set(t,n)),n}},op=class{constructor(t){this.id=yb++,this.code=t,this.usedTimes=0}};function Sb(i){return i===Ui||i===ca||i===ha}function Mb(i,t,e,n,s,r){let a=new bs,o=new ap,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,T,R,I,U,O){let L=I.fog,B=U.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,at=t.get(v.envMap||q,X),Y=at&&at.mapping===Os?at.image.height:null,et=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&vt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let it=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ut=it!==void 0?it.length:0,Ct=0;B.morphAttributes.position!==void 0&&(Ct=1),B.morphAttributes.normal!==void 0&&(Ct=2),B.morphAttributes.color!==void 0&&(Ct=3);let fe,ee,se,Z;if(et){let ne=ni[et];fe=ne.vertexShader,ee=ne.fragmentShader}else{fe=v.vertexShader,ee=v.fragmentShader;let ne=o.getVertexShaderStage(v),ge=o.getFragmentShaderStage(v);o.update(v,ne,ge),se=ne.id,Z=ge.id}let nt=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),Yt=U.isInstancedMesh===!0,pt=U.isBatchedMesh===!0,Xt=!!v.map,pe=!!v.matcap,tt=!!at,ot=!!v.aoMap,lt=!!v.lightMap,ht=!!v.bumpMap&&v.wireframe===!1,dt=!!v.normalMap,kt=!!v.displacementMap,Lt=!!v.emissiveMap,qt=!!v.metalnessMap,Kt=!!v.roughnessMap,N=v.anisotropy>0,me=v.clearcoat>0,ce=v.dispersion>0,C=v.retroreflectivity>0,S=v.iridescence>0,z=v.sheen>0,H=v.transmission>0,J=N&&!!v.anisotropyMap,ut=me&&!!v.clearcoatMap,ft=me&&!!v.clearcoatNormalMap,$=me&&!!v.clearcoatRoughnessMap,j=S&&!!v.iridescenceMap,_t=S&&!!v.iridescenceThicknessMap,Ft=z&&!!v.sheenColorMap,yt=z&&!!v.sheenRoughnessMap,xt=!!v.specularMap,Ot=!!v.specularColorMap,Ht=!!v.specularIntensityMap,$t=H&&!!v.transmissionMap,F=H&&!!v.thicknessMap,mt=!!v.gradientMap,K=!!v.alphaMap,gt=v.alphaTest>0,At=!!v.alphaHash,st=!!v.extensions,Bt=Tn;v.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Bt=i.toneMapping);let It={shaderID:et,shaderType:v.type,shaderName:v.name,vertexShader:fe,fragmentShader:ee,defines:v.defines,customVertexShaderID:se,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:pt,batchingColor:pt&&U._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&U.instanceColor!==null,instancingMorph:Yt&&U.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Xt,matcap:pe,envMap:tt,envMapMode:tt&&at.mapping,envMapCubeUVHeight:Y,aoMap:ot,lightMap:lt,bumpMap:ht,normalMap:dt,displacementMap:kt,emissiveMap:Lt,normalMapObjectSpace:dt&&v.normalMapType===Cf,normalMapTangentSpace:dt&&v.normalMapType===ci,packedNormalMap:dt&&v.normalMapType===ci&&Sb(v.normalMap.format),metalnessMap:qt,roughnessMap:Kt,anisotropy:N,anisotropyMap:J,clearcoat:me,clearcoatMap:ut,clearcoatNormalMap:ft,clearcoatRoughnessMap:$,dispersion:ce,retroreflection:C,iridescence:S,iridescenceMap:j,iridescenceThicknessMap:_t,sheen:z,sheenColorMap:Ft,sheenRoughnessMap:yt,specularMap:xt,specularColorMap:Ot,specularIntensityMap:Ht,transmission:H,transmissionMap:$t,thicknessMap:F,gradientMap:mt,opaque:v.transparent===!1&&v.blending===Fs&&v.alphaToCoverage===!1,alphaMap:K,alphaTest:gt,alphaHash:At,combine:v.combine,mapUv:Xt&&p(v.map.channel),aoMapUv:ot&&p(v.aoMap.channel),lightMapUv:lt&&p(v.lightMap.channel),bumpMapUv:ht&&p(v.bumpMap.channel),normalMapUv:dt&&p(v.normalMap.channel),displacementMapUv:kt&&p(v.displacementMap.channel),emissiveMapUv:Lt&&p(v.emissiveMap.channel),metalnessMapUv:qt&&p(v.metalnessMap.channel),roughnessMapUv:Kt&&p(v.roughnessMap.channel),anisotropyMapUv:J&&p(v.anisotropyMap.channel),clearcoatMapUv:ut&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ft&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:yt&&p(v.sheenRoughnessMap.channel),specularMapUv:xt&&p(v.specularMap.channel),specularColorMapUv:Ot&&p(v.specularColorMap.channel),specularIntensityMapUv:Ht&&p(v.specularIntensityMap.channel),transmissionMapUv:$t&&p(v.transmissionMap.channel),thicknessMapUv:F&&p(v.thicknessMap.channel),alphaMapUv:K&&p(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(dt||N),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(Xt||K),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&dt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Mt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:Ct,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Xt&&v.map.isVideoTexture===!0&&he.getTransfer(v.map.colorSpace)===ye,decodeVideoTextureEmissive:Lt&&v.emissiveMap.isVideoTexture===!0&&he.getTransfer(v.emissiveMap.colorSpace)===ye,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Qn,flipSided:v.side===cn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:st&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&v.extensions.multiDraw===!0||pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function g(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)T.push(R),T.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(m(T,v),y(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function m(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function y(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function M(v){let T=f[v.type],R;if(T){let I=ni[T];R=Vf.clone(I.uniforms)}else R=v.uniforms;return R}function x(v,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new vb(i,T,v,s),c.push(R),h.set(T,R)),R}function A(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:M,acquireProgram:x,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:E}}function bb(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ab(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function g0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _0(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,_,g,m){let y=i[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},i[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=p,y.materialVariant=a(u),y.groupOrder=_,y.renderOrder=u.renderOrder,y.z=g,y.group=m),t++,y}function l(u,f,p,_,g,m,y){y.reversedDepth===!0&&(g=-g);let M=o(u,f,p,_,g,m);p.transmission>0?n.push(M):p.transparent===!0?s.push(M):e.push(M)}function c(u,f,p,_,g,m){let y=o(u,f,p,_,g,m);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||Ab),n.length>1&&n.sort(f||g0),s.length>1&&s.sort(f||g0)}function d(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function wb(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new _0,i.set(n,[a])):s>=r.length?(a=new _0,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Tb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Et};break;case"SpotLight":e={position:new P,direction:new P,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Eb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Cb=0;function Rb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Pb(i){let t=new Tb,e=Eb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new Jt,a=new Jt;function o(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,y=0,M=0,x=0,A=0,b=0,E=0,v=0,T=0,R=0;c.sort(Rb);for(let U=0,O=c.length;U<O;U++){let L=c[U],B=L.color,q=L.intensity,X=L.distance,at=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ui?at=L.shadow.map.texture:at=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=B.r*q,d+=B.g*q,u+=B.b*q;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],q);R++}else if(L.isSunLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let et=L.shadow,it=e.get(L);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[p]=it,n.sunShadowMap[p]=at;let Ut=et.getViewportCount();for(let Ct=0;Ct<Ut;Ct++)n.sunShadowMatrix[_+Ct]=et.getMatrix(Ct),n.sunShadowCascade[_+Ct]=et._cascadeData[Ct];_+=Ut,p++}n.sun[f]=Y,f++}else if(L.isDirectionalLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let et=L.shadow,it=e.get(L);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,n.directionalShadow[g]=it,n.directionalShadowMap[g]=at,n.directionalShadowMatrix[g]=L.shadow.matrix,A++}n.directional[g]=Y,g++}else if(L.isSpotLight){let Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(B).multiplyScalar(q),Y.distance=X,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[y]=Y;let et=L.shadow;if(L.map&&(n.spotLightMap[v]=L.map,v++,et.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[y]=et.matrix,L.castShadow){let it=e.get(L);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,n.spotShadow[y]=it,n.spotShadowMap[y]=at,E++}y++}else if(L.isRectAreaLight){let Y=t.get(L);Y.color.copy(B).multiplyScalar(q),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[M]=Y,M++}else if(L.isPointLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let et=L.shadow,it=e.get(L);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,it.shadowCameraNear=et.camera.near,it.shadowCameraFar=et.camera.far,n.pointShadow[m]=it,n.pointShadowMap[m]=at,n.pointShadowMatrix[m]=L.shadow.matrix,b++}n.point[m]=Y,m++}else if(L.isHemisphereLight){let Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(q),Y.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[x]=Y,x++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.sunLength!==f||I.directionalLength!==g||I.pointLength!==m||I.spotLength!==y||I.rectAreaLength!==M||I.hemiLength!==x||I.numSunShadows!==p||I.numDirectionalShadows!==A||I.numPointShadows!==b||I.numSpotShadows!==E||I.numSpotMaps!==v||I.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=y,n.rectArea.length=M,n.point.length=m,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,I.sunLength=f,I.directionalLength=g,I.pointLength=m,I.spotLength=y,I.rectAreaLength=M,I.hemiLength=x,I.numSunShadows=p,I.numDirectionalShadows=A,I.numPointShadows=b,I.numSpotShadows=E,I.numSpotMaps=v,I.numLightProbes=R,n.version=Cb++)}function l(c,h){let d=0,u=0,f=0,p=0,_=0,g=0,m=h.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let x=c[y];if(x.isSunLight){let A=n.sun[d];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(m),d++}else if(x.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),u++}else if(x.isSpotLight){let A=n.spot[p];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let A=n.rectArea[_];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){let A=n.hemi[g];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function x0(i){let t=new Pb(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Ib(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new x0(i),t.set(s,[o])):r>=a.length?(o=new x0(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Db=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Ub=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],v0=new Jt,jl=new P,tp=new P;function Fb(i,t,e){let n=new ai,s=new rt,r=new rt,a=new Ae,o=new Wr,l=new Xr,c={},h=e.maxTextureSize,d={[Li]:cn,[cn]:Li,[Qn]:Qn},u=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Lb,fragmentShader:Nb}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new ie;p.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ne(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jr;let m=this.type;this.render=function(b,E,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===ef&&(vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=jr);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(jn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let O=m!==this.type;O&&E.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=b.length;L<B;L++){let q=b[L],X=q.shadow;if(X===void 0){vt("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let at=X.getFrameExtents();s.multiply(at),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,X.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||O===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Us){if(q.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new tn(s.x,s.y,{format:Ui,type:kn,minFilter:Ce,magFilter:Ce,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new Ri(s.x,s.y,on),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=Zn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Be,X.map.depthTexture.magFilter=Be}else q.isPointLight?(X.map=new nc(s.x),X.map.depthTexture=new fo(s.x,Ln)):(X.map=new tn(s.x,s.y),X.map.depthTexture=new Ri(s.x,s.y,Ln)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=Zn,this.type===jr?(X.map.depthTexture.compareFunction=Y?$l:Jl,X.map.depthTexture.minFilter=Ce,X.map.depthTexture.magFilter=Ce):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Be,X.map.depthTexture.magFilter=Be);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let et=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,v);for(let it=0;it<et;it++){let Ut=X.getCamera(it);if(q.isPointLight){let Ct=X.camera,fe=X.matrix,ee=q.distance||Ct.far;ee!==Ct.far&&(Ct.far=ee,Ct.updateProjectionMatrix()),jl.setFromMatrixPosition(q.matrixWorld),Ct.position.copy(jl),tp.copy(Ct.position),tp.add(Db[it]),Ct.up.copy(Ub[it]),Ct.lookAt(tp),Ct.updateMatrixWorld(),fe.makeTranslation(-jl.x,-jl.y,-jl.z),v0.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),X._frustum.setFromProjectionMatrix(v0,Ct.coordinateSystem,Ct.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,it),i.clear();else{it===0&&(i.setRenderTarget(X.map),i.clear());let Ct=X.getViewport(it);a.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),U.viewport(a)}n=X.getFrustum(it),x(E,v,Ut,q,this.type)}X.isPointLightShadow!==!0&&this.type===Us&&y(X,v),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,R,I)};function y(b,E){let v=t.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new tn(s.x,s.y,{format:Ui,type:kn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,v,u,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,v,f,_,null)}function M(b,E,v,T){let R=null,I=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)R=I;else if(R=v.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let U=R.uuid,O=E.uuid,L=c[U];L===void 0&&(L={},c[U]=L);let B=L[O];B===void 0&&(B=R.clone(),L[O]=B,E.addEventListener("dispose",A)),R=B}if(R.visible=E.visible,R.wireframe=E.wireframe,T===Us?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:d[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=i.properties.get(R);U.light=v}return R}function x(b,E,v,T,R){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===Us)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let O=t.update(b),L=b.material;if(Array.isArray(L)){let B=O.groups;for(let q=0,X=B.length;q<X;q++){let at=B[q],Y=L[at.materialIndex];if(Y&&Y.visible){let et=M(b,Y,T,R);b.onBeforeShadow(i,b,E,v,O,et,at),i.renderBufferDirect(v,null,O,et,b,at),b.onAfterShadow(i,b,E,v,O,et,at)}}}else if(L.visible){let B=M(b,L,T,R);b.onBeforeShadow(i,b,E,v,O,B,null),i.renderBufferDirect(v,null,O,B,b,null),b.onAfterShadow(i,b,E,v,O,B,null)}}let U=b.children;for(let O=0,L=U.length;O<L;O++)x(U[O],E,v,T,R)}function A(b){b.target.removeEventListener("dispose",A);for(let v in c){let T=c[v],R=b.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Ob(i,t){function e(){let F=!1,mt=new Ae,K=null,gt=new Ae(0,0,0,0);return{setMask:function(At){K!==At&&!F&&(i.colorMask(At,At,At,At),K=At)},setLocked:function(At){F=At},setClear:function(At,st,Bt,It,ne){ne===!0&&(At*=It,st*=It,Bt*=It),mt.set(At,st,Bt,It),gt.equals(mt)===!1&&(i.clearColor(At,st,Bt,It),gt.copy(mt))},reset:function(){F=!1,K=null,gt.set(-1,0,0,0)}}}function n(){let F=!1,mt=!1,K=null,gt=null,At=null;return{setReversed:function(st){if(mt!==st){let Bt=t.get("EXT_clip_control");st?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),mt=st;let It=At;At=null,this.setClear(It)}},getReversed:function(){return mt},setTest:function(st){st?nt(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(st){K!==st&&!F&&(i.depthMask(st),K=st)},setFunc:function(st){if(mt&&(st=kg[st]),gt!==st){switch(st){case Xa:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case Ja:i.depthFunc(i.GEQUAL);break;case $a:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=st}},setLocked:function(st){F=st},setClear:function(st){At!==st&&(At=st,mt&&(st=1-st),i.clearDepth(st))},reset:function(){F=!1,K=null,gt=null,At=null,mt=!1}}}function s(){let F=!1,mt=null,K=null,gt=null,At=null,st=null,Bt=null,It=null,ne=null;return{setTest:function(ge){F||(ge?nt(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(ge){mt!==ge&&!F&&(i.stencilMask(ge),mt=ge)},setFunc:function(ge,un,Ue){(K!==ge||gt!==un||At!==Ue)&&(i.stencilFunc(ge,un,Ue),K=ge,gt=un,At=Ue)},setOp:function(ge,un,Ue){(st!==ge||Bt!==un||It!==Ue)&&(i.stencilOp(ge,un,Ue),st=ge,Bt=un,It=Ue)},setLocked:function(ge){F=ge},setClear:function(ge){ne!==ge&&(i.clearStencil(ge),ne=ge)},reset:function(){F=!1,mt=null,K=null,gt=null,At=null,st=null,Bt=null,It=null,ne=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,y=null,M=null,x=null,A=null,b=null,E=null,v=new Et(0,0,0),T=0,R=!1,I=null,U=null,O=null,L=null,B=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,at=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=at>=1):Y.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=at>=2);let et=null,it={},Ut=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),fe=new Ae().fromArray(Ut),ee=new Ae().fromArray(Ct);function se(F,mt,K,gt){let At=new Uint8Array(4),st=i.createTexture();i.bindTexture(F,st),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<K;Bt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(mt+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return st}let Z={};Z[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),a.setFunc(vs),ht(!1),dt(pu),nt(i.CULL_FACE),ot(jn);function nt(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Mt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Yt(F,mt){return u[F]!==mt?(i.bindFramebuffer(F,mt),u[F]=mt,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=mt),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function pt(F,mt){let K=p,gt=!1;if(F){K=f.get(mt),K===void 0&&(K=[],f.set(mt,K));let At=F.textures;if(K.length!==At.length||K[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Bt=At.length;st<Bt;st++)K[st]=i.COLOR_ATTACHMENT0+st;K.length=At.length,gt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,gt=!0);gt&&i.drawBuffers(K)}function Xt(F){return _!==F?(i.useProgram(F),_=F,!0):!1}let pe={[is]:i.FUNC_ADD,[sf]:i.FUNC_SUBTRACT,[rf]:i.FUNC_REVERSE_SUBTRACT};pe[af]=i.MIN,pe[of]=i.MAX;let tt={[lf]:i.ZERO,[cf]:i.ONE,[hf]:i.SRC_COLOR,[xu]:i.SRC_ALPHA,[gf]:i.SRC_ALPHA_SATURATE,[pf]:i.DST_COLOR,[df]:i.DST_ALPHA,[uf]:i.ONE_MINUS_SRC_COLOR,[vu]:i.ONE_MINUS_SRC_ALPHA,[mf]:i.ONE_MINUS_DST_COLOR,[ff]:i.ONE_MINUS_DST_ALPHA,[_f]:i.CONSTANT_COLOR,[xf]:i.ONE_MINUS_CONSTANT_COLOR,[vf]:i.CONSTANT_ALPHA,[yf]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(F,mt,K,gt,At,st,Bt,It,ne,ge){if(F===jn){g===!0&&(Mt(i.BLEND),g=!1);return}if(g===!1&&(nt(i.BLEND),g=!0),F!==nf){if(F!==m||ge!==R){if((y!==is||A!==is)&&(i.blendEquation(i.FUNC_ADD),y=is,A=is),ge)switch(F){case Fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mu:i.blendFunc(i.ONE,i.ONE);break;case gu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _u:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Vt("WebGLState: Invalid blending: ",F);break}else switch(F){case Fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gu:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _u:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",F);break}M=null,x=null,b=null,E=null,v.set(0,0,0),T=0,m=F,R=ge}return}At=At||mt,st=st||K,Bt=Bt||gt,(mt!==y||At!==A)&&(i.blendEquationSeparate(pe[mt],pe[At]),y=mt,A=At),(K!==M||gt!==x||st!==b||Bt!==E)&&(i.blendFuncSeparate(tt[K],tt[gt],tt[st],tt[Bt]),M=K,x=gt,b=st,E=Bt),(It.equals(v)===!1||ne!==T)&&(i.blendColor(It.r,It.g,It.b,ne),v.copy(It),T=ne),m=F,R=!1}function lt(F,mt){F.side===Qn?Mt(i.CULL_FACE):nt(i.CULL_FACE);let K=F.side===cn;mt&&(K=!K),ht(K),F.blending===Fs&&F.transparent===!1?ot(jn):ot(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let gt=F.stencilWrite;o.setTest(gt),gt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Lt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(F){I!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),I=F)}function dt(F){F!==jd?(nt(i.CULL_FACE),F!==U&&(F===pu?i.cullFace(i.BACK):F===tf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),U=F}function kt(F){F!==O&&(X&&i.lineWidth(F),O=F)}function Lt(F,mt,K){F?(nt(i.POLYGON_OFFSET_FILL),(L!==mt||B!==K)&&(L=mt,B=K,a.getReversed()&&(mt=-mt),i.polygonOffset(mt,K))):Mt(i.POLYGON_OFFSET_FILL)}function qt(F){F?nt(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function Kt(F){F===void 0&&(F=i.TEXTURE0+q-1),et!==F&&(i.activeTexture(F),et=F)}function N(F,mt,K){K===void 0&&(et===null?K=i.TEXTURE0+q-1:K=et);let gt=it[K];gt===void 0&&(gt={type:void 0,texture:void 0},it[K]=gt),(gt.type!==F||gt.texture!==mt)&&(et!==K&&(i.activeTexture(K),et=K),i.bindTexture(F,mt||Z[F]),gt.type=F,gt.texture=mt)}function me(){let F=it[et];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ce(){try{i.compressedTexImage2D(...arguments)}catch(F){Vt("WebGLState:",F)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(F){Vt("WebGLState:",F)}}function S(){try{i.texSubImage2D(...arguments)}catch(F){Vt("WebGLState:",F)}}function z(){try{i.texSubImage3D(...arguments)}catch(F){Vt("WebGLState:",F)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Vt("WebGLState:",F)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Vt("WebGLState:",F)}}function ut(){try{i.texStorage2D(...arguments)}catch(F){Vt("WebGLState:",F)}}function ft(){try{i.texStorage3D(...arguments)}catch(F){Vt("WebGLState:",F)}}function $(){try{i.texImage2D(...arguments)}catch(F){Vt("WebGLState:",F)}}function j(){try{i.texImage3D(...arguments)}catch(F){Vt("WebGLState:",F)}}function _t(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function Ft(F,mt){d[F]!==mt&&(i.pixelStorei(F,mt),d[F]=mt)}function yt(F){fe.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),fe.copy(F))}function xt(F){ee.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),ee.copy(F))}function Ot(F,mt){let K=c.get(mt);K===void 0&&(K=new WeakMap,c.set(mt,K));let gt=K.get(F);gt===void 0&&(gt=i.getUniformBlockIndex(mt,F.name),K.set(F,gt))}function Ht(F,mt){let gt=c.get(mt).get(F);l.get(mt)!==gt&&(i.uniformBlockBinding(mt,gt,F.__bindingPointIndex),l.set(mt,gt))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},et=null,it={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,y=null,M=null,x=null,A=null,b=null,E=null,v=new Et(0,0,0),T=0,R=!1,I=null,U=null,O=null,L=null,B=null,fe.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:Mt,bindFramebuffer:Yt,drawBuffers:pt,useProgram:Xt,setBlending:ot,setMaterial:lt,setFlipSided:ht,setCullFace:dt,setLineWidth:kt,setPolygonOffset:Lt,setScissorTest:qt,activeTexture:Kt,bindTexture:N,unbindTexture:me,compressedTexImage2D:ce,compressedTexImage3D:C,texImage2D:$,texImage3D:j,pixelStorei:Ft,getParameter:_t,updateUBOMapping:Ot,uniformBlockBinding:Ht,texStorage2D:ut,texStorage3D:ft,texSubImage2D:S,texSubImage3D:z,compressedTexSubImage2D:H,compressedTexSubImage3D:J,scissor:yt,viewport:xt,reset:$t}}function Bb(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return p?new OffscreenCanvas(C,S):br("canvas")}function g(C,S,z){let H=1,J=ce(C);if((J.width>z||J.height>z)&&(H=z/Math.max(J.width,J.height)),H<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ut=Math.floor(H*J.width),ft=Math.floor(H*J.height);u===void 0&&(u=_(ut,ft));let $=S?_(ut,ft):u;return $.width=ut,$.height=ft,$.getContext("2d").drawImage(C,0,0,ut,ft),vt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ut+"x"+ft+")."),$}else return"data"in C&&vt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function y(C){i.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(C,S,z,H,J,ut=!1){if(C!==null){if(i[C]!==void 0)return i[C];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ft;H&&(ft=t.get("EXT_texture_norm16"),ft||vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=S;if(S===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8),z===i.UNSIGNED_SHORT&&ft&&($=ft.R16_EXT),z===i.SHORT&&ft&&($=ft.R16_SNORM_EXT)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),S===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8),z===i.UNSIGNED_SHORT&&ft&&($=ft.RG16_EXT),z===i.SHORT&&ft&&($=ft.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),S===i.RGB&&(z===i.UNSIGNED_SHORT&&ft&&($=ft.RGB16_EXT),z===i.SHORT&&ft&&($=ft.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),S===i.RGBA){let j=ut?Mr:he.getTransfer(J);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=j===ye?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ft&&($=ft.RGBA16_EXT),z===i.SHORT&&ft&&($=ft.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function A(C,S){let z;return C?S===null||S===Ln||S===Vs?z=i.DEPTH24_STENCIL8:S===on?z=i.DEPTH32F_STENCIL8:S===zs&&(z=i.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ln||S===Vs?z=i.DEPTH_COMPONENT24:S===on?z=i.DEPTH_COMPONENT32F:S===zs&&(z=i.DEPTH_COMPONENT16),z}function b(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Be&&C.minFilter!==Ce?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function E(C){let S=C.target;S.removeEventListener("dispose",E),T(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&d.delete(S)}function v(C){let S=C.target;S.removeEventListener("dispose",v),I(S)}function T(C){let S=n.get(C);if(S.__webglInit===void 0)return;let z=C.source,H=f.get(z);if(H){let J=H[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(C),Object.keys(H).length===0&&f.delete(z)}n.remove(C)}function R(C){let S=n.get(C);i.deleteTexture(S.__webglTexture);let z=C.source,H=f.get(z);delete H[S.__cacheKey],a.memory.textures--}function I(C){let S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(S.__webglFramebuffer[H]))for(let J=0;J<S.__webglFramebuffer[H].length;J++)i.deleteFramebuffer(S.__webglFramebuffer[H][J]);else i.deleteFramebuffer(S.__webglFramebuffer[H]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[H])}else{if(Array.isArray(S.__webglFramebuffer))for(let H=0;H<S.__webglFramebuffer.length;H++)i.deleteFramebuffer(S.__webglFramebuffer[H]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let H=0;H<S.__webglColorRenderbuffer.length;H++)S.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[H]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let z=C.textures;for(let H=0,J=z.length;H<J;H++){let ut=n.get(z[H]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(z[H])}n.remove(C)}let U=0;function O(){U=0}function L(){return U}function B(C){U=C}function q(){let C=U;return C>=s.maxTextures&&vt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,C}function X(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function at(C,S){let z=n.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let H=C.image;if(H===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(z,C,S);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}function Y(C,S){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Mt(z,C,S);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)}function et(C,S){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Mt(z,C,S);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)}function it(C,S){let z=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){Yt(z,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)}let Ut={[_r]:i.REPEAT,[mn]:i.CLAMP_TO_EDGE,[xr]:i.MIRRORED_REPEAT},Ct={[Be]:i.NEAREST,[Eu]:i.NEAREST_MIPMAP_NEAREST,[Bs]:i.NEAREST_MIPMAP_LINEAR,[Ce]:i.LINEAR,[ia]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},fe={[Pf]:i.NEVER,[Uf]:i.ALWAYS,[If]:i.LESS,[Jl]:i.LEQUAL,[Lf]:i.EQUAL,[$l]:i.GEQUAL,[Nf]:i.GREATER,[Df]:i.NOTEQUAL};function ee(C,S){if(S.type===on&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ce||S.magFilter===ia||S.magFilter===Bs||S.magFilter===ei||S.minFilter===Ce||S.minFilter===ia||S.minFilter===Bs||S.minFilter===ei)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Ut[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Ut[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Ut[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Ct[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Ct[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,fe[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Be||S.minFilter!==Bs&&S.minFilter!==ei||S.type===on&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function se(C,S){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",E));let H=S.source,J=f.get(H);J===void 0&&(J={},f.set(H,J));let ut=X(S);if(ut!==C.__cacheKey){J[ut]===void 0&&(J[ut]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[ut].usedTimes++;let ft=J[C.__cacheKey];ft!==void 0&&(J[C.__cacheKey].usedTimes--,ft.usedTimes===0&&R(S)),C.__cacheKey=ut,C.__webglTexture=J[ut].texture}return z}function Z(C,S,z){return Math.floor(Math.floor(C/z)/S)}function nt(C,S,z,H){let ut=C.updateRanges;if(ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,z,H,S.data);else{ut.sort((Ft,yt)=>Ft.start-yt.start);let ft=0;for(let Ft=1;Ft<ut.length;Ft++){let yt=ut[ft],xt=ut[Ft],Ot=yt.start+yt.count,Ht=Z(xt.start,S.width,4),$t=Z(yt.start,S.width,4);xt.start<=Ot+1&&Ht===$t&&Z(xt.start+xt.count-1,S.width,4)===Ht?yt.count=Math.max(yt.count,xt.start+xt.count-yt.start):(++ft,ut[ft]=xt)}ut.length=ft+1;let $=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),_t=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Ft=0,yt=ut.length;Ft<yt;Ft++){let xt=ut[Ft],Ot=Math.floor(xt.start/4),Ht=Math.ceil(xt.count/4),$t=Ot%S.width,F=Math.floor(Ot/S.width),mt=Ht,K=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,$t,F,mt,K,z,H,S.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,_t)}}function Mt(C,S,z){let H=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(H=i.TEXTURE_3D);let J=se(C,S),ut=S.source;e.bindTexture(H,C.__webglTexture,i.TEXTURE0+z);let ft=n.get(ut);if(ut.version!==ft.__version||J===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let K=he.getPrimaries(he.workingColorSpace),gt=S.colorSpace===hi?null:he.getPrimaries(S.colorSpace),At=S.colorSpace===hi||K===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let j=g(S.image,!1,s.maxTextureSize);j=me(S,j);let _t=r.convert(S.format,S.colorSpace),Ft=r.convert(S.type),yt=x(S.internalFormat,_t,Ft,S.normalized,S.colorSpace,S.isVideoTexture);ee(H,S);let xt,Ot=S.mipmaps,Ht=S.isVideoTexture!==!0,$t=ft.__version===void 0||J===!0,F=ut.dataReady,mt=b(S,j);if(S.isDepthTexture)yt=A(S.format===Di,S.type),$t&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,yt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,yt,j.width,j.height,0,_t,Ft,null));else if(S.isDataTexture)if(Ot.length>0){Ht&&$t&&e.texStorage2D(i.TEXTURE_2D,mt,yt,Ot[0].width,Ot[0].height);for(let K=0,gt=Ot.length;K<gt;K++)xt=Ot[K],Ht?F&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,xt.width,xt.height,_t,Ft,xt.data):e.texImage2D(i.TEXTURE_2D,K,yt,xt.width,xt.height,0,_t,Ft,xt.data);S.generateMipmaps=!1}else Ht?($t&&e.texStorage2D(i.TEXTURE_2D,mt,yt,j.width,j.height),F&&nt(S,j,_t,Ft)):e.texImage2D(i.TEXTURE_2D,0,yt,j.width,j.height,0,_t,Ft,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ht&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,yt,Ot[0].width,Ot[0].height,j.depth);for(let K=0,gt=Ot.length;K<gt;K++)if(xt=Ot[K],S.format!==ln)if(_t!==null)if(Ht){if(F)if(S.layerUpdates.size>0){let At=Fu(xt.width,xt.height,S.format,S.type);for(let st of S.layerUpdates){let Bt=xt.data.subarray(st*At/xt.data.BYTES_PER_ELEMENT,(st+1)*At/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,st,xt.width,xt.height,1,_t,Bt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,xt.width,xt.height,j.depth,_t,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,yt,xt.width,xt.height,j.depth,0,xt.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,xt.width,xt.height,j.depth,_t,Ft,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,yt,xt.width,xt.height,j.depth,0,_t,Ft,xt.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Ht&&$t&&e.texStorage2D(i.TEXTURE_2D,mt,yt,Ot[0].width,Ot[0].height);for(let K=0,gt=Ot.length;K<gt;K++)xt=Ot[K],S.format!==ln?_t!==null?Ht?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,xt.width,xt.height,_t,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,yt,xt.width,xt.height,0,xt.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?F&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,xt.width,xt.height,_t,Ft,xt.data):e.texImage2D(i.TEXTURE_2D,K,yt,xt.width,xt.height,0,_t,Ft,xt.data)}else if(S.isDataArrayTexture)if(Ht){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,yt,j.width,j.height,j.depth),F)if(S.layerUpdates.size>0){let K=Fu(j.width,j.height,S.format,S.type);for(let gt of S.layerUpdates){let At=j.data.subarray(gt*K/j.data.BYTES_PER_ELEMENT,(gt+1)*K/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,j.width,j.height,1,_t,Ft,At)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,_t,Ft,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,j.width,j.height,j.depth,0,_t,Ft,j.data);else if(S.isData3DTexture)Ht?($t&&e.texStorage3D(i.TEXTURE_3D,mt,yt,j.width,j.height,j.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,_t,Ft,j.data)):e.texImage3D(i.TEXTURE_3D,0,yt,j.width,j.height,j.depth,0,_t,Ft,j.data);else if(S.isFramebufferTexture){if($t)if(Ht)e.texStorage2D(i.TEXTURE_2D,mt,yt,j.width,j.height);else{let K=j.width,gt=j.height;for(let At=0;At<mt;At++)e.texImage2D(i.TEXTURE_2D,At,yt,K,gt,0,_t,Ft,null),K>>=1,gt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),j.parentNode!==K){K.appendChild(j),d.add(S),K.onpaint=gt=>{let At=gt.changedElements;for(let st of d)At.includes(st.image)&&(st.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let At=i.RGBA,st=i.RGBA,Bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,At,st,Bt,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Ht&&$t){let K=ce(Ot[0]);e.texStorage2D(i.TEXTURE_2D,mt,yt,K.width,K.height)}for(let K=0,gt=Ot.length;K<gt;K++)xt=Ot[K],Ht?F&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,_t,Ft,xt):e.texImage2D(i.TEXTURE_2D,K,yt,_t,Ft,xt);S.generateMipmaps=!1}else if(Ht){if($t){let K=ce(j);e.texStorage2D(i.TEXTURE_2D,mt,yt,K.width,K.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Ft,j)}else e.texImage2D(i.TEXTURE_2D,0,yt,_t,Ft,j);m(S)&&y(H),ft.__version=ut.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Yt(C,S,z){if(S.image.length!==6)return;let H=se(C,S),J=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);let ut=n.get(J);if(J.version!==ut.__version||H===!0){e.activeTexture(i.TEXTURE0+z);let ft=he.getPrimaries(he.workingColorSpace),$=S.colorSpace===hi?null:he.getPrimaries(S.colorSpace),j=S.colorSpace===hi||ft===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let _t=S.isCompressedTexture||S.image[0].isCompressedTexture,Ft=S.image[0]&&S.image[0].isDataTexture,yt=[];for(let st=0;st<6;st++)!_t&&!Ft?yt[st]=g(S.image[st],!0,s.maxCubemapSize):yt[st]=Ft?S.image[st].image:S.image[st],yt[st]=me(S,yt[st]);let xt=yt[0],Ot=r.convert(S.format,S.colorSpace),Ht=r.convert(S.type),$t=x(S.internalFormat,Ot,Ht,S.normalized,S.colorSpace),F=S.isVideoTexture!==!0,mt=ut.__version===void 0||H===!0,K=J.dataReady,gt=b(S,xt);ee(i.TEXTURE_CUBE_MAP,S);let At;if(_t){F&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,$t,xt.width,xt.height);for(let st=0;st<6;st++){At=yt[st].mipmaps;for(let Bt=0;Bt<At.length;Bt++){let It=At[Bt];S.format!==ln?Ot!==null?F?K&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Bt,0,0,It.width,It.height,Ot,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Bt,$t,It.width,It.height,0,It.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Bt,0,0,It.width,It.height,Ot,Ht,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Bt,$t,It.width,It.height,0,Ot,Ht,It.data)}}}else{if(At=S.mipmaps,F&&mt){At.length>0&&gt++;let st=ce(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,$t,st.width,st.height)}for(let st=0;st<6;st++)if(Ft){F?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,yt[st].width,yt[st].height,Ot,Ht,yt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,$t,yt[st].width,yt[st].height,0,Ot,Ht,yt[st].data);for(let Bt=0;Bt<At.length;Bt++){let ne=At[Bt].image[st].image;F?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Bt+1,0,0,ne.width,ne.height,Ot,Ht,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Bt+1,$t,ne.width,ne.height,0,Ot,Ht,ne.data)}}else{F?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ot,Ht,yt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,$t,Ot,Ht,yt[st]);for(let Bt=0;Bt<At.length;Bt++){let It=At[Bt];F?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Bt+1,0,0,Ot,Ht,It.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Bt+1,$t,Ot,Ht,It.image[st])}}}m(S)&&y(i.TEXTURE_CUBE_MAP),ut.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function pt(C,S,z,H,J,ut){let ft=r.convert(z.format,z.colorSpace),$=r.convert(z.type),j=x(z.internalFormat,ft,$,z.normalized,z.colorSpace),_t=n.get(S),Ft=n.get(z);if(Ft.__renderTarget=S,!_t.__hasExternalTextures){let yt=Math.max(1,S.width>>ut),xt=Math.max(1,S.height>>ut);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,ut,j,yt,xt,S.depth,0,ft,$,null):e.texImage2D(J,ut,j,yt,xt,0,ft,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Kt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,J,Ft.__webglTexture,0,qt(S)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,J,Ft.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(C,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){let H=S.depthTexture,J=H&&H.isDepthTexture?H.type:null,ut=A(S.stencilBuffer,J),ft=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Kt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(S),ut,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(S),ut,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ut,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,C)}else{let H=S.textures;for(let J=0;J<H.length;J++){let ut=H[J],ft=r.convert(ut.format,ut.colorSpace),$=r.convert(ut.type),j=x(ut.internalFormat,ft,$,ut.normalized,ut.colorSpace);Kt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(S),j,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(S),j,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,j,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(C,S,z){let H=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(S.depthTexture);if(J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H){if(J.__webglInit===void 0&&(J.__webglInit=!0,S.depthTexture.addEventListener("dispose",E)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ee(i.TEXTURE_CUBE_MAP,S.depthTexture);let _t=r.convert(S.depthTexture.format),Ft=r.convert(S.depthTexture.type),yt;S.depthTexture.format===Zn?yt=i.DEPTH_COMPONENT24:S.depthTexture.format===Di&&(yt=i.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,yt,S.width,S.height,0,_t,Ft,null)}}else at(S.depthTexture,0);let ut=J.__webglTexture,ft=qt(S),$=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,j=S.depthTexture.format===Di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Zn)Kt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,ut,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,j,$,ut,0);else if(S.depthTexture.format===Di)Kt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,ut,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,j,$,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(C){let S=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let H=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),H){let J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,H.removeEventListener("dispose",J)};H.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=H}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(z)for(let H=0;H<6;H++)pe(S.__webglFramebuffer[H],C,H);else{let H=C.texture.mipmaps;H&&H.length>0?pe(S.__webglFramebuffer[0],C,0):pe(S.__webglFramebuffer,C,0)}else if(z){S.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[H]),S.__webglDepthbuffer[H]===void 0)S.__webglDepthbuffer[H]=i.createRenderbuffer(),Xt(S.__webglDepthbuffer[H],C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ut)}}else{let H=C.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Xt(S.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ut)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(C,S,z){let H=n.get(C);S!==void 0&&pt(H.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&tt(C)}function lt(C){let S=C.texture,z=n.get(C),H=n.get(S);C.addEventListener("dispose",v);let J=C.textures,ut=C.isWebGLCubeRenderTarget===!0,ft=J.length>1;if(ft||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=S.version,a.memory.textures++),ut){z.__webglFramebuffer=[];for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[$]=[];for(let j=0;j<S.mipmaps.length;j++)z.__webglFramebuffer[$][j]=i.createFramebuffer()}else z.__webglFramebuffer[$]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let $=0;$<S.mipmaps.length;$++)z.__webglFramebuffer[$]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ft)for(let $=0,j=J.length;$<j;$++){let _t=n.get(J[$]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Kt(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let $=0;$<J.length;$++){let j=J[$];z.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[$]);let _t=r.convert(j.format,j.colorSpace),Ft=r.convert(j.type),yt=x(j.internalFormat,_t,Ft,j.normalized,j.colorSpace,C.isXRRenderTarget===!0),xt=qt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,yt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,z.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Xt(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),ee(i.TEXTURE_CUBE_MAP,S);for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)pt(z.__webglFramebuffer[$][j],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else pt(z.__webglFramebuffer[$],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(S)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let $=0,j=J.length;$<j;$++){let _t=J[$],Ft=n.get(_t),yt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(yt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,Ft.__webglTexture),ee(yt,_t),pt(z.__webglFramebuffer,C,_t,i.COLOR_ATTACHMENT0+$,yt,0),m(_t)&&y(yt)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&($=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,H.__webglTexture),ee($,S),S.mipmaps&&S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)pt(z.__webglFramebuffer[j],C,S,i.COLOR_ATTACHMENT0,$,j);else pt(z.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,$,0);m(S)&&y($),e.unbindTexture()}C.depthBuffer&&tt(C)}function ht(C){let S=C.textures;for(let z=0,H=S.length;z<H;z++){let J=S[z];if(m(J)){let ut=M(C),ft=n.get(J).__webglTexture;e.bindTexture(ut,ft),y(ut),e.unbindTexture()}}}let dt=[],kt=[];function Lt(C){if(C.samples>0){if(Kt(C)===!1){let S=C.textures,z=C.width,H=C.height,J=i.COLOR_BUFFER_BIT,ut=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(C),$=S.length>1;if($)for(let _t=0;_t<S.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let j=C.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let _t=0;_t<S.length;_t++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[_t]);let Ft=n.get(S[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,z,H,0,0,z,H,J,i.NEAREST),l===!0&&(dt.length=0,kt.length=0,dt.push(i.COLOR_ATTACHMENT0+_t),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(dt.push(ut),kt.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,kt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let _t=0;_t<S.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,ft.__webglColorRenderbuffer[_t]);let Ft=n.get(S[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function qt(C){return Math.min(s.maxSamples,C.samples)}function Kt(C){let S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function N(C){let S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function me(C,S){let z=C.colorSpace,H=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Sr&&z!==hi&&(he.getTransfer(z)===ye?(H!==ln||J!==vn)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",z)),S}function ce(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=O,this.getTextureUnits=L,this.setTextureUnits=B,this.setTexture2D=at,this.setTexture2DArray=Y,this.setTexture3D=et,this.setTextureCube=it,this.rebindTextures=ot,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function T0(i,t){function e(n,s=hi){let r,a=he.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Iu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cu)return i.BYTE;if(n===Ru)return i.SHORT;if(n===zs)return i.UNSIGNED_SHORT;if(n===dl)return i.INT;if(n===Ln)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===kn)return i.HALF_FLOAT;if(n===Lu)return i.ALPHA;if(n===Nu)return i.RGB;if(n===ln)return i.RGBA;if(n===Zn)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===ml)return i.RED;if(n===sa)return i.RED_INTEGER;if(n===Ui)return i.RG;if(n===gl)return i.RG_INTEGER;if(n===_l)return i.RGBA_INTEGER;if(n===ra||n===aa||n===oa||n===la)if(a===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xl||n===vl||n===yl||n===Sl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ml||n===bl||n===Al||n===wl||n===Tl||n===ca||n===El)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ml||n===bl)return a===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Al)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===wl)return r.COMPRESSED_R11_EAC;if(n===Tl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ca)return r.COMPRESSED_RG11_EAC;if(n===El)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Cl||n===Rl||n===Pl||n===Il||n===Ll||n===Nl||n===Dl||n===Ul||n===Fl||n===Ol||n===Bl||n===zl||n===Vl||n===kl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ll)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ul)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ol)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gl||n===Hl||n===Wl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Gl)return a===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xl||n===ql||n===ha||n===Yl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var zb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,lp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ir(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new _n({vertexShader:zb,fragmentShader:Vb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new Ps(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cp=class extends An{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,_=typeof XRWebGLBinding<"u",g=new lp,m={},y=e.getContextAttributes(),M=null,x=null,A=[],b=[],E=new rt,v=null,T=null,R=new Oe;R.viewport=new Ae;let I=new Oe;I.viewport=new Ae;let U=[R,I],O=new rl,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let nt=A[Z];return nt===void 0&&(nt=new As,A[Z]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Z){let nt=A[Z];return nt===void 0&&(nt=new As,A[Z]=nt),nt.getGripSpace()},this.getHand=function(Z){let nt=A[Z];return nt===void 0&&(nt=new As,A[Z]=nt),nt.getHandSpace()};function q(Z){let nt=b.indexOf(Z.inputSource);if(nt===-1)return;let Mt=A[nt];Mt!==void 0&&(Mt.update(Z.inputSource,Z.frame,c||a),Mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",at);for(let Z=0;Z<A.length;Z++){let nt=b[Z];nt!==null&&(b[Z]=null,A[Z].disconnect(nt))}L=null,B=null,g.reset();for(let Z in m)delete m[Z];if(t.setRenderTarget(M),f=null,u=null,d=null,s=null,x=null,se.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(E.width,E.height,!1),T!==null){let Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",X),s.addEventListener("inputsourceschange",at),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Yt=null,pt=null;y.depth&&(pt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=y.stencil?Di:Zn,Yt=y.stencil?Vs:Ln);let Xt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new tn(u.textureWidth,u.textureHeight,{format:ln,type:vn,depthTexture:new Ri(u.textureWidth,u.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new tn(f.framebufferWidth,f.framebufferHeight,{format:ln,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function at(Z){for(let nt=0;nt<Z.removed.length;nt++){let Mt=Z.removed[nt],Yt=b.indexOf(Mt);Yt>=0&&(b[Yt]=null,A[Yt].disconnect(Mt))}for(let nt=0;nt<Z.added.length;nt++){let Mt=Z.added[nt],Yt=b.indexOf(Mt);if(Yt===-1){for(let Xt=0;Xt<A.length;Xt++)if(Xt>=b.length){b.push(Mt),Yt=Xt;break}else if(b[Xt]===null){b[Xt]=Mt,Yt=Xt;break}if(Yt===-1)break}let pt=A[Yt];pt&&pt.connect(Mt)}}let Y=new P,et=new P;function it(Z,nt,Mt){Y.setFromMatrixPosition(nt.matrixWorld),et.setFromMatrixPosition(Mt.matrixWorld);let Yt=Y.distanceTo(et),pt=nt.projectionMatrix.elements,Xt=Mt.projectionMatrix.elements,pe=pt[14]/(pt[10]-1),tt=pt[14]/(pt[10]+1),ot=(pt[9]+1)/pt[5],lt=(pt[9]-1)/pt[5],ht=(pt[8]-1)/pt[0],dt=(Xt[8]+1)/Xt[0],kt=pe*ht,Lt=pe*dt,qt=Yt/(-ht+dt),Kt=qt*-ht;if(nt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Kt),Z.translateZ(qt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),pt[10]===-1)Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let N=pe+qt,me=tt+qt,ce=kt-Kt,C=Lt+(Yt-Kt),S=ot*tt/me*N,z=lt*tt/me*N;Z.projectionMatrix.makePerspective(ce,C,S,z,N,me),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Ut(Z,nt){nt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(nt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let nt=Z.near,Mt=Z.far;g.texture!==null&&(g.depthNear>0&&(nt=g.depthNear),g.depthFar>0&&(Mt=g.depthFar)),O.near=I.near=R.near=nt,O.far=I.far=R.far=Mt,(L!==O.near||B!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,B=O.far),O.layers.mask=Z.layers.mask|6,R.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;let Yt=Z.parent,pt=O.cameras;Ut(O,Yt);for(let Xt=0;Xt<pt.length;Xt++)Ut(pt[Xt],Yt);pt.length===2?it(O,R,I):O.projectionMatrix.copy(R.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),Ct(Z,O,Yt)};function Ct(Z,nt,Mt){Mt===null?Z.matrix.copy(nt.matrixWorld):(Z.matrix.copy(Mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(nt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ys*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(Z){return m[Z]};let fe=null;function ee(Z,nt){if(h=nt.getViewerPose(c||a),p=nt,h!==null){let Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Yt=!1;Mt.length!==O.cameras.length&&(O.cameras.length=0,Yt=!0);for(let tt=0;tt<Mt.length;tt++){let ot=Mt[tt],lt=null;if(f!==null)lt=f.getViewport(ot);else{let dt=d.getViewSubImage(u,ot);lt=dt.viewport,tt===0&&(t.setRenderTargetTextures(x,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(x))}let ht=U[tt];ht===void 0&&(ht=new Oe,ht.layers.enable(tt),ht.viewport=new Ae,U[tt]=ht),ht.matrix.fromArray(ot.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(ot.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(lt.x,lt.y,lt.width,lt.height),tt===0&&(O.matrix.copy(ht.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Yt===!0&&O.cameras.push(ht)}let pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let tt=d.getDepthInformation(Mt[0]);tt&&tt.isValid&&tt.texture&&g.init(tt,s.renderState)}if(pt&&pt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let tt=0;tt<Mt.length;tt++){let ot=Mt[tt].camera;if(ot){let lt=m[ot];lt||(lt=new Ir,m[ot]=lt);let ht=d.getCameraImage(ot);lt.sourceTexture=ht}}}}for(let Mt=0;Mt<A.length;Mt++){let Yt=b[Mt],pt=A[Mt];Yt!==null&&pt!==void 0&&pt.update(Yt,nt,c||a)}fe&&fe(Z,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),p=null}let se=new y0;se.setAnimationLoop(ee),this.setAnimationLoop=function(Z){fe=Z},this.dispose=function(){}}},kb=new Jt,E0=new jt;E0.set(-1,0,0,0,1,0,0,0,1);function Gb(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,zf(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,M,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===cn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===cn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=t.get(m),M=y.envMap,x=y.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(kb.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(E0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=M*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hb(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,A){let b=A.program;n.uniformBlockBinding(x,b)}function c(x,A){let b=s[x.id];b===void 0&&(g(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",y));let E=A.program;n.updateUBOMapping(x,E);let v=t.render.frame;r[x.id]!==v&&(u(x),r[x.id]=v)}function h(x){let A=d();x.__bindingPointIndex=A;let b=i.createBuffer(),E=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,E,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,b),b}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let A=s[x.id],b=x.uniforms,E=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let v=0,T=b.length;v<T;v++){let R=b[v];if(Array.isArray(R))for(let I=0,U=R.length;I<U;I++)f(R[I],v,I,E);else f(R,v,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,A,b,E){if(_(x,A,b,E)===!0){let v=x.__offset,T=x.value;if(Array.isArray(T)){let R=0;for(let I=0;I<T.length;I++){let U=T[I],O=m(U);p(U,x.__data,R),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function p(x,A,b){typeof x=="number"||typeof x=="boolean"?A[0]=x:x.isMatrix3?(A[0]=x.elements[0],A[1]=x.elements[1],A[2]=x.elements[2],A[3]=0,A[4]=x.elements[3],A[5]=x.elements[4],A[6]=x.elements[5],A[7]=0,A[8]=x.elements[6],A[9]=x.elements[7],A[10]=x.elements[8],A[11]=0):ArrayBuffer.isView(x)?A.set(new x.constructor(x.buffer,x.byteOffset,A.length)):x.toArray(A,b)}function _(x,A,b,E){let v=x.value,T=A+"_"+b;if(E[T]===void 0)return typeof v=="number"||typeof v=="boolean"?E[T]=v:ArrayBuffer.isView(v)?E[T]=v.slice():E[T]=v.clone(),!0;{let R=E[T];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return E[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function g(x){let A=x.uniforms,b=0,E=16;for(let T=0,R=A.length;T<R;T++){let I=Array.isArray(A[T])?A[T]:[A[T]];for(let U=0,O=I.length;U<O;U++){let L=I[U],B=Array.isArray(L.value)?L.value:[L.value];for(let q=0,X=B.length;q<X;q++){let at=B[q],Y=m(at),et=b%E,it=et%Y.boundary,Ut=et+it;b+=it,Ut!==0&&E-Ut<Y.storage&&(b+=E-Ut),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=Y.storage}}}let v=b%E;return v>0&&(b+=E-v),x.__size=b,x.__cache={},this}function m(x){let A={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(A.boundary=4,A.storage=4):x.isVector2?(A.boundary=8,A.storage=8):x.isVector3||x.isColor?(A.boundary=16,A.storage=12):x.isVector4?(A.boundary=16,A.storage=16):x.isMatrix3?(A.boundary=48,A.storage=48):x.isMatrix4?(A.boundary=64,A.storage=64):x.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(A.boundary=16,A.storage=x.byteLength):vt("WebGLRenderer: Unsupported uniform value type.",x),A}function y(x){let A=x.target;A.removeEventListener("dispose",y);let b=a.indexOf(A.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function M(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:M}}var Wb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ui=null;function Xb(){return ui===null&&(ui=new gn(Wb,16,16,Ui,kn),ui.name="DFG_LUT",ui.minFilter=Ce,ui.magFilter=Ce,ui.wrapS=mn,ui.wrapT=mn,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}var ic=class{constructor(t={}){let{canvas:e=Ff(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=vn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let _=f,g=new Set([_l,gl,sa]),m=new Set([vn,Ln,zs,Vs,fl,pl]),y=new Uint32Array(4),M=new Int32Array(4),x=new P,A=null,b=null,E=[],v=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,U=null,O=null,L=null,B=null;this._outputColorSpace=je;let q=0,X=0,at=null,Y=-1,et=null,it=new Ae,Ut=new Ae,Ct=null,fe=new Et(0),ee=0,se=e.width,Z=e.height,nt=1,Mt=null,Yt=null,pt=new Ae(0,0,se,Z),Xt=new Ae(0,0,se,Z),pe=!1,tt=new ai,ot=!1,lt=!1,ht=new Jt,dt=new P,kt=new Ae,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function Kt(){return at===null?nt:1}let N=n;function me(w,D){return e.getContext(w,D)}let ce,C,S,z,H,J,ut,ft,$,j,_t,Ft,yt,xt,Ot,Ht,$t,F,mt,K,gt,At,st;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ne,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",un,!1),N===null){let D="webgl2";if(N=me(D,w),N===null)throw me(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(w){throw e.removeEventListener("webglcontextlost",ne,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",un,!1),Vt("WebGLRenderer: "+w.message),w}function Bt(){ce=new jS(N),ce.init(),gt=new T0(N,ce),C=new HS(N,ce,t,gt),S=new Ob(N,ce),C.reversedDepthBuffer&&u&&S.buffers.depth.setReversed(!0),O=N.createFramebuffer(),L=N.createFramebuffer(),B=N.createFramebuffer(),z=new nM(N),H=new bb,J=new Bb(N,ce,S,H,C,gt,z),ut=new QS(R),ft=new sv(N),At=new kS(N,ft),$=new tM(N,ft,z,At),j=new sM(N,$,ft,At,z),F=new iM(N,C,J),Ot=new WS(H),_t=new Mb(R,ut,ce,C,At,Ot),Ft=new Gb(R,H),yt=new wb,xt=new Ib(ce),$t=new VS(R,ut,S,j,p,l),Ht=new Fb(R,j,C),st=new Hb(N,z,C,S),mt=new GS(N,ce,z),K=new eM(N,ce,z),z.programs=_t.programs,R.capabilities=C,R.extensions=ce,R.properties=H,R.renderLists=yt,R.shadowMap=Ht,R.state=S,R.info=z}_!==vn&&(T=new aM(_,e.width,e.height,o,s,r));let It=new cp(R,N);this.xr=It,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let w=ce.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ce.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(w){w!==void 0&&(nt=w,this.setSize(se,Z,!1))},this.getSize=function(w){return w.set(se,Z)},this.setSize=function(w,D,W=!0){if(It.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}se=w,Z=D,e.width=Math.floor(w*nt),e.height=Math.floor(D*nt),W===!0&&(e.style.width=w+"px",e.style.height=D+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(se*nt,Z*nt).floor()},this.setDrawingBufferSize=function(w,D,W){se=w,Z=D,nt=W,e.width=Math.floor(w*W),e.height=Math.floor(D*W),this.setViewport(0,0,w,D)},this.setEffects=function(w){if(_===vn){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let D=0;D<w.length;D++)if(w[D].isOutputPass===!0){vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(it)},this.getViewport=function(w){return w.copy(pt)},this.setViewport=function(w,D,W,k){w.isVector4?pt.set(w.x,w.y,w.z,w.w):pt.set(w,D,W,k),S.viewport(it.copy(pt).multiplyScalar(nt).round())},this.getScissor=function(w){return w.copy(Xt)},this.setScissor=function(w,D,W,k){w.isVector4?Xt.set(w.x,w.y,w.z,w.w):Xt.set(w,D,W,k),S.scissor(Ut.copy(Xt).multiplyScalar(nt).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(w){S.setScissorTest(pe=w)},this.setOpaqueSort=function(w){Mt=w},this.setTransparentSort=function(w){Yt=w},this.getClearColor=function(w){return w.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(w=!0,D=!0,W=!0){let k=0;if(w){let G=!1;if(at!==null){let bt=at.texture.format;G=g.has(bt)}if(G){let bt=at.texture.type,St=m.has(bt),Tt=$t.getClearColor(),Nt=$t.getClearAlpha(),Gt=Tt.r,le=Tt.g,ue=Tt.b;St?(y[0]=Gt,y[1]=le,y[2]=ue,y[3]=Nt,N.clearBufferuiv(N.COLOR,0,y)):(M[0]=Gt,M[1]=le,M[2]=ue,M[3]=Nt,N.clearBufferiv(N.COLOR,0,M))}else k|=N.COLOR_BUFFER_BIT}D&&(k|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),U=w},this.dispose=function(){e.removeEventListener("webglcontextlost",ne,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",un,!1),$t.dispose(),yt.dispose(),xt.dispose(),H.dispose(),ut.dispose(),j.dispose(),At.dispose(),st.dispose(),_t.dispose(),It.dispose(),It.removeEventListener("sessionstart",pc),It.removeEventListener("sessionend",ba),pi.stop()};function ne(w){w.preventDefault(),Ar("WebGLRenderer: Context Lost."),I=!0}function ge(){Ar("WebGLRenderer: Context Restored."),I=!1;let w=z.autoReset,D=Ht.enabled,W=Ht.autoUpdate,k=Ht.needsUpdate,G=Ht.type;Bt(),z.autoReset=w,Ht.enabled=D,Ht.autoUpdate=W,Ht.needsUpdate=k,Ht.type=G}function un(w){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ue(w){let D=w.target;D.removeEventListener("dispose",Ue),td(D)}function td(w){ed(w),H.remove(w)}function ed(w){let D=H.get(w).programs;D!==void 0&&(D.forEach(function(W){_t.releaseProgram(W)}),w.isShaderMaterial&&_t.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,W,k,G,bt){D===null&&(D=Lt);let St=G.isMesh&&G.matrixWorld.determinantAffine()<0,Tt=mi(w,D,W,k,G);S.setMaterial(k,St);let Nt=W.index,Gt=1;if(k.wireframe===!0){if(Nt=$.getWireframeAttribute(W),Nt===void 0)return;Gt=2}let le=W.drawRange,ue=W.attributes.position,Dt=le.start*Gt,Se=(le.start+le.count)*Gt;bt!==null&&(Dt=Math.max(Dt,bt.start*Gt),Se=Math.min(Se,(bt.start+bt.count)*Gt)),Nt!==null?(Dt=Math.max(Dt,0),Se=Math.min(Se,Nt.count)):ue!=null&&(Dt=Math.max(Dt,0),Se=Math.min(Se,ue.count));let He=Se-Dt;if(He<0||He===1/0)return;At.setup(G,k,Tt,W,Nt);let Re,Te=mt;if(Nt!==null&&(Re=ft.get(Nt),Te=K,Te.setIndex(Re)),G.isMesh)k.wireframe===!0?(S.setLineWidth(k.wireframeLinewidth*Kt()),Te.setMode(N.LINES)):Te.setMode(N.TRIANGLES);else if(G.isLine){let nn=k.linewidth;nn===void 0&&(nn=1),S.setLineWidth(nn*Kt()),G.isLineSegments?Te.setMode(N.LINES):G.isLineLoop?Te.setMode(N.LINE_LOOP):Te.setMode(N.LINE_STRIP)}else G.isPoints?Te.setMode(N.POINTS):G.isSprite&&Te.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))Te.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let nn=G._multiDrawStarts,Pt=G._multiDrawCounts,dn=G._multiDrawCount,_e=Nt?ft.get(Nt).bytesPerElement:1,Dn=H.get(k).currentProgram.getUniforms();for(let ii=0;ii<dn;ii++)Dn.setValue(N,"_gl_DrawID",ii),Te.render(nn[ii]/_e,Pt[ii])}else if(G.isInstancedMesh)Te.renderInstances(Dt,He,G.count);else if(W.isInstancedBufferGeometry){let nn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Pt=Math.min(W.instanceCount,nn);Te.renderInstances(Dt,He,Pt)}else Te.render(Dt,He)};function fc(w,D,W,k){U!==null&&w.isNodeMaterial&&U.setObject(k,w),ot===!0&&Ot.setState(w,W,!1),w.transparent===!0&&w.side===Qn&&w.forceSinglePass===!1?(w.side=cn,w.needsUpdate=!0,de(w,D,k),w.side=Li,w.needsUpdate=!0,de(w,D,k),w.side=Qn):de(w,D,k)}this.compile=function(w,D,W=null){W===null&&(W=w),U!==null&&U.renderStart(w,D,W),b=xt.get(W),b.init(D),v.push(b),W.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),w!==W&&w.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),lt=this.localClippingEnabled,ot=Ot.init(this.clippingPlanes,lt),ot===!0&&Ot.setGlobalState(this.clippingPlanes,D),U!==null&&Ht.render(b.state.shadowsArray,W,D);let k=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let bt=G.material;if(bt)if(Array.isArray(bt))for(let St=0;St<bt.length;St++){let Tt=bt[St];fc(Tt,W,D,G),k.add(Tt)}else fc(bt,W,D,G),k.add(bt)}),b=v.pop(),U!==null&&U.renderEnd(),k},this.compileAsync=function(w,D,W=null){let k=this.compile(w,D,W);return new Promise(G=>{function bt(){if(k.forEach(function(St){let Nt=H.get(St).currentProgram;(Nt===void 0||Nt.isReady())&&k.delete(St)}),k.size===0){G(w);return}setTimeout(bt,10)}ce.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let qs=null;function nd(w){qs&&qs(w)}function pc(){pi.stop()}function ba(){pi.start()}let pi=new y0;pi.setAnimationLoop(nd),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(w){qs=w,It.setAnimationLoop(w),w===null?pi.stop():pi.start()},It.addEventListener("sessionstart",pc),It.addEventListener("sessionend",ba),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(w,D);let W=It.enabled===!0&&It.isPresenting===!0,k=T!==null&&(at===null||W)&&T.begin(R,at);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(D),D=It.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,D,at),b=xt.get(w,v.length),b.init(D),b.state.textureUnits=J.getTextureUnits(),v.push(b),ht.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),tt.setFromProjectionMatrix(ht,bn,D.reversedDepth),lt=this.localClippingEnabled,ot=Ot.init(this.clippingPlanes,lt),A=yt.get(w,E.length),A.init(),E.push(A),It.enabled===!0&&It.isPresenting===!0){let St=R.xr.getDepthSensingMesh();St!==null&&Aa(St,D,-1/0,R.sortObjects)}Aa(w,D,0,R.sortObjects),A.finish(),U!==null&&U.updateLights(b.state.lightsArray),R.sortObjects===!0&&A.sort(Mt,Yt),qt=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,qt&&$t.addToRenderList(A,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&Ot.beginShadows();let G=b.state.shadowsArray;if(Ht.render(G,w,D),ot===!0&&Ot.endShadows(),(k&&T.hasRenderPass())===!1){let St=A.opaque,Tt=A.transmissive;if(b.setupLights(),D.isArrayCamera){let Nt=D.cameras;if(Tt.length>0)for(let Gt=0,le=Nt.length;Gt<le;Gt++){let ue=Nt[Gt];zt(St,Tt,w,ue)}qt&&$t.render(w);for(let Gt=0,le=Nt.length;Gt<le;Gt++){let ue=Nt[Gt];ct(A,w,ue,ue.viewport)}}else Tt.length>0&&zt(St,Tt,w,D),qt&&$t.render(w),ct(A,w,D)}at!==null&&X===0&&(J.updateMultisampleRenderTarget(at),J.updateRenderTargetMipmap(at)),k&&T.end(R),w.isScene===!0&&w.onAfterRender(R,w,D),At.resetDefaultState(),Y=-1,et=null,v.pop(),v.length>0?(b=v[v.length-1],J.setTextureUnits(b.state.textureUnits),ot===!0&&Ot.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?A=E[E.length-1]:A=null,U!==null&&U.renderEnd()};function Aa(w,D,W,k){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLightProbeGrid)b.pushLightProbeGrid(w);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(tt)){k&&kt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ht);let St=j.update(w),Tt=w.material;Tt.visible&&A.push(w,St,Tt,W,kt.z,null,D)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(tt))){let St=j.update(w),Tt=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),kt.copy(w.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),kt.copy(St.boundingSphere.center)),kt.applyMatrix4(w.matrixWorld).applyMatrix4(ht)),Array.isArray(Tt)){let Nt=St.groups;for(let Gt=0,le=Nt.length;Gt<le;Gt++){let ue=Nt[Gt],Dt=Tt[ue.materialIndex];Dt&&Dt.visible&&A.push(w,St,Dt,W,kt.z,ue,D)}}else Tt.visible&&A.push(w,St,Tt,W,kt.z,null,D)}}let bt=w.children;for(let St=0,Tt=bt.length;St<Tt;St++)Aa(bt[St],D,W,k)}function ct(w,D,W,k){let{opaque:G,transmissive:bt,transparent:St}=w;b.setupLightsView(W),ot===!0&&Ot.setGlobalState(R.clippingPlanes,W),k&&S.viewport(it.copy(k)),G.length>0&&Wt(G,D,W),bt.length>0&&Wt(bt,D,W),St.length>0&&Wt(St,D,W),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function zt(w,D,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[k.id]===void 0){let Dt=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[k.id]=new tn(1,1,{generateMipmaps:!0,type:Dt?kn:vn,minFilter:ei,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let bt=b.state.transmissionRenderTarget[k.id],St=k.viewport||it;bt.setSize(St.z*R.transmissionResolutionScale,St.w*R.transmissionResolutionScale);let Tt=R.getRenderTarget(),Nt=R.getActiveCubeFace(),Gt=R.getActiveMipmapLevel();R.setRenderTarget(bt),R.getClearColor(fe),ee=R.getClearAlpha(),ee<1&&R.setClearColor(16777215,.5),R.clear(),qt&&$t.render(W);let le=R.toneMapping;R.toneMapping=Tn;let ue=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),b.setupLightsView(k),ot===!0&&Ot.setGlobalState(R.clippingPlanes,k),Wt(w,W,k),J.updateMultisampleRenderTarget(bt),J.updateRenderTargetMipmap(bt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let Se=0,He=D.length;Se<He;Se++){let Re=D[Se],{object:Te,geometry:nn,material:Pt,group:dn}=Re;if(Pt.side===Qn&&Te.layers.test(k.layers)){let _e=Pt.side;Pt.side=cn,Pt.needsUpdate=!0,Qt(Te,W,k,nn,Pt,dn),Pt.side=_e,Pt.needsUpdate=!0,Dt=!0}}Dt===!0&&(J.updateMultisampleRenderTarget(bt),J.updateRenderTargetMipmap(bt))}R.setRenderTarget(Tt,Nt,Gt),R.setClearColor(fe,ee),ue!==void 0&&(k.viewport=ue),R.toneMapping=le}function Wt(w,D,W){let k=D.isScene===!0?D.overrideMaterial:null;for(let G=0,bt=w.length;G<bt;G++){let St=w[G],{object:Tt,geometry:Nt,group:Gt}=St,le=St.material;le.allowOverride===!0&&k!==null&&(le=k),Tt.layers.test(W.layers)&&Qt(Tt,D,W,Nt,le,Gt)}}function Qt(w,D,W,k,G,bt){U!==null&&G.isNodeMaterial&&U.setObject(w,G),w.onBeforeRender(R,D,W,k,G,bt),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(R,D,W,k,w,bt),G.transparent===!0&&G.side===Qn&&G.forceSinglePass===!1?(G.side=cn,G.needsUpdate=!0,R.renderBufferDirect(W,D,k,G,w,bt),G.side=Li,G.needsUpdate=!0,R.renderBufferDirect(W,D,k,G,w,bt),G.side=Qn):R.renderBufferDirect(W,D,k,G,w,bt),w.onAfterRender(R,D,W,k,G,bt)}function de(w,D,W){D.isScene!==!0&&(D=Lt);let k=H.get(w),G=b.state.lights,bt=b.state.shadowsArray,St=G.state.version,Tt=_t.getParameters(w,G.state,bt,D,W,b.state.lightProbeGridArray),Nt=_t.getProgramCacheKey(Tt),Gt=k.programs;k.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?D.environment:null,k.fog=D.fog;let le=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;k.envMap=ut.get(w.envMap||k.environment,le),k.envMapRotation=k.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,Gt===void 0&&(w.addEventListener("dispose",Ue),Gt=new Map,k.programs=Gt);let ue=Gt.get(Nt);if(ue!==void 0){if(k.currentProgram===ue&&k.lightsStateVersion===St)return Pe(w,Tt),ue}else Tt.uniforms=_t.getUniforms(w),U!==null&&w.isNodeMaterial&&U.build(w,W,Tt),w.onBeforeCompile(Tt,R),ue=_t.acquireProgram(Tt,Nt),Gt.set(Nt,ue),k.uniforms=Tt.uniforms;let Dt=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Dt.clippingPlanes=Ot.uniform),Pe(w,Tt),k.needsLights=rs(w),k.lightsStateVersion=St,k.needsLights&&(Dt.ambientLightColor.value=G.state.ambient,Dt.lightProbe.value=G.state.probe,Dt.sunLights.value=G.state.sun,Dt.sunLightShadows.value=G.state.sunShadow,Dt.directionalLights.value=G.state.directional,Dt.directionalLightShadows.value=G.state.directionalShadow,Dt.spotLights.value=G.state.spot,Dt.spotLightShadows.value=G.state.spotShadow,Dt.rectAreaLights.value=G.state.rectArea,Dt.ltc_1.value=G.state.rectAreaLTC1,Dt.ltc_2.value=G.state.rectAreaLTC2,Dt.pointLights.value=G.state.point,Dt.pointLightShadows.value=G.state.pointShadow,Dt.hemisphereLights.value=G.state.hemi,Dt.sunShadowMatrix.value=G.state.sunShadowMatrix,Dt.sunShadowCascade.value=G.state.sunShadowCascade,Dt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Dt.spotLightMatrix.value=G.state.spotLightMatrix,Dt.spotLightMap.value=G.state.spotLightMap,Dt.pointShadowMatrix.value=G.state.pointShadowMatrix),k.lightProbeGrid=b.state.lightProbeGridArray.length>0,k.currentProgram=ue,k.uniformsList=null,ue}function re(w){if(w.uniformsList===null){let D=w.currentProgram.getUniforms();w.uniformsList=fa.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function Pe(w,D){let W=H.get(w);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function Nn(w,D){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;x.setFromMatrixPosition(D.matrixWorld);for(let W=0,k=w.length;W<k;W++){let G=w[W];if(G.texture!==null&&G.boundingBox.containsPoint(x))return G}return null}function mi(w,D,W,k,G){D.isScene!==!0&&(D=Lt),J.resetTextureUnits();let bt=D.fog,St=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?D.environment:null,Tt=at===null?R.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:he.workingColorSpace,Nt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Gt=ut.get(k.envMap||St,Nt),le=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ue=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Dt=!!W.morphAttributes.position,Se=!!W.morphAttributes.normal,He=!!W.morphAttributes.color,Re=Tn;k.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Re=R.toneMapping);let Te=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,nn=Te!==void 0?Te.length:0,Pt=H.get(k),dn=b.state.lights;if(ot===!0&&(lt===!0||w!==et)){let Ee=w===et&&k.id===Y;Ot.setState(k,w,Ee)}let _e=!1;k.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==dn.state.version||Pt.outputColorSpace!==Tt||G.isBatchedMesh&&Pt.batching===!1||!G.isBatchedMesh&&Pt.batching===!0||G.isBatchedMesh&&Pt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Pt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Pt.instancing===!1||!G.isInstancedMesh&&Pt.instancing===!0||G.isSkinnedMesh&&Pt.skinning===!1||!G.isSkinnedMesh&&Pt.skinning===!0||G.isInstancedMesh&&Pt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Pt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Pt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Pt.instancingMorph===!1&&G.morphTexture!==null||Pt.envMap!==Gt||k.fog===!0&&Pt.fog!==bt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==Ot.numPlanes||Pt.numIntersection!==Ot.numIntersection)||Pt.vertexAlphas!==le||Pt.vertexTangents!==ue||Pt.morphTargets!==Dt||Pt.morphNormals!==Se||Pt.morphColors!==He||Pt.toneMapping!==Re||Pt.morphTargetsCount!==nn||!!Pt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(_e=!0):(_e=!0,Pt.__version=k.version);let Dn=Pt.currentProgram;_e===!0&&(Dn=de(k,D,G),U&&k.isNodeMaterial&&U.onUpdateProgram(k,Dn,Pt));let ii=!1,Fi=!1,Ys=!1,we=Dn.getUniforms(),Ve=Pt.uniforms;if(S.useProgram(Dn.program)&&(ii=!0,Fi=!0,Ys=!0),k.id!==Y&&(Y=k.id,Fi=!0),Pt.needsLights){let Ee=Nn(b.state.lightProbeGridArray,G);Pt.lightProbeGrid!==Ee&&(Pt.lightProbeGrid=Ee,Fi=!0)}if(ii||et!==w){S.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),we.setValue(N,"projectionMatrix",w.projectionMatrix),we.setValue(N,"viewMatrix",w.matrixWorldInverse);let Bi=we.map.cameraPosition;Bi!==void 0&&Bi.setValue(N,dt.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&we.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&we.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),et!==w&&(et=w,Fi=!0,Ys=!0)}if(Pt.needsLights&&(dn.state.sunShadowMap.length>0&&we.setValue(N,"sunShadowMap",dn.state.sunShadowMap,J),dn.state.directionalShadowMap.length>0&&we.setValue(N,"directionalShadowMap",dn.state.directionalShadowMap,J),dn.state.spotShadowMap.length>0&&we.setValue(N,"spotShadowMap",dn.state.spotShadowMap,J),dn.state.pointShadowMap.length>0&&we.setValue(N,"pointShadowMap",dn.state.pointShadowMap,J)),G.isSkinnedMesh){we.setOptional(N,G,"bindMatrix"),we.setOptional(N,G,"bindMatrixInverse");let Ee=G.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),we.setValue(N,"boneTexture",Ee.boneTexture,J))}G.isBatchedMesh&&(we.setOptional(N,G,"batchingTexture"),we.setValue(N,"batchingTexture",G._matricesTexture,J),we.setOptional(N,G,"batchingIdTexture"),we.setValue(N,"batchingIdTexture",G._indirectTexture,J),we.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&we.setValue(N,"batchingColorTexture",G._colorsTexture,J));let Oi=W.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&F.update(G,W,Dn),(Fi||Pt.receiveShadow!==G.receiveShadow)&&(Pt.receiveShadow=G.receiveShadow,we.setValue(N,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&D.environment!==null&&(Ve.envMapIntensity.value=D.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=Xb()),Fi){if(we.setValue(N,"toneMappingExposure",R.toneMappingExposure),Pt.needsLights&&gi(Ve,Ys),bt&&k.fog===!0&&Ft.refreshFogUniforms(Ve,bt),Ft.refreshMaterialUniforms(Ve,k,nt,Z,b.state.transmissionRenderTarget[w.id]),Pt.needsLights&&Pt.lightProbeGrid){let Ee=Pt.lightProbeGrid;Ve.probesSH.value=Ee.texture,Ve.probesMin.value.copy(Ee.boundingBox.min),Ve.probesMax.value.copy(Ee.boundingBox.max),Ve.probesResolution.value.copy(Ee.resolution)}fa.upload(N,re(Pt),Ve,J)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(fa.upload(N,re(Pt),Ve,J),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&we.setValue(N,"center",G.center),we.setValue(N,"modelViewMatrix",G.modelViewMatrix),we.setValue(N,"normalMatrix",G.normalMatrix),we.setValue(N,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){let Ee=k.uniformsGroups;for(let Bi=0,Zs=Ee.length;Bi<Zs;Bi++){let Pp=Ee[Bi];st.update(Pp,Dn),st.bind(Pp,Dn)}}return Dn}function gi(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.sunLights.needsUpdate=D,w.sunLightShadows.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function rs(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(w,D,W){let k=H.get(w);k.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),H.get(w.texture).__webglTexture=D,H.get(w.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,D){let W=H.get(w);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,W=0){at=w,q=D,X=W;let k=null,G=!1,bt=!1;if(w){let Tt=H.get(w);if(Tt.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(N.FRAMEBUFFER,Tt.__webglFramebuffer),it.copy(w.viewport),Ut.copy(w.scissor),Ct=w.scissorTest,S.viewport(it),S.scissor(Ut),S.setScissorTest(Ct),Y=-1;return}else if(Tt.__webglFramebuffer===void 0)J.setupRenderTarget(w);else if(Tt.__hasExternalTextures)J.rebindTextures(w,H.get(w.texture).__webglTexture,H.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let le=w.depthTexture;if(Tt.__boundDepthTexture!==le){if(le!==null&&H.has(le)&&(w.width!==le.image.width||w.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(w)}}let Nt=w.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(bt=!0);let Gt=H.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Gt[D])?k=Gt[D][W]:k=Gt[D],G=!0):w.samples>0&&J.useMultisampledRTT(w)===!1?k=H.get(w).__webglMultisampledFramebuffer:Array.isArray(Gt)?k=Gt[W]:k=Gt,it.copy(w.viewport),Ut.copy(w.scissor),Ct=w.scissorTest}else it.copy(pt).multiplyScalar(nt).floor(),Ut.copy(Xt).multiplyScalar(nt).floor(),Ct=pe;if(W!==0&&(k=O),S.bindFramebuffer(N.FRAMEBUFFER,k)&&S.drawBuffers(w,k),S.viewport(it),S.scissor(Ut),S.setScissorTest(Ct),G){let Tt=H.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,Tt.__webglTexture,W)}else if(bt){let Tt=D;for(let Nt=0;Nt<w.textures.length;Nt++){let Gt=H.get(w.textures[Nt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Nt,Gt.__webglTexture,W,Tt)}}else if(w!==null&&W!==0){let Tt=H.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Tt.__webglTexture,W)}Y=-1};function _i(w){let D=H.get(w);return(D.__readFormat!==w.format||D.__readType!==w.type)&&(D.__readFormat=w.format,D.__readType=w.type,D.__formatReadable=C.textureFormatReadable(w.format),D.__typeReadable=C.textureTypeReadable(w.type)),D}this.readRenderTargetPixels=function(w,D,W,k,G,bt,St,Tt=0){if(!(w&&w.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&St!==void 0&&(Nt=Nt[St]),Nt){S.bindFramebuffer(N.FRAMEBUFFER,Nt);try{let Gt=w.textures[Tt],le=Gt.format,ue=Gt.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Tt);let Dt=_i(Gt);if(Dt.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-k&&W>=0&&W<=w.height-G&&N.readPixels(D,W,k,G,gt.convert(le),gt.convert(ue),bt)}finally{let Gt=at!==null?H.get(at).__webglFramebuffer:null;S.bindFramebuffer(N.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(w,D,W,k,G,bt,St,Tt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&St!==void 0&&(Nt=Nt[St]),Nt)if(D>=0&&D<=w.width-k&&W>=0&&W<=w.height-G){S.bindFramebuffer(N.FRAMEBUFFER,Nt);let Gt=w.textures[Tt],le=Gt.format,ue=Gt.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Tt);let Dt=_i(Gt);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Se=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Se),N.bufferData(N.PIXEL_PACK_BUFFER,bt.byteLength,N.STREAM_READ),N.readPixels(D,W,k,G,gt.convert(le),gt.convert(ue),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let He=at!==null?H.get(at).__webglFramebuffer:null;S.bindFramebuffer(N.FRAMEBUFFER,He);let Re=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Vg(N,Re,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Se),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,bt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Se),N.deleteSync(Re),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,D=null,W=0){let k=Math.pow(2,-W),G=Math.floor(w.image.width*k),bt=Math.floor(w.image.height*k),St=D!==null?D.x:0,Tt=D!==null?D.y:0;J.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,St,Tt,G,bt),S.unbindTexture()},this.copyTextureToTexture=function(w,D,W=null,k=null,G=0,bt=0){let St,Tt,Nt,Gt,le,ue,Dt,Se,He,Re=w.isCompressedTexture?w.mipmaps[bt]:w.image;if(W!==null)St=W.max.x-W.min.x,Tt=W.max.y-W.min.y,Nt=W.isBox3?W.max.z-W.min.z:1,Gt=W.min.x,le=W.min.y,ue=W.isBox3?W.min.z:0;else{let Ve=Math.pow(2,-G);St=Math.floor(Re.width*Ve),Tt=Math.floor(Re.height*Ve),w.isDataArrayTexture?Nt=Re.depth:w.isData3DTexture?Nt=Math.floor(Re.depth*Ve):Nt=1,Gt=0,le=0,ue=0}k!==null?(Dt=k.x,Se=k.y,He=k.z):(Dt=0,Se=0,He=0);let Te=gt.convert(D.format),nn=gt.convert(D.type),Pt;D.isData3DTexture?(J.setTexture3D(D,0),Pt=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(J.setTexture2DArray(D,0),Pt=N.TEXTURE_2D_ARRAY):(J.setTexture2D(D,0),Pt=N.TEXTURE_2D),S.activeTexture(N.TEXTURE0),S.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),S.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),S.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let dn=S.getParameter(N.UNPACK_ROW_LENGTH),_e=S.getParameter(N.UNPACK_IMAGE_HEIGHT),Dn=S.getParameter(N.UNPACK_SKIP_PIXELS),ii=S.getParameter(N.UNPACK_SKIP_ROWS),Fi=S.getParameter(N.UNPACK_SKIP_IMAGES);S.pixelStorei(N.UNPACK_ROW_LENGTH,Re.width),S.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Re.height),S.pixelStorei(N.UNPACK_SKIP_PIXELS,Gt),S.pixelStorei(N.UNPACK_SKIP_ROWS,le),S.pixelStorei(N.UNPACK_SKIP_IMAGES,ue);let Ys=w.isDataArrayTexture||w.isData3DTexture,we=D.isDataArrayTexture||D.isData3DTexture;if(w.isDepthTexture){let Ve=H.get(w),Oi=H.get(D),Ee=H.get(Ve.__renderTarget),Bi=H.get(Oi.__renderTarget);S.bindFramebuffer(N.READ_FRAMEBUFFER,Ee.__webglFramebuffer),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Zs=0;Zs<Nt;Zs++)Ys&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,H.get(w).__webglTexture,G,ue+Zs),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,H.get(D).__webglTexture,bt,He+Zs)),N.blitFramebuffer(Gt,le,St,Tt,Dt,Se,St,Tt,N.DEPTH_BUFFER_BIT,N.NEAREST);S.bindFramebuffer(N.READ_FRAMEBUFFER,null),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||H.has(w)){let Ve=H.get(w),Oi=H.get(D);S.bindFramebuffer(N.READ_FRAMEBUFFER,L),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,B);for(let Ee=0;Ee<Nt;Ee++)Ys?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ve.__webglTexture,G,ue+Ee):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ve.__webglTexture,G),we?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Oi.__webglTexture,bt,He+Ee):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Oi.__webglTexture,bt),G!==0?N.blitFramebuffer(Gt,le,St,Tt,Dt,Se,St,Tt,N.COLOR_BUFFER_BIT,N.NEAREST):we?N.copyTexSubImage3D(Pt,bt,Dt,Se,He+Ee,Gt,le,St,Tt):N.copyTexSubImage2D(Pt,bt,Dt,Se,Gt,le,St,Tt);S.bindFramebuffer(N.READ_FRAMEBUFFER,null),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else we?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Pt,bt,Dt,Se,He,St,Tt,Nt,Te,nn,Re.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Pt,bt,Dt,Se,He,St,Tt,Nt,Te,Re.data):N.texSubImage3D(Pt,bt,Dt,Se,He,St,Tt,Nt,Te,nn,Re):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,bt,Dt,Se,St,Tt,Te,nn,Re.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,bt,Dt,Se,Re.width,Re.height,Te,Re.data):N.texSubImage2D(N.TEXTURE_2D,bt,Dt,Se,St,Tt,Te,nn,Re);S.pixelStorei(N.UNPACK_ROW_LENGTH,dn),S.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_e),S.pixelStorei(N.UNPACK_SKIP_PIXELS,Dn),S.pixelStorei(N.UNPACK_SKIP_ROWS,ii),S.pixelStorei(N.UNPACK_SKIP_IMAGES,Fi),bt===0&&D.generateMipmaps&&N.generateMipmap(Pt),S.unbindTexture()},this.initRenderTarget=function(w){H.get(w).__webglFramebuffer===void 0&&J.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?J.setTextureCube(w,0):w.isData3DTexture?J.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?J.setTexture2DArray(w,0):J.setTexture2D(w,0),S.unbindTexture()},this.resetState=function(){q=0,X=0,at=null,S.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var Ge=(i,t=0,e=1)=>i<t?t:i>e?e:i;function qb(i){let t=2166136261,e=String(i??"");for(let n=0;n<e.length;n+=1)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function En(i){let t=(typeof i=="number"?i:qb(i))>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function up(i,t,e){let n=e||new Float32Array(t),s=i&&i.length?i:null;if(!s)return n.fill(0,0,t),n;let r=s.length;for(let a=0;a<t;a+=1){let o=Math.floor(Math.pow(r+1,a/t)-1),l=Math.min(r,Math.max(o+1,Math.ceil(Math.pow(r+1,(a+1)/t)-1))),c=0,h=0;for(let u=o;u<l;u+=1){let f=Ge(Number(s[u])||0);f>c&&(c=f),h+=f*f}let d=.6*c+.4*Math.sqrt(h/(l-o));n[a]=Ge(Math.pow(Math.max(0,d-.008),.6)*1.65)}return n}function C0(i,t,e){let n=i;for(let s=0;s<n.length&&s<t.length;s+=1){let r=t[s]>n[s];n[s]=ma(n[s],t[s],r?1/24:1/6,e)}return n}function ma(i,t,e,n){return e>0?i+(t-i)*(1-Math.exp(-Math.max(0,n)/e)):t}function pp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=P0(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Kb(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=i[u],p=i[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return rc(r,a,e,o,l,c,0),a}function P0(i,t,e,n,s){let r;if(s===l1(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=R0(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=R0(a/n|0,i[a],i[a+1],r);return r&&ga(r,r.next)&&(oc(r),r=r.next),r}function Hs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ga(e,e.next)||De(e.prev,e,e.next)===0)){if(oc(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function rc(i,t,e,n,s,r,a){if(!i)return;!a&&r&&n1(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Zb(i,n,s,r):Yb(i)){t.push(l.i,i.i,c.i),oc(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Jb(Hs(i),t),rc(i,t,e,n,s,r,2)):a===2&&$b(i,t,e,n,s,r):rc(Hs(i),t,e,n,s,r,1);break}}}function Yb(i){let t=i.prev,e=i,n=i.next;if(De(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&sc(s,o,r,l,a,c,p.x,p.y)&&De(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Zb(i,t,e,n){let s=i.prev,r=i,a=i.next;if(De(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),_=Math.max(o,l,c),g=Math.max(h,d,u),m=dp(f,p,t,e,n),y=dp(_,g,t,e,n),M=i.prevZ,x=i.nextZ;for(;M&&M.z>=m&&x&&x.z<=y;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=g&&M!==s&&M!==a&&sc(o,h,l,d,c,u,M.x,M.y)&&De(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==a&&sc(o,h,l,d,c,u,x.x,x.y)&&De(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=m;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=g&&M!==s&&M!==a&&sc(o,h,l,d,c,u,M.x,M.y)&&De(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==a&&sc(o,h,l,d,c,u,x.x,x.y)&&De(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Jb(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ga(n,s)&&L0(n,e,e.next,s)&&ac(n,s)&&ac(s,n)&&(t.push(n.i,e.i,s.i),oc(e),oc(e.next),e=i=s),e=e.next}while(e!==i);return Hs(e)}function $b(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&r1(a,o)){let l=N0(a,o);a=Hs(a,a.next),l=Hs(l,l.next),rc(a,t,e,n,s,r,0),rc(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Kb(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=P0(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(s1(c))}s.sort(Qb);for(let r=0;r<s.length;r++)e=jb(s[r],e);return e}function Qb(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function jb(i,t){let e=t1(i,t);if(!e)return t;let n=N0(e,i);return Hs(n,n.next),Hs(e,e.next)}function t1(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(ga(i,e))return e;do{if(ga(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&I0(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);ac(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&e1(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function e1(i,t){return De(i.prev,i,t.prev)<0&&De(t.next,i,i.next)<0}function n1(i,t,e,n){let s=i;do s.z===0&&(s.z=dp(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,i1(s)}function i1(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function dp(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function s1(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function I0(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function sc(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&I0(i,t,e,n,s,r,a,o)}function r1(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!a1(i,t)&&(ac(i,t)&&ac(t,i)&&o1(i,t)&&(De(i.prev,i,t.prev)||De(i,t.prev,t))||ga(i,t)&&De(i.prev,i,i.next)>0&&De(t.prev,t,t.next)>0)}function De(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ga(i,t){return i.x===t.x&&i.y===t.y}function L0(i,t,e,n){let s=Gu(De(i,t,e)),r=Gu(De(i,t,n)),a=Gu(De(e,n,i)),o=Gu(De(e,n,t));return!!(s!==r&&a!==o||s===0&&ku(i,e,t)||r===0&&ku(i,n,t)||a===0&&ku(e,i,n)||o===0&&ku(e,t,n))}function ku(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Gu(i){return i>0?1:i<0?-1:0}function a1(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&L0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ac(i,t){return De(i.prev,i,i.next)<0?De(i,t,i.next)>=0&&De(i,i.prev,t)>=0:De(i,t,i.prev)<0||De(i,i.next,t)<0}function o1(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function N0(i,t){let e=fp(i.i,i.x,i.y),n=fp(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function R0(i,t,e,n){let s=fp(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function oc(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fp(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function l1(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var te=(i,t=[])=>({outline:i,holes:t}),lc=(i,t,e,n,s=18)=>Array.from({length:s},(r,a)=>{let o=a/s*Math.PI*2;return[i+Math.cos(o)*e,t+Math.sin(o)*n]}),Ie=(i,t)=>{let e=n=>i.map((s,r)=>{let a=i[Math.max(0,r-1)],o=i[Math.min(i.length-1,r+1)],l=Math.hypot(o[0]-a[0],o[1]-a[1]);return[s[0]-(o[1]-a[1])/l*t/2*n,s[1]+(o[0]-a[0])/l*t/2*n]});return te([...e(1),...e(-1).reverse()])},Q=(i,t,e=.6)=>[i,t,e],c1={id:"aries",regions:[te([[6,40],[9,33],[17,29],[23,25],[29,26],[34,23],[40,25],[45,23],[51,26],[57,25],[63,29],[69,29],[74,34],[78,38],[82,38],[85,41],[91,40],[96,44],[96,48],[92,51],[89,50],[89,58],[86,62],[82,61],[79,57],[78,65],[79,78],[75,79],[72,74],[72,62],[68,55],[64,53],[63,69],[65,76],[62,77],[58,72],[57,56],[48,56],[40,55],[33,58],[30,67],[30,74],[33,77],[29,79],[25,76],[23,65],[20,58],[15,58],[14,67],[16,74],[13,76],[10,74],[9,61],[8,53],[7,47],[5,44]]),te(lc(77,43,8,9,24),[lc(77,43,4.5,5.3,18)]),te([[83,39],[80,36],[80,32],[83,30],[86,31],[88,34],[88,39],[86,43]]),te([[88,41],[89,36],[93,35],[92,39]])],nodes:[Q(10,62,1),Q(72,46,1),Q(82,51,.8),Q(29,51,.35),Q(53,45,.35),Q(77,38,.5)],lines:[[0,1],[1,2],[0,3],[3,4],[4,1],[1,5]]},h1={id:"taurus",regions:[te([[5,39],[10,34],[20,30],[32,29],[46,30],[57,32],[68,30],[76,32],[81,35],[84,37],[90,38],[96,42],[96,48],[90,51],[85,50],[80,46],[78,54],[78,67],[82,75],[77,77],[73,73],[71,59],[67,52],[62,54],[62,69],[65,75],[61,76],[57,71],[55,55],[42,54],[29,54],[25,60],[24,72],[28,76],[22,77],[19,73],[18,57],[13,53],[11,68],[14,74],[10,75],[7,71],[7,53],[4,47]]),te([[77,38],[72,32],[70,26],[70,19],[72,21],[74,28],[80,33],[82,38]]),te([[82,37],[85,30],[87,24],[86,19],[89,21],[90,27],[89,34],[87,40]]),Ie([[7,39],[3,43],[3,57],[5,65]],1.8),te([[75,35],[70,34],[68,37],[73,40]])],nodes:[Q(80,41,1),Q(88,47,.8),Q(72,33,.7),Q(72,23,.75),Q(88,23,.9),Q(52,40,.65),Q(22,44,.55),Q(11,64,.65),Q(62,67,.45)],lines:[[0,1],[0,2],[2,3],[0,4],[0,5],[5,6],[6,7],[5,8]]},u1={id:"gemini",regions:[te([[34,15],[28,16],[25,21],[26,27],[30,30],[30,34],[25,34],[20,40],[15,51],[12,64],[15,66],[19,57],[24,48],[26,56],[24,66],[23,76],[18,87],[13,91],[14,94],[20,94],[26,87],[31,74],[34,64],[38,75],[43,87],[40,91],[43,94],[48,93],[49,87],[45,72],[41,62],[40,53],[44,43],[49,41],[52,39],[50,36],[44,38],[39,34],[38,30],[42,25],[41,19],[38,16]]),te([[57,12],[53,16],[52,21],[55,26],[57,29],[56,33],[51,35],[45,39],[42,44],[44,47],[49,43],[55,41],[57,51],[54,60],[51,70],[52,81],[48,86],[50,89],[57,89],[59,83],[59,72],[62,66],[67,77],[72,82],[70,88],[73,91],[79,88],[78,82],[73,69],[68,61],[67,53],[68,47],[75,47],[82,44],[84,37],[83,34],[80,36],[79,42],[73,42],[69,39],[64,33],[64,28],[68,23],[68,18],[65,13],[61,11]]),te([[35,16],[31,19],[29,25],[26,27],[23,25],[23,20],[26,15],[32,12],[38,13],[42,16],[44,22],[42,26],[40,21]])],nodes:[Q(33,23,.85),Q(61,20,1),Q(29,38,.6),Q(58,37,.7),Q(15,61,.6),Q(82,40,.65),Q(29,60,.55),Q(61,60,.6),Q(23,85,.8),Q(45,87,.65),Q(55,83,.55),Q(75,83,.65)],lines:[[0,1],[0,2],[1,3],[2,4],[3,5],[2,6],[3,7],[6,8],[6,9],[7,10],[7,11]]},d1={id:"cancer",regions:[te([[30,52],[35,45],[43,43],[47,45],[50,41],[54,44],[62,45],[68,50],[72,59],[71,68],[67,76],[59,80],[46,81],[35,77],[29,68],[28,60]]),Ie([[33,53],[25,47],[21,41],[18,34]],4),te([[18,35],[12,31],[9,24],[9,17],[12,10],[16,6],[18,7],[16,14],[16,21],[19,25],[22,22],[23,17],[25,14],[27,19],[27,27],[24,32],[21,35]]),Ie([[66,53],[75,48],[78,41],[82,33]],4),te([[81,34],[77,30],[76,25],[78,19],[82,15],[83,18],[81,24],[83,26],[87,23],[89,17],[88,11],[91,14],[94,21],[95,27],[92,32],[87,35],[83,36]]),...[0,1,2,3].flatMap(i=>[Ie([[31,56+i*5],[23-i,54+i*7],[15-i,59+i*7],[10,64+i*7]],2.2),Ie([[70,56+i*5],[79+i,55+i*7],[86+i,60+i*7],[91,65+i*7]],2.2)]),te(lc(46,44,1.5,3,8)),te(lc(56,44,1.5,3,8))],nodes:[Q(18,33,.8),Q(45,49,1),Q(60,48,.85),Q(88,31,1),Q(60,65,.85),Q(47,71,.85),Q(26,84,.75)],lines:[[0,1],[1,2],[2,3],[2,4],[4,5],[5,1],[5,6]]},f1={id:"leo",regions:[te([[11,52],[17,44],[24,41],[32,40],[42,42],[50,41],[56,37],[59,30],[64,24],[69,22],[72,18],[74,21],[79,19],[82,22],[85,21],[87,25],[91,26],[90,31],[94,34],[96,39],[93,41],[88,40],[85,37],[83,41],[87,44],[92,46],[94,49],[92,52],[87,51],[84,48],[81,49],[82,53],[78,59],[77,64],[84,64],[91,65],[95,68],[94,71],[91,72],[89,69],[76,70],[67,68],[65,63],[59,65],[48,65],[38,63],[31,66],[23,68],[11,68],[8,65],[12,62],[20,61],[27,57],[28,52],[22,50],[17,53],[14,57],[10,58]]),te([[15,47],[10,51],[7,58],[7,64],[11,68],[16,69],[20,68],[18,71],[12,72],[6,70],[3,66],[3,60],[6,53],[10,48]]),te([[64,35],[67,31],[71,28],[76,28],[80,31],[83,34],[81,35],[76,32],[72,32],[68,35]]),te(lc(86,33,1.4,.7,8))],nodes:[Q(17,49,.7),Q(29,47,.75),Q(64,39,.75),Q(77,27,.6),Q(85,25,.65),Q(80,45,.55),Q(72,56,.8),Q(65,66,1),Q(88,69,.7),Q(91,65,.55),Q(30,63,.7),Q(8,65,.9)],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[7,10],[10,11],[11,0]]},p1={id:"virgo",regions:[te([[45,9],[39,12],[37,18],[39,23],[43,27],[44,30],[39,33],[35,40],[36,51],[40,58],[36,67],[32,77],[33,81],[40,84],[48,85],[59,83],[63,78],[59,70],[56,60],[53,50],[54,42],[58,46],[64,52],[66,50],[62,42],[56,35],[51,31],[50,27],[54,22],[54,17],[51,12]]),te([[38,33],[32,30],[29,26],[27,28],[27,35],[29,44],[32,48],[35,46],[34,54],[31,55],[29,50],[25,44],[23,35],[22,24],[25,19],[28,22],[33,29]]),te([[51,33],[57,27],[60,26],[63,30],[67,37],[69,46],[68,52],[65,58],[62,57],[63,50],[62,43],[59,37],[56,34],[56,44],[54,49]]),te([[39,82],[42,83],[43,93],[46,96],[43,97],[39,95]]),te([[51,84],[54,83],[54,93],[57,95],[55,97],[51,96]]),Ie([[34,40],[34,54],[30,64]],1.1)],nodes:[Q(45,12,.9),Q(42,22,.55),Q(35,40,.6),Q(48,40,.8),Q(63,53,.85),Q(43,65,.75),Q(40,77,.55),Q(54,79,.75),Q(61,78,.6),Q(41,94,.55),Q(53,94,.55)],lines:[[0,1],[1,3],[2,3],[3,4],[3,5],[5,6],[6,7],[7,8],[6,9],[7,10]]},m1={id:"libra",regions:[te([[47,16],[51,15],[54,18],[56,25],[56,33],[53,38],[53,49],[51,59],[51,76],[57,80],[61,86],[58,90],[49,91],[39,88],[37,84],[41,80],[46,77],[47,60],[47,48],[49,37],[50,31],[48,25]]),Ie([[17,17],[50,21],[83,43]],2),Ie([[17,17],[7,59]],.85),Ie([[17,17],[29,58]],.85),te([[6,58],[11,59],[19,59],[27,56],[31,57],[29,63],[24,66],[16,67],[9,64]]),Ie([[83,43],[69,79]],.85),Ie([[83,43],[94,75]],.85),te([[68,78],[73,79],[82,78],[90,75],[95,74],[94,81],[88,85],[79,87],[71,85]])],nodes:[Q(17,17,1),Q(51,21,1),Q(83,43,1),Q(16,62,.85),Q(77,82,.85),Q(30,60,.4),Q(92,77,.4)],lines:[[0,1],[1,2],[0,3],[3,5],[5,0],[2,4],[4,6],[6,2]]},g1={id:"scorpius",regions:[te([[40,42],[45,35],[52,34],[57,38],[61,44],[60,52],[56,61],[50,68],[43,69],[38,64],[36,57],[37,49]]),Ie([[48,38],[55,31],[62,26]],4),te([[61,27],[56,23],[55,17],[59,12],[64,10],[72,11],[79,14],[83,20],[81,23],[77,19],[70,17],[64,18],[62,21],[67,24],[75,25],[80,24],[78,28],[71,31],[65,30]]),Ie([[58,44],[69,49],[73,53]],4),te([[72,52],[74,48],[76,43],[76,38],[79,41],[81,46],[80,53],[76,59],[71,62],[65,61],[62,57],[62,51],[65,47],[68,45],[67,50],[66,55],[69,57]]),Ie([[43,65],[37,73],[28,78],[20,76],[14,71],[12,64],[14,60]],5),te([[15,62],[11,64],[7,62],[6,57],[9,53],[14,52],[19,54],[21,58],[18,63],[17,59],[14,58],[12,59]]),...[0,1,2,3].flatMap(i=>[Ie([[39,44+i*5],[29,39+i*5],[22,39+i*5]],1.5),Ie([[59,47+i*4],[61+i*2,57+i*5],[58+i*2,64+i*5]],1.6)])],nodes:[Q(80,20,.8),Q(63,27,.85),Q(50,38,1),Q(73,49,.6),Q(68,58,.6),Q(46,48,.5),Q(44,59,.55),Q(39,67,.7),Q(28,77,.7),Q(16,72,.6),Q(12,63,.55),Q(17,57,.55)],lines:[[0,1],[1,2],[2,3],[3,4],[4,2],[2,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11]]},_1={id:"sagittarius",regions:[te([[22,48],[30,43],[39,43],[46,46],[50,43],[49,37],[48,32],[48,27],[45,24],[44,19],[46,14],[51,12],[56,14],[58,18],[57,23],[54,26],[55,29],[60,32],[65,34],[70,35],[74,31],[77,31],[76,35],[72,39],[65,39],[57,37],[56,42],[60,48],[65,51],[68,57],[67,63],[73,69],[76,76],[73,80],[70,79],[70,74],[64,67],[62,63],[59,61],[55,62],[58,69],[55,78],[51,80],[50,77],[53,71],[49,65],[44,63],[37,63],[33,61],[29,65],[24,74],[18,83],[12,91],[7,93],[6,90],[12,85],[17,77],[23,64],[23,58],[19,55]]),te([[31,60],[35,64],[34,70],[40,77],[42,83],[48,89],[46,92],[41,90],[38,85],[32,80],[29,73],[27,68]]),te([[24,48],[19,44],[12,44],[7,47],[3,48],[7,51],[13,49],[16,51],[22,54]]),Ie([[52,30],[46,31],[39,34],[42,37],[54,35]],2.4),Ie([[76,17],[82,24],[84,32],[83,40],[79,47]],1.5),Ie([[76,17],[78,32],[79,47]],.55),Ie([[42,35],[89,33]],.65),te([[88,31],[92,33],[88,35]])],nodes:[Q(51,16,.7),Q(51,30,.65),Q(40,35,.6),Q(76,33,.7),Q(90,33,.85),Q(54,48,.75),Q(62,59,.7),Q(72,77,.6),Q(45,89,.6),Q(31,58,.8),Q(9,90,.8),Q(10,48,.6)],lines:[[0,1],[1,2],[2,3],[3,4],[1,5],[5,6],[6,7],[6,9],[9,8],[9,10],[9,11],[5,9]]},x1={id:"capricornus",regions:[te([[13,70],[23,69],[33,66],[44,63],[54,56],[61,48],[65,39],[70,34],[75,35],[79,39],[79,44],[84,48],[85,52],[83,55],[79,54],[77,51],[75,53],[75,61],[78,70],[77,78],[73,81],[70,79],[71,74],[69,67],[64,66],[62,71],[57,69],[53,70],[50,75],[44,81],[36,86],[28,87],[22,83],[18,78],[12,76],[7,83],[7,76],[3,68],[10,70]]),te([[68,38],[69,30],[69,22],[67,13],[64,7],[67,9],[71,17],[74,25],[74,34]]),te([[75,38],[77,28],[77,18],[75,10],[78,13],[80,23],[81,34],[79,41]]),te([[69,37],[65,34],[61,36],[65,40]]),te([[51,71],[54,73],[47,82],[41,88],[32,90],[24,88],[20,84],[25,86],[32,87],[39,84],[45,79]])],nodes:[Q(73,42,1),Q(64,55,.7),Q(49,65,.65),Q(35,70,.6),Q(13,73,.75),Q(30,86,.65),Q(50,83,.4),Q(75,76,.65)],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[0,5]]},v1={id:"aquarius",regions:[te([[32,13],[27,16],[25,22],[28,28],[32,30],[33,34],[28,38],[25,46],[28,54],[33,60],[31,69],[29,81],[25,88],[27,91],[33,90],[36,83],[37,71],[41,64],[45,73],[48,84],[53,90],[58,91],[60,88],[54,83],[52,70],[47,61],[46,52],[44,44],[48,43],[53,39],[55,33],[53,30],[50,34],[48,37],[42,38],[38,34],[38,30],[42,26],[43,20],[40,15]]),Ie([[30,39],[22,40],[19,35],[21,29],[28,31],[34,38],[47,41]],3),te([[49,28],[54,24],[62,23],[66,26],[70,26],[70,31],[66,34],[65,42],[61,47],[55,46],[51,42],[52,35]]),...[0,1,2].map(i=>Ie([[64+i*2,35],[70+i*2,45],[69+i*3,57],[65+i*3,65],[70+i*3,75],[68+i*3,85],[72+i*3,93]],1.4))],nodes:[Q(34,20,.7),Q(32,38,.65),Q(20,36,.6),Q(47,40,.8),Q(57,28,.6),Q(67,29,.6),Q(66,42,.6),Q(68,58,.7),Q(68,74,.6),Q(74,90,.65),Q(37,61,.7),Q(30,88,.6),Q(54,88,.6)],lines:[[0,1],[1,2],[1,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[1,10],[10,11],[10,12]]},y1={id:"pisces",regions:[te([[17,55],[23,54],[28,57],[31,61],[29,64],[23,64],[18,62],[15,60],[10,62],[11,58],[9,54],[15,57]]),te([[75,17],[79,12],[84,12],[87,17],[86,23],[82,27],[78,27],[75,23],[71,25],[72,21],[70,17],[75,19]]),Ie([[29,62],[37,70],[50,76],[63,87]],.6),Ie([[63,87],[59,74],[58,63],[61,49],[66,35],[77,26]],.6)],nodes:[Q(15,58,.5),Q(25,60,.6),Q(36,69,.6),Q(49,76,.65),Q(63,87,.9),Q(58,62,.55),Q(60,52,.5),Q(66,34,.6),Q(77,26,.6),Q(80,14,.9),Q(86,19,.65),Q(82,26,.55),Q(73,23,.45)],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,9]]},_a=[c1,h1,u1,d1,f1,p1,m1,g1,_1,x1,v1,y1].map(i=>({...i,regions:i.regions.map(t=>({outline:t.outline.map(([e,n])=>[e,100-n]),holes:t.holes.map(e=>e.map(([n,s])=>[n,100-s]))})),nodes:i.nodes.map(([t,e,n])=>[t,100-e,n])}));var ve=12,di=2.8,xp=7.6,va=2.6,xa=di+xp+va,ya=2.5,Ws=1.78,hc=ya*Ws,Hu=.85,O0=hc*1.06,B0=ya*1.06,z0=Hu*1.2,yp=.5,cc=.26,Sp=.022,Mp=.072,bp=.0055,Ap=.017,yn=[{id:"aries",cn:"\u767D\u7F8A",en:"Aries"},{id:"taurus",cn:"\u91D1\u725B",en:"Taurus"},{id:"gemini",cn:"\u53CC\u5B50",en:"Gemini"},{id:"cancer",cn:"\u5DE8\u87F9",en:"Cancer"},{id:"leo",cn:"\u72EE\u5B50",en:"Leo"},{id:"virgo",cn:"\u5904\u5973",en:"Virgo"},{id:"libra",cn:"\u5929\u79E4",en:"Libra"},{id:"scorpius",cn:"\u5929\u874E",en:"Scorpius"},{id:"sagittarius",cn:"\u5C04\u624B",en:"Sagittarius"},{id:"capricornus",cn:"\u6469\u7FAF",en:"Capricornus"},{id:"aquarius",cn:"\u6C34\u74F6",en:"Aquarius"},{id:"pisces",cn:"\u53CC\u9C7C",en:"Pisces"}];function mp(i){return(i()+i()+i()-1.5)*.82}function D0(i){let t,e,n,s;do t=i()*2-1,e=i()*2-1,n=i()*2-1,s=t*t+e*e+n*n;while(s>1||s<1e-6);let r=1/Math.sqrt(s);return[t*r,e*r,n*r]}var gp=new Array(ve);function Sa(i){let t=(i%ve+ve)%ve;if(!gp[t]){let e=_a[t].regions.flatMap(u=>u.outline),n=e.map(u=>u[0]),s=e.map(u=>u[1]),r=Math.min(...n),a=Math.max(...n),o=Math.min(...s),l=Math.max(...s),c=a-r,h=l-o,d=Math.min(hc*2/c,ya*2/h);gp[t]={cx:(r+a)/2,cy:(o+l)/2,k:d,kz:1,w:c*d/2,h:h*d/2}}return gp[t]}var fi=560,_p=new Array(ve);function U0(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){let a=e[s],o=e[r];a[1]>t!=o[1]>t&&i<(o[0]-a[0])*(t-a[1])/(o[1]-a[1])+a[0]&&(n=!n)}return n}function V0(i,t,e){let n=0;for(let s of _a[i].regions){if(!U0(t,e,s.outline)||s.holes.some(a=>U0(t,e,a)))continue;let r=1/0;for(let a of[s.outline,...s.holes])a.forEach((o,l)=>{let c=a[(l+1)%a.length],h=c[0]-o[0],d=c[1]-o[1],u=Ge(((t-o[0])*h+(e-o[1])*d)/(h*h+d*d),0,1);r=Math.min(r,Math.hypot(t-o[0]-h*u,e-o[1]-d*u))});n=Math.max(n,r*Sa(i).k)}return cc+.06+Math.min(Hu-cc-.08,Math.sqrt(n)*.52)}var vp=i=>-(i-cc)*.8-.08;function wp(i){if(_p[i])return _p[i];let t=[],e=[],n=[];for(let h of _a[i].regions){let d=[h.outline,...h.holes],u=t.length,f=[],p=[];d.forEach((g,m)=>{m&&p.push(f.length/2);let y=t.length;g.forEach(M=>{t.push(M.slice()),f.push(...M)}),m||g.forEach((M,x)=>n.push([y+x,y+(x+1)%g.length]))});let _=pp(f,p,2);for(let g=0;g<_.length;g+=3)e.push(_.slice(g,g+3).map(m=>u+m))}let s=En("zodiac-contour-mesh:"+_a[i].id);for(;t.length<fi;){let h=null,d=-1;for(let y of e)for(let M=0;M<3;M++){let x=y[M],A=y[(M+1)%3],b=t[x],E=t[A],v=(b[0]-E[0])**2+(b[1]-E[1])**2;v>d&&(d=v,h=[x,A])}let[u,f]=h,p=t[u],_=t[f],g=.43+s()*.14,m=t.length;t.push([p[0]+(_[0]-p[0])*g,p[1]+(_[1]-p[1])*g]);for(let y=e.length-1;y>=0;y--){let M=e[y];if(!(!M.includes(u)||!M.includes(f)))for(let x=0;x<3;x++){let A=M[x],b=M[(x+1)%3],E=M[(x+2)%3];if(A===u&&b===f||A===f&&b===u){e[y]=[A,m,E],e.push([m,b,E]);break}}}}let r=0,a=0,o=e.map(([h,d,u])=>{let f=t[h],p=t[d],_=t[u];return r+=Math.abs((p[0]-f[0])*(_[1]-f[1])-(p[1]-f[1])*(_[0]-f[0]))/2,r}),l=n.map(([h,d])=>(a+=Math.hypot(t[h][0]-t[d][0],t[h][1]-t[d][1]),a)),c=t.map(([h,d])=>V0(i,h,d));return _p[i]={points:t,triangles:e,contours:n,areas:o,lengths:l,totalArea:r,totalLength:a,depths:c}}function F0(i,t){let e=0,n=i.length-1;for(;e<n;){let s=e+n>>>1;t<i[s]?n=s:e=s+1}return e}function k0(i,t,e,n=!1){let s=wp(i),r=Sa(i),a=En(e),o=new Float32Array(t*3);for(let l=0;l<t;l++){let c,h,d;if(a()<.18){let[f,p]=s.contours[F0(s.lengths,a()*s.totalLength)],_=a(),g=s.points[f],m=s.points[p];c=g[0]+(m[0]-g[0])*_,h=g[1]+(m[1]-g[1])*_,d=s.depths[f]*(1-_)+s.depths[p]*_}else{let f=s.triangles[F0(s.areas,a()*s.totalArea)],[p,_,g]=f.map(M=>s.points[M]),m=Math.sqrt(a()),y=a();c=p[0]*(1-m)+_[0]*m*(1-y)+g[0]*m*y,h=p[1]*(1-m)+_[1]*m*(1-y)+g[1]*m*y,d=s.depths[f[0]]*(1-m)+s.depths[f[1]]*m*(1-y)+s.depths[f[2]]*m*y}o[l*3]=(c-r.cx)*r.k,o[l*3+1]=(h-r.cy)*r.k;let u=a();o[l*3+2]=n?d:vp(d)+(d-vp(d))*u}return o}function Wu(i,t){let e=(i%ve+ve)%ve,n=k0(e,t,"zodiac-shape:"+yn[e].id+":"+t),s=En("zodiac-shine:"+yn[e].id+":"+t),r=new Float32Array(t);for(let a=0;a<t;a++)r[a]=.4+Math.pow(s(),3)*.8;return{pos:n,shine:r,sign:yn[e]}}var Tp=_a.map(({nodes:i,lines:t})=>({nodes:i,lines:t}));function S1(i,t,e){let n=wp(i);for(let[s,r,a]of n.triangles){let o=n.points[s],l=n.points[r],c=n.points[a],h=(l[1]-c[1])*(o[0]-c[0])+(c[0]-l[0])*(o[1]-c[1]),d=((l[1]-c[1])*(t-c[0])+(c[0]-l[0])*(e-c[1]))/h,u=((c[1]-o[1])*(t-c[0])+(o[0]-c[0])*(e-c[1]))/h;if(d>=-1e-6&&u>=-1e-6&&d+u<=1+1e-6)return n.depths[s]*d+n.depths[r]*u+n.depths[a]*(1-d-u)}return V0(i,t,e)}function uc(i){let t=Math.max(0,Math.floor(Number(i)||0));return{gather:t%5,disperse:(t*3+Math.floor(t/5)+1)%5,direction:t%2?-1:1}}function Xu(i){let t=(i%ve+ve)%ve,e=Tp[t],n=Sa(t),s=new Float32Array(e.nodes.length),r=new Float32Array(e.nodes.length),a=new Float32Array(e.nodes.length),o=new Float32Array(e.nodes.length);return e.nodes.forEach(([l,c,h],d)=>{s[d]=(l-n.cx)*n.k,r[d]=(c-n.cy)*n.k,a[d]=h,o[d]=S1(t,l,c)+.08}),{x:s,y:r,z:o,m:a,nodes:s.length,segments:e.lines.length,core:ss(s,r,e.lines,Sp,o),halo:ss(s,r,e.lines,Mp,o)}}function G0(i){let t=i.length;if(t<3)return[];let e=1/0,n=-1/0,s=1/0,r=-1/0;for(let _=0;_<t;_+=1){let g=i[_];g.x<e&&(e=g.x),g.x>n&&(n=g.x),g.y<s&&(s=g.y),g.y>r&&(r=g.y)}let a=n-e||1,o=r-s||1,l=Math.max(a,o),c=(e+n)/2,h=(s+r)/2,d=[{x:c-20*l,y:h-l},{x:c,y:h+20*l},{x:c+20*l,y:h-l}].concat(i.map(_=>({x:_.x,y:_.y}))),u=[[0,1,2]],f=(_,g,m)=>{let y=_.x,M=_.y,x=g.x,A=g.y,b=m.x,E=m.y,v=2*(y*(A-E)+x*(E-M)+b*(M-A));if(Math.abs(v)<1e-12)return{x:0,y:0,r:1/0};let T=y*y+M*M,R=x*x+A*A,I=b*b+E*E,U=(T*(A-E)+R*(E-M)+I*(M-A))/v,O=(T*(b-x)+R*(y-b)+I*(x-y))/v,L=U-y,B=O-M;return{x:U,y:O,r:L*L+B*B}},p=[f(d[0],d[1],d[2])];for(let _=3;_<d.length;_+=1){let g=d[_],m=[];for(let b=0;b<u.length;b+=1){let E=p[b],v=g.x-E.x,T=g.y-E.y;v*v+T*T<=E.r&&m.push(b)}let y=new Map,M=(b,E)=>b<E?b+":"+E:E+":"+b;m.forEach(b=>{let[E,v,T]=u[b];[[E,v],[v,T],[T,E]].forEach(([R,I])=>{let U=M(R,I),O=y.get(U);O?O.n+=1:y.set(U,{u:R,v:I,n:1})})});let x=[],A=[];for(let b=0;b<u.length;b+=1)m.indexOf(b)<0&&(x.push(u[b]),A.push(p[b]));u=x,p.length=0,A.forEach(b=>p.push(b)),y.forEach(b=>{b.n===1&&(u.push([b.u,b.v,_]),p.push(f(d[b.u],d[b.v],g)))})}return u.filter(_=>_[0]>2&&_[1]>2&&_[2]>2).map(_=>[_[0]-3,_[1]-3,_[2]-3])}function qu(i,t){let e=(i%ve+ve)%ve,n=wp(e),s=Sa(e),r=n.points.map(([E,v])=>({x:(E-s.cx)*s.k,y:(v-s.cy)*s.k})),a=n.triangles,o=k0(e,t,"zodiac-figure-cloud:"+yn[e].id+":"+t,!0),l=En("zodiac-figure-tint:"+yn[e].id),c=new Map;a.forEach(([E,v,T])=>[[E,v],[v,T],[T,E]].forEach(([R,I])=>{let U=R<I?R+":"+I:I+":"+R;c.has(U)?c.get(U).count++:c.set(U,{u:R,v:I,count:1})}));let h=[...c.values()].filter(E=>E.count===1),d=a.length*2+h.length*2,u=new Float32Array(d*9),f=new Float32Array(d*9),p=new Map;a.forEach(([E,v,T],R)=>{[r[E],r[v],r[T]].forEach((O,L)=>{u[R*9+L*3]=O.x,u[R*9+L*3+1]=O.y,u[R*9+L*3+2]=n.depths[[E,v,T][L]]});let U=.62+l()*.66;for(let O=0;O<3;O+=1)f[R*9+O*3]=f[R*9+O*3+1]=f[R*9+O*3+2]=U;[[E,v],[v,T],[T,E]].forEach(([O,L])=>{let B=O<L?O+":"+L:L+":"+O;p.has(B)||p.set(B,[O,L])})});let _=a.length,g=E=>{let v=.68+l()*.28;E.forEach(([T,R],I)=>{let U=r[T],O=_*9+I*3;u.set([U.x,U.y,R?vp(n.depths[T]):n.depths[T]],O),f.set([v,v,v],O)}),_++};a.forEach(([E,v,T])=>g([[T,!0],[v,!0],[E,!0]])),h.forEach(({u:E,v})=>{g([[E,!1],[E,!0],[v,!0]]),g([[E,!1],[v,!0],[v,!1]])});let m=new Float32Array(r.length),y=new Float32Array(r.length);r.forEach((E,v)=>{m[v]=E.x,y[v]=E.y});let M=[];p.forEach(E=>M.push(E));let x=h.map(({u:E,v})=>[E,v]),A=n.depths.map(E=>E+.006),b=new Float32Array(r.length*3);return r.forEach((E,v)=>{b[v*3]=E.x,b[v*3+1]=E.y,b[v*3+2]=n.depths[v]+.006}),{cloud:o,mesh:{pos:u,tint:f},edgeCore:ss(m,y,M,bp,n.depths.map(E=>E+.006)),edgeHalo:ss(m,y,M,Ap,n.depths.map(E=>E+.006)),contourCore:ss(m,y,x,.012,A),contourHalo:ss(m,y,x,.048,A),nodes:b,triangles:d,frontTriangles:a.length,segmentCount:p.size}}function ss(i,t,e,n,s){let r=(n||.03)/2,a=s??yp,o=new Float32Array(e.length*18);return e.forEach(([l,c],h)=>{let d=typeof a=="number"?a:a[l],u=typeof a=="number"?a:a[c],f=i[c]-i[l],p=t[c]-t[l],_=Math.hypot(f,p)||1;f/=_,p/=_;let g=-p*r,m=f*r,y=f*r,M=p*r,x=i[l]-y,A=t[l]-M,b=i[c]+y,E=t[c]+M,v=[x+g,A+m,x-g,A-m,b-g,E-m,x+g,A+m,b-g,E-m,b+g,E+m];for(let T=0;T<6;T+=1)o[h*18+T*3]=v[T*2],o[h*18+T*3+1]=v[T*2+1],o[h*18+T*3+2]=[d,d,u,d,u,u][T]}),o}function dc(i,t){let e=En("zodiac-cloud:"+i),n=new Float32Array(t*3);for(let s=0;s<t;s+=1)if(e()<.28){let a=D0(e),o=(e()-.5)*22,l=.35;n[s*3]=a[0]*o+mp(e)*l,n[s*3+1]=a[1]*o*.6+mp(e)*l,n[s*3+2]=a[2]*o+mp(e)*l}else{let a=D0(e),o=4.2+Math.pow(e(),.7)*12;n[s*3]=a[0]*o,n[s*3+1]=a[1]*o*.7,n[s*3+2]=a[2]*o}return n}function Yu(i){let t=En("zodiac-seeds:"+i),e=new Float32Array(i);for(let n=0;n<i;n+=1)e[n]=t();return e}function Ep(i){let t=Math.max(0,Number(i)||0),e=Math.floor(t/xa),n=t-e*xa;return n<di?{index:(e%ve+ve)%ve,state:"gather",t:n,cycle:e}:n<di+xp?{index:(e%ve+ve)%ve,state:"hold",t:n-di,cycle:e}:{index:(e%ve+ve)%ve,state:"disperse",t:n-di-xp,cycle:e}}function Cp(i){if(!i||!i.length)return 0;let t=0,e=Math.min(5,i.length);for(let n=0;n<e;n+=1)t+=Ge(Number(i[n])||0);return Ge(t/e)}function Zu(i,t,e){return Ge(i,t||3,e||17)}var H0={low:2600,medium:4200,high:6e3},M1={low:1e3,medium:1700,high:2600},b1={low:3e3,medium:5200,high:8200},A1={low:70,medium:112,high:160},Xs=36,Ma=18,w1=[["#d96b66","#ffbaa2"],["#73b890","#b9f1c4"],["#ddb36d","#ffedb2"],["#a7bfd0","#e8efff"],["#e6ab51","#ffe49b"],["#a0bb76","#e1edac"],["#c794b9","#f6d0e7"],["#b76d94","#f5aecb"],["#9889d2","#d7c8ff"],["#66b3a6","#b0e9d3"],["#5da5cf","#b3e5fa"],["#8c87bf","#d6ccfa"]],T1=i=>["varying float vY;","varying vec2 vNeb;","varying float vGalaxy;","varying vec3 vNdc;","uniform float uTime;","float hash31(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453123); }","float noise3(vec3 p) {","  vec3 i = floor(p); vec3 f = fract(p); f = f*f*(3.0-2.0*f);","  float a = mix(mix(hash31(i), hash31(i+vec3(1.0,0.0,0.0)), f.x),","                mix(hash31(i+vec3(0.0,1.0,0.0)), hash31(i+vec3(1.0,1.0,0.0)), f.x), f.y);","  float b = mix(mix(hash31(i+vec3(0.0,0.0,1.0)), hash31(i+vec3(1.0,0.0,1.0)), f.x),","                mix(hash31(i+vec3(0.0,1.0,1.0)), hash31(i+vec3(1.0,1.0,1.0)), f.x), f.y);","  return mix(a, b, f.z);","}","float fbm(vec3 p) {","  float a = 0.5; float s = 0.0;",`  for (int i = 0; i < ${i}; i++) { s += a * noise3(p); p *= 2.03; a *= 0.5; }`,"  return s;","}","void main() {","  vec3 dir = normalize(position);","  vY = dir.y;","  vNeb = vec2(","    fbm(dir * 7.0 + vec3(0.0, uTime * 0.0006, 0.0)),","    fbm(dir * 23.0 - vec3(uTime * 0.0004, 0.0, 0.0)));","  float latitude = dot(dir,normalize(vec3(-0.42,0.86,0.25)));","  vGalaxy = exp(-pow(latitude + (vNeb.x-0.5)*0.10,2.0)*65.0);","  vec4 pos = projectionMatrix * modelViewMatrix * vec4(position, 1.0);","  vNdc = pos.xyw;","  gl_Position = pos;","}"].join(`
`),E1=["precision mediump float;","uniform vec3 uTop;","uniform vec3 uMid;","uniform vec3 uBot;","uniform vec3 uNeb1;","uniform vec3 uNeb2;","uniform float uNeb;","uniform float uVignette;","varying float vY;","varying vec2 vNeb;","varying float vGalaxy;","varying vec3 vNdc;","void main() {","  float y = clamp(vY * 0.5 + 0.5, 0.0, 1.0);","  vec3 col = mix(uBot, uMid, smoothstep(0.0, 0.58, y));","  col = mix(col, uTop, smoothstep(0.46, 1.0, y));","  float dust = smoothstep(0.25,0.72,vNeb.x)*smoothstep(0.2,0.72,vNeb.y);","  float lane = 1.0-smoothstep(0.34,0.53,vNeb.y)*0.65;","  col += (uNeb1*dust*lane + uNeb2*pow(vNeb.y,4.0))*vGalaxy*uNeb;","  vec2 ndc = vNdc.xy / max(1e-4, vNdc.z);","  col *= 1.0 - uVignette * smoothstep(0.28, 1.18, length(ndc * vec2(0.84, 1.0)));","  gl_FragColor = vec4(max(col, vec3(0.0)), 1.0);","}"].join(`
`);function C1(i,t){return new i.ShaderMaterial({uniforms:{uTime:{value:0},uTop:{value:new i.Color(.006,.007,.011)},uMid:{value:new i.Color(.01,.011,.015)},uBot:{value:new i.Color(.003,.004,.006)},uNeb1:{value:new i.Color(.1,.096,.088)},uNeb2:{value:new i.Color(.042,.048,.061)},uNeb:{value:1},uVignette:{value:.54}},vertexShader:T1(t),fragmentShader:E1,side:i.BackSide,depthTest:!1,depthWrite:!1})}var R1=["attribute vec3 aEntry;","attribute vec3 aShape;","attribute vec3 aExit;","attribute float aShine;","attribute float aPhase;","attribute float aSeed;","uniform float uTime;","uniform float uPixelRatio;","uniform float uBoost;","uniform float uTwinkle;","uniform float uMotion;","uniform float uSpin;","uniform int uVariant;","uniform int uState;","uniform float uK;","varying float vAlpha;","varying float vShine;","varying float vCore;","varying vec2 vDirection;","varying float vStretch;","vec3 flight(float t) {","  t = clamp(t,0.0,1.0);","  float ease = uState == 2 ? t*t : 1.0-(1.0-t)*(1.0-t);","  vec3 origin = uState == 2 ? aShape : aEntry;","  vec3 target = uState == 2 ? aExit : aShape;","  vec3 p = mix(origin,target,ease);","  float arc = sin(t*3.14159265)*uMotion;","  float angle = aPhase+t*(7.0+aSeed*8.0)*uSpin;","  if(uVariant == 0) {","    p.xy += vec2(cos(angle),sin(angle))*arc*(1.2+aSeed*2.6);","    p.z += arc*sin(angle*0.7)*1.8;","  } else if(uVariant == 1) {","    p.xz += vec2(sin(angle),cos(angle))*arc*2.8;","    p.y += arc*(aSeed-0.5)*5.0;","  } else if(uVariant == 2) {","    p.x += arc*(aSeed-0.5)*7.0;","    p.y += sin(t*9.0+aPhase)*arc*1.2;","    p.z += arc*(aSeed*4.0-2.0);","  } else if(uVariant == 3) {","    p.xz += vec2(cos(angle),sin(angle))*arc*4.2;","    p.y += sin(angle*0.4)*arc*0.8;","  } else {","    vec3 direction = normalize(aShape+vec3(sin(aPhase),cos(aPhase),aSeed-0.5));","    p += direction*arc*(2.0+4.0*aSeed);","  }","  return p;","}","void main() {","  float stagger = (aSeed-0.5)*0.48;","  float k = clamp(uK*1.24+stagger,0.0,1.0);","  vec3 p;","  vec3 ahead;","  float arc = 0.0;","  if(uState == 1) {","    p = aShape;","    p += vec3(sin(uTime*0.72+aPhase),cos(uTime*0.49+aPhase*1.7),","              sin(uTime*0.55+aPhase*0.6))*0.028*uMotion;","    ahead = p;","    float shimmer = sin(aShape.x*0.8+aShape.y*0.45-uTime*1.15+aPhase*0.1);","    vAlpha = 0.72+shimmer*0.16*uMotion;","  } else {","    p = flight(k); ahead = flight(min(1.0,k+0.012));","    arc = sin(k*3.14159265);","    vAlpha = uState == 0 ? 0.24+smoothstep(0.0,0.78,k)*0.76 : 1.0-smoothstep(0.72,1.0,k);","  }","  vec4 mv = modelViewMatrix*vec4(p,1.0);","  vec4 clip = projectionMatrix*mv;","  vec4 next = projectionMatrix*modelViewMatrix*vec4(ahead,1.0);","  vec2 velocity = next.xy/max(0.001,abs(next.w))-clip.xy/max(0.001,abs(clip.w));","  vDirection = length(velocity)>0.00001 ? normalize(velocity) : vec2(1.0,0.0);","  vStretch = uState == 1 ? 1.0 : 1.0+(2.0+arc*5.0)*uMotion;","  float tw = 1.0+uTwinkle*sin(uTime*1.9+aPhase)*0.35;","  float boost = 1.0+(uBoost-1.0)*(0.55+aShine*0.45);","  float size = uState == 1 ? 0.34+aShine*0.95 : (0.35+aShine*0.65)*(1.0+arc*1.8*uMotion);","  gl_PointSize = clamp(size*tw*boost*(46.0/max(1.0,-mv.z))*uPixelRatio,0.6,34.0);","  vShine = aShine; vCore = clamp(aShine,0.0,1.0);","  gl_Position = clip;","}"].join(`
`),P1=["precision mediump float;","uniform vec3 uAccent;","uniform vec3 uBody;","uniform vec3 uRim;","uniform float uAccentMix;","varying float vAlpha;","varying float vShine;","varying float vCore;","varying vec2 vDirection;","varying float vStretch;","void main() {","  vec2 q = gl_PointCoord-vec2(0.5);","  vec2 dir = vec2(vDirection.x,-vDirection.y);","  float along = dot(q,dir);","  float across = dot(q,vec2(-dir.y,dir.x));","  float d = length(vec2(along,across*vStretch));","  float halo = exp(-d*d*22.0)*0.22;","  float core = exp(-d*d*240.0);","  float tail = mix(1.0,smoothstep(-0.5,0.15,along),clamp(vStretch-1.0,0.0,1.0));","  float a = min(1.0,halo+core)*vAlpha*(0.45+tail*0.25);","  vec3 base = mix(uBody,uRim,vCore);","  vec3 col = mix(base,uAccent,clamp((vShine-0.9)*1.2,0.0,uAccentMix));","  col += core*vCore*0.3;","  gl_FragColor = vec4(col,a);","}"].join(`
`),I1=["attribute float aSize;","attribute vec3 aColor;","attribute float aPhase;","attribute float aAlpha;","uniform float uTime;","uniform float uPixelRatio;","uniform float uSizeScale;","uniform float uAlpha;","uniform float uTwinkle;","uniform vec3 uTint;","varying vec3 vColor;","varying float vAlpha;","void main() {","  vColor = aColor*uTint;","  vec4 mv = modelViewMatrix * vec4(position, 1.0);","  float breath = sin(uTime*(0.34+0.12*sin(aPhase))+aPhase);","  float tw = 1.0-uTwinkle*0.24+uTwinkle*0.34*breath;","  gl_PointSize = clamp(aSize * uSizeScale * tw * (1.0 / max(1.0, -mv.z)) * uPixelRatio, 1.0, 512.0);","  vAlpha = aAlpha * tw * uAlpha;","  gl_Position = projectionMatrix * mv;","}"].join(`
`),L1=["precision mediump float;","varying vec3 vColor;","varying float vAlpha;","void main() {","  vec2 q = gl_PointCoord - vec2(0.5);","  float d = length(q);","  float halo = smoothstep(0.5, 0.0, d);","  float a = halo * halo * vAlpha;","  gl_FragColor = vec4(vColor, a);","}"].join(`
`),N1=["attribute float aSize;","attribute float aBright;","attribute float aPhase;","uniform float uTime;","uniform float uPixelRatio;","uniform float uSizeScale;","uniform float uBrightness;","uniform float uTwinkle;","varying float vBright;","void main() {","  vec4 mv = modelViewMatrix * vec4(position, 1.0);","  float breath = sin(uTime*(0.42+0.09*sin(aPhase))+aPhase);","  float flare = pow(max(0.0,breath),8.0);","  float tw = 1.0+uTwinkle*(0.20*breath+0.10*flare);","  gl_PointSize = clamp(aSize * uSizeScale * tw * (1.0 / max(1.0, -mv.z)) * uPixelRatio, 1.0, 320.0);","  vBright = aBright*uBrightness*(1.0+uTwinkle*(0.27*sin(uTime*0.44+aPhase)+0.16*flare));","  gl_Position = projectionMatrix * mv;","}"].join(`
`),D1=["precision highp float;","uniform vec3 uColor;","varying float vBright;","void main() {","  vec2 q = gl_PointCoord - vec2(0.5);","  float r = length(q);","  float ax = abs(q.x);","  float ay = abs(q.y);","  float core = exp(-r * r * 96.0);","  float sx = exp(-ax * ax * 1300.0 - ay * ay * 20.0);","  float sy = exp(-ay * ay * 1300.0 - ax * ax * 20.0);","  float halo = exp(-r * r * 13.0) * 0.32;","  float spike = sx + sy;","  float a = clamp((core + spike * 0.60 + halo) * vBright, 0.0, 1.0);","  vec3 col = mix(uColor, vec3(1.0), clamp(core * 1.3 + spike * 0.55, 0.0, 1.0));","  gl_FragColor = vec4(col * clamp(vBright, 0.0, 1.4), a);","}"].join(`
`);function U1(i){return new i.ShaderMaterial({uniforms:{uTime:{value:0},uPixelRatio:{value:1},uBoost:{value:1},uTwinkle:{value:1},uState:{value:0},uMotion:{value:1},uSpin:{value:1},uVariant:{value:0},uK:{value:0},uAccent:{value:new i.Color("#b9d3ff")},uBody:{value:new i.Color(1,1,1)},uRim:{value:new i.Color(1,1,1)},uAccentMix:{value:0}},vertexShader:R1,fragmentShader:P1,transparent:!0,depthWrite:!1,depthTest:!1,blending:i.AdditiveBlending})}function Ju(i){return new i.ShaderMaterial({uniforms:{uTime:{value:0},uPixelRatio:{value:1},uSizeScale:{value:1},uAlpha:{value:1},uTwinkle:{value:1},uTint:{value:new i.Color(1,1,1)}},vertexShader:I1,fragmentShader:L1,transparent:!0,depthWrite:!1,depthTest:!1,blending:i.AdditiveBlending})}function W0(i,t){return new i.ShaderMaterial({uniforms:{uTime:{value:0},uPixelRatio:{value:1},uSizeScale:{value:1},uBrightness:{value:1},uTwinkle:{value:1},uColor:{value:new i.Color(t)}},vertexShader:N1,fragmentShader:D1,transparent:!0,depthWrite:!1,depthTest:!1,blending:i.AdditiveBlending})}function $u(i,t,e){let n=new i.BufferGeometry;return n.setAttribute("position",new i.BufferAttribute(t,3)),n.setAttribute("aColor",e.color),n.setAttribute("aSize",e.size),n.setAttribute("aPhase",e.phase),n.setAttribute("aAlpha",e.alpha),n}function Ku(i,t,e,n,s){return{color:new i.BufferAttribute(t,3),size:new i.BufferAttribute(e,1),phase:new i.BufferAttribute(n,1),alpha:new i.BufferAttribute(s,1)}}function X0(i,t,e,n,s){let r=new i.BufferGeometry;return r.setAttribute("position",new i.BufferAttribute(t,3)),r.setAttribute("aSize",new i.BufferAttribute(e,1)),r.setAttribute("aBright",new i.BufferAttribute(n,1)),r.setAttribute("aPhase",s),r}function q0(i,t,e){let n=H0[e.quality]?e.quality:"high",s=H0[n],r=M1[n],a=b1[n],o=A1[n],l=n==="low",c=[],h=new i.SphereGeometry(140,l?40:64,l?26:40),d=C1(i,l?2:4),u=new i.Mesh(h,d);u.frustumCulled=!1,u.renderOrder=-1e3,t.add(u),c.push(h,d);let f=new i.Group;t.add(f);let p=En("zodiac-field-3"),_=new Float32Array(a*3),g=new Float32Array(a*3),m=new Float32Array(a),y=new Float32Array(a),M=new Float32Array(a);for(let ct=0;ct<a;ct+=1){let zt=p()<.48?(p()+p()+p()-1.5)*.14:p()*2-1,Wt=p()*Math.PI*2,Qt=22+Math.pow(p(),.5)*68,de=Math.sqrt(1-zt*zt);_[ct*3]=Math.cos(Wt)*de*Qt,_[ct*3+1]=zt*Qt*.8+Math.cos(Wt)*de*Qt*.38,_[ct*3+2]=Math.sin(Wt)*de*Qt;let re=.5+p()*.52,Pe=p();g[ct*3]=re*(Pe>.9?1:Pe<.12?.8:.96),g[ct*3+1]=re*(Pe>.9?.88:.96),g[ct*3+2]=re*(Pe>.9?.7:1),m[ct]=.75+Math.pow(p(),4)*4,y[ct]=p()*Math.PI*2,M[ct]=.3+p()*.66}let x=$u(i,_,Ku(i,g,m,y,M)),A=Ju(i);A.uniforms.uSizeScale.value=96;let b=new i.Points(x,A);b.frustumCulled=!1,b.renderOrder=-900,f.add(b),c.push(x,A);let E=En("zodiac-nebula-3"),v=[[.22,.22,.23],[.27,.26,.24],[.18,.19,.21],[.24,.24,.25]],T=new Float32Array(Xs*3),R=new Float32Array(Xs*3),I=new Float32Array(Xs),U=new Float32Array(Xs),O=new Float32Array(Xs);for(let ct=0;ct<Xs;ct+=1){let zt=E()*2-1,Wt=E()*Math.PI*2,Qt=30+E()*48,de=Math.sqrt(1-zt*zt);T[ct*3]=Math.cos(Wt)*de*Qt,T[ct*3+1]=zt*Qt*.65,T[ct*3+2]=Math.sin(Wt)*de*Qt;let re=v[ct%v.length],Pe=.45+E()*.55;R[ct*3]=re[0]*Pe,R[ct*3+1]=re[1]*Pe,R[ct*3+2]=re[2]*Pe,I[ct]=70+E()*150,U[ct]=E()*Math.PI*2,O[ct]=.01+E()*.025}let L=$u(i,T,Ku(i,R,I,U,O)),B=Ju(i);B.uniforms.uSizeScale.value=120;let q=new i.Points(L,B);q.frustumCulled=!1,q.renderOrder=-890,f.add(q),c.push(L,B);let X=En("zodiac-sparkle-3"),at=new Float32Array(o*3),Y=new Float32Array(o),et=new Float32Array(o),it=new Float32Array(o);for(let ct=0;ct<o;ct+=1){let zt=X()*2-1,Wt=X()*Math.PI*2,Qt=52+X()*34,de=Math.sqrt(1-zt*zt);at[ct*3]=Math.cos(Wt)*de*Qt,at[ct*3+1]=zt*Qt*.85,at[ct*3+2]=Math.sin(Wt)*de*Qt,Y[ct]=1.65+Math.pow(X(),3.5)*7.8,et[ct]=.34+X()*.66,it[ct]=X()*Math.PI*2}let Ut=X0(i,at,Y,et,new i.BufferAttribute(it,1)),Ct=W0(i,"#f2f0eb");Ct.uniforms.uSizeScale.value=260;let fe=new i.Points(Ut,Ct);fe.frustumCulled=!1,fe.renderOrder=-880,f.add(fe),c.push(Ut,Ct);let ee=new i.Group;t.add(ee);let se=new i.Group;ee.add(se);let Z=new i.Group;Z.add(new i.AmbientLight("#b4b4c5",.65));let nt=new i.DirectionalLight("#fff4e3",3.2);nt.position.set(-5,6,8),Z.add(nt);let Mt=new i.DirectionalLight("#c4daf1",2.4);Mt.position.set(4,1,-5),Z.add(Mt);let Yt=new i.DirectionalLight("#e0cadb",1.1);Yt.position.set(5,-3,4),Z.add(Yt),t.add(Z);let pt=U1(i),Xt=new i.MeshStandardMaterial({color:new i.Color("#ffffff"),emissive:new i.Color("#000000"),emissiveIntensity:.35,roughness:.42,metalness:.18,flatShading:!0,vertexColors:!0,transparent:!0,opacity:.005,side:i.DoubleSide,depthTest:!0,depthWrite:!1,toneMapped:!1}),pe=(ct,zt)=>new i.MeshBasicMaterial({color:new i.Color(ct),transparent:!0,opacity:zt,side:i.DoubleSide,depthTest:!1,depthWrite:!1,blending:i.AdditiveBlending,toneMapped:!1}),tt=pe("#ffffff",.28),ot=pe("#ffffff",.075),lt=Ju(i);lt.uniforms.uSizeScale.value=52;let ht=pe("#ffffff",.2),dt=pe("#ffffff",.9),kt=Ju(i);kt.uniforms.uSizeScale.value=120;let Lt=W0(i,"#ffffff");Lt.uniforms.uSizeScale.value=300,c.push(pt,Xt,tt,ot,lt,ht,dt,kt,Lt);let qt=new i.Color("#ffffff"),Kt=w1.map(([ct,zt])=>{let Wt=new i.Color(ct),Qt=new i.Color(zt);return{body:Wt,glow:Qt,emissive:Wt.clone().multiplyScalar(.18),edge:Wt.clone().lerp(qt,.55),core:Qt.clone().lerp(qt,.82),particle:Wt.clone().lerp(Qt,.2).convertLinearToSRGB(),particleRim:Wt.clone().lerp(Qt,.55).convertLinearToSRGB(),haze:Wt.clone().lerp(Qt,.35).convertLinearToSRGB(),node:Qt.clone().lerp(qt,.5).convertLinearToSRGB(),star:Qt.clone().lerp(qt,.3).convertLinearToSRGB()}}),N=Yu(s),me=new Float32Array(s);for(let ct=0;ct<s;ct+=1)me[ct]=N[ct]*Math.PI*2;let ce=new i.BufferAttribute(me,1),C=new i.BufferAttribute(N,1),S=(()=>{let ct=En("zodiac-haze-1"),zt=new Float32Array(r*3),Wt=new Float32Array(r),Qt=new Float32Array(r),de=new Float32Array(r);for(let re=0;re<r;re+=1){let Pe=.55+ct()*.45;zt[re*3]=zt[re*3+1]=zt[re*3+2]=Pe,Wt[re]=.8+Math.pow(ct(),2.4)*2.4,Qt[re]=ct()*Math.PI*2,de[re]=.003+ct()*.008}return Ku(i,zt,Wt,Qt,de)})(),z=(()=>{let ct=En("zodiac-disc-1"),zt=new Float32Array(Ma);for(let Wt=0;Wt<Ma;Wt+=1)zt[Wt]=ct()*Math.PI*2;return new i.BufferAttribute(zt,1)})(),H=(()=>{let ct=En("zodiac-node-1"),zt=new Float32Array(fi*3),Wt=new Float32Array(fi),Qt=new Float32Array(fi),de=new Float32Array(fi);for(let re=0;re<fi;re+=1){let Pe=.7+ct()*.3;zt[re*3]=zt[re*3+1]=zt[re*3+2]=Pe,Wt[re]=.3+Math.pow(ct(),1.8)*.55,Qt[re]=ct()*Math.PI*2,de[re]=.25+ct()*.35}return Ku(i,zt,Wt,Qt,de)})(),J=[],ut=[],ft=[],$=[],j=[],_t=[],Ft=[],yt=[],xt=[],Ot=[],Ht=[];for(let ct=0;ct<ve;ct+=1){let zt=Wu(ct,s),Wt=[dc(yn[ct].id,s),dc(yn[(ct+1)%ve].id,s)],Qt=qu(ct,r),de=Xu(ct);Ht.push(Qt),Ot.push(de);let re=new i.BufferGeometry;re.setAttribute("position",new i.BufferAttribute(new Float32Array(s*3),3)),re.setAttribute("aEntry",new i.BufferAttribute(Wt[0],3)),re.setAttribute("aShape",new i.BufferAttribute(zt.pos,3)),re.setAttribute("aExit",new i.BufferAttribute(Wt[1],3)),re.setAttribute("aShine",new i.BufferAttribute(zt.shine,1)),re.setAttribute("aPhase",ce),re.setAttribute("aSeed",C),J.push(re),c.push(re);let Pe=$u(i,Qt.cloud,S);ut.push(Pe),c.push(Pe);let Nn=new i.BufferGeometry;Nn.setAttribute("position",new i.BufferAttribute(Qt.mesh.pos,3)),Nn.setAttribute("color",new i.BufferAttribute(Qt.mesh.tint,3)),Nn.computeVertexNormals(),ft.push(Nn),c.push(Nn);let mi=new i.BufferGeometry;mi.setAttribute("position",new i.BufferAttribute(Qt.contourCore,3)),$.push(mi);let gi=new i.BufferGeometry;gi.setAttribute("position",new i.BufferAttribute(Qt.contourHalo,3)),j.push(gi);let rs=$u(i,Qt.nodes,H);_t.push(rs),c.push(mi,gi,rs);let _i=new i.BufferGeometry;_i.setAttribute("position",new i.BufferAttribute(de.halo,3)),Ft.push(_i);let w=new i.BufferGeometry;w.setAttribute("position",new i.BufferAttribute(de.core,3)),yt.push(w),c.push(_i,w);let D=new Float32Array(Ma*3),W=new Float32Array(Ma),k=new Float32Array(Ma),G=Math.min(de.nodes,Ma);for(let St=0;St<G;St+=1)D[St*3]=de.x[St],D[St*3+1]=de.y[St],D[St*3+2]=de.z[St],W[St]=.55+de.m[St]*1.75,k[St]=.55+de.m[St]*.85;let bt=X0(i,D,W,k,z);bt.setDrawRange(0,G),xt.push(bt),c.push(bt)}let $t=new i.Points(J[0],pt);$t.frustumCulled=!1,$t.renderOrder=-10,ee.add($t);let F=new i.Points(ut[0],kt);F.frustumCulled=!1,F.renderOrder=-100,se.add(F);let mt=new i.Mesh(ft[0],Xt);mt.frustumCulled=!1,mt.renderOrder=-90,se.add(mt);let K=new i.Mesh(j[0],ot),gt=new i.Mesh($[0],tt),At=new i.Points(_t[0],lt);K.frustumCulled=!1,gt.frustumCulled=!1,At.frustumCulled=!1,K.renderOrder=-82,gt.renderOrder=-80,At.renderOrder=-78,se.add(K),se.add(gt),se.add(At);let st=new i.Mesh(Ft[0],ht),Bt=new i.Mesh(yt[0],dt);st.frustumCulled=!1,Bt.frustumCulled=!1,st.renderOrder=10,Bt.renderOrder=11,se.add(st),se.add(Bt);let It=new i.Points(xt[0],Lt);It.frustumCulled=!1,It.renderOrder=12,se.add(It);let ne=-1,ge=0,un=!0,Ue=1;function td(ct){let zt=(ct%ve+ve)%ve;if(zt===ne)return yn[zt];ne=zt;let Wt=Kt[zt];return Xt.color.copy(Wt.body),Xt.emissive.copy(Wt.emissive),tt.color.copy(Wt.edge),ot.color.copy(Wt.glow),dt.color.copy(Wt.core),ht.color.copy(Wt.glow),pt.uniforms.uBody.value.copy(Wt.particle),pt.uniforms.uRim.value.copy(Wt.particleRim),kt.uniforms.uTint.value.copy(Wt.haze),lt.uniforms.uTint.value.copy(Wt.node),Lt.uniforms.uColor.value.copy(Wt.star),$t.geometry=J[zt],F.geometry=ut[zt],mt.geometry=ft[zt],K.geometry=j[zt],gt.geometry=$[zt],At.geometry=_t[zt],st.geometry=Ft[zt],Bt.geometry=yt[zt],It.geometry=xt[zt],yn[zt]}function ed(ct){pt.uniforms.uPixelRatio.value=ct,[A,B,kt,lt].forEach(zt=>{zt.uniforms.uPixelRatio.value=ct}),Ct.uniforms.uPixelRatio.value=ct,Lt.uniforms.uPixelRatio.value=ct}function fc(ct){!ct||!ct.accent||(pt.uniforms.uAccent.value.set(ct.accent).convertLinearToSRGB(),pt.uniforms.uAccentMix.value=.1)}function qs(ct){let zt=Ge(ct);return zt*zt*(3-2*zt)}function nd(ct,zt){return ct==="gather"?qs((zt-.42)/.5):ct==="disperse"?1-qs(zt/.62):1}function pc(ct,zt){let Wt=zt||{};ge=Wt.cycle||0;let Qt=!!Wt.reduced,de=Wt.state||"hold",re=Wt.k||0,Pe=Wt.bass||0,Nn=Wt.onset||0;d.uniforms.uTime.value=ct,pt.uniforms.uTime.value=ct,pt.uniforms.uBoost.value=1+Pe*.6+Nn*.8,pt.uniforms.uTwinkle.value=Qt?.15:1,pt.uniforms.uState.value=de==="gather"?0:de==="disperse"?2:1,pt.uniforms.uK.value=re;let mi=uc(Wt.cycle||0);pt.uniforms.uVariant.value=de==="disperse"?mi.disperse:mi.gather,pt.uniforms.uSpin.value=mi.direction,pt.uniforms.uMotion.value=Qt?.12:1;let gi=Qt?.2:1;A.uniforms.uTime.value=ct,A.uniforms.uTwinkle.value=gi,B.uniforms.uTime.value=ct,B.uniforms.uTwinkle.value=gi*.35,Ct.uniforms.uTime.value=ct,Ct.uniforms.uTwinkle.value=gi,Ct.uniforms.uBrightness.value=.82+Nn*.3;let rs=Qt?.04:.27;ee.rotation.y=Math.sin(ct*.3)*rs+Math.sin(ct*.085+1.3)*rs*.34,ee.rotation.x=Math.sin(ct*.19)*(Qt?0:.11);let _i=1+Nn*.02+Pe*.012;ee.scale.setScalar(de==="gather"?_i*(.92+re*.08):_i),Ue=nd(de,re),kt.uniforms.uAlpha.value=Ue,kt.uniforms.uTime.value=ct,Xt.opacity=.005*Ue,tt.opacity=.28*Ue,ot.opacity=(.075+Pe*.035)*Ue,lt.uniforms.uAlpha.value=Ue*.045,lt.uniforms.uTime.value=ct,lt.uniforms.uTwinkle.value=Qt?.25:1,dt.opacity=(.9+Pe*.06)*Ue,ht.opacity=(.2+Pe*.16)*Ue,Lt.uniforms.uBrightness.value=Ue*(1+Nn*.35),Lt.uniforms.uTime.value=ct,Lt.uniforms.uTwinkle.value=Qt?.25:1,se.visible=Ue>.002,f.rotation.y=ct*(Qt?0:.0022),f.position.copy(Wt.cameraPos||{x:0,y:0,z:0})}function ba(ct){un=!!ct,f.visible=un}function pi(){return{signIndex:ne<0?0:ne,sign:ne<0?null:yn[ne].id,signCn:ne<0?null:yn[ne].cn,signEn:ne<0?null:yn[ne].en,particleCount:s,fieldPoints:a+Xs+o,fieldVisible:un,figureTriangles:ne<0?0:Ht[ne].triangles,figureEdges:ne<0?0:Ht[ne].segmentCount,figurePoints:r,figureMeshPoints:fi,constellationNodes:ne<0?0:Ot[ne].nodes,constellationSegments:ne<0?0:Ot[ne].segments,figureAlpha:Math.round(Ue*1e3)/1e3,sky:!0,layers:13,transition:{...uc(ge)}}}function Aa(){c.forEach(ct=>{ct.dispose()}),t.remove(ee),t.remove(f),t.remove(u),t.remove(Z)}return ba(!0),{setSign:td,update:pc,dispose:Aa,stats:pi,setPalette:fc,setPixelRatio:ed,setFieldVisible:ba}}var J0={low:{prCap:1,budget:19e5},medium:{prCap:1.15,budget:36e5},high:{prCap:1.55,budget:62e5}},Rp=24,F1=250,O1="#030405",Y0=1.3,ju=52,$0=2.6,K0=18,B1=.42,Q0=2.4;function Qu(i){let t=Math.tan(ju*Math.PI/180/2),e=i>.01?i:Ws;return Math.max(ya*Y0/t,hc*Y0/(t*e))}function j0(i){return Ge(i.distFit*i.zoom,$0,Math.max(K0,i.distFit*Q0))}var Z0=.75,z1=.035;function V1(){try{let i=document.createElement("canvas");return!!(i.getContext&&i.getContext("webgl2"))}catch{return!1}}var V=null;function k1(i,t={}){V&&t_();let e=J0[t.quality]?t.quality:"high",n=null;try{n=new ic({canvas:i,antialias:!0,powerPreference:"high-performance"})}catch{return!1}if(!n.getContext())return!1;n.outputColorSpace=je,n.toneMapping=Tn,n.info.autoReset=!1;let s=new ws;s.background=new Et(O1);let r=new Oe(ju,1,.1,400);r.position.set(0,0,Qu(Ws));let a=r.clone(),o={field:!0,interactive:t.interactive!==!1,glow:1,speed:1,reduced:!!t.reduced,palette:t.palette||{}},l=q0(hp,s,{quality:e});l.setPalette(o.palette);let c={raw:null,onset:!1,bins:new Float32Array(Rp),target:new Float32Array(Rp),bass:0,onsetLevel:0},h={drift:0,yaw:0,pitch:.06,zoom:1,distFit:Qu(Ws),dist:Qu(Ws),dragging:!1,fov:ju};function d(){h.dist=j0(h)}function u(M){if(o.interactive){h.dragging=!0;try{i.setPointerCapture(M.pointerId)}catch{}}}function f(M){!o.interactive||!h.dragging||!(M.buttons&1)||(h.yaw-=M.movementX*.008,h.pitch=Ge(h.pitch+M.movementY*.006,-Z0,Z0))}function p(){h.dragging=!1}function _(M){o.interactive&&(M.preventDefault(),h.zoom=Zu(h.zoom*(1+M.deltaY*.001),B1,Q0),d())}function g(){o.interactive&&(h.yaw=0,h.pitch=.06,h.zoom=1,d())}function m(){i.addEventListener("pointerdown",u),i.addEventListener("pointermove",f),window.addEventListener("pointerup",p),i.addEventListener("wheel",_,{passive:!1}),i.addEventListener("dblclick",g),i.style.touchAction=o.interactive?"none":""}function y(){i.removeEventListener("pointerdown",u),i.removeEventListener("pointermove",f),window.removeEventListener("pointerup",p),i.removeEventListener("wheel",_),i.removeEventListener("dblclick",g),i.style.touchAction=""}return V={canvas:i,renderer:n,scene:s,camera:r,cameraTarget:a,control:null,world:l,quality:e,prefs:o,audio:c,rig:h,raf:0,lastFrame:0,lastRender:0,lastTime:-1,time:0,sceneTime:0,playing:!1,dirty:!0,width:0,height:0,pr:1,timeline:{index:-1,state:"gather",t:0},warmed:!1,bindInput:m,unbindInput:y},m(),V.raf=requestAnimationFrame(n_),!0}function G1(){let i=V.timeline.index>=0?V.timeline.index:0;for(let t=0;t<ve;t+=1)V.world.setSign(t),V.renderer.render(V.scene,V.camera);V.world.setSign(i),V.renderer.info.reset()}function t_(){if(V){V.raf&&cancelAnimationFrame(V.raf),V.raf=0;try{V.unbindInput()}catch{}try{V.world.dispose()}catch{}try{V.renderer.dispose(),V.renderer.forceContextLoss()}catch{}V=null}}function H1(i,t,e){let n=J0[e],s=typeof window<"u"&&window.devicePixelRatio||1,r=Math.sqrt(n.budget/Math.max(1,i*t)),a=1/0;try{let o=V&&V.renderer.getContext();o&&(a=Math.min(o.getParameter(o.MAX_TEXTURE_SIZE),o.getParameter(o.MAX_RENDERBUFFER_SIZE)))}catch{}return Math.min(s,n.prCap,r,a/Math.max(i,t))}function W1(i,t){!V||!(i>0)||!(t>0)||(V.width=i,V.height=t,V.pr=H1(i,t,V.quality),V.renderer.setPixelRatio(V.pr),V.renderer.setSize(i,t,!1),V.camera.aspect=i/t,V.camera.updateProjectionMatrix(),V.rig.distFit=Qu(i/t),V.rig.dist=j0(V.rig),V.world.setPixelRatio(V.pr),V.dirty=!0)}function X1(i={}){if(!V)return;let t=Ge(Number(i.time)||0,0,3600*4),e=!!i.playing;(t!==V.time||e!==V.playing)&&(V.dirty=!0),V.time=t,V.playing=e}function q1(i={}){V&&(V.audio.raw=i.bands&&i.bands.length?i.bands:null,V.audio.onset=!!i.onset)}function Y1(i={}){V&&(typeof i.field=="boolean"&&(V.prefs.field=i.field,V.world.setFieldVisible(V.prefs.field)),typeof i.interactive=="boolean"&&e_(i.interactive),i.glow!=null&&(V.prefs.glow=Ge(Number(i.glow),0,2)),i.speed!=null&&(V.prefs.speed=Ge(Number(i.speed),.15,3)),i.reduced!=null&&(V.prefs.reduced=!!i.reduced),i.palette&&(V.prefs.palette=i.palette,V.world.setPalette(V.prefs.palette)),V.dirty=!0)}function e_(i){V&&(V.prefs.interactive=!!i,i||(V.rig.dragging=!1),V.canvas.style.touchAction=i?"none":"")}function Z1(i,t){if(!V)return;if(i==null){V.control=null,V.dirty=!0;return}if(typeof i!="object")return;let e=Array.isArray(i.position)&&i.position.length===3&&i.position.every(Number.isFinite);if(i.position!==void 0&&!e)return;let s={...V.control||{yaw:V.rig.drift+V.rig.yaw,pitch:V.rig.pitch,dist:V.rig.dist,fov:V.camera.fov,tx:0,ty:0,tz:0,roll:0},position:e?i.position.slice():null,external:!!(t&&t.external!==void 0?t.external:i.external)};for(let a of["yaw","pitch","dist","fov","tx","ty","tz","roll"])Number.isFinite(i[a])&&(s[a]=i[a]);s.pitch=Ge(s.pitch,-Math.PI*.49,Math.PI*.49),s.dist=Zu(s.dist,$0,K0),s.fov=Ge(s.fov,26,72);let r=V.cameraTarget;if(s.position)r.position.fromArray(s.position),r.rotation.set(s.pitch,s.yaw,s.roll,"YXZ");else{let a=Math.cos(s.pitch);r.position.set(s.tx+Math.sin(s.yaw)*a*s.dist,s.ty+Math.sin(s.pitch)*s.dist,s.tz+Math.cos(s.yaw)*a*s.dist),r.lookAt(s.tx,s.ty,s.tz)}r.fov=s.fov,V.control=s,V.rig.dragging=!1,V.dirty=!0}function n_(i){if(!V||(V.raf=requestAnimationFrame(n_),!V.playing&&!V.dirty&&i-V.lastRender<F1))return;let t=V.lastFrame?Math.min((i-V.lastFrame)/1e3,V.playing?.1:.25):.016;V.lastFrame=i;let e=V.prefs,n=V.time,s=V.lastTime<0||Math.abs(n-V.lastTime)>.5;V.lastTime=n,!V.warmed&&V.width>0&&(V.warmed=!0,G1());let r=up(V.playing?V.audio.raw:null,Rp,V.audio.target);s?V.audio.bins.set(r):C0(V.audio.bins,r,t);let a=Cp(V.audio.bins);s||!V.playing?V.audio.bass=s?a:ma(V.audio.bass,0,.3,t):V.audio.bass=ma(V.audio.bass,a,.1,t);let o=V.playing&&V.audio.onset?1:0;V.audio.onsetLevel=s?o:ma(V.audio.onsetLevel||0,o,o?.05:.22,t),(!e.reduced||s)&&(V.sceneTime=n);let l=Ep(V.sceneTime);V.timeline=l,V.world.setSign(l.index);let c=l.state==="gather"?Ge(l.t/di):l.state==="disperse"?Ge(l.t/va):1,h=V.rig,d=V.camera,u=!1;if(V.control){let f=V.cameraTarget,p=V.control.external?1:1-Math.exp(-t/.26);d.position.lerp(f.position,p),d.quaternion.slerp(f.quaternion,p),d.fov+=(f.fov-d.fov)*p,d.updateProjectionMatrix(),u=d.position.distanceToSquared(f.position)>1e-8||d.quaternion.angleTo(f.quaternion)>1e-4||Math.abs(d.fov-f.fov)>1e-4}else{h.drift+=t*z1*(e.reduced?.3:1)*e.speed+t*V.audio.bass*.04*(e.reduced?.3:1);let f=h.drift+h.yaw,p=Math.cos(h.pitch);d.position.set(Math.sin(f)*p*h.dist,Math.sin(h.pitch)*h.dist,Math.cos(f)*p*h.dist),d.lookAt(0,0,0);let _=ju+V.audio.bass*1.6;h.fov=s?_:ma(h.fov,_,.32,t),Math.abs(d.fov-h.fov)>.001&&(d.fov=h.fov,d.updateProjectionMatrix())}V.world.update(V.sceneTime,{bass:V.audio.bass,onset:V.audio.onsetLevel,cycle:l.cycle,reduced:e.reduced,glow:e.glow,dt:t,state:l.state,k:c,cameraPos:d.position}),V.dirty=u,V.lastRender=i,V.renderer.info.reset(),V.renderer.render(V.scene,d)}function J1(){if(!V)return null;let i=V.renderer.info;return{mounted:!0,quality:V.quality,drawCalls:i.render.calls,points:i.render.points,...V.world.stats(),geometries:i.memory.geometries,textures:i.memory.textures,programs:i.programs?i.programs.length:0,state:V.timeline.state,stateT:V.timeline.t,morph:V.timeline.state==="hold"?1:V.timeline.state==="gather"?Ge(V.timeline.t/di):Ge(V.timeline.t/va),cycleSeconds:xa,bass:V.audio.bass,onset:V.audio.onsetLevel,yaw:V.rig.drift+V.rig.yaw,dist:V.rig.dist,distDefault:V.rig.distFit,zoom:V.rig.zoom,time:V.time,playing:V.playing,warmed:!!V.warmed}}function $1(){return V?{mounted:!0,quality:V.quality,time:V.time,playing:V.playing,bass:V.audio.bass,fov:V.rig.fov,drift:V.rig.drift,yaw:V.rig.yaw,pitch:V.rig.pitch,dist:V.rig.dist,distDefault:V.rig.distFit,zoom:V.rig.zoom,timeline:{...V.timeline},controlled:!!V.control,camera:{position:V.camera.position.toArray(),direction:V.camera.getWorldDirection(new P).toArray(),quaternion:V.camera.quaternion.toArray(),fov:V.camera.fov,projection:V.camera.projectionMatrix.toArray()},prefs:{...V.prefs}}:null}function K1(){if(!V)return null;V.renderer.info.reset(),V.renderer.render(V.scene,V.camera);let i=V.renderer.getContext(),t=i.drawingBufferWidth,e=i.drawingBufferHeight,n=s=>{let r=Math.max(0,Math.min(e-1,Math.floor(e*s))),a=new Uint8Array(t*4);i.readPixels(0,r,t,1,i.RGBA,i.UNSIGNED_BYTE,a);let o=0,l=0,c=0;for(let h=0;h<a.length;h+=4)o+=a[h],l+=a[h+1],c+=a[h+2];return[Math.round(o/t),Math.round(l/t),Math.round(c/t)]};return{top:n(.8),middle:n(.5),bottom:n(.15),width:t,height:e}}var Q1={ZODIAC:yn,SIGN_COUNT:ve,GATHER_SECONDS:di,HOLD_SECONDS:xa-di-va,DISPERSE_SECONDS:va,CYCLE_SECONDS:xa,buildShape:Wu,buildCloud:dc,buildSeeds:Yu,timelineAt:Ep,transitionStyle:uc,aggregateBands:up,viewBass:Cp,zoomClamp:Zu,CONSTELLATION:Tp,buildFigureMesh:qu,buildConstellation:Xu,buildRibbon:ss,delaunay2:G0,shapeFit:Sa,FIG_HALF:ya,FIG_HALF_W:hc,FIG_ASPECT:Ws,FIGURE_DEPTH:Hu,SHAPE_BOX:O0,SHAPE_BOX_V:B0,SHAPE_BOX_Z:z0,CONSTELLATION_Z:yp,FIGURE_Z:cc,FIGURE_MESH_POINTS:fi,LINE_CORE_WIDTH:Sp,LINE_HALO_WIDTH:Mp,EDGE_CORE_WIDTH:bp,EDGE_HALO_WIDTH:Ap};return o_(j1);})();
