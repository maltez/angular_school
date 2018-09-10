import actions from './actions';

const { NUMBER, MATH_SYMBOL, EQUALLY } = actions;

let result = 0;
let sign = '';
let isEqually = false;

const calculating = function(value): number {
  switch (sign) {
    case '+':
      return result +=  parseFloat(value);
    case '-':
      return result -=  parseFloat(value);
    case '*':
      return result *=  parseFloat(value);
    case '/':
      return result /=  parseFloat(value);
    default:
      return result =  parseFloat(value);
  }
};

const dispatcher = function(state = {value: '0'}, action) {
    switch (action.type) {
        case NUMBER: {
          if (isEqually) {
            isEqually = false;
            return {...state,
              value: state.value = action.value};
          } else {
            if (state.value === '0') {
              return {...state, value: state.value = action.value};
            } else {
              return {...state, value: state.value += action.value};
            }
          }
        }
        case MATH_SYMBOL: {
          if (sign) {
            result = calculating(state.value);
            sign = action.sign;
            return {...state, value: state.value = '0'};
          }
          result = parseFloat(state.value);
          sign = action.sign;
          return {...state, value: state.value =  '0'};
        }
        case EQUALLY: {
          if (sign !== '=') {
            result = calculating(state.value);
            isEqually = true;
            sign = action.sign;
            return {...state, value: state.value = result.toString()};
          }
          isEqually = true;
          sign = action.sign;
          return state;
        }
        default: {
            return state;
        }
    }
};

export default dispatcher;
