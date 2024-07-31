import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
})
export class ModalComponent {

  constructor(
    private elem: ElementRef,
    private renderer: Renderer2
  ) { }

  openModal(): void {
    this.renderer.removeClass(this.elem.nativeElement.querySelector('#modal-overlay'), 'hidden');
  }

  closeModal(): void {
    this.renderer.addClass(this.elem.nativeElement.querySelector('#modal-overlay'), 'hidden');
  }

}
