import {Component} from '@angular/core';
import store from "./store/store";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'calculator';
    indicator = '';
    ngOnInit(): void {
        store.subscribe(
            () => {
                this.indicator = store.getState().indicator;
            }
        )
    }
}
