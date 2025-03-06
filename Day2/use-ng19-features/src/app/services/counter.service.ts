import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CounterService {

  private counterChangeSig = signal(0);
  private http = inject(HttpClient);

  counterChange = this.counterChangeSig.asReadonly(); // only subscribe

  counterBiggerThan10 = computed(() => this.counterChangeSig() > 10);
  isEven = computed(() => 
    {
      console.log('On computed function (isEven)');
      return this.counterChange() % 2 === 0;
    });

    constructor(){
    }

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


