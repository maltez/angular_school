import { eButtonType } from '../../enums/eButtonType';
import { calcButtonInterface } from '../../interfaces/calcButtonInterface';
import {
  Component,
  Input
} from '@angular/core';

import store from '../../store/store';
import actions from '../../store/actions';


@Component({
  selector: 'calc-button',
  template: `<span [className]=className (click)='onClick()' >{{text}}</span>`,
  styleUrls: ['./calc.button.component.css']
})
export class CalcButtonComponent implements calcButtonInterface {
  @Input()
  buttonType: eButtonType = eButtonType.unknown;
  @Input()
  className: string = '';
  @Input()
  text: string = '';

  public onClick() {
    switch (this.buttonType) {
      case eButtonType.clear:
        store.dispatch(actions.clear());
        break;
      case eButtonType.numeric:
        store.dispatch(actions.setNumber(this.text));
        break;
      case eButtonType.manipulation:
        store.dispatch(actions.munipulationNumbers(this.text));
        break;
      case eButtonType.computing:
        store.dispatch(actions.equallyNumbers());
        break;

    }
  }
}

