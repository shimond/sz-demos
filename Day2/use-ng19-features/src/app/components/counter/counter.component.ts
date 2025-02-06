import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {

  // count$: Observable<number>;

  constructor(private counterService: CounterService) {
    // this.count$ = this.counterService.counterChange;
    // .pipe(
    //   map(x => x * 2)
    // );
  }

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }
}
