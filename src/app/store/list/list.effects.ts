import { OnInitEffects, Actions, Effect, ofType } from '@ngrx/effects';
import { ResultsService } from 'src/app/services/results.service';
import { Store, select, Action } from '@ngrx/store';
import { AppState } from '../store.module';
import * as selectors from './list.selectors';
import * as actions from './list.actions';
import { map, retry, switchMap, tap, withLatestFrom, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { EMPTY } from 'rxjs';

export class ListEffects implements OnInitEffects {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private resultsService: ResultsService,
  ) { }

  items$ = this.store.pipe(select(selectors.selectListItems));
  page$ = this.store.pipe(select(selectors.selectPage));

  @Effect()
  loadNextPage = this.actions$.pipe(
    ofType(actions.loadNextPage),
    withLatestFrom(this.page$),
    switchMap(
      ([_, page]) => this.resultsService.getPageResult(page).pipe(
        map(result => actions.updatedItems({ items: result.data.Page.media })),
        catchError(() => EMPTY) // TODO: handle error () => of(selector)
      )
    )
  );

  ngrxOnInitEffects(): Action {
    return actions.loadNextPage();
  }

}
