import { Component } from '@angular/core';

@Component({
    selector: 'app-keyboard-comp',
    templateUrl: './keyboard.component.html',
    styles: [`
        table{
            display: inline-block;
            margin: auto;
        }
        .null{
            height: 48px;
        }
    `]
})
export class KeyboardComponent {
    public numKeys = [['1', '2', '3', '0'], ['4', '5', '6'], ['7', '8', '9', '.']];
    public signKeys = [['+', '-'], ['*', '/'], ['=']];
}
