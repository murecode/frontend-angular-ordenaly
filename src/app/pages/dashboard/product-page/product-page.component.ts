import { Component } from '@angular/core';
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [MainPageComponent],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {

}
