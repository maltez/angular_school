import actions from './actions';
const { CE, C, BACK_SPACE, DIVIDE, NEG_POS, MULTIPLY, MINUS, PLUS, EQUAL, NUMBER } = actions;

const dispatcher = function(state = {mainInput: '', firstValue: '', secondValue: '', secondaryInput: '', action: '', trigger: false, repeatNoDigit: true}, action) {
  let newState;
  switch(action.type) {
    // clear main content
    case CE:
      return {...state, mainInput: '', firstValue: ''};
    //  clear all
    case C:
      return {...state, mainInput: '', firstValue: '', secondValue: '', secondaryInput: '', action: '', trigger: false};
    //  backspace
    case BACK_SPACE:
      newState = {...state};
      if (newState.mainInput.length) {
        newState.mainInput = newState.mainInput.slice(0, -1);
      }
      if (newState.mainInput.length)
        newState.firstValue = parseFloat(newState.mainInput) + '';
      else {
        newState.firstValue = '';
        if (!newState.secondaryInput.length)
          newState.repeatNoDigit = true;
      }
      return newState;
    case DIVIDE:
      newState = {...state};
      if (!newState.repeatNoDigit) {
        setOperator('/', newState);
        newState.repeatNoDigit = true;
      }
      return newState;
    case NEG_POS:
      newState = {...state};
      if(newState.mainInput.length){
        newState.mainInput = '' + (parseFloat(newState.mainInput) * -1);
      }
      if ((!newState.firstValue.length && !newState.secondValue.length) || !newState.secondValue.length && !newState.action.length) {
        newState.firstValue = '' + (parseFloat(newState.firstValue) * -1);
      } else {
        newState.secondValue = '' + (parseFloat(newState.secondValue) * -1);
      }
      return newState;
    case MULTIPLY:
      newState = {...state};
      if (!newState.repeatNoDigit) {
        setOperator('*', newState);
        newState.repeatNoDigit = true;
      }
      return newState;
    case MINUS:
      newState = {...state};
      if (!newState.repeatNoDigit) {
        setOperator('-', newState);
        newState.repeatNoDigit = true;
      }
      return newState;
    case PLUS:
      newState = {...state};
      if (!newState.repeatNoDigit) {
        setOperator('+', newState);
        newState.repeatNoDigit = true;
      }
      return newState;
    case EQUAL:
      newState = {...state};
      setOperator('=', newState);
      return newState;
    case NUMBER:
      newState = {...state};
      if ((!newState.firstValue.length && !newState.secondValue.length) || !newState.secondValue.length && !newState.action.length) {
        newState.firstValue += action.data;
      } else {
        if (newState.trigger) {
          newState.mainInput = '';
          newState.trigger = false;
        }
        newState.secondValue += action.data;
      }
      newState.repeatNoDigit = false;
      newState.mainInput += action.data;
      return newState;
    default:
      return state;
  }
};

function setOperator(operator: string, state: any) {
  let res: number,
    oldMainInput = state.mainInput;
  if (state.action) {
    res = doneAction(state);
    state.mainInput = '' + res;
  }
  if (operator !== '=') {
    state.secondaryInput += oldMainInput + ' ' + operator + ' ';
    state.action = operator;
  } else {
    state.secondaryInput = '';
    state.action = '';
    state.firstValue = state.mainInput;
    state.secondValue = '';
  }
  state.trigger = true;
}

function doneAction(state: any): number {
  let firstValue,
    secondValue,
    res;
  firstValue = parseFloat(state.firstValue);
  secondValue = parseFloat(state.secondValue);
  switch(state.action) {
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

  state.firstValue = '' + res;
  state.secondValue = '';

  return res;
}

export default dispatcher;
