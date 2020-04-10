import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import GraphQLBase from './';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class PageService extends GraphQLBase {
  protected url: string;

  constructor(
    protected http: HttpClient,
  ) {
    super();
  }

  protected postPaginatedQuery$<T>(page: number, query: string): Observable<T> {
    const variables = {
      page
    };
    const body = GraphQLBase.QueryBody(query, variables);
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    return this.http.post<T>(this.url, body, { headers });
  }
}
