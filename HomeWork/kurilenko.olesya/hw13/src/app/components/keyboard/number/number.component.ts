import {
  Component,
  Input
} from '@angular/core';
import { KeyBoardAbstract } from '../baseClass/keyboard.abstract';
import { KeyBoardService } from '../service/keyboard.service';


@Component({
  selector: 'keyboard-number',
  template: `<span [className]=className (click)='onClick()' >{{text}}</span>`,
  styleUrls: ['./number.component.css']
})
export class NumberComponent extends KeyBoardAbstract {

  constructor(private __keyBoardService: KeyBoardService) {
    super();
    this.className = 'key';
    // this.text = 'C';
  }
  public onClick() {
    this.__keyBoardService.setNumber(this.text);
  }
}

