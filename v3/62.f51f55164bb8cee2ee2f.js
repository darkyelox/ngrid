(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{HsLd:function(e,t,a){"use strict";a.r(t),a.d(t,"InfiniteScrollPerformanceDemoExampleModule",function(){return H});var o=a("mrSG"),i=a("ofXK"),n=a("kmnG"),l=a("d3UM"),r=a("5RNC"),c=a("QibW"),s=a("bSwM"),d=a("Xa2L"),u=a("XEBs"),p=a("LnE1"),h=a("4dOD"),b=a("6JOf"),m=a("BuSo"),f=a("+9h+"),g=a("MhSk"),w=a("Lr2k"),v=a("LpJu"),y=a("YT2F"),C=a("WPM6"),x=a("mwjq"),S=a("fXoL"),M=a("fluT"),T=a("XiUz"),k=a("XkVd"),L=a("sihy"),X=a("Zswv"),I=a("BxRN"),P=a("4DA5"),O=a("cGur"),B=a("gAVq"),D=a("IO+B"),G=a("Dh3D"),R=a("+Czz"),Y=a("kvXS"),A=a("aR4q"),j=a("PIXP"),J=a("tQNW"),N=a("8r4k");function z(e,t){if(1&e){const e=S.Zb();S.Yb(0,"mat-slider",10),S.gc("change",function(t){return S.zc(e),S.kc().wheelMode=t.value}),S.Xb()}if(2&e){const e=S.kc();S.rc("value",e.wheelMode)}}function F(e,t){if(1&e&&(S.Yb(0,"div",16),S.Lc(1),S.lc(2,"currency"),S.Xb()),2&e){const e=t.value,a=t.col,o=t.row;S.rc("ngridCellClass",e<0?a.type.data.pbl:a.type.data.pos),S.Gb(1),S.Mc(S.oc(2,2,e,a.type.data.meta.currency(o),"symbol",a.type.data.format))}}function W(e,t){if(1&e&&(S.Yb(0,"div"),S.Lc(1),S.Xb()),2&e){const e=t.col,a=t.row;S.Gb(1),S.Mc(e.type.data.flagAndCountry(a))}}function _(e,t){if(1&e&&(S.Yb(0,"pbl-ngrid-row",17),S.Tb(1,"mat-spinner",18),S.Xb()),2&e){const e=t.$implicit;S.rc("grid",t.gridInstance)("infiniteRow",e)}}function E(e,t){if(1&e&&(S.Yb(0,"pbl-ngrid",11),S.Tb(1,"pbl-demo-action-row",12),S.Jc(2,F,3,7,"div",13),S.Jc(3,W,2,1,"div",14),S.Jc(4,_,2,2,"pbl-ngrid-row",15),S.Xb()),2&e){const e=S.kc();S.rc("dataSource",e.ds)("columns",e.columns)("wheelMode",e.wheelMode)("hideColumns",e.hideColumns),S.Gb(2),S.rc("pblNgridCellTypeDef","accountBalance"),S.Gb(1),S.rc("pblNgridCellTypeDef","flagAndCountry")}}const U={currency:e=>{var t;return null===(t=U.data.countries[e.country])||void 0===t?void 0:t.currencies[0]},flagAndCountry:e=>U.flag(e)+" "+U.name(e),name:e=>{var t;return null===(t=U.data.countries[e.country])||void 0===t?void 0:t.name},flag:e=>{var t;return null===(t=U.data.countries[e.country])||void 0===t?void 0:t.emoji},data:void 0},V={name:"accountBalance",data:{pbl:"balance-negative",pos:"balance-positive",format:"1.0-2",meta:U}};function q(e=!1){const t=t=>e?void 0:t;return Object(u.s)().default({minWidth:100,resize:!0}).table({prop:"drag_and_drop_handle",type:"drag_and_drop_handle",minWidth:48,maxWidth:48},{prop:"selection",width:"48px"},{prop:"id",pIndex:!0,width:"40px"},{prop:"name",sort:!0,reorder:!0},{prop:"country",headerType:t("country"),type:t({name:"flagAndCountry",data:U}),width:"150px"},{prop:"jobTitle"},{prop:"accountId"},{prop:"accountType",reorder:!0},{prop:"primeAccount",type:t("visualBool"),width:"24px"},{prop:"creditScore",type:t("starRatings"),width:"50px"},{prop:"balance",type:t(V),sort:!0},...Array.from(new Array(12)).map((e,a)=>({prop:"monthlyBalance."+a,type:t(V),sort:!0}))).headerGroup({prop:"name",span:2,label:"Customer Info"},{prop:"accountId",span:4,label:"Account Info"},{prop:"monthlyBalance.0",label:"Monthly Balance"}).footer({id:"reref",label:"FOOTER"}).footer({id:"rere123f",label:"FOOTER2"}).build()}let Q=(()=>{let e=class{constructor(e,t,a){this.datasource=e,this.client=t,this.cdr=a,this.columns=q(),this.ds=this.getDatasource(),this.wheelMode="passive",this.wheelModeState="passive",this.plainColumns=!1,this.showTable=!0,this.hideColumns=[]}toggleColumn(e,t){const a=e.indexOf(t);-1===a?e.push(t):e.splice(a,1)}togglePlainColumns(){this.plainColumns=!this.plainColumns,this.showTable=!1,setTimeout(()=>{this.showTable=!0,this.columns=q(this.plainColumns),this.ds=this.getDatasource(),this.cdr.detectChanges()},100)}wheelModeChange(e){switch(this.wheelModeState=e.value,this.wheelModeState){case"passive":case"blocking":this.wheelMode=this.wheelModeState;break;default:this.wheelMode=15}}getDatasource(){return Object(v.b)().withInfiniteScrollOptions({blockSize:100,initialVirtualSize:100}).withCacheOptions("sequenceBlocks").setCustomTriggers("filter").onTrigger(e=>{if(e.isInitial)return this.datasource.getCountries().then(e=>U.data=e).then(()=>this.client.getCustomers({pagination:{itemsPerPage:100,page:1}})).then(t=>(this.ds.updateVirtualSize(t.pagination.totalItems),e.updateTotalLength(t.pagination.totalItems),t.items));{const t=Math.floor(e.fromRow/100)+1;return this.client.getCustomers({pagination:{itemsPerPage:100,page:t}}).then(e=>e.items)}}).create()}};return e.\u0275fac=function(t){return new(t||e)(S.Sb(M.a),S.Sb(M.b),S.Sb(S.h))},e.\u0275cmp=S.Mb({type:e,selectors:[["pbl-infinite-scroll-performance-demo-example"]],viewQuery:function(e,t){if(1&e&&S.Rc(u.g,!0),2&e){let e;S.vc(e=S.hc())&&(t.pblTable=e.first)}},decls:14,vars:5,consts:[["fxLayout","column","fxLayoutGap","16px",1,"pbl-fill-absolute"],["fxLayout","row","fxLayoutGap","16px",2,"width","100%"],["fxLayout","row","fxLayoutGap","8px",3,"value","change"],["value","passive"],["value","blocking"],["value","threshold"],["thumbLabel","","min","1","max","55",3,"value","change",4,"ngIf"],[3,"value","change"],[2,"flex","1 1 100%","display","flex","min-height","0px"],["class","pbl-ngrid-cell-ellipsis pbl-ngrid-header-cell-ellipsis","style","height: 100%; width: 100%;","vScrollAuto","","maxBufferPx","100","minBufferPx","50","showHeader","","showFooter","","rowReorder","","columnReorder","","blockUi","","matSort","","cellTooltip","","matCheckboxSelection","selection",3,"dataSource","columns","wheelMode","hideColumns",4,"ngIf"],["thumbLabel","","min","1","max","55",3,"value","change"],["vScrollAuto","","maxBufferPx","100","minBufferPx","50","showHeader","","showFooter","","rowReorder","","columnReorder","","blockUi","","matSort","","cellTooltip","","matCheckboxSelection","selection",1,"pbl-ngrid-cell-ellipsis","pbl-ngrid-header-cell-ellipsis",2,"height","100%","width","100%",3,"dataSource","columns","wheelMode","hideColumns"],["filter","","label","Infinite Scroll Performance","showFps",""],[3,"ngridCellClass",4,"pblNgridCellTypeDef"],[4,"pblNgridCellTypeDef"],["in","","class","pbl-ngrid-infinite-virtual-row",3,"grid","infiniteRow",4,"pblNgridInfiniteVirtualRowDef"],[3,"ngridCellClass"],["in","",1,"pbl-ngrid-infinite-virtual-row",3,"grid","infiniteRow"],["diameter","24"]],template:function(e,t){1&e&&(S.Yb(0,"div",0),S.Yb(1,"div",1),S.Yb(2,"mat-radio-group",2),S.gc("change",function(e){return t.wheelModeChange(e)}),S.Yb(3,"mat-radio-button",3),S.Lc(4,"Passive"),S.Xb(),S.Yb(5,"mat-radio-button",4),S.Lc(6,"Blocking"),S.Xb(),S.Yb(7,"mat-radio-button",5),S.Lc(8),S.Xb(),S.Xb(),S.Jc(9,z,1,1,"mat-slider",6),S.Xb(),S.Yb(10,"mat-checkbox",7),S.gc("change",function(){return t.togglePlainColumns()}),S.Lc(11,"Use plain columns (higher frame rate)"),S.Xb(),S.Yb(12,"div",8),S.Jc(13,E,5,6,"pbl-ngrid",9),S.Xb(),S.Xb()),2&e&&(S.Gb(2),S.rc("value",t.wheelModeState),S.Gb(6),S.Nc("Threshold","threshold"===t.wheelModeState?" ("+t.wheelMode+")":"",""),S.Gb(1),S.rc("ngIf","threshold"===t.wheelModeState),S.Gb(1),S.rc("value",t.plainColumns),S.Gb(3),S.rc("ngIf",t.showTable))},directives:[T.f,T.g,c.b,c.a,i.t,s.a,r.a,k.a,L.b,X.a,I.b,P.b,O.b,B.b,D.a,G.a,R.b,Y.a,A.a,j.a,J.a,N.a,d.c],pipes:[i.d],styles:[".balance-negative{background:rgba(255,0,0,.33)}.balance-positive{background:rgba(0,128,0,.33)}"],encapsulation:2,changeDetection:0}),e=Object(o.a)([Object(y.e)("pbl-infinite-scroll-performance-demo-example",{title:"Infinite Scroll Performance Demo"}),Object(o.b)("design:paramtypes",[M.a,M.b,S.h])],e),e})(),H=(()=>{let e=class{};return e.\u0275mod=S.Qb({type:e}),e.\u0275inj=S.Pb({factory:function(t){return new(t||e)},providers:[u.o],imports:[[i.c,n.e,l.b,r.b,c.c,s.b,d.b,C.a,x.b,u.k.withCommon([{component:x.a}]),p.a.withDefaultTemplates(),h.a,b.a,m.a,f.a,g.a,w.a,v.a]]}),e=Object(o.a)([Object(y.a)(Q)],e),e})()}}]);