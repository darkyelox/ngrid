import { take } from 'rxjs/operators';
import { Input, Directive, ElementRef, QueryList, OnDestroy, Optional, AfterViewInit } from '@angular/core';
import { CdkDropList, CdkDrag, CdkDragHandle, CDK_DROP_LIST_CONTAINER } from '@angular/cdk/drag-drop';

@Directive({
  selector: '[cdkLazyDropList]',
  exportAs: 'cdkLazyDropList',
  providers: [
    { provide: CDK_DROP_LIST_CONTAINER, useExisting: CdkLazyDropList },
  ],
  host: { // tslint:disable-line:use-host-property-decorator
    'class': 'cdk-drop-list',
    '[id]': 'id',
    '[class.cdk-drop-list-dragging]': '_dragging'
  }
})
export class CdkLazyDropList<T = any> extends CdkDropList<T> {
  /**
   * Selector that will be used to determine the direct container element, starting from
   * the `cdkDropList` element and going down the DOM. Passing an alternate direct container element
   * is useful when the `cdkDropList` is not the direct parent (i.e. ancestor but not father)
   * of the draggable elements.
   */
  // tslint:disable-next-line:no-input-rename
  @Input('cdkDropListDirectContainerElement') directContainerElement: string;

  _draggables: QueryList<CdkDrag>;

  private originalElement: ElementRef<HTMLElement>;
  private _draggablesSet = new Set<CdkDrag>();

  start(): void {
    // This is a workaround for https://github.com/angular/material2/pull/14153
    // Working around the missing capability for selecting a container element that is not the drop container host.
    if (!this.originalElement) {
      this.originalElement = this.element;
    }
    if (this.directContainerElement) {
      const element = this.originalElement.nativeElement.querySelector(this.directContainerElement) as HTMLElement;
      this.element = new ElementRef<HTMLElement>(element);
    } else {
      this.element = this.originalElement;
    }
    super.start();
  }

  addDrag(drag: CdkDrag): void {
    this._draggablesSet.add(drag);
    this._draggables.reset(Array.from(this._draggablesSet.values()));
  }

  removeDrag(drag: CdkDrag): boolean {
    const result = this._draggablesSet.delete(drag);
    if (result) {
      this._draggables.reset(Array.from(this._draggablesSet.values()));
    }
    return result;
  }

}

@Directive({
  selector: '[cdkLazyDrag]',
  exportAs: 'cdkLazyDrag',
  host: { // tslint:disable-line:use-host-property-decorator
    'class': 'cdk-drag',
    '[class.cdk-drag-dragging]': '_hasStartedDragging && _isDragging()',
  },
})
export class CdkLazyDrag<T = any, Z extends CdkLazyDropList<T> = CdkLazyDropList<T>> extends CdkDrag<T> implements AfterViewInit, OnDestroy {

  @Input() get cdkDropList(): Z { return this.dropContainer as Z; }
  set cdkDropList(value: Z) {
    // TO SUPPORT `cdkDropList` via string input (ID) we need a reactive registry...
    if (this.cdkDropList) {
      this.cdkDropList.removeDrag(this);
    }
    this.dropContainer = value;
    if (value) {
      value.addDrag(this);
    }
  }

  // This is a workaround for https://github.com/angular/material2/pull/14158
  // Working around the issue of drop container is not the direct parent (father) of a drag item.
  // The entire ngAfterViewInit() overriding method can be removed if PR accepted.
  ngAfterViewInit(): void {
    this.started.subscribe( startedEvent => {
      if (this.dropContainer) {
        const element = this.getRootElement();
        const initialRootElementParent = element.parentNode as HTMLElement;
        if (!element.nextSibling && initialRootElementParent !== this.dropContainer.element.nativeElement) {
          this.ended.pipe(take(1)).subscribe( endedEvent => initialRootElementParent.appendChild(element) );
        }
      }
    });

    super.ngAfterViewInit();
  }

  ngOnDestroy(): void {
    if (this.cdkDropList) {
      this.cdkDropList.removeDrag(this);
    }
    super.ngOnDestroy();
  }
}

/** Handle that can be used to drag and CdkDrag instance. */
@Directive({
  selector: '[negDragHandle]',
  host: { // tslint:disable-line:use-host-property-decorator
    'class': 'cdk-drag-handle'
  },
  providers: [
    {
      provide: CdkDragHandle,
      useExisting: NegDragHandle
    }
  ]
})
export class NegDragHandle extends CdkDragHandle {
  constructor(public element: ElementRef<HTMLElement>, @Optional() parentDrag?: CdkDrag) { super(element, parentDrag); }
}
