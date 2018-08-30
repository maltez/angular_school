import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="content">
        <div class="display">
          <input type="text" [value]="secondaryInput" readonly>
          <input type="text" [value]="mainInput" readonly>
        </div>
        <div class="btns-panel">
          <div 
            class="col-3 btn"
            *ngFor="let operator of operators"
            [ngClass]="{'digit': +operator >= 0}"
            (click)="detectOperator(operator)"
          >
            {{operator}}
          </div>
        </div>
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
    .display input {
      width: 100%;
      padding: 0;
      border: 0 none;
      height: 40px;
      background-color: lightgray;
      color: black;
      text-align: right;
    }
    .btns-panel {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
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
    .col-3 {
      width: 22%;
    }
  `]
})
export class AppComponent {
  title = 'Calculator';
  mainInput: string = '';
  firsValue: string = '';
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
        this.firsValue = '';
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
        if ((!this.firsValue.length && !this.secondValue.length) || !this.secondValue.length && !this.action.length) {
          this.firsValue = '' + (parseFloat(this.firsValue) * -1);
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
        if ((!this.firsValue.length && !this.secondValue.length) || !this.secondValue.length && !this.action.length) {
          this.firsValue += operator;
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
      this.firsValue = this.mainInput;
      this.secondValue = '';
    }
    this.trigger = true;
  }

  // reset states
  resetStates() {
    this.mainInput = '';
    this.secondaryInput = '';
    this.firsValue = '';
    this.secondValue = '';
    this.action = '';
    this.trigger = false;
  }

  // done some action by operator
  doneAction(): number {
    let firstValue,
        secondValue,
        res;
    firstValue = parseFloat(this.firsValue);
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

    this.firsValue = '' + res;
    this.secondValue = '';

    return res;
  }
}
