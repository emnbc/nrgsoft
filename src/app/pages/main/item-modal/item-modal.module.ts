import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../shared/material.module';
import { ItemModalComponent } from './item-modal.component';


@NgModule({
  declarations: [
    ItemModalComponent
  ],
  imports: [
    SharedModule,
    MaterialModule
  ],
  exports: [
    ItemModalComponent
  ]
})
export class ItemModalModule { }
