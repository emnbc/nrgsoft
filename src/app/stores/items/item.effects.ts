import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { load, loadSuccess, loadError } from './item.actions';
import { ItemService } from '../../services/item.service';
 
@Injectable()
export class ItemEffects {
 
  loadItems = createEffect(() => this.actions.pipe(
    ofType(load),
    mergeMap(() => this.itemService.getAll()
      .pipe(
        map(items => loadSuccess({items})),
        catchError(() => of(loadError()))
      ))
    )
  );
 
  constructor(
    private actions: Actions,
    private itemService: ItemService
  ) { }

}