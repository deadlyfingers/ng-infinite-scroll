import { provideMockActions } from '@ngrx/effects/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { TestBed, async } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from '../store.module';
import * as selectors from './list.selectors';
import * as actions from './list.actions';
import { generateItems, MockResultsService, TEST_PAGE_SIZE, generateResult } from 'src/app/services/results.service.spec';
import { initialState } from './list.reducers';
import { ListEffects } from './list.effects';
import { cold, hot } from 'jasmine-marbles';
import { ResultsService } from 'src/app/services/results.service';
import { Result, Media } from 'src/app/types/DataModel';

describe('Store List Effects', () => {
  let store: MockStore<AppState>;
  let mockService: MockResultsService;
  let effects: ListEffects;
  let actions$: Observable<Action>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        provideMockStore(),
        { provide: ResultsService, useClass: MockResultsService },
        MockResultsService,
        ListEffects,
        provideMockActions(() => actions$),
      ]
    });

    store = TestBed.get(Store);
    mockService = TestBed.get(ResultsService);
    effects = TestBed.get(ListEffects);
    actions$ = of({ type: 'none' });

    store.overrideSelector(selectors.selectPage, initialState.page);
    store.overrideSelector(selectors.selectLoading, initialState.loading);
    store.overrideSelector(selectors.selectListItems, initialState.items);
  });

  it('should create', () => {
    expect(effects).toBeTruthy();
  });

  it('should load next page', () => {
    let items: Media[] = [];
    const mockResult1 = generateResult(TEST_PAGE_SIZE, initialState.page + 1);
    mockService.response$ = of(mockResult1);
    items = getResultItems(mockResult1);

    actions$ = of(actions.loadNextPage());
    const expected$ = cold('(a|)', {
      a: actions.updatedItems({ items })
    });
    expect(effects.loadNextPage$).toBeObservable(expected$);
  });

  const getResultItems = (result: Result): Media[] => {
    return result.data.Page.media;
  };

});
