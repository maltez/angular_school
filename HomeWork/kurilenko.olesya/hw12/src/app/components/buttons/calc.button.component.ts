import { eButtonType } from '../../enums/eButtonType';
import { calcButtonInterface } from '../../interfaces/calcButtonInterface';
import {  Component,  Input} from '@angular/core';
import { CalcService } from '../../servics/calc.service';

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
    this.calcService.Apply(this);
  }

  constructor(private calcService: CalcService) {
  }

}

