import actions from './actions';
import { CalculatorService } from '../services/calculator.service';

const calcServ: CalculatorService = new CalculatorService();
const { NUMBER, OPERATION } = actions;

function dispatcher(state = {value: '0'}, action) {
    switch (action.type) {
        case NUMBER: {
            calcServ.takeNumber(action.value);
            return {...state, value: calcServ.getValue()};
        }
        case OPERATION: {
            calcServ.takeOperation(action.sign);
            return {...state, value: calcServ.getValue()};
        }
        default: {
            return state;
        }
    }
}

export default dispatcher;
