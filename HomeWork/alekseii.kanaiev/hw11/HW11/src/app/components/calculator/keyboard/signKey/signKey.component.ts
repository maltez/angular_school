import { Component, Input, EventEmitter, Output } from '@angular/core';
import store from '../../../../store/store';
import actions from '../../../../store/actions';

const { MATH_SYMBOL, EQUALLY } = actions;

@Component({
    selector: 'app-signkey-comp',
    template: `
        <button (click) = "click($event)">{{ key }}</button>
    `,
    styles: [`
        button{
            width:100%
        }
    `]
})
export class SignKeyComponent {
    @Input()
    public key: string;

    click(value: any): void {
        const sign = value.toElement.innerText;
        if (sign === '=') {
            store.dispatch({ type: EQUALLY, sign: sign });
        } else {
            store.dispatch({ type: MATH_SYMBOL, sign: sign });
        }
    }
}
