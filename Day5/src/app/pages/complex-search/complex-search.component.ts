import { Component, computed, effect, inject, signal } from '@angular/core';
import { ComplexSearchStore } from './complex-search.store';
import { UserListComponent } from "../../components/user-list/user-list.component";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { filter } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-complex-search',
  imports: [UserListComponent, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule],
  templateUrl: './complex-search.component.html',
  styleUrl: './complex-search.component.scss',
  providers: [ComplexSearchStore]
})
export class ComplexSearchComponent {
  store = inject(ComplexSearchStore);
  searchControl = new FormControl<string>('');
  constructor() {
    this.store.setSearchWord(this.searchControl.valueChanges.pipe(filter(text => text !== null)));
  }
}
