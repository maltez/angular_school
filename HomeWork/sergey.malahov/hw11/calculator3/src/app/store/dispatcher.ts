import actions from './actions';
const { NUMBER, MATH_SYMBOL, EQUALLY } = actions;

let memory: number = 0;
let _operation: string = '';
let needClear: boolean = false;

const dispatcher = function(state = {value: '', indicator: ''}, action) {
    switch (action.type) {
        case NUMBER: {
            if (needClear) {
                state.indicator = '';
                needClear = false;
            }

            state.indicator += action.value;
            return {...state, indicator: state.indicator};
        }
        case MATH_SYMBOL: {
            _operation = action.value;
            memory = parseFloat(state.indicator);
            needClear = true;
            return state;
        }
        case EQUALLY: {
            switch (_operation) {
                case '+':
                    state.indicator = (memory + parseFloat(state.indicator)).toString();
                    break;
                case '-':
                    state.indicator = (memory - parseFloat(state.indicator)).toString();
                    break;
                case '*':
                    state.indicator = (memory * parseFloat(state.indicator)).toString();
                    break;
                case '/':
                    state.indicator = (memory / parseFloat(state.indicator)).toString();
                    break;
                default:
                    throw new Error('Unknown operator');
            }
            needClear = true;
            return state;
        }
        default: {
            return state;
        }
    }
};

export default dispatcher;
