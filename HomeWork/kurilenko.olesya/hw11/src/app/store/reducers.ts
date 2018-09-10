import actions from './actions';
import { CalcInformationInterface } from '../interfaces/calcInformationInterface';

const {
  SET_NUMBER,
  CLEAR,
  MANIPULATION,
  EQUALLY } = actions;

const INITIAL_STATE: CalcInformationInterface = {
  firstNumber: "",
  secondNumber: "",
  manipulation: "",
  isInputNumber1: true,

  resultStr: "0",
  history: ""
}
const reducers = function (state: CalcInformationInterface = INITIAL_STATE, action) {
  console.log(state, action);
  switch (action.type) {
    case SET_NUMBER:
      return setNumber(state, action);
    case CLEAR:
      return getNewState(true, '', '', '', '0', '');
    case MANIPULATION:
      return manipulation(state, action);
    case EQUALLY:
      return equally(state, action);
    default:
      return { ...state };
  }

}
export default reducers;

const setNumber = (state: CalcInformationInterface, action): CalcInformationInterface => {

  if (state.isInputNumber1) {
    return getNewState(
      true,
      state.firstNumber + action.value,
      '',
      '',
      state.firstNumber + action.value,
      state.history + action.value
    );
  }
  else {
    return getNewState(
      false,
      state.firstNumber,
      state.secondNumber + action.value,
      state.manipulation,
      state.firstNumber + state.manipulation + state.secondNumber + action.value,
      state.history + action.value
    );
  }
}
const manipulation = (state: CalcInformationInterface, action): CalcInformationInterface => {
  if (state.isInputNumber1) {
    return getNewState(
      false,
      state.firstNumber,
      '',
      action.value,
      state.firstNumber + state.manipulation,
      state.history + action.value
    );
  }
  else {
    return getNewState(
      false,
      parseFloat(eval(state.firstNumber + state.manipulation + state.secondNumber)).toString(),
      '',
      action.value,
      parseFloat(eval(state.firstNumber + state.manipulation + state.secondNumber)).toString() + action.value,
      state.history + action.value
    );
  }
}

const equally = (state: CalcInformationInterface, action): CalcInformationInterface => {
  return getNewState(
    true,
    parseFloat(eval(state.firstNumber + state.manipulation + state.secondNumber)).toString(),
    '',
    '',
    parseFloat(eval(state.firstNumber + state.manipulation + state.secondNumber)).toString(),
    state.history + '='
  );
}

const getNewState = (isInputFistNum: boolean, first: string, second: string, manipulation: string, total: string, historyStr: string): CalcInformationInterface => {

  const state = {
    firstNumber: first,
    secondNumber: second,
    manipulation: manipulation,
    isInputNumber1: isInputFistNum,

    resultStr: total,
    history: historyStr
  }
  console.log('getState' , state);
  return (state);
}
