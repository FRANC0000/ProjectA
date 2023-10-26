import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EMotionRoutingModule } from './e-motion-routing.module';
import { EMotionComponent } from './e-motion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EMotionComponent],
  imports: [
    CommonModule,
    EMotionRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class EMotionModule { }
