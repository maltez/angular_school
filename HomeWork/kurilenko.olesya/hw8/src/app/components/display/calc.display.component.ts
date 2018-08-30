import { Component, Input } from '@angular/core';

@Component({
  selector: 'display',
  template: `
  <input class="screen" disabled [value]=total/>
  `,
  styles: [
    `.screen {
      height: 65px;
      width: 67%;
      position:absolute;
      top:7px; left:85px;
      background: rgba(0, 0, 0, 0.2);
      font-size: 27px;
      font-weight:normal;
      line-height: 40px;
      color: white;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
      text-align: right;
      letter-spacing: 1px;
    }`
  ]
})
export class CalcDisplayComponent {
  @Input()
  public total = '';
}
