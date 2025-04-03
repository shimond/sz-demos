import { Component, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  imports: [],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputNumberComponent,
      multi: true
    }
  ]

})
export class InputNumberComponent implements ControlValueAccessor {

  isDisabled = signal(false);
  value = signal<number>(0);
  onValueChange = (num: number) => { }
  plus() {
    this.value.update(x => x + 1);
    this.onValueChange(this.value());
  }

  minus() {
    this.value.update(x => x - 1);
    this.onValueChange(this.value());
  }

  writeValue(num: number): void {
    this.value.set(num);
  }

  registerOnChange(fn: any): void {
    this.onValueChange = fn;

  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);  
  }
}
