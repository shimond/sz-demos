import { Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { debounceTime, filter, map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-use-cancel-http',
  imports: [ReactiveFormsModule],
  templateUrl: './use-cancel-http.component.html',
  styleUrl: './use-cancel-http.component.scss'
})
export class UseCancelHttpComponent {


  searchControl = new FormControl<string>('')
  #apiService = inject(ApiService);
  result = signal([] as any[]);


  constructor() {
    // const test2 = this.searchControl.valueChanges.pipe(map(text => this.#apiService.searchPost(text!)));
    //  this.searchControl.valueChanges.pipe(switchMap(text => this.#apiService.searchPost(text!)))
    //  .subscribe(result=>{
    //   console.log('result', result);
    //  });


    // this.searchControl.valueChanges
    //   .pipe(filter(text => text!.length > 2))
    //   .pipe(debounceTime(200))
    //   .pipe(tap(() => console.log('searching')))
    //   .subscribe(text => {
    //     this.#apiService.searchPost(text!).subscribe(posts => {
    //       this.result.set(posts);
    //     });
    //   });


  }


}
