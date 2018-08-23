import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'hello-world',
    template: `
    <h1>{{hello}}</h1>
    <button (click)='handler($event)'>Click Me</button>
    `,
})
export class NewComponent {

    public toggle = true;

    @Output()
    public clickEvent = new EventEmitter<string>();

    @Input()
    public hello = 'hello';

    public handler($event): void {
        this.toggle = !this.toggle;
        this.clickEvent.emit(this.hello + ' from component');
    }

}
