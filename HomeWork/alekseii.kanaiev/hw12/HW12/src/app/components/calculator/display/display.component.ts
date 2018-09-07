import { Component, DoCheck } from '@angular/core';
import { CalculatorService } from '../../../services/calculator.service';

@Component({
    selector: 'app-display-comp',
    template: `
       <input type="text" [value]="value" disabled>
    `,
    styles: [`
        input{
            display: block;
            margin: auto;
        }
    `]
})
export class DisplayComponent implements DoCheck {
    public value: string;

    constructor(private calcService: CalculatorService) {}

    ngDoCheck() {
        this.value = this.calcService.getValue();
    }
}
