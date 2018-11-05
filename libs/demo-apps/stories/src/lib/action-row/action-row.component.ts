/* @neg-example:ex-1 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { createDS, columnFactory } from '@neg/table';
import { Person, DemoDataSource } from '@neg/demo-apps/shared';

const COLUMNS = columnFactory()
  .default({minWidth: 100})
  .table(
    { prop: 'id', sort: true, width: '40px' },
    { prop: 'name', sort: true },
    { prop: 'gender', width: '50px' },
    { prop: 'birthdate', type: 'date' }
  )
  .build();


@Component({
  selector: 'neg-action-row-table-example-component',
  templateUrl: './action-row.component.html',
  styleUrls: ['./action-row.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionRowStoryTableExampleComponent {

  columns = COLUMNS;
  ds1 = createDS<Person>()
    .onTrigger( () => this.datasource.getPeople(500, 500) )
    .create();

    constructor(private datasource: DemoDataSource) {}
}
/* @neg-example:ex-1 */
