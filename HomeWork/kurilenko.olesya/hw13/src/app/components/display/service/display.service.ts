import { Observable, of } from 'rxjs';
import { EventEmitter } from '@angular/core';


export class DisplayService {
  public displayEventEmitter: EventEmitter<any> = new EventEmitter();

  public total: string = '0';
  public history: string = '';

  public setDisplayInfo(total, history) {
    this.total = total;
    this.history = history;
    this.displayEventEmitter.emit({ total: this.total, history: this.history });
  }

}
