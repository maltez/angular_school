import actions from './actions';
import { CalcInformationInterface } from '../interfaces/calcInformationInterface';
import { ReduserService } from './reducers.service';

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

      return FactoryService.ReduserServiceFactory().setNumber(state, action.value);
    case CLEAR:
      return FactoryService.ReduserServiceFactory().clear(state);
    case MANIPULATION:
      return FactoryService.ReduserServiceFactory().operation(state, action.value);
    case EQUALLY:
      return FactoryService.ReduserServiceFactory().calculate(state, action.value);
    default:
      return { ...state };
  }

}
export default reducers;

class FactoryService{
   static __reduserService:ReduserService;

  static ReduserServiceFactory(){
    if(!this.__reduserService){
      this.__reduserService = new ReduserService();
    }
    return this.__reduserService;
  }
}

