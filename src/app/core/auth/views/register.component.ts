import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup = this.formBuilder.group({

    name: ['', [Validators.required, Validators.minLength(4)] ],
    email: ['', [Validators.required,  Validators.email] ],
    username: ['', [Validators.required, Validators.minLength(4)] ],
    password: ['', [Validators.required, Validators.pattern] ]

  });

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    
  }

  onSave() {

    if( this.registerForm.invalid ) return; //Si algun campo del formulario es invalido no continua

    console.log(this.registerForm.value); // Log en consola

    this.registerForm.reset(
      { 
        name:'@...',
        email:'Correo electrónico',
        username: 'Nombre de usuario',
      }) ; //Restaura los valores del formulario

  }

}
