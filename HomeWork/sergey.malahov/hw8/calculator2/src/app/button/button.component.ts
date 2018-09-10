import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'button-component',
    template: `
        <div class="calc-button" (click)="onClick()">
            {{operator}}
        </div>`,
    styleUrls: ['../app.component.css']
})

export class ButtonComponent {
    @Input()
    public operator: string;

    @Output()
    public clicked = new EventEmitter<string>();

    onClick():void{
        this.clicked.emit(this.operator);
    }
}
