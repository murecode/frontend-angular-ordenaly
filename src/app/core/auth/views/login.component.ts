import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: 'login.component.html',
})
export class LoginComponent {

  private authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);

  public loginForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, ] ],
    password: ['', [Validators.required, ] ]
  });


  ngOnInit(): void { }


  login() {

    const { username, password } = this.loginForm.value;

    this.authService.login(username, password).subscribe(
      success => {
        console.log(success);

      }
    )

  }

}
