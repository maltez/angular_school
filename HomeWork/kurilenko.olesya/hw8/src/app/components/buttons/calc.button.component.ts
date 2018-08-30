import { eButtonType } from '../../enums/eButtonType';
import { calcButtonInterface } from '../../interfaces/calcButtonInterface';
import {
  Component,
  EventEmitter,
  Output,
  Input
} from '@angular/core';

@Component({
  selector: 'calc-button',
  template: `<span [className]=className (click)='onCklicked()' >{{text}}</span>`,
  styles: [`
  span.clear {
    position:absolute;
    z-index:6;
  }
  span, span.clear {
    float: left;
    position: relative;
    top: 0;
    cursor: pointer;
    width: 66px;
    height: 56px;
    background: rgba(0,0,0,0.5);
    border-radius: 3px;
    box-shadow: 0px 4px rgba(0, 0, 0, 0.2);
    margin: 0 7px 11px 0;
    color: #ccc;
    line-height: 56px;
    text-align: center;
    user-select: none;
    transition: all 0.2s ease;
  }
  span.operator {
    background: rgba(250,100,0,0.3);
    margin-right: 0;
  }
  span.eval {
    color: #888e5f;
  }
  span.clear {
    background: transparent;
    box-shadow: none;
    color: #888e5f;
    width:56px;
    left:5px
  }
  span.key:hover {
    background: rgba(255,255,255,0.8);
    color: #333;
  }
  span.operator:hover {
    background: rgba(255,255,255,0.8);
    color: #333;
  }
  span.eval:hover {
    background: #abb850;
    color: #ffffff;
  }
  span.clear:hover {
    border-radius:190px;
    background: rgba(0,0,0,0.1);
    color: white;
  }
  span.key:active {
    box-shadow: 0px 0px rgba(0, 0, 0, 0.2);
    top: 4px;
  }
  span.eval:active {
    box-shadow: 0px 0px #717a33;
    top: 4px;
  }
  span.clear:active {
    top: 4px;
    box-shadow: 0px 0px #d3545d;
  }

  `]
})
export class CalcButtonComponent implements calcButtonInterface {
  @Input()
  buttonType: eButtonType = eButtonType.unknown;
  @Input()
  className: string = '';
  @Input()
  text: string = '';

  @Output()
  clickHandler: EventEmitter<calcButtonInterface> = new EventEmitter<calcButtonInterface>();

  constructor() {
  }

  // constructor(text: string='', className: string='', type: eButtonType=eButtonType.unknown) {
  //   this.buttonType = type || eButtonType.unknown;
  //   this.text = text || '';
  //   this.className = className || '';
  // }

  public onCklicked(): void {
    this.clickHandler.emit(this)
  }


}
