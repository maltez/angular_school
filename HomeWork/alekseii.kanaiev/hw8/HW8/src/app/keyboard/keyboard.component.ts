import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-keyboard-comp',
    templateUrl: './keyboard.component.html',
    styles: [`
        table{
            margin: auto;
        }
    `]
})
export class KeyBoardComponent {
    public keys = [['1', '2', '3', '+', '-'], ['4', '5', '6', '*', '/'], ['7', '8', '9', '0', '=']];
    @Output()
    public buttonValue: EventEmitter<string> = new EventEmitter<string>();

    onClick(value: string): void {
        this.buttonValue.emit(value);
    }

}
