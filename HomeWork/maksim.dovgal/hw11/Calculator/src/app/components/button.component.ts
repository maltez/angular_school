import { Component, Input } from '@angular/core';
import store from '../store/store';
import actions from '../store/actions';

const { CE, C, BACK_SPACE, DIVIDE, NEG_POS, MULTIPLY, MINUS, PLUS, EQUAL, NUMBER } = actions;

@Component({
  selector: 'app-button',
  template: `
          <div 
            class="btn"
            [ngClass]="{'digit': +operator >= 0}"
            (click)="handler(operator)"
          >
            {{operator}}
          </div>
  `,
  styles: [`
    :host {
      width: 22%;
    }
    .btn {
      text-align: center;
      margin-top: 5px;
      cursor: pointer;
      background-color: gray;
    }
    .digit {
      background-color: white;
    }
  `]
})
export class ButtonComponent {
  @Input() operator: string;

  public handler(operator: string): void {
    switch (operator) {
      case 'CE':
        store.dispatch({type: CE});
        break;
      case 'C':
        store.dispatch({type: C});
        break;
      case '<-':
        store.dispatch({type: BACK_SPACE});
        break;
      case '/':
        store.dispatch({type: DIVIDE});
        break;
      case '+/-':
        store.dispatch({type: NEG_POS});
        break;
      case '*':
        store.dispatch({type: MULTIPLY});
        break;
      case '-':
        store.dispatch({type: MINUS});
        break;
      case '+':
        store.dispatch({type: PLUS});
        break;
      case '=':
        store.dispatch({type: EQUAL});
        break;
      default:
        store.dispatch({type: NUMBER, data: operator});
    }
  }
}
