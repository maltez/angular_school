
import {  Component} from '@angular/core';
import { KeyBoardAbstract } from '../baseClass/keyboard.abstract';
import { KeyBoardService } from '../service/keyboard.service';

@Component({
  selector: 'keyboard-operation',
  template: `<span [className]=className (click)='onClick()' >{{text}}</span>`,
  styleUrls: ['./operation.component.css']
})
export class OperationComponent extends KeyBoardAbstract {

  constructor(private __keyBoardService: KeyBoardService) {
    super();
    this.className = 'clear';
    // this.text = 'C';
  }
  public onClick() {
    this.__keyBoardService.operation(this.text);
  }
}

