
import {  Component, Input } from '@angular/core';
import { KeyBoardService } from '../service/keyboard.service';

export abstract class KeyBoardAbstract {
  @Input()
  text: string = '';
  @Input()
  className: string = '';
}
