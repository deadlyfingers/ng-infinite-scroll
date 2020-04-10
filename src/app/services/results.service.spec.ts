import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ResultsService } from './results.service';
import { Observable, of, EMPTY } from 'rxjs';
import { Result, Media } from '../types/DataModel';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { cold, hot } from 'jasmine-marbles';

export const TEST_PAGE_SIZE = 10;

export const generateItems = (length: number, offset: number = 1): Media[] => Array.from(
  { length }, (_, i) => ({
    id: (i + offset),
    title: { english: `test ${i + offset}`, native: '' },
    description: 'test',
    coverImage: { color: '#000', medium: '' }
  })
);

export const generateResult = (perPage: number, currentPage: number = 1, lastPage: number = 2): Result => {
  return {
    data: {
      Page: {
        pageInfo: {
          total: (perPage * lastPage),
          perPage,
          currentPage,
          lastPage,
          hasNextPage: (currentPage < lastPage)
        },
        media: generateItems(perPage, currentPage)
      }
    }
  };
};

export class MockResultsService extends ResultsService {
  response$: Observable<Result> = EMPTY;

  getPageResult$(page: number): Observable<Result> {
    return this.response$;
  }
}

describe('ResultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [
      ResultsService,
    ]
  }));

  it('should be created', () => {
    const service: ResultsService = TestBed.get(ResultsService);
    expect(service).toBeTruthy();
  });

});

describe('MockResultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
    providers: [
      { provide: ResultsService, useClass: MockResultsService },
      MockResultsService,
    ]
  }));

  it('should be created', () => {
    const service: MockResultsService = TestBed.get(ResultsService);
    expect(service).toBeTruthy();
  });

  it('should get page result', () => {
    const service: MockResultsService = TestBed.get(MockResultsService);
    const page = 1;
    const result = generateResult(TEST_PAGE_SIZE, page);
    service.response$ = of(result);
    const expected$ = cold('(a|)', {
      a: result
    });
    expect(service.getPageResult$(page)).toBeObservable(expected$);
  });

});
