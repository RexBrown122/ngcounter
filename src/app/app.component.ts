import { Component } from '@angular/core';
import { CounterComponent} from './counter/counter.component';
import { CounterListComponent} from './counter-list/counter-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Counter';
  counter = new CounterComponent();
}
