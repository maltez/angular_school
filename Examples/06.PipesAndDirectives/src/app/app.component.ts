import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  template: `
   <h1>Date pipe</h1>
   <p>{{dateNow | date: 'short'}}</p>
   <p>{{formatedDate}}</p>
   <p>{{formatedDate2}}</p>
   <hr />
   <h1> Slice pipe </h1>
   <p>{{nickNameWitId | slice : 4 : 8}}</p>
   <ul>
    <li *ngFor="let ingredient of ingredients | slice: 3 : 5">{{ingredient | uppercase | lowercase}}</li>
   </ul>
   <hr />
   <h1>Money</h1>
   <p>{{nickMoney | currency: 'USD': true: '2.1-2'}}</p>
   <hr />
   <h1>JSON</h1>
   <p>{{object | json}}</p>
   <hr />
   <input [(ngModel)]='password' />
   <p>Password: {{password | super : '-'}}</p>
   <hr />
   <h1>Pure-Impure</h1>
   <input type="text" [(ngModel)]="pureText" />
    <h3>{{pureText | pure }}</h3>
  <hr />
  <h1>Directives</h1>
  <p *ngIf="isShow">Is show time! </p><input type="checkbox" [(ngModel)]="isShow" />
  <ng-template [ngIf]="isShow">
    <p>SHOW</p>
  </ng-template>
  <hr />
  <h1>custom directive</h1>
  <div Colored [color]='color' *ngFor="let user of users;
  let i = index;
  let isEven = even;
  let isOdd = odd;"
[ngClass]="{red: isEven, green: isOdd}">
{{i + 1}}.  Name: {{user.name}}. Age: {{user.age}}
</div>

  `,
  providers: [DatePipe]
})
export class AppComponent {
  constructor(private datePipe: DatePipe) {

  }
  public ingredients: Array<string> = ['salt', 'sugar', 'powder', 'eggs', 'milk', 'fruits', 'mushrooms'];
  public dateNow: Date = new Date();
  public formatedDate: string = this.datePipe.transform(this.dateNow, 'short');
  public formatedDate2: string = new DatePipe('ru-RU').transform(this.dateNow, 'medium');
  public nickNameWitId = '0123Nick1234';
  public nickMoney = 1234562.34567;

  public first = 0;
  public last = 2;
  public color = 'red';
  public pureText: string;

  public password: string;
  public object = {
    name: 'Nick',
    age: 12,
    sex: 'M'
  };

  public isShow = true;
  public feelings = 'I hate Angular';
  public users: Array<User> = [
    {name: 'Nick', age: 37},
    {name: 'Vladimir', age: 21},
    {name: 'Lexa', age: 30}
];
}
