import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {

}
