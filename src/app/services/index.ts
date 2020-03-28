import { DocumentNode } from 'graphql';
import { GraphQLQuery } from './graphql/types';
import { KeyValues } from '../types';

export default class GraphQLBase {
  static Query(query: string, variables: KeyValues): GraphQLQuery {
    return {
      query,
      variables,
    };
  }

  static QueryBody(gqlQuery: string, variables: KeyValues): string {
    const json = GraphQLBase.Query(gqlQuery, variables);
    // strips out whitespace for POST body request
    return JSON.stringify(json)
      .replace(/\\n/g, '')
      .replace(/\\t/g, ' ')
      .replace(/\s\s+/g, ' ');
  }

  static GetBody(gqlQuery: DocumentNode): string {
    if (!gqlQuery.loc || !gqlQuery.loc.source || !gqlQuery.loc.source.body || gqlQuery.loc.source.body.length === 0) {
      throw Error('Failed to import GraphQL document body');
    }
    return gqlQuery.loc.source.body;
  }
}
