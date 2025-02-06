import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CounterService {

  private counterChange = new BehaviorSubject<number>(0); // next, complete, error, subscribe

  counterChange$ = this.counterChange.asObservable(); // only subscribe

  increment() {
    this.counterChange.next(this.counterChange.value + 1);
  }

  decrement() {
    this.counterChange.next(this.counterChange.value -1);
  }
}


