(self.webpackChunkpebula=self.webpackChunkpebula||[]).push([[9030],{39030:(e,t,n)=>{"use strict";n.d(t,{sx:()=>u});var i=n(20788),s=(n(58425),n(61511)),o=n(20531),r=n(7997),l=n(64914),c=n(31572);let u=(()=>{class e{constructor(t){l.q5.onCreatedSafe(e,(e,n)=>{const s=t.get(i.dm);s&&!0===s.autoEnable&&n.onInit().subscribe(()=>{n.hasPlugin(i.dm)||n.createPlugin(i.dm)})})}}return e.NGRID_PLUGIN=(0,l.Ic)({id:i.dm,factory:"create",runOnce:i.Rm},i.V4),e.\u0275fac=function(t){return new(t||e)(c.LFG(r.f8))},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[s.ez,o.HT,l.dC]]}),e})()},58425:(e,t,n)=>{"use strict";n.d(t,{e:()=>l});var i=n(19861),s=n(7997),o=n(64914),r=n(31572);let l=(()=>{class e{constructor(e,t,n){this._click=!1,this._dblClick=!1,n.onInit().subscribe(()=>{this.targetEventsPlugin=n.getPlugin("targetEvents")||n.createPlugin("targetEvents"),this.update()})}set cellEditClick(e){e=(0,i.Ig)(e),this._click!==e&&(this._click=e,this.update())}set cellEditDblClick(e){e=(0,i.Ig)(e),this._dblClick!==e&&(this._dblClick=e,this.update())}ngOnDestroy(){s.dW.kill(this)}update(){this.targetEventsPlugin&&(s.dW.kill(this,this.targetEventsPlugin),this._click&&this.targetEventsPlugin.cellClick.pipe((0,s.dW)(this,this.targetEventsPlugin)).subscribe(e=>{"data"===e.type&&e.column.editable&&e.context.startEdit(!0)}),this._dblClick&&this.targetEventsPlugin.cellDblClick.pipe((0,s.dW)(this,this.targetEventsPlugin)).subscribe(e=>{"data"===e.type&&e.column.editable&&e.context.startEdit(!0)}))}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(o.eZ),r.Y36(r.zs3),r.Y36(o.q5))},e.\u0275dir=r.lG2({type:e,selectors:[["pbl-ngrid","cellEditClick",""],["pbl-ngrid","cellEditDblClick",""]],inputs:{cellEditClick:"cellEditClick",cellEditDblClick:"cellEditDblClick"}}),e})()},20788:(e,t,n)=>{"use strict";n.d(t,{dm:()=>S,V4:()=>_,nF:()=>P,Rm:()=>A});var i=n(26019),s=n(87254),o=n(81110),r=n(87570),l=n(36882);class c{constructor(e){this.closingSelector=e}call(e,t){return t.subscribe(new u(e,this.closingSelector))}}class u extends l.Ds{constructor(e,t){super(e),this.closingSelector=t,this.subscribing=!1,this.openBuffer()}_next(e){this.buffer.push(e)}_complete(){const e=this.buffer;e&&this.destination.next(e),super._complete()}_unsubscribe(){this.buffer=void 0,this.subscribing=!1}notifyNext(){this.openBuffer()}notifyComplete(){this.subscribing?this.complete():this.openBuffer()}openBuffer(){let e,{closingSubscription:t}=this;t&&(this.remove(t),t.unsubscribe()),this.buffer&&this.destination.next(this.buffer),this.buffer=[];try{const{closingSelector:t}=this;e=t()}catch(n){return this.error(n)}t=new r.w,this.closingSubscription=t,this.add(t),this.subscribing=!0,t.add((0,l.ft)(e,new l.IY(this))),this.subscribing=!1}}class d{constructor(e){this.durationSelector=e}call(e,t){return t.subscribe(new a(e,this.durationSelector))}}class a extends l.Ds{constructor(e,t){super(e),this.durationSelector=t,this.hasValue=!1}_next(e){try{const t=this.durationSelector.call(this,e);t&&this._tryNext(e,t)}catch(t){this.destination.error(t)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(e,t){let n=this.durationSubscription;this.value=e,this.hasValue=!0,n&&(n.unsubscribe(),this.remove(n)),n=(0,l.ft)(t,new l.IY(this)),n&&!n.closed&&this.add(this.durationSubscription=n)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const e=this.value,t=this.durationSubscription;t&&(this.durationSubscription=void 0,t.unsubscribe(),this.remove(t)),this.value=void 0,this.hasValue=!1,super._next(e)}}}var h=n(25416),p=n(43835),w=n(79996),f=n(31572),b=n(64914);function g(e){return!!e.cellTarget}function y(e){return g(e)&&!!e.context}function x(e){return"row"===e.getAttribute("role")}function C(e){for(;e.parentElement;){if(x(e.parentElement))return e;e=e.parentElement}}function m(e,t){const n=e.getAttribute("data-rowtype")||"data";let i=0;switch(n){case"data":const s=e;for(;e.previousElementSibling;)i++,e=e.previousElementSibling;for(i=Math.min(i,t.length-1);i>-1;){if(t.get(i).rootNodes[0]===s)return{type:"data",subType:"data",rowIndex:i};i--}return;case"header":case"footer":return{type:n,subType:"data",rowIndex:i};default:for(;e.previousElementSibling&&e.previousElementSibling.getAttribute("data-rowtype")===n;)i++,e=e.previousElementSibling;return{type:"meta-footer"===n?"footer":"header",subType:"meta",rowIndex:i}}}function v(e,t,n){const i=[];for(const s of n)for(const n of t)e.findRowInCache(s.rowIdent).cells[n.colIndex]&&i.push({rowIdent:s.rowIdent,colIndex:n.colIndex});return i}var I=n(44019),k=n(44689),E=n(75842);const D=/^mac/.test(navigator.platform.toLowerCase()),R=e=>0===e.source.button;const S="targetEvents";function T(e){return e.observers.length>0}function A(){b.dS.extendProperty("editable")}class _{constructor(e,t,n){this.grid=e,this.injector=t,this.pluginCtrl=n,this.rowClick=new f.vpe,this.rowDblClick=new f.vpe,this.rowEnter=new f.vpe,this.rowLeave=new f.vpe,this.cellClick=new f.vpe,this.cellDblClick=new f.vpe,this.cellEnter=new f.vpe,this.cellLeave=new f.vpe,this.mouseDown=new f.vpe,this.mouseUp=new f.vpe,this.keyUp=new f.vpe,this.keyDown=new f.vpe,this.destroyed=new i.t,this._removePlugin=n.setPlugin(S,this),n.onInit().subscribe(()=>this.init())}static create(e,t){const n=b.q5.find(e);return new _(e,t,n)}init(){this.setupDomEvents(),function(e){const t=()=>"cell"===e.grid.focusMode,n=function(e){const{contextApi:t}=e.grid;function n(e){const n=e.context,i=t.focusedCell||{rowIdent:n.rowContext.identity,colIndex:n.index},s=t.findRowInCache(i.rowIdent),o=[],r=[];for(const t of function(e,t){const n=Math.min(e,t),i=n===e?t:e,s=[];for(let o=n+1;o<i;o++)s.push(o);return s}(i.colIndex,n.index))o.push({rowIdent:i.rowIdent,colIndex:t});o.push({rowIdent:i.rowIdent,colIndex:n.index});const l=Math.abs(n.rowContext.dsIndex-s.dsIndex),c=s.dsIndex>n.rowContext.dsIndex?-1:1;for(let d=1;d<=l;d++){const e=t.findRowInCache(i.rowIdent,c*d,!0);r.push({rowIdent:e.identity,colIndex:i.colIndex})}const u=v(t,o,r);t.selectCells([i,...o,...r,...u],!0)}return{handleMouseDown:function(e){t.focusedCell&&e.source.shiftKey?n(e):(D?e.source.metaKey:e.source.ctrlKey)?e.context.selected?t.unselectCells([e.context]):t.selectCells([e.context]):t.focusCell({rowIdent:e.context.rowContext.identity,colIndex:e.context.index})},handleKeyDown:function(e){const n=e.source;if(g(e)){const i=e.cellTarget;let s=1,o=!1;switch(n.keyCode){case E.LH:s=-1;case E.JH:break;case E.oh:s=-1;case E.SV:o=!0;break;default:return}e.source.preventDefault(),e.source.stopPropagation();let r=t.focusedCell;if(!r){const e=t.getCell(i);r={rowIdent:e.rowContext.identity,colIndex:e.index}}n.shiftKey?function(e,n){const{rowIdent:i,colIndex:s}=e,o=t.findRowInCache(i),[r,l]=n,c=[o.cells[s-1],o.cells[s+1]],u=[t.findRowInCache(i,-1,!0),t.findRowInCache(i,1,!0)];let d=(c[0]&&c[0].selected?-1:0)+(c[1]&&c[1].selected?1:0),a=(u[0]&&u[0].cells[s].selected?-1:0)+(u[1]&&u[1].cells[s].selected?1:0);0===d&&(d+=r),0===a&&(a+=l);const h=[];if(0!==d){let e=s,t=o.cells[s];for(;t&&t.selected;)h.push({rowIdent:i,colIndex:e}),e+=d,t=o.cells[e];r&&(d===r?t&&h.push({rowIdent:i,colIndex:e}):h.pop())}const p=[];if(0!==a){let e=i,n=t.findRowInCache(e,a,!0);for(;n&&n.cells[s].selected;)e=n.identity,p.push({rowIdent:e,colIndex:s}),n=t.findRowInCache(e,a,!0);l&&(a===l?n&&p.push({rowIdent:n.identity,colIndex:s}):p.pop())}const w=v(t,h,p);t.selectCells([e,...h,...p,...w],!0)}(r,o?[s,0]:[0,s]):function(e,n){const i=t.findRowInCache(e.rowIdent,n[1],!0);i&&t.focusCell({rowIdent:i.identity,colIndex:e.colIndex+n[0]})}(r,o?[s,0]:[0,s])}},handleSelectionChangeByMouseClickAndMove:n}}(e);e.keyDown.pipe((0,p.h)(t)).subscribe(n.handleKeyDown),e.mouseDown.pipe((0,p.h)(t),(0,p.h)(y),(0,p.h)(R),(0,I.b)(e=>{e.source.stopPropagation(),e.source.preventDefault()}),(0,I.b)(n.handleMouseDown),(0,k.w)(()=>e.cellEnter.pipe((0,h.R)(e.mouseUp))),(0,p.h)(y),(0,p.h)(R)).subscribe(n.handleSelectionChangeByMouseClickAndMove)}(this)}setupDomEvents(){const e=this.grid,t=this.pluginCtrl.extApi.cdkTable,n=t._element,i=(n,i)=>{const s=n.parentElement,o=m(s,t._rowOutlet.viewContainer);if(o){const t=Object.assign(Object.assign({},o),{source:i,cellTarget:n,rowTarget:s});if("data"===o.type)t.row=e.ds.renderedData[o.rowIndex];else if("meta"===t.subType){const{metaRowService:e}=this.pluginCtrl.extApi.rowsApi,n="header"===t.type?e.header:e.footer;for(const i of[n.fixed,n.row,n.sticky]){const e=i.find(e=>e.el===t.rowTarget);if(e){t.rowIndex=e.index;break}}}if(t.colIndex=function(e){let t=0;for(;e=e.previousElementSibling;)t++;return t}(n),"data"===o.subType){const e=this.grid.columnApi.findColumnAt(t.colIndex),n=this.grid.columnApi.indexOf(e);t.column=e,t.context=this.pluginCtrl.extApi.contextApi.getCell(t.rowIndex,n),t.context||(this.pluginCtrl.extApi.contextApi.clear(!0),t.context=this.pluginCtrl.extApi.contextApi.getCell(t.rowIndex,n))}else{const e=this.pluginCtrl.extApi.columnStore,n=("header"===o.type?e.metaHeaderRows:e.metaFooterRows)[t.rowIndex],i=e.find(n.keys[t.colIndex]);n.isGroup?(t.subType="meta-group",t.column="header"===o.type?i.headerGroup:i.footerGroup):t.column="header"===o.type?i.header:i.footer}return t}},r=(e,n,i)=>{if(i){const t={source:n,rowTarget:e,type:i.type,subType:i.subType,rowIndex:i.rowIndex,root:i};return"data"===i.type&&(t.row=i.row,t.context=i.context.rowContext),t}{const i=m(e,t._rowOutlet.viewContainer);if(i){const t=Object.assign(Object.assign({},i),{source:n,rowTarget:e});if("data"===i.type&&(t.context=this.pluginCtrl.extApi.contextApi.getRow(i.rowIndex),t.row=t.context.$implicit),"data"!==i.subType){const e=this.pluginCtrl.extApi.columnStore;("header"===i.type?e.metaHeaderRows:e.metaFooterRows)[t.rowIndex].isGroup&&(t.subType="meta-group")}return t}}};let l,u;const a=e=>{if(l){const t=l;return this.cellLeave.emit(Object.assign({},t,{source:e})),l=void 0,t}},f=e=>{if(u){const t=u;return this.rowLeave.emit(Object.assign({},t,{source:e})),u=void 0,t}},b=e=>{const t=function(e){const t=C(e.target);return t?{type:"cell",target:t}:x(e.target)?{type:"cell",target:e.target}:void 0}(e);if(t)if("cell"===t.type){const n=i(t.target,e);if(n)return{type:t.type,event:n,waitTime:T(this.cellDblClick)?250:1}}else if("row"===t.type){const n=r(t.target,e);if(n)return{type:t.type,event:n,waitTime:T(this.rowDblClick)?250:1}}},g=e=>{const t="cell"===e.type?e.event:void 0;return{cellEvent:t,rowEvent:t?r(t.rowTarget,t.source,t):e.event}},y=(e,t)=>{(0,s.R)(n,e).pipe((0,h.R)(this.destroyed),(0,p.h)(e=>T(t)),(0,w.U)(b),(0,p.h)(e=>!!e)).subscribe(e=>{const{cellEvent:n,rowEvent:i}=g(e);t.emit(n||i),this.syncRow(n||i)})};y("mouseup",this.mouseUp),y("mousedown",this.mouseDown),y("keyup",this.keyUp),y("keydown",this.keyDown);const v=(0,s.R)(n,"click").pipe((0,h.R)(this.destroyed),(0,p.h)(e=>T(this.cellClick)||T(this.cellDblClick)||T(this.rowClick)||T(this.rowDblClick)),(0,w.U)(b),(0,p.h)(e=>!!e));var I;v.pipe((I=()=>{return v.pipe((e=e=>(0,o.H)(e.waitTime),t=>t.lift(new d(e))));var e},function(e){return e.lift(new c(I))}),(0,p.h)(e=>e.length>0)).subscribe(e=>{const t=e.shift(),n=1===e.length,{cellEvent:i,rowEvent:s}=g(t);n?(i&&this.cellDblClick.emit(i),this.rowDblClick.emit(s)):(i&&this.cellClick.emit(i),this.rowClick.emit(s)),this.syncRow(i||s)}),(0,s.R)(n,"mouseleave").pipe((0,h.R)(this.destroyed)).subscribe(e=>{let t=a(e);t=f(e)||t,t&&this.syncRow(t)}),(0,s.R)(n,"mousemove").pipe((0,h.R)(this.destroyed)).subscribe(e=>{const t=C(e.target),n=l&&l.cellTarget,s=u&&u.rowTarget;let o,c;if(n!==t&&(c=a(e)||c),t){if(n===t)return;o=i(t,e),o&&this.cellEnter.emit(l=o)}const d=o&&o.rowTarget||x(e.target)&&e.target;if(s!==d&&(c=f(e)||c),d&&s!==d){const t=r(d,e,o);t&&this.rowEnter.emit(u=t)}c&&this.syncRow(c)})}destroy(){this.destroyed.next(),this.destroyed.complete(),this._removePlugin(this.grid)}syncRow(e){this.grid.rowsApi.syncRows(e.type,e.rowIndex)}}let P=(()=>{class e extends _{constructor(e,t,n){super(e,t,n)}ngOnDestroy(){this.destroy()}}return e.\u0275fac=function(t){return new(t||e)(f.Y36(b.eZ),f.Y36(f.zs3),f.Y36(b.q5))},e.\u0275dir=f.lG2({type:e,selectors:[["pbl-ngrid","targetEvents",""],["pbl-ngrid","rowClick",""],["pbl-ngrid","rowDblClick",""],["pbl-ngrid","rowEnter",""],["pbl-ngrid","rowLeave",""],["pbl-ngrid","cellClick",""],["pbl-ngrid","cellDblClick",""],["pbl-ngrid","cellEnter",""],["pbl-ngrid","cellLeave",""],["pbl-ngrid","keyDown",""],["pbl-ngrid","keyUp",""]],outputs:{rowClick:"rowClick",rowDblClick:"rowDblClick",rowEnter:"rowEnter",rowLeave:"rowLeave",cellClick:"cellClick",cellDblClick:"cellDblClick",cellEnter:"cellEnter",cellLeave:"cellLeave",keyDown:"keyDown",keyUp:"keyUp"},features:[f.qOj]}),e})()}}]);