import { reducer, initialState } from './list.reducers';
import * as actions from './list.actions';
import { generateItems } from 'src/app/services/results.service.spec';

describe('Store List Reducers', () => {

  it('should load next page', () => {
    const expectedState = {
      ...initialState,
      loading: true,
      page: initialState.page + 1
    };
    expect(reducer(initialState, actions.loadNextPage)).toEqual(jasmine.objectContaining(expectedState));
  });

  it('should load and append items', () => {
    const items1 = generateItems(10, 0);
    const expectedState = {
      ...initialState,
      loading: false,
      items: items1
    };
    expect(reducer(initialState, actions.updatedItems({ items: items1 }))).toEqual(jasmine.objectContaining(expectedState));

    const initialState2 = expectedState;
    const items2 = generateItems(10, 10);
    const combinedItems = items1.concat(items2);
    const expectedState2 = {
      ...initialState,
      loading: false,
      items: combinedItems
    };
    expect(reducer(initialState2, actions.updatedItems({ items: items2 }))).toEqual(jasmine.objectContaining(expectedState2));
  });

});
