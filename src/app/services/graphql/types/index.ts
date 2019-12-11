import { KeyValues } from 'src/app/types';

export interface GraphQLQuery {
  query: string;
  variables: KeyValues;
}
