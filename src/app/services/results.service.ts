import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import pageResultsQuery from './graphql/PageResults.gql';
import GraphQLBase from './';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService extends GraphQLBase {
  url = 'https://graphql.anilist.co/';

  constructor(
    private http: HttpClient,
  ) {
    super();
  }

  getPageResult<Result>(page: number): Observable<Result> {
    if (!page) {
      throw new Error(`Expected page no > 0 but got ${page}`);
    }
    const variables = {
      page
    };
    const body = GraphQLBase.QueryBody(pageResultsQuery, variables);
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    return this.http.post<Result>(this.url, body, { headers });
  }
}
