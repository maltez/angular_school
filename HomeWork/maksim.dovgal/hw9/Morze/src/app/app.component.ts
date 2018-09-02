import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <input type="text" [(ngModel)]="someStr" />
   <p>{{someStr | morze}}</p>
  `,
})
export class AppComponent {
  someStr: string = '';
}
