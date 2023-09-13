import { Component } from '@angular/core';
import { FilterTabsComponent } from 'src/app/components/fiterTabs/filter-tabs.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { TopToolBarComponent } from 'src/app/components/top-tool-bar/top-tool-bar.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    SearchComponent,
    SidebarComponent, 
    FilterTabsComponent,
    TopToolBarComponent,
    FooterComponent
  ],
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {



}
