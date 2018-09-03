import { Component, OnInit } from '@angular/core';
import store from '../../store/store';

@Component({
    selector: 'app-counter',
    template: `
        <h1>{{count}}</h1>
    `
})
export class CounterComponent implements OnInit {
    ngOnInit(): void {
        store.subscribe(() => {
            const state: any = store.getState();
            this.count = state.counter;
        });
    }

    public count: any = 0;
}
