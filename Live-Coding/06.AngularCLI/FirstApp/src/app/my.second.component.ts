import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Clicked } from './app.service';

@Component({
    selector: 'app-second',
    template: `
        <h1>{{name}}</h1>
        <button (click)='clickTrigger()'>Click me</button>
    `,
    styles: [
        `h1 {
            color: purple
        }`
    ]
})
export class MySecondComponent {
    public isClicked = false;

    constructor(private service: Clicked) {
    }

    @Input()
    public name = 'Jojo';

    @Output()
    public clicked = new EventEmitter<boolean>();

    clickTrigger(): void {
        this.isClicked = !this.isClicked;
        this.service.sendClick(this.isClicked);
    }
}

