import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <input type="text" [(ngModel)]="someStr" />
   <p>{{someStr | toMorze}}</p>
   <input type="text" [(ngModel)]="anotherSomeStr" />
   <p>{{anotherSomeStr | fromMorze}}</p>
  `,
})
export class AppComponent {
  someStr: string = '';
  anotherSomeStr: string = '';
}
