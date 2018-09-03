import { Component } from '@angular/core';
import store from '../../store/store';
import actions from '../../store/actionTypes';

@Component({
    selector: 'app-decrement',
    template: `
        <button (click)='handler()'>-</button>
    `
})
export class DecrementComponent {
    public handler(): void {
        store.dispatch({type: actions.DECREMENT});
    }
}

