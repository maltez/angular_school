import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  AfterViewInit
} from '@angular/core';
import { ColorTableSettings } from './model/colorTableSettins';

@Directive({
  selector: '[appColoredTable]'
})
export class ColoredTableDirective implements AfterViewInit {
  @Input()
  public color: ColorTableSettings = new ColorTableSettings();

  @Input('data')
  public collections: Array<any> = new Array<any>();

  public element: HTMLElement;
  public renderer: Renderer2;

  constructor(element: ElementRef, renderer: Renderer2) {
    this.renderer = renderer;
    this.element = element.nativeElement;
  }

  ngAfterViewInit(): void {
   // console.log(this.element);
    // this.element.firstElementChild.remove();
    if (this.collections.length <= 0) return;

    let table = this.createElement('table', '', '');
    let trHeader = this.createElement('tr', '', '');

    let names: string[] = Object.getOwnPropertyNames(this.collections[0]);
    for (let i = 0; i < names.length; i++) {
      let str = '';

      str = (i % 2 === 0) ? this.color.HeadColorEven : this.color.HeadColorOdd;

      let thHeader = this.createElement('th', names[i], str);
      this.renderer.appendChild(trHeader, thHeader);

    }
    this.renderer.appendChild(table, trHeader);

    for (let i = 0; i < this.collections.length; i++) {
      let tr = this.createElement('tr', '', '');
      for (let j = 0; j < names.length; j++) {
        let str = '';
        str = (i % 2 === 0) ? this.color.RowColorEven : this.color.RowColorOdd;

        let td = this.createElement('td', this.collections[i][`${names[j]}`], str);
        this.renderer.appendChild(tr, td);
      }
      this.renderer.appendChild(table, tr);
    }
    this.renderer.appendChild(this.element, table);
  }

  private createElement(tag: string, text: string, backGroundColor: string) {
    const d2 = this.renderer.createElement(tag);
    this.renderer.setStyle(d2, 'background', backGroundColor)
    this.renderer.setStyle(d2, 'padding', '5px 10px 5px 10px')
    const txt = this.renderer.createText(text);
    this.renderer.appendChild(d2, txt);
    return d2;
  }

}
