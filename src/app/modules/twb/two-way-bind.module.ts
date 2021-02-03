import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ TwoWayBindComponent ],
  imports: [
    CommonModule, 
    FormsModule
  ],
  exports: [ TwoWayBindComponent ]
})
export class TwoWayBindModule { }
