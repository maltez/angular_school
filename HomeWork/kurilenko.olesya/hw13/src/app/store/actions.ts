
const SET_NUMBER = 'SET_NUMBER';
const setNumber = (value) => ({ type: SET_NUMBER, value });

const CLEAR = 'CLEAR';
const clear = () => ({ type: CLEAR });

const MANIPULATION = 'MANIPULATION';
const munipulationNumbers = (value) => ({ type: MANIPULATION, value }); // *


const EQUALLY = 'EQUALLY';
const equallyNumbers = () => ({ type: EQUALLY }); // =


export default {
  SET_NUMBER,
  CLEAR,
  MANIPULATION,
  EQUALLY,
  setNumber,
  clear,
  munipulationNumbers,
  equallyNumbers

}
