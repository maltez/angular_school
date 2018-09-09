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

    public Apply(click:calcButtonInterface): void {

        this.calcObservable.emit(this.setInformation(click));
    }
    private setInformation(info: calcButtonInterface): CalcInformationInterface {

      switch (info.buttonType) {
        case eButtonType.numeric:
         return this.setNumber(info.text);
        case eButtonType.manipulation:
          return this.manipulation(info.text)
        case eButtonType.computing:
        return this.equally(info.text);
        case eButtonType.clear:
        return this.setCalcInformation(true, '', '', '', '0', '');
        default:
          break;
      }
     return this.calcInformation;
    }
    private setNumber(number:string): CalcInformationInterface {

      if (this.calcInformation.isInputNumber1) {
        return this.setCalcInformation(
          true,
          this.calcInformation.firstNumber + number,
          '',
          '',
          this.calcInformation.firstNumber + number,
          this.calcInformation.history + number
        );
      }
      else {
        return this.setCalcInformation(
          false,
          this.calcInformation.firstNumber,
          this.calcInformation.secondNumber + number,
          this.calcInformation.manipulation,
          this.calcInformation.firstNumber + this.calcInformation.manipulation + this.calcInformation.secondNumber + number,
          this.calcInformation.history + number
        );
      }
    }
    private manipulation (number:string): CalcInformationInterface {
      if (this.calcInformation.isInputNumber1) {
        return this.setCalcInformation(
          false,
          this.calcInformation.firstNumber,
          '',
          number,
          this.calcInformation.firstNumber + this.calcInformation.manipulation,
          this.calcInformation.history + number
        );
      }
      else {
        return this.setCalcInformation(
          false,
          parseFloat(eval(this.calcInformation.firstNumber + this.calcInformation.manipulation + this.calcInformation.secondNumber)).toString(),
          '',
          number,
          parseFloat(eval(this.calcInformation.firstNumber + this.calcInformation.manipulation + this.calcInformation.secondNumber)).toString() + number,
          this.calcInformation.history + number
        );
      }
    }

    private equally(number:string): CalcInformationInterface {
      return this.setCalcInformation(
        true,
        parseFloat(eval(this.calcInformation.firstNumber + this.calcInformation.manipulation + this.calcInformation.secondNumber)).toString(),
        '',
        '',
        parseFloat(eval(this.calcInformation.firstNumber + this.calcInformation.manipulation + this.calcInformation.secondNumber)).toString(),
        this.calcInformation.history + '='+parseFloat(eval(this.calcInformation.firstNumber + this.calcInformation.manipulation + this.calcInformation.secondNumber)).toString()
      );
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
