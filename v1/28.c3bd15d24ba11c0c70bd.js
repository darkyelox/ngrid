(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{D0EO:function(t,e,n){"use strict";n.d(e,"a",function(){return c});class c{}},uPEh:function(t,e,n){"use strict";n.r(e);var c=n("kZht"),o=n("D57K"),a=n("cc5W"),l=n("XApm");n("JRn2");let i=(()=>{return o.a([Object(a.c)("pbl-copy-selection-example",{title:"Copy Selection"})],class{constructor(t){this.datasource=t,this.columns=Object(l.j)().table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(l.k)().onTrigger(()=>this.datasource.getPeople(100,500)).create(),this.hideColumns=["bio"]}})})(),r=(()=>{return o.a([Object(a.a)(i)],class{})})();var s=n("C9Ky"),b=n("pLqg"),u=n("aM4+"),d=n("CTcY"),p=n("LwjM"),h=n("hTVn"),F=n("Ht9o"),g=n("j4tl"),m=n("248l"),f=n("yC1v"),y=n("uJF3"),w=n("xVbo"),C=n("An66");let v=(()=>{class t{constructor(t){this._document=t}copy(t){const e=this.beginCopy(t),n=e.copy();return e.destroy(),n}beginCopy(t){return new x(t,this._document)}}return t.ngInjectableDef=c.Vb({factory:function(){return new t(c.Wb(C.e))},token:t,providedIn:"root"}),t})();class x{constructor(t,e){this._document=e;const n=this._textarea=this._document.createElement("textarea");n.setAttribute("style","opacity: 0;"),n.setAttribute("aria-hidden","true"),n.value=t,this._document.body.appendChild(n)}copy(){const t=this._textarea;let e=!1;try{if(t){const n=document.activeElement;t.select(),e=this._document.execCommand("copy"),n instanceof HTMLElement&&n.focus()}}catch(n){}return e}destroy(){this._textarea&&(this._document.body.removeChild(this._textarea),this._textarea=void 0)}}var j,E=n("SKbq");const I=/^mac/.test(navigator.platform.toLowerCase()),S="clipboard";let O=(()=>{let t=j=class{constructor(t,e,n){this.grid=t,this.injector=e,this.pluginCtrl=n,this.config=e.get(l.d),this.clipboard=e.get(v),this.init()}static create(t,e){const n=l.g.find(t);return new j(t,e,n)}ngOnDestroy(){this._removePlugin(this.grid)}isCopyEvent(t){return!!(t instanceof KeyboardEvent&&"c"===t.key&&(!I&&t.ctrlKey||I&&t.metaKey))}doCopy(){const{cellSeparator:t,rowSeparator:e}=this.config.get("clipboard",{}),{rows:n,minIndex:c}=this.getSelectedRowData(this.grid);this.clipboard.copy(n.map(e=>e.slice(c).join(this.clpCellSep||t||"\t")).join(this.clpRowSep||e||"\n"))}getSelectedRowData(t){const{columnApi:e,contextApi:n}=t,c=new Map;let o=Number.MAX_SAFE_INTEGER;for(const l of n.selectedCells){const a=e.columns[l.colIndex];if(a){const i=e.renderIndexOf(a);if(i>-1){const e=n.findRowInCache(l.rowIdent).dataIndex,r=a.getValue(t.ds.source[e]),s=c.get(l.rowIdent)||[];s[i]=r,c.set(l.rowIdent,s),o=Math.min(o,i)}}}const a=Array.from(c.entries());return a.sort((t,e)=>n.findRowInCache(t[0]).dataIndex<n.findRowInCache(e[0]).dataIndex?-1:1),{minIndex:o,rows:a.map(t=>t[1])}}init(){this._removePlugin=this.pluginCtrl.setPlugin(S,this),this.pluginCtrl.hasPlugin("targetEvents")||this.pluginCtrl.createPlugin("targetEvents"),this.pluginCtrl.getPlugin("targetEvents").keyDown.pipe(Object(w.a)(t=>this.isCopyEvent(t.source)),Object(E.a)(this)).subscribe(t=>this.doCopy())}};return j=o.a([Object(l.a)({id:S,factory:"create"}),Object(E.a)()],t)})();var k=n("zRZK"),_=c.tb({encapsulation:2,styles:[[""]],data:{}});function R(t){return c.Rb(2,[(t()(),c.vb(0,16777216,null,null,6,"pbl-ngrid",[["clipboard",""],["focusMode","cell"]],null,null,null,p.b,p.a)),c.Mb(5120,null,h.a,F.b,[F.a]),c.Mb(5120,null,g.a,F.c,[F.a]),c.Mb(131584,null,m.a,m.a,[[3,m.a]]),c.ub(4,6209536,null,0,F.a,[c.s,c.R,c.l,c.t,c.B,c.h,f.b,m.a,[8,null]],{focusMode:[0,"focusMode"],dataSource:[1,"dataSource"],columns:[2,"columns"],hideColumns:[3,"hideColumns"]},null),c.Mb(1024,null,y.b,F.d,[F.a]),c.ub(6,147456,null,0,O,[F.a,c.s,y.b],null,null)],function(t,e){var n=e.component;t(e,4,0,"cell",n.ds,n.columns,n.hideColumns)},null)}function D(t){return c.Rb(0,[(t()(),c.vb(0,0,null,null,1,"pbl-copy-selection-example",[],null,null,null,R,_)),c.ub(1,49152,null,0,i,[k.a],null,null)],null,null)}var M=c.rb("pbl-copy-selection-example",i,D,{},{},[]),A=n("76xf"),P=n("OcC5"),q=n("ApNh"),K=n("D4FV"),J=n("pOQZ"),T=n("aFla"),z=n("zab8"),V=n("ENSU"),W=n("Sgnd"),H=n("2ob+"),L=n("1VvW"),N=n("DiCn"),Z=n("qBwE"),B=n("4rR8"),Q=n("9Z2Q"),X=n("S/D4"),G=n("a+5/"),U=n("8JnZ"),Y=n("tBgR"),$=n("1PzT"),tt=n("dFIu"),et=n("uWIS"),nt=n("owzC"),ct=n("Lv2H"),ot=n("9qA3"),at=n("EsQC"),lt=n("0S3s"),it=n("SWcI"),rt=n("kiRk"),st=n("vXD0"),bt=n("FJu8"),ut=n("pDuH"),dt=n("D0EO"),pt=n("x8eK"),ht=n("kxS8"),Ft=n("jOdJ");class gt{constructor(t,e){t||l.g.created.subscribe(t=>{if(!0===e.get(S,{}).autoEnable){const e=t.controller;e.events.pipe(Object(w.a)(t=>"onInit"===t.kind),Object(Ft.a)()).subscribe(t=>{e.hasPlugin(S)||e.createPlugin(S)})}})}}n.d(e,"CopySelectionExampleModuleNgFactory",function(){return mt});var mt=c.sb(r,[],function(t){return c.Eb([c.Fb(512,c.j,c.eb,[[8,[s.a,b.a,u.a,d.a,M]],[3,c.j],c.z]),c.Fb(5120,c.b,function(t,e){return[A.h(t,e)]},[C.e,c.D]),c.Fb(4608,C.q,C.p,[c.v,[2,C.H]]),c.Fb(4608,P.c,P.c,[]),c.Fb(4608,q.d,q.d,[]),c.Fb(4608,K.c,K.c,[K.i,K.e,c.j,K.h,K.f,c.s,c.B,C.e,J.b,[2,C.k]]),c.Fb(5120,K.j,K.k,[K.c]),c.Fb(5120,T.c,T.k,[K.c]),c.Fb(5120,z.b,z.c,[K.c]),c.Fb(4608,V.f,q.e,[[2,q.i],[2,q.n]]),c.Fb(1073742336,A.b,A.b,[]),c.Fb(1073742336,J.a,J.a,[]),c.Fb(1073742336,W.e,W.e,[]),c.Fb(1073742336,H.b,H.b,[]),c.Fb(1073742336,C.c,C.c,[]),c.Fb(1073742336,L.q,L.q,[[2,L.w],[2,L.o]]),c.Fb(1073742336,N.h,N.h,[]),c.Fb(1073742336,P.d,P.d,[]),c.Fb(1073742336,Z.d,Z.d,[]),c.Fb(1073742336,B.b,B.b,[]),c.Fb(1073742336,Q.c,Q.c,[]),c.Fb(1073742336,X.c,X.c,[]),c.Fb(1073742336,q.n,q.n,[[2,q.f],[2,V.g]]),c.Fb(1073742336,G.c,G.c,[]),c.Fb(1073742336,q.y,q.y,[]),c.Fb(1073742336,U.c,U.c,[]),c.Fb(1073742336,Y.e,Y.e,[]),c.Fb(1073742336,K.g,K.g,[]),c.Fb(1073742336,T.j,T.j,[]),c.Fb(1073742336,T.g,T.g,[]),c.Fb(1073742336,$.d,$.d,[]),c.Fb(1073742336,$.c,$.c,[]),c.Fb(1073742336,q.p,q.p,[]),c.Fb(1073742336,q.w,q.w,[]),c.Fb(1073742336,tt.a,tt.a,[]),c.Fb(1073742336,et.c,et.c,[]),c.Fb(1073742336,nt.a,nt.a,[]),c.Fb(1073742336,ct.k,ct.k,[]),c.Fb(1073742336,ot.b,ot.b,[]),c.Fb(1073742336,z.e,z.e,[]),c.Fb(1073742336,at.c,at.c,[]),c.Fb(1073742336,lt.c,lt.c,[]),c.Fb(1073742336,it.c,it.c,[]),c.Fb(1073742336,rt.q,rt.q,[]),c.Fb(131584,m.a,m.a,[[3,m.a]]),c.Fb(1073742336,st.b,st.b,[c.z,m.a,[6,st.a]]),c.Fb(1073742336,bt.a,bt.a,[]),c.Fb(1073742336,ut.a,ut.a,[]),c.Fb(1073742336,dt.a,dt.a,[]),c.Fb(1073742336,pt.a,pt.a,[]),c.Fb(1073742336,ht.a,ht.a,[[3,ht.a],f.b]),c.Fb(1073742336,gt,gt,[[3,gt],f.b]),c.Fb(1073742336,r,r,[])])})},x8eK:function(t,e,n){"use strict";n.d(e,"a",function(){return c});class c{}}}]);