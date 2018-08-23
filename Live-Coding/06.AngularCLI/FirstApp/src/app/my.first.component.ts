import { Component, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Clicked } from './app.service';
const { floor, random } = Math;

@Component({
    selector: 'app',
    template: `
        <h1 class='h1cls'>Hello Angular</h1>
        <h2>{{description}}</h2>
        <input type=number disabled [value]=myNumber />
        <button (click)='onClick($event)'>Stop</button>
        <p>First Component value: {{coordinate}}</p>
        <input [(ngModel)]='coordinate'/>
        <app-second [name]=coordinate (clicked)='onSuperClick($event)'></app-second>
        <p>{{clicked}}</p>
        <hr />
        <app-life *ngIf=!clicked (init)='inited($event)' [title]=coordinate></app-life>
        <p>{{isInited}}</p>
    `,
    styles: [`
        h1 {
            color: blue
        }
    `]
})
export class MyFirstComponent implements OnInit, OnDestroy {
    public clicked = false;
    public description = 'This is my first';
    public myNumber = 0;
    private interval;
    private coordinate = 100;
    private listener: EventEmitter<boolean>;
    public isInited = false;

    constructor(private service: Clicked) {
    }

    ngOnInit(): void {
        this.listener = this.service.observable.subscribe(
            (val) => {
                this.clicked = val;
            }
        );

        this.interval = setInterval(() => {
            this.myNumber = floor(random() * 100);
        }, 500);
    }

    public onClick($event): void {
        this.coordinate = $event.x;
        clearInterval(this.interval);
    }

    public onSuperClick($event): void {
        this.clicked = $event;
    }

    inited($event): void {
        this.isInited = $event;
    }

    ngOnDestroy(): void {
        clearInterval(this.interval);
        this.listener.unsubscribe();
    }

}
