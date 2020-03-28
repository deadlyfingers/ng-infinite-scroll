import { createAction, props } from '@ngrx/store';
import { Media } from 'src/app/types';

export const loadNextPage = createAction('[List] Load Next Page');

export const updatedItems = createAction('[List] Updated Items', props<{ items: Media[] }>());
