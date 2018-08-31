import { EventEmitter } from '@angular/core';

export class ButtonClick {
    public observable: EventEmitter<object> = new EventEmitter();

    public sendClick(click: boolean, name: string): void {
        this.observable.emit({click, name});
    }
}