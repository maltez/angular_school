import { Component, OnInit } from '@angular/core';
import { CalcService} from './service/calc.service';

@Component({
  selector: 'calculator',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {

  templateC = { text: 'C', className: 'clear' };
  template = [
    {
      row:
        [{ text: '7', className: 'key' },
        { text: '8', className: 'key' },
        { text: '9', className: 'key' },
        { text: '+', className: 'operator' }]
    },
    {
      row: [
        { text: '4', className: 'key' },
        { text: '5', className: 'key' },
        { text: '6', className: 'key' },
        { text: '-', className: 'operator' }]
    },
    {
      row: [{ text: '1', className: 'key' },
      { text: '2', className: 'key' },
      { text: '3', className: 'key' },
      { text: '/', className: 'operator' }]
    },
    {
      row: [{ text: '0', className: 'key' },
      { text: '.', className: 'key' },
      { text: '=', className: 'eval' },
      { text: '*', className: 'operator' }]
    }
  ];
  constructor(private __CalcService: CalcService) { }
}
