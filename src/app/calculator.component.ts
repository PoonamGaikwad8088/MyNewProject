import { Component, OnInit } from '@angular/core';
import {Calc} from './calc'
import { calcBindingFlags } from '../../../node_modules/@angular/core/src/view/util';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  showinput:string
  
  constructor() { }

  ngOnInit() {
  }

}
