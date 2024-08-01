import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { LoginResponse } from '../../interfaces/auth.interface';

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

  private readonly baseUrl:string = environment.baseUrl;

  private http =  inject(HttpClient);
  protected authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  public loginForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, ] ],
    password: ['', [Validators.required, ] ]
  });


  ngOnInit(): void { }


  login(): void {

    const { username, password } = this.loginForm.value;

    this.http.post<LoginResponse>(`${this.baseUrl}/auth/login`, {username, password}).subscribe(
      response => {
        this.authService.setToken(response.jwt); // se asigna el jwt al localStorage con el metodo 'setToken'
        this.router.navigate(['/tickets']); // Redirigir al usuario a la página principal una vez se asigna el token
      },
      error => {
        // Manejar el error
      }
    );
  }


  // login(): void {
  //   const { username, password } = this.loginForm.value;
  //   this.authService.login(username, password).subscribe(
  //     success => {
  //       console.log(success);

  //       this.router.navigate(['/orders']);

  //     }
  //   )
  // }



}
