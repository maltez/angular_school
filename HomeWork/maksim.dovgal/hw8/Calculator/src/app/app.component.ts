import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="content">
        <app-display 
          [mainInput]="mainInput" 
          [secondaryInput]="secondaryInput"
        ></app-display>
        <app-keyboard
          [operators]="operators"
          (btnClicked)="detectOperator($event)"
        ></app-keyboard>
      </div>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      height: 100vh;
    }
    .content {
      overflow: hidden;
      background-color: lightgray;
      margin: auto;
      width: 200px;
    }
  `]
})
export class AppComponent {
  mainInput: string = '';
  firstValue: string = '';
  secondValue: string = '';
  secondaryInput: string = '';
  action: string = '';
  trigger: boolean = false;
  operators: Array<string> = [
    'CE', 'C', '<-', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '+/-', '0', '.', '='
  ];
  repeatNoDigit: boolean = true;

  // pressed button detector
  detectOperator(operator: string): void {
    switch(operator) {
      // clear main content
      case 'CE':
        this.firstValue = '';
        this.mainInput = '';
        break;
      //  clear all
      case 'C':
        this.resetStates();
        break;
      //  backspace
      case '<-':
        if (this.mainInput.length) {
          this.mainInput = this.mainInput.slice(0, -1);
        }
        if (this.mainInput.length)
          this.firstValue = parseFloat(this.mainInput) + '';
        else {
          this.firstValue = '';
          if (!this.secondaryInput.length)
            this.repeatNoDigit = true;
        }
        break;
      case '/':
        if (!this.repeatNoDigit) {
          this.setOperator('/');
          this.repeatNoDigit = true;
        }
        break;
      case '+/-':
        if(this.mainInput.length){
          this.mainInput = '' + (parseFloat(this.mainInput) * -1);
        }
        if ((!this.firstValue.length && !this.secondValue.length) || !this.secondValue.length && !this.action.length) {
          this.firstValue = '' + (parseFloat(this.firstValue) * -1);
        } else {
          this.secondValue = '' + (parseFloat(this.secondValue) * -1);
        }
        break;
      case '*':
        if (!this.repeatNoDigit) {
          this.setOperator('*');
          this.repeatNoDigit = true;
        }
        break;
      case '-':
        if (!this.repeatNoDigit) {
          this.setOperator('-');
          this.repeatNoDigit = true;
        }
        break;
      case '+':
        if (!this.repeatNoDigit) {
          this.setOperator('+');
          this.repeatNoDigit = true;
        }
        break;
      case '=':
        this.setOperator('=');
        break;
      default:
        if ((!this.firstValue.length && !this.secondValue.length) || !this.secondValue.length && !this.action.length) {
          this.firstValue += operator;
        } else {
          if (this.trigger) {
            this.mainInput = '';
            this.trigger = false;
          }
          this.secondValue += operator;
        }
        this.repeatNoDigit = false;
        this.mainInput += operator;
    }
  }

  // change states
  setOperator(operator: string) {
    let res: number,
        oldMainInput = this.mainInput;
    if (this.action) {
      res = this.doneAction();
      this.mainInput = '' + res;
    }
    if (operator !== '=') {
      this.secondaryInput += oldMainInput + ' ' + operator + ' ';
      this.action = operator;
    } else {
      this.secondaryInput = '';
      this.action = '';
      this.firstValue = this.mainInput;
      this.secondValue = '';
    }
    this.trigger = true;
  }

  // reset states
  resetStates() {
    this.mainInput = '';
    this.secondaryInput = '';
    this.firstValue = '';
    this.secondValue = '';
    this.action = '';
    this.trigger = false;
  }

  // done some action by operator
  doneAction(): number {
    let firstValue,
        secondValue,
        res;
    firstValue = parseFloat(this.firstValue);
    secondValue = parseFloat(this.secondValue);
    switch(this.action) {
      case '/':
        res = firstValue / secondValue;
        break;
      case '*':
        res = firstValue * secondValue;
        break;
      case '+':
        res = firstValue + secondValue;
        break;
      case '-':
        res = firstValue - secondValue;
        break;
    }

    this.firstValue = '' + res;
    this.secondValue = '';

    return res;
  }
}
