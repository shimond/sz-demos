import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CounterService {

  private counterChangeSig = signal(0);
  counterChange = this.counterChangeSig.asReadonly(); // only subscribe
  isEven = computed(() => 
    {
      console.log('On computed function (isEven)');
      return this.counterChange() % 2 === 0;
    });

  increment() {
    this.counterChangeSig.update(c=> c + 1); // use current value
  }

  decrement() {
    this.counterChangeSig.update(c=> c - 1);
  }

  reset()
  {
    this.counterChangeSig.set(0);
  }
  
}


