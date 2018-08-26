import { Component } from '@angular/core';

export enum EOperator {
  clear = 0,
  multiplication = 1, // *
  division = 2, // /
  subtraction = 3, // -
  addition = 4, // +
  equally = 5, // =
  number = 6, // number
  point = 7 // .
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  EOperator = EOperator;
  public total: string = '';

  public operatorClick(operator: EOperator, value?: number | string) {
    console.log(this.total + '  operator' + operator + ' value' + value);
    switch (operator) {
      case EOperator.clear:
        this.total = '';
        break;
      case EOperator.multiplication:
        this.total = this.replaseLastOperator(this.total, '*');
        break;
      case EOperator.division:
        this.total = this.replaseLastOperator(this.total, '/');
        break;
      case EOperator.subtraction:
        this.total = this.replaseLastOperator(this.total, '-');
        break;
      case EOperator.addition:
        this.total = this.replaseLastOperator(this.total, '+');
        break;
      case EOperator.equally:
        this.total = (this.calculation2(this.total, 0));
        //this.total = this.calculation(this.total);
        this.total = this.total.toString();
        break;
      case EOperator.number:
        this.total += value;
        break;
      case EOperator.point:
        (this.total[this.total.length - 1] === '.' && value === '.') ?
          '' :
          this.total += value;
        break;
      default:
        break;
    }

  }
  private replaseLastOperator(value: string, replOper: string) {
    const lastOper: string = value[value.length - 1];
    if (lastOper === '*' || lastOper === '+' || lastOper === '/' || lastOper === '-') {
      return (value.substring(0, value.length - 1) + replOper);
    }
    return value + replOper;
  }

  private calculation(value: string) {
    return eval(this.replaseLastOperator(value, ''));
  }

  private calculation2(value: string, result: number) {
    let oper = '+';
    if (['*', '+', '-', '/'].includes(value[0])) {
      oper = value[0];
      value = value.substr(1, value.length - 1);
    }
    console.log('value = ' + value + '  oper ' + oper + ' result' + result);
    let index = -1;
    for (let start = 0; start < value.length; start++) {
      if (['*', '+', '-', '/'].includes(value[start])) {
        index = start;
        break;
      }
    }
    if (index < 0) {
      return (eval(result + oper + value));
    }

    let strNumber = value.substr(0, index);
    value.replace(strNumber, '');
    return (this.calculation2(value.replace(strNumber, ''), (eval(result + oper + strNumber))));
  }
}




