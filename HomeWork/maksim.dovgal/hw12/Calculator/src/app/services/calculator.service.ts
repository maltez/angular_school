import { CalculatorStates } from '../models/CalculatorStates';
import { Subject } from 'rxjs';

export class CalculatorService {
  private states: CalculatorStates = {
    mainInput: '',
    firstValue: '',
    secondValue: '',
    secondaryInput: '',
    action: '',
    trigger: false,
    repeatNoDigit: true,
  };
  public action = new Subject();

  // pressed button detector
  public detectOperator(operator: string): void {
    switch(operator) {
      // clear main content
      case 'CE':
        this.states.firstValue = '';
        this.states.mainInput = '';
        break;
      //  clear all
      case 'C':
        this.resetStates();
        break;
      //  backspace
      case '<-':
        if (this.states.mainInput.length) {
          this.states.mainInput = this.states.mainInput.slice(0, -1);
        }
        if (this.states.mainInput.length)
          this.states.firstValue = parseFloat(this.states.mainInput) + '';
        else {
          this.states.firstValue = '';
          if (!this.states.secondaryInput.length)
            this.states.repeatNoDigit = true;
        }
        break;
      case '/':
        if (!this.states.repeatNoDigit) {
          this.setOperator('/');
          this.states.repeatNoDigit = true;
        }
        break;
      case '+/-':
        if(this.states.mainInput.length){
          this.states.mainInput = '' + (parseFloat(this.states.mainInput) * -1);
        }
        if (
          (!this.states.firstValue.length && !this.states.secondValue.length)
          || !this.states.secondValue.length && !this.states.action.length
        ) {
          this.states.firstValue = '' + (parseFloat(this.states.firstValue) * -1);
        } else {
          this.states.secondValue = '' + (parseFloat(this.states.secondValue) * -1);
        }
        break;
      case '*':
        if (!this.states.repeatNoDigit) {
          this.setOperator('*');
          this.states.repeatNoDigit = true;
        }
        break;
      case '-':
        if (!this.states.repeatNoDigit) {
          this.setOperator('-');
          this.states.repeatNoDigit = true;
        }
        break;
      case '+':
        if (!this.states.repeatNoDigit) {
          this.setOperator('+');
          this.states.repeatNoDigit = true;
        }
        break;
      case '=':
        this.setOperator('=');
        break;
      default:
        if ((!this.states.firstValue.length && !this.states.secondValue.length) || !this.states.secondValue.length && !this.states.action.length) {
          this.states.firstValue += operator;
        } else {
          if (this.states.trigger) {
            this.states.mainInput = '';
            this.states.trigger = false;
          }
          this.states.secondValue += operator;
        }
        this.states.repeatNoDigit = false;
        this.states.mainInput += operator;
    }
    this.action.next(this.states);
  }

  // change states
  private setOperator(operator: string) {
    let res: number,
      oldMainInput = this.states.mainInput;
    if (this.states.action) {
      res = this.doneAction();
      this.states.mainInput = '' + res;
    }
    if (operator !== '=') {
      this.states.secondaryInput += oldMainInput + ' ' + operator + ' ';
      this.states.action = operator;
    } else {
      this.states.secondaryInput = '';
      this.states.action = '';
      this.states.firstValue = this.states.mainInput;
      this.states.secondValue = '';
    }
    this.states.trigger = true;
  }

  // reset states
  private resetStates() {
    this.states.mainInput = '';
    this.states.secondaryInput = '';
    this.states.firstValue = '';
    this.states.secondValue = '';
    this.states.action = '';
    this.states.trigger = false;
  }

  // done some action by operator
  private doneAction(): number {
    let firstValue,
      secondValue,
      res;
    firstValue = parseFloat(this.states.firstValue);
    secondValue = parseFloat(this.states.secondValue);
    switch(this.states.action) {
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

    this.states.firstValue = '' + res;
    this.states.secondValue = '';

    return res;
  }
}
