import { Component } from '@angular/core';
import store from '../../store/store';
import actions from '../../store/actionTypes';

@Component({
    selector: 'app-increment',
    template: `
        <button (click)="handler()">+</button>
    `
})
export class IncrementComponent {
    public handler(): void {
        store.dispatch({type: actions.INCREMENT});
    }
}

