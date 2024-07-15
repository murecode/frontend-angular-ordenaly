import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule
  ],
  templateUrl: 'login.component.html',
})
export class LoginComponent {

}
