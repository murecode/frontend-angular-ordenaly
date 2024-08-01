import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: 'login.component.html',
})
export class LoginComponent {

  protected authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);
  private router      = inject(Router);

  public loginForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, ] ],
    password: ['', [Validators.required, ] ]
  });


  ngOnInit(): void { }


  login(): void {
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe(
      success => {
        console.log(success);

        this.router.navigate(['/orders']);

      }
    )
  }



}
