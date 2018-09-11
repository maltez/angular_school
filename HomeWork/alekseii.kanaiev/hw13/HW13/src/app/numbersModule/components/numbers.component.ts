import { Component, Input } from '@angular/core';
import store from '../../store/store';
import actions from '../../store/actions';

const { NUMBER } = actions;

@Component({
    selector: 'app-numbers-comp',
    template: `
        <button (click) = 'onClick($event)'>{{ key }}</button>
    `,
    styles: [`
        button{
            width:100%;
            height: 100%
        }
    `]
})
export class NumbersComponent {

    @Input()
    public key: string;

    onClick(value): void {
        store.dispatch({type: NUMBER, value: value.toElement.innerText});
    }
}
