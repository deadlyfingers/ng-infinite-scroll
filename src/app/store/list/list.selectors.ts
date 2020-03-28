import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as reducers from './list.reducers';

const selectState = createFeatureSelector<reducers.State>(reducers.featureKey);

export const selectListItems = createSelector(
  selectState, ({ items }) => items
);

export const selectPage = createSelector(
  selectState, ({ page }) => page
);

export const selectLoading = createSelector(
  selectState, ({ loading }) => loading
);
