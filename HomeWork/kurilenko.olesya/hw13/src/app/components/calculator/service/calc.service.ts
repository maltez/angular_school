import { EventEmitter, Injectable } from '@angular/core';
import { CalcInformationInterface } from '../../../interfaces/calcInformationInterface';
import { DisplayService } from '../../display/service/display.service';
import { KeyBoardService } from '../../keyboard/service/keyboard.service';
import store from '../../../store/store';
import actions from '../../../store/actions';


@Injectable({
  providedIn: 'root',
})
export class CalcService {
  constructor(private __displayService: DisplayService, private __keyboardService: KeyBoardService) {
    console.log('ss');
    __keyboardService.kbCalculateEventEmitter.subscribe(() => { store.dispatch(actions.equallyNumbers())});
    __keyboardService.kbClearEventEmitter.subscribe(() => { store.dispatch(actions.clear()) });
    __keyboardService.kbNumberEventEmitter.subscribe((val) => { console.log('CalcService setNumber'+val); store.dispatch(actions.setNumber(val)); });
    __keyboardService.kbOperationEventEmitter.subscribe((val) => {store.dispatch(actions.munipulationNumbers(val)); });
    store.subscribe(()=>{
      this.__displayService.setDisplayInfo(store.getState().resultStr, store.getState().history);
    });
  }

}
