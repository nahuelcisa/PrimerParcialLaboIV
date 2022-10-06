"use strict";(self.webpackChunkprimerParcialLaboIV=self.webpackChunkprimerParcialLaboIV||[]).push([[107],{5107:($n,_e,w)=>{w.r(_e),w.d(_e,{RepartidorModule:()=>Hn});var N=w(9808),ge=w(1022),g=w(2382),n=w(1223),J=w(7e3),ee=w(5861),M=w(9681),G=w(2090),Ge=w(4859);const me="firebasestorage.googleapis.com";class h extends G.ZR{constructor(t,r){super(te(t),`Firebase Storage: ${r} (${te(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}_codeEquals(t){return te(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.message=this.customData.serverResponse?`${this._baseMessage}\n${this.customData.serverResponse}`:this._baseMessage}}function te(e){return"storage/"+e}function re(e){return new h("invalid-argument",e)}function ye(){return new h("app-deleted","The Firebase app was deleted.")}class R{constructor(t,r){this.bucket=t,this.path_=r}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,r){let o;try{o=R.makeFromUrl(t,r)}catch(s){return new R(t,"")}if(""===o.path)return o;throw function ot(e){return new h("invalid-default-bucket","Invalid default bucket '"+e+"'.")}(t)}static makeFromUrl(t,r){let o=null;const s="([A-Za-z0-9.\\-_]+)",u=new RegExp("^gs://"+s+"(/(.*))?$","i");function c(m){m.path_=decodeURIComponent(m.path)}const p=r.replace(/[.]/g,"\\."),T=[{regex:u,indices:{bucket:1,path:3},postModify:function i(m){"/"===m.path.charAt(m.path.length-1)&&(m.path_=m.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${p}/v[A-Za-z0-9_]+/b/${s}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:c},{regex:new RegExp(`^https?://${r===me?"(?:storage.googleapis.com|storage.cloud.google.com)":r}/${s}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:c}];for(let m=0;m<T.length;m++){const D=T[m],L=D.regex.exec(t);if(L){let X=L[D.indices.path];X||(X=""),o=new R(L[D.indices.bucket],X),D.postModify(o);break}}if(null==o)throw function rt(e){return new h("invalid-url","Invalid URL '"+e+"'.")}(t);return o}}class ut{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}function se(e,t,r,o){if(o<t)throw re(`Invalid value for '${e}'. Expected ${t} or greater.`);if(o>r)throw re(`Invalid value for '${e}'. Expected ${r} or less.`)}var E=(()=>{return(e=E||(E={}))[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT",E;var e})();class _t{constructor(t,r,o,s,i,a,u,l,c,d,p){this.url_=t,this.method_=r,this.headers_=o,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=u,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,k)=>{this.resolve_=_,this.reject_=k,this.start_()})}start_(){const r=(o,s)=>{const i=this.resolve_,a=this.reject_,u=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(u,u.getResponse());!function pt(e){return void 0!==e}(l)?i():i(l)}catch(l){a(l)}else if(null!==u){const l=function ne(){return new h("unknown","An unknown error occurred, please check the error payload for server response.")}();l.serverResponse=u.getErrorText(),a(this.errorCallback_?this.errorCallback_(u,l):l)}else a(s.canceled?this.appDelete_?ye():function Te(){return new h("canceled","User canceled the upload/download.")}():function nt(){return new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}())};this.canceled_?r(0,new W(!1,null,!0)):this.backoffId_=function ct(e,t,r){let o=1,s=null,i=null,a=!1,u=0;function l(){return 2===u}let c=!1;function d(...f){c||(c=!0,t.apply(null,f))}function p(f){s=setTimeout(()=>{s=null,e(k,l())},f)}function _(){i&&clearTimeout(i)}function k(f,...I){if(c)return void _();if(f)return _(),void d.call(null,f,...I);if(l()||a)return _(),void d.call(null,f,...I);let T;o<64&&(o*=2),1===u?(u=2,T=0):T=1e3*(o+Math.random()),p(T)}let b=!1;function v(f){b||(b=!0,_(),!c&&(null!==s?(f||(u=2),clearTimeout(s),p(0)):f||(u=1)))}return p(0),i=setTimeout(()=>{a=!0,v(!0)},r),v}((o,s)=>{if(s)return void o(!1,new W(!1,null,!0));const i=this.connectionFactory_();this.pendingConnection_=i;const a=u=>{null!==this.progressCallback_&&this.progressCallback_(u.loaded,u.lengthComputable?u.total:-1)};null!==this.progressCallback_&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const u=i.getErrorCode()===E.NO_ERROR,l=i.getStatus();if(!u||this.isRetryStatusCode_(l)){const d=i.getErrorCode()===E.ABORT;return void o(!1,new W(!1,null,d))}const c=-1!==this.successCodes_.indexOf(l);o(!0,new W(c,i))})},r,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&function dt(e){e(!1)}(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const r=t>=500&&t<600,s=-1!==[408,429].indexOf(t),i=-1!==this.additionalRetryCodes_.indexOf(t);return r||s||i}}class W{constructor(t,r,o){this.wasSuccessCode=t,this.connection=r,this.canceled=!!o}}class O{constructor(t,r){this._service=t,this._location=r instanceof R?r:R.makeFromUrl(r,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,r){return new O(t,r)}get root(){const t=new R(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return function xe(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}(this._location.path)}get storage(){return this._service}get parent(){const t=function qt(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===t)return null;const r=new R(this._location.bucket,t);return new O(this._service,r)}_throwIfRoot(t){if(""===this._location.path)throw function lt(e){return new h("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(t)}}function $e(e,t){const r=null==t?void 0:t.storageBucket;return null==r?null:R.makeFromBucketSpec(r,e)}class pe{constructor(t,r,o,s,i){this.app=t,this._authProvider=r,this._appCheckProvider=o,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=me,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=s?R.makeFromBucketSpec(s,this._host):$e(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._bucket=null!=this._url?R.makeFromBucketSpec(this._url,t):$e(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){se("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){se("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}_getAuthToken(){var t=this;return(0,ee.Z)(function*(){if(t._overrideAuthToken)return t._overrideAuthToken;const r=t._authProvider.getImmediate({optional:!0});if(r){const o=yield r.getToken();if(null!==o)return o.accessToken}return null})()}_getAppCheckToken(){var t=this;return(0,ee.Z)(function*(){const r=t._appCheckProvider.getImmediate({optional:!0});return r?(yield r.getToken()).token:null})()}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new O(this,t)}_makeRequest(t,r,o,s){if(this._deleted)return new ut(ye());{const i=function Rt(e,t,r,o,s,i){const a=function ke(e){const t=encodeURIComponent;let r="?";for(const o in e)e.hasOwnProperty(o)&&(r=r+(t(o)+"=")+t(e[o])+"&");return r=r.slice(0,-1),r}(e.urlParams),u=e.url+a,l=Object.assign({},e.headers);return function bt(e,t){t&&(e["X-Firebase-GMPID"]=t)}(l,t),function gt(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(l,r),function mt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(l,i),function Tt(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(l,o),new _t(u,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s)}(t,this._appId,o,s,r,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}makeRequestWithTokens(t,r){var o=this;return(0,ee.Z)(function*(){const[s,i]=yield Promise.all([o._getAuthToken(),o._getAppCheckToken()]);return o._makeRequest(t,r,s,i).getPromise()})()}}const je="@firebase/storage",Xe="storage";function mn(e,{instanceIdentifier:t}){const r=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new pe(r,o,s,t,M.Jn)}!function bn(){(0,M.Xd)(new Ge.wA(Xe,mn,"PUBLIC").setMultipleInstances(!0)),(0,M.KN)(je,"0.9.10",""),(0,M.KN)(je,"0.9.10","esm2017")}();let Je=(()=>{class e{constructor(r){this.FireStore=r,this.storage=function _n(e=(0,M.Mq)(),t){e=(0,G.m9)(e);const o=(0,M.qX)(e,Xe).getImmediate({identifier:t}),s=(0,G.q4)("storage");if(s){const[i,a]=s.split(":");!function gn(e,t,r,o={}){!function fn(e,t,r,o={}){e.host=`${t}:${r}`,e._protocol="http";const{mockUserToken:s}=o;s&&(e._overrideAuthToken="string"==typeof s?s:(0,G.Sg)(s,e.app.options.projectId))}(e,t,r,o)}(o,i,parseInt(a,10))}return o}(),this.repartidorCollectionReference=(0,J.hJ)(this.FireStore,"repartidores")}AltaRepartidores(r){return(0,J.ET)(this.repartidorCollectionReference,r)}ListaRepartidores(){return(0,J.BS)(this.repartidorCollectionReference,{idField:"id"})}}return e.\u0275fac=function(r){return new(r||e)(n.LFG(J.gg))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Tn=w(5830);function Rn(e,t){if(1&e){const r=n.EpF();n.TgZ(0,"div"),n.TgZ(1,"div",4),n.TgZ(2,"ul",5),n.TgZ(3,"li",6),n.TgZ(4,"div"),n.TgZ(5,"p"),n._uU(6),n.qZA(),n._UZ(7,"img",7),n.qZA(),n.TgZ(8,"div",8),n.TgZ(9,"button",9),n.NdJ("click",function(){const i=n.CHM(r).$implicit;return n.oxw().cargarNacionalidad(i)}),n._uU(10,"Seleccionar"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()}if(2&e){const r=t.$implicit;n.xp6(6),n.Oqu(r.name),n.xp6(1),n.s9C("src",r.flag,n.LSH)}}let yn=(()=>{class e{constructor(r){this.api=r,this.paisEvent=new n.vpe,this.paises=[],this.cargarTabla()}ngOnInit(){}cargarNacionalidad(r){this.paisEvent.emit(r)}cargarTabla(){this.api.traerPaises().subscribe(r=>{this.paises=r})}}return e.\u0275fac=function(r){return new(r||e)(n.Y36(Tn.s))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-tabla-paises"]],outputs:{paisEvent:"paisEvent"},decls:4,vars:1,consts:[[1,"container"],[1,"row"],[1,"col-12","col-xxl-10"],[4,"ngFor","ngForOf"],[1,"mb-2"],[1,"list-group","mb-3"],[1,"list-group-item","d-flex","justify-content-between","lh-condensed"],["width","150px","height","100px",3,"src"],[2,"margin","auto"],[1,"mt-2","btn","btn-dark",3,"click"]],template:function(r,o){1&r&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.YNc(3,Rn,11,2,"div",3),n.qZA(),n.qZA(),n.qZA()),2&r&&(n.xp6(3),n.Q6J("ngForOf",o.paises))},directives:[N.sg],styles:[""]}),e})();function Cn(e,t){1&e&&(n.TgZ(0,"small",24),n._uU(1,"El dni es requerido"),n.qZA())}function kn(e,t){1&e&&(n.TgZ(0,"small",24),n._uU(1,"El dni debe tener 8 digitos"),n.qZA())}function wn(e,t){1&e&&(n.TgZ(0,"small",24),n._uU(1,"El nombre es requerido"),n.qZA())}function vn(e,t){1&e&&(n.TgZ(0,"small",24),n._uU(1,"La edad es requerida"),n.qZA())}function An(e,t){1&e&&(n.TgZ(0,"small",24),n._uU(1,"Debe estar entre 18 y 80"),n.qZA())}function Zn(e,t){1&e&&(n.TgZ(0,"small",24),n._uU(1,"La capacidad es requerida"),n.qZA())}function xn(e,t){1&e&&(n.TgZ(0,"small",24),n._uU(1,"La capacidad minima debe ser por lo menos 1"),n.qZA())}function qn(e,t){1&e&&(n.TgZ(0,"small",24),n._uU(1,"El pais es requerido"),n.qZA())}function Un(e,t){if(1&e&&n._UZ(0,"img",25),2&e){const r=n.oxw();n.Q6J("src",r.bandera,n.LSH)}}let Sn=(()=>{class e{constructor(r,o){this.fb=r,this.fs=o,this.nombre="",this.dni=0,this.edad=0,this.capacidadTransporte=0,this.pais="",this.unidadPropia=!1,this.agregado="",this.bandera=""}ngOnInit(){this.grupoControles=this.fb.group({nombre:["",g.kI.required],dni:["",[g.kI.required,g.kI.min(1e7),g.kI.max(99999999)]],edad:["",[g.kI.required,g.kI.min(18),g.kI.max(80)]],capacidadTransporte:["",[g.kI.required,g.kI.min(1)]],pais:["",g.kI.required],unidadPropia:[!1]})}recibirPais(r){var o;this.pais=r.name,null===(o=this.grupoControles.get("pais"))||void 0===o||o.setValue(r.name),this.bandera=r.flag}cargarRepartidor(){var r,o,s,i,a,u;let l={nombre:null===(r=this.grupoControles.get("pais"))||void 0===r?void 0:r.value,bandera:this.bandera},c={dni:null===(o=this.grupoControles.get("dni"))||void 0===o?void 0:o.value,nombre:null===(s=this.grupoControles.get("nombre"))||void 0===s?void 0:s.value,edad:null===(i=this.grupoControles.get("edad"))||void 0===i?void 0:i.value,capacidadTransporte:null===(a=this.grupoControles.get("capacidadTransporte"))||void 0===a?void 0:a.value,pais:l,unidadPropia:null===(u=this.grupoControles.get("unidadPropia"))||void 0===u?void 0:u.value};this.fs.AltaRepartidores(c).then(d=>{this.agregado="Se agrego el repartidor",setTimeout(()=>{this.agregado="",this.grupoControles.reset(),this.bandera="",this.pais=""},3e3)}).catch(d=>{this.agregado="No se pudo agregar el repartidor",setTimeout(()=>{this.agregado=""},3e3)})}}return e.\u0275fac=function(r){return new(r||e)(n.Y36(g.qu),n.Y36(Je))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-alta-repartidor"]],decls:50,vars:12,consts:[[1,"container"],[1,"mt-5","row"],[1,"col-md-4","order-md-2","mb-4"],[3,"paisEvent"],[1,"col-md-8","order-md-1"],[1,"mb-3"],[1,"needs-validation",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-6","mb-3"],["for","firstName"],["type","text","formControlName","dni","placeholder","Ingrese el dni",1,"form-control"],["class","invalid",4,"ngIf"],["type","text","formControlName","nombre","placeholder","Ingrese el nombre",1,"form-control"],["type","text","formControlName","edad","placeholder","Ingrese la edad",1,"form-control"],["type","text","formControlName","capacidadTransporte","placeholder","Ingrese el capacidad de transporte",1,"form-control"],["type","text","formControlName","pais","placeholder","Ingrese el pais",1,"form-control"],["width","50px","height","30px","style","float: right; margin-top: 36px; margin-bottom: auto;",3,"src",4,"ngIf"],[1,"col-md-12","mb-5"],[1,"form-check"],["type","checkbox","formControlName","unidadPropia",1,"form-check-input"],[1,"form-check-label"],[1,"mb-4"],["type","submit",1,"mb-5","btn","btn-dark","btn-lg","btn-block",3,"disabled"],[1,"success"],[1,"invalid"],["width","50px","height","30px",2,"float","right","margin-top","36px","margin-bottom","auto",3,"src"]],template:function(r,o){if(1&r&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"h4"),n._uU(4,"Paises"),n.qZA(),n.TgZ(5,"app-tabla-paises",3),n.NdJ("paisEvent",function(i){return o.recibirPais(i)}),n.qZA(),n.qZA(),n.TgZ(6,"div",4),n.TgZ(7,"h4",5),n._uU(8,"Repartidor"),n.qZA(),n.TgZ(9,"form",6),n.NdJ("ngSubmit",function(){return o.cargarRepartidor()}),n.TgZ(10,"div",7),n.TgZ(11,"div",8),n.TgZ(12,"label",9),n._uU(13,"DNI"),n.qZA(),n._UZ(14,"input",10),n.YNc(15,Cn,2,0,"small",11),n.YNc(16,kn,2,0,"small",11),n.qZA(),n.TgZ(17,"div",8),n.TgZ(18,"label",9),n._uU(19,"Nombre"),n.qZA(),n._UZ(20,"input",12),n.YNc(21,wn,2,0,"small",11),n.qZA(),n.TgZ(22,"div",8),n.TgZ(23,"label",9),n._uU(24,"Edad"),n.qZA(),n._UZ(25,"input",13),n.YNc(26,vn,2,0,"small",11),n.YNc(27,An,2,0,"small",11),n.qZA(),n.TgZ(28,"div",8),n.TgZ(29,"label",9),n._uU(30,"Capacidad Transporte"),n.qZA(),n._UZ(31,"input",14),n.YNc(32,Zn,2,0,"small",11),n.YNc(33,xn,2,0,"small",11),n.qZA(),n.TgZ(34,"div",8),n.TgZ(35,"label",9),n._uU(36,"Pais Origen"),n.qZA(),n._UZ(37,"input",15),n.YNc(38,qn,2,0,"small",11),n.qZA(),n.YNc(39,Un,1,1,"img",16),n.TgZ(40,"div",17),n.TgZ(41,"div",18),n._UZ(42,"input",19),n.TgZ(43,"label",20),n._uU(44," Tiene unidad propia "),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n._UZ(45,"hr",21),n.TgZ(46,"button",22),n._uU(47,"Agregar repartidor"),n.qZA(),n.TgZ(48,"small",23),n._uU(49),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&r){let s,i,a,u,l,c,d,p;n.xp6(9),n.Q6J("formGroup",o.grupoControles),n.xp6(6),n.Q6J("ngIf",(null==(s=o.grupoControles.get("dni"))||null==s.errors?null:s.errors.required)&&(null==(s=o.grupoControles.get("dni"))?null:s.touched)),n.xp6(1),n.Q6J("ngIf",(null==(i=o.grupoControles.get("dni"))||null==i.errors?null:i.errors.min)||(null==(i=o.grupoControles.get("dni"))||null==i.errors?null:i.errors.max)),n.xp6(5),n.Q6J("ngIf",(null==(a=o.grupoControles.get("nombre"))||null==a.errors?null:a.errors.required)&&(null==(a=o.grupoControles.get("nombre"))?null:a.touched)),n.xp6(5),n.Q6J("ngIf",(null==(u=o.grupoControles.get("edad"))||null==u.errors?null:u.errors.required)&&(null==(u=o.grupoControles.get("edad"))?null:u.touched)),n.xp6(1),n.Q6J("ngIf",(null==(l=o.grupoControles.get("edad"))||null==l.errors?null:l.errors.min)||(null==(l=o.grupoControles.get("edad"))||null==l.errors?null:l.errors.max)),n.xp6(5),n.Q6J("ngIf",(null==(c=o.grupoControles.get("capacidadTransporte"))||null==c.errors?null:c.errors.required)&&(null==(c=o.grupoControles.get("capacidadTransporte"))?null:c.touched)),n.xp6(1),n.Q6J("ngIf",null==(d=o.grupoControles.get("capacidadTransporte"))||null==d.errors?null:d.errors.min),n.xp6(5),n.Q6J("ngIf",(null==(p=o.grupoControles.get("pais"))||null==p.errors?null:p.errors.required)&&(null==(p=o.grupoControles.get("pais"))?null:p.touched)),n.xp6(1),n.Q6J("ngIf",""!=o.pais),n.xp6(7),n.Q6J("disabled",o.grupoControles.invalid),n.xp6(3),n.Oqu(o.agregado)}},directives:[yn,g._Y,g.JL,g.sg,g.Fj,g.JJ,g.u,N.O5,g.Wl],styles:[""]}),e})();function In(e,t){if(1&e){const r=n.EpF();n.TgZ(0,"tr"),n.TgZ(1,"td"),n._uU(2),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.qZA(),n.TgZ(5,"td"),n._uU(6),n.qZA(),n.TgZ(7,"td"),n._uU(8),n.qZA(),n.TgZ(9,"td"),n._uU(10),n.qZA(),n.TgZ(11,"td"),n._UZ(12,"img",3),n.qZA(),n.TgZ(13,"td"),n.TgZ(14,"button",4),n.NdJ("click",function(){const i=n.CHM(r).$implicit;return n.oxw().enviarRepartidor(i)}),n._uU(15,"Seleccionar"),n.qZA(),n.qZA(),n.qZA()}if(2&e){const r=t.$implicit;n.xp6(2),n.Oqu(r.dni),n.xp6(2),n.Oqu(r.nombre),n.xp6(2),n.Oqu(r.edad),n.xp6(2),n.Oqu(r.capacidadTransporte),n.xp6(2),n.Oqu(r.unidadPropia),n.xp6(2),n.s9C("src",r.pais.bandera,n.LSH)}}let Pn=(()=>{class e{constructor(r){this.fs=r,this.repartidorEvent=new n.vpe,this.repartidores="",this.fs.ListaRepartidores().subscribe(o=>{this.repartidores=o})}ngOnInit(){}enviarRepartidor(r){this.repartidorEvent.emit(r)}}return e.\u0275fac=function(r){return new(r||e)(n.Y36(Je))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-listado-repartidores"]],outputs:{repartidorEvent:"repartidorEvent"},decls:17,vars:1,consts:[[1,"table","table-striped","table-dark"],["scope","col"],[4,"ngFor","ngForOf"],["width","100px","height","70px",2,"cursor","pointer",3,"src"],[1,"mt-2","btn","btn-outline-light",3,"click"]],template:function(r,o){1&r&&(n.TgZ(0,"table",0),n.TgZ(1,"thead"),n.TgZ(2,"tr"),n.TgZ(3,"th",1),n._uU(4,"DNI"),n.qZA(),n.TgZ(5,"th",1),n._uU(6,"Nombre"),n.qZA(),n.TgZ(7,"th",1),n._uU(8,"Edad"),n.qZA(),n.TgZ(9,"th",1),n._uU(10,"Capacidad de transporte"),n.qZA(),n.TgZ(11,"th",1),n._uU(12,"Unidad Propia"),n.qZA(),n.TgZ(13,"th",1),n._uU(14,"Pais de origen"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(15,"tbody"),n.YNc(16,In,16,6,"tr",2),n.qZA(),n.qZA()),2&r&&(n.xp6(16),n.Q6J("ngForOf",o.repartidores))},directives:[N.sg],styles:[""]}),e})();function En(e,t){1&e&&(n.TgZ(0,"p"),n._uU(1,"Seleccione un repartidor para ver sus detalles"),n.qZA())}function On(e,t){if(1&e&&(n.TgZ(0,"div"),n.TgZ(1,"p"),n._uU(2),n.qZA(),n.TgZ(3,"p"),n._uU(4),n.qZA(),n.TgZ(5,"p"),n._uU(6),n.qZA(),n.TgZ(7,"p"),n._uU(8),n.qZA(),n.TgZ(9,"p"),n._uU(10),n.qZA(),n._UZ(11,"img",1),n.qZA()),2&e){const r=n.oxw();n.xp6(2),n.hij("DNI: ",r.repartidor.dni,""),n.xp6(2),n.hij("Nombre: ",r.repartidor.nombre,""),n.xp6(2),n.hij("Edad: ",r.repartidor.edad,""),n.xp6(2),n.hij("Capacidad de transporte: ",r.repartidor.capacidadTransporte,""),n.xp6(2),n.hij("Unidad propia: ",r.repartidor.unidadPropia,""),n.xp6(1),n.s9C("src",r.repartidor.pais.bandera,n.LSH)}}let Nn=(()=>{class e{constructor(){this.repartidor=""}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-detalles-repartidor"]],inputs:{repartidor:"repartidor"},decls:3,vars:2,consts:[[4,"ngIf"],["width","100px","height","70px",3,"src"]],template:function(r,o){1&r&&(n.TgZ(0,"div"),n.YNc(1,En,2,0,"p",0),n.YNc(2,On,12,6,"div",0),n.qZA()),2&r&&(n.xp6(1),n.Q6J("ngIf",""==o.repartidor),n.xp6(1),n.Q6J("ngIf",""!=o.repartidor))},directives:[N.O5],styles:[""]}),e})();function Mn(e,t){1&e&&(n.TgZ(0,"p"),n._uU(1,"Seleccione un repartidor para ver los detalles su pais"),n.qZA())}function Bn(e,t){if(1&e&&(n.TgZ(0,"div"),n.TgZ(1,"p"),n._uU(2),n.qZA(),n._UZ(3,"img",1),n.qZA()),2&e){const r=n.oxw();n.xp6(2),n.Oqu(r.repartidor.pais.nombre),n.xp6(1),n.s9C("src",r.repartidor.pais.bandera,n.LSH)}}let Fn=(()=>{class e{constructor(){this.repartidor=""}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-detalle-pais"]],inputs:{repartidor:"repartidor"},decls:3,vars:2,consts:[[4,"ngIf"],["width","100px","height","70px",3,"src"]],template:function(r,o){1&r&&(n.TgZ(0,"div"),n.YNc(1,Mn,2,0,"p",0),n.YNc(2,Bn,4,2,"div",0),n.qZA()),2&r&&(n.xp6(1),n.Q6J("ngIf",""==o.repartidor),n.xp6(1),n.Q6J("ngIf",""!=o.repartidor))},directives:[N.O5],styles:[""]}),e})();const Dn=[{path:"altaRepartidor",component:Sn},{path:"repartidorDetalle",component:(()=>{class e{constructor(){this.repartidor=""}ngOnInit(){}recibirRepartidor(r){this.repartidor=r}limpiar(){this.repartidor=""}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-repartidor-detalle"]],decls:21,vars:2,consts:[["role","main"],[1,"jumbotron"],[1,"container"],[1,"display-3"],[3,"repartidorEvent"],[1,"row"],[1,"col-md-6"],[3,"repartidor"],[1,"mt-2","btn","btn-dark",3,"click"]],template:function(r,o){1&r&&(n.TgZ(0,"main",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"h1",3),n._uU(4,"Repartidores"),n.qZA(),n.TgZ(5,"app-listado-repartidores",4),n.NdJ("repartidorEvent",function(i){return o.recibirRepartidor(i)}),n.qZA(),n.qZA(),n.qZA(),n.TgZ(6,"div",2),n.TgZ(7,"div",5),n.TgZ(8,"div",6),n.TgZ(9,"h2"),n._uU(10,"Detalle repartidor"),n.qZA(),n._UZ(11,"app-detalles-repartidor",7),n.TgZ(12,"button",8),n.NdJ("click",function(){return o.limpiar()}),n._uU(13,"Limpiar"),n.qZA(),n.qZA(),n.TgZ(14,"div",6),n.TgZ(15,"h2"),n._uU(16,"Detalle pais"),n.qZA(),n._UZ(17,"app-detalle-pais",7),n.TgZ(18,"button",8),n.NdJ("click",function(){return o.limpiar()}),n._uU(19,"Limpiar"),n.qZA(),n.qZA(),n.qZA(),n._UZ(20,"hr"),n.qZA(),n.qZA()),2&r&&(n.xp6(11),n.Q6J("repartidor",o.repartidor),n.xp6(6),n.Q6J("repartidor",o.repartidor))},directives:[Pn,Nn,Fn],styles:[""]}),e})()}];let Ln=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[ge.Bz.forChild(Dn)],ge.Bz]}),e})(),Hn=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[N.ez,Ln]]}),e})()}}]);