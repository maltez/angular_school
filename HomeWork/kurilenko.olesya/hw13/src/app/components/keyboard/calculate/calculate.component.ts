import { Component } from '@angular/core';
import { KeyBoardAbstract } from '../baseClass/keyboard.abstract';
import { KeyBoardService } from '../service/keyboard.service';

@Component({
  selector: 'keyboard-calculate',
  template: `<span [className]=className (click)='onClick()' >{{text}}</span>`,
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent extends KeyBoardAbstract {
  constructor(private __keyBoardService: KeyBoardService) {
    super();
    this.className = 'eval';
    this.text = '=';
  }

  public onClick() {
    this.__keyBoardService.calculate();
  }
}

