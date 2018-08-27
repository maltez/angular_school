import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  template: `
    <div class="display">
      <input type="text" [value]="secondaryInput" readonly>
      <input type="text" [value]="mainInput" readonly>
    </div>
  `,
  styles: [`    
    input {
      width: 100%;
      padding: 0;
      border: 0 none;
      height: 40px;
      background-color: lightgray;
      color: black;
      text-align: right;
    }
  `]
})
export class DisplayComponent {
  @Input() mainInput: string;
  @Input() secondaryInput: string;
}
