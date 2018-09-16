import {  Component } from '@angular/core';
import { KeyBoardAbstract } from '../baseClass/keyboard.abstract';
import { KeyBoardService } from '../service/keyboard.service';

@Component({
  selector: 'keyboard-clear',
  template: `<span [className]=className (click)='onClick()' >{{text}}</span>`,
  styleUrls: ['./clear.component.css']
})
export class ClearComponent extends KeyBoardAbstract {
  constructor(private __keyBoardService: KeyBoardService) {
    super();
    this.className = 'clear';
    this.text = 'C';
  }

  public onClick() {
    this.__keyBoardService.clear();
  }
}

