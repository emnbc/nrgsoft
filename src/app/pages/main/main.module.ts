import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { ShowItemModalModule } from './show-item-modal/show-item-modal.module';
import { ItemModalModule } from './item-modal/item-modal.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    SharedModule,
    MaterialModule,
    MainRoutingModule,
    ShowItemModalModule,
    ItemModalModule
  ]
})
export class MainModule { }
