export * from './DataModel';

export type ValueType = string | number | boolean | null;

export interface KeyValues {
  [key: string]: ValueType;
}
