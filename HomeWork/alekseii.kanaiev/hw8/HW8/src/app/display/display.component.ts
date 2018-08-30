import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-display-comp',
    template: `
       <input type="text" [value]="value" disabled>
    `
})
export class DisplayComponent {
    @Input()
    public value;
}
