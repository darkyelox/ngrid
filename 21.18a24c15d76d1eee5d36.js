(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"4DA5":function(e,t,s){"use strict";s.d(t,"a",function(){return a}),s.d(t,"b",function(){return l});var c=s("7+OI"),r=s("8LU1"),i=s("DcT9"),o=s("XEBs"),n=s("fXoL");const a="blockUi";let l=(()=>{class e{constructor(e,t){this.grid=e,this._blockInProgress=!1,this._removePlugin=t.setPlugin(a,this),e.registry.changes.subscribe(e=>{for(const t of e)switch(t.type){case"blocker":this.setupBlocker()}}),t.onInit().subscribe(e=>{e&&this._blockUi&&"boolean"==typeof this._blockUi&&this.setupBlocker()}),t.events.subscribe(e=>{if("onDataSource"===e.kind){const{prev:t,curr:s}=e;t&&i.r.kill(this,t),s.onSourceChanging.pipe(Object(i.r)(this,s)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),s.onSourceChanged.pipe(Object(i.r)(this,s)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(e){let t=Object(r.c)(e);!t||"auto"!==e&&""!==e||(t="auto"),Object(c.a)(e)&&this._blockUi!==e?(Object(c.a)(this._blockUi)&&i.r.kill(this,this._blockUi),this._blockUi=e,e.pipe(Object(i.r)(this,this._blockUi)).subscribe(e=>{this._blockInProgress=e,this.setupBlocker()})):this._blockUi!==t&&(this._blockUi=t,"auto"!==t&&(this._blockInProgress=t,this.setupBlocker()))}ngOnDestroy(){i.r.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this.grid.isInit)if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const e=this.grid.registry.getSingle("blocker");e&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",e.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return e.\u0275fac=function(t){return new(t||e)(n.Rb(o.f),n.Rb(o.m))},e.\u0275dir=n.Mb({type:e,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),e})()},"6JOf":function(e,t,s){"use strict";s.d(t,"a",function(){return a});var c=s("ofXK"),r=s("f6nW"),i=s("XEBs"),o=s("4DA5"),n=s("fXoL");let a=(()=>{class e{}return e.NGRID_PLUGIN=Object(i.t)({id:o.a},o.b),e.\u0275mod=n.Pb({type:e}),e.\u0275inj=n.Ob({factory:function(t){return new(t||e)},imports:[[c.c,r.r,i.j]]}),e})()},CebM:function(e,t,s){"use strict";s.r(t),s.d(t,"TransposeExampleModule",function(){return U});var c=s("mrSG"),r=s("ofXK"),i=s("bSwM"),o=s("XEBs"),n=s("V+x2"),a=s("6JOf"),l=s("YT2F"),b=s("WPM6"),d=s("fluT"),p=s("fXoL"),u=s("XkVd"),h=s("4DA5"),f=s("X2ne"),g=s("aR4q");function m(e,t){if(1&e&&(p.Xb(0,"div"),p.Lc(1),p.kc(2,"date"),p.Wb()),2&e){const e=t.value,s=t.col;p.Fb(1),p.Mc(p.mc(2,1,e,s.type.data.format))}}function k(e,t){if(1&e&&(p.Xb(0,"div",4),p.Lc(1),p.Wb()),2&e){const e=t.value;p.Fb(1),p.Mc(e)}}let y=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.q)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:{name:"date",data:{format:"dd MMM, yyyy"}}}).build(),this.ds=Object(o.r)().onTrigger(()=>this.datasource.getPeople(0,5)).create(),this.transposeToggle=!1}};return e.\u0275fac=function(t){return new(t||e)(p.Rb(d.a))},e.\u0275cmp=p.Lb({type:e,selectors:[["pbl-transpose-example"]],decls:5,vars:6,consts:[["blockUi","",3,"transpose","dataSource","columns"],[4,"pblNgridCellTypeDef"],["style","background: green",4,"pblNgridCellDef"],[3,"checked","change"],[2,"background","green"]],template:function(e,t){1&e&&(p.Xb(0,"pbl-ngrid",0),p.Jc(1,m,3,4,"div",1),p.Jc(2,k,2,1,"div",2),p.Wb(),p.Xb(3,"mat-checkbox",3),p.fc("change",function(e){return t.transposeToggle=e.checked}),p.Lc(4,"Transpose Enabled"),p.Wb()),2&e&&(p.qc("transpose",t.transposeToggle)("dataSource",t.ds)("columns",t.columns),p.Fb(1),p.qc("pblNgridCellTypeDef","date"),p.Fb(1),p.qc("pblNgridCellDef","name"),p.Fb(1),p.qc("checked",t.transposeToggle))},directives:[u.a,h.b,f.b,g.a,i.a],pipes:[r.f],styles:[""],encapsulation:2,changeDetection:0}),e=Object(c.a)([Object(l.e)("pbl-transpose-example",{title:"Transpose"}),Object(c.b)("design:paramtypes",[d.a])],e),e})();function O(e,t){if(1&e&&(p.Xb(0,"div",2),p.Lc(1),p.Wb()),2&e){const e=t.value;p.Fb(1),p.Mc(e)}}let j=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.q)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:{name:"date",data:{format:"dd MMM, yyyy"}}}).build(),this.ds=Object(o.r)().onTrigger(()=>this.datasource.getPeople(0,15)).create()}};return e.\u0275fac=function(t){return new(t||e)(p.Rb(d.a))},e.\u0275cmp=p.Lb({type:e,selectors:[["pbl-original-templates-example"]],decls:2,vars:3,consts:[["blockUi","","transpose","","matchTemplates","",3,"dataSource","columns"],["style","background: green",4,"pblNgridCellDef"],[2,"background","green"]],template:function(e,t){1&e&&(p.Xb(0,"pbl-ngrid",0),p.Jc(1,O,2,1,"div",1),p.Wb()),2&e&&(p.qc("dataSource",t.ds)("columns",t.columns),p.Fb(1),p.qc("pblNgridCellDef","name"))},directives:[u.a,h.b,f.b,g.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(c.a)([Object(l.e)("pbl-original-templates-example",{title:"Transpose with Original Templates"}),Object(c.b)("design:paramtypes",[d.a])],e),e})();function v(e,t){if(1&e&&(p.Xb(0,"div",2),p.Lc(1),p.Wb()),2&e){const e=t.value;p.Fb(1),p.Mc(e)}}const _=function(){return{minWidth:100}};let w=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.q)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:{name:"date",data:{format:"dd MMM, yyyy"}}}).build(),this.ds=Object(o.r)().onTrigger(()=>this.datasource.getPeople(0,25)).create()}};return e.\u0275fac=function(t){return new(t||e)(p.Rb(d.a))},e.\u0275cmp=p.Lb({type:e,selectors:[["pbl-with-column-styles-example"]],decls:2,vars:5,consts:[["blockUi","","transpose","",3,"transposeDefaultCol","dataSource","columns"],["style","background: green",4,"pblNgridCellDef"],[2,"background","green"]],template:function(e,t){1&e&&(p.Xb(0,"pbl-ngrid",0),p.Jc(1,v,2,1,"div",1),p.Wb()),2&e&&(p.qc("transposeDefaultCol",p.rc(4,_))("dataSource",t.ds)("columns",t.columns),p.Fb(1),p.qc("pblNgridCellDef","name"))},directives:[u.a,h.b,f.b,g.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(c.a)([Object(l.e)("pbl-with-column-styles-example",{title:"With Column Styles"}),Object(c.b)("design:paramtypes",[d.a])],e),e})(),U=(()=>{let e=class{};return e.\u0275mod=p.Pb({type:e}),e.\u0275inj=p.Ob({factory:function(t){return new(t||e)},imports:[[r.c,i.b,b.a,o.j,n.a,a.a]]}),e=Object(c.a)([Object(l.a)(y,j,w)],e),e})()},WPM6:function(e,t,s){"use strict";s.d(t,"a",function(){return n});var c=s("XiUz"),r=s("znSr"),i=s("YT2F"),o=s("fXoL");let n=(()=>{class e{}return e.\u0275mod=o.Pb({type:e}),e.\u0275inj=o.Ob({factory:function(t){return new(t||e)},imports:[[c.i,r.e,i.l],c.i,r.e,i.l]}),e})()}}]);