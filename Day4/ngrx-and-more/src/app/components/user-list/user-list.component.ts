import { Component, computed, effect, EventEmitter, Input, input, output, Output, signal, WritableSignal } from '@angular/core';
import { UserModel } from '../../model/user.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [NgClass],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  personSelected = output<UserModel>();
  title = input(null as string | null, { transform: this.myTransformMethod });
  users = input.required<UserModel[]>();
  olderThan20Count = computed(() => this.users().filter(user => user.age > 20).length);
  selectedUser = input<UserModel | null>(null);

  myTransformMethod(val: string) {
    return val.trim().toUpperCase(); // | date
  }

  selectUser(user: UserModel) {
    //  this.selectedUser.set(user);
    this.personSelected.emit(user);
  }

  constructor() {
    effect(() => {
      console.log('title changed to ', this.title());
    });
  }
}

// control-flow - ngIf, ngFor - @if @for
// standalone components - angular 19 standalone by default
// injection context, injec method (instead of constructor)
// signal - signal set, get , update, compouted, effect
// signalStore
// input, input.required, output
// model (use moder for 2 ways data binding)

















