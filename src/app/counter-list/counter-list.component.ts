import { Component, OnInit } from '@angular/core';
import {CounterComponent} from '../counter/counter.component';
import {Counter} from '../counter'

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  //counterList: CounterComponent[];
  public counterList: Counter[];

  constructor() {
  }

  ngOnInit(): void {
    // this.counterList = [];
    // this.counterList.push(new CounterComponent());
    // this.counterList.push(new CounterComponent());
    this.counterList = [];
    this.counterList.push(new Counter());
    this.counterList.push(new Counter());


  }

}
