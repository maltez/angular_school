import { Component, Input, EventEmitter, Output } from '@angular/core';
import store from '../../../../store/store';
import actions from '../../../../store/actions';

const { NUMBER } = actions;

@Component({
    selector: 'app-numkey-comp',
    template: `
        <button (click) = "click($event)">{{ key }}</button>
    `,
    styles: [`
        button{
            width:100%;
            height: 100%
        }
    `]
})
export class NumKeyComponent {
    @Input()
    public key: string;
    // @Input()
    // public isLast: boolean;

    click(value: any): void {
        store.dispatch({ type: NUMBER, value: value.toElement.innerText });
    }
}
