import { Component, OnInit } from '@angular/core';
import { Human } from './interfaces/human.interface';

@Component({
  selector: 'app-root',
  template: `
    <h1 Colored [color]="color">{{title}}</h1>
    <input type="checkbox" [(ngModel)]="isShow"/><span>Is show</span>
    <p *ngIf="isShow">Show me!!!</p>
    <ng-template [ngIf] ="!isShow">
      <p>Hidden!!!!</p>
    </ng-template>
    <hr />
    <input [(ngModel)]="name" /> <span>Input name</span>
    <div [ngSwitch]="name">
      <div *ngSwitchCase="'Nick'">Welcome Nick</div>
      <div *ngSwitchCase="'Alex'">How are you Alex</div>
      <div *ngSwitchDefault>Hi stranger</div>
    </div>
    <hr />
    <ul>
      <li *ngFor="let user of people; let  i = index">
        <span>{{i + 1}}.{{user.name}} -- {{user.age}}</span>
      </li>
    </ul>
  `
})
export class AppComponent implements OnInit {
  people: Array<Human> = new Array();
  title = 'Directives';
  isShow = true;
  name = 'Nick';
  color = 'red';

  ngOnInit(): void {
    this.people.push(
      { name: 'Nick', age: 38 },
      { name: 'Alex', age: 37 },
      { name: 'Thelma', age: 26 },
      { name: 'Louse', age: 12 },
      { name: 'Stranger', age: 22 },
    );
  }
}
