(self.webpackChunkpebula=self.webpackChunkpebula||[]).push([[633],{633:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ColumnReorderExampleModule:()=>w});var o=n(64762),r=n(61511),c=n(64914),l=n(44903),a=n(91668),p=n(70946),s=n(46418),u=n(31572),i=n(88853),d=n(83077);let m=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=(0,c.I7)().table({prop:"id",width:"40px"},{prop:"name",reorder:!0},{prop:"gender",reorder:!0,width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=(0,c.AV)().onTrigger(()=>this.datasource.getPeople(0,500)).create()}};return e.\u0275fac=function(t){return new(t||e)(u.Y36(s.BQ))},e.\u0275cmp=u.Xpm({type:e,selectors:[["pbl-column-reorder-example"]],decls:1,vars:2,consts:[["columnReorder","",3,"dataSource","columns"]],template:function(e,t){1&e&&u._UZ(0,"pbl-ngrid",0),2&e&&u.Q6J("dataSource",t.ds)("columns",t.columns)},directives:[i.eZ,d.I],styles:[""],encapsulation:2,changeDetection:0}),e=(0,o.gn)([(0,a.en)("pbl-column-reorder-example",{title:"Simple Reordering"}),(0,o.w6)("design:paramtypes",[s.BQ])],e),e})(),g=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=(0,c.I7)().table({prop:"id",width:"40px"},{prop:"name"},{prop:"language",width:"120px"},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=(0,c.AV)().onTrigger(()=>this.datasource.getPeople(0,500)).create()}move(e){const t=e.columnApi.findColumn("id"),n=e.columnApi.findColumn("gender");e.columnApi.moveColumn(t,n)}swap(e){const t=e.columnApi.findColumn("name"),n=e.columnApi.findColumn("birthdate");e.columnApi.swapColumns(t,n)}};return e.\u0275fac=function(t){return new(t||e)(u.Y36(s.BQ))},e.\u0275cmp=u.Xpm({type:e,selectors:[["pbl-moving-with-the-api-example"]],decls:6,vars:2,consts:[[3,"click"],[3,"dataSource","columns"],["t",""]],template:function(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"button",0),u.NdJ("click",function(){u.CHM(e);const n=u.MAs(5);return t.move(n)}),u._uU(1,"Move id after gender"),u.qZA(),u.TgZ(2,"button",0),u.NdJ("click",function(){u.CHM(e);const n=u.MAs(5);return t.swap(n)}),u._uU(3,"Swap name after birthdate"),u.qZA(),u._UZ(4,"pbl-ngrid",1,2)}2&e&&(u.xp6(4),u.Q6J("dataSource",t.ds)("columns",t.columns))},directives:[i.eZ],styles:[""],encapsulation:2,changeDetection:0}),e=(0,o.gn)([(0,a.en)("pbl-moving-with-the-api-example",{title:"Moving With The Api"}),(0,o.w6)("design:paramtypes",[s.BQ])],e),e})(),h=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=(0,c.I7)().table({prop:"id",wontBudge:!0,reorder:!1,width:"40px"},{prop:"name",reorder:!0},{prop:"gender",reorder:!0,width:"50px"},{prop:"birthdate",wontBudge:!0,type:"date",reorder:!1}).build(),this.ds=(0,c.AV)().onTrigger(()=>this.datasource.getPeople(0,500)).create()}};return e.\u0275fac=function(t){return new(t||e)(u.Y36(s.BQ))},e.\u0275cmp=u.Xpm({type:e,selectors:[["pbl-locking-columns-example"]],decls:1,vars:2,consts:[["columnReorder","",3,"dataSource","columns"]],template:function(e,t){1&e&&u._UZ(0,"pbl-ngrid",0),2&e&&u.Q6J("dataSource",t.ds)("columns",t.columns)},directives:[i.eZ,d.I],styles:[""],encapsulation:2,changeDetection:0}),e=(0,o.gn)([(0,a.en)("pbl-locking-columns-example",{title:"Locking Columns"}),(0,o.w6)("design:paramtypes",[s.BQ])],e),e})(),b=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=(0,c.I7)().default({reorder:!0}).table({prop:"id",wontBudge:!0,width:"40px"},{prop:"name"},{prop:"gender",width:"50px"},{prop:"email",width:"150px"},{prop:"country"},{prop:"language"},{prop:"birthdate",type:"date"},{prop:"balance"}).headerGroup({label:"Un-Locked",columnIds:["name","gender"]},{label:"Locked",columnIds:["country","language"]}).headerGroup({label:"Gender, Email & Country",columnIds:["gender","email","country"]},{label:"Birthday & Balance",columnIds:["birthdate","balance"]}).build(),this.ds=(0,c.AV)().onTrigger(()=>this.datasource.getPeople(0,500)).create()}};return e.\u0275fac=function(t){return new(t||e)(u.Y36(s.BQ))},e.\u0275cmp=u.Xpm({type:e,selectors:[["pbl-group-columns-lock-example"]],decls:1,vars:2,consts:[["columnReorder","",3,"dataSource","columns"]],template:function(e,t){1&e&&u._UZ(0,"pbl-ngrid",0),2&e&&u.Q6J("dataSource",t.ds)("columns",t.columns)},directives:[i.eZ,d.I],styles:[""],encapsulation:2,changeDetection:0}),e=(0,o.gn)([(0,a.en)("pbl-group-columns-lock-example",{title:"Group Columns Lock"}),(0,o.w6)("design:paramtypes",[s.BQ])],e),e})(),w=(()=>{let e=class{};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[r.ez,p.a,c.dC,l.Ij.withDefaultTemplates()]]}),e=(0,o.gn)([(0,a.qB)(m,g,h,b)],e),e})()}}]);