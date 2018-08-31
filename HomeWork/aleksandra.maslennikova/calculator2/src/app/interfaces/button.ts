import { EventEmitter } from '@angular/core';

export interface Button {
    name: string;
    onClick: EventEmitter<object>
}