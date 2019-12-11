import { DocumentNode } from 'graphql';
import { GraphQLQuery } from './graphql/types';
import { KeyValues } from '../types';

export default class GraphQLBase {
  static QueryBody(gqlQuery: DocumentNode, variables: KeyValues): string {
    if (!gqlQuery.loc) {
      throw Error('Failed to get GraphQL document');
    }
    const query = gqlQuery.loc.source.body;
    const json = GraphQLBase.Query(query, variables);
    // strips out whitespace for POST body request
    return JSON.stringify(json)
      .replace(/\\n/g, '')
      .replace(/\\t/g, ' ')
      .replace(/\s\s+/g, ' ');
  }

  static Query(query: string, variables: KeyValues): GraphQLQuery {
    return {
      query,
      variables,
    };
  }
}
