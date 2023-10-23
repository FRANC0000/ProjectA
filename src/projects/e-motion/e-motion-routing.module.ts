import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EMotionRoutingModule implements OnInit{ 

  ngOnInit(){
    console.log('ngOnInit EMOTION');
  }
}
