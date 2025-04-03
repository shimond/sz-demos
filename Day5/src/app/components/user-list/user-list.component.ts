import { Component, inject, input, model, output } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserModel } from '../../model/user.model';
import { AddEditProductDialogComponent } from '../add-edit-product-dialog/add-edit-product-dialog.component';



@Component({
  selector: 'app-user-list',
  imports: [NgClass, MatTableModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  title = input<string>('');
  users = input.required<UserModel[]>();
  selectedUser = model<UserModel | null>(null);

  #dialog = inject(MatDialog);
  // Define the columns to display in the table
  displayedColumns = ['id', 'name', 'email', 'phone', 'age', 'actions'];

  // Output events for actions
  deleteUser = output<UserModel>();
  updateUser = output<UserModel>();
  addToFavorites = output<UserModel>();


  selectUser(user: UserModel) {
    this.selectedUser.set(user);
  }

  onDelete(user: UserModel, event: Event) {
    event.stopPropagation(); // Prevent row selection
    this.deleteUser.emit(user);
  }

  onUpdate(user: UserModel, event: Event) {
    event.stopPropagation(); // Prevent row selection
    this.#dialog.open(AddEditProductDialogComponent, {
      data: user,
      width: '500px',
      height: '600px'
    }).afterClosed().subscribe(x => {

    });

  }

  onAddToFavorites(user: UserModel, event: Event) {
    event.stopPropagation(); // Prevent row selection
  }
}


















