import { createAction, props } from '@ngrx/store';
import { Photo } from 'src/app/models/photo.model';

export enum ItemsActions {

    LOAD = '[Item] Load Item',
    LOAD_SUCCESS = '[Item] Load Item Success',
    LOAD_ERROR = '[Item] Load Item Error',

    ADD = '[Item] Add Item',
    UPDATE = '[Item] Update Item',
    REMOVE = '[Item] Remove Item'

}

export const load = createAction(ItemsActions.LOAD);
export const loadSuccess = createAction(ItemsActions.LOAD_SUCCESS, props<{ items: Photo[] }>());
export const loadError = createAction(ItemsActions.LOAD_ERROR);

export const add = createAction(ItemsActions.ADD, props<{ item: Photo }>());
export const update = createAction(ItemsActions.UPDATE, props<{ item: Photo }>());
export const remove = createAction(ItemsActions.REMOVE, props<{ id: number }>());