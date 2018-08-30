import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-key-comp',
    template: `
        <button (click) = "click($event)">{{ key }}</button>
    `,
    styles: [`
        button{
            width:100%
        }
    `]
})
export class KeyComponent {
    @Input()
    public key: string;
    @Output()
    public clickButton: EventEmitter<string> = new EventEmitter<string>();

    click(value: any): void {
        this.clickButton.emit(value.toElement.innerText);
    }
}
