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

  

}
