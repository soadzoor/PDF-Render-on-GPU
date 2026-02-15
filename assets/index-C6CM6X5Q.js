import{GlobalWorkerOptions as Ea}from"./pdf-TYrZqVzP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();var Ne=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ia(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Ue(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var gn={exports:{}};var nr;function Pa(){return nr||(nr=1,(function(n,t){(function(e){n.exports=e()})(function(){return(function e(a,s,i){function r(c,g){if(!s[c]){if(!a[c]){var p=typeof Ue=="function"&&Ue;if(!g&&p)return p(c,!0);if(o)return o(c,!0);var y=new Error("Cannot find module '"+c+"'");throw y.code="MODULE_NOT_FOUND",y}var f=s[c]={exports:{}};a[c][0].call(f.exports,function(v){var d=a[c][1][v];return r(d||v)},f,f.exports,e,a,s,i)}return s[c].exports}for(var o=typeof Ue=="function"&&Ue,l=0;l<i.length;l++)r(i[l]);return r})({1:[function(e,a,s){var i=e("./utils"),r=e("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";s.encode=function(l){for(var c,g,p,y,f,v,d,m=[],x=0,b=l.length,_=b,M=i.getTypeOf(l)!=="string";x<l.length;)_=b-x,p=M?(c=l[x++],g=x<b?l[x++]:0,x<b?l[x++]:0):(c=l.charCodeAt(x++),g=x<b?l.charCodeAt(x++):0,x<b?l.charCodeAt(x++):0),y=c>>2,f=(3&c)<<4|g>>4,v=1<_?(15&g)<<2|p>>6:64,d=2<_?63&p:64,m.push(o.charAt(y)+o.charAt(f)+o.charAt(v)+o.charAt(d));return m.join("")},s.decode=function(l){var c,g,p,y,f,v,d=0,m=0,x="data:";if(l.substr(0,x.length)===x)throw new Error("Invalid base64 input, it looks like a data url.");var b,_=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===o.charAt(64)&&_--,l.charAt(l.length-2)===o.charAt(64)&&_--,_%1!=0)throw new Error("Invalid base64 input, bad content length.");for(b=r.uint8array?new Uint8Array(0|_):new Array(0|_);d<l.length;)c=o.indexOf(l.charAt(d++))<<2|(y=o.indexOf(l.charAt(d++)))>>4,g=(15&y)<<4|(f=o.indexOf(l.charAt(d++)))>>2,p=(3&f)<<6|(v=o.indexOf(l.charAt(d++))),b[m++]=c,f!==64&&(b[m++]=g),v!==64&&(b[m++]=p);return b}},{"./support":30,"./utils":32}],2:[function(e,a,s){var i=e("./external"),r=e("./stream/DataWorker"),o=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function c(g,p,y,f,v){this.compressedSize=g,this.uncompressedSize=p,this.crc32=y,this.compression=f,this.compressedContent=v}c.prototype={getContentWorker:function(){var g=new r(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),p=this;return g.on("end",function(){if(this.streamInfo.data_length!==p.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),g},getCompressedWorker:function(){return new r(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(g,p,y){return g.pipe(new o).pipe(new l("uncompressedSize")).pipe(p.compressWorker(y)).pipe(new l("compressedSize")).withStreamInfo("compression",p)},a.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,a,s){var i=e("./stream/GenericWorker");s.STORE={magic:"\0\0",compressWorker:function(){return new i("STORE compression")},uncompressWorker:function(){return new i("STORE decompression")}},s.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,a,s){var i=e("./utils"),r=(function(){for(var o,l=[],c=0;c<256;c++){o=c;for(var g=0;g<8;g++)o=1&o?3988292384^o>>>1:o>>>1;l[c]=o}return l})();a.exports=function(o,l){return o!==void 0&&o.length?i.getTypeOf(o)!=="string"?(function(c,g,p,y){var f=r,v=y+p;c^=-1;for(var d=y;d<v;d++)c=c>>>8^f[255&(c^g[d])];return-1^c})(0|l,o,o.length,0):(function(c,g,p,y){var f=r,v=y+p;c^=-1;for(var d=y;d<v;d++)c=c>>>8^f[255&(c^g.charCodeAt(d))];return-1^c})(0|l,o,o.length,0):0}},{"./utils":32}],5:[function(e,a,s){s.base64=!1,s.binary=!1,s.dir=!1,s.createFolders=!0,s.date=null,s.compression=null,s.compressionOptions=null,s.comment=null,s.unixPermissions=null,s.dosPermissions=null},{}],6:[function(e,a,s){var i=null;i=typeof Promise<"u"?Promise:e("lie"),a.exports={Promise:i}},{lie:37}],7:[function(e,a,s){var i=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",r=e("pako"),o=e("./utils"),l=e("./stream/GenericWorker"),c=i?"uint8array":"array";function g(p,y){l.call(this,"FlateWorker/"+p),this._pako=null,this._pakoAction=p,this._pakoOptions=y,this.meta={}}s.magic="\b\0",o.inherits(g,l),g.prototype.processChunk=function(p){this.meta=p.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(c,p.data),!1)},g.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},g.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},g.prototype._createPako=function(){this._pako=new r[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var p=this;this._pako.onData=function(y){p.push({data:y,meta:p.meta})}},s.compressWorker=function(p){return new g("Deflate",p)},s.uncompressWorker=function(){return new g("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,a,s){function i(f,v){var d,m="";for(d=0;d<v;d++)m+=String.fromCharCode(255&f),f>>>=8;return m}function r(f,v,d,m,x,b){var _,M,w=f.file,A=f.compression,L=b!==c.utf8encode,G=o.transformTo("string",b(w.name)),P=o.transformTo("string",c.utf8encode(w.name)),I=w.comment,V=o.transformTo("string",b(I)),C=o.transformTo("string",c.utf8encode(I)),F=P.length!==w.name.length,u=C.length!==I.length,B="",$="",N="",J=w.dir,X=w.date,j={crc32:0,compressedSize:0,uncompressedSize:0};v&&!d||(j.crc32=f.crc32,j.compressedSize=f.compressedSize,j.uncompressedSize=f.uncompressedSize);var D=0;v&&(D|=8),L||!F&&!u||(D|=2048);var k=0,et=0;J&&(k|=16),x==="UNIX"?(et=798,k|=(function(Q,ot){var ct=Q;return Q||(ct=ot?16893:33204),(65535&ct)<<16})(w.unixPermissions,J)):(et=20,k|=(function(Q){return 63&(Q||0)})(w.dosPermissions)),_=X.getUTCHours(),_<<=6,_|=X.getUTCMinutes(),_<<=5,_|=X.getUTCSeconds()/2,M=X.getUTCFullYear()-1980,M<<=4,M|=X.getUTCMonth()+1,M<<=5,M|=X.getUTCDate(),F&&($=i(1,1)+i(g(G),4)+P,B+="up"+i($.length,2)+$),u&&(N=i(1,1)+i(g(V),4)+C,B+="uc"+i(N.length,2)+N);var Z="";return Z+=`
\0`,Z+=i(D,2),Z+=A.magic,Z+=i(_,2),Z+=i(M,2),Z+=i(j.crc32,4),Z+=i(j.compressedSize,4),Z+=i(j.uncompressedSize,4),Z+=i(G.length,2),Z+=i(B.length,2),{fileRecord:p.LOCAL_FILE_HEADER+Z+G+B,dirRecord:p.CENTRAL_FILE_HEADER+i(et,2)+Z+i(V.length,2)+"\0\0\0\0"+i(k,4)+i(m,4)+G+B+V}}var o=e("../utils"),l=e("../stream/GenericWorker"),c=e("../utf8"),g=e("../crc32"),p=e("../signature");function y(f,v,d,m){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=v,this.zipPlatform=d,this.encodeFileName=m,this.streamFiles=f,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(y,l),y.prototype.push=function(f){var v=f.meta.percent||0,d=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(f):(this.bytesWritten+=f.data.length,l.prototype.push.call(this,{data:f.data,meta:{currentFile:this.currentFile,percent:d?(v+100*(d-m-1))/d:100}}))},y.prototype.openedSource=function(f){this.currentSourceOffset=this.bytesWritten,this.currentFile=f.file.name;var v=this.streamFiles&&!f.file.dir;if(v){var d=r(f,v,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:d.fileRecord,meta:{percent:0}})}else this.accumulate=!0},y.prototype.closedSource=function(f){this.accumulate=!1;var v=this.streamFiles&&!f.file.dir,d=r(f,v,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(d.dirRecord),v)this.push({data:(function(m){return p.DATA_DESCRIPTOR+i(m.crc32,4)+i(m.compressedSize,4)+i(m.uncompressedSize,4)})(f),meta:{percent:100}});else for(this.push({data:d.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},y.prototype.flush=function(){for(var f=this.bytesWritten,v=0;v<this.dirRecords.length;v++)this.push({data:this.dirRecords[v],meta:{percent:100}});var d=this.bytesWritten-f,m=(function(x,b,_,M,w){var A=o.transformTo("string",w(M));return p.CENTRAL_DIRECTORY_END+"\0\0\0\0"+i(x,2)+i(x,2)+i(b,4)+i(_,4)+i(A.length,2)+A})(this.dirRecords.length,d,f,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},y.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},y.prototype.registerPrevious=function(f){this._sources.push(f);var v=this;return f.on("data",function(d){v.processChunk(d)}),f.on("end",function(){v.closedSource(v.previous.streamInfo),v._sources.length?v.prepareNextSource():v.end()}),f.on("error",function(d){v.error(d)}),this},y.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},y.prototype.error=function(f){var v=this._sources;if(!l.prototype.error.call(this,f))return!1;for(var d=0;d<v.length;d++)try{v[d].error(f)}catch{}return!0},y.prototype.lock=function(){l.prototype.lock.call(this);for(var f=this._sources,v=0;v<f.length;v++)f[v].lock()},a.exports=y},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,a,s){var i=e("../compressions"),r=e("./ZipFileWorker");s.generateWorker=function(o,l,c){var g=new r(l.streamFiles,c,l.platform,l.encodeFileName),p=0;try{o.forEach(function(y,f){p++;var v=(function(b,_){var M=b||_,w=i[M];if(!w)throw new Error(M+" is not a valid compression method !");return w})(f.options.compression,l.compression),d=f.options.compressionOptions||l.compressionOptions||{},m=f.dir,x=f.date;f._compressWorker(v,d).withStreamInfo("file",{name:y,dir:m,date:x,comment:f.comment||"",unixPermissions:f.unixPermissions,dosPermissions:f.dosPermissions}).pipe(g)}),g.entriesCount=p}catch(y){g.error(y)}return g}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,a,s){function i(){if(!(this instanceof i))return new i;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var r=new i;for(var o in this)typeof this[o]!="function"&&(r[o]=this[o]);return r}}(i.prototype=e("./object")).loadAsync=e("./load"),i.support=e("./support"),i.defaults=e("./defaults"),i.version="3.10.1",i.loadAsync=function(r,o){return new i().loadAsync(r,o)},i.external=e("./external"),a.exports=i},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,a,s){var i=e("./utils"),r=e("./external"),o=e("./utf8"),l=e("./zipEntries"),c=e("./stream/Crc32Probe"),g=e("./nodejsUtils");function p(y){return new r.Promise(function(f,v){var d=y.decompressed.getContentWorker().pipe(new c);d.on("error",function(m){v(m)}).on("end",function(){d.streamInfo.crc32!==y.decompressed.crc32?v(new Error("Corrupted zip : CRC32 mismatch")):f()}).resume()})}a.exports=function(y,f){var v=this;return f=i.extend(f||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),g.isNode&&g.isStream(y)?r.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):i.prepareContent("the loaded zip file",y,!0,f.optimizedBinaryString,f.base64).then(function(d){var m=new l(f);return m.load(d),m}).then(function(d){var m=[r.Promise.resolve(d)],x=d.files;if(f.checkCRC32)for(var b=0;b<x.length;b++)m.push(p(x[b]));return r.Promise.all(m)}).then(function(d){for(var m=d.shift(),x=m.files,b=0;b<x.length;b++){var _=x[b],M=_.fileNameStr,w=i.resolve(_.fileNameStr);v.file(w,_.decompressed,{binary:!0,optimizedBinaryString:!0,date:_.date,dir:_.dir,comment:_.fileCommentStr.length?_.fileCommentStr:null,unixPermissions:_.unixPermissions,dosPermissions:_.dosPermissions,createFolders:f.createFolders}),_.dir||(v.file(w).unsafeOriginalName=M)}return m.zipComment.length&&(v.comment=m.zipComment),v})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,a,s){var i=e("../utils"),r=e("../stream/GenericWorker");function o(l,c){r.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}i.inherits(o,r),o.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(g){c.push({data:g,meta:{percent:0}})}).on("error",function(g){c.isPaused?this.generatedError=g:c.error(g)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},o.prototype.pause=function(){return!!r.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!r.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},a.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,a,s){var i=e("readable-stream").Readable;function r(o,l,c){i.call(this,l),this._helper=o;var g=this;o.on("data",function(p,y){g.push(p)||g._helper.pause(),c&&c(y)}).on("error",function(p){g.emit("error",p)}).on("end",function(){g.push(null)})}e("../utils").inherits(r,i),r.prototype._read=function(){this._helper.resume()},a.exports=r},{"../utils":32,"readable-stream":16}],14:[function(e,a,s){a.exports={isNode:typeof Buffer<"u",newBufferFrom:function(i,r){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(i,r);if(typeof i=="number")throw new Error('The "data" argument must not be a number');return new Buffer(i,r)},allocBuffer:function(i){if(Buffer.alloc)return Buffer.alloc(i);var r=new Buffer(i);return r.fill(0),r},isBuffer:function(i){return Buffer.isBuffer(i)},isStream:function(i){return i&&typeof i.on=="function"&&typeof i.pause=="function"&&typeof i.resume=="function"}}},{}],15:[function(e,a,s){function i(w,A,L){var G,P=o.getTypeOf(A),I=o.extend(L||{},g);I.date=I.date||new Date,I.compression!==null&&(I.compression=I.compression.toUpperCase()),typeof I.unixPermissions=="string"&&(I.unixPermissions=parseInt(I.unixPermissions,8)),I.unixPermissions&&16384&I.unixPermissions&&(I.dir=!0),I.dosPermissions&&16&I.dosPermissions&&(I.dir=!0),I.dir&&(w=x(w)),I.createFolders&&(G=m(w))&&b.call(this,G,!0);var V=P==="string"&&I.binary===!1&&I.base64===!1;L&&L.binary!==void 0||(I.binary=!V),(A instanceof p&&A.uncompressedSize===0||I.dir||!A||A.length===0)&&(I.base64=!1,I.binary=!0,A="",I.compression="STORE",P="string");var C=null;C=A instanceof p||A instanceof l?A:v.isNode&&v.isStream(A)?new d(w,A):o.prepareContent(w,A,I.binary,I.optimizedBinaryString,I.base64);var F=new y(w,C,I);this.files[w]=F}var r=e("./utf8"),o=e("./utils"),l=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),g=e("./defaults"),p=e("./compressedObject"),y=e("./zipObject"),f=e("./generate"),v=e("./nodejsUtils"),d=e("./nodejs/NodejsStreamInputAdapter"),m=function(w){w.slice(-1)==="/"&&(w=w.substring(0,w.length-1));var A=w.lastIndexOf("/");return 0<A?w.substring(0,A):""},x=function(w){return w.slice(-1)!=="/"&&(w+="/"),w},b=function(w,A){return A=A!==void 0?A:g.createFolders,w=x(w),this.files[w]||i.call(this,w,null,{dir:!0,createFolders:A}),this.files[w]};function _(w){return Object.prototype.toString.call(w)==="[object RegExp]"}var M={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(w){var A,L,G;for(A in this.files)G=this.files[A],(L=A.slice(this.root.length,A.length))&&A.slice(0,this.root.length)===this.root&&w(L,G)},filter:function(w){var A=[];return this.forEach(function(L,G){w(L,G)&&A.push(G)}),A},file:function(w,A,L){if(arguments.length!==1)return w=this.root+w,i.call(this,w,A,L),this;if(_(w)){var G=w;return this.filter(function(I,V){return!V.dir&&G.test(I)})}var P=this.files[this.root+w];return P&&!P.dir?P:null},folder:function(w){if(!w)return this;if(_(w))return this.filter(function(P,I){return I.dir&&w.test(P)});var A=this.root+w,L=b.call(this,A),G=this.clone();return G.root=L.name,G},remove:function(w){w=this.root+w;var A=this.files[w];if(A||(w.slice(-1)!=="/"&&(w+="/"),A=this.files[w]),A&&!A.dir)delete this.files[w];else for(var L=this.filter(function(P,I){return I.name.slice(0,w.length)===w}),G=0;G<L.length;G++)delete this.files[L[G].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(w){var A,L={};try{if((L=o.extend(w||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:r.utf8encode})).type=L.type.toLowerCase(),L.compression=L.compression.toUpperCase(),L.type==="binarystring"&&(L.type="string"),!L.type)throw new Error("No output type specified.");o.checkSupport(L.type),L.platform!=="darwin"&&L.platform!=="freebsd"&&L.platform!=="linux"&&L.platform!=="sunos"||(L.platform="UNIX"),L.platform==="win32"&&(L.platform="DOS");var G=L.comment||this.comment||"";A=f.generateWorker(this,L,G)}catch(P){(A=new l("error")).error(P)}return new c(A,L.type||"string",L.mimeType)},generateAsync:function(w,A){return this.generateInternalStream(w).accumulate(A)},generateNodeStream:function(w,A){return(w=w||{}).type||(w.type="nodebuffer"),this.generateInternalStream(w).toNodejsStream(A)}};a.exports=M},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,a,s){a.exports=e("stream")},{stream:void 0}],17:[function(e,a,s){var i=e("./DataReader");function r(o){i.call(this,o);for(var l=0;l<this.data.length;l++)o[l]=255&o[l]}e("../utils").inherits(r,i),r.prototype.byteAt=function(o){return this.data[this.zero+o]},r.prototype.lastIndexOfSignature=function(o){for(var l=o.charCodeAt(0),c=o.charCodeAt(1),g=o.charCodeAt(2),p=o.charCodeAt(3),y=this.length-4;0<=y;--y)if(this.data[y]===l&&this.data[y+1]===c&&this.data[y+2]===g&&this.data[y+3]===p)return y-this.zero;return-1},r.prototype.readAndCheckSignature=function(o){var l=o.charCodeAt(0),c=o.charCodeAt(1),g=o.charCodeAt(2),p=o.charCodeAt(3),y=this.readData(4);return l===y[0]&&c===y[1]&&g===y[2]&&p===y[3]},r.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},a.exports=r},{"../utils":32,"./DataReader":18}],18:[function(e,a,s){var i=e("../utils");function r(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}r.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var l,c=0;for(this.checkOffset(o),l=this.index+o-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=o,c},readString:function(o){return i.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},a.exports=r},{"../utils":32}],19:[function(e,a,s){var i=e("./Uint8ArrayReader");function r(o){i.call(this,o)}e("../utils").inherits(r,i),r.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},a.exports=r},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,a,s){var i=e("./DataReader");function r(o){i.call(this,o)}e("../utils").inherits(r,i),r.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},r.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},r.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},r.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},a.exports=r},{"../utils":32,"./DataReader":18}],21:[function(e,a,s){var i=e("./ArrayReader");function r(o){i.call(this,o)}e("../utils").inherits(r,i),r.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},a.exports=r},{"../utils":32,"./ArrayReader":17}],22:[function(e,a,s){var i=e("../utils"),r=e("../support"),o=e("./ArrayReader"),l=e("./StringReader"),c=e("./NodeBufferReader"),g=e("./Uint8ArrayReader");a.exports=function(p){var y=i.getTypeOf(p);return i.checkSupport(y),y!=="string"||r.uint8array?y==="nodebuffer"?new c(p):r.uint8array?new g(i.transformTo("uint8array",p)):new o(i.transformTo("array",p)):new l(p)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,a,s){s.LOCAL_FILE_HEADER="PK",s.CENTRAL_FILE_HEADER="PK",s.CENTRAL_DIRECTORY_END="PK",s.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",s.ZIP64_CENTRAL_DIRECTORY_END="PK",s.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,a,s){var i=e("./GenericWorker"),r=e("../utils");function o(l){i.call(this,"ConvertWorker to "+l),this.destType=l}r.inherits(o,i),o.prototype.processChunk=function(l){this.push({data:r.transformTo(this.destType,l.data),meta:l.meta})},a.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(e,a,s){var i=e("./GenericWorker"),r=e("../crc32");function o(){i.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(o,i),o.prototype.processChunk=function(l){this.streamInfo.crc32=r(l.data,this.streamInfo.crc32||0),this.push(l)},a.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,a,s){var i=e("../utils"),r=e("./GenericWorker");function o(l){r.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}i.inherits(o,r),o.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}r.prototype.processChunk.call(this,l)},a.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(e,a,s){var i=e("../utils"),r=e("./GenericWorker");function o(l){r.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(g){c.dataIsReady=!0,c.data=g,c.max=g&&g.length||0,c.type=i.getTypeOf(g),c.isPaused||c._tickAndRepeat()},function(g){c.error(g)})}i.inherits(o,r),o.prototype.cleanUp=function(){r.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!r.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,i.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(i.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},a.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(e,a,s){function i(r){this.name=r||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}i.prototype={push:function(r){this.emit("data",r)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(r){this.emit("error",r)}return!0},error:function(r){return!this.isFinished&&(this.isPaused?this.generatedError=r:(this.isFinished=!0,this.emit("error",r),this.previous&&this.previous.error(r),this.cleanUp()),!0)},on:function(r,o){return this._listeners[r].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(r,o){if(this._listeners[r])for(var l=0;l<this._listeners[r].length;l++)this._listeners[r][l].call(this,o)},pipe:function(r){return r.registerPrevious(this)},registerPrevious:function(r){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=r.streamInfo,this.mergeStreamInfo(),this.previous=r;var o=this;return r.on("data",function(l){o.processChunk(l)}),r.on("end",function(){o.end()}),r.on("error",function(l){o.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var r=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),r=!0),this.previous&&this.previous.resume(),!r},flush:function(){},processChunk:function(r){this.push(r)},withStreamInfo:function(r,o){return this.extraStreamInfo[r]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var r in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,r)&&(this.streamInfo[r]=this.extraStreamInfo[r])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var r="Worker "+this.name;return this.previous?this.previous+" -> "+r:r}},a.exports=i},{}],29:[function(e,a,s){var i=e("../utils"),r=e("./ConvertWorker"),o=e("./GenericWorker"),l=e("../base64"),c=e("../support"),g=e("../external"),p=null;if(c.nodestream)try{p=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function y(v,d){return new g.Promise(function(m,x){var b=[],_=v._internalType,M=v._outputType,w=v._mimeType;v.on("data",function(A,L){b.push(A),d&&d(L)}).on("error",function(A){b=[],x(A)}).on("end",function(){try{var A=(function(L,G,P){switch(L){case"blob":return i.newBlob(i.transformTo("arraybuffer",G),P);case"base64":return l.encode(G);default:return i.transformTo(L,G)}})(M,(function(L,G){var P,I=0,V=null,C=0;for(P=0;P<G.length;P++)C+=G[P].length;switch(L){case"string":return G.join("");case"array":return Array.prototype.concat.apply([],G);case"uint8array":for(V=new Uint8Array(C),P=0;P<G.length;P++)V.set(G[P],I),I+=G[P].length;return V;case"nodebuffer":return Buffer.concat(G);default:throw new Error("concat : unsupported type '"+L+"'")}})(_,b),w);m(A)}catch(L){x(L)}b=[]}).resume()})}function f(v,d,m){var x=d;switch(d){case"blob":case"arraybuffer":x="uint8array";break;case"base64":x="string"}try{this._internalType=x,this._outputType=d,this._mimeType=m,i.checkSupport(x),this._worker=v.pipe(new r(x)),v.lock()}catch(b){this._worker=new o("error"),this._worker.error(b)}}f.prototype={accumulate:function(v){return y(this,v)},on:function(v,d){var m=this;return v==="data"?this._worker.on(v,function(x){d.call(m,x.data,x.meta)}):this._worker.on(v,function(){i.delay(d,arguments,m)}),this},resume:function(){return i.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(v){if(i.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new p(this,{objectMode:this._outputType!=="nodebuffer"},v)}},a.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,a,s){if(s.base64=!0,s.array=!0,s.string=!0,s.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",s.nodebuffer=typeof Buffer<"u",s.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")s.blob=!1;else{var i=new ArrayBuffer(0);try{s.blob=new Blob([i],{type:"application/zip"}).size===0}catch{try{var r=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);r.append(i),s.blob=r.getBlob("application/zip").size===0}catch{s.blob=!1}}}try{s.nodestream=!!e("readable-stream").Readable}catch{s.nodestream=!1}},{"readable-stream":16}],31:[function(e,a,s){for(var i=e("./utils"),r=e("./support"),o=e("./nodejsUtils"),l=e("./stream/GenericWorker"),c=new Array(256),g=0;g<256;g++)c[g]=252<=g?6:248<=g?5:240<=g?4:224<=g?3:192<=g?2:1;c[254]=c[254]=1;function p(){l.call(this,"utf-8 decode"),this.leftOver=null}function y(){l.call(this,"utf-8 encode")}s.utf8encode=function(f){return r.nodebuffer?o.newBufferFrom(f,"utf-8"):(function(v){var d,m,x,b,_,M=v.length,w=0;for(b=0;b<M;b++)(64512&(m=v.charCodeAt(b)))==55296&&b+1<M&&(64512&(x=v.charCodeAt(b+1)))==56320&&(m=65536+(m-55296<<10)+(x-56320),b++),w+=m<128?1:m<2048?2:m<65536?3:4;for(d=r.uint8array?new Uint8Array(w):new Array(w),b=_=0;_<w;b++)(64512&(m=v.charCodeAt(b)))==55296&&b+1<M&&(64512&(x=v.charCodeAt(b+1)))==56320&&(m=65536+(m-55296<<10)+(x-56320),b++),m<128?d[_++]=m:(m<2048?d[_++]=192|m>>>6:(m<65536?d[_++]=224|m>>>12:(d[_++]=240|m>>>18,d[_++]=128|m>>>12&63),d[_++]=128|m>>>6&63),d[_++]=128|63&m);return d})(f)},s.utf8decode=function(f){return r.nodebuffer?i.transformTo("nodebuffer",f).toString("utf-8"):(function(v){var d,m,x,b,_=v.length,M=new Array(2*_);for(d=m=0;d<_;)if((x=v[d++])<128)M[m++]=x;else if(4<(b=c[x]))M[m++]=65533,d+=b-1;else{for(x&=b===2?31:b===3?15:7;1<b&&d<_;)x=x<<6|63&v[d++],b--;1<b?M[m++]=65533:x<65536?M[m++]=x:(x-=65536,M[m++]=55296|x>>10&1023,M[m++]=56320|1023&x)}return M.length!==m&&(M.subarray?M=M.subarray(0,m):M.length=m),i.applyFromCharCode(M)})(f=i.transformTo(r.uint8array?"uint8array":"array",f))},i.inherits(p,l),p.prototype.processChunk=function(f){var v=i.transformTo(r.uint8array?"uint8array":"array",f.data);if(this.leftOver&&this.leftOver.length){if(r.uint8array){var d=v;(v=new Uint8Array(d.length+this.leftOver.length)).set(this.leftOver,0),v.set(d,this.leftOver.length)}else v=this.leftOver.concat(v);this.leftOver=null}var m=(function(b,_){var M;for((_=_||b.length)>b.length&&(_=b.length),M=_-1;0<=M&&(192&b[M])==128;)M--;return M<0||M===0?_:M+c[b[M]]>_?M:_})(v),x=v;m!==v.length&&(r.uint8array?(x=v.subarray(0,m),this.leftOver=v.subarray(m,v.length)):(x=v.slice(0,m),this.leftOver=v.slice(m,v.length))),this.push({data:s.utf8decode(x),meta:f.meta})},p.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=p,i.inherits(y,l),y.prototype.processChunk=function(f){this.push({data:s.utf8encode(f.data),meta:f.meta})},s.Utf8EncodeWorker=y},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,a,s){var i=e("./support"),r=e("./base64"),o=e("./nodejsUtils"),l=e("./external");function c(d){return d}function g(d,m){for(var x=0;x<d.length;++x)m[x]=255&d.charCodeAt(x);return m}e("setimmediate"),s.newBlob=function(d,m){s.checkSupport("blob");try{return new Blob([d],{type:m})}catch{try{var x=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return x.append(d),x.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var p={stringifyByChunk:function(d,m,x){var b=[],_=0,M=d.length;if(M<=x)return String.fromCharCode.apply(null,d);for(;_<M;)m==="array"||m==="nodebuffer"?b.push(String.fromCharCode.apply(null,d.slice(_,Math.min(_+x,M)))):b.push(String.fromCharCode.apply(null,d.subarray(_,Math.min(_+x,M)))),_+=x;return b.join("")},stringifyByChar:function(d){for(var m="",x=0;x<d.length;x++)m+=String.fromCharCode(d[x]);return m},applyCanBeUsed:{uint8array:(function(){try{return i.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return i.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}})()}};function y(d){var m=65536,x=s.getTypeOf(d),b=!0;if(x==="uint8array"?b=p.applyCanBeUsed.uint8array:x==="nodebuffer"&&(b=p.applyCanBeUsed.nodebuffer),b)for(;1<m;)try{return p.stringifyByChunk(d,x,m)}catch{m=Math.floor(m/2)}return p.stringifyByChar(d)}function f(d,m){for(var x=0;x<d.length;x++)m[x]=d[x];return m}s.applyFromCharCode=y;var v={};v.string={string:c,array:function(d){return g(d,new Array(d.length))},arraybuffer:function(d){return v.string.uint8array(d).buffer},uint8array:function(d){return g(d,new Uint8Array(d.length))},nodebuffer:function(d){return g(d,o.allocBuffer(d.length))}},v.array={string:y,array:c,arraybuffer:function(d){return new Uint8Array(d).buffer},uint8array:function(d){return new Uint8Array(d)},nodebuffer:function(d){return o.newBufferFrom(d)}},v.arraybuffer={string:function(d){return y(new Uint8Array(d))},array:function(d){return f(new Uint8Array(d),new Array(d.byteLength))},arraybuffer:c,uint8array:function(d){return new Uint8Array(d)},nodebuffer:function(d){return o.newBufferFrom(new Uint8Array(d))}},v.uint8array={string:y,array:function(d){return f(d,new Array(d.length))},arraybuffer:function(d){return d.buffer},uint8array:c,nodebuffer:function(d){return o.newBufferFrom(d)}},v.nodebuffer={string:y,array:function(d){return f(d,new Array(d.length))},arraybuffer:function(d){return v.nodebuffer.uint8array(d).buffer},uint8array:function(d){return f(d,new Uint8Array(d.length))},nodebuffer:c},s.transformTo=function(d,m){if(m=m||"",!d)return m;s.checkSupport(d);var x=s.getTypeOf(m);return v[x][d](m)},s.resolve=function(d){for(var m=d.split("/"),x=[],b=0;b<m.length;b++){var _=m[b];_==="."||_===""&&b!==0&&b!==m.length-1||(_===".."?x.pop():x.push(_))}return x.join("/")},s.getTypeOf=function(d){return typeof d=="string"?"string":Object.prototype.toString.call(d)==="[object Array]"?"array":i.nodebuffer&&o.isBuffer(d)?"nodebuffer":i.uint8array&&d instanceof Uint8Array?"uint8array":i.arraybuffer&&d instanceof ArrayBuffer?"arraybuffer":void 0},s.checkSupport=function(d){if(!i[d.toLowerCase()])throw new Error(d+" is not supported by this platform")},s.MAX_VALUE_16BITS=65535,s.MAX_VALUE_32BITS=-1,s.pretty=function(d){var m,x,b="";for(x=0;x<(d||"").length;x++)b+="\\x"+((m=d.charCodeAt(x))<16?"0":"")+m.toString(16).toUpperCase();return b},s.delay=function(d,m,x){setImmediate(function(){d.apply(x||null,m||[])})},s.inherits=function(d,m){function x(){}x.prototype=m.prototype,d.prototype=new x},s.extend=function(){var d,m,x={};for(d=0;d<arguments.length;d++)for(m in arguments[d])Object.prototype.hasOwnProperty.call(arguments[d],m)&&x[m]===void 0&&(x[m]=arguments[d][m]);return x},s.prepareContent=function(d,m,x,b,_){return l.Promise.resolve(m).then(function(M){return i.blob&&(M instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(M))!==-1)&&typeof FileReader<"u"?new l.Promise(function(w,A){var L=new FileReader;L.onload=function(G){w(G.target.result)},L.onerror=function(G){A(G.target.error)},L.readAsArrayBuffer(M)}):M}).then(function(M){var w=s.getTypeOf(M);return w?(w==="arraybuffer"?M=s.transformTo("uint8array",M):w==="string"&&(_?M=r.decode(M):x&&b!==!0&&(M=(function(A){return g(A,i.uint8array?new Uint8Array(A.length):new Array(A.length))})(M))),M):l.Promise.reject(new Error("Can't read the data of '"+d+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,a,s){var i=e("./reader/readerFor"),r=e("./utils"),o=e("./signature"),l=e("./zipEntry"),c=e("./support");function g(p){this.files=[],this.loadOptions=p}g.prototype={checkSignature:function(p){if(!this.reader.readAndCheckSignature(p)){this.reader.index-=4;var y=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+r.pretty(y)+", expected "+r.pretty(p)+")")}},isSignature:function(p,y){var f=this.reader.index;this.reader.setIndex(p);var v=this.reader.readString(4)===y;return this.reader.setIndex(f),v},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var p=this.reader.readData(this.zipCommentLength),y=c.uint8array?"uint8array":"array",f=r.transformTo(y,p);this.zipComment=this.loadOptions.decodeFileName(f)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var p,y,f,v=this.zip64EndOfCentralSize-44;0<v;)p=this.reader.readInt(2),y=this.reader.readInt(4),f=this.reader.readData(y),this.zip64ExtensibleData[p]={id:p,length:y,value:f}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var p,y;for(p=0;p<this.files.length;p++)y=this.files[p],this.reader.setIndex(y.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),y.readLocalPart(this.reader),y.handleUTF8(),y.processAttributes()},readCentralDir:function(){var p;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(p=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(p);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var p=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(p<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(p);var y=p;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===r.MAX_VALUE_16BITS||this.diskWithCentralDirStart===r.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===r.MAX_VALUE_16BITS||this.centralDirRecords===r.MAX_VALUE_16BITS||this.centralDirSize===r.MAX_VALUE_32BITS||this.centralDirOffset===r.MAX_VALUE_32BITS){if(this.zip64=!0,(p=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(p),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var f=this.centralDirOffset+this.centralDirSize;this.zip64&&(f+=20,f+=12+this.zip64EndOfCentralSize);var v=y-f;if(0<v)this.isSignature(y,o.CENTRAL_FILE_HEADER)||(this.reader.zero=v);else if(v<0)throw new Error("Corrupted zip: missing "+Math.abs(v)+" bytes.")},prepareReader:function(p){this.reader=i(p)},load:function(p){this.prepareReader(p),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},a.exports=g},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,a,s){var i=e("./reader/readerFor"),r=e("./utils"),o=e("./compressedObject"),l=e("./crc32"),c=e("./utf8"),g=e("./compressions"),p=e("./support");function y(f,v){this.options=f,this.loadOptions=v}y.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(f){var v,d;if(f.skip(22),this.fileNameLength=f.readInt(2),d=f.readInt(2),this.fileName=f.readData(this.fileNameLength),f.skip(d),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((v=(function(m){for(var x in g)if(Object.prototype.hasOwnProperty.call(g,x)&&g[x].magic===m)return g[x];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+r.pretty(this.compressionMethod)+" unknown (inner file : "+r.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,v,f.readData(this.compressedSize))},readCentralPart:function(f){this.versionMadeBy=f.readInt(2),f.skip(2),this.bitFlag=f.readInt(2),this.compressionMethod=f.readString(2),this.date=f.readDate(),this.crc32=f.readInt(4),this.compressedSize=f.readInt(4),this.uncompressedSize=f.readInt(4);var v=f.readInt(2);if(this.extraFieldsLength=f.readInt(2),this.fileCommentLength=f.readInt(2),this.diskNumberStart=f.readInt(2),this.internalFileAttributes=f.readInt(2),this.externalFileAttributes=f.readInt(4),this.localHeaderOffset=f.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");f.skip(v),this.readExtraFields(f),this.parseZIP64ExtraField(f),this.fileComment=f.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var f=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),f==0&&(this.dosPermissions=63&this.externalFileAttributes),f==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var f=i(this.extraFields[1].value);this.uncompressedSize===r.MAX_VALUE_32BITS&&(this.uncompressedSize=f.readInt(8)),this.compressedSize===r.MAX_VALUE_32BITS&&(this.compressedSize=f.readInt(8)),this.localHeaderOffset===r.MAX_VALUE_32BITS&&(this.localHeaderOffset=f.readInt(8)),this.diskNumberStart===r.MAX_VALUE_32BITS&&(this.diskNumberStart=f.readInt(4))}},readExtraFields:function(f){var v,d,m,x=f.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});f.index+4<x;)v=f.readInt(2),d=f.readInt(2),m=f.readData(d),this.extraFields[v]={id:v,length:d,value:m};f.setIndex(x)},handleUTF8:function(){var f=p.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var v=this.findExtraFieldUnicodePath();if(v!==null)this.fileNameStr=v;else{var d=r.transformTo(f,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(d)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var x=r.transformTo(f,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(x)}}},findExtraFieldUnicodePath:function(){var f=this.extraFields[28789];if(f){var v=i(f.value);return v.readInt(1)!==1||l(this.fileName)!==v.readInt(4)?null:c.utf8decode(v.readData(f.length-5))}return null},findExtraFieldUnicodeComment:function(){var f=this.extraFields[25461];if(f){var v=i(f.value);return v.readInt(1)!==1||l(this.fileComment)!==v.readInt(4)?null:c.utf8decode(v.readData(f.length-5))}return null}},a.exports=y},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,a,s){function i(v,d,m){this.name=v,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=d,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var r=e("./stream/StreamHelper"),o=e("./stream/DataWorker"),l=e("./utf8"),c=e("./compressedObject"),g=e("./stream/GenericWorker");i.prototype={internalStream:function(v){var d=null,m="string";try{if(!v)throw new Error("No output type specified.");var x=(m=v.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),d=this._decompressWorker();var b=!this._dataBinary;b&&!x&&(d=d.pipe(new l.Utf8EncodeWorker)),!b&&x&&(d=d.pipe(new l.Utf8DecodeWorker))}catch(_){(d=new g("error")).error(_)}return new r(d,m,"")},async:function(v,d){return this.internalStream(v).accumulate(d)},nodeStream:function(v,d){return this.internalStream(v||"nodebuffer").toNodejsStream(d)},_compressWorker:function(v,d){if(this._data instanceof c&&this._data.compression.magic===v.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(m,v,d)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof g?this._data:new o(this._data)}};for(var p=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],y=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<p.length;f++)i.prototype[p[f]]=y;a.exports=i},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,a,s){(function(i){var r,o,l=i.MutationObserver||i.WebKitMutationObserver;if(l){var c=0,g=new l(v),p=i.document.createTextNode("");g.observe(p,{characterData:!0}),r=function(){p.data=c=++c%2}}else if(i.setImmediate||i.MessageChannel===void 0)r="document"in i&&"onreadystatechange"in i.document.createElement("script")?function(){var d=i.document.createElement("script");d.onreadystatechange=function(){v(),d.onreadystatechange=null,d.parentNode.removeChild(d),d=null},i.document.documentElement.appendChild(d)}:function(){setTimeout(v,0)};else{var y=new i.MessageChannel;y.port1.onmessage=v,r=function(){y.port2.postMessage(0)}}var f=[];function v(){var d,m;o=!0;for(var x=f.length;x;){for(m=f,f=[],d=-1;++d<x;)m[d]();x=f.length}o=!1}a.exports=function(d){f.push(d)!==1||o||r()}}).call(this,typeof Ne<"u"?Ne:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,a,s){var i=e("immediate");function r(){}var o={},l=["REJECTED"],c=["FULFILLED"],g=["PENDING"];function p(x){if(typeof x!="function")throw new TypeError("resolver must be a function");this.state=g,this.queue=[],this.outcome=void 0,x!==r&&d(this,x)}function y(x,b,_){this.promise=x,typeof b=="function"&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),typeof _=="function"&&(this.onRejected=_,this.callRejected=this.otherCallRejected)}function f(x,b,_){i(function(){var M;try{M=b(_)}catch(w){return o.reject(x,w)}M===x?o.reject(x,new TypeError("Cannot resolve promise with itself")):o.resolve(x,M)})}function v(x){var b=x&&x.then;if(x&&(typeof x=="object"||typeof x=="function")&&typeof b=="function")return function(){b.apply(x,arguments)}}function d(x,b){var _=!1;function M(L){_||(_=!0,o.reject(x,L))}function w(L){_||(_=!0,o.resolve(x,L))}var A=m(function(){b(w,M)});A.status==="error"&&M(A.value)}function m(x,b){var _={};try{_.value=x(b),_.status="success"}catch(M){_.status="error",_.value=M}return _}(a.exports=p).prototype.finally=function(x){if(typeof x!="function")return this;var b=this.constructor;return this.then(function(_){return b.resolve(x()).then(function(){return _})},function(_){return b.resolve(x()).then(function(){throw _})})},p.prototype.catch=function(x){return this.then(null,x)},p.prototype.then=function(x,b){if(typeof x!="function"&&this.state===c||typeof b!="function"&&this.state===l)return this;var _=new this.constructor(r);return this.state!==g?f(_,this.state===c?x:b,this.outcome):this.queue.push(new y(_,x,b)),_},y.prototype.callFulfilled=function(x){o.resolve(this.promise,x)},y.prototype.otherCallFulfilled=function(x){f(this.promise,this.onFulfilled,x)},y.prototype.callRejected=function(x){o.reject(this.promise,x)},y.prototype.otherCallRejected=function(x){f(this.promise,this.onRejected,x)},o.resolve=function(x,b){var _=m(v,b);if(_.status==="error")return o.reject(x,_.value);var M=_.value;if(M)d(x,M);else{x.state=c,x.outcome=b;for(var w=-1,A=x.queue.length;++w<A;)x.queue[w].callFulfilled(b)}return x},o.reject=function(x,b){x.state=l,x.outcome=b;for(var _=-1,M=x.queue.length;++_<M;)x.queue[_].callRejected(b);return x},p.resolve=function(x){return x instanceof this?x:o.resolve(new this(r),x)},p.reject=function(x){var b=new this(r);return o.reject(b,x)},p.all=function(x){var b=this;if(Object.prototype.toString.call(x)!=="[object Array]")return this.reject(new TypeError("must be an array"));var _=x.length,M=!1;if(!_)return this.resolve([]);for(var w=new Array(_),A=0,L=-1,G=new this(r);++L<_;)P(x[L],L);return G;function P(I,V){b.resolve(I).then(function(C){w[V]=C,++A!==_||M||(M=!0,o.resolve(G,w))},function(C){M||(M=!0,o.reject(G,C))})}},p.race=function(x){var b=this;if(Object.prototype.toString.call(x)!=="[object Array]")return this.reject(new TypeError("must be an array"));var _=x.length,M=!1;if(!_)return this.resolve([]);for(var w=-1,A=new this(r);++w<_;)L=x[w],b.resolve(L).then(function(G){M||(M=!0,o.resolve(A,G))},function(G){M||(M=!0,o.reject(A,G))});var L;return A}},{immediate:36}],38:[function(e,a,s){var i={};(0,e("./lib/utils/common").assign)(i,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),a.exports=i},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,a,s){var i=e("./zlib/deflate"),r=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/messages"),c=e("./zlib/zstream"),g=Object.prototype.toString,p=0,y=-1,f=0,v=8;function d(x){if(!(this instanceof d))return new d(x);this.options=r.assign({level:y,method:v,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},x||{});var b=this.options;b.raw&&0<b.windowBits?b.windowBits=-b.windowBits:b.gzip&&0<b.windowBits&&b.windowBits<16&&(b.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var _=i.deflateInit2(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(_!==p)throw new Error(l[_]);if(b.header&&i.deflateSetHeader(this.strm,b.header),b.dictionary){var M;if(M=typeof b.dictionary=="string"?o.string2buf(b.dictionary):g.call(b.dictionary)==="[object ArrayBuffer]"?new Uint8Array(b.dictionary):b.dictionary,(_=i.deflateSetDictionary(this.strm,M))!==p)throw new Error(l[_]);this._dict_set=!0}}function m(x,b){var _=new d(b);if(_.push(x,!0),_.err)throw _.msg||l[_.err];return _.result}d.prototype.push=function(x,b){var _,M,w=this.strm,A=this.options.chunkSize;if(this.ended)return!1;M=b===~~b?b:b===!0?4:0,typeof x=="string"?w.input=o.string2buf(x):g.call(x)==="[object ArrayBuffer]"?w.input=new Uint8Array(x):w.input=x,w.next_in=0,w.avail_in=w.input.length;do{if(w.avail_out===0&&(w.output=new r.Buf8(A),w.next_out=0,w.avail_out=A),(_=i.deflate(w,M))!==1&&_!==p)return this.onEnd(_),!(this.ended=!0);w.avail_out!==0&&(w.avail_in!==0||M!==4&&M!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(r.shrinkBuf(w.output,w.next_out))):this.onData(r.shrinkBuf(w.output,w.next_out)))}while((0<w.avail_in||w.avail_out===0)&&_!==1);return M===4?(_=i.deflateEnd(this.strm),this.onEnd(_),this.ended=!0,_===p):M!==2||(this.onEnd(p),!(w.avail_out=0))},d.prototype.onData=function(x){this.chunks.push(x)},d.prototype.onEnd=function(x){x===p&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=r.flattenChunks(this.chunks)),this.chunks=[],this.err=x,this.msg=this.strm.msg},s.Deflate=d,s.deflate=m,s.deflateRaw=function(x,b){return(b=b||{}).raw=!0,m(x,b)},s.gzip=function(x,b){return(b=b||{}).gzip=!0,m(x,b)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,a,s){var i=e("./zlib/inflate"),r=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/constants"),c=e("./zlib/messages"),g=e("./zlib/zstream"),p=e("./zlib/gzheader"),y=Object.prototype.toString;function f(d){if(!(this instanceof f))return new f(d);this.options=r.assign({chunkSize:16384,windowBits:0,to:""},d||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||d&&d.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&(15&m.windowBits)==0&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new g,this.strm.avail_out=0;var x=i.inflateInit2(this.strm,m.windowBits);if(x!==l.Z_OK)throw new Error(c[x]);this.header=new p,i.inflateGetHeader(this.strm,this.header)}function v(d,m){var x=new f(m);if(x.push(d,!0),x.err)throw x.msg||c[x.err];return x.result}f.prototype.push=function(d,m){var x,b,_,M,w,A,L=this.strm,G=this.options.chunkSize,P=this.options.dictionary,I=!1;if(this.ended)return!1;b=m===~~m?m:m===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof d=="string"?L.input=o.binstring2buf(d):y.call(d)==="[object ArrayBuffer]"?L.input=new Uint8Array(d):L.input=d,L.next_in=0,L.avail_in=L.input.length;do{if(L.avail_out===0&&(L.output=new r.Buf8(G),L.next_out=0,L.avail_out=G),(x=i.inflate(L,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&P&&(A=typeof P=="string"?o.string2buf(P):y.call(P)==="[object ArrayBuffer]"?new Uint8Array(P):P,x=i.inflateSetDictionary(this.strm,A)),x===l.Z_BUF_ERROR&&I===!0&&(x=l.Z_OK,I=!1),x!==l.Z_STREAM_END&&x!==l.Z_OK)return this.onEnd(x),!(this.ended=!0);L.next_out&&(L.avail_out!==0&&x!==l.Z_STREAM_END&&(L.avail_in!==0||b!==l.Z_FINISH&&b!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(_=o.utf8border(L.output,L.next_out),M=L.next_out-_,w=o.buf2string(L.output,_),L.next_out=M,L.avail_out=G-M,M&&r.arraySet(L.output,L.output,_,M,0),this.onData(w)):this.onData(r.shrinkBuf(L.output,L.next_out)))),L.avail_in===0&&L.avail_out===0&&(I=!0)}while((0<L.avail_in||L.avail_out===0)&&x!==l.Z_STREAM_END);return x===l.Z_STREAM_END&&(b=l.Z_FINISH),b===l.Z_FINISH?(x=i.inflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===l.Z_OK):b!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(L.avail_out=0))},f.prototype.onData=function(d){this.chunks.push(d)},f.prototype.onEnd=function(d){d===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=r.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},s.Inflate=f,s.inflate=v,s.inflateRaw=function(d,m){return(m=m||{}).raw=!0,v(d,m)},s.ungzip=v},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,a,s){var i=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";s.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var g=c.shift();if(g){if(typeof g!="object")throw new TypeError(g+"must be non-object");for(var p in g)g.hasOwnProperty(p)&&(l[p]=g[p])}}return l},s.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var r={arraySet:function(l,c,g,p,y){if(c.subarray&&l.subarray)l.set(c.subarray(g,g+p),y);else for(var f=0;f<p;f++)l[y+f]=c[g+f]},flattenChunks:function(l){var c,g,p,y,f,v;for(c=p=0,g=l.length;c<g;c++)p+=l[c].length;for(v=new Uint8Array(p),c=y=0,g=l.length;c<g;c++)f=l[c],v.set(f,y),y+=f.length;return v}},o={arraySet:function(l,c,g,p,y){for(var f=0;f<p;f++)l[y+f]=c[g+f]},flattenChunks:function(l){return[].concat.apply([],l)}};s.setTyped=function(l){l?(s.Buf8=Uint8Array,s.Buf16=Uint16Array,s.Buf32=Int32Array,s.assign(s,r)):(s.Buf8=Array,s.Buf16=Array,s.Buf32=Array,s.assign(s,o))},s.setTyped(i)},{}],42:[function(e,a,s){var i=e("./common"),r=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{r=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var l=new i.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function g(p,y){if(y<65537&&(p.subarray&&o||!p.subarray&&r))return String.fromCharCode.apply(null,i.shrinkBuf(p,y));for(var f="",v=0;v<y;v++)f+=String.fromCharCode(p[v]);return f}l[254]=l[254]=1,s.string2buf=function(p){var y,f,v,d,m,x=p.length,b=0;for(d=0;d<x;d++)(64512&(f=p.charCodeAt(d)))==55296&&d+1<x&&(64512&(v=p.charCodeAt(d+1)))==56320&&(f=65536+(f-55296<<10)+(v-56320),d++),b+=f<128?1:f<2048?2:f<65536?3:4;for(y=new i.Buf8(b),d=m=0;m<b;d++)(64512&(f=p.charCodeAt(d)))==55296&&d+1<x&&(64512&(v=p.charCodeAt(d+1)))==56320&&(f=65536+(f-55296<<10)+(v-56320),d++),f<128?y[m++]=f:(f<2048?y[m++]=192|f>>>6:(f<65536?y[m++]=224|f>>>12:(y[m++]=240|f>>>18,y[m++]=128|f>>>12&63),y[m++]=128|f>>>6&63),y[m++]=128|63&f);return y},s.buf2binstring=function(p){return g(p,p.length)},s.binstring2buf=function(p){for(var y=new i.Buf8(p.length),f=0,v=y.length;f<v;f++)y[f]=p.charCodeAt(f);return y},s.buf2string=function(p,y){var f,v,d,m,x=y||p.length,b=new Array(2*x);for(f=v=0;f<x;)if((d=p[f++])<128)b[v++]=d;else if(4<(m=l[d]))b[v++]=65533,f+=m-1;else{for(d&=m===2?31:m===3?15:7;1<m&&f<x;)d=d<<6|63&p[f++],m--;1<m?b[v++]=65533:d<65536?b[v++]=d:(d-=65536,b[v++]=55296|d>>10&1023,b[v++]=56320|1023&d)}return g(b,v)},s.utf8border=function(p,y){var f;for((y=y||p.length)>p.length&&(y=p.length),f=y-1;0<=f&&(192&p[f])==128;)f--;return f<0||f===0?y:f+l[p[f]]>y?f:y}},{"./common":41}],43:[function(e,a,s){a.exports=function(i,r,o,l){for(var c=65535&i|0,g=i>>>16&65535|0,p=0;o!==0;){for(o-=p=2e3<o?2e3:o;g=g+(c=c+r[l++]|0)|0,--p;);c%=65521,g%=65521}return c|g<<16|0}},{}],44:[function(e,a,s){a.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,a,s){var i=(function(){for(var r,o=[],l=0;l<256;l++){r=l;for(var c=0;c<8;c++)r=1&r?3988292384^r>>>1:r>>>1;o[l]=r}return o})();a.exports=function(r,o,l,c){var g=i,p=c+l;r^=-1;for(var y=c;y<p;y++)r=r>>>8^g[255&(r^o[y])];return-1^r}},{}],46:[function(e,a,s){var i,r=e("../utils/common"),o=e("./trees"),l=e("./adler32"),c=e("./crc32"),g=e("./messages"),p=0,y=4,f=0,v=-2,d=-1,m=4,x=2,b=8,_=9,M=286,w=30,A=19,L=2*M+1,G=15,P=3,I=258,V=I+P+1,C=42,F=113,u=1,B=2,$=3,N=4;function J(h,H){return h.msg=g[H],H}function X(h){return(h<<1)-(4<h?9:0)}function j(h){for(var H=h.length;0<=--H;)h[H]=0}function D(h){var H=h.state,O=H.pending;O>h.avail_out&&(O=h.avail_out),O!==0&&(r.arraySet(h.output,H.pending_buf,H.pending_out,O,h.next_out),h.next_out+=O,H.pending_out+=O,h.total_out+=O,h.avail_out-=O,H.pending-=O,H.pending===0&&(H.pending_out=0))}function k(h,H){o._tr_flush_block(h,0<=h.block_start?h.block_start:-1,h.strstart-h.block_start,H),h.block_start=h.strstart,D(h.strm)}function et(h,H){h.pending_buf[h.pending++]=H}function Z(h,H){h.pending_buf[h.pending++]=H>>>8&255,h.pending_buf[h.pending++]=255&H}function Q(h,H){var O,T,S=h.max_chain_length,E=h.strstart,U=h.prev_length,q=h.nice_match,R=h.strstart>h.w_size-V?h.strstart-(h.w_size-V):0,z=h.window,W=h.w_mask,K=h.prev,tt=h.strstart+I,rt=z[E+U-1],nt=z[E+U];h.prev_length>=h.good_match&&(S>>=2),q>h.lookahead&&(q=h.lookahead);do if(z[(O=H)+U]===nt&&z[O+U-1]===rt&&z[O]===z[E]&&z[++O]===z[E+1]){E+=2,O++;do;while(z[++E]===z[++O]&&z[++E]===z[++O]&&z[++E]===z[++O]&&z[++E]===z[++O]&&z[++E]===z[++O]&&z[++E]===z[++O]&&z[++E]===z[++O]&&z[++E]===z[++O]&&E<tt);if(T=I-(tt-E),E=tt-I,U<T){if(h.match_start=H,q<=(U=T))break;rt=z[E+U-1],nt=z[E+U]}}while((H=K[H&W])>R&&--S!=0);return U<=h.lookahead?U:h.lookahead}function ot(h){var H,O,T,S,E,U,q,R,z,W,K=h.w_size;do{if(S=h.window_size-h.lookahead-h.strstart,h.strstart>=K+(K-V)){for(r.arraySet(h.window,h.window,K,K,0),h.match_start-=K,h.strstart-=K,h.block_start-=K,H=O=h.hash_size;T=h.head[--H],h.head[H]=K<=T?T-K:0,--O;);for(H=O=K;T=h.prev[--H],h.prev[H]=K<=T?T-K:0,--O;);S+=K}if(h.strm.avail_in===0)break;if(U=h.strm,q=h.window,R=h.strstart+h.lookahead,z=S,W=void 0,W=U.avail_in,z<W&&(W=z),O=W===0?0:(U.avail_in-=W,r.arraySet(q,U.input,U.next_in,W,R),U.state.wrap===1?U.adler=l(U.adler,q,W,R):U.state.wrap===2&&(U.adler=c(U.adler,q,W,R)),U.next_in+=W,U.total_in+=W,W),h.lookahead+=O,h.lookahead+h.insert>=P)for(E=h.strstart-h.insert,h.ins_h=h.window[E],h.ins_h=(h.ins_h<<h.hash_shift^h.window[E+1])&h.hash_mask;h.insert&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[E+P-1])&h.hash_mask,h.prev[E&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=E,E++,h.insert--,!(h.lookahead+h.insert<P)););}while(h.lookahead<V&&h.strm.avail_in!==0)}function ct(h,H){for(var O,T;;){if(h.lookahead<V){if(ot(h),h.lookahead<V&&H===p)return u;if(h.lookahead===0)break}if(O=0,h.lookahead>=P&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+P-1])&h.hash_mask,O=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),O!==0&&h.strstart-O<=h.w_size-V&&(h.match_length=Q(h,O)),h.match_length>=P)if(T=o._tr_tally(h,h.strstart-h.match_start,h.match_length-P),h.lookahead-=h.match_length,h.match_length<=h.max_lazy_match&&h.lookahead>=P){for(h.match_length--;h.strstart++,h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+P-1])&h.hash_mask,O=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart,--h.match_length!=0;);h.strstart++}else h.strstart+=h.match_length,h.match_length=0,h.ins_h=h.window[h.strstart],h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+1])&h.hash_mask;else T=o._tr_tally(h,0,h.window[h.strstart]),h.lookahead--,h.strstart++;if(T&&(k(h,!1),h.strm.avail_out===0))return u}return h.insert=h.strstart<P-1?h.strstart:P-1,H===y?(k(h,!0),h.strm.avail_out===0?$:N):h.last_lit&&(k(h,!1),h.strm.avail_out===0)?u:B}function it(h,H){for(var O,T,S;;){if(h.lookahead<V){if(ot(h),h.lookahead<V&&H===p)return u;if(h.lookahead===0)break}if(O=0,h.lookahead>=P&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+P-1])&h.hash_mask,O=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),h.prev_length=h.match_length,h.prev_match=h.match_start,h.match_length=P-1,O!==0&&h.prev_length<h.max_lazy_match&&h.strstart-O<=h.w_size-V&&(h.match_length=Q(h,O),h.match_length<=5&&(h.strategy===1||h.match_length===P&&4096<h.strstart-h.match_start)&&(h.match_length=P-1)),h.prev_length>=P&&h.match_length<=h.prev_length){for(S=h.strstart+h.lookahead-P,T=o._tr_tally(h,h.strstart-1-h.prev_match,h.prev_length-P),h.lookahead-=h.prev_length-1,h.prev_length-=2;++h.strstart<=S&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+P-1])&h.hash_mask,O=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),--h.prev_length!=0;);if(h.match_available=0,h.match_length=P-1,h.strstart++,T&&(k(h,!1),h.strm.avail_out===0))return u}else if(h.match_available){if((T=o._tr_tally(h,0,h.window[h.strstart-1]))&&k(h,!1),h.strstart++,h.lookahead--,h.strm.avail_out===0)return u}else h.match_available=1,h.strstart++,h.lookahead--}return h.match_available&&(T=o._tr_tally(h,0,h.window[h.strstart-1]),h.match_available=0),h.insert=h.strstart<P-1?h.strstart:P-1,H===y?(k(h,!0),h.strm.avail_out===0?$:N):h.last_lit&&(k(h,!1),h.strm.avail_out===0)?u:B}function at(h,H,O,T,S){this.good_length=h,this.max_lazy=H,this.nice_length=O,this.max_chain=T,this.func=S}function st(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=b,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new r.Buf16(2*L),this.dyn_dtree=new r.Buf16(2*(2*w+1)),this.bl_tree=new r.Buf16(2*(2*A+1)),j(this.dyn_ltree),j(this.dyn_dtree),j(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new r.Buf16(G+1),this.heap=new r.Buf16(2*M+1),j(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new r.Buf16(2*M+1),j(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function lt(h){var H;return h&&h.state?(h.total_in=h.total_out=0,h.data_type=x,(H=h.state).pending=0,H.pending_out=0,H.wrap<0&&(H.wrap=-H.wrap),H.status=H.wrap?C:F,h.adler=H.wrap===2?0:1,H.last_flush=p,o._tr_init(H),f):J(h,v)}function Tt(h){var H=lt(h);return H===f&&(function(O){O.window_size=2*O.w_size,j(O.head),O.max_lazy_match=i[O.level].max_lazy,O.good_match=i[O.level].good_length,O.nice_match=i[O.level].nice_length,O.max_chain_length=i[O.level].max_chain,O.strstart=0,O.block_start=0,O.lookahead=0,O.insert=0,O.match_length=O.prev_length=P-1,O.match_available=0,O.ins_h=0})(h.state),H}function yt(h,H,O,T,S,E){if(!h)return v;var U=1;if(H===d&&(H=6),T<0?(U=0,T=-T):15<T&&(U=2,T-=16),S<1||_<S||O!==b||T<8||15<T||H<0||9<H||E<0||m<E)return J(h,v);T===8&&(T=9);var q=new st;return(h.state=q).strm=h,q.wrap=U,q.gzhead=null,q.w_bits=T,q.w_size=1<<q.w_bits,q.w_mask=q.w_size-1,q.hash_bits=S+7,q.hash_size=1<<q.hash_bits,q.hash_mask=q.hash_size-1,q.hash_shift=~~((q.hash_bits+P-1)/P),q.window=new r.Buf8(2*q.w_size),q.head=new r.Buf16(q.hash_size),q.prev=new r.Buf16(q.w_size),q.lit_bufsize=1<<S+6,q.pending_buf_size=4*q.lit_bufsize,q.pending_buf=new r.Buf8(q.pending_buf_size),q.d_buf=1*q.lit_bufsize,q.l_buf=3*q.lit_bufsize,q.level=H,q.strategy=E,q.method=O,Tt(h)}i=[new at(0,0,0,0,function(h,H){var O=65535;for(O>h.pending_buf_size-5&&(O=h.pending_buf_size-5);;){if(h.lookahead<=1){if(ot(h),h.lookahead===0&&H===p)return u;if(h.lookahead===0)break}h.strstart+=h.lookahead,h.lookahead=0;var T=h.block_start+O;if((h.strstart===0||h.strstart>=T)&&(h.lookahead=h.strstart-T,h.strstart=T,k(h,!1),h.strm.avail_out===0)||h.strstart-h.block_start>=h.w_size-V&&(k(h,!1),h.strm.avail_out===0))return u}return h.insert=0,H===y?(k(h,!0),h.strm.avail_out===0?$:N):(h.strstart>h.block_start&&(k(h,!1),h.strm.avail_out),u)}),new at(4,4,8,4,ct),new at(4,5,16,8,ct),new at(4,6,32,32,ct),new at(4,4,16,16,it),new at(8,16,32,32,it),new at(8,16,128,128,it),new at(8,32,128,256,it),new at(32,128,258,1024,it),new at(32,258,258,4096,it)],s.deflateInit=function(h,H){return yt(h,H,b,15,8,0)},s.deflateInit2=yt,s.deflateReset=Tt,s.deflateResetKeep=lt,s.deflateSetHeader=function(h,H){return h&&h.state?h.state.wrap!==2?v:(h.state.gzhead=H,f):v},s.deflate=function(h,H){var O,T,S,E;if(!h||!h.state||5<H||H<0)return h?J(h,v):v;if(T=h.state,!h.output||!h.input&&h.avail_in!==0||T.status===666&&H!==y)return J(h,h.avail_out===0?-5:v);if(T.strm=h,O=T.last_flush,T.last_flush=H,T.status===C)if(T.wrap===2)h.adler=0,et(T,31),et(T,139),et(T,8),T.gzhead?(et(T,(T.gzhead.text?1:0)+(T.gzhead.hcrc?2:0)+(T.gzhead.extra?4:0)+(T.gzhead.name?8:0)+(T.gzhead.comment?16:0)),et(T,255&T.gzhead.time),et(T,T.gzhead.time>>8&255),et(T,T.gzhead.time>>16&255),et(T,T.gzhead.time>>24&255),et(T,T.level===9?2:2<=T.strategy||T.level<2?4:0),et(T,255&T.gzhead.os),T.gzhead.extra&&T.gzhead.extra.length&&(et(T,255&T.gzhead.extra.length),et(T,T.gzhead.extra.length>>8&255)),T.gzhead.hcrc&&(h.adler=c(h.adler,T.pending_buf,T.pending,0)),T.gzindex=0,T.status=69):(et(T,0),et(T,0),et(T,0),et(T,0),et(T,0),et(T,T.level===9?2:2<=T.strategy||T.level<2?4:0),et(T,3),T.status=F);else{var U=b+(T.w_bits-8<<4)<<8;U|=(2<=T.strategy||T.level<2?0:T.level<6?1:T.level===6?2:3)<<6,T.strstart!==0&&(U|=32),U+=31-U%31,T.status=F,Z(T,U),T.strstart!==0&&(Z(T,h.adler>>>16),Z(T,65535&h.adler)),h.adler=1}if(T.status===69)if(T.gzhead.extra){for(S=T.pending;T.gzindex<(65535&T.gzhead.extra.length)&&(T.pending!==T.pending_buf_size||(T.gzhead.hcrc&&T.pending>S&&(h.adler=c(h.adler,T.pending_buf,T.pending-S,S)),D(h),S=T.pending,T.pending!==T.pending_buf_size));)et(T,255&T.gzhead.extra[T.gzindex]),T.gzindex++;T.gzhead.hcrc&&T.pending>S&&(h.adler=c(h.adler,T.pending_buf,T.pending-S,S)),T.gzindex===T.gzhead.extra.length&&(T.gzindex=0,T.status=73)}else T.status=73;if(T.status===73)if(T.gzhead.name){S=T.pending;do{if(T.pending===T.pending_buf_size&&(T.gzhead.hcrc&&T.pending>S&&(h.adler=c(h.adler,T.pending_buf,T.pending-S,S)),D(h),S=T.pending,T.pending===T.pending_buf_size)){E=1;break}E=T.gzindex<T.gzhead.name.length?255&T.gzhead.name.charCodeAt(T.gzindex++):0,et(T,E)}while(E!==0);T.gzhead.hcrc&&T.pending>S&&(h.adler=c(h.adler,T.pending_buf,T.pending-S,S)),E===0&&(T.gzindex=0,T.status=91)}else T.status=91;if(T.status===91)if(T.gzhead.comment){S=T.pending;do{if(T.pending===T.pending_buf_size&&(T.gzhead.hcrc&&T.pending>S&&(h.adler=c(h.adler,T.pending_buf,T.pending-S,S)),D(h),S=T.pending,T.pending===T.pending_buf_size)){E=1;break}E=T.gzindex<T.gzhead.comment.length?255&T.gzhead.comment.charCodeAt(T.gzindex++):0,et(T,E)}while(E!==0);T.gzhead.hcrc&&T.pending>S&&(h.adler=c(h.adler,T.pending_buf,T.pending-S,S)),E===0&&(T.status=103)}else T.status=103;if(T.status===103&&(T.gzhead.hcrc?(T.pending+2>T.pending_buf_size&&D(h),T.pending+2<=T.pending_buf_size&&(et(T,255&h.adler),et(T,h.adler>>8&255),h.adler=0,T.status=F)):T.status=F),T.pending!==0){if(D(h),h.avail_out===0)return T.last_flush=-1,f}else if(h.avail_in===0&&X(H)<=X(O)&&H!==y)return J(h,-5);if(T.status===666&&h.avail_in!==0)return J(h,-5);if(h.avail_in!==0||T.lookahead!==0||H!==p&&T.status!==666){var q=T.strategy===2?(function(R,z){for(var W;;){if(R.lookahead===0&&(ot(R),R.lookahead===0)){if(z===p)return u;break}if(R.match_length=0,W=o._tr_tally(R,0,R.window[R.strstart]),R.lookahead--,R.strstart++,W&&(k(R,!1),R.strm.avail_out===0))return u}return R.insert=0,z===y?(k(R,!0),R.strm.avail_out===0?$:N):R.last_lit&&(k(R,!1),R.strm.avail_out===0)?u:B})(T,H):T.strategy===3?(function(R,z){for(var W,K,tt,rt,nt=R.window;;){if(R.lookahead<=I){if(ot(R),R.lookahead<=I&&z===p)return u;if(R.lookahead===0)break}if(R.match_length=0,R.lookahead>=P&&0<R.strstart&&(K=nt[tt=R.strstart-1])===nt[++tt]&&K===nt[++tt]&&K===nt[++tt]){rt=R.strstart+I;do;while(K===nt[++tt]&&K===nt[++tt]&&K===nt[++tt]&&K===nt[++tt]&&K===nt[++tt]&&K===nt[++tt]&&K===nt[++tt]&&K===nt[++tt]&&tt<rt);R.match_length=I-(rt-tt),R.match_length>R.lookahead&&(R.match_length=R.lookahead)}if(R.match_length>=P?(W=o._tr_tally(R,1,R.match_length-P),R.lookahead-=R.match_length,R.strstart+=R.match_length,R.match_length=0):(W=o._tr_tally(R,0,R.window[R.strstart]),R.lookahead--,R.strstart++),W&&(k(R,!1),R.strm.avail_out===0))return u}return R.insert=0,z===y?(k(R,!0),R.strm.avail_out===0?$:N):R.last_lit&&(k(R,!1),R.strm.avail_out===0)?u:B})(T,H):i[T.level].func(T,H);if(q!==$&&q!==N||(T.status=666),q===u||q===$)return h.avail_out===0&&(T.last_flush=-1),f;if(q===B&&(H===1?o._tr_align(T):H!==5&&(o._tr_stored_block(T,0,0,!1),H===3&&(j(T.head),T.lookahead===0&&(T.strstart=0,T.block_start=0,T.insert=0))),D(h),h.avail_out===0))return T.last_flush=-1,f}return H!==y?f:T.wrap<=0?1:(T.wrap===2?(et(T,255&h.adler),et(T,h.adler>>8&255),et(T,h.adler>>16&255),et(T,h.adler>>24&255),et(T,255&h.total_in),et(T,h.total_in>>8&255),et(T,h.total_in>>16&255),et(T,h.total_in>>24&255)):(Z(T,h.adler>>>16),Z(T,65535&h.adler)),D(h),0<T.wrap&&(T.wrap=-T.wrap),T.pending!==0?f:1)},s.deflateEnd=function(h){var H;return h&&h.state?(H=h.state.status)!==C&&H!==69&&H!==73&&H!==91&&H!==103&&H!==F&&H!==666?J(h,v):(h.state=null,H===F?J(h,-3):f):v},s.deflateSetDictionary=function(h,H){var O,T,S,E,U,q,R,z,W=H.length;if(!h||!h.state||(E=(O=h.state).wrap)===2||E===1&&O.status!==C||O.lookahead)return v;for(E===1&&(h.adler=l(h.adler,H,W,0)),O.wrap=0,W>=O.w_size&&(E===0&&(j(O.head),O.strstart=0,O.block_start=0,O.insert=0),z=new r.Buf8(O.w_size),r.arraySet(z,H,W-O.w_size,O.w_size,0),H=z,W=O.w_size),U=h.avail_in,q=h.next_in,R=h.input,h.avail_in=W,h.next_in=0,h.input=H,ot(O);O.lookahead>=P;){for(T=O.strstart,S=O.lookahead-(P-1);O.ins_h=(O.ins_h<<O.hash_shift^O.window[T+P-1])&O.hash_mask,O.prev[T&O.w_mask]=O.head[O.ins_h],O.head[O.ins_h]=T,T++,--S;);O.strstart=T,O.lookahead=P-1,ot(O)}return O.strstart+=O.lookahead,O.block_start=O.strstart,O.insert=O.lookahead,O.lookahead=0,O.match_length=O.prev_length=P-1,O.match_available=0,h.next_in=q,h.input=R,h.avail_in=U,O.wrap=E,f},s.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,a,s){a.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,a,s){a.exports=function(i,r){var o,l,c,g,p,y,f,v,d,m,x,b,_,M,w,A,L,G,P,I,V,C,F,u,B;o=i.state,l=i.next_in,u=i.input,c=l+(i.avail_in-5),g=i.next_out,B=i.output,p=g-(r-i.avail_out),y=g+(i.avail_out-257),f=o.dmax,v=o.wsize,d=o.whave,m=o.wnext,x=o.window,b=o.hold,_=o.bits,M=o.lencode,w=o.distcode,A=(1<<o.lenbits)-1,L=(1<<o.distbits)-1;t:do{_<15&&(b+=u[l++]<<_,_+=8,b+=u[l++]<<_,_+=8),G=M[b&A];e:for(;;){if(b>>>=P=G>>>24,_-=P,(P=G>>>16&255)===0)B[g++]=65535&G;else{if(!(16&P)){if((64&P)==0){G=M[(65535&G)+(b&(1<<P)-1)];continue e}if(32&P){o.mode=12;break t}i.msg="invalid literal/length code",o.mode=30;break t}I=65535&G,(P&=15)&&(_<P&&(b+=u[l++]<<_,_+=8),I+=b&(1<<P)-1,b>>>=P,_-=P),_<15&&(b+=u[l++]<<_,_+=8,b+=u[l++]<<_,_+=8),G=w[b&L];n:for(;;){if(b>>>=P=G>>>24,_-=P,!(16&(P=G>>>16&255))){if((64&P)==0){G=w[(65535&G)+(b&(1<<P)-1)];continue n}i.msg="invalid distance code",o.mode=30;break t}if(V=65535&G,_<(P&=15)&&(b+=u[l++]<<_,(_+=8)<P&&(b+=u[l++]<<_,_+=8)),f<(V+=b&(1<<P)-1)){i.msg="invalid distance too far back",o.mode=30;break t}if(b>>>=P,_-=P,(P=g-p)<V){if(d<(P=V-P)&&o.sane){i.msg="invalid distance too far back",o.mode=30;break t}if(F=x,(C=0)===m){if(C+=v-P,P<I){for(I-=P;B[g++]=x[C++],--P;);C=g-V,F=B}}else if(m<P){if(C+=v+m-P,(P-=m)<I){for(I-=P;B[g++]=x[C++],--P;);if(C=0,m<I){for(I-=P=m;B[g++]=x[C++],--P;);C=g-V,F=B}}}else if(C+=m-P,P<I){for(I-=P;B[g++]=x[C++],--P;);C=g-V,F=B}for(;2<I;)B[g++]=F[C++],B[g++]=F[C++],B[g++]=F[C++],I-=3;I&&(B[g++]=F[C++],1<I&&(B[g++]=F[C++]))}else{for(C=g-V;B[g++]=B[C++],B[g++]=B[C++],B[g++]=B[C++],2<(I-=3););I&&(B[g++]=B[C++],1<I&&(B[g++]=B[C++]))}break}}break}}while(l<c&&g<y);l-=I=_>>3,b&=(1<<(_-=I<<3))-1,i.next_in=l,i.next_out=g,i.avail_in=l<c?c-l+5:5-(l-c),i.avail_out=g<y?y-g+257:257-(g-y),o.hold=b,o.bits=_}},{}],49:[function(e,a,s){var i=e("../utils/common"),r=e("./adler32"),o=e("./crc32"),l=e("./inffast"),c=e("./inftrees"),g=1,p=2,y=0,f=-2,v=1,d=852,m=592;function x(C){return(C>>>24&255)+(C>>>8&65280)+((65280&C)<<8)+((255&C)<<24)}function b(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new i.Buf16(320),this.work=new i.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function _(C){var F;return C&&C.state?(F=C.state,C.total_in=C.total_out=F.total=0,C.msg="",F.wrap&&(C.adler=1&F.wrap),F.mode=v,F.last=0,F.havedict=0,F.dmax=32768,F.head=null,F.hold=0,F.bits=0,F.lencode=F.lendyn=new i.Buf32(d),F.distcode=F.distdyn=new i.Buf32(m),F.sane=1,F.back=-1,y):f}function M(C){var F;return C&&C.state?((F=C.state).wsize=0,F.whave=0,F.wnext=0,_(C)):f}function w(C,F){var u,B;return C&&C.state?(B=C.state,F<0?(u=0,F=-F):(u=1+(F>>4),F<48&&(F&=15)),F&&(F<8||15<F)?f:(B.window!==null&&B.wbits!==F&&(B.window=null),B.wrap=u,B.wbits=F,M(C))):f}function A(C,F){var u,B;return C?(B=new b,(C.state=B).window=null,(u=w(C,F))!==y&&(C.state=null),u):f}var L,G,P=!0;function I(C){if(P){var F;for(L=new i.Buf32(512),G=new i.Buf32(32),F=0;F<144;)C.lens[F++]=8;for(;F<256;)C.lens[F++]=9;for(;F<280;)C.lens[F++]=7;for(;F<288;)C.lens[F++]=8;for(c(g,C.lens,0,288,L,0,C.work,{bits:9}),F=0;F<32;)C.lens[F++]=5;c(p,C.lens,0,32,G,0,C.work,{bits:5}),P=!1}C.lencode=L,C.lenbits=9,C.distcode=G,C.distbits=5}function V(C,F,u,B){var $,N=C.state;return N.window===null&&(N.wsize=1<<N.wbits,N.wnext=0,N.whave=0,N.window=new i.Buf8(N.wsize)),B>=N.wsize?(i.arraySet(N.window,F,u-N.wsize,N.wsize,0),N.wnext=0,N.whave=N.wsize):(B<($=N.wsize-N.wnext)&&($=B),i.arraySet(N.window,F,u-B,$,N.wnext),(B-=$)?(i.arraySet(N.window,F,u-B,B,0),N.wnext=B,N.whave=N.wsize):(N.wnext+=$,N.wnext===N.wsize&&(N.wnext=0),N.whave<N.wsize&&(N.whave+=$))),0}s.inflateReset=M,s.inflateReset2=w,s.inflateResetKeep=_,s.inflateInit=function(C){return A(C,15)},s.inflateInit2=A,s.inflate=function(C,F){var u,B,$,N,J,X,j,D,k,et,Z,Q,ot,ct,it,at,st,lt,Tt,yt,h,H,O,T,S=0,E=new i.Buf8(4),U=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!C||!C.state||!C.output||!C.input&&C.avail_in!==0)return f;(u=C.state).mode===12&&(u.mode=13),J=C.next_out,$=C.output,j=C.avail_out,N=C.next_in,B=C.input,X=C.avail_in,D=u.hold,k=u.bits,et=X,Z=j,H=y;t:for(;;)switch(u.mode){case v:if(u.wrap===0){u.mode=13;break}for(;k<16;){if(X===0)break t;X--,D+=B[N++]<<k,k+=8}if(2&u.wrap&&D===35615){E[u.check=0]=255&D,E[1]=D>>>8&255,u.check=o(u.check,E,2,0),k=D=0,u.mode=2;break}if(u.flags=0,u.head&&(u.head.done=!1),!(1&u.wrap)||(((255&D)<<8)+(D>>8))%31){C.msg="incorrect header check",u.mode=30;break}if((15&D)!=8){C.msg="unknown compression method",u.mode=30;break}if(k-=4,h=8+(15&(D>>>=4)),u.wbits===0)u.wbits=h;else if(h>u.wbits){C.msg="invalid window size",u.mode=30;break}u.dmax=1<<h,C.adler=u.check=1,u.mode=512&D?10:12,k=D=0;break;case 2:for(;k<16;){if(X===0)break t;X--,D+=B[N++]<<k,k+=8}if(u.flags=D,(255&u.flags)!=8){C.msg="unknown compression method",u.mode=30;break}if(57344&u.flags){C.msg="unknown header flags set",u.mode=30;break}u.head&&(u.head.text=D>>8&1),512&u.flags&&(E[0]=255&D,E[1]=D>>>8&255,u.check=o(u.check,E,2,0)),k=D=0,u.mode=3;case 3:for(;k<32;){if(X===0)break t;X--,D+=B[N++]<<k,k+=8}u.head&&(u.head.time=D),512&u.flags&&(E[0]=255&D,E[1]=D>>>8&255,E[2]=D>>>16&255,E[3]=D>>>24&255,u.check=o(u.check,E,4,0)),k=D=0,u.mode=4;case 4:for(;k<16;){if(X===0)break t;X--,D+=B[N++]<<k,k+=8}u.head&&(u.head.xflags=255&D,u.head.os=D>>8),512&u.flags&&(E[0]=255&D,E[1]=D>>>8&255,u.check=o(u.check,E,2,0)),k=D=0,u.mode=5;case 5:if(1024&u.flags){for(;k<16;){if(X===0)break t;X--,D+=B[N++]<<k,k+=8}u.length=D,u.head&&(u.head.extra_len=D),512&u.flags&&(E[0]=255&D,E[1]=D>>>8&255,u.check=o(u.check,E,2,0)),k=D=0}else u.head&&(u.head.extra=null);u.mode=6;case 6:if(1024&u.flags&&(X<(Q=u.length)&&(Q=X),Q&&(u.head&&(h=u.head.extra_len-u.length,u.head.extra||(u.head.extra=new Array(u.head.extra_len)),i.arraySet(u.head.extra,B,N,Q,h)),512&u.flags&&(u.check=o(u.check,B,Q,N)),X-=Q,N+=Q,u.length-=Q),u.length))break t;u.length=0,u.mode=7;case 7:if(2048&u.flags){if(X===0)break t;for(Q=0;h=B[N+Q++],u.head&&h&&u.length<65536&&(u.head.name+=String.fromCharCode(h)),h&&Q<X;);if(512&u.flags&&(u.check=o(u.check,B,Q,N)),X-=Q,N+=Q,h)break t}else u.head&&(u.head.name=null);u.length=0,u.mode=8;case 8:if(4096&u.flags){if(X===0)break t;for(Q=0;h=B[N+Q++],u.head&&h&&u.length<65536&&(u.head.comment+=String.fromCharCode(h)),h&&Q<X;);if(512&u.flags&&(u.check=o(u.check,B,Q,N)),X-=Q,N+=Q,h)break t}else u.head&&(u.head.comment=null);u.mode=9;case 9:if(512&u.flags){for(;k<16;){if(X===0)break t;X--,D+=B[N++]<<k,k+=8}if(D!==(65535&u.check)){C.msg="header crc mismatch",u.mode=30;break}k=D=0}u.head&&(u.head.hcrc=u.flags>>9&1,u.head.done=!0),C.adler=u.check=0,u.mode=12;break;case 10:for(;k<32;){if(X===0)break t;X--,D+=B[N++]<<k,k+=8}C.adler=u.check=x(D),k=D=0,u.mode=11;case 11:if(u.havedict===0)return C.next_out=J,C.avail_out=j,C.next_in=N,C.avail_in=X,u.hold=D,u.bits=k,2;C.adler=u.check=1,u.mode=12;case 12:if(F===5||F===6)break t;case 13:if(u.last){D>>>=7&k,k-=7&k,u.mode=27;break}for(;k<3;){if(X===0)break t;X--,D+=B[N++]<<k,k+=8}switch(u.last=1&D,k-=1,3&(D>>>=1)){case 0:u.mode=14;break;case 1:if(I(u),u.mode=20,F!==6)break;D>>>=2,k-=2;break t;case 2:u.mode=17;break;case 3:C.msg="invalid block type",u.mode=30}D>>>=2,k-=2;break;case 14:for(D>>>=7&k,k-=7&k;k<32;){if(X===0)break t;X--,D+=B[N++]<<k,k+=8}if((65535&D)!=(D>>>16^65535)){C.msg="invalid stored block lengths",u.mode=30;break}if(u.length=65535&D,k=D=0,u.mode=15,F===6)break t;case 15:u.mode=16;case 16:if(Q=u.length){if(X<Q&&(Q=X),j<Q&&(Q=j),Q===0)break t;i.arraySet($,B,N,Q,J),X-=Q,N+=Q,j-=Q,J+=Q,u.length-=Q;break}u.mode=12;break;case 17:for(;k<14;){if(X===0)break t;X--,D+=B[N++]<<k,k+=8}if(u.nlen=257+(31&D),D>>>=5,k-=5,u.ndist=1+(31&D),D>>>=5,k-=5,u.ncode=4+(15&D),D>>>=4,k-=4,286<u.nlen||30<u.ndist){C.msg="too many length or distance symbols",u.mode=30;break}u.have=0,u.mode=18;case 18:for(;u.have<u.ncode;){for(;k<3;){if(X===0)break t;X--,D+=B[N++]<<k,k+=8}u.lens[U[u.have++]]=7&D,D>>>=3,k-=3}for(;u.have<19;)u.lens[U[u.have++]]=0;if(u.lencode=u.lendyn,u.lenbits=7,O={bits:u.lenbits},H=c(0,u.lens,0,19,u.lencode,0,u.work,O),u.lenbits=O.bits,H){C.msg="invalid code lengths set",u.mode=30;break}u.have=0,u.mode=19;case 19:for(;u.have<u.nlen+u.ndist;){for(;at=(S=u.lencode[D&(1<<u.lenbits)-1])>>>16&255,st=65535&S,!((it=S>>>24)<=k);){if(X===0)break t;X--,D+=B[N++]<<k,k+=8}if(st<16)D>>>=it,k-=it,u.lens[u.have++]=st;else{if(st===16){for(T=it+2;k<T;){if(X===0)break t;X--,D+=B[N++]<<k,k+=8}if(D>>>=it,k-=it,u.have===0){C.msg="invalid bit length repeat",u.mode=30;break}h=u.lens[u.have-1],Q=3+(3&D),D>>>=2,k-=2}else if(st===17){for(T=it+3;k<T;){if(X===0)break t;X--,D+=B[N++]<<k,k+=8}k-=it,h=0,Q=3+(7&(D>>>=it)),D>>>=3,k-=3}else{for(T=it+7;k<T;){if(X===0)break t;X--,D+=B[N++]<<k,k+=8}k-=it,h=0,Q=11+(127&(D>>>=it)),D>>>=7,k-=7}if(u.have+Q>u.nlen+u.ndist){C.msg="invalid bit length repeat",u.mode=30;break}for(;Q--;)u.lens[u.have++]=h}}if(u.mode===30)break;if(u.lens[256]===0){C.msg="invalid code -- missing end-of-block",u.mode=30;break}if(u.lenbits=9,O={bits:u.lenbits},H=c(g,u.lens,0,u.nlen,u.lencode,0,u.work,O),u.lenbits=O.bits,H){C.msg="invalid literal/lengths set",u.mode=30;break}if(u.distbits=6,u.distcode=u.distdyn,O={bits:u.distbits},H=c(p,u.lens,u.nlen,u.ndist,u.distcode,0,u.work,O),u.distbits=O.bits,H){C.msg="invalid distances set",u.mode=30;break}if(u.mode=20,F===6)break t;case 20:u.mode=21;case 21:if(6<=X&&258<=j){C.next_out=J,C.avail_out=j,C.next_in=N,C.avail_in=X,u.hold=D,u.bits=k,l(C,Z),J=C.next_out,$=C.output,j=C.avail_out,N=C.next_in,B=C.input,X=C.avail_in,D=u.hold,k=u.bits,u.mode===12&&(u.back=-1);break}for(u.back=0;at=(S=u.lencode[D&(1<<u.lenbits)-1])>>>16&255,st=65535&S,!((it=S>>>24)<=k);){if(X===0)break t;X--,D+=B[N++]<<k,k+=8}if(at&&(240&at)==0){for(lt=it,Tt=at,yt=st;at=(S=u.lencode[yt+((D&(1<<lt+Tt)-1)>>lt)])>>>16&255,st=65535&S,!(lt+(it=S>>>24)<=k);){if(X===0)break t;X--,D+=B[N++]<<k,k+=8}D>>>=lt,k-=lt,u.back+=lt}if(D>>>=it,k-=it,u.back+=it,u.length=st,at===0){u.mode=26;break}if(32&at){u.back=-1,u.mode=12;break}if(64&at){C.msg="invalid literal/length code",u.mode=30;break}u.extra=15&at,u.mode=22;case 22:if(u.extra){for(T=u.extra;k<T;){if(X===0)break t;X--,D+=B[N++]<<k,k+=8}u.length+=D&(1<<u.extra)-1,D>>>=u.extra,k-=u.extra,u.back+=u.extra}u.was=u.length,u.mode=23;case 23:for(;at=(S=u.distcode[D&(1<<u.distbits)-1])>>>16&255,st=65535&S,!((it=S>>>24)<=k);){if(X===0)break t;X--,D+=B[N++]<<k,k+=8}if((240&at)==0){for(lt=it,Tt=at,yt=st;at=(S=u.distcode[yt+((D&(1<<lt+Tt)-1)>>lt)])>>>16&255,st=65535&S,!(lt+(it=S>>>24)<=k);){if(X===0)break t;X--,D+=B[N++]<<k,k+=8}D>>>=lt,k-=lt,u.back+=lt}if(D>>>=it,k-=it,u.back+=it,64&at){C.msg="invalid distance code",u.mode=30;break}u.offset=st,u.extra=15&at,u.mode=24;case 24:if(u.extra){for(T=u.extra;k<T;){if(X===0)break t;X--,D+=B[N++]<<k,k+=8}u.offset+=D&(1<<u.extra)-1,D>>>=u.extra,k-=u.extra,u.back+=u.extra}if(u.offset>u.dmax){C.msg="invalid distance too far back",u.mode=30;break}u.mode=25;case 25:if(j===0)break t;if(Q=Z-j,u.offset>Q){if((Q=u.offset-Q)>u.whave&&u.sane){C.msg="invalid distance too far back",u.mode=30;break}ot=Q>u.wnext?(Q-=u.wnext,u.wsize-Q):u.wnext-Q,Q>u.length&&(Q=u.length),ct=u.window}else ct=$,ot=J-u.offset,Q=u.length;for(j<Q&&(Q=j),j-=Q,u.length-=Q;$[J++]=ct[ot++],--Q;);u.length===0&&(u.mode=21);break;case 26:if(j===0)break t;$[J++]=u.length,j--,u.mode=21;break;case 27:if(u.wrap){for(;k<32;){if(X===0)break t;X--,D|=B[N++]<<k,k+=8}if(Z-=j,C.total_out+=Z,u.total+=Z,Z&&(C.adler=u.check=u.flags?o(u.check,$,Z,J-Z):r(u.check,$,Z,J-Z)),Z=j,(u.flags?D:x(D))!==u.check){C.msg="incorrect data check",u.mode=30;break}k=D=0}u.mode=28;case 28:if(u.wrap&&u.flags){for(;k<32;){if(X===0)break t;X--,D+=B[N++]<<k,k+=8}if(D!==(4294967295&u.total)){C.msg="incorrect length check",u.mode=30;break}k=D=0}u.mode=29;case 29:H=1;break t;case 30:H=-3;break t;case 31:return-4;default:return f}return C.next_out=J,C.avail_out=j,C.next_in=N,C.avail_in=X,u.hold=D,u.bits=k,(u.wsize||Z!==C.avail_out&&u.mode<30&&(u.mode<27||F!==4))&&V(C,C.output,C.next_out,Z-C.avail_out)?(u.mode=31,-4):(et-=C.avail_in,Z-=C.avail_out,C.total_in+=et,C.total_out+=Z,u.total+=Z,u.wrap&&Z&&(C.adler=u.check=u.flags?o(u.check,$,Z,C.next_out-Z):r(u.check,$,Z,C.next_out-Z)),C.data_type=u.bits+(u.last?64:0)+(u.mode===12?128:0)+(u.mode===20||u.mode===15?256:0),(et==0&&Z===0||F===4)&&H===y&&(H=-5),H)},s.inflateEnd=function(C){if(!C||!C.state)return f;var F=C.state;return F.window&&(F.window=null),C.state=null,y},s.inflateGetHeader=function(C,F){var u;return C&&C.state?(2&(u=C.state).wrap)==0?f:((u.head=F).done=!1,y):f},s.inflateSetDictionary=function(C,F){var u,B=F.length;return C&&C.state?(u=C.state).wrap!==0&&u.mode!==11?f:u.mode===11&&r(1,F,B,0)!==u.check?-3:V(C,F,B,B)?(u.mode=31,-4):(u.havedict=1,y):f},s.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,a,s){var i=e("../utils/common"),r=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];a.exports=function(g,p,y,f,v,d,m,x){var b,_,M,w,A,L,G,P,I,V=x.bits,C=0,F=0,u=0,B=0,$=0,N=0,J=0,X=0,j=0,D=0,k=null,et=0,Z=new i.Buf16(16),Q=new i.Buf16(16),ot=null,ct=0;for(C=0;C<=15;C++)Z[C]=0;for(F=0;F<f;F++)Z[p[y+F]]++;for($=V,B=15;1<=B&&Z[B]===0;B--);if(B<$&&($=B),B===0)return v[d++]=20971520,v[d++]=20971520,x.bits=1,0;for(u=1;u<B&&Z[u]===0;u++);for($<u&&($=u),C=X=1;C<=15;C++)if(X<<=1,(X-=Z[C])<0)return-1;if(0<X&&(g===0||B!==1))return-1;for(Q[1]=0,C=1;C<15;C++)Q[C+1]=Q[C]+Z[C];for(F=0;F<f;F++)p[y+F]!==0&&(m[Q[p[y+F]]++]=F);if(L=g===0?(k=ot=m,19):g===1?(k=r,et-=257,ot=o,ct-=257,256):(k=l,ot=c,-1),C=u,A=d,J=F=D=0,M=-1,w=(j=1<<(N=$))-1,g===1&&852<j||g===2&&592<j)return 1;for(;;){for(G=C-J,I=m[F]<L?(P=0,m[F]):m[F]>L?(P=ot[ct+m[F]],k[et+m[F]]):(P=96,0),b=1<<C-J,u=_=1<<N;v[A+(D>>J)+(_-=b)]=G<<24|P<<16|I|0,_!==0;);for(b=1<<C-1;D&b;)b>>=1;if(b!==0?(D&=b-1,D+=b):D=0,F++,--Z[C]==0){if(C===B)break;C=p[y+m[F]]}if($<C&&(D&w)!==M){for(J===0&&(J=$),A+=u,X=1<<(N=C-J);N+J<B&&!((X-=Z[N+J])<=0);)N++,X<<=1;if(j+=1<<N,g===1&&852<j||g===2&&592<j)return 1;v[M=D&w]=$<<24|N<<16|A-d|0}}return D!==0&&(v[A+D]=C-J<<24|64<<16|0),x.bits=$,0}},{"../utils/common":41}],51:[function(e,a,s){a.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,a,s){var i=e("../utils/common"),r=0,o=1;function l(S){for(var E=S.length;0<=--E;)S[E]=0}var c=0,g=29,p=256,y=p+1+g,f=30,v=19,d=2*y+1,m=15,x=16,b=7,_=256,M=16,w=17,A=18,L=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],G=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],P=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],I=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],V=new Array(2*(y+2));l(V);var C=new Array(2*f);l(C);var F=new Array(512);l(F);var u=new Array(256);l(u);var B=new Array(g);l(B);var $,N,J,X=new Array(f);function j(S,E,U,q,R){this.static_tree=S,this.extra_bits=E,this.extra_base=U,this.elems=q,this.max_length=R,this.has_stree=S&&S.length}function D(S,E){this.dyn_tree=S,this.max_code=0,this.stat_desc=E}function k(S){return S<256?F[S]:F[256+(S>>>7)]}function et(S,E){S.pending_buf[S.pending++]=255&E,S.pending_buf[S.pending++]=E>>>8&255}function Z(S,E,U){S.bi_valid>x-U?(S.bi_buf|=E<<S.bi_valid&65535,et(S,S.bi_buf),S.bi_buf=E>>x-S.bi_valid,S.bi_valid+=U-x):(S.bi_buf|=E<<S.bi_valid&65535,S.bi_valid+=U)}function Q(S,E,U){Z(S,U[2*E],U[2*E+1])}function ot(S,E){for(var U=0;U|=1&S,S>>>=1,U<<=1,0<--E;);return U>>>1}function ct(S,E,U){var q,R,z=new Array(m+1),W=0;for(q=1;q<=m;q++)z[q]=W=W+U[q-1]<<1;for(R=0;R<=E;R++){var K=S[2*R+1];K!==0&&(S[2*R]=ot(z[K]++,K))}}function it(S){var E;for(E=0;E<y;E++)S.dyn_ltree[2*E]=0;for(E=0;E<f;E++)S.dyn_dtree[2*E]=0;for(E=0;E<v;E++)S.bl_tree[2*E]=0;S.dyn_ltree[2*_]=1,S.opt_len=S.static_len=0,S.last_lit=S.matches=0}function at(S){8<S.bi_valid?et(S,S.bi_buf):0<S.bi_valid&&(S.pending_buf[S.pending++]=S.bi_buf),S.bi_buf=0,S.bi_valid=0}function st(S,E,U,q){var R=2*E,z=2*U;return S[R]<S[z]||S[R]===S[z]&&q[E]<=q[U]}function lt(S,E,U){for(var q=S.heap[U],R=U<<1;R<=S.heap_len&&(R<S.heap_len&&st(E,S.heap[R+1],S.heap[R],S.depth)&&R++,!st(E,q,S.heap[R],S.depth));)S.heap[U]=S.heap[R],U=R,R<<=1;S.heap[U]=q}function Tt(S,E,U){var q,R,z,W,K=0;if(S.last_lit!==0)for(;q=S.pending_buf[S.d_buf+2*K]<<8|S.pending_buf[S.d_buf+2*K+1],R=S.pending_buf[S.l_buf+K],K++,q===0?Q(S,R,E):(Q(S,(z=u[R])+p+1,E),(W=L[z])!==0&&Z(S,R-=B[z],W),Q(S,z=k(--q),U),(W=G[z])!==0&&Z(S,q-=X[z],W)),K<S.last_lit;);Q(S,_,E)}function yt(S,E){var U,q,R,z=E.dyn_tree,W=E.stat_desc.static_tree,K=E.stat_desc.has_stree,tt=E.stat_desc.elems,rt=-1;for(S.heap_len=0,S.heap_max=d,U=0;U<tt;U++)z[2*U]!==0?(S.heap[++S.heap_len]=rt=U,S.depth[U]=0):z[2*U+1]=0;for(;S.heap_len<2;)z[2*(R=S.heap[++S.heap_len]=rt<2?++rt:0)]=1,S.depth[R]=0,S.opt_len--,K&&(S.static_len-=W[2*R+1]);for(E.max_code=rt,U=S.heap_len>>1;1<=U;U--)lt(S,z,U);for(R=tt;U=S.heap[1],S.heap[1]=S.heap[S.heap_len--],lt(S,z,1),q=S.heap[1],S.heap[--S.heap_max]=U,S.heap[--S.heap_max]=q,z[2*R]=z[2*U]+z[2*q],S.depth[R]=(S.depth[U]>=S.depth[q]?S.depth[U]:S.depth[q])+1,z[2*U+1]=z[2*q+1]=R,S.heap[1]=R++,lt(S,z,1),2<=S.heap_len;);S.heap[--S.heap_max]=S.heap[1],(function(nt,mt){var St,Pt,Xt,ft,he,Jt,Ft=mt.dyn_tree,ze=mt.max_code,wa=mt.stat_desc.static_tree,_a=mt.stat_desc.has_stree,Ma=mt.stat_desc.extra_bits,er=mt.stat_desc.extra_base,be=mt.stat_desc.max_length,Ge=0;for(ft=0;ft<=m;ft++)nt.bl_count[ft]=0;for(Ft[2*nt.heap[nt.heap_max]+1]=0,St=nt.heap_max+1;St<d;St++)be<(ft=Ft[2*Ft[2*(Pt=nt.heap[St])+1]+1]+1)&&(ft=be,Ge++),Ft[2*Pt+1]=ft,ze<Pt||(nt.bl_count[ft]++,he=0,er<=Pt&&(he=Ma[Pt-er]),Jt=Ft[2*Pt],nt.opt_len+=Jt*(ft+he),_a&&(nt.static_len+=Jt*(wa[2*Pt+1]+he)));if(Ge!==0){do{for(ft=be-1;nt.bl_count[ft]===0;)ft--;nt.bl_count[ft]--,nt.bl_count[ft+1]+=2,nt.bl_count[be]--,Ge-=2}while(0<Ge);for(ft=be;ft!==0;ft--)for(Pt=nt.bl_count[ft];Pt!==0;)ze<(Xt=nt.heap[--St])||(Ft[2*Xt+1]!==ft&&(nt.opt_len+=(ft-Ft[2*Xt+1])*Ft[2*Xt],Ft[2*Xt+1]=ft),Pt--)}})(S,E),ct(z,rt,S.bl_count)}function h(S,E,U){var q,R,z=-1,W=E[1],K=0,tt=7,rt=4;for(W===0&&(tt=138,rt=3),E[2*(U+1)+1]=65535,q=0;q<=U;q++)R=W,W=E[2*(q+1)+1],++K<tt&&R===W||(K<rt?S.bl_tree[2*R]+=K:R!==0?(R!==z&&S.bl_tree[2*R]++,S.bl_tree[2*M]++):K<=10?S.bl_tree[2*w]++:S.bl_tree[2*A]++,z=R,rt=(K=0)===W?(tt=138,3):R===W?(tt=6,3):(tt=7,4))}function H(S,E,U){var q,R,z=-1,W=E[1],K=0,tt=7,rt=4;for(W===0&&(tt=138,rt=3),q=0;q<=U;q++)if(R=W,W=E[2*(q+1)+1],!(++K<tt&&R===W)){if(K<rt)for(;Q(S,R,S.bl_tree),--K!=0;);else R!==0?(R!==z&&(Q(S,R,S.bl_tree),K--),Q(S,M,S.bl_tree),Z(S,K-3,2)):K<=10?(Q(S,w,S.bl_tree),Z(S,K-3,3)):(Q(S,A,S.bl_tree),Z(S,K-11,7));z=R,rt=(K=0)===W?(tt=138,3):R===W?(tt=6,3):(tt=7,4)}}l(X);var O=!1;function T(S,E,U,q){Z(S,(c<<1)+(q?1:0),3),(function(R,z,W,K){at(R),et(R,W),et(R,~W),i.arraySet(R.pending_buf,R.window,z,W,R.pending),R.pending+=W})(S,E,U)}s._tr_init=function(S){O||((function(){var E,U,q,R,z,W=new Array(m+1);for(R=q=0;R<g-1;R++)for(B[R]=q,E=0;E<1<<L[R];E++)u[q++]=R;for(u[q-1]=R,R=z=0;R<16;R++)for(X[R]=z,E=0;E<1<<G[R];E++)F[z++]=R;for(z>>=7;R<f;R++)for(X[R]=z<<7,E=0;E<1<<G[R]-7;E++)F[256+z++]=R;for(U=0;U<=m;U++)W[U]=0;for(E=0;E<=143;)V[2*E+1]=8,E++,W[8]++;for(;E<=255;)V[2*E+1]=9,E++,W[9]++;for(;E<=279;)V[2*E+1]=7,E++,W[7]++;for(;E<=287;)V[2*E+1]=8,E++,W[8]++;for(ct(V,y+1,W),E=0;E<f;E++)C[2*E+1]=5,C[2*E]=ot(E,5);$=new j(V,L,p+1,y,m),N=new j(C,G,0,f,m),J=new j(new Array(0),P,0,v,b)})(),O=!0),S.l_desc=new D(S.dyn_ltree,$),S.d_desc=new D(S.dyn_dtree,N),S.bl_desc=new D(S.bl_tree,J),S.bi_buf=0,S.bi_valid=0,it(S)},s._tr_stored_block=T,s._tr_flush_block=function(S,E,U,q){var R,z,W=0;0<S.level?(S.strm.data_type===2&&(S.strm.data_type=(function(K){var tt,rt=4093624447;for(tt=0;tt<=31;tt++,rt>>>=1)if(1&rt&&K.dyn_ltree[2*tt]!==0)return r;if(K.dyn_ltree[18]!==0||K.dyn_ltree[20]!==0||K.dyn_ltree[26]!==0)return o;for(tt=32;tt<p;tt++)if(K.dyn_ltree[2*tt]!==0)return o;return r})(S)),yt(S,S.l_desc),yt(S,S.d_desc),W=(function(K){var tt;for(h(K,K.dyn_ltree,K.l_desc.max_code),h(K,K.dyn_dtree,K.d_desc.max_code),yt(K,K.bl_desc),tt=v-1;3<=tt&&K.bl_tree[2*I[tt]+1]===0;tt--);return K.opt_len+=3*(tt+1)+5+5+4,tt})(S),R=S.opt_len+3+7>>>3,(z=S.static_len+3+7>>>3)<=R&&(R=z)):R=z=U+5,U+4<=R&&E!==-1?T(S,E,U,q):S.strategy===4||z===R?(Z(S,2+(q?1:0),3),Tt(S,V,C)):(Z(S,4+(q?1:0),3),(function(K,tt,rt,nt){var mt;for(Z(K,tt-257,5),Z(K,rt-1,5),Z(K,nt-4,4),mt=0;mt<nt;mt++)Z(K,K.bl_tree[2*I[mt]+1],3);H(K,K.dyn_ltree,tt-1),H(K,K.dyn_dtree,rt-1)})(S,S.l_desc.max_code+1,S.d_desc.max_code+1,W+1),Tt(S,S.dyn_ltree,S.dyn_dtree)),it(S),q&&at(S)},s._tr_tally=function(S,E,U){return S.pending_buf[S.d_buf+2*S.last_lit]=E>>>8&255,S.pending_buf[S.d_buf+2*S.last_lit+1]=255&E,S.pending_buf[S.l_buf+S.last_lit]=255&U,S.last_lit++,E===0?S.dyn_ltree[2*U]++:(S.matches++,E--,S.dyn_ltree[2*(u[U]+p+1)]++,S.dyn_dtree[2*k(E)]++),S.last_lit===S.lit_bufsize-1},s._tr_align=function(S){Z(S,2,3),Q(S,_,V),(function(E){E.bi_valid===16?(et(E,E.bi_buf),E.bi_buf=0,E.bi_valid=0):8<=E.bi_valid&&(E.pending_buf[E.pending++]=255&E.bi_buf,E.bi_buf>>=8,E.bi_valid-=8)})(S)}},{"../utils/common":41}],53:[function(e,a,s){a.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,a,s){(function(i){(function(r,o){if(!r.setImmediate){var l,c,g,p,y=1,f={},v=!1,d=r.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(r);m=m&&m.setTimeout?m:r,l={}.toString.call(r.process)==="[object process]"?function(M){process.nextTick(function(){b(M)})}:(function(){if(r.postMessage&&!r.importScripts){var M=!0,w=r.onmessage;return r.onmessage=function(){M=!1},r.postMessage("","*"),r.onmessage=w,M}})()?(p="setImmediate$"+Math.random()+"$",r.addEventListener?r.addEventListener("message",_,!1):r.attachEvent("onmessage",_),function(M){r.postMessage(p+M,"*")}):r.MessageChannel?((g=new MessageChannel).port1.onmessage=function(M){b(M.data)},function(M){g.port2.postMessage(M)}):d&&"onreadystatechange"in d.createElement("script")?(c=d.documentElement,function(M){var w=d.createElement("script");w.onreadystatechange=function(){b(M),w.onreadystatechange=null,c.removeChild(w),w=null},c.appendChild(w)}):function(M){setTimeout(b,0,M)},m.setImmediate=function(M){typeof M!="function"&&(M=new Function(""+M));for(var w=new Array(arguments.length-1),A=0;A<w.length;A++)w[A]=arguments[A+1];var L={callback:M,args:w};return f[y]=L,l(y),y++},m.clearImmediate=x}function x(M){delete f[M]}function b(M){if(v)setTimeout(b,0,M);else{var w=f[M];if(w){v=!0;try{(function(A){var L=A.callback,G=A.args;switch(G.length){case 0:L();break;case 1:L(G[0]);break;case 2:L(G[0],G[1]);break;case 3:L(G[0],G[1],G[2]);break;default:L.apply(o,G)}})(w)}finally{x(M),v=!1}}}}function _(M){M.source===r&&typeof M.data=="string"&&M.data.indexOf(p)===0&&b(+M.data.slice(p.length))}})(typeof self>"u"?i===void 0?this:i:self)}).call(this,typeof Ne<"u"?Ne:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(gn)),gn.exports}var Ra=Pa();const zn=Ia(Ra),Fa=""+new URL("pdf.worker.min-wgc6bjNh.mjs",import.meta.url).href,rr=64,ir=1024,Ba=3e4,La=22e4;function Zr(n){const t=n.segmentCount,e=Math.max(n.bounds.maxX-n.bounds.minX,1e-5),a=Math.max(n.bounds.maxY-n.bounds.minY,1e-5),{gridWidth:s,gridHeight:i}=ka(t,e,a),r=s*i,o=e/s,l=a/i,c=new Uint32Array(r);let g=0;for(let d=0;d<t;d+=1){const m=d*4,x=d*4,_=n.styles[x]+.35,M=n.primitiveBounds[m]-_,w=n.primitiveBounds[m+1]-_,A=n.primitiveBounds[m+2]+_,L=n.primitiveBounds[m+3]+_,G=jt(Math.floor((M-n.bounds.minX)/o),s),P=jt(Math.floor((A-n.bounds.minX)/o),s),I=jt(Math.floor((w-n.bounds.minY)/l),i),V=jt(Math.floor((L-n.bounds.minY)/l),i);for(let C=I;C<=V;C+=1){let F=C*s+G;for(let u=G;u<=P;u+=1){const B=c[F]+1;c[F]=B,B>g&&(g=B),F+=1}}}const p=new Uint32Array(r+1);for(let d=0;d<r;d+=1)p[d+1]=p[d]+c[d];const y=p[r],f=new Uint32Array(y),v=p.slice(0,r);for(let d=0;d<t;d+=1){const m=d*4,x=d*4,_=n.styles[x]+.35,M=n.primitiveBounds[m]-_,w=n.primitiveBounds[m+1]-_,A=n.primitiveBounds[m+2]+_,L=n.primitiveBounds[m+3]+_,G=jt(Math.floor((M-n.bounds.minX)/o),s),P=jt(Math.floor((A-n.bounds.minX)/o),s),I=jt(Math.floor((w-n.bounds.minY)/l),i),V=jt(Math.floor((L-n.bounds.minY)/l),i);for(let C=I;C<=V;C+=1){let F=C*s+G;for(let u=G;u<=P;u+=1){const B=v[F];f[B]=d,v[F]=B+1,F+=1}}}return{gridWidth:s,gridHeight:i,minX:n.bounds.minX,minY:n.bounds.minY,maxX:n.bounds.maxX,maxY:n.bounds.maxY,cellWidth:o,cellHeight:l,offsets:p,counts:c,indices:f,maxCellPopulation:g}}function ka(n,t,e){const a=xn(Math.round(n/8),Ba,La),s=t/e;let i=Math.round(Math.sqrt(a*s)),r=Math.round(a/Math.max(i,1));return i=xn(i,rr,ir),r=xn(r,rr,ir),{gridWidth:i,gridHeight:r}}function jt(n,t){return n<0?0:n>=t?t-1:n}function xn(n,t,e){return n<t?t:n>e?e:n}const Da=96,Oa=[1,.85,.7,.55,.4,.3],_n=8,ar=256,xe=8,sr=.001;function jr(n,t){if(typeof document>"u"||n.textGlyphCount<=0)return null;const e=new Float32Array(n.textGlyphCount*4),a=Pe(Math.trunc(t)||4096,256,8192);let s=null;for(const c of Oa){const g=Math.max(_n,Math.round(Da*c)),p=za(n,g);if(p.length===0)return null;const y=Ga(p,a);if(y){s=y;break}}if(!s)return null;const i=document.createElement("canvas");i.width=s.width,i.height=s.height;const r=i.getContext("2d",{alpha:!0,willReadFrequently:!0});if(!r)return null;r.setTransform(1,0,0,1,0,0),r.clearRect(0,0,s.width,s.height),r.fillStyle="#ffffff",r.globalCompositeOperation="source-over";for(const c of s.placements){if(!Na(r,c,n))continue;r.fill("nonzero");const g=c.index*4;e[g]=(c.x+xe)/s.width,e[g+1]=(c.y+xe)/s.height,e[g+2]=c.innerWidth/s.width,e[g+3]=c.innerHeight/s.height}const o=r.getImageData(0,0,s.width,s.height),l=new Uint8Array(o.data);return{width:s.width,height:s.height,rgba:l,glyphUvRects:e}}function za(n,t){const e=[];for(let a=0;a<n.textGlyphCount;a+=1){const s=a*4,i=Math.max(0,Math.trunc(n.textGlyphMetaA[s])),r=Math.max(0,Math.trunc(n.textGlyphMetaA[s+1]));if(r<=0)continue;const o=n.textGlyphMetaA[s+2],l=n.textGlyphMetaA[s+3],c=n.textGlyphMetaB[s],g=n.textGlyphMetaB[s+1],p=c-o,y=g-l;if(!Number.isFinite(p)||!Number.isFinite(y)||p<=1e-6||y<=1e-6)continue;const f=t/Math.max(p,y),v=Pe(Math.ceil(p*f),_n,ar),d=Pe(Math.ceil(y*f),_n,ar);e.push({index:a,segmentStart:i,segmentCount:r,minX:o,minY:l,maxX:c,maxY:g,innerWidth:v,innerHeight:d,tileWidth:v+xe*2,tileHeight:d+xe*2,x:0,y:0})}return e}function Ga(n,t){if(n.length===0)return null;const e=n.slice().sort((r,o)=>r.tileHeight!==o.tileHeight?o.tileHeight-r.tileHeight:o.tileWidth-r.tileWidth),a=e.reduce((r,o)=>r+o.tileWidth*o.tileHeight,0),s=e.reduce((r,o)=>Math.max(r,o.tileWidth),0);let i=Pe(lr(Math.ceil(Math.sqrt(a)*1.15)),s,t);for(;i<=t;){let r=0,o=0,l=0,c=!1;for(const g of e){if(g.tileWidth>i){c=!0;break}if(r+g.tileWidth>i&&(r=0,o+=l,l=0),g.x=r,g.y=o,r+=g.tileWidth,l=Math.max(l,g.tileHeight),o+l>t){c=!0;break}}if(!c){const g=o+l,p=Pe(lr(Math.max(g,1)),1,t);if(p<=t)return{placements:e,width:i,height:p}}if(i===t)break;i=Math.min(t,i*2)}return null}function Na(n,t,e){const a=Math.max(t.maxX-t.minX,1e-6),s=Math.max(t.maxY-t.minY,1e-6),i=t.innerWidth/a,r=t.innerHeight/s,o=t.x+xe-t.minX*i,l=t.y+xe+t.maxY*r,c=x=>o+x*i,g=x=>l-x*r;n.beginPath();let p=!1,y=!1,f=0,v=0,d=0,m=0;for(let x=0;x<t.segmentCount;x+=1){const _=(t.segmentStart+x)*4;if(_+3>=e.textGlyphSegmentsA.length||_+3>=e.textGlyphSegmentsB.length)break;const M=e.textGlyphSegmentsA[_],w=e.textGlyphSegmentsA[_+1],A=e.textGlyphSegmentsA[_+2],L=e.textGlyphSegmentsA[_+3],G=e.textGlyphSegmentsB[_],P=e.textGlyphSegmentsB[_+1],I=e.textGlyphSegmentsB[_+2];(!y||!or(M,w,d,m))&&(y&&n.closePath(),n.moveTo(c(M),g(w)),y=!0,f=M,v=w),I>=.5?n.quadraticCurveTo(c(A),g(L),c(G),g(P)):n.lineTo(c(G),g(P)),p=!0,d=G,m=P,or(d,m,f,v)&&(n.closePath(),y=!1)}return y&&n.closePath(),p}function or(n,t,e,a){return Math.abs(n-e)<=sr&&Math.abs(t-a)<=sr}function lr(n){if(n<=1)return 1;let t=1;for(;t<n;)t<<=1;return t}function Pe(n,t,e){return n<t?t:n>e?e:n}const Ua=`#version 300 es
precision highp float;
precision highp sampler2D;

layout(location = 0) in vec2 aCorner;
layout(location = 1) in float aSegmentIndex;

uniform sampler2D uSegmentTexA;
uniform sampler2D uSegmentTexB;
uniform sampler2D uSegmentStyleTex;
uniform sampler2D uSegmentBoundsTex;
uniform ivec2 uSegmentTexSize;
uniform vec2 uViewport;
uniform vec2 uCameraCenter;
uniform float uZoom;
uniform float uAAScreenPx;

out vec2 vLocal;
flat out vec2 vP0;
flat out vec2 vP1;
flat out vec2 vP2;
flat out float vPrimitiveType;
flat out float vHalfWidth;
flat out float vAAWorld;
flat out vec3 vColor;
flat out float vAlpha;

ivec2 segmentCoord(int index) {
  int x = index % uSegmentTexSize.x;
  int y = index / uSegmentTexSize.x;
  return ivec2(x, y);
}

void main() {
  int index = int(aSegmentIndex + 0.5);
  vec4 primitiveA = texelFetch(uSegmentTexA, segmentCoord(index), 0);
  vec4 primitiveB = texelFetch(uSegmentTexB, segmentCoord(index), 0);
  vec4 style = texelFetch(uSegmentStyleTex, segmentCoord(index), 0);
  vec4 primitiveBounds = texelFetch(uSegmentBoundsTex, segmentCoord(index), 0);

  vec2 p0 = primitiveA.xy;
  vec2 p1 = primitiveA.zw;
  vec2 p2 = primitiveB.xy;
  float primitiveType = primitiveB.z;
  bool isQuadratic = primitiveType >= 0.5;
  float halfWidth = style.x;
  vec3 color = style.yzw;
  float packedStyle = primitiveB.w;
  float styleFlags = packedStyle >= 2.0 ? 1.0 : 0.0;
  float alpha = packedStyle - styleFlags * 2.0;
  bool isHairline = styleFlags >= 0.5;

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
    vAAWorld = 1.0;
    vColor = color;
    vAlpha = 0.0;
    return;
  }

  if (isHairline) {
    halfWidth = max(0.5 / max(uZoom, 1e-4), 1e-5);
  }

  float aaWorld = max(1.0 / uZoom, 0.0001) * uAAScreenPx;
  if (isHairline) {
    aaWorld = max(0.35 / max(uZoom, 1e-4), 5e-5);
  }

  float extent = halfWidth + aaWorld;
  vec2 worldMin = primitiveBounds.xy - vec2(extent);
  vec2 worldMax = primitiveBounds.zw + vec2(extent);
  vec2 corner01 = aCorner * 0.5 + 0.5;
  vec2 worldPosition = mix(worldMin, worldMax, corner01);

  vec2 screen = (worldPosition - uCameraCenter) * uZoom + 0.5 * uViewport;
  vec2 clip = (screen / (0.5 * uViewport)) - 1.0;

  gl_Position = vec4(clip, 0.0, 1.0);

  vLocal = worldPosition;
  vP0 = p0;
  vP1 = p1;
  vP2 = p2;
  vPrimitiveType = primitiveType;
  vHalfWidth = halfWidth;
  vAAWorld = aaWorld;
  vColor = color;
  vAlpha = alpha;
}
`,Xa=`#version 300 es
precision highp float;
uniform float uStrokeCurveEnabled;
uniform vec4 uVectorOverride;
in vec2 vLocal;
flat in vec2 vP0;
flat in vec2 vP1;
flat in vec2 vP2;
flat in float vPrimitiveType;
flat in float vHalfWidth;
flat in float vAAWorld;
flat in vec3 vColor;
flat in float vAlpha;

out vec4 outColor;

float distanceToLineSegment(vec2 p, vec2 a, vec2 b) {
  vec2 ab = b - a;
  float abLenSq = dot(ab, ab);
  if (abLenSq <= 1e-10) {
    return length(p - a);
  }
  float t = clamp(dot(p - a, ab) / abLenSq, 0.0, 1.0);
  return length(p - (a + ab * t));
}

float distanceToQuadraticBezier(vec2 p, vec2 a, vec2 b, vec2 c) {
  vec2 aa = b - a;
  vec2 bb = a - 2.0 * b + c;
  vec2 cc = aa * 2.0;
  vec2 dd = a - p;

  float bbLenSq = dot(bb, bb);
  if (bbLenSq <= 1e-12) {
    return distanceToLineSegment(p, a, c);
  }

  float inv = 1.0 / bbLenSq;
  float kx = inv * dot(aa, bb);
  float ky = inv * (2.0 * dot(aa, aa) + dot(dd, bb)) / 3.0;
  float kz = inv * dot(dd, aa);

  float pValue = ky - kx * kx;
  float pCube = pValue * pValue * pValue;
  float qValue = kx * (2.0 * kx * kx - 3.0 * ky) + kz;
  float hValue = qValue * qValue + 4.0 * pCube;

  float best = 1e20;

  if (hValue >= 0.0) {
    float hSqrt = sqrt(hValue);
    vec2 roots = (vec2(hSqrt, -hSqrt) - qValue) * 0.5;
    vec2 uv = sign(roots) * pow(abs(roots), vec2(1.0 / 3.0));
    float t = clamp(uv.x + uv.y - kx, 0.0, 1.0);
    vec2 delta = dd + (cc + bb * t) * t;
    best = dot(delta, delta);
  } else {
    float z = sqrt(-pValue);
    float acosArg = clamp(qValue / (2.0 * pValue * z), -1.0, 1.0);
    float angle = acos(acosArg) / 3.0;
    float cosine = cos(angle);
    float sine = sin(angle) * 1.732050808;
    vec3 t = clamp(vec3(cosine + cosine, -sine - cosine, sine - cosine) * z - kx, 0.0, 1.0);

    vec2 delta = dd + (cc + bb * t.x) * t.x;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.y) * t.y;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.z) * t.z;
    best = min(best, dot(delta, delta));
  }

  return sqrt(max(best, 0.0));
}

void main() {
  if (vAlpha <= 0.001) {
    discard;
  }

  float distanceToSegment = (uStrokeCurveEnabled >= 0.5 && vPrimitiveType >= 0.5)
    ? distanceToQuadraticBezier(vLocal, vP0, vP1, vP2)
    : distanceToLineSegment(vLocal, vP0, vP2);

  float coverage = 1.0 - smoothstep(vHalfWidth - vAAWorld, vHalfWidth + vAAWorld, distanceToSegment);
  float alpha = coverage * vAlpha;

  if (alpha <= 0.001) {
    discard;
  }

  vec3 color = mix(vColor, uVectorOverride.rgb, clamp(uVectorOverride.a, 0.0, 1.0));
  outColor = vec4(color, alpha);
}
`,Va=`#version 300 es
precision highp float;
precision highp sampler2D;

layout(location = 0) in vec2 aCorner;
layout(location = 3) in float aFillPathIndex;

uniform sampler2D uFillPathMetaTexA;
uniform sampler2D uFillPathMetaTexB;
uniform sampler2D uFillPathMetaTexC;
uniform ivec2 uFillPathMetaTexSize;
uniform vec2 uViewport;
uniform vec2 uCameraCenter;
uniform float uZoom;

flat out int vSegmentStart;
flat out int vSegmentCount;
flat out vec3 vColor;
flat out float vAlpha;
flat out float vFillRule;
flat out float vFillHasCompanionStroke;
out vec2 vLocal;

ivec2 coordFromIndex(int index, ivec2 sizeValue) {
  int x = index % sizeValue.x;
  int y = index / sizeValue.x;
  return ivec2(x, y);
}

void main() {
  int pathIndex = int(aFillPathIndex + 0.5);
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
    return;
  }

  vec2 minBounds = metaA.zw;
  vec2 maxBounds = metaB.xy;
  vec2 corner01 = aCorner * 0.5 + 0.5;
  vec2 world = mix(minBounds, maxBounds, corner01);

  vec2 screen = (world - uCameraCenter) * uZoom + 0.5 * uViewport;
  vec2 clip = (screen / (0.5 * uViewport)) - 1.0;
  gl_Position = vec4(clip, 0.0, 1.0);

  vSegmentStart = int(metaA.x + 0.5);
  vSegmentCount = segmentCount;
  vColor = vec3(metaB.z, metaB.w, metaC.z);
  vAlpha = alpha;
  vFillRule = metaC.x;
  vFillHasCompanionStroke = metaC.y;
  vLocal = world;
}
`,Wa=`#version 300 es
precision highp float;
precision highp sampler2D;

uniform sampler2D uFillSegmentTexA;
uniform sampler2D uFillSegmentTexB;
uniform ivec2 uFillSegmentTexSize;
uniform float uFillAAScreenPx;
uniform vec4 uVectorOverride;

flat in int vSegmentStart;
flat in int vSegmentCount;
flat in vec3 vColor;
flat in float vAlpha;
flat in float vFillRule;
flat in float vFillHasCompanionStroke;
in vec2 vLocal;

out vec4 outColor;

const int MAX_FILL_PATH_PRIMITIVES = 2048;
const float FILL_PRIMITIVE_QUADRATIC = 1.0;
const int QUAD_WINDING_SUBDIVISIONS = 6;

ivec2 coordFromIndex(int index, ivec2 sizeValue) {
  int x = index % sizeValue.x;
  int y = index / sizeValue.x;
  return ivec2(x, y);
}

float distanceToLineSegment(vec2 p, vec2 a, vec2 b) {
  vec2 ab = b - a;
  float abLenSq = dot(ab, ab);
  if (abLenSq <= 1e-10) {
    return length(p - a);
  }
  float t = clamp(dot(p - a, ab) / abLenSq, 0.0, 1.0);
  return length(p - (a + ab * t));
}

float distanceToQuadraticBezier(vec2 p, vec2 a, vec2 b, vec2 c) {
  vec2 aa = b - a;
  vec2 bb = a - 2.0 * b + c;
  vec2 cc = aa * 2.0;
  vec2 dd = a - p;

  float bbLenSq = dot(bb, bb);
  if (bbLenSq <= 1e-12) {
    return distanceToLineSegment(p, a, c);
  }

  float inv = 1.0 / bbLenSq;
  float kx = inv * dot(aa, bb);
  float ky = inv * (2.0 * dot(aa, aa) + dot(dd, bb)) / 3.0;
  float kz = inv * dot(dd, aa);

  float pValue = ky - kx * kx;
  float pCube = pValue * pValue * pValue;
  float qValue = kx * (2.0 * kx * kx - 3.0 * ky) + kz;
  float hValue = qValue * qValue + 4.0 * pCube;

  float best = 1e20;

  if (hValue >= 0.0) {
    float hSqrt = sqrt(hValue);
    vec2 roots = (vec2(hSqrt, -hSqrt) - qValue) * 0.5;
    vec2 uv = sign(roots) * pow(abs(roots), vec2(1.0 / 3.0));
    float t = clamp(uv.x + uv.y - kx, 0.0, 1.0);
    vec2 delta = dd + (cc + bb * t) * t;
    best = dot(delta, delta);
  } else {
    float z = sqrt(-pValue);
    float acosArg = clamp(qValue / (2.0 * pValue * z), -1.0, 1.0);
    float angle = acos(acosArg) / 3.0;
    float cosine = cos(angle);
    float sine = sin(angle) * 1.732050808;
    vec3 t = clamp(vec3(cosine + cosine, -sine - cosine, sine - cosine) * z - kx, 0.0, 1.0);

    vec2 delta = dd + (cc + bb * t.x) * t.x;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.y) * t.y;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.z) * t.z;
    best = min(best, dot(delta, delta));
  }

  return sqrt(max(best, 0.0));
}

vec2 evaluateQuadratic(vec2 a, vec2 b, vec2 c, float t) {
  float oneMinusT = 1.0 - t;
  return oneMinusT * oneMinusT * a + 2.0 * oneMinusT * t * b + t * t * c;
}

void accumulateLineCrossing(vec2 a, vec2 b, vec2 p, inout int winding, inout int crossings) {
  bool upward = (a.y <= p.y) && (b.y > p.y);
  bool downward = (a.y > p.y) && (b.y <= p.y);
  if (!upward && !downward) {
    return;
  }

  float denom = b.y - a.y;
  if (abs(denom) <= 1e-6) {
    return;
  }

  float xCross = a.x + (p.y - a.y) * (b.x - a.x) / denom;
  if (xCross > p.x) {
    crossings += 1;
    winding += upward ? 1 : -1;
  }
}

void accumulateQuadraticCrossing(vec2 a, vec2 b, vec2 c, vec2 p, inout int winding, inout int crossings) {
  vec2 prev = a;
  for (int i = 1; i <= QUAD_WINDING_SUBDIVISIONS; i += 1) {
    float t = float(i) / float(QUAD_WINDING_SUBDIVISIONS);
    vec2 next = evaluateQuadratic(a, b, c, t);
    accumulateLineCrossing(prev, next, p, winding, crossings);
    prev = next;
  }
}

void main() {
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
`,Ya=`#version 300 es
precision highp float;
precision highp sampler2D;

layout(location = 0) in vec2 aCorner;
layout(location = 2) in float aTextInstanceIndex;

uniform sampler2D uTextInstanceTexA;
uniform sampler2D uTextInstanceTexB;
uniform sampler2D uTextInstanceTexC;
uniform sampler2D uTextGlyphMetaTexA;
uniform sampler2D uTextGlyphMetaTexB;
uniform sampler2D uTextGlyphRasterMetaTex;
uniform ivec2 uTextInstanceTexSize;
uniform ivec2 uTextGlyphMetaTexSize;
uniform vec2 uViewport;
uniform vec2 uCameraCenter;
uniform float uZoom;

flat out int vSegmentStart;
flat out int vSegmentCount;
flat out vec3 vColor;
flat out float vColorAlpha;
flat out vec4 vRasterRect;
out vec2 vNormCoord;
out vec2 vLocal;

ivec2 coordFromIndex(int index, ivec2 sizeValue) {
  int x = index % sizeValue.x;
  int y = index / sizeValue.x;
  return ivec2(x, y);
}

void main() {
  int instanceIndex = int(aTextInstanceIndex + 0.5);
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
    return;
  }

  vec2 minBounds = glyphMetaA.zw;
  vec2 maxBounds = glyphMetaB.xy;
  vec2 corner01 = aCorner * 0.5 + 0.5;
  vec2 local = mix(minBounds, maxBounds, corner01);

  vec2 world = vec2(
    instanceA.x * local.x + instanceA.z * local.y + instanceB.x,
    instanceA.y * local.x + instanceA.w * local.y + instanceB.y
  );

  vec2 screen = (world - uCameraCenter) * uZoom + 0.5 * uViewport;
  vec2 clip = (screen / (0.5 * uViewport)) - 1.0;

  gl_Position = vec4(clip, 0.0, 1.0);
  vSegmentStart = int(glyphMetaA.x + 0.5);
  vSegmentCount = segmentCount;
  vColor = instanceC.rgb;
  vColorAlpha = instanceC.a;
  vRasterRect = glyphRasterMeta;
  vNormCoord = clamp((local - minBounds) / max(maxBounds - minBounds, vec2(1e-6)), 0.0, 1.0);
  vLocal = local;
}
`,Ha=`#version 300 es
precision highp float;
precision highp sampler2D;

uniform sampler2D uTextGlyphSegmentTexA;
uniform sampler2D uTextGlyphSegmentTexB;
uniform sampler2D uTextRasterAtlasTex;
uniform ivec2 uTextGlyphSegmentTexSize;
uniform vec2 uTextRasterAtlasSize;
uniform float uTextAAScreenPx;
uniform float uTextCurveEnabled;
uniform float uTextVectorOnly;
uniform vec4 uVectorOverride;

flat in int vSegmentStart;
flat in int vSegmentCount;
flat in vec3 vColor;
flat in float vColorAlpha;
flat in vec4 vRasterRect;
in vec2 vNormCoord;
in vec2 vLocal;

out vec4 outColor;

const int MAX_GLYPH_PRIMITIVES = 256;
const float TEXT_PRIMITIVE_QUADRATIC = 1.0;
const int QUAD_WINDING_SUBDIVISIONS = 6;

ivec2 coordFromIndex(int index, ivec2 sizeValue) {
  int x = index % sizeValue.x;
  int y = index / sizeValue.x;
  return ivec2(x, y);
}

float distanceToLineSegment(vec2 p, vec2 a, vec2 b) {
  vec2 ab = b - a;
  float abLenSq = dot(ab, ab);
  if (abLenSq <= 1e-10) {
    return length(p - a);
  }
  float t = clamp(dot(p - a, ab) / abLenSq, 0.0, 1.0);
  return length(p - (a + ab * t));
}

float distanceToQuadraticBezier(vec2 p, vec2 a, vec2 b, vec2 c) {
  vec2 aa = b - a;
  vec2 bb = a - 2.0 * b + c;
  vec2 cc = aa * 2.0;
  vec2 dd = a - p;

  float bbLenSq = dot(bb, bb);
  if (bbLenSq <= 1e-12) {
    return distanceToLineSegment(p, a, c);
  }

  float inv = 1.0 / bbLenSq;
  float kx = inv * dot(aa, bb);
  float ky = inv * (2.0 * dot(aa, aa) + dot(dd, bb)) / 3.0;
  float kz = inv * dot(dd, aa);

  float pValue = ky - kx * kx;
  float pCube = pValue * pValue * pValue;
  float qValue = kx * (2.0 * kx * kx - 3.0 * ky) + kz;
  float hValue = qValue * qValue + 4.0 * pCube;

  float best = 1e20;

  if (hValue >= 0.0) {
    float hSqrt = sqrt(hValue);
    vec2 roots = (vec2(hSqrt, -hSqrt) - qValue) * 0.5;
    vec2 uv = sign(roots) * pow(abs(roots), vec2(1.0 / 3.0));
    float t = clamp(uv.x + uv.y - kx, 0.0, 1.0);
    vec2 delta = dd + (cc + bb * t) * t;
    best = dot(delta, delta);
  } else {
    float z = sqrt(-pValue);
    float acosArg = clamp(qValue / (2.0 * pValue * z), -1.0, 1.0);
    float angle = acos(acosArg) / 3.0;
    float cosine = cos(angle);
    float sine = sin(angle) * 1.732050808;
    vec3 t = clamp(vec3(cosine + cosine, -sine - cosine, sine - cosine) * z - kx, 0.0, 1.0);

    vec2 delta = dd + (cc + bb * t.x) * t.x;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.y) * t.y;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.z) * t.z;
    best = min(best, dot(delta, delta));
  }

  return sqrt(max(best, 0.0));
}

vec2 evaluateQuadratic(vec2 a, vec2 b, vec2 c, float t) {
  float oneMinusT = 1.0 - t;
  return oneMinusT * oneMinusT * a + 2.0 * oneMinusT * t * b + t * t * c;
}

void accumulateLineCrossing(vec2 a, vec2 b, vec2 p, inout int winding) {
  bool upward = (a.y <= p.y) && (b.y > p.y);
  bool downward = (a.y > p.y) && (b.y <= p.y);
  if (!upward && !downward) {
    return;
  }

  float denom = b.y - a.y;
  if (abs(denom) <= 1e-6) {
    return;
  }

  float xCross = a.x + (p.y - a.y) * (b.x - a.x) / denom;
  if (xCross > p.x) {
    winding += upward ? 1 : -1;
  }
}

void accumulateQuadraticCrossing(vec2 a, vec2 b, vec2 c, vec2 p, inout int winding) {
  // Subdivide for winding crossings to avoid endpoint/tangent root precision seams.
  vec2 prev = a;
  for (int i = 1; i <= QUAD_WINDING_SUBDIVISIONS; i += 1) {
    float t = float(i) / float(QUAD_WINDING_SUBDIVISIONS);
    vec2 next = evaluateQuadratic(a, b, c, t);
    accumulateLineCrossing(prev, next, p, winding);
    prev = next;
  }
}

void main() {
  if (vSegmentCount <= 0) {
    discard;
  }

  if (uTextVectorOnly < 0.5 && vRasterRect.z > 0.0 && vRasterRect.w > 0.0) {
    vec2 atlasPxSize = max(uTextRasterAtlasSize, vec2(1.0));
    vec2 nc = vec2(vNormCoord.x, 1.0 - vNormCoord.y) * (vRasterRect.zw * atlasPxSize);
    if (min(fwidth(nc.x), fwidth(nc.y)) > 2.0) {
      vec2 uvCenter = vec2(
        vRasterRect.x + vNormCoord.x * vRasterRect.z,
        vRasterRect.y + (1.0 - vNormCoord.y) * vRasterRect.w
      );
      vec2 texel = 1.0 / atlasPxSize;
      vec2 uvMin = vRasterRect.xy + texel * 0.5;
      vec2 uvMax = vRasterRect.xy + vRasterRect.zw - texel * 0.5;
      vec2 dx = dFdx(nc) * 0.33 * texel;
      vec2 dy = dFdy(nc) * 0.33 * texel;
      float mipBias = -1.25;
      float alpha = (1.0 / 3.0) * texture(uTextRasterAtlasTex, clamp(uvCenter, uvMin, uvMax), mipBias).r +
        (1.0 / 6.0) * (
          texture(uTextRasterAtlasTex, clamp(uvCenter - dx - dy, uvMin, uvMax), mipBias).r +
          texture(uTextRasterAtlasTex, clamp(uvCenter - dx + dy, uvMin, uvMax), mipBias).r +
          texture(uTextRasterAtlasTex, clamp(uvCenter + dx - dy, uvMin, uvMax), mipBias).r +
          texture(uTextRasterAtlasTex, clamp(uvCenter + dx + dy, uvMin, uvMax), mipBias).r
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

  bool insideWinding = winding != 0;
  bool inside = insideWinding;
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
`,cr=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aCorner;

void main() {
  gl_Position = vec4(aCorner, 0.0, 1.0);
}
`,qa=`#version 300 es
precision highp float;

uniform sampler2D uCacheTex;
uniform vec2 uViewportPx;
uniform vec2 uCacheSizePx;
uniform vec2 uOffsetPx;
uniform float uSampleScale;

out vec4 outColor;

void main() {
  float sampleScale = max(uSampleScale, 1e-6);
  vec2 centered = gl_FragCoord.xy - 0.5 * uViewportPx;
  vec2 samplePx = centered * sampleScale + 0.5 * uCacheSizePx + uOffsetPx;
  vec2 uv = samplePx / uCacheSizePx;

  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) {
    outColor = vec4(0.627451, 0.662745, 0.686275, 1.0);
    return;
  }

  outColor = texture(uCacheTex, uv);
}
`,$a=`#version 300 es
precision highp float;

uniform sampler2D uVectorLayerTex;
uniform vec2 uViewportPx;

out vec4 outColor;

void main() {
  vec2 uv = gl_FragCoord.xy / max(uViewportPx, vec2(1.0));
  outColor = texture(uVectorLayerTex, clamp(uv, vec2(0.0), vec2(1.0)));
}
`,Za=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aCorner;

uniform vec4 uRasterMatrixABCD;
uniform vec2 uRasterMatrixEF;
uniform vec2 uViewport;
uniform vec2 uCameraCenter;
uniform float uZoom;

out vec2 vUv;

void main() {
  vec2 corner01 = aCorner * 0.5 + 0.5;
  vec2 localTopDown = vec2(corner01.x, 1.0 - corner01.y);

  float a = uRasterMatrixABCD.x;
  float b = uRasterMatrixABCD.y;
  float c = uRasterMatrixABCD.z;
  float d = uRasterMatrixABCD.w;
  float e = uRasterMatrixEF.x;
  float f = uRasterMatrixEF.y;

  vec2 world = vec2(
    a * localTopDown.x + c * localTopDown.y + e,
    b * localTopDown.x + d * localTopDown.y + f
  );

  vec2 screen = (world - uCameraCenter) * uZoom + 0.5 * uViewport;
  vec2 clip = (screen / (0.5 * uViewport)) - 1.0;

  gl_Position = vec4(clip, 0.0, 1.0);
  vUv = localTopDown;
}
`,ja=`#version 300 es
precision highp float;
precision highp sampler2D;

uniform sampler2D uRasterTex;
in vec2 vUv;
out vec4 outColor;

void main() {
  vec4 color = texture(uRasterTex, vUv);
  if (color.a <= 0.001) {
    discard;
  }
  outColor = color;
}
`,Qa=140,ur=3e5,hr=1.8,dr=96,Ka=1e-5,Ja=.75,ts=1.3333333333,es=2,ns=2.25,yn=24,de=1e-4,Xe=1e-5,rs=64,fr=5,mr=2e4,is=120,Ve=160/255,We=169/255,Ye=175/255;class as{canvas;gl;segmentProgram;fillProgram;textProgram;blitProgram;vectorCompositeProgram;rasterProgram;segmentVao;fillVao;textVao;blitVao;cornerBuffer;allSegmentIdBuffer;visibleSegmentIdBuffer;allFillPathIdBuffer;allTextInstanceIdBuffer;segmentTextureA;segmentTextureB;segmentTextureC;segmentTextureD;fillPathMetaTextureA;fillPathMetaTextureB;fillPathMetaTextureC;fillSegmentTextureA;fillSegmentTextureB;textInstanceTextureA;textInstanceTextureB;textInstanceTextureC;textGlyphMetaTextureA;textGlyphMetaTextureB;textGlyphRasterMetaTexture;textGlyphSegmentTextureA;textGlyphSegmentTextureB;textRasterAtlasTexture;pageBackgroundTexture;uSegmentTexA;uSegmentTexB;uSegmentStyleTex;uSegmentBoundsTex;uSegmentTexSize;uViewport;uCameraCenter;uZoom;uAAScreenPx;uStrokeCurveEnabled;uStrokeVectorOverride;uFillPathMetaTexA;uFillPathMetaTexB;uFillPathMetaTexC;uFillSegmentTexA;uFillSegmentTexB;uFillPathMetaTexSize;uFillSegmentTexSize;uFillViewport;uFillCameraCenter;uFillZoom;uFillAAScreenPx;uFillVectorOverride;uTextInstanceTexA;uTextInstanceTexB;uTextInstanceTexC;uTextGlyphMetaTexA;uTextGlyphMetaTexB;uTextGlyphRasterMetaTex;uTextGlyphSegmentTexA;uTextGlyphSegmentTexB;uTextInstanceTexSize;uTextGlyphMetaTexSize;uTextGlyphSegmentTexSize;uTextViewport;uTextCameraCenter;uTextZoom;uTextAAScreenPx;uTextCurveEnabled;uTextRasterAtlasTex;uTextRasterAtlasSize;uTextVectorOnly;uTextVectorOverride;uCacheTex;uViewportPx;uCacheSizePx;uOffsetPx;uSampleScale;uVectorLayerTex;uVectorLayerViewportPx;uRasterTex;uRasterMatrixABCD;uRasterMatrixEF;uRasterViewport;uRasterCameraCenter;uRasterZoom;scene=null;grid=null;sceneStats=null;allSegmentIds=new Float32Array(0);visibleSegmentIds=new Float32Array(0);allFillPathIds=new Float32Array(0);allTextInstanceIds=new Float32Array(0);segmentMarks=new Uint32Array(0);segmentMinX=new Float32Array(0);segmentMinY=new Float32Array(0);segmentMaxX=new Float32Array(0);segmentMaxY=new Float32Array(0);markToken=1;segmentCount=0;fillPathCount=0;textInstanceCount=0;rasterLayers=[];pageRects=new Float32Array(0);visibleSegmentCount=0;usingAllSegments=!0;segmentTextureWidth=1;segmentTextureHeight=1;fillPathMetaTextureWidth=1;fillPathMetaTextureHeight=1;fillSegmentTextureWidth=1;fillSegmentTextureHeight=1;textInstanceTextureWidth=1;textInstanceTextureHeight=1;textGlyphMetaTextureWidth=1;textGlyphMetaTextureHeight=1;textRasterAtlasWidth=1;textRasterAtlasHeight=1;textGlyphSegmentTextureWidth=1;textGlyphSegmentTextureHeight=1;needsVisibleSetUpdate=!1;rafHandle=0;frameListener=null;cameraCenterX=0;cameraCenterY=0;zoom=1;targetCameraCenterX=0;targetCameraCenterY=0;targetZoom=1;lastCameraAnimationTimeMs=0;hasZoomAnchor=!1;zoomAnchorClientX=0;zoomAnchorClientY=0;zoomAnchorWorldX=0;zoomAnchorWorldY=0;panVelocityWorldX=0;panVelocityWorldY=0;lastPanVelocityUpdateTimeMs=0;lastPanFrameCameraX=0;lastPanFrameCameraY=0;lastPanFrameTimeMs=0;minZoom=.01;maxZoom=4096;lastInteractionTime=Number.NEGATIVE_INFINITY;isPanInteracting=!1;panCacheTexture=null;panCacheFramebuffer=null;panCacheWidth=0;panCacheHeight=0;panCacheValid=!1;panCacheCenterX=0;panCacheCenterY=0;panCacheZoom=1;panCacheRenderedSegments=0;panCacheUsedCulling=!1;vectorMinifyTexture=null;vectorMinifyFramebuffer=null;vectorMinifyWidth=0;vectorMinifyHeight=0;vectorMinifyWarmupPending=!1;panOptimizationEnabled=!0;strokeCurveEnabled=!0;textVectorOnly=!1;hasCameraInteractionSinceSceneLoad=!1;pageBackgroundColor=[1,1,1,1];vectorOverrideColor=[0,0,0];vectorOverrideOpacity=0;constructor(t){this.canvas=t;const e=t.getContext("webgl2",{antialias:!1,depth:!1,stencil:!1,alpha:!1,premultipliedAlpha:!1});if(!e)throw new Error("WebGL2 is required for this proof-of-concept renderer.");this.gl=e,this.segmentProgram=this.createProgram(Ua,Xa),this.fillProgram=this.createProgram(Va,Wa),this.textProgram=this.createProgram(Ya,Ha),this.blitProgram=this.createProgram(cr,qa),this.vectorCompositeProgram=this.createProgram(cr,$a),this.rasterProgram=this.createProgram(Za,ja),this.segmentVao=this.createVertexArray(),this.fillVao=this.createVertexArray(),this.textVao=this.createVertexArray(),this.blitVao=this.createVertexArray(),this.cornerBuffer=this.mustCreateBuffer(),this.allSegmentIdBuffer=this.mustCreateBuffer(),this.visibleSegmentIdBuffer=this.mustCreateBuffer(),this.allFillPathIdBuffer=this.mustCreateBuffer(),this.allTextInstanceIdBuffer=this.mustCreateBuffer(),this.segmentTextureA=this.mustCreateTexture(),this.segmentTextureB=this.mustCreateTexture(),this.segmentTextureC=this.mustCreateTexture(),this.segmentTextureD=this.mustCreateTexture(),this.fillPathMetaTextureA=this.mustCreateTexture(),this.fillPathMetaTextureB=this.mustCreateTexture(),this.fillPathMetaTextureC=this.mustCreateTexture(),this.fillSegmentTextureA=this.mustCreateTexture(),this.fillSegmentTextureB=this.mustCreateTexture(),this.textInstanceTextureA=this.mustCreateTexture(),this.textInstanceTextureB=this.mustCreateTexture(),this.textInstanceTextureC=this.mustCreateTexture(),this.textGlyphMetaTextureA=this.mustCreateTexture(),this.textGlyphMetaTextureB=this.mustCreateTexture(),this.textGlyphRasterMetaTexture=this.mustCreateTexture(),this.textGlyphSegmentTextureA=this.mustCreateTexture(),this.textGlyphSegmentTextureB=this.mustCreateTexture(),this.textRasterAtlasTexture=this.mustCreateTexture(),this.pageBackgroundTexture=this.mustCreateTexture(),this.uSegmentTexA=this.mustGetUniformLocation(this.segmentProgram,"uSegmentTexA"),this.uSegmentTexB=this.mustGetUniformLocation(this.segmentProgram,"uSegmentTexB"),this.uSegmentStyleTex=this.mustGetUniformLocation(this.segmentProgram,"uSegmentStyleTex"),this.uSegmentBoundsTex=this.mustGetUniformLocation(this.segmentProgram,"uSegmentBoundsTex"),this.uSegmentTexSize=this.mustGetUniformLocation(this.segmentProgram,"uSegmentTexSize"),this.uViewport=this.mustGetUniformLocation(this.segmentProgram,"uViewport"),this.uCameraCenter=this.mustGetUniformLocation(this.segmentProgram,"uCameraCenter"),this.uZoom=this.mustGetUniformLocation(this.segmentProgram,"uZoom"),this.uAAScreenPx=this.mustGetUniformLocation(this.segmentProgram,"uAAScreenPx"),this.uStrokeCurveEnabled=this.mustGetUniformLocation(this.segmentProgram,"uStrokeCurveEnabled"),this.uStrokeVectorOverride=this.mustGetUniformLocation(this.segmentProgram,"uVectorOverride"),this.uFillPathMetaTexA=this.mustGetUniformLocation(this.fillProgram,"uFillPathMetaTexA"),this.uFillPathMetaTexB=this.mustGetUniformLocation(this.fillProgram,"uFillPathMetaTexB"),this.uFillPathMetaTexC=this.mustGetUniformLocation(this.fillProgram,"uFillPathMetaTexC"),this.uFillSegmentTexA=this.mustGetUniformLocation(this.fillProgram,"uFillSegmentTexA"),this.uFillSegmentTexB=this.mustGetUniformLocation(this.fillProgram,"uFillSegmentTexB"),this.uFillPathMetaTexSize=this.mustGetUniformLocation(this.fillProgram,"uFillPathMetaTexSize"),this.uFillSegmentTexSize=this.mustGetUniformLocation(this.fillProgram,"uFillSegmentTexSize"),this.uFillViewport=this.mustGetUniformLocation(this.fillProgram,"uViewport"),this.uFillCameraCenter=this.mustGetUniformLocation(this.fillProgram,"uCameraCenter"),this.uFillZoom=this.mustGetUniformLocation(this.fillProgram,"uZoom"),this.uFillAAScreenPx=this.mustGetUniformLocation(this.fillProgram,"uFillAAScreenPx"),this.uFillVectorOverride=this.mustGetUniformLocation(this.fillProgram,"uVectorOverride"),this.uTextInstanceTexA=this.mustGetUniformLocation(this.textProgram,"uTextInstanceTexA"),this.uTextInstanceTexB=this.mustGetUniformLocation(this.textProgram,"uTextInstanceTexB"),this.uTextInstanceTexC=this.mustGetUniformLocation(this.textProgram,"uTextInstanceTexC"),this.uTextGlyphMetaTexA=this.mustGetUniformLocation(this.textProgram,"uTextGlyphMetaTexA"),this.uTextGlyphMetaTexB=this.mustGetUniformLocation(this.textProgram,"uTextGlyphMetaTexB"),this.uTextGlyphRasterMetaTex=this.mustGetUniformLocation(this.textProgram,"uTextGlyphRasterMetaTex"),this.uTextGlyphSegmentTexA=this.mustGetUniformLocation(this.textProgram,"uTextGlyphSegmentTexA"),this.uTextGlyphSegmentTexB=this.mustGetUniformLocation(this.textProgram,"uTextGlyphSegmentTexB"),this.uTextInstanceTexSize=this.mustGetUniformLocation(this.textProgram,"uTextInstanceTexSize"),this.uTextGlyphMetaTexSize=this.mustGetUniformLocation(this.textProgram,"uTextGlyphMetaTexSize"),this.uTextGlyphSegmentTexSize=this.mustGetUniformLocation(this.textProgram,"uTextGlyphSegmentTexSize"),this.uTextViewport=this.mustGetUniformLocation(this.textProgram,"uViewport"),this.uTextCameraCenter=this.mustGetUniformLocation(this.textProgram,"uCameraCenter"),this.uTextZoom=this.mustGetUniformLocation(this.textProgram,"uZoom"),this.uTextAAScreenPx=this.mustGetUniformLocation(this.textProgram,"uTextAAScreenPx"),this.uTextCurveEnabled=this.mustGetUniformLocation(this.textProgram,"uTextCurveEnabled"),this.uTextRasterAtlasTex=this.mustGetUniformLocation(this.textProgram,"uTextRasterAtlasTex"),this.uTextRasterAtlasSize=this.mustGetUniformLocation(this.textProgram,"uTextRasterAtlasSize"),this.uTextVectorOnly=this.mustGetUniformLocation(this.textProgram,"uTextVectorOnly"),this.uTextVectorOverride=this.mustGetUniformLocation(this.textProgram,"uVectorOverride"),this.uCacheTex=this.mustGetUniformLocation(this.blitProgram,"uCacheTex"),this.uViewportPx=this.mustGetUniformLocation(this.blitProgram,"uViewportPx"),this.uCacheSizePx=this.mustGetUniformLocation(this.blitProgram,"uCacheSizePx"),this.uOffsetPx=this.mustGetUniformLocation(this.blitProgram,"uOffsetPx"),this.uSampleScale=this.mustGetUniformLocation(this.blitProgram,"uSampleScale"),this.uVectorLayerTex=this.mustGetUniformLocation(this.vectorCompositeProgram,"uVectorLayerTex"),this.uVectorLayerViewportPx=this.mustGetUniformLocation(this.vectorCompositeProgram,"uViewportPx"),this.uRasterTex=this.mustGetUniformLocation(this.rasterProgram,"uRasterTex"),this.uRasterMatrixABCD=this.mustGetUniformLocation(this.rasterProgram,"uRasterMatrixABCD"),this.uRasterMatrixEF=this.mustGetUniformLocation(this.rasterProgram,"uRasterMatrixEF"),this.uRasterViewport=this.mustGetUniformLocation(this.rasterProgram,"uViewport"),this.uRasterCameraCenter=this.mustGetUniformLocation(this.rasterProgram,"uCameraCenter"),this.uRasterZoom=this.mustGetUniformLocation(this.rasterProgram,"uZoom"),this.initializeGeometry(),this.initializeState(),this.uploadPageBackgroundTexture()}setFrameListener(t){this.frameListener=t}setPanOptimizationEnabled(t){const e=!!t;this.panOptimizationEnabled!==e&&(this.panOptimizationEnabled=e,this.isPanInteracting=!1,this.panCacheValid=!1,this.panOptimizationEnabled||this.destroyPanCacheResources(),this.needsVisibleSetUpdate=!0,this.requestFrame())}setStrokeCurveEnabled(t){const e=!!t;this.strokeCurveEnabled!==e&&(this.strokeCurveEnabled=e,this.requestFrame())}setTextVectorOnly(t){const e=!!t;this.textVectorOnly!==e&&(this.textVectorOnly=e,this.panCacheValid=!1,this.textVectorOnly&&this.destroyVectorMinifyResources(),this.requestFrame())}setPageBackgroundColor(t,e,a,s){const i=It(t,0,1),r=It(e,0,1),o=It(a,0,1),l=It(s,0,1),c=this.pageBackgroundColor;Math.abs(c[0]-i)<=1e-6&&Math.abs(c[1]-r)<=1e-6&&Math.abs(c[2]-o)<=1e-6&&Math.abs(c[3]-l)<=1e-6||(this.pageBackgroundColor=[i,r,o,l],this.uploadPageBackgroundTexture(),this.panCacheValid=!1,this.requestFrame())}setVectorColorOverride(t,e,a,s){const i=It(t,0,1),r=It(e,0,1),o=It(a,0,1),l=It(s,0,1),c=this.vectorOverrideColor;Math.abs(c[0]-i)<=1e-6&&Math.abs(c[1]-r)<=1e-6&&Math.abs(c[2]-o)<=1e-6&&Math.abs(this.vectorOverrideOpacity-l)<=1e-6||(this.vectorOverrideColor=[i,r,o],this.vectorOverrideOpacity=l,this.panCacheValid=!1,this.requestFrame())}beginPanInteraction(){this.hasCameraInteractionSinceSceneLoad=!0,this.syncCameraTargetsToCurrent(),this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameCameraX=this.cameraCenterX,this.lastPanFrameCameraY=this.cameraCenterY,this.lastPanFrameTimeMs=0,this.isPanInteracting=!0,this.markInteraction()}endPanInteraction(){this.isPanInteracting=!1;const t=performance.now(),a=this.lastPanVelocityUpdateTimeMs>0&&t-this.lastPanVelocityUpdateTimeMs<=is?Math.hypot(this.panVelocityWorldX,this.panVelocityWorldY):0;Number.isFinite(a)&&a>=fr?(this.targetCameraCenterX=this.cameraCenterX+this.panVelocityWorldX/yn,this.targetCameraCenterY=this.cameraCenterY+this.panVelocityWorldY/yn,this.lastCameraAnimationTimeMs=0):(this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY),this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameTimeMs=0,this.markInteraction(),this.needsVisibleSetUpdate=!0,this.requestFrame()}resize(){const t=window.devicePixelRatio||1,e=Math.max(1,Math.round(this.canvas.clientWidth*t)),a=Math.max(1,Math.round(this.canvas.clientHeight*t));this.canvas.width===e&&this.canvas.height===a||(this.canvas.width=e,this.canvas.height=a,this.destroyPanCacheResources(),this.destroyVectorMinifyResources(),this.needsVisibleSetUpdate=!0,this.requestFrame())}setScene(t){this.scene=t,this.segmentCount=t.segmentCount,this.fillPathCount=t.fillPathCount,this.textInstanceCount=t.textInstanceCount,this.pageRects=cs(t),this.buildSegmentBounds(t),this.isPanInteracting=!1,this.panCacheValid=!1,this.destroyVectorMinifyResources(),this.grid=this.segmentCount>0?Zr(t):null,this.uploadRasterLayers(t);const e=this.uploadFillPaths(t),a=this.uploadSegments(t),s=this.uploadTextData(t);this.sceneStats={gridWidth:this.grid?.gridWidth??0,gridHeight:this.grid?.gridHeight??0,gridIndexCount:this.grid?.indices.length??0,maxCellPopulation:this.grid?.maxCellPopulation??0,fillPathTextureWidth:e.pathMetaTextureWidth,fillPathTextureHeight:e.pathMetaTextureHeight,fillSegmentTextureWidth:e.segmentTextureWidth,fillSegmentTextureHeight:e.segmentTextureHeight,textureWidth:a.textureWidth,textureHeight:a.textureHeight,maxTextureSize:a.maxTextureSize,textInstanceTextureWidth:s.instanceTextureWidth,textInstanceTextureHeight:s.instanceTextureHeight,textGlyphTextureWidth:s.glyphMetaTextureWidth,textGlyphTextureHeight:s.glyphMetaTextureHeight,textSegmentTextureWidth:s.glyphSegmentTextureWidth,textSegmentTextureHeight:s.glyphSegmentTextureHeight},this.allSegmentIds=new Float32Array(this.segmentCount);for(let i=0;i<this.segmentCount;i+=1)this.allSegmentIds[i]=i;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.allSegmentIdBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.allSegmentIds,this.gl.STATIC_DRAW),this.allFillPathIds=new Float32Array(this.fillPathCount);for(let i=0;i<this.fillPathCount;i+=1)this.allFillPathIds[i]=i;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.allFillPathIdBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.allFillPathIds,this.gl.STATIC_DRAW),this.allTextInstanceIds=new Float32Array(this.textInstanceCount);for(let i=0;i<this.textInstanceCount;i+=1)this.allTextInstanceIds[i]=i;return this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.allTextInstanceIdBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.allTextInstanceIds,this.gl.STATIC_DRAW),this.visibleSegmentIds.length<this.segmentCount&&(this.visibleSegmentIds=new Float32Array(this.segmentCount)),this.segmentMarks.length<this.segmentCount&&(this.segmentMarks=new Uint32Array(this.segmentCount),this.markToken=1),this.visibleSegmentCount=this.segmentCount,this.usingAllSegments=!0,this.minZoom=.01,this.maxZoom=8192,this.hasCameraInteractionSinceSceneLoad=!0,this.syncCameraTargetsToCurrent(),this.needsVisibleSetUpdate=!0,this.requestFrame(),this.sceneStats}getSceneStats(){return this.sceneStats}getViewState(){return{cameraCenterX:this.cameraCenterX,cameraCenterY:this.cameraCenterY,zoom:this.zoom}}setViewState(t){const e=Number(t.cameraCenterX),a=Number(t.cameraCenterY),s=Number(t.zoom);if(!Number.isFinite(e)||!Number.isFinite(a)||!Number.isFinite(s))return;this.cameraCenterX=e,this.cameraCenterY=a;const i=It(s,this.minZoom,this.maxZoom);this.zoom=i,this.targetCameraCenterX=e,this.targetCameraCenterY=a,this.targetZoom=i,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1,this.isPanInteracting=!1,this.panCacheValid=!1,this.needsVisibleSetUpdate=!0,this.requestFrame()}fitToBounds(t,e=64){const a=Math.max(t.maxX-t.minX,1e-4),s=Math.max(t.maxY-t.minY,1e-4),i=Math.max(1,this.canvas.width-e*2),r=Math.max(1,this.canvas.height-e*2),o=It(Math.min(i/a,r/s),this.minZoom,this.maxZoom),l=(t.minX+t.maxX)*.5,c=(t.minY+t.maxY)*.5;this.zoom=o,this.cameraCenterX=l,this.cameraCenterY=c,this.targetZoom=o,this.targetCameraCenterX=l,this.targetCameraCenterY=c,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1,this.isPanInteracting=!1,this.panCacheValid=!1,this.needsVisibleSetUpdate=!0,this.requestFrame()}dispose(){this.rafHandle!==0&&(cancelAnimationFrame(this.rafHandle),this.rafHandle=0),this.frameListener=null,this.destroyPanCacheResources(),this.destroyVectorMinifyResources();for(const t of this.rasterLayers)this.gl.deleteTexture(t.texture);this.rasterLayers=[]}panByPixels(t,e){if(!Number.isFinite(t)||!Number.isFinite(e))return;this.hasCameraInteractionSinceSceneLoad=!0,this.markInteraction(),this.hasZoomAnchor=!1;const a=-t/this.zoom,s=e/this.zoom;this.cameraCenterX+=a,this.cameraCenterY+=s,this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY,this.needsVisibleSetUpdate=!0,this.requestFrame()}zoomAtClientPoint(t,e,a){const s=It(a,.1,10);this.hasCameraInteractionSinceSceneLoad=!0,this.isPanInteracting=!1,this.markInteraction();const i=this.clientToWorld(t,e),r=It(this.targetZoom*s,this.minZoom,this.maxZoom);this.hasZoomAnchor=!0,this.zoomAnchorClientX=t,this.zoomAnchorClientY=e,this.zoomAnchorWorldX=i.x,this.zoomAnchorWorldY=i.y,this.targetZoom=r;const o=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,r);this.targetCameraCenterX=o.x,this.targetCameraCenterY=o.y,this.panCacheValid=!1,this.needsVisibleSetUpdate=!0,this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameTimeMs=0,this.requestFrame()}requestFrame(){this.rafHandle===0&&(this.rafHandle=requestAnimationFrame(t=>{this.rafHandle=0,this.render(t)}))}render(t=performance.now()){const e=this.updateCameraWithDamping(t);this.updatePanReleaseVelocitySample(t);const a=this.gl;if(!this.scene||this.fillPathCount===0&&this.segmentCount===0&&this.textInstanceCount===0&&this.rasterLayers.length===0&&this.pageRects.length===0){a.bindFramebuffer(a.FRAMEBUFFER,null),a.viewport(0,0,this.canvas.width,this.canvas.height),a.clearColor(Ve,We,Ye,1),a.clear(a.COLOR_BUFFER_BIT),this.frameListener?.({renderedSegments:0,totalSegments:0,usedCulling:!1,zoom:this.zoom}),e&&this.requestFrame();return}this.shouldUsePanCache(e)?this.renderWithPanCache():this.renderDirectToScreen(),e&&this.requestFrame()}shouldUsePanCache(t){return!this.panOptimizationEnabled||this.segmentCount<ur?!1:this.isPanInteracting?!0:t}renderDirectToScreen(){const t=this.gl;let e=this.shouldUseVectorMinifyPath()&&this.ensureVectorMinifyResources();if(this.panOptimizationEnabled&&this.segmentCount>=ur&&(e=!1),e&&this.vectorMinifyWarmupPending&&(e=!1,this.vectorMinifyWarmupPending=!1,this.needsVisibleSetUpdate=!0,this.requestFrame()),t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,this.canvas.width,this.canvas.height),t.clearColor(Ve,We,Ye,1),t.clear(t.COLOR_BUFFER_BIT),this.needsVisibleSetUpdate){if(e){const s=this.computeVectorMinifyZoom(this.vectorMinifyWidth,this.vectorMinifyHeight);this.updateVisibleSet(this.cameraCenterX,this.cameraCenterY,this.vectorMinifyWidth,this.vectorMinifyHeight,s)}else this.updateVisibleSet(this.cameraCenterX,this.cameraCenterY,this.canvas.width,this.canvas.height,this.zoom);this.needsVisibleSetUpdate=!1}this.drawRasterLayer(this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY);let a=0;e?(a=this.renderVectorLayerIntoMinifyTarget(this.vectorMinifyWidth,this.vectorMinifyHeight,this.cameraCenterX,this.cameraCenterY),this.compositeVectorMinifyLayer()):(this.drawFilledPaths(this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY),a=this.drawVisibleSegments(this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY),this.drawTextInstances(this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY)),this.frameListener?.({renderedSegments:a,totalSegments:this.segmentCount,usedCulling:!this.usingAllSegments,zoom:this.zoom})}hasVectorContent(){return this.fillPathCount>0||this.segmentCount>0||this.textInstanceCount>0}shouldUseVectorMinifyPath(){return this.textVectorOnly||!this.hasVectorContent()?!1:this.zoom<=ns}computeVectorMinifyZoom(t,e){const a=Math.min(t/Math.max(1,this.canvas.width),e/Math.max(1,this.canvas.height));return this.zoom*Math.max(1,a)}ensureVectorMinifyResources(){const t=this.gl,e=t.getParameter(t.MAX_TEXTURE_SIZE),a=e/Math.max(1,this.canvas.width),s=e/Math.max(1,this.canvas.height),i=Math.max(1,Math.min(es,a,s)),r=Math.max(this.canvas.width,Math.floor(this.canvas.width*i)),o=Math.max(this.canvas.height,Math.floor(this.canvas.height*i));if(r<this.canvas.width||o<this.canvas.height)return!1;if(this.vectorMinifyTexture&&this.vectorMinifyFramebuffer&&this.vectorMinifyWidth===r&&this.vectorMinifyHeight===o)return!0;this.destroyVectorMinifyResources();const l=t.createTexture();if(!l)return!1;t.bindTexture(t.TEXTURE_2D,l),os(t),t.texStorage2D(t.TEXTURE_2D,1,t.RGBA8,r,o);const c=t.createFramebuffer();if(!c)return t.deleteTexture(l),!1;t.bindFramebuffer(t.FRAMEBUFFER,c),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,l,0);const g=t.checkFramebufferStatus(t.FRAMEBUFFER);return t.bindFramebuffer(t.FRAMEBUFFER,null),g!==t.FRAMEBUFFER_COMPLETE?(t.deleteFramebuffer(c),t.deleteTexture(l),!1):(this.vectorMinifyTexture=l,this.vectorMinifyFramebuffer=c,this.vectorMinifyWidth=r,this.vectorMinifyHeight=o,this.vectorMinifyWarmupPending=!0,!0)}renderVectorLayerIntoMinifyTarget(t,e,a,s){if(!this.vectorMinifyFramebuffer||!this.vectorMinifyTexture)return 0;const i=this.gl,r=this.computeVectorMinifyZoom(t,e);i.bindFramebuffer(i.FRAMEBUFFER,this.vectorMinifyFramebuffer),i.viewport(0,0,t,e),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA),this.drawFilledPaths(t,e,a,s,r);const o=this.drawVisibleSegments(t,e,a,s,r);return this.drawTextInstances(t,e,a,s,r),i.bindTexture(i.TEXTURE_2D,this.vectorMinifyTexture),i.bindFramebuffer(i.FRAMEBUFFER,null),o}compositeVectorMinifyLayer(){if(!this.vectorMinifyTexture)return;const t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,this.canvas.width,this.canvas.height),t.useProgram(this.vectorCompositeProgram),t.bindVertexArray(this.blitVao),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.vectorMinifyTexture),t.uniform1i(this.uVectorLayerTex,0),t.uniform2f(this.uVectorLayerViewportPx,this.canvas.width,this.canvas.height),t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA),t.drawArrays(t.TRIANGLE_STRIP,0,4),t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA)}renderWithPanCache(){if(!this.ensurePanCacheResources()){this.renderDirectToScreen();return}let t=this.panCacheZoom/Math.max(this.zoom,1e-6),e=(this.cameraCenterX-this.panCacheCenterX)*this.panCacheZoom,a=(this.cameraCenterY-this.panCacheCenterY)*this.panCacheZoom;const s=this.panCacheWidth*.5-2,i=this.panCacheHeight*.5-2,r=this.canvas.width*.5*Math.abs(t),o=this.canvas.height*.5*Math.abs(t),l=s-r,c=i-o,g=this.zoom/Math.max(this.panCacheZoom,1e-6),p=g<Ja||g>ts,f=Math.abs(this.targetZoom-this.zoom)<=Xe&&Math.abs(this.panCacheZoom-this.zoom)>Ka,v=l<0||c<0||Math.abs(e)>l||Math.abs(a)>c;if(!this.panCacheValid||p||v||f){this.panCacheCenterX=this.cameraCenterX,this.panCacheCenterY=this.cameraCenterY,this.panCacheZoom=this.zoom,this.updateVisibleSet(this.panCacheCenterX,this.panCacheCenterY,this.panCacheWidth,this.panCacheHeight),this.needsVisibleSetUpdate=!1;const m=this.gl;m.bindFramebuffer(m.FRAMEBUFFER,this.panCacheFramebuffer),m.viewport(0,0,this.panCacheWidth,this.panCacheHeight),m.clearColor(Ve,We,Ye,1),m.clear(m.COLOR_BUFFER_BIT),this.drawRasterLayer(this.panCacheWidth,this.panCacheHeight,this.panCacheCenterX,this.panCacheCenterY),this.drawFilledPaths(this.panCacheWidth,this.panCacheHeight,this.panCacheCenterX,this.panCacheCenterY),this.panCacheRenderedSegments=this.drawVisibleSegments(this.panCacheWidth,this.panCacheHeight,this.panCacheCenterX,this.panCacheCenterY),this.drawTextInstances(this.panCacheWidth,this.panCacheHeight,this.panCacheCenterX,this.panCacheCenterY),this.panCacheUsedCulling=!this.usingAllSegments,this.panCacheValid=!0,t=1,e=0,a=0}this.blitPanCache(e,a,t),this.frameListener?.({renderedSegments:this.panCacheRenderedSegments,totalSegments:this.segmentCount,usedCulling:this.panCacheUsedCulling,zoom:this.zoom})}drawRasterLayer(t,e,a,s){if(this.rasterLayers.length===0&&this.pageRects.length===0)return;const i=this.gl;if(i.useProgram(this.rasterProgram),i.bindVertexArray(this.blitVao),i.uniform2f(this.uRasterViewport,t,e),i.uniform2f(this.uRasterCameraCenter,a,s),i.uniform1f(this.uRasterZoom,this.zoom),this.pageRects.length>0){i.activeTexture(i.TEXTURE12),i.bindTexture(i.TEXTURE_2D,this.pageBackgroundTexture),i.uniform1i(this.uRasterTex,12);for(let r=0;r<this.pageRects.length;r+=4){const o=this.pageRects[r],l=this.pageRects[r+1],c=this.pageRects[r+2],g=this.pageRects[r+3],p=Math.max(c-o,1e-6),y=Math.max(g-l,1e-6);i.uniform4f(this.uRasterMatrixABCD,p,0,0,y),i.uniform2f(this.uRasterMatrixEF,o,l),i.drawArrays(i.TRIANGLE_STRIP,0,4)}}if(this.rasterLayers.length!==0){i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);for(const r of this.rasterLayers)i.activeTexture(i.TEXTURE12),i.bindTexture(i.TEXTURE_2D,r.texture),i.uniform1i(this.uRasterTex,12),i.uniform4f(this.uRasterMatrixABCD,r.matrix[0],r.matrix[1],r.matrix[2],r.matrix[3]),i.uniform2f(this.uRasterMatrixEF,r.matrix[4],r.matrix[5]),i.drawArrays(i.TRIANGLE_STRIP,0,4);i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA)}}drawFilledPaths(t,e,a,s,i=this.zoom){if(!this.scene||this.fillPathCount<=0)return 0;const r=this.gl;return r.useProgram(this.fillProgram),r.bindVertexArray(this.fillVao),r.activeTexture(r.TEXTURE7),r.bindTexture(r.TEXTURE_2D,this.fillPathMetaTextureA),r.activeTexture(r.TEXTURE8),r.bindTexture(r.TEXTURE_2D,this.fillPathMetaTextureB),r.activeTexture(r.TEXTURE9),r.bindTexture(r.TEXTURE_2D,this.fillPathMetaTextureC),r.activeTexture(r.TEXTURE10),r.bindTexture(r.TEXTURE_2D,this.fillSegmentTextureA),r.activeTexture(r.TEXTURE11),r.bindTexture(r.TEXTURE_2D,this.fillSegmentTextureB),r.uniform1i(this.uFillPathMetaTexA,7),r.uniform1i(this.uFillPathMetaTexB,8),r.uniform1i(this.uFillPathMetaTexC,9),r.uniform1i(this.uFillSegmentTexA,10),r.uniform1i(this.uFillSegmentTexB,11),r.uniform2i(this.uFillPathMetaTexSize,this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight),r.uniform2i(this.uFillSegmentTexSize,this.fillSegmentTextureWidth,this.fillSegmentTextureHeight),r.uniform2f(this.uFillViewport,t,e),r.uniform2f(this.uFillCameraCenter,a,s),r.uniform1f(this.uFillZoom,i),r.uniform1f(this.uFillAAScreenPx,1),r.uniform4f(this.uFillVectorOverride,this.vectorOverrideColor[0],this.vectorOverrideColor[1],this.vectorOverrideColor[2],this.vectorOverrideOpacity),r.drawArraysInstanced(r.TRIANGLE_STRIP,0,4,this.fillPathCount),this.fillPathCount}drawVisibleSegments(t,e,a,s,i=this.zoom){const r=this.usingAllSegments?this.segmentCount:this.visibleSegmentCount;if(r===0)return 0;const o=this.gl;o.useProgram(this.segmentProgram),o.bindVertexArray(this.segmentVao);const l=this.usingAllSegments?this.allSegmentIdBuffer:this.visibleSegmentIdBuffer;return o.bindBuffer(o.ARRAY_BUFFER,l),o.enableVertexAttribArray(1),o.vertexAttribPointer(1,1,o.FLOAT,!1,4,0),o.vertexAttribDivisor(1,1),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,this.segmentTextureA),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,this.segmentTextureB),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,this.segmentTextureC),o.activeTexture(o.TEXTURE3),o.bindTexture(o.TEXTURE_2D,this.segmentTextureD),o.uniform1i(this.uSegmentTexA,0),o.uniform1i(this.uSegmentTexB,1),o.uniform1i(this.uSegmentStyleTex,2),o.uniform1i(this.uSegmentBoundsTex,3),o.uniform2i(this.uSegmentTexSize,this.segmentTextureWidth,this.segmentTextureHeight),o.uniform2f(this.uViewport,t,e),o.uniform2f(this.uCameraCenter,a,s),o.uniform1f(this.uZoom,i),o.uniform1f(this.uAAScreenPx,1),o.uniform1f(this.uStrokeCurveEnabled,this.strokeCurveEnabled?1:0),o.uniform4f(this.uStrokeVectorOverride,this.vectorOverrideColor[0],this.vectorOverrideColor[1],this.vectorOverrideColor[2],this.vectorOverrideOpacity),o.drawArraysInstanced(o.TRIANGLE_STRIP,0,4,r),r}drawTextInstances(t,e,a,s,i=this.zoom){if(!this.scene||this.textInstanceCount<=0)return 0;const r=this.gl;return r.useProgram(this.textProgram),r.bindVertexArray(this.textVao),r.activeTexture(r.TEXTURE2),r.bindTexture(r.TEXTURE_2D,this.textInstanceTextureA),r.activeTexture(r.TEXTURE3),r.bindTexture(r.TEXTURE_2D,this.textInstanceTextureB),r.activeTexture(r.TEXTURE4),r.bindTexture(r.TEXTURE_2D,this.textInstanceTextureC),r.activeTexture(r.TEXTURE5),r.bindTexture(r.TEXTURE_2D,this.textGlyphMetaTextureA),r.activeTexture(r.TEXTURE6),r.bindTexture(r.TEXTURE_2D,this.textGlyphMetaTextureB),r.activeTexture(r.TEXTURE7),r.bindTexture(r.TEXTURE_2D,this.textGlyphSegmentTextureA),r.activeTexture(r.TEXTURE8),r.bindTexture(r.TEXTURE_2D,this.textGlyphSegmentTextureB),r.activeTexture(r.TEXTURE9),r.bindTexture(r.TEXTURE_2D,this.textGlyphRasterMetaTexture),r.activeTexture(r.TEXTURE13),r.bindTexture(r.TEXTURE_2D,this.textRasterAtlasTexture),r.uniform1i(this.uTextInstanceTexA,2),r.uniform1i(this.uTextInstanceTexB,3),r.uniform1i(this.uTextInstanceTexC,4),r.uniform1i(this.uTextGlyphMetaTexA,5),r.uniform1i(this.uTextGlyphMetaTexB,6),r.uniform1i(this.uTextGlyphSegmentTexA,7),r.uniform1i(this.uTextGlyphSegmentTexB,8),r.uniform1i(this.uTextGlyphRasterMetaTex,9),r.uniform1i(this.uTextRasterAtlasTex,13),r.uniform2i(this.uTextInstanceTexSize,this.textInstanceTextureWidth,this.textInstanceTextureHeight),r.uniform2i(this.uTextGlyphMetaTexSize,this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight),r.uniform2i(this.uTextGlyphSegmentTexSize,this.textGlyphSegmentTextureWidth,this.textGlyphSegmentTextureHeight),r.uniform2f(this.uTextRasterAtlasSize,this.textRasterAtlasWidth,this.textRasterAtlasHeight),r.uniform2f(this.uTextViewport,t,e),r.uniform2f(this.uTextCameraCenter,a,s),r.uniform1f(this.uTextZoom,i),r.uniform1f(this.uTextAAScreenPx,1.25),r.uniform1f(this.uTextCurveEnabled,this.strokeCurveEnabled?1:0),r.uniform1f(this.uTextVectorOnly,this.textVectorOnly?1:0),r.uniform4f(this.uTextVectorOverride,this.vectorOverrideColor[0],this.vectorOverrideColor[1],this.vectorOverrideColor[2],this.vectorOverrideOpacity),r.drawArraysInstanced(r.TRIANGLE_STRIP,0,4,this.textInstanceCount),this.textInstanceCount}blitPanCache(t,e,a){if(!this.panCacheTexture)return;const s=this.gl;s.bindFramebuffer(s.FRAMEBUFFER,null),s.viewport(0,0,this.canvas.width,this.canvas.height),s.clearColor(Ve,We,Ye,1),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(this.blitProgram),s.bindVertexArray(this.blitVao),s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,this.panCacheTexture),s.uniform1i(this.uCacheTex,0),s.uniform2f(this.uViewportPx,this.canvas.width,this.canvas.height),s.uniform2f(this.uCacheSizePx,this.panCacheWidth,this.panCacheHeight),s.uniform2f(this.uOffsetPx,t,e),s.uniform1f(this.uSampleScale,a),s.disable(s.BLEND),s.drawArrays(s.TRIANGLE_STRIP,0,4),s.enable(s.BLEND)}ensurePanCacheResources(){const t=this.gl,e=t.getParameter(t.MAX_TEXTURE_SIZE),a=Math.min(e,Math.max(this.canvas.width+dr*2,Math.ceil(this.canvas.width*hr))),s=Math.min(e,Math.max(this.canvas.height+dr*2,Math.ceil(this.canvas.height*hr)));if(a<this.canvas.width||s<this.canvas.height)return!1;if(this.panCacheTexture&&this.panCacheFramebuffer&&this.panCacheWidth===a&&this.panCacheHeight===s)return!0;this.destroyPanCacheResources();const i=t.createTexture();if(!i)return!1;t.bindTexture(t.TEXTURE_2D,i),ss(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,a,s,0,t.RGBA,t.UNSIGNED_BYTE,null);const r=t.createFramebuffer();if(!r)return t.deleteTexture(i),!1;t.bindFramebuffer(t.FRAMEBUFFER,r),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,i,0);const o=t.checkFramebufferStatus(t.FRAMEBUFFER);return t.bindFramebuffer(t.FRAMEBUFFER,null),o!==t.FRAMEBUFFER_COMPLETE?(t.deleteFramebuffer(r),t.deleteTexture(i),!1):(this.panCacheTexture=i,this.panCacheFramebuffer=r,this.panCacheWidth=a,this.panCacheHeight=s,this.panCacheValid=!1,!0)}destroyPanCacheResources(){this.panCacheFramebuffer&&(this.gl.deleteFramebuffer(this.panCacheFramebuffer),this.panCacheFramebuffer=null),this.panCacheTexture&&(this.gl.deleteTexture(this.panCacheTexture),this.panCacheTexture=null),this.panCacheWidth=0,this.panCacheHeight=0,this.panCacheValid=!1,this.panCacheRenderedSegments=0,this.panCacheUsedCulling=!1}destroyVectorMinifyResources(){this.vectorMinifyFramebuffer&&(this.gl.deleteFramebuffer(this.vectorMinifyFramebuffer),this.vectorMinifyFramebuffer=null),this.vectorMinifyTexture&&(this.gl.deleteTexture(this.vectorMinifyTexture),this.vectorMinifyTexture=null),this.vectorMinifyWidth=0,this.vectorMinifyHeight=0,this.vectorMinifyWarmupPending=!1}updateVisibleSet(t=this.cameraCenterX,e=this.cameraCenterY,a=this.canvas.width,s=this.canvas.height,i=this.zoom){if(!this.scene||!this.grid){this.visibleSegmentCount=0,this.usingAllSegments=!0;return}if(!this.hasCameraInteractionSinceSceneLoad){this.usingAllSegments=!0,this.visibleSegmentCount=this.segmentCount;return}const r=this.grid,o=Math.max(i,1e-6),l=a/(2*o),c=s/(2*o),g=Math.max(16/o,this.scene.maxHalfWidth*2),p=t-l-g,y=t+l+g,f=e-c-g,v=e+c+g,d=He(Math.floor((p-r.minX)/r.cellWidth),r.gridWidth),m=He(Math.floor((y-r.minX)/r.cellWidth),r.gridWidth),x=He(Math.floor((f-r.minY)/r.cellHeight),r.gridHeight),b=He(Math.floor((v-r.minY)/r.cellHeight),r.gridHeight);this.usingAllSegments=!1,this.markToken+=1,this.markToken===4294967295&&(this.segmentMarks.fill(0),this.markToken=1);let _=0;for(let w=x;w<=b;w+=1){let A=w*r.gridWidth+d;for(let L=d;L<=m;L+=1){const G=r.offsets[A],P=r.counts[A];for(let I=0;I<P;I+=1){const V=r.indices[G+I];this.segmentMarks[V]!==this.markToken&&(this.segmentMarks[V]=this.markToken,!(this.segmentMaxX[V]<p||this.segmentMinX[V]>y||this.segmentMaxY[V]<f||this.segmentMinY[V]>v)&&(this.visibleSegmentIds[_]=V,_+=1))}A+=1}}this.visibleSegmentCount=_;const M=this.visibleSegmentIds.subarray(0,_);this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.visibleSegmentIdBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,M,this.gl.DYNAMIC_DRAW)}uploadRasterLayers(t){const e=this.gl;for(const a of this.rasterLayers)e.deleteTexture(a.texture);this.rasterLayers=[];for(const a of this.getSceneRasterLayers(t)){const s=e.createTexture();if(!s)continue;e.bindTexture(e.TEXTURE_2D,s),pr(e);const i=a.data.subarray(0,a.width*a.height*4),r=ls(i);e.texImage2D(e.TEXTURE_2D,0,e.RGBA,a.width,a.height,0,e.RGBA,e.UNSIGNED_BYTE,r),e.generateMipmap(e.TEXTURE_2D);const o=new Float32Array(6);a.matrix.length>=6?(o[0]=a.matrix[0],o[1]=a.matrix[1],o[2]=a.matrix[2],o[3]=a.matrix[3],o[4]=a.matrix[4],o[5]=a.matrix[5]):(o[0]=1,o[3]=1),this.rasterLayers.push({texture:s,matrix:o})}}getSceneRasterLayers(t){const e=[];if(Array.isArray(t.rasterLayers))for(const i of t.rasterLayers){const r=Math.max(0,Math.trunc(i?.width??0)),o=Math.max(0,Math.trunc(i?.height??0));r<=0||o<=0||!(i.data instanceof Uint8Array)||i.data.length<r*o*4||e.push({width:r,height:o,data:i.data,matrix:i.matrix instanceof Float32Array?i.matrix:new Float32Array(i.matrix)})}if(e.length>0)return e;const a=Math.max(0,Math.trunc(t.rasterLayerWidth)),s=Math.max(0,Math.trunc(t.rasterLayerHeight));return a<=0||s<=0||t.rasterLayerData.length<a*s*4||e.push({width:a,height:s,data:t.rasterLayerData,matrix:t.rasterLayerMatrix}),e}uploadFillPaths(t){const e=this.gl,a=e.getParameter(e.MAX_TEXTURE_SIZE),s=Se(t.fillPathCount,a),i=Se(t.fillSegmentCount,a);this.fillPathMetaTextureWidth=s.width,this.fillPathMetaTextureHeight=s.height,this.fillSegmentTextureWidth=i.width,this.fillSegmentTextureHeight=i.height;const r=s.width*s.height,o=i.width*i.height,l=new Float32Array(r*4);l.set(t.fillPathMetaA);const c=new Float32Array(r*4);c.set(t.fillPathMetaB);const g=new Float32Array(r*4);g.set(t.fillPathMetaC);const p=new Float32Array(o*4);p.set(t.fillSegmentsA);const y=new Float32Array(o*4);return y.set(t.fillSegmentsB),e.bindTexture(e.TEXTURE_2D,this.fillPathMetaTextureA),At(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,0,e.RGBA,e.FLOAT,l),e.bindTexture(e.TEXTURE_2D,this.fillPathMetaTextureB),At(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,0,e.RGBA,e.FLOAT,c),e.bindTexture(e.TEXTURE_2D,this.fillPathMetaTextureC),At(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,0,e.RGBA,e.FLOAT,g),e.bindTexture(e.TEXTURE_2D,this.fillSegmentTextureA),At(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.fillSegmentTextureWidth,this.fillSegmentTextureHeight,0,e.RGBA,e.FLOAT,p),e.bindTexture(e.TEXTURE_2D,this.fillSegmentTextureB),At(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.fillSegmentTextureWidth,this.fillSegmentTextureHeight,0,e.RGBA,e.FLOAT,y),{pathMetaTextureWidth:this.fillPathMetaTextureWidth,pathMetaTextureHeight:this.fillPathMetaTextureHeight,segmentTextureWidth:this.fillSegmentTextureWidth,segmentTextureHeight:this.fillSegmentTextureHeight}}uploadSegments(t){const e=this.gl,a=e.getParameter(e.MAX_TEXTURE_SIZE),s=Math.ceil(Math.sqrt(t.segmentCount));if(this.segmentTextureWidth=It(s,1,a),this.segmentTextureHeight=Math.max(1,Math.ceil(t.segmentCount/this.segmentTextureWidth)),this.segmentTextureHeight>a)throw new Error("Segment texture exceeds GPU limits for this browser/GPU.");const i=this.segmentTextureWidth*this.segmentTextureHeight,r=new Float32Array(i*4);r.set(t.endpoints);const o=new Float32Array(i*4);o.set(t.primitiveMeta);const l=new Float32Array(i*4);l.set(t.styles);const c=new Float32Array(i*4);return c.set(t.primitiveBounds),e.bindTexture(e.TEXTURE_2D,this.segmentTextureA),At(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.segmentTextureWidth,this.segmentTextureHeight,0,e.RGBA,e.FLOAT,r),e.bindTexture(e.TEXTURE_2D,this.segmentTextureB),At(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.segmentTextureWidth,this.segmentTextureHeight,0,e.RGBA,e.FLOAT,o),e.bindTexture(e.TEXTURE_2D,this.segmentTextureC),At(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.segmentTextureWidth,this.segmentTextureHeight,0,e.RGBA,e.FLOAT,l),e.bindTexture(e.TEXTURE_2D,this.segmentTextureD),At(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.segmentTextureWidth,this.segmentTextureHeight,0,e.RGBA,e.FLOAT,c),{textureWidth:this.segmentTextureWidth,textureHeight:this.segmentTextureHeight,maxTextureSize:a}}uploadTextData(t){const e=this.gl,a=e.getParameter(e.MAX_TEXTURE_SIZE),s=Se(t.textInstanceCount,a),i=Se(t.textGlyphCount,a),r=Se(t.textGlyphSegmentCount,a);this.textInstanceTextureWidth=s.width,this.textInstanceTextureHeight=s.height,this.textGlyphMetaTextureWidth=i.width,this.textGlyphMetaTextureHeight=i.height,this.textGlyphSegmentTextureWidth=r.width,this.textGlyphSegmentTextureHeight=r.height;const o=s.width*s.height,l=i.width*i.height,c=r.width*r.height,g=new Float32Array(o*4);g.set(t.textInstanceA);const p=new Float32Array(o*4);p.set(t.textInstanceB);const y=new Float32Array(o*4);y.set(t.textInstanceC);const f=new Float32Array(l*4);f.set(t.textGlyphMetaA);const v=new Float32Array(l*4);v.set(t.textGlyphMetaB);const d=new Float32Array(l*4),m=jr(t,a);m?(d.set(m.glyphUvRects),this.textRasterAtlasWidth=m.width,this.textRasterAtlasHeight=m.height):(this.textRasterAtlasWidth=1,this.textRasterAtlasHeight=1);const x=new Float32Array(c*4);x.set(t.textGlyphSegmentsA);const b=new Float32Array(c*4);if(b.set(t.textGlyphSegmentsB),e.bindTexture(e.TEXTURE_2D,this.textInstanceTextureA),At(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.textInstanceTextureWidth,this.textInstanceTextureHeight,0,e.RGBA,e.FLOAT,g),e.bindTexture(e.TEXTURE_2D,this.textInstanceTextureB),At(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.textInstanceTextureWidth,this.textInstanceTextureHeight,0,e.RGBA,e.FLOAT,p),e.bindTexture(e.TEXTURE_2D,this.textInstanceTextureC),At(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.textInstanceTextureWidth,this.textInstanceTextureHeight,0,e.RGBA,e.FLOAT,y),e.bindTexture(e.TEXTURE_2D,this.textGlyphMetaTextureA),At(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,0,e.RGBA,e.FLOAT,f),e.bindTexture(e.TEXTURE_2D,this.textGlyphMetaTextureB),At(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,0,e.RGBA,e.FLOAT,v),e.bindTexture(e.TEXTURE_2D,this.textGlyphRasterMetaTexture),At(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,0,e.RGBA,e.FLOAT,d),e.bindTexture(e.TEXTURE_2D,this.textGlyphSegmentTextureA),At(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.textGlyphSegmentTextureWidth,this.textGlyphSegmentTextureHeight,0,e.RGBA,e.FLOAT,x),e.bindTexture(e.TEXTURE_2D,this.textGlyphSegmentTextureB),At(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.textGlyphSegmentTextureWidth,this.textGlyphSegmentTextureHeight,0,e.RGBA,e.FLOAT,b),e.bindTexture(e.TEXTURE_2D,this.textRasterAtlasTexture),pr(e),m)e.texImage2D(e.TEXTURE_2D,0,e.RGBA,this.textRasterAtlasWidth,this.textRasterAtlasHeight,0,e.RGBA,e.UNSIGNED_BYTE,m.rgba);else{const _=new Uint8Array([0,0,0,0]);e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,_)}return e.generateMipmap(e.TEXTURE_2D),{instanceTextureWidth:this.textInstanceTextureWidth,instanceTextureHeight:this.textInstanceTextureHeight,glyphMetaTextureWidth:this.textGlyphMetaTextureWidth,glyphMetaTextureHeight:this.textGlyphMetaTextureHeight,glyphSegmentTextureWidth:this.textGlyphSegmentTextureWidth,glyphSegmentTextureHeight:this.textGlyphSegmentTextureHeight}}buildSegmentBounds(t){this.segmentMinX.length<this.segmentCount&&(this.segmentMinX=new Float32Array(this.segmentCount),this.segmentMinY=new Float32Array(this.segmentCount),this.segmentMaxX=new Float32Array(this.segmentCount),this.segmentMaxY=new Float32Array(this.segmentCount));for(let e=0;e<this.segmentCount;e+=1){const a=e*4,s=e*4,i=t.styles[s]+.35;this.segmentMinX[e]=t.primitiveBounds[a]-i,this.segmentMinY[e]=t.primitiveBounds[a+1]-i,this.segmentMaxX[e]=t.primitiveBounds[a+2]+i,this.segmentMaxY[e]=t.primitiveBounds[a+3]+i}}markInteraction(){this.lastInteractionTime=performance.now()}isInteractionActive(){return performance.now()-this.lastInteractionTime<=Qa}initializeGeometry(){const t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,this.cornerBuffer);const e=new Float32Array([-1,-1,1,-1,-1,1,1,1]);t.bufferData(t.ARRAY_BUFFER,e,t.STATIC_DRAW),t.bindVertexArray(this.segmentVao),t.bindBuffer(t.ARRAY_BUFFER,this.cornerBuffer),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,8,0),t.vertexAttribDivisor(0,0),t.bindBuffer(t.ARRAY_BUFFER,this.allSegmentIdBuffer),t.enableVertexAttribArray(1),t.vertexAttribPointer(1,1,t.FLOAT,!1,4,0),t.vertexAttribDivisor(1,1),t.bindVertexArray(this.fillVao),t.bindBuffer(t.ARRAY_BUFFER,this.cornerBuffer),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,8,0),t.vertexAttribDivisor(0,0),t.bindBuffer(t.ARRAY_BUFFER,this.allFillPathIdBuffer),t.enableVertexAttribArray(3),t.vertexAttribPointer(3,1,t.FLOAT,!1,4,0),t.vertexAttribDivisor(3,1),t.bindVertexArray(this.textVao),t.bindBuffer(t.ARRAY_BUFFER,this.cornerBuffer),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,8,0),t.vertexAttribDivisor(0,0),t.bindBuffer(t.ARRAY_BUFFER,this.allTextInstanceIdBuffer),t.enableVertexAttribArray(2),t.vertexAttribPointer(2,1,t.FLOAT,!1,4,0),t.vertexAttribDivisor(2,1),t.bindVertexArray(this.blitVao),t.bindBuffer(t.ARRAY_BUFFER,this.cornerBuffer),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,8,0),t.vertexAttribDivisor(0,0),t.bindVertexArray(null)}initializeState(){const t=this.gl;t.disable(t.DEPTH_TEST),t.disable(t.CULL_FACE),t.enable(t.BLEND),t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA)}uploadPageBackgroundTexture(){const t=this.gl,e=this.pageBackgroundColor,a=new Uint8Array([Math.round(e[0]*255),Math.round(e[1]*255),Math.round(e[2]*255),Math.round(e[3]*255)]);t.bindTexture(t.TEXTURE_2D,this.pageBackgroundTexture),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,a),t.bindTexture(t.TEXTURE_2D,null)}clientToWorld(t,e){return this.clientToWorldAt(t,e,this.cameraCenterX,this.cameraCenterY,this.zoom)}clientToWorldAt(t,e,a,s,i){const r=this.canvas.getBoundingClientRect(),o=window.devicePixelRatio||1,l=(t-r.left)*o,c=(r.bottom-e)*o;return{x:(l-this.canvas.width*.5)/i+a,y:(c-this.canvas.height*.5)/i+s}}syncCameraTargetsToCurrent(){this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY,this.targetZoom=this.zoom,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1}updatePanReleaseVelocitySample(t){if(!this.isPanInteracting){this.lastPanFrameTimeMs=0;return}if(this.lastPanFrameTimeMs>0){const e=t-this.lastPanFrameTimeMs;if(e>.1){const a=this.cameraCenterX-this.lastPanFrameCameraX,s=this.cameraCenterY-this.lastPanFrameCameraY;let i=a*1e3/e,r=s*1e3/e;const o=Math.hypot(i,r);if(Number.isFinite(o)&&o>=fr){if(o>mr){const l=mr/o;i*=l,r*=l}this.panVelocityWorldX=i,this.panVelocityWorldY=r,this.lastPanVelocityUpdateTimeMs=t}}}this.lastPanFrameCameraX=this.cameraCenterX,this.lastPanFrameCameraY=this.cameraCenterY,this.lastPanFrameTimeMs=t}updateCameraWithDamping(t){let e=Math.abs(this.targetCameraCenterX-this.cameraCenterX)>de||Math.abs(this.targetCameraCenterY-this.cameraCenterY)>de,a=Math.abs(this.targetZoom-this.zoom)>Xe;if(!e&&!a)return this.hasZoomAnchor=!1,this.lastCameraAnimationTimeMs=t,!1;this.lastCameraAnimationTimeMs<=0&&(this.lastCameraAnimationTimeMs=t-16);const s=It(t-this.lastCameraAnimationTimeMs,0,rs);this.lastCameraAnimationTimeMs=t;const i=s/1e3,r=1-Math.exp(-yn*i),o=1-Math.exp(-24*i);if(a&&(this.zoom+=(this.targetZoom-this.zoom)*o,Math.abs(this.targetZoom-this.zoom)<=Xe&&(this.zoom=this.targetZoom)),this.hasZoomAnchor){const l=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,this.zoom),c=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,this.targetZoom);this.cameraCenterX=l.x,this.cameraCenterY=l.y,this.targetCameraCenterX=c.x,this.targetCameraCenterY=c.y,a||(this.hasZoomAnchor=!1),e=!1}else e&&(this.cameraCenterX+=(this.targetCameraCenterX-this.cameraCenterX)*r,this.cameraCenterY+=(this.targetCameraCenterY-this.cameraCenterY)*r,Math.abs(this.targetCameraCenterX-this.cameraCenterX)<=de&&(this.cameraCenterX=this.targetCameraCenterX),Math.abs(this.targetCameraCenterY-this.cameraCenterY)<=de&&(this.cameraCenterY=this.targetCameraCenterY));return this.markInteraction(),this.needsVisibleSetUpdate=!0,e=Math.abs(this.targetCameraCenterX-this.cameraCenterX)>de||Math.abs(this.targetCameraCenterY-this.cameraCenterY)>de,a=Math.abs(this.targetZoom-this.zoom)>Xe,e||a}computeCameraCenterForAnchor(t,e,a,s,i){const r=this.canvas.getBoundingClientRect(),o=window.devicePixelRatio||1,l=(t-r.left)*o,c=(r.bottom-e)*o;return{x:a-(l-this.canvas.width*.5)/i,y:s-(c-this.canvas.height*.5)/i}}createProgram(t,e){const a=this.gl,s=this.compileShader(a.VERTEX_SHADER,t),i=this.compileShader(a.FRAGMENT_SHADER,e),r=a.createProgram();if(!r)throw new Error("Unable to create WebGL program.");if(a.attachShader(r,s),a.attachShader(r,i),a.linkProgram(r),!a.getProgramParameter(r,a.LINK_STATUS)){const l=a.getProgramInfoLog(r)||"Unknown linker error.";throw a.deleteProgram(r),new Error(`Program link failed: ${l}`)}return a.deleteShader(s),a.deleteShader(i),r}compileShader(t,e){const a=this.gl.createShader(t);if(!a)throw new Error("Unable to create shader.");if(this.gl.shaderSource(a,e),this.gl.compileShader(a),!this.gl.getShaderParameter(a,this.gl.COMPILE_STATUS)){const i=this.gl.getShaderInfoLog(a)||"Unknown shader compiler error.";throw this.gl.deleteShader(a),new Error(`Shader compilation failed: ${i}`)}return a}createVertexArray(){const t=this.gl.createVertexArray();if(!t)throw new Error("Unable to create VAO.");return t}mustCreateBuffer(){const t=this.gl.createBuffer();if(!t)throw new Error("Unable to create WebGL buffer.");return t}mustCreateTexture(){const t=this.gl.createTexture();if(!t)throw new Error("Unable to create WebGL texture.");return t}mustGetUniformLocation(t,e){const a=this.gl.getUniformLocation(t,e);if(!a)throw new Error(`Missing uniform: ${e}`);return a}}function At(n){n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}function ss(n){n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}function os(n){n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}function pr(n){n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}function ls(n){const t=new Uint8Array(n.length);for(let e=0;e+3<n.length;e+=4){const a=n[e+3];if(a<=0){t[e]=0,t[e+1]=0,t[e+2]=0,t[e+3]=0;continue}if(a>=255){t[e]=n[e],t[e+1]=n[e+1],t[e+2]=n[e+2],t[e+3]=255;continue}const s=a/255;t[e]=Math.round(n[e]*s),t[e+1]=Math.round(n[e+1]*s),t[e+2]=Math.round(n[e+2]*s),t[e+3]=a}return t}function Se(n,t){const e=Math.max(1,n),a=Math.ceil(Math.sqrt(e)),s=It(a,1,t),i=Math.max(1,Math.ceil(e/s));if(i>t)throw new Error("Data texture exceeds GPU limits for this browser/GPU.");return{width:s,height:i}}function cs(n){return n.pageRects instanceof Float32Array&&n.pageRects.length>=4?new Float32Array(n.pageRects):new Float32Array([n.pageBounds.minX,n.pageBounds.minY,n.pageBounds.maxX,n.pageBounds.maxY])}function It(n,t,e){return n<t?t:n>e?e:n}function He(n,t){return n<0?0:n>=t?t-1:n}const us=140,hs=.92,gr=3e5,xr=1.8,yr=96,ds=1e-5,fs=.75,ms=1.3333333333,ps=2,gs=2.25,vn=24,fe=1e-4,qe=1e-5,xs=64,vr=5,Tr=2e4,ys=120,Ae={r:160/255,g:169/255,b:175/255,a:1},vs=16,Lt=64,Ts=12,$e=48,Cs=4,Ze=16,bs=8,je=32,Ss=`
struct CameraUniforms {
  viewport : vec2f,
  cameraCenter : vec2f,
  zoom : f32,
  strokeAAScreenPx : f32,
  strokeCurveEnabled : f32,
  textAAScreenPx : f32,
  textCurveEnabled : f32,
  fillAAScreenPx : f32,
  textVectorOnly : f32,
  pad0 : f32,
  vectorOverride : vec4f,
};

struct SegmentIdBuffer {
  values : array<u32>,
};

@group(0) @binding(0) var<uniform> uCamera : CameraUniforms;
@group(0) @binding(1) var uSegmentTexA : texture_2d<f32>;
@group(0) @binding(2) var uSegmentTexB : texture_2d<f32>;
@group(0) @binding(3) var uSegmentStyleTex : texture_2d<f32>;
@group(0) @binding(4) var uSegmentBoundsTex : texture_2d<f32>;
@group(0) @binding(5) var<storage, read> uSegmentIds : SegmentIdBuffer;

struct VsOut {
  @builtin(position) position : vec4f,
  @location(0) local : vec2f,
  @location(1) @interpolate(flat) p0 : vec2f,
  @location(2) @interpolate(flat) p1 : vec2f,
  @location(3) @interpolate(flat) p2 : vec2f,
  @location(4) @interpolate(flat) primitiveType : f32,
  @location(5) @interpolate(flat) halfWidth : f32,
  @location(6) @interpolate(flat) aaWorld : f32,
  @location(7) @interpolate(flat) color : vec3f,
  @location(8) @interpolate(flat) alpha : f32,
};

fn cornerFromVertexIndex(vertexIndex : u32) -> vec2f {
  switch (vertexIndex) {
    case 0u: {
      return vec2f(-1.0, -1.0);
    }
    case 1u: {
      return vec2f(1.0, -1.0);
    }
    case 2u: {
      return vec2f(-1.0, 1.0);
    }
    default: {
      return vec2f(1.0, 1.0);
    }
  }
}

fn coordFromIndex(index : u32, width : u32) -> vec2<i32> {
  return vec2<i32>(i32(index % width), i32(index / width));
}

fn distanceToLineSegment(p : vec2f, a : vec2f, b : vec2f) -> f32 {
  let ab = b - a;
  let abLenSq = dot(ab, ab);
  if (abLenSq <= 1e-10) {
    return length(p - a);
  }
  let t = clamp(dot(p - a, ab) / abLenSq, 0.0, 1.0);
  return length(p - (a + ab * t));
}

fn distanceToQuadraticBezier(p : vec2f, a : vec2f, b : vec2f, c : vec2f) -> f32 {
  let aa = b - a;
  let bb = a - 2.0 * b + c;
  let cc = aa * 2.0;
  let dd = a - p;

  let bbLenSq = dot(bb, bb);
  if (bbLenSq <= 1e-12) {
    return distanceToLineSegment(p, a, c);
  }

  let inv = 1.0 / bbLenSq;
  let kx = inv * dot(aa, bb);
  let ky = inv * (2.0 * dot(aa, aa) + dot(dd, bb)) / 3.0;
  let kz = inv * dot(dd, aa);

  let pValue = ky - kx * kx;
  let pCube = pValue * pValue * pValue;
  let qValue = kx * (2.0 * kx * kx - 3.0 * ky) + kz;
  let hValue = qValue * qValue + 4.0 * pCube;

  var best = 1e20;

  if (hValue >= 0.0) {
    let hSqrt = sqrt(hValue);
    let roots = (vec2f(hSqrt, -hSqrt) - qValue) * 0.5;
    let uv = sign(roots) * pow(abs(roots), vec2f(1.0 / 3.0));
    let t = clamp(uv.x + uv.y - kx, 0.0, 1.0);
    let delta = dd + (cc + bb * t) * t;
    best = dot(delta, delta);
  } else {
    let z = sqrt(-pValue);
    let acosArg = clamp(qValue / (2.0 * pValue * z), -1.0, 1.0);
    let angle = acos(acosArg) / 3.0;
    let cosine = cos(angle);
    let sine = sin(angle) * 1.732050808;
    let t = clamp(vec3f(cosine + cosine, -sine - cosine, sine - cosine) * z - kx, vec3f(0.0), vec3f(1.0));

    var delta = dd + (cc + bb * t.x) * t.x;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.y) * t.y;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.z) * t.z;
    best = min(best, dot(delta, delta));
  }

  return sqrt(max(best, 0.0));
}

@vertex
fn vsMain(@builtin(vertex_index) vertexIndex : u32, @builtin(instance_index) instanceIndex : u32) -> VsOut {
  let segmentIndex = uSegmentIds.values[instanceIndex];
  let dims = textureDimensions(uSegmentTexA);
  let coord = coordFromIndex(segmentIndex, dims.x);

  let primitiveA = textureLoad(uSegmentTexA, coord, 0);
  let primitiveB = textureLoad(uSegmentTexB, coord, 0);
  let style = textureLoad(uSegmentStyleTex, coord, 0);
  let primitiveBounds = textureLoad(uSegmentBoundsTex, coord, 0);

  let p0 = primitiveA.xy;
  let p1 = primitiveA.zw;
  let p2 = primitiveB.xy;
  let primitiveType = primitiveB.z;
  let isQuadratic = primitiveType >= 0.5;

  var halfWidth = style.x;
  let color = style.yzw;
  let packedStyle = primitiveB.w;
  let styleFlags = select(0.0, 1.0, packedStyle >= 2.0);
  let alpha = clamp(packedStyle - styleFlags * 2.0, 0.0, 1.0);
  let isHairline = styleFlags >= 0.5;

  let geometryLength = select(length(p2 - p0), length(p1 - p0) + length(p2 - p1), isQuadratic);

  var out : VsOut;
  if (geometryLength < 1e-5 || alpha <= 0.001) {
    out.position = vec4f(-2.0, -2.0, 0.0, 1.0);
    out.local = vec2f(0.0, 0.0);
    out.p0 = vec2f(0.0, 0.0);
    out.p1 = vec2f(0.0, 0.0);
    out.p2 = vec2f(0.0, 0.0);
    out.primitiveType = 0.0;
    out.halfWidth = 0.0;
    out.aaWorld = 1.0;
    out.color = color;
    out.alpha = 0.0;
    return out;
  }

  if (isHairline) {
    halfWidth = max(0.5 / max(uCamera.zoom, 1e-4), 1e-5);
  }

  var aaWorld = max(1.0 / max(uCamera.zoom, 1e-4), 0.0001) * uCamera.strokeAAScreenPx;
  if (isHairline) {
    aaWorld = max(0.35 / max(uCamera.zoom, 1e-4), 5e-5);
  }

  let extent = halfWidth + aaWorld;
  let worldMin = primitiveBounds.xy - vec2f(extent, extent);
  let worldMax = primitiveBounds.zw + vec2f(extent, extent);

  let corner01 = cornerFromVertexIndex(vertexIndex) * 0.5 + 0.5;
  let worldPosition = mix(worldMin, worldMax, corner01);
  let screen = (worldPosition - uCamera.cameraCenter) * uCamera.zoom + 0.5 * uCamera.viewport;
  let clip = (screen / (0.5 * uCamera.viewport)) - 1.0;

  out.position = vec4f(clip, 0.0, 1.0);
  out.local = worldPosition;
  out.p0 = p0;
  out.p1 = p1;
  out.p2 = p2;
  out.primitiveType = primitiveType;
  out.halfWidth = halfWidth;
  out.aaWorld = aaWorld;
  out.color = color;
  out.alpha = alpha;
  return out;
}

@fragment
fn fsMain(inData : VsOut) -> @location(0) vec4f {
  if (inData.alpha <= 0.001) {
    discard;
  }

  let useCurve = uCamera.strokeCurveEnabled >= 0.5 && inData.primitiveType >= 0.5;
  let distanceToSegment = select(
    distanceToLineSegment(inData.local, inData.p0, inData.p2),
    distanceToQuadraticBezier(inData.local, inData.p0, inData.p1, inData.p2),
    useCurve
  );

  let coverage = 1.0 - smoothstep(inData.halfWidth - inData.aaWorld, inData.halfWidth + inData.aaWorld, distanceToSegment);
  let alpha = coverage * inData.alpha;

  if (alpha <= 0.001) {
    discard;
  }

  let color = mix(inData.color, uCamera.vectorOverride.xyz, clamp(uCamera.vectorOverride.w, 0.0, 1.0));
  return vec4f(color, alpha);
}
`,As=`
struct CameraUniforms {
  viewport : vec2f,
  cameraCenter : vec2f,
  zoom : f32,
  strokeAAScreenPx : f32,
  strokeCurveEnabled : f32,
  textAAScreenPx : f32,
  textCurveEnabled : f32,
  fillAAScreenPx : f32,
  textVectorOnly : f32,
  pad0 : f32,
  vectorOverride : vec4f,
};

@group(0) @binding(0) var<uniform> uCamera : CameraUniforms;
@group(0) @binding(1) var uFillPathMetaTexA : texture_2d<f32>;
@group(0) @binding(2) var uFillPathMetaTexB : texture_2d<f32>;
@group(0) @binding(3) var uFillPathMetaTexC : texture_2d<f32>;
@group(0) @binding(4) var uFillSegmentTexA : texture_2d<f32>;
@group(0) @binding(5) var uFillSegmentTexB : texture_2d<f32>;

struct VsOut {
  @builtin(position) position : vec4f,
  @location(0) local : vec2f,
  @location(1) @interpolate(flat) segmentStart : i32,
  @location(2) @interpolate(flat) segmentCount : i32,
  @location(3) @interpolate(flat) color : vec3f,
  @location(4) @interpolate(flat) alpha : f32,
  @location(5) @interpolate(flat) fillRule : f32,
  @location(6) @interpolate(flat) fillHasCompanionStroke : f32,
};

const MAX_FILL_PATH_PRIMITIVES : i32 = 2048;
const FILL_PRIMITIVE_QUADRATIC : f32 = 1.0;
const QUAD_WINDING_SUBDIVISIONS : i32 = 6;

fn cornerFromVertexIndex(vertexIndex : u32) -> vec2f {
  switch (vertexIndex) {
    case 0u: {
      return vec2f(-1.0, -1.0);
    }
    case 1u: {
      return vec2f(1.0, -1.0);
    }
    case 2u: {
      return vec2f(-1.0, 1.0);
    }
    default: {
      return vec2f(1.0, 1.0);
    }
  }
}

fn coordFromIndex(index : i32, width : i32) -> vec2<i32> {
  return vec2<i32>(index % width, index / width);
}

fn distanceToLineSegment(p : vec2f, a : vec2f, b : vec2f) -> f32 {
  let ab = b - a;
  let abLenSq = dot(ab, ab);
  if (abLenSq <= 1e-10) {
    return length(p - a);
  }
  let t = clamp(dot(p - a, ab) / abLenSq, 0.0, 1.0);
  return length(p - (a + ab * t));
}

fn distanceToQuadraticBezier(p : vec2f, a : vec2f, b : vec2f, c : vec2f) -> f32 {
  let aa = b - a;
  let bb = a - 2.0 * b + c;
  let cc = aa * 2.0;
  let dd = a - p;

  let bbLenSq = dot(bb, bb);
  if (bbLenSq <= 1e-12) {
    return distanceToLineSegment(p, a, c);
  }

  let inv = 1.0 / bbLenSq;
  let kx = inv * dot(aa, bb);
  let ky = inv * (2.0 * dot(aa, aa) + dot(dd, bb)) / 3.0;
  let kz = inv * dot(dd, aa);

  let pValue = ky - kx * kx;
  let pCube = pValue * pValue * pValue;
  let qValue = kx * (2.0 * kx * kx - 3.0 * ky) + kz;
  let hValue = qValue * qValue + 4.0 * pCube;

  var best = 1e20;

  if (hValue >= 0.0) {
    let hSqrt = sqrt(hValue);
    let roots = (vec2f(hSqrt, -hSqrt) - qValue) * 0.5;
    let uv = sign(roots) * pow(abs(roots), vec2f(1.0 / 3.0));
    let t = clamp(uv.x + uv.y - kx, 0.0, 1.0);
    let delta = dd + (cc + bb * t) * t;
    best = dot(delta, delta);
  } else {
    let z = sqrt(-pValue);
    let acosArg = clamp(qValue / (2.0 * pValue * z), -1.0, 1.0);
    let angle = acos(acosArg) / 3.0;
    let cosine = cos(angle);
    let sine = sin(angle) * 1.732050808;
    let t = clamp(vec3f(cosine + cosine, -sine - cosine, sine - cosine) * z - kx, vec3f(0.0), vec3f(1.0));

    var delta = dd + (cc + bb * t.x) * t.x;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.y) * t.y;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.z) * t.z;
    best = min(best, dot(delta, delta));
  }

  return sqrt(max(best, 0.0));
}

fn evaluateQuadratic(a : vec2f, b : vec2f, c : vec2f, t : f32) -> vec2f {
  let oneMinusT = 1.0 - t;
  return oneMinusT * oneMinusT * a + 2.0 * oneMinusT * t * b + t * t * c;
}

fn accumulateLineCrossing(a : vec2f, b : vec2f, p : vec2f, winding : ptr<function, i32>, crossings : ptr<function, i32>) {
  let upward = (a.y <= p.y) && (b.y > p.y);
  let downward = (a.y > p.y) && (b.y <= p.y);
  if (!upward && !downward) {
    return;
  }

  let denom = b.y - a.y;
  if (abs(denom) <= 1e-6) {
    return;
  }

  let xCross = a.x + (p.y - a.y) * (b.x - a.x) / denom;
  if (xCross > p.x) {
    *crossings = *crossings + 1;
    *winding = *winding + select(-1, 1, upward);
  }
}

fn accumulateQuadraticCrossing(a : vec2f, b : vec2f, c : vec2f, p : vec2f, winding : ptr<function, i32>, crossings : ptr<function, i32>) {
  var prev = a;
  for (var i = 1; i <= QUAD_WINDING_SUBDIVISIONS; i = i + 1) {
    let t = f32(i) / f32(QUAD_WINDING_SUBDIVISIONS);
    let next = evaluateQuadratic(a, b, c, t);
    accumulateLineCrossing(prev, next, p, winding, crossings);
    prev = next;
  }
}

@vertex
fn vsMain(@builtin(vertex_index) vertexIndex : u32, @builtin(instance_index) instanceIndex : u32) -> VsOut {
  let metaDims = textureDimensions(uFillPathMetaTexA);
  let pathIndex = i32(instanceIndex);
  let coord = coordFromIndex(pathIndex, i32(metaDims.x));

  let metaA = textureLoad(uFillPathMetaTexA, coord, 0);
  let metaB = textureLoad(uFillPathMetaTexB, coord, 0);
  let metaC = textureLoad(uFillPathMetaTexC, coord, 0);

  let segmentCount = i32(metaA.y + 0.5);
  let alpha = metaC.w;

  var out : VsOut;
  if (segmentCount <= 0 || alpha <= 0.001) {
    out.position = vec4f(-2.0, -2.0, 0.0, 1.0);
    out.local = vec2f(0.0, 0.0);
    out.segmentStart = 0;
    out.segmentCount = 0;
    out.color = vec3f(0.0, 0.0, 0.0);
    out.alpha = 0.0;
    out.fillRule = 0.0;
    out.fillHasCompanionStroke = 0.0;
    return out;
  }

  let minBounds = metaA.zw;
  let maxBounds = metaB.xy;
  let corner01 = cornerFromVertexIndex(vertexIndex) * 0.5 + 0.5;
  let world = mix(minBounds, maxBounds, corner01);

  let screen = (world - uCamera.cameraCenter) * uCamera.zoom + 0.5 * uCamera.viewport;
  let clip = (screen / (0.5 * uCamera.viewport)) - 1.0;

  out.position = vec4f(clip, 0.0, 1.0);
  out.local = world;
  out.segmentStart = i32(metaA.x + 0.5);
  out.segmentCount = segmentCount;
  out.color = vec3f(metaB.z, metaB.w, metaC.z);
  out.alpha = alpha;
  out.fillRule = metaC.x;
  out.fillHasCompanionStroke = metaC.y;
  return out;
}

@fragment
fn fsMain(inData : VsOut) -> @location(0) vec4f {
  let pixelToLocalX = length(vec2f(dpdx(inData.local.x), dpdy(inData.local.x)));
  let pixelToLocalY = length(vec2f(dpdx(inData.local.y), dpdy(inData.local.y)));
  let aaWidth = max(max(pixelToLocalX, pixelToLocalY) * uCamera.fillAAScreenPx, 1e-4);

  if (inData.segmentCount <= 0 || inData.alpha <= 0.001) {
    discard;
  }

  let fillSegDims = textureDimensions(uFillSegmentTexA);

  var minDistance = 1e20;
  var winding = 0;
  var crossings = 0;

  for (var i = 0; i < MAX_FILL_PATH_PRIMITIVES; i = i + 1) {
    if (i >= inData.segmentCount) {
      break;
    }

    let segmentIndex = inData.segmentStart + i;
    let coord = coordFromIndex(segmentIndex, i32(fillSegDims.x));

    let primitiveA = textureLoad(uFillSegmentTexA, coord, 0);
    let primitiveB = textureLoad(uFillSegmentTexB, coord, 0);
    let p0 = primitiveA.xy;
    let p1 = primitiveA.zw;
    let p2 = primitiveB.xy;
    let primitiveType = primitiveB.z;

    if (primitiveType >= FILL_PRIMITIVE_QUADRATIC) {
      minDistance = min(minDistance, distanceToQuadraticBezier(inData.local, p0, p1, p2));
      accumulateQuadraticCrossing(p0, p1, p2, inData.local, &winding, &crossings);
    } else {
      minDistance = min(minDistance, distanceToLineSegment(inData.local, p0, p2));
      accumulateLineCrossing(p0, p2, inData.local, &winding, &crossings);
    }
  }

  let insideNonZero = winding != 0;
  let insideEvenOdd = (crossings & 1) == 1;
  let inside = select(insideNonZero, insideEvenOdd, inData.fillRule >= 0.5);
  let color = mix(inData.color, uCamera.vectorOverride.xyz, clamp(uCamera.vectorOverride.w, 0.0, 1.0));

  if (inData.fillHasCompanionStroke >= 0.5) {
    let alpha = select(0.0, inData.alpha, inside);
    if (alpha <= 0.001) {
      discard;
    }
    return vec4f(color, alpha);
  }

  let signedDistance = select(minDistance, -minDistance, inside);

  let alpha = clamp(0.5 - signedDistance / aaWidth, 0.0, 1.0) * inData.alpha;
  if (alpha <= 0.001) {
    discard;
  }

  return vec4f(color, alpha);
}
`,ws=`
struct CameraUniforms {
  viewport : vec2f,
  cameraCenter : vec2f,
  zoom : f32,
  strokeAAScreenPx : f32,
  strokeCurveEnabled : f32,
  textAAScreenPx : f32,
  textCurveEnabled : f32,
  fillAAScreenPx : f32,
  textVectorOnly : f32,
  pad0 : f32,
  vectorOverride : vec4f,
};

@group(0) @binding(0) var<uniform> uCamera : CameraUniforms;
@group(0) @binding(1) var uTextInstanceTexA : texture_2d<f32>;
@group(0) @binding(2) var uTextInstanceTexB : texture_2d<f32>;
@group(0) @binding(3) var uTextInstanceTexC : texture_2d<f32>;
@group(0) @binding(4) var uTextGlyphMetaTexA : texture_2d<f32>;
@group(0) @binding(5) var uTextGlyphMetaTexB : texture_2d<f32>;
@group(0) @binding(6) var uTextGlyphSegmentTexA : texture_2d<f32>;
@group(0) @binding(7) var uTextGlyphSegmentTexB : texture_2d<f32>;
@group(0) @binding(8) var uTextGlyphRasterMetaTex : texture_2d<f32>;
@group(0) @binding(9) var uTextRasterSampler : sampler;
@group(0) @binding(10) var uTextRasterAtlasTex : texture_2d<f32>;

struct VsOut {
  @builtin(position) position : vec4f,
  @location(0) local : vec2f,
  @location(1) @interpolate(flat) segmentStart : i32,
  @location(2) @interpolate(flat) segmentCount : i32,
  @location(3) @interpolate(flat) color : vec3f,
  @location(4) @interpolate(flat) colorAlpha : f32,
  @location(5) @interpolate(flat) rasterRect : vec4f,
  @location(6) normCoord : vec2f,
};

const MAX_GLYPH_PRIMITIVES : i32 = 256;
const TEXT_PRIMITIVE_QUADRATIC : f32 = 1.0;
const QUAD_WINDING_SUBDIVISIONS : i32 = 6;

fn cornerFromVertexIndex(vertexIndex : u32) -> vec2f {
  switch (vertexIndex) {
    case 0u: {
      return vec2f(-1.0, -1.0);
    }
    case 1u: {
      return vec2f(1.0, -1.0);
    }
    case 2u: {
      return vec2f(-1.0, 1.0);
    }
    default: {
      return vec2f(1.0, 1.0);
    }
  }
}

fn coordFromIndex(index : i32, width : i32) -> vec2<i32> {
  return vec2<i32>(index % width, index / width);
}

fn distanceToLineSegment(p : vec2f, a : vec2f, b : vec2f) -> f32 {
  let ab = b - a;
  let abLenSq = dot(ab, ab);
  if (abLenSq <= 1e-10) {
    return length(p - a);
  }
  let t = clamp(dot(p - a, ab) / abLenSq, 0.0, 1.0);
  return length(p - (a + ab * t));
}

fn distanceToQuadraticBezier(p : vec2f, a : vec2f, b : vec2f, c : vec2f) -> f32 {
  let aa = b - a;
  let bb = a - 2.0 * b + c;
  let cc = aa * 2.0;
  let dd = a - p;

  let bbLenSq = dot(bb, bb);
  if (bbLenSq <= 1e-12) {
    return distanceToLineSegment(p, a, c);
  }

  let inv = 1.0 / bbLenSq;
  let kx = inv * dot(aa, bb);
  let ky = inv * (2.0 * dot(aa, aa) + dot(dd, bb)) / 3.0;
  let kz = inv * dot(dd, aa);

  let pValue = ky - kx * kx;
  let pCube = pValue * pValue * pValue;
  let qValue = kx * (2.0 * kx * kx - 3.0 * ky) + kz;
  let hValue = qValue * qValue + 4.0 * pCube;

  var best = 1e20;

  if (hValue >= 0.0) {
    let hSqrt = sqrt(hValue);
    let roots = (vec2f(hSqrt, -hSqrt) - qValue) * 0.5;
    let uv = sign(roots) * pow(abs(roots), vec2f(1.0 / 3.0));
    let t = clamp(uv.x + uv.y - kx, 0.0, 1.0);
    let delta = dd + (cc + bb * t) * t;
    best = dot(delta, delta);
  } else {
    let z = sqrt(-pValue);
    let acosArg = clamp(qValue / (2.0 * pValue * z), -1.0, 1.0);
    let angle = acos(acosArg) / 3.0;
    let cosine = cos(angle);
    let sine = sin(angle) * 1.732050808;
    let t = clamp(vec3f(cosine + cosine, -sine - cosine, sine - cosine) * z - kx, vec3f(0.0), vec3f(1.0));

    var delta = dd + (cc + bb * t.x) * t.x;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.y) * t.y;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.z) * t.z;
    best = min(best, dot(delta, delta));
  }

  return sqrt(max(best, 0.0));
}

fn evaluateQuadratic(a : vec2f, b : vec2f, c : vec2f, t : f32) -> vec2f {
  let oneMinusT = 1.0 - t;
  return oneMinusT * oneMinusT * a + 2.0 * oneMinusT * t * b + t * t * c;
}

fn accumulateLineCrossing(a : vec2f, b : vec2f, p : vec2f, winding : ptr<function, i32>) {
  let upward = (a.y <= p.y) && (b.y > p.y);
  let downward = (a.y > p.y) && (b.y <= p.y);
  if (!upward && !downward) {
    return;
  }

  let denom = b.y - a.y;
  if (abs(denom) <= 1e-6) {
    return;
  }

  let xCross = a.x + (p.y - a.y) * (b.x - a.x) / denom;
  if (xCross > p.x) {
    *winding = *winding + select(-1, 1, upward);
  }
}

fn accumulateQuadraticCrossing(a : vec2f, b : vec2f, c : vec2f, p : vec2f, winding : ptr<function, i32>) {
  var prev = a;
  for (var i = 1; i <= QUAD_WINDING_SUBDIVISIONS; i = i + 1) {
    let t = f32(i) / f32(QUAD_WINDING_SUBDIVISIONS);
    let next = evaluateQuadratic(a, b, c, t);
    accumulateLineCrossing(prev, next, p, winding);
    prev = next;
  }
}

@vertex
fn vsMain(@builtin(vertex_index) vertexIndex : u32, @builtin(instance_index) instanceIndex : u32) -> VsOut {
  let instanceDims = textureDimensions(uTextInstanceTexA);
  let glyphMetaDims = textureDimensions(uTextGlyphMetaTexA);

  let instanceIndexI = i32(instanceIndex);
  let instanceCoord = coordFromIndex(instanceIndexI, i32(instanceDims.x));

  let instanceA = textureLoad(uTextInstanceTexA, instanceCoord, 0);
  let instanceB = textureLoad(uTextInstanceTexB, instanceCoord, 0);
  let instanceC = textureLoad(uTextInstanceTexC, instanceCoord, 0);

  let glyphIndex = i32(instanceB.z + 0.5);
  let glyphCoord = coordFromIndex(glyphIndex, i32(glyphMetaDims.x));
  let glyphMetaA = textureLoad(uTextGlyphMetaTexA, glyphCoord, 0);
  let glyphMetaB = textureLoad(uTextGlyphMetaTexB, glyphCoord, 0);
  let glyphRasterMeta = textureLoad(uTextGlyphRasterMetaTex, glyphCoord, 0);

  let segmentCount = i32(glyphMetaA.y + 0.5);

  var out : VsOut;
  if (segmentCount <= 0) {
    out.position = vec4f(-2.0, -2.0, 0.0, 1.0);
    out.local = vec2f(0.0, 0.0);
    out.segmentStart = 0;
    out.segmentCount = 0;
    out.color = vec3f(0.0, 0.0, 0.0);
    out.colorAlpha = 0.0;
    out.rasterRect = vec4f(0.0, 0.0, 0.0, 0.0);
    out.normCoord = vec2f(0.0, 0.0);
    return out;
  }

  let minBounds = glyphMetaA.zw;
  let maxBounds = glyphMetaB.xy;
  let corner01 = cornerFromVertexIndex(vertexIndex) * 0.5 + 0.5;
  let local = mix(minBounds, maxBounds, corner01);

  let world = vec2f(
    instanceA.x * local.x + instanceA.z * local.y + instanceB.x,
    instanceA.y * local.x + instanceA.w * local.y + instanceB.y
  );

  let screen = (world - uCamera.cameraCenter) * uCamera.zoom + 0.5 * uCamera.viewport;
  let clip = (screen / (0.5 * uCamera.viewport)) - 1.0;

  out.position = vec4f(clip, 0.0, 1.0);
  out.local = local;
  out.segmentStart = i32(glyphMetaA.x + 0.5);
  out.segmentCount = segmentCount;
  out.color = instanceC.xyz;
  out.colorAlpha = instanceC.w;
  out.rasterRect = glyphRasterMeta;
  out.normCoord = clamp((local - minBounds) / max(maxBounds - minBounds, vec2f(1e-6, 1e-6)), vec2f(0.0), vec2f(1.0));
  return out;
}

@fragment
fn fsMain(inData : VsOut) -> @location(0) vec4f {
  let pixelToLocalX = length(vec2f(dpdx(inData.local.x), dpdy(inData.local.x)));
  let pixelToLocalY = length(vec2f(dpdx(inData.local.y), dpdy(inData.local.y)));
  let localPerPixel = max(pixelToLocalX, pixelToLocalY);
  let baseAAWidth = max(localPerPixel * uCamera.textAAScreenPx, 1e-4);
  let atlasDims = vec2f(textureDimensions(uTextRasterAtlasTex));
  let nc = vec2f(inData.normCoord.x, 1.0 - inData.normCoord.y) * (inData.rasterRect.zw * atlasDims);
  let ncFwidthX = fwidth(nc.x);
  let ncFwidthY = fwidth(nc.y);
  let dncDx = dpdx(nc);
  let dncDy = dpdy(nc);

  if (inData.segmentCount <= 0) {
    discard;
  }

  if (
    uCamera.textVectorOnly < 0.5 &&
    inData.rasterRect.z > 0.0 &&
    inData.rasterRect.w > 0.0 &&
    min(ncFwidthX, ncFwidthY) > 2.0
  ) {
    let uvCenter = vec2f(
      inData.rasterRect.x + inData.normCoord.x * inData.rasterRect.z,
      inData.rasterRect.y + (1.0 - inData.normCoord.y) * inData.rasterRect.w
    );
    let texel = 1.0 / max(atlasDims, vec2f(1.0, 1.0));
    let uvMin = inData.rasterRect.xy + texel * 0.5;
    let uvMax = inData.rasterRect.xy + inData.rasterRect.zw - texel * 0.5;
    let dx = dncDx * 0.33 * texel;
    let dy = dncDy * 0.33 * texel;
    let mipBias = -1.25;
    let lod = max(log2(max(max(ncFwidthX, ncFwidthY), 1e-6)) + mipBias, 0.0);
    let alphaRaster = (1.0 / 3.0) * textureSampleLevel(uTextRasterAtlasTex, uTextRasterSampler, clamp(uvCenter, uvMin, uvMax), lod).r +
      (1.0 / 6.0) * (
        textureSampleLevel(uTextRasterAtlasTex, uTextRasterSampler, clamp(uvCenter - dx - dy, uvMin, uvMax), lod).r +
        textureSampleLevel(uTextRasterAtlasTex, uTextRasterSampler, clamp(uvCenter - dx + dy, uvMin, uvMax), lod).r +
        textureSampleLevel(uTextRasterAtlasTex, uTextRasterSampler, clamp(uvCenter + dx - dy, uvMin, uvMax), lod).r +
        textureSampleLevel(uTextRasterAtlasTex, uTextRasterSampler, clamp(uvCenter + dx + dy, uvMin, uvMax), lod).r
      );
    let alpha = alphaRaster * inData.colorAlpha;
    if (alpha <= 0.001) {
      discard;
    }
    let color = mix(inData.color, uCamera.vectorOverride.xyz, clamp(uCamera.vectorOverride.w, 0.0, 1.0));
    return vec4f(color, alpha);
  }

  let glyphSegDims = textureDimensions(uTextGlyphSegmentTexA);

  var minDistance = 1e20;
  var winding = 0;

  for (var i = 0; i < MAX_GLYPH_PRIMITIVES; i = i + 1) {
    if (i >= inData.segmentCount) {
      break;
    }

    let segmentIndex = inData.segmentStart + i;
    let coord = coordFromIndex(segmentIndex, i32(glyphSegDims.x));

    let primitiveA = textureLoad(uTextGlyphSegmentTexA, coord, 0);
    let primitiveB = textureLoad(uTextGlyphSegmentTexB, coord, 0);
    let p0 = primitiveA.xy;
    let p1 = primitiveA.zw;
    let p2 = primitiveB.xy;
    let primitiveType = primitiveB.z;

    if (uCamera.textCurveEnabled >= 0.5 && primitiveType >= TEXT_PRIMITIVE_QUADRATIC) {
      minDistance = min(minDistance, distanceToQuadraticBezier(inData.local, p0, p1, p2));
      accumulateQuadraticCrossing(p0, p1, p2, inData.local, &winding);
    } else {
      minDistance = min(minDistance, distanceToLineSegment(inData.local, p0, p2));
      accumulateLineCrossing(p0, p2, inData.local, &winding);
    }
  }

  let inside = winding != 0;
  let signedDistance = select(minDistance, -minDistance, inside);
  let alphaBase = 1.0 - smoothstep(-baseAAWidth, baseAAWidth, signedDistance);
  let alpha = alphaBase * inData.colorAlpha;
  if (alpha <= 0.001) {
    discard;
  }

  let color = mix(inData.color, uCamera.vectorOverride.xyz, clamp(uCamera.vectorOverride.w, 0.0, 1.0));
  return vec4f(color, alpha);
}
`,_s=`
struct CameraUniforms {
  viewport : vec2f,
  cameraCenter : vec2f,
  zoom : f32,
  strokeAAScreenPx : f32,
  strokeCurveEnabled : f32,
  textAAScreenPx : f32,
  textCurveEnabled : f32,
  fillAAScreenPx : f32,
  textVectorOnly : f32,
  pad0 : f32,
  vectorOverride : vec4f,
};

struct RasterUniforms {
  matrixA : vec4f,
  matrixB : vec4f,
};

@group(0) @binding(0) var<uniform> uCamera : CameraUniforms;
@group(0) @binding(1) var<uniform> uRaster : RasterUniforms;
@group(0) @binding(2) var uRasterSampler : sampler;
@group(0) @binding(3) var uRasterTex : texture_2d<f32>;

struct VsOut {
  @builtin(position) position : vec4f,
  @location(0) uv : vec2f,
};

fn cornerFromVertexIndex(vertexIndex : u32) -> vec2f {
  switch (vertexIndex) {
    case 0u: {
      return vec2f(-1.0, -1.0);
    }
    case 1u: {
      return vec2f(1.0, -1.0);
    }
    case 2u: {
      return vec2f(-1.0, 1.0);
    }
    default: {
      return vec2f(1.0, 1.0);
    }
  }
}

@vertex
fn vsMain(@builtin(vertex_index) vertexIndex : u32) -> VsOut {
  let corner01 = cornerFromVertexIndex(vertexIndex) * 0.5 + 0.5;
  let localTopDown = vec2f(corner01.x, 1.0 - corner01.y);

  let a = uRaster.matrixA.x;
  let b = uRaster.matrixA.y;
  let c = uRaster.matrixA.z;
  let d = uRaster.matrixA.w;
  let e = uRaster.matrixB.x;
  let f = uRaster.matrixB.y;

  let world = vec2f(
    a * localTopDown.x + c * localTopDown.y + e,
    b * localTopDown.x + d * localTopDown.y + f
  );

  let screen = (world - uCamera.cameraCenter) * uCamera.zoom + 0.5 * uCamera.viewport;
  let clip = (screen / (0.5 * uCamera.viewport)) - 1.0;

  var out : VsOut;
  out.position = vec4f(clip, 0.0, 1.0);
  out.uv = localTopDown;
  return out;
}

@fragment
fn fsMain(inData : VsOut) -> @location(0) vec4f {
  let color = textureSample(uRasterTex, uRasterSampler, inData.uv);
  if (color.a <= 0.001) {
    discard;
  }
  return color;
}
`,Ms=`
struct BlitUniforms {
  viewportPx : vec2f,
  cacheSizePx : vec2f,
  offsetPx : vec2f,
  sampleScale : f32,
  pad : vec3f,
};

@group(0) @binding(0) var uCacheSampler : sampler;
@group(0) @binding(1) var uCacheTex : texture_2d<f32>;
@group(0) @binding(2) var<uniform> uBlit : BlitUniforms;

struct VsOut {
  @builtin(position) position : vec4f,
};

fn cornerFromVertexIndex(vertexIndex : u32) -> vec2f {
  switch (vertexIndex) {
    case 0u: {
      return vec2f(-1.0, -1.0);
    }
    case 1u: {
      return vec2f(1.0, -1.0);
    }
    case 2u: {
      return vec2f(-1.0, 1.0);
    }
    default: {
      return vec2f(1.0, 1.0);
    }
  }
}

@vertex
fn vsMain(@builtin(vertex_index) vertexIndex : u32) -> VsOut {
  var out : VsOut;
  out.position = vec4f(cornerFromVertexIndex(vertexIndex), 0.0, 1.0);
  return out;
}

@fragment
fn fsMain(@builtin(position) fragPos : vec4f) -> @location(0) vec4f {
  let scale = max(uBlit.sampleScale, 1e-6);
  let centered = fragPos.xy - 0.5 * uBlit.viewportPx;
  let offsetPx = vec2f(uBlit.offsetPx.x, -uBlit.offsetPx.y);
  let samplePx = centered * scale + 0.5 * uBlit.cacheSizePx + offsetPx;
  let uv = samplePx / uBlit.cacheSizePx;

  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) {
    return vec4f(0.627451, 0.662745, 0.686275, 1.0);
  }

  return textureSampleLevel(uCacheTex, uCacheSampler, uv, 0.0);
}
`,Es=`
struct VectorCompositeUniforms {
  viewportPx : vec2f,
  pad : vec2f,
};

@group(0) @binding(0) var uVectorSampler : sampler;
@group(0) @binding(1) var uVectorTex : texture_2d<f32>;
@group(0) @binding(2) var<uniform> uComposite : VectorCompositeUniforms;

struct VsOut {
  @builtin(position) position : vec4f,
};

fn cornerFromVertexIndex(vertexIndex : u32) -> vec2f {
  switch (vertexIndex) {
    case 0u: {
      return vec2f(-1.0, -1.0);
    }
    case 1u: {
      return vec2f(1.0, -1.0);
    }
    case 2u: {
      return vec2f(-1.0, 1.0);
    }
    default: {
      return vec2f(1.0, 1.0);
    }
  }
}

@vertex
fn vsMain(@builtin(vertex_index) vertexIndex : u32) -> VsOut {
  var out : VsOut;
  out.position = vec4f(cornerFromVertexIndex(vertexIndex), 0.0, 1.0);
  return out;
}

@fragment
fn fsMain(@builtin(position) fragPos : vec4f) -> @location(0) vec4f {
  let viewport = max(uComposite.viewportPx, vec2f(1.0, 1.0));
  let uv = fragPos.xy / viewport;
  return textureSampleLevel(uVectorTex, uVectorSampler, clamp(uv, vec2f(0.0), vec2f(1.0)), 0.0);
}
`;class Gn{canvas;gpuDevice;gpuContext;presentationFormat;strokePipeline;fillPipeline;textPipeline;rasterPipeline;blitPipeline;vectorCompositePipeline;cameraUniformBuffer;blitUniformBuffer;vectorCompositeUniformBuffer;panCacheSampler;rasterLayerSampler;vectorCompositeSampler;strokeBindGroupLayout;fillBindGroupLayout;textBindGroupLayout;rasterBindGroupLayout;blitBindGroupLayout;vectorCompositeBindGroupLayout;strokeBindGroupAll=null;strokeBindGroupVisible=null;fillBindGroup=null;textBindGroup=null;blitBindGroup=null;vectorCompositeBindGroup=null;segmentTextureA=null;segmentTextureB=null;segmentTextureC=null;segmentTextureD=null;fillPathMetaTextureA=null;fillPathMetaTextureB=null;fillPathMetaTextureC=null;fillSegmentTextureA=null;fillSegmentTextureB=null;textInstanceTextureA=null;textInstanceTextureB=null;textInstanceTextureC=null;rasterLayerResources=[];pageBackgroundResources=[];textGlyphMetaTextureA=null;textGlyphMetaTextureB=null;textGlyphRasterMetaTexture=null;textGlyphSegmentTextureA=null;textGlyphSegmentTextureB=null;textRasterAtlasTexture=null;pageBackgroundTexture=null;segmentIdBufferAll=null;segmentIdBufferVisible=null;panCacheTexture=null;panCacheWidth=0;panCacheHeight=0;panCacheValid=!1;panCacheCenterX=0;panCacheCenterY=0;panCacheZoom=1;panCacheRenderedSegments=0;panCacheUsedCulling=!1;vectorMinifyTexture=null;vectorMinifyWidth=0;vectorMinifyHeight=0;scene=null;sceneStats=null;grid=null;frameListener=null;rafHandle=0;cameraCenterX=0;cameraCenterY=0;zoom=1;targetCameraCenterX=0;targetCameraCenterY=0;targetZoom=1;lastCameraAnimationTimeMs=0;hasZoomAnchor=!1;zoomAnchorClientX=0;zoomAnchorClientY=0;zoomAnchorWorldX=0;zoomAnchorWorldY=0;panVelocityWorldX=0;panVelocityWorldY=0;lastPanVelocityUpdateTimeMs=0;lastPanFrameCameraX=0;lastPanFrameCameraY=0;lastPanFrameTimeMs=0;minZoom=.01;maxZoom=8192;strokeCurveEnabled=!0;textVectorOnly=!1;pageBackgroundColor=[1,1,1,1];vectorOverrideColor=[0,0,0];vectorOverrideOpacity=0;panOptimizationEnabled=!0;isPanInteracting=!1;hasCameraInteractionSinceSceneLoad=!1;lastInteractionTime=Number.NEGATIVE_INFINITY;needsVisibleSetUpdate=!1;segmentCount=0;fillPathCount=0;textInstanceCount=0;visibleSegmentCount=0;usingAllSegments=!0;segmentTextureWidth=1;segmentTextureHeight=1;fillPathMetaTextureWidth=1;fillPathMetaTextureHeight=1;fillSegmentTextureWidth=1;fillSegmentTextureHeight=1;textInstanceTextureWidth=1;textInstanceTextureHeight=1;textGlyphMetaTextureWidth=1;textGlyphMetaTextureHeight=1;textGlyphSegmentTextureWidth=1;textGlyphSegmentTextureHeight=1;allSegmentIds=new Uint32Array(0);visibleSegmentIds=new Uint32Array(0);segmentMarks=new Uint32Array(0);segmentMinX=new Float32Array(0);segmentMinY=new Float32Array(0);segmentMaxX=new Float32Array(0);segmentMaxY=new Float32Array(0);markToken=1;constructor(t,e,a,s){this.canvas=t,this.gpuDevice=e,this.gpuContext=a,this.presentationFormat=s,this.configureContext();const i=globalThis.GPUBufferUsage,r=globalThis.GPUShaderStage;this.cameraUniformBuffer=this.gpuDevice.createBuffer({size:Lt,usage:i.UNIFORM|i.COPY_DST}),this.blitUniformBuffer=this.gpuDevice.createBuffer({size:$e,usage:i.UNIFORM|i.COPY_DST}),this.vectorCompositeUniformBuffer=this.gpuDevice.createBuffer({size:Ze,usage:i.UNIFORM|i.COPY_DST}),this.strokeBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:r.VERTEX|r.FRAGMENT,buffer:{type:"uniform",minBindingSize:Lt}},{binding:1,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:3,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:4,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:5,visibility:r.VERTEX,buffer:{type:"read-only-storage"}}]}),this.fillBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:r.VERTEX|r.FRAGMENT,buffer:{type:"uniform",minBindingSize:Lt}},{binding:1,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:3,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:4,visibility:r.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:5,visibility:r.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.textBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:r.VERTEX|r.FRAGMENT,buffer:{type:"uniform",minBindingSize:Lt}},{binding:1,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:3,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:4,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:5,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:6,visibility:r.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:7,visibility:r.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:8,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:9,visibility:r.FRAGMENT,sampler:{type:"filtering"}},{binding:10,visibility:r.FRAGMENT,texture:{sampleType:"float"}}]}),this.rasterBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:r.VERTEX,buffer:{type:"uniform",minBindingSize:Lt}},{binding:1,visibility:r.VERTEX,buffer:{type:"uniform",minBindingSize:je}},{binding:2,visibility:r.FRAGMENT,sampler:{type:"filtering"}},{binding:3,visibility:r.FRAGMENT,texture:{sampleType:"float"}}]}),this.blitBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:r.FRAGMENT,sampler:{type:"filtering"}},{binding:1,visibility:r.FRAGMENT,texture:{sampleType:"float"}},{binding:2,visibility:r.FRAGMENT,buffer:{type:"uniform",minBindingSize:$e}}]}),this.vectorCompositeBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:r.FRAGMENT,sampler:{type:"filtering"}},{binding:1,visibility:r.FRAGMENT,texture:{sampleType:"float"}},{binding:2,visibility:r.FRAGMENT,buffer:{type:"uniform",minBindingSize:Ze}}]});const o=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.strokeBindGroupLayout]}),l=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.fillBindGroupLayout]}),c=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.textBindGroupLayout]}),g=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.rasterBindGroupLayout]}),p=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.blitBindGroupLayout]}),y=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.vectorCompositeBindGroupLayout]});this.strokePipeline=this.createPipeline(Ss,"vsMain","fsMain",o),this.fillPipeline=this.createPipeline(As,"vsMain","fsMain",l),this.textPipeline=this.createPipeline(ws,"vsMain","fsMain",c),this.rasterPipeline=this.createPipeline(_s,"vsMain","fsMain",g,!0),this.blitPipeline=this.createPipeline(Ms,"vsMain","fsMain",p),this.vectorCompositePipeline=this.createPipeline(Es,"vsMain","fsMain",y,!0),this.panCacheSampler=this.gpuDevice.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.rasterLayerSampler=this.gpuDevice.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.vectorCompositeSampler=this.gpuDevice.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.pageBackgroundTexture=this.createRgba8Texture(1,1,new Uint8Array([255,255,255,255])),this.ensureSegmentIdBuffers(1)}static async create(t){const e=navigator;if(!e.gpu)throw new Error("WebGPU is not available in this browser.");const a=await e.gpu.requestAdapter();if(!a)throw new Error("Failed to acquire a WebGPU adapter.");const s=await a.requestDevice();typeof s.addEventListener=="function"&&s.addEventListener("uncapturederror",o=>{const l=o?.error?.message||o?.error||o;console.warn("[WebGPU uncaptured error]",l)});const i=t.getContext("webgpu");if(!i)throw new Error("Failed to acquire a WebGPU canvas context.");const r=e.gpu.getPreferredCanvasFormat?.()??"bgra8unorm";return new Gn(t,s,i,r)}setFrameListener(t){this.frameListener=t}setPanOptimizationEnabled(t){const e=!!t;this.panOptimizationEnabled!==e&&(this.panOptimizationEnabled=e,this.isPanInteracting=!1,this.panCacheValid=!1,this.panOptimizationEnabled||this.destroyPanCacheResources(),this.needsVisibleSetUpdate=!0,this.requestFrame())}setStrokeCurveEnabled(t){const e=!!t;this.strokeCurveEnabled!==e&&(this.strokeCurveEnabled=e,this.requestFrame())}setTextVectorOnly(t){const e=!!t;this.textVectorOnly!==e&&(this.textVectorOnly=e,this.panCacheValid=!1,this.textVectorOnly&&this.destroyVectorMinifyResources(),this.requestFrame())}setPageBackgroundColor(t,e,a,s){const i=Rt(t,0,1),r=Rt(e,0,1),o=Rt(a,0,1),l=Rt(s,0,1),c=this.pageBackgroundColor;Math.abs(c[0]-i)<=1e-6&&Math.abs(c[1]-r)<=1e-6&&Math.abs(c[2]-o)<=1e-6&&Math.abs(c[3]-l)<=1e-6||(this.pageBackgroundColor=[i,r,o,l],this.uploadPageBackgroundTexture(),this.panCacheValid=!1,this.requestFrame())}setVectorColorOverride(t,e,a,s){const i=Rt(t,0,1),r=Rt(e,0,1),o=Rt(a,0,1),l=Rt(s,0,1),c=this.vectorOverrideColor;Math.abs(c[0]-i)<=1e-6&&Math.abs(c[1]-r)<=1e-6&&Math.abs(c[2]-o)<=1e-6&&Math.abs(this.vectorOverrideOpacity-l)<=1e-6||(this.vectorOverrideColor=[i,r,o],this.vectorOverrideOpacity=l,this.panCacheValid=!1,this.requestFrame())}beginPanInteraction(){this.hasCameraInteractionSinceSceneLoad=!0,this.syncCameraTargetsToCurrent(),this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameCameraX=this.cameraCenterX,this.lastPanFrameCameraY=this.cameraCenterY,this.lastPanFrameTimeMs=0,this.isPanInteracting=!0,this.markInteraction()}endPanInteraction(){this.isPanInteracting=!1;const t=performance.now(),a=this.lastPanVelocityUpdateTimeMs>0&&t-this.lastPanVelocityUpdateTimeMs<=ys?Math.hypot(this.panVelocityWorldX,this.panVelocityWorldY):0;Number.isFinite(a)&&a>=vr?(this.targetCameraCenterX=this.cameraCenterX+this.panVelocityWorldX/vn,this.targetCameraCenterY=this.cameraCenterY+this.panVelocityWorldY/vn,this.lastCameraAnimationTimeMs=0):(this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY),this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameTimeMs=0,this.markInteraction(),this.needsVisibleSetUpdate=!0,this.requestFrame()}resize(){const t=window.devicePixelRatio||1,e=Math.max(1,Math.round(this.canvas.clientWidth*t)),a=Math.max(1,Math.round(this.canvas.clientHeight*t));this.canvas.width===e&&this.canvas.height===a||(this.canvas.width=e,this.canvas.height=a,this.configureContext(),this.destroyPanCacheResources(),this.destroyVectorMinifyResources(),this.needsVisibleSetUpdate=!0,this.requestFrame())}setScene(t){this.scene=t,this.segmentCount=t.segmentCount,this.fillPathCount=t.fillPathCount,this.textInstanceCount=t.textInstanceCount,this.buildSegmentBounds(t),this.isPanInteracting=!1,this.panCacheValid=!1,this.destroyVectorMinifyResources(),this.grid=this.segmentCount>0?Zr(t):null;const e=this.maxTextureSize(),a=me(t.segmentCount,e),s=me(t.fillPathCount,e),i=me(t.fillSegmentCount,e),r=me(t.textInstanceCount,e),o=me(t.textGlyphCount,e),l=me(t.textGlyphSegmentCount,e);this.segmentTextureWidth=a.width,this.segmentTextureHeight=a.height,this.fillPathMetaTextureWidth=s.width,this.fillPathMetaTextureHeight=s.height,this.fillSegmentTextureWidth=i.width,this.fillSegmentTextureHeight=i.height,this.textInstanceTextureWidth=r.width,this.textInstanceTextureHeight=r.height,this.textGlyphMetaTextureWidth=o.width,this.textGlyphMetaTextureHeight=o.height,this.textGlyphSegmentTextureWidth=l.width,this.textGlyphSegmentTextureHeight=l.height,this.destroyDataResources(),this.segmentTextureA=this.createFloatTexture(this.segmentTextureWidth,this.segmentTextureHeight,t.endpoints),this.segmentTextureB=this.createFloatTexture(this.segmentTextureWidth,this.segmentTextureHeight,t.primitiveMeta),this.segmentTextureC=this.createFloatTexture(this.segmentTextureWidth,this.segmentTextureHeight,t.styles),this.segmentTextureD=this.createFloatTexture(this.segmentTextureWidth,this.segmentTextureHeight,t.primitiveBounds),this.fillPathMetaTextureA=this.createFloatTexture(this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,t.fillPathMetaA),this.fillPathMetaTextureB=this.createFloatTexture(this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,t.fillPathMetaB),this.fillPathMetaTextureC=this.createFloatTexture(this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,t.fillPathMetaC),this.fillSegmentTextureA=this.createFloatTexture(this.fillSegmentTextureWidth,this.fillSegmentTextureHeight,t.fillSegmentsA),this.fillSegmentTextureB=this.createFloatTexture(this.fillSegmentTextureWidth,this.fillSegmentTextureHeight,t.fillSegmentsB),this.textInstanceTextureA=this.createFloatTexture(this.textInstanceTextureWidth,this.textInstanceTextureHeight,t.textInstanceA),this.textInstanceTextureB=this.createFloatTexture(this.textInstanceTextureWidth,this.textInstanceTextureHeight,t.textInstanceB),this.textInstanceTextureC=this.createFloatTexture(this.textInstanceTextureWidth,this.textInstanceTextureHeight,t.textInstanceC),this.textGlyphMetaTextureA=this.createFloatTexture(this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,t.textGlyphMetaA),this.textGlyphMetaTextureB=this.createFloatTexture(this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,t.textGlyphMetaB),this.textGlyphSegmentTextureA=this.createFloatTexture(this.textGlyphSegmentTextureWidth,this.textGlyphSegmentTextureHeight,t.textGlyphSegmentsA),this.textGlyphSegmentTextureB=this.createFloatTexture(this.textGlyphSegmentTextureWidth,this.textGlyphSegmentTextureHeight,t.textGlyphSegmentsB);const c=new Float32Array(this.textGlyphMetaTextureWidth*this.textGlyphMetaTextureHeight*4),g=jr(t,e);g&&c.set(g.glyphUvRects),this.textGlyphRasterMetaTexture=this.createFloatTexture(this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,c),this.textRasterAtlasTexture=g?this.createRgba8Texture(g.width,g.height,g.rgba):this.createRgba8Texture(1,1,new Uint8Array([0,0,0,0])),this.configurePageBackgroundResources(t),this.configureRasterLayers(t),this.allSegmentIds=new Uint32Array(this.segmentCount);for(let p=0;p<this.segmentCount;p+=1)this.allSegmentIds[p]=p;return this.ensureSegmentIdBuffers(Math.max(1,this.segmentCount)),this.segmentCount>0&&(this.gpuDevice.queue.writeBuffer(this.segmentIdBufferAll,0,this.allSegmentIds),this.gpuDevice.queue.writeBuffer(this.segmentIdBufferVisible,0,this.allSegmentIds)),this.fillBindGroup=this.gpuDevice.createBindGroup({layout:this.fillPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.cameraUniformBuffer,size:Lt}},{binding:1,resource:this.fillPathMetaTextureA.createView()},{binding:2,resource:this.fillPathMetaTextureB.createView()},{binding:3,resource:this.fillPathMetaTextureC.createView()},{binding:4,resource:this.fillSegmentTextureA.createView()},{binding:5,resource:this.fillSegmentTextureB.createView()}]}),this.textBindGroup=this.gpuDevice.createBindGroup({layout:this.textPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.cameraUniformBuffer,size:Lt}},{binding:1,resource:this.textInstanceTextureA.createView()},{binding:2,resource:this.textInstanceTextureB.createView()},{binding:3,resource:this.textInstanceTextureC.createView()},{binding:4,resource:this.textGlyphMetaTextureA.createView()},{binding:5,resource:this.textGlyphMetaTextureB.createView()},{binding:6,resource:this.textGlyphSegmentTextureA.createView()},{binding:7,resource:this.textGlyphSegmentTextureB.createView()},{binding:8,resource:this.textGlyphRasterMetaTexture.createView()},{binding:9,resource:this.rasterLayerSampler},{binding:10,resource:this.textRasterAtlasTexture.createView()}]}),this.strokeBindGroupAll=this.gpuDevice.createBindGroup({layout:this.strokePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.cameraUniformBuffer,size:Lt}},{binding:1,resource:this.segmentTextureA.createView()},{binding:2,resource:this.segmentTextureB.createView()},{binding:3,resource:this.segmentTextureC.createView()},{binding:4,resource:this.segmentTextureD.createView()},{binding:5,resource:{buffer:this.segmentIdBufferAll}}]}),this.strokeBindGroupVisible=this.gpuDevice.createBindGroup({layout:this.strokePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.cameraUniformBuffer,size:Lt}},{binding:1,resource:this.segmentTextureA.createView()},{binding:2,resource:this.segmentTextureB.createView()},{binding:3,resource:this.segmentTextureC.createView()},{binding:4,resource:this.segmentTextureD.createView()},{binding:5,resource:{buffer:this.segmentIdBufferVisible}}]}),this.visibleSegmentIds.length<this.segmentCount&&(this.visibleSegmentIds=new Uint32Array(this.segmentCount)),this.segmentMarks.length<this.segmentCount&&(this.segmentMarks=new Uint32Array(this.segmentCount),this.markToken=1),this.visibleSegmentCount=this.segmentCount,this.usingAllSegments=!0,this.sceneStats={gridWidth:this.grid?.gridWidth??0,gridHeight:this.grid?.gridHeight??0,gridIndexCount:this.grid?.indices.length??0,maxCellPopulation:this.grid?.maxCellPopulation??0,fillPathTextureWidth:this.fillPathMetaTextureWidth,fillPathTextureHeight:this.fillPathMetaTextureHeight,fillSegmentTextureWidth:this.fillSegmentTextureWidth,fillSegmentTextureHeight:this.fillSegmentTextureHeight,textureWidth:this.segmentTextureWidth,textureHeight:this.segmentTextureHeight,maxTextureSize:e,textInstanceTextureWidth:this.textInstanceTextureWidth,textInstanceTextureHeight:this.textInstanceTextureHeight,textGlyphTextureWidth:this.textGlyphMetaTextureWidth,textGlyphTextureHeight:this.textGlyphMetaTextureHeight,textSegmentTextureWidth:this.textGlyphSegmentTextureWidth,textSegmentTextureHeight:this.textGlyphSegmentTextureHeight},this.minZoom=.01,this.maxZoom=8192,this.hasCameraInteractionSinceSceneLoad=!1,this.syncCameraTargetsToCurrent(),this.needsVisibleSetUpdate=!0,this.requestFrame(),this.sceneStats}getSceneStats(){return this.sceneStats}getViewState(){return{cameraCenterX:this.cameraCenterX,cameraCenterY:this.cameraCenterY,zoom:this.zoom}}setViewState(t){const e=Number(t.cameraCenterX),a=Number(t.cameraCenterY),s=Number(t.zoom);if(!Number.isFinite(e)||!Number.isFinite(a)||!Number.isFinite(s))return;this.cameraCenterX=e,this.cameraCenterY=a;const i=Rt(s,this.minZoom,this.maxZoom);this.zoom=i,this.targetCameraCenterX=e,this.targetCameraCenterY=a,this.targetZoom=i,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1,this.isPanInteracting=!1,this.panCacheValid=!1,this.needsVisibleSetUpdate=!0,this.requestFrame()}fitToBounds(t,e=64){const a=Math.max(t.maxX-t.minX,1e-4),s=Math.max(t.maxY-t.minY,1e-4),i=Math.max(1,this.canvas.width-e*2),r=Math.max(1,this.canvas.height-e*2),o=Rt(Math.min(i/a,r/s),this.minZoom,this.maxZoom),l=(t.minX+t.maxX)*.5,c=(t.minY+t.maxY)*.5;this.zoom=o,this.cameraCenterX=l,this.cameraCenterY=c,this.targetZoom=o,this.targetCameraCenterX=l,this.targetCameraCenterY=c,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1,this.isPanInteracting=!1,this.panCacheValid=!1,this.needsVisibleSetUpdate=!0,this.requestFrame()}panByPixels(t,e){if(!Number.isFinite(t)||!Number.isFinite(e))return;this.hasCameraInteractionSinceSceneLoad=!0,this.markInteraction(),this.hasZoomAnchor=!1;const a=-t/this.zoom,s=e/this.zoom;this.cameraCenterX+=a,this.cameraCenterY+=s,this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY,this.needsVisibleSetUpdate=!0,this.requestFrame()}zoomAtClientPoint(t,e,a){const s=Rt(a,.1,10);this.hasCameraInteractionSinceSceneLoad=!0,this.isPanInteracting=!1,this.markInteraction();const i=this.clientToWorld(t,e),r=Rt(this.targetZoom*s,this.minZoom,this.maxZoom);this.hasZoomAnchor=!0,this.zoomAnchorClientX=t,this.zoomAnchorClientY=e,this.zoomAnchorWorldX=i.x,this.zoomAnchorWorldY=i.y,this.targetZoom=r;const o=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,r);this.targetCameraCenterX=o.x,this.targetCameraCenterY=o.y,this.panCacheValid=!1,this.needsVisibleSetUpdate=!0,this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameTimeMs=0,this.requestFrame()}dispose(){this.rafHandle!==0&&(cancelAnimationFrame(this.rafHandle),this.rafHandle=0),this.frameListener=null,this.destroyPanCacheResources(),this.destroyVectorMinifyResources(),this.destroyDataResources(),this.segmentIdBufferAll&&(this.segmentIdBufferAll.destroy(),this.segmentIdBufferAll=null),this.segmentIdBufferVisible&&(this.segmentIdBufferVisible.destroy(),this.segmentIdBufferVisible=null),this.cameraUniformBuffer&&this.cameraUniformBuffer.destroy(),this.blitUniformBuffer&&this.blitUniformBuffer.destroy(),this.vectorCompositeUniformBuffer&&this.vectorCompositeUniformBuffer.destroy(),this.pageBackgroundTexture&&(this.pageBackgroundTexture.destroy(),this.pageBackgroundTexture=null)}configureContext(){this.gpuContext.configure({device:this.gpuDevice,format:this.presentationFormat,alphaMode:"opaque"})}createPipeline(t,e,a,s,i=!1){const r=this.gpuDevice.createShaderModule({code:t}),o=i?"one":"src-alpha";return this.gpuDevice.createRenderPipeline({layout:s,vertex:{module:r,entryPoint:e},fragment:{module:r,entryPoint:a,targets:[{format:this.presentationFormat,blend:{color:{srcFactor:o,dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-strip"}})}maxTextureSize(){const t=Number(this.gpuDevice?.limits?.maxTextureDimension2D);return Number.isFinite(t)&&t>=1?Math.floor(t):8192}ensureSegmentIdBuffers(t){const e=globalThis.GPUBufferUsage,a=Math.max(1,t)*4;this.segmentIdBufferAll&&(this.segmentIdBufferAll.destroy(),this.segmentIdBufferAll=null),this.segmentIdBufferVisible&&(this.segmentIdBufferVisible.destroy(),this.segmentIdBufferVisible=null),this.segmentIdBufferAll=this.gpuDevice.createBuffer({size:a,usage:e.STORAGE|e.COPY_DST}),this.segmentIdBufferVisible=this.gpuDevice.createBuffer({size:a,usage:e.STORAGE|e.COPY_DST})}requestFrame(){this.rafHandle===0&&(this.rafHandle=requestAnimationFrame(t=>{this.rafHandle=0,this.render(t)}))}render(t=performance.now()){const e=this.updateCameraWithDamping(t);if(this.updatePanReleaseVelocitySample(t),!this.scene||this.segmentCount===0&&this.fillPathCount===0&&this.textInstanceCount===0&&this.rasterLayerResources.length===0&&this.pageBackgroundResources.length===0){this.clearToScreen(),this.frameListener?.({renderedSegments:0,totalSegments:0,usedCulling:!1,zoom:this.zoom}),e&&this.requestFrame();return}this.shouldUsePanCache(e)?this.renderWithPanCache():this.renderDirectToScreen(),e&&this.requestFrame()}shouldUsePanCache(t){return!this.panOptimizationEnabled||this.segmentCount<gr?!1:this.isPanInteracting?!0:t}renderDirectToScreen(){let t=this.shouldUseVectorMinifyPath()&&this.ensureVectorMinifyResources();if(this.panOptimizationEnabled&&this.segmentCount>=gr&&(t=!1),this.needsVisibleSetUpdate){if(t){const r=this.computeVectorMinifyZoom(this.vectorMinifyWidth,this.vectorMinifyHeight);this.updateVisibleSet(this.cameraCenterX,this.cameraCenterY,this.vectorMinifyWidth,this.vectorMinifyHeight,r)}else this.updateVisibleSet(this.cameraCenterX,this.cameraCenterY,this.canvas.width,this.canvas.height,this.zoom);this.needsVisibleSetUpdate=!1}if(t){const r=this.renderVectorLayerIntoMinifyTarget(this.vectorMinifyWidth,this.vectorMinifyHeight,this.cameraCenterX,this.cameraCenterY),o=this.gpuContext.getCurrentTexture().createView(),l=this.gpuDevice.createCommandEncoder(),c=l.beginRenderPass({colorAttachments:[{view:o,clearValue:Ae,loadOp:"clear",storeOp:"store"}]});this.updateCameraUniforms(this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY),this.drawRasterContentIntoPass(c),this.drawVectorMinifyCompositeIntoPass(c,this.canvas.width,this.canvas.height),c.end(),this.gpuDevice.queue.submit([l.finish()]),this.frameListener?.({renderedSegments:r,totalSegments:this.segmentCount,usedCulling:!this.usingAllSegments,zoom:this.zoom});return}const e=this.gpuContext.getCurrentTexture().createView(),a=this.gpuDevice.createCommandEncoder(),s=a.beginRenderPass({colorAttachments:[{view:e,clearValue:Ae,loadOp:"clear",storeOp:"store"}]}),i=this.drawSceneIntoPass(s,this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY);s.end(),this.gpuDevice.queue.submit([a.finish()]),this.frameListener?.({renderedSegments:i,totalSegments:this.segmentCount,usedCulling:!this.usingAllSegments,zoom:this.zoom})}hasVectorContent(){return this.fillPathCount>0||this.segmentCount>0||this.textInstanceCount>0}shouldUseVectorMinifyPath(){return this.textVectorOnly||!this.hasVectorContent()?!1:this.zoom<=gs}computeVectorMinifyZoom(t,e){const a=Math.min(t/Math.max(1,this.canvas.width),e/Math.max(1,this.canvas.height));return this.zoom*Math.max(1,a)}renderVectorLayerIntoMinifyTarget(t,e,a,s){if(!this.vectorMinifyTexture)return 0;const i=this.computeVectorMinifyZoom(t,e),r=this.gpuDevice.createCommandEncoder(),o=r.beginRenderPass({colorAttachments:[{view:this.vectorMinifyTexture.createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store"}]});this.updateCameraUniforms(t,e,a,s,i);const l=this.drawVectorContentIntoPass(o);return o.end(),this.gpuDevice.queue.submit([r.finish()]),l}drawVectorMinifyCompositeIntoPass(t,e,a){!this.vectorCompositeBindGroup||!this.vectorMinifyTexture||(this.updateVectorCompositeUniforms(e,a),t.setPipeline(this.vectorCompositePipeline),t.setBindGroup(0,this.vectorCompositeBindGroup),t.draw(4,1,0,0))}renderWithPanCache(){if(!this.ensurePanCacheResources()){this.renderDirectToScreen();return}let t=this.panCacheZoom/Math.max(this.zoom,1e-6),e=(this.cameraCenterX-this.panCacheCenterX)*this.panCacheZoom,a=(this.cameraCenterY-this.panCacheCenterY)*this.panCacheZoom;const s=this.panCacheWidth*.5-2,i=this.panCacheHeight*.5-2,r=this.canvas.width*.5*Math.abs(t),o=this.canvas.height*.5*Math.abs(t),l=s-r,c=i-o,g=this.zoom/Math.max(this.panCacheZoom,1e-6),p=g<fs||g>ms,f=Math.abs(this.targetZoom-this.zoom)<=qe&&Math.abs(this.panCacheZoom-this.zoom)>ds,v=l<0||c<0||Math.abs(e)>l||Math.abs(a)>c;if(!this.panCacheValid||p||v||f){this.panCacheCenterX=this.cameraCenterX,this.panCacheCenterY=this.cameraCenterY,this.panCacheZoom=this.zoom,this.updateVisibleSet(this.panCacheCenterX,this.panCacheCenterY,this.panCacheWidth,this.panCacheHeight),this.needsVisibleSetUpdate=!1;const m=this.gpuDevice.createCommandEncoder(),x=m.beginRenderPass({colorAttachments:[{view:this.panCacheTexture.createView(),clearValue:Ae,loadOp:"clear",storeOp:"store"}]});this.panCacheRenderedSegments=this.drawSceneIntoPass(x,this.panCacheWidth,this.panCacheHeight,this.panCacheCenterX,this.panCacheCenterY),x.end(),this.gpuDevice.queue.submit([m.finish()]),this.panCacheUsedCulling=!this.usingAllSegments,this.panCacheValid=!0,t=1,e=0,a=0}this.blitPanCache(e,a,t),this.frameListener?.({renderedSegments:this.panCacheRenderedSegments,totalSegments:this.segmentCount,usedCulling:this.panCacheUsedCulling,zoom:this.zoom})}drawSceneIntoPass(t,e,a,s,i){return this.updateCameraUniforms(e,a,s,i),this.drawRasterContentIntoPass(t),this.drawVectorContentIntoPass(t)}drawRasterContentIntoPass(t){if(this.pageBackgroundResources.length>0){t.setPipeline(this.rasterPipeline);for(const e of this.pageBackgroundResources)t.setBindGroup(0,e.bindGroup),t.draw(4,1,0,0)}if(this.rasterLayerResources.length>0){t.setPipeline(this.rasterPipeline);for(const e of this.rasterLayerResources)t.setBindGroup(0,e.bindGroup),t.draw(4,1,0,0)}}drawVectorContentIntoPass(t){this.fillPathCount>0&&this.fillBindGroup&&(t.setPipeline(this.fillPipeline),t.setBindGroup(0,this.fillBindGroup),t.draw(4,this.fillPathCount,0,0));let e=this.usingAllSegments?this.segmentCount:this.visibleSegmentCount;if(e>0){const a=this.usingAllSegments?this.strokeBindGroupAll:this.strokeBindGroupVisible;a&&(t.setPipeline(this.strokePipeline),t.setBindGroup(0,a),t.draw(4,e,0,0))}return this.textInstanceCount>0&&this.textBindGroup&&(t.setPipeline(this.textPipeline),t.setBindGroup(0,this.textBindGroup),t.draw(4,this.textInstanceCount,0,0)),e}updateCameraUniforms(t,e,a,s,i=this.zoom){const r=new Float32Array(vs);r[0]=t,r[1]=e,r[2]=a,r[3]=s,r[4]=i,r[5]=1,r[6]=this.strokeCurveEnabled?1:0,r[7]=1.25,r[8]=this.strokeCurveEnabled?1:0,r[9]=1,r[10]=this.textVectorOnly?1:0,r[11]=0,r[12]=this.vectorOverrideColor[0],r[13]=this.vectorOverrideColor[1],r[14]=this.vectorOverrideColor[2],r[15]=this.vectorOverrideOpacity,Qe(r,Lt,"camera"),this.gpuDevice.queue.writeBuffer(this.cameraUniformBuffer,0,r)}updateVectorCompositeUniforms(t,e){const a=new Float32Array(Cs);a[0]=t,a[1]=e,a[2]=0,a[3]=0,Qe(a,Ze,"vector composite"),this.gpuDevice.queue.writeBuffer(this.vectorCompositeUniformBuffer,0,a)}updateBlitUniforms(t,e,a){const s=new Float32Array(Ts);s[0]=this.canvas.width,s[1]=this.canvas.height,s[2]=this.panCacheWidth,s[3]=this.panCacheHeight,s[4]=t,s[5]=e,s[6]=a,s[7]=0,s[8]=0,s[9]=0,s[10]=0,s[11]=0,Qe(s,$e,"blit"),this.gpuDevice.queue.writeBuffer(this.blitUniformBuffer,0,s)}blitPanCache(t,e,a){if(!this.panCacheTexture||!this.blitBindGroup){this.renderDirectToScreen();return}this.updateBlitUniforms(t,e,a);const s=this.gpuContext.getCurrentTexture().createView(),i=this.gpuDevice.createCommandEncoder(),r=i.beginRenderPass({colorAttachments:[{view:s,clearValue:Ae,loadOp:"clear",storeOp:"store"}]});r.setPipeline(this.blitPipeline),r.setBindGroup(0,this.blitBindGroup),r.draw(4,1,0,0),r.end(),this.gpuDevice.queue.submit([i.finish()])}ensureVectorMinifyResources(){const t=this.maxTextureSize(),e=t/Math.max(1,this.canvas.width),a=t/Math.max(1,this.canvas.height),s=Math.max(1,Math.min(ps,e,a)),i=Math.max(this.canvas.width,Math.floor(this.canvas.width*s)),r=Math.max(this.canvas.height,Math.floor(this.canvas.height*s));if(i<this.canvas.width||r<this.canvas.height)return!1;if(this.vectorMinifyTexture&&this.vectorMinifyWidth===i&&this.vectorMinifyHeight===r&&this.vectorCompositeBindGroup)return!0;this.destroyVectorMinifyResources();const o=globalThis.GPUTextureUsage;return this.vectorMinifyTexture=this.gpuDevice.createTexture({size:{width:i,height:r,depthOrArrayLayers:1},format:this.presentationFormat,usage:o.RENDER_ATTACHMENT|o.TEXTURE_BINDING}),this.vectorMinifyWidth=i,this.vectorMinifyHeight=r,this.vectorCompositeBindGroup=this.gpuDevice.createBindGroup({layout:this.vectorCompositePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.vectorCompositeSampler},{binding:1,resource:this.vectorMinifyTexture.createView()},{binding:2,resource:{buffer:this.vectorCompositeUniformBuffer,size:Ze}}]}),!0}ensurePanCacheResources(){const t=this.maxTextureSize(),e=Math.min(t,Math.max(this.canvas.width+yr*2,Math.ceil(this.canvas.width*xr))),a=Math.min(t,Math.max(this.canvas.height+yr*2,Math.ceil(this.canvas.height*xr)));if(e<this.canvas.width||a<this.canvas.height)return!1;if(this.panCacheTexture&&this.panCacheWidth===e&&this.panCacheHeight===a&&this.blitBindGroup)return!0;this.destroyPanCacheResources();const s=globalThis.GPUTextureUsage;return this.panCacheTexture=this.gpuDevice.createTexture({size:{width:e,height:a,depthOrArrayLayers:1},format:this.presentationFormat,usage:s.RENDER_ATTACHMENT|s.TEXTURE_BINDING}),this.panCacheWidth=e,this.panCacheHeight=a,this.panCacheValid=!1,this.blitBindGroup=this.gpuDevice.createBindGroup({layout:this.blitPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.panCacheSampler},{binding:1,resource:this.panCacheTexture.createView()},{binding:2,resource:{buffer:this.blitUniformBuffer,size:$e}}]}),!0}destroyPanCacheResources(){this.panCacheTexture&&(this.panCacheTexture.destroy(),this.panCacheTexture=null),this.panCacheWidth=0,this.panCacheHeight=0,this.panCacheValid=!1,this.panCacheRenderedSegments=0,this.panCacheUsedCulling=!1,this.blitBindGroup=null}destroyVectorMinifyResources(){this.vectorMinifyTexture&&(this.vectorMinifyTexture.destroy(),this.vectorMinifyTexture=null),this.vectorMinifyWidth=0,this.vectorMinifyHeight=0,this.vectorCompositeBindGroup=null}updateVisibleSet(t=this.cameraCenterX,e=this.cameraCenterY,a=this.canvas.width,s=this.canvas.height,i=this.zoom){if(!this.scene||!this.grid){this.visibleSegmentCount=0,this.usingAllSegments=!0;return}if(!this.hasCameraInteractionSinceSceneLoad){this.usingAllSegments=!0,this.visibleSegmentCount=this.segmentCount;return}const r=this.grid,o=Math.max(i,1e-6),l=a/(2*o),c=s/(2*o),g=Math.max(16/o,this.scene.maxHalfWidth*2),p=t-l-g,y=t+l+g,f=e-c-g,v=e+c+g,d=Ke(Math.floor((p-r.minX)/r.cellWidth),r.gridWidth),m=Ke(Math.floor((y-r.minX)/r.cellWidth),r.gridWidth),x=Ke(Math.floor((f-r.minY)/r.cellHeight),r.gridHeight),b=Ke(Math.floor((v-r.minY)/r.cellHeight),r.gridHeight),_=(m-d+1)*(b-x+1),M=r.gridWidth*r.gridHeight;if(!this.isInteractionActive()&&_>=M*hs){this.usingAllSegments=!0,this.visibleSegmentCount=this.segmentCount;return}this.usingAllSegments=!1,this.markToken+=1,this.markToken===4294967295&&(this.segmentMarks.fill(0),this.markToken=1);let w=0;for(let A=x;A<=b;A+=1){let L=A*r.gridWidth+d;for(let G=d;G<=m;G+=1){const P=r.offsets[L],I=r.counts[L];for(let V=0;V<I;V+=1){const C=r.indices[P+V];this.segmentMarks[C]!==this.markToken&&(this.segmentMarks[C]=this.markToken,!(this.segmentMaxX[C]<p||this.segmentMinX[C]>y||this.segmentMaxY[C]<f||this.segmentMinY[C]>v)&&(this.visibleSegmentIds[w]=C,w+=1))}L+=1}}if(this.visibleSegmentCount=w,this.segmentIdBufferVisible&&w>0){const A=this.visibleSegmentIds.subarray(0,w);this.gpuDevice.queue.writeBuffer(this.segmentIdBufferVisible,0,A)}}buildSegmentBounds(t){this.segmentMinX.length<this.segmentCount&&(this.segmentMinX=new Float32Array(this.segmentCount),this.segmentMinY=new Float32Array(this.segmentCount),this.segmentMaxX=new Float32Array(this.segmentCount),this.segmentMaxY=new Float32Array(this.segmentCount));for(let e=0;e<this.segmentCount;e+=1){const a=e*4,s=e*4,i=t.styles[s]+.35;this.segmentMinX[e]=t.primitiveBounds[a]-i,this.segmentMinY[e]=t.primitiveBounds[a+1]-i,this.segmentMaxX[e]=t.primitiveBounds[a+2]+i,this.segmentMaxY[e]=t.primitiveBounds[a+3]+i}}markInteraction(){this.lastInteractionTime=performance.now()}isInteractionActive(){return performance.now()-this.lastInteractionTime<=us}configureRasterLayers(t){this.destroyRasterLayerResources();for(const e of this.getSceneRasterLayers(t)){const a=new Float32Array(6);e.matrix.length>=6?(a[0]=e.matrix[0],a[1]=e.matrix[1],a[2]=e.matrix[2],a[3]=e.matrix[3],a[4]=e.matrix[4],a[5]=e.matrix[5]):(a[0]=1,a[3]=1);const s=e.data.subarray(0,e.width*e.height*4),i=Rs(s),r=this.createRgba8Texture(e.width,e.height,i);this.rasterLayerResources.push(this.createRasterLayerResource(a,r))}}configurePageBackgroundResources(t){if(this.destroyPageBackgroundResources(),this.pageBackgroundTexture||this.uploadPageBackgroundTexture(),!this.pageBackgroundTexture)return;const e=Bs(t);for(let a=0;a+3<e.length;a+=4){const s=e[a],i=e[a+1],r=e[a+2],o=e[a+3];if(![s,i,r,o].every(Number.isFinite))continue;const l=Math.max(r-s,1e-6),c=Math.max(o-i,1e-6),g=new Float32Array([l,0,0,c,s,i]);this.pageBackgroundResources.push(this.createRasterLayerResource(g,this.pageBackgroundTexture))}}getSceneRasterLayers(t){const e=[];if(Array.isArray(t.rasterLayers))for(const i of t.rasterLayers){const r=Math.max(0,Math.trunc(i?.width??0)),o=Math.max(0,Math.trunc(i?.height??0));r<=0||o<=0||!(i.data instanceof Uint8Array)||i.data.length<r*o*4||e.push({width:r,height:o,data:i.data,matrix:i.matrix instanceof Float32Array?i.matrix:new Float32Array(i.matrix)})}if(e.length>0)return e;const a=Math.max(0,Math.trunc(t.rasterLayerWidth)),s=Math.max(0,Math.trunc(t.rasterLayerHeight));return a<=0||s<=0||t.rasterLayerData.length<a*s*4||e.push({width:a,height:s,data:t.rasterLayerData,matrix:t.rasterLayerMatrix}),e}destroyRasterLayerResources(){for(const t of this.rasterLayerResources)t.texture&&t.texture.destroy(),t.uniformBuffer&&t.uniformBuffer.destroy();this.rasterLayerResources=[]}destroyPageBackgroundResources(){for(const t of this.pageBackgroundResources)t.uniformBuffer&&t.uniformBuffer.destroy();this.pageBackgroundResources=[]}uploadPageBackgroundTexture(){const t=Math.round(this.pageBackgroundColor[3]*255),e=t/255,a=new Uint8Array([Math.round(this.pageBackgroundColor[0]*e*255),Math.round(this.pageBackgroundColor[1]*e*255),Math.round(this.pageBackgroundColor[2]*e*255),t]);if(!this.pageBackgroundTexture){this.pageBackgroundTexture=this.createRgba8Texture(1,1,a);return}this.writeRgba8Texture(this.pageBackgroundTexture,1,1,a,0)}createRasterLayerResource(t,e){const a=globalThis.GPUBufferUsage,s=new Float32Array(bs);s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=t[3],s[4]=t[4],s[5]=t[5],s[6]=0,s[7]=0,Qe(s,je,"raster");const i=this.gpuDevice.createBuffer({size:je,usage:a.UNIFORM|a.COPY_DST});this.gpuDevice.queue.writeBuffer(i,0,s);const r=this.gpuDevice.createBindGroup({layout:this.rasterPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.cameraUniformBuffer,size:Lt}},{binding:1,resource:{buffer:i,size:je}},{binding:2,resource:this.rasterLayerSampler},{binding:3,resource:e.createView()}]});return{texture:e,uniformBuffer:i,bindGroup:r}}createFloatTexture(t,e,a){const s=globalThis.GPUTextureUsage,i=this.gpuDevice.createTexture({size:{width:t,height:e,depthOrArrayLayers:1},format:"rgba32float",usage:s.TEXTURE_BINDING|s.COPY_DST}),r=Is(a,t,e);return this.writeFloatTexture(i,t,e,r),i}createRgba8Texture(t,e,a){const s=globalThis.GPUTextureUsage,i=Fs(a,t,e),r=this.gpuDevice.createTexture({size:{width:t,height:e,depthOrArrayLayers:1},format:"rgba8unorm",mipLevelCount:i.length,usage:s.TEXTURE_BINDING|s.COPY_DST});for(let o=0;o<i.length;o+=1){const l=i[o],c=Ps(l.data,l.width,l.height);this.writeRgba8Texture(r,l.width,l.height,c,o)}return r}writeFloatTexture(t,e,a,s){const i=e*16,r=Cr(i,256);if(a<=1&&i===r){this.gpuDevice.queue.writeTexture({texture:t},s,{offset:0},{width:e,height:a,depthOrArrayLayers:1});return}if(i===r){this.gpuDevice.queue.writeTexture({texture:t},s,{offset:0,bytesPerRow:i,rowsPerImage:a},{width:e,height:a,depthOrArrayLayers:1});return}const o=new Uint8Array(s.buffer,s.byteOffset,s.byteLength),l=new Uint8Array(r*a);for(let c=0;c<a;c+=1){const g=c*i,p=c*r;l.set(o.subarray(g,g+i),p)}this.gpuDevice.queue.writeTexture({texture:t},l,{offset:0,bytesPerRow:r,rowsPerImage:a},{width:e,height:a,depthOrArrayLayers:1})}writeRgba8Texture(t,e,a,s,i=0){const r=e*4,o=Cr(r,256);if(a<=1&&r===o){this.gpuDevice.queue.writeTexture({texture:t,mipLevel:i},s,{offset:0},{width:e,height:a,depthOrArrayLayers:1});return}if(r===o){this.gpuDevice.queue.writeTexture({texture:t,mipLevel:i},s,{offset:0,bytesPerRow:r,rowsPerImage:a},{width:e,height:a,depthOrArrayLayers:1});return}const l=new Uint8Array(o*a);for(let c=0;c<a;c+=1){const g=c*r,p=c*o;l.set(s.subarray(g,g+r),p)}this.gpuDevice.queue.writeTexture({texture:t,mipLevel:i},l,{offset:0,bytesPerRow:o,rowsPerImage:a},{width:e,height:a,depthOrArrayLayers:1})}clearToScreen(){const t=this.gpuContext.getCurrentTexture().createView(),e=this.gpuDevice.createCommandEncoder();e.beginRenderPass({colorAttachments:[{view:t,clearValue:Ae,loadOp:"clear",storeOp:"store"}]}).end(),this.gpuDevice.queue.submit([e.finish()])}destroyDataResources(){this.strokeBindGroupAll=null,this.strokeBindGroupVisible=null,this.fillBindGroup=null,this.textBindGroup=null,this.destroyPageBackgroundResources(),this.destroyRasterLayerResources();const t=[this.segmentTextureA,this.segmentTextureB,this.segmentTextureC,this.segmentTextureD,this.fillPathMetaTextureA,this.fillPathMetaTextureB,this.fillPathMetaTextureC,this.fillSegmentTextureA,this.fillSegmentTextureB,this.textInstanceTextureA,this.textInstanceTextureB,this.textInstanceTextureC,this.textGlyphMetaTextureA,this.textGlyphMetaTextureB,this.textGlyphRasterMetaTexture,this.textGlyphSegmentTextureA,this.textGlyphSegmentTextureB,this.textRasterAtlasTexture];for(const e of t)e&&e.destroy();this.segmentTextureA=null,this.segmentTextureB=null,this.segmentTextureC=null,this.segmentTextureD=null,this.fillPathMetaTextureA=null,this.fillPathMetaTextureB=null,this.fillPathMetaTextureC=null,this.fillSegmentTextureA=null,this.fillSegmentTextureB=null,this.textInstanceTextureA=null,this.textInstanceTextureB=null,this.textInstanceTextureC=null,this.textGlyphMetaTextureA=null,this.textGlyphMetaTextureB=null,this.textGlyphRasterMetaTexture=null,this.textGlyphSegmentTextureA=null,this.textGlyphSegmentTextureB=null,this.textRasterAtlasTexture=null}clientToWorld(t,e){return this.clientToWorldAt(t,e,this.cameraCenterX,this.cameraCenterY,this.zoom)}clientToWorldAt(t,e,a,s,i){const r=this.canvas.getBoundingClientRect(),o=window.devicePixelRatio||1,l=(t-r.left)*o,c=(r.bottom-e)*o;return{x:(l-this.canvas.width*.5)/i+a,y:(c-this.canvas.height*.5)/i+s}}syncCameraTargetsToCurrent(){this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY,this.targetZoom=this.zoom,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1}updatePanReleaseVelocitySample(t){if(!this.isPanInteracting){this.lastPanFrameTimeMs=0;return}if(this.lastPanFrameTimeMs>0){const e=t-this.lastPanFrameTimeMs;if(e>.1){const a=this.cameraCenterX-this.lastPanFrameCameraX,s=this.cameraCenterY-this.lastPanFrameCameraY;let i=a*1e3/e,r=s*1e3/e;const o=Math.hypot(i,r);if(Number.isFinite(o)&&o>=vr){if(o>Tr){const l=Tr/o;i*=l,r*=l}this.panVelocityWorldX=i,this.panVelocityWorldY=r,this.lastPanVelocityUpdateTimeMs=t}}}this.lastPanFrameCameraX=this.cameraCenterX,this.lastPanFrameCameraY=this.cameraCenterY,this.lastPanFrameTimeMs=t}updateCameraWithDamping(t){let e=Math.abs(this.targetCameraCenterX-this.cameraCenterX)>fe||Math.abs(this.targetCameraCenterY-this.cameraCenterY)>fe,a=Math.abs(this.targetZoom-this.zoom)>qe;if(!e&&!a)return this.hasZoomAnchor=!1,this.lastCameraAnimationTimeMs=t,!1;this.lastCameraAnimationTimeMs<=0&&(this.lastCameraAnimationTimeMs=t-16);const s=Rt(t-this.lastCameraAnimationTimeMs,0,xs);this.lastCameraAnimationTimeMs=t;const i=s/1e3,r=1-Math.exp(-vn*i),o=1-Math.exp(-24*i);if(a&&(this.zoom+=(this.targetZoom-this.zoom)*o,Math.abs(this.targetZoom-this.zoom)<=qe&&(this.zoom=this.targetZoom)),this.hasZoomAnchor){const l=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,this.zoom),c=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,this.targetZoom);this.cameraCenterX=l.x,this.cameraCenterY=l.y,this.targetCameraCenterX=c.x,this.targetCameraCenterY=c.y,a||(this.hasZoomAnchor=!1),e=!1}else e&&(this.cameraCenterX+=(this.targetCameraCenterX-this.cameraCenterX)*r,this.cameraCenterY+=(this.targetCameraCenterY-this.cameraCenterY)*r,Math.abs(this.targetCameraCenterX-this.cameraCenterX)<=fe&&(this.cameraCenterX=this.targetCameraCenterX),Math.abs(this.targetCameraCenterY-this.cameraCenterY)<=fe&&(this.cameraCenterY=this.targetCameraCenterY));return this.markInteraction(),this.needsVisibleSetUpdate=!0,e=Math.abs(this.targetCameraCenterX-this.cameraCenterX)>fe||Math.abs(this.targetCameraCenterY-this.cameraCenterY)>fe,a=Math.abs(this.targetZoom-this.zoom)>qe,e||a}computeCameraCenterForAnchor(t,e,a,s,i){const r=this.canvas.getBoundingClientRect(),o=window.devicePixelRatio||1,l=(t-r.left)*o,c=(r.bottom-e)*o;return{x:a-(l-this.canvas.width*.5)/i,y:s-(c-this.canvas.height*.5)/i}}}function Is(n,t,e){const a=t*e*4;if(n.length>a)throw new Error(`Texture source data exceeds texture size (${n.length} > ${a}).`);const s=new Float32Array(a);return s.set(n),s}function Ps(n,t,e){const a=t*e*4;if(n.length>a)throw new Error(`Texture source data exceeds texture size (${n.length} > ${a}).`);const s=new Uint8Array(a);return s.set(n),s}function Rs(n){const t=new Uint8Array(n.length);for(let e=0;e+3<n.length;e+=4){const a=n[e+3];if(a<=0){t[e]=0,t[e+1]=0,t[e+2]=0,t[e+3]=0;continue}if(a>=255){t[e]=n[e],t[e+1]=n[e+1],t[e+2]=n[e+2],t[e+3]=255;continue}const s=a/255;t[e]=Math.round(n[e]*s),t[e+1]=Math.round(n[e+1]*s),t[e+2]=Math.round(n[e+2]*s),t[e+3]=a}return t}function Fs(n,t,e){const a=[];let s=Math.max(1,Math.trunc(t)),i=Math.max(1,Math.trunc(e)),r=n;for(a.push({width:s,height:i,data:r});s>1||i>1;){const o=Math.max(1,s>>1),l=Math.max(1,i>>1),c=new Uint8Array(o*l*4);for(let g=0;g<l;g+=1){const p=Math.min(i-1,g*2),y=Math.min(i-1,p+1);for(let f=0;f<o;f+=1){const v=Math.min(s-1,f*2),d=Math.min(s-1,v+1),m=(p*s+v)*4,x=(p*s+d)*4,b=(y*s+v)*4,_=(y*s+d)*4,M=(g*o+f)*4;c[M]=r[m]+r[x]+r[b]+r[_]+2>>2,c[M+1]=r[m+1]+r[x+1]+r[b+1]+r[_+1]+2>>2,c[M+2]=r[m+2]+r[x+2]+r[b+2]+r[_+2]+2>>2,c[M+3]=r[m+3]+r[x+3]+r[b+3]+r[_+3]+2>>2}}a.push({width:o,height:l,data:c}),s=o,i=l,r=c}return a}function Qe(n,t,e){const a=n.byteLength;if(a>t)throw new Error(`${e} uniform data (${a} bytes) exceeds buffer size ${t} bytes.`)}function me(n,t){const e=Math.max(1,n),a=Math.ceil(Math.sqrt(e)),s=Rt(a,1,t),i=Math.max(1,Math.ceil(e/s));if(i>t)throw new Error("Data texture exceeds GPU limits for this browser/GPU.");return{width:s,height:i}}function Bs(n){return n.pageRects instanceof Float32Array&&n.pageRects.length>=4?new Float32Array(n.pageRects):new Float32Array([n.pageBounds.minX,n.pageBounds.minY,n.pageBounds.maxX,n.pageBounds.maxY])}function Cr(n,t){return Math.ceil(n/t)*t}function Rt(n,t,e){return n<t?t:n>e?e:n}function Ke(n,t){return n<0?0:n>=t?t-1:n}const Ls="modulepreload",ks=function(n,t){return new URL(n,t).href},br={},Sr=function(t,e,a){let s=Promise.resolve();if(e&&e.length>0){let c=function(g){return Promise.all(g.map(p=>Promise.resolve(p).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};const r=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");s=c(e.map(g=>{if(g=ks(g,a),g in br)return;br[g]=!0;const p=g.endsWith(".css"),y=p?'[rel="stylesheet"]':"";if(a)for(let v=r.length-1;v>=0;v--){const d=r[v];if(d.href===g&&(!p||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${g}"]${y}`))return;const f=document.createElement("link");if(f.rel=p?"stylesheet":Ls,p||(f.as="script"),f.crossOrigin="",f.href=g,l&&f.setAttribute("nonce",l),document.head.appendChild(f),p)return new Promise((v,d)=>{f.addEventListener("load",v),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${g}`)))})}))}function i(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return s.then(r=>{for(const o of r||[])o.status==="rejected"&&i(o.reason);return t().catch(i)})},Ds=typeof window>"u"?await Sr(()=>import("./pdf-CoaqzUNK.js"),[],import.meta.url):await Sr(()=>import("./pdf-TYrZqVzP.js"),[],import.meta.url),{getDocument:Qr,OPS:Y}=Ds,cn=0,un=1,hn=2,dn=3,fn=4;class Et{data;length=0;constructor(t=32768){this.data=new Float32Array(t*4)}get quadCount(){return this.length>>2}push(t,e,a,s){this.ensureCapacity(4);const i=this.length;this.data[i]=t,this.data[i+1]=e,this.data[i+2]=a,this.data[i+3]=s,this.length+=4}toTypedArray(){return this.data.slice(0,this.length)}ensureCapacity(t){if(this.length+t<=this.data.length)return;let e=this.data.length;for(;this.length+t>e;)e*=2;const a=new Float32Array(e);a.set(this.data),this.data=a}}const Ut=[1,0,0,1,0,0],Ar=.001,Os=.999995,wr=.05,Kr=.001,zs=.999,pe=1e3,Kt=1e4,_r=2e3,Gs=200,Tn=.05,Mr=1e-4,Ns=.015,Us=12,Qt=1e-4,Xs=.001,Vs=.001,Ws=.001,Ys=3,Hs=24,Er=16384,qs=134217728,$s=0,Zs=1,Jr=0,js=2,Qs=4,Ks=6,Js=0,to=1,Ir=0,Nn=1,eo=0,no=1,ti=.08,ei=9,Mn=2,ro=.08,io=24;function ao(n,t){const e=dt(n),a=t>=.5?Mn:0;return e+a}function so(n){const t=n>=Mn-1e-6;return{alpha:dt(t?n-Mn:n),styleFlags:t?1:0}}async function oo(n,t={}){const e=t.enableSegmentMerge!==!1,a=t.enableInvisibleCull!==!1,s=ye(t.maxPages,Number.MAX_SAFE_INTEGER,1,Number.MAX_SAFE_INTEGER),i=ai(),o=await Qr({data:new Uint8Array(n),disableFontFace:!0,fontExtraProperties:!0,...i?{standardFontDataUrl:i}:{}}).promise;try{const l=ye(o.numPages,1,1,Number.MAX_SAFE_INTEGER),c=Math.max(1,Math.min(l,s)),g=[];for(let p=1;p<=c;p+=1){const y=await o.getPage(p),f=await y.getOperatorList(),v=await ho(y,f,{enableSegmentMerge:e,enableInvisibleCull:a});g.push(v)}return g}finally{await o.destroy()}}function Pr(n,t){return ni(n,t)}async function lo(n,t={}){const e=ye(t.maxPages,Number.MAX_SAFE_INTEGER,1,Number.MAX_SAFE_INTEGER),a=ai(),i=await Qr({data:new Uint8Array(n),disableFontFace:!0,fontExtraProperties:!0,...a?{standardFontDataUrl:a}:{}}).promise;try{const r=ye(i.numPages,1,1,Number.MAX_SAFE_INTEGER),o=Math.max(1,Math.min(r,e)),l=[];for(let c=1;c<=o;c+=1){const g=await i.getPage(c),p=await g.getOperatorList();l.push(await uo(g,p))}return l}finally{await i.destroy()}}async function co(n,t={}){const e=ye(t.maxPagesPerRow,10,1,100),a=await lo(n,t);return ni(a,e)}async function uo(n,t){const e=n.view,a=Array.isArray(e)?e:[0,0,1,1],s={minX:Math.min(Number(a[0])||0,Number(a[2])||1),minY:Math.min(Number(a[1])||0,Number(a[3])||1),maxX:Math.max(Number(a[0])||0,Number(a[2])||1),maxY:Math.max(Number(a[1])||0,Number(a[3])||1)},i=ii(n),r=mn(s,i),o=oi(t),l=await li(n,t,i,{allowFullPageFallback:!0}),c=l.width>0&&l.height>0&&l.data.length>=l.width*l.height*4?[{width:l.width,height:l.height,data:l.data,matrix:new Float32Array(l.matrix)}]:[],g=ri(),p=c[0]??null,y=ge(r,l.bounds)??r;return{...g,pageCount:1,pagesPerRow:1,pageRects:new Float32Array([r.minX,r.minY,r.maxX,r.maxY]),rasterLayers:c,rasterLayerWidth:p?.width??0,rasterLayerHeight:p?.height??0,rasterLayerData:p?.data??new Uint8Array(0),rasterLayerMatrix:p?.matrix??new Float32Array([1,0,0,1,0,0]),bounds:y,pageBounds:r,imagePaintOpCount:o,operatorCount:t.fnArray.length}}async function ho(n,t,e){const a=n.view,s=Array.isArray(a)?a:[0,0,1,1],i={minX:Math.min(Number(s[0])||0,Number(s[2])||1),minY:Math.min(Number(s[1])||0,Number(s[3])||1),maxX:Math.max(Number(s[0])||0,Number(s[2])||1),maxY:Math.max(Number(s[1])||0,Number(s[3])||1)},r=ii(n),o=mn(i,r),l=oi(t),c=new Et,g=new Et,p=new Et,y=new Et,f=new Et(8192),v=new Et(8192),d=new Et(8192),m=new Et(65536),x=new Et(65536),b={minX:Number.POSITIVE_INFINITY,minY:Number.POSITIVE_INFINITY,maxX:Number.NEGATIVE_INFINITY,maxY:Number.NEGATIVE_INFINITY},_={minX:Number.POSITIVE_INFINITY,minY:Number.POSITIVE_INFINITY,maxX:Number.NEGATIVE_INFINITY,maxY:Number.NEGATIVE_INFINITY};let M=0,w=0,A=0,L=0;const G=[],P=[];let I=go(r);for(let E=0;E<t.fnArray.length;E+=1){const U=t.fnArray[E],q=t.argsArray[E];if(U===Y.save){G.push(Br(I));continue}if(U===Y.restore){const tt=G.pop();tt&&(I=tt);continue}if(U===Y.transform){const tt=ae(q);tt&&(I.matrix=Bt(I.matrix,tt));continue}if(U===Y.paintFormXObjectBegin){P.push(Br(I));const tt=ae(q);tt&&(I.matrix=Bt(I.matrix,tt));continue}if(U===Y.paintFormXObjectEnd){const tt=P.pop();tt&&(I=tt);continue}if(U===Y.setLineWidth){const tt=vt(q,0,I.lineWidth);I.lineWidth=Math.max(0,tt);continue}if(U===Y.setStrokeRGBColor||U===Y.setStrokeColor){const[tt,rt,nt]=Re(q,[I.strokeR,I.strokeG,I.strokeB]);I.strokeR=tt,I.strokeG=rt,I.strokeB=nt;continue}if(U===Y.setStrokeGray){const tt=Dt(q,0),[rt]=En(tt,I.strokeR);I.strokeR=rt,I.strokeG=rt,I.strokeB=rt;continue}if(U===Y.setStrokeCMYKColor){const[tt,rt,nt]=In(q,[I.strokeR,I.strokeG,I.strokeB]);I.strokeR=tt,I.strokeG=rt,I.strokeB=nt;continue}if(U===Y.setFillRGBColor||U===Y.setFillColor){const[tt,rt,nt]=Re(q,[I.fillR,I.fillG,I.fillB]);I.fillR=tt,I.fillG=rt,I.fillB=nt;continue}if(U===Y.setFillGray){const[tt]=En(Dt(q,0),I.fillR);I.fillR=tt,I.fillG=tt,I.fillB=tt;continue}if(U===Y.setFillCMYKColor){const[tt,rt,nt]=In(q,[I.fillR,I.fillG,I.fillB]);I.fillR=tt,I.fillG=rt,I.fillB=nt;continue}if(U===Y.setGState){bo(Dt(q,0),I);continue}if(U!==Y.constructPath)continue;const R=vt(q,0,-1),z=yo(R),W=vo(R);if(!z&&!W)continue;const K=si(q);if(K){if(M+=1,z){const tt=I.lineWidth<=0,rt=rl(I.matrix),nt=tt?0:I.lineWidth*rt,mt=Math.max(0,nt*.5);A=Math.max(A,mt);const St=dt(I.strokeR),Pt=dt(I.strokeG),Xt=dt(I.strokeB),ft=dt(I.strokeAlpha);w+=So(K,I.matrix,mt,St,Pt,Xt,ft,tt?1:0,e.enableSegmentMerge,c,g,y,p,b)}if(W){const tt=To(R)?Zs:$s,rt=dt(I.fillAlpha),nt=z&&dt(I.strokeAlpha)>Kr;rt>Ws&&Ao(K,I.matrix,tt,nt,dt(I.fillR),dt(I.fillG),dt(I.fillB),rt,f,v,d,m,x,_)&&(L+=1)}}}const V=c.quadCount,C=c.toTypedArray(),F=g.toTypedArray(),u=p.toTypedArray(),B=y.toTypedArray(),$=m.quadCount,N=f.toTypedArray(),J=v.toTypedArray(),X=d.toTypedArray(),j=m.toTypedArray(),D=x.toTypedArray(),k=L>0?_:null;let et=V,Z=C,Q=F,ot=u,ct=B,it=V>0?b:null,at=V>0?A:0,st=0,lt=0,Tt=0,yt=0;if(V>0&&e.enableInvisibleCull){const E=wo(C,F,B,u);et=E.segmentCount,Z=E.endpoints,Q=E.primitiveMeta,ot=E.primitiveBounds,ct=E.styles,it=E.segmentCount>0?E.bounds:null,at=E.maxHalfWidth,st=E.discardedTransparentCount,lt=E.discardedDegenerateCount,Tt=E.discardedDuplicateCount,yt=E.discardedContainedCount}et===0&&(Z=new Float32Array(0),Q=new Float32Array(0),ot=new Float32Array(0),ct=new Float32Array(0),at=0);let h=await bn(n,t,r,o);if(h.instanceCount===0&&Fo(t)&&(await Bo(n),h=await bn(n,t,r,o)),h.instanceCount>0&&h.inPageCount<h.instanceCount*.2){const E=await bn(n,t,Ut,o);E.inPageCount>h.inPageCount&&(h=E)}const H=et===0&&L===0&&h.instanceCount===0,O=await li(n,t,r,{allowFullPageFallback:H}),T=O.width>0&&O.height>0&&O.data.length>=O.width*O.height*4?[{width:O.width,height:O.height,data:O.data,matrix:new Float32Array(O.matrix)}]:[],S=ge(ge(ge(it,k),h.bounds),O.bounds)??{...o};return{pageCount:1,pagesPerRow:1,pageRects:new Float32Array([o.minX,o.minY,o.maxX,o.maxY]),fillPathCount:L,fillSegmentCount:$,fillPathMetaA:N,fillPathMetaB:J,fillPathMetaC:X,fillSegmentsA:j,fillSegmentsB:D,segmentCount:et,sourceSegmentCount:w,mergedSegmentCount:V,sourceTextCount:h.sourceTextCount,textInstanceCount:h.instanceCount,textGlyphCount:h.glyphCount,textGlyphSegmentCount:h.glyphSegmentCount,textInPageCount:h.inPageCount,textOutOfPageCount:h.outOfPageCount,textInstanceA:h.instanceA,textInstanceB:h.instanceB,textInstanceC:h.instanceC,textGlyphMetaA:h.glyphMetaA,textGlyphMetaB:h.glyphMetaB,textGlyphSegmentsA:h.glyphSegmentsA,textGlyphSegmentsB:h.glyphSegmentsB,rasterLayers:T,rasterLayerWidth:T[0]?.width??0,rasterLayerHeight:T[0]?.height??0,rasterLayerData:T[0]?.data??new Uint8Array(0),rasterLayerMatrix:T[0]?.matrix??new Float32Array([1,0,0,1,0,0]),endpoints:Z,primitiveMeta:Q,primitiveBounds:ot,styles:ct,bounds:S,pageBounds:o,maxHalfWidth:at,imagePaintOpCount:l,operatorCount:t.fnArray.length,pathCount:M,discardedTransparentCount:st,discardedDegenerateCount:lt,discardedDuplicateCount:Tt,discardedContainedCount:yt}}function ni(n,t){if(n.length===0)return ri();if(n.length===1)return{...n[0],pageCount:1,pagesPerRow:1};const e=ye(t,10,1,100),a=fo(n,e);let s=0,i=0,r=0,o=0,l=0,c=0,g=0,p=0,y=0,f=0,v=0,d=0,m=0,x=0,b=0,_=0,M=0,w=0,A=0,L=0;for(const O of n){s+=O.fillPathCount,i+=O.fillSegmentCount,r+=O.segmentCount,o+=O.sourceSegmentCount,l+=O.mergedSegmentCount,c+=O.sourceTextCount,g+=O.textInstanceCount,p+=O.textGlyphCount,y+=O.textGlyphSegmentCount,f+=O.textInPageCount,v+=O.textOutOfPageCount,d+=O.operatorCount,m+=O.imagePaintOpCount,x+=O.pathCount,b+=O.discardedTransparentCount,_+=O.discardedDegenerateCount,M+=O.discardedDuplicateCount,w+=O.discardedContainedCount,A=Math.max(A,O.maxHalfWidth);const T=O.pageRects.length>=4?Math.floor(O.pageRects.length/4):1;L+=Math.max(1,T)}const G=new Float32Array(s*4),P=new Float32Array(s*4),I=new Float32Array(s*4),V=new Float32Array(i*4),C=new Float32Array(i*4),F=new Float32Array(r*4),u=new Float32Array(r*4),B=new Float32Array(r*4),$=new Float32Array(r*4),N=new Float32Array(g*4),J=new Float32Array(g*4),X=new Float32Array(g*4),j=new Float32Array(p*4),D=new Float32Array(p*4),k=new Float32Array(y*4),et=new Float32Array(y*4),Z=new Float32Array(L*4);let Q=0,ot=0,ct=0,it=0,at=0,st=0,lt=0,Tt=null,yt=null;const h=[];for(let O=0;O<n.length;O+=1){const T=n[O],S=a[O],E=S.translateX,U=S.translateY;for(let R=0;R<T.fillPathCount;R+=1){const z=R*4,W=(Q+R)*4;G[W]=T.fillPathMetaA[z]+ot,G[W+1]=T.fillPathMetaA[z+1],G[W+2]=T.fillPathMetaA[z+2]+E,G[W+3]=T.fillPathMetaA[z+3]+U,P[W]=T.fillPathMetaB[z]+E,P[W+1]=T.fillPathMetaB[z+1]+U,P[W+2]=T.fillPathMetaB[z+2],P[W+3]=T.fillPathMetaB[z+3],I[W]=T.fillPathMetaC[z],I[W+1]=T.fillPathMetaC[z+1],I[W+2]=T.fillPathMetaC[z+2],I[W+3]=T.fillPathMetaC[z+3]}for(let R=0;R<T.fillSegmentCount;R+=1){const z=R*4,W=(ot+R)*4;V[W]=T.fillSegmentsA[z]+E,V[W+1]=T.fillSegmentsA[z+1]+U,V[W+2]=T.fillSegmentsA[z+2]+E,V[W+3]=T.fillSegmentsA[z+3]+U,C[W]=T.fillSegmentsB[z]+E,C[W+1]=T.fillSegmentsB[z+1]+U,C[W+2]=T.fillSegmentsB[z+2],C[W+3]=T.fillSegmentsB[z+3]}for(let R=0;R<T.segmentCount;R+=1){const z=R*4,W=(ct+R)*4;F[W]=T.endpoints[z]+E,F[W+1]=T.endpoints[z+1]+U,F[W+2]=T.endpoints[z+2]+E,F[W+3]=T.endpoints[z+3]+U,u[W]=T.primitiveMeta[z]+E,u[W+1]=T.primitiveMeta[z+1]+U,u[W+2]=T.primitiveMeta[z+2],u[W+3]=T.primitiveMeta[z+3],B[W]=T.primitiveBounds[z]+E,B[W+1]=T.primitiveBounds[z+1]+U,B[W+2]=T.primitiveBounds[z+2]+E,B[W+3]=T.primitiveBounds[z+3]+U,$[W]=T.styles[z],$[W+1]=T.styles[z+1],$[W+2]=T.styles[z+2],$[W+3]=T.styles[z+3]}N.set(T.textInstanceA,it*4),X.set(T.textInstanceC,it*4);for(let R=0;R<T.textInstanceCount;R+=1){const z=R*4,W=(it+R)*4;J[W]=T.textInstanceB[z]+E,J[W+1]=T.textInstanceB[z+1]+U,J[W+2]=T.textInstanceB[z+2]+at,J[W+3]=T.textInstanceB[z+3]}for(let R=0;R<T.textGlyphCount;R+=1){const z=R*4,W=(at+R)*4;j[W]=T.textGlyphMetaA[z]+st,j[W+1]=T.textGlyphMetaA[z+1],j[W+2]=T.textGlyphMetaA[z+2],j[W+3]=T.textGlyphMetaA[z+3],D[W]=T.textGlyphMetaB[z],D[W+1]=T.textGlyphMetaB[z+1],D[W+2]=T.textGlyphMetaB[z+2],D[W+3]=T.textGlyphMetaB[z+3]}k.set(T.textGlyphSegmentsA,st*4),et.set(T.textGlyphSegmentsB,st*4);const q=T.pageRects;if(q.length>=4){const R=Math.floor(q.length/4);for(let z=0;z<R;z+=1){const W=z*4,K=(lt+z)*4;Z[K]=q[W]+E,Z[K+1]=q[W+1]+U,Z[K+2]=q[W+2]+E,Z[K+3]=q[W+3]+U}lt+=R}else{const R=lt*4;Z[R]=T.pageBounds.minX+E,Z[R+1]=T.pageBounds.minY+U,Z[R+2]=T.pageBounds.maxX+E,Z[R+3]=T.pageBounds.maxY+U,lt+=1}Tt=ge(Tt,Fr(T.bounds,E,U)),yt=ge(yt,Fr(T.pageBounds,E,U));for(const R of po(T)){if(R.matrix.length<6)continue;const z=new Float32Array(6);z[0]=R.matrix[0],z[1]=R.matrix[1],z[2]=R.matrix[2],z[3]=R.matrix[3],z[4]=R.matrix[4]+E,z[5]=R.matrix[5]+U,h.push({width:R.width,height:R.height,data:R.data,matrix:z})}Q+=T.fillPathCount,ot+=T.fillSegmentCount,ct+=T.segmentCount,it+=T.textInstanceCount,at+=T.textGlyphCount,st+=T.textGlyphSegmentCount}const H=h[0]??null;return{pageCount:n.length,pagesPerRow:e,pageRects:Z,fillPathCount:s,fillSegmentCount:i,fillPathMetaA:G,fillPathMetaB:P,fillPathMetaC:I,fillSegmentsA:V,fillSegmentsB:C,segmentCount:r,sourceSegmentCount:o,mergedSegmentCount:l,sourceTextCount:c,textInstanceCount:g,textGlyphCount:p,textGlyphSegmentCount:y,textInPageCount:f,textOutOfPageCount:v,textInstanceA:N,textInstanceB:J,textInstanceC:X,textGlyphMetaA:j,textGlyphMetaB:D,textGlyphSegmentsA:k,textGlyphSegmentsB:et,rasterLayers:h,rasterLayerWidth:H?.width??0,rasterLayerHeight:H?.height??0,rasterLayerData:H?.data??new Uint8Array(0),rasterLayerMatrix:H?.matrix??new Float32Array([1,0,0,1,0,0]),endpoints:F,primitiveMeta:u,primitiveBounds:B,styles:$,bounds:Tt??{minX:0,minY:0,maxX:1,maxY:1},pageBounds:yt??Tt??{minX:0,minY:0,maxX:1,maxY:1},maxHalfWidth:A,imagePaintOpCount:m,operatorCount:d,pathCount:x,discardedTransparentCount:b,discardedDegenerateCount:_,discardedDuplicateCount:M,discardedContainedCount:w}}function fo(n,t){const e=n.map(p=>mo(p.pageBounds,p.bounds)),a=Math.ceil(n.length/t),s=new Float64Array(a);let i=0;for(let p=0;p<e.length;p+=1){const y=e[p],f=Math.max(y.maxX-y.minX,.001),v=Math.max(y.maxY-y.minY,.001);i+=Math.max(f,v);const d=Math.floor(p/t);s[d]=Math.max(s[d],v)}const r=i/Math.max(1,e.length),o=Math.max(r*ro,io),l=new Float64Array(a);for(let p=1;p<a;p+=1)l[p]=l[p-1]-s[p-1]-o;const c=new Float64Array(a),g=new Array(n.length);for(let p=0;p<e.length;p+=1){const y=e[p],f=Math.max(y.maxX-y.minX,.001),v=Math.floor(p/t),d=c[v]-y.minX,m=l[v]-y.maxY;g[p]={translateX:d,translateY:m},c[v]+=f+o}return g}function mo(n,t){const e=Rr(n)?n:t;return Rr(e)?e:{minX:0,minY:0,maxX:1,maxY:1}}function Rr(n){return Number.isFinite(n.minX)&&Number.isFinite(n.minY)&&Number.isFinite(n.maxX)&&Number.isFinite(n.maxY)}function Fr(n,t,e){return{minX:n.minX+t,minY:n.minY+e,maxX:n.maxX+t,maxY:n.maxY+e}}function po(n){const t=[];if(Array.isArray(n.rasterLayers))for(const i of n.rasterLayers){const r=Math.max(0,Math.trunc(i?.width??0)),o=Math.max(0,Math.trunc(i?.height??0));if(r<=0||o<=0||!(i.data instanceof Uint8Array)||i.data.length<r*o*4)continue;const l=new Float32Array(6);i.matrix.length>=6?(l[0]=i.matrix[0],l[1]=i.matrix[1],l[2]=i.matrix[2],l[3]=i.matrix[3],l[4]=i.matrix[4],l[5]=i.matrix[5]):(l[0]=1,l[3]=1),t.push({width:r,height:o,data:i.data,matrix:l})}if(t.length>0)return t;const e=Math.max(0,Math.trunc(n.rasterLayerWidth)),a=Math.max(0,Math.trunc(n.rasterLayerHeight));if(e<=0||a<=0||n.rasterLayerData.length<e*a*4)return t;const s=new Float32Array([1,0,0,1,0,0]);return n.rasterLayerMatrix.length>=6&&(s[0]=n.rasterLayerMatrix[0],s[1]=n.rasterLayerMatrix[1],s[2]=n.rasterLayerMatrix[2],s[3]=n.rasterLayerMatrix[3],s[4]=n.rasterLayerMatrix[4],s[5]=n.rasterLayerMatrix[5]),t.push({width:e,height:a,data:n.rasterLayerData,matrix:s}),t}function ri(){return{pageCount:0,pagesPerRow:1,pageRects:new Float32Array(0),fillPathCount:0,fillSegmentCount:0,fillPathMetaA:new Float32Array(0),fillPathMetaB:new Float32Array(0),fillPathMetaC:new Float32Array(0),fillSegmentsA:new Float32Array(0),fillSegmentsB:new Float32Array(0),segmentCount:0,sourceSegmentCount:0,mergedSegmentCount:0,sourceTextCount:0,textInstanceCount:0,textGlyphCount:0,textGlyphSegmentCount:0,textInPageCount:0,textOutOfPageCount:0,textInstanceA:new Float32Array(0),textInstanceB:new Float32Array(0),textInstanceC:new Float32Array(0),textGlyphMetaA:new Float32Array(0),textGlyphMetaB:new Float32Array(0),textGlyphSegmentsA:new Float32Array(0),textGlyphSegmentsB:new Float32Array(0),rasterLayers:[],rasterLayerWidth:0,rasterLayerHeight:0,rasterLayerData:new Uint8Array(0),rasterLayerMatrix:new Float32Array([1,0,0,1,0,0]),endpoints:new Float32Array(0),primitiveMeta:new Float32Array(0),primitiveBounds:new Float32Array(0),styles:new Float32Array(0),bounds:{minX:0,minY:0,maxX:1,maxY:1},pageBounds:{minX:0,minY:0,maxX:1,maxY:1},maxHalfWidth:0,imagePaintOpCount:0,operatorCount:0,pathCount:0,discardedTransparentCount:0,discardedDegenerateCount:0,discardedDuplicateCount:0,discardedContainedCount:0}}function ye(n,t,e,a){const s=Math.trunc(Number(n)),i=Number.isFinite(s)?s:t;return i<e?e:i>a?a:i}function go(n=Ut){return{matrix:[...n],lineWidth:1,strokeR:0,strokeG:0,strokeB:0,strokeAlpha:1,fillR:0,fillG:0,fillB:0,fillAlpha:1}}function ii(n){const t=an(n.rotate),e=n.getViewport({scale:1,rotation:t,dontFlip:!1}),a=e.transform;if(!Array.isArray(a)||a.length<6)return[...Ut];const s=Number(a[0]),i=Number(a[1]),r=Number(a[2]),o=Number(a[3]),l=Number(a[4]),c=Number(a[5]);if(![s,i,r,o,l,c].every(Number.isFinite))return[...Ut];const g=Number(e.height);return Number.isFinite(g)?Bt([1,0,0,-1,0,g],[s,i,r,o,l,c]):[s,i,r,o,l,c]}function mn(n,t){const e=ht(t,n.minX,n.minY),a=ht(t,n.minX,n.maxY),s=ht(t,n.maxX,n.minY),i=ht(t,n.maxX,n.maxY);return{minX:Math.min(e[0],a[0],s[0],i[0]),minY:Math.min(e[1],a[1],s[1],i[1]),maxX:Math.max(e[0],a[0],s[0],i[0]),maxY:Math.max(e[1],a[1],s[1],i[1])}}function an(n){if(!Number.isFinite(n))return 0;let t=n%360;return t<0&&(t+=360),t}function ai(){if(typeof window<"u"&&window.location)return new URL("pdfjs-standard-fonts/",window.location.href).toString();if(typeof window>"u"){const n=new URL("../node_modules/pdfjs-dist/standard_fonts/",import.meta.url);if(n.protocol==="file:"){const t=decodeURIComponent(n.pathname);return t.endsWith("/")?t:`${t}/`}return n.toString()}}function xo(n,t,e=1){if(!Number.isFinite(n)||!Number.isFinite(t)||n<=0||t<=0)return 1;const a=typeof window>"u"?1:Math.max(1,Number(window.devicePixelRatio)||1),s=Math.max(a*Ys,Number.isFinite(e)?e:1);let i=Math.max(1,Math.min(Hs,s));for(;i>1;){const r=Math.max(1,Math.ceil(n*i)),o=Math.max(1,Math.ceil(t*i));if(r<=Er&&o<=Er&&r*o<=qs)return i;if(i*=.85,i<1.05)return 1}return 1}function Br(n){return{matrix:[...n.matrix],lineWidth:n.lineWidth,strokeR:n.strokeR,strokeG:n.strokeG,strokeB:n.strokeB,strokeAlpha:n.strokeAlpha,fillR:n.fillR,fillG:n.fillG,fillB:n.fillB,fillAlpha:n.fillAlpha}}let te;function ae(n){const t=Lr(n);if(!t)return null;const e=Array.isArray(n)?Lr(n[0]):null,a=t.length>=6?t:e;if(!a||a.length<6)return null;const s=Number(a[0]),i=Number(a[1]),r=Number(a[2]),o=Number(a[3]),l=Number(a[4]),c=Number(a[5]);return[s,i,r,o,l,c].every(Number.isFinite)?[s,i,r,o,l,c]:null}function Lr(n){return Array.isArray(n)||ArrayBuffer.isView(n)?n:null}function si(n){if(!Array.isArray(n)||n.length<2)return null;const t=n[1];if(!Array.isArray(t)||t.length===0)return null;const e=t[0];return e instanceof Float32Array?e:null}function Dt(n,t){if(Array.isArray(n))return n[t]}function vt(n,t,e){const a=Dt(n,t),s=Number(a);return Number.isFinite(s)?s:e}function yo(n){return n===Y.stroke||n===Y.closeStroke||n===Y.fillStroke||n===Y.eoFillStroke||n===Y.closeFillStroke||n===Y.closeEOFillStroke}function vo(n){return n===Y.fill||n===Y.eoFill||n===Y.fillStroke||n===Y.eoFillStroke||n===Y.closeFillStroke||n===Y.closeEOFillStroke}function To(n){return n===Y.eoFill||n===Y.eoFillStroke||n===Y.closeEOFillStroke}function En(n,t){const e=Number(n);if(Number.isFinite(e)){const a=dt(e>1?e/255:e);return[a,a,a]}return[t,t,t]}function Cn(n,t){if(typeof n=="number"&&Number.isFinite(n)){const e=dt(n>1?n/255:n);return[e,e,e]}if(typeof n=="string"&&n.startsWith("#")&&(n.length===7||n.length===4)){const[e,a,s]=Co(n);return[dt(e/255),dt(a/255),dt(s/255)]}if(Array.isArray(n)&&n.length>=3){const e=Number(n[0]),a=Number(n[1]),s=Number(n[2]);if([e,a,s].every(Number.isFinite))return[dt(e>1?e/255:e),dt(a>1?a/255:a),dt(s>1?s/255:s)]}return[t[0],t[1],t[2]]}function Re(n,t){return Array.isArray(n)?n.length>=3&&n.slice(0,3).every(e=>Number.isFinite(Number(e)))?Cn([n[0],n[1],n[2]],t):n.length>0?Cn(n[0],t):[t[0],t[1],t[2]]:Cn(n,t)}function In(n,t){if(!Array.isArray(n)||n.length<4)return Re(n,t);const e=Je(n[0]),a=Je(n[1]),s=Je(n[2]),i=Je(n[3]);if([e,a,s,i].some(f=>f===null))return Re(n,t);const r=e,o=a,l=s,c=i,g=1-Math.min(1,r+c),p=1-Math.min(1,o+c),y=1-Math.min(1,l+c);return[dt(g),dt(p),dt(y)]}function Je(n){const t=Number(n);if(!Number.isFinite(t))return null;const e=t>1?t/100:t;return dt(e)}function Co(n){if(n.length===4){const s=Number.parseInt(n[1]+n[1],16),i=Number.parseInt(n[2]+n[2],16),r=Number.parseInt(n[3]+n[3],16);return[s,i,r]}const t=Number.parseInt(n.slice(1,3),16),e=Number.parseInt(n.slice(3,5),16),a=Number.parseInt(n.slice(5,7),16);return[t,e,a]}function bo(n,t){if(Array.isArray(n))for(const e of n){if(!Array.isArray(e)||e.length<2)continue;const a=e[0],s=e[1];if(a==="CA"){const i=Number(s);Number.isFinite(i)&&(t.strokeAlpha=dt(i));continue}if(a==="ca"){const i=Number(s);Number.isFinite(i)&&(t.fillAlpha=dt(i));continue}if(a==="LW"){const i=Number(s);Number.isFinite(i)&&(t.lineWidth=Math.max(0,i))}}}function So(n,t,e,a,s,i,r,o,l,c,g,p,y,f){let v=0,d=0,m=0,x=0,b=0,_=!1,M=0,w=0,A=0,L=0,G=!1;const P=(u,B,$,N,J,X,j)=>{c.push(u,B,$,N),g.push(J,X,j,ao(r,o)),p.push(e,a,s,i);const D=Math.min(u,$,J),k=Math.min(B,N,X),et=Math.max(u,$,J),Z=Math.max(B,N,X);y.push(D,k,et,Z),f.minX=Math.min(f.minX,D),f.minY=Math.min(f.minY,k),f.maxX=Math.max(f.maxX,et),f.maxY=Math.max(f.maxY,Z)},I=()=>{G&&(P(M,w,A,L,A,L,Ir),G=!1)},V=(u,B,$,N)=>{if(!G)return!1;const J=u-A,X=B-L;if(J*J+X*X>Ar*Ar)return!1;const j=A-M,D=L-w,k=$-u,et=N-B,Z=j*j+D*D,Q=k*k+et*et;if(Z<1e-10||Q<1e-10)return!1;const ot=1/Math.sqrt(Z*Q);if((j*k+D*et)*ot<Os)return!1;const it=$-M,at=N-w;return el(it,at,j,D,Z)>wr*wr?!1:(A=$,L=N,!0)},C=(u,B,$,N,J)=>{const X=$-u,j=N-B;if(!(X*X+j*j<1e-10)&&(v+=1,!(l&&J&&V(u,B,$,N)))){if(l){I(),M=u,w=B,A=$,L=N,G=!0;return}P(u,B,$,N,$,N,Ir)}},F=(u,B,$,N,J,X)=>{const j=J-u,D=X-B,k=$-u,et=N-B;j*j+D*D<1e-10&&k*k+et*et<1e-10||(v+=1,I(),P(u,B,$,N,J,X,Nn))};for(let u=0;u<n.length;){const B=n[u++];if(B===cn){I(),d=n[u++],m=n[u++],x=d,b=m,_=!0;continue}if(B===un){const $=n[u++],N=n[u++],[J,X]=ht(t,d,m),[j,D]=ht(t,$,N);C(J,X,j,D,!0),d=$,m=N;continue}if(B===hn){const $=n[u++],N=n[u++],J=n[u++],X=n[u++],j=n[u++],D=n[u++],[k,et]=ht(t,d,m),[Z,Q]=ht(t,$,N),[ot,ct]=ht(t,J,X),[it,at]=ht(t,j,D);Xn(k,et,Z,Q,ot,ct,it,at,F,ti,ei),d=j,m=D;continue}if(B===dn){const $=n[u++],N=n[u++],J=n[u++],X=n[u++],[j,D]=ht(t,d,m),[k,et]=ht(t,$,N),[Z,Q]=ht(t,J,X);F(j,D,k,et,Z,Q),d=J,m=X;continue}if(B===fn){if(_&&(d!==x||m!==b)){const[$,N]=ht(t,d,m),[J,X]=ht(t,x,b);C($,N,J,X,!0)}d=x,m=b,I();continue}I();break}return I(),v}function Ao(n,t,e,a,s,i,r,o,l,c,g,p,y,f){let v=0,d=0,m=0,x=0,b=!1;const _=p.quadCount;let M=0;const w={minX:Number.POSITIVE_INFINITY,minY:Number.POSITIVE_INFINITY,maxX:Number.NEGATIVE_INFINITY,maxY:Number.NEGATIVE_INFINITY},A=(P,I,V,C)=>{const F=V-P,u=C-I;F*F+u*u<1e-12||(p.push(P,I,V,C),y.push(V,C,eo,0),M+=1,w.minX=Math.min(w.minX,P,V),w.minY=Math.min(w.minY,I,C),w.maxX=Math.max(w.maxX,P,V),w.maxY=Math.max(w.maxY,I,C))},L=(P,I,V,C,F,u)=>{const B=F-P,$=u-I,N=V-P,J=C-I;B*B+$*$<1e-12&&N*N+J*J<1e-12||(p.push(P,I,V,C),y.push(F,u,no,0),M+=1,w.minX=Math.min(w.minX,P,V,F),w.minY=Math.min(w.minY,I,C,u),w.maxX=Math.max(w.maxX,P,V,F),w.maxY=Math.max(w.maxY,I,C,u))},G=()=>{if(b){if(v!==m||d!==x){const[P,I]=ht(t,v,d),[V,C]=ht(t,m,x);A(P,I,V,C)}v=m,d=x}};for(let P=0;P<n.length;){const I=n[P++];if(I===cn){G(),v=n[P++],d=n[P++],m=v,x=d,b=!0;continue}if(I===un){const V=n[P++],C=n[P++],[F,u]=ht(t,v,d),[B,$]=ht(t,V,C);A(F,u,B,$),v=V,d=C;continue}if(I===hn){const V=n[P++],C=n[P++],F=n[P++],u=n[P++],B=n[P++],$=n[P++],[N,J]=ht(t,v,d),[X,j]=ht(t,V,C),[D,k]=ht(t,F,u),[et,Z]=ht(t,B,$);Xn(N,J,X,j,D,k,et,Z,L,ti,ei),v=B,d=$;continue}if(I===dn){const V=n[P++],C=n[P++],F=n[P++],u=n[P++],[B,$]=ht(t,v,d),[N,J]=ht(t,V,C),[X,j]=ht(t,F,u);L(B,$,N,J,X,j),v=F,d=u;continue}if(I===fn){G();continue}G();break}return G(),M===0?!1:(l.push(_,M,w.minX,w.minY),c.push(w.maxX,w.maxY,s,i),g.push(e,a?1:0,r,o),f.minX=Math.min(f.minX,w.minX),f.minY=Math.min(f.minY,w.minY),f.maxX=Math.max(f.maxX,w.maxX),f.maxY=Math.max(f.maxY,w.maxY),!0)}function wo(n,t,e,a){const s=n.length>>2,i=new Uint8Array(s),r=new Set,o=new Map;let l=0,c=0,g=0,p=0;for(let M=0;M<s;M+=1){const w=M*4,A=n[w],L=n[w+1],G=n[w+2],P=n[w+3],I=t[w],V=t[w+1],C=t[w+2],F=C>=Nn-.5,u=e[w],B=e[w+1],$=e[w+2],N=e[w+3],{alpha:J,styleFlags:X}=so(t[w+3]);if(J<=Kr){l+=1;continue}if((F?Math.hypot(G-A,P-L)+Math.hypot(I-G,V-P):Math.hypot(I-A,V-L))<1e-5){c+=1;continue}const D=_o(A,L,G,P,I,V,C,u,B,$,N,J,X);if(r.has(D)){g+=1;continue}if(r.add(D),i[M]=1,!F){const k=Mo(M,A,L,I,V,u,B,$,N,J,X);let et=o.get(k.key);et||(et=[],o.set(k.key,et)),et.push({index:k.index,start:k.start,end:k.end,halfWidth:k.halfWidth,alpha:k.alpha,styleFlags:k.styleFlags})}}for(const M of o.values()){M.sort((A,L)=>{if(Math.abs(A.halfWidth-L.halfWidth)>Mr)return L.halfWidth-A.halfWidth;const G=A.end-A.start,P=L.end-L.start;return Math.abs(G-P)>Tn?P-G:A.start-L.start});const w=[];for(const A of M){let L=!1;for(const G of w)if(!(G.halfWidth+Mr<A.halfWidth)&&G.start-Tn<=A.start&&G.end+Tn>=A.end){L=!0;break}if(L){i[A.index]===1&&(i[A.index]=0,p+=1);continue}A.alpha>=zs&&w.push(A)}}let y=0;for(let M=0;M<s;M+=1)i[M]===1&&(y+=1);if(y===0)return{segmentCount:0,endpoints:new Float32Array(0),primitiveMeta:new Float32Array(0),primitiveBounds:new Float32Array(0),styles:new Float32Array(0),bounds:{minX:0,minY:0,maxX:0,maxY:0},maxHalfWidth:0,discardedTransparentCount:l,discardedDegenerateCount:c,discardedDuplicateCount:g,discardedContainedCount:p};const f=new Float32Array(y*4),v=new Float32Array(y*4),d=new Float32Array(y*4),m=new Float32Array(y*4),x={minX:Number.POSITIVE_INFINITY,minY:Number.POSITIVE_INFINITY,maxX:Number.NEGATIVE_INFINITY,maxY:Number.NEGATIVE_INFINITY};let b=0,_=0;for(let M=0;M<s;M+=1){if(i[M]===0)continue;const w=M*4,A=_*4,L=n[w],G=n[w+1],P=a[w],I=a[w+1],V=a[w+2],C=a[w+3],F=e[w];f[A]=L,f[A+1]=G,f[A+2]=n[w+2],f[A+3]=n[w+3],v[A]=t[w],v[A+1]=t[w+1],v[A+2]=t[w+2],v[A+3]=t[w+3],d[A]=P,d[A+1]=I,d[A+2]=V,d[A+3]=C,m[A]=e[w],m[A+1]=e[w+1],m[A+2]=e[w+2],m[A+3]=e[w+3],x.minX=Math.min(x.minX,P),x.minY=Math.min(x.minY,I),x.maxX=Math.max(x.maxX,V),x.maxY=Math.max(x.maxY,C),b=Math.max(b,F),_+=1}return{segmentCount:y,endpoints:f,primitiveMeta:v,primitiveBounds:d,styles:m,bounds:x,maxHalfWidth:b,discardedTransparentCount:l,discardedDegenerateCount:c,discardedDuplicateCount:g,discardedContainedCount:p}}function _o(n,t,e,a,s,i,r,o,l,c,g,p,y){const f=r>=Nn-.5;let v=n,d=t,m=s,x=i,b=e,_=a;return!f&&(v>m||v===m&&d>x)&&(v=s,d=i,m=n,x=t),f||(b=m,_=x),[Ct(r,10),Ct(o,Kt),Ct(l,Kt),Ct(c,Kt),Ct(g,Kt),Ct(p,Kt),Ct(y,1),Ct(v,pe),Ct(d,pe),Ct(b,pe),Ct(_,pe),Ct(m,pe),Ct(x,pe)].join("|")}function Mo(n,t,e,a,s,i,r,o,l,c,g){let p=t,y=e,f=a,v=s,d=f-p,m=v-y;const x=Math.hypot(d,m);let b=d/x,_=m/x;(b<0||Math.abs(b)<1e-10&&_<0)&&(b=-b,_=-_,p=a,y=s,f=t,v=e);const M=-_,w=b,A=M*p+w*y,L=b*p+_*y,G=b*f+_*v,P=Math.min(L,G),I=Math.max(L,G);return{key:[Ct(b,_r),Ct(_,_r),Ct(A,Gs),Ct(r,Kt),Ct(o,Kt),Ct(l,Kt),Ct(g,1)].join("|"),index:n,start:P,end:I,halfWidth:i,alpha:c,styleFlags:g}}async function bn(n,t,e,a){const s=Ro(n);if(!s)return Po();const i=new Et(4096),r=new Et(4096),o=new Et(4096),l=new Et(2048),c=new Et(2048),g=new Et(16384),p=new Et(16384),y=new Map,f=[];let v=0,d=null,m=0,x=0;const b=[],_=[],M=[],w=[];let A=No(e),L=null,G=null;const P=(V,C,F)=>{if(!F)return null;const u=typeof V?.loadedName=="string"&&V.loadedName.length>0?V.loadedName:C;if(!u)return null;const B=`${u}|${F}`,$=y.get(B);if($!==void 0)return{index:$,bounds:f[$]};const N=qo(s,u,F);if(!N)return null;const J=g.quadCount,X=Zo(N,g,p);if(X.segmentCount<=0)return null;const j=l.quadCount;return l.push(J,X.segmentCount,X.bounds.minX,X.bounds.minY),c.push(X.bounds.maxX,X.bounds.maxY,0,0),y.set(B,j),f[j]=X.bounds,{index:j,bounds:X.bounds}},I=V=>{if(V.length===0||A.fontSize===0)return;const C=Yo(s,A.fontRef),F=Ho(C),u=A.fontSize*F,B=C?.vertical===!0,$=B?1:-1,N=A.textHScale*A.fontDirection;let J=0;for(const X of V){if(typeof X=="number"&&Number.isFinite(X)){J+=$*X*A.fontSize/1e3;continue}const j=X,D=typeof j.fontChar=="string"?j.fontChar:"",k=Number(j.width),et=Number.isFinite(k)?k:0,Z=j.isSpace===!0,Q=Wo(j,D),ot=(Z?A.wordSpacing:0)+A.charSpacing;if(!B&&!Q&&Vo(A.renderMode)&&A.fillAlpha>Vs){const it=P(C,A.fontRef,D);if(it){const at=tl(A,J,0),st=mn(it.bounds,at);(!L||Nr(st,L))&&(i.push(at[0],at[1],at[2],at[3]),r.push(at[4],at[5],it.index,0),o.push(A.fillR,A.fillG,A.fillB,A.fillAlpha),v+=1,a&&(Nr(st,a)?m+=1:x+=1),d?(d.minX=Math.min(d.minX,st.minX-Qt),d.minY=Math.min(d.minY,st.minY-Qt),d.maxX=Math.max(d.maxX,st.maxX+Qt),d.maxY=Math.max(d.maxY,st.maxY+Qt)):d={minX:st.minX-Qt,minY:st.minY-Qt,maxX:st.maxX+Qt,maxY:st.maxY+Qt})}}const ct=B?et*u-ot*A.fontDirection:et*u+ot*A.fontDirection;J+=ct}B?A.textY-=J:A.textX+=J*N};for(let V=0;V<t.fnArray.length;V+=1){const C=t.fnArray[V],F=t.argsArray[V];if(C===Y.save){b.push(Gr(A)),M.push(kr(L));continue}if(C===Y.restore){const u=b.pop();u&&(A=u),L=M.pop()??null,G=null;continue}if(C===Y.transform){const u=ae(F);u&&(A.matrix=Bt(A.matrix,u));continue}if(C===Y.paintFormXObjectBegin){_.push(Gr(A)),w.push(kr(L));const u=ae(F);u&&(A.matrix=Bt(A.matrix,u)),G=null;continue}if(C===Y.paintFormXObjectEnd){const u=_.pop();u&&(A=u),L=w.pop()??L,G=null;continue}if(C===Y.constructPath){if(vt(F,0,-1)===Y.endPath){const B=si(F);G=B?Io(B,A.matrix):null}else G=null;continue}if(C===Y.clip||C===Y.eoClip){G&&(L=Eo(L,G));continue}if(C===Y.endPath){G=null;continue}if(C===Y.setFillRGBColor||C===Y.setFillColor||C===Y.setFillGray||C===Y.setFillCMYKColor){if(C===Y.setFillCMYKColor){const[u,B,$]=In(F,[A.fillR,A.fillG,A.fillB]);A.fillR=u,A.fillG=B,A.fillB=$}else if(C===Y.setFillGray){const[u]=En(Dt(F,0),A.fillR);A.fillR=u,A.fillG=u,A.fillB=u}else{const[u,B,$]=Re(F,[A.fillR,A.fillG,A.fillB]);A.fillR=u,A.fillG=B,A.fillB=$}continue}if(C===Y.setGState){Xo(Dt(F,0),A);continue}if(C===Y.beginText){Uo(A);continue}if(C===Y.setCharSpacing){A.charSpacing=vt(F,0,A.charSpacing);continue}if(C===Y.setWordSpacing){A.wordSpacing=vt(F,0,A.wordSpacing);continue}if(C===Y.setHScale){A.textHScale=vt(F,0,A.textHScale*100)/100;continue}if(C===Y.setLeading){A.leading=-vt(F,0,-A.leading);continue}if(C===Y.setFont){const u=Dt(F,0),B=vt(F,1,A.fontSize);typeof u=="string"&&(A.fontRef=u),B<0?(A.fontSize=-B,A.fontDirection=-1):(A.fontSize=B,A.fontDirection=1);continue}if(C===Y.setTextRenderingMode){A.renderMode=Math.max(0,Math.trunc(vt(F,0,A.renderMode)));continue}if(C===Y.setTextRise){A.textRise=vt(F,0,A.textRise);continue}if(C===Y.moveText){const u=vt(F,0,0),B=vt(F,1,0);_e(A,u,B);continue}if(C===Y.setLeadingMoveText){const u=vt(F,0,0),B=vt(F,1,0);A.leading=B,_e(A,u,B);continue}if(C===Y.setTextMatrix){const u=ae(F);u&&(A.textMatrix=u,A.textX=0,A.textY=0,A.lineX=0,A.lineY=0);continue}if(C===Y.nextLine){_e(A,0,A.leading);continue}if(C===Y.showText||C===Y.showSpacedText){I(Sn(Dt(F,0))),G=null;continue}if(C===Y.nextLineShowText){_e(A,0,A.leading),I(Sn(Dt(F,0))),G=null;continue}if(C===Y.nextLineSetSpacingShowText){A.wordSpacing=vt(F,0,A.wordSpacing),A.charSpacing=vt(F,1,A.charSpacing),_e(A,0,A.leading),I(Sn(Dt(F,2))),G=null;continue}}return{sourceTextCount:v,instanceCount:i.quadCount,glyphCount:l.quadCount,glyphSegmentCount:g.quadCount,inPageCount:m,outOfPageCount:x,instanceA:i.toTypedArray(),instanceB:r.toTypedArray(),instanceC:o.toTypedArray(),glyphMetaA:l.toTypedArray(),glyphMetaB:c.toTypedArray(),glyphSegmentsA:g.toTypedArray(),glyphSegmentsB:p.toTypedArray(),bounds:d}}function kr(n){return n?{...n}:null}function Eo(n,t){if(!n&&!t)return null;if(!n&&t)return{...t};if(n&&!t)return{...n};const e=Math.max(n.minX,t.minX),a=Math.max(n.minY,t.minY),s=Math.min(n.maxX,t.maxX),i=Math.min(n.maxY,t.maxY);return e<=s&&a<=i?{minX:e,minY:a,maxX:s,maxY:i}:null}function Io(n,t){let e=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,i=Number.NEGATIVE_INFINITY,r=!1,o=0,l=0,c=0,g=0,p=!1;const y=(f,v)=>{const[d,m]=ht(t,f,v);e=Math.min(e,d),a=Math.min(a,m),s=Math.max(s,d),i=Math.max(i,m),r=!0};for(let f=0;f<n.length;){const v=n[f++];if(v===cn){if(f+1>=n.length)break;o=n[f++],l=n[f++],c=o,g=l,p=!0,y(o,l);continue}if(v===un){if(f+1>=n.length)break;const d=n[f++],m=n[f++];y(o,l),y(d,m),o=d,l=m;continue}if(v===hn){if(f+5>=n.length)break;const d=n[f++],m=n[f++],x=n[f++],b=n[f++],_=n[f++],M=n[f++];y(o,l),y(d,m),y(x,b),y(_,M),o=_,l=M;continue}if(v===dn){if(f+3>=n.length)break;const d=n[f++],m=n[f++],x=n[f++],b=n[f++];y(o,l),y(d,m),y(x,b),o=x,l=b;continue}if(v===fn){p&&(y(o,l),y(c,g),o=c,l=g);continue}break}return r?{minX:e,minY:a,maxX:s,maxY:i}:null}function Po(){return{sourceTextCount:0,instanceCount:0,glyphCount:0,glyphSegmentCount:0,inPageCount:0,outOfPageCount:0,instanceA:new Float32Array(0),instanceB:new Float32Array(0),instanceC:new Float32Array(0),glyphMetaA:new Float32Array(0),glyphMetaB:new Float32Array(0),glyphSegmentsA:new Float32Array(0),glyphSegmentsB:new Float32Array(0),bounds:null}}function Ro(n){const t=n;return!t.commonObjs||typeof t.commonObjs.get!="function"?null:t.commonObjs}function Fo(n){for(const t of n.fnArray)if(t===Y.showText||t===Y.showSpacedText||t===Y.nextLineShowText||t===Y.nextLineSetSpacingShowText)return!0;return!1}function oi(n){let t=0;for(const e of n.fnArray)Un(e)&&(t+=1);return t}async function Bo(n){if(typeof document>"u")return;const t=n;if(!Array.isArray(t.view)||typeof t.getViewport!="function"||typeof t.render!="function")return;const e=Math.max(1,Math.abs(t.view[2]-t.view[0])),a=Math.max(1,Math.abs(t.view[3]-t.view[1])),s=Math.max(e,a),r=dt(1024/s)*.95+.05,o=t.getViewport({scale:r,rotation:an(t.rotate),dontFlip:!0}),l=Math.max(1,Math.ceil(o.width)),c=Math.max(1,Math.ceil(o.height)),g=document.createElement("canvas");g.width=l,g.height=c;const p=g.getContext("2d",{alpha:!1});if(p)try{await t.render({canvasContext:p,viewport:o,intent:"display"}).promise}catch{}finally{g.width=0,g.height=0}}function Un(n){return n===Y.paintImageXObject||n===Y.paintInlineImageXObject||n===Y.paintInlineImageXObjectGroup||n===Y.paintImageXObjectRepeat||n===Y.paintImageMaskXObject||n===Y.paintImageMaskXObjectGroup||n===Y.paintImageMaskXObjectRepeat||n===Y.paintSolidColorImageMask||n===Y.beginInlineImage||n===Y.beginImageData||n===Y.endInlineImage}function Lo(n,t){return n===Y.dependency||n===Y.save||n===Y.restore||n===Y.transform||n===Y.setGState||n===Y.beginGroup||n===Y.endGroup||n===Y.beginCompat||n===Y.endCompat||n===Y.beginMarkedContent||n===Y.beginMarkedContentProps||n===Y.endMarkedContent||n===Y.paintFormXObjectBegin||n===Y.paintFormXObjectEnd||n===Y.paintXObject||n===Y.clip||n===Y.eoClip||n===Y.endPath||n===Y.setFillRGBColor||n===Y.setFillColor||n===Y.setFillGray||n===Y.setFillCMYKColor||n===Y.setFillColorN||n===Y.setFillColorSpace||n===Y.setFillTransparent||n===Y.setStrokeRGBColor||n===Y.setStrokeColor||n===Y.setStrokeGray||n===Y.setStrokeCMYKColor||n===Y.setStrokeColorN||n===Y.setStrokeColorSpace||n===Y.setStrokeTransparent?!0:n===Y.constructPath?vt(t,0,-1)===Y.endPath:!1}function ko(n){const t=new Uint8Array(n.fnArray.length);let e=!1,a=!1;for(let s=0;s<n.fnArray.length;s+=1){const i=n.fnArray[s],r=n.argsArray[s];if(Un(i)){e=!0,t[s]=1;continue}(i===Y.paintFormXObjectBegin||i===Y.paintFormXObjectEnd||i===Y.paintXObject)&&(a=!0),Lo(i,r)&&(t[s]=1)}return{hasImagePaintOps:e,hasFormXObjectOps:a,imageOnlyMask:t}}function Do(n){const t=[];let e=[...Ut],a=1;for(let s=0;s<n.fnArray.length;s+=1){const i=n.fnArray[s],r=n.argsArray[s];if(i===Y.save){t.push([...e]);continue}if(i===Y.restore){const y=t.pop();y&&(e=y);continue}if(i===Y.transform){const y=ae(r);y&&(e=Bt(e,y));continue}if(!Un(i))continue;const o=Oo(i,r);if(!o)continue;const l=Math.hypot(e[0],e[1]),c=Math.hypot(e[2],e[3]);if(!Number.isFinite(l)||!Number.isFinite(c)||l<=1e-5||c<=1e-5)continue;const g=o.width/l,p=o.height/c;Number.isFinite(g)&&g>a&&(a=g),Number.isFinite(p)&&p>a&&(a=p)}return Number.isFinite(a)?Math.max(1,a):1}function Oo(n,t){if(n===Y.paintImageXObject||n===Y.paintImageXObjectRepeat){const e=vt(t,1,Number.NaN),a=vt(t,2,Number.NaN);if(e>0&&a>0)return{width:e,height:a}}if(n===Y.paintInlineImageXObject){const e=Dt(t,0),a=Number(e?.width),s=Number(e?.height);if(a>0&&s>0)return{width:a,height:s}}if(n===Y.paintImageMaskXObject||n===Y.paintImageMaskXObjectRepeat){const e=vt(t,1,Number.NaN),a=vt(t,2,Number.NaN);if(e>0&&a>0)return{width:e,height:a}}return null}function we(){return{width:0,height:0,data:new Uint8Array(0),matrix:[...Ut],bounds:null}}async function li(n,t,e,a){const s=ko(t);if(!s.hasImagePaintOps&&!(a.allowFullPageFallback&&s.hasFormXObjectOps))return we();const i=n;if(!Array.isArray(i.view)||typeof i.getViewport!="function"||typeof i.render!="function")return we();const r=i.getViewport({scale:1,rotation:an(i.rotate),dontFlip:!1}),o=Do(t),l=xo(Math.max(1,Math.ceil(r.width)),Math.max(1,Math.ceil(r.height)),o),c=l===1?r:i.getViewport({scale:l,rotation:an(i.rotate),dontFlip:!1}),g=Math.max(1,Math.ceil(c.width)),p=Math.max(1,Math.ceil(c.height));if(!Number.isFinite(g)||!Number.isFinite(p)||g<=0||p<=0)return we();let y=null;return s.hasImagePaintOps&&(y=await Dr(i,c,s.imageOnlyMask),y&&Or(y))?zr(g,p,y,c,e):!a.allowFullPageFallback||!s.hasFormXObjectOps||(y=await Dr(i,c),!y||!Or(y))?we():zr(g,p,y,c,e)}async function zo(){if(te!==void 0)return te;if(typeof window<"u")return te=null,null;try{const t=await import("@napi-rs/canvas");return typeof t.createCanvas!="function"?(te=null,null):(te={createCanvas:t.createCanvas},te)}catch{return te=null,null}}async function Go(n,t){if(typeof document<"u"){const i=document.createElement("canvas");i.width=n,i.height=t;const r=i.getContext("2d",{alpha:!0,willReadFrequently:!0});return r?{context:r,dispose:()=>{i.width=0,i.height=0}}:null}const e=await zo();if(!e)return null;const a=e.createCanvas(n,t),s=a.getContext("2d");return!s||typeof s.getImageData!="function"?null:{context:s,dispose:()=>{a.width=0,a.height=0}}}async function Dr(n,t,e){const a=t,s=Math.max(1,Math.ceil(Number(a.width)||1)),i=Math.max(1,Math.ceil(Number(a.height)||1)),r=await Go(s,i);if(!r)return null;const o=r.context;try{const g={canvasContext:o,viewport:t,intent:"display",background:"rgba(0,0,0,0)"};e&&(g.operationsFilter=p=>p>=0&&p<e.length&&e[p]===1),await n.render(g).promise}catch{return r.dispose(),null}const l=o.getImageData(0,0,s,i),c=new Uint8Array(l.data instanceof Uint8ClampedArray?l.data:new Uint8Array(l.data));return r.dispose(),c}function Or(n){for(let t=3;t<n.length;t+=4)if(n[t]>0)return!0;return!1}function zr(n,t,e,a,s){const i=ae(a.transform)??[...Ut],r=nl(i)??[...Ut],l=Bt(s,Bt(r,[n,0,0,t,0,0])),c=mn({minX:0,minY:0,maxX:1,maxY:1},l);return{width:n,height:t,data:e,matrix:l,bounds:c}}function No(n){return{matrix:[...n],fillR:0,fillG:0,fillB:0,fillAlpha:1,textMatrix:[...Ut],textX:0,textY:0,lineX:0,lineY:0,charSpacing:0,wordSpacing:0,textHScale:1,leading:0,textRise:0,renderMode:Jr,fontRef:"",fontSize:0,fontDirection:1}}function Gr(n){return{matrix:[...n.matrix],fillR:n.fillR,fillG:n.fillG,fillB:n.fillB,fillAlpha:n.fillAlpha,textMatrix:[...n.textMatrix],textX:n.textX,textY:n.textY,lineX:n.lineX,lineY:n.lineY,charSpacing:n.charSpacing,wordSpacing:n.wordSpacing,textHScale:n.textHScale,leading:n.leading,textRise:n.textRise,renderMode:n.renderMode,fontRef:n.fontRef,fontSize:n.fontSize,fontDirection:n.fontDirection}}function Uo(n){n.textMatrix=[...Ut],n.textX=0,n.textY=0,n.lineX=0,n.lineY=0}function _e(n,t,e){n.lineX+=t,n.lineY+=e,n.textX=n.lineX,n.textY=n.lineY}function Xo(n,t){if(Array.isArray(n))for(const e of n){if(!Array.isArray(e)||e.length<2)continue;const a=e[0],s=e[1];if(a==="ca"){const i=Number(s);Number.isFinite(i)&&(t.fillAlpha=dt(i));continue}if(a==="Font"&&Array.isArray(s)){const i=s[0],r=Number(s[1]);typeof i=="string"&&(t.fontRef=i),Number.isFinite(r)&&(r<0?(t.fontSize=-r,t.fontDirection=-1):(t.fontSize=r,t.fontDirection=1))}}}function Vo(n){return n===Jr||n===js||n===Qs||n===Ks}function Wo(n,t){if(!t||n.isSpace===!0)return!0;const e=typeof n.unicode=="string"?n.unicode:"";return e.length>0&&e.trim().length===0}function Sn(n){return Array.isArray(n)?n:[]}function Yo(n,t){if(!t)return null;try{const e=n.get(t);return!e||typeof e!="object"?null:e}catch{return null}}function Ho(n){const t=n?.fontMatrix;if(Array.isArray(t)&&t.length>=1){const e=Number(t[0]);if(Number.isFinite(e)&&e!==0)return e}return Xs}function qo(n,t,e){const a=`${t}_path_${e}`;let s;try{s=n.get(a)}catch{return null}const i=s?.path;return $o(i)}function $o(n){if(!n)return null;if(n instanceof Float32Array)return n;if(ArrayBuffer.isView(n)){const t=n,e=new Float32Array(t.length);for(let a=0;a<t.length;a+=1){const s=Number(t[a]);e[a]=Number.isFinite(s)?s:0}return e}if(Array.isArray(n)){const t=new Float32Array(n.length);for(let e=0;e<n.length;e+=1){const a=Number(n[e]);t[e]=Number.isFinite(a)?a:0}return t}return null}function Zo(n,t,e){let a=0,s=0,i=0,r=0,o=0,l=!1;const c={minX:Number.POSITIVE_INFINITY,minY:Number.POSITIVE_INFINITY,maxX:Number.NEGATIVE_INFINITY,maxY:Number.NEGATIVE_INFINITY},g=(y,f,v,d)=>{const m=v-y,x=d-f;m*m+x*x<1e-12||(t.push(y,f,v,d),e.push(v,d,Js,0),a+=1,c.minX=Math.min(c.minX,y,v),c.minY=Math.min(c.minY,f,d),c.maxX=Math.max(c.maxX,y,v),c.maxY=Math.max(c.maxY,f,d))},p=(y,f,v,d,m,x)=>{const b=m-y,_=x-f,M=v-y,w=d-f;b*b+_*_<1e-12&&M*M+w*w<1e-12||(t.push(y,f,v,d),e.push(m,x,to,0),a+=1,c.minX=Math.min(c.minX,y,v,m),c.minY=Math.min(c.minY,f,d,x),c.maxX=Math.max(c.maxX,y,v,m),c.maxY=Math.max(c.maxY,f,d,x))};for(let y=0;y<n.length;){const f=n[y++];if(f===cn){s=n[y++],i=n[y++],r=s,o=i,l=!0;continue}if(f===un){const v=n[y++],d=n[y++];g(s,i,v,d),s=v,i=d;continue}if(f===hn){const v=n[y++],d=n[y++],m=n[y++],x=n[y++],b=n[y++],_=n[y++];Xn(s,i,v,d,m,x,b,_,p,Ns,Us),s=b,i=_;continue}if(f===dn){const v=n[y++],d=n[y++],m=n[y++],x=n[y++];p(s,i,v,d,m,x),s=m,i=x;continue}if(f===fn){l&&(s!==r||i!==o)&&g(s,i,r,o),s=r,i=o;continue}break}return a===0?{segmentCount:0,bounds:{minX:0,minY:0,maxX:0,maxY:0}}:{segmentCount:a,bounds:c}}function Xn(n,t,e,a,s,i,r,o,l,c,g){const p=[n,t,e,a,s,i,r,o,0],y=c*c;for(;p.length>0;){const f=p.pop(),v=p.pop(),d=p.pop(),m=p.pop(),x=p.pop(),b=p.pop(),_=p.pop(),M=p.pop(),w=p.pop(),[A,L]=jo(w,M,_,b,x,m,d,v),G=Qo(w,M,_,b,x,m,d,v,A,L);if(f>=g||G<=y){l(w,M,A,L,d,v);continue}const P=(w+_)*.5,I=(M+b)*.5,V=(_+x)*.5,C=(b+m)*.5,F=(x+d)*.5,u=(m+v)*.5,B=(P+V)*.5,$=(I+C)*.5,N=(V+F)*.5,J=(C+u)*.5,X=(B+N)*.5,j=($+J)*.5,D=f+1;p.push(X,j,N,J,F,u,d,v,D),p.push(w,M,P,I,B,$,X,j,D)}}function jo(n,t,e,a,s,i,r,o){return[(3*(e+s)-n-r)*.25,(3*(a+i)-t-o)*.25]}function Qo(n,t,e,a,s,i,r,o,l,c){const g=[.25,.5,.75];let p=0;for(const y of g){const f=Ko(n,t,e,a,s,i,r,o,y),v=Jo(n,t,l,c,r,o,y),d=f[0]-v[0],m=f[1]-v[1],x=d*d+m*m;x>p&&(p=x)}return p}function Ko(n,t,e,a,s,i,r,o,l){const c=1-l,g=c*c,p=g*c,y=l*l,f=y*l,v=p*n+3*g*l*e+3*c*y*s+f*r,d=p*t+3*g*l*a+3*c*y*i+f*o;return[v,d]}function Jo(n,t,e,a,s,i,r){const o=1-r,l=o*o,c=r*r,g=l*n+2*o*r*e+c*s,p=l*t+2*o*r*a+c*i;return[g,p]}function tl(n,t,e){let a=n.matrix;return a=Bt(a,n.textMatrix),a=Bt(a,[1,0,0,1,n.textX,n.textY+n.textRise]),a=Bt(a,[n.textHScale*n.fontDirection,0,0,n.fontDirection>0?-1:1,0,0]),a=Bt(a,[1,0,0,1,t,e]),a=Bt(a,[n.fontSize,0,0,-n.fontSize,0,0]),a}function ge(n,t){if(!n&&!t)return null;if(!n&&t)return{...t};if(n&&!t)return{...n};const e=n,a=t;return{minX:Math.min(e.minX,a.minX),minY:Math.min(e.minY,a.minY),maxX:Math.max(e.maxX,a.maxX),maxY:Math.max(e.maxY,a.maxY)}}function Nr(n,t){return!(n.maxX<t.minX||n.minX>t.maxX||n.maxY<t.minY||n.minY>t.maxY)}function el(n,t,e,a,s){const i=n*a-t*e;return i*i/s}function Ct(n,t){return Math.round(n*t)}function Bt(n,t){return[n[0]*t[0]+n[2]*t[1],n[1]*t[0]+n[3]*t[1],n[0]*t[2]+n[2]*t[3],n[1]*t[2]+n[3]*t[3],n[0]*t[4]+n[2]*t[5]+n[4],n[1]*t[4]+n[3]*t[5]+n[5]]}function nl(n){const t=n[0],e=n[1],a=n[2],s=n[3],i=n[4],r=n[5],o=t*s-e*a;if(!Number.isFinite(o)||Math.abs(o)<=1e-12)return null;const l=1/o;return[s*l,-e*l,-a*l,t*l,(a*r-s*i)*l,(e*i-t*r)*l]}function rl(n){const t=Math.hypot(n[0],n[1]),e=Math.hypot(n[2],n[3]),a=(t+e)*.5;return Number.isFinite(a)&&a>0?a:1}function ht(n,t,e){return[n[0]*t+n[2]*e+n[4],n[1]*t+n[3]*e+n[5]]}function dt(n){return n<=0?0:n>=1?1:n}function il(n){if(n.length===0)return new Float32Array(0);if(n.length%4!==0)throw new Error(`Byte-shuffled float32 payload has invalid length (${n.length}).`);const t=n.length/4,e=new Uint8Array(n.length);for(let a=0;a<4;a+=1){const s=a*t;let i=a;for(let r=0;r<t;r+=1)e[i]=n[s+r],i+=4}return new Float32Array(e.buffer)}function al(n){if(n.length===0)return new Float32Array(0);if(n.length%4!==0)throw new Error(`XOR-delta byte-shuffled float32 payload has invalid length (${n.length}).`);const t=n.length/4,e=ll(n,t),a=new Uint32Array(e.buffer),s=new Uint32Array(t);let i=0;for(let r=0;r<t;r+=1){const o=a[r]^i;s[r]=o,i=o}return new Float32Array(s.buffer)}function sl(n){if(n.length===0)return new Uint8Array(0);if(n.length%4!==0)throw new Error(`Channel-major float32 source length must be divisible by 4 (${n.length}).`);const t=n.length/4,e=new Float32Array(n.length);for(let a=0;a<4;a+=1){const s=a*t;let i=a;for(let r=0;r<t;r+=1)e[s+r]=n[i],i+=4}return new Uint8Array(e.buffer)}function ol(n){if(n.length===0)return new Float32Array(0);if(n.length%16!==0)throw new Error(`Channel-major float32 payload has invalid length (${n.length}).`);const t=new Float32Array(n.buffer,n.byteOffset,n.byteLength/4),e=t.length/4,a=new Float32Array(t.length);for(let s=0;s<4;s+=1){const i=s*e;let r=s;for(let o=0;o<e;o+=1)a[r]=t[i+o],r+=4}return a}function ll(n,t){const e=new Uint8Array(n.length);for(let a=0;a<4;a+=1){const s=a*t;let i=a;for(let r=0;r<t;r+=1)e[i]=n[s+r],i+=4}return e}Ea.workerSrc=Fa;const ci=document.querySelector("#viewport"),ui=document.querySelector("#hud"),hi=document.querySelector("#toggle-hud"),di=document.querySelector("#toggle-hud-icon"),fi=document.querySelector("#open-file"),mi=document.querySelector("#example-select"),pi=document.querySelector("#download-data"),gi=document.querySelector("#file-input"),xi=document.querySelector("#status"),yi=document.querySelector("#parse-loader"),vi=document.querySelector("#runtime"),Ti=document.querySelector("#metrics"),Ci=document.querySelector("#metric-file"),bi=document.querySelector("#metric-operators"),Si=document.querySelector("#metric-source-segments"),Ai=document.querySelector("#metric-merged-segments"),wi=document.querySelector("#metric-visible-segments"),_i=document.querySelector("#metric-reductions"),Mi=document.querySelector("#metric-cull-discards"),Ei=document.querySelector("#metric-times"),Ii=document.querySelector("#metric-fps"),Pi=document.querySelector("#metric-texture"),Ri=document.querySelector("#metric-grid-max-cell"),Fi=document.querySelector("#drop-indicator"),Bi=document.querySelector("#toggle-pan-opt"),Li=document.querySelector("#toggle-segment-merge"),ki=document.querySelector("#toggle-invisible-cull"),Di=document.querySelector("#toggle-stroke-curves"),Oi=document.querySelector("#toggle-vector-text-only"),zi=document.querySelector("#toggle-webgpu"),Gi=document.querySelector("#max-pages-per-row"),Ni=document.querySelector("#page-bg-color"),Ui=document.querySelector("#page-bg-opacity-slider"),Xi=document.querySelector("#page-bg-opacity"),Vi=document.querySelector("#vector-color"),Wi=document.querySelector("#vector-opacity-slider"),Yi=document.querySelector("#vector-opacity");if(!ci||!ui||!hi||!di||!fi||!mi||!pi||!gi||!xi||!yi||!vi||!Ti||!Ci||!bi||!Si||!Ai||!wi||!_i||!Mi||!Ei||!Ii||!Pi||!Ri||!Fi||!Bi||!Li||!ki||!Di||!Oi||!zi||!Gi||!Ni||!Ui||!Xi||!Vi||!Wi||!Yi)throw new Error("Required UI elements are missing from index.html.");let $t=ci;const Hi=ui,Pn=hi,cl=di,ul=fi,bt=mi,en=pi,nn=gi,se=xi,hl=yi,Fe=vi,qi=Ti,$i=Ci,Zi=bi,ji=Si,Qi=Ai,Ki=wi,Ji=_i,ta=Mi,Vn=Ei,ea=Ii,na=Pi,ra=Ri,Ur=Fi,Rn=Bi,ia=Li,aa=ki,Fn=Di,Bn=Oi,Nt=zi,ve=Gi,sa=Ni,Ln=Ui,sn=Xi,oa=Vi,kn=Wi,on=Yi,la=gl();let rn="webgl",An=!1;function dl(n){Zl();const t=n.renderedSegments.toLocaleString(),e=n.totalSegments.toLocaleString(),a=n.usedCulling?"culled":"full";Fe.textContent=`Draw ${t}/${e} segments | mode: ${a} | zoom: ${n.zoom.toFixed(2)}x | backend: ${rn.toUpperCase()}`}function ca(n){n.resize(),n.setPanOptimizationEnabled(Rn.checked),n.setStrokeCurveEnabled(Fn.checked),n.setTextVectorOnly(Bn.checked);const t=ya();n.setPageBackgroundColor(t[0],t[1],t[2],t[3]);const e=va();n.setVectorColorOverride(e[0],e[1],e[2],e[3]),n.setFrameListener(dl)}function ua(n){const t=new as(n);return ca(t),t}async function fl(n){const t=await Gn.create(n);return ca(t),t}let gt=ua($t),zt="Waiting for PDF or parsed ZIP...",pt=null,Te=null,Be=null,Le=null,Ot=0,oe=!1,Zt=null;const ne=new Map,ml=/^[a-z][a-z\d+.-]*:/i,pl=new URL("./",window.location.href);function ln(n){const t=n.trim();if(ml.test(t))return t;const e=t.replace(/^\/+/,"");return new URL(e,pl).toString()}let wn=0,tn=0;xl();De();xa(!1);le(!1);ve.value=String(Hn());xt(zt);ue();Tl();ul.addEventListener("click",()=>{nn.click()});en.addEventListener("click",()=>{El()});Pn.addEventListener("click",()=>{const n=Hi.classList.contains("collapsed");xa(!n)});nn.addEventListener("change",async()=>{const[n]=Array.from(nn.files||[]);n&&(On(n)?await fa(n):da(n)?await ma(n):xt(`Unsupported file type: ${n.name}`),nn.value="")});bt.addEventListener("change",()=>{const n=bt.value;n&&Sl(n)});Rn.addEventListener("change",()=>{gt.setPanOptimizationEnabled(Rn.checked)});ia.addEventListener("change",()=>{pa()});aa.addEventListener("change",()=>{pa()});Fn.addEventListener("change",()=>{gt.setStrokeCurveEnabled(Fn.checked)});Bn.addEventListener("change",()=>{gt.setTextVectorOnly(Bn.checked)});sa.addEventListener("input",()=>{Qn()});Ln.addEventListener("input",()=>{const n=qn(Ln.value);Zn(n),Qn()});sn.addEventListener("input",()=>{const n=qn(sn.value);Zn(n),Qn()});oa.addEventListener("input",()=>{Kn()});kn.addEventListener("input",()=>{const n=$n(kn.value);jn(n),Kn()});on.addEventListener("input",()=>{const n=$n(on.value);jn(n),Kn()});ve.addEventListener("change",()=>{const n=Hn();ve.value=String(n),!(!pt||pt.kind!=="pdf")&&pn(ce(pt.bytes),pt.label,{preserveView:!1})});Nt.addEventListener("change",()=>{yl(Nt.checked)});let ee=!1,Vt=0,Wt=0;const Mt=new Map;let kt=null,Yt=!1,Gt=0,Ht=0,qt=0;function Dn(){ee=!1,Vt=0,Wt=0,Mt.clear(),kt=null,Yt=!1,Gt=0,Ht=0,qt=0}ha($t);window.addEventListener("resize",()=>{gt.resize()});function ha(n){function t(){Mt.clear(),kt=null,Yt=!1,Gt=0,Ht=0,qt=0}function e(o){ee&&gt.endPanInteraction(),t(),Dn()}function a(){if(Mt.size<2)return null;const o=Mt.values(),l=o.next().value,c=o.next().value;if(!l||!c)return null;const g=c.x-l.x,p=c.y-l.y;return{distance:Math.hypot(g,p),centerX:(l.x+c.x)*.5,centerY:(l.y+c.y)*.5}}function s(o){if(n.hasPointerCapture(o))try{n.releasePointerCapture(o)}catch{}}function i(o){if(!Mt.has(o.pointerId)||!ee)return;if(Mt.set(o.pointerId,{x:o.clientX,y:o.clientY}),Mt.size>=2){const g=a();if(!g)return;if(!Yt){Yt=!0,kt=null,Gt=Math.max(g.distance,.001),Ht=g.centerX,qt=g.centerY;return}const p=Math.max(Gt,.001),y=Math.max(g.distance,.001),f=y/p,v=g.centerX-Ht,d=g.centerY-qt;(v!==0||d!==0)&&gt.panByPixels(v,d),Number.isFinite(f)&&Math.abs(f-1)>1e-4&&gt.zoomAtClientPoint(g.centerX,g.centerY,f),Gt=y,Ht=g.centerX,qt=g.centerY;return}if(kt===null){kt=o.pointerId,Vt=o.clientX,Wt=o.clientY,Yt=!1,Gt=0;return}if(o.pointerId!==kt)return;const l=o.clientX-Vt,c=o.clientY-Wt;Vt=o.clientX,Wt=o.clientY,gt.panByPixels(l,c)}function r(o){if(Mt.delete(o.pointerId),s(o.pointerId),Mt.size>=2){const l=a();l&&(Yt=!0,kt=null,Gt=Math.max(l.distance,.001),Ht=l.centerX,qt=l.centerY);return}if(Mt.size===1){const l=Mt.entries().next().value;l?(kt=l[0],Vt=l[1].x,Wt=l[1].y):kt=null,Yt=!1,Gt=0,Ht=0,qt=0;return}e()}n.addEventListener("pointerdown",o=>{if(ee||(ee=!0,gt.beginPanInteraction()),o.pointerType==="touch")if(Mt.set(o.pointerId,{x:o.clientX,y:o.clientY}),Mt.size===1)kt=o.pointerId,Yt=!1,Gt=0,Ht=o.clientX,qt=o.clientY,Vt=o.clientX,Wt=o.clientY;else{const l=a();l&&(Yt=!0,kt=null,Gt=Math.max(l.distance,.001),Ht=l.centerX,qt=l.centerY)}else Vt=o.clientX,Wt=o.clientY;n.setPointerCapture(o.pointerId)}),n.addEventListener("pointermove",o=>{if(o.pointerType==="touch"){i(o);return}if(!ee)return;const l=o.clientX-Vt,c=o.clientY-Wt;Vt=o.clientX,Wt=o.clientY,gt.panByPixels(l,c)}),n.addEventListener("pointerup",o=>{if(o.pointerType==="touch"){r(o);return}e(),s(o.pointerId)}),n.addEventListener("pointercancel",o=>{if(o.pointerType==="touch"){r(o);return}e(),s(o.pointerId)}),n.addEventListener("lostpointercapture",o=>{if(o.pointerType==="touch"){Mt.has(o.pointerId)&&Mt.delete(o.pointerId),Mt.size===0&&e();return}ee&&e()}),n.addEventListener("wheel",o=>{o.preventDefault();const l=Math.exp(-o.deltaY*.0013);gt.zoomAtClientPoint(o.clientX,o.clientY,l)},{passive:!1})}window.addEventListener("dragenter",n=>{n.preventDefault(),oe=!0,ue()});window.addEventListener("dragover",n=>{n.preventDefault(),oe||(oe=!0,ue())});window.addEventListener("dragleave",n=>{(n.target===document.documentElement||n.target===document.body)&&(oe=!1,ue())});window.addEventListener("drop",async n=>{n.preventDefault(),oe=!1,ue();const e=Array.from(n.dataTransfer?.files||[]).find(a=>On(a)||da(a));if(!e){xt("Dropped file is not a supported PDF or parsed zip.");return}On(e)?await fa(e):await ma(e)});function gl(){return typeof navigator.gpu<"u"}function ue(){const n=oe||!Te;Ur.classList.toggle("active",n),Ur.classList.toggle("dragging",oe)}function xl(){if(!la){Nt.checked=!1,Nt.disabled=!0,Nt.title="WebGPU is not available in this browser/GPU.";return}Nt.disabled=!1,Nt.title="Experimental WebGPU backend."}async function yl(n){const t=n?"webgpu":"webgl";if(t===rn||An)return;if(t==="webgpu"&&!la){Nt.checked=!1,xt("WebGPU is not supported in this browser/GPU. Using WebGL.");return}An=!0;const e=gt,a=e.getViewState(),s=Te,i=Le,r=$t,o=vl(r);xt(`Switching renderer backend to ${t.toUpperCase()}...`);try{if(r.replaceWith(o),$t=o,ha($t),gt=t==="webgpu"?await fl($t):ua($t),rn=t,Nt.checked=t==="webgpu",Dn(),e.setFrameListener(null),e.dispose(),s&&i){const c=gt.setScene(s);Be=c,gt.setViewState(a),Jn(i,s,c,0,0),Vn.textContent="parse -, upload - (backend switch)";const g=pt?.kind==="parsed-zip"?" | source: parsed data zip":"";zt=`${Yn(i,s)}${g}`,se.textContent=t==="webgpu"?`${zt} | backend: WebGPU (preview)`:`${zt} | backend: WebGL`}else gt.setViewState(a),xt(`Switched to ${t.toUpperCase()} backend.`)}catch(l){$t===o&&(o.replaceWith(r),$t=r,Dn());const c=l instanceof Error?l.message:String(l);Nt.checked=rn==="webgpu",xt(`Failed to switch backend: ${c}`)}finally{An=!1}}function vl(n){const t=n.cloneNode(!1);return t.width=n.width,t.height=n.height,t}async function Tl(){ne.clear(),bt.innerHTML="",bt.append(new Option("Examples (loading...)","")),bt.value="",bt.disabled=!0;try{const n=ln("examples/manifest.json"),t=await fetch(n,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const e=await t.json(),a=Cl(e);if(a.length===0)throw new Error("Manifest does not contain valid examples.");bl(a)}catch(n){const t=n instanceof Error?n.message:String(n);console.warn(`[Examples] Failed to load manifest: ${t}`),bt.innerHTML="",bt.append(new Option("Examples unavailable","")),bt.value="",bt.disabled=!0}}function Cl(n){const t=Array.isArray(n.examples)?n.examples:[],e=[];for(let a=0;a<t.length;a+=1){const s=t[a],i=ie(s?.name);if(!i)continue;const r=ie(s?.id)??`example-${a+1}`,o=ie(s?.pdf?.path),l=ie(s?.parsedZip?.path),c=o?ln(o):null,g=l?ln(l):null;!c||!g||e.push({id:r,name:i,pdfPath:c,pdfSizeBytes:ut(s?.pdf?.sizeBytes,0),zipPath:g,zipSizeBytes:ut(s?.parsedZip?.sizeBytes,0)})}return e}function bl(n){ne.clear(),bt.innerHTML="",bt.append(new Option("Load example...",""));for(const t of n){const e=document.createElement("optgroup");e.label=t.name;const a=`${t.id}:pdf`,s=`${t.id}:zip`,i=`Parse PDF (${Ie(t.pdfSizeBytes)} kB)`,r=`Load Parsed ZIP (${Ie(t.zipSizeBytes)} kB)`;ne.set(a,{id:t.id,sourceName:t.name,kind:"pdf",path:t.pdfPath}),ne.set(s,{id:t.id,sourceName:t.name,kind:"zip",path:t.zipPath}),e.append(new Option(i,a)),e.append(new Option(r,s)),bt.append(e)}bt.value="",bt.disabled=ne.size===0}async function Sl(n){const t=ne.get(n);if(!t){bt.value="";return}bt.disabled=!0;try{const e=t.kind==="pdf"?"PDF":"parsed ZIP";xt(`Loading example ${t.sourceName} (${e})...`);const a=await fetch(t.path,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);const s=await a.arrayBuffer(),i=tr(s);if(Zt=null,t.kind==="pdf")pt={kind:"pdf",bytes:i,label:t.sourceName},await pn(ce(i),t.sourceName,{preserveView:!1,autoMaxPagesPerRow:!0});else{const r=`${t.sourceName} (parsed zip)`;pt={kind:"parsed-zip",bytes:i,label:r},await ga(ce(i),r,{preserveView:!1})}}catch(e){const a=e instanceof Error?e.message:String(e);xt(`Failed to load example: ${a}`)}finally{bt.value="",bt.disabled=ne.size===0}}function On(n){const t=n.name.toLowerCase();return n.type==="application/pdf"||t.endsWith(".pdf")}function da(n){return n.name.toLowerCase().endsWith(".zip")||n.type==="application/zip"||n.type==="application/x-zip-compressed"}async function fa(n){xt(`Reading ${n.name}...`);const t=await n.arrayBuffer(),e=tr(t);pt={kind:"pdf",bytes:e,label:n.name},Zt=null,await pn(ce(e),n.name,{preserveView:!1,autoMaxPagesPerRow:!0})}async function ma(n){xt(`Reading ${n.name}...`);const t=await n.arrayBuffer(),e=tr(t);pt={kind:"parsed-zip",bytes:e,label:n.name},Zt=null,await ga(ce(e),n.name,{preserveView:!1})}async function pn(n,t,e={}){const a=++Ot,s=Al(),i=wl(s),r=_l(t,i);try{let o,l=0,c=Hn();if(r){e.autoMaxPagesPerRow&&(c=$r(r.length),ve.value=String(c));const d=performance.now();re(!1),xt(`Rearranging ${t}... (pages/row ${c}, using cached parsed pages)`),o=Pr(r,c),l=performance.now()-d,console.log(`[Page grid] ${t}: recomposed ${r.length.toLocaleString()} cached page scenes at ${c.toLocaleString()} pages/row in ${l.toFixed(1)} ms`)}else{const d=performance.now();re(!0),xt(`Parsing ${t} with PDF.js... (merge ${s.enableSegmentMerge?"on":"off"}, cull ${s.enableInvisibleCull?"on":"off"})`);const m=await oo(n,s);if(l=performance.now()-d,a===Ot&&re(!1),a!==Ot)return;e.autoMaxPagesPerRow&&(c=$r(m.length),ve.value=String(c)),o=Pr(m,c),Ml(t,i,m),console.log(`[Page grid] ${t}: parsed ${m.length.toLocaleString()} pages in ${l.toFixed(1)} ms, arranged ${c.toLocaleString()}/row`)}if(a!==Ot)return;const g=Oe(o).length,p=g>0;if(o.segmentCount===0&&o.textInstanceCount===0&&o.fillPathCount===0&&!p){xt(`No visible geometry was extracted from ${t}.`),Fe.textContent="",De(t),le(!1);return}xt(`Uploading ${o.segmentCount.toLocaleString()} segments, ${o.textInstanceCount.toLocaleString()} text instances${p?`, ${g.toLocaleString()} raster layer${g===1?"":"s"}`:""} to GPU...`);const y=performance.now(),f=gt.setScene(o);e.preserveView||gt.fitToBounds(o.bounds,64);const v=performance.now();if(a!==Ot)return;ba(t,o),Sa(t,o),Aa(t,o),Ta(t,o,f),Te=o,Be=f,Le=t,ue(),le(!0),Jn(t,o,f,l,v-y),zt=Yn(t,o),se.textContent=zt}catch(o){if(a!==Ot)return;re(!1);const l=o instanceof Error?o.message:String(o);xt(`Failed to render PDF: ${l}`),Fe.textContent="",De(t)}}async function pa(){!pt||pt.kind!=="pdf"||await pn(ce(pt.bytes),pt.label,{preserveView:!0})}async function ga(n,t,e={}){const a=++Ot;try{const s=performance.now();re(!0),xt(`Loading parsed data from ${t}...`);const i=await Pl(n),r=performance.now();if(a===Ot&&re(!1),a!==Ot)return;const o=Oe(i).length,l=o>0;if(i.segmentCount===0&&i.textInstanceCount===0&&i.fillPathCount===0&&!l){xt(`No visible geometry was found in ${t}.`),Fe.textContent="",De(t),le(!1);return}xt(`Uploading ${i.segmentCount.toLocaleString()} segments, ${i.textInstanceCount.toLocaleString()} text instances${l?`, ${o.toLocaleString()} raster layer${o===1?"":"s"}`:""} to GPU...`);const c=performance.now(),g=gt.setScene(i);e.preserveView||gt.fitToBounds(i.bounds,64);const p=performance.now();if(a!==Ot)return;ba(t,i),Sa(t,i),Aa(t,i),Ta(t,i,g),Te=i,Be=g,Le=t,ue(),le(!0),Jn(t,i,g,r-s,p-c),zt=`${Yn(t,i)} | source: parsed data zip`,se.textContent=zt}catch(s){if(a!==Ot)return;re(!1);const i=s instanceof Error?s.message:String(s);xt(`Failed to load parsed data zip: ${i}`),Fe.textContent="",De(t)}}function Al(){return{enableSegmentMerge:ia.checked,enableInvisibleCull:aa.checked}}function wl(n){const t=n.enableSegmentMerge!==!1,e=n.enableInvisibleCull!==!1;return`merge:${t?1:0}|cull:${e?1:0}`}function _l(n,t){return!pt||pt.kind!=="pdf"||!Zt||Zt.sourceBytes!==pt.bytes||Zt.sourceLabel!==n||Zt.optionsKey!==t?null:Zt.pageScenes}function Ml(n,t,e){!pt||pt.kind!=="pdf"||(Zt={sourceBytes:pt.bytes,sourceLabel:n,optionsKey:t,pageScenes:e})}function Oe(n){const t=[];if(Array.isArray(n.rasterLayers))for(const s of n.rasterLayers){const i=Math.max(0,Math.trunc(s?.width??0)),r=Math.max(0,Math.trunc(s?.height??0));if(i<=0||r<=0||!(s.data instanceof Uint8Array)||s.data.length<i*r*4)continue;const o=s.matrix instanceof Float32Array?s.matrix:new Float32Array(s.matrix);t.push({width:i,height:r,data:s.data,matrix:o})}if(t.length>0)return t;const e=Math.max(0,Math.trunc(n.rasterLayerWidth)),a=Math.max(0,Math.trunc(n.rasterLayerHeight));return e<=0||a<=0||n.rasterLayerData.length<e*a*4||t.push({width:e,height:a,data:n.rasterLayerData,matrix:n.rasterLayerMatrix}),t}function Wn(n){const t=Oe(n);if(t.length===0)return"";if(t.length===1)return`${t[0].width}x${t[0].height}`;const a=t.reduce((s,i)=>s+i.width*i.height,0)/1e6;return`${t.length.toLocaleString()} layers (${a.toFixed(1)} MP total)`}function Yn(n,t){const e=t.pageCount>1?`${t.pageCount.toLocaleString()} pages (${t.pagesPerRow.toLocaleString()}/row) | `:"",a=t.fillPathCount.toLocaleString(),s=t.sourceSegmentCount.toLocaleString(),i=t.segmentCount.toLocaleString(),r=t.textInstanceCount.toLocaleString(),o=Wn(t),l=o?`, raster ${o}`:"";return`${n} loaded | ${e}fills ${a}, ${i} visible from ${s} source segments, ${r} text instances${l}`}function xt(n){zt=n,se.textContent=zt}function re(n){hl.hidden=!n}function le(n,t=!1){en.hidden=!n,en.disabled=!n||t,en.textContent=t?"Preparing ZIP...":"Download Parsed Data"}function xa(n){Hi.classList.toggle("collapsed",n),Pn.setAttribute("aria-expanded",String(!n)),Pn.title=n?"Expand panel":"Collapse panel",cl.textContent=n?"▸":"▾"}function Hn(){const n=Math.trunc(Number(ve.value));return Number.isFinite(n)?Ce(n,1,100):10}function ya(){const n=sa.value||"#ffffff",t=/^#([0-9a-fA-F]{6})$/.exec(n),e=qn(sn.value);Zn(e);const a=e/100;if(!t)return[1,1,1,a];const s=Number.parseInt(t[1],16);if(!Number.isFinite(s))return[1,1,1,a];const i=(s>>16&255)/255,r=(s>>8&255)/255,o=(s&255)/255;return[i,r,o,a]}function qn(n){const t=Math.trunc(Number(n));return Number.isFinite(t)?Ce(t,0,100):100}function va(){const n=oa.value||"#000000",t=/^#([0-9a-fA-F]{6})$/.exec(n),e=$n(on.value);jn(e);const a=e/100;if(!t)return[0,0,0,a];const s=Number.parseInt(t[1],16);if(!Number.isFinite(s))return[0,0,0,a];const i=(s>>16&255)/255,r=(s>>8&255)/255,o=(s&255)/255;return[i,r,o,a]}function $n(n){const t=Math.trunc(Number(n));return Number.isFinite(t)?Ce(t,0,100):0}function Zn(n){const t=Ce(Math.trunc(n),0,100);sn.value=String(t),Ln.value=String(t)}function jn(n){const t=Ce(Math.trunc(n),0,100);on.value=String(t),kn.value=String(t)}function Qn(){const n=ya();gt.setPageBackgroundColor(n[0],n[1],n[2],n[3])}function Kn(){const n=va();gt.setVectorColorOverride(n[0],n[1],n[2],n[3])}async function El(){if(!Te||!Be||!Le){xt("No parsed floorplan data available to export.");return}const n=Te,t=Be,e=Le;let a=pt?.kind==="pdf"?pt.bytes:null;n.imagePaintOpCount<=0&&(a=null),!a&&pt?.kind==="parsed-zip"&&(a=await Vl(pt.bytes));const s=se.textContent;le(!0,!0),se.textContent="Preparing parsed texture data zip...";try{const i=await Xr(n,t,e,a,"interleaved"),r=await Xr(n,t,e,a,"channel-major"),o=r.byteLength<i.byteLength?r:i,l=`${ql(e)}-parsed-data.zip`;$l(o.blob,l),console.log(`[Parsed data export] ${e}: wrote ${o.textureCount.toLocaleString()} vector textures + ${o.rasterLayerCount.toLocaleString()} raster layers to ${l} using ${o.layout} layout (${Ie(o.byteLength)} kB, interleaved ${Ie(i.byteLength)} kB, channel-major ${Ie(r.byteLength)} kB)`),se.textContent=s||zt}catch(i){const r=i instanceof Error?i.message:String(i);xt(`Failed to download parsed data: ${r}`)}finally{le(!0,!1)}}async function Xr(n,t,e,a,s){const i=new zn,r=Il(n,t,s),o=!!a&&a.length>0&&n.imagePaintOpCount>0,l=Oe(n),c=o&&l.length===0,g=c?[]:l,p=g[0]??null,y=c?"source/source.pdf":void 0;for(const m of r){const x=m.layout==="channel-major"?sl(m.data):new Uint8Array(m.data.buffer,m.data.byteOffset,m.data.byteLength);i.file(m.filePath,x)}y&&a&&i.file(y,a);const f=[];for(let m=0;m<g.length;m+=1){const x=g[m],b=x.width*x.height*4,_=x.data.subarray(0,b);let M=`raster/layer-${m}.rgba`,w="rgba",A=_;const L=await Nl(x.width,x.height,_);L&&(M=`raster/layer-${m}.${L.extension}`,w=L.encoding,A=L.bytes),i.file(M,A,w==="rgba"?void 0:{compression:"STORE"}),f.push({width:x.width,height:x.height,matrix:Array.from(x.matrix),file:M,encoding:w})}const v={formatVersion:3,sourceFile:e,sourcePdfFile:y,sourcePdfSizeBytes:c?a?.length??0:0,generatedAt:new Date().toISOString(),scene:{bounds:n.bounds,pageBounds:n.pageBounds,pageRects:Array.from(n.pageRects),pageCount:n.pageCount,pagesPerRow:n.pagesPerRow,maxHalfWidth:n.maxHalfWidth,operatorCount:n.operatorCount,imagePaintOpCount:n.imagePaintOpCount,pathCount:n.pathCount,sourceSegmentCount:n.sourceSegmentCount,mergedSegmentCount:n.mergedSegmentCount,segmentCount:n.segmentCount,fillPathCount:n.fillPathCount,fillSegmentCount:n.fillSegmentCount,textInstanceCount:n.textInstanceCount,textGlyphCount:n.textGlyphCount,textGlyphPrimitiveCount:n.textGlyphSegmentCount,rasterLayers:f,rasterLayerWidth:p?.width??0,rasterLayerHeight:p?.height??0,rasterLayerMatrix:p?Array.from(p.matrix):void 0,rasterLayerFile:f[0]?.file},textures:r.map(m=>({name:m.name,file:m.filePath,width:m.width,height:m.height,channels:4,componentType:"float32",layout:m.layout,byteShuffle:!1,predictor:"none",logicalItemCount:m.logicalItemCount,logicalFloatCount:m.logicalFloatCount,paddedFloatCount:m.data.length}))};i.file("manifest.json",JSON.stringify(v,null,2));const d=await i.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:9}});return{blob:d,byteLength:d.size,textureCount:r.length,rasterLayerCount:g.length,layout:s}}function Il(n,t,e){return[_t("fill-path-meta-a",n.fillPathMetaA,t.fillPathTextureWidth,t.fillPathTextureHeight,n.fillPathCount,e),_t("fill-path-meta-b",n.fillPathMetaB,t.fillPathTextureWidth,t.fillPathTextureHeight,n.fillPathCount,e),_t("fill-path-meta-c",n.fillPathMetaC,t.fillPathTextureWidth,t.fillPathTextureHeight,n.fillPathCount,e),_t("fill-primitives-a",n.fillSegmentsA,t.fillSegmentTextureWidth,t.fillSegmentTextureHeight,n.fillSegmentCount,e),_t("fill-primitives-b",n.fillSegmentsB,t.fillSegmentTextureWidth,t.fillSegmentTextureHeight,n.fillSegmentCount,e),_t("stroke-primitives-a",n.endpoints,t.textureWidth,t.textureHeight,n.segmentCount,e),_t("stroke-primitives-b",n.primitiveMeta,t.textureWidth,t.textureHeight,n.segmentCount,e),_t("stroke-styles",n.styles,t.textureWidth,t.textureHeight,n.segmentCount,e),_t("stroke-primitive-bounds",n.primitiveBounds,t.textureWidth,t.textureHeight,n.segmentCount,e),_t("text-instance-a",n.textInstanceA,t.textInstanceTextureWidth,t.textInstanceTextureHeight,n.textInstanceCount,e),_t("text-instance-b",n.textInstanceB,t.textInstanceTextureWidth,t.textInstanceTextureHeight,n.textInstanceCount,e),_t("text-instance-c",n.textInstanceC,t.textInstanceTextureWidth,t.textInstanceTextureHeight,n.textInstanceCount,e),_t("text-glyph-meta-a",n.textGlyphMetaA,t.textGlyphTextureWidth,t.textGlyphTextureHeight,n.textGlyphCount,e),_t("text-glyph-meta-b",n.textGlyphMetaB,t.textGlyphTextureWidth,t.textGlyphTextureHeight,n.textGlyphCount,e),_t("text-glyph-primitives-a",n.textGlyphSegmentsA,t.textSegmentTextureWidth,t.textSegmentTextureHeight,n.textGlyphSegmentCount,e),_t("text-glyph-primitives-b",n.textGlyphSegmentsB,t.textSegmentTextureWidth,t.textSegmentTextureHeight,n.textGlyphSegmentCount,e)]}async function Pl(n){const t=await zn.loadAsync(n),e=t.file("manifest.json");if(!e)throw new Error("Parsed data zip is missing manifest.json.");const a=await e.async("string");let s;try{s=JSON.parse(a)}catch(rt){const nt=rt instanceof Error?rt.message:String(rt);throw new Error(`Invalid manifest.json: ${nt}`)}const i=typeof s.scene=="object"&&s.scene?s.scene:{},r=Array.isArray(s.textures)?s.textures:[],o=new Map;for(const rt of r){const nt=typeof rt.name=="string"?rt.name:null;nt&&o.set(nt,rt)}const l=async(rt,nt)=>{for(const mt of rt){const St=o.get(mt);if(!St)continue;const Pt=typeof St.layout=="string"&&St.layout==="channel-major"?".f32cm":St.byteShuffle===!0?".f32bs":".f32",Xt=typeof St.file=="string"?St.file:`textures/${mt}${Pt}`,ft=t.file(Xt);if(!ft)continue;const he=await ft.async("arraybuffer"),Jt=Hl(he,St,mt),Ft=ut(St.logicalFloatCount,Jt.length);if(Ft>Jt.length)throw new Error(`Texture ${mt} logical float count exceeds file length.`);const ze=ut(St.logicalItemCount,Math.floor(Ft/4));return{data:Jt.slice(0,Ft),logicalItemCount:ze}}return null},c=await l(["fill-path-meta-a"]),g=await l(["fill-path-meta-b"]),p=await l(["fill-path-meta-c"]),y=await l(["fill-primitives-a","fill-segments"]),f=await l(["fill-primitives-b"]),v=await l(["stroke-primitives-a","stroke-endpoints"]),d=await l(["stroke-primitives-b"]),m=await l(["stroke-styles"]),x=await l(["stroke-primitive-bounds"]),b=await l(["text-instance-a"]),_=await l(["text-instance-b"]),M=await l(["text-instance-c"]),w=await l(["text-glyph-meta-a"]),A=await l(["text-glyph-meta-b"]),L=await l(["text-glyph-primitives-a"]),G=await l(["text-glyph-primitives-b"]),P=ut(i.fillPathCount,c?.logicalItemCount??0),I=ut(i.fillSegmentCount,y?.logicalItemCount??0),V=ut(i.segmentCount,m?.logicalItemCount??v?.logicalItemCount??0),C=ut(i.textInstanceCount,b?.logicalItemCount??0),F=ut(i.textGlyphCount,w?.logicalItemCount??0),u=ut(i.textGlyphPrimitiveCount,ut(i.textGlyphSegmentCount,L?.logicalItemCount??0));if(V>0&&(!v||!m))throw new Error("Parsed data zip is missing stroke geometry textures.");const B=wt(c?.data??new Float32Array(0),P,"fill-path-meta-a"),$=wt(g?.data??new Float32Array(0),P,"fill-path-meta-b"),N=wt(p?.data??new Float32Array(0),P,"fill-path-meta-c"),J=wt(y?.data??new Float32Array(0),I,"fill-primitives-a"),X=f?wt(f.data,I,"fill-primitives-b"):Vr(J,I),j=wt(v?.data??new Float32Array(0),V,"stroke-primitives-a"),D=wt(m?.data??new Float32Array(0),V,"stroke-styles"),k=d?wt(d.data,V,"stroke-primitives-b"):Vr(j,V),et=x?wt(x.data,V,"stroke-primitive-bounds"):Ll(j,k,V),Z=wt(b?.data??new Float32Array(0),C,"text-instance-a"),Q=wt(_?.data??new Float32Array(0),C,"text-instance-b"),ot=M?wt(M.data,C,"text-instance-c"):Rl(Q,C),ct=wt(w?.data??new Float32Array(0),F,"text-glyph-meta-a"),it=wt(A?.data??new Float32Array(0),F,"text-glyph-meta-b"),at=wt(L?.data??new Float32Array(0),u,"text-glyph-primitives-a"),st=wt(G?.data??new Float32Array(0),u,"text-glyph-primitives-b");Fl(k,D,V),Bl($,N,P);const lt=ut(i.sourceSegmentCount,V),Tt=ut(i.mergedSegmentCount,V),yt=ut(i.sourceTextCount,C),h=ut(i.textInPageCount,C),H=ut(i.textOutOfPageCount,Math.max(0,yt-h)),O=Math.max(1,ut(i.pageCount,1)),T=Math.max(1,ut(i.pagesPerRow,1));let S=await Wl(t,i);if(S.length===0){const rt=await Gl(t,s);if(rt)try{const nt=await co(ce(rt),{maxPages:O,maxPagesPerRow:T});S=Oe(nt),S.length>0&&console.log(`[Parsed data load] Restored ${S.length.toLocaleString()} raster layer(s) from embedded source PDF.`)}catch(nt){const mt=nt instanceof Error?nt.message:String(nt);console.warn(`[Parsed data load] Failed to restore raster layers from source PDF: ${mt}`)}}const E=S[0]??null,U=Ee(i.maxHalfWidth,Number.NaN)||Yl(D,V),q=Wr(i.bounds),R=Wr(i.pageBounds),z=Ol(kl(et,V),Dl(B,$,P))??{minX:0,minY:0,maxX:1,maxY:1},W=q??z,K=R??W;return{pageRects:zl(i.pageRects,K),fillPathCount:P,fillSegmentCount:I,fillPathMetaA:B,fillPathMetaB:$,fillPathMetaC:N,fillSegmentsA:J,fillSegmentsB:X,segmentCount:V,sourceSegmentCount:lt,mergedSegmentCount:Tt,sourceTextCount:yt,textInstanceCount:C,textGlyphCount:F,textGlyphSegmentCount:u,textInPageCount:h,textOutOfPageCount:H,textInstanceA:Z,textInstanceB:Q,textInstanceC:ot,textGlyphMetaA:ct,textGlyphMetaB:it,textGlyphSegmentsA:at,textGlyphSegmentsB:st,rasterLayers:S,rasterLayerWidth:E?.width??0,rasterLayerHeight:E?.height??0,rasterLayerData:E?.data??new Uint8Array(0),rasterLayerMatrix:E?.matrix??new Float32Array([1,0,0,1,0,0]),endpoints:j,primitiveMeta:k,primitiveBounds:et,styles:D,bounds:W,pageBounds:K,pageCount:O,pagesPerRow:T,maxHalfWidth:U,imagePaintOpCount:ut(i.imagePaintOpCount,0),operatorCount:ut(i.operatorCount,0),pathCount:ut(i.pathCount,0),discardedTransparentCount:ut(i.discardedTransparentCount,0),discardedDegenerateCount:ut(i.discardedDegenerateCount,0),discardedDuplicateCount:ut(i.discardedDuplicateCount,0),discardedContainedCount:ut(i.discardedContainedCount,0)}}function wt(n,t,e){const a=t*4;if(a===0)return new Float32Array(0);if(n.length<a)throw new Error(`Texture ${e} has insufficient data (${n.length} < ${a}).`);return n.length===a?n:n.slice(0,a)}function Vr(n,t){const e=new Float32Array(t*4);for(let a=0;a<t;a+=1){const s=a*4;e[s]=n[s+2],e[s+1]=n[s+3],e[s+2]=0,e[s+3]=0}return e}function Rl(n,t){const e=new Float32Array(t*4);for(let a=0;a<t;a+=1){const s=a*4,i=ke(n[s+3]);e[s]=i,e[s+1]=i,e[s+2]=i,e[s+3]=1}return e}function ke(n){return!Number.isFinite(n)||n<0?0:n>1?1:n}function Fl(n,t,e){if(e<=0)return;let a=!1;for(let s=0;s<e;s+=1)if(Math.abs(n[s*4+3])>1e-6){a=!0;break}if(!a)for(let s=0;s<e;s+=1){const i=s*4,r=ke(t[i+1]),o=ke(t[i+2]),l=t[i+3]>=.5?1:0;t[i+1]=r,t[i+2]=r,t[i+3]=r,n[i+3]=o+l*2}}function Bl(n,t,e){if(e<=0)return;let a=!1;for(let s=0;s<e;s+=1)if(Math.abs(t[s*4+3])>1e-6){a=!0;break}if(!a)for(let s=0;s<e;s+=1){const i=s*4,r=ke(n[i+2]),o=ke(n[i+3]);n[i+2]=r,n[i+3]=r,t[i+2]=r,t[i+3]=o}}function Ll(n,t,e){const a=new Float32Array(e*4);for(let s=0;s<e;s+=1){const i=s*4,r=n[i],o=n[i+1],l=n[i+2],c=n[i+3],g=t[i],p=t[i+1];a[i]=Math.min(r,l,g),a[i+1]=Math.min(o,c,p),a[i+2]=Math.max(r,l,g),a[i+3]=Math.max(o,c,p)}return a}function kl(n,t){if(t<=0||n.length<t*4)return null;let e=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,i=Number.NEGATIVE_INFINITY;for(let r=0;r<t;r+=1){const o=r*4;e=Math.min(e,n[o]),a=Math.min(a,n[o+1]),s=Math.max(s,n[o+2]),i=Math.max(i,n[o+3])}return{minX:e,minY:a,maxX:s,maxY:i}}function Dl(n,t,e){if(e<=0||n.length<e*4||t.length<e*4)return null;let a=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,r=Number.NEGATIVE_INFINITY;for(let o=0;o<e;o+=1){const l=o*4;a=Math.min(a,n[l+2]),s=Math.min(s,n[l+3]),i=Math.max(i,t[l]),r=Math.max(r,t[l+1])}return{minX:a,minY:s,maxX:i,maxY:r}}function Ol(n,t){return!n&&!t?null:n?t?{minX:Math.min(n.minX,t.minX),minY:Math.min(n.minY,t.minY),maxX:Math.max(n.maxX,t.maxX),maxY:Math.max(n.maxY,t.maxY)}:{...n}:t?{...t}:null}function Wr(n){if(!n||typeof n!="object")return null;const t=n,e=Ee(t.minX,Number.NaN),a=Ee(t.minY,Number.NaN),s=Ee(t.maxX,Number.NaN),i=Ee(t.maxY,Number.NaN);return[e,a,s,i].every(Number.isFinite)?{minX:e,minY:a,maxX:s,maxY:i}:null}function zl(n,t){if(Array.isArray(n)){const e=Math.floor(n.length/4);if(e>0){const a=new Float32Array(e*4);let s=0;for(let i=0;i<e;i+=1){const r=i*4,o=Number(n[r]),l=Number(n[r+1]),c=Number(n[r+2]),g=Number(n[r+3]);[o,l,c,g].every(Number.isFinite)&&(a[s]=o,a[s+1]=l,a[s+2]=c,a[s+3]=g,s+=4)}if(s>0)return a.slice(0,s)}}return new Float32Array([t.minX,t.minY,t.maxX,t.maxY])}function Yr(n){if(!Array.isArray(n)||n.length<6)return null;const t=new Float32Array(6);for(let e=0;e<6;e+=1){const a=Number(n[e]);if(!Number.isFinite(a))return null;t[e]=a}return t}async function Gl(n,t){const e=ie(t.sourcePdfFile),a=ie(t.sourcePdfUrl),s=[e,"source/source.pdf","source.pdf"];for(const i of s){if(!i)continue;const r=n.file(i);if(!r)continue;const o=await r.async("arraybuffer");if(!(o.byteLength<=0))return new Uint8Array(o)}if(a)try{const i=await fetch(ln(a));if(i.ok){const r=await i.arrayBuffer();if(r.byteLength>0)return new Uint8Array(r)}}catch{}return null}async function Nl(n,t,e){const[a,s]=await Promise.all([Hr(n,t,e,"image/webp"),Hr(n,t,e,"image/png")]);return!a&&!s?null:a&&!s?{bytes:a,encoding:"webp",extension:"webp"}:s&&!a?{bytes:s,encoding:"png",extension:"png"}:!a||!s?null:a.byteLength<s.byteLength?{bytes:a,encoding:"webp",extension:"webp"}:{bytes:s,encoding:"png",extension:"png"}}async function Hr(n,t,e,a){if(typeof document>"u")return null;const s=n*t*4;if(n<=0||t<=0||e.length<s)return null;const i=document.createElement("canvas");i.width=n,i.height=t;const r=i.getContext("2d",{alpha:!0});if(!r)return i.width=0,i.height=0,null;const o=new Uint8ClampedArray(s);o.set(e.subarray(0,s));const l=new ImageData(o,n,t);r.putImageData(l,0,0);const c=await new Promise(p=>{i.toBlob(p,a)});if(i.width=0,i.height=0,!c)return null;const g=await c.arrayBuffer();return new Uint8Array(g)}function Ul(n){const t=n.toLowerCase();return t.endsWith(".png")?"image/png":t.endsWith(".webp")?"image/webp":t.endsWith(".jpg")||t.endsWith(".jpeg")?"image/jpeg":null}async function Xl(n,t){if(typeof document>"u")return null;const e=Ul(n);if(!e)return null;const a=new Uint8Array(t.length);a.set(t);const s=new Blob([a],{type:e}),i=await createImageBitmap(s);try{const r=i.width,o=i.height;if(r<=0||o<=0)return null;const l=document.createElement("canvas");l.width=r,l.height=o;const c=l.getContext("2d",{alpha:!0,willReadFrequently:!0});if(!c)return l.width=0,l.height=0,null;c.drawImage(i,0,0);const g=c.getImageData(0,0,r,o),p=new Uint8Array(g.data);return l.width=0,l.height=0,{width:r,height:o,data:p}}finally{i.close()}}async function Vl(n){try{const t=await zn.loadAsync(n),e=t.file("manifest.json");let a=null;if(e){const i=await e.async("string");try{const r=JSON.parse(i);a=ie(r.sourcePdfFile)}catch{a=null}}const s=[a,"source/source.pdf","source.pdf"];for(const i of s){if(!i)continue;const r=t.file(i);if(!r)continue;const o=await r.async("arraybuffer");if(!(o.byteLength<=0))return new Uint8Array(o)}}catch{}return null}async function Wl(n,t){const e=[],a=Array.isArray(t.rasterLayers)?t.rasterLayers:[];for(let c=0;c<a.length;c+=1){const g=a[c];if(!g||typeof g!="object")continue;const p=g,y=ut(p.width,0),f=ut(p.height,0),v=typeof p.file=="string"?p.file:`raster/layer-${c}.rgba`,d=Yr(p.matrix)??new Float32Array([1,0,0,1,0,0]),m=await qr(n,v,y,f);!m||m.width<=0||m.height<=0||m.data.length<m.width*m.height*4||e.push({width:m.width,height:m.height,matrix:d,data:m.data})}if(e.length>0)return e;const s=ut(t.rasterLayerWidth,0),i=ut(t.rasterLayerHeight,0),r=Yr(t.rasterLayerMatrix)??new Float32Array([1,0,0,1,0,0]),o=n.file("raster/layer-0.webp")?"raster/layer-0.webp":n.file("raster/layer-0.png")?"raster/layer-0.png":n.file("raster/layer-0.rgba")?"raster/layer-0.rgba":n.file("raster/layer.webp")?"raster/layer.webp":n.file("raster/layer.png")?"raster/layer.png":"raster/layer.rgba",l=await qr(n,typeof t.rasterLayerFile=="string"?t.rasterLayerFile:o,s,i);return l&&l.width>0&&l.height>0&&l.data.length>=l.width*l.height*4&&e.push({width:l.width,height:l.height,data:l.data,matrix:r}),e}async function qr(n,t,e,a){const s=n.file(t);if(!s)return null;const i=await s.async("arraybuffer"),r=new Uint8Array(i),o=await Xl(t,r);if(o)return o;if(e<=0||a<=0)return null;const l=e*a*4;if(r.length<l)throw new Error(`Raster layer data is truncated (${r.length} < ${l}).`);return{width:e,height:a,data:r.length===l?r:r.slice(0,l)}}function Yl(n,t){let e=0;for(let a=0;a<t;a+=1)e=Math.max(e,n[a*4]);return e}function Ee(n,t){const e=Number(n);return Number.isFinite(e)?e:t}function ut(n,t){const e=Number(n);return Number.isFinite(e)?Math.max(0,Math.trunc(e)):Math.max(0,Math.trunc(t))}function ie(n){if(typeof n!="string")return null;const t=n.trim();return t.length>0?t:null}function Ie(n){return(Math.max(0,Number(n)||0)/1024).toFixed(1)}function _t(n,t,e,a,s,i){const r=s*4;if(t.length<r)throw new Error(`Texture ${n} has insufficient data (${t.length} < ${r}).`);return{name:n,filePath:`textures/${n}${i==="channel-major"?".f32cm":".f32"}`,width:e,height:a,logicalItemCount:s,logicalFloatCount:r,data:t.slice(0,r),layout:i}}function Hl(n,t,e){const a=typeof t.componentType=="string"?t.componentType:"float32";if(a!=="float32")throw new Error(`Texture ${e} has unsupported componentType ${String(a)}.`);const s=typeof t.layout=="string"?t.layout:"interleaved";if(s!=="interleaved"&&s!=="channel-major")throw new Error(`Texture ${e} has unsupported layout ${String(s)}.`);if(s==="channel-major")return ol(new Uint8Array(n));const i=t.byteShuffle===!0,r=typeof t.predictor=="string"?t.predictor:"none";if(r!=="none"&&r!=="xor-delta-u32")throw new Error(`Texture ${e} has unsupported predictor ${String(r)}.`);if(i)return r==="xor-delta-u32"?al(new Uint8Array(n)):il(new Uint8Array(n));if(r!=="none")throw new Error(`Texture ${e} declares predictor ${r} without byteShuffle.`);if(n.byteLength%4!==0)throw new Error(`Texture ${e} has invalid byte length (${n.byteLength}).`);return new Float32Array(n)}function ql(n){const e=n.replace(/\.pdf$/i,"").trim().replace(/[^a-zA-Z0-9._-]+/g,"_");return e.length>0?e:"floorplan"}function $l(n,t){const e=URL.createObjectURL(n),a=document.createElement("a");a.href=e,a.download=t,a.style.display="none",document.body.append(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(e),0)}function De(n="-"){$i.textContent=n,Zi.textContent="-",ji.textContent="-",Qi.textContent="-",Ki.textContent="-",Ji.textContent="-",ta.textContent="-",Vn.textContent="-",ea.textContent="-",na.textContent="-",ra.textContent="-",qi.dataset.ready="false"}function Jn(n,t,e,a,s){const i=t.sourceSegmentCount,r=t.mergedSegmentCount,o=t.segmentCount,l=t.fillPathCount,c=i>0?(1-r/i)*100:0,g=r>0?(1-o/r)*100:0,p=i>0?(1-o/i)*100:0,y=Ca(e.textureWidth,e.textureHeight,e.maxTextureSize),f=Wn(t);$i.textContent=n,Zi.textContent=t.operatorCount.toLocaleString(),ji.textContent=i.toLocaleString(),Qi.textContent=`${r.toLocaleString()} (${Me(c)} reduction)`,Ki.textContent=`${o.toLocaleString()} (${Me(p)} total reduction), fills ${l.toLocaleString()}, text ${t.textInstanceCount.toLocaleString()} instances, pages ${t.pageCount.toLocaleString()} (${t.pagesPerRow.toLocaleString()}/row)`,Ji.textContent=`merge ${Me(c)}, invisible-cull ${Me(g)}, total ${Me(p)}`,ta.textContent=`transparent ${t.discardedTransparentCount.toLocaleString()}, degenerate ${t.discardedDegenerateCount.toLocaleString()}, duplicates ${t.discardedDuplicateCount.toLocaleString()}, contained ${t.discardedContainedCount.toLocaleString()}, glyphs ${t.textGlyphCount.toLocaleString()} / glyph segments ${t.textGlyphSegmentCount.toLocaleString()}`,Vn.textContent=`parse ${a.toFixed(0)} ms, upload ${s.toFixed(0)} ms`,na.textContent=`fill paths ${e.fillPathTextureWidth}x${e.fillPathTextureHeight}, fill seg ${e.fillSegmentTextureWidth}x${e.fillSegmentTextureHeight}, segments ${e.textureWidth}x${e.textureHeight} (${y.toFixed(1)}% of max area ${e.maxTextureSize}x${e.maxTextureSize}), text inst ${e.textInstanceTextureWidth}x${e.textInstanceTextureHeight}, glyph ${e.textGlyphTextureWidth}x${e.textGlyphTextureHeight}, glyph-seg ${e.textSegmentTextureWidth}x${e.textSegmentTextureHeight}${f?`, raster ${f}`:""}`,ra.textContent=e.maxCellPopulation.toLocaleString(),qi.dataset.ready="true"}function Me(n){return`${Math.max(0,n).toFixed(1)}%`}function Zl(){const n=performance.now();if(wn>0){const t=n-wn;if(t>0){const e=1e3/t;tn=tn===0?e:tn*.85+e*.15,ea.textContent=`${tn.toFixed(0)} FPS`}}wn=n}function Ta(n,t,e){const a=Ca(e.textureWidth,e.textureHeight,e.maxTextureSize),s=Wn(t);console.log(`[GPU texture size] ${n}: fills=${e.fillPathTextureWidth}x${e.fillPathTextureHeight} (paths=${t.fillPathCount.toLocaleString()}), fill-segments=${e.fillSegmentTextureWidth}x${e.fillSegmentTextureHeight} (count=${t.fillSegmentCount.toLocaleString()}), segments=${e.textureWidth}x${e.textureHeight} (count=${t.segmentCount.toLocaleString()}, max=${e.maxTextureSize}, util=${a.toFixed(1)}%), text instances=${e.textInstanceTextureWidth}x${e.textInstanceTextureHeight} (count=${t.textInstanceCount.toLocaleString()}), glyphs=${e.textGlyphTextureWidth}x${e.textGlyphTextureHeight} (count=${t.textGlyphCount.toLocaleString()}), glyph-segments=${e.textSegmentTextureWidth}x${e.textSegmentTextureHeight} (count=${t.textGlyphSegmentCount.toLocaleString()})${s?`, raster=${s}`:""}`)}function Ca(n,t,e){const a=Math.max(1,Math.floor(n)),s=Math.max(1,Math.floor(t)),i=Math.max(1,Math.floor(e)),r=a*s,o=i*i;return r/o*100}function ba(n,t){if(t.sourceSegmentCount<=0)return;const e=t.mergedSegmentCount,a=t.sourceSegmentCount,s=a>0?(1-e/a)*100:0;console.log(`[Segment merge] ${n}: ${e.toLocaleString()} merged / ${a.toLocaleString()} source (${s.toFixed(1)}% reduction)`)}function Sa(n,t){if(t.mergedSegmentCount<=0)return;const e=t.segmentCount,a=t.mergedSegmentCount,s=a>0?(1-e/a)*100:0;console.log(`[Invisible cull] ${n}: ${e.toLocaleString()} visible / ${a.toLocaleString()} merged (${s.toFixed(1)}% reduction, transparent=${t.discardedTransparentCount.toLocaleString()}, degenerate=${t.discardedDegenerateCount.toLocaleString()}, duplicates=${t.discardedDuplicateCount.toLocaleString()}, contained=${t.discardedContainedCount.toLocaleString()})`)}function Aa(n,t){console.log(`[Text vectors] ${n}: instances=${t.textInstanceCount.toLocaleString()}, sourceText=${t.sourceTextCount.toLocaleString()}, glyphs=${t.textGlyphCount.toLocaleString()}, glyphSegments=${t.textGlyphSegmentCount.toLocaleString()}, inPage=${t.textInPageCount.toLocaleString()}, outOfPage=${t.textOutOfPageCount.toLocaleString()}, fillPaths=${t.fillPathCount.toLocaleString()}, fillSegments=${t.fillSegmentCount.toLocaleString()}`)}function tr(n){return new Uint8Array(n).slice()}function ce(n){return n.slice().buffer}function Ce(n,t,e){return n<t?t:n>e?e:n}function $r(n){const t=Math.max(1,Math.trunc(n));return Ce(Math.ceil(Math.sqrt(t)),1,100)}
