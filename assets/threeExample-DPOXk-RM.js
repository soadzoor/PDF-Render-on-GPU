import{R as Vt,o as cu,e as uu,d as hu,b as Ks,a as du,c as fu,f as pu,P as mu,q as gu,r as Ni,i as _u,l as xu,p as vu,j as Su,h as Mu,m as Tu,n as yu}from"./client-GTiz-NFi.js";import{GlobalWorkerOptions as Eu}from"./pdf-TYrZqVzP.js";const Js="183",Mn={ROTATE:0,DOLLY:1,PAN:2},Bn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bu=0,Do=1,Au=2,Ur=1,Cu=2,Yi=3,Vn=0,It=1,Zt=2,Tn=0,Ci=1,Lo=2,Io=3,Uo=4,jl=5,Kn=100,wu=101,Ru=102,Pu=103,Du=104,Lu=200,ns=201,Iu=202,Uu=203,is=204,Zi=205,Fu=206,Nu=207,Ou=208,Bu=209,zu=210,Gu=211,Vu=212,Hu=213,ku=214,rs=0,as=1,ss=2,Ri=3,os=4,ls=5,cs=6,us=7,Zl=0,Wu=1,Xu=2,on=0,Kl=1,Jl=2,Ql=3,ec=4,tc=5,nc=6,ic=7,rc=300,ni=301,Pi=302,xa=303,va=304,na=306,hs=1e3,yt=1001,ds=1002,gt=1003,qu=1004,ar=1005,pt=1006,Sa=1007,Sn=1008,Gt=1009,ac=1010,sc=1011,Ki=1012,Qs=1013,ln=1014,Ht=1015,bn=1016,eo=1017,to=1018,Ji=1020,oc=35902,lc=35899,cc=1021,uc=1022,Lt=1023,An=1026,ei=1027,no=1028,io=1029,Di=1030,ro=1031,ao=1033,Fr=33776,Nr=33777,Or=33778,Br=33779,fs=35840,ps=35841,ms=35842,gs=35843,_s=36196,xs=37492,vs=37496,Ss=37488,Ms=37489,Ts=37490,ys=37491,Es=37808,bs=37809,As=37810,Cs=37811,ws=37812,Rs=37813,Ps=37814,Ds=37815,Ls=37816,Is=37817,Us=37818,Fs=37819,Ns=37820,Os=37821,Bs=36492,zs=36494,Gs=36495,Vs=36283,Hs=36284,ks=36285,Ws=36286,Yu=3200,$u=0,ju=1,On="",Bt="srgb",Li="srgb-linear",Vr="linear",Ze="srgb",ci=7680,Fo=519,Zu=512,Ku=513,Ju=514,so=515,Qu=516,eh=517,oo=518,th=519,No=35044,bi="300 es",sn=2e3,Hr=2001;function nh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ih(){const i=kr("canvas");return i.style.display="block",i}const Oo={};function Bo(...i){const e="THREE."+i.shift();console.log(e,...i)}function hc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Re(...i){i=hc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function He(...i){i=hc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Wr(...i){const e=i.join(" ");e in Oo||(Oo[e]=!0,Re(...i))}function rh(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const ah={[rs]:as,[ss]:cs,[os]:us,[Ri]:ls,[as]:rs,[cs]:ss,[us]:os,[ls]:Ri};class ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zr=Math.PI/180,Xs=180/Math.PI;function er(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function ze(i,e,t){return Math.max(e,Math.min(t,i))}function sh(i,e){return(i%e+e)%e}function Ma(i,e,t){return(1-t)*i+t*e}function Oi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const oh={DEG2RAD:zr};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let l=n[r+0],c=n[r+1],d=n[r+2],p=n[r+3],u=a[s+0],m=a[s+1],_=a[s+2],S=a[s+3];if(p!==S||l!==u||c!==m||d!==_){let f=l*u+c*m+d*_+p*S;f<0&&(u=-u,m=-m,_=-_,S=-S,f=-f);let h=1-o;if(f<.9995){const M=Math.acos(f),b=Math.sin(M);h=Math.sin(h*M)/b,o=Math.sin(o*M)/b,l=l*h+u*o,c=c*h+m*o,d=d*h+_*o,p=p*h+S*o}else{l=l*h+u*o,c=c*h+m*o,d=d*h+_*o,p=p*h+S*o;const M=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=M,c*=M,d*=M,p*=M}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],l=n[r+1],c=n[r+2],d=n[r+3],p=a[s],u=a[s+1],m=a[s+2],_=a[s+3];return e[t]=o*_+d*p+l*m-c*u,e[t+1]=l*_+d*u+c*p-o*m,e[t+2]=c*_+d*m+o*u-l*p,e[t+3]=d*_-o*p-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(r/2),p=o(a/2),u=l(n/2),m=l(r/2),_=l(a/2);switch(s){case"XYZ":this._x=u*d*p+c*m*_,this._y=c*m*p-u*d*_,this._z=c*d*_+u*m*p,this._w=c*d*p-u*m*_;break;case"YXZ":this._x=u*d*p+c*m*_,this._y=c*m*p-u*d*_,this._z=c*d*_-u*m*p,this._w=c*d*p+u*m*_;break;case"ZXY":this._x=u*d*p-c*m*_,this._y=c*m*p+u*d*_,this._z=c*d*_+u*m*p,this._w=c*d*p-u*m*_;break;case"ZYX":this._x=u*d*p-c*m*_,this._y=c*m*p+u*d*_,this._z=c*d*_-u*m*p,this._w=c*d*p+u*m*_;break;case"YZX":this._x=u*d*p+c*m*_,this._y=c*m*p+u*d*_,this._z=c*d*_-u*m*p,this._w=c*d*p-u*m*_;break;case"XZY":this._x=u*d*p-c*m*_,this._y=c*m*p-u*d*_,this._z=c*d*_+u*m*p,this._w=c*d*p+u*m*_;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],p=t[10],u=n+o+p;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-l)*m,this._y=(a-c)*m,this._z=(s-r)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(d-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(a-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(s-r)/m,this._x=(a+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+s*o+r*c-a*l,this._y=r*d+s*l+a*o-n*c,this._z=a*d+s*c+n*l-r*o,this._w=s*d-n*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,a=-a,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*n),d=2*(o*t-a*r),p=2*(a*n-s*t);return this.x=t+l*c+s*p-o*d,this.y=n+l*d+o*c-a*p,this.z=r+l*p+a*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-n*l,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ta.copy(this).projectOnVector(e),this.sub(Ta)}reflect(e){return this.sub(Ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ta=new U,zo=new Cn;class Ue{constructor(e,t,n,r,a,s,o,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c)}set(e,t,n,r,a,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=a,d[5]=l,d[6]=n,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],d=n[4],p=n[7],u=n[2],m=n[5],_=n[8],S=r[0],f=r[3],h=r[6],M=r[1],b=r[4],E=r[7],R=r[2],A=r[5],D=r[8];return a[0]=s*S+o*M+l*R,a[3]=s*f+o*b+l*A,a[6]=s*h+o*E+l*D,a[1]=c*S+d*M+p*R,a[4]=c*f+d*b+p*A,a[7]=c*h+d*E+p*D,a[2]=u*S+m*M+_*R,a[5]=u*f+m*b+_*A,a[8]=u*h+m*E+_*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-n*a*d+n*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=d*s-o*c,u=o*l-d*a,m=c*a-s*l,_=t*p+n*u+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=p*S,e[1]=(r*c-d*n)*S,e[2]=(o*n-r*s)*S,e[3]=u*S,e[4]=(d*t-r*l)*S,e[5]=(r*a-o*t)*S,e[6]=m*S,e[7]=(n*l-c*t)*S,e[8]=(s*t-n*a)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ya.makeScale(e,t)),this}rotate(e){return this.premultiply(ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new Ue,Go=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vo=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lh(){const i={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===Ze&&(r.r=yn(r.r),r.g=yn(r.g),r.b=yn(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Ze&&(r.r=wi(r.r),r.g=wi(r.g),r.b=wi(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===On?Vr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Wr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Wr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Li]:{primaries:e,whitePoint:n,transfer:Vr,toXYZ:Go,fromXYZ:Vo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:Ze,toXYZ:Go,fromXYZ:Vo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),i}const ke=lh();function yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ui;class ch{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ui===void 0&&(ui=kr("canvas")),ui.width=e.width,ui.height=e.height;const r=ui.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ui}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=yn(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yn(t[n]/255)*255):t[n]=yn(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uh=0;class lo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=er(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Ea(r[s].image)):a.push(Ea(r[s]))}else a=Ea(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ch.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let hh=0;const ba=new U;class wt extends ri{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=yt,r=yt,a=pt,s=Sn,o=Lt,l=Gt,c=wt.DEFAULT_ANISOTROPY,d=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=er(),this.name="",this.source=new lo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ba).x}get height(){return this.source.getSize(ba).y}get depth(){return this.source.getSize(ba).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hs:e.x=e.x-Math.floor(e.x);break;case yt:e.x=e.x<0?0:1;break;case ds:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hs:e.y=e.y-Math.floor(e.y);break;case yt:e.y=e.y<0?0:1;break;case ds:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=rc;wt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const l=e.elements,c=l[0],d=l[4],p=l[8],u=l[1],m=l[5],_=l[9],S=l[2],f=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(p-S)<.01&&Math.abs(_-f)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+S)<.1&&Math.abs(_+f)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(m+1)/2,R=(h+1)/2,A=(d+u)/4,D=(p+S)/4,x=(_+f)/4;return b>E&&b>R?b<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(b),r=A/n,a=D/n):E>R?E<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(E),n=A/r,a=x/r):R<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(R),n=D/a,r=x/a),this.set(n,r,a,t),this}let M=Math.sqrt((f-_)*(f-_)+(p-S)*(p-S)+(u-d)*(u-d));return Math.abs(M)<.001&&(M=1),this.x=(f-_)/M,this.y=(p-S)/M,this.z=(u-d)/M,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dh extends ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},a=new wt(r),s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new lo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jt extends dh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dc extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gt,this.minFilter=gt,this.wrapR=yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fh extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gt,this.minFilter=gt,this.wrapR=yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qe{constructor(e,t,n,r,a,s,o,l,c,d,p,u,m,_,S,f){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c,d,p,u,m,_,S,f)}set(e,t,n,r,a,s,o,l,c,d,p,u,m,_,S,f){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=a,h[5]=s,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=p,h[14]=u,h[3]=m,h[7]=_,h[11]=S,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/hi.setFromMatrixColumn(e,0).length(),a=1/hi.setFromMatrixColumn(e,1).length(),s=1/hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const u=s*d,m=s*p,_=o*d,S=o*p;t[0]=l*d,t[4]=-l*p,t[8]=c,t[1]=m+_*c,t[5]=u-S*c,t[9]=-o*l,t[2]=S-u*c,t[6]=_+m*c,t[10]=s*l}else if(e.order==="YXZ"){const u=l*d,m=l*p,_=c*d,S=c*p;t[0]=u+S*o,t[4]=_*o-m,t[8]=s*c,t[1]=s*p,t[5]=s*d,t[9]=-o,t[2]=m*o-_,t[6]=S+u*o,t[10]=s*l}else if(e.order==="ZXY"){const u=l*d,m=l*p,_=c*d,S=c*p;t[0]=u-S*o,t[4]=-s*p,t[8]=_+m*o,t[1]=m+_*o,t[5]=s*d,t[9]=S-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const u=s*d,m=s*p,_=o*d,S=o*p;t[0]=l*d,t[4]=_*c-m,t[8]=u*c+S,t[1]=l*p,t[5]=S*c+u,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const u=s*l,m=s*c,_=o*l,S=o*c;t[0]=l*d,t[4]=S-u*p,t[8]=_*p+m,t[1]=p,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*p+_,t[10]=u-S*p}else if(e.order==="XZY"){const u=s*l,m=s*c,_=o*l,S=o*c;t[0]=l*d,t[4]=-p,t[8]=c*d,t[1]=u*p+S,t[5]=s*d,t[9]=m*p-_,t[2]=_*p-m,t[6]=o*d,t[10]=S*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ph,e,mh)}lookAt(e,t,n){const r=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Dn.crossVectors(n,Nt),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Dn.crossVectors(n,Nt)),Dn.normalize(),sr.crossVectors(Nt,Dn),r[0]=Dn.x,r[4]=sr.x,r[8]=Nt.x,r[1]=Dn.y,r[5]=sr.y,r[9]=Nt.y,r[2]=Dn.z,r[6]=sr.z,r[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],d=n[1],p=n[5],u=n[9],m=n[13],_=n[2],S=n[6],f=n[10],h=n[14],M=n[3],b=n[7],E=n[11],R=n[15],A=r[0],D=r[4],x=r[8],y=r[12],q=r[1],w=r[5],G=r[9],B=r[13],k=r[2],V=r[6],z=r[10],O=r[14],Q=r[3],K=r[7],ce=r[11],fe=r[15];return a[0]=s*A+o*q+l*k+c*Q,a[4]=s*D+o*w+l*V+c*K,a[8]=s*x+o*G+l*z+c*ce,a[12]=s*y+o*B+l*O+c*fe,a[1]=d*A+p*q+u*k+m*Q,a[5]=d*D+p*w+u*V+m*K,a[9]=d*x+p*G+u*z+m*ce,a[13]=d*y+p*B+u*O+m*fe,a[2]=_*A+S*q+f*k+h*Q,a[6]=_*D+S*w+f*V+h*K,a[10]=_*x+S*G+f*z+h*ce,a[14]=_*y+S*B+f*O+h*fe,a[3]=M*A+b*q+E*k+R*Q,a[7]=M*D+b*w+E*V+R*K,a[11]=M*x+b*G+E*z+R*ce,a[15]=M*y+b*B+E*O+R*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],p=e[6],u=e[10],m=e[14],_=e[3],S=e[7],f=e[11],h=e[15],M=l*m-c*u,b=o*m-c*p,E=o*u-l*p,R=s*m-c*d,A=s*u-l*d,D=s*p-o*d;return t*(S*M-f*b+h*E)-n*(_*M-f*R+h*A)+r*(_*b-S*R+h*D)-a*(_*E-S*A+f*D)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=e[9],u=e[10],m=e[11],_=e[12],S=e[13],f=e[14],h=e[15],M=t*o-n*s,b=t*l-r*s,E=t*c-a*s,R=n*l-r*o,A=n*c-a*o,D=r*c-a*l,x=d*S-p*_,y=d*f-u*_,q=d*h-m*_,w=p*f-u*S,G=p*h-m*S,B=u*h-m*f,k=M*B-b*G+E*w+R*q-A*y+D*x;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/k;return e[0]=(o*B-l*G+c*w)*V,e[1]=(r*G-n*B-a*w)*V,e[2]=(S*D-f*A+h*R)*V,e[3]=(u*A-p*D-m*R)*V,e[4]=(l*q-s*B-c*y)*V,e[5]=(t*B-r*q+a*y)*V,e[6]=(f*E-_*D-h*b)*V,e[7]=(d*D-u*E+m*b)*V,e[8]=(s*G-o*q+c*x)*V,e[9]=(n*q-t*G-a*x)*V,e[10]=(_*A-S*E+h*M)*V,e[11]=(p*E-d*A-m*M)*V,e[12]=(o*y-s*w-l*x)*V,e[13]=(t*w-n*y+r*x)*V,e[14]=(S*b-_*R-f*M)*V,e[15]=(d*R-p*b+u*M)*V,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,l=e.z,c=a*s,d=a*o;return this.set(c*s+n,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+n,d*l-r*s,0,c*l-r*o,d*l+r*s,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,d=s+s,p=o+o,u=a*c,m=a*d,_=a*p,S=s*d,f=s*p,h=o*p,M=l*c,b=l*d,E=l*p,R=n.x,A=n.y,D=n.z;return r[0]=(1-(S+h))*R,r[1]=(m+E)*R,r[2]=(_-b)*R,r[3]=0,r[4]=(m-E)*A,r[5]=(1-(u+h))*A,r[6]=(f+M)*A,r[7]=0,r[8]=(_+b)*D,r[9]=(f-M)*D,r[10]=(1-(u+S))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinant();if(a===0)return n.set(1,1,1),t.identity(),this;let s=hi.set(r[0],r[1],r[2]).length();const o=hi.set(r[4],r[5],r[6]).length(),l=hi.set(r[8],r[9],r[10]).length();a<0&&(s=-s),qt.copy(this);const c=1/s,d=1/o,p=1/l;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=d,qt.elements[5]*=d,qt.elements[6]*=d,qt.elements[8]*=p,qt.elements[9]*=p,qt.elements[10]*=p,t.setFromRotationMatrix(qt),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,r,a,s,o=sn,l=!1){const c=this.elements,d=2*a/(t-e),p=2*a/(n-r),u=(t+e)/(t-e),m=(n+r)/(n-r);let _,S;if(l)_=a/(s-a),S=s*a/(s-a);else if(o===sn)_=-(s+a)/(s-a),S=-2*s*a/(s-a);else if(o===Hr)_=-s/(s-a),S=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=sn,l=!1){const c=this.elements,d=2/(t-e),p=2/(n-r),u=-(t+e)/(t-e),m=-(n+r)/(n-r);let _,S;if(l)_=1/(s-a),S=s/(s-a);else if(o===sn)_=-2/(s-a),S=-(s+a)/(s-a);else if(o===Hr)_=-1/(s-a),S=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hi=new U,qt=new qe,ph=new U(0,0,0),mh=new U(1,1,1),Dn=new U,sr=new U,Nt=new U,Ho=new qe,ko=new Cn;class wn{constructor(e=0,t=0,n=0,r=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],d=r[9],p=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ze(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ho.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ho,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ko.setFromEuler(this),this.setFromQuaternion(ko,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class co{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gh=0;const Wo=new U,di=new Cn,pn=new qe,or=new U,Bi=new U,_h=new U,xh=new Cn,Xo=new U(1,0,0),qo=new U(0,1,0),Yo=new U(0,0,1),$o={type:"added"},vh={type:"removed"},fi={type:"childadded",child:null},Aa={type:"childremoved",child:null};class Rt extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new U,t=new wn,n=new Cn,r=new U(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ue}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(Xo,e)}rotateY(e){return this.rotateOnAxis(qo,e)}rotateZ(e){return this.rotateOnAxis(Yo,e)}translateOnAxis(e,t){return Wo.copy(e).applyQuaternion(this.quaternion),this.position.add(Wo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xo,e)}translateY(e){return this.translateOnAxis(qo,e)}translateZ(e){return this.translateOnAxis(Yo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?or.copy(e):or.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Bi,or,this.up):pn.lookAt(or,Bi,this.up),this.quaternion.setFromRotationMatrix(pn),r&&(pn.extractRotation(r.matrixWorld),di.setFromRotationMatrix(pn),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($o),fi.child=e,this.dispatchEvent(fi),fi.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vh),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($o),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,e,_h),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,xh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*r,a[13]+=n-a[1]*t-a[5]*n-a[9]*r,a[14]+=r-a[2]*t-a[6]*n-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];a(e.shapes,p)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),p=s(e.shapes),u=s(e.skeletons),m=s(e.animations),_=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Rt.DEFAULT_UP=new U(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ti extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sh={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const S of e.hand.values()){const f=t.getJointPose(S,n),h=this._getHandJoint(c,S);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=d.position.distanceTo(p.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sh)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ti;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},lr={h:0,s:0,l:0};function wa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ke.workingColorSpace){if(e=sh(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=wa(s,a,e+1/3),this.g=wa(s,a,e),this.b=wa(s,a,e-1/3)}return ke.colorSpaceToWorking(this,r),this}setStyle(e,t=Bt){function n(a){a!==void 0&&parseFloat(a)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const n=fc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yn(e.r),this.g=yn(e.g),this.b=yn(e.b),this}copyLinearToSRGB(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return ke.workingToColorSpace(At.copy(this),e),Math.round(ze(At.r*255,0,255))*65536+Math.round(ze(At.g*255,0,255))*256+Math.round(ze(At.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.workingToColorSpace(At.copy(this),t);const n=At.r,r=At.g,a=At.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const p=s-o;switch(c=d<=.5?p/(s+o):p/(2-s-o),s){case n:l=(r-a)/p+(r<a?6:0);break;case r:l=(a-n)/p+2;break;case a:l=(n-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ke.workingColorSpace){return ke.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Bt){ke.workingToColorSpace(At.copy(this),e);const t=At.r,n=At.g,r=At.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(lr);const n=Ma(Ln.h,lr.h,t),r=Ma(Ln.s,lr.s,t),a=Ma(Ln.l,lr.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Ge;Ge.NAMES=fc;class Mh extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Yt=new U,mn=new U,Ra=new U,gn=new U,pi=new U,mi=new U,jo=new U,Pa=new U,Da=new U,La=new U,Ia=new ht,Ua=new ht,Fa=new ht;class Kt{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Yt.subVectors(e,t),r.cross(Yt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Yt.subVectors(r,t),mn.subVectors(n,t),Ra.subVectors(e,t);const s=Yt.dot(Yt),o=Yt.dot(mn),l=Yt.dot(Ra),c=mn.dot(mn),d=mn.dot(Ra),p=s*c-o*o;if(p===0)return a.set(0,0,0),null;const u=1/p,m=(c*l-o*d)*u,_=(s*d-o*l)*u;return a.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(e,t,n,r,a,s,o,l){return this.getBarycoord(e,t,n,r,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,gn.x),l.addScaledVector(s,gn.y),l.addScaledVector(o,gn.z),l)}static getInterpolatedAttribute(e,t,n,r,a,s){return Ia.setScalar(0),Ua.setScalar(0),Fa.setScalar(0),Ia.fromBufferAttribute(e,t),Ua.fromBufferAttribute(e,n),Fa.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Ia,a.x),s.addScaledVector(Ua,a.y),s.addScaledVector(Fa,a.z),s}static isFrontFacing(e,t,n,r){return Yt.subVectors(n,t),mn.subVectors(e,t),Yt.cross(mn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Yt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Kt.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;pi.subVectors(r,n),mi.subVectors(a,n),Pa.subVectors(e,n);const l=pi.dot(Pa),c=mi.dot(Pa);if(l<=0&&c<=0)return t.copy(n);Da.subVectors(e,r);const d=pi.dot(Da),p=mi.dot(Da);if(d>=0&&p<=d)return t.copy(r);const u=l*p-d*c;if(u<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(n).addScaledVector(pi,s);La.subVectors(e,a);const m=pi.dot(La),_=mi.dot(La);if(_>=0&&m<=_)return t.copy(a);const S=m*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(mi,o);const f=d*_-m*p;if(f<=0&&p-d>=0&&m-_>=0)return jo.subVectors(a,r),o=(p-d)/(p-d+(m-_)),t.copy(r).addScaledVector(jo,o);const h=1/(f+S+u);return s=S*h,o=u*h,t.copy(n).addScaledVector(pi,s).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class cn{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,$t):$t.fromBufferAttribute(a,s),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(e.matrixWorld),this.union(cr)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),ur.subVectors(this.max,zi),gi.subVectors(e.a,zi),_i.subVectors(e.b,zi),xi.subVectors(e.c,zi),In.subVectors(_i,gi),Un.subVectors(xi,_i),Xn.subVectors(gi,xi);let t=[0,-In.z,In.y,0,-Un.z,Un.y,0,-Xn.z,Xn.y,In.z,0,-In.x,Un.z,0,-Un.x,Xn.z,0,-Xn.x,-In.y,In.x,0,-Un.y,Un.x,0,-Xn.y,Xn.x,0];return!Na(t,gi,_i,xi,ur)||(t=[1,0,0,0,1,0,0,0,1],!Na(t,gi,_i,xi,ur))?!1:(hr.crossVectors(In,Un),t=[hr.x,hr.y,hr.z],Na(t,gi,_i,xi,ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _n=[new U,new U,new U,new U,new U,new U,new U,new U],$t=new U,cr=new cn,gi=new U,_i=new U,xi=new U,In=new U,Un=new U,Xn=new U,zi=new U,ur=new U,hr=new U,qn=new U;function Na(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){qn.fromArray(i,a);const o=r.x*Math.abs(qn.x)+r.y*Math.abs(qn.y)+r.z*Math.abs(qn.z),l=e.dot(qn),c=t.dot(qn),d=n.dot(qn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const ft=new U,dr=new De;let Th=0;class Ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Th++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=No,this.updateRanges=[],this.gpuType=Ht,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array),a=Pt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==No&&(e.usage=this.usage),e}}class pc extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mc extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class En extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}const yh=new cn,Gi=new U,Oa=new U;class ai{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yh.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gi.subVectors(e,this.center);const t=Gi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Gi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gi.copy(e.center).add(Oa)),this.expandByPoint(Gi.copy(e.center).sub(Oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Eh=0;const zt=new qe,Ba=new Rt,vi=new U,Ot=new cn,Vi=new cn,Mt=new U;class hn extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nh(e)?mc:pc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ue().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return Ba.lookAt(e),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new En(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Ot.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Vi.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Ot.min,Vi.min),Ot.expandByPoint(Mt),Mt.addVectors(Ot.max,Vi.max),Ot.expandByPoint(Mt)):(Ot.expandByPoint(Vi.min),Ot.expandByPoint(Vi.max))}Ot.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)Mt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Mt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Mt.fromBufferAttribute(o,c),l&&(vi.fromBufferAttribute(e,c),Mt.add(vi)),r=Math.max(r,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new U,l[x]=new U;const c=new U,d=new U,p=new U,u=new De,m=new De,_=new De,S=new U,f=new U;function h(x,y,q){c.fromBufferAttribute(n,x),d.fromBufferAttribute(n,y),p.fromBufferAttribute(n,q),u.fromBufferAttribute(a,x),m.fromBufferAttribute(a,y),_.fromBufferAttribute(a,q),d.sub(c),p.sub(c),m.sub(u),_.sub(u);const w=1/(m.x*_.y-_.x*m.y);isFinite(w)&&(S.copy(d).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(w),f.copy(p).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(w),o[x].add(S),o[y].add(S),o[q].add(S),l[x].add(f),l[y].add(f),l[q].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,y=M.length;x<y;++x){const q=M[x],w=q.start,G=q.count;for(let B=w,k=w+G;B<k;B+=3)h(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new U,E=new U,R=new U,A=new U;function D(x){R.fromBufferAttribute(r,x),A.copy(R);const y=o[x];b.copy(y),b.sub(R.multiplyScalar(R.dot(y))).normalize(),E.crossVectors(A,y);const w=E.dot(l[x])<0?-1:1;s.setXYZW(x,b.x,b.y,b.z,w)}for(let x=0,y=M.length;x<y;++x){const q=M[x],w=q.start,G=q.count;for(let B=w,k=w+G;B<k;B+=3)D(e.getX(B+0)),D(e.getX(B+1)),D(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const r=new U,a=new U,s=new U,o=new U,l=new U,c=new U,d=new U,p=new U;if(e)for(let u=0,m=e.count;u<m;u+=3){const _=e.getX(u+0),S=e.getX(u+1),f=e.getX(u+2);r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,S),s.fromBufferAttribute(t,f),d.subVectors(s,a),p.subVectors(r,a),d.cross(p),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,f),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),d.subVectors(s,a),p.subVectors(r,a),d.cross(p),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,p=o.normalized,u=new c.constructor(l.length*d);let m=0,_=0;for(let S=0,f=l.length;S<f;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*d;for(let h=0;h<d;h++)u[_++]=c[m++]}return new Ut(u,d,p)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,p=c.length;d<p;d++){const u=c[d],m=e(u,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,u=c.length;p<u;p++){const m=c[p];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],p=a[c];for(let u=0,m=p.length;u<m;u++)d.push(p[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let bh=0;class ia extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=er(),this.name="",this.type="Material",this.blending=Ci,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=is,this.blendDst=Zi,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==is&&(n.blendSrc=this.blendSrc),this.blendDst!==Zi&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xn=new U,za=new U,fr=new U,Fn=new U,Ga=new U,pr=new U,Va=new U;class uo{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){za.copy(e).add(t).multiplyScalar(.5),fr.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(za);const a=e.distanceTo(t)*.5,s=-this.direction.dot(fr),o=Fn.dot(this.direction),l=-Fn.dot(fr),c=Fn.lengthSq(),d=Math.abs(1-s*s);let p,u,m,_;if(d>0)if(p=s*l-o,u=s*o-l,_=a*d,p>=0)if(u>=-_)if(u<=_){const S=1/d;p*=S,u*=S,m=p*(p+s*u+2*o)+u*(s*p+u+2*l)+c}else u=a,p=Math.max(0,-(s*u+o)),m=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(s*u+o)),m=-p*p+u*(u+2*l)+c;else u<=-_?(p=Math.max(0,-(-s*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),m=-p*p+u*(u+2*l)+c):u<=_?(p=0,u=Math.min(Math.max(-a,-l),a),m=u*(u+2*l)+c):(p=Math.max(0,-(s*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),m=-p*p+u*(u+2*l)+c);else u=s>0?-a:a,p=Math.max(0,-(s*u+o)),m=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(za).addScaledVector(fr,u),m}intersectSphere(e,t){xn.subVectors(e.center,this.origin);const n=xn.dot(this.direction),r=xn.dot(xn)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(a=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(a=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,n,r,a){Ga.subVectors(t,e),pr.subVectors(n,e),Va.crossVectors(Ga,pr);let s=this.direction.dot(Va),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Fn.subVectors(this.origin,e);const l=o*this.direction.dot(pr.crossVectors(Fn,pr));if(l<0)return null;const c=o*this.direction.dot(Ga.cross(Fn));if(c<0||l+c>s)return null;const d=-o*Fn.dot(Va);return d<0?null:this.at(d/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gc extends ia{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zo=new qe,Yn=new uo,mr=new ai,Ko=new U,gr=new U,_r=new U,xr=new U,Ha=new U,vr=new U,Jo=new U,Sr=new U;class kt extends Rt{constructor(e=new hn,t=new gc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){vr.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],p=a[l];d!==0&&(Ha.fromBufferAttribute(p,e),s?vr.addScaledVector(Ha,d):vr.addScaledVector(Ha.sub(t),d))}t.add(vr)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(a),Yn.copy(e.ray).recast(e.near),!(mr.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(mr,Ko)===null||Yn.origin.distanceToSquared(Ko)>(e.far-e.near)**2))&&(Zo.copy(a).invert(),Yn.copy(e.ray).applyMatrix4(Zo),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,p=a.attributes.normal,u=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,S=u.length;_<S;_++){const f=u[_],h=s[f.materialIndex],M=Math.max(f.start,m.start),b=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let E=M,R=b;E<R;E+=3){const A=o.getX(E),D=o.getX(E+1),x=o.getX(E+2);r=Mr(this,h,e,n,c,d,p,A,D,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let f=_,h=S;f<h;f+=3){const M=o.getX(f),b=o.getX(f+1),E=o.getX(f+2);r=Mr(this,s,e,n,c,d,p,M,b,E),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,S=u.length;_<S;_++){const f=u[_],h=s[f.materialIndex],M=Math.max(f.start,m.start),b=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let E=M,R=b;E<R;E+=3){const A=E,D=E+1,x=E+2;r=Mr(this,h,e,n,c,d,p,A,D,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let f=_,h=S;f<h;f+=3){const M=f,b=f+1,E=f+2;r=Mr(this,s,e,n,c,d,p,M,b,E),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function Ah(i,e,t,n,r,a,s,o){let l;if(e.side===It?l=n.intersectTriangle(s,a,r,!0,o):l=n.intersectTriangle(r,a,s,e.side===Vn,o),l===null)return null;Sr.copy(o),Sr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Sr);return c<t.near||c>t.far?null:{distance:c,point:Sr.clone(),object:i}}function Mr(i,e,t,n,r,a,s,o,l,c){i.getVertexPosition(o,gr),i.getVertexPosition(l,_r),i.getVertexPosition(c,xr);const d=Ah(i,e,t,n,gr,_r,xr,Jo);if(d){const p=new U;Kt.getBarycoord(Jo,gr,_r,xr,p),r&&(d.uv=Kt.getInterpolatedAttribute(r,o,l,c,p,new De)),a&&(d.uv1=Kt.getInterpolatedAttribute(a,o,l,c,p,new De)),s&&(d.normal=Kt.getInterpolatedAttribute(s,o,l,c,p,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new U,materialIndex:0};Kt.getNormal(gr,_r,xr,u.normal),d.face=u,d.barycoord=p}return d}class tr extends wt{constructor(e=null,t=1,n=1,r,a,s,o,l,c=gt,d=gt,p,u){super(null,s,o,l,c,d,r,a,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qs extends Ut{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Si=new qe,Qo=new qe,Tr=[],el=new cn,Ch=new qe,Hi=new kt,ki=new ai;class wh extends kt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qs(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Ch)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Si),el.copy(e.boundingBox).applyMatrix4(Si),this.boundingBox.union(el)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Si),ki.copy(e.boundingSphere).applyMatrix4(Si),this.boundingSphere.union(ki)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=n.length+1,s=e*a+1;for(let o=0;o<n.length;o++)n[o]=r[s+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Hi.geometry=this.geometry,Hi.material=this.material,Hi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ki.copy(this.boundingSphere),ki.applyMatrix4(n),e.ray.intersectsSphere(ki)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Si),Qo.multiplyMatrices(n,Si),Hi.matrixWorld=Qo,Hi.raycast(e,Tr);for(let s=0,o=Tr.length;s<o;s++){const l=Tr[s];l.instanceId=a,l.object=this,t.push(l)}Tr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new tr(new Float32Array(r*this.count),r,this.count,no,Ht));const a=this.morphTexture.source.data.data;let s=0;for(let c=0;c<n.length;c++)s+=n[c];const o=this.geometry.morphTargetsRelative?1:1-s,l=r*e;a[l]=o,a.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ka=new U,Rh=new U,Ph=new Ue;class vn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ka.subVectors(n,t).cross(Rh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ka),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ph.getNormalMatrix(e),r=this.coplanarPoint(ka).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new ai,Dh=new De(.5,.5),yr=new U;class _c{constructor(e=new vn,t=new vn,n=new vn,r=new vn,a=new vn,s=new vn){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn,n=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],l=a[2],c=a[3],d=a[4],p=a[5],u=a[6],m=a[7],_=a[8],S=a[9],f=a[10],h=a[11],M=a[12],b=a[13],E=a[14],R=a[15];if(r[0].setComponents(c-s,m-d,h-_,R-M).normalize(),r[1].setComponents(c+s,m+d,h+_,R+M).normalize(),r[2].setComponents(c+o,m+p,h+S,R+b).normalize(),r[3].setComponents(c-o,m-p,h-S,R-b).normalize(),n)r[4].setComponents(l,u,f,E).normalize(),r[5].setComponents(c-l,m-u,h-f,R-E).normalize();else if(r[4].setComponents(c-l,m-u,h-f,R-E).normalize(),t===sn)r[5].setComponents(c+l,m+u,h+f,R+E).normalize();else if(t===Hr)r[5].setComponents(l,u,f,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){$n.center.set(0,0,0);const t=Dh.distanceTo(e.center);return $n.radius=.7071067811865476+t,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(yr.x=r.normal.x>0?e.max.x:e.min.x,yr.y=r.normal.y>0?e.max.y:e.min.y,yr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xc extends wt{constructor(e=[],t=ni,n,r,a,s,o,l,c,d){super(e,t,n,r,a,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qi extends wt{constructor(e,t,n=ln,r,a,s,o=gt,l=gt,c,d=An,p=1){if(d!==An&&d!==ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:p};super(u,r,a,s,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lh extends Qi{constructor(e,t=ln,n=ni,r,a,s=gt,o=gt,l,c=An){const d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,n,r,a,s,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vc extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class nr extends hn{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],d=[],p=[];let u=0,m=0;_("z","y","x",-1,-1,n,t,e,s,a,0),_("z","y","x",1,-1,n,t,-e,s,a,1),_("x","z","y",1,1,e,n,t,r,s,2),_("x","z","y",1,-1,e,n,-t,r,s,3),_("x","y","z",1,-1,e,t,n,r,a,4),_("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(l),this.setAttribute("position",new En(c,3)),this.setAttribute("normal",new En(d,3)),this.setAttribute("uv",new En(p,2));function _(S,f,h,M,b,E,R,A,D,x,y){const q=E/D,w=R/x,G=E/2,B=R/2,k=A/2,V=D+1,z=x+1;let O=0,Q=0;const K=new U;for(let ce=0;ce<z;ce++){const fe=ce*w-B;for(let ue=0;ue<V;ue++){const Le=ue*q-G;K[S]=Le*M,K[f]=fe*b,K[h]=k,c.push(K.x,K.y,K.z),K[S]=0,K[f]=0,K[h]=A>0?1:-1,d.push(K.x,K.y,K.z),p.push(ue/D),p.push(1-ce/x),O+=1}}for(let ce=0;ce<x;ce++)for(let fe=0;fe<D;fe++){const ue=u+fe+V*ce,Le=u+fe+V*(ce+1),et=u+(fe+1)+V*(ce+1),Ye=u+(fe+1)+V*ce;l.push(ue,Le,Ye),l.push(Le,et,Ye),Q+=6}o.addGroup(m,Q,y),m+=Q,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ra extends hn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,d=l+1,p=e/o,u=t/l,m=[],_=[],S=[],f=[];for(let h=0;h<d;h++){const M=h*u-s;for(let b=0;b<c;b++){const E=b*p-a;_.push(E,-M,0),S.push(0,0,1),f.push(b/o),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let M=0;M<o;M++){const b=M+c*h,E=M+c*(h+1),R=M+1+c*(h+1),A=M+1+c*h;m.push(b,E,A),m.push(E,R,A)}this.setIndex(m),this.setAttribute("position",new En(_,3)),this.setAttribute("normal",new En(S,3)),this.setAttribute("uv",new En(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ii(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ct(i){const e={};for(let t=0;t<i.length;t++){const n=Ii(i[t]);for(const r in n)e[r]=n[r]}return e}function Ih(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}const Uh={clone:Ii,merge:Ct};var Fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends ia{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fh,this.fragmentShader=Nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=Ih(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $i extends un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Oh extends ia{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bh extends ia{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zh extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Er=new U,br=new Cn,tn=new U;class Mc extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Er,br,tn),tn.x===1&&tn.y===1&&tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Er,br,tn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Er,br,tn),tn.x===1&&tn.y===1&&tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Er,br,tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new U,tl=new De,nl=new De;class jt extends Mc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z)}getViewSize(e,t){return this.getViewBounds(e,tl,nl),t.subVectors(nl,tl)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class aa extends Mc{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Gh extends zh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vh extends hn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Mi=-90,Ti=1;class Hh extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jt(Mi,Ti,e,t);r.layers=this.layers,this.add(r);const a=new jt(Mi,Ti,e,t);a.layers=this.layers,this.add(a);const s=new jt(Mi,Ti,e,t);s.layers=this.layers,this.add(s);const o=new jt(Mi,Ti,e,t);o.layers=this.layers,this.add(o);const l=new jt(Mi,Ti,e,t);l.layers=this.layers,this.add(l);const c=new jt(Mi,Ti,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(p,u,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class kh extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const il=new qe;class Wh{constructor(e,t,n=0,r=1/0){this.ray=new uo(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):He("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return il.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(il),this}intersectObject(e,t=!0,n=[]){return Ys(e,this,n,t),n.sort(rl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)Ys(e[r],this,n,t);return n.sort(rl),n}}function rl(i,e){return i.distance-e.distance}function Ys(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const a=i.children;for(let s=0,o=a.length;s<o;s++)Ys(a[s],e,t,!0)}}class al{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Xh extends ri{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Re("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function sl(i,e,t,n){const r=qh(n);switch(t){case cc:return i*e;case no:return i*e/r.components*r.byteLength;case io:return i*e/r.components*r.byteLength;case Di:return i*e*2/r.components*r.byteLength;case ro:return i*e*2/r.components*r.byteLength;case uc:return i*e*3/r.components*r.byteLength;case Lt:return i*e*4/r.components*r.byteLength;case ao:return i*e*4/r.components*r.byteLength;case Fr:case Nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Or:case Br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ps:case gs:return Math.max(i,16)*Math.max(e,8)/4;case fs:case ms:return Math.max(i,8)*Math.max(e,8)/2;case _s:case xs:case Ss:case Ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vs:case Ts:case ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case As:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Cs:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ws:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Rs:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ps:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ds:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ls:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Is:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Us:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Fs:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ns:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Os:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Bs:case zs:case Gs:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Vs:case Hs:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ks:case Ws:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qh(i){switch(i){case Gt:case ac:return{byteLength:1,components:1};case Ki:case sc:case bn:return{byteLength:2,components:1};case eo:case to:return{byteLength:2,components:4};case ln:case Qs:case Ht:return{byteLength:4,components:1};case oc:case lc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Js}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Js);function Tc(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Yh(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){const d=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,d);else{p.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<p.length;m++){const _=p[u],S=p[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++u,p[u]=S)}p.length=u+1;for(let m=0,_=p.length;m<_;m++){const S=p[m];i.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}var $h=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jh=`#ifdef USE_ALPHAHASH
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
#endif`,Zh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ed=`#ifdef USE_AOMAP
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
#endif`,td=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nd=`#ifdef USE_BATCHING
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
#endif`,id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,od=`#ifdef USE_IRIDESCENCE
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
#endif`,ld=`#ifdef USE_BUMPMAP
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
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_d=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,xd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vd=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",bd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
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
#endif`,Rd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ld=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Id=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fd=`#ifdef USE_GRADIENTMAP
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
}`,Nd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zd=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Gd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xd=`PhysicalMaterial material;
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
#endif`,qd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,Yd=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$d=`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ef=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rf=`#if defined( USE_POINTS_UV )
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
#endif`,af=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uf=`#ifdef USE_MORPHTARGETS
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
#endif`,hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,df=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ff=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_f=`#ifdef USE_NORMALMAP
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
#endif`,xf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ef=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,If=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,Uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ff=`#ifdef USE_SKINNING
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
#endif`,Nf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Of=`#ifdef USE_SKINNING
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
#endif`,Bf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hf=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kf=`#ifdef USE_TRANSMISSION
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
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $f=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jf=`uniform sampler2D t2D;
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
}`,Zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`#include <common>
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
}`,tp=`#if DEPTH_PACKING == 3200
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
}`,np=`#define DISTANCE
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
}`,ip=`#define DISTANCE
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
void main () {
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
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ap=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`uniform float scale;
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
}`,op=`uniform vec3 diffuse;
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
}`,lp=`#include <common>
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
}`,cp=`uniform vec3 diffuse;
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
}`,up=`#define LAMBERT
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
}`,hp=`#define LAMBERT
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
}`,dp=`#define MATCAP
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
}`,fp=`#define MATCAP
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
}`,pp=`#define NORMAL
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
}`,mp=`#define NORMAL
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
}`,gp=`#define PHONG
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
}`,_p=`#define PHONG
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
}`,xp=`#define STANDARD
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
}`,vp=`#define STANDARD
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
}`,Sp=`#define TOON
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
}`,Mp=`#define TOON
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
}`,Tp=`uniform float size;
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
}`,yp=`uniform vec3 diffuse;
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
}`,Ep=`#include <common>
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
}`,bp=`uniform vec3 color;
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
}`,Ap=`uniform float rotation;
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:$h,alphahash_pars_fragment:jh,alphamap_fragment:Zh,alphamap_pars_fragment:Kh,alphatest_fragment:Jh,alphatest_pars_fragment:Qh,aomap_fragment:ed,aomap_pars_fragment:td,batching_pars_vertex:nd,batching_vertex:id,begin_vertex:rd,beginnormal_vertex:ad,bsdfs:sd,iridescence_fragment:od,bumpmap_pars_fragment:ld,clipping_planes_fragment:cd,clipping_planes_pars_fragment:ud,clipping_planes_pars_vertex:hd,clipping_planes_vertex:dd,color_fragment:fd,color_pars_fragment:pd,color_pars_vertex:md,color_vertex:gd,common:_d,cube_uv_reflection_fragment:xd,defaultnormal_vertex:vd,displacementmap_pars_vertex:Sd,displacementmap_vertex:Md,emissivemap_fragment:Td,emissivemap_pars_fragment:yd,colorspace_fragment:Ed,colorspace_pars_fragment:bd,envmap_fragment:Ad,envmap_common_pars_fragment:Cd,envmap_pars_fragment:wd,envmap_pars_vertex:Rd,envmap_physical_pars_fragment:Gd,envmap_vertex:Pd,fog_vertex:Dd,fog_pars_vertex:Ld,fog_fragment:Id,fog_pars_fragment:Ud,gradientmap_pars_fragment:Fd,lightmap_pars_fragment:Nd,lights_lambert_fragment:Od,lights_lambert_pars_fragment:Bd,lights_pars_begin:zd,lights_toon_fragment:Vd,lights_toon_pars_fragment:Hd,lights_phong_fragment:kd,lights_phong_pars_fragment:Wd,lights_physical_fragment:Xd,lights_physical_pars_fragment:qd,lights_fragment_begin:Yd,lights_fragment_maps:$d,lights_fragment_end:jd,logdepthbuf_fragment:Zd,logdepthbuf_pars_fragment:Kd,logdepthbuf_pars_vertex:Jd,logdepthbuf_vertex:Qd,map_fragment:ef,map_pars_fragment:tf,map_particle_fragment:nf,map_particle_pars_fragment:rf,metalnessmap_fragment:af,metalnessmap_pars_fragment:sf,morphinstance_vertex:of,morphcolor_vertex:lf,morphnormal_vertex:cf,morphtarget_pars_vertex:uf,morphtarget_vertex:hf,normal_fragment_begin:df,normal_fragment_maps:ff,normal_pars_fragment:pf,normal_pars_vertex:mf,normal_vertex:gf,normalmap_pars_fragment:_f,clearcoat_normal_fragment_begin:xf,clearcoat_normal_fragment_maps:vf,clearcoat_pars_fragment:Sf,iridescence_pars_fragment:Mf,opaque_fragment:Tf,packing:yf,premultiplied_alpha_fragment:Ef,project_vertex:bf,dithering_fragment:Af,dithering_pars_fragment:Cf,roughnessmap_fragment:wf,roughnessmap_pars_fragment:Rf,shadowmap_pars_fragment:Pf,shadowmap_pars_vertex:Df,shadowmap_vertex:Lf,shadowmask_pars_fragment:If,skinbase_vertex:Uf,skinning_pars_vertex:Ff,skinning_vertex:Nf,skinnormal_vertex:Of,specularmap_fragment:Bf,specularmap_pars_fragment:zf,tonemapping_fragment:Gf,tonemapping_pars_fragment:Vf,transmission_fragment:Hf,transmission_pars_fragment:kf,uv_pars_fragment:Wf,uv_pars_vertex:Xf,uv_vertex:qf,worldpos_vertex:Yf,background_vert:$f,background_frag:jf,backgroundCube_vert:Zf,backgroundCube_frag:Kf,cube_vert:Jf,cube_frag:Qf,depth_vert:ep,depth_frag:tp,distance_vert:np,distance_frag:ip,equirect_vert:rp,equirect_frag:ap,linedashed_vert:sp,linedashed_frag:op,meshbasic_vert:lp,meshbasic_frag:cp,meshlambert_vert:up,meshlambert_frag:hp,meshmatcap_vert:dp,meshmatcap_frag:fp,meshnormal_vert:pp,meshnormal_frag:mp,meshphong_vert:gp,meshphong_frag:_p,meshphysical_vert:xp,meshphysical_frag:vp,meshtoon_vert:Sp,meshtoon_frag:Mp,points_vert:Tp,points_frag:yp,shadow_vert:Ep,shadow_frag:bp,sprite_vert:Ap,sprite_frag:Cp},se={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},rn={basic:{uniforms:Ct([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Ct([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Ct([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Ct([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Ct([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Ct([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Ct([se.points,se.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Ct([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Ct([se.common,se.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Ct([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Ct([se.sprite,se.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:Ct([se.common,se.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:Ct([se.lights,se.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};rn.physical={uniforms:Ct([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Ar={r:0,b:0,g:0},jn=new wn,wp=new qe;function Rp(i,e,t,n,r,a){const s=new Ge(0);let o=r===!0?0:1,l,c,d=null,p=0,u=null;function m(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){const E=M.backgroundBlurriness>0;b=e.get(b,E)}return b}function _(M){let b=!1;const E=m(M);E===null?f(s,o):E&&E.isColor&&(f(E,1),b=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,b){const E=m(b);E&&(E.isCubeTexture||E.mapping===na)?(c===void 0&&(c=new kt(new nr(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Ii(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),jn.copy(b.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wp.makeRotationFromEuler(jn)),c.material.toneMapped=ke.getTransfer(E.colorSpace)!==Ze,(d!==E||p!==E.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=E,p=E.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new kt(new ra(2,2),new un({name:"BackgroundMaterial",uniforms:Ii(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ke.getTransfer(E.colorSpace)!==Ze,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||p!==E.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=E,p=E.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,b){M.getRGB(Ar,Sc(i)),t.buffers.color.setClear(Ar.r,Ar.g,Ar.b,b,a)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(M,b=1){s.set(M),o=b,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,f(s,o)},render:_,addToRenderList:S,dispose:h}}function Pp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let a=r,s=!1;function o(w,G,B,k,V){let z=!1;const O=p(w,k,B,G);a!==O&&(a=O,c(a.object)),z=m(w,k,B,V),z&&_(w,k,B,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(z||s)&&(s=!1,E(w,G,B,k),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function d(w){return i.deleteVertexArray(w)}function p(w,G,B,k){const V=k.wireframe===!0;let z=n[G.id];z===void 0&&(z={},n[G.id]=z);const O=w.isInstancedMesh===!0?w.id:0;let Q=z[O];Q===void 0&&(Q={},z[O]=Q);let K=Q[B.id];K===void 0&&(K={},Q[B.id]=K);let ce=K[V];return ce===void 0&&(ce=u(l()),K[V]=ce),ce}function u(w){const G=[],B=[],k=[];for(let V=0;V<t;V++)G[V]=0,B[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:B,attributeDivisors:k,object:w,attributes:{},index:null}}function m(w,G,B,k){const V=a.attributes,z=G.attributes;let O=0;const Q=B.getAttributes();for(const K in Q)if(Q[K].location>=0){const fe=V[K];let ue=z[K];if(ue===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(ue=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(ue=w.instanceColor)),fe===void 0||fe.attribute!==ue||ue&&fe.data!==ue.data)return!0;O++}return a.attributesNum!==O||a.index!==k}function _(w,G,B,k){const V={},z=G.attributes;let O=0;const Q=B.getAttributes();for(const K in Q)if(Q[K].location>=0){let fe=z[K];fe===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(fe=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(fe=w.instanceColor));const ue={};ue.attribute=fe,fe&&fe.data&&(ue.data=fe.data),V[K]=ue,O++}a.attributes=V,a.attributesNum=O,a.index=k}function S(){const w=a.newAttributes;for(let G=0,B=w.length;G<B;G++)w[G]=0}function f(w){h(w,0)}function h(w,G){const B=a.newAttributes,k=a.enabledAttributes,V=a.attributeDivisors;B[w]=1,k[w]===0&&(i.enableVertexAttribArray(w),k[w]=1),V[w]!==G&&(i.vertexAttribDivisor(w,G),V[w]=G)}function M(){const w=a.newAttributes,G=a.enabledAttributes;for(let B=0,k=G.length;B<k;B++)G[B]!==w[B]&&(i.disableVertexAttribArray(B),G[B]=0)}function b(w,G,B,k,V,z,O){O===!0?i.vertexAttribIPointer(w,G,B,V,z):i.vertexAttribPointer(w,G,B,k,V,z)}function E(w,G,B,k){S();const V=k.attributes,z=B.getAttributes(),O=G.defaultAttributeValues;for(const Q in z){const K=z[Q];if(K.location>=0){let ce=V[Q];if(ce===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(ce=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(ce=w.instanceColor)),ce!==void 0){const fe=ce.normalized,ue=ce.itemSize,Le=e.get(ce);if(Le===void 0)continue;const et=Le.buffer,Ye=Le.type,$=Le.bytesPerElement,j=Ye===i.INT||Ye===i.UNSIGNED_INT||ce.gpuType===Qs;if(ce.isInterleavedBufferAttribute){const J=ce.data,me=J.stride,Ae=ce.offset;if(J.isInstancedInterleavedBuffer){for(let ye=0;ye<K.locationSize;ye++)h(K.location+ye,J.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ye=0;ye<K.locationSize;ye++)f(K.location+ye);i.bindBuffer(i.ARRAY_BUFFER,et);for(let ye=0;ye<K.locationSize;ye++)b(K.location+ye,ue/K.locationSize,Ye,fe,me*$,(Ae+ue/K.locationSize*ye)*$,j)}else{if(ce.isInstancedBufferAttribute){for(let J=0;J<K.locationSize;J++)h(K.location+J,ce.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let J=0;J<K.locationSize;J++)f(K.location+J);i.bindBuffer(i.ARRAY_BUFFER,et);for(let J=0;J<K.locationSize;J++)b(K.location+J,ue/K.locationSize,Ye,fe,ue*$,ue/K.locationSize*J*$,j)}}else if(O!==void 0){const fe=O[Q];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(K.location,fe);break;case 3:i.vertexAttrib3fv(K.location,fe);break;case 4:i.vertexAttrib4fv(K.location,fe);break;default:i.vertexAttrib1fv(K.location,fe)}}}}M()}function R(){y();for(const w in n){const G=n[w];for(const B in G){const k=G[B];for(const V in k){const z=k[V];for(const O in z)d(z[O].object),delete z[O];delete k[V]}}delete n[w]}}function A(w){if(n[w.id]===void 0)return;const G=n[w.id];for(const B in G){const k=G[B];for(const V in k){const z=k[V];for(const O in z)d(z[O].object),delete z[O];delete k[V]}}delete n[w.id]}function D(w){for(const G in n){const B=n[G];for(const k in B){const V=B[k];if(V[w.id]===void 0)continue;const z=V[w.id];for(const O in z)d(z[O].object),delete z[O];delete V[w.id]}}}function x(w){for(const G in n){const B=n[G],k=w.isInstancedMesh===!0?w.id:0,V=B[k];if(V!==void 0){for(const z in V){const O=V[z];for(const Q in O)d(O[Q].object),delete O[Q];delete V[z]}delete B[k],Object.keys(B).length===0&&delete n[G]}}}function y(){q(),s=!0,a!==r&&(a=r,c(a.object))}function q(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:y,resetDefaultState:q,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:D,initAttributes:S,enableAttribute:f,disableUnusedAttributes:M}}function Dp(i,e,t){let n;function r(c){n=c}function a(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function s(c,d,p){p!==0&&(i.drawArraysInstanced(n,c,d,p),t.update(d,n,p))}function o(c,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,p);let m=0;for(let _=0;_<p;_++)m+=d[_];t.update(m,n,1)}function l(c,d,p,u){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)s(c[_],d[_],u[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,p);let _=0;for(let S=0;S<p;S++)_+=d[S]*u[S];t.update(_,n,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Lp(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(D){return!(D!==Lt&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const x=D===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Gt&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Ht&&!x)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Re("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:E,maxSamples:R,samples:A}}function Ip(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new vn,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const m=p.length!==0||u||n!==0||r;return r=u,n=p.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){t=d(p,u,0)},this.setState=function(p,u,m){const _=p.clippingPlanes,S=p.clipIntersection,f=p.clipShadows,h=i.get(p);if(!r||_===null||_.length===0||a&&!f)a?d(null):c();else{const M=a?0:n,b=M*4;let E=h.clippingState||null;l.value=E,E=d(_,u,b,m);for(let R=0;R!==b;++R)E[R]=t[R];h.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,u,m,_){const S=p!==null?p.length:0;let f=null;if(S!==0){if(f=l.value,_!==!0||f===null){const h=m+S*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(f===null||f.length<h)&&(f=new Float32Array(h));for(let b=0,E=m;b!==S;++b,E+=4)s.copy(p[b]).applyMatrix4(M,o),s.normal.toArray(f,E),f[E+3]=s.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,f}}const zn=4,ol=[.125,.215,.35,.446,.526,.582],Jn=20,Up=256,Wi=new aa,ll=new Ge;let Wa=null,Xa=0,qa=0,Ya=!1;const Fp=new U;class cl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:s=256,position:o=Fp}=a;Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wa,Xa,qa),this._renderer.xr.enabled=Ya,e.scissorTest=!1,yi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ni||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pt,minFilter:pt,generateMipmaps:!1,type:bn,format:Lt,colorSpace:Li,depthBuffer:!1},r=ul(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ul(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Np(a)),this._blurMaterial=Bp(a,e,t),this._ggxMaterial=Op(a,e,t)}return r}_compileMaterial(e){const t=new kt(new hn,e);this._renderer.compile(t,Wi)}_sceneToCubeUV(e,t,n,r,a){const l=new jt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor(ll),p.toneMapping=on,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new kt(new nr,new gc({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,f=S.material;let h=!1;const M=e.background;M?M.isColor&&(f.color.copy(M),e.background=null,h=!0):(f.color.copy(ll),h=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(l.up.set(0,c[b],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+d[b],a.y,a.z)):E===1?(l.up.set(0,0,c[b]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+d[b],a.z)):(l.up.set(0,c[b],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+d[b]));const R=this._cubeSize;yi(r,E*R,b>2?R:0,R,R),p.setRenderTarget(r),h&&p.render(S,l),p.render(e,l)}p.toneMapping=m,p.autoClear=u,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ni||e.mapping===Pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hl());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;yi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Wi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;const l=s.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),u=0+c*1.25,m=p*u,{_lodMax:_}=this,S=this._sizeLods[n],f=3*S*(n>_-zn?n-_+zn:0),h=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-t,yi(a,f,h,3*S,2*S),r.setRenderTarget(a),r.render(o,Wi),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=_-n,yi(e,f,h,3*S,2*S),r.setRenderTarget(e),r.render(o,Wi)}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&He("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[r];p.material=c;const u=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Jn-1),S=a/_,f=isFinite(a)?1+Math.floor(d*S):Jn;f>Jn&&Re(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Jn}`);const h=[];let M=0;for(let D=0;D<Jn;++D){const x=D/S,y=Math.exp(-x*x/2);h.push(y),D===0?M+=y:D<f&&(M+=2*y)}for(let D=0;D<h.length;D++)h[D]=h[D]/M;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=h,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=_,u.mipInt.value=b-n;const E=this._sizeLods[r],R=3*E*(r>b-zn?r-b+zn:0),A=4*(this._cubeSize-E);yi(t,R,A,3*E,2*E),l.setRenderTarget(t),l.render(p,Wi)}}function Np(i){const e=[],t=[],n=[];let r=i;const a=i-zn+1+ol.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);e.push(o);let l=1/o;s>i-zn?l=ol[s-i+zn-1]:s===0&&(l=0),t.push(l);const c=1/(o-2),d=-c,p=1+c,u=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,_=6,S=3,f=2,h=1,M=new Float32Array(S*_*m),b=new Float32Array(f*_*m),E=new Float32Array(h*_*m);for(let A=0;A<m;A++){const D=A%3*2/3-1,x=A>2?0:-1,y=[D,x,0,D+2/3,x,0,D+2/3,x+1,0,D,x,0,D+2/3,x+1,0,D,x+1,0];M.set(y,S*_*A),b.set(u,f*_*A);const q=[A,A,A,A,A,A];E.set(q,h*_*A)}const R=new hn;R.setAttribute("position",new Ut(M,S)),R.setAttribute("uv",new Ut(b,f)),R.setAttribute("faceIndex",new Ut(E,h)),n.push(new kt(R,null)),r>zn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ul(i,e,t){const n=new Jt(i,e,t);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Op(i,e,t){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Up,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sa(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Bp(i,e,t){const n=new Float32Array(Jn),r=new U(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function hl(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sa(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function dl(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function sa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class yc extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new xc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new nr(5,5,5),a=new un({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:Tn});a.uniforms.tEquirect.value=t;const s=new kt(r,a),o=t.minFilter;return t.minFilter===Sn&&(t.minFilter=pt),new Hh(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}function zp(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,m=!1){return u==null?null:m?s(u):a(u)}function a(u){if(u&&u.isTexture){const m=u.mapping;if(m===xa||m===va)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const S=new yc(_.height);return S.fromEquirectangularTexture(i,u),e.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){const m=u.mapping,_=m===xa||m===va,S=m===ni||m===Pi;if(_||S){let f=t.get(u);const h=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return n===null&&(n=new cl(i)),f=_?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,t.set(u,f),f.texture;if(f!==void 0)return f.texture;{const M=u.image;return _&&M&&M.height>0||S&&M&&l(M)?(n===null&&(n=new cl(i)),f=_?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,t.set(u,f),u.addEventListener("dispose",d),f.texture):null}}}return u}function o(u,m){return m===xa?u.mapping=ni:m===va&&(u.mapping=Pi),u}function l(u){let m=0;const _=6;for(let S=0;S<_;S++)u[S]!==void 0&&m++;return m===_}function c(u){const m=u.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function d(u){const m=u.target;m.removeEventListener("dispose",d);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:p}}function Gp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Wr("WebGLRenderer: "+n+" extension not supported."),r}}}function Vp(i,e,t,n){const r={},a=new WeakMap;function s(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",s),delete r[u.id];const m=a.get(u);m&&(e.remove(m),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(p,u){return r[u.id]===!0||(u.addEventListener("dispose",s),r[u.id]=!0,t.memory.geometries++),u}function l(p){const u=p.attributes;for(const m in u)e.update(u[m],i.ARRAY_BUFFER)}function c(p){const u=[],m=p.index,_=p.attributes.position;let S=0;if(_===void 0)return;if(m!==null){const M=m.array;S=m.version;for(let b=0,E=M.length;b<E;b+=3){const R=M[b+0],A=M[b+1],D=M[b+2];u.push(R,A,A,D,D,R)}}else{const M=_.array;S=_.version;for(let b=0,E=M.length/3-1;b<E;b+=3){const R=b+0,A=b+1,D=b+2;u.push(R,A,A,D,D,R)}}const f=new(_.count>=65535?mc:pc)(u,1);f.version=S;const h=a.get(p);h&&e.remove(h),a.set(p,f)}function d(p){const u=a.get(p);if(u){const m=p.index;m!==null&&u.version<m.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function Hp(i,e,t){let n;function r(u){n=u}let a,s;function o(u){a=u.type,s=u.bytesPerElement}function l(u,m){i.drawElements(n,m,a,u*s),t.update(m,n,1)}function c(u,m,_){_!==0&&(i.drawElementsInstanced(n,m,a,u*s,_),t.update(m,n,_))}function d(u,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,u,0,_);let f=0;for(let h=0;h<_;h++)f+=m[h];t.update(f,n,1)}function p(u,m,_,S){if(_===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<u.length;h++)c(u[h]/s,m[h],S[h]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,a,u,0,S,0,_);let h=0;for(let M=0;M<_;M++)h+=m[M]*S[M];t.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function kp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:He("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Wp(i,e,t){const n=new WeakMap,r=new ht;function a(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==p){let y=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",y)};u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let b=0;m===!0&&(b=1),_===!0&&(b=2),S===!0&&(b=3);let E=o.attributes.position.count*b,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*R*4*p),D=new dc(A,E,R,p);D.type=Ht,D.needsUpdate=!0;const x=b*4;for(let q=0;q<p;q++){const w=f[q],G=h[q],B=M[q],k=E*R*4*q;for(let V=0;V<w.count;V++){const z=V*x;m===!0&&(r.fromBufferAttribute(w,V),A[k+z+0]=r.x,A[k+z+1]=r.y,A[k+z+2]=r.z,A[k+z+3]=0),_===!0&&(r.fromBufferAttribute(G,V),A[k+z+4]=r.x,A[k+z+5]=r.y,A[k+z+6]=r.z,A[k+z+7]=0),S===!0&&(r.fromBufferAttribute(B,V),A[k+z+8]=r.x,A[k+z+9]=r.y,A[k+z+10]=r.z,A[k+z+11]=B.itemSize===4?r.w:1)}}u={count:p,texture:D,size:new De(E,R)},n.set(o,u),o.addEventListener("dispose",y)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let m=0;for(let S=0;S<c.length;S++)m+=c[S];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:a}}function Xp(i,e,t,n,r){let a=new WeakMap;function s(c){const d=r.render.frame,p=c.geometry,u=e.get(c,p);if(a.get(u)!==d&&(e.update(u),a.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,d))),c.isSkinnedMesh){const m=c.skeleton;a.get(m)!==d&&(m.update(),a.set(m,d))}return u}function o(){a=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}const qp={[Kl]:"LINEAR_TONE_MAPPING",[Jl]:"REINHARD_TONE_MAPPING",[Ql]:"CINEON_TONE_MAPPING",[ec]:"ACES_FILMIC_TONE_MAPPING",[nc]:"AGX_TONE_MAPPING",[ic]:"NEUTRAL_TONE_MAPPING",[tc]:"CUSTOM_TONE_MAPPING"};function Yp(i,e,t,n,r){const a=new Jt(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),s=new Jt(e,t,{type:bn,depthBuffer:!1,stencilBuffer:!1}),o=new hn;o.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new En([0,2,0,0,2,0],2));const l=new $i({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new kt(o,l),d=new aa(-1,1,1,-1,0,1);let p=null,u=null,m=!1,_,S=null,f=[],h=!1;this.setSize=function(M,b){a.setSize(M,b),s.setSize(M,b);for(let E=0;E<f.length;E++){const R=f[E];R.setSize&&R.setSize(M,b)}},this.setEffects=function(M){f=M,h=f.length>0&&f[0].isRenderPass===!0;const b=a.width,E=a.height;for(let R=0;R<f.length;R++){const A=f[R];A.setSize&&A.setSize(b,E)}},this.begin=function(M,b){if(m||M.toneMapping===on&&f.length===0)return!1;if(S=b,b!==null){const E=b.width,R=b.height;(a.width!==E||a.height!==R)&&this.setSize(E,R)}return h===!1&&M.setRenderTarget(a),_=M.toneMapping,M.toneMapping=on,!0},this.hasRenderPass=function(){return h},this.end=function(M,b){M.toneMapping=_,m=!0;let E=a,R=s;for(let A=0;A<f.length;A++){const D=f[A];if(D.enabled!==!1&&(D.render(M,R,E,b),D.needsSwap!==!1)){const x=E;E=R,R=x}}if(p!==M.outputColorSpace||u!==M.toneMapping){p=M.outputColorSpace,u=M.toneMapping,l.defines={},ke.getTransfer(p)===Ze&&(l.defines.SRGB_TRANSFER="");const A=qp[u];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(S),M.render(c,d),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),s.dispose(),o.dispose(),l.dispose()}}const Ec=new wt,$s=new Qi(1,1),bc=new dc,Ac=new fh,Cc=new xc,fl=[],pl=[],ml=new Float32Array(16),gl=new Float32Array(9),_l=new Float32Array(4);function Fi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=fl[r];if(a===void 0&&(a=new Float32Array(r),fl[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oa(i,e){let t=pl[e];t===void 0&&(t=new Int32Array(e),pl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $p(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function Zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function Kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function Jp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;_l.set(n),i.uniformMatrix2fv(this.addr,!1,_l),xt(t,n)}}function Qp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;gl.set(n),i.uniformMatrix3fv(this.addr,!1,gl),xt(t,n)}}function em(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;ml.set(n),i.uniformMatrix4fv(this.addr,!1,ml),xt(t,n)}}function tm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function am(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function cm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?($s.compareFunction=t.isReversedDepthBuffer()?oo:so,a=$s):a=Ec,t.setTexture2D(e||a,r)}function um(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ac,r)}function hm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Cc,r)}function dm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||bc,r)}function fm(i){switch(i){case 5126:return $p;case 35664:return jp;case 35665:return Zp;case 35666:return Kp;case 35674:return Jp;case 35675:return Qp;case 35676:return em;case 5124:case 35670:return tm;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return rm;case 5125:return am;case 36294:return sm;case 36295:return om;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return hm;case 36289:case 36303:case 36311:case 36292:return dm}}function pm(i,e){i.uniform1fv(this.addr,e)}function mm(i,e){const t=Fi(e,this.size,2);i.uniform2fv(this.addr,t)}function gm(i,e){const t=Fi(e,this.size,3);i.uniform3fv(this.addr,t)}function _m(i,e){const t=Fi(e,this.size,4);i.uniform4fv(this.addr,t)}function xm(i,e){const t=Fi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function vm(i,e){const t=Fi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Sm(i,e){const t=Fi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Mm(i,e){i.uniform1iv(this.addr,e)}function Tm(i,e){i.uniform2iv(this.addr,e)}function ym(i,e){i.uniform3iv(this.addr,e)}function Em(i,e){i.uniform4iv(this.addr,e)}function bm(i,e){i.uniform1uiv(this.addr,e)}function Am(i,e){i.uniform2uiv(this.addr,e)}function Cm(i,e){i.uniform3uiv(this.addr,e)}function wm(i,e){i.uniform4uiv(this.addr,e)}function Rm(i,e,t){const n=this.cache,r=e.length,a=oa(t,r);_t(n,a)||(i.uniform1iv(this.addr,a),xt(n,a));let s;this.type===i.SAMPLER_2D_SHADOW?s=$s:s=Ec;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||s,a[o])}function Pm(i,e,t){const n=this.cache,r=e.length,a=oa(t,r);_t(n,a)||(i.uniform1iv(this.addr,a),xt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Ac,a[s])}function Dm(i,e,t){const n=this.cache,r=e.length,a=oa(t,r);_t(n,a)||(i.uniform1iv(this.addr,a),xt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Cc,a[s])}function Lm(i,e,t){const n=this.cache,r=e.length,a=oa(t,r);_t(n,a)||(i.uniform1iv(this.addr,a),xt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||bc,a[s])}function Im(i){switch(i){case 5126:return pm;case 35664:return mm;case 35665:return gm;case 35666:return _m;case 35674:return xm;case 35675:return vm;case 35676:return Sm;case 5124:case 35670:return Mm;case 35667:case 35671:return Tm;case 35668:case 35672:return ym;case 35669:case 35673:return Em;case 5125:return bm;case 36294:return Am;case 36295:return Cm;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Pm;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Lm}}class Um{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fm(t.type)}}class Fm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Im(t.type)}}class Nm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function xl(i,e){i.seq.push(e),i.map[e.id]=e}function Om(i,e,t){const n=i.name,r=n.length;for($a.lastIndex=0;;){const a=$a.exec(n),s=$a.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){xl(t,c===void 0?new Um(o,i,e):new Fm(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Nm(o),xl(t,p)),t=p}}}class Gr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);Om(o,l,this)}const r=[],a=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):a.push(s);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function vl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Bm=37297;let zm=0;function Gm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const Sl=new Ue;function Vm(i){ke._getMatrix(Sl,ke.workingColorSpace,i);const e=`mat3( ${Sl.elements.map(t=>t.toFixed(4))} )`;switch(ke.getTransfer(i)){case Vr:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ml(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+Gm(i.getShaderSource(e),o)}else return a}function Hm(i,e){const t=Vm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const km={[Kl]:"Linear",[Jl]:"Reinhard",[Ql]:"Cineon",[ec]:"ACESFilmic",[nc]:"AgX",[ic]:"Neutral",[tc]:"Custom"};function Wm(i,e){const t=km[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cr=new U;function Xm(){ke.getLuminanceCoefficients(Cr);const i=Cr.x.toFixed(4),e=Cr.y.toFixed(4),t=Cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ji).join(`
`)}function Ym(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $m(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function ji(i){return i!==""}function Tl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function js(i){return i.replace(jm,Km)}const Zm=new Map;function Km(i,e){let t=Fe[e];if(t===void 0){const n=Zm.get(e);if(n!==void 0)t=Fe[n],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return js(t)}const Jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(i){return i.replace(Jm,Qm)}function Qm(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function bl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const eg={[Ur]:"SHADOWMAP_TYPE_PCF",[Yi]:"SHADOWMAP_TYPE_VSM"};function tg(i){return eg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ng={[ni]:"ENVMAP_TYPE_CUBE",[Pi]:"ENVMAP_TYPE_CUBE",[na]:"ENVMAP_TYPE_CUBE_UV"};function ig(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ng[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const rg={[Pi]:"ENVMAP_MODE_REFRACTION"};function ag(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":rg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sg={[Zl]:"ENVMAP_BLENDING_MULTIPLY",[Wu]:"ENVMAP_BLENDING_MIX",[Xu]:"ENVMAP_BLENDING_ADD"};function og(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sg[i.combine]||"ENVMAP_BLENDING_NONE"}function lg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function cg(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=tg(t),c=ig(t),d=ag(t),p=og(t),u=lg(t),m=qm(t),_=Ym(a),S=r.createProgram();let f,h,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ji).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ji).join(`
`),h.length>0&&(h+=`
`)):(f=[bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),h=[bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==on?"#define TONE_MAPPING":"",t.toneMapping!==on?Fe.tonemapping_pars_fragment:"",t.toneMapping!==on?Wm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Hm("linearToOutputTexel",t.outputColorSpace),Xm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ji).join(`
`)),s=js(s),s=Tl(s,t),s=yl(s,t),o=js(o),o=Tl(o,t),o=yl(o,t),s=El(s),o=El(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",t.glslVersion===bi?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=M+f+s,E=M+h+o,R=vl(r,r.VERTEX_SHADER,b),A=vl(r,r.FRAGMENT_SHADER,E);r.attachShader(S,R),r.attachShader(S,A),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function D(w){if(i.debug.checkShaderErrors){const G=r.getProgramInfoLog(S)||"",B=r.getShaderInfoLog(R)||"",k=r.getShaderInfoLog(A)||"",V=G.trim(),z=B.trim(),O=k.trim();let Q=!0,K=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,R,A);else{const ce=Ml(r,R,"vertex"),fe=Ml(r,A,"fragment");He("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+V+`
`+ce+`
`+fe)}else V!==""?Re("WebGLProgram: Program Info Log:",V):(z===""||O==="")&&(K=!1);K&&(w.diagnostics={runnable:Q,programLog:V,vertexShader:{log:z,prefix:f},fragmentShader:{log:O,prefix:h}})}r.deleteShader(R),r.deleteShader(A),x=new Gr(r,S),y=$m(r,S)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let y;this.getAttributes=function(){return y===void 0&&D(this),y};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=r.getProgramParameter(S,Bm)),q},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zm++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=A,this}let ug=0;class hg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new dg(e),t.set(e,n)),n}}class dg{constructor(e){this.id=ug++,this.code=e,this.usedTimes=0}}function fg(i,e,t,n,r,a){const s=new co,o=new hg,l=new Set,c=[],d=new Map,p=n.logarithmicDepthBuffer;let u=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,y,q,w,G){const B=w.fog,k=G.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?w.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||V,z),Q=O&&O.mapping===na?O.image.height:null,K=m[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Re("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const ce=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,fe=ce!==void 0?ce.length:0;let ue=0;k.morphAttributes.position!==void 0&&(ue=1),k.morphAttributes.normal!==void 0&&(ue=2),k.morphAttributes.color!==void 0&&(ue=3);let Le,et,Ye,$;if(K){const je=rn[K];Le=je.vertexShader,et=je.fragmentShader}else Le=x.vertexShader,et=x.fragmentShader,o.update(x),Ye=o.getVertexShaderID(x),$=o.getFragmentShaderID(x);const j=i.getRenderTarget(),J=i.state.buffers.depth.getReversed(),me=G.isInstancedMesh===!0,Ae=G.isBatchedMesh===!0,ye=!!x.map,vt=!!x.matcap,Ve=!!O,$e=!!x.aoMap,tt=!!x.lightMap,Ne=!!x.bumpMap,ct=!!x.normalMap,C=!!x.displacementMap,dt=!!x.emissiveMap,Xe=!!x.metalnessMap,it=!!x.roughnessMap,Me=x.anisotropy>0,T=x.clearcoat>0,g=x.dispersion>0,L=x.iridescence>0,Y=x.sheen>0,Z=x.transmission>0,X=Me&&!!x.anisotropyMap,ge=T&&!!x.clearcoatMap,re=T&&!!x.clearcoatNormalMap,Ce=T&&!!x.clearcoatRoughnessMap,we=L&&!!x.iridescenceMap,ee=L&&!!x.iridescenceThicknessMap,ne=Y&&!!x.sheenColorMap,_e=Y&&!!x.sheenRoughnessMap,ve=!!x.specularMap,he=!!x.specularColorMap,Oe=!!x.specularIntensityMap,P=Z&&!!x.transmissionMap,ae=Z&&!!x.thicknessMap,ie=!!x.gradientMap,pe=!!x.alphaMap,te=x.alphaTest>0,W=!!x.alphaHash,xe=!!x.extensions;let Pe=on;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Pe=i.toneMapping);const rt={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:Le,fragmentShader:et,defines:x.defines,customVertexShaderID:Ye,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Ae,batchingColor:Ae&&G._colorsTexture!==null,instancing:me,instancingColor:me&&G.instanceColor!==null,instancingMorph:me&&G.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Li,alphaToCoverage:!!x.alphaToCoverage,map:ye,matcap:vt,envMap:Ve,envMapMode:Ve&&O.mapping,envMapCubeUVHeight:Q,aoMap:$e,lightMap:tt,bumpMap:Ne,normalMap:ct,displacementMap:C,emissiveMap:dt,normalMapObjectSpace:ct&&x.normalMapType===ju,normalMapTangentSpace:ct&&x.normalMapType===$u,metalnessMap:Xe,roughnessMap:it,anisotropy:Me,anisotropyMap:X,clearcoat:T,clearcoatMap:ge,clearcoatNormalMap:re,clearcoatRoughnessMap:Ce,dispersion:g,iridescence:L,iridescenceMap:we,iridescenceThicknessMap:ee,sheen:Y,sheenColorMap:ne,sheenRoughnessMap:_e,specularMap:ve,specularColorMap:he,specularIntensityMap:Oe,transmission:Z,transmissionMap:P,thicknessMap:ae,gradientMap:ie,opaque:x.transparent===!1&&x.blending===Ci&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:te,alphaHash:W,combine:x.combine,mapUv:ye&&_(x.map.channel),aoMapUv:$e&&_(x.aoMap.channel),lightMapUv:tt&&_(x.lightMap.channel),bumpMapUv:Ne&&_(x.bumpMap.channel),normalMapUv:ct&&_(x.normalMap.channel),displacementMapUv:C&&_(x.displacementMap.channel),emissiveMapUv:dt&&_(x.emissiveMap.channel),metalnessMapUv:Xe&&_(x.metalnessMap.channel),roughnessMapUv:it&&_(x.roughnessMap.channel),anisotropyMapUv:X&&_(x.anisotropyMap.channel),clearcoatMapUv:ge&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(x.sheenRoughnessMap.channel),specularMapUv:ve&&_(x.specularMap.channel),specularColorMapUv:he&&_(x.specularColorMap.channel),specularIntensityMapUv:Oe&&_(x.specularIntensityMap.channel),transmissionMapUv:P&&_(x.transmissionMap.channel),thicknessMapUv:ae&&_(x.thicknessMap.channel),alphaMapUv:pe&&_(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ct||Me),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!k.attributes.uv&&(ye||pe),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&ct===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:J,skinning:G.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ue,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ye&&x.map.isVideoTexture===!0&&ke.getTransfer(x.map.colorSpace)===Ze,decodeVideoTextureEmissive:dt&&x.emissiveMap.isVideoTexture===!0&&ke.getTransfer(x.emissiveMap.colorSpace)===Ze,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Zt,flipSided:x.side===It,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&x.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function f(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const q in x.defines)y.push(q),y.push(x.defines[q]);return x.isRawShaderMaterial===!1&&(h(y,x),M(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function h(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function M(x,y){s.disableAll(),y.instancing&&s.enable(0),y.instancingColor&&s.enable(1),y.instancingMorph&&s.enable(2),y.matcap&&s.enable(3),y.envMap&&s.enable(4),y.normalMapObjectSpace&&s.enable(5),y.normalMapTangentSpace&&s.enable(6),y.clearcoat&&s.enable(7),y.iridescence&&s.enable(8),y.alphaTest&&s.enable(9),y.vertexColors&&s.enable(10),y.vertexAlphas&&s.enable(11),y.vertexUv1s&&s.enable(12),y.vertexUv2s&&s.enable(13),y.vertexUv3s&&s.enable(14),y.vertexTangents&&s.enable(15),y.anisotropy&&s.enable(16),y.alphaHash&&s.enable(17),y.batching&&s.enable(18),y.dispersion&&s.enable(19),y.batchingColor&&s.enable(20),y.gradientMap&&s.enable(21),x.push(s.mask),s.disableAll(),y.fog&&s.enable(0),y.useFog&&s.enable(1),y.flatShading&&s.enable(2),y.logarithmicDepthBuffer&&s.enable(3),y.reversedDepthBuffer&&s.enable(4),y.skinning&&s.enable(5),y.morphTargets&&s.enable(6),y.morphNormals&&s.enable(7),y.morphColors&&s.enable(8),y.premultipliedAlpha&&s.enable(9),y.shadowMapEnabled&&s.enable(10),y.doubleSided&&s.enable(11),y.flipSided&&s.enable(12),y.useDepthPacking&&s.enable(13),y.dithering&&s.enable(14),y.transmission&&s.enable(15),y.sheen&&s.enable(16),y.opaque&&s.enable(17),y.pointsUvs&&s.enable(18),y.decodeVideoTexture&&s.enable(19),y.decodeVideoTextureEmissive&&s.enable(20),y.alphaToCoverage&&s.enable(21),x.push(s.mask)}function b(x){const y=m[x.type];let q;if(y){const w=rn[y];q=Uh.clone(w.uniforms)}else q=x.uniforms;return q}function E(x,y){let q=d.get(y);return q!==void 0?++q.usedTimes:(q=new cg(i,y,x,r),c.push(q),d.set(y,q)),q}function R(x){if(--x.usedTimes===0){const y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function D(){o.dispose()}return{getParameters:S,getProgramCacheKey:f,getUniforms:b,acquireProgram:E,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:D}}function pg(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,l){i.get(s)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function mg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Al(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Cl(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,_,S,f,h){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:m,material:_,materialVariant:s(u),groupOrder:S,renderOrder:u.renderOrder,z:f,group:h},i[e]=M):(M.id=u.id,M.object=u,M.geometry=m,M.material=_,M.materialVariant=s(u),M.groupOrder=S,M.renderOrder=u.renderOrder,M.z=f,M.group=h),e++,M}function l(u,m,_,S,f,h){const M=o(u,m,_,S,f,h);_.transmission>0?n.push(M):_.transparent===!0?r.push(M):t.push(M)}function c(u,m,_,S,f,h){const M=o(u,m,_,S,f,h);_.transmission>0?n.unshift(M):_.transparent===!0?r.unshift(M):t.unshift(M)}function d(u,m){t.length>1&&t.sort(u||mg),n.length>1&&n.sort(m||Al),r.length>1&&r.sort(m||Al)}function p(){for(let u=e,m=i.length;u<m;u++){const _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:l,unshift:c,finish:p,sort:d}}function gg(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new Cl,i.set(n,[s])):r>=a.length?(s=new Cl,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function _g(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ge};break;case"SpotLight":t={position:new U,direction:new U,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function xg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let vg=0;function Sg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Mg(i){const e=new _g,t=xg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const r=new U,a=new qe,s=new qe;function o(c){let d=0,p=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,_=0,S=0,f=0,h=0,M=0,b=0,E=0,R=0,A=0,D=0;c.sort(Sg);for(let y=0,q=c.length;y<q;y++){const w=c[y],G=w.color,B=w.intensity,k=w.distance;let V=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Di?V=w.shadow.map.texture:V=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)d+=G.r*B,p+=G.g*B,u+=G.b*B;else if(w.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(w.sh.coefficients[z],B);D++}else if(w.isDirectionalLight){const z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const O=w.shadow,Q=t.get(w);Q.shadowIntensity=O.intensity,Q.shadowBias=O.bias,Q.shadowNormalBias=O.normalBias,Q.shadowRadius=O.radius,Q.shadowMapSize=O.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=V,n.directionalShadowMatrix[m]=w.shadow.matrix,M++}n.directional[m]=z,m++}else if(w.isSpotLight){const z=e.get(w);z.position.setFromMatrixPosition(w.matrixWorld),z.color.copy(G).multiplyScalar(B),z.distance=k,z.coneCos=Math.cos(w.angle),z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),z.decay=w.decay,n.spot[S]=z;const O=w.shadow;if(w.map&&(n.spotLightMap[R]=w.map,R++,O.updateMatrices(w),w.castShadow&&A++),n.spotLightMatrix[S]=O.matrix,w.castShadow){const Q=t.get(w);Q.shadowIntensity=O.intensity,Q.shadowBias=O.bias,Q.shadowNormalBias=O.normalBias,Q.shadowRadius=O.radius,Q.shadowMapSize=O.mapSize,n.spotShadow[S]=Q,n.spotShadowMap[S]=V,E++}S++}else if(w.isRectAreaLight){const z=e.get(w);z.color.copy(G).multiplyScalar(B),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),n.rectArea[f]=z,f++}else if(w.isPointLight){const z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),z.distance=w.distance,z.decay=w.decay,w.castShadow){const O=w.shadow,Q=t.get(w);Q.shadowIntensity=O.intensity,Q.shadowBias=O.bias,Q.shadowNormalBias=O.normalBias,Q.shadowRadius=O.radius,Q.shadowMapSize=O.mapSize,Q.shadowCameraNear=O.camera.near,Q.shadowCameraFar=O.camera.far,n.pointShadow[_]=Q,n.pointShadowMap[_]=V,n.pointShadowMatrix[_]=w.shadow.matrix,b++}n.point[_]=z,_++}else if(w.isHemisphereLight){const z=e.get(w);z.skyColor.copy(w.color).multiplyScalar(B),z.groundColor.copy(w.groundColor).multiplyScalar(B),n.hemi[h]=z,h++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=u;const x=n.hash;(x.directionalLength!==m||x.pointLength!==_||x.spotLength!==S||x.rectAreaLength!==f||x.hemiLength!==h||x.numDirectionalShadows!==M||x.numPointShadows!==b||x.numSpotShadows!==E||x.numSpotMaps!==R||x.numLightProbes!==D)&&(n.directional.length=m,n.spot.length=S,n.rectArea.length=f,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=E+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=D,x.directionalLength=m,x.pointLength=_,x.spotLength=S,x.rectAreaLength=f,x.hemiLength=h,x.numDirectionalShadows=M,x.numPointShadows=b,x.numSpotShadows=E,x.numSpotMaps=R,x.numLightProbes=D,n.version=vg++)}function l(c,d){let p=0,u=0,m=0,_=0,S=0;const f=d.matrixWorldInverse;for(let h=0,M=c.length;h<M;h++){const b=c[h];if(b.isDirectionalLight){const E=n.directional[p];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),p++}else if(b.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),m++}else if(b.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(f),s.identity(),a.copy(b.matrixWorld),a.premultiply(f),s.extractRotation(a),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),_++}else if(b.isPointLight){const E=n.point[u];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(f),u++}else if(b.isHemisphereLight){const E=n.hemi[S];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(f),S++}}}return{setup:o,setupView:l,state:n}}function wl(i){const e=new Mg(i),t=[],n=[];function r(d){c.camera=d,t.length=0,n.length=0}function a(d){t.push(d)}function s(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function Tg(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new wl(i),e.set(r,[o])):a>=s.length?(o=new wl(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
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
}`,bg=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Ag=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Rl=new qe,Xi=new U,ja=new U;function Cg(i,e,t){let n=new _c;const r=new De,a=new De,s=new ht,o=new Oh,l=new Bh,c={},d=t.maxTextureSize,p={[Vn]:It,[It]:Vn,[Zt]:Zt},u=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:yg,fragmentShader:Eg}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const _=new hn;_.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new kt(_,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ur;let h=this.type;this.render=function(A,D,x){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;this.type===Cu&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ur);const y=i.getRenderTarget(),q=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Tn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const B=h!==this.type;B&&D.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(V=>V.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,V=A.length;k<V;k++){const z=A[k],O=z.shadow;if(O===void 0){Re("WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const Q=O.getFrameExtents();r.multiply(Q),a.copy(O.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/Q.x),r.x=a.x*Q.x,O.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/Q.y),r.y=a.y*Q.y,O.mapSize.y=a.y));const K=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=K,O.map===null||B===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Yi){if(z.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Jt(r.x,r.y,{format:Di,type:bn,minFilter:pt,magFilter:pt,generateMipmaps:!1}),O.map.texture.name=z.name+".shadowMap",O.map.depthTexture=new Qi(r.x,r.y,Ht),O.map.depthTexture.name=z.name+".shadowMapDepth",O.map.depthTexture.format=An,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=gt,O.map.depthTexture.magFilter=gt}else z.isPointLight?(O.map=new yc(r.x),O.map.depthTexture=new Lh(r.x,ln)):(O.map=new Jt(r.x,r.y),O.map.depthTexture=new Qi(r.x,r.y,ln)),O.map.depthTexture.name=z.name+".shadowMap",O.map.depthTexture.format=An,this.type===Ur?(O.map.depthTexture.compareFunction=K?oo:so,O.map.depthTexture.minFilter=pt,O.map.depthTexture.magFilter=pt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=gt,O.map.depthTexture.magFilter=gt);O.camera.updateProjectionMatrix()}const ce=O.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<ce;fe++){if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,fe),i.clear();else{fe===0&&(i.setRenderTarget(O.map),i.clear());const ue=O.getViewport(fe);s.set(a.x*ue.x,a.y*ue.y,a.x*ue.z,a.y*ue.w),G.viewport(s)}if(z.isPointLight){const ue=O.camera,Le=O.matrix,et=z.distance||ue.far;et!==ue.far&&(ue.far=et,ue.updateProjectionMatrix()),Xi.setFromMatrixPosition(z.matrixWorld),ue.position.copy(Xi),ja.copy(ue.position),ja.add(bg[fe]),ue.up.copy(Ag[fe]),ue.lookAt(ja),ue.updateMatrixWorld(),Le.makeTranslation(-Xi.x,-Xi.y,-Xi.z),Rl.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Rl,ue.coordinateSystem,ue.reversedDepth)}else O.updateMatrices(z);n=O.getFrustum(),E(D,x,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===Yi&&M(O,x),O.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(y,q,w)};function M(A,D){const x=e.update(S);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Jt(r.x,r.y,{format:Di,type:bn})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(D,null,x,u,S,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(D,null,x,m,S,null)}function b(A,D,x,y){let q=null;const w=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)q=w;else if(q=x.isPointLight===!0?l:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const G=q.uuid,B=D.uuid;let k=c[G];k===void 0&&(k={},c[G]=k);let V=k[B];V===void 0&&(V=q.clone(),k[B]=V,D.addEventListener("dispose",R)),q=V}if(q.visible=D.visible,q.wireframe=D.wireframe,y===Yi?q.side=D.shadowSide!==null?D.shadowSide:D.side:q.side=D.shadowSide!==null?D.shadowSide:p[D.side],q.alphaMap=D.alphaMap,q.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,q.map=D.map,q.clipShadows=D.clipShadows,q.clippingPlanes=D.clippingPlanes,q.clipIntersection=D.clipIntersection,q.displacementMap=D.displacementMap,q.displacementScale=D.displacementScale,q.displacementBias=D.displacementBias,q.wireframeLinewidth=D.wireframeLinewidth,q.linewidth=D.linewidth,x.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const G=i.properties.get(q);G.light=x}return q}function E(A,D,x,y,q){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&q===Yi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);const B=e.update(A),k=A.material;if(Array.isArray(k)){const V=B.groups;for(let z=0,O=V.length;z<O;z++){const Q=V[z],K=k[Q.materialIndex];if(K&&K.visible){const ce=b(A,K,y,q);A.onBeforeShadow(i,A,D,x,B,ce,Q),i.renderBufferDirect(x,null,B,ce,A,Q),A.onAfterShadow(i,A,D,x,B,ce,Q)}}}else if(k.visible){const V=b(A,k,y,q);A.onBeforeShadow(i,A,D,x,B,V,null),i.renderBufferDirect(x,null,B,V,A,null),A.onAfterShadow(i,A,D,x,B,V,null)}}const G=A.children;for(let B=0,k=G.length;B<k;B++)E(G[B],D,x,y,q)}function R(A){A.target.removeEventListener("dispose",R);for(const x in c){const y=c[x],q=A.target.uuid;q in y&&(y[q].dispose(),delete y[q])}}}function wg(i,e){function t(){let P=!1;const ae=new ht;let ie=null;const pe=new ht(0,0,0,0);return{setMask:function(te){ie!==te&&!P&&(i.colorMask(te,te,te,te),ie=te)},setLocked:function(te){P=te},setClear:function(te,W,xe,Pe,rt){rt===!0&&(te*=Pe,W*=Pe,xe*=Pe),ae.set(te,W,xe,Pe),pe.equals(ae)===!1&&(i.clearColor(te,W,xe,Pe),pe.copy(ae))},reset:function(){P=!1,ie=null,pe.set(-1,0,0,0)}}}function n(){let P=!1,ae=!1,ie=null,pe=null,te=null;return{setReversed:function(W){if(ae!==W){const xe=e.get("EXT_clip_control");W?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ae=W;const Pe=te;te=null,this.setClear(Pe)}},getReversed:function(){return ae},setTest:function(W){W?j(i.DEPTH_TEST):J(i.DEPTH_TEST)},setMask:function(W){ie!==W&&!P&&(i.depthMask(W),ie=W)},setFunc:function(W){if(ae&&(W=ah[W]),pe!==W){switch(W){case rs:i.depthFunc(i.NEVER);break;case as:i.depthFunc(i.ALWAYS);break;case ss:i.depthFunc(i.LESS);break;case Ri:i.depthFunc(i.LEQUAL);break;case os:i.depthFunc(i.EQUAL);break;case ls:i.depthFunc(i.GEQUAL);break;case cs:i.depthFunc(i.GREATER);break;case us:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=W}},setLocked:function(W){P=W},setClear:function(W){te!==W&&(te=W,ae&&(W=1-W),i.clearDepth(W))},reset:function(){P=!1,ie=null,pe=null,te=null,ae=!1}}}function r(){let P=!1,ae=null,ie=null,pe=null,te=null,W=null,xe=null,Pe=null,rt=null;return{setTest:function(je){P||(je?j(i.STENCIL_TEST):J(i.STENCIL_TEST))},setMask:function(je){ae!==je&&!P&&(i.stencilMask(je),ae=je)},setFunc:function(je,dn,fn){(ie!==je||pe!==dn||te!==fn)&&(i.stencilFunc(je,dn,fn),ie=je,pe=dn,te=fn)},setOp:function(je,dn,fn){(W!==je||xe!==dn||Pe!==fn)&&(i.stencilOp(je,dn,fn),W=je,xe=dn,Pe=fn)},setLocked:function(je){P=je},setClear:function(je){rt!==je&&(i.clearStencil(je),rt=je)},reset:function(){P=!1,ae=null,ie=null,pe=null,te=null,W=null,xe=null,Pe=null,rt=null}}}const a=new t,s=new n,o=new r,l=new WeakMap,c=new WeakMap;let d={},p={},u=new WeakMap,m=[],_=null,S=!1,f=null,h=null,M=null,b=null,E=null,R=null,A=null,D=new Ge(0,0,0),x=0,y=!1,q=null,w=null,G=null,B=null,k=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,O=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Q)[1]),z=O>=1):Q.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),z=O>=2);let K=null,ce={};const fe=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),Le=new ht().fromArray(fe),et=new ht().fromArray(ue);function Ye(P,ae,ie,pe){const te=new Uint8Array(4),W=i.createTexture();i.bindTexture(P,W),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xe=0;xe<ie;xe++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(ae+xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return W}const $={};$[i.TEXTURE_2D]=Ye(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),j(i.DEPTH_TEST),s.setFunc(Ri),Ne(!1),ct(Do),j(i.CULL_FACE),$e(Tn);function j(P){d[P]!==!0&&(i.enable(P),d[P]=!0)}function J(P){d[P]!==!1&&(i.disable(P),d[P]=!1)}function me(P,ae){return p[P]!==ae?(i.bindFramebuffer(P,ae),p[P]=ae,P===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ae),P===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ae(P,ae){let ie=m,pe=!1;if(P){ie=u.get(ae),ie===void 0&&(ie=[],u.set(ae,ie));const te=P.textures;if(ie.length!==te.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let W=0,xe=te.length;W<xe;W++)ie[W]=i.COLOR_ATTACHMENT0+W;ie.length=te.length,pe=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,pe=!0);pe&&i.drawBuffers(ie)}function ye(P){return _!==P?(i.useProgram(P),_=P,!0):!1}const vt={[Kn]:i.FUNC_ADD,[wu]:i.FUNC_SUBTRACT,[Ru]:i.FUNC_REVERSE_SUBTRACT};vt[Pu]=i.MIN,vt[Du]=i.MAX;const Ve={[Lu]:i.ZERO,[ns]:i.ONE,[Iu]:i.SRC_COLOR,[is]:i.SRC_ALPHA,[zu]:i.SRC_ALPHA_SATURATE,[Ou]:i.DST_COLOR,[Fu]:i.DST_ALPHA,[Uu]:i.ONE_MINUS_SRC_COLOR,[Zi]:i.ONE_MINUS_SRC_ALPHA,[Bu]:i.ONE_MINUS_DST_COLOR,[Nu]:i.ONE_MINUS_DST_ALPHA,[Gu]:i.CONSTANT_COLOR,[Vu]:i.ONE_MINUS_CONSTANT_COLOR,[Hu]:i.CONSTANT_ALPHA,[ku]:i.ONE_MINUS_CONSTANT_ALPHA};function $e(P,ae,ie,pe,te,W,xe,Pe,rt,je){if(P===Tn){S===!0&&(J(i.BLEND),S=!1);return}if(S===!1&&(j(i.BLEND),S=!0),P!==jl){if(P!==f||je!==y){if((h!==Kn||E!==Kn)&&(i.blendEquation(i.FUNC_ADD),h=Kn,E=Kn),je)switch(P){case Ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lo:i.blendFunc(i.ONE,i.ONE);break;case Io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:He("WebGLState: Invalid blending: ",P);break}else switch(P){case Ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Io:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uo:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",P);break}M=null,b=null,R=null,A=null,D.set(0,0,0),x=0,f=P,y=je}return}te=te||ae,W=W||ie,xe=xe||pe,(ae!==h||te!==E)&&(i.blendEquationSeparate(vt[ae],vt[te]),h=ae,E=te),(ie!==M||pe!==b||W!==R||xe!==A)&&(i.blendFuncSeparate(Ve[ie],Ve[pe],Ve[W],Ve[xe]),M=ie,b=pe,R=W,A=xe),(Pe.equals(D)===!1||rt!==x)&&(i.blendColor(Pe.r,Pe.g,Pe.b,rt),D.copy(Pe),x=rt),f=P,y=!1}function tt(P,ae){P.side===Zt?J(i.CULL_FACE):j(i.CULL_FACE);let ie=P.side===It;ae&&(ie=!ie),Ne(ie),P.blending===Ci&&P.transparent===!1?$e(Tn):$e(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),a.setMask(P.colorWrite);const pe=P.stencilWrite;o.setTest(pe),pe&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),dt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):J(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(P){q!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),q=P)}function ct(P){P!==bu?(j(i.CULL_FACE),P!==w&&(P===Do?i.cullFace(i.BACK):P===Au?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):J(i.CULL_FACE),w=P}function C(P){P!==G&&(z&&i.lineWidth(P),G=P)}function dt(P,ae,ie){P?(j(i.POLYGON_OFFSET_FILL),(B!==ae||k!==ie)&&(B=ae,k=ie,s.getReversed()&&(ae=-ae),i.polygonOffset(ae,ie))):J(i.POLYGON_OFFSET_FILL)}function Xe(P){P?j(i.SCISSOR_TEST):J(i.SCISSOR_TEST)}function it(P){P===void 0&&(P=i.TEXTURE0+V-1),K!==P&&(i.activeTexture(P),K=P)}function Me(P,ae,ie){ie===void 0&&(K===null?ie=i.TEXTURE0+V-1:ie=K);let pe=ce[ie];pe===void 0&&(pe={type:void 0,texture:void 0},ce[ie]=pe),(pe.type!==P||pe.texture!==ae)&&(K!==ie&&(i.activeTexture(ie),K=ie),i.bindTexture(P,ae||$[P]),pe.type=P,pe.texture=ae)}function T(){const P=ce[K];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(P){He("WebGLState:",P)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(P){He("WebGLState:",P)}}function Y(){try{i.texSubImage2D(...arguments)}catch(P){He("WebGLState:",P)}}function Z(){try{i.texSubImage3D(...arguments)}catch(P){He("WebGLState:",P)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(P){He("WebGLState:",P)}}function ge(){try{i.compressedTexSubImage3D(...arguments)}catch(P){He("WebGLState:",P)}}function re(){try{i.texStorage2D(...arguments)}catch(P){He("WebGLState:",P)}}function Ce(){try{i.texStorage3D(...arguments)}catch(P){He("WebGLState:",P)}}function we(){try{i.texImage2D(...arguments)}catch(P){He("WebGLState:",P)}}function ee(){try{i.texImage3D(...arguments)}catch(P){He("WebGLState:",P)}}function ne(P){Le.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Le.copy(P))}function _e(P){et.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),et.copy(P))}function ve(P,ae){let ie=c.get(ae);ie===void 0&&(ie=new WeakMap,c.set(ae,ie));let pe=ie.get(P);pe===void 0&&(pe=i.getUniformBlockIndex(ae,P.name),ie.set(P,pe))}function he(P,ae){const pe=c.get(ae).get(P);l.get(ae)!==pe&&(i.uniformBlockBinding(ae,pe,P.__bindingPointIndex),l.set(ae,pe))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},K=null,ce={},p={},u=new WeakMap,m=[],_=null,S=!1,f=null,h=null,M=null,b=null,E=null,R=null,A=null,D=new Ge(0,0,0),x=0,y=!1,q=null,w=null,G=null,B=null,k=null,Le.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:j,disable:J,bindFramebuffer:me,drawBuffers:Ae,useProgram:ye,setBlending:$e,setMaterial:tt,setFlipSided:Ne,setCullFace:ct,setLineWidth:C,setPolygonOffset:dt,setScissorTest:Xe,activeTexture:it,bindTexture:Me,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:L,texImage2D:we,texImage3D:ee,updateUBOMapping:ve,uniformBlockBinding:he,texStorage2D:re,texStorage3D:Ce,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:X,compressedTexSubImage3D:ge,scissor:ne,viewport:_e,reset:Oe}}function Rg(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,d=new WeakMap;let p;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return m?new OffscreenCanvas(T,g):kr("canvas")}function S(T,g,L){let Y=1;const Z=Me(T);if((Z.width>L||Z.height>L)&&(Y=L/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor(Y*Z.width),ge=Math.floor(Y*Z.height);p===void 0&&(p=_(X,ge));const re=g?_(X,ge):p;return re.width=X,re.height=ge,re.getContext("2d").drawImage(T,0,0,X,ge),Re("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+ge+")."),re}else return"data"in T&&Re("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function f(T){return T.generateMipmaps}function h(T){i.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,g,L,Y,Z=!1){if(T!==null){if(i[T]!==void 0)return i[T];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=g;if(g===i.RED&&(L===i.FLOAT&&(X=i.R32F),L===i.HALF_FLOAT&&(X=i.R16F),L===i.UNSIGNED_BYTE&&(X=i.R8)),g===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(X=i.R8UI),L===i.UNSIGNED_SHORT&&(X=i.R16UI),L===i.UNSIGNED_INT&&(X=i.R32UI),L===i.BYTE&&(X=i.R8I),L===i.SHORT&&(X=i.R16I),L===i.INT&&(X=i.R32I)),g===i.RG&&(L===i.FLOAT&&(X=i.RG32F),L===i.HALF_FLOAT&&(X=i.RG16F),L===i.UNSIGNED_BYTE&&(X=i.RG8)),g===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(X=i.RG8UI),L===i.UNSIGNED_SHORT&&(X=i.RG16UI),L===i.UNSIGNED_INT&&(X=i.RG32UI),L===i.BYTE&&(X=i.RG8I),L===i.SHORT&&(X=i.RG16I),L===i.INT&&(X=i.RG32I)),g===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(X=i.RGB8UI),L===i.UNSIGNED_SHORT&&(X=i.RGB16UI),L===i.UNSIGNED_INT&&(X=i.RGB32UI),L===i.BYTE&&(X=i.RGB8I),L===i.SHORT&&(X=i.RGB16I),L===i.INT&&(X=i.RGB32I)),g===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),L===i.UNSIGNED_INT&&(X=i.RGBA32UI),L===i.BYTE&&(X=i.RGBA8I),L===i.SHORT&&(X=i.RGBA16I),L===i.INT&&(X=i.RGBA32I)),g===i.RGB&&(L===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),g===i.RGBA){const ge=Z?Vr:ke.getTransfer(Y);L===i.FLOAT&&(X=i.RGBA32F),L===i.HALF_FLOAT&&(X=i.RGBA16F),L===i.UNSIGNED_BYTE&&(X=ge===Ze?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function E(T,g){let L;return T?g===null||g===ln||g===Ji?L=i.DEPTH24_STENCIL8:g===Ht?L=i.DEPTH32F_STENCIL8:g===Ki&&(L=i.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ln||g===Ji?L=i.DEPTH_COMPONENT24:g===Ht?L=i.DEPTH_COMPONENT32F:g===Ki&&(L=i.DEPTH_COMPONENT16),L}function R(T,g){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==gt&&T.minFilter!==pt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function A(T){const g=T.target;g.removeEventListener("dispose",A),x(g),g.isVideoTexture&&d.delete(g)}function D(T){const g=T.target;g.removeEventListener("dispose",D),q(g)}function x(T){const g=n.get(T);if(g.__webglInit===void 0)return;const L=T.source,Y=u.get(L);if(Y){const Z=Y[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(T),Object.keys(Y).length===0&&u.delete(L)}n.remove(T)}function y(T){const g=n.get(T);i.deleteTexture(g.__webglTexture);const L=T.source,Y=u.get(L);delete Y[g.__cacheKey],s.memory.textures--}function q(T){const g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let Z=0;Z<g.__webglFramebuffer[Y].length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[Y][Z]);else i.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[Y]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=T.textures;for(let Y=0,Z=L.length;Y<Z;Y++){const X=n.get(L[Y]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),s.memory.textures--),n.remove(L[Y])}n.remove(T)}let w=0;function G(){w=0}function B(){const T=w;return T>=r.maxTextures&&Re("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),w+=1,T}function k(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function V(T,g){const L=n.get(T);if(T.isVideoTexture&&Xe(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&L.__version!==T.version){const Y=T.image;if(Y===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{$(L,T,g);return}}else T.isExternalTexture&&(L.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+g)}function z(T,g){const L=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){$(L,T,g);return}else T.isExternalTexture&&(L.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+g)}function O(T,g){const L=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){$(L,T,g);return}t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+g)}function Q(T,g){const L=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&L.__version!==T.version){j(L,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+g)}const K={[hs]:i.REPEAT,[yt]:i.CLAMP_TO_EDGE,[ds]:i.MIRRORED_REPEAT},ce={[gt]:i.NEAREST,[qu]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[pt]:i.LINEAR,[Sa]:i.LINEAR_MIPMAP_NEAREST,[Sn]:i.LINEAR_MIPMAP_LINEAR},fe={[Zu]:i.NEVER,[th]:i.ALWAYS,[Ku]:i.LESS,[so]:i.LEQUAL,[Ju]:i.EQUAL,[oo]:i.GEQUAL,[Qu]:i.GREATER,[eh]:i.NOTEQUAL};function ue(T,g){if(g.type===Ht&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===pt||g.magFilter===Sa||g.magFilter===ar||g.magFilter===Sn||g.minFilter===pt||g.minFilter===Sa||g.minFilter===ar||g.minFilter===Sn)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,K[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,K[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,K[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ce[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ce[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,fe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===gt||g.minFilter!==ar&&g.minFilter!==Sn||g.type===Ht&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Le(T,g){let L=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",A));const Y=g.source;let Z=u.get(Y);Z===void 0&&(Z={},u.set(Y,Z));const X=k(g);if(X!==T.__cacheKey){Z[X]===void 0&&(Z[X]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,L=!0),Z[X].usedTimes++;const ge=Z[T.__cacheKey];ge!==void 0&&(Z[T.__cacheKey].usedTimes--,ge.usedTimes===0&&y(g)),T.__cacheKey=X,T.__webglTexture=Z[X].texture}return L}function et(T,g,L){return Math.floor(Math.floor(T/L)/g)}function Ye(T,g,L,Y){const X=T.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,L,Y,g.data);else{X.sort((ee,ne)=>ee.start-ne.start);let ge=0;for(let ee=1;ee<X.length;ee++){const ne=X[ge],_e=X[ee],ve=ne.start+ne.count,he=et(_e.start,g.width,4),Oe=et(ne.start,g.width,4);_e.start<=ve+1&&he===Oe&&et(_e.start+_e.count-1,g.width,4)===he?ne.count=Math.max(ne.count,_e.start+_e.count-ne.start):(++ge,X[ge]=_e)}X.length=ge+1;const re=i.getParameter(i.UNPACK_ROW_LENGTH),Ce=i.getParameter(i.UNPACK_SKIP_PIXELS),we=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let ee=0,ne=X.length;ee<ne;ee++){const _e=X[ee],ve=Math.floor(_e.start/4),he=Math.ceil(_e.count/4),Oe=ve%g.width,P=Math.floor(ve/g.width),ae=he,ie=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,Oe,P,ae,ie,L,Y,g.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),i.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function $(T,g,L){let Y=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=i.TEXTURE_3D);const Z=Le(T,g),X=g.source;t.bindTexture(Y,T.__webglTexture,i.TEXTURE0+L);const ge=n.get(X);if(X.version!==ge.__version||Z===!0){t.activeTexture(i.TEXTURE0+L);const re=ke.getPrimaries(ke.workingColorSpace),Ce=g.colorSpace===On?null:ke.getPrimaries(g.colorSpace),we=g.colorSpace===On||re===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ee=S(g.image,!1,r.maxTextureSize);ee=it(g,ee);const ne=a.convert(g.format,g.colorSpace),_e=a.convert(g.type);let ve=b(g.internalFormat,ne,_e,g.colorSpace,g.isVideoTexture);ue(Y,g);let he;const Oe=g.mipmaps,P=g.isVideoTexture!==!0,ae=ge.__version===void 0||Z===!0,ie=X.dataReady,pe=R(g,ee);if(g.isDepthTexture)ve=E(g.format===ei,g.type),ae&&(P?t.texStorage2D(i.TEXTURE_2D,1,ve,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,ve,ee.width,ee.height,0,ne,_e,null));else if(g.isDataTexture)if(Oe.length>0){P&&ae&&t.texStorage2D(i.TEXTURE_2D,pe,ve,Oe[0].width,Oe[0].height);for(let te=0,W=Oe.length;te<W;te++)he=Oe[te],P?ie&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,he.width,he.height,ne,_e,he.data):t.texImage2D(i.TEXTURE_2D,te,ve,he.width,he.height,0,ne,_e,he.data);g.generateMipmaps=!1}else P?(ae&&t.texStorage2D(i.TEXTURE_2D,pe,ve,ee.width,ee.height),ie&&Ye(g,ee,ne,_e)):t.texImage2D(i.TEXTURE_2D,0,ve,ee.width,ee.height,0,ne,_e,ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){P&&ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ve,Oe[0].width,Oe[0].height,ee.depth);for(let te=0,W=Oe.length;te<W;te++)if(he=Oe[te],g.format!==Lt)if(ne!==null)if(P){if(ie)if(g.layerUpdates.size>0){const xe=sl(he.width,he.height,g.format,g.type);for(const Pe of g.layerUpdates){const rt=he.data.subarray(Pe*xe/he.data.BYTES_PER_ELEMENT,(Pe+1)*xe/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,Pe,he.width,he.height,1,ne,rt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ee.depth,ne,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,ve,he.width,he.height,ee.depth,0,he.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ie&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ee.depth,ne,_e,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,ve,he.width,he.height,ee.depth,0,ne,_e,he.data)}else{P&&ae&&t.texStorage2D(i.TEXTURE_2D,pe,ve,Oe[0].width,Oe[0].height);for(let te=0,W=Oe.length;te<W;te++)he=Oe[te],g.format!==Lt?ne!==null?P?ie&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,he.width,he.height,ne,he.data):t.compressedTexImage2D(i.TEXTURE_2D,te,ve,he.width,he.height,0,he.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ie&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,he.width,he.height,ne,_e,he.data):t.texImage2D(i.TEXTURE_2D,te,ve,he.width,he.height,0,ne,_e,he.data)}else if(g.isDataArrayTexture)if(P){if(ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ve,ee.width,ee.height,ee.depth),ie)if(g.layerUpdates.size>0){const te=sl(ee.width,ee.height,g.format,g.type);for(const W of g.layerUpdates){const xe=ee.data.subarray(W*te/ee.data.BYTES_PER_ELEMENT,(W+1)*te/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,W,ee.width,ee.height,1,ne,_e,xe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ne,_e,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,ee.width,ee.height,ee.depth,0,ne,_e,ee.data);else if(g.isData3DTexture)P?(ae&&t.texStorage3D(i.TEXTURE_3D,pe,ve,ee.width,ee.height,ee.depth),ie&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ne,_e,ee.data)):t.texImage3D(i.TEXTURE_3D,0,ve,ee.width,ee.height,ee.depth,0,ne,_e,ee.data);else if(g.isFramebufferTexture){if(ae)if(P)t.texStorage2D(i.TEXTURE_2D,pe,ve,ee.width,ee.height);else{let te=ee.width,W=ee.height;for(let xe=0;xe<pe;xe++)t.texImage2D(i.TEXTURE_2D,xe,ve,te,W,0,ne,_e,null),te>>=1,W>>=1}}else if(Oe.length>0){if(P&&ae){const te=Me(Oe[0]);t.texStorage2D(i.TEXTURE_2D,pe,ve,te.width,te.height)}for(let te=0,W=Oe.length;te<W;te++)he=Oe[te],P?ie&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ne,_e,he):t.texImage2D(i.TEXTURE_2D,te,ve,ne,_e,he);g.generateMipmaps=!1}else if(P){if(ae){const te=Me(ee);t.texStorage2D(i.TEXTURE_2D,pe,ve,te.width,te.height)}ie&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne,_e,ee)}else t.texImage2D(i.TEXTURE_2D,0,ve,ne,_e,ee);f(g)&&h(Y),ge.__version=X.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function j(T,g,L){if(g.image.length!==6)return;const Y=Le(T,g),Z=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+L);const X=n.get(Z);if(Z.version!==X.__version||Y===!0){t.activeTexture(i.TEXTURE0+L);const ge=ke.getPrimaries(ke.workingColorSpace),re=g.colorSpace===On?null:ke.getPrimaries(g.colorSpace),Ce=g.colorSpace===On||ge===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const we=g.isCompressedTexture||g.image[0].isCompressedTexture,ee=g.image[0]&&g.image[0].isDataTexture,ne=[];for(let W=0;W<6;W++)!we&&!ee?ne[W]=S(g.image[W],!0,r.maxCubemapSize):ne[W]=ee?g.image[W].image:g.image[W],ne[W]=it(g,ne[W]);const _e=ne[0],ve=a.convert(g.format,g.colorSpace),he=a.convert(g.type),Oe=b(g.internalFormat,ve,he,g.colorSpace),P=g.isVideoTexture!==!0,ae=X.__version===void 0||Y===!0,ie=Z.dataReady;let pe=R(g,_e);ue(i.TEXTURE_CUBE_MAP,g);let te;if(we){P&&ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Oe,_e.width,_e.height);for(let W=0;W<6;W++){te=ne[W].mipmaps;for(let xe=0;xe<te.length;xe++){const Pe=te[xe];g.format!==Lt?ve!==null?P?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe,0,0,Pe.width,Pe.height,ve,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe,Oe,Pe.width,Pe.height,0,Pe.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe,0,0,Pe.width,Pe.height,ve,he,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe,Oe,Pe.width,Pe.height,0,ve,he,Pe.data)}}}else{if(te=g.mipmaps,P&&ae){te.length>0&&pe++;const W=Me(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Oe,W.width,W.height)}for(let W=0;W<6;W++)if(ee){P?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,ne[W].width,ne[W].height,ve,he,ne[W].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Oe,ne[W].width,ne[W].height,0,ve,he,ne[W].data);for(let xe=0;xe<te.length;xe++){const rt=te[xe].image[W].image;P?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe+1,0,0,rt.width,rt.height,ve,he,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe+1,Oe,rt.width,rt.height,0,ve,he,rt.data)}}else{P?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,ve,he,ne[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Oe,ve,he,ne[W]);for(let xe=0;xe<te.length;xe++){const Pe=te[xe];P?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe+1,0,0,ve,he,Pe.image[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe+1,Oe,ve,he,Pe.image[W])}}}f(g)&&h(i.TEXTURE_CUBE_MAP),X.__version=Z.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function J(T,g,L,Y,Z,X){const ge=a.convert(L.format,L.colorSpace),re=a.convert(L.type),Ce=b(L.internalFormat,ge,re,L.colorSpace),we=n.get(g),ee=n.get(L);if(ee.__renderTarget=g,!we.__hasExternalTextures){const ne=Math.max(1,g.width>>X),_e=Math.max(1,g.height>>X);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,Ce,ne,_e,g.depth,0,ge,re,null):t.texImage2D(Z,X,Ce,ne,_e,0,ge,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),dt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Z,ee.__webglTexture,0,C(g)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Z,ee.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(T,g,L){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){const Y=g.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,X=E(g.stencilBuffer,Z),ge=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;dt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(g),X,g.width,g.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(g),X,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,X,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,T)}else{const Y=g.textures;for(let Z=0;Z<Y.length;Z++){const X=Y[Z],ge=a.convert(X.format,X.colorSpace),re=a.convert(X.type),Ce=b(X.internalFormat,ge,re,X.colorSpace);dt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(g),Ce,g.width,g.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(g),Ce,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(T,g,L){const Y=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(g.depthTexture);if(Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,g.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ue(i.TEXTURE_CUBE_MAP,g.depthTexture);const we=a.convert(g.depthTexture.format),ee=a.convert(g.depthTexture.type);let ne;g.depthTexture.format===An?ne=i.DEPTH_COMPONENT24:g.depthTexture.format===ei&&(ne=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ne,g.width,g.height,0,we,ee,null)}}else V(g.depthTexture,0);const X=Z.__webglTexture,ge=C(g),re=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,Ce=g.depthTexture.format===ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===An)dt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,re,X,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,re,X,0);else if(g.depthTexture.format===ei)dt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,re,X,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,re,X,0);else throw new Error("Unknown depthTexture format")}function ye(T){const g=n.get(T),L=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=Y}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(L)for(let Y=0;Y<6;Y++)Ae(g.__webglFramebuffer[Y],T,Y);else{const Y=T.texture.mipmaps;Y&&Y.length>0?Ae(g.__webglFramebuffer[0],T,0):Ae(g.__webglFramebuffer,T,0)}else if(L){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=i.createRenderbuffer(),me(g.__webglDepthbuffer[Y],T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}else{const Y=T.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),me(g.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(T,g,L){const Y=n.get(T);g!==void 0&&J(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&ye(T)}function Ve(T){const g=T.texture,L=n.get(T),Y=n.get(g);T.addEventListener("dispose",D);const Z=T.textures,X=T.isWebGLCubeRenderTarget===!0,ge=Z.length>1;if(ge||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=g.version,s.memory.textures++),X){L.__webglFramebuffer=[];for(let re=0;re<6;re++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[re]=[];for(let Ce=0;Ce<g.mipmaps.length;Ce++)L.__webglFramebuffer[re][Ce]=i.createFramebuffer()}else L.__webglFramebuffer[re]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let re=0;re<g.mipmaps.length;re++)L.__webglFramebuffer[re]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(ge)for(let re=0,Ce=Z.length;re<Ce;re++){const we=n.get(Z[re]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),s.memory.textures++)}if(T.samples>0&&dt(T)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){const Ce=Z[re];L.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[re]);const we=a.convert(Ce.format,Ce.colorSpace),ee=a.convert(Ce.type),ne=b(Ce.internalFormat,we,ee,Ce.colorSpace,T.isXRRenderTarget===!0),_e=C(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ne,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,L.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),me(L.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ue(i.TEXTURE_CUBE_MAP,g);for(let re=0;re<6;re++)if(g.mipmaps&&g.mipmaps.length>0)for(let Ce=0;Ce<g.mipmaps.length;Ce++)J(L.__webglFramebuffer[re][Ce],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce);else J(L.__webglFramebuffer[re],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);f(g)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let re=0,Ce=Z.length;re<Ce;re++){const we=Z[re],ee=n.get(we);let ne=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ne=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,ee.__webglTexture),ue(ne,we),J(L.__webglFramebuffer,T,we,i.COLOR_ATTACHMENT0+re,ne,0),f(we)&&h(ne)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(re=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,Y.__webglTexture),ue(re,g),g.mipmaps&&g.mipmaps.length>0)for(let Ce=0;Ce<g.mipmaps.length;Ce++)J(L.__webglFramebuffer[Ce],T,g,i.COLOR_ATTACHMENT0,re,Ce);else J(L.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,re,0);f(g)&&h(re),t.unbindTexture()}T.depthBuffer&&ye(T)}function $e(T){const g=T.textures;for(let L=0,Y=g.length;L<Y;L++){const Z=g[L];if(f(Z)){const X=M(T),ge=n.get(Z).__webglTexture;t.bindTexture(X,ge),h(X),t.unbindTexture()}}}const tt=[],Ne=[];function ct(T){if(T.samples>0){if(dt(T)===!1){const g=T.textures,L=T.width,Y=T.height;let Z=i.COLOR_BUFFER_BIT;const X=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(T),re=g.length>1;if(re)for(let we=0;we<g.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const Ce=T.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let we=0;we<g.length;we++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[we]);const ee=n.get(g[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,L,Y,0,0,L,Y,Z,i.NEAREST),l===!0&&(tt.length=0,Ne.length=0,tt.push(i.COLOR_ATTACHMENT0+we),T.depthBuffer&&T.resolveDepthBuffer===!1&&(tt.push(X),Ne.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let we=0;we<g.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,ge.__webglColorRenderbuffer[we]);const ee=n.get(g[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function C(T){return Math.min(r.maxSamples,T.samples)}function dt(T){const g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Xe(T){const g=s.render.frame;d.get(T)!==g&&(d.set(T,g),T.update())}function it(T,g){const L=T.colorSpace,Y=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||L!==Li&&L!==On&&(ke.getTransfer(L)===Ze?(Y!==Lt||Z!==Gt)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",L)),g}function Me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=O,this.setTextureCube=Q,this.rebindTextures=vt,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=J,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Pg(i,e){function t(n,r=On){let a;const s=ke.getTransfer(r);if(n===Gt)return i.UNSIGNED_BYTE;if(n===eo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===to)return i.UNSIGNED_SHORT_5_5_5_1;if(n===oc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ac)return i.BYTE;if(n===sc)return i.SHORT;if(n===Ki)return i.UNSIGNED_SHORT;if(n===Qs)return i.INT;if(n===ln)return i.UNSIGNED_INT;if(n===Ht)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===cc)return i.ALPHA;if(n===uc)return i.RGB;if(n===Lt)return i.RGBA;if(n===An)return i.DEPTH_COMPONENT;if(n===ei)return i.DEPTH_STENCIL;if(n===no)return i.RED;if(n===io)return i.RED_INTEGER;if(n===Di)return i.RG;if(n===ro)return i.RG_INTEGER;if(n===ao)return i.RGBA_INTEGER;if(n===Fr||n===Nr||n===Or||n===Br)if(s===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Fr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Fr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Or)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Br)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fs||n===ps||n===ms||n===gs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===fs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ps)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ms)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_s||n===xs||n===vs||n===Ss||n===Ms||n===Ts||n===ys)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===_s||n===xs)return s===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===vs)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ss)return a.COMPRESSED_R11_EAC;if(n===Ms)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Ts)return a.COMPRESSED_RG11_EAC;if(n===ys)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Es||n===bs||n===As||n===Cs||n===ws||n===Rs||n===Ps||n===Ds||n===Ls||n===Is||n===Us||n===Fs||n===Ns||n===Os)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Es)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bs)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===As)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cs)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ws)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rs)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ps)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ds)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ls)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Is)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Us)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fs)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ns)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Os)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bs||n===zs||n===Gs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Bs)return s===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zs)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gs)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vs||n===Hs||n===ks||n===Ws)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Vs)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Hs)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ks)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ws)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lg=`
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

}`;class Ig{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new vc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new un({vertexShader:Dg,fragmentShader:Lg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new ra(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ug extends ri{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,d=null,p=null,u=null,m=null,_=null;const S=typeof XRWebGLBinding<"u",f=new Ig,h={},M=t.getContextAttributes();let b=null,E=null;const R=[],A=[],D=new De;let x=null;const y=new jt;y.viewport=new ht;const q=new jt;q.viewport=new ht;const w=[y,q],G=new kh;let B=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let j=R[$];return j===void 0&&(j=new Ca,R[$]=j),j.getTargetRaySpace()},this.getControllerGrip=function($){let j=R[$];return j===void 0&&(j=new Ca,R[$]=j),j.getGripSpace()},this.getHand=function($){let j=R[$];return j===void 0&&(j=new Ca,R[$]=j),j.getHandSpace()};function V($){const j=A.indexOf($.inputSource);if(j===-1)return;const J=R[j];J!==void 0&&(J.update($.inputSource,$.frame,c||s),J.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",O);for(let $=0;$<R.length;$++){const j=A[$];j!==null&&(A[$]=null,R[$].disconnect(j))}B=null,k=null,f.reset();for(const $ in h)delete h[$];e.setRenderTarget(b),m=null,u=null,p=null,r=null,E=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",z),r.addEventListener("inputsourceschange",O),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(D),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,me=null,Ae=null;M.depth&&(Ae=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=M.stencil?ei:An,me=M.stencil?Ji:ln);const ye={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(ye),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new Jt(u.textureWidth,u.textureHeight,{format:Lt,type:Gt,depthTexture:new Qi(u.textureWidth,u.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const J={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Jt(m.framebufferWidth,m.framebufferHeight,{format:Lt,type:Gt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),Ye.setContext(r),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function O($){for(let j=0;j<$.removed.length;j++){const J=$.removed[j],me=A.indexOf(J);me>=0&&(A[me]=null,R[me].disconnect(J))}for(let j=0;j<$.added.length;j++){const J=$.added[j];let me=A.indexOf(J);if(me===-1){for(let ye=0;ye<R.length;ye++)if(ye>=A.length){A.push(J),me=ye;break}else if(A[ye]===null){A[ye]=J,me=ye;break}if(me===-1)break}const Ae=R[me];Ae&&Ae.connect(J)}}const Q=new U,K=new U;function ce($,j,J){Q.setFromMatrixPosition(j.matrixWorld),K.setFromMatrixPosition(J.matrixWorld);const me=Q.distanceTo(K),Ae=j.projectionMatrix.elements,ye=J.projectionMatrix.elements,vt=Ae[14]/(Ae[10]-1),Ve=Ae[14]/(Ae[10]+1),$e=(Ae[9]+1)/Ae[5],tt=(Ae[9]-1)/Ae[5],Ne=(Ae[8]-1)/Ae[0],ct=(ye[8]+1)/ye[0],C=vt*Ne,dt=vt*ct,Xe=me/(-Ne+ct),it=Xe*-Ne;if(j.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(it),$.translateZ(Xe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ae[10]===-1)$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Me=vt+Xe,T=Ve+Xe,g=C-it,L=dt+(me-it),Y=$e*Ve/T*Me,Z=tt*Ve/T*Me;$.projectionMatrix.makePerspective(g,L,Y,Z,Me,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function fe($,j){j===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(j.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let j=$.near,J=$.far;f.texture!==null&&(f.depthNear>0&&(j=f.depthNear),f.depthFar>0&&(J=f.depthFar)),G.near=q.near=y.near=j,G.far=q.far=y.far=J,(B!==G.near||k!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),B=G.near,k=G.far),G.layers.mask=$.layers.mask|6,y.layers.mask=G.layers.mask&-5,q.layers.mask=G.layers.mask&-3;const me=$.parent,Ae=G.cameras;fe(G,me);for(let ye=0;ye<Ae.length;ye++)fe(Ae[ye],me);Ae.length===2?ce(G,y,q):G.projectionMatrix.copy(y.projectionMatrix),ue($,G,me)};function ue($,j,J){J===null?$.matrix.copy(j.matrixWorld):($.matrix.copy(J.matrixWorld),$.matrix.invert(),$.matrix.multiply(j.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Xs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(G)},this.getCameraTexture=function($){return h[$]};let Le=null;function et($,j){if(d=j.getViewerPose(c||s),_=j,d!==null){const J=d.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let me=!1;J.length!==G.cameras.length&&(G.cameras.length=0,me=!0);for(let Ve=0;Ve<J.length;Ve++){const $e=J[Ve];let tt=null;if(m!==null)tt=m.getViewport($e);else{const ct=p.getViewSubImage(u,$e);tt=ct.viewport,Ve===0&&(e.setRenderTargetTextures(E,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(E))}let Ne=w[Ve];Ne===void 0&&(Ne=new jt,Ne.layers.enable(Ve),Ne.viewport=new ht,w[Ve]=Ne),Ne.matrix.fromArray($e.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray($e.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(tt.x,tt.y,tt.width,tt.height),Ve===0&&(G.matrix.copy(Ne.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),me===!0&&G.cameras.push(Ne)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){p=n.getBinding();const Ve=p.getDepthInformation(J[0]);Ve&&Ve.isValid&&Ve.texture&&f.init(Ve,r.renderState)}if(Ae&&Ae.includes("camera-access")&&S){e.state.unbindTexture(),p=n.getBinding();for(let Ve=0;Ve<J.length;Ve++){const $e=J[Ve].camera;if($e){let tt=h[$e];tt||(tt=new vc,h[$e]=tt);const Ne=p.getCameraImage($e);tt.sourceTexture=Ne}}}}for(let J=0;J<R.length;J++){const me=A[J],Ae=R[J];me!==null&&Ae!==void 0&&Ae.update(me,j,c||s)}Le&&Le($,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}const Ye=new Tc;Ye.setAnimationLoop(et),this.setAnimationLoop=function($){Le=$},this.dispose=function(){}}}const Zn=new wn,Fg=new qe;function Ng(i,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,Sc(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function r(f,h,M,b,E){h.isMeshBasicMaterial?a(f,h):h.isMeshLambertMaterial?(a(f,h),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(a(f,h),p(f,h)):h.isMeshPhongMaterial?(a(f,h),d(f,h),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(a(f,h),u(f,h),h.isMeshPhysicalMaterial&&m(f,h,E)):h.isMeshMatcapMaterial?(a(f,h),_(f,h)):h.isMeshDepthMaterial?a(f,h):h.isMeshDistanceMaterial?(a(f,h),S(f,h)):h.isMeshNormalMaterial?a(f,h):h.isLineBasicMaterial?(s(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?l(f,h,M,b):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===It&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===It&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const M=e.get(h),b=M.envMap,E=M.envMapRotation;b&&(f.envMap.value=b,Zn.copy(E),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),f.envMapRotation.value.setFromMatrix4(Fg.makeRotationFromEuler(Zn)),f.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function s(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,M,b){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*M,f.scale.value=b*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function d(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function p(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function u(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,M){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===It&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,h){h.matcap&&(f.matcap.value=h.matcap)}function S(f,h){const M=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Og(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const E=b.program;n.uniformBlockBinding(M,E)}function c(M,b){let E=r[M.id];E===void 0&&(_(M),E=d(M),r[M.id]=E,M.addEventListener("dispose",f));const R=b.program;n.updateUBOMapping(M,R);const A=e.render.frame;a[M.id]!==A&&(u(M),a[M.id]=A)}function d(M){const b=p();M.__bindingPointIndex=b;const E=i.createBuffer(),R=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function p(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const b=r[M.id],E=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,D=E.length;A<D;A++){const x=Array.isArray(E[A])?E[A]:[E[A]];for(let y=0,q=x.length;y<q;y++){const w=x[y];if(m(w,A,y,R)===!0){const G=w.__offset,B=Array.isArray(w.value)?w.value:[w.value];let k=0;for(let V=0;V<B.length;V++){const z=B[V],O=S(z);typeof z=="number"||typeof z=="boolean"?(w.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,G+k,w.__data)):z.isMatrix3?(w.__data[0]=z.elements[0],w.__data[1]=z.elements[1],w.__data[2]=z.elements[2],w.__data[3]=0,w.__data[4]=z.elements[3],w.__data[5]=z.elements[4],w.__data[6]=z.elements[5],w.__data[7]=0,w.__data[8]=z.elements[6],w.__data[9]=z.elements[7],w.__data[10]=z.elements[8],w.__data[11]=0):(z.toArray(w.__data,k),k+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,b,E,R){const A=M.value,D=b+"_"+E;if(R[D]===void 0)return typeof A=="number"||typeof A=="boolean"?R[D]=A:R[D]=A.clone(),!0;{const x=R[D];if(typeof A=="number"||typeof A=="boolean"){if(x!==A)return R[D]=A,!0}else if(x.equals(A)===!1)return x.copy(A),!0}return!1}function _(M){const b=M.uniforms;let E=0;const R=16;for(let D=0,x=b.length;D<x;D++){const y=Array.isArray(b[D])?b[D]:[b[D]];for(let q=0,w=y.length;q<w;q++){const G=y[q],B=Array.isArray(G.value)?G.value:[G.value];for(let k=0,V=B.length;k<V;k++){const z=B[k],O=S(z),Q=E%R,K=Q%O.boundary,ce=Q+K;E+=K,ce!==0&&R-ce<O.storage&&(E+=R-ce),G.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=O.storage}}}const A=E%R;return A>0&&(E+=R-A),M.__size=E,M.__cache={},this}function S(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Re("WebGLRenderer: Unsupported uniform value type.",M),b}function f(M){const b=M.target;b.removeEventListener("dispose",f);const E=s.indexOf(b.__bindingPointIndex);s.splice(E,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function h(){for(const M in r)i.deleteBuffer(r[M]);s=[],r={},a={}}return{bind:l,update:c,dispose:h}}const Bg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let nn=null;function zg(){return nn===null&&(nn=new tr(Bg,16,16,Di,bn),nn.name="DFG_LUT",nn.minFilter=pt,nn.magFilter=pt,nn.wrapS=yt,nn.wrapT=yt,nn.generateMipmaps=!1,nn.needsUpdate=!0),nn}class Gg{constructor(e={}){const{canvas:t=ih(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Gt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=s;const S=m,f=new Set([ao,ro,io]),h=new Set([Gt,ln,Ki,Ji,eo,to]),M=new Uint32Array(4),b=new Int32Array(4);let E=null,R=null;const A=[],D=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=on,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let q=!1;this._outputColorSpace=Bt;let w=0,G=0,B=null,k=-1,V=null;const z=new ht,O=new ht;let Q=null;const K=new Ge(0);let ce=0,fe=t.width,ue=t.height,Le=1,et=null,Ye=null;const $=new ht(0,0,fe,ue),j=new ht(0,0,fe,ue);let J=!1;const me=new _c;let Ae=!1,ye=!1;const vt=new qe,Ve=new U,$e=new ht,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function ct(){return B===null?Le:1}let C=n;function dt(v,I){return t.getContext(v,I)}try{const v={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Js}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",rt,!1),C===null){const I="webgl2";if(C=dt(I,v),C===null)throw dt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw He("WebGLRenderer: "+v.message),v}let Xe,it,Me,T,g,L,Y,Z,X,ge,re,Ce,we,ee,ne,_e,ve,he,Oe,P,ae,ie,pe;function te(){Xe=new Gp(C),Xe.init(),ae=new Pg(C,Xe),it=new Lp(C,Xe,e,ae),Me=new wg(C,Xe),it.reversedDepthBuffer&&u&&Me.buffers.depth.setReversed(!0),T=new kp(C),g=new pg,L=new Rg(C,Xe,Me,g,it,ae,T),Y=new zp(y),Z=new Yh(C),ie=new Pp(C,Z),X=new Vp(C,Z,T,ie),ge=new Xp(C,X,Z,ie,T),he=new Wp(C,it,L),ne=new Ip(g),re=new fg(y,Y,Xe,it,ie,ne),Ce=new Ng(y,g),we=new gg,ee=new Tg(Xe),ve=new Rp(y,Y,Me,ge,_,l),_e=new Cg(y,ge,it),pe=new Og(C,T,it,Me),Oe=new Dp(C,Xe,T),P=new Hp(C,Xe,T),T.programs=re.programs,y.capabilities=it,y.extensions=Xe,y.properties=g,y.renderLists=we,y.shadowMap=_e,y.state=Me,y.info=T}te(),S!==Gt&&(x=new Yp(S,t.width,t.height,r,a));const W=new Ug(y,C);this.xr=W,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const v=Xe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Xe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(v){v!==void 0&&(Le=v,this.setSize(fe,ue,!1))},this.getSize=function(v){return v.set(fe,ue)},this.setSize=function(v,I,H=!0){if(W.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=v,ue=I,t.width=Math.floor(v*Le),t.height=Math.floor(I*Le),H===!0&&(t.style.width=v+"px",t.style.height=I+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(fe*Le,ue*Le).floor()},this.setDrawingBufferSize=function(v,I,H){fe=v,ue=I,Le=H,t.width=Math.floor(v*H),t.height=Math.floor(I*H),this.setViewport(0,0,v,I)},this.setEffects=function(v){if(S===Gt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let I=0;I<v.length;I++)if(v[I].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(z)},this.getViewport=function(v){return v.copy($)},this.setViewport=function(v,I,H,N){v.isVector4?$.set(v.x,v.y,v.z,v.w):$.set(v,I,H,N),Me.viewport(z.copy($).multiplyScalar(Le).round())},this.getScissor=function(v){return v.copy(j)},this.setScissor=function(v,I,H,N){v.isVector4?j.set(v.x,v.y,v.z,v.w):j.set(v,I,H,N),Me.scissor(O.copy(j).multiplyScalar(Le).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(v){Me.setScissorTest(J=v)},this.setOpaqueSort=function(v){et=v},this.setTransparentSort=function(v){Ye=v},this.getClearColor=function(v){return v.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,H=!0){let N=0;if(v){let F=!1;if(B!==null){const oe=B.texture.format;F=f.has(oe)}if(F){const oe=B.texture.type,de=h.has(oe),le=ve.getClearColor(),Se=ve.getClearAlpha(),Ee=le.r,Ie=le.g,Be=le.b;de?(M[0]=Ee,M[1]=Ie,M[2]=Be,M[3]=Se,C.clearBufferuiv(C.COLOR,0,M)):(b[0]=Ee,b[1]=Ie,b[2]=Be,b[3]=Se,C.clearBufferiv(C.COLOR,0,b))}else N|=C.COLOR_BUFFER_BIT}I&&(N|=C.DEPTH_BUFFER_BIT),H&&(N|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N!==0&&C.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",rt,!1),ve.dispose(),we.dispose(),ee.dispose(),g.dispose(),Y.dispose(),ge.dispose(),ie.dispose(),pe.dispose(),re.dispose(),W.dispose(),W.removeEventListener("sessionstart",yo),W.removeEventListener("sessionend",Eo),kn.stop()};function xe(v){v.preventDefault(),Bo("WebGLRenderer: Context Lost."),q=!0}function Pe(){Bo("WebGLRenderer: Context Restored."),q=!1;const v=T.autoReset,I=_e.enabled,H=_e.autoUpdate,N=_e.needsUpdate,F=_e.type;te(),T.autoReset=v,_e.enabled=I,_e.autoUpdate=H,_e.needsUpdate=N,_e.type=F}function rt(v){He("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function je(v){const I=v.target;I.removeEventListener("dispose",je),dn(I)}function dn(v){fn(v),g.remove(v)}function fn(v){const I=g.get(v).programs;I!==void 0&&(I.forEach(function(H){re.releaseProgram(H)}),v.isShaderMaterial&&re.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,H,N,F,oe){I===null&&(I=tt);const de=F.isMesh&&F.matrixWorld.determinant()<0,le=iu(v,I,H,N,F);Me.setMaterial(N,de);let Se=H.index,Ee=1;if(N.wireframe===!0){if(Se=X.getWireframeAttribute(H),Se===void 0)return;Ee=2}const Ie=H.drawRange,Be=H.attributes.position;let be=Ie.start*Ee,Ke=(Ie.start+Ie.count)*Ee;oe!==null&&(be=Math.max(be,oe.start*Ee),Ke=Math.min(Ke,(oe.start+oe.count)*Ee)),Se!==null?(be=Math.max(be,0),Ke=Math.min(Ke,Se.count)):Be!=null&&(be=Math.max(be,0),Ke=Math.min(Ke,Be.count));const ut=Ke-be;if(ut<0||ut===1/0)return;ie.setup(F,N,le,H,Se);let ot,Je=Oe;if(Se!==null&&(ot=Z.get(Se),Je=P,Je.setIndex(ot)),F.isMesh)N.wireframe===!0?(Me.setLineWidth(N.wireframeLinewidth*ct()),Je.setMode(C.LINES)):Je.setMode(C.TRIANGLES);else if(F.isLine){let Et=N.linewidth;Et===void 0&&(Et=1),Me.setLineWidth(Et*ct()),F.isLineSegments?Je.setMode(C.LINES):F.isLineLoop?Je.setMode(C.LINE_LOOP):Je.setMode(C.LINE_STRIP)}else F.isPoints?Je.setMode(C.POINTS):F.isSprite&&Je.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Wr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Je.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))Je.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Et=F._multiDrawStarts,Te=F._multiDrawCounts,Ft=F._multiDrawCount,We=Se?Z.get(Se).bytesPerElement:1,Xt=g.get(N).currentProgram.getUniforms();for(let en=0;en<Ft;en++)Xt.setValue(C,"_gl_DrawID",en),Je.render(Et[en]/We,Te[en])}else if(F.isInstancedMesh)Je.renderInstances(be,ut,F.count);else if(H.isInstancedBufferGeometry){const Et=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Te=Math.min(H.instanceCount,Et);Je.renderInstances(be,ut,Te)}else Je.render(be,ut)};function To(v,I,H){v.transparent===!0&&v.side===Zt&&v.forceSinglePass===!1?(v.side=It,v.needsUpdate=!0,rr(v,I,H),v.side=Vn,v.needsUpdate=!0,rr(v,I,H),v.side=Zt):rr(v,I,H)}this.compile=function(v,I,H=null){H===null&&(H=v),R=ee.get(H),R.init(I),D.push(R),H.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(R.pushLight(F),F.castShadow&&R.pushShadow(F))}),v!==H&&v.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(R.pushLight(F),F.castShadow&&R.pushShadow(F))}),R.setupLights();const N=new Set;return v.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const oe=F.material;if(oe)if(Array.isArray(oe))for(let de=0;de<oe.length;de++){const le=oe[de];To(le,H,F),N.add(le)}else To(oe,H,F),N.add(oe)}),R=D.pop(),N},this.compileAsync=function(v,I,H=null){const N=this.compile(v,I,H);return new Promise(F=>{function oe(){if(N.forEach(function(de){g.get(de).currentProgram.isReady()&&N.delete(de)}),N.size===0){F(v);return}setTimeout(oe,10)}Xe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let ga=null;function nu(v){ga&&ga(v)}function yo(){kn.stop()}function Eo(){kn.start()}const kn=new Tc;kn.setAnimationLoop(nu),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(v){ga=v,W.setAnimationLoop(v),v===null?kn.stop():kn.start()},W.addEventListener("sessionstart",yo),W.addEventListener("sessionend",Eo),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;const H=W.enabled===!0&&W.isPresenting===!0,N=x!==null&&(B===null||H)&&x.begin(y,B);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(W.cameraAutoUpdate===!0&&W.updateCamera(I),I=W.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,I,B),R=ee.get(v,D.length),R.init(I),D.push(R),vt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),me.setFromProjectionMatrix(vt,sn,I.reversedDepth),ye=this.localClippingEnabled,Ae=ne.init(this.clippingPlanes,ye),E=we.get(v,A.length),E.init(),A.push(E),W.enabled===!0&&W.isPresenting===!0){const de=y.xr.getDepthSensingMesh();de!==null&&_a(de,I,-1/0,y.sortObjects)}_a(v,I,0,y.sortObjects),E.finish(),y.sortObjects===!0&&E.sort(et,Ye),Ne=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Ne&&ve.addToRenderList(E,v),this.info.render.frame++,Ae===!0&&ne.beginShadows();const F=R.state.shadowsArray;if(_e.render(F,v,I),Ae===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),(N&&x.hasRenderPass())===!1){const de=E.opaque,le=E.transmissive;if(R.setupLights(),I.isArrayCamera){const Se=I.cameras;if(le.length>0)for(let Ee=0,Ie=Se.length;Ee<Ie;Ee++){const Be=Se[Ee];Ao(de,le,v,Be)}Ne&&ve.render(v);for(let Ee=0,Ie=Se.length;Ee<Ie;Ee++){const Be=Se[Ee];bo(E,v,Be,Be.viewport)}}else le.length>0&&Ao(de,le,v,I),Ne&&ve.render(v),bo(E,v,I)}B!==null&&G===0&&(L.updateMultisampleRenderTarget(B),L.updateRenderTargetMipmap(B)),N&&x.end(y),v.isScene===!0&&v.onAfterRender(y,v,I),ie.resetDefaultState(),k=-1,V=null,D.pop(),D.length>0?(R=D[D.length-1],Ae===!0&&ne.setGlobalState(y.clippingPlanes,R.state.camera)):R=null,A.pop(),A.length>0?E=A[A.length-1]:E=null};function _a(v,I,H,N){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)R.pushLight(v),v.castShadow&&R.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||me.intersectsSprite(v)){N&&$e.setFromMatrixPosition(v.matrixWorld).applyMatrix4(vt);const de=ge.update(v),le=v.material;le.visible&&E.push(v,de,le,H,$e.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||me.intersectsObject(v))){const de=ge.update(v),le=v.material;if(N&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),$e.copy(v.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),$e.copy(de.boundingSphere.center)),$e.applyMatrix4(v.matrixWorld).applyMatrix4(vt)),Array.isArray(le)){const Se=de.groups;for(let Ee=0,Ie=Se.length;Ee<Ie;Ee++){const Be=Se[Ee],be=le[Be.materialIndex];be&&be.visible&&E.push(v,de,be,H,$e.z,Be)}}else le.visible&&E.push(v,de,le,H,$e.z,null)}}const oe=v.children;for(let de=0,le=oe.length;de<le;de++)_a(oe[de],I,H,N)}function bo(v,I,H,N){const{opaque:F,transmissive:oe,transparent:de}=v;R.setupLightsView(H),Ae===!0&&ne.setGlobalState(y.clippingPlanes,H),N&&Me.viewport(z.copy(N)),F.length>0&&ir(F,I,H),oe.length>0&&ir(oe,I,H),de.length>0&&ir(de,I,H),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Ao(v,I,H,N){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[N.id]===void 0){const be=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[N.id]=new Jt(1,1,{generateMipmaps:!0,type:be?bn:Gt,minFilter:Sn,samples:it.samples,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace})}const oe=R.state.transmissionRenderTarget[N.id],de=N.viewport||z;oe.setSize(de.z*y.transmissionResolutionScale,de.w*y.transmissionResolutionScale);const le=y.getRenderTarget(),Se=y.getActiveCubeFace(),Ee=y.getActiveMipmapLevel();y.setRenderTarget(oe),y.getClearColor(K),ce=y.getClearAlpha(),ce<1&&y.setClearColor(16777215,.5),y.clear(),Ne&&ve.render(H);const Ie=y.toneMapping;y.toneMapping=on;const Be=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),R.setupLightsView(N),Ae===!0&&ne.setGlobalState(y.clippingPlanes,N),ir(v,H,N),L.updateMultisampleRenderTarget(oe),L.updateRenderTargetMipmap(oe),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Ke=0,ut=I.length;Ke<ut;Ke++){const ot=I[Ke],{object:Je,geometry:Et,material:Te,group:Ft}=ot;if(Te.side===Zt&&Je.layers.test(N.layers)){const We=Te.side;Te.side=It,Te.needsUpdate=!0,Co(Je,H,N,Et,Te,Ft),Te.side=We,Te.needsUpdate=!0,be=!0}}be===!0&&(L.updateMultisampleRenderTarget(oe),L.updateRenderTargetMipmap(oe))}y.setRenderTarget(le,Se,Ee),y.setClearColor(K,ce),Be!==void 0&&(N.viewport=Be),y.toneMapping=Ie}function ir(v,I,H){const N=I.isScene===!0?I.overrideMaterial:null;for(let F=0,oe=v.length;F<oe;F++){const de=v[F],{object:le,geometry:Se,group:Ee}=de;let Ie=de.material;Ie.allowOverride===!0&&N!==null&&(Ie=N),le.layers.test(H.layers)&&Co(le,I,H,Se,Ie,Ee)}}function Co(v,I,H,N,F,oe){v.onBeforeRender(y,I,H,N,F,oe),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),F.onBeforeRender(y,I,H,N,v,oe),F.transparent===!0&&F.side===Zt&&F.forceSinglePass===!1?(F.side=It,F.needsUpdate=!0,y.renderBufferDirect(H,I,N,F,v,oe),F.side=Vn,F.needsUpdate=!0,y.renderBufferDirect(H,I,N,F,v,oe),F.side=Zt):y.renderBufferDirect(H,I,N,F,v,oe),v.onAfterRender(y,I,H,N,F,oe)}function rr(v,I,H){I.isScene!==!0&&(I=tt);const N=g.get(v),F=R.state.lights,oe=R.state.shadowsArray,de=F.state.version,le=re.getParameters(v,F.state,oe,I,H),Se=re.getProgramCacheKey(le);let Ee=N.programs;N.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,N.fog=I.fog;const Ie=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;N.envMap=Y.get(v.envMap||N.environment,Ie),N.envMapRotation=N.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Ee===void 0&&(v.addEventListener("dispose",je),Ee=new Map,N.programs=Ee);let Be=Ee.get(Se);if(Be!==void 0){if(N.currentProgram===Be&&N.lightsStateVersion===de)return Ro(v,le),Be}else le.uniforms=re.getUniforms(v),v.onBeforeCompile(le,y),Be=re.acquireProgram(le,Se),Ee.set(Se,Be),N.uniforms=le.uniforms;const be=N.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(be.clippingPlanes=ne.uniform),Ro(v,le),N.needsLights=au(v),N.lightsStateVersion=de,N.needsLights&&(be.ambientLightColor.value=F.state.ambient,be.lightProbe.value=F.state.probe,be.directionalLights.value=F.state.directional,be.directionalLightShadows.value=F.state.directionalShadow,be.spotLights.value=F.state.spot,be.spotLightShadows.value=F.state.spotShadow,be.rectAreaLights.value=F.state.rectArea,be.ltc_1.value=F.state.rectAreaLTC1,be.ltc_2.value=F.state.rectAreaLTC2,be.pointLights.value=F.state.point,be.pointLightShadows.value=F.state.pointShadow,be.hemisphereLights.value=F.state.hemi,be.directionalShadowMatrix.value=F.state.directionalShadowMatrix,be.spotLightMatrix.value=F.state.spotLightMatrix,be.spotLightMap.value=F.state.spotLightMap,be.pointShadowMatrix.value=F.state.pointShadowMatrix),N.currentProgram=Be,N.uniformsList=null,Be}function wo(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=Gr.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function Ro(v,I){const H=g.get(v);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function iu(v,I,H,N,F){I.isScene!==!0&&(I=tt),L.resetTextureUnits();const oe=I.fog,de=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?I.environment:null,le=B===null?y.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Li,Se=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap,Ee=Y.get(N.envMap||de,Se),Ie=N.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Be=!!H.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),be=!!H.morphAttributes.position,Ke=!!H.morphAttributes.normal,ut=!!H.morphAttributes.color;let ot=on;N.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ot=y.toneMapping);const Je=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Et=Je!==void 0?Je.length:0,Te=g.get(N),Ft=R.state.lights;if(Ae===!0&&(ye===!0||v!==V)){const St=v===V&&N.id===k;ne.setState(N,v,St)}let We=!1;N.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Ft.state.version||Te.outputColorSpace!==le||F.isBatchedMesh&&Te.batching===!1||!F.isBatchedMesh&&Te.batching===!0||F.isBatchedMesh&&Te.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Te.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Te.instancing===!1||!F.isInstancedMesh&&Te.instancing===!0||F.isSkinnedMesh&&Te.skinning===!1||!F.isSkinnedMesh&&Te.skinning===!0||F.isInstancedMesh&&Te.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Te.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Te.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Te.instancingMorph===!1&&F.morphTexture!==null||Te.envMap!==Ee||N.fog===!0&&Te.fog!==oe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ne.numPlanes||Te.numIntersection!==ne.numIntersection)||Te.vertexAlphas!==Ie||Te.vertexTangents!==Be||Te.morphTargets!==be||Te.morphNormals!==Ke||Te.morphColors!==ut||Te.toneMapping!==ot||Te.morphTargetsCount!==Et)&&(We=!0):(We=!0,Te.__version=N.version);let Xt=Te.currentProgram;We===!0&&(Xt=rr(N,I,F));let en=!1,Wn=!1,oi=!1;const nt=Xt.getUniforms(),Tt=Te.uniforms;if(Me.useProgram(Xt.program)&&(en=!0,Wn=!0,oi=!0),N.id!==k&&(k=N.id,Wn=!0),en||V!==v){Me.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),nt.setValue(C,"projectionMatrix",v.projectionMatrix),nt.setValue(C,"viewMatrix",v.matrixWorldInverse);const Pn=nt.map.cameraPosition;Pn!==void 0&&Pn.setValue(C,Ve.setFromMatrixPosition(v.matrixWorld)),it.logarithmicDepthBuffer&&nt.setValue(C,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&nt.setValue(C,"isOrthographic",v.isOrthographicCamera===!0),V!==v&&(V=v,Wn=!0,oi=!0)}if(Te.needsLights&&(Ft.state.directionalShadowMap.length>0&&nt.setValue(C,"directionalShadowMap",Ft.state.directionalShadowMap,L),Ft.state.spotShadowMap.length>0&&nt.setValue(C,"spotShadowMap",Ft.state.spotShadowMap,L),Ft.state.pointShadowMap.length>0&&nt.setValue(C,"pointShadowMap",Ft.state.pointShadowMap,L)),F.isSkinnedMesh){nt.setOptional(C,F,"bindMatrix"),nt.setOptional(C,F,"bindMatrixInverse");const St=F.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),nt.setValue(C,"boneTexture",St.boneTexture,L))}F.isBatchedMesh&&(nt.setOptional(C,F,"batchingTexture"),nt.setValue(C,"batchingTexture",F._matricesTexture,L),nt.setOptional(C,F,"batchingIdTexture"),nt.setValue(C,"batchingIdTexture",F._indirectTexture,L),nt.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&nt.setValue(C,"batchingColorTexture",F._colorsTexture,L));const Rn=H.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&he.update(F,H,Xt),(Wn||Te.receiveShadow!==F.receiveShadow)&&(Te.receiveShadow=F.receiveShadow,nt.setValue(C,"receiveShadow",F.receiveShadow)),(N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial)&&N.envMap===null&&I.environment!==null&&(Tt.envMapIntensity.value=I.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=zg()),Wn&&(nt.setValue(C,"toneMappingExposure",y.toneMappingExposure),Te.needsLights&&ru(Tt,oi),oe&&N.fog===!0&&Ce.refreshFogUniforms(Tt,oe),Ce.refreshMaterialUniforms(Tt,N,Le,ue,R.state.transmissionRenderTarget[v.id]),Gr.upload(C,wo(Te),Tt,L)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Gr.upload(C,wo(Te),Tt,L),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&nt.setValue(C,"center",F.center),nt.setValue(C,"modelViewMatrix",F.modelViewMatrix),nt.setValue(C,"normalMatrix",F.normalMatrix),nt.setValue(C,"modelMatrix",F.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const St=N.uniformsGroups;for(let Pn=0,li=St.length;Pn<li;Pn++){const Po=St[Pn];pe.update(Po,Xt),pe.bind(Po,Xt)}}return Xt}function ru(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function au(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(v,I,H){const N=g.get(v);N.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,N.__autoAllocateDepthBuffer===!1&&(N.__useRenderToTexture=!1),g.get(v.texture).__webglTexture=I,g.get(v.depthTexture).__webglTexture=N.__autoAllocateDepthBuffer?void 0:H,N.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){const H=g.get(v);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0};const su=C.createFramebuffer();this.setRenderTarget=function(v,I=0,H=0){B=v,w=I,G=H;let N=null,F=!1,oe=!1;if(v){const le=g.get(v);if(le.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(C.FRAMEBUFFER,le.__webglFramebuffer),z.copy(v.viewport),O.copy(v.scissor),Q=v.scissorTest,Me.viewport(z),Me.scissor(O),Me.setScissorTest(Q),k=-1;return}else if(le.__webglFramebuffer===void 0)L.setupRenderTarget(v);else if(le.__hasExternalTextures)L.rebindTextures(v,g.get(v.texture).__webglTexture,g.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ie=v.depthTexture;if(le.__boundDepthTexture!==Ie){if(Ie!==null&&g.has(Ie)&&(v.width!==Ie.image.width||v.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(v)}}const Se=v.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(oe=!0);const Ee=g.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ee[I])?N=Ee[I][H]:N=Ee[I],F=!0):v.samples>0&&L.useMultisampledRTT(v)===!1?N=g.get(v).__webglMultisampledFramebuffer:Array.isArray(Ee)?N=Ee[H]:N=Ee,z.copy(v.viewport),O.copy(v.scissor),Q=v.scissorTest}else z.copy($).multiplyScalar(Le).floor(),O.copy(j).multiplyScalar(Le).floor(),Q=J;if(H!==0&&(N=su),Me.bindFramebuffer(C.FRAMEBUFFER,N)&&Me.drawBuffers(v,N),Me.viewport(z),Me.scissor(O),Me.setScissorTest(Q),F){const le=g.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,le.__webglTexture,H)}else if(oe){const le=I;for(let Se=0;Se<v.textures.length;Se++){const Ee=g.get(v.textures[Se]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Se,Ee.__webglTexture,H,le)}}else if(v!==null&&H!==0){const le=g.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,le.__webglTexture,H)}k=-1},this.readRenderTargetPixels=function(v,I,H,N,F,oe,de,le=0){if(!(v&&v.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=g.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&de!==void 0&&(Se=Se[de]),Se){Me.bindFramebuffer(C.FRAMEBUFFER,Se);try{const Ee=v.textures[le],Ie=Ee.format,Be=Ee.type;if(v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+le),!it.textureFormatReadable(Ie)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Be)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-N&&H>=0&&H<=v.height-F&&C.readPixels(I,H,N,F,ae.convert(Ie),ae.convert(Be),oe)}finally{const Ee=B!==null?g.get(B).__webglFramebuffer:null;Me.bindFramebuffer(C.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(v,I,H,N,F,oe,de,le=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=g.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&de!==void 0&&(Se=Se[de]),Se)if(I>=0&&I<=v.width-N&&H>=0&&H<=v.height-F){Me.bindFramebuffer(C.FRAMEBUFFER,Se);const Ee=v.textures[le],Ie=Ee.format,Be=Ee.type;if(v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+le),!it.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,be),C.bufferData(C.PIXEL_PACK_BUFFER,oe.byteLength,C.STREAM_READ),C.readPixels(I,H,N,F,ae.convert(Ie),ae.convert(Be),0);const Ke=B!==null?g.get(B).__webglFramebuffer:null;Me.bindFramebuffer(C.FRAMEBUFFER,Ke);const ut=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await rh(C,ut,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,be),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,oe),C.deleteBuffer(be),C.deleteSync(ut),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,H=0){const N=Math.pow(2,-H),F=Math.floor(v.image.width*N),oe=Math.floor(v.image.height*N),de=I!==null?I.x:0,le=I!==null?I.y:0;L.setTexture2D(v,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,de,le,F,oe),Me.unbindTexture()};const ou=C.createFramebuffer(),lu=C.createFramebuffer();this.copyTextureToTexture=function(v,I,H=null,N=null,F=0,oe=0){let de,le,Se,Ee,Ie,Be,be,Ke,ut;const ot=v.isCompressedTexture?v.mipmaps[oe]:v.image;if(H!==null)de=H.max.x-H.min.x,le=H.max.y-H.min.y,Se=H.isBox3?H.max.z-H.min.z:1,Ee=H.min.x,Ie=H.min.y,Be=H.isBox3?H.min.z:0;else{const Tt=Math.pow(2,-F);de=Math.floor(ot.width*Tt),le=Math.floor(ot.height*Tt),v.isDataArrayTexture?Se=ot.depth:v.isData3DTexture?Se=Math.floor(ot.depth*Tt):Se=1,Ee=0,Ie=0,Be=0}N!==null?(be=N.x,Ke=N.y,ut=N.z):(be=0,Ke=0,ut=0);const Je=ae.convert(I.format),Et=ae.convert(I.type);let Te;I.isData3DTexture?(L.setTexture3D(I,0),Te=C.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(L.setTexture2DArray(I,0),Te=C.TEXTURE_2D_ARRAY):(L.setTexture2D(I,0),Te=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const Ft=C.getParameter(C.UNPACK_ROW_LENGTH),We=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Xt=C.getParameter(C.UNPACK_SKIP_PIXELS),en=C.getParameter(C.UNPACK_SKIP_ROWS),Wn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ot.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ot.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ee),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ie),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Be);const oi=v.isDataArrayTexture||v.isData3DTexture,nt=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){const Tt=g.get(v),Rn=g.get(I),St=g.get(Tt.__renderTarget),Pn=g.get(Rn.__renderTarget);Me.bindFramebuffer(C.READ_FRAMEBUFFER,St.__webglFramebuffer),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,Pn.__webglFramebuffer);for(let li=0;li<Se;li++)oi&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,g.get(v).__webglTexture,F,Be+li),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,g.get(I).__webglTexture,oe,ut+li)),C.blitFramebuffer(Ee,Ie,de,le,be,Ke,de,le,C.DEPTH_BUFFER_BIT,C.NEAREST);Me.bindFramebuffer(C.READ_FRAMEBUFFER,null),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(F!==0||v.isRenderTargetTexture||g.has(v)){const Tt=g.get(v),Rn=g.get(I);Me.bindFramebuffer(C.READ_FRAMEBUFFER,ou),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,lu);for(let St=0;St<Se;St++)oi?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Tt.__webglTexture,F,Be+St):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Tt.__webglTexture,F),nt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Rn.__webglTexture,oe,ut+St):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Rn.__webglTexture,oe),F!==0?C.blitFramebuffer(Ee,Ie,de,le,be,Ke,de,le,C.COLOR_BUFFER_BIT,C.NEAREST):nt?C.copyTexSubImage3D(Te,oe,be,Ke,ut+St,Ee,Ie,de,le):C.copyTexSubImage2D(Te,oe,be,Ke,Ee,Ie,de,le);Me.bindFramebuffer(C.READ_FRAMEBUFFER,null),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else nt?v.isDataTexture||v.isData3DTexture?C.texSubImage3D(Te,oe,be,Ke,ut,de,le,Se,Je,Et,ot.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(Te,oe,be,Ke,ut,de,le,Se,Je,ot.data):C.texSubImage3D(Te,oe,be,Ke,ut,de,le,Se,Je,Et,ot):v.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,oe,be,Ke,de,le,Je,Et,ot.data):v.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,oe,be,Ke,ot.width,ot.height,Je,ot.data):C.texSubImage2D(C.TEXTURE_2D,oe,be,Ke,de,le,Je,Et,ot);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ft),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,We),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Xt),C.pixelStorei(C.UNPACK_SKIP_ROWS,en),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Wn),oe===0&&I.generateMipmaps&&C.generateMipmap(Te),Me.unbindTexture()},this.initRenderTarget=function(v){g.get(v).__webglFramebuffer===void 0&&L.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?L.setTextureCube(v,0):v.isData3DTexture?L.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?L.setTexture2DArray(v,0):L.setTexture2D(v,0),Me.unbindTexture()},this.resetState=function(){w=0,G=0,B=null,Me.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=ke._getUnpackColorSpace()}}const Pl={type:"change"},ho={type:"start"},wc={type:"end"},wr=new uo,Dl=new vn,Vg=Math.cos(70*oh.DEG2RAD),mt=new U,Dt=2*Math.PI,Qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Za=1e-6;class Hg extends Xh{constructor(e,t=null){super(e,t),this.state=Qe.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mn.ROTATE,MIDDLE:Mn.DOLLY,RIGHT:Mn.PAN},this.touches={ONE:Bn.ROTATE,TWO:Bn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Cn,this._lastTargetPosition=new U,this._quat=new Cn().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new al,this._sphericalDelta=new al,this._scale=1,this._panOffset=new U,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new U,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Wg.bind(this),this._onPointerDown=kg.bind(this),this._onPointerUp=Xg.bind(this),this._onContextMenu=Jg.bind(this),this._onMouseWheel=$g.bind(this),this._onKeyDown=jg.bind(this),this._onTouchStart=Zg.bind(this),this._onTouchMove=Kg.bind(this),this._onMouseDown=qg.bind(this),this._onMouseMove=Yg.bind(this),this._interceptControlDown=Qg.bind(this),this._interceptControlUp=e_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pl),this.update(),this.state=Qe.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;mt.copy(t).sub(this.target),mt.applyQuaternion(this._quat),this._spherical.setFromVector3(mt),this.autoRotate&&this.state===Qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Dt:n>Math.PI&&(n-=Dt),r<-Math.PI?r+=Dt:r>Math.PI&&(r-=Dt),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=s!=this._spherical.radius}if(mt.setFromSpherical(this._spherical),mt.applyQuaternion(this._quatInverse),t.copy(this.target).add(mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=mt.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(wr.origin.copy(this.object.position),wr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wr.direction))<Vg?this.object.lookAt(this.target):(Dl.setFromNormalAndCoplanarPoint(this.object.up,this.target),wr.intersectPlane(Dl,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Za||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Za||this._lastTargetPosition.distanceToSquared(this.target)>Za?(this.dispatchEvent(Pl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Dt/60*this.autoRotateSpeed*e:Dt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){mt.setFromMatrixColumn(t,0),mt.multiplyScalar(-e),this._panOffset.add(mt)}_panUp(e,t){this.screenSpacePanning===!0?mt.setFromMatrixColumn(t,1):(mt.setFromMatrixColumn(t,0),mt.crossVectors(this.object.up,mt)),mt.multiplyScalar(e),this._panOffset.add(mt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;mt.copy(r).sub(this.target);let a=mt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,a=t-n.top,s=n.width,o=n.height;this._mouse.x=r/s*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Dt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Dt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Dt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Dt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Dt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Dt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Dt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Dt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new De,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function kg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Wg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Xg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wc),this.state=Qe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function qg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Mn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Qe.DOLLY;break;case Mn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qe.ROTATE}break;case Mn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qe.PAN}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(ho)}function Yg(i){switch(this.state){case Qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function $g(i){this.enabled===!1||this.enableZoom===!1||this.state!==Qe.NONE||(i.preventDefault(),this.dispatchEvent(ho),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(wc))}function jg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Zg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Bn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Qe.TOUCH_ROTATE;break;case Bn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Qe.TOUCH_PAN;break;default:this.state=Qe.NONE}break;case 2:switch(this.touches.TWO){case Bn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Qe.TOUCH_DOLLY_PAN;break;case Bn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Qe.TOUCH_DOLLY_ROTATE;break;default:this.state=Qe.NONE}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(ho)}function Kg(i){switch(this._trackPointer(i),this.state){case Qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Qe.NONE}}function Jg(i){this.enabled!==!1&&i.preventDefault()}function Qg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function e_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ka=new vn,Rr=new Wh,Ei=new De,Ja=new U;class t_ extends Hg{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Mn.PAN,MIDDLE:Mn.DOLLY,RIGHT:Mn.ROTATE},this.touches={ONE:Bn.PAN,TWO:Bn.DOLLY_ROTATE},this._panWorldStart=new U}_handleMouseDownPan(e){if(super._handleMouseDownPan(e),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;Ka.setFromNormalAndCoplanarPoint(this.object.up,this.target);const n=this.domElement.getBoundingClientRect();Ei.x=(e.clientX-n.left)/n.width*2-1,Ei.y=-((e.clientY-n.top)/n.height)*2+1,Rr.setFromCamera(Ei,this.object),Rr.ray.intersectPlane(Ka,this._panWorldStart)}_handleMouseMovePan(e){if(this.screenSpacePanning===!0){super._handleMouseMovePan(e);return}const n=this.domElement.getBoundingClientRect();Ei.x=(e.clientX-n.left)/n.width*2-1,Ei.y=-((e.clientY-n.top)/n.height)*2+1,Rr.setFromCamera(Ei,this.object),Rr.ray.intersectPlane(Ka,Ja)&&(Ja.sub(this._panWorldStart),this._panOffset.copy(Ja).negate(),this.update())}}function n_(i,e){const t=Math.max(1,Math.trunc(e));if(i.length===0)return{atlases:[{width:1,height:1,rgba:new Uint8Array([0,0,0,0])}],tiles:[]};const n=t-Vt*2;if(n<=0)throw new Error("Raster atlas padding exceeds available texture size.");const r=i_(i,n);if(r.length===0)return{atlases:[{width:1,height:1,rgba:new Uint8Array([0,0,0,0])}],tiles:[]};let a=r.slice().sort((l,c)=>l.height!==c.height?c.height-l.height:l.width!==c.width?c.width-l.width:l.id-c.id);const s=[],o=[];for(;a.length>0;){const l=r_(a,t);if(!l||l.placements.length===0)throw new Error("Failed to pack raster tiles into GPU atlas textures.");const c=s.length,d=new Uint8Array(l.width*l.height*4);for(const u of l.placements){const m=i[u.layerIndex];m&&(s_(d,l.width,l.height,m,u),o.push({layerIndex:u.layerIndex,atlasIndex:c,sourceX:u.sourceX,sourceY:u.sourceY,width:u.width,height:u.height,uvRect:[u.x/l.width,u.y/l.height,u.width/l.width,u.height/l.height]}))}s.push({width:l.width,height:l.height,rgba:d});const p=new Set;for(const u of l.placements)p.add(u.id);a=a.filter(u=>!p.has(u.id))}return{atlases:s,tiles:o}}function i_(i,e){const t=[];let n=0;for(let r=0;r<i.length;r+=1){const a=i[r],s=Math.max(0,Math.trunc(a.width)),o=Math.max(0,Math.trunc(a.height));if(!(s<=0||o<=0)&&!(!(a.data instanceof Uint8Array)||a.data.length<s*o*4))for(let l=0;l<o;l+=e){const c=Math.min(e,o-l);for(let d=0;d<s;d+=e){const p=Math.min(e,s-d);t.push({id:n,layerIndex:r,sourceX:d,sourceY:l,width:p,height:c}),n+=1}}}return t}function r_(i,e){const t=i.reduce((a,s)=>a+(s.width+Vt*2)*(s.height+Vt*2),0),n=i.reduce((a,s)=>Math.max(a,s.width+Vt*2),1);let r=Xr(Ll(Math.ceil(Math.sqrt(t))),n,e);for(;r<=e;){const a=a_(i,r,e);if(a.placements.length>0){const s=Xr(Ll(Math.max(1,a.usedHeight)),1,e);return{width:r,height:s,placements:a.placements}}if(r===e)break;r=Math.min(e,r*2)}return null}function a_(i,e,t){const n=[];let r=0,a=0,s=0,o=0;for(const l of i){const c=l.width+Vt*2,d=l.height+Vt*2;c>e||d>t||(r+c>e&&(r=0,a+=s,s=0),!(a+d>t)&&(n.push({...l,x:r+Vt,y:a+Vt}),r+=c,s=Math.max(s,d),o=Math.max(o,a+s)))}return{placements:n,usedHeight:o}}function s_(i,e,t,n,r){const a=r.sourceX,s=r.sourceY,o=r.sourceX+r.width-1,l=r.sourceY+r.height-1,c=r.x-Vt,d=r.y-Vt,p=r.x+r.width+Vt-1,u=r.y+r.height+Vt-1;for(let m=d;m<=u;m+=1){if(m<0||m>=t)continue;const _=Xr(m-r.y+r.sourceY,s,l);for(let S=c;S<=p;S+=1){if(S<0||S>=e)continue;const f=Xr(S-r.x+r.sourceX,a,o),h=(_*n.width+f)*4,M=(m*e+S)*4;i[M]=n.data[h],i[M+1]=n.data[h+1],i[M+2]=n.data[h+2],i[M+3]=n.data[h+3]}}}function Ll(i){if(i<=1)return 1;let e=1;for(;e<i;)e<<=1;return e}function Xr(i,e,t){return i<e?e:i>t?t:i}const Pr=4096;function o_(i,e){const t=x_();e?.report(0,{stage:"upload",sourceType:void 0});const n=n_(i.rasterLayers,t);e?.report(.15,{stage:"upload"});const r=n.atlases.map(j=>u_(j.rgba,j.width,j.height)),a=l_(i,n.tiles);e?.report(.3,{stage:"upload"});const s=new Float32Array(i.pageCount*4),o=new Float32Array(i.pageCount*4),l=new Float32Array(i.pageCount*4);for(let j=0;j<i.pages.length;j+=1){const J=i.pages[j],me=j*4;s[me]=J.segmentStart,s[me+1]=J.segmentCount,s[me+2]=J.fillPathStart,s[me+3]=J.fillPathCount,o[me]=J.textInstanceStart,o[me+1]=J.textInstanceCount,o[me+2]=a.pageRasterStarts[j],o[me+3]=a.pageRasterCounts[j],l[me]=J.pageRect[0],l[me+1]=J.pageRect[1],l[me+2]=J.pageRect[2],l[me+3]=J.pageRect[3]}const c=at(s,t),d=at(o,t),p=at(l,t);e?.report(.4,{stage:"upload"});const u=at(i.endpoints,t),m=at(i.primitiveMeta,t),_=at(i.styles,t),S=at(i.primitiveBounds,t);e?.report(.5,{stage:"upload"});const f=at(i.fillPathMetaA,t),h=at(i.fillPathMetaB,t),M=at(i.fillPathMetaC,t),b=at(i.fillSegmentsA,t),E=at(i.fillSegmentsB,t);e?.report(.62,{stage:"upload"});const R=at(i.textInstanceA,t),A=at(i.textInstanceB,t),D=at(i.textInstanceC,t),x=at(i.textGlyphMetaA,t),y=at(i.textGlyphMetaB,t),q=at(i.textGlyphSegmentsA,t),w=at(i.textGlyphSegmentsB,t);e?.report(.74,{stage:"upload"});const G=new Float32Array(a.primitives.length*4),B=new Float32Array(a.primitives.length*4),k=new Float32Array(a.primitives.length*4);for(let j=0;j<a.primitives.length;j+=1){const J=a.primitives[j],me=J.matrix,Ae=J.uvRect,ye=j*4;G[ye]=me[0]??1,G[ye+1]=me[1]??0,G[ye+2]=me[2]??0,G[ye+3]=me[3]??1,B[ye]=me[4]??0,B[ye+1]=me[5]??0,B[ye+2]=Ae[0],B[ye+3]=Ae[1],k[ye]=Ae[2],k[ye+1]=Ae[3],k[ye+2]=J.atlasIndex,k[ye+3]=0}const V=at(G,t),z=at(B,t),O=at(k,t);e?.report(.84,{stage:"upload"});const Q=__(i,t),K=h_(Q.rgba,Q.width,Q.height),ce=at(Q.glyphUvRects,t);e?.report(.92,{stage:"upload"});const fe=Math.max(1,1+a.maxRasterPrimitiveCountPerPage),ue=Math.max(1,i.maxFillPathCountPerPage),Le=Math.max(1,i.maxSegmentCountPerPage),et=Math.max(1,i.maxTextInstanceCountPerPage),Ye=p_(fe,ue,Le,et,r.length);e?.complete({stage:"upload"});const $=[c.texture,d.texture,p.texture,u.texture,m.texture,_.texture,S.texture,f.texture,h.texture,M.texture,b.texture,E.texture,R.texture,A.texture,D.texture,x.texture,y.texture,q.texture,w.texture,ce.texture,V.texture,z.texture,O.texture,...r,K];return{document:i,maxTextureSize:t,geometry:Ye,maxRasterPrimitiveCount:fe,maxFillPrimitiveCount:ue,maxSegmentPrimitiveCount:Le,maxTextPrimitiveCount:et,pageMetaTextureA:c,pageMetaTextureB:d,pageRectTexture:p,segmentTextureA:u,segmentTextureB:m,segmentTextureC:_,segmentTextureD:S,fillPathTextureA:f,fillPathTextureB:h,fillPathTextureC:M,fillSegmentTextureA:b,fillSegmentTextureB:E,textInstanceTextureA:R,textInstanceTextureB:A,textInstanceTextureC:D,textGlyphMetaTextureA:x,textGlyphMetaTextureB:y,textGlyphSegmentTextureA:q,textGlyphSegmentTextureB:w,textGlyphRasterMetaTexture:ce,rasterLayerMetaTextureA:V,rasterLayerMetaTextureB:z,rasterLayerMetaTextureC:O,rasterAtlasTextures:r,rasterAtlasSizes:n.atlases.map(j=>({width:j.width,height:j.height})),textAtlasTexture:K,textAtlasSize:{width:Q.width,height:Q.height},createInstancedGeometry:j=>g_(Ye,j),dispose:()=>{Ye.dispose();for(const j of $)j.dispose()}}}function l_(i,e){const t=new Uint32Array(i.pageCount),n=new Uint32Array(i.pageCount),r=[],a=new Map;for(const o of e){const l=a.get(o.layerIndex);if(l){l.push(o);continue}a.set(o.layerIndex,[o])}for(const o of a.values())o.sort((l,c)=>l.sourceY!==c.sourceY?l.sourceY-c.sourceY:l.sourceX-c.sourceX);let s=0;for(let o=0;o<i.pages.length;o+=1){const l=i.pages[o],c=r.length,d=l.rasterLayerStart+l.rasterLayerCount;for(let u=l.rasterLayerStart;u<d;u+=1){const m=i.rasterLayers[u];if(!m)continue;const _=Math.max(1,Math.trunc(m.width)),S=Math.max(1,Math.trunc(m.height));if(_<=0||S<=0)continue;const f=a.get(u);if(!(!f||f.length===0))for(const h of f)r.push(c_(m.matrix,_,S,h))}const p=r.length-c;t[o]=c,n[o]=p,s=Math.max(s,p)}return{primitives:r,pageRasterStarts:t,pageRasterCounts:n,maxRasterPrimitiveCountPerPage:s}}function c_(i,e,t,n){const r=[Number(i[0]??1),Number(i[1]??0),Number(i[2]??0),Number(i[3]??1),Number(i[4]??0),Number(i[5]??0)],a=n.width/e,s=n.height/t,o=n.sourceX/e,l=n.sourceY/t,c=r[0]*a,d=r[1]*a,p=r[2]*s,u=r[3]*s,m=r[0]*o+r[2]*l+r[4],_=r[1]*o+r[3]*l+r[5];return{atlasIndex:n.atlasIndex,matrix:[c,d,p,u,m,_],uvRect:n.uvRect}}function at(i,e){const t=Math.floor(i.length/4),{width:n,height:r}=f_(t,e),a=new Float32Array(n*r*4);a.set(i.subarray(0,t*4));const s=new tr(a,n,r,Lt,Ht);return s.needsUpdate=!0,s.generateMipmaps=!1,s.minFilter=gt,s.magFilter=gt,s.wrapS=yt,s.wrapT=yt,{texture:s,width:n,height:r}}function u_(i,e,t){const n=d_(i),r=new tr(n,e,t,Lt);return r.needsUpdate=!0,r.generateMipmaps=!0,r.minFilter=Sn,r.magFilter=pt,r.wrapS=yt,r.wrapT=yt,r.anisotropy=cu,r}function h_(i,e,t){const n=new tr(i,e,t,Lt);return n.needsUpdate=!0,n.generateMipmaps=!0,n.minFilter=Sn,n.magFilter=pt,n.wrapS=yt,n.wrapT=yt,n}function d_(i){const e=new Uint8Array(i.length);for(let t=0;t+3<i.length;t+=4){const n=i[t+3];if(n<=0){e[t]=0,e[t+1]=0,e[t+2]=0,e[t+3]=0;continue}if(n>=255){e[t]=i[t],e[t+1]=i[t+1],e[t+2]=i[t+2],e[t+3]=255;continue}const r=n/255;e[t]=Math.round(i[t]*r),e[t+1]=Math.round(i[t+1]*r),e[t+2]=Math.round(i[t+2]*r),e[t+3]=n}return e}function f_(i,e){const t=Math.max(1,i),n=Math.ceil(Math.sqrt(t)),r=v_(n,1,e),a=Math.max(1,Math.ceil(t/r));if(a>e)throw new Error("Data texture exceeds GPU limits for this browser/GPU.");return{width:r,height:a}}function p_(i,e,t,n,r){const a=Math.max(1,Math.trunc(r)),s=i+e+t+n,o=s*4,l=s*6,c=new Float32Array(o*3),d=new Float32Array(o),p=new Uint32Array(l);let u=0,m=0,_=0;const S=new Vh,f=Dr(c,d,p,u,m,i);u=f.vertexOffset,m=f.indexOffset;for(let b=0;b<a;b+=1)S.addGroup(_,i*6,b);_+=i*6;const h=Dr(c,d,p,u,m,e);u=h.vertexOffset,m=h.indexOffset,S.addGroup(_,e*6,a),_+=e*6;const M=Dr(c,d,p,u,m,t);return u=M.vertexOffset,m=M.indexOffset,S.addGroup(_,t*6,a+1),_+=t*6,Dr(c,d,p,u,m,n),S.addGroup(_,n*6,a+2),S.setAttribute("position",new Ut(c,3)),S.setAttribute("aPrimitiveIndex",new Ut(d,1)),S.setIndex(new Ut(p,1)),S.instanceCount=1,S.boundingSphere=new ai(new U(0,0,0),1e9),S}function Dr(i,e,t,n,r,a){for(let s=0;s<a;s+=1){const o=m_(i,e,t,n,r,s);n=o.vertexOffset,r=o.indexOffset}return{vertexOffset:n,indexOffset:r}}function m_(i,e,t,n,r,a){const s=[[-1,-1],[1,-1],[-1,1],[1,1]];for(let o=0;o<4;o+=1){const l=n+o,c=l*3;i[c]=s[o][0],i[c+1]=s[o][1],i[c+2]=0,e[l]=a}return t[r]=n,t[r+1]=n+1,t[r+2]=n+2,t[r+3]=n+2,t[r+4]=n+1,t[r+5]=n+3,{vertexOffset:n+4,indexOffset:r+6}}function g_(i,e){const t=i.clone(),n=new Float32Array(e.length);for(let r=0;r<e.length;r+=1)n[r]=e[r];return t.setAttribute("aPageIndex",new qs(n,1)),t.instanceCount=e.length,t.boundingSphere=new ai(new U(0,0,0),1e9),t}function __(i,e){if(typeof i>"u"||i.textGlyphCount<=0)return{width:1,height:1,rgba:new Uint8Array([0,0,0,0]),glyphUvRects:new Float32Array(i.textGlyphCount*4)};const t={textGlyphCount:i.textGlyphCount,textGlyphMetaA:i.textGlyphMetaA,textGlyphMetaB:i.textGlyphMetaB,textGlyphSegmentsA:i.textGlyphSegmentsA,textGlyphSegmentsB:i.textGlyphSegmentsB},n=uu(t,e);return n?{width:n.width,height:n.height,rgba:n.rgba,glyphUvRects:n.glyphUvRects}:{width:1,height:1,rgba:new Uint8Array([0,0,0,0]),glyphUvRects:new Float32Array(i.textGlyphCount*4)}}function x_(){if(typeof document>"u")return Pr;try{const i=document.createElement("canvas"),e=i.getContext("webgl2")||i.getContext("webgl");if(!e)return Pr;const t=e.getParameter(e.MAX_TEXTURE_SIZE),n=Number(t);return!Number.isFinite(n)||n<1?Pr:Math.max(1024,Math.min(Math.floor(n),16384))}catch{return Pr}}function v_(i,e,t){return i<e?e:i>t?t:i}function S_(i={}){return{maxPages:i.maxPages,extraction:M_(i),panOptimization:i.panOptimization??!0,pageMode:i.pageMode??"pages",worker:i.worker??"auto",page:{side:i.page?.side??Zt,depthWrite:i.page?.depthWrite??!1},material:{strokeCurveEnabled:i.material?.strokeCurveEnabled??!0,textVectorOnly:i.vectorOnly??i.material?.textVectorOnly??!1,pageBackgroundColor:i.material?.pageBackgroundColor??16777215,pageBackgroundOpacity:Il(i.material?.pageBackgroundOpacity??1,0,1),vectorColorOverride:i.material?.vectorColorOverride??null,vectorOpacityOverride:Il(i.material?.vectorOpacityOverride??0,0,1)}}}function M_(i){const e=i.segmentMerge??i.extraction?.enableSegmentMerge,t=i.invisibleCull??i.extraction?.enableInvisibleCull;return e===void 0&&t===void 0?i.extraction:{enableSegmentMerge:e,enableInvisibleCull:t}}function Il(i,e,t){return!Number.isFinite(i)||i<e?e:i>t?t:i}function Ul(i,e,t){const n=t==="instanced",r=n?{defines:{PDF_INSTANCED:"1"}}:{},a=new Ge(e.material.pageBackgroundColor),s=e.material.vectorColorOverride?new Ge(e.material.vectorColorOverride):new Ge(0,0,0),o=e.material.vectorColorOverride?e.material.vectorOpacityOverride:0,l=new qe,c=i.textAtlasTexture,d={uPageIndex:{value:0},uPageMetaTexA:{value:i.pageMetaTextureA.texture},uPageMetaTexB:{value:i.pageMetaTextureB.texture},uPageRectTex:{value:i.pageRectTexture.texture},uPageMetaTexSize:{value:[i.pageMetaTextureA.width,i.pageMetaTextureA.height]},uPageRectTexSize:{value:[i.pageRectTexture.width,i.pageRectTexture.height]},uPageBackgroundColor:{value:[a.r,a.g,a.b,e.material.pageBackgroundOpacity]},uVectorOverride:{value:[s.r,s.g,s.b,o]},uStrokeCurveEnabled:{value:e.material.strokeCurveEnabled?1:0},uTextCurveEnabled:{value:e.material.strokeCurveEnabled?1:0},uTextVectorOnly:{value:e.material.textVectorOnly?1:0},uPanCacheEnabled:{value:0},uPanCacheViewProj:{value:l},uPanCacheTex:{value:c},uStrokeAAScreenPx:{value:1},uFillAAScreenPx:{value:1},uTextAAScreenPx:{value:1.25}},p=i.rasterAtlasTextures.map((f,h)=>new $i({glslVersion:bi,transparent:!0,blending:jl,blendSrc:ns,blendDst:Zi,blendSrcAlpha:ns,blendDstAlpha:Zi,side:e.page.side,depthWrite:e.page.depthWrite,depthTest:!0,vertexShader:E_(n),fragmentShader:b_,uniforms:{...d,uRasterLayerTexA:{value:i.rasterLayerMetaTextureA.texture},uRasterLayerTexB:{value:i.rasterLayerMetaTextureB.texture},uRasterLayerTexC:{value:i.rasterLayerMetaTextureC.texture},uRasterLayerTexSize:{value:[i.rasterLayerMetaTextureA.width,i.rasterLayerMetaTextureA.height]},uRasterAtlasTex:{value:f},uRasterAtlasSize:{value:[i.rasterAtlasSizes[h]?.width??1,i.rasterAtlasSizes[h]?.height??1]},uRasterAtlasIndex:{value:h},uPanCachePrimaryPass:{value:h===0?1:0},uRasterPassIncludesBackground:{value:h===0?1:0}},...r})),u=new $i({glslVersion:bi,transparent:!0,side:e.page.side,depthWrite:e.page.depthWrite,depthTest:!0,vertexShader:A_(n),fragmentShader:C_,uniforms:{...d,uFillPathMetaTexA:{value:i.fillPathTextureA.texture},uFillPathMetaTexB:{value:i.fillPathTextureB.texture},uFillPathMetaTexC:{value:i.fillPathTextureC.texture},uFillPathMetaTexSize:{value:[i.fillPathTextureA.width,i.fillPathTextureA.height]},uFillSegmentTexA:{value:i.fillSegmentTextureA.texture},uFillSegmentTexB:{value:i.fillSegmentTextureB.texture},uFillSegmentTexSize:{value:[i.fillSegmentTextureA.width,i.fillSegmentTextureA.height]},uPanCachePrimaryPass:{value:0}},...r}),m=new $i({glslVersion:bi,transparent:!0,side:e.page.side,depthWrite:e.page.depthWrite,depthTest:!0,vertexShader:w_(n),fragmentShader:R_,uniforms:{...d,uSegmentTexA:{value:i.segmentTextureA.texture},uSegmentTexB:{value:i.segmentTextureB.texture},uSegmentStyleTex:{value:i.segmentTextureC.texture},uSegmentBoundsTex:{value:i.segmentTextureD.texture},uSegmentTexSize:{value:[i.segmentTextureA.width,i.segmentTextureA.height]},uPanCachePrimaryPass:{value:0}},...r}),_=new $i({glslVersion:bi,transparent:!0,side:e.page.side,depthWrite:e.page.depthWrite,depthTest:!0,vertexShader:P_(n),fragmentShader:D_,uniforms:{...d,uTextInstanceTexA:{value:i.textInstanceTextureA.texture},uTextInstanceTexB:{value:i.textInstanceTextureB.texture},uTextInstanceTexC:{value:i.textInstanceTextureC.texture},uTextInstanceTexSize:{value:[i.textInstanceTextureA.width,i.textInstanceTextureA.height]},uTextGlyphMetaTexA:{value:i.textGlyphMetaTextureA.texture},uTextGlyphMetaTexB:{value:i.textGlyphMetaTextureB.texture},uTextGlyphMetaTexSize:{value:[i.textGlyphMetaTextureA.width,i.textGlyphMetaTextureA.height]},uTextGlyphSegmentTexA:{value:i.textGlyphSegmentTextureA.texture},uTextGlyphSegmentTexB:{value:i.textGlyphSegmentTextureB.texture},uTextGlyphSegmentTexSize:{value:[i.textGlyphSegmentTextureA.width,i.textGlyphSegmentTextureA.height]},uTextGlyphRasterMetaTex:{value:i.textGlyphRasterMetaTexture.texture},uTextRasterAtlasTex:{value:i.textAtlasTexture},uTextRasterAtlasSize:{value:[i.textAtlasSize.width,i.textAtlasSize.height]},uPanCachePrimaryPass:{value:0}},...r}),S=[...p,u,m,_];return T_(S,e.page.side,e.page.depthWrite),{rasterPasses:p,fill:u,stroke:m,text:_,all:S,setMaterialOptions:f=>{if(y_(d,f),typeof f.strokeCurveEnabled=="boolean"&&(d.uStrokeCurveEnabled.value=f.strokeCurveEnabled?1:0,d.uTextCurveEnabled.value=f.strokeCurveEnabled?1:0),typeof f.textVectorOnly=="boolean"&&(d.uTextVectorOnly.value=f.textVectorOnly?1:0),f.pageBackgroundColor!==void 0||f.pageBackgroundOpacity!==void 0){const h=d.uPageBackgroundColor.value,M=new Ge(f.pageBackgroundColor??new Ge(h[0],h[1],h[2]));h[0]=M.r,h[1]=M.g,h[2]=M.b,f.pageBackgroundOpacity!==void 0&&(h[3]=Qa(f.pageBackgroundOpacity,0,1))}if(f.vectorColorOverride!==void 0||f.vectorOpacityOverride!==void 0){const h=d.uVectorOverride.value;if(f.vectorColorOverride===null)h[0]=0,h[1]=0,h[2]=0,h[3]=0;else if(f.vectorColorOverride!==void 0){const M=new Ge(f.vectorColorOverride);h[0]=M.r,h[1]=M.g,h[2]=M.b,h[3]=f.vectorOpacityOverride!==void 0?Qa(f.vectorOpacityOverride,0,1):h[3],f.vectorOpacityOverride===void 0&&h[3]<=0&&(h[3]=1)}else f.vectorOpacityOverride!==void 0&&(h[3]=Qa(f.vectorOpacityOverride,0,1))}for(const h of S)h.needsUpdate=!0},setPanCacheState:(f,h,M)=>{d.uPanCacheEnabled.value=f?1:0,d.uPanCacheViewProj.value.copy(h),d.uPanCacheTex.value=M},dispose:()=>{for(const f of S)f.dispose()}}}function T_(i,e,t){for(const n of i)n.side=e,n.depthWrite=t,n.toneMapped=!1}function y_(i,e){typeof e.strokeCurveEnabled=="boolean"&&(i.uStrokeCurveEnabled.value=e.strokeCurveEnabled?1:0,i.uTextCurveEnabled.value=e.strokeCurveEnabled?1:0),typeof e.textVectorOnly=="boolean"&&(i.uTextVectorOnly.value=e.textVectorOnly?1:0)}function la(i){return`precision highp float;
precision highp sampler2D;

in vec3 position;
in float aPrimitiveIndex;
${i?"in float aPageIndex;":""}

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;
uniform int uPageIndex;
uniform float uPanCacheEnabled;
uniform float uPanCachePrimaryPass;
uniform sampler2D uPageMetaTexA;
uniform sampler2D uPageMetaTexB;
uniform sampler2D uPageRectTex;
uniform ivec2 uPageMetaTexSize;
uniform ivec2 uPageRectTexSize;

#ifdef USE_INSTANCING
in mat4 instanceMatrix;
#endif

ivec2 coordFromIndex(int index, ivec2 sizeValue) {
  int x = index % sizeValue.x;
  int y = index / sizeValue.x;
  return ivec2(x, y);
}

int readPageIndex() {
${i?"  return int(aPageIndex + 0.5);":"  return uPageIndex;"}
}

vec4 toClip(vec2 pagePoint, vec2 pageCenter) {
  vec3 local = vec3(pagePoint - pageCenter, 0.0);
  vec4 modelLocal = vec4(local, 1.0);
#ifdef USE_INSTANCING
  modelLocal = instanceMatrix * modelLocal;
#endif
  return projectionMatrix * (modelViewMatrix * modelLocal);
}

vec3 toWorldPosition(vec2 pagePoint, vec2 pageCenter) {
  vec3 local = vec3(pagePoint - pageCenter, 0.0);
  vec4 modelLocal = vec4(local, 1.0);
#ifdef USE_INSTANCING
  modelLocal = instanceMatrix * modelLocal;
#endif
  return (modelMatrix * modelLocal).xyz;
}
`}const ca=`
vec4 samplePanCacheColor(vec3 worldPos) {
  vec4 cacheClip = uPanCacheViewProj * vec4(worldPos, 1.0);
  if (cacheClip.w <= 1e-6) {
    return vec4(0.0);
  }

  vec2 ndc = cacheClip.xy / cacheClip.w;
  const float ndcGuard = 1e-3;
  if (abs(ndc.x) > 1.0 + ndcGuard || abs(ndc.y) > 1.0 + ndcGuard) {
    return vec4(0.0);
  }

  vec2 uv = clamp(ndc * 0.5 + 0.5, vec2(0.0), vec2(1.0));
  return texture(uPanCacheTex, uv);
}

vec4 compositeOver(vec4 fg, vec4 bg) {
  float outA = fg.a + bg.a * (1.0 - fg.a);
  vec3 outRgb = fg.rgb + bg.rgb * (1.0 - fg.a);
  return vec4(outRgb, outA);
}

float computePageEdgeBandMask(vec2 pageNormCoord) {
  float edgeDistanceNorm = min(
    min(pageNormCoord.x, 1.0 - pageNormCoord.x),
    min(pageNormCoord.y, 1.0 - pageNormCoord.y)
  );
  vec2 normPerPixel = max(fwidth(pageNormCoord), vec2(1e-6));
  float onePxNorm = max(normPerPixel.x, normPerPixel.y);
  float twoPxNorm = onePxNorm * 2.0;
  return 1.0 - smoothstep(onePxNorm, twoPxNorm, edgeDistanceNorm);
}
`;function E_(i){return`${la(i)}
uniform sampler2D uRasterLayerTexA;
uniform sampler2D uRasterLayerTexB;
uniform sampler2D uRasterLayerTexC;
uniform ivec2 uRasterLayerTexSize;
uniform float uRasterAtlasIndex;
uniform float uRasterPassIncludesBackground;

out vec2 vUv;
flat out vec4 vUvRect;
flat out float vRasterKind;
out vec2 vPageNormCoord;
out vec3 vWorldPos;

void main() {
  int pageIndex = readPageIndex();
  vec4 pageMetaB = texelFetch(uPageMetaTexB, coordFromIndex(pageIndex, uPageMetaTexSize), 0);
  vec4 pageRect = texelFetch(uPageRectTex, coordFromIndex(pageIndex, uPageRectTexSize), 0);
  vec2 pageCenter = (pageRect.xy + pageRect.zw) * 0.5;
  vec2 pageSize = max(pageRect.zw - pageRect.xy, vec2(1e-6));

  int primitiveIndex = int(aPrimitiveIndex + 0.5);
  int rasterCount = int(pageMetaB.w + 0.5);

  vec2 corner01 = position.xy * 0.5 + 0.5;

  if (uPanCacheEnabled >= 0.5) {
    if (uPanCachePrimaryPass < 0.5 || primitiveIndex != 0) {
      gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
      vUv = vec2(0.0);
      vUvRect = vec4(0.0);
      vRasterKind = 2.0;
      vPageNormCoord = vec2(0.0);
      vWorldPos = vec3(0.0);
      return;
    }
  }

  if (primitiveIndex > rasterCount) {
    gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
    vUv = vec2(0.0);
    vUvRect = vec4(0.0);
    vRasterKind = 2.0;
    vPageNormCoord = vec2(0.0);
    vWorldPos = vec3(0.0);
    return;
  }

  if (primitiveIndex == 0) {
    if (uRasterPassIncludesBackground < 0.5) {
      gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
      vUv = vec2(0.0);
      vUvRect = vec4(0.0);
      vRasterKind = 2.0;
      vPageNormCoord = vec2(0.0);
      vWorldPos = vec3(0.0);
      return;
    }

    vec2 pagePoint = mix(pageRect.xy, pageRect.zw, corner01);
    vWorldPos = toWorldPosition(pagePoint, pageCenter);
    gl_Position = toClip(pagePoint, pageCenter);
    vUv = vec2(0.0);
    vUvRect = vec4(0.0);
    vRasterKind = 0.0;
    vPageNormCoord = corner01;
    return;
  }

  int layerIndex = int(pageMetaB.z + 0.5) + primitiveIndex - 1;
  vec4 metaA = texelFetch(uRasterLayerTexA, coordFromIndex(layerIndex, uRasterLayerTexSize), 0);
  vec4 metaB = texelFetch(uRasterLayerTexB, coordFromIndex(layerIndex, uRasterLayerTexSize), 0);
  vec4 metaC = texelFetch(uRasterLayerTexC, coordFromIndex(layerIndex, uRasterLayerTexSize), 0);

  if (abs(metaC.z - uRasterAtlasIndex) > 0.5) {
    gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
    vUv = vec2(0.0);
    vUvRect = vec4(0.0);
    vRasterKind = 2.0;
    vPageNormCoord = vec2(0.0);
    vWorldPos = vec3(0.0);
    return;
  }

  vec2 localTopDown = vec2(corner01.x, 1.0 - corner01.y);
  vec2 pagePoint = vec2(
    metaA.x * localTopDown.x + metaA.z * localTopDown.y + metaB.x,
    metaA.y * localTopDown.x + metaA.w * localTopDown.y + metaB.y
  );

  vWorldPos = toWorldPosition(pagePoint, pageCenter);
  gl_Position = toClip(pagePoint, pageCenter);
  vUvRect = vec4(metaB.z, metaB.w, metaC.x, metaC.y);
  vUv = vec2(vUvRect.x + localTopDown.x * vUvRect.z, vUvRect.y + localTopDown.y * vUvRect.w);
  vRasterKind = 1.0;
  vPageNormCoord = clamp((pagePoint - pageRect.xy) / pageSize, 0.0, 1.0);
}
`}const b_=`precision highp float;
precision highp sampler2D;

uniform sampler2D uRasterAtlasTex;
uniform sampler2D uPanCacheTex;
uniform vec2 uRasterAtlasSize;
uniform mat4 uPanCacheViewProj;
uniform float uPanCacheEnabled;
uniform float uPanCachePrimaryPass;
uniform vec4 uPageBackgroundColor;

in vec2 vUv;
flat in vec4 vUvRect;
flat in float vRasterKind;
in vec2 vPageNormCoord;
in vec3 vWorldPos;
out vec4 outColor;

${hu()}
${ca}

void main() {
  if (uPanCacheEnabled >= 0.5) {
    if (uPanCachePrimaryPass < 0.5) {
      discard;
    }
    vec4 cached = samplePanCacheColor(vWorldPos);
    float pageQuadMask = 1.0 - step(0.5, vRasterKind);
    float edgeMask = computePageEdgeBandMask(vPageNormCoord) * pageQuadMask;
    vec4 backgroundPremult = vec4(uPageBackgroundColor.rgb * uPageBackgroundColor.a, uPageBackgroundColor.a);
    vec4 edgeComposited = compositeOver(cached, backgroundPremult);
    vec4 stabilized = mix(cached, edgeComposited, edgeMask);
    if (stabilized.a <= 0.001) {
      discard;
    }
    outColor = stabilized;
    return;
  }

  if (vRasterKind > 1.5) {
    discard;
  }

  if (vRasterKind < 0.5) {
    if (uPageBackgroundColor.a <= 0.001) {
      discard;
    }
    outColor = vec4(uPageBackgroundColor.rgb * uPageBackgroundColor.a, uPageBackgroundColor.a);
    return;
  }

  vec4 color = sampleRasterStable(uRasterAtlasTex, vUv, vUvRect, uRasterAtlasSize);

  if (color.a <= 0.001) {
    discard;
  }
  outColor = color;
}
`;function A_(i){return`${la(i)}
uniform sampler2D uFillPathMetaTexA;
uniform sampler2D uFillPathMetaTexB;
uniform sampler2D uFillPathMetaTexC;
uniform ivec2 uFillPathMetaTexSize;

flat out int vSegmentStart;
flat out int vSegmentCount;
flat out vec3 vColor;
flat out float vAlpha;
flat out float vFillRule;
flat out float vFillHasCompanionStroke;
out vec2 vLocal;
out vec3 vWorldPos;

void main() {
  if (uPanCacheEnabled >= 0.5 && uPanCachePrimaryPass < 0.5) {
    gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
    vSegmentStart = 0;
    vSegmentCount = 0;
    vColor = vec3(0.0);
    vAlpha = 0.0;
    vFillRule = 0.0;
    vFillHasCompanionStroke = 0.0;
    vLocal = vec2(0.0);
    vWorldPos = vec3(0.0);
    return;
  }

  int pageIndex = readPageIndex();
  vec4 pageMetaA = texelFetch(uPageMetaTexA, coordFromIndex(pageIndex, uPageMetaTexSize), 0);
  vec4 pageRect = texelFetch(uPageRectTex, coordFromIndex(pageIndex, uPageRectTexSize), 0);
  vec2 pageCenter = (pageRect.xy + pageRect.zw) * 0.5;

  int primitiveIndex = int(aPrimitiveIndex + 0.5);
  int fillCount = int(pageMetaA.w + 0.5);
  if (primitiveIndex >= fillCount) {
    gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
    vSegmentStart = 0;
    vSegmentCount = 0;
    vColor = vec3(0.0);
    vAlpha = 0.0;
    vFillRule = 0.0;
    vFillHasCompanionStroke = 0.0;
    vLocal = vec2(0.0);
    vWorldPos = vec3(0.0);
    return;
  }

  int pathIndex = int(pageMetaA.z + 0.5) + primitiveIndex;
  vec4 metaA = texelFetch(uFillPathMetaTexA, coordFromIndex(pathIndex, uFillPathMetaTexSize), 0);
  vec4 metaB = texelFetch(uFillPathMetaTexB, coordFromIndex(pathIndex, uFillPathMetaTexSize), 0);
  vec4 metaC = texelFetch(uFillPathMetaTexC, coordFromIndex(pathIndex, uFillPathMetaTexSize), 0);

  int segmentCount = int(metaA.y + 0.5);
  float alpha = metaC.w;
  if (segmentCount <= 0 || alpha <= 0.001) {
    gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
    vSegmentStart = 0;
    vSegmentCount = 0;
    vColor = vec3(0.0);
    vAlpha = 0.0;
    vFillRule = 0.0;
    vFillHasCompanionStroke = 0.0;
    vLocal = vec2(0.0);
    vWorldPos = vec3(0.0);
    return;
  }

  vec2 minBounds = metaA.zw;
  vec2 maxBounds = metaB.xy;
  vec2 corner01 = position.xy * 0.5 + 0.5;
  vec2 local = mix(minBounds, maxBounds, corner01);

  vWorldPos = toWorldPosition(local, pageCenter);
  gl_Position = toClip(local, pageCenter);
  vSegmentStart = int(metaA.x + 0.5);
  vSegmentCount = segmentCount;
  vColor = vec3(metaB.z, metaB.w, metaC.z);
  vAlpha = alpha;
  vFillRule = metaC.x;
  vFillHasCompanionStroke = metaC.y;
  vLocal = local;
}
`}const C_=`precision highp float;
precision highp sampler2D;

uniform sampler2D uFillSegmentTexA;
uniform sampler2D uFillSegmentTexB;
uniform sampler2D uPanCacheTex;
uniform ivec2 uFillSegmentTexSize;
uniform mat4 uPanCacheViewProj;
uniform float uFillAAScreenPx;
uniform float uPanCacheEnabled;
uniform float uPanCachePrimaryPass;
uniform vec4 uVectorOverride;

flat in int vSegmentStart;
flat in int vSegmentCount;
flat in vec3 vColor;
flat in float vAlpha;
flat in float vFillRule;
flat in float vFillHasCompanionStroke;
in vec2 vLocal;
in vec3 vWorldPos;

out vec4 outColor;

const int MAX_FILL_PATH_PRIMITIVES = 2048;
const float FILL_PRIMITIVE_QUADRATIC = 1.0;

ivec2 coordFromIndex(int index, ivec2 sizeValue) {
  int x = index % sizeValue.x;
  int y = index / sizeValue.x;
  return ivec2(x, y);
}

${Ks()}
${pu()}
${ca}

void main() {
  if (uPanCacheEnabled >= 0.5) {
    if (uPanCachePrimaryPass < 0.5) {
      discard;
    }
    vec4 cached = samplePanCacheColor(vWorldPos);
    if (cached.a <= 0.001) {
      discard;
    }
    outColor = cached;
    return;
  }

  if (vSegmentCount <= 0 || vAlpha <= 0.001) {
    discard;
  }

  float minDistance = 1e20;
  int winding = 0;
  int crossings = 0;

  for (int i = 0; i < MAX_FILL_PATH_PRIMITIVES; i += 1) {
    if (i >= vSegmentCount) {
      break;
    }

    vec4 primitiveA = texelFetch(uFillSegmentTexA, coordFromIndex(vSegmentStart + i, uFillSegmentTexSize), 0);
    vec4 primitiveB = texelFetch(uFillSegmentTexB, coordFromIndex(vSegmentStart + i, uFillSegmentTexSize), 0);
    vec2 p0 = primitiveA.xy;
    vec2 p1 = primitiveA.zw;
    vec2 p2 = primitiveB.xy;
    float primitiveType = primitiveB.z;

    if (primitiveType >= FILL_PRIMITIVE_QUADRATIC) {
      minDistance = min(minDistance, distanceToQuadraticBezier(vLocal, p0, p1, p2));
      accumulateQuadraticCrossing(p0, p1, p2, vLocal, winding, crossings);
    } else {
      minDistance = min(minDistance, distanceToLineSegment(vLocal, p0, p2));
      accumulateLineCrossing(p0, p2, vLocal, winding, crossings);
    }
  }

  bool insideNonZero = winding != 0;
  bool insideEvenOdd = (crossings & 1) == 1;
  bool inside = vFillRule >= 0.5 ? insideEvenOdd : insideNonZero;
  vec3 color = mix(vColor, uVectorOverride.rgb, clamp(uVectorOverride.a, 0.0, 1.0));
  if (vFillHasCompanionStroke >= 0.5) {
    float alpha = inside ? vAlpha : 0.0;
    if (alpha <= 0.001) {
      discard;
    }
    outColor = vec4(color, alpha);
    return;
  }

  float signedDistance = inside ? -minDistance : minDistance;

  float pixelToLocalX = length(vec2(dFdx(vLocal.x), dFdy(vLocal.x)));
  float pixelToLocalY = length(vec2(dFdx(vLocal.y), dFdy(vLocal.y)));
  float aaWidth = max(max(pixelToLocalX, pixelToLocalY) * uFillAAScreenPx, 1e-4);

  float alpha = clamp(0.5 - signedDistance / aaWidth, 0.0, 1.0) * vAlpha;
  if (alpha <= 0.001) {
    discard;
  }

  outColor = vec4(color, alpha);
}
`;function w_(i){return`${la(i)}
uniform sampler2D uSegmentTexA;
uniform sampler2D uSegmentTexB;
uniform sampler2D uSegmentStyleTex;
uniform sampler2D uSegmentBoundsTex;
uniform ivec2 uSegmentTexSize;

out vec2 vLocal;
flat out vec2 vP0;
flat out vec2 vP1;
flat out vec2 vP2;
flat out float vPrimitiveType;
flat out float vHalfWidth;
flat out float vIsHairline;
flat out vec3 vColor;
flat out float vAlpha;
out vec3 vWorldPos;

void main() {
  if (uPanCacheEnabled >= 0.5 && uPanCachePrimaryPass < 0.5) {
    gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
    vLocal = vec2(0.0);
    vP0 = vec2(0.0);
    vP1 = vec2(0.0);
    vP2 = vec2(0.0);
    vPrimitiveType = 0.0;
    vHalfWidth = 0.0;
    vIsHairline = 0.0;
    vColor = vec3(0.0);
    vAlpha = 0.0;
    vWorldPos = vec3(0.0);
    return;
  }

  int pageIndex = readPageIndex();
  vec4 pageMetaA = texelFetch(uPageMetaTexA, coordFromIndex(pageIndex, uPageMetaTexSize), 0);
  vec4 pageRect = texelFetch(uPageRectTex, coordFromIndex(pageIndex, uPageRectTexSize), 0);
  vec2 pageCenter = (pageRect.xy + pageRect.zw) * 0.5;

  int primitiveIndex = int(aPrimitiveIndex + 0.5);
  int segmentCount = int(pageMetaA.y + 0.5);

  if (primitiveIndex >= segmentCount) {
    gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
    vLocal = vec2(0.0);
    vP0 = vec2(0.0);
    vP1 = vec2(0.0);
    vP2 = vec2(0.0);
    vPrimitiveType = 0.0;
    vHalfWidth = 0.0;
    vIsHairline = 0.0;
    vColor = vec3(0.0);
    vAlpha = 0.0;
    vWorldPos = vec3(0.0);
    return;
  }

  int segmentIndex = int(pageMetaA.x + 0.5) + primitiveIndex;
  vec4 primitiveA = texelFetch(uSegmentTexA, coordFromIndex(segmentIndex, uSegmentTexSize), 0);
  vec4 primitiveB = texelFetch(uSegmentTexB, coordFromIndex(segmentIndex, uSegmentTexSize), 0);
  vec4 style = texelFetch(uSegmentStyleTex, coordFromIndex(segmentIndex, uSegmentTexSize), 0);
  vec4 primitiveBounds = texelFetch(uSegmentBoundsTex, coordFromIndex(segmentIndex, uSegmentTexSize), 0);

  vec2 p0 = primitiveA.xy;
  vec2 p1 = primitiveA.zw;
  vec2 p2 = primitiveB.xy;
  float primitiveType = primitiveB.z;
  bool isQuadratic = primitiveType >= 0.5;
  float halfWidth = style.x;
  vec3 color = style.yzw;
  float packedStyle = primitiveB.w;
  float styleFlags = floor(packedStyle / 2.0 + 1e-6);
  float alpha = packedStyle - styleFlags * 2.0;
  bool isHairline = mod(styleFlags, 2.0) >= 0.5;

  float geometryLength = isQuadratic
    ? length(p1 - p0) + length(p2 - p1)
    : length(p2 - p0);

  if (geometryLength < 1e-5 || alpha <= 0.001) {
    gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
    vLocal = vec2(0.0);
    vP0 = vec2(0.0);
    vP1 = vec2(0.0);
    vP2 = vec2(0.0);
    vPrimitiveType = 0.0;
    vHalfWidth = 0.0;
    vIsHairline = 0.0;
    vColor = color;
    vAlpha = 0.0;
    vWorldPos = vec3(0.0);
    return;
  }

  float extent = max(halfWidth, 0.5) + 2.0;
  vec2 worldMin = primitiveBounds.xy - vec2(extent);
  vec2 worldMax = primitiveBounds.zw + vec2(extent);
  vec2 corner01 = position.xy * 0.5 + 0.5;
  vec2 pagePoint = mix(worldMin, worldMax, corner01);

  vWorldPos = toWorldPosition(pagePoint, pageCenter);
  gl_Position = toClip(pagePoint, pageCenter);
  vLocal = pagePoint;
  vP0 = p0;
  vP1 = p1;
  vP2 = p2;
  vPrimitiveType = primitiveType;
  vHalfWidth = halfWidth;
  vIsHairline = isHairline ? 1.0 : 0.0;
  vColor = color;
  vAlpha = alpha;
}
`}const R_=`precision highp float;

uniform sampler2D uPanCacheTex;
uniform float uStrokeCurveEnabled;
uniform float uStrokeAAScreenPx;
uniform mat4 uPanCacheViewProj;
uniform float uPanCacheEnabled;
uniform float uPanCachePrimaryPass;
uniform vec4 uVectorOverride;

in vec2 vLocal;
flat in vec2 vP0;
flat in vec2 vP1;
flat in vec2 vP2;
flat in float vPrimitiveType;
flat in float vHalfWidth;
flat in float vIsHairline;
flat in vec3 vColor;
flat in float vAlpha;
in vec3 vWorldPos;

out vec4 outColor;

${Ks()}
${ca}

void main() {
  if (uPanCacheEnabled >= 0.5) {
    if (uPanCachePrimaryPass < 0.5) {
      discard;
    }
    vec4 cached = samplePanCacheColor(vWorldPos);
    if (cached.a <= 0.001) {
      discard;
    }
    outColor = cached;
    return;
  }

  if (vAlpha <= 0.001) {
    discard;
  }

  float distanceToSegment = (uStrokeCurveEnabled >= 0.5 && vPrimitiveType >= 0.5)
    ? distanceToQuadraticBezier(vLocal, vP0, vP1, vP2)
    : distanceToLineSegment(vLocal, vP0, vP2);

  float localPerPixel = max(
    length(vec2(dFdx(vLocal.x), dFdy(vLocal.x))),
    length(vec2(dFdx(vLocal.y), dFdy(vLocal.y)))
  );

  float halfWidth = vHalfWidth;
  if (vIsHairline >= 0.5) {
    halfWidth = max(halfWidth, 0.5 * localPerPixel);
  }

  float aaWidth = max(localPerPixel * uStrokeAAScreenPx, 1e-4);
  if (vIsHairline >= 0.5) {
    aaWidth = max(aaWidth, 0.35 * localPerPixel);
  }

  float coverage = 1.0 - smoothstep(halfWidth - aaWidth, halfWidth + aaWidth, distanceToSegment);
  float alpha = coverage * vAlpha;

  if (alpha <= 0.001) {
    discard;
  }

  vec3 color = mix(vColor, uVectorOverride.rgb, clamp(uVectorOverride.a, 0.0, 1.0));
  outColor = vec4(color, alpha);
}
`;function P_(i){return`${la(i)}
uniform sampler2D uTextInstanceTexA;
uniform sampler2D uTextInstanceTexB;
uniform sampler2D uTextInstanceTexC;
uniform sampler2D uTextGlyphMetaTexA;
uniform sampler2D uTextGlyphMetaTexB;
uniform sampler2D uTextGlyphRasterMetaTex;
uniform ivec2 uTextInstanceTexSize;
uniform ivec2 uTextGlyphMetaTexSize;

flat out int vSegmentStart;
flat out int vSegmentCount;
flat out vec3 vColor;
flat out float vColorAlpha;
flat out vec4 vRasterRect;
out vec2 vNormCoord;
out vec2 vLocal;
out vec3 vWorldPos;

void main() {
  if (uPanCacheEnabled >= 0.5 && uPanCachePrimaryPass < 0.5) {
    gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
    vSegmentStart = 0;
    vSegmentCount = 0;
    vColor = vec3(0.0);
    vColorAlpha = 0.0;
    vRasterRect = vec4(0.0);
    vNormCoord = vec2(0.0);
    vLocal = vec2(0.0);
    vWorldPos = vec3(0.0);
    return;
  }

  int pageIndex = readPageIndex();
  vec4 pageMetaB = texelFetch(uPageMetaTexB, coordFromIndex(pageIndex, uPageMetaTexSize), 0);
  vec4 pageRect = texelFetch(uPageRectTex, coordFromIndex(pageIndex, uPageRectTexSize), 0);
  vec2 pageCenter = (pageRect.xy + pageRect.zw) * 0.5;

  int primitiveIndex = int(aPrimitiveIndex + 0.5);
  int textCount = int(pageMetaB.y + 0.5);
  if (primitiveIndex >= textCount) {
    gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
    vSegmentStart = 0;
    vSegmentCount = 0;
    vColor = vec3(0.0);
    vColorAlpha = 0.0;
    vRasterRect = vec4(0.0);
    vNormCoord = vec2(0.0);
    vLocal = vec2(0.0);
    vWorldPos = vec3(0.0);
    return;
  }

  int instanceIndex = int(pageMetaB.x + 0.5) + primitiveIndex;
  vec4 instanceA = texelFetch(uTextInstanceTexA, coordFromIndex(instanceIndex, uTextInstanceTexSize), 0);
  vec4 instanceB = texelFetch(uTextInstanceTexB, coordFromIndex(instanceIndex, uTextInstanceTexSize), 0);
  vec4 instanceC = texelFetch(uTextInstanceTexC, coordFromIndex(instanceIndex, uTextInstanceTexSize), 0);

  int glyphIndex = int(instanceB.z + 0.5);
  vec4 glyphMetaA = texelFetch(uTextGlyphMetaTexA, coordFromIndex(glyphIndex, uTextGlyphMetaTexSize), 0);
  vec4 glyphMetaB = texelFetch(uTextGlyphMetaTexB, coordFromIndex(glyphIndex, uTextGlyphMetaTexSize), 0);
  vec4 glyphRasterMeta = texelFetch(uTextGlyphRasterMetaTex, coordFromIndex(glyphIndex, uTextGlyphMetaTexSize), 0);

  int segmentCount = int(glyphMetaA.y + 0.5);
  if (segmentCount <= 0) {
    gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
    vSegmentStart = 0;
    vSegmentCount = 0;
    vColor = vec3(0.0);
    vColorAlpha = 0.0;
    vRasterRect = vec4(0.0);
    vNormCoord = vec2(0.0);
    vLocal = vec2(0.0);
    vWorldPos = vec3(0.0);
    return;
  }

  vec2 minBounds = glyphMetaA.zw;
  vec2 maxBounds = glyphMetaB.xy;
  vec2 corner01 = position.xy * 0.5 + 0.5;
  vec2 local = mix(minBounds, maxBounds, corner01);

  vec2 pagePoint = vec2(
    instanceA.x * local.x + instanceA.z * local.y + instanceB.x,
    instanceA.y * local.x + instanceA.w * local.y + instanceB.y
  );

  vWorldPos = toWorldPosition(pagePoint, pageCenter);
  gl_Position = toClip(pagePoint, pageCenter);
  vSegmentStart = int(glyphMetaA.x + 0.5);
  vSegmentCount = segmentCount;
  vColor = instanceC.rgb;
  vColorAlpha = instanceC.a;
  vRasterRect = glyphRasterMeta;
  vNormCoord = clamp((local - minBounds) / max(maxBounds - minBounds, vec2(1e-6)), 0.0, 1.0);
  vLocal = local;
}
`}const D_=`precision highp float;
precision highp sampler2D;

uniform sampler2D uTextGlyphSegmentTexA;
uniform sampler2D uTextGlyphSegmentTexB;
uniform sampler2D uPanCacheTex;
uniform sampler2D uTextRasterAtlasTex;
uniform ivec2 uTextGlyphSegmentTexSize;
uniform mat4 uPanCacheViewProj;
uniform vec2 uTextRasterAtlasSize;
uniform float uTextAAScreenPx;
uniform float uTextCurveEnabled;
uniform float uPanCacheEnabled;
uniform float uPanCachePrimaryPass;
uniform float uTextVectorOnly;
uniform vec4 uVectorOverride;

flat in int vSegmentStart;
flat in int vSegmentCount;
flat in vec3 vColor;
flat in float vColorAlpha;
flat in vec4 vRasterRect;
in vec2 vNormCoord;
in vec2 vLocal;
in vec3 vWorldPos;

out vec4 outColor;

const int MAX_GLYPH_PRIMITIVES = 256;
const float TEXT_PRIMITIVE_QUADRATIC = 1.0;

ivec2 coordFromIndex(int index, ivec2 sizeValue) {
  int x = index % sizeValue.x;
  int y = index / sizeValue.x;
  return ivec2(x, y);
}

${Ks()}
${du()}
${fu()}
${ca}

void main() {
  if (uPanCacheEnabled >= 0.5) {
    if (uPanCachePrimaryPass < 0.5) {
      discard;
    }
    vec4 cached = samplePanCacheColor(vWorldPos);
    if (cached.a <= 0.001) {
      discard;
    }
    outColor = cached;
    return;
  }

  if (vSegmentCount <= 0) {
    discard;
  }

  if (uTextVectorOnly < 0.5 && vRasterRect.z > 0.0 && vRasterRect.w > 0.0) {
    vec2 atlasPxSize = max(uTextRasterAtlasSize, vec2(1.0));
    vec2 nc = vec2(vNormCoord.x, 1.0 - vNormCoord.y) * (vRasterRect.zw * atlasPxSize);
    if (shouldUseTextMinifyFallback(nc)) {
      float alpha = sampleTextMinifiedAlpha(
        uTextRasterAtlasTex,
        atlasPxSize,
        vRasterRect,
        vNormCoord,
        nc
      );
      alpha *= vColorAlpha;
      if (alpha <= 0.001) {
        discard;
      }
      vec3 color = mix(vColor, uVectorOverride.rgb, clamp(uVectorOverride.a, 0.0, 1.0));
      outColor = vec4(color, alpha);
      return;
    }
  }

  float minDistance = 1e20;
  int winding = 0;

  for (int i = 0; i < MAX_GLYPH_PRIMITIVES; i += 1) {
    if (i >= vSegmentCount) {
      break;
    }

    vec4 primitiveA = texelFetch(uTextGlyphSegmentTexA, coordFromIndex(vSegmentStart + i, uTextGlyphSegmentTexSize), 0);
    vec4 primitiveB = texelFetch(uTextGlyphSegmentTexB, coordFromIndex(vSegmentStart + i, uTextGlyphSegmentTexSize), 0);
    vec2 p0 = primitiveA.xy;
    vec2 p1 = primitiveA.zw;
    vec2 p2 = primitiveB.xy;
    float primitiveType = primitiveB.z;

    if (uTextCurveEnabled >= 0.5 && primitiveType >= TEXT_PRIMITIVE_QUADRATIC) {
      minDistance = min(minDistance, distanceToQuadraticBezier(vLocal, p0, p1, p2));
      accumulateQuadraticCrossing(p0, p1, p2, vLocal, winding);
    } else {
      minDistance = min(minDistance, distanceToLineSegment(vLocal, p0, p2));
      accumulateLineCrossing(p0, p2, vLocal, winding);
    }
  }

  bool inside = winding != 0;
  float signedDistance = inside ? -minDistance : minDistance;

  float pixelToLocalX = length(vec2(dFdx(vLocal.x), dFdy(vLocal.x)));
  float pixelToLocalY = length(vec2(dFdx(vLocal.y), dFdy(vLocal.y)));
  float localPerPixel = max(pixelToLocalX, pixelToLocalY);

  float baseAAWidth = max(localPerPixel * uTextAAScreenPx, 1e-4);
  float alphaBase = 1.0 - smoothstep(-baseAAWidth, baseAAWidth, signedDistance);
  float alpha = alphaBase * vColorAlpha;
  if (alpha <= 0.001) {
    discard;
  }

  vec3 color = mix(vColor, uVectorOverride.rgb, clamp(uVectorOverride.a, 0.0, 1.0));
  outColor = vec4(color, alpha);
}
`;function L_(i,e){for(const t of i)t.uniforms.uPageIndex&&(t.uniforms.uPageIndex.value=e)}function Qa(i,e,t){return i<e?e:i>t?t:i}class I_ extends wh{pageIndices;sourcePages;sourceHashes;constructor(e,t,n,r,a){super(e,t,n.length),this.pageIndices=new Uint32Array(n.length),this.sourcePages=r??[],this.sourceHashes=new Uint32Array(n.length),this.frustumCulled=!1;for(let s=0;s<n.length;s+=1)this.pageIndices[s]=n[s],this.syncSourcePageAt(s,!0);this.onBeforeRender=(s,o,l)=>{this.syncFromSourcePages(),a?.(s,o,l)}}syncFromSourcePages(e=!1){let t=!1;for(let n=0;n<this.pageIndices.length;n+=1)t=this.syncSourcePageAt(n,e)||t;return t&&(this.instanceMatrix.needsUpdate=!0),t}syncSourcePageAt(e,t){const n=this.sourcePages[e];if(!n)return!1;n.updateMatrix();const r=U_(n.matrix.elements);return!t&&this.sourceHashes[e]===r?!1:(this.sourceHashes[e]=r,this.setMatrixAt(e,n.matrix),!0)}}function U_(i){let e=2166136261;for(let t=0;t<i.length;t+=1){const n=Number.isFinite(i[t])?Math.round(i[t]*1e6):0;e=Math.imul(e^n,16777619)}return e>>>0}class F_ extends kt{pageIndex;pageWidth;pageHeight;pageSize;materials;beforeRenderHook;constructor(e,t,n,r){super(t,n),this.pageIndex=e.pageIndex,this.pageWidth=e.widthPt,this.pageHeight=e.heightPt,this.pageSize=new De(this.pageWidth,this.pageHeight),this.materials=n,this.beforeRenderHook=r,this.frustumCulled=!1,this.onBeforeRender=(a,s,o)=>{L_(this.materials,this.pageIndex),this.beforeRenderHook?.(a,s,o)}}}class N_ extends Rt{pageIndex;pageWidth;pageHeight;pageSize;constructor(e){super(),this.pageIndex=e.pageIndex,this.pageWidth=e.widthPt,this.pageHeight=e.heightPt,this.pageSize=new De(this.pageWidth,this.pageHeight)}}const Fl=1e-9,qi=1e-6;class Nl{owner;fallbackTexture;materialSets=new Set;enabled=!0;cacheTarget=null;cacheValid=!1;cacheEnabled=!1;invalidateRequested=!0;isRefreshingCache=!1;hasLastFrameCameraState=!1;lastHandledFrame=-1;lastContentHash=0;cacheViewProj=new qe;identity=new qe;cacheCamera=new aa;lastCameraWorld=new qe;lastCameraProjection=new qe;lastViewport=new De(0,0);cachedSourcePosition=new U;cachedSourceQuaternion=new Cn;cachedRightAxis=new U(1,0,0);cachedUpAxis=new U(0,1,0);cachedSourceLeft=-1;cachedSourceRight=1;cachedSourceTop=1;cachedSourceBottom=-1;cachedSourceZoom=1;tmpViewport=new De;tmpDelta=new U;tmpClearColor=new Ge;constructor(e,t,n=!0){this.owner=e,this.fallbackTexture=t,this.enabled=n}registerMaterialSet(e){if(this.materialSets.add(e),this.cacheEnabled&&this.cacheTarget){e.setPanCacheState(!0,this.cacheViewProj,this.cacheTarget.texture);return}e.setPanCacheState(!1,this.identity,this.fallbackTexture)}unregisterMaterialSet(e){this.materialSets.delete(e)}invalidate(){this.invalidateRequested=!0,this.cacheValid=!1}setEnabled(e){this.enabled!==e&&(this.enabled=e,this.invalidate(),this.lastHandledFrame=-1,e||this.disablePanCache())}onBeforeRender(e,t,n){if(this.isRefreshingCache||t===this.owner||e.info.render.frame===this.lastHandledFrame)return;if(e.getDrawingBufferSize(this.tmpViewport),!this.enabled){this.disablePanCache(),this.recordCameraState(n,this.tmpViewport),this.lastHandledFrame=e.info.render.frame;return}const a=n;if(a.isOrthographicCamera!==!0){this.disablePanCache(),this.recordCameraState(n,this.tmpViewport),this.lastHandledFrame=e.info.render.frame;return}const s=this.tmpViewport.x!==this.lastViewport.x||this.tmpViewport.y!==this.lastViewport.y,o=this.hasLastFrameCameraState?!Ol(n.matrixWorld,this.lastCameraWorld,Fl)||!Ol(n.projectionMatrix,this.lastCameraProjection,Fl):!1,l=this.detectContentTransformChange(),c=s||l||this.invalidateRequested;if(!o){this.disablePanCache(),this.recordCameraState(n,this.tmpViewport),this.lastHandledFrame=e.info.render.frame;return}if(!this.ensureCacheTarget(e,this.tmpViewport)){this.disablePanCache(),this.recordCameraState(n,this.tmpViewport),this.lastHandledFrame=e.info.render.frame;return}this.shouldRefreshCache(a,c)&&this.refreshCache(e,a),this.cacheValid&&this.cacheTarget?(this.setPanCacheState(!0,this.cacheViewProj,this.cacheTarget.texture),this.cacheEnabled=!0):this.disablePanCache(),this.recordCameraState(n,this.tmpViewport),this.lastHandledFrame=e.info.render.frame}dispose(){this.disablePanCache(),this.cacheTarget?.dispose(),this.cacheTarget=null,this.materialSets.clear()}detectContentTransformChange(){const e=O_(this.owner),t=this.lastContentHash!==e;return this.lastContentHash=e,t&&(this.cacheValid=!1),t}shouldRefreshCache(e,t){if(t||!this.cacheValid||!this.cacheTarget||Math.abs(e.quaternion.dot(this.cachedSourceQuaternion))<.999999||e.left!==this.cachedSourceLeft||e.right!==this.cachedSourceRight||e.top!==this.cachedSourceTop||e.bottom!==this.cachedSourceBottom)return!0;const r=e.zoom/Math.max(this.cachedSourceZoom,qi);if(r<mu||r>gu)return!0;this.tmpDelta.copy(e.position).sub(this.cachedSourcePosition);const a=Math.abs(this.tmpDelta.dot(this.cachedRightAxis)),s=Math.abs(this.tmpDelta.dot(this.cachedUpAxis)),o=Math.abs((e.right-e.left)/Math.max(e.zoom,qi))*.5,l=Math.abs((e.top-e.bottom)/Math.max(e.zoom,qi))*.5,c=Math.abs((this.cachedSourceRight-this.cachedSourceLeft)/Math.max(this.cachedSourceZoom,qi))*.5*Ni,d=Math.abs((this.cachedSourceTop-this.cachedSourceBottom)/Math.max(this.cachedSourceZoom,qi))*.5*Ni,p=c-o,u=d-l;return p<=0||u<=0?!0:a>p||s>u}refreshCache(e,t){if(!this.cacheTarget){this.cacheValid=!1;return}const n=e.getRenderTarget(),r=e.autoClear,a=e.getClearAlpha();e.getClearColor(this.tmpClearColor),this.cacheCamera.copy(t),this.cacheCamera.position.copy(t.position),this.cacheCamera.quaternion.copy(t.quaternion),this.cacheCamera.up.copy(t.up),this.cacheCamera.left=t.left,this.cacheCamera.right=t.right,this.cacheCamera.top=t.top,this.cacheCamera.bottom=t.bottom,this.cacheCamera.zoom=t.zoom/Ni,this.cacheCamera.updateProjectionMatrix(),this.cacheCamera.updateMatrixWorld(!0),this.isRefreshingCache=!0,this.setPanCacheState(!1,this.identity,this.fallbackTexture);try{e.autoClear=!0,e.setRenderTarget(this.cacheTarget),e.setClearColor(0,0),e.clear(!0,!0,!0),e.render(this.owner,this.cacheCamera),this.cacheViewProj.multiplyMatrices(this.cacheCamera.projectionMatrix,this.cacheCamera.matrixWorldInverse),this.cachedSourcePosition.copy(t.position),this.cachedSourceQuaternion.copy(t.quaternion),this.cachedRightAxis.set(1,0,0).applyQuaternion(this.cachedSourceQuaternion),this.cachedUpAxis.set(0,1,0).applyQuaternion(this.cachedSourceQuaternion),this.cachedSourceLeft=t.left,this.cachedSourceRight=t.right,this.cachedSourceTop=t.top,this.cachedSourceBottom=t.bottom,this.cachedSourceZoom=t.zoom,this.cacheValid=!0,this.invalidateRequested=!1}finally{this.isRefreshingCache=!1,e.setRenderTarget(n),e.setClearColor(this.tmpClearColor,a),e.autoClear=r}}ensureCacheTarget(e,t){const n=Math.max(1,Math.floor(t.x)),r=Math.max(1,Math.floor(t.y)),a=e.capabilities.maxTextureSize;if(a<n||a<r)return!1;const s=zl(Math.ceil(n*Ni),n,a),o=zl(Math.ceil(r*Ni),r,a);return s<=0||o<=0?!1:(this.cacheTarget&&this.cacheTarget.width===s&&this.cacheTarget.height===o||(this.cacheTarget?.dispose(),this.cacheTarget=new Jt(s,o,{depthBuffer:!0,stencilBuffer:!1}),this.cacheTarget.texture.generateMipmaps=!1,this.cacheTarget.texture.minFilter=pt,this.cacheTarget.texture.magFilter=pt,this.cacheTarget.texture.wrapS=yt,this.cacheTarget.texture.wrapT=yt,this.cacheValid=!1,this.invalidateRequested=!0),!0)}disablePanCache(){this.cacheEnabled&&(this.setPanCacheState(!1,this.identity,this.fallbackTexture),this.cacheEnabled=!1)}setPanCacheState(e,t,n){for(const r of this.materialSets)r.setPanCacheState(e,t,n)}recordCameraState(e,t){this.lastCameraWorld.copy(e.matrixWorld),this.lastCameraProjection.copy(e.projectionMatrix),this.lastViewport.copy(t),this.hasLastFrameCameraState=!0}}function Ol(i,e,t){const n=i.elements,r=e.elements;for(let a=0;a<16;a+=1)if(Math.abs(n[a]-r[a])>t)return!1;return!0}function O_(i){let e=Bl(2166136261,i);for(const t of i.children)e=Bl(e,t);return e>>>0}function Bl(i,e){let t=B_(i,e.matrixWorld.elements);const n=e;return n.instanceMatrix&&(t=Rc(t,n.instanceMatrix.version??0)),t}function B_(i,e){let t=i;for(let n=0;n<e.length;n+=1){const r=Number.isFinite(e[n])?Math.round(e[n]*1e6):0;t=Rc(t,r)}return t}function Rc(i,e){return Math.imul(i^(e|0),16777619)}function zl(i,e,t){return i<e?e:i>t?t:i}class z_{object3d;pages;pageTransforms;pageCount;pageMode;instancedPages;documentMetrics;textureMetrics;loadTiming;document;shared;options;pageMaterialSet;panCacheController;instancedMaterialSets=new Set;instancedGeometries=new Set;constructor(e,t,n,r){if(this.document=e,this.shared=t,this.options=n,this.loadTiming={...r},this.pageMode=n.pageMode,this.pageCount=e.pageCount,this.documentMetrics=G_(e),this.textureMetrics=V_(t),this.pageMode==="instanced"){this.pages=[],this.pageTransforms=e.pages.map(a=>new N_(a)),this.pageMaterialSet=null,this.instancedPages=this.createPrimaryInstancedPages(),this.object3d=this.instancedPages,this.panCacheController=new Nl(this.object3d,t.textAtlasTexture,n.panOptimization);for(const a of this.instancedMaterialSets)this.panCacheController.registerMaterialSet(a)}else{this.instancedPages=null,this.pageMaterialSet=Ul(t,n,"mesh");const a=this.pageMaterialSet;this.object3d=new ti,this.panCacheController=new Nl(this.object3d,t.textAtlasTexture,n.panOptimization),this.panCacheController.registerMaterialSet(a),this.pages=e.pages.map(s=>new F_(s,t.geometry,a.all,(o,l,c)=>{this.panCacheController.onBeforeRender(o,l,c)})),this.pageTransforms=this.pages;for(const s of this.pages)this.object3d.add(s)}}get renderObjects(){return this.instancedPages?[this.instancedPages]:this.pages}setMaterialOptions(e){this.pageMaterialSet?.setMaterialOptions(e);for(const t of this.instancedMaterialSets)t.setMaterialOptions(e);this.panCacheController.invalidate()}setPanOptimizationEnabled(e){this.panCacheController.setEnabled(e)}getWorldBounds(e=new cn){if(e.makeEmpty(),this.pageTransforms.length===0)return e;if(this.pageMode==="pages"){for(const t of this.pages)t.updateWorldMatrix(!0,!1),Hl(e,t.pageWidth,t.pageHeight,t.matrixWorld);return e}this.object3d.updateWorldMatrix(!0,!1);for(const t of this.pageTransforms)t.updateMatrix(),Vl.multiplyMatrices(this.object3d.matrixWorld,t.matrix),Hl(e,t.pageWidth,t.pageHeight,Vl);return e}dispose(){this.panCacheController.dispose(),this.pageMaterialSet?.dispose();for(const e of this.instancedMaterialSets)e.dispose();this.instancedMaterialSets.clear();for(const e of this.instancedGeometries)e.dispose();if(this.instancedGeometries.clear(),this.shared.dispose(),this.object3d instanceof ti)for(const e of[...this.object3d.children])this.object3d.remove(e)}createPrimaryInstancedPages(){const e=this.pageTransforms.map(t=>t.pageIndex);return this.createInstancedPages(e)}createInstancedPages(e){const t=e&&e.length>0?H_(e,this.pageCount):this.pageTransforms.map(a=>a.pageIndex),n=this.shared.createInstancedGeometry(t),r=Ul(this.shared,this.options,"instanced");return this.instancedMaterialSets.add(r),this.instancedGeometries.add(n),new I_(n,r.all,t,t.map(a=>this.pageTransforms[a]),(a,s,o)=>{this.panCacheController.onBeforeRender(a,s,o)})}}function G_(i){const e=i.stats;return{operatorCount:e.operatorCount,imagePaintOpCount:e.imagePaintOpCount,sourceSegmentCount:e.sourceSegmentCount,mergedSegmentCount:e.mergedSegmentCount,visibleSegmentCount:i.segmentCount,sourceTextCount:e.sourceTextCount,textInstanceCount:i.textInstanceCount,textGlyphCount:i.textGlyphCount,textGlyphSegmentCount:i.textGlyphSegmentCount,textInPageCount:e.textInPageCount,textOutOfPageCount:e.textOutOfPageCount,fillPathCount:i.fillPathCount,fillSegmentCount:i.fillSegmentCount,rasterLayerCount:i.rasterLayers.length,discardedTransparentCount:e.discardedTransparentCount,discardedDegenerateCount:e.discardedDegenerateCount,discardedDuplicateCount:e.discardedDuplicateCount,discardedContainedCount:e.discardedContainedCount,maxCellPopulation:e.maxCellPopulation,pageCount:i.pageCount}}function V_(i){return{fillPathTextureWidth:i.fillPathTextureA.width,fillPathTextureHeight:i.fillPathTextureA.height,fillSegmentTextureWidth:i.fillSegmentTextureA.width,fillSegmentTextureHeight:i.fillSegmentTextureA.height,segmentTextureWidth:i.segmentTextureA.width,segmentTextureHeight:i.segmentTextureA.height,textInstanceTextureWidth:i.textInstanceTextureA.width,textInstanceTextureHeight:i.textInstanceTextureA.height,textGlyphTextureWidth:i.textGlyphMetaTextureA.width,textGlyphTextureHeight:i.textGlyphMetaTextureA.height,textSegmentTextureWidth:i.textGlyphSegmentTextureA.width,textSegmentTextureHeight:i.textGlyphSegmentTextureA.height,rasterLayerMetaTextureWidth:i.rasterLayerMetaTextureA.width,rasterLayerMetaTextureHeight:i.rasterLayerMetaTextureA.height,rasterAtlasSizes:i.rasterAtlasSizes.map(e=>({width:e.width,height:e.height})),textAtlasWidth:i.textAtlasSize.width,textAtlasHeight:i.textAtlasSize.height,maxTextureSize:i.maxTextureSize}}function H_(i,e){const t=[],n=new Set;for(const r of i){const a=Math.trunc(r);a<0||a>=e||n.has(a)||(n.add(a),t.push(a))}if(t.length>0)return t;for(let r=0;r<e;r+=1)t.push(r);return t}const k_=[[-1,-1],[1,-1],[-1,1],[1,1]],Gl=new U,Vl=new qe;function Hl(i,e,t,n){const r=e*.5,a=t*.5;for(const[s,o]of k_)Gl.set(s*r,o*a,0).applyMatrix4(n),i.expandByPoint(Gl)}let kl=!1;async function W_(i,e={}){X_();const t=Lr(),n=S_(e),r=_u(e.onProgress);r.report(0,{stage:"source"});let a;if(n.worker!==!1)try{a=await xu(i,{maxPages:n.maxPages,extraction:n.extraction,worker:typeof n.worker=="object"?n.worker:{create:()=>new Worker(new URL(""+new URL("pdfLoadWorker-YmZWK1yB.js",import.meta.url).href,import.meta.url),{type:"module"})},progress:r.child(0,.985,{executionPath:"worker"})})}catch(p){if(n.worker!=="auto")throw p;a=await Wl(i,{maxPages:n.maxPages,extraction:n.extraction,progress:r.child(0,.985,{executionPath:"main-thread-fallback"})})}else a=await Wl(i,{maxPages:n.maxPages,extraction:n.extraction,progress:r.child(0,.985,{executionPath:"main-thread"})});const s=Lr(),o=Lr(),l=o_(a,r.child(.985,.998,{stage:"upload"})),c=Lr(),d=new z_(a,l,n,{parseMs:Math.max(0,s-t),uploadMs:Math.max(0,c-o),totalMs:Math.max(0,c-t)});return r.complete({stage:"complete"}),d}async function Wl(i,e){return Su(i,e)}function X_(){kl||(Eu.workerSrc=vu,kl=!0)}function Lr(){return typeof performance<"u"&&typeof performance.now=="function"?performance.now():Date.now()}const Pc=document.querySelector("#viewport"),fo=document.querySelector("#hud"),qr=document.querySelector("#toggle-hud"),Dc=document.querySelector("#toggle-hud-icon"),Lc=document.querySelector("#open-file"),Ai=document.querySelector("#file-input"),st=document.querySelector("#example-select"),Ic=document.querySelector("#status"),Uc=document.querySelector("#parse-loader"),Fc=document.querySelector("#parse-loader-text"),Nc=document.querySelector("#runtime"),po=document.querySelector("#metrics"),mo=document.querySelector("#metric-file"),Yr=document.querySelector("#metric-operators"),$r=document.querySelector("#metric-source-segments"),jr=document.querySelector("#metric-merged-segments"),Zr=document.querySelector("#metric-visible-segments"),Kr=document.querySelector("#metric-reductions"),Jr=document.querySelector("#metric-cull-discards"),Qr=document.querySelector("#metric-times"),Oc=document.querySelector("#metric-fps"),ea=document.querySelector("#metric-texture"),ta=document.querySelector("#metric-grid-max-cell"),Bc=document.querySelector("#load-debug"),zc=document.querySelector("#load-debug-log"),Gc=document.querySelector("#drop-indicator"),ua=document.querySelector("#toggle-pan-optimization"),Vc=document.querySelector("#toggle-segment-merge"),Hc=document.querySelector("#toggle-invisible-cull"),go=document.querySelector("#toggle-stroke-curves"),ha=document.querySelector("#toggle-vector-text-only"),kc=document.querySelector("#page-mode"),_o=document.querySelector("#page-bg-color"),da=document.querySelector("#page-bg-opacity"),Wc=document.querySelector("#page-bg-opacity-value"),xo=document.querySelector("#vector-color"),fa=document.querySelector("#vector-opacity"),Xc=document.querySelector("#vector-opacity-value");if(!Pc||!fo||!qr||!Dc||!Lc||!Ai||!st||!Ic||!Uc||!Fc||!Nc||!po||!mo||!Yr||!$r||!jr||!Zr||!Kr||!Jr||!Qr||!Oc||!ea||!ta||!Bc||!zc||!Gc||!ua||!Vc||!Hc||!go||!ha||!kc||!_o||!da||!Wc||!xo||!fa||!Xc)throw new Error("Required UI elements are missing from three-example.html.");const si=new Gg({canvas:Pc,antialias:!0,alpha:!0});si.setPixelRatio(Math.min(window.devicePixelRatio||1,2));si.setSize(window.innerWidth,window.innerHeight,!1);si.outputColorSpace=Bt;const pa=new Mh;pa.background=new Ge("#f3f5f8");const an=new aa(-1,1,1,-1,-2e3,2e3);an.position.set(0,0,100);const Qt=new t_(an,si.domElement);Qt.enableRotate=!1;Qt.enableDamping=!0;Qt.dampingFactor=.08;Qt.zoomSpeed=1.15;Qt.panSpeed=.85;Qt.screenSpacePanning=!0;const q_=new Gh(16777215,.95);pa.add(q_);const vo=new ti;pa.add(vo);let lt=null,Ui=!1,So=!1;const Qn=new Map;let es=0,Ir=0,ma=0;const qc=new URLSearchParams(window.location.search).get("loadDebug")==="1",Wt=Mu({statusElement:Ic,loaderElement:Uc,loaderTextElement:Fc,runtimeElement:Nc,fpsElement:Oc,debugElement:Bc,debugLogElement:zc},{runtimeThrottleMs:250,fpsThrottleMs:250,debugEnabled:qc,debugMaxLines:200}),Mo=Tu({enabled:qc,tag:"hepr/three",emitLine(i){console.log(i),Wt.appendDebugLine(i)},minDelta:.03,minIntervalMs:2e3});function Gn(i){Wt.setStatus(i)}function Y_(i){ma=i,So=!0,Qt.enabled=!1,Wt.setLoader(!0,"Parsing / loading 0.00%")}function $_(i,e){Wt.clearDebug(),Mo.begin(i,e)}function j_(i,e){if(i!==ma)return;Mo.update(i,e);const t=yu(e.stage),n=e.executionPath?` [${e.executionPath}]`:"",r=Math.max(0,Math.min(1,Number(e.value)||0));Wt.setLoader(!0,`${t}${n} ${(r*100).toFixed(2)}%`)}function Xl(i,e=!0){i===ma&&(So=!1,Qt.enabled=!0,Wt.setLoader(!1,""))}function ql(i,e,t){Mo.finish(i,e,t)}function Yl(i){return`${Math.max(0,Math.min(100,Math.trunc(i)))}%`}function Zs(i="-"){mo.textContent=i,Yr.textContent="-",$r.textContent="-",jr.textContent="-",Zr.textContent="-",Kr.textContent="-",Jr.textContent="-",Qr.textContent="-",ea.textContent="-",ta.textContent="-",po.dataset.ready="false",Wt.setFps("-")}function Z_(i,e){mo.textContent=i;const t=lt?lt.documentMetrics:null,n=lt?lt.textureMetrics:null,r=lt?lt.loadTiming:null;if(t){const a=Math.max(0,Number(t.sourceSegmentCount)||0),s=Math.max(0,Number(t.mergedSegmentCount)||0),o=Math.max(0,Number(t.visibleSegmentCount)||0),l=a>0?(1-s/a)*100:0,c=s>0?(1-o/s)*100:0,d=a>0?(1-o/a)*100:0;Yr.textContent=t.operatorCount.toLocaleString(),$r.textContent=a.toLocaleString(),jr.textContent=`${s.toLocaleString()} (${l.toFixed(1)}% reduction)`,Zr.textContent=`${o.toLocaleString()} (${d.toFixed(1)}% total reduction), fills ${t.fillPathCount.toLocaleString()}, text ${t.textInstanceCount.toLocaleString()} instances, pages ${t.pageCount.toLocaleString()}, raster ${t.rasterLayerCount.toLocaleString()} layers`,Kr.textContent=`merge ${l.toFixed(1)}%, invisible-cull ${c.toFixed(1)}%, total ${d.toFixed(1)}%`,Jr.textContent=`transparent ${t.discardedTransparentCount.toLocaleString()}, degenerate ${t.discardedDegenerateCount.toLocaleString()}, duplicates ${t.discardedDuplicateCount.toLocaleString()}, contained ${t.discardedContainedCount.toLocaleString()}, glyphs ${t.textGlyphCount.toLocaleString()} / glyph segments ${t.textGlyphSegmentCount.toLocaleString()}`,ta.textContent=t.maxCellPopulation.toLocaleString()}else Yr.textContent="0",$r.textContent="0",jr.textContent="0",Zr.textContent="0",Kr.textContent="0.0%",Jr.textContent="0",ta.textContent="0";if(r?Qr.textContent=`parse ${Math.max(0,r.parseMs).toFixed(0)} ms, upload ${Math.max(0,r.uploadMs).toFixed(0)} ms, total ${Math.max(0,r.totalMs).toFixed(0)} ms`:Qr.textContent=`load ${Math.max(0,e).toFixed(0)} ms`,n){const a=`${n.fillPathTextureWidth}x${n.fillPathTextureHeight}`,s=`${n.fillSegmentTextureWidth}x${n.fillSegmentTextureHeight}`,o=`${n.segmentTextureWidth}x${n.segmentTextureHeight}`,l=`${n.textInstanceTextureWidth}x${n.textInstanceTextureHeight}`,c=`${n.textGlyphTextureWidth}x${n.textGlyphTextureHeight}`,d=`${n.textSegmentTextureWidth}x${n.textSegmentTextureHeight}`,p=n.rasterAtlasSizes.length>0?n.rasterAtlasSizes.map(u=>`${u.width}x${u.height}`).join(", "):"-";ea.textContent=`fill paths ${a}, fill seg ${s}, segments ${o}, text inst ${l}, glyph ${c}, glyph-seg ${d}, raster atlas ${p}, max ${n.maxTextureSize}x${n.maxTextureSize}`}else ea.textContent="0";po.dataset.ready="true"}function K_(){const i=performance.now();if(es>0){const e=i-es;if(e>0){const t=1e3/e;Ir=Ir===0?t:Ir*.85+t*.15,Wt.setFps(`${Ir.toFixed(0)} FPS`)}}es=i}function J_(){if(!lt){Wt.setRuntime("");return}const i=si.info.render;Wt.setRuntime(`Draw calls ${i.calls.toLocaleString()} | triangles ${i.triangles.toLocaleString()} | lines ${i.lines.toLocaleString()} | points ${i.points.toLocaleString()}`)}function Yc(){const i=Math.max(0,Math.min(1,Number(da.value)/100)),e=Math.max(0,Math.min(1,Number(fa.value)/100));return{strokeCurveEnabled:go.checked,pageBackgroundColor:_o.value,pageBackgroundOpacity:i,vectorColorOverride:e>0?xo.value:null,vectorOpacityOverride:e}}function Hn(){Wc.textContent=Yl(da.value),Xc.textContent=Yl(fa.value),lt&&(lt.setPanOptimizationEnabled(ua.checked),lt.setMaterialOptions({...Yc(),textVectorOnly:ha.checked}))}function ii(){const i=Ui||!lt;Gc.classList.toggle("active",i)}function $c(i){fo.classList.toggle("collapsed",i),qr.setAttribute("aria-expanded",String(!i)),qr.title=i?"Expand panel":"Collapse panel",Dc.textContent=i?"▸":"▾"}function Q_(){lt&&(vo.remove(lt.object3d),lt.dispose(),lt=null,Wt.setRuntime(""),Wt.setFps("-"))}function ex(i){if(i.length===0)return;const e=Math.max(1,Math.ceil(Math.sqrt(i.length)));let t=0,n=0;for(const l of i)t=Math.max(t,l.pageWidth),n=Math.max(n,l.pageHeight);const r=Math.max(.2,Math.min(t,n)*.08);for(let l=0;l<i.length;l+=1){const c=i[l],d=l%e,p=Math.floor(l/e),u=d*(t+r),m=-p*(n+r);c.position.set(u,m,0),c.rotation.set(0,0,0),c.scale.set(1,1,1)}const a=Math.ceil(i.length/e),s=e*t+(e-1)*r,o=a*n+(a-1)*r;for(const l of i)l.position.x-=s*.5-t*.5,l.position.y+=o*.5-n*.5}function jc(i){const e=typeof i?.getWorldBounds=="function"?i.getWorldBounds(new cn):new cn().setFromObject(i);if(e.isEmpty())return;const t=e.getSize(new U),n=e.getCenter(new U),r=Math.max(t.x,.1),a=Math.max(t.y,.1),s=Math.max(window.innerWidth/Math.max(window.innerHeight,1),1e-6),o=1.08;let l,c;r/a>s?(l=r*o*.5,c=l/s):(c=a*o*.5,l=c*s),an.left=-l,an.right=l,an.top=c,an.bottom=-c,an.position.set(n.x,n.y,100),an.updateProjectionMatrix(),Qt.target.copy(n),Qt.update()}function Zc(i){const e=i.name.toLowerCase();return i.type==="application/pdf"||e.endsWith(".pdf")}function Kc(i){return i.name.toLowerCase().endsWith(".zip")||i.type==="application/zip"||i.type==="application/x-zip-compressed"}async function Jc(i,e){const t=ma+1;Y_(t),$_(t,e),Gn(`Loading ${e}...`),Zs(e),Q_(),ii();try{const n=performance.now();lt=await W_(i,{segmentMerge:Vc.checked,invisibleCull:Hc.checked,panOptimization:ua.checked,vectorOnly:ha.checked,pageMode:kc.value==="instanced"?"instanced":"pages",worker:"auto",onProgress:s=>{j_(t,s)},page:{depthWrite:!1,side:Zt},material:Yc()}),ex(lt.pageTransforms),vo.add(lt.object3d),jc(lt),ii();const a=performance.now()-n;Z_(e,a),Xl(t,!0),ql(t,!0),Gn(`${e} loaded | pages ${lt.pageCount.toLocaleString()} | drag to pan, wheel to zoom`)}catch(n){Xl(t,!1);const r=n instanceof Error?n.message:String(n);ql(t,!1,r),Zs(e),r.includes("v3 is unsupported")?Gn(`Failed to load ${e}: ${r}`):Gn(`Failed to load ${e}: ${r}`)}}async function Qc(i){if(!Zc(i)&&!Kc(i)){Gn(`Unsupported file type: ${i.name}`);return}await Jc(i,i.name)}function ts(i){const e=i.trim();if(/^[a-z][a-z\d+.-]*:/i.test(e))return e;const t=e.replace(/^\/+/,""),n=new URL("./",window.location.href);return new URL(t,n).toString()}function $l(i){return(Math.max(0,Number(i)||0)/1024).toFixed(1)}async function tx(){Qn.clear(),st.innerHTML="",st.append(new Option("Examples (loading...)","")),st.value="",st.disabled=!0;try{const i=ts("examples/manifest.json"),e=await fetch(i,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.json(),n=Array.isArray(t.examples)?t.examples:[];st.innerHTML="",st.append(new Option("Load example...",""));for(const r of n){if(!r||typeof r!="object")continue;const a=typeof r.name=="string"?r.name:null,s=typeof r.id=="string"?r.id:null,o=typeof r.pdf?.path=="string"?r.pdf.path:null,l=typeof r.parsedZip?.path=="string"?r.parsedZip.path:null;if(!a||!s||!o||!l)continue;const c=document.createElement("optgroup");c.label=a;const d=ts(o),p=ts(l),u=$l(r.pdf?.sizeBytes),m=$l(r.parsedZip?.sizeBytes),_=`${s}:pdf`,S=`${s}:zip`;Qn.set(_,{name:a,kind:"pdf",path:d}),Qn.set(S,{name:a,kind:"zip",path:p}),c.append(new Option(`Parse PDF (${u} kB)`,_)),c.append(new Option(`Load Parsed ZIP (${m} kB)`,S)),st.append(c)}st.disabled=Qn.size===0,st.value="",Qn.size===0&&(st.innerHTML="",st.append(new Option("Examples unavailable","")),st.disabled=!0)}catch(i){const e=i instanceof Error?i.message:String(i);console.warn(`[three-example] Failed to load examples manifest: ${e}`),st.innerHTML="",st.append(new Option("Examples unavailable","")),st.value="",st.disabled=!0}}async function nx(i){const e=Qn.get(i);if(!e){st.value="";return}st.disabled=!0;try{const t=e.kind==="pdf"?"PDF":"parsed ZIP";Gn(`Loading example ${e.name} (${t})...`);const n=e.kind==="pdf"?e.name:`${e.name} (parsed zip)`;await Jc(e.path,n)}catch(t){const n=t instanceof Error?t.message:String(t);Gn(`Failed to load example: ${n}`)}finally{st.value="",st.disabled=Qn.size===0}}function eu(){const i=Math.max(window.innerWidth,1),e=Math.max(window.innerHeight,1);si.setSize(i,e,!1),lt?jc(lt):an.updateProjectionMatrix()}function tu(){requestAnimationFrame(tu),!So&&(Qt.update(),si.render(pa,an),K_(),J_())}Lc.addEventListener("click",()=>Ai.click());qr.addEventListener("click",()=>{const i=fo.classList.contains("collapsed");$c(!i)});Ai.addEventListener("change",async()=>{const i=Ai.files&&Ai.files[0];i&&(await Qc(i),Ai.value="")});st.addEventListener("change",()=>{const i=st.value;i&&nx(i)});window.addEventListener("dragenter",i=>{i.preventDefault(),Ui=!0,ii()});window.addEventListener("dragover",i=>{i.preventDefault(),Ui||(Ui=!0,ii())});window.addEventListener("dragleave",i=>{(i.target===document.documentElement||i.target===document.body)&&(Ui=!1,ii())});window.addEventListener("drop",async i=>{i.preventDefault(),Ui=!1,ii();const t=Array.from(i.dataTransfer?.files||[]).find(n=>Zc(n)||Kc(n));if(!t){Gn("Dropped file is not a supported PDF or parsed ZIP.");return}await Qc(t)});window.addEventListener("resize",eu);ua.addEventListener("change",Hn);go.addEventListener("change",Hn);ha.addEventListener("change",Hn);_o.addEventListener("input",Hn);da.addEventListener("input",Hn);xo.addEventListener("input",Hn);fa.addEventListener("input",Hn);Hn();$c(!1);Zs();ii();eu();tx();tu();
