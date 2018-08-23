import {
    Component,
    Output,
    EventEmitter,
    OnInit,
    OnChanges,
    Input,
    SimpleChanges,
    DoCheck,
    OnDestroy } from '@angular/core';

@Component({
    selector: 'app-life',
    template: `
        <h1>{{title}}</h1>
        <input [(ngModel)]=title />
    `
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
    @Input()
    public title = 'Life Cycle Component';

    @Output()
    private init: EventEmitter<boolean> = new EventEmitter();

    public isInit = false;

    ngOnInit(): void {
        console.log('Init!!!');
        setTimeout(() => {
            this.init.emit(true);
        }, 1000);
    }

    ngDoCheck(): void {
        console.log('Checked!!!');
    }

    ngOnChanges(change: SimpleChanges): void {
        console.log(change);
        console.log('Something was changed!');
    }

    ngOnDestroy(): void {
        console.log('Destroooooy!!!!');
    }
}
