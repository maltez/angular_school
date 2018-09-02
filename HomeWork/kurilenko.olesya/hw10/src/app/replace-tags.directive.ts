import {
  Directive,
  ElementRef,
  Input,
  AfterContentChecked,
  AfterViewInit,
  AfterContentInit,
  OnInit
} from '@angular/core';
import { htmlAstToRender3Ast } from '../../node_modules/@angular/compiler/src/render3/r3_template_transform';
import { HtmlParser } from '../../node_modules/@angular/compiler';

@Directive({
  selector: '[replaceTags]'
})
export class ReplaceTagsDirective implements AfterViewInit {
  @Input()
  public tagFrom: string;
  @Input()
  public tagTo: string;
  public element: HTMLElement;
  private regExp = {
    'p': /<[p]{1,}/g,
    'div': /<[div]{3,}/g,
    'span': /<[span]{4,}/g,

    '/p': /<[/][p]{1,}/g,
    '/div': /<[/][div]{3,}/g,
    '/span': /<[/][span]{4,}/g
  };
  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }
  ngAfterViewInit(): void {
    this.replaceTags(this.element);
  }

  private replaceTags(el: HTMLElement | HTMLDivElement | any) {
    if (+el.children.length <= 0) {
      if (el.nodeName.toUpperCase() === this.tagFrom.toUpperCase())
        el.outerHTML = el.outerHTML
          .replace(this.regExp[this.tagFrom], `<${this.tagTo}`)
          .replace(this.regExp[`/${this.tagFrom}`], `</${this.tagTo}`);
    }
    else {
      let nodes = el.children;
      for (let i = 0; i < nodes.length; i++) {
        this.replaceTags(nodes[i]);
      }
    }
  }
}
