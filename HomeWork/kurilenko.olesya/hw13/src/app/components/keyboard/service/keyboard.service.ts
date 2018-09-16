import { EventEmitter } from '@angular/core';

export class KeyBoardService {
    public kbNumberEventEmitter: EventEmitter<string> = new EventEmitter();
    public kbOperationEventEmitter: EventEmitter<string> = new EventEmitter();
    public kbCalculateEventEmitter: EventEmitter<string> = new EventEmitter();
    public kbClearEventEmitter: EventEmitter<string> = new EventEmitter();

    public setNumber(number:string): void {
      this.kbNumberEventEmitter.emit(number);
    }

    public operation (number:string): void {
       this.kbOperationEventEmitter.emit(number);
    }

    public calculate(): void {
      this.kbCalculateEventEmitter.emit();
    }

    public clear():void {
      this.kbClearEventEmitter.emit();
    }
}
