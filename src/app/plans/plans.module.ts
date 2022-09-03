import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlansRoutingModule } from './plans-routing-module';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PlansRoutingModule
  ]
})
export class PlansModule { }
