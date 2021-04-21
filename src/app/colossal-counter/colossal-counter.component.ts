import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {SuperDuperCounterComponent} from '../super-duper-counter/super-duper-counter.component';

@Component({
  selector: 'app-colossal-counter',
  templateUrl: './colossal-counter.component.html',
  styleUrls: ['../counter/counter.component.css', './colossal-counter.component.css']
})
export class ColossalCounterComponent extends SuperDuperCounterComponent implements OnInit {
  @Output() makeNewColossal = new EventEmitter();

  constructor() {
    super();
    this.start();
  }

  // ngOnInit(): void {
  //   this.start();
  // }

  start() {
    this.clicked = false;
    setInterval(() => {
      this._myCounter.count += 2;
      if ((this._myCounter.count % 20 === 0) || ((this._myCounter.count-1) % 20 === 0)) {
        this.makeNewColossal.emit();
      }
    },1000);
  }

}
