import { Component, OnInit } from '@angular/core';
import store from '../../store/store';

@Component({
    selector: 'app-counter',
    template: `
        <p>{{count}}</p>
    `
})
export class CounterComponent implements OnInit {
    public count = 0;

    ngOnInit(): void {
        store.subscribe(
            () => {
                this.count = store.getState().count;
            }
        );
    }
}
