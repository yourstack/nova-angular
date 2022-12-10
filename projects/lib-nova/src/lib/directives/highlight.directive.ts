import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[novaHighlight]'
  // <novaHighLight></novaHighLight>
  // <h1 novaHighlight></h1>
  // <h2 novaHighlight></h1>
  // <a novaHighlight>
})

export class HighlightDirective {

  constructor(el:ElementRef) { 
    // let el = document.getElementByAttributeName("novaHighlight")
    // el[0].style ="color:red;background-color:yellow;"
    // <button ion-button></button>
    el.nativeElement.style ="color:red;background-color:yellow;"
  }

}
