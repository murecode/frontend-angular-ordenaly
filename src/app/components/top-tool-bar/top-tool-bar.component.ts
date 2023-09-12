import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'

@Component({
  selector: 'top-toolbar',
  standalone: true,
  imports: [ MatToolbarModule, CommonModule ],
  templateUrl: './top-tool-bar.component.html',
})
export class TopToolBarComponent {

}
