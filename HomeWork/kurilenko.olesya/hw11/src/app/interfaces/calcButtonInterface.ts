import { eButtonType } from '../enums/eButtonType';
import { EventEmitter } from '@angular/core';

export interface calcButtonInterface {
  buttonType: eButtonType;
  className: string;
  text: string;
}
