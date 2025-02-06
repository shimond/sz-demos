import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CounterService {

  //private counterChange = new BehaviorSubject<number>(0); // next, complete, error, subscribe
  private counterChangeSig = signal(0);
  // counterChange$ = this.counterChange.asObservable(); // only subscribe
  counterChange = this.counterChangeSig.asReadonly(); // only subscribe



  increment() {
    // this.counterChange.next(this.counterChange.value + 1);
    this.counterChangeSig.update(c=> c + 1);
  }

  decrement() {
    // this.counterChange.next(this.counterChange.value -1);
    this.counterChangeSig.update(c=> c - 1);
  }
}


