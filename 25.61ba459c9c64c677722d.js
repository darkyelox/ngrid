(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"4DA5":function(e,t,i){"use strict";i.d(t,"a",function(){return l}),i.d(t,"b",function(){return a});var r=i("7+OI"),s=i("8LU1"),o=i("DcT9"),c=i("XEBs"),n=i("fXoL");const l="blockUi";let a=(()=>{class e{constructor(e,t){this.grid=e,this._blockInProgress=!1,this._removePlugin=t.setPlugin(l,this),e.registry.changes.subscribe(e=>{for(const t of e)switch(t.type){case"blocker":this.setupBlocker()}}),t.onInit().subscribe(e=>{e&&this._blockUi&&"boolean"==typeof this._blockUi&&this.setupBlocker()}),t.events.subscribe(e=>{if("onDataSource"===e.kind){const{prev:t,curr:i}=e;t&&o.r.kill(this,t),i.onSourceChanging.pipe(Object(o.r)(this,i)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),i.onSourceChanged.pipe(Object(o.r)(this,i)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(e){let t=Object(s.c)(e);!t||"auto"!==e&&""!==e||(t="auto"),Object(r.a)(e)&&this._blockUi!==e?(Object(r.a)(this._blockUi)&&o.r.kill(this,this._blockUi),this._blockUi=e,e.pipe(Object(o.r)(this,this._blockUi)).subscribe(e=>{this._blockInProgress=e,this.setupBlocker()})):this._blockUi!==t&&(this._blockUi=t,"auto"!==t&&(this._blockInProgress=t,this.setupBlocker()))}ngOnDestroy(){o.r.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this.grid.isInit)if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const e=this.grid.registry.getSingle("blocker");e&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",e.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return e.\u0275fac=function(t){return new(t||e)(n.Rb(c.f),n.Rb(c.m))},e.\u0275dir=n.Mb({type:e,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),e})()},"6JOf":function(e,t,i){"use strict";i.d(t,"a",function(){return l});var r=i("ofXK"),s=i("f6nW"),o=i("XEBs"),c=i("4DA5"),n=i("fXoL");let l=(()=>{class e{}return e.NGRID_PLUGIN=Object(o.t)({id:c.a},c.b),e.\u0275mod=n.Pb({type:e}),e.\u0275inj=n.Ob({factory:function(t){return new(t||e)},imports:[[r.c,s.r,o.j]]}),e})()},WPM6:function(e,t,i){"use strict";i.d(t,"a",function(){return n});var r=i("XiUz"),s=i("znSr"),o=i("YT2F"),c=i("fXoL");let n=(()=>{class e{}return e.\u0275mod=c.Pb({type:e}),e.\u0275inj=c.Ob({factory:function(t){return new(t||e)},imports:[[r.i,s.e,o.l],r.i,s.e,o.l]}),e})()},vuZX:function(e,t,i){"use strict";i.r(t),i.d(t,"ReuseExampleModule",function(){return m});var r=i("mrSG"),s=i("ofXK"),o=i("XEBs"),c=i("ewPf"),n=i("6JOf"),l=i("YT2F"),a=i("WPM6"),b=i("fluT"),p=i("fXoL"),u=i("XkVd"),d=i("4DA5"),h=i("mxEP"),g=i("ibH8");function f(e,t){if(1&e&&p.Sb(0,"pbl-ngrid-paginator",3),2&e){const e=t.$implicit;p.qc("table",e)("paginator",e.ds.paginator)}}let k=(()=>{let e=class{constructor(e){this.datasource=e,this.ds=Object(o.r)().onTrigger(()=>"person"===this.viewMode?this.datasource.getPeople(1e3,15):this.datasource.getSellers(1e3,15)).create(),this.viewMode="person",this.toggleViewMode()}toggleViewMode(){var e;this.viewMode="person"===this.viewMode?"seller":"person",this.ds=(e=this.datasource,"person"===this.viewMode?Object(o.r)().onTrigger(()=>e.getPeople(1e3,15)).create():Object(o.r)().onTrigger(()=>e.getSellers(1e3,15)).create()),this.columns="person"===this.viewMode?Object(o.q)().table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build():Object(o.q)().table({prop:"id",sort:!0,width:"40px",wontBudge:!0},{prop:"name",sort:!0},{prop:"email",minWidth:250,width:"150px"},{prop:"address"},{prop:"rating",type:"starRatings",width:"120px"}).build(),this.ds.refresh()}};return e.\u0275fac=function(t){return new(t||e)(p.Rb(b.a))},e.\u0275cmp=p.Lb({type:e,selectors:[["pbl-reuse-example"]],decls:4,vars:3,consts:[["blockUi","","usePagination","",3,"dataSource","columns"],[3,"table","paginator",4,"pblNgridPaginatorRef"],[3,"click"],[3,"table","paginator"]],template:function(e,t){1&e&&(p.Xb(0,"pbl-ngrid",0),p.Jc(1,f,1,2,"pbl-ngrid-paginator",1),p.Wb(),p.Xb(2,"button",2),p.fc("click",function(){return t.toggleViewMode()}),p.Lc(3),p.Wb()),2&e&&(p.qc("dataSource",t.ds)("columns",t.columns),p.Fb(3),p.Mc(t.viewMode))},directives:[u.a,d.b,h.a,g.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(r.a)([Object(l.e)("pbl-reuse-example",{title:"Reuse"}),Object(r.b)("design:paramtypes",[b.a])],e),e})(),m=(()=>{let e=class{};return e.\u0275mod=p.Pb({type:e}),e.\u0275inj=p.Ob({factory:function(t){return new(t||e)},imports:[[s.c,a.a,o.j,c.a,n.a]]}),e=Object(r.a)([Object(l.a)(k)],e),e})()}}]);