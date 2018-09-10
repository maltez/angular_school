import {Directive, OnInit, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[toAnotherTag]'
})
export class ToAnotherTagDirective implements OnInit {
  // to which tag translate
  @Input('toTag')
  toTag: string;

  // from which tag translate
  @Input('fromTag')
  fromTag: string;

  // allow nesting
  @Input('isNesting')
  isNesting: boolean = false;

  constructor(
    private element: ElementRef
  ) {

  }

  ngOnInit() {
    this.findTag(this.element.nativeElement.children);
  }

  private findTag(children: any) {
    for (let i = 0; i < children.length; i++) {
      if (children[i].nodeName.toLowerCase() === this.fromTag) {
        let newEl = document.createElement(this.toTag);
        newEl.innerHTML = children[i].innerHTML;
        children[i].parentNode.replaceChild(newEl, children[i]);
      }
      if (children[i].children.length && this.isNesting) {
        this.findTag(children[i].children);
      }
    }
  }
}
