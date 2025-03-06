import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserModel } from './model/user.model';
import { UseCancelHttpComponent } from "./use-cancel-http/use-cancel-http.component";
import { ComplexSearchComponent } from "./pages/complex-search/complex-search.component";

@Component({
  selector: 'app-root',
  imports: [ComplexSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  selectdUserInParent = signal(null as UserModel | null);

  title = signal('inputs-outputs-datamodel');
  userList = signal([
    { id: 1, name: 'John', email: 'j@gmail.com', phone: '0545555445', age: 20 },
    { id: 2, name: 'Doe', email: 'd@gmail.com', phone: '0545555445', age: 90 },
    { id: 3, name: 'Jane', email: 'j2@gmail.com', phone: '0545555447', age: 12 },
    { id: 4, name: 'Shimon', email: 'Shimon@gmail.com', phone: '0545555448', age: 99 },
    { id: 5, name: 'Yossi', email: 'y@gmail.com', phone: '0545555449', age: 81 }
  ] as UserModel[]);


  workerList = signal([
    { id: 7, name: 'Tikav', email: 'j@gmail.com', phone: '0545555445', age: 20 },
    { id: 12, name: 'David', email: 'd@gmail.com', phone: '0545555445', age: 90 },
    { id: 83, name: 'Moshe', email: 'j2@gmail.com', phone: '0545555447', age: 12 },
    { id: 88, name: 'Naama', email: 'Shimon@gmail.com', phone: '0545555448', age: 99 },
    { id: 91, name: 'Gilad', email: 'y@gmail.com', phone: '0545555449', age: 81 }
  ] as UserModel[]);

  changeTitle() {
    this.title.set('new title');
  }

  changeList() {
    // this.userList.set(this.workerList());

    this.userList.update((list) => ([ ...this.mockGetFromServer(list), {id:101, name:'new Item', email:'new@new.com', phone:'0545555449', age: 81}]));
  }

  mockGetFromServer(users:UserModel[])
  {
    return [...users.map(o=> ({...o, name:'new ' +o.name}))]
  }
  constructor() {
    this.selectdUserInParent.set(this.userList()[1]);
  }

  selectUser(user: UserModel) {
    if (user.name.includes('him')) {
      alert('Cannot select this item');
      this.selectdUserInParent.set(null);
      return;
    }
    this.selectdUserInParent.set(user);
  }

}
