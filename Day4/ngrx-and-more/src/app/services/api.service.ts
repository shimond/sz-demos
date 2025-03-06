import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserModel } from '../model/user.model';
import { combineLatest, debounceTime, delay, distinctUntilChanged, filter, firstValueFrom, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  #http = inject(HttpClient);


  getAllUsers()  : Observable<UserModel[]>{

    const result: UserModel[] = [
      { id: 1, name: 'John', email: 'j@gmail.com', phone: '0545555445', age: 20 },
      { id: 2, name: 'Doe', email: 'd@gmail.com', phone: '0545555445', age: 90 },
      { id: 3, name: 'Jane', email: 'j2@gmail.com', phone: '0545555447', age: 12 },
      { id: 4, name: 'Shimon', email: 'Shimon@gmail.com', phone: '0545555448', age: 99 },
      { id: 5, name: 'Yossi', email: 'y@gmail.com', phone: '0545555449', age: 81 },
      { id: 7, name: 'Tikav', email: 'j@gmail.com', phone: '0545555445', age: 20 },
      { id: 12, name: 'David', email: 'd@gmail.com', phone: '0545555445', age: 90 },
      { id: 83, name: 'Moshe', email: 'j2@gmail.com', phone: '0545555447', age: 12 },
      { id: 88, name: 'Naama', email: 'Shimon@gmail.com', phone: '0545555448', age: 99 },
      { id: 91, name: 'Gilad', email: 'y@gmail.com', phone: '0545555449', age: 81 }
    ];

    return of(result).pipe(delay(2000));


  }


  searchPost(text: string) {
    // firstValueFrom()
    // combineLatest()
    
    return this.#http.get<any[]>('https://jsonplaceholder.typicode.com/posts?q=' + text).pipe(
      // switchMap()
      // map()
      // filter()
      // distinctUntilChanged()
      // debounceTime(100),

    );
  }


  constructor() { }
}
