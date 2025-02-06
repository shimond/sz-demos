import { Component, inject } from '@angular/core';
import { CounterTestComponent } from './pages/counter-test/counter-test.component';
import { CounterComponent } from "./components/counter/counter.component";
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  imports: [CounterTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'use-ng19-features';
  count = inject(CounterService).counterChange;
}
