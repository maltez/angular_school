import { Component, OnInit } from '@angular/core';
import { CalcService } from '../../servics/calc.service';

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

  constructor(private calcService: CalcService) {
  }

  ngOnInit(): void {
    this.calcService.calcObservable.subscribe(
      (value) => {
        this.total = value.resultStr;
        this.history = value.history;
      }
    )
  }
}
