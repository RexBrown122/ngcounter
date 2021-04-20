import { Component, OnInit } from '@angular/core';
import {CounterComponent} from '../counter/counter.component';
import {Counter} from '../counter'
import {SuperCounterComponent} from '../super-counter/super-counter.component'

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  public counterList: Counter[];
  public superCounterList: Counter[];

  constructor() {
  }

  ngOnInit(): void {
    this.counterList = [];
    this.superCounterList = [];
  }

  pushNewItem() {
    let sum: number = 0;
    if (this.counterList.length < 5) {
      this.counterList.push(new Counter());
    }
    else {
      while (this.counterList.length > 0) {
        sum += this.counterList.pop().count;
      }
      this.pushSuperItem(new Counter(sum));
    }
  }

  pushSuperItem(item: Counter) {
    this.superCounterList.push(item);
  }
}
