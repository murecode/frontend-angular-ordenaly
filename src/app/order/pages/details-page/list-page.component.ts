import { Component } from '@angular/core';

import { TableDetailsComponent } from '../../components/table-details/table-details.component';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [ TableDetailsComponent ],
  templateUrl: './details-page.component.html',
})
export class DetailsPageComponent  {
    
}
