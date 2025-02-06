import { Component, computed, inject, signal } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-counter-with-signal',
  imports: [],
  templateUrl: './counter-with-signal.component.html',
  styleUrl: './counter-with-signal.component.scss'
})
export class CounterWithSignalComponent {

  counterService = inject(CounterService);
  countMul2 = computed(() => this.counterService.counterChange() * 2);

}
