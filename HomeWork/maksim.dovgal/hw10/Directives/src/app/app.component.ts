import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div toAnotherTag [toTag]="'span'" [fromTag]="'div'" [isNesting]="true">
      <div>
        <h1>sadasd</h1>
        <div>dasdasd</div>
      </div>
      <div>dsad</div>
      <p>dsadasd</p>
    </div>
    <div [table]="someObject"></div>
  `,
})
export class AppComponent {
  someStr: string = '';
  anotherSomeStr: string = '';
  someObject: any = [
    {
      name: 'sdad',
      age: 21,
      sex: 'male'
    },
    {
      name: 'sdad',
      age: 21,
      sex: 'male'
    },
    {
      name: 'sdad',
      age: 21,
      sex: 'male'
    },
    {
      name: 'sdad',
      age: 21,
      sex: 'male'
    },
    {
      name: 'sdad',
      age: 21,
      sex: 'male'
    },
    {
      name: 'sdad',
      age: 21,
      sex: 'male'
    },
  ]
}
