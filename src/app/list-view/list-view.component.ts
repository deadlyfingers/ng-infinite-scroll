import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Media } from '../types';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent {
  // number of remaining items to scroll before loading next page
  @Input() loadBuffer = 10;
  @Input() loading: boolean;
  @Input() items: Media[];

  @Output() loadMore: EventEmitter<null> = new EventEmitter();

  // infinite scrolling handler
  scrolledIndexChange(index: number) {
    // return if already loading or empty
    if (this.loading || !this.items || this.items.length === 0) { return; }
    const count = this.items.length;
    // load more items when scrolling near the end of scroll view
    if (count - index <= this.loadBuffer) {
      this.loadMore.emit();
    }
  }

}
