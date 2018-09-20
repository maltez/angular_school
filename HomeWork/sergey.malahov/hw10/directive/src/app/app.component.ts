import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>{{title}}</h1>
        <div Tabled [data]="dataSet"></div>
    `,
})
export class AppComponent {
    title = 'Tabled directive';
    public dataSet: Array<object> = [];

    ngOnInit(): void {
        this.dataSet.push(
            {name: 'Nick', age: 38},
            {name: 'Alex', age: 37},
            {name: 'Thelma', age: 26},
            {name: 'Louse', age: 12},
            {name: 'Stranger', age: 22},
        );
    }
}
