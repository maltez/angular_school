import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  template: `    
      <div class="btns-panel">
        <app-button 
          *ngFor="let operator of operators"
          [operator]="operator"
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
}
