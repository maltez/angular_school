import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../service/display.service';

@Component({
  selector: 'display',
  template: `
  <div class="screen">
  <p class='history'>{{history}}</p>
  <p class='total'>{{total}}</p>
  </div>
  `,
  styleUrls: ['./display.component.css']
})
export class CalcDisplayComponent implements OnInit {

  public total = '0';
  public history = '';

  constructor(private __displayService: DisplayService) { }

  ngOnInit(): void {
    this.__displayService.displayEventEmitter.subscribe(val => {
      const { history, total } = val;
      this.total = total;
      this.history = history;
    })
  }
}
