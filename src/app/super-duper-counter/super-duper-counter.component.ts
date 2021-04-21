import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-super-duper-counter',
  templateUrl: './super-duper-counter.component.html',
  styleUrls: ['../counter/counter.component.css', './super-duper-counter.component.css']
})
export class SuperDuperCounterComponent extends CounterComponent implements OnInit {
  @Input() clicked : boolean;
  @Output() makeNew = new EventEmitter();

  constructor() {
    super();
  }

  // ngOnInit(): void {
  // }

  start() {
    this.clicked = false;
    setInterval(() => {
      this._myCounter.count++;
      if (this._myCounter.count % 20 === 0) {
        this.makeNew.emit();
      }
    },1000);
  }
}
