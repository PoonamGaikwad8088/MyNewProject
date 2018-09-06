import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { DispinputComponent } from './dispinput/dispinput.component';
import { DispoutputComponent } from './dispoutput/dispoutput.component';
import { KeyboardComponent } from './keyboard/keyboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalculatorComponent, DispinputComponent, DispoutputComponent, KeyboardComponent],
  exports:[
    CalculatorComponent
  ]
})
export class CalculatorModule { }
