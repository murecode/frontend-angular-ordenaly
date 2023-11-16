import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [ CommonModule, NgFor, RouterOutlet, RouterModule
  ],
  templateUrl: './layout-page.component.html',
})
export class LayoutPageComponent {


}
