import { EventEmitter } from '@angular/core';
import { CalcInformationInterface } from '../interfaces/calcInformationInterface';
import { calcButtonInterface } from '../interfaces/calcButtonInterface';
import { eButtonType } from '../enums/eButtonType';

export class CalcService {
    public calcObservable: EventEmitter<CalcInformationInterface> = new EventEmitter();
    public calcInformation:CalcInformationInterface= {
      firstNumber: '',
      secondNumber: '',
      manipulation: '',
      isInputNumber1: true,

      resultStr: '0',
      history: ''
    };

    public setNumber(number:string): void {

      if (this.calcInformation.isInputNumber1) {
         this.setCalcInformation(
          true,
          this.calcInformation.firstNumber + number,
          '',
          '',
          this.calcInformation.firstNumber + number,
          this.calcInformation.history + number
        );
      }
      else {
         this.setCalcInformation(
          false,
          this.calcInformation.firstNumber,
          this.calcInformation.secondNumber + number,
          this.calcInformation.manipulation,
          this.calcInformation.firstNumber + this.calcInformation.manipulation + this.calcInformation.secondNumber + number,
          this.calcInformation.history + number
        );
      }
      this.calcObservable.emit(this.calcInformation);
    }
    public operation (number:string): void {
      if (this.calcInformation.isInputNumber1) {
        this.setCalcInformation(
          false,
          this.calcInformation.firstNumber,
          '',
          number,
          this.calcInformation.firstNumber + this.calcInformation.manipulation,
          this.calcInformation.history + number
        );
      }
      else {
        this.setCalcInformation(
          false,
          parseFloat(eval(this.calcInformation.firstNumber + this.calcInformation.manipulation + this.calcInformation.secondNumber)).toString(),
          '',
          number,
          parseFloat(eval(this.calcInformation.firstNumber + this.calcInformation.manipulation + this.calcInformation.secondNumber)).toString() + number,
          this.calcInformation.history + number
        );
      }
      this.calcObservable.emit(this.calcInformation);
    }

    public calculate(number:string): void {
       this.setCalcInformation(
        true,
        parseFloat(eval(this.calcInformation.firstNumber + this.calcInformation.manipulation + this.calcInformation.secondNumber)).toString(),
        '',
        '',
        parseFloat(eval(this.calcInformation.firstNumber + this.calcInformation.manipulation + this.calcInformation.secondNumber)).toString(),
        this.calcInformation.history + '='+parseFloat(eval(this.calcInformation.firstNumber + this.calcInformation.manipulation + this.calcInformation.secondNumber)).toString()
      );
      this.calcObservable.emit(this.calcInformation);
    }

    public clear():void {
      this.setCalcInformation(true, '', '', '', '0', '');
      this.calcObservable.emit(this.calcInformation);
    }


    private setCalcInformation(isInputFistNum: boolean, first: string, second: string, manipulation: string, total: string, historyStr: string): CalcInformationInterface {

      this.calcInformation = {
        firstNumber: first,
        secondNumber: second,
        manipulation: manipulation,
        isInputNumber1: isInputFistNum,

        resultStr: total,
        history: historyStr
      }
      return (this.calcInformation);
    }
}
