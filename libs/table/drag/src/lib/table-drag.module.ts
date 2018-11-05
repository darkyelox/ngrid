import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { NegTableModule, provideCommon } from '@neg/table';

import {
  CdkLazyDropList, CdkLazyDrag, NegDragHandle,
  NegTableRowReorderPluginDirective, NegTableRowDragDirective,
  NegTableColumnReorderPluginDirective, NegTableColumnDragDirective, NegTableCellDraggerRefDirective,
  NegTableAggregationContainerDirective,
} from './drag-and-drop/index';

import { NegTableDragResizeComponent, NegTableCellResizerRefDirective } from './column-resize/index';

import { DragPluginDefaultTemplatesComponent } from './default-settings.component';

@NgModule({
  imports: [
    CommonModule,
    NegTableModule,
    DragDropModule
  ],
  declarations: [
    DragPluginDefaultTemplatesComponent,
    CdkLazyDropList, CdkLazyDrag, NegDragHandle,
    NegTableRowReorderPluginDirective, NegTableRowDragDirective,
    NegTableColumnReorderPluginDirective, NegTableColumnDragDirective, NegTableCellDraggerRefDirective,
    NegTableAggregationContainerDirective,
    NegTableDragResizeComponent, NegTableCellResizerRefDirective,
  ],
  exports: [
    DragDropModule,
    CdkLazyDropList, CdkLazyDrag, NegDragHandle,
    NegTableRowReorderPluginDirective, NegTableRowDragDirective,
    NegTableColumnReorderPluginDirective, NegTableColumnDragDirective, NegTableCellDraggerRefDirective,
    NegTableAggregationContainerDirective,
    NegTableDragResizeComponent, NegTableCellResizerRefDirective,
  ],
  entryComponents: [ DragPluginDefaultTemplatesComponent ],
})
export class NegTableDragModule {

  static withDefaultTemplates(): ModuleWithProviders {
    return {
      ngModule: NegTableDragModule,
      providers: provideCommon( [ { component: DragPluginDefaultTemplatesComponent } ]),
    };
  }
}
