import { Component, inject } from '@angular/core';
import { UserModel } from '../../model/user.model';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialFormModule } from '../../exports/exports/material-form/material-form.module';
import { MAT_DIALOG_DATA,  MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { InputNumberComponent } from "../../shared/components/input-number/input-number.component";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-edit-product-dialog',
  imports: [ReactiveFormsModule, MaterialFormModule, MatButtonModule, InputNumberComponent, JsonPipe],
  templateUrl: './add-edit-product-dialog.component.html',
  styleUrl: './add-edit-product-dialog.component.scss'
})
export class AddEditProductDialogComponent {

  // user:UserModel= {id: 1, name: 'John', email: 'j@gmail.com', phone: '0545555445', age: 20};
  user: UserModel = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<AddEditProductDialogComponent>);

  userForm = inject(FormBuilder).group({
    id: new FormControl<number>(-1),
    name: new FormControl<string>('', [Validators.required]),
    age: new FormControl<number>(0),
    phone: new FormControl<string>(''),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
  });

  close() {
    if (this.userForm.valid) {
      this.dialogRef.close();
    }
  }

  constructor() {
    if (this.user) {
      this.userForm.patchValue(this.user);
    }
  }

}
