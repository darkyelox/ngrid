(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{D0EO:function(l,n,e){"use strict";e.d(n,"a",function(){return a});class a{}},"u+Eg":function(l,n,e){"use strict";e.r(n);var a=e("kZht"),t=e("D57K"),b=e("cc5W"),u=e("XApm");e("JRn2");let c=(()=>{return t.a([Object(b.c)("pbl-grid-height-grid-example",{title:"Grid Height Example"})],class{constructor(l,n){this.datasource=l,this.cdr=n,this.columns=Object(u.j)().default({minWidth:40}).table({prop:"id",width:"40px"},{prop:"name"},{prop:"gender",width:"50px"},{prop:"email",width:"150px"},{prop:"country"},{prop:"language"}).header({id:"header1",label:"Header 1",width:"25%"},{id:"header2",label:"Header 2"}).headerGroup({prop:"name",span:1,label:"Name & Gender"}).header({id:"header3",label:"Header 3"}).headerGroup({prop:"id",span:2,label:"ID, Name & Gender"},{prop:"country",span:1,label:"Country & Language"}).footer({id:"footer1",label:"Footer 1",width:"25%"},{id:"footer2",label:"Footer 2"}).footer({id:"footer3",label:"Footer 3"}).build(),this.ds=Object(u.k)().keepAlive().onTrigger(()=>this.datasource.getPeople(0,500)).create(),this.explicitGridHeight=!0,this.fallbackMinHeight=!0,this.vScroll=!0,this.createSettings()}ngOnDestroy(){this.ds.dispose()}redraw(){this.settings=void 0,setTimeout(()=>{this.createSettings(),this.cdr.detectChanges()},50)}createSettings(){this.settings={explicitGridHeight:this.explicitGridHeight,fallbackMinHeight:this.fallbackMinHeight?150:0,vScroll:this.vScroll}}})})(),i=(()=>{return t.a([Object(b.a)(c)],class{})})();var o=e("C9Ky"),r=e("pLqg"),d=e("aM4+"),h=e("CTcY"),s=e("LwjM"),g=e("uJF3"),p=e("Ht9o"),f=e("hTVn"),m=e("j4tl"),F=e("tBgR"),k=e("CWpx"),x=e("248l"),H=e("yC1v"),v=e("An66"),M=e("Sgnd"),S=e("76xf"),w=e("pOQZ"),y=e("Kej7"),G=e("3kIJ"),R=e("1PzT"),j=e("owzC"),A=e("FxgA"),O=e("Gien"),D=e("8JnZ"),E=e("zRZK"),I=a.tb({encapsulation:2,styles:[[""]],data:{}});function C(l){return a.Rb(0,[(l()(),a.vb(0,16777216,null,null,7,"pbl-ngrid",[["vScrollAuto",""]],null,null,null,s.b,s.a)),a.Mb(5120,null,g.b,p.d,[p.a]),a.Mb(5120,null,f.a,p.b,[p.a]),a.Mb(5120,null,m.a,p.c,[p.a]),a.Mb(6144,null,F.g,null,[k.b]),a.Mb(131584,null,x.a,x.a,[[3,x.a]]),a.ub(6,6209536,null,0,p.a,[a.s,a.R,a.l,a.t,a.B,a.h,H.b,x.a,[8,null]],{dataSource:[0,"dataSource"],columns:[1,"columns"],fallbackMinHeight:[2,"fallbackMinHeight"]},null),a.ub(7,606208,null,0,k.b,[a.l,p.a],{vScrollAuto:[0,"vScrollAuto"]},null),(l()(),a.lb(0,null,null,0))],function(l,n){var e=n.component;l(n,6,0,e.ds,e.columns,e.settings.fallbackMinHeight),l(n,7,0,"")},null)}function L(l){return a.Rb(0,[(l()(),a.vb(0,16777216,null,null,7,"pbl-ngrid",[["vScrollNone",""]],null,null,null,s.b,s.a)),a.Mb(5120,null,g.b,p.d,[p.a]),a.Mb(5120,null,f.a,p.b,[p.a]),a.Mb(5120,null,m.a,p.c,[p.a]),a.Mb(6144,null,F.g,null,[k.b]),a.Mb(131584,null,x.a,x.a,[[3,x.a]]),a.ub(6,6209536,null,0,p.a,[a.s,a.R,a.l,a.t,a.B,a.h,H.b,x.a,[8,null]],{dataSource:[0,"dataSource"],columns:[1,"columns"],fallbackMinHeight:[2,"fallbackMinHeight"]},null),a.ub(7,606208,null,0,k.b,[a.l,p.a],null,null),(l()(),a.lb(0,null,null,0))],function(l,n){var e=n.component;l(n,6,0,e.ds,e.columns,e.settings.fallbackMinHeight),l(n,7,0)},null)}function N(l){return a.Rb(0,[(l()(),a.vb(0,0,null,null,4,"div",[],[[2,"table-height-300",null]],null,null,null,null)),(l()(),a.lb(16777216,null,null,1,null,C)),a.ub(2,16384,null,0,v.o,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.lb(16777216,null,null,1,null,L)),a.ub(4,16384,null,0,v.o,[a.R,a.O],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,2,0,e.settings.vScroll),l(n,4,0,!e.settings.vScroll)},function(l,n){l(n,0,0,n.component.settings.explicitGridHeight)})}function B(l){return a.Rb(2,[(l()(),a.vb(0,0,null,null,20,"div",[["fxLayout","row"],["fxLayoutGap","16px"],["style","width: 100%; padding: 16px"]],null,null,null,null,null)),a.ub(1,671744,null,0,M.c,[a.l,S.g,[2,M.i],S.d],{fxLayout:[0,"fxLayout"]},null),a.ub(2,1720320,null,0,M.d,[a.l,a.B,w.b,S.g,[2,M.h],S.d],{fxLayoutGap:[0,"fxLayoutGap"]},null),(l()(),a.vb(3,0,null,null,3,"mat-checkbox",[["class","mat-checkbox"]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null]],[[null,"change"]],function(l,n,e){var a=!0;return"change"===n&&(a=!1!==(l.component.explicitGridHeight=e.checked)&&a),a},y.b,y.a)),a.Mb(5120,null,G.e,function(l){return[l]},[R.b]),a.ub(5,8568832,null,0,R.b,[a.l,a.h,j.h,a.B,[8,null],[2,R.a],[2,A.a]],{checked:[0,"checked"]},{change:"change"}),(l()(),a.Pb(-1,0,["Explicit grid height"])),(l()(),a.vb(7,0,null,null,3,"mat-checkbox",[["class","mat-checkbox"]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null]],[[null,"change"]],function(l,n,e){var a=!0;return"change"===n&&(a=!1!==(l.component.fallbackMinHeight=e.checked)&&a),a},y.b,y.a)),a.Mb(5120,null,G.e,function(l){return[l]},[R.b]),a.ub(9,8568832,null,0,R.b,[a.l,a.h,j.h,a.B,[8,null],[2,R.a],[2,A.a]],{checked:[0,"checked"]},{change:"change"}),(l()(),a.Pb(-1,0,["Set fallbackMinHeight to 150"])),(l()(),a.vb(11,0,null,null,3,"mat-checkbox",[["class","mat-checkbox"]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null]],[[null,"change"]],function(l,n,e){var a=!0;return"change"===n&&(a=!1!==(l.component.vScroll=e.checked)&&a),a},y.b,y.a)),a.Mb(5120,null,G.e,function(l){return[l]},[R.b]),a.ub(13,8568832,null,0,R.b,[a.l,a.h,j.h,a.B,[8,null],[2,R.a],[2,A.a]],{checked:[0,"checked"]},{change:"change"}),(l()(),a.Pb(-1,0,["Virtual Scroll Enabled"])),(l()(),a.vb(15,0,null,null,1,"div",[["fxFlex","*"]],null,null,null,null,null)),a.ub(16,671744,null,0,M.a,[a.l,S.g,S.c,M.f,S.d],{fxFlex:[0,"fxFlex"]},null),(l()(),a.vb(17,0,null,null,3,"button",[["fxFlex","noshrink"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.redraw()&&a),a},O.d,O.b)),a.ub(18,671744,null,0,M.a,[a.l,S.g,S.c,M.f,S.d],{fxFlex:[0,"fxFlex"]},null),a.ub(19,180224,null,0,D.b,[a.l,j.h,[2,A.a]],null,null),(l()(),a.Pb(-1,0,["Redraw"])),(l()(),a.lb(16777216,null,null,1,null,N)),a.ub(22,16384,null,0,v.o,[a.R,a.O],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,1,0,"row"),l(n,2,0,"16px"),l(n,5,0,e.explicitGridHeight),l(n,9,0,e.fallbackMinHeight),l(n,13,0,e.vScroll),l(n,16,0,"*"),l(n,18,0,"noshrink"),l(n,22,0,e.settings)},function(l,n){l(n,3,0,a.Hb(n,5).id,null,a.Hb(n,5).indeterminate,a.Hb(n,5).checked,a.Hb(n,5).disabled,"before"==a.Hb(n,5).labelPosition,"NoopAnimations"===a.Hb(n,5)._animationMode),l(n,7,0,a.Hb(n,9).id,null,a.Hb(n,9).indeterminate,a.Hb(n,9).checked,a.Hb(n,9).disabled,"before"==a.Hb(n,9).labelPosition,"NoopAnimations"===a.Hb(n,9)._animationMode),l(n,11,0,a.Hb(n,13).id,null,a.Hb(n,13).indeterminate,a.Hb(n,13).checked,a.Hb(n,13).disabled,"before"==a.Hb(n,13).labelPosition,"NoopAnimations"===a.Hb(n,13)._animationMode),l(n,17,0,a.Hb(n,19).disabled||null,"NoopAnimations"===a.Hb(n,19)._animationMode)})}function P(l){return a.Rb(0,[(l()(),a.vb(0,0,null,null,1,"pbl-grid-height-grid-example",[],null,null,null,B,I)),a.ub(1,180224,null,0,c,[E.a,a.h],null,null)],null,null)}var q=a.rb("pbl-grid-height-grid-example",c,P,{},{},[]),_=e("OcC5"),J=e("ApNh"),z=e("D4FV"),W=e("aFla"),T=e("zab8"),Z=e("ENSU"),K=e("2ob+"),V=e("1VvW"),Q=e("DiCn"),X=e("qBwE"),U=e("4rR8"),Y=e("9Z2Q"),$=e("S/D4"),ll=e("a+5/"),nl=e("dFIu"),el=e("uWIS"),al=e("Lv2H"),tl=e("9qA3"),bl=e("EsQC"),ul=e("0S3s"),cl=e("SWcI"),il=e("kiRk"),ol=e("vXD0"),rl=e("FJu8"),dl=e("pDuH"),hl=e("D0EO");e.d(n,"GridHeightGridExampleModuleNgFactory",function(){return sl});var sl=a.sb(i,[],function(l){return a.Eb([a.Fb(512,a.j,a.eb,[[8,[o.a,r.a,d.a,h.a,q]],[3,a.j],a.z]),a.Fb(4608,v.q,v.p,[a.v,[2,v.H]]),a.Fb(5120,a.b,function(l,n){return[S.h(l,n)]},[v.e,a.D]),a.Fb(4608,_.c,_.c,[]),a.Fb(4608,J.d,J.d,[]),a.Fb(4608,z.c,z.c,[z.i,z.e,a.j,z.h,z.f,a.s,a.B,v.e,w.b,[2,v.k]]),a.Fb(5120,z.j,z.k,[z.c]),a.Fb(5120,W.c,W.k,[z.c]),a.Fb(5120,T.b,T.c,[z.c]),a.Fb(4608,Z.f,J.e,[[2,J.i],[2,J.n]]),a.Fb(1073742336,v.c,v.c,[]),a.Fb(1073742336,S.b,S.b,[]),a.Fb(1073742336,w.a,w.a,[]),a.Fb(1073742336,M.e,M.e,[]),a.Fb(1073742336,K.b,K.b,[]),a.Fb(1073742336,V.q,V.q,[[2,V.w],[2,V.o]]),a.Fb(1073742336,Q.h,Q.h,[]),a.Fb(1073742336,_.d,_.d,[]),a.Fb(1073742336,X.d,X.d,[]),a.Fb(1073742336,U.b,U.b,[]),a.Fb(1073742336,Y.c,Y.c,[]),a.Fb(1073742336,$.c,$.c,[]),a.Fb(1073742336,J.n,J.n,[[2,J.f],[2,Z.g]]),a.Fb(1073742336,ll.c,ll.c,[]),a.Fb(1073742336,J.y,J.y,[]),a.Fb(1073742336,D.c,D.c,[]),a.Fb(1073742336,F.e,F.e,[]),a.Fb(1073742336,z.g,z.g,[]),a.Fb(1073742336,W.j,W.j,[]),a.Fb(1073742336,W.g,W.g,[]),a.Fb(1073742336,R.d,R.d,[]),a.Fb(1073742336,R.c,R.c,[]),a.Fb(1073742336,J.p,J.p,[]),a.Fb(1073742336,J.w,J.w,[]),a.Fb(1073742336,nl.a,nl.a,[]),a.Fb(1073742336,el.c,el.c,[]),a.Fb(1073742336,j.a,j.a,[]),a.Fb(1073742336,al.k,al.k,[]),a.Fb(1073742336,tl.b,tl.b,[]),a.Fb(1073742336,T.e,T.e,[]),a.Fb(1073742336,bl.c,bl.c,[]),a.Fb(1073742336,ul.c,ul.c,[]),a.Fb(1073742336,cl.c,cl.c,[]),a.Fb(1073742336,il.q,il.q,[]),a.Fb(131584,x.a,x.a,[[3,x.a]]),a.Fb(1073742336,ol.b,ol.b,[a.z,x.a,[6,ol.a]]),a.Fb(1073742336,rl.a,rl.a,[]),a.Fb(1073742336,dl.a,dl.a,[]),a.Fb(1073742336,hl.a,hl.a,[]),a.Fb(1073742336,i,i,[])])})}}]);