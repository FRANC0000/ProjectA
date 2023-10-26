import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EMotionComponent } from './e-motion.component';

const routes: Routes = [{
  path: '', component: EMotionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EMotionRoutingModule{}
