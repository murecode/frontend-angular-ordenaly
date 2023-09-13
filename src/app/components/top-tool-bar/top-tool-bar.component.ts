import { Component } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'top-toolbar',
  standalone: true,
  imports: [ MatToolbarModule, MatIconModule ],
  templateUrl: './top-tool-bar.component.html',
})
export class TopToolBarComponent {

}
