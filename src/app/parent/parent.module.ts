import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnPnlComponent } from './btn-pnl/btn-pnl.component';
import { AlertComponent } from './alert/alert.component';
import { ParentComponent } from './parent.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BtnPnlComponent, AlertComponent, ParentComponent],
  exports:[
    ParentComponent
  ]
})
export class ParentModule { }
