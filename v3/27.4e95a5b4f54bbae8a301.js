(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"4DA5":function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return a});var i=r("7+OI"),l=r("8LU1"),o=r("XEBs"),c=r("fXoL");const n="blockUi";let a=(()=>{class e{constructor(e,t){this.grid=e,this._blockInProgress=!1,this._removePlugin=t.setPlugin(n,this),e.registry.changes.subscribe(e=>{for(const t of e)switch(t.type){case"blocker":this.setupBlocker()}}),t.events.subscribe(e=>{if("onDataSource"===e.kind){const{prev:t,curr:r}=e;t&&o.x.unrx.kill(this,t),r.onSourceChanging.pipe(o.x.unrx(this,r)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),r.onSourceChanged.pipe(o.x.unrx(this,r)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(e){let t=Object(l.c)(e);!t||"auto"!==e&&""!==e||(t="auto"),Object(i.a)(e)&&this._blockUi!==e?(Object(i.a)(this._blockUi)&&o.x.unrx.kill(this,this._blockUi),this._blockUi=e,e.pipe(o.x.unrx(this,this._blockUi)).subscribe(e=>{this._blockInProgress=e,this.setupBlocker()})):this._blockUi!==t&&(this._blockUi=t,"auto"!==t&&(this._blockInProgress=t,this.setupBlocker()))}ngOnDestroy(){o.x.unrx.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const e=this.grid.registry.getSingle("blocker");e&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",e.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return e.\u0275fac=function(t){return new(t||e)(c.Sb(o.g),c.Sb(o.n))},e.\u0275dir=c.Nb({type:e,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),e})()},"6JOf":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var i=r("ofXK"),l=r("f6nW"),o=r("XEBs"),c=r("4DA5"),n=r("fXoL");let a=(()=>{class e{}return e.NGRID_PLUGIN=Object(o.v)({id:c.a},c.b),e.\u0275mod=n.Qb({type:e}),e.\u0275inj=n.Pb({factory:function(t){return new(t||e)},imports:[[i.c,l.r,o.k]]}),e})()},WPM6:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var i=r("XiUz"),l=r("znSr"),o=r("YT2F"),c=r("fXoL");let n=(()=>{class e{}return e.\u0275mod=c.Qb({type:e}),e.\u0275inj=c.Pb({factory:function(t){return new(t||e)},imports:[[i.i,l.e,o.l],i.i,l.e,o.l]}),e})()},mrSG:function(e,t,r){"use strict";function i(e,t,r,i){var l,o=arguments.length,c=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(c=(o<3?l(c):o>3?l(t,r,c):l(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}r.d(t,"a",function(){return i}),r.d(t,"b",function(){return l})},xzhj:function(e,t,r){"use strict";r.r(t),r.d(t,"GridFillerExampleModule",function(){return x});var i=r("mrSG"),l=r("ofXK"),o=r("XEBs"),c=r("6JOf"),n=r("YT2F"),a=r("WPM6"),s=r("fluT"),b=r("fXoL"),d=r("XkVd"),p=r("4DA5"),u=r("sihy"),h=r("kvXS");let g=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.s)().table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(o.t)().onTrigger(()=>this.datasource.getPeople(0,3)).create()}};return e.\u0275fac=function(t){return new(t||e)(b.Sb(s.a))},e.\u0275cmp=b.Mb({type:e,selectors:[["pbl-grid-filler-example"]],decls:3,vars:2,consts:[[1,"filler-table-container"],["blockUi","","vScrollAuto","",3,"dataSource","columns"],["filter",""]],template:function(e,t){1&e&&(b.Yb(0,"div",0),b.Yb(1,"pbl-ngrid",1),b.Tb(2,"pbl-demo-action-row",2),b.Xb(),b.Xb()),2&e&&(b.Gb(1),b.rc("dataSource",t.ds)("columns",t.columns))},directives:[d.a,p.b,u.b,h.a],styles:[".filler-table-container{padding:16px;height:400px;background:#90ee90}.filler-table-container pbl-ngrid{height:100%}.filler-table-container .pbl-ngrid-space-fill{background:#add8e6}"],encapsulation:2,changeDetection:0}),e=Object(i.a)([Object(n.e)("pbl-grid-filler-example",{title:"Grid Filler (Virtual Scroll Auto)"}),Object(i.b)("design:paramtypes",[s.a])],e),e})(),f=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.s)().table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(o.t)().onTrigger(()=>this.datasource.getPeople(0,3)).create()}};return e.\u0275fac=function(t){return new(t||e)(b.Sb(s.a))},e.\u0275cmp=b.Mb({type:e,selectors:[["pbl-grid-filler-fixed-virtual-scroll-example"]],decls:3,vars:2,consts:[[1,"filler-table-container"],["blockUi","","vScrollFixed","",3,"dataSource","columns"],["filter",""]],template:function(e,t){1&e&&(b.Yb(0,"div",0),b.Yb(1,"pbl-ngrid",1),b.Tb(2,"pbl-demo-action-row",2),b.Xb(),b.Xb()),2&e&&(b.Gb(1),b.rc("dataSource",t.ds)("columns",t.columns))},directives:[d.a,p.b,u.b,h.a],styles:[".filler-table-container{padding:16px;height:400px;background:#90ee90}.filler-table-container pbl-ngrid{height:100%}.filler-table-container .pbl-ngrid-space-fill{background:#add8e6}"],encapsulation:2,changeDetection:0}),e=Object(i.a)([Object(n.e)("pbl-grid-filler-fixed-virtual-scroll-example",{title:"Grid Filler (Virtual Scroll Fixed)"}),Object(i.b)("design:paramtypes",[s.a])],e),e})(),m=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.s)().table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(o.t)().onTrigger(()=>this.datasource.getPeople(0,3)).create()}};return e.\u0275fac=function(t){return new(t||e)(b.Sb(s.a))},e.\u0275cmp=b.Mb({type:e,selectors:[["pbl-grid-filler-disabled-example"]],decls:3,vars:2,consts:[[1,"filler-table-container"],["blockUi","","noFiller","",3,"dataSource","columns"],["filter",""]],template:function(e,t){1&e&&(b.Yb(0,"div",0),b.Yb(1,"pbl-ngrid",1),b.Tb(2,"pbl-demo-action-row",2),b.Xb(),b.Xb()),2&e&&(b.Gb(1),b.rc("dataSource",t.ds)("columns",t.columns))},directives:[d.a,p.b,h.a],styles:[".filler-table-container{padding:16px;height:400px;background:#90ee90}.filler-table-container pbl-ngrid{height:100%}.filler-table-container .pbl-ngrid-space-fill{background:#add8e6}"],encapsulation:2,changeDetection:0}),e=Object(i.a)([Object(n.e)("pbl-grid-filler-disabled-example",{title:"Grid Filler Disabled"}),Object(i.b)("design:paramtypes",[s.a])],e),e})(),k=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.s)().table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(o.t)().onTrigger(()=>this.datasource.getPeople(0,3)).create()}};return e.\u0275fac=function(t){return new(t||e)(b.Sb(s.a))},e.\u0275cmp=b.Mb({type:e,selectors:[["pbl-grid-filler-no-virtual-scroll-example"]],decls:3,vars:2,consts:[[1,"filler-table-container"],["blockUi","","vScrollNone","",3,"dataSource","columns"],["filter",""]],template:function(e,t){1&e&&(b.Yb(0,"div",0),b.Yb(1,"pbl-ngrid",1),b.Tb(2,"pbl-demo-action-row",2),b.Xb(),b.Xb()),2&e&&(b.Gb(1),b.rc("dataSource",t.ds)("columns",t.columns))},directives:[d.a,p.b,u.b,h.a],styles:[".filler-table-container{padding:16px;height:400px;background:#90ee90}.filler-table-container pbl-ngrid{height:100%}.filler-table-container .pbl-ngrid-space-fill{background:#add8e6}"],encapsulation:2,changeDetection:0}),e=Object(i.a)([Object(n.e)("pbl-grid-filler-no-virtual-scroll-example",{title:"Grid Filler No Virtual Scroll"}),Object(i.b)("design:paramtypes",[s.a])],e),e})(),x=(()=>{let e=class{};return e.\u0275mod=b.Qb({type:e}),e.\u0275inj=b.Pb({factory:function(t){return new(t||e)},imports:[[l.c,a.a,o.k,c.a]]}),e=Object(i.a)([Object(n.a)(g,f,m,k)],e),e})()}}]);