import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/store.module';
import { loadNextPage } from '../store/list/list.actions';
import * as selectors from '../store/list/list.selectors';
import { ListViewComponent } from '../list-view/list-view.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [
    ListViewComponent
  ]
})
export class ListComponent {
  items$ = this.store.pipe(select(selectors.selectListItems));
  loading$ = this.store.pipe(select(selectors.selectLoading));

  constructor(
    private store: Store<AppState>
  ) { }

  loadNextPage() {
    this.store.dispatch(loadNextPage());
  }

}
