import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Photo } from '../../models/photo.model';
import { ItemsState } from './item.reducer';

export const selectItemFeature = createFeatureSelector<ItemsState>('items');

export const selectList = createSelector(
    selectItemFeature,
    (state: ItemsState): Photo[] => state.list
);