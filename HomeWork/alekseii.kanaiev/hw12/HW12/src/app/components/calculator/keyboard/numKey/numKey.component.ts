import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CalculatorService } from '../../../../services/calculator.service';

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

    constructor(private calcService: CalculatorService) {}

    click(value: any): void {
        this.calcService.takeNum(value.toElement.innerText);
    }
}
