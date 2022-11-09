import { Directive, ElementRef, HostBinding, HostListener, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDropdownEnabled]'
})
export class DropdownEnabledDirective {

  constructor(private elementRef:ElementRef) { }

  @HostBinding('class.open')
  isOpen = false;

  @HostListener('document:click',['$event'])
  onClick(event:Event){
    this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen:false;
  }



}
