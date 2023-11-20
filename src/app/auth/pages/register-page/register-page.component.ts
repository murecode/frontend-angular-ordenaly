import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ 
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    MatFormFieldModule, 
    MatInputModule, 
    MatCheckboxModule, 
   ],
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent implements OnInit {

  public registerForm: FormGroup = this.formBuilder.group({
    name: ['',[ Validators.required, Validators.minLength(4) ]],
    surname: [''],
    // username: [''],
    email: ['', [ Validators.email, Validators.required ]],
    password: ['', [ Validators.required ]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm.reset({email:'correo'})
  }

  onSave() {
    if( this.registerForm.invalid ) return; //Si algun campo del formulario es invalido no continua
    console.log(this.registerForm.value)
    this.registerForm.reset({}); //Restaura los valores del formulario
  }

}
