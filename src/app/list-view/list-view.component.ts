import { Component, OnInit } from '@angular/core';
import { NextObserver, BehaviorSubject } from 'rxjs';
import { Result, Media } from '../types';
import { ResultsService } from '../services/results.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  page = 1;
  loading = false;
  observableData: BehaviorSubject<Media[]>;

  // number of remaining items to scroll before loading next page
  loadBuffer = 10;

  // async data observer
  observer: NextObserver<Result> = {
    next: result => {
      if (!result.data) {
        throw new Error('Failed to get result items');
      }
      if (!this.observableData || this.observableData.value.length === 0) {
        // init data for first load
        this.observableData = new BehaviorSubject(result.data.Page.media);
      } else {
        // append data for subsequent load
        const data = this.observableData.value.concat(result.data.Page.media);
        this.observableData.next(data);
      }
      this.page += 1;
      this.loading = false;
    },
    error: err => this.errorHandler(err),
    complete: null
  };

  constructor(
    private resultsService: ResultsService,
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    if (!this.loading) {
      this.loading = true;
      this.resultsService.getPageResult<Result>(this.page).subscribe(this.observer);
    }
  }

  errorHandler(err) {
    console.error(this.page, 'load error:', err);
  }

  nextPage() {
    this.loadData();
  }

  // infinite scrolling handler
  scrolledIndexChange(index: number) {
    if (this.loading || !this.observableData) { return; }
    const count = this.observableData.value.length;
    // load more items when scrolling near the end of scroll view
    if (count - index <= this.loadBuffer) {
      this.nextPage();
    }
  }

}
