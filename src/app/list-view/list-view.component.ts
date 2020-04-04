import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Media } from '../types';
import { fromEvent } from 'rxjs';
import { debounceTime, tap, distinctUntilChanged } from 'rxjs/operators';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent {
  // number of items remaining to scroll before loading next page
  @Input() loadMoreBuffer = 1;
  @Input() loading: boolean;
  @Input() items: Media[];

  @Output() loadMore: EventEmitter<null> = new EventEmitter();

  @ViewChild(CdkVirtualScrollViewport, { static: true }) viewport: CdkVirtualScrollViewport;
  scrollHeight: number;

  // work-around when resizing viewport height to recalculate number of cells required to render
  resizeHandler$ = fromEvent(window, 'resize').pipe(
    distinctUntilChanged(),
    debounceTime(60),
    tap(() => this.viewport.checkViewportSize())
  );

  // infinite scrolling handler
  scrolledIndexChange(index: number) {
    // return if already loading or empty
    if (this.loading || !this.items || this.items.length === 0) { return; }

    const { end } = this.viewport.getRenderedRange();
    const total = this.viewport.getDataLength();
    const count = this.items.length;
    console.assert(count === total);

    // load more items when scrolling near the end of scroll view
    if (end >= total - this.loadMoreBuffer) {
      this.loadMore.emit();
    }
  }

}
