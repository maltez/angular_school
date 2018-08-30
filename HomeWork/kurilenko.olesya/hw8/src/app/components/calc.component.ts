import { Component, OnInit } from '@angular/core';
import { CalcButtonComponent } from './buttons/calc.Button.component';
import { eButtonType } from '../enums/eButtonType';
import { calcButtonInterface } from '../interfaces/calcButtonInterface';

import { BuiltinType } from '../../../node_modules/@angular/compiler';
@Component({
  selector: 'calculator',
  template: `
  <div id="calculator">

  <div class="top">
  <calc-button
  [className]=button.className
  [buttonType]=button.buttonType
  [text]=button.text
  (clickHandler)='ClickHander($event)'
    >
  </calc-button>
    <display [total]=totalString></display>
	</div>

  <div class="keys">
  <calc-button *ngFor="let buttonData of buttons"
    [className]=buttonData.className
      [buttonType]=buttonData.buttonType
      [text]=buttonData.text
      (clickHandler)='ClickHander($event)'
      >
    </calc-button>
	</div>
</div>
`,
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  totalString: string = '0';
  firstNumber: string = '';
  isFirstNumber: boolean = true;

  secondNumber: string = '';
  isSecondNumber: boolean = false;

  manipulation: string = '';
  buttons: Array<calcButtonInterface> = new Array<calcButtonInterface>();
  button: calcButtonInterface;

  ngOnInit(): void {
    this.button = this.getNewClass('C', 'clear', eButtonType.clear);
    this.buttons.push(this.getNewClass('7', 'key', eButtonType.numeric));
    this.buttons.push(this.getNewClass('8', 'key', eButtonType.numeric));
    this.buttons.push(this.getNewClass('9', 'key', eButtonType.numeric));
    this.buttons.push(this.getNewClass('+', 'operator', eButtonType.manipulation));
    this.buttons.push(this.getNewClass('4', 'key', eButtonType.numeric));
    this.buttons.push(this.getNewClass('5', 'key', eButtonType.numeric));
    this.buttons.push(this.getNewClass('6', 'key', eButtonType.numeric));
    this.buttons.push(this.getNewClass('-', 'operator', eButtonType.manipulation));
    this.buttons.push(this.getNewClass('1', 'key', eButtonType.numeric));
    this.buttons.push(this.getNewClass('2', 'key', eButtonType.numeric));
    this.buttons.push(this.getNewClass('3', 'key', eButtonType.numeric));
    this.buttons.push(this.getNewClass('/', 'operator', eButtonType.manipulation));
    this.buttons.push(this.getNewClass('0', 'key', eButtonType.numeric));
    this.buttons.push(this.getNewClass('.', 'key', eButtonType.numeric));
    this.buttons.push(this.getNewClass('=', 'eval', eButtonType.computing));
    this.buttons.push(this.getNewClass('*', 'operator', eButtonType.manipulation));
  }
  private getNewClass(text: string = '', className: string = '', type: eButtonType = eButtonType.unknown): calcButtonInterface {

    let cl: CalcButtonComponent = new CalcButtonComponent();
    cl.text = text;
    cl.className = className;
    cl.buttonType = type;
    cl.clickHandler.subscribe(val => this.ClickHander(val));
    return cl;
  }
  public ClickHander(info: calcButtonInterface): void {
    console.log(`start isFirstNumber=${this.isFirstNumber}\n
    isSecondNumber=${this.isSecondNumber}\n
    firstNumber=${this.firstNumber}  \n
    secondNumber=${this.secondNumber} \n
    manipulation=${this.manipulation} \n
    totalString=${this.totalString}\n`);
    switch (info.buttonType) {
      case eButtonType.numeric:
        if (this.isFirstNumber) {
          this.firstNumber += info.text;
          this.setProprties(true, false, this.firstNumber, '', '', this.firstNumber);
        }
        else {
          this.secondNumber += info.text;
          this.totalString = (this.firstNumber + this.manipulation + this.secondNumber);
          this.setProprties(false, true, this.firstNumber, this.secondNumber, this.manipulation, this.totalString);
        }

        break;
      case eButtonType.manipulation:
        if (this.isFirstNumber) {
          this.manipulation = info.text;
          this.totalString = (this.firstNumber + this.manipulation);
          this.setProprties(false, true, this.firstNumber, '', this.manipulation, this.totalString);
        }
        else {

          this.firstNumber = parseFloat(eval(this.firstNumber + this.manipulation + this.secondNumber)).toString();
          this.manipulation = info.text;
          this.totalString = (this.firstNumber + this.manipulation);
          this.setProprties(false, true, this.firstNumber, '', this.manipulation, this.totalString);
        }
        break;
      case eButtonType.computing:
        this.firstNumber = parseFloat(eval(this.firstNumber + this.manipulation + this.secondNumber)).toString();
        this.setProprties(true, false, this.firstNumber, '', '', this.firstNumber);
        break;
      case eButtonType.clear:
        this.setProprties(true, false, '', '', '', '0');
        break;
      default:
        break;
    }
    console.log(`end isFirstNumber=${this.isFirstNumber}\n
    isSecondNumber=${this.isSecondNumber}\n
    firstNumber=${this.firstNumber}  \n
    secondNumber=${this.secondNumber} \n
    manipulation=${this.manipulation} \n
    totalString=${this.totalString}\n`);
  }
  private setProprties(isFirst: boolean, isSecond: boolean, first: string, second: string, manipulation: string, total: string): void {
    this.firstNumber = '';
    this.secondNumber = '';
    this.totalString = '0';
    this.manipulation = '';
    this.isFirstNumber = false;
    this.isSecondNumber = false;

    this.firstNumber = first;
    this.secondNumber = second;
    this.totalString = total;
    this.manipulation = manipulation;
    this.isFirstNumber = isFirst;
    this.isSecondNumber = isSecond;
  }
}
