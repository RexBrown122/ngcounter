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
  public superDuperCounterList: Counter[];
  public colossalCounterList: Counter[];


  constructor() {
  }

  ngOnInit(): void {
    this.counterList = [];
    this.superCounterList = [];
    this.superDuperCounterList = [];
    this.colossalCounterList = [];
  }

  pushNewItem(item?: Counter) {
    let sum: number = 0;
    if (this.counterList.length < 5) {
      if (item) {
        this.counterList.push(item);
      }
      else {
        this.counterList.push(new Counter());
      }
    }
    else {
      while (this.counterList.length > 0) {
        sum += this.counterList.pop().count;
      }
      this.pushSuperItem(new Counter(sum));
    }
    if (this.superCounterList.length >= 3) {
      sum = 0;
      while (this.superCounterList.length > 0) {
        sum += this.superCounterList.pop().count;
      } 
      this.pushSuperDuperItem(new Counter(sum));
    }
    if (this.superDuperCounterList.length >= 3) {
      sum = 0;
      while (this.superDuperCounterList.length > 0) {
        sum += this.superDuperCounterList.pop().count;
      } 
      this.pushColossalItem(new Counter(sum));
    }
  }

  pushSuperItem(item: Counter) {
    this.superCounterList.push(item);
  }

  pushSuperDuperItem(item: Counter) {
    this.superDuperCounterList.push(item);
  }

  pushColossalItem(item: Counter) {
    this.colossalCounterList.push(item);
  }
}
