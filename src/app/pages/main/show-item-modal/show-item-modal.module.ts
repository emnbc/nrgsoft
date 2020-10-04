import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../shared/material.module';
import { ShowItemModalComponent } from './show-item-modal.component';



@NgModule({
  declarations: [ShowItemModalComponent],
  imports: [
    SharedModule,
    MaterialModule
  ],
  exports: [ShowItemModalComponent]
})
export class ShowItemModalModule { }
