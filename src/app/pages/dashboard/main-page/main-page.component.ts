import { Component } from '@angular/core';
import { FilterTabsComponent } from 'src/app/components/fiterTabs/filter-tabs.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    SearchComponent,
    SidebarComponent, 
    FilterTabsComponent,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {



}
