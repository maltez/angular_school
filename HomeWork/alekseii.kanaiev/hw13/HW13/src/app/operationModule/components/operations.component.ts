import { Component, Input } from '@angular/core';
import store from '../../store/store';
import actions from '../../store/actions';

const { OPERATION } = actions;

@Component({
    selector: 'app-operations-comp',
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
export class OperationsComponent {
    @Input()
    public key: string;

    onClick(value): void {
        store.dispatch({type: OPERATION, sign: value.toElement.innerText});
    }
}
