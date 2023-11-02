import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validator } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ 
    RouterModule,

    

    MatFormFieldModule, 
    MatInputModule, 
    MatCheckboxModule, 
   ],
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

}
