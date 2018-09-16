import {Component, OnInit} from '@angular/core';
import store from './store/store';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="content">
        <app-display 
          [mainInput]="mainInput" 
          [secondaryInput]="secondaryInput"
        ></app-display>
        <app-keyboard
          [operators]="operators"
          (btnClicked)="detectOperator($event)"
        ></app-keyboard>
      </div>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      height: 100vh;
    }
    .content {
      overflow: hidden;
      background-color: lightgray;
      margin: auto;
      width: 200px;
    }
  `]
})
export class AppComponent implements OnInit {
  mainInput: string = store.getState().mainInput;
  secondaryInput: string = store.getState().secondaryInput;
  operators: Array<string> = [
    'CE', 'C', '<-', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '+/-', '0', '.', '='
  ];

  ngOnInit() {
    console.log(store.getState())
    store.subscribe(
      () => {
        this.mainInput = store.getState().mainInput;
        this.secondaryInput = store.getState().secondaryInput;
      }
    );
  }
}
