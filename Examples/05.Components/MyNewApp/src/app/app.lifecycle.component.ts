import { Component, Input, OnInit, OnChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'life',
    template: `
        <h2>{{caption}}</h2>
        <input type='text' [(ngModel)]='hero' />
        <h2>{{hero}}</h2>
    `
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
    //@Input()
    hero = 'Superhero';
    private caption = 'None';
    ngOnInit(): void {
        console.log('Init!!!!!!!');
    }

    ngOnChanges(): void {
        console.log('Changes!!!!!!!');
    }

    ngDoCheck(): void {
        console.log('Checked!!!!!!!');
    }

    ngOnDestroy(): void {
        console.log('Destroyd!!!!');
    }
}
