import { Component, Input } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-button',
  template: `
          <div 
            class="btn"
            [ngClass]="{'digit': +operator >= 0}"
            (click)="handler(operator)"
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

  constructor(
    private calcService: CalculatorService
  ) {}

  public handler(operator: string): void {
   this.calcService.detectOperator(operator);
  }
}
