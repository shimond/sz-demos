import { Component, computed, effect, inject } from '@angular/core';
import { ComplexSearchStore } from './complex-search.store';
import { UserListComponent } from "../../components/user-list/user-list.component";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-complex-search',
  imports: [UserListComponent, ReactiveFormsModule],
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
