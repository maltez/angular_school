import { EventEmitter } from '@angular/core';

export class Clicked {
    public observable: EventEmitter<boolean> = new EventEmitter();

    public sendClick(click: boolean): void {
        this.observable.emit(click);
    }
}
