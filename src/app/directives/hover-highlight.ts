import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: false
})
export class HoverHighlight {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') Onmouseenter() {
    this.el.nativeElement.style.backgroundColor = '#668718ff';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }


}
