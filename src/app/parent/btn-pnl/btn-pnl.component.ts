import { Component, OnInit , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-btn-pnl', 
  templateUrl: './btn-pnl.component.html',
  styleUrls: ['./btn-pnl.component.css']
})
export class BtnPnlComponent implements OnInit {

  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();

  onClick():void{
    this.notify.emit('msg from child')
  }

  constructor() { }

  ngOnInit() {
  }

}
