import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[renklendir]',
  standalone: true
})
export class RenklendirDirective {
  
  @Input("renklendir") color : string | undefined;
  @Input("test") test : string | undefined;


  constructor(private el: ElementRef) { }


  @HostListener("mouseenter")method1(){
    console.log(this.color)
    console.log(this.test)
    this.el.nativeElement.style = "color:red";
    this.el.nativeElement.innerHTML = this.test;
    console.log("Mouse üzerine geldi")
  }

  @HostListener("mouseleave")method2(){
    this.el.nativeElement.style = "";
    console.log("Mouse üzerinde değil")
  }

}
