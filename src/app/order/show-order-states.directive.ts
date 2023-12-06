import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[showOrderStates]',
  standalone: true
})
export class ShowOrderStatesDirective implements OnInit {

  @Input() set orderStatus(state: string) {
    this.updateOrderStatus(state)
  }


  // private chipOrderStatus?: ElementRef<HTMLElement>

  constructor( private elem: ElementRef<HTMLElement>, private render: Renderer2 ) {
    // this.chipOrderStatus = elem;
    // this.chipOrderStatus!.nativeElement.innerHTML = 'estado orden'
  }

  ngOnInit(): void {}

  updateOrderStatus(state: string): void {
    let txtColor, bgColor;

    switch (state) {
      case 'pendiente':
        txtColor = 'text-red-600'
        bgColor = 'bg-red-100'
        break;
      case 'completado':
        txtColor = 'text-green-600'
        bgColor = 'bg-green-100'
        break;
      default:
        txtColor = '';
        bgColor = '';
        break;
    }

    this.render.addClass(this.elem.nativeElement, 'rounded-xl');
    this.render.addClass(this.elem.nativeElement, 'text-xs');
    this.render.addClass(this.elem.nativeElement,  bgColor);
    this.render.addClass(this.elem.nativeElement,  txtColor);
    this.render.addClass(this.elem.nativeElement, 'px-2');
    this.render.addClass(this.elem.nativeElement, 'py-1')

  }
  


}
