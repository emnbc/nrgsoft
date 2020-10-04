import { createReducer, on, Action } from '@ngrx/store';
import { add, remove, update, loadSuccess, loadError } from './item.actions';
import { Photo } from '../../models/photo.model';

export interface ItemsState {
    list: Photo[];
}

export const initialState: ItemsState = {
    list: []
}

const _itemReducer = createReducer(
    initialState,
    on(loadSuccess, (state, action) => ({
        ...state,
        list: action.items
    })),
    on(loadError, state => ({
        ...state,
        list: []
    })),
    on(add, (state, action) => ({
        ...state,
        list: [...state.list, {...action.item, id: state.list[state.list.length-1].id + 1}]
    })),
    on(update, (state, action) => ({
        ...state,
        list: state.list.map((item: Photo) => {
            return item.id === action.item.id ? action.item : item;
        })
    })),
    on(remove, (state, action) => ({
        ...state,
        list: state.list.filter((item: Photo) => {
            return item.id !== action.id;
        })
    }))
);

export function itemReducer(state: ItemsState, action: Action) {
  return _itemReducer(state, action);
}