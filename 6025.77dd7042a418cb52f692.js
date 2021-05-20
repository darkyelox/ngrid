(self.webpackChunkpebula=self.webpackChunkpebula||[]).push([[6025],{46025:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ColumnResizeExampleModule:()=>f});var s=i(64762),r=i(61511),n=i(64914),l=i(44903),a=i(91668),p=i(70946),o=i(46418),c=i(31572),d=i(88853);let u=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=(0,n.I7)().table({prop:"id",width:"40px"},{prop:"name",resize:!0},{prop:"gender",resize:!0,width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=(0,n.AV)().onTrigger(()=>this.datasource.getPeople(0,500)).create()}};return e.\u0275fac=function(t){return new(t||e)(c.Y36(o.BQ))},e.\u0275cmp=c.Xpm({type:e,selectors:[["pbl-column-resize-example"]],decls:1,vars:2,consts:[[1,"pbl-ngrid-cell-ellipsis","pbl-ngrid-header-cell-ellipsis",3,"dataSource","columns"]],template:function(e,t){1&e&&c._UZ(0,"pbl-ngrid",0),2&e&&c.Q6J("dataSource",t.ds)("columns",t.columns)},directives:[d.eZ],styles:[""],encapsulation:2,changeDetection:0}),e=(0,s.gn)([(0,a.en)("pbl-column-resize-example",{title:"Simple Resizing"}),(0,s.w6)("design:paramtypes",[o.BQ])],e),e})(),m=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=(0,n.I7)().table({prop:"id",width:"40px"},{prop:"name",width:"15%"},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date",maxWidth:120}).build(),this.ds=(0,n.AV)().onTrigger(()=>this.datasource.getPeople(0,500)).create()}resize(){const e=this.ds.hostGrid.columnApi.findColumn("id");this.ds.hostGrid.columnApi.resizeColumn(e,"200px")}};return e.\u0275fac=function(t){return new(t||e)(c.Y36(o.BQ))},e.\u0275cmp=c.Xpm({type:e,selectors:[["pbl-resizing-with-the-api-example"]],decls:6,vars:2,consts:[[3,"click"],[1,"pbl-ngrid-cell-ellipsis","pbl-ngrid-header-cell-ellipsis",3,"dataSource","columns"],["pblTable1",""]],template:function(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"button",0),c.NdJ("click",function(){return t.resize()}),c._uU(1,"Resize id to 200px"),c.qZA(),c.TgZ(2,"button",0),c.NdJ("click",function(){return c.CHM(e),c.MAs(5).autoSizeColumnToFit()}),c._uU(3,"Fit Content"),c.qZA(),c._UZ(4,"pbl-ngrid",1,2)}2&e&&(c.xp6(4),c.Q6J("dataSource",t.ds)("columns",t.columns))},directives:[d.eZ],styles:[""],encapsulation:2,changeDetection:0}),e=(0,s.gn)([(0,a.en)("pbl-resizing-with-the-api-example",{title:"Resizing With The Api"}),(0,s.w6)("design:paramtypes",[o.BQ])],e),e})(),g=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=(0,n.I7)().table({prop:"id",width:"40px"},{prop:"name",resize:!0,minWidth:100,maxWidth:300},{prop:"gender",resize:!0,minWidth:50},{prop:"birthdate",type:"date"}).build(),this.ds=(0,n.AV)().onTrigger(()=>this.datasource.getPeople(0,500)).create()}};return e.\u0275fac=function(t){return new(t||e)(c.Y36(o.BQ))},e.\u0275cmp=c.Xpm({type:e,selectors:[["pbl-resize-boundaries-example"]],decls:1,vars:2,consts:[[3,"dataSource","columns"]],template:function(e,t){1&e&&c._UZ(0,"pbl-ngrid",0),2&e&&c.Q6J("dataSource",t.ds)("columns",t.columns)},directives:[d.eZ],styles:[""],encapsulation:2,changeDetection:0}),e=(0,s.gn)([(0,a.en)("pbl-resize-boundaries-example",{title:"Resize Boundaries"}),(0,s.w6)("design:paramtypes",[o.BQ])],e),e})();var h=i(39225),b=i(19956);function z(e,t){1&e&&(c.TgZ(0,"pbl-ngrid-drag-resize",2),c._UZ(1,"span",3),c.qZA()),2&e&&c.Q6J("context",t.$implicit)("grabAreaWidth",8)}let x=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=(0,n.I7)().default({resize:!0}).table({prop:"id",wontBudge:!0,width:"40px"},{prop:"name"},{prop:"gender",width:"50px"},{prop:"email",width:"150px"},{prop:"country"},{prop:"language"},{prop:"birthdate",type:"date"},{prop:"balance"}).headerGroup({label:"Group A",columnIds:["name","gender"]},{label:"Group B",columnIds:["country","language"]}).build(),this.ds=(0,n.AV)().onTrigger(()=>this.datasource.getPeople(0,500)).create()}};return e.\u0275fac=function(t){return new(t||e)(c.Y36(o.BQ))},e.\u0275cmp=c.Xpm({type:e,selectors:[["pbl-custom-resizing-example"]],decls:2,vars:2,consts:[[3,"dataSource","columns"],[3,"context","grabAreaWidth",4,"pblNgridCellResizerRef"],[3,"context","grabAreaWidth"],[1,"pbl-ngrid-column-resizer-handle"]],template:function(e,t){1&e&&(c.TgZ(0,"pbl-ngrid",0),c.YNc(1,z,2,2,"pbl-ngrid-drag-resize",1),c.qZA()),2&e&&c.Q6J("dataSource",t.ds)("columns",t.columns)},directives:[d.eZ,h.q,b.S],styles:[""],encapsulation:2,changeDetection:0}),e=(0,s.gn)([(0,a.en)("pbl-custom-resizing-example",{title:"Custom Resizing"}),(0,s.w6)("design:paramtypes",[o.BQ])],e),e})(),f=(()=>{let e=class{};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[r.ez,p.a,n.dC,l.Ij.withDefaultTemplates()]]}),e=(0,s.gn)([(0,a.qB)(u,m,g,x)],e),e})()}}]);