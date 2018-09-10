import { Component, OnInit } from '@angular/core';
import { eButtonType } from '../enums/eButtonType';
import { calcButtonInterface } from '../interfaces/calcButtonInterface';

@Component({
  selector: 'calculator',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  buttons: Array<calcButtonInterface> = new Array<calcButtonInterface>();
  button: calcButtonInterface;

  ngOnInit(): void {
    this.button = ({text:'C', className:'clear', buttonType:eButtonType.clear});
    this.buttons.push({text:'7',className: 'key', buttonType: eButtonType.numeric});
    this.buttons.push({text:'8',className: 'key', buttonType: eButtonType.numeric});
    this.buttons.push({text:'9',className: 'key', buttonType: eButtonType.numeric});
    this.buttons.push({text:'+',className: 'operator', buttonType: eButtonType.manipulation});
    this.buttons.push({text:'4',className: 'key', buttonType: eButtonType.numeric});
    this.buttons.push({text:'5',className: 'key', buttonType: eButtonType.numeric});
    this.buttons.push({text:'6',className: 'key', buttonType: eButtonType.numeric});
    this.buttons.push({text:'-',className: 'operator', buttonType: eButtonType.manipulation});
    this.buttons.push({text:'1',className: 'key', buttonType: eButtonType.numeric});
    this.buttons.push({text:'2',className: 'key', buttonType: eButtonType.numeric});
    this.buttons.push({text:'3',className: 'key',  buttonType:eButtonType.numeric});
    this.buttons.push({text:'/',className: 'operator', buttonType: eButtonType.manipulation});
    this.buttons.push({text:'0',className: 'key', buttonType: eButtonType.numeric});
    this.buttons.push({text:'.',className: 'key',  buttonType:eButtonType.numeric});
    this.buttons.push({text:'=',className: 'eval', buttonType: eButtonType.computing});
    this.buttons.push({text:'*',className: 'operator', buttonType: eButtonType.manipulation});
  }

}
