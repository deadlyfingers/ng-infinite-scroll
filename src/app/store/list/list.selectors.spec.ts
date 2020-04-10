import * as selectors from './list.selectors';
import { initialState } from './list.reducers';
import { generateItems, TEST_PAGE_SIZE } from 'src/app/services/results.service.spec';

describe('Store List Selectors', () => {

  it('should select list items', () => {
    const before = selectors.selectListItems.projector(initialState);
    expect(before.length).toBe(0);
    const newState = {
      ...initialState,
      items: generateItems(TEST_PAGE_SIZE),
    };
    const after = selectors.selectListItems.projector(newState);
    expect(after.length).toBe(TEST_PAGE_SIZE);
  });

  it('should select page', () => {
    const before = selectors.selectPage.projector(initialState);
    expect(before).toBe(0);
    const newState = {
      ...initialState,
      page: 1,
    };
    const after = selectors.selectPage.projector(newState);
    expect(after).toBe(1);
  });

  it('should return loading status', () => {
    const before = selectors.selectLoading.projector(initialState);
    expect(before).toBeFalsy();
    const newState = {
      ...initialState,
      loading: true,
    };
    const after = selectors.selectLoading.projector(newState);
    expect(after).toBeTruthy();
  });

});
