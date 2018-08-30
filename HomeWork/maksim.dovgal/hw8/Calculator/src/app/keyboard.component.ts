import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  template: `    
      <div class="btns-panel">
        <app-button 
          *ngFor="let operator of operators"
          [operator]="operator"
          (btnClicked)="btnClicked.emit($event)"
        ></app-button>
      </div>
  `,
  styles: [`
    :host{
      width: 100%;
    }
    .btns-panel {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  `]
})
export class KeyboardComponent {
  @Input() operators: Array<string>;
  @Output() btnClicked: EventEmitter<string> = new EventEmitter<string>();
}
