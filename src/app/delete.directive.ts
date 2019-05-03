import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private elem:ElementRef) {}

  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }
  @HostListener("dbclick") onDoubleClicks(){
    this.textDeco("None")
  }
  private textDeco(action:string){
      this.elem.nativeElement.style.textDecoration="action";
  }

}
