import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

}
