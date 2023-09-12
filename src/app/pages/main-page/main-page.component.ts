import { Component } from '@angular/core';
import { SearchComponent } from 'src/app/components/search/search.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';

@Component({
  selector: 'main-page',
  standalone: true,
  imports: [ SearchComponent, SidebarComponent],
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {



}
