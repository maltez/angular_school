import { createStore } from 'redux';
import reducer from './dispatcher';

export default createStore(reducer);