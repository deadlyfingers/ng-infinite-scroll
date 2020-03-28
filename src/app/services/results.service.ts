import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageService } from './page.service';
import { Observable } from 'rxjs';
import { Result } from '../types/DataModel';
import PageResultsGQL from './graphql/PageResults.gql';
import GraphQLBase from '.';
import { ENDPOINT } from './results.service.common';

@Injectable({
  providedIn: 'root'
})
export class ResultsService extends PageService {
  protected url = ENDPOINT;

  private query = GraphQLBase.GetBody(PageResultsGQL);

  getPageResult(page: number): Observable<Result> {
    if (!page) {
      throw new Error(`Expected query with page no > 0 but got ${page}`);
    }
    return this.postPaginatedQuery<Result>(page, this.query);
  }
}
