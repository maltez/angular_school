import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <app-decrement></app-decrement>
    <app-counter></app-counter>
    <app-increment></app-increment>
  `
})
export class AppComponent {
  title = 'Redux';
}
