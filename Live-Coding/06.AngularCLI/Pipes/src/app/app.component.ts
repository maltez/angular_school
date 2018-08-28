import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <p>Date Now: {{dateNow | date : "yy--dd--MMM" | uppercase}}</p>
    <p>Date Now Modify: {{date }}</p>
    <hr />
    <p>{{phrase | slice : 2}}</p>
    <ul>
      <li *ngFor="let fruit of arr | slice : 2 : 4">{{fruit | uppercase}}</li>
    </ul>
    <p>Total cost: {{totalCost | currency: 'EUR' : true: '2.1-2'}}</p>
    <p>Number: {{totalCost| number : "3.2-4"}}</p>
    <hr />
    <p>{{obj | json}}</p>
    <input [(ngModel)]='pass'/>
    <p>{{pass | stars : '-'}}</p>
    <p>{{pass | stars2 : '-'}}</p>
  `,
  providers: [ DatePipe ]
})
export class AppComponent {
  arr = ['apple', 'coconut', 'grape', 'pear', 'peach'];
  totalCost = Math.floor(Math.random() * 100) + Math.random();

  // private _pipe: DatePipe = new DatePipe('en-US');
  constructor(private _pipe: DatePipe) {
  }
  public pass: string;
  title = 'Pipes';
  dateNow = new Date();
  phrase = 'I hate angular';

  obj = {
    name: 'Basil',
    age: 24,
    sex: {
      female: false,
      male: true
    }
  };

  get date() {
    return this._pipe.transform(this.dateNow);
  }
}
