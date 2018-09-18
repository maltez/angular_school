import { CalcInformationInterface } from '../interfaces/calcInformationInterface';
export class ReduserService {

  public setNumber(state:CalcInformationInterface, number: string): CalcInformationInterface {
    let res:CalcInformationInterface;
    if (state.isInputNumber1) {
      res = this.setCalcInformation(
        true,
        state.firstNumber + number,
        '',
        '',
        state.firstNumber + number,
        state.history + number
      );
    }
    else {
      res = this.setCalcInformation(
        false,
        state.firstNumber,
        state.secondNumber + number,
        state.manipulation,
        state.firstNumber + state.manipulation + state.secondNumber + number,
        state.history + number
      );
    }
    return res;
  }
  public operation(state:CalcInformationInterface,number: string): CalcInformationInterface {
    let res:CalcInformationInterface;
    if (state.isInputNumber1) {
      res = this.setCalcInformation(
        false,
        state.firstNumber,
        '',
        number,
        state.firstNumber + state.manipulation,
        state.history + number
      );
    }
    else {
      res = this.setCalcInformation(
        false,
        parseFloat(eval(state.firstNumber + state.manipulation + state.secondNumber)).toString(),
        '',
        number,
        parseFloat(eval(state.firstNumber + state.manipulation + state.secondNumber)).toString() + number,
        state.history + number
      );
    }
    return res;
  }

  public calculate(state:CalcInformationInterface,number: string): CalcInformationInterface {
    let res:CalcInformationInterface;
    res = this.setCalcInformation(
      true,
      parseFloat(eval(state.firstNumber + state.manipulation + state.secondNumber)).toString(),
      '',
      '',
      parseFloat(eval(state.firstNumber + state.manipulation + state.secondNumber)).toString(),
      state.history + '=' + parseFloat(eval(state.firstNumber + state.manipulation + state.secondNumber)).toString()
    );
    return res;
  }

  public clear(state:CalcInformationInterface): CalcInformationInterface {
    let res:CalcInformationInterface;
    res=this.setCalcInformation(true, '', '', '', '0', '');
    return res;
  }


  private setCalcInformation(isInputFistNum: boolean, first: string, second: string, manipulation: string, total: string, historyStr: string): CalcInformationInterface {

    const calcInformation: CalcInformationInterface = {
      firstNumber: first,
      secondNumber: second,
      manipulation: manipulation,
      isInputNumber1: isInputFistNum,

      resultStr: total,
      history: historyStr
    }
    return ({ ...calcInformation });
  }
}
