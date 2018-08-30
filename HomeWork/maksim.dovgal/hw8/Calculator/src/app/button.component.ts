import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
          <div 
            class="btn"
            [ngClass]="{'digit': +operator >= 0}"
            (click)="btnClicked.emit(operator)"
          >
            {{operator}}
          </div>
  `,
  styles: [`
    :host {
      width: 22%;
    }
    .btn {
      text-align: center;
      margin-top: 5px;
      cursor: pointer;
      background-color: gray;
    }
    .digit {
      background-color: white;
    }
  `]
})
export class ButtonComponent {
  @Input() operator: string;
  @Output() btnClicked: EventEmitter<string> = new EventEmitter<string>();
}
