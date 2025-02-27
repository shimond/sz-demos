import { Component } from '@angular/core';
import { CounterComponent } from "../../components/counter/counter.component";
import { CounterService } from '../../services/counter.service';
import { CounterWithSignalComponent } from "../../components/counter-with-signal/counter-with-signal.component";

@Component({
  selector: 'app-counter-test',
  imports: [CounterWithSignalComponent],
  templateUrl: './counter-test.component.html',
  styleUrl: './counter-test.component.scss',
})
export class CounterTestComponent {
  displayAllCounter = false;

  changeDisplay() {
    this.displayAllCounter = !this.displayAllCounter;
  }
}
