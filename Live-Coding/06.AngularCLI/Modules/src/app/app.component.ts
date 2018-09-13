import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <app-weather></app-weather>
  `
})
export class AppComponent {
  title = 'Modules';
}
