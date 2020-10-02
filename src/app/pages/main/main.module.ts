import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    SharedModule,
    MaterialModule,
    MainRoutingModule
  ]
})
export class MainModule { }
