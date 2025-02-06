import { Component, computed, inject, signal } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-counter-with-signal',
  imports: [],
  templateUrl: './counter-with-signal.component.html',
  styleUrl: './counter-with-signal.component.scss'
})
export class CounterWithSignalComponent {

  count$: Observable<number> = of(20);
  counterService = inject(CounterService);
  count = this.counterService.counterChange;
  countMul2 = computed(()=> this.count() * 2);

  increment() {
    this.counterService.increment();
    console.log('Current value = ' + this.count());
  }

  decrement() {
    this.counterService.decrement();


  }


}
