(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{WPM6:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n("XiUz"),a=n("znSr"),c=n("YT2F"),r=n("fXoL");let i=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Sb({type:e}),e.\u0275inj=r.Rb({imports:[[o.e,a.b,c.l],o.e,a.b,c.l]}),e})()},uroN:function(e,t,n){"use strict";n.r(t),n.d(t,"ColumnWidthFeatureExampleModule",function(){return m});var o=n("mrSG"),a=n("ofXK"),c=n("XEBs"),r=n("YT2F"),i=n("WPM6"),p=n("fluT"),l=n("fXoL"),s=n("XkVd");let u=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(c.r)().table({prop:"id",width:"50px",pIndex:!0},{prop:"name",width:"25%"},{prop:"email"},{prop:"country",width:"35%"},{prop:"language"},{prop:"settings.timezone",label:"TZ",width:"30px"},{prop:"balance"},{prop:"gender"}).build(),this.ds=Object(c.s)().onTrigger(()=>this.datasource.getPeople(0,5)).create()}};return e.\u0275fac=function(t){return new(t||e)(l.Ub(p.a))},e.\u0275cmp=l.Ob({type:e,selectors:[["pbl-column-width-example-component"]],decls:1,vars:2,consts:[[3,"dataSource","columns"]],template:function(e,t){1&e&&l.Vb(0,"pbl-ngrid",0),2&e&&l.wc("dataSource",t.ds)("columns",t.columns)},directives:[s.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(o.a)([Object(r.e)("pbl-column-width-example-component",{title:"Column Width"}),Object(o.b)("design:paramtypes",[p.a])],e),e})(),d=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(c.r)().table({prop:"id",width:"50px",pIndex:!0},{prop:"name",width:"25%"},{prop:"email",minWidth:450},{prop:"country",width:"35%"},{prop:"language",maxWidth:50},{prop:"settings.timezone",label:"TZ",width:"30px"},{prop:"balance"},{prop:"gender"}).headerGroup({label:"Name & Email",columnIds:["name","email"]},{label:"Country & Language",columnIds:["country","language"]}).build(),this.ds=Object(c.s)().onTrigger(()=>this.datasource.getPeople(0,5)).create()}};return e.\u0275fac=function(t){return new(t||e)(l.Ub(p.a))},e.\u0275cmp=l.Ob({type:e,selectors:[["pbl-min-column-width-example-component"]],decls:1,vars:2,consts:[[3,"dataSource","columns"]],template:function(e,t){1&e&&l.Vb(0,"pbl-ngrid",0),2&e&&l.wc("dataSource",t.ds)("columns",t.columns)},directives:[s.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(o.a)([Object(r.e)("pbl-min-column-width-example-component",{title:"Minimum Column Width"}),Object(o.b)("design:paramtypes",[p.a])],e),e})(),m=(()=>{let e=class{};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Sb({type:e}),e.\u0275inj=l.Rb({imports:[[a.c,i.a,c.j]]}),e=Object(o.a)([Object(r.a)(u,d)],e),e})()}}]);