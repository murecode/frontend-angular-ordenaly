import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ 
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
   ],
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  protected authService = inject(AuthService)

  public registerForm: FormGroup = this.formBuilder.group({

    name: ['', [Validators.required, Validators.minLength(4)] ],
    email: ['', [Validators.required,  Validators.email] ],
    username: ['', [Validators.required, Validators.minLength(4)] ],
    password: ['', [Validators.required, ] ]

  });

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void { }

  // onSubmit():  {

  //   if( this.registerForm.invalid ) return; //Si algun campo del formulario es invalido no continua

  //   const res = this.authService.register(this.registerForm.value);

  //   console.log(res); // Log en consola

  //   // this.registerForm.reset(
  //   //   { 
  //   //     name:'@...',
  //   //     email:'Correo electrónico',
  //   //     username: 'Nombre de usuario',
  //   //   }) ; //Restaura los valores del formulario

  // }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const newUser: User = this.registerForm.value;
      this.authService.register(newUser).subscribe(response => {
        console.log('User registered successfully', response);
        // Manejar la respuesta del registro exitoso, como redirigir al usuario
      }, error => {
        console.error('Error registering user', error);
        // Manejar el error, como mostrar un mensaje de error al usuario
      });
    }
  }

}
