import { Component, OnInit } from '@angular/core';
import store from '../../store/store';

@Component({
  selector: 'display',
  template: `
  <div class="screen">
  <p class='history'>{{history}}</p>
  <p class='total'>{{total}}</p>
  </div>
  `,
  styleUrls: ['./calc.display.component.css']
})
export class CalcDisplayComponent implements OnInit {

  public total = '0';
  public history = '';

  ngOnInit(): void {
     store.subscribe(
      () => {

        this.total = store.getState().resultStr;
        this.history = store.getState().history;
      }
    )
  }
}
