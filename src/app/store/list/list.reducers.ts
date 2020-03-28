import {
  createReducer,
  on,
  Action
} from '@ngrx/store';
import * as actions from './list.actions';
import { Media } from 'src/app/types';

export const featureKey = 'list';

export interface StateList {
  items: Media[];
  page: number;
  loading: boolean;
}

const initialStateList: StateList = {
  items: [],
  page: 0,
  loading: false,
};

// tslint:disable-next-line: no-empty-interface
export interface State extends StateList { }

const listReducer = createReducer(
  initialStateList,
  on(actions.loadNextPage, state => {
    const nextPage = state.page + 1;
    return {
      ...state,
      page: nextPage,
      loading: true,
    };
  }),
  on(actions.updatedItems, (state, { items }) => {
    const appendNewItems = state.items.concat(items);
    return {
      ...state,
      items: appendNewItems,
      loading: false,
    };
  }),
);

export function reducer(state: State, action: Action): State {
  return listReducer(state, action);
}
