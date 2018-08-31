import { Component, OnInit } from '@angular/core';
import { Button } from '../../interfaces/button';
import { EventEmitter } from '@angular/core';


@Component({
    selector: 'app-button',
    template: `<button>{{name}}</button>`,
})
export class Digit implements Button, OnInit {
    ngOnInit(): void {
        
    }
    name: string;
    onClick: EventEmitter<object>;
}
