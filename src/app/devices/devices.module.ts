import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIndexComponent } from './index/index.component';
import { ViewComponent } from './viewbyid/viewbyid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeviceRoutingModule } from './device-routing-module';

@NgModule({
  declarations: [
    DIndexComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DeviceRoutingModule
  ]
})
export class DevicesModule { }
