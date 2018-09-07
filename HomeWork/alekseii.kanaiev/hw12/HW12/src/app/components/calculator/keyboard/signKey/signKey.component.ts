import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CalculatorService } from '../../../../services/calculator.service';

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

    constructor(private calcService: CalculatorService) {}

    click(value: any): void {
        this.calcService.takeSign(value.toElement.innerText);
    }
}
