import {Component, Input} from '@angular/core';
import store from '../store/store';
import actions from '../store/actions';

@Component({
    selector: 'button-component',
    template: `
        <div class="calc-button" (click)="clickHandler()">
            {{operator}}
        </div>`,
    styleUrls: ['../app.component.css']
})

export class ButtonComponent {
    @Input()
    public operator: string;

    public clickHandler(): void {
        let buttonType = '';
        if ('1234567890'.includes(this.operator)) {
            buttonType = actions.NUMBER;
        }

        if ('+-*/'.includes(this.operator)) {
            buttonType = actions.MATH_SYMBOL;
        }

        if ('='.includes(this.operator)) {
            buttonType = actions.EQUALLY;
        }
        console.log(this.operator);
        store.dispatch({type: buttonType, value: this.operator});
    }
}
