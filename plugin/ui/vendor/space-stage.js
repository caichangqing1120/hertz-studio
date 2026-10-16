// SPDX-License-Identifier: MIT
// Generated from tools/space-stage; rebuild with npm run build. Three.js r186.
var SpaceStagePure=(()=>{var Ed=Object.defineProperty;var g_=Object.getOwnPropertyDescriptor;var v_=Object.getOwnPropertyNames;var x_=Object.prototype.hasOwnProperty;var d0=(i,e)=>{for(var t in e)Ed(i,t,{get:e[t],enumerable:!0})},__=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of v_(e))!x_.call(i,r)&&r!==t&&Ed(i,r,{get:()=>e[r],enumerable:!(n=g_(e,r))||n.enumerable});return i};var y_=i=>__(Ed({},"__esModule",{value:!0}),i);var aE={};d0(aE,{catalog:()=>eE,create:()=>oE,effectCatalog:()=>tE,normalizeQualityMode:()=>Kf,normalizeState:()=>rE,register:()=>nE,resolveId:()=>iE});var ri={};d0(ri,{ACESFilmicToneMapping:()=>Wr,AddEquation:()=>Hr,AddOperation:()=>Wp,AdditiveAnimationBlendMode:()=>Gf,AdditiveBlending:()=>fr,AgXToneMapping:()=>aa,AlphaFormat:()=>zf,AlwaysCompare:()=>om,AlwaysDepth:()=>ll,AlwaysStencilFunc:()=>em,AmbientLight:()=>nc,AnimationAction:()=>fc,AnimationClip:()=>kr,AnimationLoader:()=>kh,AnimationMixer:()=>jh,AnimationObjectGroup:()=>Qh,AnimationUtils:()=>zh,ArcCurve:()=>Cl,ArrayCamera:()=>cc,ArrowHelper:()=>bf,AttachedBindMode:()=>_h,Audio:()=>uc,AudioAnalyser:()=>Kh,AudioContext:()=>ta,AudioListener:()=>$h,AudioLoader:()=>Yh,AxesHelper:()=>wf,BackSide:()=>dn,BasicDepthPacking:()=>Qp,BasicShadowMap:()=>Cg,BatchedMesh:()=>Sl,BezierInterpolant:()=>jl,Bone:()=>Uo,BooleanKeyframeTrack:()=>zi,Box2:()=>dc,Box3:()=>on,Box3Helper:()=>Mf,BoxGeometry:()=>En,BoxHelper:()=>yf,BufferAttribute:()=>it,BufferGeometry:()=>Ke,BufferGeometryLoader:()=>ac,ByteType:()=>Ff,Cache:()=>wi,Camera:()=>Cs,CameraHelper:()=>_f,CanvasTexture:()=>Oo,CapsuleGeometry:()=>El,CatmullRomCurve3:()=>Ms,CineonToneMapping:()=>sa,CircleGeometry:()=>xs,ClampToEdgeWrapping:()=>Fn,Clock:()=>af,Color:()=>xe,ColorKeyframeTrack:()=>Jo,ColorManagement:()=>gt,Compatibility:()=>fv,CompressedArrayTexture:()=>Fh,CompressedCubeTexture:()=>Uh,CompressedTexture:()=>vs,CompressedTextureLoader:()=>Gh,ConeGeometry:()=>$n,ConstantAlphaFactor:()=>Gp,ConstantColorFactor:()=>zp,Controls:()=>Ef,CubeCamera:()=>lc,CubeDepthTexture:()=>Tl,CubeReflectionMapping:()=>Ci,CubeRefractionMapping:()=>dr,CubeTexture:()=>Br,CubeTextureLoader:()=>Vh,CubeUVReflectionMapping:()=>Ds,CubicBezierCurve:()=>ko,CubicBezierCurve3:()=>Rl,CubicInterpolant:()=>Kl,CullFaceBack:()=>Rf,CullFaceFront:()=>bp,CullFaceFrontBack:()=>Ag,CullFaceNone:()=>Sp,Curve:()=>Jn,CurvePath:()=>Il,CustomBlending:()=>Tp,CustomToneMapping:()=>oa,CylinderGeometry:()=>hn,Cylindrical:()=>cf,Data3DTexture:()=>fs,DataArrayTexture:()=>hs,DataTexture:()=>Bn,DataTextureLoader:()=>Hh,DataUtils:()=>wh,DecrementStencilOp:()=>Wg,DecrementWrapStencilOp:()=>qg,DefaultLoadingManager:()=>hm,DepthFormat:()=>Ti,DepthStencilFormat:()=>pr,DepthTexture:()=>or,DetachedBindMode:()=>Xp,DirectionalLight:()=>Rs,DirectionalLightHelper:()=>xf,DiscreteInterpolant:()=>Ql,DodecahedronGeometry:()=>_s,DoubleSide:()=>pn,DstAlphaFactor:()=>Np,DstColorFactor:()=>Up,DynamicCopyUsage:()=>ov,DynamicDrawUsage:()=>eu,DynamicReadUsage:()=>iv,EdgesGeometry:()=>Al,EllipseCurve:()=>ys,EqualCompare:()=>im,EqualDepth:()=>ul,EqualStencilFunc:()=>Jg,EquirectangularReflectionMapping:()=>ca,EquirectangularRefractionMapping:()=>ua,Euler:()=>On,EventDispatcher:()=>Zn,ExternalTexture:()=>zo,ExtrudeGeometry:()=>Fl,FileLoader:()=>vi,Float16BufferAttribute:()=>Ph,Float32BufferAttribute:()=>Ue,FloatType:()=>wn,Fog:()=>gl,FogExp2:()=>ms,FramebufferTexture:()=>Nh,FrontSide:()=>hr,Frustum:()=>Bi,FrustumArray:()=>Ml,GLBufferAttribute:()=>sf,GLSL1:()=>lv,GLSL3:()=>Vf,GreaterCompare:()=>rm,GreaterDepth:()=>fl,GreaterEqualCompare:()=>jc,GreaterEqualDepth:()=>hl,GreaterEqualStencilFunc:()=>ev,GreaterStencilFunc:()=>Qg,GridHelper:()=>gf,Group:()=>Un,HTMLTexture:()=>Bh,HalfFloatType:()=>nn,HemisphereLight:()=>Es,HemisphereLightHelper:()=>mf,IcosahedronGeometry:()=>bs,ImageBitmapLoader:()=>qh,ImageLoader:()=>Gr,ImageUtils:()=>ml,IncrementStencilOp:()=>Hg,IncrementWrapStencilOp:()=>Xg,InstancedBufferAttribute:()=>mi,InstancedBufferGeometry:()=>oc,InstancedInterleavedBuffer:()=>rf,InstancedMesh:()=>Ui,Int16BufferAttribute:()=>Ch,Int32BufferAttribute:()=>Rh,Int8BufferAttribute:()=>Th,IntType:()=>mc,InterleavedBuffer:()=>Ur,InterleavedBufferAttribute:()=>rr,Interpolant:()=>cr,InterpolateBezier:()=>yh,InterpolateDiscrete:()=>Eo,InterpolateLinear:()=>pl,InterpolateSmooth:()=>tl,InterpolationSamplingMode:()=>hv,InterpolationSamplingType:()=>uv,InvertStencilOp:()=>Yg,KeepStencilOp:()=>nl,KeyframeTrack:()=>kn,LOD:()=>xl,LatheGeometry:()=>Ul,Layers:()=>ds,LessCompare:()=>nm,LessDepth:()=>cl,LessEqualCompare:()=>Qc,LessEqualDepth:()=>cs,LessEqualStencilFunc:()=>Kg,LessStencilFunc:()=>$g,Light:()=>Ai,LightProbe:()=>rc,LightShadow:()=>As,Line:()=>Ei,Line3:()=>hf,LineBasicMaterial:()=>un,LineCurve:()=>Go,LineCurve3:()=>Pl,LineDashedMaterial:()=>Jl,LineLoop:()=>bl,LineSegments:()=>ti,LinearFilter:()=>Ut,LinearInterpolant:()=>$o,LinearMipMapLinearFilter:()=>Dg,LinearMipMapNearestFilter:()=>Lg,LinearMipmapLinearFilter:()=>Ri,LinearMipmapNearestFilter:()=>ha,LinearSRGBColorSpace:()=>Co,LinearToneMapping:()=>ia,LinearTransfer:()=>Ro,Loader:()=>mn,LoaderUtils:()=>ea,LoadingManager:()=>Qo,LoopOnce:()=>qp,LoopPingPong:()=>Zp,LoopRepeat:()=>Yp,MOUSE:()=>Tg,Material:()=>tn,MaterialBlending:()=>Rg,MaterialLoader:()=>sc,MathUtils:()=>Hf,Matrix2:()=>uf,Matrix3:()=>rt,Matrix4:()=>je,MaxEquation:()=>Rp,Mesh:()=>nt,MeshBasicMaterial:()=>zn,MeshDepthMaterial:()=>Yo,MeshDistanceMaterial:()=>Zo,MeshLambertMaterial:()=>Zl,MeshMatcapMaterial:()=>$l,MeshNormalMaterial:()=>Yl,MeshPhongMaterial:()=>Xl,MeshPhysicalMaterial:()=>Wl,MeshStandardMaterial:()=>Pt,MeshToonMaterial:()=>ql,MinEquation:()=>Cp,MirroredRepeatWrapping:()=>To,MixOperation:()=>Hp,MultiplyBlending:()=>If,MultiplyOperation:()=>na,NearestFilter:()=>qt,NearestMipMapLinearFilter:()=>Ig,NearestMipMapNearestFilter:()=>Pg,NearestMipmapLinearFilter:()=>Ns,NearestMipmapNearestFilter:()=>Nf,NeutralToneMapping:()=>la,NeverCompare:()=>tm,NeverDepth:()=>al,NeverStencilFunc:()=>Zg,NoBlending:()=>ni,NoColorSpace:()=>Hi,NoNormalPacking:()=>Og,NoToneMapping:()=>gn,NormalAnimationBlendMode:()=>Kc,NormalBlending:()=>Ls,NormalGAPacking:()=>kg,NormalRGPacking:()=>zg,NotEqualCompare:()=>sm,NotEqualDepth:()=>dl,NotEqualStencilFunc:()=>jg,NumberKeyframeTrack:()=>ws,Object3D:()=>bt,ObjectLoader:()=>Xh,ObjectSpaceNormalMap:()=>jp,OctahedronGeometry:()=>qo,OneFactor:()=>Ip,OneMinusConstantAlphaFactor:()=>Vp,OneMinusConstantColorFactor:()=>kp,OneMinusDstAlphaFactor:()=>Fp,OneMinusDstColorFactor:()=>Bp,OneMinusSrcAlphaFactor:()=>Df,OneMinusSrcColorFactor:()=>Dp,OrthographicCamera:()=>Gi,PCFShadowMap:()=>Vr,PCFSoftShadowMap:()=>wp,PMREMGenerator:()=>ks,Path:()=>Or,PerspectiveCamera:()=>Nt,Plane:()=>fi,PlaneGeometry:()=>Oi,PlaneHelper:()=>Sf,PointLight:()=>ur,PointLightHelper:()=>pf,Points:()=>gs,PointsMaterial:()=>Bo,PolarGridHelper:()=>vf,PolyhedronGeometry:()=>ar,PositionalAudio:()=>Jh,PropertyBinding:()=>At,PropertyMixer:()=>hc,QuadraticBezierCurve:()=>Vo,QuadraticBezierCurve3:()=>Ho,Quaternion:()=>Xt,QuaternionKeyframeTrack:()=>Ts,QuaternionLinearInterpolant:()=>ec,R11_EAC_Format:()=>Cc,RED_GREEN_RGTC2_Format:()=>xa,RED_RGTC1_Format:()=>Zc,REVISION:()=>Mp,RG11_EAC_Format:()=>va,RGBADepthPacking:()=>Fg,RGBAFormat:()=>Tn,RGBAIntegerFormat:()=>yc,RGBA_ASTC_10x10_Format:()=>Vc,RGBA_ASTC_10x5_Format:()=>zc,RGBA_ASTC_10x6_Format:()=>kc,RGBA_ASTC_10x8_Format:()=>Gc,RGBA_ASTC_12x10_Format:()=>Hc,RGBA_ASTC_12x12_Format:()=>Wc,RGBA_ASTC_4x4_Format:()=>Ic,RGBA_ASTC_5x4_Format:()=>Lc,RGBA_ASTC_5x5_Format:()=>Dc,RGBA_ASTC_6x5_Format:()=>Nc,RGBA_ASTC_6x6_Format:()=>Fc,RGBA_ASTC_8x5_Format:()=>Uc,RGBA_ASTC_8x6_Format:()=>Bc,RGBA_ASTC_8x8_Format:()=>Oc,RGBA_BPTC_Format:()=>Xc,RGBA_ETC2_EAC_Format:()=>Ac,RGBA_PVRTC_2BPPV1_Format:()=>wc,RGBA_PVRTC_4BPPV1_Format:()=>bc,RGBA_S3TC_DXT1_Format:()=>pa,RGBA_S3TC_DXT3_Format:()=>ma,RGBA_S3TC_DXT5_Format:()=>ga,RGBDepthPacking:()=>Ug,RGBFormat:()=>kf,RGBIntegerFormat:()=>Ng,RGB_BPTC_SIGNED_Format:()=>qc,RGB_BPTC_UNSIGNED_Format:()=>Yc,RGB_ETC1_Format:()=>Tc,RGB_ETC2_Format:()=>Ec,RGB_PVRTC_2BPPV1_Format:()=>Sc,RGB_PVRTC_4BPPV1_Format:()=>Mc,RGB_S3TC_DXT1_Format:()=>da,RGDepthPacking:()=>Bg,RGFormat:()=>mr,RGIntegerFormat:()=>_c,RawShaderMaterial:()=>zr,Ray:()=>sr,Raycaster:()=>of,RectAreaLight:()=>ic,RedFormat:()=>xc,RedIntegerFormat:()=>fa,ReinhardToneMapping:()=>ra,RenderObjectRefreshType:()=>dv,RenderTarget:()=>Lo,RenderTarget3D:()=>ef,RepeatWrapping:()=>Dr,ReplaceStencilOp:()=>Vg,ReverseSubtractEquation:()=>Ap,RingGeometry:()=>Bl,SIGNED_R11_EAC_Format:()=>Rc,SIGNED_RED_GREEN_RGTC2_Format:()=>Jc,SIGNED_RED_RGTC1_Format:()=>$c,SIGNED_RG11_EAC_Format:()=>Pc,SRGBColorSpace:()=>Qt,SRGBTransfer:()=>St,Scene:()=>ei,ShaderChunk:()=>pt,ShaderLib:()=>Pi,ShaderMaterial:()=>Rt,ShadowMaterial:()=>Hl,Shape:()=>gi,ShapeGeometry:()=>lr,ShapePath:()=>Tf,ShapeUtils:()=>pi,ShortType:()=>Uf,Skeleton:()=>yl,SkeletonHelper:()=>df,SkinnedMesh:()=>_l,Source:()=>Mh,Sphere:()=>en,SphereGeometry:()=>fn,Spherical:()=>lf,SphericalHarmonics3:()=>jo,SplineCurve:()=>Wo,SpotLight:()=>tc,SpotLightHelper:()=>ff,Sprite:()=>vl,SpriteMaterial:()=>Fo,SrcAlphaFactor:()=>Lf,SrcAlphaSaturateFactor:()=>Op,SrcColorFactor:()=>Lp,StaticCopyUsage:()=>sv,StaticDrawUsage:()=>Bs,StaticReadUsage:()=>nv,StereoCamera:()=>Zh,StreamCopyUsage:()=>av,StreamDrawUsage:()=>tv,StreamReadUsage:()=>rv,StringKeyframeTrack:()=>ki,SubtractEquation:()=>Ep,SubtractiveBlending:()=>Pf,TOUCH:()=>Eg,TangentSpaceNormalMap:()=>Vi,TetrahedronGeometry:()=>Ol,Texture:()=>Yt,TextureLoader:()=>Wh,TextureSource:()=>di,TextureUtils:()=>Af,Timer:()=>Ps,TimestampQuery:()=>cv,TorusGeometry:()=>zl,TorusKnotGeometry:()=>kl,Triangle:()=>bi,TriangleFanDrawMode:()=>Kp,TriangleStripDrawMode:()=>Jp,TrianglesDrawMode:()=>$p,TubeGeometry:()=>Gl,UVMapping:()=>pc,Uint16BufferAttribute:()=>Do,Uint32BufferAttribute:()=>No,Uint8BufferAttribute:()=>Eh,Uint8ClampedBufferAttribute:()=>Ah,Uniform:()=>tf,UniformsGroup:()=>nf,UniformsLib:()=>Oe,UniformsUtils:()=>Wi,UnsignedByteType:()=>Gn,UnsignedInt101111Type:()=>Of,UnsignedInt248Type:()=>Us,UnsignedInt5999Type:()=>Bf,UnsignedIntType:()=>ii,UnsignedShort4444Type:()=>gc,UnsignedShort5551Type:()=>vc,UnsignedShortType:()=>Fs,VSMShadowMap:()=>Is,Vector2:()=>le,Vector3:()=>R,Vector4:()=>Ct,VectorKeyframeTrack:()=>Ko,VideoFrameTexture:()=>Dh,VideoTexture:()=>wl,WebGL3DRenderTarget:()=>bh,WebGLArrayRenderTarget:()=>Sh,WebGLCoordinateSystem:()=>Yn,WebGLCubeRenderTarget:()=>ru,WebGLRenderTarget:()=>Bt,WebGLRenderer:()=>gr,WebGLUtils:()=>ix,WebGPUCoordinateSystem:()=>Nr,WebXRController:()=>ps,WireframeGeometry:()=>Vl,WrapAroundEnding:()=>Ao,ZeroCurvatureEnding:()=>Ir,ZeroFactor:()=>Pp,ZeroSlopeEnding:()=>Lr,ZeroStencilOp:()=>Gg,createCanvasElement:()=>am,error:()=>Je,getConsoleFunction:()=>gv,log:()=>Io,setConsoleFunction:()=>mv,warn:()=>Ne,warnOnce:()=>Fi});var Mp="186",Tg={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Eg={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sp=0,Rf=1,bp=2,Ag=3,Cg=0,Vr=1,wp=2,Is=3,hr=0,dn=1,pn=2,ni=0,Ls=1,fr=2,Pf=3,If=4,Tp=5,Rg=6,Hr=100,Ep=101,Ap=102,Cp=103,Rp=104,Pp=200,Ip=201,Lp=202,Dp=203,Lf=204,Df=205,Np=206,Fp=207,Up=208,Bp=209,Op=210,zp=211,kp=212,Gp=213,Vp=214,al=0,ll=1,cl=2,cs=3,ul=4,hl=5,fl=6,dl=7,na=0,Hp=1,Wp=2,gn=0,ia=1,ra=2,sa=3,Wr=4,oa=5,aa=6,la=7,_h="attached",Xp="detached",pc=300,Ci=301,dr=302,ca=303,ua=304,Ds=306,Dr=1e3,Fn=1001,To=1002,qt=1003,Nf=1004,Pg=1004,Ns=1005,Ig=1005,Ut=1006,ha=1007,Lg=1007,Ri=1008,Dg=1008,Gn=1009,Ff=1010,Uf=1011,Fs=1012,mc=1013,ii=1014,wn=1015,nn=1016,gc=1017,vc=1018,Us=1020,Bf=35902,Of=35899,zf=1021,kf=1022,Tn=1023,Ti=1026,pr=1027,xc=1028,fa=1029,mr=1030,_c=1031,Ng=1032,yc=1033,da=33776,pa=33777,ma=33778,ga=33779,Mc=35840,Sc=35841,bc=35842,wc=35843,Tc=36196,Ec=37492,Ac=37496,Cc=37488,Rc=37489,va=37490,Pc=37491,Ic=37808,Lc=37809,Dc=37810,Nc=37811,Fc=37812,Uc=37813,Bc=37814,Oc=37815,zc=37816,kc=37817,Gc=37818,Vc=37819,Hc=37820,Wc=37821,Xc=36492,qc=36494,Yc=36495,Zc=36283,$c=36284,xa=36285,Jc=36286,qp=2200,Yp=2201,Zp=2202,Eo=2300,pl=2301,tl=2302,yh=2303,Ir=2400,Lr=2401,Ao=2402,Kc=2500,Gf=2501,$p=0,Jp=1,Kp=2,Qp=3200,Fg=3201,Ug=3202,Bg=3203,Vi=0,jp=1,Hi="",Qt="srgb",Co="srgb-linear",Ro="linear",St="srgb",Og="",zg="rg",kg="ga",Gg=0,nl=7680,Vg=7681,Hg=7682,Wg=7683,Xg=34055,qg=34056,Yg=5386,Zg=512,$g=513,Jg=514,Kg=515,Qg=516,jg=517,ev=518,em=519,tm=512,nm=513,im=514,Qc=515,rm=516,sm=517,jc=518,om=519,Bs=35044,eu=35048,tv=35040,nv=35045,iv=35049,rv=35041,sv=35046,ov=35050,av=35042,lv="100",Vf="300 es",Yn=2e3,Nr=2001,cv={COMPUTE:"compute",RENDER:"render"},uv={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},hv={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},fv={TEXTURE_COMPARE:"depthTextureCompare"},dv={NONE:0,SHARED:1,FULL:2};function M_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}var S_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function bo(i,e){return new S_[i](e)}function pv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Po(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function am(){let i=Po("canvas");return i.style.display="block",i}var p0={},Fr=null;function mv(i){Fr=i}function gv(){return Fr}function Io(...i){let e="THREE."+i.shift();Fr?Fr("log",e,...i):console.log(e,...i)}function vv(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ne(...i){i=vv(i);let e="THREE."+i.shift();if(Fr)Fr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Je(...i){i=vv(i);let e="THREE."+i.shift();if(Fr)Fr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Fi(...i){let e=i.join(" ");e in p0||(p0[e]=!0,Ne(...i))}function xv(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var _v={[al]:ll,[cl]:fl,[ul]:dl,[cs]:hl,[ll]:al,[fl]:cl,[dl]:ul,[hl]:cs},Zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],m0=1234567,ls=Math.PI/180,us=180/Math.PI;function jn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function lm(i,e){return(i%e+e)%e}function b_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function w_(i,e,t){return i!==e?(t-i)/(e-i):0}function il(i,e,t){return(1-t)*i+t*e}function T_(i,e,t,n){return il(i,e,1-Math.exp(-t*n))}function E_(i,e=1){return e-Math.abs(lm(i,e*2)-e)}function A_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function C_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function R_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function P_(i,e){return i+Math.random()*(e-i)}function I_(i){return i*(.5-Math.random())}function L_(i){i!==void 0&&(m0=i);let e=m0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function D_(i){return i*ls}function N_(i){return i*us}function F_(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function U_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function B_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function O_(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),d=s((n-e)/2),p=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*p,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*p,a*c);break;case"ZYZ":i.set(l*p,l*d,a*u,a*c);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Hf={DEG2RAD:ls,RAD2DEG:us,generateUUID:jn,clamp:tt,euclideanModulo:lm,mapLinear:b_,inverseLerp:w_,lerp:il,damp:T_,pingpong:E_,smoothstep:A_,smootherstep:C_,randInt:R_,randFloat:P_,randFloatSpread:I_,seededRandom:L_,degToRad:D_,radToDeg:N_,isPowerOfTwo:F_,ceilPowerOfTwo:U_,floorPowerOfTwo:B_,setQuaternionFromProperEuler:O_,normalize:ft,denormalize:Nn},pm=class pm{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pm.prototype.isVector2=!0;var le=pm,Xt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3],h=s[o+0],d=s[o+1],p=s[o+2],v=s[o+3];if(f!==v||l!==h||c!==d||u!==p){let g=l*h+c*d+u*p+f*v;g<0&&(h=-h,d=-d,p=-p,v=-v,g=-g);let m=1-a;if(g<.9995){let _=Math.acos(g),y=Math.sin(_);m=Math.sin(m*_)/y,a=Math.sin(a*_)/y,l=l*m+h*a,c=c*m+d*a,u=u*m+p*a,f=f*m+v*a}else{l=l*m+h*a,c=c*m+d*a,u=u*m+p*a,f=f*m+v*a;let _=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=_,c*=_,u*=_,f*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],d=s[o+2],p=s[o+3];return e[t]=a*p+u*f+l*d-c*h,e[t+1]=l*p+u*h+c*f-a*d,e[t+2]=c*p+u*d+a*h-l*f,e[t+3]=u*p-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),d=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"YZX":this._x=h*u*f+c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f-h*d*p;break;case"XZY":this._x=h*u*f-c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f+h*d*p;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},mm=class mm{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(g0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(g0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ad.copy(this).projectOnVector(e),this.sub(Ad)}reflect(e){return this.sub(Ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mm.prototype.isVector3=!0;var R=mm,Ad=new R,g0=new Xt,gm=class gm{constructor(e,t,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],p=n[8],v=r[0],g=r[3],m=r[6],_=r[1],y=r[4],x=r[7],S=r[2],b=r[5],C=r[8];return s[0]=o*v+a*_+l*S,s[3]=o*g+a*y+l*b,s[6]=o*m+a*x+l*C,s[1]=c*v+u*_+f*S,s[4]=c*g+u*y+f*b,s[7]=c*m+u*x+f*C,s[2]=h*v+d*_+p*S,s[5]=h*g+d*y+p*b,s[8]=h*m+d*x+p*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,p=t*f+n*h+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=f*v,e[1]=(r*c-u*n)*v,e[2]=(a*n-r*o)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Fi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cd.makeScale(e,t)),this}rotate(e){return Fi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cd.makeRotation(-e)),this}translate(e,t){return Fi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gm.prototype.isMatrix3=!0;var rt=gm,Cd=new rt,v0=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),x0=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function z_(){let i={enabled:!0,workingColorSpace:Co,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===St&&(r.r=ir(r.r),r.g=ir(r.g),r.b=ir(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(r.r=wo(r.r),r.g=wo(r.g),r.b=wo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Hi?Ro:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Fi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Fi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Co]:{primaries:e,whitePoint:n,transfer:Ro,toXYZ:v0,fromXYZ:x0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:n,transfer:St,toXYZ:v0,fromXYZ:x0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),i}var gt=z_();function ir(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var no,ml=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{no===void 0&&(no=Po("canvas")),no.width=e.width,no.height=e.height;let r=no.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=no}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Po("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ir(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ir(t[n]/255)*255):t[n]=ir(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},k_=0,di=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rd(r[o].image)):s.push(Rd(r[o]))}else s=Rd(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Rd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ml.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var Mh=class extends di{constructor(e=null){Fi('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(e),this.isSource=!0}},G_=0,Pd=new R,Yt=class i extends Zn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Fn,r=Fn,s=Ut,o=Ri,a=Tn,l=Gn,c=i.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=jn(),this.name="",this.source=new di(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pd).x}get height(){return this.source.getSize(Pd).y}get depth(){return this.source.getSize(Pd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dr:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case To:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dr:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case To:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=pc;Yt.DEFAULT_ANISOTROPY=1;var vm=class vm{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,x=(d+1)/2,S=(m+1)/2,b=(u+h)/4,C=(f+v)/4,M=(p+g)/4;return y>x&&y>S?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=b/n,s=C/n):x>S?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=b/r,s=M/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=C/s,r=M/s),this.set(n,r,s,t),this}let _=Math.sqrt((g-p)*(g-p)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(f-v)/_,this.z=(h-u)/_,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vm.prototype.isVector4=!0;var Ct=vm,Lo=class extends Zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new Yt(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new di(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bt=class extends Lo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},hs=class extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Sh=class extends Bt{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new hs(null,e,t,n),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}},fs=class extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},bh=class extends Bt{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new fs(null,e,t,n),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}},Cf=class Cf{constructor(e,t,n,r,s,o,a,l,c,u,f,h,d,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,h,d,p,v,g)}set(e,t,n,r,s,o,a,l,c,u,f,h,d,p,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cf().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/io.setFromMatrixColumn(e,0).length(),s=1/io.setFromMatrixColumn(e,1).length(),o=1/io.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let h=o*u,d=o*f,p=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,d=l*f,p=c*u,v=c*f;t[0]=h+v*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,d=l*f,p=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,d=o*f,p=a*u,v=a*f;t[0]=l*u,t[4]=p*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,d=o*c,p=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=p*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+p,t[10]=h-v*f}else if(e.order==="XZY"){let h=o*l,d=o*c,p=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=d*f-p,t[2]=p*f-d,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V_,e,H_)}lookAt(e,t,n){let r=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Tr.crossVectors(n,Kn),Tr.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Tr.crossVectors(n,Kn)),Tr.normalize(),Pu.crossVectors(Kn,Tr),r[0]=Tr.x,r[4]=Pu.x,r[8]=Kn.x,r[1]=Tr.y,r[5]=Pu.y,r[9]=Kn.y,r[2]=Tr.z,r[6]=Pu.z,r[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],p=n[2],v=n[6],g=n[10],m=n[14],_=n[3],y=n[7],x=n[11],S=n[15],b=r[0],C=r[4],M=r[8],T=r[12],E=r[1],I=r[5],D=r[9],U=r[13],N=r[2],L=r[6],F=r[10],G=r[14],Q=r[3],q=r[7],Z=r[11],K=r[15];return s[0]=o*b+a*E+l*N+c*Q,s[4]=o*C+a*I+l*L+c*q,s[8]=o*M+a*D+l*F+c*Z,s[12]=o*T+a*U+l*G+c*K,s[1]=u*b+f*E+h*N+d*Q,s[5]=u*C+f*I+h*L+d*q,s[9]=u*M+f*D+h*F+d*Z,s[13]=u*T+f*U+h*G+d*K,s[2]=p*b+v*E+g*N+m*Q,s[6]=p*C+v*I+g*L+m*q,s[10]=p*M+v*D+g*F+m*Z,s[14]=p*T+v*U+g*G+m*K,s[3]=_*b+y*E+x*N+S*Q,s[7]=_*C+y*I+x*L+S*q,s[11]=_*M+y*D+x*F+S*Z,s[15]=_*T+y*U+x*G+S*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],p=e[3],v=e[7],g=e[11],m=e[15],_=l*d-c*h,y=a*d-c*f,x=a*h-l*f,S=o*d-c*u,b=o*h-l*u,C=o*f-a*u;return t*(v*_-g*y+m*x)-n*(p*_-g*S+m*b)+r*(p*y-v*S+m*C)-s*(p*x-v*b+g*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(s*u-a*l)+r*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],p=e[12],v=e[13],g=e[14],m=e[15],_=t*a-n*o,y=t*l-r*o,x=t*c-s*o,S=n*l-r*a,b=n*c-s*a,C=r*c-s*l,M=u*v-f*p,T=u*g-h*p,E=u*m-d*p,I=f*g-h*v,D=f*m-d*v,U=h*m-d*g,N=_*U-y*D+x*I+S*E-b*T+C*M;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/N;return e[0]=(a*U-l*D+c*I)*L,e[1]=(r*D-n*U-s*I)*L,e[2]=(v*C-g*b+m*S)*L,e[3]=(h*b-f*C-d*S)*L,e[4]=(l*E-o*U-c*T)*L,e[5]=(t*U-r*E+s*T)*L,e[6]=(g*x-p*C-m*y)*L,e[7]=(u*C-h*x+d*y)*L,e[8]=(o*D-a*E+c*M)*L,e[9]=(n*E-t*D-s*M)*L,e[10]=(p*b-v*x+m*_)*L,e[11]=(f*x-u*b-d*_)*L,e[12]=(a*T-o*I-l*M)*L,e[13]=(t*I-n*T+r*M)*L,e[14]=(v*y-p*S-g*_)*L,e[15]=(u*S-f*y+h*_)*L,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,p=s*f,v=o*u,g=o*f,m=a*f,_=l*c,y=l*u,x=l*f,S=n.x,b=n.y,C=n.z;return r[0]=(1-(v+m))*S,r[1]=(d+x)*S,r[2]=(p-y)*S,r[3]=0,r[4]=(d-x)*b,r[5]=(1-(h+m))*b,r[6]=(g+_)*b,r[7]=0,r[8]=(p+y)*C,r[9]=(g-_)*C,r[10]=(1-(h+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=io.set(r[0],r[1],r[2]).length(),a=io.set(r[4],r[5],r[6]).length(),l=io.set(r[8],r[9],r[10]).length();s<0&&(o=-o),_i.copy(this);let c=1/o,u=1/a,f=1/l;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=u,_i.elements[5]*=u,_i.elements[6]*=u,_i.elements[8]*=f,_i.elements[9]*=f,_i.elements[10]*=f,t.setFromRotationMatrix(_i),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=Yn,l=!1){let c=this.elements,u=2*s/(t-e),f=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r),p,v;if(l)p=s/(o-s),v=o*s/(o-s);else if(a===Yn)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Nr)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Yn,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-r),h=-(t+e)/(t-e),d=-(n+r)/(n-r),p,v;if(l)p=1/(o-s),v=o/(o-s);else if(a===Yn)p=-2/(o-s),v=-(o+s)/(o-s);else if(a===Nr)p=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Cf.prototype.isMatrix4=!0;var je=Cf,io=new R,_i=new je,V_=new R(0,0,0),H_=new R(1,1,1),Tr=new R,Pu=new R,Kn=new R,_0=new je,y0=new Xt,On=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return y0.setFromEuler(this),this.setFromQuaternion(y0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var ds=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},W_=0,M0=new R,ro=new Xt,Ji=new je,Iu=new R,Ga=new R,X_=new R,q_=new Xt,S0=new R(1,0,0),b0=new R(0,1,0),w0=new R(0,0,1),T0={type:"added"},Y_={type:"removed"},so={type:"childadded",child:null},Id={type:"childremoved",child:null},bt=class i extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new On,n=new Xt,r=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new je},normalMatrix:{value:new rt}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.multiply(ro),this}rotateOnWorldAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.premultiply(ro),this}rotateX(e){return this.rotateOnAxis(S0,e)}rotateY(e){return this.rotateOnAxis(b0,e)}rotateZ(e){return this.rotateOnAxis(w0,e)}translateOnAxis(e,t){return M0.copy(e).applyQuaternion(this.quaternion),this.position.add(M0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(S0,e)}translateY(e){return this.translateOnAxis(b0,e)}translateZ(e){return this.translateOnAxis(w0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Iu.copy(e):Iu.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Ga,Iu,this.up):Ji.lookAt(Iu,Ga,this.up),this.quaternion.setFromRotationMatrix(Ji),r&&(Ji.extractRotation(r.matrixWorld),ro.setFromRotationMatrix(Ji),this.quaternion.premultiply(ro.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(T0),so.child=e,this.dispatchEvent(so),so.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y_),Id.child=e,this.dispatchEvent(Id),Id.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(T0),so.child=e,this.dispatchEvent(so),so.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,X_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,q_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bt.DEFAULT_UP=new R(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Un=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Z_={type:"move"},ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Z_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},yv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},Lu={h:0,s:0,l:0};function Ld(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=gt.workingColorSpace){if(e=lm(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ld(o,s,e+1/3),this.g=Ld(o,s,e),this.b=Ld(o,s,e-1/3)}return gt.colorSpaceToWorking(this,r),this}setStyle(e,t=Qt){function n(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){let n=yv[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=wo(e.r),this.g=wo(e.g),this.b=wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return gt.workingToColorSpace(Sn.copy(this),e),Math.round(tt(Sn.r*255,0,255))*65536+Math.round(tt(Sn.g*255,0,255))*256+Math.round(tt(Sn.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(Sn.copy(this),t);let n=Sn.r,r=Sn.g,s=Sn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Qt){gt.workingToColorSpace(Sn.copy(this),e);let t=Sn.r,n=Sn.g,r=Sn.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+t,Er.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Er),e.getHSL(Lu);let n=il(Er.h,Lu.h,t),r=il(Er.s,Lu.s,t),s=il(Er.l,Lu.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new xe;xe.NAMES=yv;var ms=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},gl=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ei=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},yi=new R,Ki=new R,Dd=new R,Qi=new R,oo=new R,ao=new R,E0=new R,Nd=new R,Fd=new R,Ud=new R,Bd=new Ct,Od=new Ct,zd=new Ct,bi=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),yi.subVectors(e,t),r.cross(yi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){yi.subVectors(r,t),Ki.subVectors(n,t),Dd.subVectors(e,t);let o=yi.dot(yi),a=yi.dot(Ki),l=yi.dot(Dd),c=Ki.dot(Ki),u=Ki.dot(Dd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let h=1/f,d=(c*l-a*u)*h,p=(o*u-a*l)*h;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qi.x),l.addScaledVector(o,Qi.y),l.addScaledVector(a,Qi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Bd.setScalar(0),Od.setScalar(0),zd.setScalar(0),Bd.fromBufferAttribute(e,t),Od.fromBufferAttribute(e,n),zd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Bd,s.x),o.addScaledVector(Od,s.y),o.addScaledVector(zd,s.z),o}static isFrontFacing(e,t,n,r){return yi.subVectors(n,t),Ki.subVectors(e,t),yi.cross(Ki).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),yi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;oo.subVectors(r,n),ao.subVectors(s,n),Nd.subVectors(e,n);let l=oo.dot(Nd),c=ao.dot(Nd);if(l<=0&&c<=0)return t.copy(n);Fd.subVectors(e,r);let u=oo.dot(Fd),f=ao.dot(Fd);if(u>=0&&f<=u)return t.copy(r);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(oo,o);Ud.subVectors(e,s);let d=oo.dot(Ud),p=ao.dot(Ud);if(p>=0&&d<=p)return t.copy(s);let v=d*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(ao,a);let g=u*p-d*f;if(g<=0&&f-u>=0&&d-p>=0)return E0.subVectors(s,r),a=(f-u)/(f-u+(d-p)),t.copy(r).addScaledVector(E0,a);let m=1/(g+v+h);return o=v*m,a=h*m,t.copy(n).addScaledVector(oo,o).addScaledVector(ao,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},on=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mi):Mi.fromBufferAttribute(s,o),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Du.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Du.copy(n.boundingBox)),Du.applyMatrix4(e.matrixWorld),this.union(Du)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Va),Nu.subVectors(this.max,Va),lo.subVectors(e.a,Va),co.subVectors(e.b,Va),uo.subVectors(e.c,Va),Ar.subVectors(co,lo),Cr.subVectors(uo,co),Jr.subVectors(lo,uo);let t=[0,-Ar.z,Ar.y,0,-Cr.z,Cr.y,0,-Jr.z,Jr.y,Ar.z,0,-Ar.x,Cr.z,0,-Cr.x,Jr.z,0,-Jr.x,-Ar.y,Ar.x,0,-Cr.y,Cr.x,0,-Jr.y,Jr.x,0];return!kd(t,lo,co,uo,Nu)||(t=[1,0,0,0,1,0,0,0,1],!kd(t,lo,co,uo,Nu))?!1:(Fu.crossVectors(Ar,Cr),t=[Fu.x,Fu.y,Fu.z],kd(t,lo,co,uo,Nu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ji=[new R,new R,new R,new R,new R,new R,new R,new R],Mi=new R,Du=new on,lo=new R,co=new R,uo=new R,Ar=new R,Cr=new R,Jr=new R,Va=new R,Nu=new R,Fu=new R,Kr=new R;function kd(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Kr.fromArray(i,s);let a=r.x*Math.abs(Kr.x)+r.y*Math.abs(Kr.y)+r.z*Math.abs(Kr.z),l=e.dot(Kr),c=t.dot(Kr),u=n.dot(Kr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var nr=$_();function $_(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}let s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function qn(i){Math.abs(i)>65504&&Ne("DataUtils.toHalfFloat(): Value out of range."),i=tt(i,-65504,65504),nr.floatView[0]=i;let e=nr.uint32View[0],t=e>>23&511;return nr.baseTable[t]+((e&8388607)>>nr.shiftTable[t])}function ja(i){let e=i>>10;return nr.uint32View[0]=nr.mantissaTable[nr.offsetTable[e]+(i&1023)]+nr.exponentTable[e],nr.floatView[0]}var wh=class{static toHalfFloat(e){return qn(e)}static fromHalfFloat(e){return ja(e)}},jt=new R,Uu=new le,J_=0,it=class extends Zn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:J_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bs,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Uu.fromBufferAttribute(this,t),Uu.applyMatrix3(e),this.setXY(t,Uu.x,Uu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},Th=class extends it{constructor(e,t,n){super(new Int8Array(e),t,n)}},Eh=class extends it{constructor(e,t,n){super(new Uint8Array(e),t,n)}},Ah=class extends it{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}},Ch=class extends it{constructor(e,t,n){super(new Int16Array(e),t,n)}},Do=class extends it{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Rh=class extends it{constructor(e,t,n){super(new Int32Array(e),t,n)}},No=class extends it{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ph=class extends it{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=ja(this.array[e*this.itemSize]);return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=qn(t),this}getY(e){let t=ja(this.array[e*this.itemSize+1]);return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=qn(t),this}getZ(e){let t=ja(this.array[e*this.itemSize+2]);return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=qn(t),this}getW(e){let t=ja(this.array[e*this.itemSize+3]);return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=qn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=qn(t),this.array[e+1]=qn(n),this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array)),this.array[e+0]=qn(t),this.array[e+1]=qn(n),this.array[e+2]=qn(r),this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.array[e+0]=qn(t),this.array[e+1]=qn(n),this.array[e+2]=qn(r),this.array[e+3]=qn(s),this}},Ue=class extends it{constructor(e,t,n){super(new Float32Array(e),t,n)}},K_=new on,Ha=new R,Gd=new R,en=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):K_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ha.subVectors(e,this.center);let t=Ha.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ha,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ha.copy(e.center).add(Gd)),this.expandByPoint(Ha.copy(e.center).sub(Gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Q_=0,hi=new je,Vd=new bt,ho=new R,Qn=new on,Wa=new on,cn=new R,Ke=class i extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(M_(e)?No:Do)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,n){return hi.makeTranslation(e,t,n),this.applyMatrix4(hi),this}scale(e,t,n){return hi.makeScale(e,t,n),this.applyMatrix4(hi),this}lookAt(e){return Vd.lookAt(e),Vd.updateMatrix(),this.applyMatrix4(Vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ue(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Qn.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new en);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Wa.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(Qn.min,Wa.min),Qn.expandByPoint(cn),cn.addVectors(Qn.max,Wa.max),Qn.expandByPoint(cn)):(Qn.expandByPoint(Wa.min),Qn.expandByPoint(Wa.max))}Qn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)cn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(cn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)cn.fromBufferAttribute(a,c),l&&(ho.fromBufferAttribute(e,c),cn.add(ho)),r=Math.max(r,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new it(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new R,l[M]=new R;let c=new R,u=new R,f=new R,h=new le,d=new le,p=new le,v=new R,g=new R;function m(M,T,E){c.fromBufferAttribute(n,M),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,E),h.fromBufferAttribute(s,M),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,E),u.sub(c),f.sub(c),d.sub(h),p.sub(h);let I=1/(d.x*p.y-p.x*d.y);isFinite(I)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(I),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(I),a[M].add(v),a[T].add(v),a[E].add(v),l[M].add(g),l[T].add(g),l[E].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let M=0,T=_.length;M<T;++M){let E=_[M],I=E.start,D=E.count;for(let U=I,N=I+D;U<N;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let y=new R,x=new R,S=new R,b=new R;function C(M){S.fromBufferAttribute(r,M),b.copy(S);let T=a[M];y.copy(T),y.sub(S.multiplyScalar(S.dot(T))).normalize(),x.crossVectors(b,T);let I=x.dot(l[M])<0?-1:1;o.setXYZW(M,y.x,y.y,y.z,I)}for(let M=0,T=_.length;M<T;++M){let E=_[M],I=E.start,D=E.count;for(let U=I,N=I+D;U<N;U+=3)C(e.getX(U+0)),C(e.getX(U+1)),C(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new it(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let r=new R,s=new R,o=new R,a=new R,l=new R,c=new R,u=new R,f=new R;if(e)for(let h=0,d=e.count;h<d;h+=3){let p=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),d=0,p=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let m=0;m<u;m++)h[p++]=c[d++]}return new it(h,u,f)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ur=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bs,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Dn=new R,rr=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Io("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new it(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Io("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hd=new R,j_=new R,ey=new rt,fi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Hd.subVectors(n,t).cross(j_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Hd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ey.getNormalMatrix(e),r=this.coplanarPoint(Hd).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ty=0,tn=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Ls,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lf,this.blendDst=Df,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nl,this.stencilZFail=nl,this.stencilZPass=nl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new fi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Fo=class extends tn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fo,Xa=new R,po=new R,mo=new R,go=new le,qa=new le,Mv=new je,Bu=new R,Ya=new R,Ou=new R,A0=new le,Wd=new le,C0=new le,vl=class extends bt{constructor(e=new Fo){if(super(),this.isSprite=!0,this.type="Sprite",fo===void 0){fo=new Ke;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ur(t,5);fo.setIndex([0,1,2,0,2,3]),fo.setAttribute("position",new rr(n,3,0,!1)),fo.setAttribute("uv",new rr(n,2,3,!1))}this.geometry=fo,this.material=e,this.center=new le(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),po.setFromMatrixScale(this.matrixWorld),Mv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&po.multiplyScalar(-mo.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;zu(Bu.set(-.5,-.5,0),mo,o,po,r,s),zu(Ya.set(.5,-.5,0),mo,o,po,r,s),zu(Ou.set(.5,.5,0),mo,o,po,r,s),A0.set(0,0),Wd.set(1,0),C0.set(1,1);let a=e.ray.intersectTriangle(Bu,Ya,Ou,!1,Xa);if(a===null&&(zu(Ya.set(-.5,.5,0),mo,o,po,r,s),Wd.set(0,1),a=e.ray.intersectTriangle(Bu,Ou,Ya,!1,Xa),a===null))return;let l=e.ray.origin.distanceTo(Xa);l<e.near||l>e.far||t.push({distance:l,point:Xa.clone(),uv:bi.getInterpolation(Xa,Bu,Ya,Ou,A0,Wd,C0,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function zu(i,e,t,n,r,s){go.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(qa.x=s*go.x-r*go.y,qa.y=r*go.x+s*go.y):qa.copy(go),i.copy(e),i.x+=qa.x,i.y+=qa.y,i.applyMatrix4(Mv)}var ku=new R,R0=new R,xl=class extends bt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,r=t.length;n<r;n++){let s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let r=this.levels,s;for(s=0;s<r.length&&!(t<r[s].distance);s++);return r.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let r=t.splice(n,1);return this.remove(r[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,r;for(n=1,r=t.length;n<r;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){ku.setFromMatrixPosition(this.matrixWorld);let r=e.ray.origin.distanceTo(ku);this.getObjectForDistance(r).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){ku.setFromMatrixPosition(e.matrixWorld),R0.setFromMatrixPosition(this.matrixWorld);let n=ku.distanceTo(R0)/e.zoom;t[0].object.visible=!0;let r,s;for(r=1,s=t.length;r<s;r++){let o=t[r].distance;if(t[r].object.visible&&(o-=o*t[r].hysteresis),n>=o)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<s;r++)t[r].object.visible=!1}}toJSON(e){let t=super.toJSON(e);t.object.autoUpdate=this.autoUpdate,t.object.levels=[];let n=this.levels;for(let r=0,s=n.length;r<s;r++){let o=n[r];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}},er=new R,Xd=new R,Gu=new R,Vu=new R,sr=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(er.copy(this.origin).addScaledVector(this.direction,t),er.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Xd.copy(e).add(t).multiplyScalar(.5),Gu.copy(t).sub(e).normalize(),Vu.copy(this.origin).sub(Xd);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Gu),a=Vu.dot(this.direction),l=-Vu.dot(Gu),c=Vu.lengthSq(),u=Math.abs(1-o*o),f,h,d,p;if(u>0)if(f=o*l-a,h=o*a-l,p=s*u,f>=0)if(h>=-p)if(h<=p){let v=1/u;f*=v,h*=v,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Xd).addScaledVector(Gu,h),d}intersectSphere(e,t){if(e.radius<0)return null;er.subVectors(e.center,this.origin);let n=er.dot(this.direction),r=er.dot(er)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,er)!==null}intersectTriangle(e,t,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=e.x-o.x,h=e.y-o.y,d=e.z-o.z,p=t.x-o.x,v=t.y-o.y,g=t.z-o.z,m=n.x-o.x,_=n.y-o.y,y=n.z-o.z,x=Math.abs(l),S=Math.abs(c),b=Math.abs(u),C,M,T,E,I,D,U,N,L,F,G,Q;if(x>=S&&x>=b?(T=l,D=f,L=p,Q=m,l>=0?(C=c,M=u,E=h,I=d,U=v,N=g,F=_,G=y):(C=u,M=c,E=d,I=h,U=g,N=v,F=y,G=_)):S>=b?(T=c,D=h,L=v,Q=_,c>=0?(C=u,M=l,E=d,I=f,U=g,N=p,F=y,G=m):(C=l,M=u,E=f,I=d,U=p,N=g,F=m,G=y)):(T=u,D=d,L=g,Q=y,u>=0?(C=l,M=c,E=f,I=h,U=p,N=v,F=m,G=_):(C=c,M=l,E=h,I=f,U=v,N=p,F=_,G=m)),T===0)return null;let q=C/T,Z=M/T,K=1/T,ee=E-q*D,ne=I-Z*D,ze=U-q*L,Ce=N-Z*L,Ve=F-q*Q,W=G-Z*Q,re=Ve*Ce-W*ze,we=ee*W-ne*Ve,ke=ze*ne-Ce*ee;if(r){if(re<0||we<0||ke<0)return null}else if((re<0||we<0||ke<0)&&(re>0||we>0||ke>0))return null;let Ee=re+we+ke;if(Ee===0)return null;let Be=K*(re*D+we*L+ke*Q);return(Ee>0?Be<0:Be>0)?null:this.at(Be/Ee,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zn=class extends tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},P0=new je,Qr=new sr,Hu=new en,I0=new R,Wu=new R,Xu=new R,qu=new R,qd=new R,Yu=new R,L0=new R,Zu=new R,nt=class extends bt{constructor(e=new Ke,t=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Yu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],f=s[l];u!==0&&(qd.fromBufferAttribute(f,e),o?Yu.addScaledVector(qd,u):Yu.addScaledVector(qd.sub(t),u))}t.add(Yu)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hu.copy(n.boundingSphere),Hu.applyMatrix4(s),Qr.copy(e.ray).recast(e.near),!(Hu.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(Hu,I0)===null||Qr.origin.distanceToSquared(I0)>(e.far-e.near)**2))&&(P0.copy(s).invert(),Qr.copy(e.ray).applyMatrix4(P0),!(n.boundingBox!==null&&Qr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qr)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){let g=h[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=_,S=y;x<S;x+=3){let b=a.getX(x),C=a.getX(x+1),M=a.getX(x+2);r=$u(this,m,e,n,c,u,f,b,C,M),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let _=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);r=$u(this,o,e,n,c,u,f,_,y,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){let g=h[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=_,S=y;x<S;x+=3){let b=x,C=x+1,M=x+2;r=$u(this,m,e,n,c,u,f,b,C,M),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let _=g,y=g+1,x=g+2;r=$u(this,o,e,n,c,u,f,_,y,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function ny(i,e,t,n,r,s,o,a){let l;if(e.side===dn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===hr,a),l===null)return null;Zu.copy(a),Zu.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Zu);return c<t.near||c>t.far?null:{distance:c,point:Zu.clone(),object:i}}function $u(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Wu),i.getVertexPosition(l,Xu),i.getVertexPosition(c,qu);let u=ny(i,e,t,n,Wu,Xu,qu,L0);if(u){let f=new R;bi.getBarycoord(L0,Wu,Xu,qu,f),r&&(u.uv=bi.getInterpolatedAttribute(r,a,l,c,f,new le)),s&&(u.uv1=bi.getInterpolatedAttribute(s,a,l,c,f,new le)),o&&(u.normal=bi.getInterpolatedAttribute(o,a,l,c,f,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new R,materialIndex:0};bi.getNormal(Wu,Xu,qu,h.normal),u.face=h,u.barycoord=f}return u}var Za=new Ct,D0=new Ct,N0=new Ct,iy=new Ct,F0=new je,Ju=new R,Yd=new en,U0=new je,Zd=new sr,_l=class extends nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_h,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new on),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ju),this.boundingBox.expandByPoint(Ju)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new en),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ju),this.boundingSphere.expandByPoint(Ju)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yd.copy(this.boundingSphere),Yd.applyMatrix4(r),e.ray.intersectsSphere(Yd)!==!1&&(U0.copy(r).invert(),Zd.copy(e.ray).applyMatrix4(U0),!(this.boundingBox!==null&&Zd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ct,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_h?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ne("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;D0.fromBufferAttribute(r.attributes.skinIndex,e),N0.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Za.copy(t),t.set(0,0,0,0)):(Za.set(...t,1),t.set(0,0,0)),Za.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=N0.getComponent(s);if(o!==0){let a=D0.getComponent(s);F0.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(iy.copy(Za).applyMatrix4(F0),o)}}return t.isVector4&&(t.w=Za.w),t.applyMatrix4(this.bindMatrixInverse)}},Uo=class extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Bn=class extends Yt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=qt,u=qt,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},B0=new je,ry=new je,yl=class i{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ne("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:ry;B0.multiplyMatrices(a,t[s]),B0.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Bn(t,e,e,Tn,wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],o=t[s];o===void 0&&(Ne("Skeleton: No bone found with UUID:",s),o=new Uo),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},mi=class extends it{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vo=new je,O0=new je,Ku=[],z0=new on,sy=new je,$a=new nt,Ja=new en,Ui=class extends nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,sy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new on),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vo),z0.copy(e.boundingBox).applyMatrix4(vo),this.boundingBox.union(z0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new en),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vo),Ja.copy(e.boundingSphere).applyMatrix4(vo),this.boundingSphere.union(Ja)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if($a.geometry=this.geometry,$a.material=this.material,$a.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ja.copy(this.boundingSphere),Ja.applyMatrix4(n),e.ray.intersectsSphere(Ja)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,vo),O0.multiplyMatrices(n,vo),$a.matrixWorld=O0,$a.raycast(e,Ku);for(let o=0,a=Ku.length;o<a;o++){let l=Ku[o];l.instanceId=s,l.object=this,t.push(l)}Ku.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new mi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bn(new Float32Array(r*this.count),r,this.count,xc,wn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},jr=new en,oy=new le(.5,.5),Qu=new R,Bi=class{constructor(e=new fi,t=new fi,n=new fi,r=new fi,s=new fi,o=new fi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],p=s[8],v=s[9],g=s[10],m=s[11],_=s[12],y=s[13],x=s[14],S=s[15];if(r[0].setComponents(c-o,d-u,m-p,S-_).normalize(),r[1].setComponents(c+o,d+u,m+p,S+_).normalize(),r[2].setComponents(c+a,d+f,m+v,S+y).normalize(),r[3].setComponents(c-a,d-f,m-v,S-y).normalize(),n)r[4].setComponents(l,h,g,x).normalize(),r[5].setComponents(c-l,d-h,m-g,S-x).normalize();else if(r[4].setComponents(c-l,d-h,m-g,S-x).normalize(),t===Yn)r[5].setComponents(c+l,d+h,m+g,S+x).normalize();else if(t===Nr)r[5].setComponents(l,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){jr.center.set(0,0,0);let t=oy.distanceTo(e.center);return jr.radius=.7071067811865476+t,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Qu.x=r.normal.x>0?e.max.x:e.min.x,Qu.y=r.normal.y>0?e.max.y:e.min.y,Qu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},k0=new je,Ml=class i{constructor(){this.coordinateSystem=Yn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];k0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new Bi),n[r].setFromProjectionMatrix(k0,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Bi),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new i().copy(this)}};function $d(i,e){return i-e}function ay(i,e){return i.z-e.z}function ly(i,e){return e.z-i.z}var cp=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){let s=this.pool,o=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let a=s[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=r}reset(){this.list.length=0,this.index=0}},Xn=new je,cy=new xe(1,1,1),uy=new Bi,hy=new Ml,ju=new on,es=new en,Ka=new R,G0=new R,fy=new R,Jd=new cp,bn=new nt,eh=[];function dy(i,e,t=0){let n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){let r=i.count;for(let s=0;s<r;s++)for(let o=0;o<n;o++)e.setComponent(s+t,o,i.getComponent(s,o))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function ts(i,e){if(i.constructor!==e.constructor){let t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{let t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}var Sl=class extends nt{constructor(e,t,n=t*2,r){super(new Ke,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new Bn(t,e,e,Tn,wn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),n=new Bn(t,e,e,fa,ii);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),n=new Bn(t,e,e,Tn,wn);n.colorSpace=gt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(let s in e.attributes){let o=e.getAttribute(s),{array:a,itemSize:l,normalized:c}=o,u=new a.constructor(n*l),f=new it(u,l,c);t.setAttribute(s,f)}if(e.getIndex()!==null){let s=n>65535?new Uint32Array(r):new Uint16Array(r);t.setIndex(new it(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let r=e.getAttribute(n),s=t.getAttribute(n);if(r.itemSize!==s.itemSize||r.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,r=t.length;n<r;n++){if(t[n].active===!1)continue;let s=t[n].geometryIndex;this.getMatrixAt(n,Xn),this.getBoundingBoxAt(s,ju).applyMatrix4(Xn),e.union(ju)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new en);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,r=t.length;n<r;n++){if(t[n].active===!1)continue;let s=t[n].geometryIndex;this.getMatrixAt(n,Xn),this.getBoundingSphereAt(s,es).applyMatrix4(Xn),e.union(es)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:e},r=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort($d),r=this._availableInstanceIds.shift(),this._instanceInfo[r]=n):(r=this._instanceInfo.length,this._instanceInfo.push(n));let s=this._matricesTexture;Xn.identity().toArray(s.image.data,r*16),s.needsUpdate=!0;let o=this._colorsTexture;return o&&(cy.toArray(o.image.data,r*4),o.needsUpdate=!0),this._visibilityChanged=!0,r}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);let r={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;r.vertexStart=this._nextVertexStart,r.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let o=e.getIndex();if(o!==null&&(r.indexStart=this._nextIndexStart,r.reservedIndexCount=n===-1?o.count:n),r.indexStart!==-1&&r.indexStart+r.reservedIndexCount>this._maxIndexCount||r.vertexStart+r.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort($d),l=this._availableGeometryIds.shift(),s[l]=r):(l=this._geometryCount,this._geometryCount++,s.push(r)),this.setGeometryAt(l,e),this._nextIndexStart=r.indexStart+r.reservedIndexCount,this._nextVertexStart=r.vertexStart+r.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,r=n.getIndex()!==null,s=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(r&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(let u in n.attributes){let f=t.getAttribute(u),h=n.getAttribute(u);dy(f,h,l);let d=f.itemSize;for(let p=f.count,v=c;p<v;p++){let g=l+p;for(let m=0;m<d;m++)h.setComponent(g,m,0)}h.needsUpdate=!0,h.addUpdateRange(l*d,c*d)}if(r){let u=a.indexStart,f=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let h=0;h<o.count;h++)s.setX(u+h,l+o.getX(h));for(let h=o.count,d=f;h<d;h++)s.setX(u+h,l);s.needsUpdate=!0,s.addUpdateRange(u,a.reservedIndexCount)}return a.start=r?a.indexStart:a.vertexStart,a.count=r?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let n=this._instanceInfo;for(let r=0,s=n.length;r<s;r++)n[r].active&&n[r].geometryIndex===e&&this.deleteInstance(r);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,n=this._geometryInfo,r=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),s=this.geometry;for(let o=0,a=n.length;o<a;o++){let l=r[o],c=n[l];if(c.active!==!1){if(s.index!==null){if(c.indexStart!==t){let{indexStart:u,vertexStart:f,reservedIndexCount:h}=c,d=s.index,p=d.array,v=e-f;for(let g=u;g<u+h;g++)p[g]=p[g]+v;d.array.copyWithin(t,u,u+h),d.addUpdateRange(t,h),d.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){let{vertexStart:u,reservedVertexCount:f}=c,h=s.attributes;for(let d in h){let p=h[d],{array:v,itemSize:g}=p;v.copyWithin(e*g,u*g,(u+f)*g),p.addUpdateRange(e*g,f*g),p.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=s.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,r=this._geometryInfo[e];if(r.boundingBox===null){let s=new on,o=n.index,a=n.attributes.position;for(let l=r.start,c=r.start+r.count;l<c;l++){let u=l;o&&(u=o.getX(u)),s.expandByPoint(Ka.fromBufferAttribute(a,u))}r.boundingBox=s}return t.copy(r.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,r=this._geometryInfo[e];if(r.boundingSphere===null){let s=new en;this.getBoundingBoxAt(e,ju),ju.getCenter(s.center);let o=n.index,a=n.attributes.position,l=0;for(let c=r.start,u=r.start+r.count;c<u;c++){let f=c;o&&(f=o.getX(f)),Ka.fromBufferAttribute(a,f),l=Math.max(l,s.center.distanceToSquared(Ka))}s.radius=Math.sqrt(l),r.boundingSphere=s}return t.copy(r.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let n=this._matricesTexture,r=this._matricesTexture.image.data;return t.toArray(r,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){let t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort($d);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let r=new Int32Array(e),s=new Int32Array(e);ts(this._multiDrawCounts,r),ts(this._multiDrawStarts,s),this._multiDrawCounts=r,this._multiDrawStarts=s,this._maxInstanceCount=e;let o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),ts(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),ts(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),ts(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Ke,this._initializeGeometry(s));let o=this.geometry;s.index&&ts(s.index.array,o.index.array);for(let a in s.attributes)ts(s.attributes[a].array,o.attributes[a].array)}raycast(e,t){let n=this._instanceInfo,r=this._geometryInfo,s=this.matrixWorld,o=this.geometry;bn.material=this.material,bn.geometry.index=o.index,bn.geometry.attributes=o.attributes,bn.geometry.boundingBox===null&&(bn.geometry.boundingBox=new on),bn.geometry.boundingSphere===null&&(bn.geometry.boundingSphere=new en);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;let c=n[a].geometryIndex,u=r[c];bn.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,bn.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,bn.geometry.boundingBox),this.getBoundingSphereAt(c,bn.geometry.boundingSphere),bn.raycast(e,eh);for(let f=0,h=eh.length;f<h;f++){let d=eh[f];d.object=this,d.batchId=a,t.push(d)}eh.length=0}bn.material=null,bn.geometry.index=null,bn.geometry.attributes={},bn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,r,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let o=r.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=1;s.wireframe&&(l=2,a=r.attributes.position.count>65535?4:2);let c=this._instanceInfo,u=this._multiDrawStarts,f=this._multiDrawCounts,h=this._geometryInfo,d=this.perObjectFrustumCulled,p=this._indirectTexture,v=p.image.data,g=n.isArrayCamera?hy:uy;d&&(n.isArrayCamera?g.setFromArrayCamera(n):(Xn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),g.setFromProjectionMatrix(Xn,n.coordinateSystem,n.reversedDepth)));let m=0;if(this.sortObjects){Xn.copy(this.matrixWorld).invert(),Ka.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Xn),G0.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Xn);for(let x=0,S=c.length;x<S;x++)if(c[x].visible&&c[x].active){let b=c[x].geometryIndex;this.getMatrixAt(x,Xn),this.getBoundingSphereAt(b,es).applyMatrix4(Xn);let C=!1;if(d&&(C=!g.intersectsSphere(es)),!C){let M=h[b],T=fy.subVectors(es.center,Ka).dot(G0);Jd.push(M.start,M.count,T,x)}}let _=Jd.list,y=this.customSort;y===null?_.sort(s.transparent?ly:ay):y.call(this,_,n);for(let x=0,S=_.length;x<S;x++){let b=_[x];u[m]=b.start*a*l,f[m]=b.count*l,v[m]=b.index,m++}Jd.reset()}else for(let _=0,y=c.length;_<y;_++)if(c[_].visible&&c[_].active){let x=c[_].geometryIndex,S=!1;if(d&&(this.getMatrixAt(_,Xn),this.getBoundingSphereAt(x,es).applyMatrix4(Xn),S=!g.intersectsSphere(es)),!S){let b=h[x];u[m]=b.start*a*l,f[m]=b.count*l,v[m]=_,m++}}p.needsUpdate=!0,this._multiDrawCount=m,this._multiDrawBytesPerElement=a,this._visibilityChanged=!1}onBeforeShadow(e,t,n,r,s,o){this.onBeforeRender(e,null,r,s,o)}},un=class extends tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ih=new R,Lh=new R,V0=new je,Qa=new sr,th=new en,Kd=new R,H0=new R,Ei=class extends bt{constructor(e=new Ke,t=new un){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ih.fromBufferAttribute(t,r-1),Lh.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ih.distanceTo(Lh);e.setAttribute("lineDistance",new Ue(n,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),th.copy(n.boundingSphere),th.applyMatrix4(r),th.radius+=s,e.ray.intersectsSphere(th)===!1)return;V0.copy(r).invert(),Qa.copy(e.ray).applyMatrix4(V0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=d,g=p-1;v<g;v+=c){let m=u.getX(v),_=u.getX(v+1),y=nh(this,e,Qa,l,m,_,v);y&&t.push(y)}if(this.isLineLoop){let v=u.getX(p-1),g=u.getX(d),m=nh(this,e,Qa,l,v,g,p-1);m&&t.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=d,g=p-1;v<g;v+=c){let m=nh(this,e,Qa,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){let v=nh(this,e,Qa,l,p-1,d,p-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function nh(i,e,t,n,r,s,o){let a=i.geometry.attributes.position;if(Ih.fromBufferAttribute(a,r),Lh.fromBufferAttribute(a,s),t.distanceSqToSegment(Ih,Lh,Kd,H0)>n)return;Kd.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Kd);if(!(c<e.near||c>e.far))return{distance:c,point:H0.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var W0=new R,X0=new R,ti=class extends Ei{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)W0.fromBufferAttribute(t,r),X0.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+W0.distanceTo(X0);e.setAttribute("lineDistance",new Ue(n,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},bl=class extends Ei{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Bo=class extends tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},q0=new je,up=new sr,ih=new en,rh=new R,gs=class extends bt{constructor(e=new Ke,t=new Bo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ih.copy(n.boundingSphere),ih.applyMatrix4(r),ih.radius+=s,e.ray.intersectsSphere(ih)===!1)return;q0.copy(r).invert(),up.copy(e.ray).applyMatrix4(q0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=h,v=d;p<v;p++){let g=c.getX(p);rh.fromBufferAttribute(f,g),Y0(rh,g,l,r,e,t,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=h,v=d;p<v;p++)rh.fromBufferAttribute(f,p),Y0(rh,p,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Y0(i,e,t,n,r,s,o){let a=up.distanceSqToPoint(i);if(a<t){let l=new R;up.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var wl=class extends Yt{constructor(e,t,n,r,s=Ut,o=Ut,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let u=this;function f(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},Dh=class extends wl{constructor(e,t,n,r,s,o,a,l){super({},e,t,n,r,s,o,a,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}},Nh=class extends Yt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=qt,this.minFilter=qt,this.generateMipmaps=!1,this.needsUpdate=!0}},vs=class extends Yt{constructor(e,t,n,r,s,o,a,l,c,u,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Fh=class extends vs{constructor(e,t,n,r,s,o){super(e,t,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=r,this.wrapR=Fn,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Uh=class extends vs{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Ci),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},Br=class extends Yt{constructor(e=[],t=Ci,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Oo=class extends Yt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Bh=class extends Yt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let u=e?e.parentNode:null;u!==null&&"requestPaint"in u&&(u.onpaint=()=>{this.needsUpdate=!0},u.requestPaint())}dispose(){let e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}},or=class extends Yt{constructor(e,t,n=ii,r,s,o,a=qt,l=qt,c,u=Ti,f=1){if(u!==Ti&&u!==pr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new di(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Tl=class extends or{constructor(e,t=ii,n=Ci,r,s,o=qt,a=qt,l,c=Ti){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zo=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},En=class i extends Ke{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,d=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,r,o,2),p("x","z","y",1,-1,e,n,-t,r,o,3),p("x","y","z",1,-1,e,t,n,r,s,4),p("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(u,3)),this.setAttribute("uv",new Ue(f,2));function p(v,g,m,_,y,x,S,b,C,M,T){let E=x/C,I=S/M,D=x/2,U=S/2,N=b/2,L=C+1,F=M+1,G=0,Q=0,q=new R;for(let Z=0;Z<F;Z++){let K=Z*I-U;for(let ee=0;ee<L;ee++){let ne=ee*E-D;q[v]=ne*_,q[g]=K*y,q[m]=N,c.push(q.x,q.y,q.z),q[v]=0,q[g]=0,q[m]=b>0?1:-1,u.push(q.x,q.y,q.z),f.push(ee/C),f.push(1-Z/M),G+=1}}for(let Z=0;Z<M;Z++)for(let K=0;K<C;K++){let ee=h+K+L*Z,ne=h+K+L*(Z+1),ze=h+(K+1)+L*(Z+1),Ce=h+(K+1)+L*Z;l.push(ee,ne,Ce),l.push(ne,ze,Ce),Q+=6}a.addGroup(d,Q,T),d+=Q,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},El=class i extends Ke{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let o=[],a=[],l=[],c=[],u=t/2,f=Math.PI/2*e,h=t,d=2*f+h,p=n*2+s,v=r+1,g=new R,m=new R;for(let _=0;_<=p;_++){let y=0,x=0,S=0,b=0;if(_<=n){let T=_/n,E=T*Math.PI/2;x=-u-e*Math.cos(E),S=e*Math.sin(E),b=-e*Math.cos(E),y=T*f}else if(_<=n+s){let T=(_-n)/s;x=-u+T*t,S=e,b=0,y=f+T*h}else{let T=(_-n-s)/n,E=T*Math.PI/2;x=u+e*Math.sin(E),S=e*Math.cos(E),b=e*Math.sin(E),y=f+h+T*f}let C=Math.max(0,Math.min(1,y/d)),M=0;_===0?M=.5/r:_===p&&(M=-.5/r);for(let T=0;T<=r;T++){let E=T/r,I=E*Math.PI*2,D=Math.sin(I),U=Math.cos(I);m.x=-S*U,m.y=x,m.z=S*D,a.push(m.x,m.y,m.z),g.set(-S*U,b,S*D),g.normalize(),l.push(g.x,g.y,g.z),c.push(E+M,C)}if(_>0){let T=(_-1)*v;for(let E=0;E<r;E++){let I=T+E,D=T+E+1,U=_*v+E,N=_*v+E+1;o.push(I,D,U),o.push(D,N,U)}}}this.setIndex(o),this.setAttribute("position",new Ue(a,3)),this.setAttribute("normal",new Ue(l,3)),this.setAttribute("uv",new Ue(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},xs=class i extends Ke{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new R,u=new le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){let d=n+f/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Ue(o,3)),this.setAttribute("normal",new Ue(a,3)),this.setAttribute("uv",new Ue(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},hn=class i extends Ke{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],f=[],h=[],d=[],p=0,v=[],g=n/2,m=0;_(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Ue(f,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(d,2));function _(){let x=new R,S=new R,b=0,C=(t-e)/n;for(let M=0;M<=s;M++){let T=[],E=M/s,I=E*(t-e)+e;for(let D=0;D<=r;D++){let U=D/r,N=U*l+a,L=Math.sin(N),F=Math.cos(N);S.x=I*L,S.y=-E*n+g,S.z=I*F,f.push(S.x,S.y,S.z),x.set(L,C,F).normalize(),h.push(x.x,x.y,x.z),d.push(U,1-E),T.push(p++)}v.push(T)}for(let M=0;M<r;M++)for(let T=0;T<s;T++){let E=v[T][M],I=v[T+1][M],D=v[T+1][M+1],U=v[T][M+1];(e>0||T!==0)&&(u.push(E,I,U),b+=3),(t>0||T!==s-1)&&(u.push(I,D,U),b+=3)}c.addGroup(m,b,0),m+=b}function y(x){let S=p,b=new le,C=new R,M=0,T=x===!0?e:t,E=x===!0?1:-1;for(let D=1;D<=r;D++)f.push(0,g*E,0),h.push(0,E,0),d.push(.5,.5),p++;let I=p;for(let D=0;D<=r;D++){let N=D/r*l+a,L=Math.cos(N),F=Math.sin(N);C.x=T*F,C.y=g*E,C.z=T*L,f.push(C.x,C.y,C.z),h.push(0,E,0),b.x=L*.5+.5,b.y=F*.5*E+.5,d.push(b.x,b.y),p++}for(let D=0;D<r;D++){let U=S+D,N=I+D;x===!0?u.push(N,N+1,U):u.push(N+1,N,U),M+=3}c.addGroup(m,M,x===!0?1:2),m+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$n=class i extends hn{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ar=class i extends Ke{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new Ue(s,3)),this.setAttribute("normal",new Ue(s.slice(),3)),this.setAttribute("uv",new Ue(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let y=new R,x=new R,S=new R;for(let b=0;b<t.length;b+=3)d(t[b+0],y),d(t[b+1],x),d(t[b+2],S),l(y,x,S,_)}function l(_,y,x,S){let b=S+1,C=[];for(let M=0;M<=b;M++){C[M]=[];let T=_.clone().lerp(x,M/b),E=y.clone().lerp(x,M/b),I=b-M;for(let D=0;D<=I;D++)D===0&&M===b?C[M][D]=T:C[M][D]=T.clone().lerp(E,D/I)}for(let M=0;M<b;M++)for(let T=0;T<2*(b-M)-1;T++){let E=Math.floor(T/2);T%2===0?(h(C[M][E+1]),h(C[M+1][E]),h(C[M][E])):(h(C[M][E+1]),h(C[M+1][E+1]),h(C[M+1][E]))}}function c(_){let y=new R;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(_),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function u(){let _=new R;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];let x=g(_)/2/Math.PI+.5,S=m(_)/Math.PI+.5;o.push(x,1-S)}p(),f()}function f(){for(let _=0;_<o.length;_+=6){let y=o[_+0],x=o[_+2],S=o[_+4],b=Math.max(y,x,S),C=Math.min(y,x,S);b>.9&&C<.1&&(y<.2&&(o[_+0]+=1),x<.2&&(o[_+2]+=1),S<.2&&(o[_+4]+=1))}}function h(_){s.push(_.x,_.y,_.z)}function d(_,y){let x=_*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function p(){let _=new R,y=new R,x=new R,S=new R,b=new le,C=new le,M=new le;for(let T=0,E=0;T<s.length;T+=9,E+=6){_.set(s[T+0],s[T+1],s[T+2]),y.set(s[T+3],s[T+4],s[T+5]),x.set(s[T+6],s[T+7],s[T+8]),b.set(o[E+0],o[E+1]),C.set(o[E+2],o[E+3]),M.set(o[E+4],o[E+5]),S.copy(_).add(y).add(x).divideScalar(3);let I=g(S);v(b,E+0,_,I),v(C,E+2,y,I),v(M,E+4,x,I)}}function v(_,y,x,S){S<0&&_.x===1&&(o[y]=_.x-1),x.x===0&&x.z===0&&(o[y]=S/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},_s=class i extends ar{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},sh=new R,oh=new R,Qd=new R,ah=new bi,Al=class extends Ke{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(ls*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:v,b:g,c:m}=ah;if(v.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),ah.getNormal(Qd),f[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,f[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,f[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let _=0;_<3;_++){let y=(_+1)%3,x=f[_],S=f[y],b=ah[u[_]],C=ah[u[y]],M=`${x}_${S}`,T=`${S}_${x}`;T in h&&h[T]?(Qd.dot(h[T].normal)<=s&&(d.push(b.x,b.y,b.z),d.push(C.x,C.y,C.z)),h[T]=null):M in h||(h[M]={index0:c[_],index1:c[y],normal:Qd.clone()})}}for(let p in h)if(h[p]){let{index0:v,index1:g}=h[p];sh.fromBufferAttribute(a,v),oh.fromBufferAttribute(a,g),d.push(sh.x,sh.y,sh.z),d.push(oh.x,oh.y,oh.z)}this.setAttribute("position",new Ue(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ne("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let u=n[r],h=n[r+1]-u,d=(o-u)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new le:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,r=[],s=[],o=[],a=new R,l=new je;for(let d=0;d<=e;d++){let p=d/e;r[d]=this.getTangentAt(p,new R)}s[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(tt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(tt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],d*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ys=class extends Jn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new le){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Cl=class extends ys{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function cm(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,r(o,a,h,d)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var Z0=new R,$0=new R,jd=new cm,ep=new cm,tp=new cm,Ms=class extends Jn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new R){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:($0.subVectors(r[0],r[1]).add(r[0]),c=$0);let f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Z0.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Z0),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),jd.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,p,v,g),ep.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,p,v,g),tp.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,p,v,g)}else this.curveType==="catmullrom"&&(jd.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),ep.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),tp.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(jd.calc(l),ep.calc(l),tp.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function J0(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function py(i,e){let t=1-i;return t*t*e}function my(i,e){return 2*(1-i)*i*e}function gy(i,e){return i*i*e}function rl(i,e,t,n){return py(i,e)+my(i,t)+gy(i,n)}function vy(i,e){let t=1-i;return t*t*t*e}function xy(i,e){let t=1-i;return 3*t*t*i*e}function _y(i,e){return 3*(1-i)*i*i*e}function yy(i,e){return i*i*i*e}function sl(i,e,t,n,r){return vy(i,e)+xy(i,t)+_y(i,n)+yy(i,r)}var ko=class extends Jn{constructor(e=new le,t=new le,n=new le,r=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new le){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(sl(e,r.x,s.x,o.x,a.x),sl(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Rl=class extends Jn{constructor(e=new R,t=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new R){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(sl(e,r.x,s.x,o.x,a.x),sl(e,r.y,s.y,o.y,a.y),sl(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Go=class extends Jn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pl=class extends Jn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vo=class extends Jn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(rl(e,r.x,s.x,o.x),rl(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ho=class extends Jn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(rl(e,r.x,s.x,o.x),rl(e,r.y,s.y,o.y),rl(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wo=class extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return n.set(J0(a,l.x,c.x,u.x,f.x),J0(a,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new le().fromArray(r))}return this}},Oh=Object.freeze({__proto__:null,ArcCurve:Cl,CatmullRomCurve3:Ms,CubicBezierCurve:ko,CubicBezierCurve3:Rl,EllipseCurve:ys,LineCurve:Go,LineCurve3:Pl,QuadraticBezierCurve:Vo,QuadraticBezierCurve3:Ho,SplineCurve:Wo}),Il=class extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Oh[r.type]().fromJSON(r))}return this}},Or=class extends Il{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Go(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new Vo(this.currentPoint.clone(),new le(e,t),new le(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new ko(this.currentPoint.clone(),new le(e,t),new le(n,r),new le(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Wo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new ys(e,t,n,r,s,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},gi=class extends Or{constructor(e){super(e),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new Or().fromJSON(r))}return this}};function My(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Sv(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Ey(i,e,s,t)),i.length>80*t){a=i[0],l=i[1];let u=a,f=l;for(let h=t;h<r;h+=t){let d=i[h],p=i[h+1];d<a&&(a=d),p<l&&(l=p),d>u&&(u=d),p>f&&(f=p)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return Ll(s,o,t,a,l,c,0),o}function Sv(i,e,t,n,r){let s;if(r===By(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=K0(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=K0(o/n|0,i[o],i[o+1],s);return s&&Xo(s,s.next)&&(Nl(s),s=s.next),s}function Ss(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Xo(t,t.next)||Vt(t.prev,t,t.next)===0)){if(Nl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ll(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Iy(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?by(i,n,r,s):Sy(i)){e.push(l.i,i.i,c.i),Nl(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=wy(Ss(i),e),Ll(i,e,t,n,r,s,2)):o===2&&Ty(i,e,t,n,r,s):Ll(Ss(i),e,t,n,r,s,1);break}}}function Sy(i){let e=i.prev,t=i,n=i.next;if(Vt(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(r,s,o),f=Math.min(a,l,c),h=Math.max(r,s,o),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=f&&p.y<=d&&el(r,a,s,l,o,c,p.x,p.y)&&Vt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function by(i,e,t,n){let r=i.prev,s=i,o=i.next;if(Vt(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,d=Math.min(a,l,c),p=Math.min(u,f,h),v=Math.max(a,l,c),g=Math.max(u,f,h),m=hp(d,p,e,t,n),_=hp(v,g,e,t,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=m&&x&&x.z<=_;){if(y.x>=d&&y.x<=v&&y.y>=p&&y.y<=g&&y!==r&&y!==o&&el(a,u,l,f,c,h,y.x,y.y)&&Vt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=v&&x.y>=p&&x.y<=g&&x!==r&&x!==o&&el(a,u,l,f,c,h,x.x,x.y)&&Vt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=v&&y.y>=p&&y.y<=g&&y!==r&&y!==o&&el(a,u,l,f,c,h,y.x,y.y)&&Vt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=d&&x.x<=v&&x.y>=p&&x.y<=g&&x!==r&&x!==o&&el(a,u,l,f,c,h,x.x,x.y)&&Vt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function wy(i,e){let t=i;do{let n=t.prev,r=t.next.next;!Xo(n,r)&&wv(n,t,t.next,r)&&Dl(n,r)&&Dl(r,n)&&(e.push(n.i,t.i,r.i),Nl(t),Nl(t.next),t=i=r),t=t.next}while(t!==i);return Ss(t)}function Ty(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ny(o,a)){let l=Tv(o,a);o=Ss(o,o.next),l=Ss(l,l.next),Ll(o,e,t,n,r,s,0),Ll(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Ey(i,e,t,n){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Sv(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Dy(c))}r.sort(Ay);for(let s=0;s<r.length;s++)t=Cy(r[s],t);return t}function Ay(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Cy(i,e){let t=Ry(i,e);if(!t)return e;let n=Tv(t,i);return Ss(n,n.next),Ss(t,t.next)}function Ry(i,e){let t=e,n=i.x,r=i.y,s=-1/0,o;if(Xo(i,t))return t;do{if(Xo(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s&&(s=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&bv(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){let f=Math.abs(r-t.y)/(n-t.x);Dl(t,i)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&Py(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function Py(i,e){return Vt(i.prev,i,e.prev)<0&&Vt(e.next,i,i.next)<0}function Iy(i,e,t,n){let r=i;do r.z===0&&(r.z=hp(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Ly(r)}function Ly(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function hp(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Dy(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function bv(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function el(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&bv(i,e,t,n,r,s,o,a)}function Ny(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Fy(i,e)&&(Dl(i,e)&&Dl(e,i)&&Uy(i,e)&&(Vt(i.prev,i,e.prev)||Vt(i,e.prev,e))||Xo(i,e)&&Vt(i.prev,i,i.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Xo(i,e){return i.x===e.x&&i.y===e.y}function wv(i,e,t,n){let r=ch(Vt(i,e,t)),s=ch(Vt(i,e,n)),o=ch(Vt(t,n,i)),a=ch(Vt(t,n,e));return!!(r!==s&&o!==a||r===0&&lh(i,t,e)||s===0&&lh(i,n,e)||o===0&&lh(t,i,n)||a===0&&lh(t,e,n))}function lh(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ch(i){return i>0?1:i<0?-1:0}function Fy(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&wv(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Dl(i,e){return Vt(i.prev,i,i.next)<0?Vt(i,e,i.next)>=0&&Vt(i,i.prev,e)>=0:Vt(i,e,i.prev)<0||Vt(i,i.next,e)<0}function Uy(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Tv(i,e){let t=fp(i.i,i.x,i.y),n=fp(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function K0(i,e,t,n){let r=fp(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Nl(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fp(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function By(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var dp=class{static triangulate(e,t,n=2){return My(e,t,n)}},pi=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Q0(e),j0(n,e);let o=e.length;t.forEach(Q0);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,j0(n,t[l]);let a=dp.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Q0(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function j0(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Fl=class i extends Ke{constructor(e=new gi([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ue(r,3)),this.setAttribute("uv",new Ue(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Oy,y,x=!1,S,b,C,M;if(m){y=m.getSpacedPoints(u),x=!0,h=!1;let oe=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(u,oe),b=new R,C=new R,M=new R}h||(g=0,d=0,p=0,v=0);let T=a.extractPoints(c),E=T.shape,I=T.holes;if(!pi.isClockWise(E)){E=E.reverse();for(let oe=0,pe=I.length;oe<pe;oe++){let Me=I[oe];pi.isClockWise(Me)&&(I[oe]=Me.reverse())}}function U(oe){let Me=10000000000000001e-36,de=oe[0];for(let _e=1;_e<=oe.length;_e++){let ue=_e%oe.length,Pe=oe[ue],Te=Pe.x-de.x,Ge=Pe.y-de.y,O=Te*Te+Ge*Ge,ct=Math.max(Math.abs(Pe.x),Math.abs(Pe.y),Math.abs(de.x),Math.abs(de.y)),et=Me*ct*ct;if(O<=et){oe.splice(ue,1),_e--;continue}de=Pe}}U(E),I.forEach(U);let N=I.length,L=E;for(let oe=0;oe<N;oe++){let pe=I[oe];E=E.concat(pe)}function F(oe,pe,Me){return pe||Je("ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(pe,Me)}let G=E.length;function Q(oe,pe,Me){let de,_e,ue,Pe=oe.x-pe.x,Te=oe.y-pe.y,Ge=Me.x-oe.x,O=Me.y-oe.y,ct=Pe*Pe+Te*Te,et=Pe*O-Te*Ge;if(Math.abs(et)>Number.EPSILON){let P=Math.sqrt(ct),w=Math.sqrt(Ge*Ge+O*O),H=pe.x-Te/P,$=pe.y+Pe/P,k=Me.x-O/w,ie=Me.y+Ge/w,se=((k-H)*O-(ie-$)*Ge)/(Pe*O-Te*Ge);de=H+Pe*se-oe.x,_e=$+Te*se-oe.y;let V=de*de+_e*_e;if(V<=2)return new le(de,_e);ue=Math.sqrt(V/2)}else{let P=!1;Pe>Number.EPSILON?Ge>Number.EPSILON&&(P=!0):Pe<-Number.EPSILON?Ge<-Number.EPSILON&&(P=!0):Math.sign(Te)===Math.sign(O)&&(P=!0),P?(de=-Te,_e=Pe,ue=Math.sqrt(ct)):(de=Pe,_e=Te,ue=Math.sqrt(ct/2))}return new le(de/ue,_e/ue)}let q=[];for(let oe=0,pe=L.length,Me=pe-1,de=oe+1;oe<pe;oe++,Me++,de++)Me===pe&&(Me=0),de===pe&&(de=0),q[oe]=Q(L[oe],L[Me],L[de]);let Z=[],K,ee=q.concat();for(let oe=0,pe=N;oe<pe;oe++){let Me=I[oe];K=[];for(let de=0,_e=Me.length,ue=_e-1,Pe=de+1;de<_e;de++,ue++,Pe++)ue===_e&&(ue=0),Pe===_e&&(Pe=0),K[de]=Q(Me[de],Me[ue],Me[Pe]);Z.push(K),ee=ee.concat(K)}let ne;if(g===0)ne=pi.triangulateShape(L,I);else{let oe=[],pe=[];for(let Me=0;Me<g;Me++){let de=Me/g,_e=d*Math.cos(de*Math.PI/2),ue=p*Math.sin(de*Math.PI/2)+v;for(let Pe=0,Te=L.length;Pe<Te;Pe++){let Ge=F(L[Pe],q[Pe],ue);we(Ge.x,Ge.y,-_e),de===0&&oe.push(Ge)}for(let Pe=0,Te=N;Pe<Te;Pe++){let Ge=I[Pe];K=Z[Pe];let O=[];for(let ct=0,et=Ge.length;ct<et;ct++){let P=F(Ge[ct],K[ct],ue);we(P.x,P.y,-_e),de===0&&O.push(P)}de===0&&pe.push(O)}}ne=pi.triangulateShape(oe,pe)}let ze=ne.length,Ce=p+v;for(let oe=0;oe<G;oe++){let pe=h?F(E[oe],ee[oe],Ce):E[oe];x?(C.copy(S.normals[0]).multiplyScalar(pe.x),b.copy(S.binormals[0]).multiplyScalar(pe.y),M.copy(y[0]).add(C).add(b),we(M.x,M.y,M.z)):we(pe.x,pe.y,0)}for(let oe=1;oe<=u;oe++)for(let pe=0;pe<G;pe++){let Me=h?F(E[pe],ee[pe],Ce):E[pe];x?(C.copy(S.normals[oe]).multiplyScalar(Me.x),b.copy(S.binormals[oe]).multiplyScalar(Me.y),M.copy(y[oe]).add(C).add(b),we(M.x,M.y,M.z)):we(Me.x,Me.y,f/u*oe)}for(let oe=g-1;oe>=0;oe--){let pe=oe/g,Me=d*Math.cos(pe*Math.PI/2),de=p*Math.sin(pe*Math.PI/2)+v;for(let _e=0,ue=L.length;_e<ue;_e++){let Pe=F(L[_e],q[_e],de);we(Pe.x,Pe.y,f+Me)}for(let _e=0,ue=I.length;_e<ue;_e++){let Pe=I[_e];K=Z[_e];for(let Te=0,Ge=Pe.length;Te<Ge;Te++){let O=F(Pe[Te],K[Te],de);x?we(O.x,O.y+y[u-1].y,y[u-1].x+Me):we(O.x,O.y,f+Me)}}}Ve(),W();function Ve(){let oe=r.length/3;if(h){let pe=0,Me=G*pe;for(let de=0;de<ze;de++){let _e=ne[de];ke(_e[2]+Me,_e[1]+Me,_e[0]+Me)}pe=u+g*2,Me=G*pe;for(let de=0;de<ze;de++){let _e=ne[de];ke(_e[0]+Me,_e[1]+Me,_e[2]+Me)}}else{for(let pe=0;pe<ze;pe++){let Me=ne[pe];ke(Me[2],Me[1],Me[0])}for(let pe=0;pe<ze;pe++){let Me=ne[pe];ke(Me[0]+G*u,Me[1]+G*u,Me[2]+G*u)}}n.addGroup(oe,r.length/3-oe,0)}function W(){let oe=r.length/3,pe=0;re(L,pe),pe+=L.length;for(let Me=0,de=I.length;Me<de;Me++){let _e=I[Me];re(_e,pe),pe+=_e.length}n.addGroup(oe,r.length/3-oe,1)}function re(oe,pe){let Me=oe.length;for(;--Me>=0;){let de=Me,_e=Me-1;_e<0&&(_e=oe.length-1);for(let ue=0,Pe=u+g*2;ue<Pe;ue++){let Te=G*ue,Ge=G*(ue+1),O=pe+de+Te,ct=pe+_e+Te,et=pe+_e+Ge,P=pe+de+Ge;Ee(O,ct,et,P)}}}function we(oe,pe,Me){l.push(oe),l.push(pe),l.push(Me)}function ke(oe,pe,Me){Be(oe),Be(pe),Be(Me);let de=r.length/3,_e=_.generateTopUV(n,r,de-3,de-2,de-1);ot(_e[0]),ot(_e[1]),ot(_e[2])}function Ee(oe,pe,Me,de){Be(oe),Be(pe),Be(de),Be(pe),Be(Me),Be(de);let _e=r.length/3,ue=_.generateSideWallUV(n,r,_e-6,_e-3,_e-2,_e-1);ot(ue[0]),ot(ue[1]),ot(ue[3]),ot(ue[1]),ot(ue[2]),ot(ue[3])}function Be(oe){r.push(l[oe*3+0]),r.push(l[oe*3+1]),r.push(l[oe*3+2])}function ot(oe){s.push(oe.x),s.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return zy(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Oh[r.type]().fromJSON(r)),new i(n,e.options)}},Oy={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new le(s,o),new le(a,l),new le(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],h=e[r*3],d=e[r*3+1],p=e[r*3+2],v=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new le(o,1-l),new le(c,1-f),new le(h,1-p),new le(v,1-m)]:[new le(a,1-l),new le(u,1-f),new le(d,1-p),new le(g,1-m)]}};function zy(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var bs=class i extends ar{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ul=class i extends Ke{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=tt(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/t,f=new R,h=new le,d=new R,p=new R,v=new R,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-g,d.z=m*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(p)}for(let _=0;_<=t;_++){let y=n+_*u*r,x=Math.sin(y),S=Math.cos(y);for(let b=0;b<=e.length-1;b++){f.x=e[b].x*x,f.y=e[b].y,f.z=e[b].x*S,o.push(f.x,f.y,f.z),h.x=_/t,h.y=b/(e.length-1),a.push(h.x,h.y);let C=l[3*b+0]*x,M=l[3*b+1],T=l[3*b+0]*S;c.push(C,M,T)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){let x=y+_*e.length,S=x,b=x+e.length,C=x+e.length+1,M=x+1;s.push(S,b,M),s.push(C,M,b)}this.setIndex(s),this.setAttribute("position",new Ue(o,3)),this.setAttribute("uv",new Ue(a,2)),this.setAttribute("normal",new Ue(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},qo=class i extends ar{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Oi=class i extends Ke{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],p=[],v=[],g=[];for(let m=0;m<u;m++){let _=m*h-o;for(let y=0;y<c;y++){let x=y*f-s;p.push(x,-_,0),v.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let y=_+c*m,x=_+c*(m+1),S=_+1+c*(m+1),b=_+1+c*m;d.push(y,x,b),d.push(x,S,b)}this.setIndex(d),this.setAttribute("position",new Ue(p,3)),this.setAttribute("normal",new Ue(v,3)),this.setAttribute("uv",new Ue(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Bl=class i extends Ke{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],f=e,h=(t-e)/r,d=new R,p=new le;for(let v=0;v<=r;v++){for(let g=0;g<=n;g++){let m=s+g/n*o;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,u.push(p.x,p.y)}f+=h}for(let v=0;v<r;v++){let g=v*(n+1);for(let m=0;m<n;m++){let _=m+g,y=_,x=_+n+1,S=_+n+2,b=_+1;a.push(y,x,b),a.push(x,S,b)}}this.setIndex(a),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},lr=class i extends Ke{constructor(e=new gi([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ue(r,3)),this.setAttribute("normal",new Ue(s,3)),this.setAttribute("uv",new Ue(o,2));function c(u){let f=r.length/3,h=u.extractPoints(t),d=h.shape,p=h.holes;pi.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){let _=p[g];pi.isClockWise(_)===!0&&(p[g]=_.reverse())}let v=pi.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){let _=p[g];d=d.concat(_)}for(let g=0,m=d.length;g<m;g++){let _=d[g];r.push(_.x,_.y,0),s.push(0,0,1),o.push(_.x,_.y)}for(let g=0,m=v.length;g<m;g++){let _=v[g],y=_[0]+f,x=_[1]+f,S=_[2]+f;n.push(y,x,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ky(t,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];n.push(o)}return new i(n,e.curveSegments)}};function ky(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}var fn=class i extends Ke{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],f=new R,h=new R,d=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){let _=[],y=m/n,x=o+y*a,S=e*Math.cos(x),b=Math.sqrt(e*e-S*S),C=0;m===0&&o===0?C=.5/t:m===n&&l===Math.PI&&(C=-.5/t);for(let M=0;M<=t;M++){let T=M/t,E=r+T*s;f.x=-b*Math.cos(E),f.y=S,f.z=b*Math.sin(E),p.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),g.push(T+C,1-y),_.push(c++)}u.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let y=u[m][_+1],x=u[m][_],S=u[m+1][_],b=u[m+1][_+1];(m!==0||o>0)&&d.push(y,x,b),(m!==n-1||l<Math.PI)&&d.push(x,S,b)}this.setIndex(d),this.setAttribute("position",new Ue(p,3)),this.setAttribute("normal",new Ue(v,3)),this.setAttribute("uv",new Ue(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ol=class i extends ar{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},zl=class i extends Ke{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),r=Math.floor(r);let l=[],c=[],u=[],f=[],h=new R,d=new R,p=new R;for(let v=0;v<=n;v++){let g=o+v/n*a;for(let m=0;m<=r;m++){let _=m/r*s;d.x=(e+t*Math.cos(g))*Math.cos(_),d.y=(e+t*Math.cos(g))*Math.sin(_),d.z=t*Math.sin(g),c.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),p.subVectors(d,h).normalize(),u.push(p.x,p.y,p.z),f.push(m/r),f.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=r;g++){let m=(r+1)*v+g-1,_=(r+1)*(v-1)+g-1,y=(r+1)*(v-1)+g,x=(r+1)*v+g;l.push(m,_,x),l.push(_,y,x)}this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(u,3)),this.setAttribute("uv",new Ue(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},kl=class i extends Ke{constructor(e=1,t=.4,n=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:o},n=Math.floor(n),r=Math.floor(r);let a=[],l=[],c=[],u=[],f=new R,h=new R,d=new R,p=new R,v=new R,g=new R,m=new R;for(let y=0;y<=n;++y){let x=y/n*s*Math.PI*2;_(x,s,o,e,d),_(x+.01,s,o,e,p),g.subVectors(p,d),m.addVectors(p,d),v.crossVectors(g,m),m.crossVectors(v,g),v.normalize(),m.normalize();for(let S=0;S<=r;++S){let b=S/r*Math.PI*2,C=-t*Math.cos(b),M=t*Math.sin(b);f.x=d.x+(C*m.x+M*v.x),f.y=d.y+(C*m.y+M*v.y),f.z=d.z+(C*m.z+M*v.z),l.push(f.x,f.y,f.z),h.subVectors(f,d).normalize(),c.push(h.x,h.y,h.z),u.push(y/n),u.push(S/r)}}for(let y=1;y<=n;y++)for(let x=1;x<=r;x++){let S=(r+1)*(y-1)+(x-1),b=(r+1)*y+(x-1),C=(r+1)*y+x,M=(r+1)*(y-1)+x;a.push(S,b,M),a.push(b,C,M)}this.setIndex(a),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(u,2));function _(y,x,S,b,C){let M=Math.cos(y),T=Math.sin(y),E=S/x*y,I=Math.cos(E);C.x=b*(2+I)*.5*M,C.y=b*(2+I)*T*.5,C.z=b*Math.sin(E)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Gl=class i extends Ke{constructor(e=new Ho(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new le,u=new R,f=[],h=[],d=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Ue(f,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(d,2));function v(){for(let y=0;y<t;y++)g(y);g(s===!1?t:0),_(),m()}function g(y){u=e.getPointAt(y/t,u);let x=o.normals[y],S=o.binormals[y];for(let b=0;b<=r;b++){let C=b/r*Math.PI*2,M=Math.sin(C),T=-Math.cos(C);l.x=T*x.x+M*S.x,l.y=T*x.y+M*S.y,l.z=T*x.z+M*S.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,f.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=t;y++)for(let x=1;x<=r;x++){let S=(r+1)*(y-1)+(x-1),b=(r+1)*y+(x-1),C=(r+1)*y+x,M=(r+1)*(y-1)+x;p.push(S,b,M),p.push(b,C,M)}}function _(){for(let y=0;y<=t;y++)for(let x=0;x<=r;x++)c.x=y/t,c.y=x/r,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Oh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Vl=class extends Ke{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new R,s=new R;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let f=l[c],h=f.start,d=f.count;for(let p=h,v=h+d;p<v;p+=3)for(let g=0;g<3;g++){let m=a.getX(p+g),_=a.getX(p+(g+1)%3);r.fromBufferAttribute(o,m),s.fromBufferAttribute(o,_),eg(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,f=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,f),eg(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ue(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function eg(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}var tg=Object.freeze({__proto__:null,BoxGeometry:En,CapsuleGeometry:El,CircleGeometry:xs,ConeGeometry:$n,CylinderGeometry:hn,DodecahedronGeometry:_s,EdgesGeometry:Al,ExtrudeGeometry:Fl,IcosahedronGeometry:bs,LatheGeometry:Ul,OctahedronGeometry:qo,PlaneGeometry:Oi,PolyhedronGeometry:ar,RingGeometry:Bl,ShapeGeometry:lr,SphereGeometry:fn,TetrahedronGeometry:Ol,TorusGeometry:zl,TorusKnotGeometry:kl,TubeGeometry:Gl,WireframeGeometry:Vl}),Hl=class extends tn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new xe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Os(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(ng(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(ng(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function An(i){let e={};for(let t=0;t<i.length;t++){let n=Os(i[t]);for(let r in n)e[r]=n[r]}return e}function ng(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gy(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function um(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var Wi={clone:Os,merge:An},Vy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rt=class extends tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vy,this.fragmentShader=Hy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=Gy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new xe().setHex(r.value);break;case"v2":this.uniforms[n].value=new le().fromArray(r.value);break;case"v3":this.uniforms[n].value=new R().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ct().fromArray(r.value);break;case"m3":this.uniforms[n].value=new rt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new je().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},zr=class extends Rt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Pt=class extends tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wl=class extends Pt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Xl=class extends tn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=na,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ql=class extends tn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yl=class extends tn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Zl=class extends tn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=na,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yo=class extends tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zo=class extends tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},$l=class extends tn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new xe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jl=class extends un{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Si(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ol(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Ev(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function pp(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function Av(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}function Wy(i,e,t,n,r=30){let s=i.clone();s.name=e;let o=[];for(let l=0;l<s.tracks.length;++l){let c=s.tracks[l],u=c.getValueSize(),f=[],h=[];for(let d=0;d<c.times.length;++d){let p=c.times[d]*r;if(!(p<t||p>=n)){f.push(c.times[d]);for(let v=0;v<u;++v)h.push(c.values[d*u+v])}}f.length!==0&&(c.times=Si(f,c.times.constructor),c.values=Si(h,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s}function Xy(i,e=0,t=i,n=30){n<=0&&(n=30);let r=t.tracks.length,s=e/n;for(let o=0;o<r;++o){let a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=i.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===l});if(c===void 0)continue;let u=0,f=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);let h=0,d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let p=a.times.length-1,v;if(s<=a.times[0]){let m=u,_=f-u;v=a.values.slice(m,_)}else if(s>=a.times[p]){let m=p*f+u,_=m+f-u;v=a.values.slice(m,_)}else{let m=a.createInterpolant(),_=u,y=f-u;m.evaluate(s),v=m.resultBuffer.slice(_,y)}l==="quaternion"&&new Xt().fromArray(v).normalize().conjugate().toArray(v);let g=c.times.length;for(let m=0;m<g;++m){let _=m*d+h;if(l==="quaternion")Xt.multiplyQuaternionsFlat(c.values,_,v,0,c.values,_);else{let y=d-h*2;for(let x=0;x<y;++x)c.values[_+x]-=v[x]}}}return i.blendMode=Gf,i}var zh=class{static convertArray(e,t){return Si(e,t)}static isTypedArray(e){return pv(e)}static hasTangents(e){return ol(e)}static getKeyframeOrder(e){return Ev(e)}static sortedArray(e,t,n){return pp(e,t,n)}static flattenJSON(e,t,n,r){Av(e,t,n,r)}static subclip(e,t,n,r,s=30){return Wy(e,t,n,r,s)}static makeClipAdditive(e,t=0,n=e,r=30){return Xy(e,t,n,r)}},cr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Kl=class extends cr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ir,endingEnd:Ir}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lr:s=e,a=2*t-n;break;case Ao:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lr:o=e,l=2*n-t;break;case Ao:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(n-t)/(r-t),v=p*p,g=v*p,m=-h*g+2*h*v-h*p,_=(1+h)*g+(-1.5-2*h)*v+(-.5+h)*p+1,y=(-1-d)*g+(1.5+d)*v+.5*p,x=d*g-d*v;for(let S=0;S!==a;++S)s[S]=m*o[u+S]+_*o[c+S]+y*o[l+S]+x*o[f+S];return s}},$o=class extends cr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}},Ql=class extends cr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},jl=class extends cr{interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let p=(n-t)/(r-t),v=1-p;for(let g=0;g!==a;++g)s[g]=o[c+g]*v+o[l+g]*p;return s}let h=a*2,d=e-1;for(let p=0;p!==a;++p){let v=o[c+p],g=o[l+p],m=d*h+p*2,_=f[m],y=f[m+1],x=e*h+p*2,S=u[x],b=u[x+1],C=Yy(n,t,_,S,r);s[p]=Cv(C,v,y,b,g)}return s}};function Cv(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function qy(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function Yy(i,e,t,n,r){let s=(i-e)/(r-e);for(let o=0;o<8;o++){let a=Cv(s,e,t,n,r)-i;if(Math.abs(a)<1e-10)break;let l=qy(s,e,t,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var kn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Si(t,this.TimeBufferType),this.values=Si(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Si(e.times,Array),values:Si(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),ol(e.settings)&&(n.settings={inTangents:Si(e.settings.inTangents,Array),outTangents:Si(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new jl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Eo:t=this.InterpolantFactoryMethodDiscrete;break;case pl:t=this.InterpolantFactoryMethodLinear;break;case tl:t=this.InterpolantFactoryMethodSmooth;break;case yh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ne("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Eo;case this.InterpolantFactoryMethodLinear:return pl;case this.InterpolantFactoryMethodSmooth:return tl;case this.InterpolantFactoryMethodBezier:return yh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ol(this.settings)&&(ig(this.settings.inTangents,e),ig(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Je("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&pv(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===tl,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let f=a*n,h=f-n,d=f+n;for(let p=0;p!==n;++p){let v=t[f+p];if(v!==t[h+p]||v!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ol(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ig(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=pl;var zi=class extends kn{constructor(e,t,n){super(e,t,n)}};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Eo;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jo=class extends kn{constructor(e,t,n,r){super(e,t,n,r)}};Jo.prototype.ValueTypeName="color";var ws=class extends kn{constructor(e,t,n,r){super(e,t,n,r)}};ws.prototype.ValueTypeName="number";var ec=class extends cr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)Xt.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ts=class extends kn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ec(this.times,this.values,this.getValueSize(),e)}};Ts.prototype.ValueTypeName="quaternion";Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends kn{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Eo;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ko=class extends kn{constructor(e,t,n,r){super(e,t,n,r)}};Ko.prototype.ValueTypeName="vector";var kr=class{constructor(e="",t=-1,n=[],r=Kc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=jn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push($y(n[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(kn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=Ev(l);l=pp(l,1,u),c=pp(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ws(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(s);if(u&&u.length>1){let f=u[1],h=r[f];h||(r[f]=h=[]),h.push(c)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Zy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ws;case"vector":case"vector2":case"vector3":case"vector4":return Ko;case"color":return Jo;case"quaternion":return Ts;case"bool":case"boolean":return zi;case"string":return ki}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function $y(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Zy(i.type);if(i.times===void 0){let n=[],r=[];Av(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),ol(i.settings)&&(t.settings={inTangents:Si(i.settings.inTangents,Float32Array),outTangents:Si(i.settings.outTangents,Float32Array)}),t}var wi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(rg(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!rg(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function rg(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Qo=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hm=new Qo,mn=class{constructor(e){this.manager=e!==void 0?e:hm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};mn.DEFAULT_MATERIAL_NAME="__DEFAULT";var tr={},mp=class extends Error{constructor(e,t){super(e),this.response=t}},vi=class extends mn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=wi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(tr[e]!==void 0){tr[e].push({onLoad:t,onProgress:n,onError:r});return}tr[e]=[],tr[e].push({onLoad:t,onProgress:n,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ne("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=tr[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,p=d!==0,v=0,g=new ReadableStream({start(m){_();function _(){f.read().then(({done:y,value:x})=>{if(y)m.close();else{v+=x.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:d});for(let b=0,C=u.length;b<C;b++){let M=u[b];M.onProgress&&M.onProgress(S)}m.enqueue(x),_()}},y=>{m.error(y)})}}});return new Response(g)}else throw new mp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{wi.add(`file:${e}`,c);let u=tr[e];delete tr[e];for(let f=0,h=u.length;f<h;f++){let d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=tr[e];if(u===void 0)throw this.manager.itemError(e),c;delete tr[e];for(let f=0,h=u.length;f<h;f++){let d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},kh=class extends mn{constructor(e){super(e)}load(e,t,n,r){let s=this,o=new vi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){r?r(l):Je(l),s.manager.itemError(e)}},n,r)}parse(e){let t=[];for(let n=0;n<e.length;n++){let r=kr.parse(e[n]);t.push(r)}return t}},Gh=class extends mn{constructor(e){super(e)}load(e,t,n,r){let s=this,o=[],a=new vs,l=new vi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function u(f){l.load(e[f],function(h){let d=s.parse(h,!0);o[f]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(a.minFilter=Ut),a.image=o,a.format=d.format,a.needsUpdate=!0,t&&t(a))},n,r)}if(Array.isArray(e))for(let f=0,h=e.length;f<h;++f)u(f);else l.load(e,function(f){let h=s.parse(f,!0);if(h.isCubemap){let d=h.mipmaps.length/h.mipmapCount;for(let p=0;p<d;p++){o[p]={mipmaps:[]};for(let v=0;v<h.mipmapCount;v++)o[p].mipmaps.push(h.mipmaps[p*h.mipmapCount+v]),o[p].format=h.format,o[p].width=h.width,o[p].height=h.height}a.image=o}else a.image.width=h.width,a.image.height=h.height,a.mipmaps=h.mipmaps;h.mipmapCount===1&&(a.minFilter=Ut),a.format=h.format,a.needsUpdate=!0,t&&t(a)},n,r);return a}},xo=new WeakMap,Gr=class extends mn{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=wi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=xo.get(o);f===void 0&&(f=[],xo.set(o,f)),f.push({onLoad:t,onError:r})}return o}let a=Po("img");function l(){u(),t&&t(this);let f=xo.get(this)||[];for(let h=0;h<f.length;h++){let d=f[h];d.onLoad&&d.onLoad(this)}xo.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),wi.remove(`image:${e}`);let h=xo.get(this)||[];for(let d=0;d<h.length;d++){let p=h[d];p.onError&&p.onError(f)}xo.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),wi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}},Vh=class extends mn{constructor(e){super(e)}load(e,t,n,r){let s=new Br;s.colorSpace=Qt;let o=new Gr(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}},Hh=class extends mn{constructor(e){super(e)}load(e,t,n,r){let s=this,o=new Bn,a=new vi(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){r!==void 0?r(u):Je(u);return}s._applyTexData(o,c),t&&t(o,c)},n,r),o}createDataTexture(e){let t=new Bn;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Fn,e.wrapT=t.wrapT!==void 0?t.wrapT:Fn,e.magFilter=t.magFilter!==void 0?t.magFilter:Ut,e.minFilter=t.minFilter!==void 0?t.minFilter:Ut,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Ri),t.mipmapCount===1&&(e.minFilter=Ut),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},Wh=class extends mn{constructor(e){super(e)}load(e,t,n,r){let s=new Yt,o=new Gr(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Ai=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Es=class extends Ai{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},np=new je,sg=new R,og=new R,As=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bi,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;sg.setFromMatrixPosition(e.matrixWorld),t.position.copy(sg),og.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(og),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){np.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(np,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Nr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(np)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},uh=new R,hh=new Xt,Ni=new R,Cs=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(uh,hh,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uh,hh,Ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(uh,hh,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uh,hh,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Rr=new R,ag=new le,lg=new le,Nt=class extends Cs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,ag,lg),t.subVectors(lg,ag)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ls*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},gp=class extends As{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=us*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},tc=class extends Ai{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new gp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},vp=class extends As{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0}},ur=class extends Ai{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new vp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Gi=class extends Cs{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xp=class extends As{constructor(){super(new Gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rs=class extends Ai{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new xp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},nc=class extends Ai{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},ic=class extends Ai{constructor(e,t,n=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},jo=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){let n=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){let n=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-r*r)}},rc=class extends Ai{constructor(e=new jo,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},cg={},sc=class i extends mn{constructor(e){super(e),this.textures={}}load(e,t,n,r){let s=this,o=new vi(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){r?r(l):Je(l),s.manager.itemError(e)}},n,r)}parse(e){let t=this.createMaterialFromType(e.type);return t.fromJSON(e,this.textures),t}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return i.createMaterialFromType(e)}static createMaterialFromType(e){let n={ShadowMaterial:Hl,SpriteMaterial:Fo,RawShaderMaterial:zr,ShaderMaterial:Rt,PointsMaterial:Bo,MeshPhysicalMaterial:Wl,MeshStandardMaterial:Pt,MeshPhongMaterial:Xl,MeshToonMaterial:ql,MeshNormalMaterial:Yl,MeshLambertMaterial:Zl,MeshDepthMaterial:Yo,MeshDistanceMaterial:Zo,MeshBasicMaterial:zn,MeshMatcapMaterial:$l,LineDashedMaterial:Jl,LineBasicMaterial:un,Material:tn,...cg}[e],r;return n===void 0?(Fi(`MaterialLoader: Unknown material type "${e}". Use .registerMaterial() before starting the deserialization process.`),r=new tn):r=new n,r}static registerMaterial(e,t){cg[e]=t}},ea=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},oc=class extends Ke{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},ac=class extends mn{constructor(e){super(e)}load(e,t,n,r){let s=this,o=new vi(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){r?r(l):Je(l),s.manager.itemError(e)}},n,r)}parse(e){let t={},n={};function r(d,p){if(t[p]!==void 0)return t[p];let g=d.interleavedBuffers[p],m=s(d,g.buffer),_=bo(g.type,m),y=new Ur(_,g.stride);return y.uuid=g.uuid,g.usage!==void 0&&y.setUsage(g.usage),t[p]=y,y}function s(d,p){if(n[p]!==void 0)return n[p];let g=d.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}let o=e.isInstancedBufferGeometry?new oc:new Ke,a=e.data.index;if(a!==void 0){let d=bo(a.type,a.array);o.setIndex(new it(d,1))}let l=e.data.attributes;for(let d in l){let p=l[d],v;if(p.isInterleavedBufferAttribute){let g=r(e.data,p.data);v=new rr(g,p.itemSize,p.offset,p.normalized)}else{let g=bo(p.type,p.array),m=p.isInstancedBufferAttribute?mi:it;v=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(v.name=p.name),p.usage!==void 0&&v.setUsage(p.usage),p.gpuType!==void 0&&(v.gpuType=p.gpuType),o.setAttribute(d,v)}let c=e.data.morphAttributes;if(c)for(let d in c){let p=c[d],v=[];for(let g=0,m=p.length;g<m;g++){let _=p[g],y;if(_.isInterleavedBufferAttribute){let x=r(e.data,_.data);y=new rr(x,_.itemSize,_.offset,_.normalized)}else{let x=bo(_.type,_.array);y=new it(x,_.itemSize,_.normalized)}_.name!==void 0&&(y.name=_.name),_.usage!==void 0&&y.setUsage(_.usage),_.gpuType!==void 0&&(y.gpuType=_.gpuType),v.push(y)}o.morphAttributes[d]=v}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);let f=e.data.groups||e.data.drawcalls||e.data.offsets;if(f!==void 0)for(let d=0,p=f.length;d!==p;++d){let v=f[d];o.addGroup(v.start,v.count,v.materialIndex)}let h=e.data.boundingSphere;return h!==void 0&&(o.boundingSphere=new en().fromJSON(h)),e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}},ip={},Xh=class extends mn{constructor(e){super(e)}load(e,t,n,r){let s=this,o=this.path===""?ea.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;let a=new vi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(f){r!==void 0&&r(f),Je("ObjectLoader: Can't parse "+e+".",f.message);return}let u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){r!==void 0&&r(new Error("THREE.ObjectLoader: Can't load "+e)),Je("ObjectLoader: Can't load "+e);return}s.parse(c,t)},n,r)}async loadAsync(e,t){let n=this,r=this.path===""?ea.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;let s=new vi(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);let o=await s.loadAsync(e,t),a;try{a=JSON.parse(o)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+e+". "+c.message)}let l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){let n=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,r),o=this.parseImages(e.images,function(){t!==void 0&&t(c)}),a=this.parseTextures(e.textures,o),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,s,l,a,n),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),this.bindLightTargets(c),t!==void 0){let f=!1;for(let h in o)if(o[h].data instanceof HTMLImageElement){f=!0;break}f===!1&&t(c)}return c}async parseAsync(e){let t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),a=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,r,a,o,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(e,t){ip[e]=t}parseShapes(e){let t={};if(e!==void 0)for(let n=0,r=e.length;n<r;n++){let s=new gi().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){let n={},r={};if(t.traverse(function(s){s.isBone&&(r[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){let a=new yl().fromJSON(e[s],r);n[a.uuid]=a}return n}parseGeometries(e,t){let n={};if(e!==void 0){let r=new ac;for(let s=0,o=e.length;s<o;s++){let a,l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=r.parse(l);break;default:l.type in tg?a=tg[l.type].fromJSON(l,t):l.type in ip?a=ip[l.type].fromJSON(l,t):Ne(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(e,t){let n={},r={};if(e!==void 0){let s=new sc;s.setTextures(t);for(let o=0,a=e.length;o<a;o++){let l=e[o];n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),r[l.uuid]=n[l.uuid]}}return r}parseAnimations(e){let t={};if(e!==void 0)for(let n=0;n<e.length;n++){let r=e[n],s=kr.parse(r);t[s.uuid]=s}return t}parseImages(e,t){let n=this,r={},s;function o(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){let c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(u)}else return l.data?{data:bo(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){let l=new Qo(t);s=new Gr(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){let f=e[c],h=f.url;if(Array.isArray(h)){let d=[];for(let p=0,v=h.length;p<v;p++){let g=h[p],m=a(g);m!==null&&(m instanceof HTMLImageElement?d.push(m):d.push(new Bn(m.data,m.width,m.height)))}r[f.uuid]=new di(d)}else{let d=a(f.url);r[f.uuid]=new di(d)}}}return r}async parseImagesAsync(e){let t=this,n={},r;async function s(o){if(typeof o=="string"){let a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await r.loadAsync(l)}else return o.data?{data:bo(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){r=new Gr(this.manager),r.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){let l=e[o],c=l.url;if(Array.isArray(c)){let u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f],p=await s(d);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new Bn(p.data,p.width,p.height)))}n[l.uuid]=new di(u)}else{let u=await s(l.url);n[l.uuid]=new di(u)}}}return n}parseTextures(e,t){function n(s,o){return typeof s=="number"?s:(Ne("ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}let r={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){let a=e[s];a.image===void 0&&Ne('ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&Ne("ObjectLoader: Undefined image",a.image);let l=t[a.image],c=l.data,u;Array.isArray(c)?(u=new Br,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new Bn:u=new Yt,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=n(a.mapping,Jy)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=n(a.wrap[0],ug),u.wrapT=n(a.wrap[1],ug)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.colorSpace!==void 0&&(u.colorSpace=a.colorSpace),a.minFilter!==void 0&&(u.minFilter=n(a.minFilter,hg)),a.magFilter!==void 0&&(u.magFilter=n(a.magFilter,hg)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(u.compareFunction=a.compareFunction),a.normalized!==void 0&&(u.normalized=a.normalized),a.userData!==void 0&&(u.userData=a.userData),r[a.uuid]=u}return r}parseObject(e,t,n,r,s){let o;function a(h){return t[h]===void 0&&Ne("ObjectLoader: Undefined geometry",h),t[h]}function l(h){if(h!==void 0){if(Array.isArray(h)){let d=[];for(let p=0,v=h.length;p<v;p++){let g=h[p];n[g]===void 0&&Ne("ObjectLoader: Undefined material",g),d.push(n[g])}return d}return n[h]===void 0&&Ne("ObjectLoader: Undefined material",h),n[h]}}function c(h){return r[h]===void 0&&Ne("ObjectLoader: Undefined texture",h),r[h]}let u,f;switch(e.type){case"Scene":o=new ei,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new xe(e.background):o.background=c(e.background)),e.environment!==void 0&&(o.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new gl(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new ms(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new Nt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new Gi(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new nc(e.color,e.intensity);break;case"DirectionalLight":o=new Rs(e.color,e.intensity),o.target=e.target||"";break;case"PointLight":o=new ur(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new ic(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new tc(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),o.target=e.target||"";break;case"HemisphereLight":o=new Es(e.color,e.groundColor,e.intensity);break;case"LightProbe":let h=new jo().fromArray(e.sh);o=new rc(h,e.intensity);break;case"SkinnedMesh":u=a(e.geometry),f=l(e.material),o=new _l(u,f),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":u=a(e.geometry),f=l(e.material),o=new nt(u,f);break;case"InstancedMesh":u=a(e.geometry),f=l(e.material);let d=e.count,p=e.instanceMatrix,v=e.instanceColor;o=new Ui(u,f,d),o.instanceMatrix=new mi(new Float32Array(p.array),16),v!==void 0&&(o.instanceColor=new mi(new Float32Array(v.array),v.itemSize));break;case"BatchedMesh":u=a(e.geometry),f=l(e.material),o=new Sl(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,f),o.geometry=u,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._geometryInfo=e.geometryInfo.map(g=>{let m=null,_=null;return g.boundingBox!==void 0&&(m=new on().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(_=new en().fromJSON(g.boundingSphere)),{...g,boundingBox:m,boundingSphere:_}}),o._instanceInfo=e.instanceInfo,o._availableInstanceIds=e._availableInstanceIds,o._availableGeometryIds=e._availableGeometryIds,o._nextIndexStart=e.nextIndexStart,o._nextVertexStart=e.nextVertexStart,o._geometryCount=e.geometryCount,o._maxInstanceCount=e.maxInstanceCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._matricesTexture=c(e.matricesTexture.uuid),o._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(o.boundingSphere=new en().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(o.boundingBox=new on().fromJSON(e.boundingBox));break;case"LOD":o=new xl;break;case"Line":o=new Ei(a(e.geometry),l(e.material));break;case"LineLoop":o=new bl(a(e.geometry),l(e.material));break;case"LineSegments":o=new ti(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":o=new gs(a(e.geometry),l(e.material));break;case"Sprite":o=new vl(l(e.material));break;case"Group":o=new Un;break;case"Bone":o=new Uo;break;default:o=new bt}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.pivot!==void 0&&(o.pivot=new R().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(o.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.blurSamples!==void 0&&(o.shadow.blurSamples=e.shadow.blurSamples),e.shadow.focus!==void 0&&(o.shadow.focus=e.shadow.focus),e.shadow.aspect!==void 0&&(o.shadow.aspect=e.shadow.aspect),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.static!==void 0&&(o.static=e.static),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){let h=e.children;for(let d=0;d<h.length;d++)o.add(this.parseObject(h[d],t,n,r,s))}if(e.animations!==void 0){let h=e.animations;for(let d=0;d<h.length;d++){let p=h[d];o.animations.push(s[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);let h=e.levels;for(let d=0;d<h.length;d++){let p=h[d],v=o.getObjectByProperty("uuid",p.object);v!==void 0&&o.addLevel(v,p.distance,p.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let r=t[n.skeleton];r===void 0?Ne("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(r,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){let n=t.target,r=e.getObjectByProperty("uuid",n);r!==void 0?t.target=r:t.target=new bt}})}},Jy={UVMapping:pc,CubeReflectionMapping:Ci,CubeRefractionMapping:dr,EquirectangularReflectionMapping:ca,EquirectangularRefractionMapping:ua,CubeUVReflectionMapping:Ds},ug={RepeatWrapping:Dr,ClampToEdgeWrapping:Fn,MirroredRepeatWrapping:To},hg={NearestFilter:qt,NearestMipmapNearestFilter:Nf,NearestMipmapLinearFilter:Ns,LinearFilter:Ut,LinearMipmapNearestFilter:ha,LinearMipmapLinearFilter:Ri},rp=new WeakMap,qh=class extends mn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ne("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ne("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=wi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{rp.has(o)===!0?(r&&r(rp.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return wi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),rp.set(l,c),wi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});wi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},fh,ta=class{static getContext(){return fh===void 0&&(fh=new(window.AudioContext||window.webkitAudioContext)),fh}static setContext(e){fh=e}},Yh=class extends mn{constructor(e){super(e)}load(e,t,n,r){let s=this,o=new vi(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{let c=l.slice(0),u=ta.getContext(),f=e+"#decode";s.manager.itemStart(f),u.decodeAudioData(c,function(h){t(h),s.manager.itemEnd(f)}).catch(function(h){a(h),s.manager.itemEnd(f)})}catch(c){a(c)}},n,r);function a(l){r?r(l):Je(l),s.manager.itemError(e)}}},fg=new je,dg=new je,ns=new je,Zh=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Nt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Nt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,ns.copy(e.projectionMatrix);let r=t.eyeSep/2,s=r*t.near/t.focus,o=t.near*Math.tan(ls*t.fov*.5)/t.zoom,a,l;dg.elements[12]=-r,fg.elements[12]=r,a=-o*t.aspect+s,l=o*t.aspect+s,ns.elements[0]=2*t.near/(l-a),ns.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(ns),a=-o*t.aspect-s,l=o*t.aspect-s,ns.elements[0]=2*t.near/(l-a),ns.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(ns)}this.cameraL.matrix.copy(e.matrixWorld).multiply(dg),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply(fg),this.cameraR.matrixWorldNeedsUpdate=!0}},_o=-90,yo=1,lc=class extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Nt(_o,yo,e,t);r.layers=this.layers,this.add(r);let s=new Nt(_o,yo,e,t);s.layers=this.layers,this.add(s);let o=new Nt(_o,yo,e,t);o.layers=this.layers,this.add(o);let a=new Nt(_o,yo,e,t);a.layers=this.layers,this.add(a);let l=new Nt(_o,yo,e,t);l.layers=this.layers,this.add(l);let c=new Nt(_o,yo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},cc=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ps=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ky.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ky(){this._document.hidden===!1&&this.reset()}var is=new R,sp=new Xt,Qy=new R,rs=new R,ss=new R,$h=class extends bt{constructor(){super(),this.type="AudioListener",this.context=ta.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Ps}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();let t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(is,sp,Qy),rs.set(0,0,-1).applyQuaternion(sp),ss.set(0,1,0).applyQuaternion(sp),t.positionX){let n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(is.x,n),t.positionY.linearRampToValueAtTime(is.y,n),t.positionZ.linearRampToValueAtTime(is.z,n),t.forwardX.linearRampToValueAtTime(rs.x,n),t.forwardY.linearRampToValueAtTime(rs.y,n),t.forwardZ.linearRampToValueAtTime(rs.z,n),t.upX.linearRampToValueAtTime(ss.x,n),t.upY.linearRampToValueAtTime(ss.y,n),t.upZ.linearRampToValueAtTime(ss.z,n)}else t.setPosition(is.x,is.y,is.z),t.setOrientation(rs.x,rs.y,rs.z,ss.x,ss.y,ss.z)}},uc=class extends bt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){Ne("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Ne("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Ne("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){Ne("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){Ne("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Ne("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){Ne("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(Ne("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},os=new R,pg=new Xt,jy=new R,as=new R,Jh=class extends uc{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(os,pg,jy),as.set(0,0,1).applyQuaternion(pg);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(os.x,n),t.positionY.linearRampToValueAtTime(os.y,n),t.positionZ.linearRampToValueAtTime(os.z,n),t.orientationX.linearRampToValueAtTime(as.x,n),t.orientationY.linearRampToValueAtTime(as.y,n),t.orientationZ.linearRampToValueAtTime(as.z,n)}else t.setPosition(os.x,os.y,os.z),t.setOrientation(as.x,as.y,as.z)}},Kh=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},hc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,s=e*r+r,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)n[s+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,o=r;s!==o;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,r){Xt.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){let o=this._workIndex*s;Xt.multiplyQuaternionsFlat(e,o,e,t,e,n),Xt.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,n,r,s){let o=1-r;for(let a=0;a!==s;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*r}}_lerpAdditive(e,t,n,r,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[n+o]*r}}},fm="\\[\\]\\.:\\/",e1=new RegExp("["+fm+"]","g"),dm="[^"+fm+"]",t1="[^"+fm.replace("\\.","")+"]",n1=/((?:WC+[\/:])*)/.source.replace("WC",dm),i1=/(WCOD+)?/.source.replace("WCOD",t1),r1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dm),s1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dm),o1=new RegExp("^"+n1+i1+r1+s1+"$"),a1=["material","materials","bones","map"],_p=class{constructor(e,t,n){let r=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(e1,"")}static parseTrackName(e){let t=o1.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);a1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=_p;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qh=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=jn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,r=arguments.length;n!==r;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length,a,l=e.length,c=this.nCachedObjects_;for(let u=0,f=arguments.length;u!==f;++u){let h=arguments[u],d=h.uuid,p=t[d];if(p===void 0){p=l++,t[d]=p,e.push(h);for(let v=0,g=o;v!==g;++v)s[v].push(new At(h,n[v],r[v]))}else if(p<c){a=e[p];let v=--c,g=e[v];t[g.uuid]=p,e[p]=g,t[d]=v,e[v]=h;for(let m=0,_=o;m!==_;++m){let y=s[m],x=y[v],S=y[p];y[p]=x,S===void 0&&(S=new At(h,n[m],r[m])),y[v]=S}}else e[p]!==a&&Je("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length,s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let l=arguments[o],c=l.uuid,u=t[c];if(u!==void 0&&u>=s){let f=s++,h=e[f];t[h.uuid]=u,e[u]=h,t[c]=f,e[f]=l;for(let d=0,p=r;d!==p;++d){let v=n[d],g=v[f],m=v[u];v[u]=g,v[f]=m}}}this.nCachedObjects_=s}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length,s=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){let c=arguments[a],u=c.uuid,f=t[u];if(f!==void 0)if(delete t[u],f<s){let h=--s,d=e[h],p=--o,v=e[p];f!==h&&(t[d.uuid]=f),e[f]=d,h!==p&&(t[v.uuid]=h),e[h]=v,e.pop();for(let g=0,m=r;g!==m;++g){let _=n[g],y=_[h],x=_[p];_[f]=y,_[h]=x,_.pop()}}else{let h=--o,d=e[h];f!==h&&(t[d.uuid]=f),e[f]=d,e.pop();for(let p=0,v=r;p!==v;++p){let g=n[p];g[f]=g[h],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){let n=this._bindingsIndicesByPath,r=n[e],s=this._bindings;if(r!==void 0)return s[r];let o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,f=new Array(c);r=s.length,n[e]=r,o.push(e),a.push(t),s.push(f);for(let h=u,d=l.length;h!==d;++h){let p=l[h];f[h]=new At(p,e,t)}return f}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let r=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=r[a];t[c]=n,o[n]=l,o.pop(),s[n]=s[a],s.pop(),r[n]=r[a],r.pop()}}},fc=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Ir,endingEnd:Ir};for(let c=0;c!==o;++c){let u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Yp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,s=r.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Gf:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Kc:default:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(o),c[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,s=this._loopCount,o=n===Zp;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(n===qp){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){let a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=s,this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=Lr,r.endingEnd=Lr):(e?r.endingStart=this.zeroSlopeAtStart?Lr:Ir:r.endingStart=Ao,t?r.endingEnd=this.zeroSlopeAtEnd?Lr:Ir:r.endingEnd=Ao)}_scheduleFading(e,t,n){let r=this._mixer,s=r.time,o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}},l1=new Float32Array(1),jh=class extends Zn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let f=0;f!==s;++f){let h=r[f],d=h.name,p=u[d];if(p!==void 0)++p.referenceCount,o[f]=p;else{if(p=o[f],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,d));continue}let v=t&&t._propertyBindings[f].binding.parsedPath;p=new hc(At.create(n,d,v),h.ValueTypeName,h.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,d),o[f]=p}a[f].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let f=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete f[h],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,s=this._bindings,o=r[t];o===void 0&&(o={},r[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new $o(new Float32Array(2),new Float32Array(2),1,l1),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let r=t||this._root,s=r.uuid,o=typeof e=="string"?kr.findByName(r,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Kc),l!==void 0){let f=l.actionByRoot[s];if(f!==void 0&&f.blendMode===n)return f;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new fc(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){let n=t||this._root,r=n.uuid,s=typeof e=="string"?kr.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(r,e,s,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=u,t[u]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},ef=class extends Lo{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isRenderTarget3D=!0,this.depth=n;for(let s=0;s<this.textures.length;s++){let o=new fs(null,e,t,n);o.isRenderTargetTexture=!0,o.renderTarget=this,this.textures[s]=o}this._setTextureOptions(r)}},tf=class i{constructor(e){this.value=e}clone(){return new i(this.value.clone===void 0?this.value:this.value.clone())}},c1=0,nf=class extends Zn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:c1++}),this.name="",this.usage=Bs,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let n=0,r=t.length;n<r;n++){let s=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<s.length;o++)this.uniforms.push(s[o].clone())}return this}clone(){return new this.constructor().copy(this)}},rf=class extends Ur{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},sf=class{constructor(e,t,n,r,s,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=r,this.count=s,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},mg=new je,of=class{constructor(e,t,n=0,r=1/0){this.ray=new sr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ds,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mg),this}intersectObject(e,t=!0,n=[]){return yp(e,this,n,t),n.sort(gg),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)yp(e[r],this,n,t);return n.sort(gg),n}};function gg(i,e){return i.distance-e.distance}function yp(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)yp(s[o],e,t,!0)}}var af=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ne("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},lf=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},cf=class{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}},xm=class xm{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};xm.prototype.isMatrix2=!0;var uf=xm,vg=new le,dc=class{constructor(e=new le(1/0,1/0),t=new le(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vg.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vg).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},xg=new R,dh=new R,Mo=new R,So=new R,op=new R,u1=new R,h1=new R,hf=class{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){xg.subVectors(e,this.start),dh.subVectors(this.end,this.start);let n=dh.dot(dh);if(n===0)return 0;let s=dh.dot(xg)/n;return t&&(s=tt(s,0,1)),s}closestPointToPoint(e,t,n){let r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=u1,n=h1){let r=10000000000000001e-32,s,o,a=this.start,l=e.start,c=this.end,u=e.end;Mo.subVectors(c,a),So.subVectors(u,l),op.subVectors(a,l);let f=Mo.dot(Mo),h=So.dot(So),d=So.dot(op);if(f<=r&&h<=r)return t.copy(a),n.copy(l),t.sub(n),t.dot(t);if(f<=r)s=0,o=d/h,o=tt(o,0,1);else{let p=Mo.dot(op);if(h<=r)o=0,s=tt(-p/f,0,1);else{let v=Mo.dot(So),g=f*h-v*v;g!==0?s=tt((v*d-p*h)/g,0,1):s=0,o=(v*s+d)/h,o<0?(o=0,s=tt(-p/f,0,1)):o>1&&(o=1,s=tt((v-p)/f,0,1))}}return t.copy(a).addScaledVector(Mo,s),n.copy(l).addScaledVector(So,o),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},_g=new R,ff=class extends bt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let n=new Ke,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){let c=o/l*Math.PI*2,u=a/l*Math.PI*2;r.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Ue(r,3));let s=new un({fog:!1,toneMapped:!1});this.cone=new ti(n,s),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),_g.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(_g),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},Pr=new R,ph=new je,ap=new je,df=class extends ti{constructor(e){let t=Rv(e),n=new Ke,r=[],s=[];for(let c=0;c<t.length;c++){let u=t[c];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(0,0,0),s.push(0,0,0))}n.setAttribute("position",new Ue(r,3)),n.setAttribute("color",new Ue(s,3));let o=new un({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;let a=new xe(255),l=new xe(65280);this.setColors(a,l)}updateMatrixWorld(e){let t=this.bones,n=this.geometry,r=n.getAttribute("position");ap.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){let a=t[s];a.parent&&a.parent.isBone&&(ph.multiplyMatrices(ap,a.matrixWorld),Pr.setFromMatrixPosition(ph),r.setXYZ(o,Pr.x,Pr.y,Pr.z),ph.multiplyMatrices(ap,a.parent.matrixWorld),Pr.setFromMatrixPosition(ph),r.setXYZ(o+1,Pr.x,Pr.y,Pr.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){let r=this.geometry.getAttribute("color");for(let s=0;s<r.count;s+=2)r.setXYZ(s,e.r,e.g,e.b),r.setXYZ(s+1,t.r,t.g,t.b);return r.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function Rv(i){let e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push(...Rv(i.children[t]));return e}var pf=class extends nt{constructor(e,t,n){let r=new fn(t,4,2),s=new zn({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},f1=new R,yg=new xe,Mg=new xe,mf=class extends bt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let r=new qo(t);r.rotateY(Math.PI*.5),this.material=new zn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let s=r.getAttribute("position"),o=new Float32Array(s.count*3);r.setAttribute("color",new it(o,3)),this.add(new nt(r,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");yg.copy(this.light.color),Mg.copy(this.light.groundColor);for(let n=0,r=t.count;n<r;n++){let s=n<r/2?yg:Mg;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt(f1.setFromMatrixPosition(this.light.matrixWorld).negate())}},gf=class extends ti{constructor(e=10,t=10,n=4473924,r=8947848){n=new xe(n),r=new xe(r);let s=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,d=0,p=-a;h<=t;h++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);let v=h===s?n:r;v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3}let u=new Ke;u.setAttribute("position",new Ue(l,3)),u.setAttribute("color",new Ue(c,3));let f=new un({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},vf=class extends ti{constructor(e=10,t=16,n=8,r=64,s=4473924,o=8947848){s=new xe(s),o=new xe(o);let a=[],l=[];if(t>1)for(let f=0;f<t;f++){let h=f/t*(Math.PI*2),d=Math.sin(h)*e,p=Math.cos(h)*e;a.push(0,0,0),a.push(d,0,p);let v=f&1?s:o;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let f=0;f<n;f++){let h=f&1?s:o,d=e-e/n*f;for(let p=0;p<r;p++){let v=p/r*(Math.PI*2),g=Math.sin(v)*d,m=Math.cos(v)*d;a.push(g,0,m),l.push(h.r,h.g,h.b),v=(p+1)/r*(Math.PI*2),g=Math.sin(v)*d,m=Math.cos(v)*d,a.push(g,0,m),l.push(h.r,h.g,h.b)}}let c=new Ke;c.setAttribute("position",new Ue(a,3)),c.setAttribute("color",new Ue(l,3));let u=new un({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Sg=new R,mh=new R,bg=new R,xf=class extends bt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new Ke;r.setAttribute("position",new Ue([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let s=new un({fog:!1,toneMapped:!1});this.lightPlane=new Ei(r,s),this.add(this.lightPlane),r=new Ke,r.setAttribute("position",new Ue([0,0,0,0,0,1],3)),this.targetLine=new Ei(r,s),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Sg.setFromMatrixPosition(this.light.matrixWorld),mh.setFromMatrixPosition(this.light.target.matrixWorld),bg.subVectors(mh,Sg),this.lightPlane.lookAt(mh),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(mh),this.targetLine.scale.z=bg.length()}},gh=new R,Wt=new Cs,_f=class extends ti{constructor(e){let t=new Ke,n=new un({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,v){l(p),l(v)}function l(p){r.push(0,0,0),s.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(r.length/3-1)}t.setAttribute("position",new Ue(r,3)),t.setAttribute("color",new Ue(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();let c=new xe(16755200),u=new xe(16711680),f=new xe(43775),h=new xe(16777215),d=new xe(3355443);this.setColors(c,u,f,h,d)}setColors(e,t,n,r,s){let a=this.geometry.getAttribute("color");return a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,r.r,r.g,r.b),a.setXYZ(39,r.r,r.g,r.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0,this}update(){let e=this.geometry,t=this.pointMap,n=1,r=1,s,o;if(Wt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,o=0;else if(this.camera.coordinateSystem===Yn)s=-1,o=1;else if(this.camera.coordinateSystem===Nr)s=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Kt("c",t,e,Wt,0,0,s),Kt("t",t,e,Wt,0,0,o),Kt("n1",t,e,Wt,-n,-r,s),Kt("n2",t,e,Wt,n,-r,s),Kt("n3",t,e,Wt,-n,r,s),Kt("n4",t,e,Wt,n,r,s),Kt("f1",t,e,Wt,-n,-r,o),Kt("f2",t,e,Wt,n,-r,o),Kt("f3",t,e,Wt,-n,r,o),Kt("f4",t,e,Wt,n,r,o),Kt("u1",t,e,Wt,n*.7,r*1.1,s),Kt("u2",t,e,Wt,-n*.7,r*1.1,s),Kt("u3",t,e,Wt,0,r*2,s),Kt("cf1",t,e,Wt,-n,0,o),Kt("cf2",t,e,Wt,n,0,o),Kt("cf3",t,e,Wt,0,-r,o),Kt("cf4",t,e,Wt,0,r,o),Kt("cn1",t,e,Wt,-n,0,s),Kt("cn2",t,e,Wt,n,0,s),Kt("cn3",t,e,Wt,0,-r,s),Kt("cn4",t,e,Wt,0,r,s),e.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function Kt(i,e,t,n,r,s,o){gh.set(r,s,o).unproject(n);let a=e[i];if(a!==void 0){let l=t.getAttribute("position");for(let c=0,u=a.length;c<u;c++)l.setXYZ(a[c],gh.x,gh.y,gh.z)}}var vh=new on,yf=class extends ti{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(24),s=new Ke;s.setIndex(new it(n,1)),s.setAttribute("position",new it(r,3)),super(s,new un({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&vh.setFromObject(this.object),vh.isEmpty())return;let e=vh.min,t=vh.max,n=this.geometry.attributes.position,r=n.array;r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=e.x,r[4]=t.y,r[5]=t.z,r[6]=e.x,r[7]=e.y,r[8]=t.z,r[9]=t.x,r[10]=e.y,r[11]=t.z,r[12]=t.x,r[13]=t.y,r[14]=e.z,r[15]=e.x,r[16]=t.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=t.x,r[22]=e.y,r[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Mf=class extends ti{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Ke;s.setIndex(new it(n,1)),s.setAttribute("position",new Ue(r,3)),super(s,new un({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Sf=class extends Ei{constructor(e,t=1,n=16776960){let r=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Ke;o.setAttribute("position",new Ue(s,3)),o.computeBoundingSphere(),super(o,new un({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Ke;l.setAttribute("position",new Ue(a,3)),l.computeBoundingSphere(),this.add(new nt(l,new zn({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},wg=new R,xh,lp,bf=class extends bt{constructor(e=new R(0,0,1),t=new R(0,0,0),n=1,r=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",xh===void 0&&(xh=new Ke,xh.setAttribute("position",new Ue([0,0,0,0,1,0],3)),lp=new $n(.5,1,5,1),lp.translate(0,-.5,0)),this.position.copy(t),this.line=new Ei(xh,new un({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new nt(lp,new zn({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{wg.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(wg,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},wf=class extends ti{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Ke;r.setAttribute("position",new Ue(t,3)),r.setAttribute("color",new Ue(n,3));let s=new un({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){let r=new xe,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Tf=class{constructor(){this.type="ShapePath",this.color=new xe,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new Or,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,o){return this.currentPath.bezierCurveTo(e,t,n,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let u=!1,f=c.length;for(let h=0,d=f-1;h<f;d=h++){let p=c[h],v=c[d];p.y>l.y!=v.y>l.y&&l.x<(v.x-p.x)*(l.y-p.y)/(v.y-p.y)+p.x&&(u=!u)}return u}function t(l,c){let u=c.getCenter(new le);if(e(u,l))return u;let f=u.y,h=[],d=l.length;for(let p=0;p<d;p++){let v=l[p],g=l[(p+1)%d];if(v.y>f!=g.y>f){let m=v.x+(f-v.y)*(g.x-v.x)/(g.y-v.y);h.push(m)}}return h.length>1&&(h.sort((p,v)=>p-v),u.x=(h[0]+h[1])/2),u}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Ne('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let r=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),s=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let u=pi.area(c);if(u===0)continue;let f=new dc;for(let h=0;h<c.length;h++)f.expandByPoint(c[h]);s.push({subPath:l,points:c,boundingBox:f,interiorPoint:t(c,f),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}s.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<s.length;l++){let c=s[l],u=0;for(let f=l-1;f>=0;f--){let h=s[f];if(h.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,h.points)){c.container=h.exclude?h.container:h,u=h.winding,c.winding+=u;break}}r(c.winding)===r(u)&&(c.exclude=!0)}for(let l of s)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let o=[],a=new Map;for(let l of s){if(l.exclude||l.role!=="outer")continue;let c=new gi;c.curves=l.subPath.curves,o.push(c),a.set(l,c)}for(let l of s){if(l.exclude||l.role!=="hole")continue;let c=a.get(l.container);if(!c)continue;let u=new Or;u.curves=l.subPath.curves,c.holes.push(u)}return o}},Ef=class extends Zn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function d1(i,e){let t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function p1(i,e){let t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function m1(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function Wf(i,e,t,n){let r=g1(n);switch(t){case zf:return i*e;case xc:return i*e/r.components*r.byteLength;case fa:return i*e/r.components*r.byteLength;case mr:return i*e*2/r.components*r.byteLength;case _c:return i*e*2/r.components*r.byteLength;case kf:return i*e*3/r.components*r.byteLength;case Tn:return i*e*4/r.components*r.byteLength;case yc:return i*e*4/r.components*r.byteLength;case da:case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sc:case wc:return Math.max(i,16)*Math.max(e,8)/4;case Mc:case bc:return Math.max(i,8)*Math.max(e,8)/2;case Tc:case Ec:case Cc:case Rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ac:case va:case Pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case zc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case kc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xc:case qc:case Yc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zc:case $c:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xa:case Jc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function g1(i){switch(i){case Gn:case Ff:return{byteLength:1,components:1};case Fs:case Uf:case nn:return{byteLength:2,components:1};case gc:case vc:return{byteLength:2,components:4};case ii:case mc:case wn:return{byteLength:4,components:1};case Bf:case Of:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var Af=class{static contain(e,t){return d1(e,t)}static cover(e,t){return p1(e,t)}static fill(e){return m1(e)}static getByteLength(e,t,n,r){return Wf(e,t,n,r)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Kv(){let i=null,e=!1,t=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function v1(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){let p=f[h],v=f[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){let v=f[d];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var x1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_1=`#ifdef USE_ALPHAHASH
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
#endif`,y1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w1=`#ifdef USE_AOMAP
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
#endif`,T1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E1=`#ifdef USE_BATCHING
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
#endif`,A1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,I1=`#ifdef USE_IRIDESCENCE
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
#endif`,L1=`#ifdef USE_BUMPMAP
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
#endif`,D1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,O1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,z1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,k1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,G1=`#define PI 3.141592653589793
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
} // validated`,V1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,H1=`vec3 transformedNormal = objectNormal;
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
#endif`,W1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z1="gl_FragColor = linearToOutputTexel( gl_FragColor );",$1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J1=`#ifdef USE_ENVMAP
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
#endif`,K1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Q1=`#ifdef USE_ENVMAP
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
#endif`,j1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eM=`#ifdef USE_ENVMAP
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
#endif`,tM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sM=`#ifdef USE_GRADIENTMAP
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
}`,oM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,uM=`#ifdef USE_ENVMAP
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
#endif`,hM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mM=`PhysicalMaterial material;
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
#endif`,gM=`uniform sampler2D dfgLUT;
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
}`,vM=`
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
#endif`,xM=`#if defined( RE_IndirectDiffuse )
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
#endif`,_M=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,MM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CM=`#if defined( USE_POINTS_UV )
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
#endif`,RM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NM=`#ifdef USE_MORPHTARGETS
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
#endif`,FM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,GM=`#ifdef USE_NORMALMAP
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
#endif`,VM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ZM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$M=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iS=`float getShadowMask() {
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
}`,rS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sS=`#ifdef USE_SKINNING
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
#endif`,oS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aS=`#ifdef USE_SKINNING
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
#endif`,lS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fS=`#ifdef USE_TRANSMISSION
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
#endif`,dS=`#ifdef USE_TRANSMISSION
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
#endif`,pS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_S=`uniform sampler2D t2D;
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
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,SS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`#include <common>
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
}`,TS=`#if DEPTH_PACKING == 3200
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
}`,ES=`#define DISTANCE
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
}`,AS=`#define DISTANCE
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
}`,CS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PS=`uniform float scale;
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
}`,IS=`uniform vec3 diffuse;
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
}`,LS=`#include <common>
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
}`,DS=`uniform vec3 diffuse;
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
}`,NS=`#define LAMBERT
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
}`,FS=`#define LAMBERT
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
}`,US=`#define MATCAP
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
}`,BS=`#define MATCAP
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
}`,OS=`#define NORMAL
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
}`,zS=`#define NORMAL
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
}`,kS=`#define PHONG
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
}`,GS=`#define PHONG
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
}`,VS=`#define STANDARD
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
}`,HS=`#define STANDARD
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
}`,WS=`#define TOON
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
}`,XS=`#define TOON
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
}`,qS=`uniform float size;
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
}`,YS=`uniform vec3 diffuse;
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
}`,ZS=`#include <common>
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
}`,$S=`uniform vec3 color;
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
}`,JS=`uniform float rotation;
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
}`,KS=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:x1,alphahash_pars_fragment:_1,alphamap_fragment:y1,alphamap_pars_fragment:M1,alphatest_fragment:S1,alphatest_pars_fragment:b1,aomap_fragment:w1,aomap_pars_fragment:T1,batching_pars_vertex:E1,batching_vertex:A1,begin_vertex:C1,beginnormal_vertex:R1,bsdfs:P1,iridescence_fragment:I1,bumpmap_pars_fragment:L1,clipping_planes_fragment:D1,clipping_planes_pars_fragment:N1,clipping_planes_pars_vertex:F1,clipping_planes_vertex:U1,color_fragment:B1,color_pars_fragment:O1,color_pars_vertex:z1,color_vertex:k1,common:G1,cube_uv_reflection_fragment:V1,defaultnormal_vertex:H1,displacementmap_pars_vertex:W1,displacementmap_vertex:X1,emissivemap_fragment:q1,emissivemap_pars_fragment:Y1,colorspace_fragment:Z1,colorspace_pars_fragment:$1,envmap_fragment:J1,envmap_common_pars_fragment:K1,envmap_pars_fragment:Q1,envmap_pars_vertex:j1,envmap_physical_pars_fragment:uM,envmap_vertex:eM,fog_vertex:tM,fog_pars_vertex:nM,fog_fragment:iM,fog_pars_fragment:rM,gradientmap_pars_fragment:sM,lightmap_pars_fragment:oM,lights_lambert_fragment:aM,lights_lambert_pars_fragment:lM,lights_pars_begin:cM,lights_toon_fragment:hM,lights_toon_pars_fragment:fM,lights_phong_fragment:dM,lights_phong_pars_fragment:pM,lights_physical_fragment:mM,lights_physical_pars_fragment:gM,lights_fragment_begin:vM,lights_fragment_maps:xM,lights_fragment_end:_M,lightprobes_pars_fragment:yM,logdepthbuf_fragment:MM,logdepthbuf_pars_fragment:SM,logdepthbuf_pars_vertex:bM,logdepthbuf_vertex:wM,map_fragment:TM,map_pars_fragment:EM,map_particle_fragment:AM,map_particle_pars_fragment:CM,metalnessmap_fragment:RM,metalnessmap_pars_fragment:PM,morphinstance_vertex:IM,morphcolor_vertex:LM,morphnormal_vertex:DM,morphtarget_pars_vertex:NM,morphtarget_vertex:FM,normal_fragment_begin:UM,normal_fragment_maps:BM,normal_pars_fragment:OM,normal_pars_vertex:zM,normal_vertex:kM,normalmap_pars_fragment:GM,clearcoat_normal_fragment_begin:VM,clearcoat_normal_fragment_maps:HM,clearcoat_pars_fragment:WM,iridescence_pars_fragment:XM,opaque_fragment:qM,packing:YM,premultiplied_alpha_fragment:ZM,project_vertex:$M,dithering_fragment:JM,dithering_pars_fragment:KM,roughnessmap_fragment:QM,roughnessmap_pars_fragment:jM,shadowmap_pars_fragment:eS,shadowmap_pars_vertex:tS,shadowmap_vertex:nS,shadowmask_pars_fragment:iS,skinbase_vertex:rS,skinning_pars_vertex:sS,skinning_vertex:oS,skinnormal_vertex:aS,specularmap_fragment:lS,specularmap_pars_fragment:cS,tonemapping_fragment:uS,tonemapping_pars_fragment:hS,transmission_fragment:fS,transmission_pars_fragment:dS,uv_pars_fragment:pS,uv_pars_vertex:mS,uv_vertex:gS,worldpos_vertex:vS,background_vert:xS,background_frag:_S,backgroundCube_vert:yS,backgroundCube_frag:MS,cube_vert:SS,cube_frag:bS,depth_vert:wS,depth_frag:TS,distance_vert:ES,distance_frag:AS,equirect_vert:CS,equirect_frag:RS,linedashed_vert:PS,linedashed_frag:IS,meshbasic_vert:LS,meshbasic_frag:DS,meshlambert_vert:NS,meshlambert_frag:FS,meshmatcap_vert:US,meshmatcap_frag:BS,meshnormal_vert:OS,meshnormal_frag:zS,meshphong_vert:kS,meshphong_frag:GS,meshphysical_vert:VS,meshphysical_frag:HS,meshtoon_vert:WS,meshtoon_frag:XS,points_vert:qS,points_frag:YS,shadow_vert:ZS,shadow_frag:$S,sprite_vert:JS,sprite_frag:KS},Oe={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Pi={basic:{uniforms:An([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:An([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new xe(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:An([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:An([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:An([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new xe(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:An([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:An([Oe.points,Oe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:An([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:An([Oe.common,Oe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:An([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:An([Oe.sprite,Oe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:An([Oe.common,Oe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:An([Oe.lights,Oe.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Pi.physical={uniforms:An([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Xf={r:0,b:0,g:0},QS=new je,Qv=new rt;Qv.set(-1,0,0,0,1,0,0,0,1);function jS(i,e,t,n,r,s){let o=new xe(0),a=r===!0?0:1,l,c,u=null,f=0,h=null;function d(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){let x=_.backgroundBlurriness>0;y=e.get(y,x)}return y}function p(_){let y=!1,x=d(_);x===null?g(o,a):x&&x.isColor&&(g(x,1),y=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(_,y){let x=d(y);x&&(x.isCubeTexture||x.mapping===Ds)?(c===void 0&&(c=new nt(new En(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:Os(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(QS.makeRotationFromEuler(y.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qv),c.material.toneMapped=gt.getTransfer(x.colorSpace)!==St,(u!==x||f!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new nt(new Oi(2,2),new Rt({name:"BackgroundMaterial",uniforms:Os(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=gt.getTransfer(x.colorSpace)!==St,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,y){_.getRGB(Xf,um(i)),t.buffers.color.setClear(Xf.r,Xf.g,Xf.b,y,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),a=y,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:p,addToRenderList:v,dispose:m}}function eb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(I,D,U,N,L){let F=!1,G=f(I,N,U,D);s!==G&&(s=G,c(s.object)),F=d(I,N,U,L),F&&p(I,N,U,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,x(I,D,U,N),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function f(I,D,U,N){let L=N.wireframe===!0,F=n[D.id];F===void 0&&(F={},n[D.id]=F);let G=I.isInstancedMesh===!0?I.id:0,Q=F[G];Q===void 0&&(Q={},F[G]=Q);let q=Q[U.id];q===void 0&&(q={},Q[U.id]=q);let Z=q[L];return Z===void 0&&(Z=h(l()),q[L]=Z),Z}function h(I){let D=[],U=[],N=[];for(let L=0;L<t;L++)D[L]=0,U[L]=0,N[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:N,object:I,attributes:{},index:null}}function d(I,D,U,N){let L=s.attributes,F=D.attributes,G=0,Q=U.getAttributes();for(let q in Q)if(Q[q].location>=0){let K=L[q],ee=F[q];if(ee===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),K===void 0||K.attribute!==ee||ee&&K.data!==ee.data)return!0;G++}return s.attributesNum!==G||s.index!==N}function p(I,D,U,N){let L={},F=D.attributes,G=0,Q=U.getAttributes();for(let q in Q)if(Q[q].location>=0){let K=F[q];K===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));let ee={};ee.attribute=K,K&&K.data&&(ee.data=K.data),L[q]=ee,G++}s.attributes=L,s.attributesNum=G,s.index=N}function v(){let I=s.newAttributes;for(let D=0,U=I.length;D<U;D++)I[D]=0}function g(I){m(I,0)}function m(I,D){let U=s.newAttributes,N=s.enabledAttributes,L=s.attributeDivisors;U[I]=1,N[I]===0&&(i.enableVertexAttribArray(I),N[I]=1),L[I]!==D&&(i.vertexAttribDivisor(I,D),L[I]=D)}function _(){let I=s.newAttributes,D=s.enabledAttributes;for(let U=0,N=D.length;U<N;U++)D[U]!==I[U]&&(i.disableVertexAttribArray(U),D[U]=0)}function y(I,D,U,N,L,F,G){G===!0?i.vertexAttribIPointer(I,D,U,L,F):i.vertexAttribPointer(I,D,U,N,L,F)}function x(I,D,U,N){v();let L=N.attributes,F=U.getAttributes(),G=D.defaultAttributeValues;for(let Q in F){let q=F[Q];if(q.location>=0){let Z=L[Q];if(Z===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){let K=Z.normalized,ee=Z.itemSize,ne=e.get(Z);if(ne===void 0)continue;let ze=ne.buffer,Ce=ne.type,Ve=ne.bytesPerElement,W=Ce===i.INT||Ce===i.UNSIGNED_INT||Z.gpuType===mc;if(Z.isInterleavedBufferAttribute){let re=Z.data,we=re.stride,ke=Z.offset;if(re.isInstancedInterleavedBuffer){for(let Ee=0;Ee<q.locationSize;Ee++)m(q.location+Ee,re.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ee=0;Ee<q.locationSize;Ee++)g(q.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Ee=0;Ee<q.locationSize;Ee++)y(q.location+Ee,ee/q.locationSize,Ce,K,we*Ve,(ke+ee/q.locationSize*Ee)*Ve,W)}else{if(Z.isInstancedBufferAttribute){for(let re=0;re<q.locationSize;re++)m(q.location+re,Z.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let re=0;re<q.locationSize;re++)g(q.location+re);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let re=0;re<q.locationSize;re++)y(q.location+re,ee/q.locationSize,Ce,K,ee*Ve,ee/q.locationSize*re*Ve,W)}}else if(G!==void 0){let K=G[Q];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(q.location,K);break;case 3:i.vertexAttrib3fv(q.location,K);break;case 4:i.vertexAttrib4fv(q.location,K);break;default:i.vertexAttrib1fv(q.location,K)}}}}_()}function S(){T();for(let I in n){let D=n[I];for(let U in D){let N=D[U];for(let L in N){let F=N[L];for(let G in F)u(F[G].object),delete F[G];delete N[L]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;let D=n[I.id];for(let U in D){let N=D[U];for(let L in N){let F=N[L];for(let G in F)u(F[G].object),delete F[G];delete N[L]}}delete n[I.id]}function C(I){for(let D in n){let U=n[D];for(let N in U){let L=U[N];if(L[I.id]===void 0)continue;let F=L[I.id];for(let G in F)u(F[G].object),delete F[G];delete L[I.id]}}}function M(I){for(let D in n){let U=n[D],N=I.isInstancedMesh===!0?I.id:0,L=U[N];if(L!==void 0){for(let F in L){let G=L[F];for(let Q in G)u(G[Q].object),delete G[Q];delete L[F]}delete U[N],Object.keys(U).length===0&&delete n[D]}}}function T(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:E,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:M,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function tb(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function nb(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Tn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let M=C===nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Gn&&C!==wn&&!M&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ne("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,maxSamples:S,samples:b}}function ib(i){let e=this,t=null,n=0,r=!1,s=!1,o=new fi,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){let p=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!r||p===null||p.length===0||s&&!g)s?u(null):c();else{let _=s?0:n,y=_*4,x=m.clippingState||null;l.value=x,x=u(p,h,y,d);for(let S=0;S!==y;++S)x[S]=t[S];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,p){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=l.value,p!==!0||g===null){let m=d+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,x=d;y!==v;++y,x+=4)o.copy(f[y]).applyMatrix4(_,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}var ya=4,rb=6,sb=20,ob=256,tu=new Gi,Pv=new xe,_m=null,ym=0,Mm=0,Sm=!1,ab=new R,zs=new R,ks=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=ab}=s;_m=this._renderer.getRenderTarget(),ym=this._renderer.getActiveCubeFace(),Mm=this._renderer.getActiveMipmapLevel(),Sm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_m,ym,Mm),this._renderer.xr.enabled=Sm,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ci||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_m=this._renderer.getRenderTarget(),ym=this._renderer.getActiveCubeFace(),Mm=this._renderer.getActiveMipmapLevel(),Sm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:nn,format:Tn,colorSpace:Co,depthBuffer:!1},r=Iv(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iv(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lb(s)),this._blurMaterial=ub(s,e,t),this._ggxMaterial=cb(s,e,t)}return r}_compileMaterial(e){let t=new nt(new Ke,e);this._renderer.compile(t,tu)}_sceneToCubeUV(e,t,n,r,s){let l=new Nt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Pv),f.toneMapping=gn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nt(new En,new zn({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,m=!1,_=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,m=!0):(g.color.copy(Pv),m=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));let S=this._cubeSize;_a(r,x*S,y>2?S:0,S,S),f.setRenderTarget(r),m&&f.render(v,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Ci||e.mapping===dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lv());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;_a(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,tu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:p}=this,v=this._sizeLods[n],g=3*v*(n>p-ya?n-p+ya:0),m=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,_a(s,g,m,3*v,2*v),r.setRenderTarget(s),r.render(a,tu),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,_a(e,g,m,3*v,2*v),r.setRenderTarget(e),r.render(a,tu)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,o),this._blurPass(s,e,n,n,o)}_blurPass(e,t,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],f=3*u*(r>this._lodMax-ya?r-this._lodMax+ya:0),h=4*(this._cubeSize-u);_a(t,f,h,3*u,2*u),o.setRenderTarget(t),o.render(l,tu)}};function lb(i){let e=[],t=[],n=i,r=i-ya+1+rb;for(let s=0;s<r;s++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,p=new Float32Array(d*h*f),v=new Float32Array(d*h*f);for(let m=0;m<f;m++){let _=m%3*2/3-1,y=m>2?0:-1,x=[_,y,0,_+2/3,y,0,_+2/3,y+1,0,_,y,0,_+2/3,y+1,0,_,y+1,0];p.set(x,d*h*m);for(let S=0;S<h;S++){let b=u[S*2]*2-1,C=u[S*2+1]*2-1;m===0?zs.set(1,C,b):m===1?zs.set(-b,1,-C):m===2?zs.set(-b,C,1):m===3?zs.set(-1,C,-b):m===4?zs.set(-b,-1,C):zs.set(b,C,-1),zs.toArray(v,(m*h+S)*d)}}let g=new Ke;g.setAttribute("position",new it(p,d)),g.setAttribute("outputDirection",new it(v,d)),t.push(new nt(g,null)),n>ya&&n--}return{lodMeshes:t,sizeLods:e}}function Iv(i,e,t){let n=new Bt(i,e,t);return n.texture.mapping=Ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _a(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function cb(i,e,t){return new Rt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ob,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yf(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ub(i,e,t){return new Rt({name:"SphericalGaussianBlur",defines:{SAMPLES:sb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Yf(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Lv(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yf(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Dv(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Yf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ru=class extends Bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Br(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new En(5,5,5),s=new Rt({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:ni});s.uniforms.tEquirect.value=t;let o=new nt(r,s),a=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Ut),new lc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};function hb(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,d=!1){return h==null?null:d?o(h):s(h)}function s(h){if(h&&h.isTexture){let d=h.mapping;if(d===ca||d===ua)if(e.has(h)){let p=e.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let v=new ru(p.height);return v.fromEquirectangularTexture(i,h),e.set(h,v),h.addEventListener("dispose",c),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,p=d===ca||d===ua,v=d===Ci||d===dr;if(p||v){let g=t.get(h),m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new ks(i)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let _=h.image;return p&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new ks(i)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function a(h,d){return d===ca?h.mapping=Ci:d===ua&&(h.mapping=dr),h}function l(h){let d=0,p=6;for(let v=0;v<p;v++)h[v]!==void 0&&d++;return d===p}function c(h){let d=h.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function fb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Fi("WebGLRenderer: "+n+" extension not supported."),r}}}function db(i,e,t,n){let r={},s=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete r[h.id];let d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(f){let h=[],d=f.index,p=f.attributes.position,v=0;if(p===void 0)return;if(d!==null){let _=d.array;v=d.version;for(let y=0,x=_.length;y<x;y+=3){let S=_[y+0],b=_[y+1],C=_[y+2];h.push(S,b,b,C,C,S)}}else{let _=p.array;v=p.version;for(let y=0,x=_.length/3-1;y<x;y+=3){let S=y+0,b=y+1,C=y+2;h.push(S,b,b,C,C,S)}}let g=new(p.count>=65535?No:Do)(h,1);g.version=v;let m=s.get(f);m&&e.remove(m),s.set(f,g)}function u(f){let h=s.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function pb(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){i.drawElements(n,h,s,f*o),t.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,s,f*o,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,d);let v=0;for(let g=0;g<d;g++)v+=h[g];t.update(v,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function mb(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:Je("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function gb(i,e,t){let n=new WeakMap,r=new Ct;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let T=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;d===!0&&(y=1),p===!0&&(y=2),v===!0&&(y=3);let x=a.attributes.position.count*y,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let b=new Float32Array(x*S*4*f),C=new hs(b,x,S,f);C.type=wn,C.needsUpdate=!0;let M=y*4;for(let E=0;E<f;E++){let I=g[E],D=m[E],U=_[E],N=x*S*4*E;for(let L=0;L<I.count;L++){let F=L*M;d===!0&&(r.fromBufferAttribute(I,L),b[N+F+0]=r.x,b[N+F+1]=r.y,b[N+F+2]=r.z,b[N+F+3]=0),p===!0&&(r.fromBufferAttribute(D,L),b[N+F+4]=r.x,b[N+F+5]=r.y,b[N+F+6]=r.z,b[N+F+7]=0),v===!0&&(r.fromBufferAttribute(U,L),b[N+F+8]=r.x,b[N+F+9]=r.y,b[N+F+10]=r.z,b[N+F+11]=U.itemSize===4?r.w:1)}}h={count:f,texture:C,size:new le(x,S)},n.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function vb(i,e,t,n,r){let s=new WeakMap;function o(c){let u=r.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var xb={[ia]:"LINEAR_TONE_MAPPING",[ra]:"REINHARD_TONE_MAPPING",[sa]:"CINEON_TONE_MAPPING",[Wr]:"ACES_FILMIC_TONE_MAPPING",[aa]:"AGX_TONE_MAPPING",[la]:"NEUTRAL_TONE_MAPPING",[oa]:"CUSTOM_TONE_MAPPING"};function _b(i,e,t,n,r,s){let o=new Bt(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ke;c.setAttribute("position",new Ue([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ue([0,2,0,0,2,0],2));let u=new zr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new nt(c,u),h=new Gi(-1,1,1,-1,0,1),d=null,p=null,v=!1,g,m=null,_=[],y=!1;this.setSize=function(x,S){o.setSize(x,S),a!==null&&a.setSize(x,S),l!==null&&l.setSize(x,S);for(let b=0;b<_.length;b++){let C=_[b];C.setSize&&C.setSize(x,S)}},this.setEffects=function(x){_=x,y=_.length>0&&_[0].isRenderPass===!0;let S=o.width,b=o.height;_.length>0&&a===null&&(a=new Bt(S,b,{type:nn,depthBuffer:!1,stencilBuffer:!1}),l=new Bt(S,b,{type:nn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<_.length;C++){let M=_[C];M.setSize&&M.setSize(S,b)}},this.begin=function(x,S){if(v||x.toneMapping===gn&&_.length===0)return!1;if(m=S,S!==null){let b=S.width,C=S.height;(o.width!==b||o.height!==C)&&this.setSize(b,C)}return y===!1&&x.setRenderTarget(o),g=x.toneMapping,x.toneMapping=gn,!0},this.hasRenderPass=function(){return y},this.end=function(x,S){x.toneMapping=g,v=!0;let b=o,C=a;for(let M=0;M<_.length;M++){let T=_[M];T.enabled!==!1&&(T.render(x,C,b,S),T.needsSwap!==!1&&(b=C,C=C===a?l:a))}if(d!==x.outputColorSpace||p!==x.toneMapping){d=x.outputColorSpace,p=x.toneMapping,u.defines={},gt.getTransfer(d)===St&&(u.defines.SRGB_TRANSFER="");let M=xb[p];M&&(u.defines[M]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(m),x.render(f,h),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var jv=new Yt,Tm=new or(1,1),ex=new hs,tx=new fs,nx=new Br,Nv=[],Fv=[],Uv=new Float32Array(16),Bv=new Float32Array(9),Ov=new Float32Array(4);function Sa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Nv[r];if(s===void 0&&(s=new Float32Array(r),Nv[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function an(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zf(i,e){let t=Fv[e];t===void 0&&(t=new Int32Array(e),Fv[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function yb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Mb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function Sb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function bb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function wb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Ov.set(n),i.uniformMatrix2fv(this.addr,!1,Ov),ln(t,n)}}function Tb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Bv.set(n),i.uniformMatrix3fv(this.addr,!1,Bv),ln(t,n)}}function Eb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Uv.set(n),i.uniformMatrix4fv(this.addr,!1,Uv),ln(t,n)}}function Ab(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function Rb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function Pb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function Ib(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Lb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function Db(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function Nb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function Fb(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Tm.compareFunction=t.isReversedDepthBuffer()?jc:Qc,s=Tm):s=jv,t.setTexture2D(e||s,r)}function Ub(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||tx,r)}function Bb(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||nx,r)}function Ob(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ex,r)}function zb(i){switch(i){case 5126:return yb;case 35664:return Mb;case 35665:return Sb;case 35666:return bb;case 35674:return wb;case 35675:return Tb;case 35676:return Eb;case 5124:case 35670:return Ab;case 35667:case 35671:return Cb;case 35668:case 35672:return Rb;case 35669:case 35673:return Pb;case 5125:return Ib;case 36294:return Lb;case 36295:return Db;case 36296:return Nb;case 35678:case 36198:case 36298:case 36306:case 35682:return Fb;case 35679:case 36299:case 36307:return Ub;case 35680:case 36300:case 36308:case 36293:return Bb;case 36289:case 36303:case 36311:case 36292:return Ob}}function kb(i,e){i.uniform1fv(this.addr,e)}function Gb(i,e){let t=Sa(e,this.size,2);i.uniform2fv(this.addr,t)}function Vb(i,e){let t=Sa(e,this.size,3);i.uniform3fv(this.addr,t)}function Hb(i,e){let t=Sa(e,this.size,4);i.uniform4fv(this.addr,t)}function Wb(i,e){let t=Sa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xb(i,e){let t=Sa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qb(i,e){let t=Sa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yb(i,e){i.uniform1iv(this.addr,e)}function Zb(i,e){i.uniform2iv(this.addr,e)}function $b(i,e){i.uniform3iv(this.addr,e)}function Jb(i,e){i.uniform4iv(this.addr,e)}function Kb(i,e){i.uniform1uiv(this.addr,e)}function Qb(i,e){i.uniform2uiv(this.addr,e)}function jb(i,e){i.uniform3uiv(this.addr,e)}function ew(i,e){i.uniform4uiv(this.addr,e)}function tw(i,e,t){let n=this.cache,r=e.length,s=Zf(t,r);an(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Tm:o=jv;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function nw(i,e,t){let n=this.cache,r=e.length,s=Zf(t,r);an(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||tx,s[o])}function iw(i,e,t){let n=this.cache,r=e.length,s=Zf(t,r);an(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||nx,s[o])}function rw(i,e,t){let n=this.cache,r=e.length,s=Zf(t,r);an(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ex,s[o])}function sw(i){switch(i){case 5126:return kb;case 35664:return Gb;case 35665:return Vb;case 35666:return Hb;case 35674:return Wb;case 35675:return Xb;case 35676:return qb;case 5124:case 35670:return Yb;case 35667:case 35671:return Zb;case 35668:case 35672:return $b;case 35669:case 35673:return Jb;case 5125:return Kb;case 36294:return Qb;case 36295:return jb;case 36296:return ew;case 35678:case 36198:case 36298:case 36306:case 35682:return tw;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return iw;case 36289:case 36303:case 36311:case 36292:return rw}}var Em=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zb(t.type)}},Am=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sw(t.type)}},Cm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},bm=/(\w+)(\])?(\[|\.)?/g;function zv(i,e){i.seq.push(e),i.map[e.id]=e}function ow(i,e,t){let n=i.name,r=n.length;for(bm.lastIndex=0;;){let s=bm.exec(n),o=bm.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){zv(t,c===void 0?new Em(a,i,e):new Am(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Cm(a),zv(t,f)),t=f}}}var Ma=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);ow(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function kv(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var aw=37297,lw=0;function cw(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Gv=new rt;function uw(i){gt._getMatrix(Gv,gt.workingColorSpace,i);let e=`mat3( ${Gv.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case Ro:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vv(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+cw(i.getShaderSource(e),a)}else return s}function hw(i,e){let t=uw(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var fw={[ia]:"Linear",[ra]:"Reinhard",[sa]:"Cineon",[Wr]:"ACESFilmic",[aa]:"AgX",[la]:"Neutral",[oa]:"Custom"};function dw(i,e){let t=fw[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var qf=new R;function pw(){gt.getLuminanceCoefficients(qf);let i=qf.x.toFixed(4),e=qf.y.toFixed(4),t=qf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(iu).join(`
`)}function gw(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vw(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function iu(i){return i!==""}function Hv(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wv(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rm(i){return i.replace(xw,yw)}var _w=new Map;function yw(i,e){let t=pt[e];if(t===void 0){let n=_w.get(e);if(n!==void 0)t=pt[n],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Rm(t)}var Mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xv(i){return i.replace(Mw,Sw)}function Sw(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qv(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var bw={[Vr]:"SHADOWMAP_TYPE_PCF",[Is]:"SHADOWMAP_TYPE_VSM"};function ww(i){return bw[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Tw={[Ci]:"ENVMAP_TYPE_CUBE",[dr]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE_UV"};function Ew(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Tw[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Aw={[dr]:"ENVMAP_MODE_REFRACTION"};function Cw(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Aw[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Rw={[na]:"ENVMAP_BLENDING_MULTIPLY",[Hp]:"ENVMAP_BLENDING_MIX",[Wp]:"ENVMAP_BLENDING_ADD"};function Pw(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Rw[i.combine]||"ENVMAP_BLENDING_NONE"}function Iw(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Lw(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=ww(t),c=Ew(t),u=Cw(t),f=Pw(t),h=Iw(t),d=mw(t),p=gw(s),v=r.createProgram(),g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(iu).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(iu).join(`
`),m.length>0&&(m+=`
`)):(g=[qv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(iu).join(`
`),m=[qv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?pt.tonemapping_pars_fragment:"",t.toneMapping!==gn?dw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,hw("linearToOutputTexel",t.outputColorSpace),pw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(iu).join(`
`)),o=Rm(o),o=Hv(o,t),o=Wv(o,t),a=Rm(a),a=Hv(a,t),a=Wv(a,t),o=Xv(o),a=Xv(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Vf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=_+g+o,x=_+m+a,S=kv(r,r.VERTEX_SHADER,y),b=kv(r,r.FRAGMENT_SHADER,x);r.attachShader(v,S),r.attachShader(v,b),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(I){if(i.debug.checkShaderErrors){let D=r.getProgramInfoLog(v)||"",U=r.getShaderInfoLog(S)||"",N=r.getShaderInfoLog(b)||"",L=D.trim(),F=U.trim(),G=N.trim(),Q=!0,q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,S,b);else{let Z=Vv(r,S,"vertex"),K=Vv(r,b,"fragment");Je("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+L+`
`+Z+`
`+K)}else L!==""?Ne("WebGLProgram: Program Info Log:",L):(F===""||G==="")&&(q=!1);q&&(I.diagnostics={runnable:Q,programLog:L,vertexShader:{log:F,prefix:g},fragmentShader:{log:G,prefix:m}})}r.deleteShader(S),r.deleteShader(b),M=new Ma(r,v),T=vw(r,v)}let M;this.getUniforms=function(){return M===void 0&&C(this),M};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(v,aw)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=b,this}var Dw=0,Pm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Im(e),t.set(e,n)),n}},Im=class{constructor(e){this.id=Dw++,this.code=e,this.usedTimes=0}};function Nw(i){return i===mr||i===va||i===xa}function Fw(i,e,t,n,r,s){let o=new ds,a=new Pm,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return l.add(M),M===0?"uv":`uv${M}`}function v(M,T,E,I,D,U){let N=I.fog,L=D.geometry,F=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,G=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,Q=e.get(M.envMap||F,G),q=Q&&Q.mapping===Ds?Q.image.height:null,Z=d[M.type];M.precision!==null&&(h=n.getMaxPrecision(M.precision),h!==M.precision&&Ne("WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));let K=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ee=K!==void 0?K.length:0,ne=0;L.morphAttributes.position!==void 0&&(ne=1),L.morphAttributes.normal!==void 0&&(ne=2),L.morphAttributes.color!==void 0&&(ne=3);let ze,Ce,Ve,W;if(Z){let _t=Pi[Z];ze=_t.vertexShader,Ce=_t.fragmentShader}else{ze=M.vertexShader,Ce=M.fragmentShader;let _t=a.getVertexShaderStage(M),vt=a.getFragmentShaderStage(M);a.update(M,_t,vt),Ve=_t.id,W=vt.id}let re=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),ke=D.isInstancedMesh===!0,Ee=D.isBatchedMesh===!0,Be=!!M.map,ot=!!M.matcap,oe=!!Q,pe=!!M.aoMap,Me=!!M.lightMap,de=!!M.bumpMap&&M.wireframe===!1,_e=!!M.normalMap,ue=!!M.displacementMap,Pe=!!M.emissiveMap,Te=!!M.metalnessMap,Ge=!!M.roughnessMap,O=M.anisotropy>0,ct=M.clearcoat>0,et=M.dispersion>0,P=M.retroreflectivity>0,w=M.iridescence>0,H=M.sheen>0,$=M.transmission>0,k=O&&!!M.anisotropyMap,ie=ct&&!!M.clearcoatMap,se=ct&&!!M.clearcoatNormalMap,V=ct&&!!M.clearcoatRoughnessMap,j=w&&!!M.iridescenceMap,ge=w&&!!M.iridescenceThicknessMap,Se=H&&!!M.sheenColorMap,me=H&&!!M.sheenRoughnessMap,be=!!M.specularMap,ae=!!M.specularColorMap,fe=!!M.specularIntensityMap,Ie=$&&!!M.transmissionMap,B=$&&!!M.thicknessMap,ve=!!M.gradientMap,te=!!M.alphaMap,Ae=M.alphaTest>0,Re=!!M.alphaHash,ce=!!M.extensions,Ye=gn;M.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Ye=i.toneMapping);let We={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:ze,fragmentShader:Ce,defines:M.defines,customVertexShaderID:Ve,customFragmentShaderID:W,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:Ee,batchingColor:Ee&&D._colorsTexture!==null,instancing:ke,instancingColor:ke&&D.instanceColor!==null,instancingMorph:ke&&D.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Be,matcap:ot,envMap:oe,envMapMode:oe&&Q.mapping,envMapCubeUVHeight:q,aoMap:pe,lightMap:Me,bumpMap:de,normalMap:_e,displacementMap:ue,emissiveMap:Pe,normalMapObjectSpace:_e&&M.normalMapType===jp,normalMapTangentSpace:_e&&M.normalMapType===Vi,packedNormalMap:_e&&M.normalMapType===Vi&&Nw(M.normalMap.format),metalnessMap:Te,roughnessMap:Ge,anisotropy:O,anisotropyMap:k,clearcoat:ct,clearcoatMap:ie,clearcoatNormalMap:se,clearcoatRoughnessMap:V,dispersion:et,retroreflection:P,iridescence:w,iridescenceMap:j,iridescenceThicknessMap:ge,sheen:H,sheenColorMap:Se,sheenRoughnessMap:me,specularMap:be,specularColorMap:ae,specularIntensityMap:fe,transmission:$,transmissionMap:Ie,thicknessMap:B,gradientMap:ve,opaque:M.transparent===!1&&M.blending===Ls&&M.alphaToCoverage===!1,alphaMap:te,alphaTest:Ae,alphaHash:Re,combine:M.combine,mapUv:Be&&p(M.map.channel),aoMapUv:pe&&p(M.aoMap.channel),lightMapUv:Me&&p(M.lightMap.channel),bumpMapUv:de&&p(M.bumpMap.channel),normalMapUv:_e&&p(M.normalMap.channel),displacementMapUv:ue&&p(M.displacementMap.channel),emissiveMapUv:Pe&&p(M.emissiveMap.channel),metalnessMapUv:Te&&p(M.metalnessMap.channel),roughnessMapUv:Ge&&p(M.roughnessMap.channel),anisotropyMapUv:k&&p(M.anisotropyMap.channel),clearcoatMapUv:ie&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:me&&p(M.sheenRoughnessMap.channel),specularMapUv:be&&p(M.specularMap.channel),specularColorMapUv:ae&&p(M.specularColorMap.channel),specularIntensityMapUv:fe&&p(M.specularIntensityMap.channel),transmissionMapUv:Ie&&p(M.transmissionMap.channel),thicknessMapUv:B&&p(M.thicknessMap.channel),alphaMapUv:te&&p(M.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(_e||O),vertexNormals:!!L.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(Be||te),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||L.attributes.normal===void 0&&_e===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:we,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ne,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Be&&M.map.isVideoTexture===!0&&gt.getTransfer(M.map.colorSpace)===St,decodeVideoTextureEmissive:Pe&&M.emissiveMap.isVideoTexture===!0&&gt.getTransfer(M.emissiveMap.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pn,flipSided:M.side===dn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ce&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&M.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function g(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let E in M.defines)T.push(E),T.push(M.defines[E]);return M.isRawShaderMaterial===!1&&(m(T,M),_(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function m(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numSunLights),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numSunLightShadows),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function _(M,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function y(M){let T=d[M.type],E;if(T){let I=Pi[T];E=Wi.clone(I.uniforms)}else E=M.uniforms;return E}function x(M,T){let E=u.get(T);return E!==void 0?++E.usedTimes:(E=new Lw(i,T,M,r),c.push(E),u.set(T,E)),E}function S(M){if(--M.usedTimes===0){let T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function b(M){a.remove(M)}function C(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:y,acquireProgram:x,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:C}}function Uw(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Bw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Yv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zv(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,p,v,g,m){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:p,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:g,group:m},i[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=p,_.materialVariant=o(h),_.groupOrder=v,_.renderOrder=h.renderOrder,_.z=g,_.group=m),e++,_}function l(h,d,p,v,g,m,_){_.reversedDepth===!0&&(g=-g);let y=a(h,d,p,v,g,m);p.transmission>0?n.push(y):p.transparent===!0?r.push(y):t.push(y)}function c(h,d,p,v,g,m){let _=a(h,d,p,v,g,m);p.transmission>0?n.unshift(_):p.transparent===!0?r.unshift(_):t.unshift(_)}function u(h,d){t.length>1&&t.sort(h||Bw),n.length>1&&n.sort(d||Yv),r.length>1&&r.sort(d||Yv)}function f(){for(let h=e,d=i.length;h<d;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function Ow(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Zv,i.set(n,[o])):r>=s.length?(o=new Zv,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function zw(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new xe};break;case"SpotLight":t={position:new R,direction:new R,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function kw(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Gw=0;function Vw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hw(i){let e=new zw,t=kw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let r=new R,s=new je,o=new je;function a(c){let u=0,f=0,h=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,p=0,v=0,g=0,m=0,_=0,y=0,x=0,S=0,b=0,C=0,M=0,T=0,E=0;c.sort(Vw);for(let D=0,U=c.length;D<U;D++){let N=c[D],L=N.color,F=N.intensity,G=N.distance,Q=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===mr?Q=N.shadow.map.texture:Q=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=L.r*F,f+=L.g*F,h+=L.b*F;else if(N.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(N.sh.coefficients[q],F);E++}else if(N.isSunLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Z=N.shadow,K=t.get(N);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[p]=K,n.sunShadowMap[p]=Q;let ee=Z.getViewportCount();for(let ne=0;ne<ee;ne++)n.sunShadowMatrix[v+ne]=Z.getMatrix(ne),n.sunShadowCascade[v+ne]=Z._cascadeData[ne];v+=ee,p++}n.sun[d]=q,d++}else if(N.isDirectionalLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Z=N.shadow,K=t.get(N);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,n.directionalShadow[g]=K,n.directionalShadowMap[g]=Q,n.directionalShadowMatrix[g]=N.shadow.matrix,S++}n.directional[g]=q,g++}else if(N.isSpotLight){let q=e.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(L).multiplyScalar(F),q.distance=G,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,n.spot[_]=q;let Z=N.shadow;if(N.map&&(n.spotLightMap[M]=N.map,M++,Z.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[_]=Z.matrix,N.castShadow){let K=t.get(N);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,n.spotShadow[_]=K,n.spotShadowMap[_]=Q,C++}_++}else if(N.isRectAreaLight){let q=e.get(N);q.color.copy(L).multiplyScalar(F),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),n.rectArea[y]=q,y++}else if(N.isPointLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){let Z=N.shadow,K=t.get(N);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,n.pointShadow[m]=K,n.pointShadowMap[m]=Q,n.pointShadowMatrix[m]=N.shadow.matrix,b++}n.point[m]=q,m++}else if(N.isHemisphereLight){let q=e.get(N);q.skyColor.copy(N.color).multiplyScalar(F),q.groundColor.copy(N.groundColor).multiplyScalar(F),n.hemi[x]=q,x++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Oe.LTC_FLOAT_1,n.rectAreaLTC2=Oe.LTC_FLOAT_2):(n.rectAreaLTC1=Oe.LTC_HALF_1,n.rectAreaLTC2=Oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let I=n.hash;(I.sunLength!==d||I.directionalLength!==g||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==y||I.hemiLength!==x||I.numSunShadows!==p||I.numDirectionalShadows!==S||I.numPointShadows!==b||I.numSpotShadows!==C||I.numSpotMaps!==M||I.numLightProbes!==E)&&(n.sun.length=d,n.directional.length=g,n.spot.length=_,n.rectArea.length=y,n.point.length=m,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+M-T,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,I.sunLength=d,I.directionalLength=g,I.pointLength=m,I.spotLength=_,I.rectAreaLength=y,I.hemiLength=x,I.numSunShadows=p,I.numDirectionalShadows=S,I.numPointShadows=b,I.numSpotShadows=C,I.numSpotMaps=M,I.numLightProbes=E,n.version=Gw++)}function l(c,u){let f=0,h=0,d=0,p=0,v=0,g=0,m=u.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){let x=c[_];if(x.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),f++}else if(x.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(x.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function $v(i){let e=new Hw(i),t=[],n=[],r=[];function s(h){f.camera=h,t.length=0,n.length=0,r.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Ww(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new $v(i),e.set(r,[a])):s>=o.length?(a=new $v(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Xw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qw=`uniform sampler2D shadow_pass;
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
}`,Yw=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Zw=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Jv=new je,nu=new R,wm=new R;function $w(i,e,t){let n=new Bi,r=new le,s=new le,o=new Ct,a=new Yo,l=new Zo,c={},u=t.maxTextureSize,f={[hr]:dn,[dn]:hr,[pn]:pn},h=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Xw,fragmentShader:qw}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let p=new Ke;p.setAttribute("position",new it(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new nt(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vr;let m=this.type;this.render=function(b,C,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===wp&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vr);let T=i.getRenderTarget(),E=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),D=i.state;D.setBlending(ni),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let U=m!==this.type;U&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(L=>L.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,L=b.length;N<L;N++){let F=b[N],G=F.shadow;if(G===void 0){Ne("WebGLShadowMap:",F,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let Q=G.getFrameExtents();r.multiply(Q),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,G.mapSize.y=s.y));let q=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=q,G.map===null||U===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Is){if(F.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Bt(r.x,r.y,{format:mr,type:nn,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),G.map.texture.name=F.name+".shadowMap",G.map.depthTexture=new or(r.x,r.y,wn),G.map.depthTexture.name=F.name+".shadowMapDepth",G.map.depthTexture.format=Ti,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=qt,G.map.depthTexture.magFilter=qt}else F.isPointLight?(G.map=new ru(r.x),G.map.depthTexture=new Tl(r.x,ii)):(G.map=new Bt(r.x,r.y),G.map.depthTexture=new or(r.x,r.y,ii)),G.map.depthTexture.name=F.name+".shadowMap",G.map.depthTexture.format=Ti,this.type===Vr?(G.map.depthTexture.compareFunction=q?jc:Qc,G.map.depthTexture.minFilter=Ut,G.map.depthTexture.magFilter=Ut):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=qt,G.map.depthTexture.magFilter=qt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==r.x||G.map.height!==r.y)&&G.map.setSize(r.x,r.y);let Z=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();F.isPointLight!==!0&&G.updateMatrices(F,M);for(let K=0;K<Z;K++){let ee=G.getCamera(K);if(F.isPointLight){let ne=G.camera,ze=G.matrix,Ce=F.distance||ne.far;Ce!==ne.far&&(ne.far=Ce,ne.updateProjectionMatrix()),nu.setFromMatrixPosition(F.matrixWorld),ne.position.copy(nu),wm.copy(ne.position),wm.add(Yw[K]),ne.up.copy(Zw[K]),ne.lookAt(wm),ne.updateMatrixWorld(),ze.makeTranslation(-nu.x,-nu.y,-nu.z),Jv.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Jv,ne.coordinateSystem,ne.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,K),i.clear();else{K===0&&(i.setRenderTarget(G.map),i.clear());let ne=G.getViewport(K);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),D.viewport(o)}n=G.getFrustum(K),x(C,M,ee,F,this.type)}G.isPointLightShadow!==!0&&this.type===Is&&_(G,M),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,E,I)};function _(b,C){let M=e.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Bt(r.x,r.y,{format:mr,type:nn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(C,null,M,h,v,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(C,null,M,d,v,null)}function y(b,C,M,T){let E=null,I=M.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)E=I;else if(E=M.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let D=E.uuid,U=C.uuid,N=c[D];N===void 0&&(N={},c[D]=N);let L=N[U];L===void 0&&(L=E.clone(),N[U]=L,C.addEventListener("dispose",S)),E=L}if(E.visible=C.visible,E.wireframe=C.wireframe,T===Is?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:f[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,M.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let D=i.properties.get(E);D.light=M}return E}function x(b,C,M,T,E){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===Is)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,b.matrixWorld);let U=e.update(b),N=b.material;if(Array.isArray(N)){let L=U.groups;for(let F=0,G=L.length;F<G;F++){let Q=L[F],q=N[Q.materialIndex];if(q&&q.visible){let Z=y(b,q,T,E);b.onBeforeShadow(i,b,C,M,U,Z,Q),i.renderBufferDirect(M,null,U,Z,b,Q),b.onAfterShadow(i,b,C,M,U,Z,Q)}}}else if(N.visible){let L=y(b,N,T,E);b.onBeforeShadow(i,b,C,M,U,L,null),i.renderBufferDirect(M,null,U,L,b,null),b.onAfterShadow(i,b,C,M,U,L,null)}}let D=b.children;for(let U=0,N=D.length;U<N;U++)x(D[U],C,M,T,E)}function S(b){b.target.removeEventListener("dispose",S);for(let M in c){let T=c[M],E=b.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}function Jw(i,e){function t(){let B=!1,ve=new Ct,te=null,Ae=new Ct(0,0,0,0);return{setMask:function(Re){te!==Re&&!B&&(i.colorMask(Re,Re,Re,Re),te=Re)},setLocked:function(Re){B=Re},setClear:function(Re,ce,Ye,We,_t){_t===!0&&(Re*=We,ce*=We,Ye*=We),ve.set(Re,ce,Ye,We),Ae.equals(ve)===!1&&(i.clearColor(Re,ce,Ye,We),Ae.copy(ve))},reset:function(){B=!1,te=null,Ae.set(-1,0,0,0)}}}function n(){let B=!1,ve=!1,te=null,Ae=null,Re=null;return{setReversed:function(ce){if(ve!==ce){let Ye=e.get("EXT_clip_control");ce?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),ve=ce;let We=Re;Re=null,this.setClear(We)}},getReversed:function(){return ve},setTest:function(ce){ce?re(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(ce){te!==ce&&!B&&(i.depthMask(ce),te=ce)},setFunc:function(ce){if(ve&&(ce=_v[ce]),Ae!==ce){switch(ce){case al:i.depthFunc(i.NEVER);break;case ll:i.depthFunc(i.ALWAYS);break;case cl:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case ul:i.depthFunc(i.EQUAL);break;case hl:i.depthFunc(i.GEQUAL);break;case fl:i.depthFunc(i.GREATER);break;case dl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=ce}},setLocked:function(ce){B=ce},setClear:function(ce){Re!==ce&&(Re=ce,ve&&(ce=1-ce),i.clearDepth(ce))},reset:function(){B=!1,te=null,Ae=null,Re=null,ve=!1}}}function r(){let B=!1,ve=null,te=null,Ae=null,Re=null,ce=null,Ye=null,We=null,_t=null;return{setTest:function(vt){B||(vt?re(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(vt){ve!==vt&&!B&&(i.stencilMask(vt),ve=vt)},setFunc:function(vt,rn,sn){(te!==vt||Ae!==rn||Re!==sn)&&(i.stencilFunc(vt,rn,sn),te=vt,Ae=rn,Re=sn)},setOp:function(vt,rn,sn){(ce!==vt||Ye!==rn||We!==sn)&&(i.stencilOp(vt,rn,sn),ce=vt,Ye=rn,We=sn)},setLocked:function(vt){B=vt},setClear:function(vt){_t!==vt&&(i.clearStencil(vt),_t=vt)},reset:function(){B=!1,ve=null,te=null,Ae=null,Re=null,ce=null,Ye=null,We=null,_t=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},f={},h={},d=new WeakMap,p=[],v=null,g=!1,m=null,_=null,y=null,x=null,S=null,b=null,C=null,M=new xe(0,0,0),T=0,E=!1,I=null,D=null,U=null,N=null,L=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Q=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=Q>=2);let Z=null,K={},ee=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),ze=new Ct().fromArray(ee),Ce=new Ct().fromArray(ne);function Ve(B,ve,te,Ae){let Re=new Uint8Array(4),ce=i.createTexture();i.bindTexture(B,ce),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<te;Ye++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(ve+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return ce}let W={};W[i.TEXTURE_2D]=Ve(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=Ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=Ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=Ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(i.DEPTH_TEST),o.setFunc(cs),de(!1),_e(Rf),re(i.CULL_FACE),pe(ni);function re(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function we(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function ke(B,ve){return h[B]!==ve?(i.bindFramebuffer(B,ve),h[B]=ve,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ve),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function Ee(B,ve){let te=p,Ae=!1;if(B){te=d.get(ve),te===void 0&&(te=[],d.set(ve,te));let Re=B.textures;if(te.length!==Re.length||te[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,Ye=Re.length;ce<Ye;ce++)te[ce]=i.COLOR_ATTACHMENT0+ce;te.length=Re.length,Ae=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(te)}function Be(B){return v!==B?(i.useProgram(B),v=B,!0):!1}let ot={[Hr]:i.FUNC_ADD,[Ep]:i.FUNC_SUBTRACT,[Ap]:i.FUNC_REVERSE_SUBTRACT};ot[Cp]=i.MIN,ot[Rp]=i.MAX;let oe={[Pp]:i.ZERO,[Ip]:i.ONE,[Lp]:i.SRC_COLOR,[Lf]:i.SRC_ALPHA,[Op]:i.SRC_ALPHA_SATURATE,[Up]:i.DST_COLOR,[Np]:i.DST_ALPHA,[Dp]:i.ONE_MINUS_SRC_COLOR,[Df]:i.ONE_MINUS_SRC_ALPHA,[Bp]:i.ONE_MINUS_DST_COLOR,[Fp]:i.ONE_MINUS_DST_ALPHA,[zp]:i.CONSTANT_COLOR,[kp]:i.ONE_MINUS_CONSTANT_COLOR,[Gp]:i.CONSTANT_ALPHA,[Vp]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(B,ve,te,Ae,Re,ce,Ye,We,_t,vt){if(B===ni){g===!0&&(we(i.BLEND),g=!1);return}if(g===!1&&(re(i.BLEND),g=!0),B!==Tp){if(B!==m||vt!==E){if((_!==Hr||S!==Hr)&&(i.blendEquation(i.FUNC_ADD),_=Hr,S=Hr),vt)switch(B){case Ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fr:i.blendFunc(i.ONE,i.ONE);break;case Pf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case If:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Je("WebGLState: Invalid blending: ",B);break}else switch(B){case Ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Pf:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case If:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",B);break}y=null,x=null,b=null,C=null,M.set(0,0,0),T=0,m=B,E=vt}return}Re=Re||ve,ce=ce||te,Ye=Ye||Ae,(ve!==_||Re!==S)&&(i.blendEquationSeparate(ot[ve],ot[Re]),_=ve,S=Re),(te!==y||Ae!==x||ce!==b||Ye!==C)&&(i.blendFuncSeparate(oe[te],oe[Ae],oe[ce],oe[Ye]),y=te,x=Ae,b=ce,C=Ye),(We.equals(M)===!1||_t!==T)&&(i.blendColor(We.r,We.g,We.b,_t),M.copy(We),T=_t),m=B,E=!1}function Me(B,ve){B.side===pn?we(i.CULL_FACE):re(i.CULL_FACE);let te=B.side===dn;ve&&(te=!te),de(te),B.blending===Ls&&B.transparent===!1?pe(ni):pe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);let Ae=B.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Pe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function de(B){I!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),I=B)}function _e(B){B!==Sp?(re(i.CULL_FACE),B!==D&&(B===Rf?i.cullFace(i.BACK):B===bp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),D=B}function ue(B){B!==U&&(G&&i.lineWidth(B),U=B)}function Pe(B,ve,te){B?(re(i.POLYGON_OFFSET_FILL),(N!==ve||L!==te)&&(N=ve,L=te,o.getReversed()&&(ve=-ve),i.polygonOffset(ve,te))):we(i.POLYGON_OFFSET_FILL)}function Te(B){B?re(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function Ge(B){B===void 0&&(B=i.TEXTURE0+F-1),Z!==B&&(i.activeTexture(B),Z=B)}function O(B,ve,te){te===void 0&&(Z===null?te=i.TEXTURE0+F-1:te=Z);let Ae=K[te];Ae===void 0&&(Ae={type:void 0,texture:void 0},K[te]=Ae),(Ae.type!==B||Ae.texture!==ve)&&(Z!==te&&(i.activeTexture(te),Z=te),i.bindTexture(B,ve||W[B]),Ae.type=B,Ae.texture=ve)}function ct(){let B=K[Z];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function et(){try{i.compressedTexImage2D(...arguments)}catch(B){Je("WebGLState:",B)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(B){Je("WebGLState:",B)}}function w(){try{i.texSubImage2D(...arguments)}catch(B){Je("WebGLState:",B)}}function H(){try{i.texSubImage3D(...arguments)}catch(B){Je("WebGLState:",B)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(B){Je("WebGLState:",B)}}function k(){try{i.compressedTexSubImage3D(...arguments)}catch(B){Je("WebGLState:",B)}}function ie(){try{i.texStorage2D(...arguments)}catch(B){Je("WebGLState:",B)}}function se(){try{i.texStorage3D(...arguments)}catch(B){Je("WebGLState:",B)}}function V(){try{i.texImage2D(...arguments)}catch(B){Je("WebGLState:",B)}}function j(){try{i.texImage3D(...arguments)}catch(B){Je("WebGLState:",B)}}function ge(B){return f[B]!==void 0?f[B]:i.getParameter(B)}function Se(B,ve){f[B]!==ve&&(i.pixelStorei(B,ve),f[B]=ve)}function me(B){ze.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ze.copy(B))}function be(B){Ce.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Ce.copy(B))}function ae(B,ve){let te=c.get(ve);te===void 0&&(te=new WeakMap,c.set(ve,te));let Ae=te.get(B);Ae===void 0&&(Ae=i.getUniformBlockIndex(ve,B.name),te.set(B,Ae))}function fe(B,ve){let Ae=c.get(ve).get(B);l.get(ve)!==Ae&&(i.uniformBlockBinding(ve,Ae,B.__bindingPointIndex),l.set(ve,Ae))}function Ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},Z=null,K={},h={},d=new WeakMap,p=[],v=null,g=!1,m=null,_=null,y=null,x=null,S=null,b=null,C=null,M=new xe(0,0,0),T=0,E=!1,I=null,D=null,U=null,N=null,L=null,ze.set(0,0,i.canvas.width,i.canvas.height),Ce.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:we,bindFramebuffer:ke,drawBuffers:Ee,useProgram:Be,setBlending:pe,setMaterial:Me,setFlipSided:de,setCullFace:_e,setLineWidth:ue,setPolygonOffset:Pe,setScissorTest:Te,activeTexture:Ge,bindTexture:O,unbindTexture:ct,compressedTexImage2D:et,compressedTexImage3D:P,texImage2D:V,texImage3D:j,pixelStorei:Se,getParameter:ge,updateUBOMapping:ae,uniformBlockBinding:fe,texStorage2D:ie,texStorage3D:se,texSubImage2D:w,texSubImage3D:H,compressedTexSubImage2D:$,compressedTexSubImage3D:k,scissor:me,viewport:be,reset:Ie}}function Kw(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,u=new WeakMap,f=new Set,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,w){return p?new OffscreenCanvas(P,w):Po("canvas")}function g(P,w,H){let $=1,k=et(P);if((k.width>H||k.height>H)&&($=H/Math.max(k.width,k.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ie=Math.floor($*k.width),se=Math.floor($*k.height);h===void 0&&(h=v(ie,se));let V=w?v(ie,se):h;return V.width=ie,V.height=se,V.getContext("2d").drawImage(P,0,0,ie,se),Ne("WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+ie+"x"+se+")."),V}else return"data"in P&&Ne("WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),P;return P}function m(P){return P.generateMipmaps}function _(P){i.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,w,H,$,k,ie=!1){if(P!==null){if(i[P]!==void 0)return i[P];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let se;$&&(se=e.get("EXT_texture_norm16"),se||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=w;if(w===i.RED&&(H===i.FLOAT&&(V=i.R32F),H===i.HALF_FLOAT&&(V=i.R16F),H===i.UNSIGNED_BYTE&&(V=i.R8),H===i.UNSIGNED_SHORT&&se&&(V=se.R16_EXT),H===i.SHORT&&se&&(V=se.R16_SNORM_EXT)),w===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(V=i.R8UI),H===i.UNSIGNED_SHORT&&(V=i.R16UI),H===i.UNSIGNED_INT&&(V=i.R32UI),H===i.BYTE&&(V=i.R8I),H===i.SHORT&&(V=i.R16I),H===i.INT&&(V=i.R32I)),w===i.RG&&(H===i.FLOAT&&(V=i.RG32F),H===i.HALF_FLOAT&&(V=i.RG16F),H===i.UNSIGNED_BYTE&&(V=i.RG8),H===i.UNSIGNED_SHORT&&se&&(V=se.RG16_EXT),H===i.SHORT&&se&&(V=se.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(V=i.RG8UI),H===i.UNSIGNED_SHORT&&(V=i.RG16UI),H===i.UNSIGNED_INT&&(V=i.RG32UI),H===i.BYTE&&(V=i.RG8I),H===i.SHORT&&(V=i.RG16I),H===i.INT&&(V=i.RG32I)),w===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(V=i.RGB8UI),H===i.UNSIGNED_SHORT&&(V=i.RGB16UI),H===i.UNSIGNED_INT&&(V=i.RGB32UI),H===i.BYTE&&(V=i.RGB8I),H===i.SHORT&&(V=i.RGB16I),H===i.INT&&(V=i.RGB32I)),w===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),H===i.UNSIGNED_INT&&(V=i.RGBA32UI),H===i.BYTE&&(V=i.RGBA8I),H===i.SHORT&&(V=i.RGBA16I),H===i.INT&&(V=i.RGBA32I)),w===i.RGB&&(H===i.UNSIGNED_SHORT&&se&&(V=se.RGB16_EXT),H===i.SHORT&&se&&(V=se.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),w===i.RGBA){let j=ie?Ro:gt.getTransfer(k);H===i.FLOAT&&(V=i.RGBA32F),H===i.HALF_FLOAT&&(V=i.RGBA16F),H===i.UNSIGNED_BYTE&&(V=j===St?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&se&&(V=se.RGBA16_EXT),H===i.SHORT&&se&&(V=se.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function S(P,w){let H;return P?w===null||w===ii||w===Us?H=i.DEPTH24_STENCIL8:w===wn?H=i.DEPTH32F_STENCIL8:w===Fs&&(H=i.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ii||w===Us?H=i.DEPTH_COMPONENT24:w===wn?H=i.DEPTH_COMPONENT32F:w===Fs&&(H=i.DEPTH_COMPONENT16),H}function b(P,w){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==qt&&P.minFilter!==Ut?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function C(P){let w=P.target;w.removeEventListener("dispose",C),T(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&f.delete(w)}function M(P){let w=P.target;w.removeEventListener("dispose",M),I(w)}function T(P){let w=n.get(P);if(w.__webglInit===void 0)return;let H=P.source,$=d.get(H);if($){let k=$[w.__cacheKey];k.usedTimes--,k.usedTimes===0&&E(P),Object.keys($).length===0&&d.delete(H)}n.remove(P)}function E(P){let w=n.get(P);i.deleteTexture(w.__webglTexture);let H=P.source,$=d.get(H);delete $[w.__cacheKey],o.memory.textures--}function I(P){let w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(w.__webglFramebuffer[$]))for(let k=0;k<w.__webglFramebuffer[$].length;k++)i.deleteFramebuffer(w.__webglFramebuffer[$][k]);else i.deleteFramebuffer(w.__webglFramebuffer[$]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[$])}else{if(Array.isArray(w.__webglFramebuffer))for(let $=0;$<w.__webglFramebuffer.length;$++)i.deleteFramebuffer(w.__webglFramebuffer[$]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let $=0;$<w.__webglColorRenderbuffer.length;$++)w.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[$]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let H=P.textures;for(let $=0,k=H.length;$<k;$++){let ie=n.get(H[$]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove(H[$])}n.remove(P)}let D=0;function U(){D=0}function N(){return D}function L(P){D=P}function F(){let P=D;return P>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),D+=1,P}function G(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function Q(P,w){let H=n.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){let $=P.image;if($===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{we(H,P,w);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+w)}function q(P,w){let H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){we(H,P,w);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+w)}function Z(P,w){let H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){we(H,P,w);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+w)}function K(P,w){let H=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&H.__version!==P.version){ke(H,P,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+w)}let ee={[Dr]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[To]:i.MIRRORED_REPEAT},ne={[qt]:i.NEAREST,[Nf]:i.NEAREST_MIPMAP_NEAREST,[Ns]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[ha]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},ze={[tm]:i.NEVER,[om]:i.ALWAYS,[nm]:i.LESS,[Qc]:i.LEQUAL,[im]:i.EQUAL,[jc]:i.GEQUAL,[rm]:i.GREATER,[sm]:i.NOTEQUAL};function Ce(P,w){if(w.type===wn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ut||w.magFilter===ha||w.magFilter===Ns||w.magFilter===Ri||w.minFilter===Ut||w.minFilter===ha||w.minFilter===Ns||w.minFilter===Ri)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ee[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ee[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ee[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ne[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ne[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ze[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===qt||w.minFilter!==Ns&&w.minFilter!==Ri||w.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ve(P,w){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",C));let $=w.source,k=d.get($);k===void 0&&(k={},d.set($,k));let ie=G(w);if(ie!==P.__cacheKey){k[ie]===void 0&&(k[ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),k[ie].usedTimes++;let se=k[P.__cacheKey];se!==void 0&&(k[P.__cacheKey].usedTimes--,se.usedTimes===0&&E(w)),P.__cacheKey=ie,P.__webglTexture=k[ie].texture}return H}function W(P,w,H){return Math.floor(Math.floor(P/H)/w)}function re(P,w,H,$){let ie=P.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,H,$,w.data);else{ie.sort((Se,me)=>Se.start-me.start);let se=0;for(let Se=1;Se<ie.length;Se++){let me=ie[se],be=ie[Se],ae=me.start+me.count,fe=W(be.start,w.width,4),Ie=W(me.start,w.width,4);be.start<=ae+1&&fe===Ie&&W(be.start+be.count-1,w.width,4)===fe?me.count=Math.max(me.count,be.start+be.count-me.start):(++se,ie[se]=be)}ie.length=se+1;let V=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),ge=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let Se=0,me=ie.length;Se<me;Se++){let be=ie[Se],ae=Math.floor(be.start/4),fe=Math.ceil(be.count/4),Ie=ae%w.width,B=Math.floor(ae/w.width),ve=fe,te=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,Ie,B,ve,te,H,$,w.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,V),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function we(P,w,H){let $=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&($=i.TEXTURE_3D);let k=Ve(P,w),ie=w.source;t.bindTexture($,P.__webglTexture,i.TEXTURE0+H);let se=n.get(ie);if(ie.version!==se.__version||k===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let te=gt.getPrimaries(gt.workingColorSpace),Ae=w.colorSpace===Hi?null:gt.getPrimaries(w.colorSpace),Re=w.colorSpace===Hi||te===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let j=g(w.image,!1,r.maxTextureSize);j=ct(w,j);let ge=s.convert(w.format,w.colorSpace),Se=s.convert(w.type),me=x(w.internalFormat,ge,Se,w.normalized,w.colorSpace,w.isVideoTexture);Ce($,w);let be,ae=w.mipmaps,fe=w.isVideoTexture!==!0,Ie=se.__version===void 0||k===!0,B=ie.dataReady,ve=b(w,j);if(w.isDepthTexture)me=S(w.format===pr,w.type),Ie&&(fe?t.texStorage2D(i.TEXTURE_2D,1,me,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,me,j.width,j.height,0,ge,Se,null));else if(w.isDataTexture)if(ae.length>0){fe&&Ie&&t.texStorage2D(i.TEXTURE_2D,ve,me,ae[0].width,ae[0].height);for(let te=0,Ae=ae.length;te<Ae;te++)be=ae[te],fe?B&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,be.width,be.height,ge,Se,be.data):t.texImage2D(i.TEXTURE_2D,te,me,be.width,be.height,0,ge,Se,be.data);w.generateMipmaps=!1}else fe?(Ie&&t.texStorage2D(i.TEXTURE_2D,ve,me,j.width,j.height),B&&re(w,j,ge,Se)):t.texImage2D(i.TEXTURE_2D,0,me,j.width,j.height,0,ge,Se,j.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){fe&&Ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,me,ae[0].width,ae[0].height,j.depth);for(let te=0,Ae=ae.length;te<Ae;te++)if(be=ae[te],w.format!==Tn)if(ge!==null)if(fe){if(B)if(w.layerUpdates.size>0){let Re=Wf(be.width,be.height,w.format,w.type);for(let ce of w.layerUpdates){let Ye=be.data.subarray(ce*Re/be.data.BYTES_PER_ELEMENT,(ce+1)*Re/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,ce,be.width,be.height,1,ge,Ye)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,be.width,be.height,j.depth,ge,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,me,be.width,be.height,j.depth,0,be.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,be.width,be.height,j.depth,ge,Se,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,me,be.width,be.height,j.depth,0,ge,Se,be.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{fe&&Ie&&t.texStorage2D(i.TEXTURE_2D,ve,me,ae[0].width,ae[0].height);for(let te=0,Ae=ae.length;te<Ae;te++)be=ae[te],w.format!==Tn?ge!==null?fe?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,be.width,be.height,ge,be.data):t.compressedTexImage2D(i.TEXTURE_2D,te,me,be.width,be.height,0,be.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?B&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,be.width,be.height,ge,Se,be.data):t.texImage2D(i.TEXTURE_2D,te,me,be.width,be.height,0,ge,Se,be.data)}else if(w.isDataArrayTexture)if(fe){if(Ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,me,j.width,j.height,j.depth),B)if(w.layerUpdates.size>0){let te=Wf(j.width,j.height,w.format,w.type);for(let Ae of w.layerUpdates){let Re=j.data.subarray(Ae*te/j.data.BYTES_PER_ELEMENT,(Ae+1)*te/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,j.width,j.height,1,ge,Se,Re)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ge,Se,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,j.width,j.height,j.depth,0,ge,Se,j.data);else if(w.isData3DTexture)fe?(Ie&&t.texStorage3D(i.TEXTURE_3D,ve,me,j.width,j.height,j.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ge,Se,j.data)):t.texImage3D(i.TEXTURE_3D,0,me,j.width,j.height,j.depth,0,ge,Se,j.data);else if(w.isFramebufferTexture){if(Ie)if(fe)t.texStorage2D(i.TEXTURE_2D,ve,me,j.width,j.height);else{let te=j.width,Ae=j.height;for(let Re=0;Re<ve;Re++)t.texImage2D(i.TEXTURE_2D,Re,me,te,Ae,0,ge,Se,null),te>>=1,Ae>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let te=i.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),j.parentNode!==te){te.appendChild(j),f.add(w),te.onpaint=Ae=>{let Re=Ae.changedElements;for(let ce of f)Re.includes(ce.image)&&(ce.needsUpdate=!0)},te.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let Re=i.RGBA,ce=i.RGBA,Ye=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Re,ce,Ye,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ae.length>0){if(fe&&Ie){let te=et(ae[0]);t.texStorage2D(i.TEXTURE_2D,ve,me,te.width,te.height)}for(let te=0,Ae=ae.length;te<Ae;te++)be=ae[te],fe?B&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ge,Se,be):t.texImage2D(i.TEXTURE_2D,te,me,ge,Se,be);w.generateMipmaps=!1}else if(fe){if(Ie){let te=et(j);t.texStorage2D(i.TEXTURE_2D,ve,me,te.width,te.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Se,j)}else t.texImage2D(i.TEXTURE_2D,0,me,ge,Se,j);m(w)&&_($),se.__version=ie.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ke(P,w,H){if(w.image.length!==6)return;let $=Ve(P,w),k=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+H);let ie=n.get(k);if(k.version!==ie.__version||$===!0){t.activeTexture(i.TEXTURE0+H);let se=gt.getPrimaries(gt.workingColorSpace),V=w.colorSpace===Hi?null:gt.getPrimaries(w.colorSpace),j=w.colorSpace===Hi||se===V?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ge=w.isCompressedTexture||w.image[0].isCompressedTexture,Se=w.image[0]&&w.image[0].isDataTexture,me=[];for(let ce=0;ce<6;ce++)!ge&&!Se?me[ce]=g(w.image[ce],!0,r.maxCubemapSize):me[ce]=Se?w.image[ce].image:w.image[ce],me[ce]=ct(w,me[ce]);let be=me[0],ae=s.convert(w.format,w.colorSpace),fe=s.convert(w.type),Ie=x(w.internalFormat,ae,fe,w.normalized,w.colorSpace),B=w.isVideoTexture!==!0,ve=ie.__version===void 0||$===!0,te=k.dataReady,Ae=b(w,be);Ce(i.TEXTURE_CUBE_MAP,w);let Re;if(ge){B&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Ie,be.width,be.height);for(let ce=0;ce<6;ce++){Re=me[ce].mipmaps;for(let Ye=0;Ye<Re.length;Ye++){let We=Re[Ye];w.format!==Tn?ae!==null?B?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ye,0,0,We.width,We.height,ae,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ye,Ie,We.width,We.height,0,We.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ye,0,0,We.width,We.height,ae,fe,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ye,Ie,We.width,We.height,0,ae,fe,We.data)}}}else{if(Re=w.mipmaps,B&&ve){Re.length>0&&Ae++;let ce=et(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Ie,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(Se){B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,me[ce].width,me[ce].height,ae,fe,me[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ie,me[ce].width,me[ce].height,0,ae,fe,me[ce].data);for(let Ye=0;Ye<Re.length;Ye++){let _t=Re[Ye].image[ce].image;B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ye+1,0,0,_t.width,_t.height,ae,fe,_t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ye+1,Ie,_t.width,_t.height,0,ae,fe,_t.data)}}else{B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ae,fe,me[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ie,ae,fe,me[ce]);for(let Ye=0;Ye<Re.length;Ye++){let We=Re[Ye];B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ye+1,0,0,ae,fe,We.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ye+1,Ie,ae,fe,We.image[ce])}}}m(w)&&_(i.TEXTURE_CUBE_MAP),ie.__version=k.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Ee(P,w,H,$,k,ie){let se=s.convert(H.format,H.colorSpace),V=s.convert(H.type),j=x(H.internalFormat,se,V,H.normalized,H.colorSpace),ge=n.get(w),Se=n.get(H);if(Se.__renderTarget=w,!ge.__hasExternalTextures){let me=Math.max(1,w.width>>ie),be=Math.max(1,w.height>>ie);k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?t.texImage3D(k,ie,j,me,be,w.depth,0,se,V,null):t.texImage2D(k,ie,j,me,be,0,se,V,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Ge(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,k,Se.__webglTexture,0,Te(w)):(k===i.TEXTURE_2D||k>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,k,Se.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(P,w,H){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){let $=w.depthTexture,k=$&&$.isDepthTexture?$.type:null,ie=S(w.stencilBuffer,k),se=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ge(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(w),ie,w.width,w.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(w),ie,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ie,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,P)}else{let $=w.textures;for(let k=0;k<$.length;k++){let ie=$[k],se=s.convert(ie.format,ie.colorSpace),V=s.convert(ie.type),j=x(ie.internalFormat,se,V,ie.normalized,ie.colorSpace);Ge(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(w),j,w.width,w.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(w),j,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,j,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(P,w,H){let $=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let k=n.get(w.depthTexture);if(k.__renderTarget=w,(!k.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),$){if(k.__webglInit===void 0&&(k.__webglInit=!0,w.depthTexture.addEventListener("dispose",C)),k.__webglTexture===void 0){k.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,w.depthTexture);let ge=s.convert(w.depthTexture.format),Se=s.convert(w.depthTexture.type),me;w.depthTexture.format===Ti?me=i.DEPTH_COMPONENT24:w.depthTexture.format===pr&&(me=i.DEPTH24_STENCIL8);for(let be=0;be<6;be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,me,w.width,w.height,0,ge,Se,null)}}else Q(w.depthTexture,0);let ie=k.__webglTexture,se=Te(w),V=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,j=w.depthTexture.format===pr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ti)Ge(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,V,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,j,V,ie,0);else if(w.depthTexture.format===pr)Ge(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,V,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,j,V,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(P){let w=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let $=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),$){let k=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,$.removeEventListener("dispose",k)};$.addEventListener("dispose",k),w.__depthDisposeCallback=k}w.__boundDepthTexture=$}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(H)for(let $=0;$<6;$++)ot(w.__webglFramebuffer[$],P,$);else{let $=P.texture.mipmaps;$&&$.length>0?ot(w.__webglFramebuffer[0],P,0):ot(w.__webglFramebuffer,P,0)}else if(H){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]===void 0)w.__webglDepthbuffer[$]=i.createRenderbuffer(),Be(w.__webglDepthbuffer[$],P,!1);else{let k=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,ie)}}else{let $=P.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Be(w.__webglDepthbuffer,P,!1);else{let k=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(P,w,H){let $=n.get(P);w!==void 0&&Ee($.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&oe(P)}function Me(P){let w=P.texture,H=n.get(P),$=n.get(w);P.addEventListener("dispose",M);let k=P.textures,ie=P.isWebGLCubeRenderTarget===!0,se=k.length>1;if(se||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=w.version,o.memory.textures++),ie){H.__webglFramebuffer=[];for(let V=0;V<6;V++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[V]=[];for(let j=0;j<w.mipmaps.length;j++)H.__webglFramebuffer[V][j]=i.createFramebuffer()}else H.__webglFramebuffer[V]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let V=0;V<w.mipmaps.length;V++)H.__webglFramebuffer[V]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(se)for(let V=0,j=k.length;V<j;V++){let ge=n.get(k[V]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Ge(P)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let V=0;V<k.length;V++){let j=k[V];H.__webglColorRenderbuffer[V]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[V]);let ge=s.convert(j.format,j.colorSpace),Se=s.convert(j.type),me=x(j.internalFormat,ge,Se,j.normalized,j.colorSpace,P.isXRRenderTarget===!0),be=Te(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,me,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.RENDERBUFFER,H.__webglColorRenderbuffer[V])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(H.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,w);for(let V=0;V<6;V++)if(w.mipmaps&&w.mipmaps.length>0)for(let j=0;j<w.mipmaps.length;j++)Ee(H.__webglFramebuffer[V][j],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,j);else Ee(H.__webglFramebuffer[V],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);m(w)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let V=0,j=k.length;V<j;V++){let ge=k[V],Se=n.get(ge),me=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(me=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,Se.__webglTexture),Ce(me,ge),Ee(H.__webglFramebuffer,P,ge,i.COLOR_ATTACHMENT0+V,me,0),m(ge)&&_(me)}t.unbindTexture()}else{let V=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(V=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(V,$.__webglTexture),Ce(V,w),w.mipmaps&&w.mipmaps.length>0)for(let j=0;j<w.mipmaps.length;j++)Ee(H.__webglFramebuffer[j],P,w,i.COLOR_ATTACHMENT0,V,j);else Ee(H.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,V,0);m(w)&&_(V),t.unbindTexture()}P.depthBuffer&&oe(P)}function de(P){let w=P.textures;for(let H=0,$=w.length;H<$;H++){let k=w[H];if(m(k)){let ie=y(P),se=n.get(k).__webglTexture;t.bindTexture(ie,se),_(ie),t.unbindTexture()}}}let _e=[],ue=[];function Pe(P){if(P.samples>0){if(Ge(P)===!1){let w=P.textures,H=P.width,$=P.height,k=i.COLOR_BUFFER_BIT,ie=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(P),V=w.length>1;if(V)for(let ge=0;ge<w.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);let j=P.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ge=0;ge<w.length;ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(k|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(k|=i.STENCIL_BUFFER_BIT)),V){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[ge]);let Se=n.get(w[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Se,0)}i.blitFramebuffer(0,0,H,$,0,0,H,$,k,i.NEAREST),l===!0&&(_e.length=0,ue.length=0,_e.push(i.COLOR_ATTACHMENT0+ge),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(_e.push(ie),ue.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),V)for(let ge=0;ge<w.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,se.__webglColorRenderbuffer[ge]);let Se=n.get(w[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Te(P){return Math.min(r.maxSamples,P.samples)}function Ge(P){let w=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function O(P){let w=o.render.frame;u.get(P)!==w&&(u.set(P,w),P.update())}function ct(P,w){let H=P.colorSpace,$=P.format,k=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==Co&&H!==Hi&&(gt.getTransfer(H)===St?($!==Tn||k!==Gn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",H)),w}function et(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.getTextureUnits=N,this.setTextureUnits=L,this.setTexture2D=Q,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=K,this.rebindTextures=pe,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ge,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ix(i,e){function t(n,r=Hi){let s,o=gt.getTransfer(r);if(n===Gn)return i.UNSIGNED_BYTE;if(n===gc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Of)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ff)return i.BYTE;if(n===Uf)return i.SHORT;if(n===Fs)return i.UNSIGNED_SHORT;if(n===mc)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===nn)return i.HALF_FLOAT;if(n===zf)return i.ALPHA;if(n===kf)return i.RGB;if(n===Tn)return i.RGBA;if(n===Ti)return i.DEPTH_COMPONENT;if(n===pr)return i.DEPTH_STENCIL;if(n===xc)return i.RED;if(n===fa)return i.RED_INTEGER;if(n===mr)return i.RG;if(n===_c)return i.RG_INTEGER;if(n===yc)return i.RGBA_INTEGER;if(n===da||n===pa||n===ma||n===ga)if(o===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===da)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===da)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mc||n===Sc||n===bc||n===wc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Mc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tc||n===Ec||n===Ac||n===Cc||n===Rc||n===va||n===Pc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Tc||n===Ec)return o===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ac)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Cc)return s.COMPRESSED_R11_EAC;if(n===Rc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===va)return s.COMPRESSED_RG11_EAC;if(n===Pc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ic||n===Lc||n===Dc||n===Nc||n===Fc||n===Uc||n===Bc||n===Oc||n===zc||n===kc||n===Gc||n===Vc||n===Hc||n===Wc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ic)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lc)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dc)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nc)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fc)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uc)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bc)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oc)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zc)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kc)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gc)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vc)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hc)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wc)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xc||n===qc||n===Yc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Xc)return o===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zc||n===$c||n===xa||n===Jc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Zc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$c)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Qw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jw=`
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

}`,Lm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new zo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Rt({vertexShader:Qw,fragmentShader:jw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new Oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dm=class extends Zn{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,p=null,v=typeof XRWebGLBinding<"u",g=new Lm,m={},_=t.getContextAttributes(),y=null,x=null,S=[],b=[],C=new le,M=null,T=null,E=new Nt;E.viewport=new Ct;let I=new Nt;I.viewport=new Ct;let D=[E,I],U=new cc,N=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let re=S[W];return re===void 0&&(re=new ps,S[W]=re),re.getTargetRaySpace()},this.getControllerGrip=function(W){let re=S[W];return re===void 0&&(re=new ps,S[W]=re),re.getGripSpace()},this.getHand=function(W){let re=S[W];return re===void 0&&(re=new ps,S[W]=re),re.getHandSpace()};function F(W){let re=b.indexOf(W.inputSource);if(re===-1)return;let we=S[re];we!==void 0&&(we.update(W.inputSource,W.frame,c||o),we.dispatchEvent({type:W.type,data:W.inputSource}))}function G(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",Q);for(let W=0;W<S.length;W++){let re=b[W];re!==null&&(b[W]=null,S[W].disconnect(re))}N=null,L=null,g.reset();for(let W in m)delete m[W];if(e.setRenderTarget(y),d=null,h=null,f=null,r=null,x=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(C.width,C.height,!1),T!==null){let W=T.camera;W.fov=T.fov,W.zoom=T.zoom,W.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",G),r.addEventListener("inputsourceschange",Q),_.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,ke=null,Ee=null;_.depth&&(Ee=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=_.stencil?pr:Ti,ke=_.stencil?Us:ii);let Be={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Be),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Bt(h.textureWidth,h.textureHeight,{format:Tn,type:Gn,depthTexture:new or(h.textureWidth,h.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let we={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,we),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Bt(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Q(W){for(let re=0;re<W.removed.length;re++){let we=W.removed[re],ke=b.indexOf(we);ke>=0&&(b[ke]=null,S[ke].disconnect(we))}for(let re=0;re<W.added.length;re++){let we=W.added[re],ke=b.indexOf(we);if(ke===-1){for(let Be=0;Be<S.length;Be++)if(Be>=b.length){b.push(we),ke=Be;break}else if(b[Be]===null){b[Be]=we,ke=Be;break}if(ke===-1)break}let Ee=S[ke];Ee&&Ee.connect(we)}}let q=new R,Z=new R;function K(W,re,we){q.setFromMatrixPosition(re.matrixWorld),Z.setFromMatrixPosition(we.matrixWorld);let ke=q.distanceTo(Z),Ee=re.projectionMatrix.elements,Be=we.projectionMatrix.elements,ot=Ee[14]/(Ee[10]-1),oe=Ee[14]/(Ee[10]+1),pe=(Ee[9]+1)/Ee[5],Me=(Ee[9]-1)/Ee[5],de=(Ee[8]-1)/Ee[0],_e=(Be[8]+1)/Be[0],ue=ot*de,Pe=ot*_e,Te=ke/(-de+_e),Ge=Te*-de;if(re.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ge),W.translateZ(Te),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ee[10]===-1)W.projectionMatrix.copy(re.projectionMatrix),W.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let O=ot+Te,ct=oe+Te,et=ue-Ge,P=Pe+(ke-Ge),w=pe*oe/ct*O,H=Me*oe/ct*O;W.projectionMatrix.makePerspective(et,P,w,H,O,ct),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ee(W,re){re===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(re.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let re=W.near,we=W.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(we=g.depthFar)),U.near=I.near=E.near=re,U.far=I.far=E.far=we,(N!==U.near||L!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),N=U.near,L=U.far),U.layers.mask=W.layers.mask|6,E.layers.mask=U.layers.mask&-5,I.layers.mask=U.layers.mask&-3;let ke=W.parent,Ee=U.cameras;ee(U,ke);for(let Be=0;Be<Ee.length;Be++)ee(Ee[Be],ke);Ee.length===2?K(U,E,I):U.projectionMatrix.copy(E.projectionMatrix),T===null&&W.isPerspectiveCamera&&(T={camera:W,fov:W.fov,zoom:W.zoom}),ne(W,U,ke)};function ne(W,re,we){we===null?W.matrix.copy(re.matrixWorld):(W.matrix.copy(we.matrixWorld),W.matrix.invert(),W.matrix.multiply(re.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(re.projectionMatrix),W.projectionMatrixInverse.copy(re.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=us*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(W){return m[W]};let ze=null;function Ce(W,re){if(u=re.getViewerPose(c||o),p=re,u!==null){let we=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let ke=!1;we.length!==U.cameras.length&&(U.cameras.length=0,ke=!0);for(let oe=0;oe<we.length;oe++){let pe=we[oe],Me=null;if(d!==null)Me=d.getViewport(pe);else{let _e=f.getViewSubImage(h,pe);Me=_e.viewport,oe===0&&(e.setRenderTargetTextures(x,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(x))}let de=D[oe];de===void 0&&(de=new Nt,de.layers.enable(oe),de.viewport=new Ct,D[oe]=de),de.matrix.fromArray(pe.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(pe.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(Me.x,Me.y,Me.width,Me.height),oe===0&&(U.matrix.copy(de.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ke===!0&&U.cameras.push(de)}let Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let oe=f.getDepthInformation(we[0]);oe&&oe.isValid&&oe.texture&&g.init(oe,r.renderState)}if(Ee&&Ee.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let oe=0;oe<we.length;oe++){let pe=we[oe].camera;if(pe){let Me=m[pe];Me||(Me=new zo,m[pe]=Me);let de=f.getCameraImage(pe);Me.sourceTexture=de}}}}for(let we=0;we<S.length;we++){let ke=b[we],Ee=S[we];ke!==null&&Ee!==void 0&&Ee.update(ke,re,c||o)}ze&&ze(W,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),p=null}let Ve=new Kv;Ve.setAnimationLoop(Ce),this.setAnimationLoop=function(W){ze=W},this.dispose=function(){}}},eT=new je,rx=new rt;rx.set(-1,0,0,0,1,0,0,0,1);function tT(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,um(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,_,y,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),f(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),h(g,m),m.isMeshPhysicalMaterial&&d(g,m,x)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),v(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===dn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===dn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m),y=_.envMap,x=_.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(eT.makeRotationFromEuler(x)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(rx),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function nT(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){let b=S.program;n.uniformBlockBinding(x,b)}function c(x,S){let b=r[x.id];b===void 0&&(g(x),b=u(x),r[x.id]=b,x.addEventListener("dispose",_));let C=S.program;n.updateUBOMapping(x,C);let M=e.render.frame;s[x.id]!==M&&(h(x),s[x.id]=M)}function u(x){let S=f();x.__bindingPointIndex=S;let b=i.createBuffer(),C=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let S=r[x.id],b=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let M=0,T=b.length;M<T;M++){let E=b[M];if(Array.isArray(E))for(let I=0,D=E.length;I<D;I++)d(E[I],M,I,C);else d(E,M,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,S,b,C){if(v(x,S,b,C)===!0){let M=x.__offset,T=x.value;if(Array.isArray(T)){let E=0;for(let I=0;I<T.length;I++){let D=T[I],U=m(D);p(D,x.__data,E),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(E+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,x.__data)}}function p(x,S,b){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,b)}function v(x,S,b,C){let M=x.value,T=S+"_"+b;if(C[T]===void 0)return typeof M=="number"||typeof M=="boolean"?C[T]=M:ArrayBuffer.isView(M)?C[T]=M.slice():C[T]=M.clone(),!0;{let E=C[T];if(typeof M=="number"||typeof M=="boolean"){if(E!==M)return C[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(E.equals(M)===!1)return E.copy(M),!0}}return!1}function g(x){let S=x.uniforms,b=0,C=16;for(let T=0,E=S.length;T<E;T++){let I=Array.isArray(S[T])?S[T]:[S[T]];for(let D=0,U=I.length;D<U;D++){let N=I[D],L=Array.isArray(N.value)?N.value:[N.value];for(let F=0,G=L.length;F<G;F++){let Q=L[F],q=m(Q),Z=b%C,K=Z%q.boundary,ee=Z+K;b+=K,ee!==0&&C-ee<q.storage&&(b+=C-ee),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=q.storage}}}let M=b%C;return M>0&&(b+=C-M),x.__size=b,x.__cache={},this}function m(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",x),S}function _(x){let S=x.target;S.removeEventListener("dispose",_);let b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function y(){for(let x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:y}}var iT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xi=null;function rT(){return Xi===null&&(Xi=new Bn(iT,16,16,mr,nn),Xi.name="DFG_LUT",Xi.minFilter=Ut,Xi.magFilter=Ut,Xi.wrapS=Fn,Xi.wrapT=Fn,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}var gr=class{constructor(e={}){let{canvas:t=am(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Gn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let v=d,g=new Set([yc,_c,fa]),m=new Set([Gn,ii,Fs,Us,gc,vc]),_=new Uint32Array(4),y=new Int32Array(4),x=new R,S=null,b=null,C=[],M=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,I=!1,D=null,U=null,N=null,L=null;this._outputColorSpace=Qt;let F=0,G=0,Q=null,q=-1,Z=null,K=new Ct,ee=new Ct,ne=null,ze=new xe(0),Ce=0,Ve=t.width,W=t.height,re=1,we=null,ke=null,Ee=new Ct(0,0,Ve,W),Be=new Ct(0,0,Ve,W),ot=!1,oe=new Bi,pe=!1,Me=!1,de=new je,_e=new R,ue=new Ct,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Ge(){return Q===null?re:1}let O=n;function ct(A,z){return t.getContext(A,z)}let et,P,w,H,$,k,ie,se,V,j,ge,Se,me,be,ae,fe,Ie,B,ve,te,Ae,Re,ce;try{let A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",rn,!1),O===null){let z="webgl2";if(O=ct(z,A),O===null)throw ct(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(A){throw t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),Je("WebGLRenderer: "+A.message),A}function Ye(){et=new fb(O),et.init(),Ae=new ix(O,et),P=new nb(O,et,e,Ae),w=new Jw(O,et),P.reversedDepthBuffer&&h&&w.buffers.depth.setReversed(!0),U=O.createFramebuffer(),N=O.createFramebuffer(),L=O.createFramebuffer(),H=new mb(O),$=new Uw,k=new Kw(O,et,w,$,P,Ae,H),ie=new hb(E),se=new v1(O),Re=new eb(O,se),V=new db(O,se,H,Re),j=new vb(O,V,se,Re,H),B=new gb(O,P,k),ae=new ib($),ge=new Fw(E,ie,et,P,Re,ae),Se=new tT(E,$),me=new Ow,be=new Ww(et),Ie=new jS(E,ie,w,j,p,l),fe=new $w(E,j,P),ce=new nT(O,H,P,w),ve=new tb(O,et,H),te=new pb(O,et,H),H.programs=ge.programs,E.capabilities=P,E.extensions=et,E.properties=$,E.renderLists=me,E.shadowMap=fe,E.state=w,E.info=H}v!==Gn&&(T=new _b(v,t.width,t.height,a,r,s));let We=new Dm(E,O);this.xr=We,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let A=et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(A){A!==void 0&&(re=A,this.setSize(Ve,W,!1))},this.getSize=function(A){return A.set(Ve,W)},this.setSize=function(A,z,J=!0){if(We.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Ve=A,W=z,t.width=Math.floor(A*re),t.height=Math.floor(z*re),J===!0&&(t.style.width=A+"px",t.style.height=z+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(Ve*re,W*re).floor()},this.setDrawingBufferSize=function(A,z,J){Ve=A,W=z,re=J,t.width=Math.floor(A*J),t.height=Math.floor(z*J),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(v===Gn){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(K)},this.getViewport=function(A){return A.copy(Ee)},this.setViewport=function(A,z,J,X){A.isVector4?Ee.set(A.x,A.y,A.z,A.w):Ee.set(A,z,J,X),w.viewport(K.copy(Ee).multiplyScalar(re).round())},this.getScissor=function(A){return A.copy(Be)},this.setScissor=function(A,z,J,X){A.isVector4?Be.set(A.x,A.y,A.z,A.w):Be.set(A,z,J,X),w.scissor(ee.copy(Be).multiplyScalar(re).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(A){w.setScissorTest(ot=A)},this.setOpaqueSort=function(A){we=A},this.setTransparentSort=function(A){ke=A},this.getClearColor=function(A){return A.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,J=!0){let X=0;if(A){let Y=!1;if(Q!==null){let Le=Q.texture.format;Y=g.has(Le)}if(Y){let Le=Q.texture.type,He=m.has(Le),De=Ie.getClearColor(),qe=Ie.getClearAlpha(),$e=De.r,ht=De.g,ut=De.b;He?(_[0]=$e,_[1]=ht,_[2]=ut,_[3]=qe,O.clearBufferuiv(O.COLOR,0,_)):(y[0]=$e,y[1]=ht,y[2]=ut,y[3]=qe,O.clearBufferiv(O.COLOR,0,y))}else X|=O.COLOR_BUFFER_BIT}z&&(X|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),Ie.dispose(),me.dispose(),be.dispose(),$.dispose(),ie.dispose(),j.dispose(),Re.dispose(),ce.dispose(),ge.dispose(),We.dispose(),We.removeEventListener("sessionstart",Wn),We.removeEventListener("sessionend",Au),$i.stop()};function _t(A){A.preventDefault(),Io("WebGLRenderer: Context Lost."),I=!0}function vt(){Io("WebGLRenderer: Context Restored."),I=!1;let A=H.autoReset,z=fe.enabled,J=fe.autoUpdate,X=fe.needsUpdate,Y=fe.type;Ye(),H.autoReset=A,fe.enabled=z,fe.autoUpdate=J,fe.needsUpdate=X,fe.type=Y}function rn(A){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function sn(A){let z=A.target;z.removeEventListener("dispose",sn),$s(z)}function $s(A){Js(A),$.remove(A)}function Js(A){let z=$.get(A).programs;z!==void 0&&(z.forEach(function(J){ge.releaseProgram(J)}),A.isShaderMaterial&&ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,J,X,Y,Le){z===null&&(z=Pe);let He=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,De=Qe(A,z,J,X,Y);w.setMaterial(X,He);let qe=J.index,$e=1;if(X.wireframe===!0){if(qe=V.getWireframeAttribute(J),qe===void 0)return;$e=2}let ht=J.drawRange,ut=J.attributes.position,Fe=ht.start*$e,yt=(ht.start+ht.count)*$e;Le!==null&&(Fe=Math.max(Fe,Le.start*$e),yt=Math.min(yt,(Le.start+Le.count)*$e)),qe!==null?(Fe=Math.max(Fe,0),yt=Math.min(yt,qe.count)):ut!=null&&(Fe=Math.max(Fe,0),yt=Math.min(yt,ut.count));let Gt=yt-Fe;if(Gt<0||Gt===1/0)return;Re.setup(Y,X,De,J,qe);let Et,Dt=ve;if(qe!==null&&(Et=se.get(qe),Dt=te,Dt.setIndex(Et)),Y.isMesh)X.wireframe===!0?(w.setLineWidth(X.wireframeLinewidth*Ge()),Dt.setMode(O.LINES)):Dt.setMode(O.TRIANGLES);else if(Y.isLine){let yn=X.linewidth;yn===void 0&&(yn=1),w.setLineWidth(yn*Ge()),Y.isLineSegments?Dt.setMode(O.LINES):Y.isLineLoop?Dt.setMode(O.LINE_LOOP):Dt.setMode(O.LINE_STRIP)}else Y.isPoints?Dt.setMode(O.POINTS):Y.isSprite&&Dt.setMode(O.TRIANGLES);if(Y.isBatchedMesh)if(et.get("WEBGL_multi_draw"))Dt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let yn=Y._multiDrawStarts,Xe=Y._multiDrawCounts,Ln=Y._multiDrawCount,Mt=qe?se.get(qe).bytesPerElement:1,ui=$.get(X).currentProgram.getUniforms();for(let Di=0;Di<Ln;Di++)ui.setValue(O,"_gl_DrawID",Di),Dt.render(yn[Di]/Mt,Xe[Di])}else if(Y.isInstancedMesh)Dt.renderInstances(Fe,Gt,Y.count);else if(J.isInstancedBufferGeometry){let yn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Xe=Math.min(J.instanceCount,yn);Dt.renderInstances(Fe,Gt,Xe)}else Dt.render(Fe,Gt)};function $t(A,z,J,X){D!==null&&A.isNodeMaterial&&D.setObject(X,A),pe===!0&&ae.setState(A,J,!1),A.transparent===!0&&A.side===pn&&A.forceSinglePass===!1?(A.side=dn,A.needsUpdate=!0,js(A,z,X),A.side=hr,A.needsUpdate=!0,js(A,z,X),A.side=pn):js(A,z,X)}this.compile=function(A,z,J=null){J===null&&(J=A),D!==null&&D.renderStart(A,z,J),b=be.get(J),b.init(z),M.push(b),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),A!==J&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),Me=this.localClippingEnabled,pe=ae.init(this.clippingPlanes,Me),pe===!0&&ae.setGlobalState(this.clippingPlanes,z),D!==null&&fe.render(b.state.shadowsArray,J,z);let X=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Le=Y.material;if(Le)if(Array.isArray(Le))for(let He=0;He<Le.length;He++){let De=Le[He];$t(De,J,z,Y),X.add(De)}else $t(Le,J,z,Y),X.add(Le)}),b=M.pop(),D!==null&&D.renderEnd(),X},this.compileAsync=function(A,z,J=null){let X=this.compile(A,z,J);return new Promise(Y=>{function Le(){if(X.forEach(function(He){let qe=$.get(He).currentProgram;(qe===void 0||qe.isReady())&&X.delete(He)}),X.size===0){Y(A);return}setTimeout(Le,10)}et.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Ks=null;function Ba(A){Ks&&Ks(A)}function Wn(){$i.stop()}function Au(){$i.start()}let $i=new Kv;$i.setAnimationLoop(Ba),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(A){Ks=A,We.setAnimationLoop(A),A===null?$i.stop():$i.start()},We.addEventListener("sessionstart",Wn),We.addEventListener("sessionend",Au),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(A,z);let J=We.enabled===!0&&We.isPresenting===!0,X=T!==null&&(Q===null||J)&&T.begin(E,Q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(z),z=We.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,z,Q),b=be.get(A,M.length),b.init(z),b.state.textureUnits=k.getTextureUnits(),M.push(b),de.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),oe.setFromProjectionMatrix(de,Yn,z.reversedDepth),Me=this.localClippingEnabled,pe=ae.init(this.clippingPlanes,Me),S=me.get(A,C.length),S.init(),C.push(S),We.enabled===!0&&We.isPresenting===!0){let He=E.xr.getDepthSensingMesh();He!==null&&Oa(He,z,-1/0,E.sortObjects)}Oa(A,z,0,E.sortObjects),S.finish(),D!==null&&D.updateLights(b.state.lightsArray),E.sortObjects===!0&&S.sort(we,ke),Te=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,Te&&Ie.addToRenderList(S,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pe===!0&&ae.beginShadows();let Y=b.state.shadowsArray;if(fe.render(Y,A,z),pe===!0&&ae.endShadows(),(X&&T.hasRenderPass())===!1){let He=S.opaque,De=S.transmissive;if(b.setupLights(),z.isArrayCamera){let qe=z.cameras;if(De.length>0)for(let $e=0,ht=qe.length;$e<ht;$e++){let ut=qe[$e];Cu(He,De,A,ut)}Te&&Ie.render(A);for(let $e=0,ht=qe.length;$e<ht;$e++){let ut=qe[$e];za(S,A,ut,ut.viewport)}}else De.length>0&&Cu(He,De,A,z),Te&&Ie.render(A),za(S,A,z)}Q!==null&&G===0&&(k.updateMultisampleRenderTarget(Q),k.updateRenderTargetMipmap(Q)),X&&T.end(E),A.isScene===!0&&A.onAfterRender(E,A,z),Re.resetDefaultState(),q=-1,Z=null,M.pop(),M.length>0?(b=M[M.length-1],k.setTextureUnits(b.state.textureUnits),pe===!0&&ae.setGlobalState(E.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,D!==null&&D.renderEnd()};function Oa(A,z,J,X){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLightProbeGrid)b.pushLightProbeGrid(A);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(oe)){X&&ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);let He=j.update(A),De=A.material;De.visible&&S.push(A,He,De,J,ue.z,null,z)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(oe))){let He=j.update(A),De=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ue.copy(A.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),ue.copy(He.boundingSphere.center)),ue.applyMatrix4(A.matrixWorld).applyMatrix4(de)),Array.isArray(De)){let qe=He.groups;for(let $e=0,ht=qe.length;$e<ht;$e++){let ut=qe[$e],Fe=De[ut.materialIndex];Fe&&Fe.visible&&S.push(A,He,Fe,J,ue.z,ut,z)}}else De.visible&&S.push(A,He,De,J,ue.z,null,z)}}let Le=A.children;for(let He=0,De=Le.length;He<De;He++)Oa(Le[He],z,J,X)}function za(A,z,J,X){let{opaque:Y,transmissive:Le,transparent:He}=A;b.setupLightsView(J),pe===!0&&ae.setGlobalState(E.clippingPlanes,J),X&&w.viewport(K.copy(X)),Y.length>0&&Qs(Y,z,J),Le.length>0&&Qs(Le,z,J),He.length>0&&Qs(He,z,J),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Cu(A,z,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[X.id]===void 0){let Fe=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[X.id]=new Bt(1,1,{generateMipmaps:!0,type:Fe?nn:Gn,minFilter:Ri,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let Le=b.state.transmissionRenderTarget[X.id],He=X.viewport||K;Le.setSize(He.z*E.transmissionResolutionScale,He.w*E.transmissionResolutionScale);let De=E.getRenderTarget(),qe=E.getActiveCubeFace(),$e=E.getActiveMipmapLevel();E.setRenderTarget(Le),E.getClearColor(ze),Ce=E.getClearAlpha(),Ce<1&&E.setClearColor(16777215,.5),E.clear(),Te&&Ie.render(J);let ht=E.toneMapping;E.toneMapping=gn;let ut=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),b.setupLightsView(X),pe===!0&&ae.setGlobalState(E.clippingPlanes,X),Qs(A,J,X),k.updateMultisampleRenderTarget(Le),k.updateRenderTargetMipmap(Le),et.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let yt=0,Gt=z.length;yt<Gt;yt++){let Et=z[yt],{object:Dt,geometry:yn,material:Xe,group:Ln}=Et;if(Xe.side===pn&&Dt.layers.test(X.layers)){let Mt=Xe.side;Xe.side=dn,Xe.needsUpdate=!0,ka(Dt,J,X,yn,Xe,Ln),Xe.side=Mt,Xe.needsUpdate=!0,Fe=!0}}Fe===!0&&(k.updateMultisampleRenderTarget(Le),k.updateRenderTargetMipmap(Le))}E.setRenderTarget(De,qe,$e),E.setClearColor(ze,Ce),ut!==void 0&&(X.viewport=ut),E.toneMapping=ht}function Qs(A,z,J){let X=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,Le=A.length;Y<Le;Y++){let He=A[Y],{object:De,geometry:qe,group:$e}=He,ht=He.material;ht.allowOverride===!0&&X!==null&&(ht=X),De.layers.test(J.layers)&&ka(De,z,J,qe,ht,$e)}}function ka(A,z,J,X,Y,Le){D!==null&&Y.isNodeMaterial&&D.setObject(A,Y),A.onBeforeRender(E,z,J,X,Y,Le),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(E,z,J,X,A,Le),Y.transparent===!0&&Y.side===pn&&Y.forceSinglePass===!1?(Y.side=dn,Y.needsUpdate=!0,E.renderBufferDirect(J,z,X,Y,A,Le),Y.side=hr,Y.needsUpdate=!0,E.renderBufferDirect(J,z,X,Y,A,Le),Y.side=pn):E.renderBufferDirect(J,z,X,Y,A,Le),A.onAfterRender(E,z,J,X,Y,Le)}function js(A,z,J){z.isScene!==!0&&(z=Pe);let X=$.get(A),Y=b.state.lights,Le=b.state.shadowsArray,He=Y.state.version,De=ge.getParameters(A,Y.state,Le,z,J,b.state.lightProbeGridArray),qe=ge.getProgramCacheKey(De),$e=X.programs;X.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,X.fog=z.fog;let ht=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;X.envMap=ie.get(A.envMap||X.environment,ht),X.envMapRotation=X.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,$e===void 0&&(A.addEventListener("dispose",sn),$e=new Map,X.programs=$e);let ut=$e.get(qe);if(ut!==void 0){if(X.currentProgram===ut&&X.lightsStateVersion===He)return ye(A,De),ut}else De.uniforms=ge.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,J,De),A.onBeforeCompile(De,E),ut=ge.acquireProgram(De,qe),$e.set(qe,ut),X.uniforms=De.uniforms;let Fe=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=ae.uniform),ye(A,De),X.needsLights=mt(A),X.lightsStateVersion=He,X.needsLights&&(Fe.ambientLightColor.value=Y.state.ambient,Fe.lightProbe.value=Y.state.probe,Fe.sunLights.value=Y.state.sun,Fe.sunLightShadows.value=Y.state.sunShadow,Fe.directionalLights.value=Y.state.directional,Fe.directionalLightShadows.value=Y.state.directionalShadow,Fe.spotLights.value=Y.state.spot,Fe.spotLightShadows.value=Y.state.spotShadow,Fe.rectAreaLights.value=Y.state.rectArea,Fe.ltc_1.value=Y.state.rectAreaLTC1,Fe.ltc_2.value=Y.state.rectAreaLTC2,Fe.pointLights.value=Y.state.point,Fe.pointLightShadows.value=Y.state.pointShadow,Fe.hemisphereLights.value=Y.state.hemi,Fe.sunShadowMatrix.value=Y.state.sunShadowMatrix,Fe.sunShadowCascade.value=Y.state.sunShadowCascade,Fe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Fe.spotLightMatrix.value=Y.state.spotLightMatrix,Fe.spotLightMap.value=Y.state.spotLightMap,Fe.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.lightProbeGrid=b.state.lightProbeGridArray.length>0,X.currentProgram=ut,X.uniformsList=null,ut}function Ru(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Ma.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function ye(A,z){let J=$.get(A);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function Ze(A,z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;x.setFromMatrixPosition(z.matrixWorld);for(let J=0,X=A.length;J<X;J++){let Y=A[J];if(Y.texture!==null&&Y.boundingBox.containsPoint(x))return Y}return null}function Qe(A,z,J,X,Y){z.isScene!==!0&&(z=Pe),k.resetTextureUnits();let Le=z.fog,He=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?z.environment:null,De=Q===null?E.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:gt.workingColorSpace,qe=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,$e=ie.get(X.envMap||He,qe),ht=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ut=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Fe=!!J.morphAttributes.position,yt=!!J.morphAttributes.normal,Gt=!!J.morphAttributes.color,Et=gn;X.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Et=E.toneMapping);let Dt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,yn=Dt!==void 0?Dt.length:0,Xe=$.get(X),Ln=b.state.lights;if(pe===!0&&(Me===!0||A!==Z)){let Ft=A===Z&&X.id===q;ae.setState(X,A,Ft)}let Mt=!1;X.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Ln.state.version||Xe.outputColorSpace!==De||Y.isBatchedMesh&&Xe.batching===!1||!Y.isBatchedMesh&&Xe.batching===!0||Y.isBatchedMesh&&Xe.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Xe.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Xe.instancing===!1||!Y.isInstancedMesh&&Xe.instancing===!0||Y.isSkinnedMesh&&Xe.skinning===!1||!Y.isSkinnedMesh&&Xe.skinning===!0||Y.isInstancedMesh&&Xe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Xe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Xe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Xe.instancingMorph===!1&&Y.morphTexture!==null||Xe.envMap!==$e||X.fog===!0&&Xe.fog!==Le||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ae.numPlanes||Xe.numIntersection!==ae.numIntersection)||Xe.vertexAlphas!==ht||Xe.vertexTangents!==ut||Xe.morphTargets!==Fe||Xe.morphNormals!==yt||Xe.morphColors!==Gt||Xe.toneMapping!==Et||Xe.morphTargetsCount!==yn||!!Xe.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,Xe.__version=X.version);let ui=Xe.currentProgram;Mt===!0&&(ui=js(X,z,Y),D&&X.isNodeMaterial&&D.onUpdateProgram(X,ui,Xe));let Di=!1,Sr=!1,eo=!1,It=ui.getUniforms(),Jt=Xe.uniforms;if(w.useProgram(ui.program)&&(Di=!0,Sr=!0,eo=!0),X.id!==q&&(q=X.id,Sr=!0),Xe.needsLights){let Ft=Ze(b.state.lightProbeGridArray,Y);Xe.lightProbeGrid!==Ft&&(Xe.lightProbeGrid=Ft,Sr=!0)}if(Di||Z!==A){w.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),It.setValue(O,"projectionMatrix",A.projectionMatrix),It.setValue(O,"viewMatrix",A.matrixWorldInverse);let wr=It.map.cameraPosition;wr!==void 0&&wr.setValue(O,_e.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&It.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&It.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),Z!==A&&(Z=A,Sr=!0,eo=!0)}if(Xe.needsLights&&(Ln.state.sunShadowMap.length>0&&It.setValue(O,"sunShadowMap",Ln.state.sunShadowMap,k),Ln.state.directionalShadowMap.length>0&&It.setValue(O,"directionalShadowMap",Ln.state.directionalShadowMap,k),Ln.state.spotShadowMap.length>0&&It.setValue(O,"spotShadowMap",Ln.state.spotShadowMap,k),Ln.state.pointShadowMap.length>0&&It.setValue(O,"pointShadowMap",Ln.state.pointShadowMap,k)),Y.isSkinnedMesh){It.setOptional(O,Y,"bindMatrix"),It.setOptional(O,Y,"bindMatrixInverse");let Ft=Y.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),It.setValue(O,"boneTexture",Ft.boneTexture,k))}Y.isBatchedMesh&&(It.setOptional(O,Y,"batchingTexture"),It.setValue(O,"batchingTexture",Y._matricesTexture,k),It.setOptional(O,Y,"batchingIdTexture"),It.setValue(O,"batchingIdTexture",Y._indirectTexture,k),It.setOptional(O,Y,"batchingColorTexture"),Y._colorsTexture!==null&&It.setValue(O,"batchingColorTexture",Y._colorsTexture,k));let br=J.morphAttributes;if((br.position!==void 0||br.normal!==void 0||br.color!==void 0)&&B.update(Y,J,ui),(Sr||Xe.receiveShadow!==Y.receiveShadow)&&(Xe.receiveShadow=Y.receiveShadow,It.setValue(O,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&z.environment!==null&&(Jt.envMapIntensity.value=z.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=rT()),Sr){if(It.setValue(O,"toneMappingExposure",E.toneMappingExposure),Xe.needsLights&&lt(Jt,eo),Le&&X.fog===!0&&Se.refreshFogUniforms(Jt,Le),Se.refreshMaterialUniforms(Jt,X,re,W,b.state.transmissionRenderTarget[A.id]),Xe.needsLights&&Xe.lightProbeGrid){let Ft=Xe.lightProbeGrid;Jt.probesSH.value=Ft.texture,Jt.probesMin.value.copy(Ft.boundingBox.min),Jt.probesMax.value.copy(Ft.boundingBox.max),Jt.probesResolution.value.copy(Ft.resolution)}Ma.upload(O,Ru(Xe),Jt,k)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ma.upload(O,Ru(Xe),Jt,k),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&It.setValue(O,"center",Y.center),It.setValue(O,"modelViewMatrix",Y.modelViewMatrix),It.setValue(O,"normalMatrix",Y.normalMatrix),It.setValue(O,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){let Ft=X.uniformsGroups;for(let wr=0,to=Ft.length;wr<to;wr++){let f0=Ft[wr];ce.update(f0,ui),ce.bind(f0,ui)}}return ui}function lt(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function mt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(A,z,J){let X=$.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),$.get(A.texture).__webglTexture=z,$.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let J=$.get(A);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,J=0){Q=A,F=z,G=J;let X=null,Y=!1,Le=!1;if(A){let De=$.get(A);if(De.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(O.FRAMEBUFFER,De.__webglFramebuffer),K.copy(A.viewport),ee.copy(A.scissor),ne=A.scissorTest,w.viewport(K),w.scissor(ee),w.setScissorTest(ne),q=-1;return}else if(De.__webglFramebuffer===void 0)k.setupRenderTarget(A);else if(De.__hasExternalTextures)k.rebindTextures(A,$.get(A.texture).__webglTexture,$.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ht=A.depthTexture;if(De.__boundDepthTexture!==ht){if(ht!==null&&$.has(ht)&&(A.width!==ht.image.width||A.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(A)}}let qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Le=!0);let $e=$.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($e[z])?X=$e[z][J]:X=$e[z],Y=!0):A.samples>0&&k.useMultisampledRTT(A)===!1?X=$.get(A).__webglMultisampledFramebuffer:Array.isArray($e)?X=$e[J]:X=$e,K.copy(A.viewport),ee.copy(A.scissor),ne=A.scissorTest}else K.copy(Ee).multiplyScalar(re).floor(),ee.copy(Be).multiplyScalar(re).floor(),ne=ot;if(J!==0&&(X=U),w.bindFramebuffer(O.FRAMEBUFFER,X)&&w.drawBuffers(A,X),w.viewport(K),w.scissor(ee),w.setScissorTest(ne),Y){let De=$.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,De.__webglTexture,J)}else if(Le){let De=z;for(let qe=0;qe<A.textures.length;qe++){let $e=$.get(A.textures[qe]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+qe,$e.__webglTexture,J,De)}}else if(A!==null&&J!==0){let De=$.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,De.__webglTexture,J)}q=-1};function dt(A){let z=$.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=P.textureFormatReadable(A.format),z.__typeReadable=P.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,J,X,Y,Le,He,De=0){if(!(A&&A.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(qe=qe[He]),qe){w.bindFramebuffer(O.FRAMEBUFFER,qe);try{let $e=A.textures[De],ht=$e.format,ut=$e.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+De);let Fe=dt($e);if(Fe.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-X&&J>=0&&J<=A.height-Y&&O.readPixels(z,J,X,Y,Ae.convert(ht),Ae.convert(ut),Le)}finally{let $e=Q!==null?$.get(Q).__webglFramebuffer:null;w.bindFramebuffer(O.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(A,z,J,X,Y,Le,He,De=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(qe=qe[He]),qe)if(z>=0&&z<=A.width-X&&J>=0&&J<=A.height-Y){w.bindFramebuffer(O.FRAMEBUFFER,qe);let $e=A.textures[De],ht=$e.format,ut=$e.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+De);let Fe=dt($e);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let yt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,yt),O.bufferData(O.PIXEL_PACK_BUFFER,Le.byteLength,O.STREAM_READ),O.readPixels(z,J,X,Y,Ae.convert(ht),Ae.convert(ut),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Gt=Q!==null?$.get(Q).__webglFramebuffer:null;w.bindFramebuffer(O.FRAMEBUFFER,Gt);let Et=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await xv(O,Et,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,yt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Le),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(yt),O.deleteSync(Et),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,J=0){let X=Math.pow(2,-J),Y=Math.floor(A.image.width*X),Le=Math.floor(A.image.height*X),He=z!==null?z.x:0,De=z!==null?z.y:0;k.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,He,De,Y,Le),w.unbindTexture()},this.copyTextureToTexture=function(A,z,J=null,X=null,Y=0,Le=0){let He,De,qe,$e,ht,ut,Fe,yt,Gt,Et=A.isCompressedTexture?A.mipmaps[Le]:A.image;if(J!==null)He=J.max.x-J.min.x,De=J.max.y-J.min.y,qe=J.isBox3?J.max.z-J.min.z:1,$e=J.min.x,ht=J.min.y,ut=J.isBox3?J.min.z:0;else{let Jt=Math.pow(2,-Y);He=Math.floor(Et.width*Jt),De=Math.floor(Et.height*Jt),A.isDataArrayTexture?qe=Et.depth:A.isData3DTexture?qe=Math.floor(Et.depth*Jt):qe=1,$e=0,ht=0,ut=0}X!==null?(Fe=X.x,yt=X.y,Gt=X.z):(Fe=0,yt=0,Gt=0);let Dt=Ae.convert(z.format),yn=Ae.convert(z.type),Xe;z.isData3DTexture?(k.setTexture3D(z,0),Xe=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(k.setTexture2DArray(z,0),Xe=O.TEXTURE_2D_ARRAY):(k.setTexture2D(z,0),Xe=O.TEXTURE_2D),w.activeTexture(O.TEXTURE0),w.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),w.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),w.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);let Ln=w.getParameter(O.UNPACK_ROW_LENGTH),Mt=w.getParameter(O.UNPACK_IMAGE_HEIGHT),ui=w.getParameter(O.UNPACK_SKIP_PIXELS),Di=w.getParameter(O.UNPACK_SKIP_ROWS),Sr=w.getParameter(O.UNPACK_SKIP_IMAGES);w.pixelStorei(O.UNPACK_ROW_LENGTH,Et.width),w.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Et.height),w.pixelStorei(O.UNPACK_SKIP_PIXELS,$e),w.pixelStorei(O.UNPACK_SKIP_ROWS,ht),w.pixelStorei(O.UNPACK_SKIP_IMAGES,ut);let eo=A.isDataArrayTexture||A.isData3DTexture,It=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let Jt=$.get(A),br=$.get(z),Ft=$.get(Jt.__renderTarget),wr=$.get(br.__renderTarget);w.bindFramebuffer(O.READ_FRAMEBUFFER,Ft.__webglFramebuffer),w.bindFramebuffer(O.DRAW_FRAMEBUFFER,wr.__webglFramebuffer);for(let to=0;to<qe;to++)eo&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$.get(A).__webglTexture,Y,ut+to),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$.get(z).__webglTexture,Le,Gt+to)),O.blitFramebuffer($e,ht,He,De,Fe,yt,He,De,O.DEPTH_BUFFER_BIT,O.NEAREST);w.bindFramebuffer(O.READ_FRAMEBUFFER,null),w.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||$.has(A)){let Jt=$.get(A),br=$.get(z);w.bindFramebuffer(O.READ_FRAMEBUFFER,N),w.bindFramebuffer(O.DRAW_FRAMEBUFFER,L);for(let Ft=0;Ft<qe;Ft++)eo?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Jt.__webglTexture,Y,ut+Ft):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Jt.__webglTexture,Y),It?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,br.__webglTexture,Le,Gt+Ft):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,br.__webglTexture,Le),Y!==0?O.blitFramebuffer($e,ht,He,De,Fe,yt,He,De,O.COLOR_BUFFER_BIT,O.NEAREST):It?O.copyTexSubImage3D(Xe,Le,Fe,yt,Gt+Ft,$e,ht,He,De):O.copyTexSubImage2D(Xe,Le,Fe,yt,$e,ht,He,De);w.bindFramebuffer(O.READ_FRAMEBUFFER,null),w.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else It?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Xe,Le,Fe,yt,Gt,He,De,qe,Dt,yn,Et.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(Xe,Le,Fe,yt,Gt,He,De,qe,Dt,Et.data):O.texSubImage3D(Xe,Le,Fe,yt,Gt,He,De,qe,Dt,yn,Et):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Le,Fe,yt,He,De,Dt,yn,Et.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Le,Fe,yt,Et.width,Et.height,Dt,Et.data):O.texSubImage2D(O.TEXTURE_2D,Le,Fe,yt,He,De,Dt,yn,Et);w.pixelStorei(O.UNPACK_ROW_LENGTH,Ln),w.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Mt),w.pixelStorei(O.UNPACK_SKIP_PIXELS,ui),w.pixelStorei(O.UNPACK_SKIP_ROWS,Di),w.pixelStorei(O.UNPACK_SKIP_IMAGES,Sr),Le===0&&z.generateMipmaps&&O.generateMipmap(Xe),w.unbindTexture()},this.initRenderTarget=function(A){$.get(A).__webglFramebuffer===void 0&&k.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?k.setTextureCube(A,0):A.isData3DTexture?k.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?k.setTexture2DArray(A,0):k.setTexture2D(A,0),w.unbindTexture()},this.resetState=function(){F=0,G=0,Q=null,w.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};var sT=new Set(["number","boolean","select","color","string"]),su=i=>i==null?i:JSON.parse(JSON.stringify(i));function $f(i){return i&&typeof i=="object"&&(Object.values(i).forEach($f),Object.freeze(i)),i}function sx(i,e,t){if(e.type==="number"&&(!Number.isFinite(t)||t<e.min||t>e.max))throw new Error(`Parameter ${i} outside range`);if(e.type==="boolean"&&typeof t!="boolean")throw new Error(`Parameter ${i} must be boolean`);if(e.type==="select"&&!e.options.some(n=>(typeof n=="object"?n.value:n)===t))throw new Error(`Parameter ${i} not an option`);if(e.type==="color"&&(typeof t!="string"||!/^#[0-9a-f]{6}$/i.test(t)))throw new Error(`Parameter ${i} must be a hex color`);if(e.type==="string"&&(typeof t!="string"||t.length>(e.maxLength||256)))throw new Error(`Parameter ${i} must be bounded text`);return t}function Nm(){let i=new Map,e=new Map;function t(a){return i.has(a)?a:e.get(a)}function n(a){let l=i.get(t(a));if(!l)throw new Error(`Unavailable Three.js scene: ${a}`);return l}function r(a){if(!a||a.apiVersion!==1)throw new Error("Incompatible scene API version");if(!/^[a-z][a-z0-9-]*$/.test(a.id||"")||/anime-svg/.test(a.id))throw new Error("Invalid scene ID");if(!Number.isInteger(a.stateVersion)||a.stateVersion<1)throw new Error("Invalid state version");if(typeof a.create!="function")throw new Error("Missing scene factory");if(a.aliases!==void 0&&!Array.isArray(a.aliases))throw new Error("Scene aliases must be an array");for(let d of["camera","capabilities","quality"])if(!a[d]||typeof a[d]!="object"||Array.isArray(a[d]))throw new Error(`Invalid scene ${d}`);let l=a.camera;for(let d of["theta","phi","radius","fov","minRadius","maxRadius"])if(l[d]!==void 0&&!Number.isFinite(l[d]))throw new Error(`Invalid camera ${d}`);if(l.radius!==void 0&&l.radius<=0||l.minRadius!==void 0&&l.minRadius<=0||l.maxRadius!==void 0&&l.maxRadius<=0||l.minRadius!==void 0&&l.maxRadius!==void 0&&l.minRadius>l.maxRadius)throw new Error("Invalid camera radius bounds");if(l.radius!==void 0&&(l.minRadius!==void 0&&l.radius<l.minRadius||l.maxRadius!==void 0&&l.radius>l.maxRadius))throw new Error("Default camera outside radius bounds");if(l.fov!==void 0&&(l.fov<=0||l.fov>=180))throw new Error("Invalid camera FOV");for(let d of["lookAt","position"])if(l[d]!==void 0&&(!Array.isArray(l[d])||l[d].length!==3||!l[d].every(Number.isFinite)))throw new Error(`Invalid camera ${d}`);if(l.fit&&(!Number.isFinite(l.fit.halfWidth)||!Number.isFinite(l.fit.halfHeight)||l.fit.halfWidth<=0||l.fit.halfHeight<=0))throw new Error("Invalid camera framing bounds");for(let d of["label","category","preview"])if(typeof a[d]!="string"||!a[d])throw new Error(`Missing scene ${d}`);if(!a.preview.startsWith("/")||/(?:\.\.|https?:)/.test(a.preview))throw new Error("Preview must be a local absolute asset path");let c=[a.id,...a.aliases||[]];if(new Set(c).size!==c.length)throw new Error("Duplicate scene alias");for(let d of c){if(typeof d!="string"||!d||/anime-svg/.test(d))throw new Error("Invalid scene alias");if(i.has(d)||e.has(d))throw new Error(`Duplicate scene ID or alias: ${d}`)}let u=su(a.params||{});for(let[d,p]of Object.entries(u)){if(!/^[a-z][a-zA-Z0-9]*$/.test(d)||["constructor","prototype"].includes(d))throw new Error(`Invalid parameter key: ${d}`);if(!p||!sT.has(p.type))throw new Error(`Invalid parameter specification: ${d}`);if(p.type==="number"&&(!Number.isFinite(p.min)||!Number.isFinite(p.max)||p.max<p.min||p.step!==void 0&&!(p.step>0)))throw new Error(`Invalid parameter range: ${d}`);if(p.type==="select"&&(!Array.isArray(p.options)||!p.options.length))throw new Error(`Missing parameter options: ${d}`);if(p.type==="select"){let v=p.options.map(g=>g&&typeof g=="object"?g.value:g);if(v.some(g=>!["string","number","boolean"].includes(typeof g)||typeof g=="number"&&!Number.isFinite(g))||new Set(v).size!==v.length)throw new Error(`Invalid parameter options: ${d}`)}if(p.type==="string"&&p.maxLength!==void 0&&(!Number.isInteger(p.maxLength)||p.maxLength<1||p.maxLength>4096))throw new Error(`Invalid text bound: ${d}`);sx(d,p,p.default)}if(a.migrateState!==void 0&&typeof a.migrateState!="function")throw new Error("Invalid state migration");let f=$f({apiVersion:1,id:a.id,stateVersion:a.stateVersion,label:a.label,category:a.category,preview:a.preview,aliases:c.slice(1),params:u,camera:su(a.camera||{}),capabilities:su(a.capabilities||{}),quality:su(a.quality||{})}),h=Object.freeze({...f,create:a.create,migrateState:a.migrateState,metadata:f});return i.set(a.id,h),c.slice(1).forEach(d=>e.set(d,a.id)),f}function s(a,l,c){let u=n(a);if(!l||typeof l!="object"||Array.isArray(l))throw new Error("Parameters must be an object");let f={};for(let h of Object.keys(l))if(!Object.hasOwn(u.params,h))throw new Error(`Unknown parameter: ${h}`);for(let[h,d]of Object.entries(u.params)){let p=Object.hasOwn(l,h)?l[h]:c&&Object.hasOwn(c,h)?c[h]:d.default;f[h]=sx(h,d,p)}return $f(f)}function o(a,l={}){let c=n(a);if(!l||typeof l!="object"||Array.isArray(l))throw new Error("Invalid scene state");let u=su(l),f=u.stateVersion===void 0?c.stateVersion:u.stateVersion;if(!Number.isInteger(f)||f<1||f>c.stateVersion)throw new Error("Unsupported scene state version");if(f<c.stateVersion){if(!c.migrateState)throw new Error("Scene state migration unavailable");if(u=c.migrateState(u,f,c.stateVersion),!u||u.stateVersion!==c.stateVersion)throw new Error("Migration did not produce current scene state")}let h=s(c.id,u.params===void 0?{}:u.params);return $f({id:c.id,stateVersion:c.stateVersion,params:h})}return Object.freeze({register:r,get:n,resolve:t,validateParams:s,normalizeState:o,catalog:()=>Object.freeze([...i.values()].map(a=>a.metadata))})}function Jf(){let i=new AbortController,e=new Set,t=new Set,n=new Set,r=!1;function s(c){if(typeof c!="function")throw new Error("Cleanup must be a function");return r?c():t.add(c),c}function o(c){if(!c||typeof c.dispose!="function")throw new Error("Resource must be disposable");return e.has(c)||(r?c.dispose():e.add(c)),c}function a(c){return c.traverse(u=>{u.isInstancedMesh&&o(u),u.geometry&&o(u.geometry);let f=Array.isArray(u.material)?u.material:u.material?[u.material]:[];for(let h of f)o(h),Object.values(h).forEach(d=>{d&&d.isTexture&&!d.userData?.spaceShared&&o(d)}),Object.values(h.uniforms||{}).forEach(d=>{d.value&&d.value.isTexture&&!d.value.userData?.spaceShared&&o(d.value)});u.shadow&&u.shadow.map&&o(u.shadow.map)}),c}function l(){let c=0;for(let u of e)if(u.isBufferGeometry){let f=new Set(Object.values(u.attributes||{}).map(h=>h.array));u.index&&f.add(u.index.array),f.forEach(h=>{c+=h?h.byteLength:0})}else if(u.isTexture){let f=u.image||{};c+=(f.width||0)*(f.height||0)*4*1.333}else u.isWebGLRenderTarget?c+=u.width*u.height*8:u.isInstancedMesh&&(c+=u.instanceMatrix.array.byteLength+(u.instanceColor?u.instanceColor.array.byteLength:0));return{resources:e.size,tasks:n.size,cleanups:t.size,estimatedBytes:Math.round(c)}}return{signal:i.signal,track:o,trackTree:a,defer:s,stats:l,release(c){e.delete(c)&&c.dispose()},listen(c,u,f,h){return c.addEventListener(u,f,h),s(()=>c.removeEventListener(u,f,h)),f},timeout(c,u){if(r)return null;let f=setTimeout(()=>{n.delete(f),r||c()},u);return n.add(f),f},abortController(){let c=new AbortController;return s(()=>c.abort()),c},dispose(){r||(r=!0,i.abort(),n.forEach(clearTimeout),n.clear(),[...t].reverse().forEach(c=>{try{c()}catch{}}),t.clear(),[...e].reverse().forEach(c=>{try{c.dispose()}catch{}}),e.clear())}}}var Fm=Object.freeze({low:Object.freeze({mode:"low",fps:30,density:.4,dprCap:.85,pixelBudget:1e6,drawCalls:40,particles:12e3,triangles:8e4,memoryBytes:67108864,post:!1}),medium:Object.freeze({mode:"medium",fps:60,density:.7,dprCap:1,pixelBudget:21e5,drawCalls:80,particles:3e4,triangles:2e5,memoryBytes:134217728,post:!0}),high:Object.freeze({mode:"high",fps:60,density:1,dprCap:1.25,pixelBudget:33e5,drawCalls:120,particles:5e4,triangles:4e5,memoryBytes:201326592,post:!0})}),vr=["low","medium","high"];function Kf(i){return["auto",...vr].includes(i)?i:"auto"}function ox(i="auto",e=1){let t=d=>typeof d=="string"&&vr.includes(d)?vr.indexOf(d):Number.isFinite(Number(d))?Math.max(0,Math.min(2,Math.floor(Number(d)))):1,n=t(e),r=Kf(i),s=0,o="",a=null,l=0,c=null,u=[],f=0;function h(d=null){s=Math.min(n,r==="auto"?1:vr.indexOf(r)),o=s<(r==="auto"?1:vr.indexOf(r))?"device-ceiling":"",a=d,l=d||0,c=null,u=[],f=0}return h(),{profile:()=>Fm[vr[s]],status:()=>({qualityMode:r,effectiveQuality:vr[s],qualityReason:o}),setMode(d){r=Kf(d),h()},setDeviceTier(d){return n=Math.min(n,t(d)),s<=n?!1:(s=n,o="device-ceiling",f=0,!0)},warmup(d){a=d,l=d||0,u=[],c=null,f=0},dpr(d,p,v=1){let g=Fm[vr[s]];return Math.min(v,g.dprCap,Math.sqrt(g.pixelBudget/Math.max(1,d*p)))},sample(d,p,v){if(a===null&&(a=d,l=d),c!==null&&d>c&&u.push(d-c),c=d,d-a<1e4||d-l<2e3)return!1;let g=Fm[vr[s]];typeof p=="function"&&(p=p());let m=u.slice().sort((x,S)=>x-S),_=m[Math.floor(m.length*.95)]||0;return f=m.length>=10&&(_>1e3/g.fps*1.4||v>1e3/g.fps*.8||p.drawCalls>g.drawCalls||p.points>g.particles||p.triangles>g.triangles||p.estimatedBytes>g.memoryBytes)?f+1:0,l=d,u=[],f>=3&&s>0?(s--,o="sustained-frame-or-resource-pressure",f=0,!0):!1}}}var ba={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var si=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},oT=new Gi(-1,1,1,-1,0,1),Um=class extends Ke{constructor(){super(),this.setAttribute("position",new Ue([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ue([0,2,0,0,2,0],2))}},aT=new Um,Xr=class{constructor(e){this._mesh=new nt(aT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,oT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var wa=class extends si{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Rt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Wi.clone(e.uniforms),this.material=new Rt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Xr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ou=class extends si{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},Qf=class extends si{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var jf=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new Bt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new wa(ba),this.copyPass.material.blending=ni,this.timer=new Ps}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ou!==void 0&&(o instanceof ou?n=!0:o instanceof Qf&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ed=class extends si{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new xe}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}};var ax={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ta=class i extends si{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new xe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Bt(s,o,{type:nn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Bt(s,o,{type:nn,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let h=new Bt(s,o,{type:nn,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),o=Math.round(o/2)}let a=ax;this.highPassUniforms=Wi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new le(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Wi.clone(ba.uniforms),this.blendMaterial=new Rt({uniforms:this.copyUniforms,vertexShader:ba.vertexShader,fragmentShader:ba.fragmentShader,premultipliedAlpha:!0,blending:fr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new xe,this._oldClearAlpha=1,this._basic=new zn,this._fsQuad=new Xr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new le(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let r=[],s=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;r.push((o*a+(o+1)*l)/c),s.push(c)}return new Rt({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Rt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Ta.BlurDirectionX=new le(1,0);Ta.BlurDirectionY=new le(0,1);var au={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var td=class extends si{constructor(){super(),this.isOutputPass=!0,this.uniforms=Wi.clone(au.uniforms),this.material=new zr({name:au.name,uniforms:this.uniforms,vertexShader:au.vertexShader,fragmentShader:au.fragmentShader}),this._fsQuad=new Xr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===St&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ia?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ra?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===sa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Wr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===aa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===la?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===oa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var qi=Math.PI*2,vn=(i,e,t)=>Math.min(t,Math.max(e,i)),xn=(i,e,t)=>i+(e-i)*t,zt=(i,e,t)=>{let n=vn((t-i)/(e-i),0,1);return n*n*(3-2*n)},qr=(i,e,t,n)=>xn(i,e,1-Math.exp(-t*n));function Gs(i){let e=i|0;return function(){e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function oi(i,e,t){return new R(i,e,t)}function Bm({segs:i=32,ring:e=16,center:t,section:n,color:r}){let s=[],o=[],a=[],l=[],c=new xe;for(let f=0;f<=i;f++){let h=f/i,d=t(h);for(let p=0;p<=e;p++){let v=p/e,[g,m]=n(h,v);s.push(d.x,d.y+g,d.z+m),o.push(h,v),r&&(r(h,v,c),a.push(c.r,c.g,c.b))}}for(let f=0;f<i;f++)for(let h=0;h<e;h++){let d=f*(e+1)+h,p=d+e+1;l.push(d,d+1,p,p,d+1,p+1)}let u=new Ke;return u.setAttribute("position",new Ue(s,3)),u.setAttribute("uv",new Ue(o,2)),r&&u.setAttribute("color",new Ue(a,3)),u.setIndex(l),u.computeVertexNormals(),u}var lu=class{constructor(e,t,n){this.tub=e,this.rad=t,this.radiusFn=n;let r=(e+1)*(t+1);this.pos=new Float32Array(r*3),this.nor=new Float32Array(r*3);let s=new Float32Array(r*2),o=[];for(let u=0;u<=e;u++)for(let f=0;f<=t;f++){let h=u*(t+1)+f;s[h*2]=u/e,s[h*2+1]=f/t}for(let u=0;u<e;u++)for(let f=0;f<t;f++){let h=u*(t+1)+f,d=h+t+1;o.push(h,h+1,d,d,h+1,d+1)}let a=new Ke,l=new it(this.pos,3),c=new it(this.nor,3);l.setUsage(eu),c.setUsage(eu),a.setAttribute("position",l),a.setAttribute("normal",c),a.setAttribute("uv",new it(s,2)),a.setIndex(o),this.geometry=a,this.curve=new Ms([oi(0,0,0),oi(0,1,0)],!1,"centripetal"),this._P=[],this._T=[];for(let u=0;u<=e;u++)this._P.push(new R),this._T.push(new R);this._N=new R,this._B=new R,this._d=new R}update(e){let{tub:t,rad:n,pos:r,nor:s,_P:o,_T:a,_N:l,_B:c,_d:u}=this;this.curve.points=e;for(let h=0;h<=t;h++)this.curve.getPoint(h/t,o[h]);for(let h=0;h<=t;h++){let d=o[Math.max(0,h-1)],p=o[Math.min(t,h+1)];a[h].subVectors(p,d).normalize()}let f=a[0];l.set(0,0,1),Math.abs(f.dot(l))>.9&&l.set(1,0,0),l.addScaledVector(f,-f.dot(l)).normalize();for(let h=0;h<=t;h++){let d=a[h];h>0&&l.addScaledVector(d,-d.dot(l)).normalize(),c.crossVectors(d,l);let p=this.radiusFn(h/t),v=o[h];for(let g=0;g<=n;g++){let m=g/n*qi,_=Math.cos(m),y=Math.sin(m);u.set(l.x*_+c.x*y,l.y*_+c.y*y,l.z*_+c.z*y);let x=(h*(n+1)+g)*3;r[x]=v.x+u.x*p,r[x+1]=v.y+u.y*p,r[x+2]=v.z+u.z*p,s[x]=u.x,s[x+1]=u.y,s[x+2]=u.z}}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.normal.needsUpdate=!0}};function Lt(i,e){let t=new xe(e),n=i.attributes.position.count,r=new Float32Array(n*3);for(let s=0;s<n;s++)r[s*3]=t.r,r[s*3+1]=t.g,r[s*3+2]=t.b;return i.setAttribute("color",new it(r,3)),i}function wt(i){let e=i.index?i.toNonIndexed():i;for(let t of Object.keys(e.attributes))t!=="position"&&t!=="normal"&&t!=="color"&&e.deleteAttribute(t);return e.attributes.normal||e.computeVertexNormals(),e.attributes.color||Lt(e,16777215),e.morphAttributes={},e}var _n={uSunDir:{value:new R(.5,.3,-.8).normalize()},uMoonDir:{value:new R(-.5,.5,.7).normalize()},uZenith:{value:new xe},uHorizon:{value:new xe},uGround:{value:new xe},uSunColor:{value:new xe},uSunGlow:{value:1},uNight:{value:0},uTime:{value:0},uCloudOffset:{value:new le},uCloudCover:{value:.45},uCloudTint:{value:new xe},uCloudShade:{value:new xe}},Om=`
uniform vec3 uSunDir;
uniform vec3 uMoonDir;
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uGround;
uniform vec3 uSunColor;
uniform float uSunGlow;
uniform float uNight;
uniform float uTime;

vec3 skyBase(vec3 dir) {
  float y = dir.y;
  float h = pow(1.0 - clamp(y, 0.0, 1.0), 3.5);
  vec3 col = mix(uZenith, uHorizon, h);
  if (y < 0.0) col = mix(uHorizon, uGround, smoothstep(0.0, -0.3, y));
  float sd = max(dot(dir, uSunDir), 0.0);
  float glow = pow(sd, 6.0) * 0.28 + pow(sd, 48.0) * 0.55 + pow(sd, 400.0) * 1.2;
  col += uSunColor * glow * uSunGlow * (0.45 + 0.55 * h);
  float md = max(dot(dir, uMoonDir), 0.0);
  col += vec3(0.35, 0.45, 0.7) * (pow(md, 24.0) * 0.05 + pow(md, 300.0) * 0.2) * uNight;
  return col;
}
`,lx=`
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float hash13(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), u.x),
             mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    s += a * vnoise(p);
    p = p * 2.03 + vec2(1.7, 9.2);
    a *= 0.5;
  }
  return s;
}
`,cx=lx,lT=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}
`,cT=`
${Om}
${lx}
uniform vec2 uCloudOffset;
uniform float uCloudCover;
uniform vec3 uCloudTint;
uniform vec3 uCloudShade;
uniform float uDetail;
varying vec3 vDir;

void main() {
  vec3 dir = normalize(vDir);
  vec3 col = skyBase(dir);

  // \u661F\u7A7A + \u94F6\u6CB3
  if (uNight > 0.01 && dir.y > -0.05) {
    vec3 p = dir * 320.0;
    vec3 cell = floor(p);
    float h = hash13(cell);
    if (h > 0.9955) {
      vec3 c = cell + 0.5 + (vec3(hash13(cell + 1.3), hash13(cell + 7.1), hash13(cell + 3.7)) - 0.5) * 0.7;
      float d = length(p - c);
      float star = smoothstep(0.42, 0.0, d);
      float tw = 0.55 + 0.45 * sin(uTime * (1.5 + h * 7.0) + h * 91.0);
      vec3 sc = mix(vec3(1.0, 0.82, 0.7), vec3(0.75, 0.85, 1.0), hash13(cell + 5.0));
      col += sc * star * tw * uNight * 3.0 * smoothstep(-0.02, 0.2, dir.y);
    }
    vec3 axis = normalize(vec3(0.3, 0.55, 0.78));
    float band = exp(-pow(dot(dir, axis) * 5.0, 2.0));
    float mw = fbm(dir.xz * 9.0 + dir.y * 4.0);
    col += vec3(0.28, 0.3, 0.45) * band * mw * mw * 0.35 * uNight * smoothstep(0.0, 0.3, dir.y);
  }

  // \u592A\u9633\u5706\u76D8
  float sd = dot(dir, uSunDir);
  col += uSunColor * smoothstep(0.99955, 0.99975, sd) * 18.0 * (1.0 - uNight);

  // \u6708\u4EAE\uFF08\u5E26\u7B80\u5355\u6708\u76F8\u660E\u6697\uFF09
  float md = dot(dir, uMoonDir);
  float moon = smoothstep(0.99925, 0.99945, md);
  if (moon > 0.0) {
    vec3 t1 = normalize(cross(uMoonDir, vec3(0.0, 1.0, 0.0)));
    vec3 t2 = cross(t1, uMoonDir);
    vec2 mp = vec2(dot(dir, t1), dot(dir, t2)) / 0.033;
    float lit = smoothstep(-0.25, 0.35, mp.x + 0.35);
    float craters = 0.82 + 0.18 * vnoise(mp * 6.0);
    col = mix(col, vec3(1.0, 0.97, 0.9) * 2.4 * craters * mix(0.12, 1.0, lit), moon * smoothstep(0.0, 0.5, uNight));
  }

  // \u7A0B\u5E8F\u5316\u4E91\u5C42
  if (dir.y > 0.0) {
    vec2 uv = dir.xz / (dir.y + 0.1) * 0.55 + uCloudOffset;
    float n = fbm(uv * 0.9);
    float n2 = fbm(uv * 2.3 + 4.0);
    float d = n * 0.75 + n2 * 0.35;
    float cover = smoothstep(1.0 - uCloudCover, 1.0 - uCloudCover + 0.32, d);
    float lightN = fbm(uv * 0.9 - uSunDir.xz * 0.12);
    float lit = clamp(0.55 + (n - lightN) * 3.0, 0.0, 1.0);
    float sunSide = pow(max(dot(dir, uSunDir), 0.0), 3.0);
    vec3 cc = mix(uCloudShade, uCloudTint, lit) + uSunColor * sunSide * 0.5 * (1.0 - uNight);
    float horizonFade = smoothstep(0.0, 0.14, dir.y);
    col = mix(col, cc, cover * horizonFade * 0.92);
  }

  gl_FragColor = vec4(col, 1.0);
}
`;function ux(){let i={..._n,uDetail:{value:1}},e=new Rt({uniforms:i,vertexShader:lT,fragmentShader:cT,side:dn,depthWrite:!1}),t=new fn(400,48,24),n=new nt(t,e);n.frustumCulled=!1,n.renderOrder=-10;let r=new nt(new fn(50,32,16),e);return{mesh:n,envMesh:r,material:e}}var xr=i=>new xe(i),nd=[{e:-24,zen:"#02030a",hor:"#070a18",gnd:"#030409",sun:"#000000",li:0,hs:"#1f2c58",hg:"#07070c",hi:.42,fog:"#080c1a",exp:1.5,ct:"#161b2c",cs:"#070912",bloom:.95},{e:-9,zen:"#081028",hor:"#23264a",gnd:"#0b0c16",sun:"#ff5a3a",li:0,hs:"#2a3564",hg:"#0c0c14",hi:.45,fog:"#161a33",exp:1.4,ct:"#2d2a48",cs:"#0f1024",bloom:.85},{e:-2,zen:"#1c2a5e",hor:"#d0694a",gnd:"#2b1d20",sun:"#ff5b2a",li:.25,hs:"#50507a",hg:"#2b1c1c",hi:.45,fog:"#6a4a5a",exp:1.18,ct:"#f07a5a",cs:"#3a2a4a",bloom:.7},{e:3,zen:"#2f4f9a",hor:"#ff9658",gnd:"#5a3a2c",sun:"#ff8a3c",li:1.3,hs:"#8a86b0",hg:"#4a3326",hi:.55,fog:"#d58a6a",exp:1,ct:"#ffb487",cs:"#6a5070",bloom:.55},{e:10,zen:"#3a6fc0",hor:"#ffc896",gnd:"#6e5a48",sun:"#ffc27e",li:2.3,hs:"#a9c2e6",hg:"#6b5a40",hi:.65,fog:"#e8c2a2",exp:.95,ct:"#fff0dc",cs:"#9aa2b8",bloom:.42},{e:28,zen:"#2f76d2",hor:"#b9dbf4",gnd:"#7a7058",sun:"#fff0d6",li:3,hs:"#b8d8ff",hg:"#6f6448",hi:.8,fog:"#bcd6ea",exp:.9,ct:"#ffffff",cs:"#b4c2d6",bloom:.32},{e:75,zen:"#256bd4",hor:"#c6e3fb",gnd:"#7c7460",sun:"#ffffff",li:3.3,hs:"#c0dcff",hg:"#6f6448",hi:.85,fog:"#c4dcf0",exp:.88,ct:"#ffffff",cs:"#bcc8da",bloom:.3}].map(i=>({...i,zen:xr(i.zen),hor:xr(i.hor),gnd:xr(i.gnd),sun:xr(i.sun),hs:xr(i.hs),hg:xr(i.hg),fog:xr(i.fog),ct:xr(i.ct),cs:xr(i.cs)})),uT=["zen","hor","gnd","sun","hs","hg","fog","ct","cs"],hT=["li","hi","exp","bloom"];function hx(i,e){let t=0;for(;t<nd.length-2&&i>nd[t+1].e;)t++;let n=nd[t],r=nd[t+1],s=vn((i-n.e)/(r.e-n.e),0,1);for(let o of uT)e[o]||(e[o]=new xe),e[o].copy(n[o]).lerp(r[o],s);for(let o of hT)e[o]=xn(n[o],r[o],s);return e}function fx(i,e){let t=(i-6)/12,n=(i-18+24)%24/12,r=i>=6&&i<=18?Math.sin(t*Math.PI)*(66*Math.PI/180):-Math.sin(n*Math.PI)*.9,s=(120-t*180)*Math.PI/180;return e.set(Math.cos(r)*Math.cos(s),Math.sin(r),Math.cos(r)*Math.sin(s)),e}function dx(i,e){let t=(i-18+24)%24/12,n=Math.sin(vn(t,0,1)*Math.PI)*.95-.12,r=(-110+t*150)*Math.PI/180;return e.set(Math.cos(n)*Math.cos(r),Math.sin(n),Math.cos(n)*Math.sin(r)).normalize(),e}var px=i=>zt(-1.5,-11,i);var Ea=-1.6,zm=-14.6,cu=[[.18,1,.2,21,1],[-.45,1,.17,12.5,1],[.75,.62,.13,7,1],[-.9,.45,.1,4.2,1],[.3,1,.07,2.6,1]],fT=`
uniform float uTime;
uniform float uOffset;
uniform float uAmp;
uniform float uPhase[${cu.length}];
varying vec3 vWorld;
varying vec3 vNormal;
varying float vHeight;
varying vec2 vWP;

const float SHORE = ${zm.toFixed(2)};
// \u76F8\u4F4D = k\xB7(d.x\xB7\u884C\u9A76\u8DDD\u79BB) - k\xB7c\xB7t \u5728 JS \u4E2D\u4EE5\u53CC\u7CBE\u5EA6\u53D6\u6A21\u540E\u4F20\u5165\uFF0C\u907F\u514D\u957F\u8DDD\u79BB\u540E\u6D6E\u70B9\u8DF3\u53D8
vec3 gerstner(vec2 p, vec2 dir, float steep, float wl, float phase, float amp, inout vec3 tangent, inout vec3 binormal) {
  float k = 6.28318 / wl;
  vec2 d = normalize(dir);
  float f = k * dot(d, p) + phase;
  float st = steep * amp;
  float a = st / k;
  float sf = sin(f);
  float cf = cos(f);
  tangent += vec3(-d.x * d.x * st * sf, d.x * st * cf, -d.x * d.y * st * sf);
  binormal += vec3(-d.x * d.y * st * sf, d.y * st * cf, -d.y * d.y * st * sf);
  return vec3(d.x * a * cf, a * sf, d.y * a * cf);
}

void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec2 p = vec2(wp.x, wp.z);
  float off = smoothstep(SHORE + 1.0, SHORE - 30.0, wp.z);
  float amp = uAmp * mix(0.35, 1.0, off);
  vec3 tangent = vec3(1.0, 0.0, 0.0);
  vec3 binormal = vec3(0.0, 0.0, 1.0);
  vec3 disp = vec3(0.0);
  ${cu.map((i,e)=>`disp += gerstner(p, vec2(${i[0].toFixed(3)}, ${i[1].toFixed(3)}), ${i[2].toFixed(3)}, ${i[3].toFixed(3)}, uPhase[${e}], amp, tangent, binormal);`).join(`
  `)}
  wp.xyz += disp;
  vNormal = normalize(cross(binormal, tangent));
  vWorld = wp.xyz;
  vHeight = disp.y / max(uAmp, 0.05);
  vWP = vec2(wp.x + uOffset, wp.z);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,dT=`
${Om}
${cx}
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform float uFogDensity;
uniform float uDayLight;
uniform float uOffset;
uniform vec3 uLampColor;
varying vec3 vWorld;
varying vec3 vNormal;
varying float vHeight;
varying vec2 vWP;
const float SHORE = ${zm.toFixed(2)};

void main() {
  vec3 N = normalize(vNormal);
  float dist = length(vWorld - cameraPosition);
  // \u7EC6\u8282\u6CD5\u7EBF\uFF1A\u4E24\u5C42\u6EDA\u52A8\u566A\u58F0\u7684\u6709\u9650\u5DEE\u5206
  vec2 q = vWP * 0.55;
  float e = 0.35;
  vec2 f1 = vec2(0.35, 0.6) * uTime;
  vec2 f2 = vec2(-0.5, 0.25) * uTime;
  float h0 = vnoise(q + f1) + 0.5 * vnoise(q * 2.7 + f2);
  float hx = vnoise(q + vec2(e, 0.0) + f1) + 0.5 * vnoise((q + vec2(e, 0.0)) * 2.7 + f2);
  float hz = vnoise(q + vec2(0.0, e) + f1) + 0.5 * vnoise((q + vec2(0.0, e)) * 2.7 + f2);
  float detail = 0.55 * (1.0 - smoothstep(20.0, 160.0, dist));
  N = normalize(N + vec3(h0 - hx, 0.0, h0 - hz) * detail);

  vec3 V = normalize(cameraPosition - vWorld);
  float ndv = max(dot(N, V), 0.0);
  float fres = 0.02 + 0.98 * pow(clamp(1.0 - ndv, 0.0, 1.0), 5.0);
  vec3 R = reflect(-V, N);
  R.y = abs(R.y) + 0.02;
  R = normalize(R);
  vec3 refl = skyBase(R);

  float depthF = smoothstep(SHORE - 2.0, SHORE - 45.0, vWorld.z);
  vec3 water = mix(uShallow, uDeep, depthF) * (0.12 + 0.88 * uDayLight);
  // \u6D6A\u5C16\u900F\u5149
  float sss = pow(max(dot(V, -uSunDir), 0.0), 3.0) * clamp(vHeight + 0.3, 0.0, 1.5);
  water += uShallow * uSunColor * sss * 0.35 * (1.0 - uNight);

  vec3 col = mix(water, refl, fres);
  float rs = max(dot(R, uSunDir), 0.0);
  col += uSunColor * (pow(rs, 420.0) * 30.0 + pow(rs, 60.0) * 0.7) * (1.0 - uNight) * step(-0.05, uSunDir.y);
  float rm = max(dot(R, uMoonDir), 0.0);
  col += vec3(0.75, 0.82, 1.0) * (pow(rm, 250.0) * 2.2 + pow(rm, 30.0) * 0.06) * uNight;

  // \u6D6A\u5C16\u767D\u6CAB + \u5CB8\u8FB9\u788E\u6D6A
  float fn = vnoise(vWP * 1.3 + uTime * 0.4) * 0.6 + vnoise(vWP * 4.0 - uTime * 0.3) * 0.4;
  float crest = smoothstep(0.62, 1.05, vHeight + fn * 0.35) * smoothstep(-8.0, -40.0, vWorld.z);
  float shoreLine = SHORE + 0.9 * sin(vWP.x * 0.045) + 0.5 * sin(vWP.x * 0.13 + 1.7);
  float surge = sin(uTime * 0.7 + vWP.x * 0.021) * 1.3;
  float sd = vWorld.z - (shoreLine + surge * 0.5);
  float shoreFoam = smoothstep(-5.5, 0.5, sd) * (0.55 + 0.45 * fn);
  shoreFoam *= smoothstep(0.35, 0.55, fn + smoothstep(-2.5, 0.8, sd) * 0.5);
  float foam = clamp(max(crest * 0.75, shoreFoam), 0.0, 1.0);
  vec3 foamCol = mix(vec3(0.06, 0.08, 0.12), vec3(0.95, 0.97, 1.0), uDayLight) * (0.6 + 0.4 * uSunGlow);
  col = mix(col, foamCol, foam * 0.85);

  // \u8DEF\u706F\u5012\u5F71\uFF08\u591C\u95F4\u6696\u8272\u5149\u5E26\uFF09
  float lampRow = pow(max(0.0, 1.0 - abs(fract((vWP.x - 12.0) / 36.0 + 0.5) - 0.5) * 7.0), 2.0);
  col += uLampColor * lampRow * smoothstep(-40.0, -14.0, vWorld.z) * uNight * 0.25 * (0.5 + 0.5 * fn);

  // \u5927\u6C14\u96FE -> \u4E0E\u5929\u7A7A\u5730\u5E73\u7EBF\u989C\u8272\u878D\u5408
  float fogF = 1.0 - exp(-pow(dist * uFogDensity, 1.35));
  vec3 fd = vWorld - cameraPosition;
  vec3 fogCol = skyBase(normalize(vec3(fd.x, max(fd.y * 0.02, 0.0) + 0.004, fd.z)));
  col = mix(col, fogCol, clamp(fogF, 0.0, 1.0));
  gl_FragColor = vec4(col, 1.0);
}
`;function mx(){let i={..._n,uOffset:{value:0},uAmp:{value:1},uPhase:{value:new Float32Array(cu.length)},uDeep:{value:new xe("#0b3a5a")},uShallow:{value:new xe("#1fa3a8")},uFogDensity:{value:.0042},uDayLight:{value:1},uLampColor:{value:new xe("#ffb46a")}},e=new Rt({uniforms:i,vertexShader:fT,fragmentShader:dT}),t=[];for(let c=-260;c<=420;c+=c>-60&&c<120?1.2:4)t.push(c);let n=[];for(let c=-8;c>=-520;c-=c>-70?.9:c>-160?2.5:8)n.push(c);let r=[],s=[];for(let c=0;c<n.length;c++)for(let u=0;u<t.length;u++)r.push(t[u],0,n[c]);let o=t.length;for(let c=0;c<n.length-1;c++)for(let u=0;u<o-1;u++){let f=c*o+u,h=f+o;s.push(f,f+1,h,h,f+1,h+1)}let a=new Ke;a.setAttribute("position",new Ue(r,3)),a.setIndex(s);let l=new nt(a,e);return l.position.y=Ea,l.frustumCulled=!1,l.name="ocean",{mesh:l,uniforms:i,columns:t.length,rows:n.length}}function gx(i,e,t){return cu.forEach((n,r)=>{let s=2*Math.PI/n[3],o=Math.sqrt(9.8/s)*n[4],a=n[0]/Math.hypot(n[0],n[1]),l=(s*a*i-s*o*e)%(2*Math.PI);t[r]=l}),t}function id(i,e,t,n=1){let r=Math.min(1,Math.max(0,(zm+1-e)/31)),s=n*(.35+.65*r*r*(3-2*r)),o=0;for(let a of cu){let l=2*Math.PI/a[3],c=Math.sqrt(9.8/l)*a[4],u=Math.hypot(a[0],a[1]),f=a[0]/u,h=a[1]/u,d=l*(f*i+h*e-c*t);o+=a[2]*s/l*Math.sin(d)}return Ea+o}var{lerp:Vs}=Hf,Cn=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(let i=0;i<256;i++)Cn[256+i]=Cn[i];function km(i){return i*i*i*(i*(i*6-15)+10)}function Yr(i,e,t,n){let r=i&15,s=r<8?e:t,o=r<4?t:r==12||r==14?e:n;return((r&1)==0?s:-s)+((r&2)==0?o:-o)}var rd=class{noise(e,t,n){let r=Math.floor(e),s=Math.floor(t),o=Math.floor(n),a=r&255,l=s&255,c=o&255;e-=r,t-=s,n-=o;let u=e-1,f=t-1,h=n-1,d=km(e),p=km(t),v=km(n),g=Cn[a]+l,m=Cn[g]+c,_=Cn[g+1]+c,y=Cn[a+1]+l,x=Cn[y]+c,S=Cn[y+1]+c;return Vs(Vs(Vs(Yr(Cn[m],e,t,n),Yr(Cn[x],u,t,n),d),Vs(Yr(Cn[_],e,f,n),Yr(Cn[S],u,f,n),d),p),Vs(Vs(Yr(Cn[m+1],e,t,h),Yr(Cn[x+1],u,t,h),d),Vs(Yr(Cn[_+1],e,f,h),Yr(Cn[S+1],u,f,h),d),p),v)}};function Ii(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new Ke,c=0;for(let u=0;u<i.length;++u){let f=i[u],h=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0,f=[];for(let h=0;h<i.length;++h){let d=i[h].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+u);u+=i[h].attributes.position.count}l.setIndex(f)}for(let u in s){let f=vx(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){let d=[];for(let v=0;v<o[u].length;++v)d.push(o[u][v][h]);let p=vx(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function vx(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new it(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let f=l/t;for(let h=0,d=u.count;h<d;h++)for(let p=0;p<t;p++){let v=u.getComponent(h,p);a.setComponent(h+f,p,v)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function Aa(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function Ca(i,{srgb:e=!0,repeat:t=!0,aniso:n=8}={}){let r=new Oo(i);return e&&(r.colorSpace=Qt),t&&(r.wrapS=r.wrapT=Dr),r.anisotropy=n,r.needsUpdate=!0,r}function pT(i,e,t){let n=Gs(t),r=new Float32Array(i*i),s=1,o=0;for(let a=0;a<e;a++){let l=4<<a,c=new Float32Array(l*l);for(let u=0;u<c.length;u++)c[u]=n();for(let u=0;u<i;u++){let f=u/i*l,h=Math.floor(f),d=f-h,p=d*d*(3-2*d);for(let v=0;v<i;v++){let g=v/i*l,m=Math.floor(g),_=g-m,y=_*_*(3-2*_),x=c[h%l*l+m%l],S=c[h%l*l+(m+1)%l],b=c[(h+1)%l*l+m%l],C=c[(h+1)%l*l+(m+1)%l];r[u*i+v]+=s*((x*(1-y)+S*y)*(1-p)+(b*(1-y)+C*y)*p)}}o+=s,s*=.5}for(let a=0;a<r.length;a++)r[a]/=o;return r}function _x(i=256,e=.78,t=1,n=7){let[r,s]=Aa(i,i),o=pT(i,6,n),a=s.createImageData(i,i);for(let l=0;l<o.length;l++){let c=Math.round((e+(t-e)*o[l])*255);a.data[l*4]=c,a.data[l*4+1]=c,a.data[l*4+2]=c,a.data[l*4+3]=255}return s.putImageData(a,0,0),Ca(r,{srgb:!1})}function yx(){let[t,n]=Aa(2048,512),[r,s]=Aa(2048,512),o=Gs(42);n.fillStyle="#44464b",n.fillRect(0,0,2048,512),s.fillStyle="#808080",s.fillRect(0,0,2048,512);for(let p=0;p<9e4;p++){let v=o()*2048,g=o()*512,m=o()*2.2+.6,_=Math.floor(40+o()*70);n.fillStyle=`rgb(${_},${_+1},${_+4})`,n.fillRect(v,g,m,m);let y=Math.floor(90+o()*120);s.fillStyle=`rgb(${y},${y},${y})`,s.fillRect(v,g,m,m)}for(let p=0;p<6;p++){n.fillStyle=`rgba(20,20,24,${.12+o()*.12})`;let v=o()*2048,g=o()*512;n.fillRect(v,g,60+o()*160,30+o()*90)}let a=n.createLinearGradient(0,0,0,512);a.addColorStop(0,"rgba(0,0,0,0)"),a.addColorStop(.3,"rgba(0,0,0,0.10)"),a.addColorStop(.36,"rgba(0,0,0,0)"),a.addColorStop(.64,"rgba(0,0,0,0)"),a.addColorStop(.7,"rgba(0,0,0,0.10)"),a.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=a,n.fillRect(0,0,2048,512);let l=2048/24,c=512/5.4,u=(p,v,g,m,_="#ecebe2")=>{n.fillStyle=_,n.fillRect(p*l,v*c,g*l,m*c),s.fillStyle="#c8c8c8",s.fillRect(p*l,v*c,g*l,m*c)};u(0,.18,24,.12),u(0,5.1,24,.12);for(let p=0;p<24;p+=6)u(p,2.64,3,.12,"#f2c94c");n.save(),n.translate(12*l,4*c),n.rotate(Math.PI/2),n.scale(c,l),n.strokeStyle="rgba(236,235,226,0.92)",n.fillStyle="rgba(236,235,226,0.92)",n.lineWidth=.09,n.lineCap="round",n.lineJoin="round";let f=.42;n.beginPath(),n.arc(-.62,.35,f,0,Math.PI*2),n.stroke(),n.beginPath(),n.arc(.62,.35,f,0,Math.PI*2),n.stroke(),n.beginPath(),n.moveTo(-.62,.35),n.lineTo(-.1,.35),n.lineTo(.35,-.2),n.lineTo(-.3,-.2),n.closePath(),n.moveTo(-.1,.35),n.lineTo(-.36,-.42),n.moveTo(.62,.35),n.lineTo(.42,-.5),n.lineTo(.6,-.55),n.moveTo(-.5,-.45),n.lineTo(-.2,-.45),n.stroke(),n.beginPath(),n.moveTo(0,-2.9),n.lineTo(.45,-2.3),n.lineTo(.16,-2.3),n.lineTo(.16,-1.6),n.lineTo(-.16,-1.6),n.lineTo(-.16,-2.3),n.lineTo(-.45,-2.3),n.closePath(),n.fill(),n.restore();let h=Ca(t,{aniso:16}),d=Ca(r,{srgb:!1,aniso:16});return{map:h,bump:d}}function Mx(){let[e,t]=Aa(128,128),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.8)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),Ca(e,{repeat:!1})}function mT(i,e,t,n){i.save(),i.translate(e,t),i.scale(n,n),i.fillStyle="#161616",i.strokeStyle="#161616",i.lineWidth=.09,i.lineCap="round",i.lineJoin="round",i.beginPath(),i.arc(-.6,.52,.35,0,Math.PI*2),i.stroke(),i.beginPath(),i.arc(.63,.52,.35,0,Math.PI*2),i.stroke(),i.beginPath(),i.moveTo(-.6,.52),i.lineTo(.02,.52),i.lineTo(-.2,0),i.moveTo(-.2,0),i.lineTo(.46,.02),i.moveTo(.46,.02),i.lineTo(.02,.52),i.moveTo(.46,.02),i.lineTo(.63,.52),i.moveTo(-.6,.52),i.lineTo(-.2,0),i.stroke(),i.beginPath(),i.moveTo(.46,.02),i.lineTo(.58,-.12),i.moveTo(-.34,-.08),i.lineTo(-.1,-.08),i.stroke(),i.beginPath(),i.moveTo(-.2,-.12),i.lineTo(.22,-.64),i.moveTo(.22,-.64),i.lineTo(.4,-.38),i.lineTo(.55,-.12),i.moveTo(-.2,-.12),i.lineTo(.2,.22),i.lineTo(.18,.68),i.moveTo(-.2,-.12),i.lineTo(-.3,.24),i.lineTo(-.14,.36),i.stroke(),i.beginPath(),i.arc(.32,-.79,.13,0,Math.PI*2),i.fill(),i.restore()}function Sx(i){let[t,n]=Aa(512,512);return n.clearRect(0,0,512,512),i==="crossing"?(n.save(),n.translate(512/2,512/2),n.rotate(Math.PI/4),n.fillStyle="#161616",n.fillRect(-172,-172,344,344),n.fillStyle="#f7c531",n.fillRect(-160,-160,320,320),n.restore(),mT(n,512/2,512/2-6,112)):i==="speed"?(n.fillStyle="#ffffff",n.beginPath(),n.arc(512/2,512/2,230,0,Math.PI*2),n.fill(),n.lineWidth=42,n.strokeStyle="#d7263d",n.beginPath(),n.arc(512/2,512/2,200,0,Math.PI*2),n.stroke(),n.fillStyle="#111",n.font='900 190px "Arial Black", Arial, sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText("45",512/2,512/2-18),n.font='700 46px "PingFang SC", "Microsoft YaHei", sans-serif',n.fillText("\u9A91\u884C\u9650\u901F",512/2,512/2+110)):(n.fillStyle="#0f5fa8",xx(n,20,110,472,292,34),n.fill(),n.lineWidth=12,n.strokeStyle="#ffffff",xx(n,36,126,440,260,24),n.stroke(),n.fillStyle="#fff",n.font='800 76px "PingFang SC", "Microsoft YaHei", sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText("\u524D\u65B9\u6D77\u5CB8",512/2,512/2-40),n.font='700 44px "Arial", sans-serif',n.fillText("COAST AHEAD  \u279C",512/2,512/2+56)),Ca(t,{repeat:!1})}function xx(i,e,t,n,r,s){i.beginPath(),i.moveTo(e+s,t),i.arcTo(e+n,t,e+n,t+r,s),i.arcTo(e+n,t+r,e,t+r,s),i.arcTo(e,t+r,e,t,s),i.arcTo(e,t,e+n,t,s),i.closePath()}function bx(i,e=8,t=!1){let[n,r]=Aa(256,256);for(let s=0;s<e;s++)r.fillStyle=i[s%i.length],t?r.fillRect(s*256/e,0,256/e+1,256):r.fillRect(0,s*256/e,256,256/e+1);return Ca(n)}var Zt=72,uu=7,wx=new rd;function hu(i,e,t,n=0){let r=0,s=.5,o=1;for(let a=0;a<t;a++)r+=s*wx.noise(i*o,e*o,n+a*7.31),s*=.5,o*=2.03;return r}function Yi(i,e){if(e>=0){let s=zt(3.8,28,e),o=2.5+17*zt(16,115,e),a=hu(i*.013,e*.013,4,1.3),l=hu(i*.085,e*.085,2,5.1);return-.06+s*Math.max(0,o*(.62+1.1*a)+l*1.3)}let t=-e,n=zt(3.2,30,t),r=hu(i*.07,e*.07,2,9.7)*.5*zt(3.6,6.5,t)*(1-zt(9,13.5,t));return-.08-n*3.9+r}function gT(i,e,t){let r=Yi(i-.6,e)-Yi(i+.6,e),s=Yi(i,e-.6)-Yi(i,e+.6);return t.set(r,2*.6,s).normalize()}var ai=i=>new xe(i),_r={grassA:ai("#5d8a34"),grassB:ai("#93b453"),grassDry:ai("#b8b064"),rock:ai("#8c867c"),dirt:ai("#9a8866"),sand:ai("#ead7a6"),sandWet:ai("#b89f74"),sandDeep:ai("#7d6c52"),gravel:ai("#8f877a")};function vT(i,e,t,n,r){if(e>=0){let s=hu(i*.05,e*.05,3,3.3)+.5;r.copy(_r.grassA).lerp(_r.grassB,vn(s,0,1)),r.lerp(_r.grassDry,zt(9,22,t)*.55),r.lerp(_r.dirt,1-zt(3.6,6.5,e)),r.lerp(_r.rock,zt(.86,.7,n.y))}else{let s=-e;r.copy(_r.gravel).lerp(_r.sand,zt(3.2,4.2,s)),r.lerp(_r.sandWet,zt(-1.1,-1.55,t)),r.lerp(_r.sandDeep,zt(-1.7,-2.6,t));let o=hu(i*.3,e*.3,2,2.2)*.12;r.offsetHSL(0,0,o)}return r}function xT(){let i=[];for(let e=-34;e<-16;e+=2)i.push(e);for(let e=-16;e<-3.4;e+=.7)i.push(e);i.push(-3.3,-2.9,2.9,3.4,3.8);for(let e=4.6;e<22;e+=1.2)i.push(e);for(let e=22;e<60;e+=2.4)i.push(e);for(let e=60;e<=136;e+=4)i.push(e);return i}function _T(){let i=[];for(let o=0;o<=Zt;o+=2)i.push(o);let e=xT(),t=i.length*e.length,n=new Ke;n.setAttribute("position",new it(new Float32Array(t*3),3)),n.setAttribute("normal",new it(new Float32Array(t*3),3)),n.setAttribute("color",new it(new Float32Array(t*3),3)),n.setAttribute("uv",new it(new Float32Array(t*2),2));let r=[],s=i.length;for(let o=0;o<e.length-1;o++)for(let a=0;a<s-1;a++){let l=o*s+a,c=l+s;r.push(l,c,l+1,c,c+1,l+1)}return n.setIndex(r),n.userData={xs:i,zs:e},Gm(n,i.length,e.length),n}function Gm(i,e,t){let n=Array.from(i.index.array),r={high:{start:0,count:n.length}},s=n[1]===n[0]+1;for(let[o,a]of[["medium",2],["low",3]]){let l=n.length;for(let c=0;c<t-1;c+=a)for(let u=0;u<e-1;u+=a){let f=c*e+u,h=Math.min(t-1,c+a)*e+u,d=Math.min(e-1,u+a)-u;s?n.push(f,f+d,h,h,f+d,h+d):n.push(f,h,f+d,h,h+d,f+d)}r[o]={start:l,count:n.length-l}}i.setIndex(n),i.userData.lodRanges=r,i.setDrawRange(0,r.high.count)}var Hs=new R,sd=new xe;function yT(i,e){let{xs:t,zs:n}=i.userData,r=t.length,s=n.length,o=r+2,a=i.userData.hbuf||(i.userData.hbuf=new Float32Array(o*s)),l=t[1]-t[0];for(let p=0;p<s;p++)for(let v=-1;v<=r;v++)a[p*o+v+1]=Yi(e+v*l,n[p]);let c=i.attributes.position.array,u=i.attributes.normal.array,f=i.attributes.color.array,h=i.attributes.uv.array,d=0;for(let p=0;p<s;p++){let v=Math.max(0,p-1),g=Math.min(s-1,p+1),m=n[g]-n[v];for(let _=0;_<r;_++){let y=t[_],x=n[p],S=e+y,b=a[p*o+_+1],C=(a[p*o+_+2]-a[p*o+_])/(2*l),M=(a[g*o+_+1]-a[v*o+_+1])/m;Hs.set(-C,1,-M).normalize(),vT(S,x,b,Hs,sd),c[d*3]=y,c[d*3+1]=b,c[d*3+2]=x,u[d*3]=Hs.x,u[d*3+1]=Hs.y,u[d*3+2]=Hs.z,f[d*3]=sd.r,f[d*3+1]=sd.g,f[d*3+2]=sd.b,h[d*2]=S/9,h[d*2+1]=x/9,d++}}i.attributes.position.needsUpdate=!0,i.attributes.normal.needsUpdate=!0,i.attributes.color.needsUpdate=!0,i.attributes.uv.needsUpdate=!0,i.computeBoundingSphere()}function fu(i,e,t){let n=Gs(t),r=i.attributes.position,s=new Map;for(let o=0;o<r.count;o++){let a=`${r.getX(o).toFixed(3)},${r.getY(o).toFixed(3)},${r.getZ(o).toFixed(3)}`,l=s.get(a);l||(l=[(n()-.5)*e,(n()-.5)*e,(n()-.5)*e],s.set(a,l)),r.setXYZ(o,r.getX(o)+l[0],r.getY(o)+l[1],r.getZ(o)+l[2])}return i.computeVertexNormals(),i}function MT(){let e=[Lt(wt(new hn(.12,.2,1.8,7).translate(0,.9,0)),"#6e4a2e")];return[[0,2.35,0,1.25],[.62,2,.3,.85],[-.5,2.1,-.35,.9],[.1,2.95,.1,.8]].forEach(([n,r,s,o],a)=>{let l=fu(new bs(o,1),o*.22,11+a);l.translate(n,r,s),e.push(Lt(wt(l),a%2?"#4f7f2c":"#5f9134"))}),Ii(e)}function ST(){let i=[Lt(wt(new hn(.1,.16,1.2,6).translate(0,.6,0)),"#5a3b24")];return[[1,1.35,1.7],[1.75,1.05,1.5],[2.45,.75,1.3],[3.05,.45,1]].forEach(([t,n,r],s)=>{let o=fu(new $n(n,r,8,1),.08,30+s);o.translate(0,t+r/2,0),i.push(Lt(wt(o),s%2?"#2f5d34":"#386b3a"))}),Ii(i)}function bT(){let i=[],e=new lu(18,8,s=>xn(.2,.12,s)*(1+.12*Math.max(0,Math.sin(s*60)))),t=oi(1.1,5.6,.2);e.update([oi(0,0,0),oi(.15,1.8,0),oi(.55,3.8,.1),t]);let n=e.geometry.clone();i.push(Lt(wt(n),"#8a6a45"));let r=9;for(let s=0;s<r;s++){let o=s/r*qi+s%2*.2,a=2.3+s%3*.35,l=s%2?.55:.25,c=Bm({segs:14,ring:4,center:u=>oi(u*a,Math.sin(u*Math.PI*.75)*l-u*u*1.35,0),section:(u,f)=>{let h=Math.sin(Math.PI*Math.pow(u,.7))*.38+.02,d=f*2-1;return[-Math.abs(d)*h*.35+.01,d*h]}});c.rotateY(o),c.translate(t.x,t.y,t.z),i.push(Lt(wt(c),s%2?"#3f7d2e":"#4f9136"))}for(let s=0;s<4;s++){let o=new fn(.14,8,6),a=s/4*qi;o.translate(t.x+Math.cos(a)*.18,t.y-.18,t.z+Math.sin(a)*.18),i.push(Lt(wt(o),"#5b3d1f"))}return Ii(i)}function wT(){let i=fu(new _s(.8,1),.35,77);return i.scale(1.2,.7,1),Lt(wt(i),"#9a938a")}function TT(){let i=[];i.push(Lt(wt(new hn(.03,.03,2.2,6).translate(0,1.1,0)),"#dddddd"));let e=new $n(1.25,.45,12,1,!0).toNonIndexed();e.translate(0,2.2,0);let t=e.attributes.position,n=new Float32Array(t.count*3),r=ai("#ffffff"),s=ai("#e0413b");for(let a=0;a<t.count;a+=3){let l=(t.getX(a)+t.getX(a+1)+t.getX(a+2))/3,c=(t.getZ(a)+t.getZ(a+1)+t.getZ(a+2))/3,f=Math.floor((Math.atan2(c,l)+Math.PI)/qi*12)%2?r:s;for(let h=0;h<3;h++)n.set([f.r,f.g,f.b],(a+h)*3)}e.setAttribute("color",new it(n,3)),e.computeVertexNormals(),i.push(wt(e));let o=new En(1.8,.02,.9).translate(.4,.02,1);return i.push(Lt(wt(o),"#f5f0e0")),Ii(i)}function ET(){let i=[];for(let e=0;e<Zt;e+=2.4)i.push(Lt(wt(new En(.08,.8,.08).translate(e+1.2,.4,-3.05)),"#f0f0ec"));return i.push(Lt(wt(new En(Zt,.07,.04).translate(Zt/2,.74,-3)),"#d9dcdf")),i.push(Lt(wt(new En(Zt,.05,.04).translate(Zt/2,.42,-3)),"#d9dcdf")),i.push(Lt(wt(new En(Zt,.1,.25).translate(Zt/2,.02,-2.82)),"#bdb8ae")),i.push(Lt(wt(new En(Zt,.16,1).translate(Zt/2,.06,3.3)),"#c9c3b8")),i.push(Lt(wt(new En(Zt,.18,.12).translate(Zt/2,.07,2.82)),"#e6e1d6")),Ii(i)}var Vm=[12,48];function AT(){let i=[];for(let e of Vm){i.push(wt(new hn(.06,.1,5.2,10).translate(e,2.66,3.45)));let t=new lu(12,6,()=>.045);t.update([oi(e,5.1,3.45),oi(e,5.55,3.2),oi(e,5.6,2.55),oi(e,5.45,2)]),i.push(wt(t.geometry.clone())),i.push(wt(new hn(.12,.26,.2,12).translate(e,5.36,1.95))),i.push(wt(new hn(.16,.16,.06,10).translate(e,.17,3.45)))}return Lt(Ii(i),"#3a4046")}function CT(){let i=[];for(let e of Vm){let t=new fn(.17,16,8,0,qi,Math.PI/2,Math.PI/2);t.scale(1,.5,1).translate(e,5.27,1.95),i.push(wt(t))}return Ii(i)}function RT(){let i=[];for(let e of Vm){let t=new xs(3.4,32);t.rotateX(-Math.PI/2),t.scale(1.25,1,1),t.translate(e,.03,1.3),i.push(t)}return Ii(i)}function PT(){return Lt(wt(new hn(.04,.04,2.3,8).translate(0,1.15,0)),"#9aa0a6")}function Tx(i,e){let t=new Un;i.add(t);let n={value:0},r=_x(256,.8,1,3);r.repeat.set(1,1);let s=new Pt({vertexColors:!0,map:r,roughness:.95,metalness:0}),o=yx();o.map.repeat.set(Zt/24,1),o.bump.repeat.set(Zt/24,1);let a=new Pt({map:o.map,bumpMap:o.bump,bumpScale:1.2,roughness:.82,metalness:.02}),l=new Oi(Zt,5.64);l.rotateX(-Math.PI/2),l.translate(Zt/2,.005,0);let c=new Pt({vertexColors:!0,roughness:.7,metalness:.1}),u=new Pt({vertexColors:!0,roughness:.45,metalness:.6}),f=new Pt({color:"#fff4dc",emissive:new xe("#ffc27a"),emissiveIntensity:0}),h=Mx(),d=new zn({map:h,color:new xe("#ffb467"),transparent:!0,opacity:0,blending:fr,depthWrite:!1}),p=(k,ie,se)=>{k.onBeforeCompile=V=>{V.uniforms.uTime=n,V.vertexShader=V.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
            vec3 ip = instanceMatrix[3].xyz;
            float sw = pow(max(position.y - ${se.toFixed(1)}, 0.0), 1.4);
            transformed.x += sin(uTime * 1.3 + ip.x * 0.31 + ip.z * 0.17) * sw * ${ie.toFixed(3)};
            transformed.z += cos(uTime * 1.1 + ip.x * 0.23) * sw * ${(ie*.6).toFixed(3)};
          #endif`)}},v=new Pt({vertexColors:!0,roughness:.9,flatShading:!0});p(v,.018,1.4);let g=new Pt({vertexColors:!0,roughness:.8,side:pn});p(g,.03,3);let m=new Pt({vertexColors:!0,roughness:.95,flatShading:!0}),_=new Pt({vertexColors:!0,roughness:.7,side:pn}),y={round:MT(),pine:ST(),palm:bT(),rock:wT(),umb:TT(),guard:ET(),lamp:AT(),bulb:CT(),pool:RT(),signPost:PT()},x=["crossing","speed","fish"].map(k=>new Pt({map:Sx(k),transparent:!0,alphaTest:.4,roughness:.5,side:pn})),S=new Oi(1.1,1.1);S.rotateY(-Math.PI/2);let b=e.density??1,C=1,M="high",T={round:Math.round(34*b),pine:Math.round(26*b),palm:6,rock:8,umb:2},E=[];for(let k=0;k<uu;k++){let ie=new Un,se=_T(),V=new nt(se,s);V.receiveShadow=!0,V.name="terrain";let j=new nt(l,a);j.receiveShadow=!0;let ge=new nt(y.guard,c);ge.castShadow=!0,ge.receiveShadow=!0;let Se=new nt(y.lamp,u);Se.castShadow=!0;let me=new nt(y.bulb,f),be=new nt(y.pool,d);be.renderOrder=2,ie.add(V,j,ge,Se,me,be);let ae={},fe=(te,Ae,Re=!0)=>{let ce=new Ui(y[te],Ae,T[te]);ce.castShadow=Re,ce.receiveShadow=!0,ce.instanceMatrix.setUsage(Bs),ce.instanceColor=new mi(new Float32Array(T[te]*3),3),ie.add(ce),ae[te]=ce};fe("round",v),fe("pine",v),fe("palm",g),fe("rock",m),fe("umb",_);let Ie=new Un,B=new nt(y.signPost,c);B.castShadow=!0;let ve=new nt(S,x[0]);ve.position.set(-.03,2.05,0),ve.castShadow=!0,Ie.add(B,ve),Ie.position.set(30,.14,3.55),ie.add(Ie),t.add(ie),E.push({index:-99,group:ie,terrain:V,inst:ae,sign:Ie,plate:ve})}let I=new je,D=new Xt,U=new R,N=new R,L=new On,F=new xe;function G(k,ie){k.index=ie;let se=ie*Zt;yT(k.terrain.geometry,se);let V=Gs(ie*9973+17),j=(ae,fe,Ie,B,ve,te,Ae)=>{let Re=k.inst[ae],ce=0;for(let Ye=0;Ye<fe*4&&ce<fe;Ye++){let We=V()*Zt,_t=xn(Ie,B,Math.pow(V(),ae==="round"||ae==="pine"?1.6:1)),vt=se+We,rn=Yi(vt,_t);if(gT(vt,_t,Hs),Ae&&!Ae(We,_t,rn,Hs))continue;let sn=xn(ve,te,V());L.set(0,V()*qi,0),D.setFromEuler(L),U.set(sn,sn*xn(.85,1.2,V()),sn),N.set(We,rn-.05,_t),I.compose(N,D,U),Re.setMatrixAt(ce,I),F.setHSL(xn(-.03,.05,V()),xn(0,.25,V()),xn(.85,1.1,V())),Re.setColorAt(ce,F),ce++}Re.userData.population=ce,Re.count=Math.floor(ce*C),Re.instanceMatrix.needsUpdate=!0,Re.instanceColor&&(Re.instanceColor.needsUpdate=!0),Re.computeBoundingSphere()},ge=(ae,fe,Ie,B)=>B.y>.8;j("round",T.round,7,125,.8,1.6,(ae,fe,Ie,B)=>ge(ae,fe,Ie,B)&&wx.noise((se+ae)*.03,fe*.03,4.2)>-.15),j("pine",T.pine,16,130,.9,1.7,(ae,fe,Ie,B)=>B.y>.75&&Ie>4),j("palm",T.palm,-5.2,-11.5,.8,1.1,ae=>Math.abs(ae-30)>2),j("rock",T.rock,-30,60,.3,1.1,(ae,fe)=>Math.abs(fe)>4.5&&(fe<-12||fe>5)),j("umb",V()<.7?2:0,-7,-11,.9,1.05);let Se=k.inst.palm;for(let ae=0;ae<Se.count;ae++){Se.getMatrixAt(ae,I),I.decompose(N,D,U);let fe=(V()-.5)*.3;L.set(0,Math.PI/2+.3+fe,0),D.setFromEuler(L),I.compose(N,D,U),Se.setMatrixAt(ae,I)}Se.instanceMatrix.needsUpdate=!0;let me=k.inst.umb;for(let ae=0;ae<me.count;ae++)F.setHSL(V(),.7,.62),me.setColorAt(ae,F);me.instanceColor&&(me.instanceColor.needsUpdate=!0);let be=ie%2===1;k.sign.visible=be,be&&(k.plate.material=x[Math.abs(Math.floor(ie/2))%x.length])}let Q=new Un;{let k=fu(new $n(16,7,14,3),1.6,5);k.translate(0,1.2,0);let ie=new nt(k,new Pt({color:"#6f6a5f",roughness:1,flatShading:!0}));ie.receiveShadow=!0;let se=new nt(fu(new fn(7,12,6,0,qi,0,Math.PI/2.4),.8,8).scale(1,.35,1).translate(0,4.2,0),new Pt({color:"#6f8f3a",roughness:1,flatShading:!0})),V=bx(["#f4f1ea","#c9302c"],6),j=new nt(new hn(1.1,1.7,13,24,1),new Pt({map:V,roughness:.6}));j.position.y=11,j.castShadow=!0;let ge=new nt(new hn(1.7,1.7,.25,24),new Pt({color:"#2b2f33"}));ge.position.y=17.6;let Se=new nt(new hn(.9,.9,1.6,16),new Pt({color:"#fff6d8",emissive:new xe("#ffd27a"),emissiveIntensity:.4,roughness:.2}));Se.position.y=18.5;let me=new nt(new $n(1.25,1.4,16),new Pt({color:"#b3261e",roughness:.5}));me.position.y=20,Q.add(ie,se,j,ge,Se,me),Q.userData={lantern:Se},Q.position.set(0,Ea-.5,-118),i.add(Q)}let q=[];{let k=Bm({segs:16,ring:12,center:Se=>oi((Se-.5)*6,0,0),section:(Se,me)=>{let be=me*qi,ae=Math.pow(Math.sin(Math.PI*Math.pow(Se,.8)),.6)*1.1+.02,fe=Math.cos(be);return[fe>0?fe*.5:fe*.9,Math.sin(be)*ae]},color:(Se,me,be)=>be.set(Math.cos(me*qi)>.2?"#f4f4f0":"#1f4f7a")}),ie=new gi;ie.moveTo(0,0),ie.lineTo(0,7),ie.quadraticCurveTo(1.6,3.5,3.4,.2),ie.closePath();let se=new lr(ie,8),V=new gi;V.moveTo(0,0),V.lineTo(0,6.2),V.lineTo(-2.4,.2),V.closePath();let j=new lr(V),ge=["#ffffff","#ffd166","#ef476f","#ffffff","#8ecae6"];for(let Se=0;Se<5;Se++){let me=new Un,be=new nt(k,new Pt({vertexColors:!0,roughness:.4})),ae=new nt(new hn(.06,.08,8,6),new Pt({color:"#dcdcdc"}));ae.position.set(.3,4.2,0);let fe=new Pt({color:ge[Se],side:pn,roughness:.8}),Ie=new nt(se,fe);Ie.position.set(.3,.9,0),Ie.rotation.y=Math.PI;let B=new nt(j,new Pt({color:"#f7f7f2",side:pn}));B.position.set(.5,.9,0),B.rotation.y=Math.PI,me.add(be,ae,Ie,B);let ve=.9+Se*.12;me.scale.setScalar(ve),me.userData={ax:60+Se*170,z:-42-Se*34,period:900,phase:Se*1.3,drift:.6+Se*.25},i.add(me),q.push(me)}}function Z(k,{body:ie,wing:se,wingMat:V,bodyMat:j,shoulder:ge}){let Se=new Ui(ie,j,k),me=new Ui(se,V,k),be=new Ui(se,V,k);for(let ae of[Se,me,be])ae.frustumCulled=!1,ae.castShadow=!1,i.add(ae);return{bodies:Se,wl:me,wr:be,count:k,shoulder:ge}}let K=Ii([Lt(wt(new fn(1,12,8).scale(.24,.075,.08)),"#fbfbfb"),Lt(wt(new fn(.06,10,8).translate(.22,.03,0)),"#ffffff"),Lt(wt(new $n(.018,.08,6).rotateZ(-Math.PI/2).translate(.3,.025,0)),"#f2c230"),Lt(wt(new $n(.06,.16,6).rotateZ(Math.PI/2).translate(-.28,0,0).scale(1,.4,1)),"#e8e8e8")]),ee=(k,ie,se,V,j)=>{let ge=new gi;ge.moveTo(0,ie*.2),ge.quadraticCurveTo(k*.5,ie*.35,k,-ie*.05),ge.lineTo(k*.8,-ie*.45),ge.quadraticCurveTo(k*.4,-ie*.9,0,-ie*.8),ge.closePath();let Se=new lr(ge,6);Se.rotateX(-Math.PI/2);let me=Se.attributes.position,be=new Float32Array(me.count*3),ae=ai(se),fe=ai(V);for(let Ie=0;Ie<me.count;Ie++){let ve=me.getX(Ie)/k>j?ae:fe;be.set([ve.r,ve.g,ve.b],Ie*3)}return Se.setAttribute("color",new it(be,3)),Se.rotateY(-Math.PI/2),Se},ne=new Pt({vertexColors:!0,side:pn,roughness:.8}),ze=new Pt({vertexColors:!0,roughness:.7}),Ce=Z(9,{body:K,wing:ee(.55,.16,"#222222","#b9c0c7",.72),wingMat:ne,bodyMat:ze,shoulder:.02});Ce.params=[];for(let k=0;k<Ce.count;k++)Ce.params.push({cx:(k-4)*7,cy:7+k%3*2.5,cz:-12-k%4*7,rx:9+k,rz:4+k%3*2,w:.12+k*.013,ph:k*1.7,flap:5.5+k%3,s:.9+k%3*.15});let Ve=Ii([Lt(wt(new fn(1,14,10).scale(.5,.16,.17)),"#f6f3ec"),Lt(wt(new fn(.11,10,8).translate(.44,.06,0)),"#f6f3ec"),Lt(wt(new $n(.045,.55,8).rotateZ(-Math.PI/2).scale(1,1,.7).translate(.8,.02,0)),"#f2b24a"),Lt(wt(new fn(.05,8,6).scale(4,1,1).translate(.72,-.05,0)),"#f6c85f")]),W=Z(3,{body:Ve,wing:ee(1.3,.38,"#161616","#f4f1ea",.55),wingMat:ne,bodyMat:ze,shoulder:0}),re=new je,we=new je,ke=new je,Ee=new Xt,Be=new Xt,ot=new R,oe=new R,pe=new On;function Me(k,ie,se,V,j,ge,Se){pe.set(j,V,0,"YXZ"),Ee.setFromEuler(pe),ot.setScalar(Se),re.compose(se,Ee,ot),k.bodies.setMatrixAt(ie,re),Be.setFromAxisAngle(de,-ge),ke.compose(oe.set(.02,.03,.05),Be,_e),we.multiplyMatrices(re,ke),k.wr.setMatrixAt(ie,we),Be.setFromAxisAngle(de,Math.PI+ge),ke.compose(oe.set(.02,.03,-.05),Be,_e),we.multiplyMatrices(re,ke),k.wl.setMatrixAt(ie,we)}let de=new R(1,0,0),_e=new R(1,1,1),ue=new R,Pe=160,Te=new Ke,Ge=new Float32Array(Pe*3),O=new Float32Array(Pe),ct=Gs(5);for(let k=0;k<Pe;k++)Ge[k*3]=ct()*200-60,Ge[k*3+1]=.4+ct()*2.6,Ge[k*3+2]=4.5+ct()*22,O[k]=ct()*100;Te.setAttribute("position",new it(Ge,3)),Te.setAttribute("aSeed",new it(O,1));let et=new Rt({transparent:!0,depthWrite:!1,blending:fr,uniforms:{uTime:n,uNight:{value:0},uOffset:{value:0},uScale:{value:400}},vertexShader:`attribute float aSeed; uniform float uTime; uniform float uOffset; uniform float uScale; varying float vA;
      void main(){ vec3 p = position; p.x = mod(p.x - uOffset + 60.0, 200.0) - 60.0;
        p.x += sin(uTime*0.7 + aSeed)*0.6; p.y += sin(uTime*0.9 + aSeed*1.3)*0.35; p.z += cos(uTime*0.6 + aSeed*0.7)*0.6;
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
        vA = pow(0.5 + 0.5*sin(uTime*2.2 + aSeed*3.0), 3.0);
        gl_PointSize = 0.12 * uScale / -mv.z; }`,fragmentShader:`uniform float uNight; varying float vA;
      void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); gl_FragColor = vec4(vec3(0.75,1.0,0.35)*2.5, a*vA*uNight); }`}),P=new gs(Te,et);P.frustumCulled=!1,i.add(P);function w(k,ie,se,V){n.value=se;let j=Math.floor(k/Zt)-3;for(let ae=0;ae<uu;ae++){let fe=j+ae,Ie=(fe%uu+uu)%uu,B=E[Ie];if(B.index!==fe&&G(B,fe),B.group.position.x=fe*Zt-k,M==="low"){let ve=Math.abs(fe-Math.floor(k/Zt));B.group.visible=ve<=2,B.group.children.forEach((te,Ae)=>{te.visible=ve===0||Ae===0||ve===1&&Ae===1})}else{B.group.visible=!0;let ve=Math.abs(fe-Math.floor(k/Zt));B.group.children.forEach((te,Ae)=>{te.visible=M==="high"||ve<=1||Ae<=2})}}let ge=V.night;f.emissiveIntensity=xn(0,6,zt(.15,.6,ge)),d.opacity=zt(.2,.7,ge)*.5;let Se=1600;Q.position.x=((330-k+420)%Se+Se)%Se-420;let me=Q.userData;me.lantern.material.emissiveIntensity=xn(.4,8,zt(.2,.7,ge));for(let ae of q){let fe=ae.userData,Ie=fe.ax+se*fe.drift;ae.position.x=((Ie-k+300)%fe.period+fe.period)%fe.period-300;let B=ae.position.x+k,ve=id(B,fe.z,se,V.waveAmp),te=id(B+2.5,fe.z,se,V.waveAmp),Ae=id(B,fe.z+1.2,se,V.waveAmp);ae.position.y=ve+.15,ae.position.z=fe.z,ae.rotation.z=Math.atan2(te-ve,2.5)*.8,ae.rotation.x=-Math.atan2(Ae-ve,1.2)*.8+Math.sin(se*.8+fe.phase)*.04}for(let ae=0;ae<Ce.count;ae++){let fe=Ce.params[ae],Ie=se*fe.w+fe.ph;ue.set(fe.cx+Math.sin(Ie)*fe.rx+6,fe.cy+Math.sin(Ie*2.3)*1.2,fe.cz+Math.cos(Ie)*fe.rz);let B=Math.cos(Ie)*fe.rx,ve=-Math.sin(Ie)*fe.rz,te=Math.atan2(-ve,B),Re=Math.sin(se*.5+fe.ph)>.2?.12+Math.sin(se*1.5+ae)*.05:Math.sin(se*fe.flap+fe.ph)*.6;Me(Ce,ae,ue,te,-Math.sin(Ie)*.35,Re,fe.s)}for(let ae of[Ce.bodies,Ce.wl,Ce.wr])ae.instanceMatrix.needsUpdate=!0;let be=se*3.2%560-260;for(let ae=0;ae<3;ae++){let fe=ae===0?0:2.6,Ie=ae===1?-1:1;ue.set(be-fe,5.5+Math.sin(se*.6+ae)*.35+(ae?.4:0),-22+(ae?Ie*2.4:0));let B=Math.sin(se*2.4-ae*.6)*.38*(Math.sin(se*.25)>-.3?1:.15);Me(W,ae,ue,0,Math.sin(se*.4+ae)*.06,B,1)}for(let ae of[W.bodies,W.wl,W.wr])ae.instanceMatrix.needsUpdate=!0;et.uniforms.uNight.value=zt(.35,.9,ge),et.uniforms.uOffset.value=k%200}function H(k,ie){let V=Math.floor((k-12)/36)*36+12;return ie[0].set(V-k,5.2,1.95),ie[1].set(V+36-k,5.2,1.95),ie}function $(k,ie="high"){C=vn(k,.1,1),M=ie;for(let se of E){let V=se.terrain.geometry.userData.lodRanges[ie]||se.terrain.geometry.userData.lodRanges.high;se.terrain.geometry.setDrawRange(V.start,V.count);for(let j of Object.values(se.inst))j.count=Math.floor((j.userData.population??j.count)*C),j.computeBoundingSphere()}for(let se of[Ce,W])for(let V of[se.bodies,se.wl,se.wr])V.count=Math.max(1,Math.floor(se.count*C));[W.bodies,W.wl,W.wr].forEach(se=>{se.visible=ie==="high"}),q.forEach((se,V)=>{se.visible=ie==="high"||ie==="medium"&&V<3||V===0}),Te.setDrawRange(0,Math.floor(Pe*C))}return{group:t,update:w,lampPositions:H,ffMat:et,terrainHeight:Yi,chunks:E,setDensity:$}}var od={low:{prCap:1,prMul:.8,shadow:0,bloom:!1,msaa:0,density:.5},medium:{prCap:1.25,prMul:1,shadow:1024,bloom:!0,msaa:2,density:.8},high:{prCap:1.75,prMul:1,shadow:2048,bloom:!0,msaa:4,density:1}},IT=typeof window<"u"&&window.devicePixelRatio?window.devicePixelRatio:1,LT=-13,Ex=i=>(18+12.2*vn(i,0,1))%24,DT={uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
    float fixf(float x) {
      uint b = floatBitsToUint(x);
      if ((b & 0x7f800000u) == 0x7f800000u) return ((b & 0x007fffffu) == 0u && (b & 0x80000000u) == 0u) ? 48.0 : 0.0;
      return clamp(x, 0.0, 48.0);
    }
    void main(){ vec3 c = texture2D(tDiffuse, vUv).rgb; gl_FragColor = vec4(fixf(c.r), fixf(c.g), fixf(c.b), 1.0); }`};function NT(i){i.traverse(e=>{e.geometry&&e.geometry.dispose();let t=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let n of t){for(let r of Object.keys(n)){let s=n[r];s&&s.isTexture&&s.dispose()}n.dispose()}})}function FT(i,e,t=null){let n=od[e.quality]||od.high,r=t&&t.renderer;try{r||(r=new gr({canvas:i,antialias:!1,powerPreference:"high-performance"}))}catch{return null}let s=Math.min(IT,n.prCap)*n.prMul;t||r.setPixelRatio(s),r.shadowMap.enabled=!t&&n.shadow>0,r.shadowMap.type=Vr,r.toneMapping=Wr,r.toneMappingExposure=1;let o=t?t.scene:new ei;o.fog=new ms(16777215,.0052);let a=t?t.camera:new Nt(44,1,.05,900);Object.assign(a,{fov:44,near:.05,far:900});let l=a.clone();o.add(a);let c=ux();t&&(t.scope.trackTree(c.mesh),t.scope.trackTree(c.envMesh)),o.add(c.mesh);let u=new ks(r);t&&t.scope.track(u);let f=new ei;f.add(c.envMesh);let h=null,d=-99;function p(){let ue=u.fromScene(f,0,.1,100);h&&(t?t.scope.release(h):h.dispose()),h=ue,t&&t.scope.track(ue),o.environment=ue.texture}let v=new Es(16777215,4473924,.6);o.add(v);let g=new Rs(16777215,3);if(n.shadow>0){g.castShadow=!0,g.shadow.mapSize.set(n.shadow,n.shadow);let ue=7.5;Object.assign(g.shadow.camera,{left:-ue,right:ue,top:ue,bottom:-ue,near:1,far:80}),g.shadow.bias=-3e-4,g.shadow.normalBias=.025,g.shadow.radius=2.5}o.add(g,g.target);let m=[new ur("#ffc27a",0,14,1.6),new ur("#ffc27a",0,14,1.6)];m.forEach(ue=>o.add(ue));let _=[new R,new R],y=new ur("#b9c8ff",0,10,1.2);y.position.set(.6,.8,.5),a.add(y);let x=mx();t&&Gm(x.mesh.geometry,x.columns,x.rows),t&&t.scope.trackTree(x.mesh),o.add(x.mesh);let S=Tx(o,{density:t?1:n.density}),b=r.getDrawingBufferSize(new le),C=t?null:new Bt(b.x,b.y,{type:nn,samples:n.msaa}),M=t?null:new jf(r,C),T=t?{enabled:!1}:new Ta(new le(2,2),.4,.55,.92);M&&(M.setPixelRatio(s),M.addPass(new ed(o,a)),M.addPass(new wa(DT)),T.enabled=n.bloom,M.addPass(T),M.addPass(new td)),t&&(t.scope.trackTree(o),t.scope.trackTree(f));let E={t:0,distance:0,speed:0,lane:.9,laneV:0,laneTarget:.9,tod:0,hour:Ex(e.tod||0),reduced:!!e.reduced,interactive:e.interactive!==!1},I={night:0,waveAmp:1},D={target:0,level:0,slow:0,bass:0,onset:!1},U=0,N=1.05,L=new R(-4.4,1.8,2.4),F={yaw0:Math.atan2(L.x,L.z),pitch0:Math.asin(L.y/L.length()),dist0:L.length(),yaw:0,pitch:0,dist:0,lastInput:-99,dragging:!1,control:null};F.yaw=F.yaw0,F.pitch=F.pitch0,F.dist=F.dist0;let G=new R,Q=new R,q=new R;function Z(){E.interactive&&(F.dragging=!0,F.lastInput=E.t)}function K(ue){!E.interactive||!F.dragging||!(ue.buttons&1)||(F.yaw=vn(F.yaw-ue.movementX*.005,F.yaw0-2.6,F.yaw0+2.6),F.pitch=vn(F.pitch+ue.movementY*.004,.08,1.25),F.lastInput=E.t)}function ee(){F.dragging=!1}function ne(ue){E.interactive&&(ue.preventDefault(),F.dist=vn(F.dist*(1+ue.deltaY*.001),2.4,15),F.lastInput=E.t)}function ze(){E.interactive&&(F.yaw=F.yaw0,F.pitch=F.pitch0,F.dist=F.dist0,F.lastInput=E.t)}function Ce(ue){let Pe=ue.x+E.distance;return Math.abs(ue.z)<2.9?.02:ue.z<LT?Math.max(Ea+.4,Yi(Pe,ue.z)):Yi(Pe,ue.z)}function Ve(ue){if(F.control){let Te=F.control;if(Te.position)l.position.fromArray(Te.position);else{let O=Math.cos(Te.pitch);l.position.set(Te.tx+Math.sin(Te.yaw)*O*Te.dist,Te.ty+Math.sin(Te.pitch)*Te.dist,Te.tz+Math.cos(Te.yaw)*O*Te.dist)}l.position.y=Math.max(l.position.y,Ce(l.position)+.3),Te.position?l.rotation.set(Te.pitch,Te.yaw,Te.roll,"YXZ"):(l.lookAt(Te.tx,Te.ty,Te.tz),l.rotateZ(Te.roll||0));let Ge=Te.external?1:1-Math.exp(-ue/.26);a.position.lerp(l.position,Ge),a.position.y=Math.max(a.position.y,Ce(a.position)+.3),a.quaternion.slerp(l.quaternion,Ge),a.fov+=(Te.fov-a.fov)*Ge,a.updateProjectionMatrix();return}G.set(0,N,E.lane),E.t-F.lastInput>4&&(F.yaw=qr(F.yaw,F.yaw0,1.2,ue),F.pitch=qr(F.pitch,F.pitch0,1.2,ue),F.dist=qr(F.dist,F.dist0,1.2,ue));let Pe=Math.cos(F.pitch);q.set(G.x+Math.sin(F.yaw)*Pe*F.dist,G.y+Math.sin(F.pitch)*F.dist,G.z+Math.cos(F.yaw)*Pe*F.dist),q.y=Math.max(q.y,Ce(q)+.3),Q.set(2.2,.55,E.lane*.4),a.position.copy(q),a.lookAt(Q),a.fov=44,a.updateProjectionMatrix()}let W={},re=new R,we=new R;function ke(){let ue=E.hour;fx(ue,re),dx(ue,we);let Pe=Math.asin(vn(re.y,-1,1))*180/Math.PI;hx(Pe,W);let Te=px(Pe);I.night=Te,_n.uSunDir.value.copy(re),_n.uMoonDir.value.copy(we),_n.uZenith.value.copy(W.zen),_n.uHorizon.value.copy(W.hor),_n.uGround.value.copy(W.gnd),_n.uSunColor.value.copy(W.sun),_n.uSunGlow.value=1-Te*.9,_n.uNight.value=Te,_n.uTime.value=E.t,_n.uCloudCover.value=.42,_n.uCloudTint.value.copy(W.ct),_n.uCloudShade.value.copy(W.cs),_n.uCloudOffset.value.set(E.distance*9e-4+E.t*.004,E.t*.0015);let Ge=Pe<-4,O=Ge?we:re;g.position.set(0,0,E.lane).addScaledVector(O,40),g.target.position.set(0,0,E.lane),Ge?(g.color.set("#9fb6ff"),g.intensity=.8*zt(-4,-12,Pe)*vn(we.y*3,0,1)):(g.color.copy(W.sun),g.intensity=W.li),v.color.copy(W.hs),v.groundColor.copy(W.hg),v.intensity=W.hi,o.fog.color.copy(W.fog),o.fog.density=.0052,x.uniforms.uFogDensity.value=.0036,x.uniforms.uDayLight.value=vn(W.li/3+W.hi*.25,.08,1),x.uniforms.uOffset.value=E.distance%36e3,gx(E.distance,E.t,x.uniforms.uPhase.value),x.uniforms.uAmp.value=I.waveAmp,r.toneMappingExposure=W.exp*(1+.1*zt(.4,.9,D.slow)),o.environmentIntensity=xn(1,.22,Te),n.bloom&&(T.strength=W.bloom*(1+.9*U)*xn(1,.7,Te),T.threshold=xn(1.05,.88,Te)),y.intensity=Te*2.2,(Math.abs(ue-d)>.18||d<0)&&(d=ue,p()),S.lampPositions(E.distance,_),m.forEach((ct,et)=>{ct.position.copy(_[et]),ct.intensity=zt(.25,.75,Te)*18})}let Ee=0,Be=0,ot=new le;function oe(ue){Ee=requestAnimationFrame(oe);let Pe=Be?Math.min((ue-Be)/1e3,.05):0;Be=ue,pe(Pe),Pe&&M.render()}function pe(ue){if(!ue&&!t)return;E.t+=ue,D.level=qr(D.level,D.target,3.2,ue),D.slow=qr(D.slow,D.level,.9,ue),D.onset?U=1:U=qr(U,0,2.2,ue),D.onset=!1;let Pe=E.reduced?3.2:6.8,Te=.6+.8*zt(.05,.7,D.level);E.speed=qr(E.speed,Pe*(E.reduced?.45:Te),.9,ue),E.distance+=E.speed*ue,E.laneTarget=.9+Math.sin(E.t*.23)*.7;let Ge=10;E.laneV+=((E.laneTarget-E.lane)*Ge-E.laneV*2*Math.sqrt(Ge))*ue,E.lane+=E.laneV*ue,I.waveAmp=E.reduced?.35:.55+.9*zt(.1,.75,D.bass),S.update(E.distance,ue,E.t,I),ke(),Ve(ue),c.mesh.position.copy(a.position),r.getDrawingBufferSize(ot),S.ffMat.uniforms.uScale.value=ot.y/(2*Math.tan(a.fov*Math.PI/360))}function Me(ue,Pe){let Te=Math.max(2,ue|0),Ge=Math.max(2,Pe|0);a.aspect=Te/Ge,a.updateProjectionMatrix(),t||r.setSize(Te,Ge,!1),M&&M.setSize(Te,Ge),T.resolution&&T.resolution.set(Te/2,Ge/2)}function de(){i.addEventListener("pointerdown",Z),i.addEventListener("pointermove",K),window.addEventListener("pointerup",ee),i.addEventListener("wheel",ne,{passive:!1}),i.addEventListener("dblclick",ze),i.style.touchAction=E.interactive?"none":""}function _e(){i.removeEventListener("pointerdown",Z),i.removeEventListener("pointermove",K),window.removeEventListener("pointerup",ee),i.removeEventListener("wheel",ne),i.removeEventListener("dblclick",ze),i.style.touchAction=""}return{canvas:i,renderer:r,composer:M,quality:n,scene:o,camera:a,S:E,env:I,audio:D,rig:F,resize:Me,update:pe,setQuality(ue){n=od[ue.mode]||od.medium,S.setDensity(ue.density,ue.mode);let Pe=x.mesh.geometry.userData.lodRanges[ue.mode];x.mesh.geometry.setDrawRange(Pe.start,Pe.count)},start(){Be=0,Ee=requestAnimationFrame(oe)},stop(){cancelAnimationFrame(Ee),Ee=0,Be=0},renderOnce(){S.update(E.distance,.016,E.t,I),ke(),Ve(.016),c.mesh.position.copy(a.position),M&&M.render()},bind:de,unbind:_e,dispose(){t||(NT(o),u.dispose(),h&&h.dispose(),M.dispose(),C.dispose(),r.dispose(),r.forceContextLoss&&r.forceContextLoss())}}}function Ax(i){let e=FT(i.renderer.domElement,{quality:i.quality.mode,tod:i.params.tod,interactive:!1},i);if(!e)throw new Error("Coast world initialization failed");let t=!1,n=!!i.params.reduced;return{update(r){e.S.reduced=n||!!r.reduced,e.audio.target=vn(r.level||0,0,1);let s=r.bands||[],o=0,a=Math.min(8,s.length);for(let c=0;c<a;c++)o+=s[c]||0;e.audio.bass=a?vn(o/a*1.4,0,1):0,e.audio.onset=!e.S.reduced&&!!r.onset;let l=e.S.reduced||r.playing===!1?0:r.dynamicDt??r.dt??.016;e.update(Math.max(0,Math.min(l,.1)))},resize:e.resize,setParams(r){e.S.tod=r.tod,e.S.hour=Ex(r.tod),n=!!r.reduced,e.S.reduced=n},setQuality:e.setQuality,setRig(r){e.rig.control=r},dispose(){t||(t=!0)}}}var Vn=(i,e=0,t=1)=>i<e?e:i>t?t:i;function UT(i){let e=2166136261,t=String(i??"");for(let n=0;n<t.length;n+=1)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}function Hn(i){let e=(typeof i=="number"?i:UT(i))>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Hm(i,e,t){let n=t||new Float32Array(e),r=i&&i.length?i:null;if(!r)return n.fill(0,0,e),n;let s=r.length;for(let o=0;o<e;o+=1){let a=Math.floor(Math.pow(s+1,o/e)-1),l=Math.min(s,Math.max(a+1,Math.ceil(Math.pow(s+1,(o+1)/e)-1))),c=0,u=0;for(let h=a;h<l;h+=1){let d=Vn(Number(r[h])||0);d>c&&(c=d),u+=d*d}let f=.6*c+.4*Math.sqrt(u/(l-a));n[o]=Vn(Math.pow(Math.max(0,f-.008),.6)*1.65)}return n}function Cx(i,e,t){let n=i;for(let r=0;r<n.length&&r<e.length;r+=1){let s=e[r]>n[r];n[r]=Ra(n[r],e[r],s?1/24:1/6,t)}return n}function Ra(i,e,t,n){return t>0?i+(e-i)*(1-Math.exp(-Math.max(0,n)/t)):e}function qm(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Px(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=GT(i,e,s,t)),i.length>80*t){a=i[0],l=i[1];let u=a,f=l;for(let h=t;h<r;h+=t){let d=i[h],p=i[h+1];d<a&&(a=d),p<l&&(l=p),d>u&&(u=d),p>f&&(f=p)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return pu(s,o,t,a,l,c,0),o}function Px(i,e,t,n,r){let s;if(r===QT(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=Rx(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=Rx(o/n|0,i[o],i[o+1],s);return s&&Pa(s,s.next)&&(gu(s),s=s.next),s}function Ws(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Pa(t,t.next)||Ht(t.prev,t,t.next)===0)){if(gu(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function pu(i,e,t,n,r,s,o){if(!i)return;!o&&s&&qT(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?OT(i,n,r,s):BT(i)){e.push(l.i,i.i,c.i),gu(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=zT(Ws(i),e),pu(i,e,t,n,r,s,2)):o===2&&kT(i,e,t,n,r,s):pu(Ws(i),e,t,n,r,s,1);break}}}function BT(i){let e=i.prev,t=i,n=i.next;if(Ht(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(r,s,o),f=Math.min(a,l,c),h=Math.max(r,s,o),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=f&&p.y<=d&&du(r,a,s,l,o,c,p.x,p.y)&&Ht(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function OT(i,e,t,n){let r=i.prev,s=i,o=i.next;if(Ht(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,d=Math.min(a,l,c),p=Math.min(u,f,h),v=Math.max(a,l,c),g=Math.max(u,f,h),m=Wm(d,p,e,t,n),_=Wm(v,g,e,t,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=m&&x&&x.z<=_;){if(y.x>=d&&y.x<=v&&y.y>=p&&y.y<=g&&y!==r&&y!==o&&du(a,u,l,f,c,h,y.x,y.y)&&Ht(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=v&&x.y>=p&&x.y<=g&&x!==r&&x!==o&&du(a,u,l,f,c,h,x.x,x.y)&&Ht(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=v&&y.y>=p&&y.y<=g&&y!==r&&y!==o&&du(a,u,l,f,c,h,y.x,y.y)&&Ht(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=d&&x.x<=v&&x.y>=p&&x.y<=g&&x!==r&&x!==o&&du(a,u,l,f,c,h,x.x,x.y)&&Ht(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function zT(i,e){let t=i;do{let n=t.prev,r=t.next.next;!Pa(n,r)&&Lx(n,t,t.next,r)&&mu(n,r)&&mu(r,n)&&(e.push(n.i,t.i,r.i),gu(t),gu(t.next),t=i=r),t=t.next}while(t!==i);return Ws(t)}function kT(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$T(o,a)){let l=Dx(o,a);o=Ws(o,o.next),l=Ws(l,l.next),pu(o,e,t,n,r,s,0),pu(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function GT(i,e,t,n){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Px(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(ZT(c))}r.sort(VT);for(let s=0;s<r.length;s++)t=HT(r[s],t);return t}function VT(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function HT(i,e){let t=WT(i,e);if(!t)return e;let n=Dx(t,i);return Ws(n,n.next),Ws(t,t.next)}function WT(i,e){let t=e,n=i.x,r=i.y,s=-1/0,o;if(Pa(i,t))return t;do{if(Pa(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s&&(s=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ix(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){let f=Math.abs(r-t.y)/(n-t.x);mu(t,i)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&XT(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function XT(i,e){return Ht(i.prev,i,e.prev)<0&&Ht(e.next,i,i.next)<0}function qT(i,e,t,n){let r=i;do r.z===0&&(r.z=Wm(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,YT(r)}function YT(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function Wm(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ZT(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ix(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function du(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&Ix(i,e,t,n,r,s,o,a)}function $T(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!JT(i,e)&&(mu(i,e)&&mu(e,i)&&KT(i,e)&&(Ht(i.prev,i,e.prev)||Ht(i,e.prev,e))||Pa(i,e)&&Ht(i.prev,i,i.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Pa(i,e){return i.x===e.x&&i.y===e.y}function Lx(i,e,t,n){let r=ld(Ht(i,e,t)),s=ld(Ht(i,e,n)),o=ld(Ht(t,n,i)),a=ld(Ht(t,n,e));return!!(r!==s&&o!==a||r===0&&ad(i,t,e)||s===0&&ad(i,n,e)||o===0&&ad(t,i,n)||a===0&&ad(t,e,n))}function ad(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ld(i){return i>0?1:i<0?-1:0}function JT(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Lx(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function mu(i,e){return Ht(i.prev,i,i.next)<0?Ht(i,e,i.next)>=0&&Ht(i,i.prev,e)>=0:Ht(i,e,i.prev)<0||Ht(i,i.next,e)<0}function KT(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Dx(i,e){let t=Xm(i.i,i.x,i.y),n=Xm(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Rx(i,e,t,n){let r=Xm(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function gu(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xm(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function QT(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var st=(i,e=[])=>({outline:i,holes:e}),vu=(i,e,t,n,r=18)=>Array.from({length:r},(s,o)=>{let a=o/r*Math.PI*2;return[i+Math.cos(a)*t,e+Math.sin(a)*n]}),kt=(i,e)=>{let t=n=>i.map((r,s)=>{let o=i[Math.max(0,s-1)],a=i[Math.min(i.length-1,s+1)],l=Math.hypot(a[0]-o[0],a[1]-o[1]);return[r[0]-(a[1]-o[1])/l*e/2*n,r[1]+(a[0]-o[0])/l*e/2*n]});return st([...t(1),...t(-1).reverse()])},he=(i,e,t=.6)=>[i,e,t],jT={id:"aries",regions:[st([[6,40],[9,33],[17,29],[23,25],[29,26],[34,23],[40,25],[45,23],[51,26],[57,25],[63,29],[69,29],[74,34],[78,38],[82,38],[85,41],[91,40],[96,44],[96,48],[92,51],[89,50],[89,58],[86,62],[82,61],[79,57],[78,65],[79,78],[75,79],[72,74],[72,62],[68,55],[64,53],[63,69],[65,76],[62,77],[58,72],[57,56],[48,56],[40,55],[33,58],[30,67],[30,74],[33,77],[29,79],[25,76],[23,65],[20,58],[15,58],[14,67],[16,74],[13,76],[10,74],[9,61],[8,53],[7,47],[5,44]]),st(vu(77,43,8,9,24),[vu(77,43,4.5,5.3,18)]),st([[83,39],[80,36],[80,32],[83,30],[86,31],[88,34],[88,39],[86,43]]),st([[88,41],[89,36],[93,35],[92,39]])],nodes:[he(10,62,1),he(72,46,1),he(82,51,.8),he(29,51,.35),he(53,45,.35),he(77,38,.5)],lines:[[0,1],[1,2],[0,3],[3,4],[4,1],[1,5]]},e2={id:"taurus",regions:[st([[5,39],[10,34],[20,30],[32,29],[46,30],[57,32],[68,30],[76,32],[81,35],[84,37],[90,38],[96,42],[96,48],[90,51],[85,50],[80,46],[78,54],[78,67],[82,75],[77,77],[73,73],[71,59],[67,52],[62,54],[62,69],[65,75],[61,76],[57,71],[55,55],[42,54],[29,54],[25,60],[24,72],[28,76],[22,77],[19,73],[18,57],[13,53],[11,68],[14,74],[10,75],[7,71],[7,53],[4,47]]),st([[77,38],[72,32],[70,26],[70,19],[72,21],[74,28],[80,33],[82,38]]),st([[82,37],[85,30],[87,24],[86,19],[89,21],[90,27],[89,34],[87,40]]),kt([[7,39],[3,43],[3,57],[5,65]],1.8),st([[75,35],[70,34],[68,37],[73,40]])],nodes:[he(80,41,1),he(88,47,.8),he(72,33,.7),he(72,23,.75),he(88,23,.9),he(52,40,.65),he(22,44,.55),he(11,64,.65),he(62,67,.45)],lines:[[0,1],[0,2],[2,3],[0,4],[0,5],[5,6],[6,7],[5,8]]},t2={id:"gemini",regions:[st([[34,15],[28,16],[25,21],[26,27],[30,30],[30,34],[25,34],[20,40],[15,51],[12,64],[15,66],[19,57],[24,48],[26,56],[24,66],[23,76],[18,87],[13,91],[14,94],[20,94],[26,87],[31,74],[34,64],[38,75],[43,87],[40,91],[43,94],[48,93],[49,87],[45,72],[41,62],[40,53],[44,43],[49,41],[52,39],[50,36],[44,38],[39,34],[38,30],[42,25],[41,19],[38,16]]),st([[57,12],[53,16],[52,21],[55,26],[57,29],[56,33],[51,35],[45,39],[42,44],[44,47],[49,43],[55,41],[57,51],[54,60],[51,70],[52,81],[48,86],[50,89],[57,89],[59,83],[59,72],[62,66],[67,77],[72,82],[70,88],[73,91],[79,88],[78,82],[73,69],[68,61],[67,53],[68,47],[75,47],[82,44],[84,37],[83,34],[80,36],[79,42],[73,42],[69,39],[64,33],[64,28],[68,23],[68,18],[65,13],[61,11]]),st([[35,16],[31,19],[29,25],[26,27],[23,25],[23,20],[26,15],[32,12],[38,13],[42,16],[44,22],[42,26],[40,21]])],nodes:[he(33,23,.85),he(61,20,1),he(29,38,.6),he(58,37,.7),he(15,61,.6),he(82,40,.65),he(29,60,.55),he(61,60,.6),he(23,85,.8),he(45,87,.65),he(55,83,.55),he(75,83,.65)],lines:[[0,1],[0,2],[1,3],[2,4],[3,5],[2,6],[3,7],[6,8],[6,9],[7,10],[7,11]]},n2={id:"cancer",regions:[st([[30,52],[35,45],[43,43],[47,45],[50,41],[54,44],[62,45],[68,50],[72,59],[71,68],[67,76],[59,80],[46,81],[35,77],[29,68],[28,60]]),kt([[33,53],[25,47],[21,41],[18,34]],4),st([[18,35],[12,31],[9,24],[9,17],[12,10],[16,6],[18,7],[16,14],[16,21],[19,25],[22,22],[23,17],[25,14],[27,19],[27,27],[24,32],[21,35]]),kt([[66,53],[75,48],[78,41],[82,33]],4),st([[81,34],[77,30],[76,25],[78,19],[82,15],[83,18],[81,24],[83,26],[87,23],[89,17],[88,11],[91,14],[94,21],[95,27],[92,32],[87,35],[83,36]]),...[0,1,2,3].flatMap(i=>[kt([[31,56+i*5],[23-i,54+i*7],[15-i,59+i*7],[10,64+i*7]],2.2),kt([[70,56+i*5],[79+i,55+i*7],[86+i,60+i*7],[91,65+i*7]],2.2)]),st(vu(46,44,1.5,3,8)),st(vu(56,44,1.5,3,8))],nodes:[he(18,33,.8),he(45,49,1),he(60,48,.85),he(88,31,1),he(60,65,.85),he(47,71,.85),he(26,84,.75)],lines:[[0,1],[1,2],[2,3],[2,4],[4,5],[5,1],[5,6]]},i2={id:"leo",regions:[st([[11,52],[17,44],[24,41],[32,40],[42,42],[50,41],[56,37],[59,30],[64,24],[69,22],[72,18],[74,21],[79,19],[82,22],[85,21],[87,25],[91,26],[90,31],[94,34],[96,39],[93,41],[88,40],[85,37],[83,41],[87,44],[92,46],[94,49],[92,52],[87,51],[84,48],[81,49],[82,53],[78,59],[77,64],[84,64],[91,65],[95,68],[94,71],[91,72],[89,69],[76,70],[67,68],[65,63],[59,65],[48,65],[38,63],[31,66],[23,68],[11,68],[8,65],[12,62],[20,61],[27,57],[28,52],[22,50],[17,53],[14,57],[10,58]]),st([[15,47],[10,51],[7,58],[7,64],[11,68],[16,69],[20,68],[18,71],[12,72],[6,70],[3,66],[3,60],[6,53],[10,48]]),st([[64,35],[67,31],[71,28],[76,28],[80,31],[83,34],[81,35],[76,32],[72,32],[68,35]]),st(vu(86,33,1.4,.7,8))],nodes:[he(17,49,.7),he(29,47,.75),he(64,39,.75),he(77,27,.6),he(85,25,.65),he(80,45,.55),he(72,56,.8),he(65,66,1),he(88,69,.7),he(91,65,.55),he(30,63,.7),he(8,65,.9)],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[7,10],[10,11],[11,0]]},r2={id:"virgo",regions:[st([[45,9],[39,12],[37,18],[39,23],[43,27],[44,30],[39,33],[35,40],[36,51],[40,58],[36,67],[32,77],[33,81],[40,84],[48,85],[59,83],[63,78],[59,70],[56,60],[53,50],[54,42],[58,46],[64,52],[66,50],[62,42],[56,35],[51,31],[50,27],[54,22],[54,17],[51,12]]),st([[38,33],[32,30],[29,26],[27,28],[27,35],[29,44],[32,48],[35,46],[34,54],[31,55],[29,50],[25,44],[23,35],[22,24],[25,19],[28,22],[33,29]]),st([[51,33],[57,27],[60,26],[63,30],[67,37],[69,46],[68,52],[65,58],[62,57],[63,50],[62,43],[59,37],[56,34],[56,44],[54,49]]),st([[39,82],[42,83],[43,93],[46,96],[43,97],[39,95]]),st([[51,84],[54,83],[54,93],[57,95],[55,97],[51,96]]),kt([[34,40],[34,54],[30,64]],1.1)],nodes:[he(45,12,.9),he(42,22,.55),he(35,40,.6),he(48,40,.8),he(63,53,.85),he(43,65,.75),he(40,77,.55),he(54,79,.75),he(61,78,.6),he(41,94,.55),he(53,94,.55)],lines:[[0,1],[1,3],[2,3],[3,4],[3,5],[5,6],[6,7],[7,8],[6,9],[7,10]]},s2={id:"libra",regions:[st([[47,16],[51,15],[54,18],[56,25],[56,33],[53,38],[53,49],[51,59],[51,76],[57,80],[61,86],[58,90],[49,91],[39,88],[37,84],[41,80],[46,77],[47,60],[47,48],[49,37],[50,31],[48,25]]),kt([[17,17],[50,21],[83,43]],2),kt([[17,17],[7,59]],.85),kt([[17,17],[29,58]],.85),st([[6,58],[11,59],[19,59],[27,56],[31,57],[29,63],[24,66],[16,67],[9,64]]),kt([[83,43],[69,79]],.85),kt([[83,43],[94,75]],.85),st([[68,78],[73,79],[82,78],[90,75],[95,74],[94,81],[88,85],[79,87],[71,85]])],nodes:[he(17,17,1),he(51,21,1),he(83,43,1),he(16,62,.85),he(77,82,.85),he(30,60,.4),he(92,77,.4)],lines:[[0,1],[1,2],[0,3],[3,5],[5,0],[2,4],[4,6],[6,2]]},o2={id:"scorpius",regions:[st([[40,42],[45,35],[52,34],[57,38],[61,44],[60,52],[56,61],[50,68],[43,69],[38,64],[36,57],[37,49]]),kt([[48,38],[55,31],[62,26]],4),st([[61,27],[56,23],[55,17],[59,12],[64,10],[72,11],[79,14],[83,20],[81,23],[77,19],[70,17],[64,18],[62,21],[67,24],[75,25],[80,24],[78,28],[71,31],[65,30]]),kt([[58,44],[69,49],[73,53]],4),st([[72,52],[74,48],[76,43],[76,38],[79,41],[81,46],[80,53],[76,59],[71,62],[65,61],[62,57],[62,51],[65,47],[68,45],[67,50],[66,55],[69,57]]),kt([[43,65],[37,73],[28,78],[20,76],[14,71],[12,64],[14,60]],5),st([[15,62],[11,64],[7,62],[6,57],[9,53],[14,52],[19,54],[21,58],[18,63],[17,59],[14,58],[12,59]]),...[0,1,2,3].flatMap(i=>[kt([[39,44+i*5],[29,39+i*5],[22,39+i*5]],1.5),kt([[59,47+i*4],[61+i*2,57+i*5],[58+i*2,64+i*5]],1.6)])],nodes:[he(80,20,.8),he(63,27,.85),he(50,38,1),he(73,49,.6),he(68,58,.6),he(46,48,.5),he(44,59,.55),he(39,67,.7),he(28,77,.7),he(16,72,.6),he(12,63,.55),he(17,57,.55)],lines:[[0,1],[1,2],[2,3],[3,4],[4,2],[2,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11]]},a2={id:"sagittarius",regions:[st([[22,48],[30,43],[39,43],[46,46],[50,43],[49,37],[48,32],[48,27],[45,24],[44,19],[46,14],[51,12],[56,14],[58,18],[57,23],[54,26],[55,29],[60,32],[65,34],[70,35],[74,31],[77,31],[76,35],[72,39],[65,39],[57,37],[56,42],[60,48],[65,51],[68,57],[67,63],[73,69],[76,76],[73,80],[70,79],[70,74],[64,67],[62,63],[59,61],[55,62],[58,69],[55,78],[51,80],[50,77],[53,71],[49,65],[44,63],[37,63],[33,61],[29,65],[24,74],[18,83],[12,91],[7,93],[6,90],[12,85],[17,77],[23,64],[23,58],[19,55]]),st([[31,60],[35,64],[34,70],[40,77],[42,83],[48,89],[46,92],[41,90],[38,85],[32,80],[29,73],[27,68]]),st([[24,48],[19,44],[12,44],[7,47],[3,48],[7,51],[13,49],[16,51],[22,54]]),kt([[52,30],[46,31],[39,34],[42,37],[54,35]],2.4),kt([[76,17],[82,24],[84,32],[83,40],[79,47]],1.5),kt([[76,17],[78,32],[79,47]],.55),kt([[42,35],[89,33]],.65),st([[88,31],[92,33],[88,35]])],nodes:[he(51,16,.7),he(51,30,.65),he(40,35,.6),he(76,33,.7),he(90,33,.85),he(54,48,.75),he(62,59,.7),he(72,77,.6),he(45,89,.6),he(31,58,.8),he(9,90,.8),he(10,48,.6)],lines:[[0,1],[1,2],[2,3],[3,4],[1,5],[5,6],[6,7],[6,9],[9,8],[9,10],[9,11],[5,9]]},l2={id:"capricornus",regions:[st([[13,70],[23,69],[33,66],[44,63],[54,56],[61,48],[65,39],[70,34],[75,35],[79,39],[79,44],[84,48],[85,52],[83,55],[79,54],[77,51],[75,53],[75,61],[78,70],[77,78],[73,81],[70,79],[71,74],[69,67],[64,66],[62,71],[57,69],[53,70],[50,75],[44,81],[36,86],[28,87],[22,83],[18,78],[12,76],[7,83],[7,76],[3,68],[10,70]]),st([[68,38],[69,30],[69,22],[67,13],[64,7],[67,9],[71,17],[74,25],[74,34]]),st([[75,38],[77,28],[77,18],[75,10],[78,13],[80,23],[81,34],[79,41]]),st([[69,37],[65,34],[61,36],[65,40]]),st([[51,71],[54,73],[47,82],[41,88],[32,90],[24,88],[20,84],[25,86],[32,87],[39,84],[45,79]])],nodes:[he(73,42,1),he(64,55,.7),he(49,65,.65),he(35,70,.6),he(13,73,.75),he(30,86,.65),he(50,83,.4),he(75,76,.65)],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[0,5]]},c2={id:"aquarius",regions:[st([[32,13],[27,16],[25,22],[28,28],[32,30],[33,34],[28,38],[25,46],[28,54],[33,60],[31,69],[29,81],[25,88],[27,91],[33,90],[36,83],[37,71],[41,64],[45,73],[48,84],[53,90],[58,91],[60,88],[54,83],[52,70],[47,61],[46,52],[44,44],[48,43],[53,39],[55,33],[53,30],[50,34],[48,37],[42,38],[38,34],[38,30],[42,26],[43,20],[40,15]]),kt([[30,39],[22,40],[19,35],[21,29],[28,31],[34,38],[47,41]],3),st([[49,28],[54,24],[62,23],[66,26],[70,26],[70,31],[66,34],[65,42],[61,47],[55,46],[51,42],[52,35]]),...[0,1,2].map(i=>kt([[64+i*2,35],[70+i*2,45],[69+i*3,57],[65+i*3,65],[70+i*3,75],[68+i*3,85],[72+i*3,93]],1.4))],nodes:[he(34,20,.7),he(32,38,.65),he(20,36,.6),he(47,40,.8),he(57,28,.6),he(67,29,.6),he(66,42,.6),he(68,58,.7),he(68,74,.6),he(74,90,.65),he(37,61,.7),he(30,88,.6),he(54,88,.6)],lines:[[0,1],[1,2],[1,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[1,10],[10,11],[10,12]]},u2={id:"pisces",regions:[st([[17,55],[23,54],[28,57],[31,61],[29,64],[23,64],[18,62],[15,60],[10,62],[11,58],[9,54],[15,57]]),st([[75,17],[79,12],[84,12],[87,17],[86,23],[82,27],[78,27],[75,23],[71,25],[72,21],[70,17],[75,19]]),kt([[29,62],[37,70],[50,76],[63,87]],.6),kt([[63,87],[59,74],[58,63],[61,49],[66,35],[77,26]],.6)],nodes:[he(15,58,.5),he(25,60,.6),he(36,69,.6),he(49,76,.65),he(63,87,.9),he(58,62,.55),he(60,52,.5),he(66,34,.6),he(77,26,.6),he(80,14,.9),he(86,19,.65),he(82,26,.55),he(73,23,.45)],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,9]]},Ia=[jT,e2,t2,n2,i2,r2,s2,o2,a2,l2,c2,u2].map(i=>({...i,regions:i.regions.map(e=>({outline:e.outline.map(([t,n])=>[t,100-n]),holes:e.holes.map(t=>t.map(([n,r])=>[n,100-r]))})),nodes:i.nodes.map(([e,t,n])=>[e,100-t,n])}));var Tt=12,yr=2.8,Jm=7.6,yu=2.6,xu=yr+Jm+yu,La=2.5,Xs=1.78,Mu=La*Xs,cd=.85,Bx=Mu*1.06,Ox=La*1.06,zx=cd*1.2,Qm=.5,_u=.26,jm=.022,e0=.072,t0=.0055,n0=.017,Rn=[{id:"aries",cn:"\u767D\u7F8A",en:"Aries"},{id:"taurus",cn:"\u91D1\u725B",en:"Taurus"},{id:"gemini",cn:"\u53CC\u5B50",en:"Gemini"},{id:"cancer",cn:"\u5DE8\u87F9",en:"Cancer"},{id:"leo",cn:"\u72EE\u5B50",en:"Leo"},{id:"virgo",cn:"\u5904\u5973",en:"Virgo"},{id:"libra",cn:"\u5929\u79E4",en:"Libra"},{id:"scorpius",cn:"\u5929\u874E",en:"Scorpius"},{id:"sagittarius",cn:"\u5C04\u624B",en:"Sagittarius"},{id:"capricornus",cn:"\u6469\u7FAF",en:"Capricornus"},{id:"aquarius",cn:"\u6C34\u74F6",en:"Aquarius"},{id:"pisces",cn:"\u53CC\u9C7C",en:"Pisces"}];function Ym(i){return(i()+i()+i()-1.5)*.82}function Nx(i){let e,t,n,r;do e=i()*2-1,t=i()*2-1,n=i()*2-1,r=e*e+t*t+n*n;while(r>1||r<1e-6);let s=1/Math.sqrt(r);return[e*s,t*s,n*s]}var Zm=new Array(Tt);function Da(i){let e=(i%Tt+Tt)%Tt;if(!Zm[e]){let t=Ia[e].regions.flatMap(h=>h.outline),n=t.map(h=>h[0]),r=t.map(h=>h[1]),s=Math.min(...n),o=Math.max(...n),a=Math.min(...r),l=Math.max(...r),c=o-s,u=l-a,f=Math.min(Mu*2/c,La*2/u);Zm[e]={cx:(s+o)/2,cy:(a+l)/2,k:f,kz:1,w:c*f/2,h:u*f/2}}return Zm[e]}var Zi=560,$m=new Array(Tt);function Fx(i,e,t){let n=!1;for(let r=0,s=t.length-1;r<t.length;s=r++){let o=t[r],a=t[s];o[1]>e!=a[1]>e&&i<(a[0]-o[0])*(e-o[1])/(a[1]-o[1])+o[0]&&(n=!n)}return n}function kx(i,e,t){let n=0;for(let r of Ia[i].regions){if(!Fx(e,t,r.outline)||r.holes.some(o=>Fx(e,t,o)))continue;let s=1/0;for(let o of[r.outline,...r.holes])o.forEach((a,l)=>{let c=o[(l+1)%o.length],u=c[0]-a[0],f=c[1]-a[1],h=Vn(((e-a[0])*u+(t-a[1])*f)/(u*u+f*f),0,1);s=Math.min(s,Math.hypot(e-a[0]-u*h,t-a[1]-f*h))});n=Math.max(n,s*Da(i).k)}return _u+.06+Math.min(cd-_u-.08,Math.sqrt(n)*.52)}var Km=i=>-(i-_u)*.8-.08;function i0(i){if($m[i])return $m[i];let e=[],t=[],n=[];for(let u of Ia[i].regions){let f=[u.outline,...u.holes],h=e.length,d=[],p=[];f.forEach((g,m)=>{m&&p.push(d.length/2);let _=e.length;g.forEach(y=>{e.push(y.slice()),d.push(...y)}),m||g.forEach((y,x)=>n.push([_+x,_+(x+1)%g.length]))});let v=qm(d,p,2);for(let g=0;g<v.length;g+=3)t.push(v.slice(g,g+3).map(m=>h+m))}let r=Hn("zodiac-contour-mesh:"+Ia[i].id);for(;e.length<Zi;){let u=null,f=-1;for(let _ of t)for(let y=0;y<3;y++){let x=_[y],S=_[(y+1)%3],b=e[x],C=e[S],M=(b[0]-C[0])**2+(b[1]-C[1])**2;M>f&&(f=M,u=[x,S])}let[h,d]=u,p=e[h],v=e[d],g=.43+r()*.14,m=e.length;e.push([p[0]+(v[0]-p[0])*g,p[1]+(v[1]-p[1])*g]);for(let _=t.length-1;_>=0;_--){let y=t[_];if(!(!y.includes(h)||!y.includes(d)))for(let x=0;x<3;x++){let S=y[x],b=y[(x+1)%3],C=y[(x+2)%3];if(S===h&&b===d||S===d&&b===h){t[_]=[S,m,C],t.push([m,b,C]);break}}}}let s=0,o=0,a=t.map(([u,f,h])=>{let d=e[u],p=e[f],v=e[h];return s+=Math.abs((p[0]-d[0])*(v[1]-d[1])-(p[1]-d[1])*(v[0]-d[0]))/2,s}),l=n.map(([u,f])=>(o+=Math.hypot(e[u][0]-e[f][0],e[u][1]-e[f][1]),o)),c=e.map(([u,f])=>kx(i,u,f));return $m[i]={points:e,triangles:t,contours:n,areas:a,lengths:l,totalArea:s,totalLength:o,depths:c}}function Ux(i,e){let t=0,n=i.length-1;for(;t<n;){let r=t+n>>>1;e<i[r]?n=r:t=r+1}return t}function Gx(i,e,t,n=!1){let r=i0(i),s=Da(i),o=Hn(t),a=new Float32Array(e*3);for(let l=0;l<e;l++){let c,u,f;if(o()<.18){let[d,p]=r.contours[Ux(r.lengths,o()*r.totalLength)],v=o(),g=r.points[d],m=r.points[p];c=g[0]+(m[0]-g[0])*v,u=g[1]+(m[1]-g[1])*v,f=r.depths[d]*(1-v)+r.depths[p]*v}else{let d=r.triangles[Ux(r.areas,o()*r.totalArea)],[p,v,g]=d.map(y=>r.points[y]),m=Math.sqrt(o()),_=o();c=p[0]*(1-m)+v[0]*m*(1-_)+g[0]*m*_,u=p[1]*(1-m)+v[1]*m*(1-_)+g[1]*m*_,f=r.depths[d[0]]*(1-m)+r.depths[d[1]]*m*(1-_)+r.depths[d[2]]*m*_}a[l*3]=(c-s.cx)*s.k,a[l*3+1]=(u-s.cy)*s.k;let h=o();a[l*3+2]=n?f:Km(f)+(f-Km(f))*h}return a}function ud(i,e){let t=(i%Tt+Tt)%Tt,n=Gx(t,e,"zodiac-shape:"+Rn[t].id+":"+e),r=Hn("zodiac-shine:"+Rn[t].id+":"+e),s=new Float32Array(e);for(let o=0;o<e;o++)s[o]=.4+Math.pow(r(),3)*.8;return{pos:n,shine:s,sign:Rn[t]}}var Na=Ia.map(({nodes:i,lines:e})=>({nodes:i,lines:e}));function h2(i,e,t){let n=i0(i);for(let[r,s,o]of n.triangles){let a=n.points[r],l=n.points[s],c=n.points[o],u=(l[1]-c[1])*(a[0]-c[0])+(c[0]-l[0])*(a[1]-c[1]),f=((l[1]-c[1])*(e-c[0])+(c[0]-l[0])*(t-c[1]))/u,h=((c[1]-a[1])*(e-c[0])+(a[0]-c[0])*(t-c[1]))/u;if(f>=-1e-6&&h>=-1e-6&&f+h<=1+1e-6)return n.depths[r]*f+n.depths[s]*h+n.depths[o]*(1-f-h)}return kx(i,e,t)}function Su(i){let e=Math.max(0,Math.floor(Number(i)||0));return{gather:e%5,disperse:(e*3+Math.floor(e/5)+1)%5,direction:e%2?-1:1}}function hd(i){let e=(i%Tt+Tt)%Tt,t=Na[e],n=Da(e),r=new Float32Array(t.nodes.length),s=new Float32Array(t.nodes.length),o=new Float32Array(t.nodes.length),a=new Float32Array(t.nodes.length);return t.nodes.forEach(([l,c,u],f)=>{r[f]=(l-n.cx)*n.k,s[f]=(c-n.cy)*n.k,o[f]=u,a[f]=h2(e,l,c)+.08}),{x:r,y:s,z:a,m:o,nodes:r.length,segments:t.lines.length,core:Zr(r,s,t.lines,jm,a),halo:Zr(r,s,t.lines,e0,a)}}function Vx(i){let e=i.length;if(e<3)return[];let t=1/0,n=-1/0,r=1/0,s=-1/0;for(let v=0;v<e;v+=1){let g=i[v];g.x<t&&(t=g.x),g.x>n&&(n=g.x),g.y<r&&(r=g.y),g.y>s&&(s=g.y)}let o=n-t||1,a=s-r||1,l=Math.max(o,a),c=(t+n)/2,u=(r+s)/2,f=[{x:c-20*l,y:u-l},{x:c,y:u+20*l},{x:c+20*l,y:u-l}].concat(i.map(v=>({x:v.x,y:v.y}))),h=[[0,1,2]],d=(v,g,m)=>{let _=v.x,y=v.y,x=g.x,S=g.y,b=m.x,C=m.y,M=2*(_*(S-C)+x*(C-y)+b*(y-S));if(Math.abs(M)<1e-12)return{x:0,y:0,r:1/0};let T=_*_+y*y,E=x*x+S*S,I=b*b+C*C,D=(T*(S-C)+E*(C-y)+I*(y-S))/M,U=(T*(b-x)+E*(_-b)+I*(x-_))/M,N=D-_,L=U-y;return{x:D,y:U,r:N*N+L*L}},p=[d(f[0],f[1],f[2])];for(let v=3;v<f.length;v+=1){let g=f[v],m=[];for(let b=0;b<h.length;b+=1){let C=p[b],M=g.x-C.x,T=g.y-C.y;M*M+T*T<=C.r&&m.push(b)}let _=new Map,y=(b,C)=>b<C?b+":"+C:C+":"+b;m.forEach(b=>{let[C,M,T]=h[b];[[C,M],[M,T],[T,C]].forEach(([E,I])=>{let D=y(E,I),U=_.get(D);U?U.n+=1:_.set(D,{u:E,v:I,n:1})})});let x=[],S=[];for(let b=0;b<h.length;b+=1)m.indexOf(b)<0&&(x.push(h[b]),S.push(p[b]));h=x,p.length=0,S.forEach(b=>p.push(b)),_.forEach(b=>{b.n===1&&(h.push([b.u,b.v,v]),p.push(d(f[b.u],f[b.v],g)))})}return h.filter(v=>v[0]>2&&v[1]>2&&v[2]>2).map(v=>[v[0]-3,v[1]-3,v[2]-3])}function fd(i,e){let t=(i%Tt+Tt)%Tt,n=i0(t),r=Da(t),s=n.points.map(([C,M])=>({x:(C-r.cx)*r.k,y:(M-r.cy)*r.k})),o=n.triangles,a=Gx(t,e,"zodiac-figure-cloud:"+Rn[t].id+":"+e,!0),l=Hn("zodiac-figure-tint:"+Rn[t].id),c=new Map;o.forEach(([C,M,T])=>[[C,M],[M,T],[T,C]].forEach(([E,I])=>{let D=E<I?E+":"+I:I+":"+E;c.has(D)?c.get(D).count++:c.set(D,{u:E,v:I,count:1})}));let u=[...c.values()].filter(C=>C.count===1),f=o.length*2+u.length*2,h=new Float32Array(f*9),d=new Float32Array(f*9),p=new Map;o.forEach(([C,M,T],E)=>{[s[C],s[M],s[T]].forEach((U,N)=>{h[E*9+N*3]=U.x,h[E*9+N*3+1]=U.y,h[E*9+N*3+2]=n.depths[[C,M,T][N]]});let D=.62+l()*.66;for(let U=0;U<3;U+=1)d[E*9+U*3]=d[E*9+U*3+1]=d[E*9+U*3+2]=D;[[C,M],[M,T],[T,C]].forEach(([U,N])=>{let L=U<N?U+":"+N:N+":"+U;p.has(L)||p.set(L,[U,N])})});let v=o.length,g=C=>{let M=.68+l()*.28;C.forEach(([T,E],I)=>{let D=s[T],U=v*9+I*3;h.set([D.x,D.y,E?Km(n.depths[T]):n.depths[T]],U),d.set([M,M,M],U)}),v++};o.forEach(([C,M,T])=>g([[T,!0],[M,!0],[C,!0]])),u.forEach(({u:C,v:M})=>{g([[C,!1],[C,!0],[M,!0]]),g([[C,!1],[M,!0],[M,!1]])});let m=new Float32Array(s.length),_=new Float32Array(s.length);s.forEach((C,M)=>{m[M]=C.x,_[M]=C.y});let y=[];p.forEach(C=>y.push(C));let x=u.map(({u:C,v:M})=>[C,M]),S=n.depths.map(C=>C+.006),b=new Float32Array(s.length*3);return s.forEach((C,M)=>{b[M*3]=C.x,b[M*3+1]=C.y,b[M*3+2]=n.depths[M]+.006}),{cloud:a,mesh:{pos:h,tint:d},edgeCore:Zr(m,_,y,t0,n.depths.map(C=>C+.006)),edgeHalo:Zr(m,_,y,n0,n.depths.map(C=>C+.006)),contourCore:Zr(m,_,x,.012,S),contourHalo:Zr(m,_,x,.048,S),nodes:b,triangles:f,frontTriangles:o.length,segmentCount:p.size}}function Zr(i,e,t,n,r){let s=(n||.03)/2,o=r??Qm,a=new Float32Array(t.length*18);return t.forEach(([l,c],u)=>{let f=typeof o=="number"?o:o[l],h=typeof o=="number"?o:o[c],d=i[c]-i[l],p=e[c]-e[l],v=Math.hypot(d,p)||1;d/=v,p/=v;let g=-p*s,m=d*s,_=d*s,y=p*s,x=i[l]-_,S=e[l]-y,b=i[c]+_,C=e[c]+y,M=[x+g,S+m,x-g,S-m,b-g,C-m,x+g,S+m,b-g,C-m,b+g,C+m];for(let T=0;T<6;T+=1)a[u*18+T*3]=M[T*2],a[u*18+T*3+1]=M[T*2+1],a[u*18+T*3+2]=[f,f,h,f,h,h][T]}),a}function bu(i,e){let t=Hn("zodiac-cloud:"+i),n=new Float32Array(e*3);for(let r=0;r<e;r+=1)if(t()<.28){let o=Nx(t),a=(t()-.5)*22,l=.35;n[r*3]=o[0]*a+Ym(t)*l,n[r*3+1]=o[1]*a*.6+Ym(t)*l,n[r*3+2]=o[2]*a+Ym(t)*l}else{let o=Nx(t),a=4.2+Math.pow(t(),.7)*12;n[r*3]=o[0]*a,n[r*3+1]=o[1]*a*.7,n[r*3+2]=o[2]*a}return n}function dd(i){let e=Hn("zodiac-seeds:"+i),t=new Float32Array(i);for(let n=0;n<i;n+=1)t[n]=e();return t}function r0(i){let e=Math.max(0,Number(i)||0),t=Math.floor(e/xu),n=e-t*xu;return n<yr?{index:(t%Tt+Tt)%Tt,state:"gather",t:n,cycle:t}:n<yr+Jm?{index:(t%Tt+Tt)%Tt,state:"hold",t:n-yr,cycle:t}:{index:(t%Tt+Tt)%Tt,state:"disperse",t:n-yr-Jm,cycle:t}}function s0(i){if(!i||!i.length)return 0;let e=0,t=Math.min(5,i.length);for(let n=0;n<t;n+=1)e+=Vn(Number(i[n])||0);return Vn(e/t)}function o0(i,e,t){return Vn(i,e||3,t||17)}var pd={low:2600,medium:4200,high:6e3},f2={low:1e3,medium:1700,high:2600},d2={low:28e3,medium:64e3,high:12e4},p2={low:70,medium:112,high:160},qs=36,xd=18,wu=xd+Math.max(...Na.map(i=>i.lines.length)),m2=[["#d96b66","#ffbaa2"],["#73b890","#b9f1c4"],["#ddb36d","#ffedb2"],["#a7bfd0","#e8efff"],["#e6ab51","#ffe49b"],["#a0bb76","#e1edac"],["#c794b9","#f6d0e7"],["#b76d94","#f5aecb"],["#9889d2","#d7c8ff"],["#66b3a6","#b0e9d3"],["#5da5cf","#b3e5fa"],["#8c87bf","#d6ccfa"]];function g2(i,e){let t=e/2,n=new Uint8Array(e*t*4),r=(u,f,h)=>{let d=(u%h+h)%h,p=Math.imul(d+193,374761393)^Math.imul(f+571,668265263);return p=Math.imul(p^p>>>13,1274126177),((p^p>>>16)>>>0)/4294967296},s=(u,f,h)=>{let d=Math.floor(u),p=Math.floor(f),v=u-d,g=f-p;v*=v*(3-2*v),g*=g*(3-2*g);let m=r(d,p,h),_=r(d+1,p,h),y=r(d,p+1,h),x=r(d+1,p+1,h);return(m+(_-m)*v)*(1-g)+(y+(x-y)*v)*g},o=(u,f,h)=>{let d=0,p=.5;for(let v=0;v<6;v++)d+=s(u*h,f*h,h)*p,h*=2,p*=.5;return d},a=Hn("zodiac-galactic-dust"),l=Math.hypot(.52,.84,.16);for(let u=0;u<t;u++){let f=(u+.5)/t,h=Math.sin(f*Math.PI),d=Math.cos(f*Math.PI);for(let p=0;p<e;p++){let v=(p+.5)/e,g=v*Math.PI*2,m=-Math.cos(g)*h,_=Math.sin(g)*h,y=o(v,f,12),x=o(v,f+.37,48),S=(.52*m+.84*d+.16*_)/l+.2,b=Math.exp(-Math.pow(S+(y-.5)*.24,2)*38),C=1-Math.pow(Vn((x-.3)/.36),1.3)*.94,M=b*(.25+y*.9)*C*(.68+a()*.64),T=b*Math.pow(x,3)*.11,E=(u*e+p)*4;n[E]=Math.round(255*(M*.125+T)),n[E+1]=Math.round(255*(M*.08+T*.83)),n[E+2]=Math.round(255*(M*.142+T*.95)),n[E+3]=255}}let c=new i.DataTexture(n,e,t);return c.wrapS=i.RepeatWrapping,c.magFilter=i.LinearFilter,c.minFilter=i.LinearMipmapLinearFilter,c.generateMipmaps=!0,c.needsUpdate=!0,c}var v2=["varying float vY;","varying vec2 vUv;","varying vec3 vNdc;","void main() {","  vY = normalize(position).y;","  vUv = vec2(uv.x,1.0-uv.y);","  vec4 pos = projectionMatrix * modelViewMatrix * vec4(position, 1.0);","  vNdc = pos.xyw;","  gl_Position = pos;","}"].join(`
`),x2=["precision mediump float;","uniform vec3 uTop;","uniform vec3 uMid;","uniform vec3 uBot;","uniform sampler2D uGalaxy;","uniform float uNeb;","uniform float uVignette;","varying float vY;","varying vec2 vUv;","varying vec3 vNdc;","void main() {","  float y = clamp(vY * 0.5 + 0.5, 0.0, 1.0);","  vec3 col = mix(uBot, uMid, smoothstep(0.0, 0.58, y));","  col = mix(col, uTop, smoothstep(0.46, 1.0, y));","  col += texture2D(uGalaxy,vUv).rgb*uNeb;","  vec2 ndc = vNdc.xy / max(1e-4, vNdc.z);","  col *= 1.0 - uVignette * smoothstep(0.28, 1.18, length(ndc * vec2(0.84, 1.0)));","  gl_FragColor = vec4(max(col, vec3(0.0)), 1.0);","}"].join(`
`);function _2(i,e){return new i.ShaderMaterial({uniforms:{uTop:{value:new i.Color(.006,.007,.011)},uMid:{value:new i.Color(.01,.011,.015)},uBot:{value:new i.Color(.003,.004,.006)},uGalaxy:{value:g2(i,e)},uNeb:{value:1},uVignette:{value:.3}},vertexShader:v2,fragmentShader:x2,side:i.BackSide,depthTest:!1,depthWrite:!1})}var y2=["attribute vec3 aEntry;","attribute vec3 aShape;","attribute vec3 aExit;","attribute float aShine;","attribute float aPhase;","attribute float aSeed;","uniform float uTime;","uniform float uPixelRatio;","uniform float uBoost;","uniform float uTwinkle;","uniform float uMotion;","uniform float uSpin;","uniform int uVariant;","uniform int uState;","uniform float uK;","varying float vAlpha;","varying float vShine;","varying float vCore;","varying vec2 vDirection;","varying float vStretch;","vec3 flight(float t) {","  t = clamp(t,0.0,1.0);","  float ease = uState == 2 ? t*t : 1.0-(1.0-t)*(1.0-t);","  vec3 origin = uState == 2 ? aShape : aEntry;","  vec3 target = uState == 2 ? aExit : aShape;","  vec3 p = mix(origin,target,ease);","  float arc = sin(t*3.14159265)*uMotion;","  float angle = aPhase+t*(7.0+aSeed*8.0)*uSpin;","  if(uVariant == 0) {","    p.xy += vec2(cos(angle),sin(angle))*arc*(1.2+aSeed*2.6);","    p.z += arc*sin(angle*0.7)*1.8;","  } else if(uVariant == 1) {","    p.xz += vec2(sin(angle),cos(angle))*arc*2.8;","    p.y += arc*(aSeed-0.5)*5.0;","  } else if(uVariant == 2) {","    p.x += arc*(aSeed-0.5)*7.0;","    p.y += sin(t*9.0+aPhase)*arc*1.2;","    p.z += arc*(aSeed*4.0-2.0);","  } else if(uVariant == 3) {","    p.xz += vec2(cos(angle),sin(angle))*arc*4.2;","    p.y += sin(angle*0.4)*arc*0.8;","  } else {","    vec3 direction = normalize(aShape+vec3(sin(aPhase),cos(aPhase),aSeed-0.5));","    p += direction*arc*(2.0+4.0*aSeed);","  }","  return p;","}","void main() {","  float stagger = (aSeed-0.5)*0.48;","  float k = clamp(uK*1.24+stagger,0.0,1.0);","  vec3 p;","  vec3 ahead;","  float arc = 0.0;","  if(uState == 1) {","    p = aShape;","    p += vec3(sin(uTime*0.72+aPhase),cos(uTime*0.49+aPhase*1.7),","              sin(uTime*0.55+aPhase*0.6))*0.028*uMotion;","    ahead = p;","    float wave = pow(max(0.0,sin(aShape.x*1.6-uTime*3.1+aSeed*0.8)),12.0);","    vAlpha = 0.448+wave*1.12*uMotion;","  } else {","    p = flight(k); ahead = flight(min(1.0,k+0.012));","    arc = sin(k*3.14159265);","    vAlpha = uState == 0 ? 0.24+smoothstep(0.0,0.78,k)*0.76 : 1.0-smoothstep(0.72,1.0,k);","  }","  vec4 mv = modelViewMatrix*vec4(p,1.0);","  vec4 clip = projectionMatrix*mv;","  vec4 next = projectionMatrix*modelViewMatrix*vec4(ahead,1.0);","  vec2 velocity = next.xy/max(0.001,abs(next.w))-clip.xy/max(0.001,abs(clip.w));","  vDirection = length(velocity)>0.00001 ? normalize(velocity) : vec2(1.0,0.0);","  vStretch = uState == 1 ? 1.0 : 1.0+(2.0+arc*5.0)*uMotion;","  float tw = 1.0+uTwinkle*sin(uTime*1.9+aPhase)*0.35;","  float boost = 1.0+(uBoost-1.0)*(0.55+aShine*0.45);","  float size = uState == 1 ? 0.34+aShine*0.95 : (0.35+aShine*0.65)*(1.0+arc*1.8*uMotion);","  gl_PointSize = clamp(size*tw*boost*(46.0/max(1.0,-mv.z))*uPixelRatio,0.6,34.0);","  vShine = aShine; vCore = clamp(aShine,0.0,1.0);","  gl_Position = clip;","}"].join(`
`),M2=["precision mediump float;","uniform vec3 uAccent;","uniform vec3 uBody;","uniform vec3 uRim;","uniform float uAccentMix;","varying float vAlpha;","varying float vShine;","varying float vCore;","varying vec2 vDirection;","varying float vStretch;","void main() {","  vec2 q = gl_PointCoord-vec2(0.5);","  vec2 dir = vec2(vDirection.x,-vDirection.y);","  float along = dot(q,dir);","  float across = dot(q,vec2(-dir.y,dir.x));","  float d = length(vec2(along,across*vStretch));","  float halo = exp(-d*d*22.0)*0.22;","  float core = exp(-d*d*240.0);","  float tail = mix(1.0,smoothstep(-0.5,0.15,along),clamp(vStretch-1.0,0.0,1.0));","  float a = min(1.0,halo+core)*vAlpha*(0.45+tail*0.25);","  vec3 base = mix(uBody,uRim,vCore);","  vec3 col = mix(base,uAccent,clamp((vShine-0.9)*1.2,0.0,uAccentMix));","  col += core*vCore*0.3;","  gl_FragColor = vec4(col,a);","}"].join(`
`),S2=["attribute float aSize;","attribute vec3 aColor;","attribute float aPhase;","attribute float aAlpha;","uniform float uTime;","uniform float uPixelRatio;","uniform float uSizeScale;","uniform float uAlpha;","uniform float uTwinkle;","uniform vec3 uTint;","varying vec3 vColor;","varying float vAlpha;","void main() {","  vColor = aColor*uTint;","  vec4 mv = modelViewMatrix * vec4(position, 1.0);","  float breath = sin(uTime*(0.34+0.12*sin(aPhase))+aPhase);","  float tw = 1.0-uTwinkle*0.24+uTwinkle*0.34*breath;","  gl_PointSize = clamp(aSize * uSizeScale * tw * (1.0 / max(1.0, -mv.z)) * uPixelRatio, 1.0, 512.0);","  vAlpha = aAlpha * tw * uAlpha;","  gl_Position = projectionMatrix * mv;","}"].join(`
`),b2=["precision mediump float;","varying vec3 vColor;","varying float vAlpha;","void main() {","  vec2 q = gl_PointCoord - vec2(0.5);","  float d = length(q);","  float halo = smoothstep(0.5, 0.0, d);","  float a = halo * halo * vAlpha;","  gl_FragColor = vec4(vColor, a);","}"].join(`
`),w2=["attribute float aSize;","attribute float aBright;","attribute float aPhase;","attribute float aRunner;","attribute vec3 aTarget;","uniform float uTime;","uniform float uPixelRatio;","uniform float uSizeScale;","uniform float uBrightness;","uniform float uTwinkle;","uniform float uFlow;","varying float vBright;","void main() {","  float runner = step(0.5,aRunner);","  float progress = fract((uTime-2.15)*0.2-(aRunner-1.0)*0.073);","  vec3 p = mix(position,aTarget,progress*runner);","  vec4 mv = modelViewMatrix * vec4(p, 1.0);","  float breath = sin(uTime*(0.42+0.09*sin(aPhase))+aPhase);","  float flare = pow(max(0.0,breath),8.0);","  float tw = 1.0+uTwinkle*(0.20*breath+0.10*flare);","  gl_PointSize = clamp(aSize * uSizeScale * tw * (1.0 / max(1.0, -mv.z)) * uPixelRatio, 1.0, 320.0);","  vBright = aBright*uBrightness*(1.0+uTwinkle*(0.27*sin(uTime*0.44+aPhase)+0.16*flare));","  vBright *= mix(1.0,uFlow*smoothstep(0.0,0.08,progress)*(1.0-smoothstep(0.92,1.0,progress)),runner);","  gl_Position = projectionMatrix * mv;","}"].join(`
`),T2=["precision highp float;","uniform vec3 uColor;","varying float vBright;","void main() {","  vec2 q = gl_PointCoord - vec2(0.5);","  float r = length(q);","  float ax = abs(q.x);","  float ay = abs(q.y);","  float core = exp(-r * r * 96.0);","  float sx = exp(-ax * ax * 1300.0 - ay * ay * 20.0);","  float sy = exp(-ay * ay * 1300.0 - ax * ax * 20.0);","  float halo = exp(-r * r * 13.0) * 0.32;","  float spike = sx + sy;","  float a = clamp((core + spike * 0.60 + halo) * vBright, 0.0, 1.0);","  vec3 col = mix(uColor, vec3(1.0), clamp(core * 1.3 + spike * 0.55, 0.0, 1.0));","  gl_FragColor = vec4(col * clamp(vBright, 0.0, 1.4), a);","}"].join(`
`);function E2(i){return new i.ShaderMaterial({uniforms:{uTime:{value:0},uPixelRatio:{value:1},uBoost:{value:1},uTwinkle:{value:1},uState:{value:0},uMotion:{value:1},uSpin:{value:1},uVariant:{value:0},uK:{value:0},uAccent:{value:new i.Color("#b9d3ff")},uBody:{value:new i.Color(1,1,1)},uRim:{value:new i.Color(1,1,1)},uAccentMix:{value:0}},vertexShader:y2,fragmentShader:M2,transparent:!0,depthWrite:!1,depthTest:!1,blending:i.AdditiveBlending})}function md(i){return new i.ShaderMaterial({uniforms:{uTime:{value:0},uPixelRatio:{value:1},uSizeScale:{value:1},uAlpha:{value:1},uTwinkle:{value:1},uTint:{value:new i.Color(1,1,1)}},vertexShader:S2,fragmentShader:b2,transparent:!0,depthWrite:!1,depthTest:!1,blending:i.AdditiveBlending})}function Hx(i,e){return new i.ShaderMaterial({uniforms:{uTime:{value:0},uPixelRatio:{value:1},uSizeScale:{value:1},uBrightness:{value:1},uTwinkle:{value:1},uFlow:{value:1},uColor:{value:new i.Color(e)}},vertexShader:w2,fragmentShader:T2,transparent:!0,depthWrite:!1,depthTest:!1,blending:i.AdditiveBlending})}function gd(i,e,t){let n=new i.BufferGeometry;return n.setAttribute("position",new i.BufferAttribute(e,3)),n.setAttribute("aColor",t.color),n.setAttribute("aSize",t.size),n.setAttribute("aPhase",t.phase),n.setAttribute("aAlpha",t.alpha),n}function vd(i,e,t,n,r){return{color:new i.BufferAttribute(e,3),size:new i.BufferAttribute(t,1),phase:new i.BufferAttribute(n,1),alpha:new i.BufferAttribute(r,1)}}function Wx(i,e,t,n,r){let s=new i.BufferGeometry;return s.setAttribute("position",new i.BufferAttribute(e,3)),s.setAttribute("aSize",new i.BufferAttribute(t,1)),s.setAttribute("aBright",new i.BufferAttribute(n,1)),s.setAttribute("aPhase",r),s.setAttribute("aRunner",new i.BufferAttribute(new Float32Array(t.length),1)),s.setAttribute("aTarget",new i.BufferAttribute(new Float32Array(e.length),3)),s}function Xx(i,e,t){let n=pd[t.quality]?t.quality:"high",r=pd[n],s=f2[n],o=d2[n],a=p2[n],l=n==="low",c=[];t.scope&&(c.push=(...ye)=>(ye.forEach(Ze=>t.scope.track(Ze)),Array.prototype.push.apply(c,ye)));let u=n;function f(ye){u=pd[ye]?ye:n,e.traverse(Ze=>{if(!Ze.isPoints||!Ze.geometry)return;let Qe=Ze.geometry.getAttribute("position").count;Ze.geometry.setDrawRange(0,Math.max(1,Math.floor(Qe*Math.min(1,pd[u]/r))))})}let h=new i.SphereGeometry(140,l?40:64,l?26:40),d=_2(i,l?512:n==="medium"?1024:2048),p=new i.Mesh(h,d);p.frustumCulled=!1,p.renderOrder=-1e3,e.add(p),c.push(h,d,d.uniforms.uGalaxy.value);let v=new i.Group;e.add(v);let g=new i.Vector3(.52,.84,.16).normalize(),m=new i.Vector3(.84,-.52,0).normalize(),_=new i.Vector3().crossVectors(g,m),y=new i.Matrix4().makeBasis(m,g,_),x=Hn("zodiac-field-3"),S=new Float32Array(o*3),b=new Float32Array(o*3),C=new Float32Array(o),M=new Float32Array(o),T=new Float32Array(o);for(let ye=0;ye<o;ye+=1){let Qe=x()<.64?(x()+x()+x()-1.5)*.23-.2:x()*2-1,lt=x()*Math.PI*2,mt=65+x()*35,dt=Math.sqrt(1-Qe*Qe);S[ye*3]=Math.cos(lt)*dt*mt,S[ye*3+1]=Qe*mt,S[ye*3+2]=Math.sin(lt)*dt*mt;let A=.62+x()*.38,z=x();b[ye*3]=A*(z>.9?1:z<.12?.8:.96),b[ye*3+1]=A*(z>.9?.88:.96),b[ye*3+2]=A*(z>.9?.7:1),C[ye]=.55+Math.pow(x(),5)*2.8,M[ye]=x()*Math.PI*2,T[ye]=.18+Math.pow(x(),1.8)*.72}let E=gd(i,S,vd(i,b,C,M,T));E.applyMatrix4(y);let I=md(i);I.uniforms.uSizeScale.value=96;let D=new i.Points(E,I);D.frustumCulled=!1,D.renderOrder=-900,v.add(D),c.push(E,I);let U=Hn("zodiac-nebula-3"),N=[[.26,.18,.29],[.29,.23,.25],[.19,.2,.27],[.26,.22,.29]],L=new Float32Array(qs*3),F=new Float32Array(qs*3),G=new Float32Array(qs),Q=new Float32Array(qs),q=new Float32Array(qs);for(let ye=0;ye<qs;ye+=1){let Ze=(U()+U()+U()-1.5)*.2-.2,Qe=U()*Math.PI*2,lt=30+U()*48,mt=Math.sqrt(1-Ze*Ze);L[ye*3]=Math.cos(Qe)*mt*lt,L[ye*3+1]=Ze*lt,L[ye*3+2]=Math.sin(Qe)*mt*lt;let dt=N[ye%N.length],A=.45+U()*.55;F[ye*3]=dt[0]*A,F[ye*3+1]=dt[1]*A,F[ye*3+2]=dt[2]*A,G[ye]=70+U()*150,Q[ye]=U()*Math.PI*2,q[ye]=.01+U()*.025}let Z=gd(i,L,vd(i,F,G,Q,q));Z.applyMatrix4(y);let K=md(i);K.uniforms.uSizeScale.value=120;let ee=new i.Points(Z,K);ee.frustumCulled=!1,ee.renderOrder=-890,v.add(ee),c.push(Z,K);let ne=Hn("zodiac-sparkle-3"),ze=new Float32Array(a*3),Ce=new Float32Array(a),Ve=new Float32Array(a),W=new Float32Array(a);for(let ye=0;ye<a;ye+=1){let Ze=ne()*2-1,Qe=ne()*Math.PI*2,lt=52+ne()*34,mt=Math.sqrt(1-Ze*Ze);ze[ye*3]=Math.cos(Qe)*mt*lt,ze[ye*3+1]=Ze*lt*.85,ze[ye*3+2]=Math.sin(Qe)*mt*lt,Ce[ye]=1.2+Math.pow(ne(),5)*4.8,Ve[ye]=.34+ne()*.66,W[ye]=ne()*Math.PI*2}let re=Wx(i,ze,Ce,Ve,new i.BufferAttribute(W,1)),we=Hx(i,"#f2f0eb");we.uniforms.uSizeScale.value=260;let ke=new i.Points(re,we);ke.frustumCulled=!1,ke.renderOrder=-880,v.add(ke),c.push(re,we);let Ee=new i.Group;e.add(Ee);let Be=new i.Group;Ee.add(Be);let ot=new i.Group;ot.add(new i.AmbientLight("#b4b4c5",.65));let oe=new i.DirectionalLight("#fff4e3",3.2);oe.position.set(-5,6,8),ot.add(oe);let pe=new i.DirectionalLight("#c4daf1",2.4);pe.position.set(4,1,-5),ot.add(pe);let Me=new i.DirectionalLight("#e0cadb",1.1);Me.position.set(5,-3,4),ot.add(Me),e.add(ot);let de=E2(i),_e=new i.MeshStandardMaterial({color:new i.Color("#ffffff"),emissive:new i.Color("#000000"),emissiveIntensity:.35,roughness:.42,metalness:.18,flatShading:!0,vertexColors:!0,transparent:!0,opacity:.005,side:i.DoubleSide,depthTest:!0,depthWrite:!1,toneMapped:!1}),ue=(ye,Ze)=>new i.MeshBasicMaterial({color:new i.Color(ye),transparent:!0,opacity:Ze,side:i.DoubleSide,depthTest:!1,depthWrite:!1,blending:i.AdditiveBlending,toneMapped:!1}),Pe=ue("#ffffff",.28),Te=ue("#ffffff",.075),Ge=md(i);Ge.uniforms.uSizeScale.value=52;let O=ue("#ffffff",.2),ct=ue("#ffffff",.9),et=md(i);et.uniforms.uSizeScale.value=120;let P=Hx(i,"#ffffff");P.uniforms.uSizeScale.value=300,c.push(de,_e,Pe,Te,Ge,O,ct,et,P);let w=new i.Color("#ffffff"),H=m2.map(([ye,Ze])=>{let Qe=new i.Color(ye),lt=new i.Color(Ze);return{body:Qe,glow:lt,emissive:Qe.clone().multiplyScalar(.18),edge:Qe.clone().lerp(w,.55),core:lt.clone().lerp(w,.82),particle:Qe.clone().lerp(lt,.2).convertLinearToSRGB(),particleRim:Qe.clone().lerp(lt,.55).convertLinearToSRGB(),haze:Qe.clone().lerp(lt,.35).convertLinearToSRGB(),node:lt.clone().lerp(w,.5).convertLinearToSRGB(),star:lt.clone().lerp(w,.3).convertLinearToSRGB()}}),$=dd(r),k=new Float32Array(r);for(let ye=0;ye<r;ye+=1)k[ye]=$[ye]*Math.PI*2;let ie=new i.BufferAttribute(k,1),se=new i.BufferAttribute($,1),V=(()=>{let ye=Hn("zodiac-haze-1"),Ze=new Float32Array(s*3),Qe=new Float32Array(s),lt=new Float32Array(s),mt=new Float32Array(s);for(let dt=0;dt<s;dt+=1){let A=.55+ye()*.45;Ze[dt*3]=Ze[dt*3+1]=Ze[dt*3+2]=A,Qe[dt]=.8+Math.pow(ye(),2.4)*2.4,lt[dt]=ye()*Math.PI*2,mt[dt]=.003+ye()*.008}return vd(i,Ze,Qe,lt,mt)})(),j=(()=>{let ye=Hn("zodiac-disc-1"),Ze=new Float32Array(wu);for(let Qe=0;Qe<wu;Qe+=1)Ze[Qe]=ye()*Math.PI*2;return new i.BufferAttribute(Ze,1)})(),ge=(()=>{let ye=Hn("zodiac-node-1"),Ze=new Float32Array(Zi*3),Qe=new Float32Array(Zi),lt=new Float32Array(Zi),mt=new Float32Array(Zi);for(let dt=0;dt<Zi;dt+=1){let A=.7+ye()*.3;Ze[dt*3]=Ze[dt*3+1]=Ze[dt*3+2]=A,Qe[dt]=.3+Math.pow(ye(),1.8)*.55,lt[dt]=ye()*Math.PI*2,mt[dt]=.25+ye()*.35}return vd(i,Ze,Qe,lt,mt)})(),Se=[],me=[],be=[],ae=[],fe=[],Ie=[],B=[],ve=[],te=[],Ae=[],Re=[];for(let ye=0;ye<Tt;ye+=1){let Ze=ud(ye,r),Qe=[bu(Rn[ye].id,r),bu(Rn[(ye+1)%Tt].id,r)],lt=fd(ye,s),mt=hd(ye);Re.push(lt),Ae.push(mt);let dt=new i.BufferGeometry;dt.setAttribute("position",new i.BufferAttribute(new Float32Array(r*3),3)),dt.setAttribute("aEntry",new i.BufferAttribute(Qe[0],3)),dt.setAttribute("aShape",new i.BufferAttribute(Ze.pos,3)),dt.setAttribute("aExit",new i.BufferAttribute(Qe[1],3)),dt.setAttribute("aShine",new i.BufferAttribute(Ze.shine,1)),dt.setAttribute("aPhase",ie),dt.setAttribute("aSeed",se),Se.push(dt),c.push(dt);let A=gd(i,lt.cloud,V);me.push(A),c.push(A);let z=new i.BufferGeometry;z.setAttribute("position",new i.BufferAttribute(lt.mesh.pos,3)),z.setAttribute("color",new i.BufferAttribute(lt.mesh.tint,3)),z.computeVertexNormals(),be.push(z),c.push(z);let J=new i.BufferGeometry;J.setAttribute("position",new i.BufferAttribute(lt.contourCore,3)),ae.push(J);let X=new i.BufferGeometry;X.setAttribute("position",new i.BufferAttribute(lt.contourHalo,3)),fe.push(X);let Y=gd(i,lt.nodes,ge);Ie.push(Y),c.push(J,X,Y);let Le=new i.BufferGeometry;Le.setAttribute("position",new i.BufferAttribute(mt.halo,3)),B.push(Le);let He=new i.BufferGeometry;He.setAttribute("position",new i.BufferAttribute(mt.core,3)),ve.push(He),c.push(Le,He);let De=new Float32Array(wu*3),qe=new Float32Array(wu),$e=new Float32Array(wu),ht=Math.min(mt.nodes,xd);for(let Fe=0;Fe<ht;Fe+=1)De[Fe*3]=mt.x[Fe],De[Fe*3+1]=mt.y[Fe],De[Fe*3+2]=mt.z[Fe],qe[Fe]=.55+mt.m[Fe]*1.75,$e[Fe]=.55+mt.m[Fe]*.85;let ut=Wx(i,De,qe,$e,j);Na[ye].lines.forEach(([Fe,yt],Gt)=>{let Et=xd+Gt;De.set([mt.x[Fe],mt.y[Fe],mt.z[Fe]],Et*3),ut.getAttribute("aTarget").array.set([mt.x[yt],mt.y[yt],mt.z[yt]],Et*3),ut.getAttribute("aRunner").array[Et]=Gt+1,qe[Et]=.6,$e[Et]=.7}),ut.setDrawRange(0,xd+mt.segments),te.push(ut),c.push(ut)}let ce=new i.Points(Se[0],de);ce.frustumCulled=!1,ce.renderOrder=-10,Ee.add(ce);let Ye=new i.Points(me[0],et);Ye.frustumCulled=!1,Ye.renderOrder=-100,Be.add(Ye);let We=new i.Mesh(be[0],_e);We.frustumCulled=!1,We.renderOrder=-90,Be.add(We);let _t=new i.Mesh(fe[0],Te),vt=new i.Mesh(ae[0],Pe),rn=new i.Points(Ie[0],Ge);_t.frustumCulled=!1,vt.frustumCulled=!1,rn.frustumCulled=!1,_t.renderOrder=-82,vt.renderOrder=-80,rn.renderOrder=-78,Be.add(_t),Be.add(vt),Be.add(rn);let sn=new i.Mesh(B[0],O),$s=new i.Mesh(ve[0],ct);sn.frustumCulled=!1,$s.frustumCulled=!1,sn.renderOrder=10,$s.renderOrder=11,Be.add(sn),Be.add($s);let Js=new i.Points(te[0],P);Js.frustumCulled=!1,Js.renderOrder=12,Be.add(Js);let $t=-1,Ks=0,Ba=!0,Wn=1;function Au(ye){let Ze=(ye%Tt+Tt)%Tt;if(Ze===$t)return Rn[Ze];$t=Ze;let Qe=H[Ze];return _e.color.copy(Qe.body),_e.emissive.copy(Qe.emissive),Pe.color.copy(Qe.edge),Te.color.copy(Qe.glow),ct.color.copy(Qe.core),O.color.copy(Qe.glow),de.uniforms.uBody.value.copy(Qe.particle),de.uniforms.uRim.value.copy(Qe.particleRim),et.uniforms.uTint.value.copy(Qe.haze),Ge.uniforms.uTint.value.copy(Qe.node),P.uniforms.uColor.value.copy(Qe.star),ce.geometry=Se[Ze],Ye.geometry=me[Ze],We.geometry=be[Ze],_t.geometry=fe[Ze],vt.geometry=ae[Ze],rn.geometry=Ie[Ze],sn.geometry=B[Ze],$s.geometry=ve[Ze],Js.geometry=te[Ze],f(u),Rn[Ze]}function $i(ye){de.uniforms.uPixelRatio.value=ye,[I,K,et,Ge].forEach(Ze=>{Ze.uniforms.uPixelRatio.value=ye}),we.uniforms.uPixelRatio.value=ye,P.uniforms.uPixelRatio.value=ye}function Oa(ye){!ye||!ye.accent||(de.uniforms.uAccent.value.set(ye.accent).convertLinearToSRGB(),de.uniforms.uAccentMix.value=.1)}function za(ye){let Ze=Vn(ye);return Ze*Ze*(3-2*Ze)}function Cu(ye,Ze){return ye==="gather"?za((Ze-.42)/.5):ye==="disperse"?1-za(Ze/.62):1}function Qs(ye,Ze){let Qe=Ze||{};Ks=Qe.cycle||0;let lt=!!Qe.reduced,mt=Qe.state||"hold",dt=Qe.k||0,A=Qe.bass||0,z=Qe.onset||0;de.uniforms.uTime.value=ye,de.uniforms.uBoost.value=1+A*.6+z*.8,de.uniforms.uTwinkle.value=lt?.15:1,de.uniforms.uState.value=mt==="gather"?0:mt==="disperse"?2:1,de.uniforms.uK.value=dt;let J=Su(Qe.cycle||0);de.uniforms.uVariant.value=mt==="disperse"?J.disperse:J.gather,de.uniforms.uSpin.value=J.direction,de.uniforms.uMotion.value=lt?.12:1;let X=lt?.2:1;I.uniforms.uTime.value=ye,I.uniforms.uTwinkle.value=X,K.uniforms.uTime.value=ye,K.uniforms.uTwinkle.value=X*.35,we.uniforms.uTime.value=ye,we.uniforms.uTwinkle.value=X,we.uniforms.uBrightness.value=.82+z*.3;let Y=lt?.04:.27;Ee.rotation.y=Math.sin(ye*.3)*Y+Math.sin(ye*.085+1.3)*Y*.34,Ee.rotation.x=Math.sin(ye*.19)*(lt?0:.11);let Le=1+z*.02+A*.012;Ee.scale.setScalar(mt==="gather"?Le*(.92+dt*.08):Le),Wn=Cu(mt,dt),et.uniforms.uAlpha.value=Wn,et.uniforms.uTime.value=ye,_e.opacity=.005*Wn,Pe.opacity=.28*Wn,Te.opacity=(.075+A*.035)*Wn,Ge.uniforms.uAlpha.value=Wn*.045,Ge.uniforms.uTime.value=ye,Ge.uniforms.uTwinkle.value=lt?.25:1,ct.opacity=(.9+A*.06)*Wn,O.opacity=(.2+A*.16)*Wn,P.uniforms.uBrightness.value=Wn*(1+z*.35),P.uniforms.uTime.value=ye,P.uniforms.uTwinkle.value=lt?.25:1,P.uniforms.uFlow.value=lt?.2:1,Be.visible=Wn>.002,v.rotation.y=ye*(lt?0:.0022),v.position.copy(Qe.cameraPos||{x:0,y:0,z:0}),p.rotation.y=v.rotation.y,p.position.copy(v.position)}function ka(ye){Ba=!!ye,v.visible=Ba}function js(){return{signIndex:$t<0?0:$t,sign:$t<0?null:Rn[$t].id,signCn:$t<0?null:Rn[$t].cn,signEn:$t<0?null:Rn[$t].en,particleCount:r,fieldPoints:o+qs+a,fieldVisible:Ba,figureTriangles:$t<0?0:Re[$t].triangles,figureEdges:$t<0?0:Re[$t].segmentCount,figurePoints:s,figureMeshPoints:Zi,constellationNodes:$t<0?0:Ae[$t].nodes,constellationSegments:$t<0?0:Ae[$t].segments,figureAlpha:Math.round(Wn*1e3)/1e3,sky:!0,layers:13,transition:{...Su(Ks)}}}function Ru(){t.scope||c.forEach(ye=>{ye.dispose()}),e.remove(Ee),e.remove(v),e.remove(p),e.remove(ot)}return ka(!0),{setSign:Au,update:Qs,dispose:Ru,stats:js,setPalette:Oa,setPixelRatio:$i,setFieldVisible:ka,setQuality:f}}var A2={low:{prCap:1,budget:19e5},medium:{prCap:1.15,budget:36e5},high:{prCap:1.55,budget:62e5}},a0=24;var C2="#030405",qx=1.3,Tu=52,R2=2.6,P2=18,I2=.42,Zx=2.4;function _d(i){let e=Math.tan(Tu*Math.PI/180/2),t=i>.01?i:Xs;return Math.max(La*qx/e,Mu*qx/(e*t))}function $x(i){return Vn(i.distFit*i.zoom,R2,Math.max(P2,i.distFit*Zx))}var Yx=.75,L2=.035;function D2(i,e={},t=null){let n=A2[e.quality]?e.quality:"high",r=t&&t.renderer;try{r||(r=new gr({canvas:i,antialias:!0,powerPreference:"high-performance"}))}catch{return!1}if(!r.getContext())return!1;r.outputColorSpace=Qt,r.toneMapping=gn,r.info.autoReset=!1;let s=t?t.scene:new ei;s.background=new xe(C2);let o=t?t.camera:new Nt(Tu,1,.1,400);Object.assign(o,{fov:Tu,near:.1,far:400}),o.position.set(0,0,_d(Xs));let a=o.clone(),l={field:!0,interactive:e.interactive!==!1,glow:1,speed:1,reduced:!!e.reduced,palette:e.palette||{}},c=Xx(ri,s,{quality:t?"high":n,scope:t&&t.scope});t&&t.scope.defer(()=>c.dispose()),c.setPalette(l.palette);let u={raw:null,onset:!1,bins:new Float32Array(a0),target:new Float32Array(a0),bass:0,onsetLevel:0},f={drift:0,yaw:0,pitch:.06,zoom:1,distFit:_d(Xs),dist:_d(Xs),dragging:!1,fov:Tu};function h(){f.dist=$x(f)}function d(S){if(l.interactive){f.dragging=!0;try{i.setPointerCapture(S.pointerId)}catch{}}}function p(S){!l.interactive||!f.dragging||!(S.buttons&1)||(f.yaw-=S.movementX*.008,f.pitch=Vn(f.pitch+S.movementY*.006,-Yx,Yx))}function v(){f.dragging=!1}function g(S){l.interactive&&(S.preventDefault(),f.zoom=o0(f.zoom*(1+S.deltaY*.001),I2,Zx),h())}function m(){l.interactive&&(f.yaw=0,f.pitch=.06,f.zoom=1,h())}function _(){i.addEventListener("pointerdown",d),i.addEventListener("pointermove",p),window.addEventListener("pointerup",v),i.addEventListener("wheel",g,{passive:!1}),i.addEventListener("dblclick",m),i.style.touchAction=l.interactive?"none":""}function y(){i.removeEventListener("pointerdown",d),i.removeEventListener("pointermove",p),window.removeEventListener("pointerup",v),i.removeEventListener("wheel",g),i.removeEventListener("dblclick",m),i.style.touchAction=""}return{canvas:i,renderer:r,scene:s,camera:o,cameraTarget:a,control:null,world:c,quality:n,prefs:l,audio:u,rig:f,raf:0,lastFrame:0,lastRender:0,lastTime:-1,time:0,sceneTime:0,playing:!1,dirty:!0,width:0,height:0,pr:1,timeline:{index:-1,state:"gather",t:0},warmed:!!t,bindInput:_,unbindInput:y}}function N2(i){let e=i.timeline.index>=0?i.timeline.index:0;for(let t=0;t<Tt;t+=1)i.world.setSign(t),i.renderer.render(i.scene,i.camera);i.world.setSign(e),i.renderer.info.reset()}function F2(i,e,t){let n=t===void 0?i.lastFrame?Math.min((e-i.lastFrame)/1e3,i.playing?.1:.25):.016:t;i.lastFrame=e;let r=i.prefs,s=i.time,o=i.lastTime<0||Math.abs(s-i.lastTime)>.5;i.lastTime=s,!i.warmed&&i.width>0&&(i.warmed=!0,N2(i));let a=Hm(i.playing?i.audio.raw:null,a0,i.audio.target);o?i.audio.bins.set(a):Cx(i.audio.bins,a,n);let l=s0(i.audio.bins);o||!i.playing?i.audio.bass=o?l:Ra(i.audio.bass,0,.3,n):i.audio.bass=Ra(i.audio.bass,l,.1,n);let c=i.playing&&i.audio.onset?1:0;i.audio.onsetLevel=o?c:Ra(i.audio.onsetLevel||0,c,c?.05:.22,n),(!r.reduced||o)&&(i.sceneTime=s);let u=r0(i.sceneTime);i.timeline=u,i.world.setSign(u.index);let f=u.state==="gather"?Vn(u.t/yr):u.state==="disperse"?Vn(u.t/yu):1,h=i.rig,d=i.camera,p=!1;if(i.control){let v=i.cameraTarget,g=i.control.external?1:1-Math.exp(-n/.26);d.position.lerp(v.position,g),d.quaternion.slerp(v.quaternion,g),d.fov+=(v.fov-d.fov)*g,d.updateProjectionMatrix(),p=d.position.distanceToSquared(v.position)>1e-8||d.quaternion.angleTo(v.quaternion)>1e-4||Math.abs(d.fov-v.fov)>1e-4}else{h.drift+=n*L2*(r.reduced?.3:1)*r.speed+n*i.audio.bass*.04*(r.reduced?.3:1);let v=h.drift+h.yaw,g=Math.cos(h.pitch);d.position.set(Math.sin(v)*g*h.dist,Math.sin(h.pitch)*h.dist,Math.cos(v)*g*h.dist),d.lookAt(0,0,0);let m=Tu+i.audio.bass*1.6;h.fov=o?m:Ra(h.fov,m,.32,n),Math.abs(d.fov-h.fov)>.001&&(d.fov=h.fov,d.updateProjectionMatrix())}i.world.update(i.sceneTime,{bass:i.audio.bass,onset:i.audio.onsetLevel,cycle:u.cycle,reduced:r.reduced,glow:r.glow,dt:n,state:u.state,k:f,cameraPos:d.position}),i.dirty=p,i.lastRender=e}function Jx(i){let e=D2(i.renderer.domElement,{quality:i.quality.mode,interactive:!1},i);if(!e)throw new Error("Zodiac world initialization failed");let t=!!i.params.reduced;return{update(n){e.prefs.reduced=t||!!n.reduced;let r=e.prefs.reduced||n.playing===!1;r||(e.time=Number(n.sceneTime??n.time)||0),e.playing=!!n.playing,e.audio.raw=n.bands||null,e.audio.onset=!r&&!!n.onset;let s=r?0:Math.max(0,Math.min(n.dynamicDt??n.dt??.016,.1));F2(e,Number(n.now)||0,s),e.prefs.sign>=0&&(e.world.setSign(e.prefs.sign),e.world.update(e.sceneTime,{bass:e.audio.bass,onset:e.audio.onsetLevel,cycle:0,reduced:e.prefs.reduced,glow:e.prefs.glow,dt:s,state:"hold",k:1,cameraPos:e.camera.position}))},resize(n,r){e.width=n,e.height=r,e.camera.aspect=n/r,e.camera.updateProjectionMatrix(),e.rig.distFit=_d(n/r),e.rig.dist=$x(e.rig),e.world.setPixelRatio(e.renderer.getPixelRatio())},setParams(n){e.prefs.glow=n.glow,e.prefs.speed=n.speed,t=!!n.reduced,e.prefs.reduced=t,e.prefs.sign=n.sign==="cycle"?-1:Rn.findIndex(r=>r.id===n.sign),e.world.setFieldVisible(n.field)},setQuality(n){e.world.setQuality(n.mode),e.world.setPixelRatio(e.renderer.getPixelRatio())},setRig(n){if(e.control=n,!n)return;let r=e.cameraTarget;if(n.position)r.position.fromArray(n.position),r.rotation.set(n.pitch,n.yaw,n.roll||0,"YXZ");else{let s=Math.cos(n.pitch);r.position.set(n.tx+Math.sin(n.yaw)*s*n.dist,n.ty+Math.sin(n.pitch)*n.dist,n.tz+Math.cos(n.yaw)*s*n.dist),r.lookAt(n.tx,n.ty,n.tz),r.rotateZ(n.roll||0)}r.fov=n.fov},dispose(){}}}var yd={ZODIAC:Rn,SIGN_COUNT:Tt,GATHER_SECONDS:yr,HOLD_SECONDS:xu-yr-yu,DISPERSE_SECONDS:yu,CYCLE_SECONDS:xu,buildShape:ud,buildCloud:bu,buildSeeds:dd,timelineAt:r0,transitionStyle:Su,aggregateBands:Hm,viewBass:s0,zoomClamp:o0,CONSTELLATION:Na,buildFigureMesh:fd,buildConstellation:hd,buildRibbon:Zr,delaunay2:Vx,shapeFit:Da,FIG_HALF:La,FIG_HALF_W:Mu,FIG_ASPECT:Xs,FIGURE_DEPTH:cd,SHAPE_BOX:Bx,SHAPE_BOX_V:Ox,SHAPE_BOX_Z:zx,CONSTELLATION_Z:Qm,FIGURE_Z:_u,FIGURE_MESH_POINTS:Zi,LINE_CORE_WIDTH:jm,LINE_HALO_WIDTH:e0,EDGE_CORE_WIDTH:t0,EDGE_HALO_WIDTH:n0};var U2={"sans-serif":'"Segoe UI", "Microsoft YaHei", "PingFang SC", sans-serif',serif:'"Noto Serif CJK SC", "Songti SC", SimSun, serif'},Kx=new Intl.Segmenter(void 0,{granularity:"grapheme"});function Qx(i,e,t="sans-serif",n=1792){let r=String(e||"").slice(0,120).replace(/[\uD800-\uDBFF]$/,""),s=64,o=n<1792?6:4,a=112,l;do{i.font="600 "+a+"px "+(U2[t]||t),l=[];let h=0,d=0,p=-1;for(let{segment:v,index:g}of Kx.segment(r))i.measureText(r.slice(h,g+v.length)).width>n&&g>h&&(d=p>h?p:g,l.push({start:h,end:d}),h=d,p=-1),/\s/.test(v)&&(p=g+v.length);if((h<r.length||!l.length)&&l.push({start:h,end:r.length}),l.length<=o||a<=32)break;a-=8}while(!0);let c=Math.ceil(a*1.42),u=c*l.length+s*2,f=Math.min(2048,Math.max(256,Math.ceil(Math.max(...l.map(h=>i.measureText(r.slice(h.start,h.end)).width))+s*2)));return l.forEach((h,d)=>{h.width=i.measureText(r.slice(h.start,h.end)).width,h.left=(f-h.width)/(2*f),h.right=1-h.left,h.baseline=s+c*(d+.5),h.bottom=1-(s+c*(d+1))/u,h.top=1-(s+c*d)/u,h.advances=new Float32Array(h.end-h.start+1);for(let{segment:p,index:v}of Kx.segment(r.slice(h.start,h.end))){let g=i.measureText(r.slice(h.start,h.start+v)).width,m=i.measureText(r.slice(h.start,h.start+v+p.length)).width;for(let _=0;_<=p.length;_++)h.advances[v+_]=h.left+(g+(m-g)*_/p.length)/f}}),{text:r,width:f,height:u,padding:s,fontSize:a,font:i.font,rows:l}}function jx(i,e,t,n){let r=Math.max(0,Math.min(1,Number(n)||0))*i.text.length;if(e?.tokens?.length){r=0;let s=0;for(let o=0;o<Math.min(120,e.tokens.length);o++){let a=e.tokens[o],l=String(a.text||""),c=i.text.indexOf(l,s);if(c<0||!l)continue;let u=Number(a.start)||0,f=Math.max(u+.01,Number(a.end)||u+.1);if(t<u)break;let h=Math.max(0,Math.min(1,(t-u)/(f-u)));if(r=c+l.length*h,s=c+l.length,h<1)break;o===e.tokens.length-1&&(r=i.text.length)}}return i.rows.map(s=>{if(r<=s.start)return s.left-.02;if(r>=s.end)return s.right+.02;let o=r-s.start,a=Math.floor(o);return s.advances[a]+(s.advances[a+1]-s.advances[a])*(o-a)})}function xi(i,e,t=n=>n){let n=!1,r=null,s=!1,o=new Map,a=new Map,l=[];function c(v,g){if(typeof document>"u")return null;let m=document.createElement("canvas");return m.width=v,m.height=g,m}function u(v,g,m){if(m.refs>0)return;let _=l.indexOf(m);_>=0&&l.splice(_,1),m.cancel?.(),m.texture?.dispose(),v.delete(g)}function f(v,g){for(let[m,_]of v){if(v.size<=g)break;u(v,m,_)}}function h(v,g){let m=v.get(g);m&&(m.refs=Math.max(0,m.refs-1),m.refs||u(v,g,m))}return{text:{acquire(v,g="sans-serif",m=1792){let _=String(v||"").slice(0,120).replace(/[\uD800-\uDBFF]$/,""),y=g+":"+m+":"+_,x=o.get(y);return!x&&o.size<7&&(x={key:y,line:_,font:g,maxWidth:m,refs:0,texture:null,aspect:8},o.set(y,x),l.push(x)),x?(x.refs++,x):null},release(v){v&&h(o,v.key)}},cover:{acquire(v,g){if(!v||n||g?.aborted)return null;let m=String(v),_=a.get(m);if(!_&&a.size<12&&(_={key:m,refs:0,texture:null,failed:!1},a.set(m,_),typeof Image<"u")){let y=new Image;y.crossOrigin="anonymous",y.decoding="async";let x=!1,S=()=>{x||n||g?.aborted||!_.refs||(_.failed=!0,e?.())};_.cancel=()=>{x=!0,y.onload=y.onerror=null,y.src=""},y.onload=()=>{if(x||n||g?.aborted||!_.refs)return;let b=c(768,768),C=b?.getContext("2d");if(!C){S();return}try{let M=Math.min(y.naturalWidth,y.naturalHeight);C.drawImage(y,(y.naturalWidth-M)/2,(y.naturalHeight-M)/2,M,M,0,0,768,768),_.texture=new i.CanvasTexture(b),_.texture.colorSpace=i.SRGBColorSpace,_.texture.userData.spaceShared=!0,_.texture.minFilter=i.LinearMipmapLinearFilter,e?.()}catch{S()}},y.onerror=S,Promise.resolve().then(()=>t(m)).then(b=>{x||n||g?.aborted||!_.refs||(b?y.src=b:S())}).catch(S)}return _?(_.refs++,_):null},release(v){v&&h(a,v.key)}},beginFrame(v){if(!n&&(r!==v&&(r=v,s=!1),!s)){for(;l.length;){let g=l.shift();if(!g.refs||!o.has(g.key))continue;let m=c(1,1),_=m?.getContext("2d");if(!_)break;let y=Qx(_,g.line,g.font,g.maxWidth);m.width=y.width,m.height=y.height,_.font=y.font,g.layout=y,g.aspect=y.width/y.height,g.start=y.rows[0].left,g.end=y.rows[0].right,_.textAlign="center",_.textBaseline="middle",_.fillStyle="#ffffff",y.rows.forEach(x=>_.fillText(g.line.slice(x.start,x.end),y.width/2,x.baseline)),g.texture=new i.CanvasTexture(m),g.texture.generateMipmaps=!1,g.texture.userData.spaceShared=!0,g.texture.minFilter=i.LinearFilter,s=!0;break}f(o,7),f(a,12),l.length&&e?.()}},stats(){return{textTextures:o.size,coverTextures:a.size,queued:l.length,bytes:[...o.values()].reduce((v,g)=>v+(g.layout?g.layout.width*g.layout.height*4:0),0)+a.size*768*768*4*4/3}},dispose(){if(!n){n=!0;for(let v of[o,a]){for(let g of v.values())g.refs=0,g.cancel?.(),g.texture?.dispose();v.clear()}l.length=0}}}}function Md(i,e,{surface:t=!1,depth:n=0,radius:r=1.25}={}){let s=i.THREE,o=new s.Raycaster,a=new s.Vector2,l=new s.Plane,c=new s.Vector3,u=new s.Vector3,f=new s.Vector3,h=new s.Matrix4,d={uPointer:{value:new s.Vector3},uPointerNormal:{value:new s.Vector3(0,0,1)},uPointerAmount:{value:0},uPointerRadius:{value:r}},p=null,v=!1;return{uniforms:d,update(g,m=1){let _=Number.isFinite(g.now)?g.now:0,y=p===null?1/60:Math.max(0,Math.min(.05,(_-p)/1e3));if(p=_,g.reduced){d.uPointerAmount.value=0,v=!1;return}let x=g.pointer,S=!1;x?.active&&Number.isFinite(x.x)&&Number.isFinite(x.y)&&(e.updateWorldMatrix(!0,!1),i.camera.updateMatrixWorld(),h.copy(e.matrixWorld).invert(),t?u.set(0,0,1).transformDirection(e.matrixWorld):i.camera.getWorldDirection(u).negate(),c.set(0,0,n).applyMatrix4(e.matrixWorld),l.setFromNormalAndCoplanarPoint(u,c),a.set(x.x,x.y),o.setFromCamera(a,i.camera),Math.abs(o.ray.direction.dot(u))>.15&&o.ray.intersectPlane(l,f)&&(f.applyMatrix4(h),S=!t||Math.abs(f.x)<4.5&&Math.abs(f.y)<4.5,S&&(v?d.uPointer.value.lerp(f,1-Math.exp(-32*y)):d.uPointer.value.copy(f),d.uPointerNormal.value.copy(u).transformDirection(h)))),v=S;let b=S?m:0;d.uPointerAmount.value+=(b-d.uPointerAmount.value)*(1-Math.exp(-14*y)),Math.abs(b-d.uPointerAmount.value)<2e-4&&(d.uPointerAmount.value=b)}}}var Sd=`
uniform vec3 uPointer,uPointerNormal;
uniform float uPointerAmount,uPointerRadius;
vec3 indentParticle(vec3 p){
 vec3 delta=p-uPointer;
 float depth=dot(delta,uPointerNormal);
 vec3 tangent=delta-uPointerNormal*depth;
 float distance=length(tangent)/uPointerRadius;
 float bowl=exp(-distance*distance*3.5)*uPointerAmount*exp(-abs(depth)*.24);
 float shoulder=exp(-pow((distance-.95)*5.0,2.0))*uPointerAmount*.09;
 return p-uPointerNormal*(bowl*.9-shoulder)-tangent*bowl*.075;
}`,bd=`
float particleHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
float particleNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);
 return mix(mix(mix(particleHash(i),particleHash(i+vec3(1,0,0)),f.x),mix(particleHash(i+vec3(0,1,0)),particleHash(i+vec3(1,1,0)),f.x),f.y),
 mix(mix(particleHash(i+vec3(0,0,1)),particleHash(i+vec3(1,0,1)),f.x),mix(particleHash(i+vec3(0,1,1)),particleHash(i+vec3(1,1,1)),f.x),f.y),f.z)*2.0-1.0;}
`;var Fa=Math.PI*2,B2=Object.freeze({bass:0,mid:0,treble:0}),O2=new Float32Array(16);function wd(i,e,t=!1){let n=e||i.reduced,r=e?0:i.sceneTime??i.time??0;return{...i,sceneTime:r,reduced:!!n,dt:i.dynamicDt??(i.playing===!1||n?0:i.dt),...t?{}:{time:r},...n?{level:0,bands:B2,spectrum:O2,onset:0}:{}}}var li=(i,e=0)=>{let t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)},xt=(i,e,t,n,r=.05)=>({type:"number",label:i,default:e,min:t,max:n,step:r}),z2={auto:"\u81EA\u52A8",verse:"\u4E3B\u6B4C",chorus:"\u526F\u6B4C",bridge:"\u8FC7\u6E21",venue:"\u7B2C\u4E00\u73B0\u573A",diorama:"\u7EB8\u96D5\u5267\u573A",tempo:"\u8282\u62CD\u5F8B\u52A8",still:"\u9759\u5E27",duo:"\u53CC\u8272",mono:"\u5355\u8272",vivid:"\u6D53\u5F69","split-duo":"\u53CC\u8272\u5206\u5272","quad-grid":"\u56DB\u683C\u6784\u56FE","diagonal-cut":"\u659C\u5207\u6784\u56FE",triptych:"\u4E09\u8054\u6784\u56FE",banded:"\u6A2A\u5411\u8272\u5E26","poster-frame":"\u6D77\u62A5\u8FB9\u6846","fan-burst":"\u653E\u5C04\u6784\u56FE",shutters:"\u767E\u53F6\u6784\u56FE","offset-collage":"\u9519\u4F4D\u62FC\u8D34","editorial-column":"\u793E\u8BBA\u680F","type-impact":"\u6587\u5B57\u51B2\u51FB","fragment-collage":"\u788E\u7247\u62FC\u8D34","tracking-ribbon":"\u8FFD\u8E2A\u5149\u5E26","mask-reveal":"\u906E\u7F69\u63ED\u793A","poster-blocks":"\u6D77\u62A5\u8272\u5757","quiet-tableau":"\u9759\u50CF",orbital:"\u73AF\u7ED5",constellation:"\u661F\u7FA4",perspective:"\u900F\u89C6\u8D70\u5ECA","wave-score":"\u58F0\u6CE2\u8C31\u9762",orrery:"\u661F\u8F68\u4EEA","editorial-lattice":"\u683C\u6805\u8C31\u9762"},$r=(i,e,t)=>({type:"select",label:i,default:e,options:t.map(n=>typeof n=="string"?{value:n,label:z2[n]||n}:n)}),Ua={speed:xt("\u8FD0\u52A8\u901F\u5EA6",.6,0,2),reactivity:xt("\u5F8B\u52A8\u5F3A\u5EA6",.7,0,2),scale:xt("\u7A7A\u95F4\u5C3A\u5EA6",1,.5,2),density:xt("\u7C92\u5B50\u5BC6\u5EA6",1,.2,1),director:{type:"boolean",label:"\u81EA\u52A8\u5BFC\u6F14",default:!1},cue:$r("\u6BB5\u843D\u7F16\u6392","auto",["auto","verse","chorus","bridge"]),dust:xt("\u7A7A\u95F4\u5149\u5C18",0,0,1),discRing:{type:"boolean",label:"\u73AF\u7ED5\u9891\u8C31",default:!1},ripples:xt("\u8282\u62CD\u6D9F\u6F2A",0,0,1)};function at(i,e){return i.scope.track(e),e}function Pn(i){let e=new i.THREE.Group;return i.scene.add(e),i.scope.defer(()=>e.removeFromParent()),e}function Ot(i,e){let t=i.bands?.[e]??(e==="bass"?i.level:0);return Math.min(1,Math.max(0,Number(t)||0))}function Li(i){return Math.max(.1,Math.min(1,i?.density??{low:.4,medium:.7,high:1}[i?.mode]??.7))}function e_(i,e){let t=e.spectrum||e.bands?.spectrum;for(let n=0;n<i.length;n++){let r=t?.[Math.floor(n/i.length*t.length)];i[n]=r===void 0?Ot(e,n<5?"bass":n<11?"mid":"treble"):Math.max(0,Math.min(1,r>1?r/255:Number(r)||0))}}function In(i,e,t,n={}){let r=!1;return{group:i,update(s){r||n.update?.(s,e)},resize(s,o){n.resize?.(s,o)},setParams(s){e={...e,...s},n.params?.(e)},setQuality(s){t=s,n.quality?.(t)},dispose(){r||(r=!0,n.dispose?.(),i.removeFromParent())},stats:()=>n.stats?.()||{}}}var k2=`
attribute float aSeed; attribute vec2 aCover;
uniform float uTime,uBass,uMid,uTreble,uMotion,uResponse,uSize,uMode,uPixel,uHeight,uRefined;
uniform float uBands[16];
varying vec3 vColor; varying vec2 vCover;varying float vAlpha,vGlow;
${bd}
${Sd}
float noise(vec3 p){return particleNoise(p);}
mat2 turn(float a){return mat2(cos(a),-sin(a),sin(a),cos(a));}
void main(){
 vec3 p=position;float t=uTime*uMotion,a=aCover.x*6.2831853,b=aCover.y;
 float band=uBands[int(clamp(floor(aCover.x*16.0),0.0,15.0))],drive=band*uResponse;
 vColor=color;vCover=aCover;vAlpha=.72;vGlow=.2;
 if(uMode<.5||uMode>8.5){
  float y=1.0-2.0*b;vec3 n=vec3(cos(a)*sqrt(max(0.0,1.0-y*y)),y,sin(a)*sqrt(max(0.0,1.0-y*y)));
  float detail=noise(n*3.2+vec3(0,t*.3,t*.18));
  float r=3.2+uBass*uResponse*.22+detail*(.08+uTreble*uResponse*.28);
  if(uMode>8.5)r+=drive*(.3+pow(.5+.5*sin(a*32.0),6.0)*1.4);
  p=n*r;p.xz=turn(t*.15)*p.xz;
  float contour=pow(.5+.5*sin(n.y*42.0+detail*2.0+t*.24),7.0);
  vAlpha=.22+.62*contour;vGlow=contour*.3+drive*.25;
 }else if(uMode<1.5){
  float arm=floor(aCover.x*4.0),r=pow(b,.68)*10.0;
  float spread=(fract(aCover.x*4.0)-.5)*(.12+b*.5);
  float angle=arm*1.5707963+r*.62+t*.045+spread;
  float lane=exp(-pow(spread/(.07+b*.19),2.0));
  p=vec3(cos(angle)*r,(aSeed-.5)*(.24+(1.0-b)*.65)+sin(r*.7-t*.25)*.09,sin(angle)*r);
  p.y+=drive*sin(r*1.2-t)*.14;
  vAlpha=(.16+lane*.62)*(1.0-smoothstep(.78,1.0,b));vGlow=pow(1.0-b,5.0)*.45+drive*.18;
 }else if(uMode<2.5){
  float layer=floor(b*6.0),local=fract(b*6.0),flow=aCover.x*24.0-12.0;
  float phase=flow*.26+layer*.8+t*.08;
  p=vec3(flow,sin(phase)*2.0+(layer-2.5)*.72+(local-.5)*1.2,-3.0-layer*2.1+cos(phase)*2.0);
  p.y+=noise(vec3(flow*.25,layer,t*.12))*.65+drive*.25;
  float ridge=exp(-pow((local-.48)/.2,2.0));vAlpha=.08+ridge*.72;vGlow=ridge*.5;
 }else if(uMode<3.5){
  float flow=fract(b+t*.045),z=5.0-flow*52.0,spin=a+t*.1+sin(flow*6.0+t*.12)*.045;
  float radius=4.1-uBass*uResponse*.22+sin(a*5.0+z*.35-t*.5)*(.07+uMid*uResponse*.14);
  p=vec3(cos(spin)*radius,sin(spin)*radius,z);
  float ring=pow(.5+.5*cos(flow*150.796),18.0);
  float seam=pow(.5+.5*cos(a*24.0),24.0);
  vCover=vec2(aCover.x,flow);vAlpha=(.1+ring*.65+seam*.18)*(1.0-smoothstep(12.0,52.0,-z));vGlow=ring*.24+drive*.25;
 }else if(uMode<4.5){
  p=vec3((aCover.x-.5)*30.0,-3.0,-b*32.0+6.0);
  float wave=sin(p.x*.32+t*.5)*cos(p.z*.23-t*.25);
  p.y+=wave*(1.2+uBass*uResponse*1.5)+drive*1.6;
  vAlpha=.35+.5*pow(.5+.5*sin(b*160.0),8.0);vGlow=max(0.0,p.y+2.0)*.15;
 }else if(uMode<5.5&&uRefined>.5){
  float ribbon=floor(b*3.0),v=fract(b*3.0)-.5,x=(aCover.x-.5)*14.0;
  float curl=x*.38+t*.18+ribbon*1.7;
  p=vec3(x,sin(curl)*(1.0+ribbon*.3)+v*(.8+.25*cos(curl)),cos(curl*.78+ribbon)*1.4+(ribbon-1.0)*1.2);
  float fold=noise(vec3(x*.65,v*2.0,t*.2+ribbon));
  p.z+=fold*(.12+uBass*uResponse*.25)+sin(v*18.0+x*.8-t)*uMid*uResponse*.12;
  float filament=pow(.5+.5*cos(v*65.0+fold*.8),7.0);
  float edge=pow(abs(v)*2.0,4.0);
  vAlpha=(.12+filament*.44+edge*.25)*(1.0-smoothstep(.82,1.0,abs(x)/7.0));vGlow=filament*.25+drive*.18;
 }else if(uMode<5.5||uMode>7.5){
  p=vec3((aCover.x-.5)*12.0,(b-.5)*8.0,0);
  float broad=noise(vec3(p.xy*.45,t*.28)),fine=noise(vec3(p.xy*1.2,t*.42));
  p.z=broad*(.7+uBass*uResponse*.7)+fine*uMid*uResponse*.65;
  p.z+=sin(length(p.xy)*3.0-t*2.2)*uBass*uResponse*.22;
  if(uMode<7.5){p.y+=sin(p.x*.5+t*.25)*.7;p.z+=sin(p.x*.4+t*.3)*1.3;}
  vAlpha=.8;vGlow=abs(broad)*drive*.4;
 }else if(uMode<6.5){
  float r=pow(b,.72),theta=a+r*.7+t*.025,petal=.5+.5*cos(theta*9.0-r*3.8);
  float radius=r*(5.0+uBass*uResponse*.5)*(.8+petal*.3);
  p=vec3(cos(theta)*radius,sin(theta)*radius*.82,(1.0-r)*1.7-r*r*.7+sin(theta*9.0-r*5.0+t*.14)*(.2+r*.7));
  p.yz=turn(-.3)*p.yz;vAlpha=.2+petal*.5;vGlow=pow(r,4.0)*.6+drive*.3;
 }else{
  float column=floor(aCover.x*52.0),fall=fract(b+t*(.04+aSeed*.05));
  p=vec3((column/51.0-.5)*18.0,(.5-fall)*13.0,(aSeed-.5)*10.0-2.0);
  p.x+=sin(t*.17+column*.63+fall*3.4)*.15;
  float dash=pow(.5+.5*sin(fall*(70.0+aSeed*40.0)),10.0);vAlpha=.12+dash*.8;vGlow=dash*.4;
 }
 if(uRefined>.5){
  p=indentParticle(p);
  float twinkle=.82+.18*sin(t*.52+aSeed*40.0);
  vAlpha*=twinkle;vGlow*=.7;
 }
 vec4 mv=modelViewMatrix*vec4(p,1.0); gl_Position=projectionMatrix*mv;
 float focus=1.0-smoothstep(14.0,52.0,-mv.z);
 float size=uSize*uPixel*(.86+aSeed*.36+vGlow*.3+uTreble*uResponse*.08)*uHeight*.045/max(2.0,-mv.z);
 gl_PointSize=clamp(size*mix(1.0,1.38,uRefined),1.0,5.4);vAlpha*=mix(.42,1.0,focus);
}`,G2=`
uniform sampler2D uCover;uniform float uHasCover,uArtwork,uRefined;varying vec3 vColor;varying vec2 vCover;varying float vAlpha,vGlow;
void main(){float r=length(gl_PointCoord-.5);if(r>.5)discard;
 vec3 sampled=texture2D(uCover,clamp(vCover,.002,.998)).rgb;
 vec3 c=mix(vColor,sampled,uHasCover*mix(.36,1.0,uArtwork));
 c*=1.08+vGlow*.25;
 c=mix(c,sqrt(max(c,vec3(0.0))),uRefined*.4);
 float core=1.0-smoothstep(.16,.42,r),halo=exp(-r*r*20.0)*.09;
 float alpha=clamp(mix(1.0-smoothstep(.18,.5,r),(core+halo)*1.85,uRefined)*vAlpha,0.0,.98);
 gl_FragColor=vec4(c,alpha);
 #include <colorspace_fragment>
}`;function Mr(i,e,t=[6805967,16478872,9419263]){let n=i.THREE,r=Pn(i),s=24e3,o=["silk","sphere","tunnel","galaxy"].includes(e),a=Md(i,r,{depth:e==="sphere"?2.8:e==="tunnel"?-5:0,radius:e==="galaxy"?2:1.4}),l=new Float32Array(s*3),c=new Float32Array(s*3),u=new Float32Array(s),f=new Float32Array(s*2),h=new n.Color,d=new n.Color(t[0]),p=new n.Color(t[1]),v={sphere:0,galaxy:1,aurora:2,tunnel:3,terrain:4,silk:5,nebula:6,flow:7,cover:8,"spectrum-sphere":9};for(let I=0;I<s;I++){let D=li(I,1)*Fa,U=li(I,2),N=li(I,3),L=I*3;if(f[I*2]=D/Fa,f[I*2+1]=U,e==="sphere"||e==="cover"){let G=1-U*2,Q=Math.sqrt(1-G*G)*3.2;l[L]=Math.cos(D)*Q,l[L+1]=G*3.2,l[L+2]=Math.sin(D)*Q}else if(e==="galaxy"){let G=Math.pow(U,.65)*10,Q=D*.08+G*.65+I%4*Fa/4;l[L]=Math.cos(Q)*G,l[L+1]=(N-.5)*(1.6-U),l[L+2]=Math.sin(Q)*G}else if(e==="tunnel"){let G=I%48,Q=4+N*.14;l[L]=Math.cos(D)*Q,l[L+1]=Math.sin(D)*Q,l[L+2]=-G-.5}else if(e==="terrain")l[L]=(D/Fa-.5)*28,l[L+1]=Math.sin(D*2)*.3-3,l[L+2]=-U*26+6;else if(e==="aurora")l[L]=(D/Fa-.5)*24,l[L+1]=U*7-2,l[L+2]=-4-I%5*2+Math.sin(D*2)*1.5;else if(e==="silk")l[L]=(D/Fa-.5)*15,l[L+1]=Math.sin(D*3)*1.8+(U-.5)*2,l[L+2]=(N-.5)*8;else{let G=Math.cbrt(U)*9;l[L]=Math.cos(D)*G,l[L+1]=(N-.5)*7,l[L+2]=Math.sin(D)*G}let F=e==="aurora"||e==="nebula"?U:e==="galaxy"?I%4/3:e==="sphere"?U:li(I,5);h.copy(d).lerp(p,F),h.toArray(c,L),u[I]=N}let g=at(i,new n.BufferGeometry);g.setAttribute("position",new n.BufferAttribute(l,3)),g.setAttribute("color",new n.BufferAttribute(c,3)),g.setAttribute("aSeed",new n.BufferAttribute(u,1)),g.setAttribute("aCover",new n.BufferAttribute(f,2));let m={...a.uniforms,uTime:{value:0},uBass:{value:0},uMid:{value:0},uTreble:{value:0},uHeight:{value:720},uRefined:{value:Number(o)},uMotion:{value:.6},uResponse:{value:.7},uSize:{value:e==="cover"?1.7:1},uPixel:{value:1},uArtwork:{value:e==="cover"?1:0},uMode:{value:v[e]??6},uCover:{value:null},uHasCover:{value:0},uBands:{value:new Float32Array(16)}},_=at(i,new n.ShaderMaterial({uniforms:m,vertexShader:k2,fragmentShader:G2,vertexColors:!0,transparent:!0,depthWrite:!1,blending:e==="cover"||o?n.NormalBlending:n.AdditiveBlending})),y=new n.Points(g,_);y.frustumCulled=!1,r.add(y);let x=i.quality,S={...i.params},b=null,C="",M=i.services.spatialResources||xi(n),T=!i.services.spatialResources;i.scope.defer(()=>{M.cover.release(b),T&&M.dispose()});function E(){g.setDrawRange(0,Math.floor(s*Li(x)*(S.density??1)))}return E(),In(r,S,x,{update(I,D){let U=Number(I.time)||0;if(m.uTime.value=U,m.uBass.value=Ot(I,"bass"),m.uMid.value=Ot(I,"mid"),m.uTreble.value=Ot(I,"treble"),e_(m.uBands.value,I),m.uMotion.value=D.speed??.6,m.uResponse.value=D.reactivity??.7,m.uPixel.value=i.renderer?.getPixelRatio()||1,m.uSize.value=D.pointSize??(e==="cover"?1.7:1),r.scale.setScalar((D.scale??1)*(D.cue==="chorus"?1.08:1)),r.rotation.set(D.cue==="bridge"?.06:0,0,D.director?Math.sin(U*.08)*.04:0),D.cue==="chorus"&&(m.uResponse.value*=1.3),o&&a.update(I,(D.pointerStrength??1)*.65),M){let N=i.services.coverUrl,L=(typeof N=="function"?N():N)||I.coverUrl||"";L!==C&&(M.cover.release(b),C=L,b=M.cover.acquire(L,i.signal)),m.uCover.value=b?.texture||null,m.uHasCover.value=b?.texture?1:0}},resize(I,D){m.uHeight.value=D},params(I){S=I,E()},quality(I){x=I,E()},stats(){return{particles:g.drawRange.count,drawCalls:1,bytes:l.byteLength+c.byteLength+u.byteLength+f.byteLength}}})}function t_(i,e="spectrum"){let t=i.THREE,n=Pn(i),r=256,s=at(i,new t.BoxGeometry(.32,1,.32)),o=at(i,new t.ShaderMaterial({vertexColors:!0,wireframe:e==="wire",vertexShader:`varying vec3 vColor;varying float vY;varying vec3 vNormal;
    void main(){vY=position.y+.5;vNormal=normal;vColor=color;
    #ifdef USE_INSTANCING_COLOR
    vColor*=instanceColor;
    #endif
    gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.0);}`,fragmentShader:`varying vec3 vColor,vNormal;varying float vY;
    void main(){vec3 c=vColor*mix(.18,1.1,pow(vY,1.4))*(.6+abs(vNormal.z)*.4);
    c+=vec3(.6,.9,1.0)*smoothstep(.97,1.0,vY)*.5;gl_FragColor=vec4(c,1.0);
    #include <colorspace_fragment>
    }`})),a=at(i,new t.InstancedMesh(s,o,r)),l=new t.Object3D,c=new t.Color;n.add(a);function u(h,d){for(let p=0;p<a.count;p++){let v=p%16-7.5,g=Math.floor(p/16)-7.5,m=h.spectrum||h.bands?.spectrum,_=m?.[Math.floor(p/r*m.length)],y=_===void 0?Ot(h,p%3===0?"bass":"mid"):Math.min(1,_>1?_/255:_),x=Math.sin(Math.hypot(v,g)*.8-(h.time||0)*(d.speed??.6)),S=.12+y*(2.3+x*1.3)*(d.reactivity??.7)+(x+1)*.12;l.position.set(v*.65,S/2-2,g*.65),l.scale.set(1,S,1),l.updateMatrix(),a.setMatrixAt(p,l.matrix),c.setHSL(.48+(v+7.5)/15*.4,.75,.42+y*.18),a.setColorAt(p,c)}a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0),n.scale.setScalar(d.scale??1)}function f(h){a.count=Math.floor(r*Li(h))}return f(i.quality),u({time:0},i.params),In(n,i.params,i.quality,{update:u,quality:f,stats:()=>({instances:a.count,triangles:a.count*12,drawCalls:1})})}function n_(i,e=!1){let t=i.THREE,n=Pn(i),r=e?36:12,s=at(i,new t.TorusGeometry(e?4:3,e?.018:.014,4,128)),o=at(i,new t.MeshBasicMaterial({color:16777215,transparent:!0,opacity:.8,blending:t.AdditiveBlending,depthWrite:!1})),a=at(i,new t.InstancedMesh(s,o,r)),l=new t.Object3D,c=new t.Color,u=new t.Color(e?15953580:15714694);if(n.add(a),!e){let d=new t.Mesh(at(i,new t.SphereGeometry(1.05,32,24)),at(i,new t.MeshBasicMaterial({color:197894})));n.add(d)}function f(d,p){let v=d.time||0,g=Ot(d,"bass");for(let m=0;m<a.count;m++){let _=m/a.count,y=v*(p.speed??.6),x=g*(p.reactivity??.7);l.position.set(e?Math.sin(m*.2+y*.1)*.25:0,0,e?-(((m*2-y*3)%72+72)%72):(_-.5)*1.5),l.rotation.set(e?0:-.4+_*.8,e?0:Math.sin(_*6+y*.06)*.18,e?m*.09+y*.12:-.22+_*.5);let S=e?1:.5+_*1.1;l.scale.set(S*(1+x*.08),S*(e?1:.5+_*.16),1),l.updateMatrix(),a.setMatrixAt(m,l.matrix),c.set(e?7397358:9096432).lerp(u,_),a.setColorAt(m,c)}a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0),n.scale.setScalar(p.scale??1)}function h(d){a.count=Math.max(6,Math.floor(r*Li(d)))}return h(i.quality),f({time:0},i.params),In(n,i.params,i.quality,{update:f,quality:h,stats:()=>({instances:a.count,triangles:a.count*1024+(e?0:1472),drawCalls:e?1:2})})}function Td(i,e="terrain"){let t=i.THREE,n=Pn(i),r=at(i,new t.PlaneGeometry(24,24,64,64));r.rotateX(-Math.PI/2);let s={uTime:{value:0},uBass:{value:0},uSpeed:{value:.6},uResponse:{value:.7},uStyle:{value:e==="mesh"?1:e==="spectrogram"?2:0},uBands:{value:new Float32Array(16)}},o=at(i,new t.ShaderMaterial({uniforms:s,side:t.DoubleSide,vertexShader:`uniform float uTime,uBass,uSpeed,uResponse,uStyle;uniform float uBands[16];varying float vHeight;varying vec2 vGrid;
    void main(){vec3 p=position;float t=uTime*uSpeed;
    p.y=sin(p.x*.32+t*.3)*cos(p.z*.23+t*.16)*(1.2+uBass*uResponse*2.0);
    float band=uBands[int(clamp(floor((p.x+12.0)/24.0*16.0),0.0,15.0))];p.y+=band*uResponse*2.0;
    if(uStyle>1.5)p.y=band*(1.2+sin(p.z*.8-t)*.8)*uResponse*3.0+sin(p.x*.3+t)*.3;
    vHeight=p.y;vGrid=p.xz;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);}`,fragmentShader:`uniform float uStyle;varying float vHeight;varying vec2 vGrid;
    void main(){vec2 coord=vGrid*(uStyle>1.5?1.8:2.5),width=fwidth(coord);
    vec2 line=abs(fract(coord-.5)-.5)/max(width,vec2(.001));float grid=1.0-min(min(line.x,line.y),1.0);
    vec3 c=mix(vec3(.08,.45,.51),vec3(.96,.42,.55),smoothstep(-1.5,3.5,vHeight));
    c*=mix(.13,.28,step(.5,uStyle))+grid*.9;c+=vec3(.14,.22,.2)*pow(max(0.0,vHeight)*.15,2.0);
    gl_FragColor=vec4(c,1.0);
    #include <colorspace_fragment>
    }`})),a=new t.Mesh(r,o);a.position.y=-3,n.add(a);let l=r.index.count;function c(){r.setDrawRange(0,l)}return c(i.quality),In(n,i.params,i.quality,{update(u,f){s.uTime.value=u.time||0,s.uBass.value=Ot(u,"bass"),s.uSpeed.value=f.speed??.6,s.uResponse.value=f.reactivity??.7,e_(s.uBands.value,u),n.scale.setScalar(f.scale??1)},quality:c,stats:()=>({triangles:r.drawRange.count/3,drawCalls:1})})}function Eu(i,e){let t=i.THREE,n=Pn(i),r=32,s=at(i,new t.BufferGeometry);s.setAttribute("position",new t.Float32BufferAttribute([0,-.5,0,-1,.7,.6,-.35,-.3,.15,0,-.5,0,.35,-.3,.15,1,.7,.6],3)),s.setAttribute("uv",new t.Float32BufferAttribute([.5,0,0,1,.3,.2,.5,0,.7,.2,1,1],2)),s.computeVertexNormals();let o=i.services.spatialResources||xi(t),a=!i.services.spatialResources,l=null,c="",u=!1;function f(){u||(u=!0,o.cover.release(l),a&&o.dispose())}i.scope.defer(f);let h={uTime:{value:0},uStyle:{value:["manga","anime","pencil","color"].indexOf(e)},uBass:{value:0},uCover:{value:null},uHasCover:{value:0}},d=at(i,new t.ShaderMaterial({uniforms:h,side:t.DoubleSide,vertexShader:`uniform float uTime,uBass;varying vec3 vNormal;varying vec2 vUv;void main(){vec3 p=position;vUv=uv;
    #ifdef USE_INSTANCING
    vNormal=normalize(normalMatrix*mat3(instanceMatrix)*normal);p.z+=abs(p.x)*sin(uTime*.7)*(.15+uBass*.2);
    gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(p,1.0);
    #else
    vNormal=normalize(normalMatrix*normal);p.z+=sin(p.x*.6+uTime*.2)*cos(p.y*.5)*(.15+uBass*.2);
    gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);
    #endif
    }`,fragmentShader:`uniform float uTime,uStyle,uBass,uHasCover;uniform sampler2D uCover;varying vec3 vNormal;varying vec2 vUv;void main(){
    float shade=floor((dot(normalize(vNormal),normalize(vec3(.4,.8,1.0)))*.5+.5)*4.0)/4.0;
    float dots=step(.22,length(fract(gl_FragCoord.xy/5.0)-.5));float hatch=step(.7,fract((gl_FragCoord.x+gl_FragCoord.y)/7.0));
    vec3 art=mix(mix(vec3(.18,.65,.6),vec3(.98,.5,.65),vUv.x),texture2D(uCover,vUv).rgb,uHasCover);
    float lum=dot(art,vec3(.299,.587,.114));
    vec2 texel=vec2(.002,0);float edge=length(texture2D(uCover,vUv+texel).rgb-texture2D(uCover,vUv-texel).rgb);
    vec3 c;
    if(uStyle<.5)c=vec3(floor(lum*5.0)/5.0*.8+.12)*mix(.56,1.0,dots);
    else if(uStyle<1.5)c=floor(art*5.0)/5.0*(.75+shade*.25);
    else if(uStyle<2.5)c=vec3(.9,.93,.91)*(1.0-edge*2.0)*mix(.55,1.0,lum)*mix(.72,1.0,hatch);
    else c=mix(vec3(.08,.55,.53),vec3(.98,.42,.57),smoothstep(.2,.8,lum))*mix(.78,1.0,dots);
    c*=1.0-clamp(edge*1.5,0.0,.65);gl_FragColor=vec4(c,1.0);
    #include <colorspace_fragment>
    }`})),p=at(i,new t.InstancedMesh(s,d,r)),v=new t.Object3D;n.add(p);let g=new t.Mesh(at(i,new t.PlaneGeometry(6.4,6.4,48,48)),d);n.add(g);function m(y,x){let S=y.time||0,b=i.services.coverUrl,C=(typeof b=="function"?b():b)||y.coverUrl||"";c!==C&&(o.cover.release(l),c=C,l=o.cover.acquire(C,i.signal)),h.uCover.value=l?.texture||null,h.uHasCover.value=l?.texture?1:0,h.uTime.value=S*(x.speed??.6),h.uBass.value=Ot(y,"bass")*(x.reactivity??.7),g.rotation.set(Math.sin(S*.07)*.035,Math.sin(S*.05)*.08,0);for(let M=0;M<p.count;M++){let T=M*2.4+S*.025*(x.speed??.6),E=5+M%3;v.position.set(Math.cos(T)*E,Math.sin(M*.8)*4.5,-2-li(M,3)*5),v.rotation.set(Math.sin(S*.3+M)*.3,M*.4,Math.sin(M)*.35),v.scale.setScalar(.3+li(M,3)*.6),v.updateMatrix(),p.setMatrixAt(M,v.matrix)}p.instanceMatrix.needsUpdate=!0,n.scale.setScalar(x.scale??1)}function _(y){p.count=Math.max(12,Math.floor(r*Li(y)))}return _(i.quality),m({},i.params),In(n,i.params,i.quality,{update:m,quality:_,dispose:f,stats:()=>({instances:p.count,triangles:p.count*2+4608,drawCalls:2})})}var s_="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",V2=`
uniform sampler2D uText;uniform vec4 uRows[6];uniform float uFill[6];
uniform float uCurrent,uOpacity,uTime,uGlow,uReveal,uKaraoke,uStyle;uniform vec2 uTexel;
uniform vec3 uBase,uHighlight;varying vec2 vUv;
void main(){
 vec2 uv=gl_FrontFacing?vUv:vec2(1.0-vUv.x,vUv.y);
 float mask=texture2D(uText,uv).a;
 float halo=max(max(texture2D(uText,uv+uTexel*vec2(2,0)).a,texture2D(uText,uv-uTexel*vec2(2,0)).a),
 max(texture2D(uText,uv+uTexel*vec2(0,2)).a,texture2D(uText,uv-uTexel*vec2(0,2)).a));
 if(max(mask,halo)<.01||uv.x>uReveal)discard;
 float filled=0.0,edge=0.0;
 for(int i=0;i<6;i++){vec4 row=uRows[i];if(uv.y>=row.z&&uv.y<=row.w){
  filled=1.0-smoothstep(uFill[i]-.004,uFill[i]+.004,uv.x);
  edge=exp(-pow((uv.x-uFill[i])/.018,2.0));}}
 float currentMix=clamp(uCurrent,0.0,1.0);
 vec3 color=mix(uBase,uHighlight,filled*currentMix*uKaraoke);
 color+=uHighlight*edge*currentMix*uKaraoke*(.12+uGlow*.12);
 float sweep=pow(max(0.0,sin(uv.x*5.0-uv.y*.6-uTime*.8)),18.0);
 color+=uHighlight*sweep*currentMix*uGlow*.045;
 float alpha=mask;
 if(uStyle>.5&&uStyle<1.5)alpha*=1.0-filled*currentMix*.55*uKaraoke;
 float shadow=max(0.0,halo-mask)*.6;
 gl_FragColor=vec4(mix(vec3(.005),color,alpha/max(.001,alpha+shadow)),max(alpha,shadow)*uOpacity);
 #include <colorspace_fragment>
}`,i_=["editorial-column","type-impact","fragment-collage","tracking-ribbon","mask-reveal","poster-blocks","quiet-tableau"],r_=["split-duo","quad-grid","diagonal-cut","triptych","banded","poster-frame","fan-burst","shutters","offset-collage"];function Ys(i,e="corridor"){let t=i.THREE,n=Pn(i),r=i.services.spatialResources||xi(t),s=!i.services.spatialResources,o=at(i,new t.PlaneGeometry(1,1,e==="cadenza"?80:1,1)),a=e==="tempera"?16764561:e==="sonnet"?16768684:e==="cadenza"?9366493:9560063,l=Array.from({length:7},()=>{let _={uText:{value:null},uRows:{value:Array.from({length:6},()=>new t.Vector4(0,0,-1,-1))},uFill:{value:new Float32Array(6)},uCurrent:{value:0},uOpacity:{value:0},uTime:{value:0},uGlow:{value:0},uReveal:{value:1},uKaraoke:{value:1},uStyle:{value:e==="wipe"?1:0},uTexel:{value:new t.Vector2(.0009765625,.00390625)},uBase:{value:new t.Color(15856629)},uHighlight:{value:new t.Color(a)}},y=e==="cadenza"?`uniform float uTime,uCurrent,uGlow;varying vec2 vUv;void main(){vUv=uv;vec3 p=position;
      p.y+=sin(uv.x*24.0+uTime*.3)*uCurrent*uGlow*.018;p.z+=sin(uv.x*13.0-uTime*.2)*uCurrent*.08;
      gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);}`:s_,x=at(i,new t.ShaderMaterial({uniforms:_,vertexShader:y,fragmentShader:V2,transparent:!0,depthWrite:!1,depthTest:!1,side:t.DoubleSide})),S=new t.Mesh(o,x);return S.visible=!1,S.renderOrder=2,n.add(S),{mesh:S,key:"",entry:null,line:null,rel:0,fresh:!0,targetPosition:new t.Vector3,targetScale:new t.Vector3,targetRotation:new t.Euler,targetQuaternion:new t.Quaternion}}),c=at(i,new t.InstancedMesh(at(i,new t.BoxGeometry(1,1,1)),at(i,new t.MeshBasicMaterial({color:a,wireframe:e!=="tempera",transparent:!0,opacity:e==="tempera"?.22:.17})),24));n.add(c);let u=new t.Object3D,f=new t.Color,h=!1,d=i.camera.aspect||16/9,p=null;function v(){h||(h=!0,l.forEach(_=>r.text.release(_.entry)),s&&r.dispose())}i.scope.defer(v);function g(_,y){let x=_.lyrics||i.services.lyrics||{},S=x.lines||[],b=x.localIndex??x.index??0,C=x.trackIndex??b,M=d<.8?896:d<1.2?1344:1792,T=_.time||0,E=_.sceneTime??T,I=Math.max(0,_.dynamicDt??_.dt??0),D=p===null||_.playing===!1||_.reduced||Math.abs(C-p)>1,U=1-Math.exp(-I*9);p=C;let N=[];for(let ee=-3;ee<=3;ee++){let ne=S[b+ee];ne?.text&&N.push({line:ne,rel:ee,key:String(ne.start??C+ee)+":"+ne.text})}l.forEach(ee=>{N.some(ne=>ne.key===ee.key)&&ee.wrapWidth===M||(r.text.release(ee.entry),ee.entry=null,ee.key="",ee.mesh.visible=!1)}),N.sort((ee,ne)=>Math.abs(ee.rel)-Math.abs(ne.rel)).forEach(ee=>{let ne=l.find(ze=>ze.key===ee.key)||l.find(ze=>!ze.key);ne&&(ne.key!==ee.key&&(ne.fresh=!0),ne.key=ee.key,ne.mesh.userData.lyricKey=ee.key,ne.rel=ee.rel,ne.line=ee.line,ne.wrapWidth=M,ne.entry||(ne.entry=r.text.acquire(ee.line.text,e==="sonnet"?"serif":"sans-serif",M)))}),r.beginFrame(_.now??E);let L=Math.max(8,i.camera.position.length()),F=2*L*Math.tan(i.camera.fov*Math.PI/360),G=F*d,Q=Math.min(y.textWidth??12,G*.82),q=y.spacing??2.1;l.forEach(ee=>{let ne=ee.entry?.layout;if(!ne)return;let ze=Math.min(ee.rel===0?.96:.64,Q*ne.fontSize/ne.width,F*(ee.rel===0?.42:.3)*ne.fontSize/ne.height);ee.width=ne.width/ne.fontSize*ze,ee.height=ne.height/ne.fontSize*ze,q=Math.max(q,ee.height+.35)}),l.forEach(ee=>{let{mesh:ne,entry:ze,rel:Ce,line:Ve}=ee,W=ze?.layout;if(ne.visible=!!ze?.texture&&Math.abs(Ce)<=2,!ne.visible)return;let re=Math.abs(Ce),we=Ce===0,ke=ne.material.uniforms,Ee=Math.sin(Ce*.35)*(y.arc??.7)*.28,Be=-re*.55,ot=-Ce*q,oe=ee.targetRotation;if(oe.set(0,0,0),e==="cadenza"&&(Ee+=Ce*.32,Be-=re*.5,oe.z=Ce*-.018),e==="sonnet"&&(Ee-=Math.min(.6,G*.03),Be-=re*.3),e==="tempera"&&(Ee+=Math.sin(Ce*2.4)*.3,oe.z=Math.sin(Ce)*.018),ee.targetScale.set(ee.width,ee.height,1),ke.uReveal.value=1,e==="sonnet"){let _e=!y.shotFlow||y.shotFlow==="auto"?i_[Math.floor(E/9)%i_.length]:y.shotFlow;_e==="fragment-collage"&&(Ee+=Math.sin(Ce*3)*.3,oe.z=Ce*.016),_e==="tracking-ribbon"&&(Ee+=Math.sin(E*.3)*.18,Be-=re*.3),_e==="type-impact"&&we&&ee.targetScale.multiplyScalar(1+Math.sin(E*.5)*.025),_e==="mask-reveal"&&we&&(ke.uReveal.value=Math.max(ze.end,1-Math.exp(-Math.max(0,T-(Ve.start||0))*8))),_e==="poster-blocks"&&(Be-=re%2*.4),_e==="quiet-tableau"&&(Ee=0)}y.layout==="diorama"&&(Be-=re*.6,oe.y=Ce*-.035),y.layout==="tempo"&&(ot+=Math.sin(E*2+Ce)*Ot(_,"bass")*.08),y.layout==="still"&&oe.set(0,0,0);let pe=ee.width*.5,Me=G*.45;Ee=Math.max(-Math.max(0,Me-pe),Math.min(Math.max(0,Me-pe),Ee)),ee.targetPosition.set(Ee,ot,Be),ee.targetQuaternion.setFromEuler(oe),D||ee.fresh?(ne.position.copy(ee.targetPosition),ne.scale.copy(ee.targetScale),ne.quaternion.copy(ee.targetQuaternion)):(ne.position.lerp(ee.targetPosition,U),ne.scale.lerp(ee.targetScale,U),ne.quaternion.slerp(ee.targetQuaternion,U)),ee.fresh=!1,ke.uText.value=ze.texture,ke.uCurrent.value=we?1:0,ke.uKaraoke.value=y.karaoke===!1?0:1,ke.uTexel.value.set(1/W.width,1/W.height),ke.uTime.value=E,ke.uGlow.value=_.reduced?0:.25+Ot(_,"bass")*.5,ke.uOpacity.value=we?1:Math.max(.1,.54-re*.13);let de=jx(W,Ve,T,x.progress);for(let _e=0;_e<6;_e++){let ue=W.rows[_e];ke.uRows.value[_e].set(ue?.left||0,ue?.right||0,ue?.bottom??-1,ue?.top??-1),ke.uFill.value[_e]=de[_e]??-1}});let Z=Math.max(G*.47,Q*.6),K=y.sceneKind||"orbital";for(let ee=0;ee<c.count;ee++){let ne=ee%2?1:-1,ze=Math.floor(ee/2),Ce=ee/c.count*Math.PI*2;if(u.position.set(ne*Z,(ze%5-2)*1.7,-2-ze*1.2),u.scale.set(.025,e==="classic"?.6+Ot(_,"mid"):1.1,.025),u.rotation.set(0,E*.02,0),(e==="corridor"||e==="wipe")&&u.scale.set(.018,8,.018),e==="cadenza"&&(u.scale.set(.4,.4,.4),u.rotation.z=E*.05+ee),e==="sonnet"&&(u.scale.set(.3,.025,.2),(K==="orbital"||K==="orrery")&&(u.position.set(Math.cos(Ce+E*.04)*Z*1.1,Math.sin(Ce+E*.04)*5,-4-ee%3),u.rotation.z=Ce,u.scale.x=K==="orrery"?1:.3),K==="constellation"&&(u.position.y=(li(ee,2)-.5)*10,u.scale.setScalar(.08)),K==="perspective"&&(u.position.y=ne*4,u.position.z=-ze*2,u.scale.z=1.5),K==="wave-score"&&(u.position.y=Math.sin(E*.4+ze*.7)*3,u.scale.y=.3+Ot(_,"mid")),K==="editorial-lattice"&&(u.position.y=(ze%4-1.5)*2,u.scale.x=1.3)),e==="tempera"){let Ve=!y.composition||y.composition==="auto"?r_[Math.floor(E/16)%r_.length]:y.composition;u.scale.set(1.5,1.2,.15),u.position.z=-4-ze%3*2,Ve==="quad-grid"&&(u.position.y=(ze%2?1:-1)*3),Ve==="diagonal-cut"&&(u.rotation.z=-.4,u.scale.set(3,.6,.15)),Ve==="triptych"&&u.scale.set(.8,3,.15),(Ve==="banded"||Ve==="shutters")&&u.scale.set(2.6,Ve==="banded"?.6:.3,.15),Ve==="poster-frame"&&(u.position.y=(ze%2?1:-1)*4,u.scale.set(.18,2.5,.15)),Ve==="fan-burst"&&(u.rotation.z=ne*ze*.22,u.scale.set(3,.25,.15)),Ve==="offset-collage"&&(u.position.y+=li(ee,2),u.rotation.z=ne*.15),f.setHSL(y.colorMode==="mono"?0:ee%2?.47:.055,y.colorMode==="mono"?0:y.colorMode==="vivid"?.9:.5,.4),c.setColorAt(ee,f)}u.updateMatrix(),c.setMatrixAt(ee,u.matrix)}c.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0),c.visible=!!S.length,n.scale.setScalar(y.scale??1),n.rotation.y=y.director?Math.sin(E*.08)*.025:0}function m(_){c.count=Math.max(8,Math.floor(24*Li(_)))}return m(i.quality),In(n,i.params,i.quality,{update:g,quality:m,resize(_,y){d=_/Math.max(1,y)},dispose:v,stats:()=>({textRows:l.filter(_=>_.entry).length,drawCalls:6,triangles:c.count*12+10,...r.stats()})})}function o_(i){let e=i.THREE,t=Pn(i),n=i.services.spatialResources||xi(e),r=!i.services.spatialResources,s=at(i,new e.PlaneGeometry(3,3,24,1)),o=[],a=[],l=[],c=[],u=s.attributes.position;for(let v=0;v<u.count;v++){let g=u.getX(v);u.setXYZ(v,Math.sin(g/11)*11,u.getY(v),(Math.cos(g/11)-1)*11)}s.computeVertexNormals();let f=9;for(let v=0;v<f;v++){let g=y=>at(i,new e.ShaderMaterial({uniforms:{uCover:{value:null},uHasCover:{value:0},uBrightness:{value:1},uReflection:{value:y?1:0}},vertexShader:s_,transparent:y,depthWrite:!y,side:e.DoubleSide,fragmentShader:`uniform sampler2D uCover;uniform float uHasCover,uBrightness,uReflection;varying vec2 vUv;
      void main(){vec2 p=vUv-.5;float d=length(p),groove=.5+.5*sin(d*220.0);
      vec3 empty=mix(vec3(.035,.06,.07),vec3(.16,.28,.29),1.0-smoothstep(.05,.5,d))*(.8+groove*.1);
      vec3 c=mix(empty,texture2D(uCover,vUv).rgb,uHasCover)*uBrightness;
      float alpha=mix(1.0,pow(vUv.y,2.0)*.2,uReflection);gl_FragColor=vec4(c,alpha);
      #include <colorspace_fragment>
      }`})),m=new e.Mesh(s,g(!1)),_=new e.Mesh(s,g(!0));t.add(m,_),o.push(m),a.push(_),l.push(null),c.push("")}let h=!1;function d(){h||(h=!0,l.forEach(v=>n.cover.release(v)),r&&n.dispose())}i.scope.defer(d);function p(v,g){let m=i.services.coverItems,_=(typeof m=="function"?m():m)||[],y=i.services.coverUrl,x=(typeof y=="function"?y():y)||v.coverUrl||"",S=_.map(E=>typeof E=="string"?E:E?.coverUrl||E?.cover||E?.url||"").filter(Boolean);x&&!S.includes(x)&&S.unshift(x);let b=Math.max(0,S.indexOf(x)),C=(b+Math.round(g.coverIndex||0))%Math.max(1,S.length),M=g.radius??11,T=v.sceneTime??v.time??0;for(let E=0;E<f;E++){let I=E-4,D=o[E],U=a[E],N=S.length?S[((C+I)%S.length+S.length)%S.length]:"",L=I*.34;D.position.set(Math.sin(L)*M,0,-M+Math.cos(L)*M-2),D.rotation.y=L,D.position.y+=Math.sin(T*.4+E)*.035*(g.speed??.6),D.scale.setScalar((I===0?1.12:1)*(1+Ot(v,"bass")*.012*(g.reactivity??.7))),U.position.copy(D.position),U.position.y=-3.15-D.position.y,U.rotation.copy(D.rotation),U.scale.set(D.scale.x,-D.scale.y,1),c[E]!==N&&(n.cover.release(l[E]),c[E]=N,l[E]=n.cover.acquire(N,i.signal));let F=l[E]?.texture||null;for(let G of[D,U])G.material.uniforms.uCover.value=F,G.material.uniforms.uHasCover.value=F?1:0,G.material.uniforms.uBrightness.value=I===0?1:Math.max(.35,.8-Math.abs(I)*.1)}t.scale.setScalar(g.scale??1)}return In(t,i.params,i.quality,{update:p,dispose:d,stats:()=>({covers:l.filter(Boolean).length,drawCalls:18,triangles:864,...n.stats()})})}var a_=`
uniform float uTime,uBass;
varying vec3 vNormal,vSurface;
void main(){vSurface=normalize(position);vNormal=normalize(normalMatrix*normal);
 float wave=sin(vSurface.y*8.0+uTime*.3)*cos(vSurface.x*6.0-uTime*.2);
 vec3 p=position+normal*wave*uBass*.035;
 gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);}`,l_=`
uniform sampler2D uCover;uniform float uHasCover;
varying vec3 vNormal,vSurface;
vec3 art(){
 vec3 n=normalize(vSurface);float arc=acos(clamp(abs(n.z),0.0,1.0));
 // Arc-length projection keeps artwork continuous across the curved surface.
 vec2 direction=n.xy/max(length(n.xy),.0001);
 vec2 uv=clamp(.5+direction*arc/2.05,.002,.998);
 vec3 fallback=mix(vec3(.025,.06,.08),vec3(.14,.23,.25),uv.y);
 return mix(fallback,texture2D(uCover,uv).rgb,uHasCover);
}`,H2=l_+`
void main(){
 vec3 n=normalize(vNormal),l=normalize(vec3(-.4,.65,1.0));
 float diffuse=max(0.0,dot(n,l));float rim=pow(1.0-max(n.z,0.0),3.0);
 float spec=pow(max(0.0,dot(n,normalize(l+vec3(0,0,1)))),90.0);
 float grain=sin(vSurface.x*1100.0)*sin(vSurface.y*1100.0)*.006;
 vec3 c=art()*(.62+.42*diffuse+grain)+vec3(.8,.92,1.0)*spec*.16;
 c+=mix(art(),vec3(.52,.72,.78),.35)*rim*.18;
 gl_FragColor=vec4(c,1.0);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`,W2=l_+`
void main(){float edge=pow(1.0-abs(normalize(vNormal).z),4.0);
 gl_FragColor=vec4(mix(art(),vec3(.52,.75,.8),.3),edge*.17);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`;function c_(i){let e=i.THREE,t=Pn(i),n=new e.Group;t.add(n);let r=i.services.spatialResources||xi(e),s=!i.services.spatialResources,o={uCover:{value:null},uHasCover:{value:0},uTime:{value:0},uBass:{value:0}},a=at(i,new e.SphereGeometry(3.2,96,64));n.add(new e.Mesh(a,at(i,new e.ShaderMaterial({uniforms:o,vertexShader:a_,fragmentShader:H2}))));let l=new e.Mesh(at(i,new e.SphereGeometry(3.26,48,32)),at(i,new e.ShaderMaterial({uniforms:o,vertexShader:a_,fragmentShader:W2,side:e.BackSide,transparent:!0,depthWrite:!1})));n.add(l);let c=1e4,u=new Float32Array(c*3);for(let S=0;S<c;S++){let b=1-2*(S+.5)/c,C=Math.sqrt(1-b*b),M=S*2.39996323;u.set([Math.cos(M)*C*3.207,b*3.207,Math.sin(M)*C*3.207],S*3)}let f=at(i,new e.BufferGeometry);f.setAttribute("position",new e.BufferAttribute(u,3));let h=at(i,new e.PointsMaterial({color:15005168,size:.012,transparent:!0,opacity:.13,depthWrite:!1}));n.add(new e.Points(f,h));let d=null,p="",v=i.quality,g=i.params,m=!1,_=16/9;function y(){f.setDrawRange(0,Math.floor(c*Li(v)*(g.density??1)))}function x(){m||(m=!0,r.cover.release(d),s&&r.dispose())}return i.scope.defer(x),y(),In(t,g,v,{update(S,b){let C=i.services.coverUrl,M=(typeof C=="function"?C():C)||S.coverUrl||"";M!==p&&(r.cover.release(d),p=M,d=r.cover.acquire(M,i.signal)),o.uCover.value=d?.texture||null,o.uHasCover.value=d?.texture?1:0;let T=(S.sceneTime??S.time??0)*(b.speed??.6);o.uTime.value=T,o.uBass.value=Ot(S,"bass")*(b.reactivity??.7),n.rotation.set(Math.sin(T*.16)*.035,Math.sin(T*.12)*.16,Math.sin(T*.09)*.025);let E=1+Math.sin(T*.7)*.003+Ot(S,"bass")*.012*(b.reactivity??.7);n.scale.setScalar(E*Math.min(1,_/.95)),t.scale.setScalar(b.scale??1)},params(S){g=S,y()},quality(S){v=S,y()},resize(S,b){_=S/Math.max(1,b)},dispose:x,stats:()=>({covers:d?.texture?1:0,particles:f.drawRange.count,drawCalls:3,triangles:15168})})}var X2=`
attribute vec2 aCover;
uniform sampler2D uCover,uPrevious;
uniform float uHasCover,uMix,uTime,uBass,uMid,uTreble,uRelief,uPointSize,uFocal,uSpacing;
varying vec3 vColor;varying float vLight;
${bd}
${Sd}
void main(){
 vec3 fallback=mix(vec3(.09,.32,.36),vec3(.84,.36,.48),aCover.x);
 fallback=mix(fallback,vec3(.83,.78,.59),smoothstep(.1,1.0,aCover.y)*.6);
 vec3 art=mix(texture2D(uPrevious,aCover).rgb,texture2D(uCover,aCover).rgb,uMix);
 vColor=mix(fallback,art,uHasCover);
 float luminance=dot(vColor,vec3(.2126,.7152,.0722));
 vec3 p=position;
 float broad=particleNoise(vec3(p.xy*.52,uTime*.32));
 float detail=particleNoise(vec3(p.xy*1.65,uTime*.57));
 p.z+=(luminance-.45)*uRelief*.22;
 p.z+=(broad*uBass*.42+detail*uMid*.24+sin(p.x*7.0+p.y*6.0+uTime*2.1)*uTreble*.055)*uRelief;
 vec3 deformed=indentParticle(p);
 float dent=dot(p-deformed,uPointerNormal);
 p=deformed;
 vLight=1.0-dent*.16+(detail*uMid)*.04;
 vec4 mv=modelViewMatrix*vec4(p,1.0);
 // Cover-sized spacing keeps a legible grid at every geometry and DPR tier.
 gl_PointSize=clamp(uSpacing*uFocal*uPointSize*length(modelViewMatrix[0].xyz)/max(.5,-mv.z),.8,11.0);
 gl_Position=projectionMatrix*mv;
}`,q2=`
varying vec3 vColor;varying float vLight;
void main(){
 float r=length(gl_PointCoord-.5)*2.0;if(r>1.0)discard;
 float alpha=1.0-smoothstep(.64,1.0,r);
 gl_FragColor=vec4(vColor*vLight,alpha*.98);
 #include <colorspace_fragment>
}`;function u_(i){let e=i.THREE,t=Pn(i),n=new e.Group;t.add(n);let r=192,s=new Float32Array(r*r*3),o=new Float32Array(r*r*2),a=at(i,new e.BufferGeometry);a.setAttribute("position",new e.BufferAttribute(s,3)),a.setAttribute("aCover",new e.BufferAttribute(o,2));let l=Md(i,n,{surface:!0,radius:1.15}),c={...l.uniforms,uCover:{value:null},uPrevious:{value:null},uHasCover:{value:0},uMix:{value:1},uTime:{value:0},uBass:{value:0},uMid:{value:0},uTreble:{value:0},uRelief:{value:1},uPointSize:{value:1},uSpacing:{value:8/r},uFocal:{value:700}},u=at(i,new e.ShaderMaterial({uniforms:c,vertexShader:X2,fragmentShader:q2,transparent:!0,depthWrite:!0,blending:e.NormalBlending})),f=new e.Points(a,u);f.frustumCulled=!1,n.add(f);let h=i.services.spatialResources||xi(e),d=!i.services.spatialResources,p=null,v=null,g="",m=i.quality,_=i.params,y=0,x=16/9,S=900,b=!1;function C(){let T={low:96,medium:144,high:r}[m?.mode]||144,E=Math.max(32,Math.floor(T*Math.sqrt(_.density??1)));if(E!==y){y=E;for(let I=0;I<y;I++)for(let D=0;D<y;D++){let U=I*y+D,N=(D+.5)/y,L=(I+.5)/y;s.set([(N-.5)*8,(L-.5)*8,Math.sin(N*6.28)*.012],U*3),o.set([N,L],U*2)}a.attributes.position.needsUpdate=!0,a.attributes.aCover.needsUpdate=!0,a.setDrawRange(0,y*y),c.uSpacing.value=8/y}}function M(){b||(b=!0,h.cover.release(p),h.cover.release(v),d&&h.dispose())}return i.scope.defer(M),C(),In(t,_,m,{update(T,E){let I=i.services.coverUrl,D=(typeof I=="function"?I():I)||T.coverUrl||"";D!==g&&(h.cover.release(v),v=null,p?.texture?v=p:h.cover.release(p),g=D,p=h.cover.acquire(D,i.signal),c.uMix.value=0,D||(h.cover.release(v),v=null)),p?.failed&&(h.cover.release(v),v=null);let U=p?.texture||v?.texture;c.uCover.value=U||null,c.uPrevious.value=v?.texture||U||null,c.uHasCover.value=U?1:0,p?.texture&&(c.uMix.value=T.playing===!1||T.reduced||!v?1:Math.min(1,c.uMix.value+(T.dt||0)*3),c.uMix.value===1&&v&&(h.cover.release(v),v=null,c.uPrevious.value=U));let N=(T.sceneTime??T.time??0)*(E.speed??.6);c.uTime.value=N,c.uBass.value=Ot(T,"bass")*(E.reactivity??.7),c.uMid.value=Ot(T,"mid")*(E.reactivity??.7),c.uTreble.value=Ot(T,"treble")*(E.reactivity??.7),c.uRelief.value=E.relief??1,c.uPointSize.value=E.pointSize??1,c.uFocal.value=S*(i.renderer?.getPixelRatio()||1)*i.camera.projectionMatrix.elements[5]*.5,n.scale.setScalar(Math.min(1,x/1.08)),n.rotation.set(Math.sin(N*.15)*.018,Math.sin(N*.12)*.035,0),t.scale.setScalar((E.scale??1)*(E.cue==="chorus"?1.08:1)),t.rotation.set(E.cue==="bridge"?.06:0,0,E.director?Math.sin((T.sceneTime??0)*.08)*.04:0),l.update(T,E.pointerStrength??1)},resize(T,E){x=T/Math.max(1,E),S=E},params(T){_=T,C()},quality(T){m=T,C()},dispose:M,stats:()=>({particles:y*y,drawCalls:1,covers:+!!p?.texture+ +!!v?.texture})})}var Zs={halftone:xt("\u534A\u8C03\u7F51\u70B9",0,0,40,1),grain:xt("\u80F6\u7247\u9897\u7C92",0,0,40,1),vignette:xt("\u955C\u5934\u6697\u89D2",0,0,100,1),softness:xt("\u5149\u6655\u67D4\u5316",0,0,20,1),bokeh:xt("\u7126\u70B9\u865A\u5316",0,0,20,1),chroma:xt("\u5F84\u5411\u8272\u6563",0,0,12,1),aberration:xt("\u955C\u5934\u5149\u5B66\u7455\u75B5",0,0,12,1),distort:xt("\u80F6\u7247\u6563\u7729",0,0,12,1),bloom:xt("\u5BF9\u6BD4\u5EA6\u8F89\u6620",0,0,12,1)},c0={dust:Ua.dust,discRing:Ua.discRing,ripples:Ua.ripples,...Zs};function Y2(i){let e=i.THREE,t=Pn(i),n=1200,r=new Float32Array(n*3);for(let f=0;f<n;f++)r[f*3]=(li(f,1)-.5)*24,r[f*3+1]=(li(f,2)-.5)*16,r[f*3+2]=(li(f,3)-.5)*24;let s=at(i,new e.BufferGeometry);s.setAttribute("position",new e.BufferAttribute(r,3));let o=at(i,new e.PointsMaterial({color:12377053,size:.035,transparent:!0,opacity:.5,depthWrite:!1})),a=new e.Points(s,o);t.add(a);let l=i.quality,c=i.params;function u(){s.setDrawRange(0,Math.floor(n*Li(l)*(c.dust??0))),t.visible=s.drawRange.count>0}return u(),In(t,c,l,{update(f,h){t.rotation.y=(h.reduced?0:f.sceneTime??f.time??0)*.013*(h.speed??.6),o.opacity=.35+Ot(f,"treble")*.3},params(f){c=f,u()},quality(f){l=f,u()},stats:()=>({particles:s.drawRange.count,drawCalls:t.visible?1:0})})}function Z2(i){let e=i.THREE,t=Pn(i),n=64,r=at(i,new e.BoxGeometry(.065,1,.065)),s=at(i,new e.MeshBasicMaterial({color:16556943})),o=at(i,new e.InstancedMesh(r,s,n)),a=new e.Object3D;return t.add(o),t.visible=!!i.params.discRing,In(t,i.params,i.quality,{update(l,c){if(c.discRing){for(let u=0;u<o.count;u++){let f=u/o.count*Math.PI*2,h=l.spectrum||l.bands?.spectrum,d=h?.[Math.floor(u/o.count*h.length)],v=.2+(d===void 0?Ot(l,u%2?"mid":"bass"):Math.min(1,d>1?d/255:d))*1.2;a.position.set(Math.cos(f)*5,-3+v/2,Math.sin(f)*5),a.scale.set(1,v,1),a.rotation.y=-f,a.updateMatrix(),o.setMatrixAt(u,a.matrix)}o.instanceMatrix.needsUpdate=!0}},params(l){t.visible=!!l.discRing},quality(l){o.count=Li(l)<.5?32:64},stats:()=>({triangles:o.count*12,drawCalls:t.visible?1:0})})}function $2(i){let e=i.THREE,t=Pn(i),n=at(i,new e.TorusGeometry(1,.018,4,64)),r=at(i,new e.MeshBasicMaterial({color:9424346,transparent:!0,opacity:.4,depthWrite:!1})),s=at(i,new e.InstancedMesh(n,r,6)),o=new e.Object3D,a=new Float32Array(6).fill(-100);t.add(s);let l=0,c=!1,u=0,f=-100;return In(t,i.params,i.quality,{update(h,d){let p=d.reduced?0:h.sceneTime??h.time??0,v=Ot(h,"bass"),g=typeof h.onset=="number"?h.onset>.3:!!h.onset;t.visible=(d.ripples??0)>0,(g&&!c||v>.6&&u<=.6)&&p-f>.25&&(a[l++%6]=p,f=p),c=g,u=v;for(let m=0;m<6;m++){let _=p-a[m],y=_>=0&&_<2.4;o.position.set(0,-2.9,0),o.rotation.x=-Math.PI/2,o.scale.setScalar(y?(.5+_*3)*(d.ripples??0):0),o.updateMatrix(),s.setMatrixAt(m,o.matrix)}s.instanceMatrix.needsUpdate=!0},stats:()=>({triangles:3072,drawCalls:t.visible?1:0})})}var l0={dust:Y2,"spectrum-orbit":Z2,ripple:$2};function u0(i,e=Object.keys(l0)){let t=e.map(n=>l0[n]?.(i)).filter(Boolean);return{update(n){t.forEach(r=>r.update(n))},resize(n,r){t.forEach(s=>s.resize(n,r))},setParams(n){t.forEach(r=>r.setParams(n))},setQuality(n){t.forEach(r=>r.setQuality(n))},dispose(){t.forEach(n=>n.dispose())},stats(){return t.map(n=>n.stats())}}}function h0(i,e){let t=u0(i),n=i.params;return{group:e.group,update(r){e.update(r),t.update(wd(r,n.reduced))},resize(r,s){e.resize?.(r,s),t.resize(r,s)},setParams(r){n=r,e.setParams?.(r),t.setParams(r)},setQuality(r){e.setQuality?.(r),t.setQuality(r)},dispose(){t.dispose(),e.dispose()},...e.setRig?{setRig(r){e.setRig(r)}}:{},stats:()=>({primary:e.stats?.(),effects:t.stats()})}}function h_(i){for(let[e,t]of Object.entries(l0))i.register({apiVersion:1,stateVersion:1,id:e,label:{dust:"\u7A7A\u95F4\u5149\u5C18","spectrum-orbit":"\u73AF\u7ED5\u9891\u8C31",ripple:"\u8282\u62CD\u6D9F\u6F2A"}[e],category:"\u7EC4\u5408\u6548\u679C",preview:"/space-scene-preview/aurora-dome.jpg",aliases:[],params:{},camera:{},capabilities:{effect:!0,stage:"geometry",depth:!0},quality:{},create:t});for(let[e,t]of Object.entries(Zs))i.register({apiVersion:1,stateVersion:1,id:"post-"+e,label:t.label,category:"\u955C\u5934\u6548\u679C",preview:"/space-scene-preview/aurora-dome.jpg",aliases:[],params:{amount:t},camera:{},capabilities:{effect:!0,stage:"post",sharedChain:!0},quality:{},create(n){let r=n.params.amount??0;return{update(){},resize(){},setQuality(){},dispose(){},setParams(s){r=s.amount??r},contribution:()=>({key:e,uniform:"u"+e[0].toUpperCase()+e.slice(1),amount:r})}}})}var J2=`
uniform sampler2D uScene,uDepth;uniform vec2 uPixel;uniform float uTime,uNear,uFar,uFocus,uQuality;
uniform float uHalftone,uGrain,uVignette,uSoftness,uBokeh,uChroma,uAberration,uDistort,uBloom;
varying vec2 vUv;
float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
vec3 sampleColor(vec2 uv){return texture2D(uScene,clamp(uv,vec2(.001),vec2(.999))).rgb;}
void main(){
 vec2 radial=vUv-.5;float edge=dot(radial,radial);
 vec2 uv=vUv+radial*edge*uAberration*.0008;
 uv+=vec2(sin(uv.y*16.0+uTime*.2),cos(uv.x*13.0))*.00035*uDistort;
 vec3 c=sampleColor(uv);float chroma=uChroma+uAberration*.3;
 if(chroma>0.0){vec2 d=radial*uPixel*chroma*2.0;c.r=sampleColor(uv+d).r;c.b=sampleColor(uv-d).b;}
 float depth=texture2D(uDepth,uv).x;
 float distance=uNear*uFar/(uFar-depth*(uFar-uNear));
 float blur=uQuality>0.0?uSoftness*.15+uBokeh*.16*smoothstep(1.0,7.0,abs(distance-uFocus)):0.0;
 if(blur>0.0){vec2 d=uPixel*blur;vec3 soft=(sampleColor(uv+vec2(d.x,0.0))+sampleColor(uv-vec2(d.x,0.0))+sampleColor(uv+vec2(0.0,d.y))+sampleColor(uv-vec2(0.0,d.y)))*.25;c=mix(c,soft,min(.8,blur*.3));}
 if(uBloom>0.0)c+=max(c-.6,vec3(0.0))*uBloom*.08;
 if(uHalftone>0.0){float dotPattern=step(.26,length(fract(gl_FragCoord.xy/4.0)-.5));c*=mix(1.0,.55+.45*dotPattern,uHalftone*.025);}
 c+=(rnd(gl_FragCoord.xy+floor(uTime*24.0))-.5)*uGrain*.003;
 c*=1.0-smoothstep(.08,.5,edge)*uVignette*.01;
 gl_FragColor=vec4(c,1.0);
}`;function f_(i){let e=i.THREE,t=new e.Scene,n=new e.OrthographicCamera(-1,1,1,-1,0,1),r={uScene:{value:null},uDepth:{value:null},uPixel:{value:new e.Vector2(1,1)},uTime:{value:0},uNear:{value:i.camera.near},uFar:{value:i.camera.far},uFocus:{value:12},uQuality:{value:1}};for(let m of Object.keys(Zs))r["u"+m[0].toUpperCase()+m.slice(1)]={value:0};let s=at(i,new e.PlaneGeometry(2,2)),o=at(i,new e.ShaderMaterial({uniforms:r,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.0,1.0);}",fragmentShader:J2})),a=new e.Mesh(s,o);a.frustumCulled=!1,t.add(a);let l=null,c=1,u=1,f=!1,h=i.params||{},d=i.quality;function p(){return Object.keys(Zs).some(m=>Number(h[m]||i.services.post?.[m])>0)}function v(m){h={...h,...m};for(let[_,y]of Object.entries(Zs)){let x=Number(h[_]||i.services.post?.[_])||0;r["u"+_[0].toUpperCase()+_.slice(1)].value=Math.max(y.min,Math.min(y.max,x))}!p()&&l&&(l.dispose(),l=null)}function g(m,_){typeof m=="object"&&(_=m.height,m=m.width),c=Math.max(1,Math.floor((m||1)*.5)),u=Math.max(1,Math.floor((_||1)*.5)),l?.setSize(c,u),r.uPixel.value.set(1/c,1/u)}return v(h),{update(m){r.uTime.value=h.reduced?0:m.sceneTime??m.time??0},setParams:v,setQuality(m){d=m,r.uQuality.value=m.mode==="low"?0:1},resize:g,render(m,_,y){if(f)return;if(!p()){m.render(_,y);return}l||(l=new e.WebGLRenderTarget(c,u,{minFilter:e.LinearFilter,magFilter:e.LinearFilter}),l.depthTexture=new e.DepthTexture(c,u),l.depthTexture.type=e.UnsignedIntType),r.uScene.value=l.texture,r.uDepth.value=l.depthTexture,r.uNear.value=y.near,r.uFar.value=y.far,r.uFocus.value=Math.max(1,y.position.length()),r.uQuality.value=d?.mode==="low"?0:1;let x=m.getRenderTarget(),S=m.autoClear;try{m.autoClear=!0,m.setRenderTarget(l),m.render(_,y),m.setRenderTarget(x),m.render(t,n)}finally{m.setRenderTarget(x),m.autoClear=S}},stats(){return{active:p(),drawCalls:p()?1:0,bytes:l?c*u*8:0}},dispose(){f||(f=!0,l?.dispose(),l=null,a.removeFromParent())}}}var K2=[["particle-silk","\u7C92\u5B50\u7EF8\u5E26","particles",i=>Mr(i,"silk")],["gravity-sphere","\u5F15\u529B\u661F\u7403","particles",i=>Mr(i,"sphere"),["immersive/orb","orb"]],["warp-tunnel","\u6298\u8DC3\u96A7\u9053","particles",i=>Mr(i,"tunnel"),["immersive/tunnel"]],["prism-galaxy","\u68F1\u955C\u661F\u7CFB","particles",i=>Mr(i,"galaxy"),["immersive/prism","prism"]],["cover-sphere","\u5C01\u9762\u661F\u7403","artwork",c_,["immersive/silk","silk"]],["cover-particles","\u7C92\u5B50\u5C01\u9762","artwork",u_],["spectrum-towers","\u9891\u8C31\u5854\u6797","spectrum",i=>t_(i),["creative/towers","towers"]],["spectrum-sphere","\u9891\u8C31\u7403","spectrum",i=>Mr(i,"spectrum-sphere",[16755322,8707583]),["creative/orb"]],["light-tunnel","\u5149\u96A7\u9053","spectrum",i=>n_(i,!0),["creative/tunnel","tunnel"]],["spectrum-nebula","\u661F\u4E91","spectrum",i=>Mr(i,"nebula",[7461362,15827641]),["creative/nebula","nebula"]],["spectrum-terrain","\u9891\u8C31\u5730\u5F62","spectrum",i=>Td(i),["creative/terrain","terrain"]],["lyric-corridor","\u4E09\u7EF4\u6B4C\u8BCD","lyrics",i=>Ys(i),["creative/lyric","lyric","stage"]],["word-wipe","\u9010\u5B57\u64E6\u9664","lyrics",i=>Ys(i,"wipe"),["space-layers/karaoke"]],["lyric-classic","\u6D41\u5149","lyrics",i=>Ys(i,"classic"),["classic"]],["lyric-cadenza","\u5FC3\u8C61","lyrics",i=>Ys(i,"cadenza"),["cadenza"]],["lyric-sonnet","\u5546\u7C41","lyrics",i=>Ys(i,"sonnet"),["sonnet"]],["lyric-tempera","\u51DD\u5F69","lyrics",i=>Ys(i,"tempera"),["tempera"]],["handdrawn-manga","\u6F2B\u753B\u6750\u8D28","material",i=>Eu(i,"manga"),["handdrawn/manga"]],["handdrawn-anime","\u8D5B\u7490\u7490\u6750\u8D28","material",i=>Eu(i,"anime"),["handdrawn/anime"]],["handdrawn-pencil","\u94C5\u7B14\u6750\u8D28","material",i=>Eu(i,"pencil"),["handdrawn/pencil"]],["handdrawn-color","\u53CC\u8272\u6750\u8D28","material",i=>Eu(i,"color"),["handdrawn/color"]],["background-mesh","\u7A7A\u95F4\u6E10\u53D8\u7F51\u683C","background",i=>Td(i,"mesh"),["backgrounds/mesh","stanza/geometric"]],["background-flow","\u7A7A\u95F4\u6D41\u573A","background",i=>Mr(i,"flow"),["backgrounds/flow","stanza/fluid"]],["background-spectrogram","\u7A7A\u95F4\u9891\u8C31\u8272\u8C31","background",i=>Td(i,"spectrogram"),["backgrounds/spectrogram"]],["background-cover","\u5C01\u9762\u6C1B\u56F4","background",i=>Mr(i,"cover"),["backgrounds/cover","stanza/atmosphere"]],["cover-wall","\u66F2\u9762\u5C01\u9762\u5899","artwork",o_,["space-layers/bgwall","bgwall"]]];function Q2([i,e,t,n,r=[]]){let s=t==="lyrics",o=i.includes("tunnel"),a=i.includes("galaxy"),l=i.includes("terrain")||i==="background-mesh"||i==="background-spectrogram",c=["classic","cadenza","sonnet","tempera"].find(d=>i==="lyric-"+d),u=(d,p=!0)=>({type:"boolean",label:d,default:p}),f=i.includes("sphere")||i==="background-cover",h=i==="spectrum-towers";return{apiVersion:1,id:i,stateVersion:1,label:e,category:{particles:"\u661F\u7A7A",artwork:"\u5C01\u9762\u827A\u672F",spectrum:"\u9891\u8C31",lyrics:"\u6B4C\u8BCD",material:"\u6750\u8D28",background:"\u7A7A\u95F4\u80CC\u666F"}[t],aliases:r,preview:"/space-scene-preview/"+i+".jpg",params:{...Ua,...Zs,reduced:{type:"boolean",label:"\u51CF\u5C11\u52A8\u6001",default:!1},...t==="particles"||i==="cover-particles"?{pointSize:xt("\u7C92\u5B50\u5927\u5C0F",1,.6,1.8),pointerStrength:xt("\u60AC\u505C\u51F9\u9677",1,0,2)}:{},...i==="cover-particles"?{relief:xt("\u5C01\u9762\u8D77\u4F0F",1,0,2.5)}:{},...s?{textWidth:xt("\u6587\u5B57\u5BBD\u5EA6",12,6,18,.5),spacing:xt("\u884C\u8DDD",2.1,1.4,4,.1),arc:xt("\u6B4C\u8BCD\u5F27\u5EA6",.7,0,3,.1),karaoke:{type:"boolean",label:"\u9010\u5B57\u9AD8\u4EAE",default:!0},layout:$r("\u821E\u53F0\u4E3B\u9898","venue",["venue","diorama","tempo","still"])}:{},...c?{scale:xt("\u6B4C\u8BCD\u5B57\u53F7",1,.5,2),reactivity:xt("\u5F8B\u52A8\u5F3A\u5EA6",1.35,0,2),speed:xt("\u955C\u5934\u52A8\u6001",.65,0,2)}:{},...i==="lyric-classic"?{rotation:u("\u8BCD\u8BED\u65CB\u8F6C"),breathing:xt("\u547C\u5438\u5E45\u5EA6",1,0,2),wordSpacing:xt("\u8BCD\u8BED\u95F4\u8DDD",.7,0,2)}:{},...i==="lyric-cadenza"?{width:xt("\u6392\u7248\u5BBD\u5EA6",.72,.5,.9,.01),motion:xt("\u8FD0\u52A8\u5E45\u5EA6",1,0,2),glow:xt("\u8F89\u5149\u5F3A\u5EA6",1,0,1.6),beam:xt("\u5149\u675F\u5F3A\u5EA6",0,0,1.2)}:{},...i==="lyric-tempera"?{colorMode:$r("\u5957\u8272\u98CE\u683C","duo",["duo","mono","vivid"]),composition:$r("\u8272\u5757\u6784\u56FE","auto",["auto","split-duo","quad-grid","diagonal-cut","triptych","banded","poster-frame","fan-burst","shutters","offset-collage"]),screens:u("\u7F51\u5C4F\u7EB9\u7406"),inversion:u("\u626B\u5149\u53CD\u8272"),seams:u("\u5370\u5237\u63A5\u7F1D"),halation:xt("\u5149\u6655\u5F3A\u5EA6",.5,0,1)}:{},...i==="lyric-sonnet"?{shotFlow:$r("\u955C\u5934\u7F16\u6392","auto",["auto","editorial-column","type-impact","fragment-collage","tracking-ribbon","mask-reveal","poster-blocks","quiet-tableau"]),sceneKind:$r("\u7A7A\u95F4\u8C31\u9762","orbital",["orbital","constellation","perspective","wave-score","orrery","editorial-lattice"]),lyricLayout:$r("\u6B4C\u8BCD\u6392\u7248","phrases",[{value:"phrases",label:"\u77ED\u53E5"},{value:"lines",label:"\u6574\u884C"},{value:"staircase",label:"\u9636\u68AF"},{value:"editorial-track",label:"\u6587\u5B57\u8F68\u9053"}]),phraseLength:xt("\u77ED\u53E5\u957F\u5EA6",12,4,24,1),decor:u("\u753B\u9762\u88C5\u9970"),accents:u("\u5F3A\u8C03\u7279\u6548"),atmosphere:u("\u6C1B\u56F4\u5149"),halation:xt("\u5149\u6655\u5F3A\u5EA6",.5,0,1)}:{},...i==="cover-wall"?{radius:xt("\u66F2\u9762\u534A\u5F84",11,7,18,.5),coverIndex:xt("\u5F53\u524D\u5C01\u9762",0,0,1e5,1)}:{}},camera:{theta:a||h?.3:0,phi:i==="cover-particles"?0:l||h||a?.35:.06,radius:o?5:s?15:a?21:l?22:f?9.2:i==="cover-wall"?8:i==="cover-particles"?9.6:13,lookAt:l?[0,-1,-2]:o?[0,0,-4]:[0,0,0],fov:i==="cover-particles"?54:58,minRadius:3,maxRadius:36,orbit:!0,zoom:!0},capabilities:{interaction:!0,threejs:!0,depth:!0,lyrics:s,ownsLyrics:s,...c?{stanzaRenderer:c}:{},effects:!0,director:!0,cues:!0,cover:i.includes("cover")},quality:i==="cover-particles"?{low:{particles:9216,drawCalls:16},medium:{particles:20736,drawCalls:20},high:{particles:36864,drawCalls:24}}:{low:{particles:4e3,drawCalls:16},medium:{particles:7e3,drawCalls:20},high:{particles:1e4,drawCalls:24}},create(d){let p=n(d),v=u0(d,d.layer==="lyrics"?[]:void 0),g=d.params;return{update(m){let _=wd(m,g.reduced,s),y=_.sceneTime;p.update(_),v.update(_),p.group&&!s&&(p.group.rotation.z=g.director?Math.sin(y*.08)*.04:0,p.group.scale.setScalar((g.scale??1)*(g.cue==="chorus"?1.08:1)),p.group.rotation.x=g.cue==="bridge"?.06:0)},resize(m,_){p.resize(m,_),v.resize(m,_)},setParams(m){g=m,p.setParams(m),v.setParams(m)},setQuality(m){p.setQuality(m),v.setQuality(m)},dispose(){v.dispose(),p.dispose()},stats:()=>({primary:p.stats?.(),effects:v.stats()})}}}}var j2=K2.map(Q2);function d_(i){j2.forEach(e=>i.register(e))}var ci=Nm(),p_=Nm(),m_={interaction:!0,ownsLyrics:!1,effects:!0,threejs:!0};ci.register({apiVersion:1,id:"coast",stateVersion:1,label:"\u6D77\u5CB8\u516C\u8DEF",category:"world",preview:"/space-scene-preview/coast.jpg",aliases:[],params:{...c0,tod:{type:"number",label:"\u65F6\u6BB5",default:0,min:0,max:1,step:.01},reduced:{type:"boolean",label:"\u51CF\u5C11\u52A8\u6001",default:!1}},camera:{theta:-1.071,phi:.346,radius:5.33,fov:44,lookAt:[0,1.05,.9],minRadius:2.4,maxRadius:15},capabilities:m_,quality:{pooled:!0},create:i=>h0(i,Ax(i))});ci.register({apiVersion:1,id:"zodiac",stateVersion:1,label:"\u661F\u5EA7",category:"world",preview:"/space-scene-preview/zodiac.jpg",aliases:[],params:{...c0,sign:{type:"select",label:"\u661F\u5EA7",default:"cycle",options:[{value:"cycle",label:"\u5FAA\u73AF"},...yd.ZODIAC.map(i=>({value:i.id,label:i.cn}))]},field:{type:"boolean",label:"\u661F\u5C18",default:!0},glow:{type:"number",label:"\u8F89\u5149",default:1,min:0,max:2,step:.05},speed:{type:"number",label:"\u8FD0\u52A8",default:1,min:.15,max:3,step:.05},reduced:{type:"boolean",label:"\u51CF\u5C11\u52A8\u6001",default:!1}},camera:{theta:0,phi:.06,radius:11.87,fov:52,lookAt:[0,0,0],minRadius:2.6,maxRadius:30,fit:{halfWidth:yd.FIG_HALF_W*1.3,halfHeight:yd.FIG_HALF*1.3}},capabilities:m_,quality:{pooled:!0},create:i=>h0(i,Jx(i))});d_(ci);h_(p_);var eE=()=>ci.catalog(),tE=()=>p_.catalog(),nE=i=>ci.register(i),iE=i=>ci.resolve(i)||null,rE=(i,e)=>ci.normalizeState(i,e);function sE(i){if(!i)return null;if(typeof i!="object")throw new Error("Invalid camera pose");let e=i.lookAt||[i.tx||0,i.ty||0,i.tz||0],t=i.world||{},n={yaw:i.theta===void 0?i.yaw||0:i.theta+(t.y||t.cy||0),pitch:i.phi===void 0?i.pitch||0:i.phi+(t.x||t.cx||0),dist:i.radius===void 0?i.dist||8:i.radius,fov:i.fov||52,tx:e[0],ty:e[1],tz:e[2],roll:i.roll||0,external:!0};if(i.position!==void 0){if(!Array.isArray(i.position)||i.position.length!==3||!i.position.every(Number.isFinite))throw new Error("Invalid free camera position");n.position=i.position.slice()}if(!Object.values(n).filter(r=>typeof r=="number").every(Number.isFinite))throw new Error("Invalid camera pose values");return n}function oE(i,e={}){if(!i||typeof i.addEventListener!="function")throw new Error("Stage requires a canvas");let t=ox(e.qualityMode,e.deviceTier),n=Jf(),r=xi(ri,e.onInvalidate,L=>d.resolveCover?d.resolveCover(L):L);n.defer(()=>r.dispose());let s;try{s=new gr({canvas:i,antialias:!1,powerPreference:"high-performance"})}catch(L){throw n.dispose(),new Error(`WebGL initialization failed: ${L.message}`)}s.info.autoReset=!1;let o=null,a=null,l=0,c=0,u=!1,f=640,h=360,d={spatialResources:r},p=null,v="idle",g="",m=!1,_=0,y=null,x=[],S=0,b=null;function C(){let L=s.info,F=x.slice().sort((ee,ne)=>ee-ne),G=F.length?F[Math.floor(F.length/2)]:null,Q=o?o.scope.stats():{resources:0,tasks:0,estimatedBytes:0},q=a?a.scope.stats():{resources:0,tasks:0,estimatedBytes:0},Z=r.stats(),K=o&&o.post&&o.post.stats?o.post.stats():{bytes:0};return{state:v,id:o&&o.def.id,lyricId:a&&a.def.id,error:g,...t.status(),frameCount:_,actualFps:G?1e3/G:null,frameIntervalP95:F.length?F[Math.floor(F.length*.95)]:null,cpuUpdateRenderMs:S,gpuMs:b,gpuTimingSource:"unavailable",drawCalls:L.render.calls,points:L.render.points,triangles:L.render.triangles,geometries:L.memory.geometries,textures:L.memory.textures,programs:L.programs?L.programs.length:0,physicalPixels:i.width*i.height,memorySource:"tracked-resource-estimate",...Q,resources:Q.resources+q.resources,estimatedBytes:Q.estimatedBytes+q.estimatedBytes+Z.bytes+K.bytes,textTextures:Z.textTextures,coverTextures:Z.coverTextures,tasks:Q.tasks+q.tasks+Z.queued}}function M(){typeof e.onStatus=="function"&&e.onStatus(C())}function T(){let L=o;o=null,L&&(L.scope.trackTree(L.scene),L.scope.dispose(),L.scene.clear(),s.renderLists.dispose(),s.info.reset())}function E(){let L=a;a=null,L&&(L.scope.trackTree(L.scene),L.scope.dispose(),L.scene.clear(),s.renderLists.dispose())}async function I(L,F={}){if(u)throw new Error("Stage disposed");if(m)throw new Error("WebGL context is lost; recreate the stage to retry");let G=L?ci.normalizeState(L,F):null,Q=G&&ci.get(G.id);if(Q&&!Q.capabilities.ownsLyrics)throw new Error("Expected a lyric effect");let q=++c;if(E(),!Q)return M(),null;let Z=Jf(),K=new ei,ee=new Nt(Q.camera.fov||58,f/h,.05,900);ee.position.set(0,0,Q.camera.radius||15),ee.lookAt(0,0,0);let ne={THREE:ri,scene:K,camera:ee,renderer:s,scope:Z,layer:"lyrics",params:G.params,quality:t.profile(),signal:Z.signal,services:d},ze={def:Q,scene:K,camera:ee,scope:Z,context:ne,params:G.params,instance:null};a=ze;try{let Ce=await Q.create(ne);if(!Ce||typeof Ce.update!="function"||typeof Ce.dispose!="function")throw new Error("Invalid lyric instance");return u||q!==c||Z.signal.aborted?(Ce.dispose(),Z.trackTree(K),Z.dispose(),null):(ze.instance=Ce,Z.defer(()=>Ce.dispose()),Z.trackTree(K),Ce.setParams?.(ze.params),Ce.setQuality?.(t.profile()),Ce.resize?.(f,h),t.warmup(null),M(),G)}catch(Ce){throw Z.trackTree(K),Z.dispose(),a===ze&&(a=null,M()),Ce}}function D(L,F){u||(f=Math.max(2,Math.floor(Number(L)||2)),h=Math.max(2,Math.floor(Number(F)||2)),s.setPixelRatio(t.dpr(f,h,globalThis.devicePixelRatio||1)),s.setSize(f,h,!1),t.warmup(null),o&&(o.camera.aspect=f/h,o.camera.updateProjectionMatrix(),o.instance&&o.instance.resize&&o.instance.resize(f,h),o.post&&o.post.resize(f,h)),a&&(a.camera.aspect=f/h,a.camera.updateProjectionMatrix(),a.instance?.resize?.(f,h)))}function U(){D(f,h),o&&o.instance&&o.instance.setQuality&&o.instance.setQuality(t.profile()),o&&o.post&&o.post.setQuality(t.profile()),a?.instance?.setQuality?.(t.profile()),M()}function N(L){g=L instanceof Error?L.message:String(L),v="failed",l++,c++,T(),E(),M()}return n.listen(i,"webglcontextlost",L=>{L.preventDefault(),m=!0,N("WebGL context lost")}),n.listen(i,"webglcontextrestored",()=>{m=!1,t.warmup(null),v="idle",M()}),D(i.clientWidth||640,i.clientHeight||360),{selectLyrics:I,async select(L,F={}){if(u)throw new Error("Stage disposed");if(m)throw new Error("WebGL context is lost; recreate the stage to retry");let G=ci.normalizeState(L,F),Q=ci.get(G.id),q=++l;T(),s.setRenderTarget(null),s.setClearColor(197637,1),s.outputColorSpace=Qt,s.toneMapping=gn,s.toneMappingExposure=1,s.shadowMap.enabled=!1;let Z=Jf(),K=new ei,ee=new Nt(52,f/h,.05,900);K.background=new xe(197637);let ne=Q.camera;if(ne.position)ee.position.fromArray(ne.position);else{let Ve=Math.cos(ne.phi||0),W=ne.radius||8;ee.position.set(Math.sin(ne.theta||0)*Ve*W,Math.sin(ne.phi||0)*W,Math.cos(ne.theta||0)*Ve*W)}ee.lookAt(...ne.lookAt||[0,0,0]),ee.fov=ne.fov||52,ee.updateProjectionMatrix();let ze={THREE:ri,scene:K,camera:ee,renderer:s,scope:Z,params:G.params,quality:t.profile(),signal:Z.signal,services:d};o={def:Q,scene:K,camera:ee,scope:Z,params:G.params,context:ze,instance:null,post:null};let Ce=o;v="loading",g="",M();try{let Ve=await Q.create(ze);if(!Ve||typeof Ve.update!="function"||typeof Ve.dispose!="function")throw new Error("Invalid scene instance");return u||q!==l||Z.signal.aborted?(Ve.dispose(),Z.trackTree(K),Z.dispose(),null):(Ce.instance=Ve,Z.defer(()=>Ve.dispose()),Z.trackTree(K),Ce.post=f_(ze),Ce.post&&Z.defer(()=>Ce.post.dispose()),Ve.setParams&&Ve.setParams(Ce.params),Ve.setRig&&Ve.setRig(p),U(),v="ready",y=null,x=[],t.warmup(null),M(),G)}catch(Ve){throw Z.trackTree(K),Z.dispose(),q===l&&!u&&(o=null,N(Ve)),Ve}},frame(L={}){if(u||v!=="ready"||!o||typeof document<"u"&&document.hidden)return!1;let F=Number.isFinite(L.now)?L.now:performance.now();y!==null&&F-y>500&&(x=[],y=null,t.warmup(null));let G=Number.isFinite(L.dt)?Math.max(0,Math.min(L.dt,.25)):y===null?.016:Math.min((F-y)/1e3,.25);y!==null&&F>y&&(x.push(F-y),x.length>240&&x.shift()),y=F;let Q=performance.now();try{if(L.deviceTier!==void 0&&t.setDeviceTier(L.deviceTier)&&U(),r.beginFrame(F),o.instance.update({...L,now:F,dt:G}),a?.instance&&(a.scene.visible=!!L.lyrics?.lines?.length&&!o.def.capabilities.ownsLyrics,a.instance.update({...L,now:F,dt:G})),o.post&&o.post.update&&o.post.update(L),s.info.reset(),o.post?o.post.render(s,o.scene,o.camera):s.render(o.scene,o.camera),a?.instance&&a.scene.visible){let q=s.autoClear,Z=s.toneMapping,K=s.toneMappingExposure;try{s.setRenderTarget(null),s.autoClear=!1,s.toneMapping=gn,s.toneMappingExposure=1,s.clearDepth(),s.render(a.scene,a.camera)}finally{s.autoClear=q,s.toneMapping=Z,s.toneMappingExposure=K}}return S=performance.now()-Q,_++,t.sample(F,()=>{let q=s.info.render,Z=o.scope.stats(),K=r.stats(),ee=o.post&&o.post.stats?o.post.stats().bytes:0;return{drawCalls:q.calls,points:q.points,triangles:q.triangles,estimatedBytes:Z.estimatedBytes+(a?a.scope.stats().estimatedBytes:0)+K.bytes+ee}},S)&&U(),_%120===0&&M(),!0}catch(q){return N(q),!1}},resize:D,setQualityMode(L){u||(t.setMode(L),U())},setDeviceTier(L){!u&&t.setDeviceTier(L)&&U()},effectiveQuality(){return t.profile().mode},setLyricParams(L){if(!a?.instance)return null;let F=ci.validateParams(a.def.id,L,a.params);return a.params=F,a.context.params=F,a.instance.setParams?.(F),{id:a.def.id,stateVersion:a.def.stateVersion,params:F}},setParams(L){if(!o||!o.instance)return null;let F=ci.validateParams(o.def.id,L,o.params);o.params=F,o.context.params=F;try{o.instance.setParams&&o.instance.setParams(F),o.post&&o.post.setParams(F)}catch(G){throw N(G),G}return{id:o.def.id,stateVersion:o.def.stateVersion,params:F}},setRig(L){if(p=sE(L),!(!o||!o.instance)){if(p&&!p.position&&o.def.camera.fit){let F=o.def.camera.fit,G=Math.tan(p.fov*Math.PI/360),Q=Math.max(F.halfHeight/G,F.halfWidth/(G*f/h));p.dist*=Math.max(1,Q/o.def.camera.radius)}if(o.instance.setRig)o.instance.setRig(p);else if(p){let F=o.camera;if(p.position)F.position.fromArray(p.position),F.rotation.set(p.pitch,p.yaw,p.roll,"YXZ");else{let G=Math.cos(p.pitch);F.position.set(p.tx+Math.sin(p.yaw)*G*p.dist,p.ty+Math.sin(p.pitch)*p.dist,p.tz+Math.cos(p.yaw)*G*p.dist),F.lookAt(p.tx,p.ty,p.tz),F.rotateZ(p.roll)}F.fov=p.fov,F.updateProjectionMatrix()}}},setServices(L={}){Object.keys(d).filter(F=>F!=="spatialResources").forEach(F=>delete d[F]),Object.assign(d,L,{spatialResources:r})},dispose(){u||(u=!0,l++,c++,T(),E(),n.dispose(),s.dispose(),s.forceContextLoss(),v="disposed",M())},stats:C}}return y_(aE);})();
