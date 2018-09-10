import { Component, OnInit } from '@angular/core';
import { Human } from './interfaces/human.interface';
import { ColorTableSettings } from './model/colorTableSettins';

@Component({
  selector: 'app-root',
  template: `<div  appColoredTable [data]="people" [color]="colorsTable"></div>
  <div  replaceTags [tagFrom]="tagFrom" [tagTo]="tagTo">
    <div click="dd">1</div>
    <div>2</div>
    <div>
      <div>5</div>
    </div>
  </div>
  `,
  styles: [``]
})
export class AppComponent implements OnInit {
  title = 'CustomDirectives';
  people: Array<Human> = new Array();
  colorsTable = new ColorTableSettings('rgb(225,225,225)','white','rgb(210,225,250)','rgb(250,250,210)');
  tagFrom:string = 'div';
  tagTo:string = 'span';

  ngOnInit(): void {
    this.people.push(
      { name: 'Nick',surname:'Pat', age: 38,gender:'F',phoneNumber:'222-333-44' },
      { name: 'Alex',surname:'Pat', age: 37,gender:'F',phoneNumber:'222-333-44' },
      { name: 'Thelma',surname:'Pat', age: 26,gender:'F',phoneNumber:'222-333-44' },
      { name: 'Louse',surname:'Pat', age: 12,gender:'F',phoneNumber:'222-333-44' },
      { name: 'Stranger',surname:'Pat', age: 22,gender:'F',phoneNumber:'222-333-44' },
    );
  }
}
