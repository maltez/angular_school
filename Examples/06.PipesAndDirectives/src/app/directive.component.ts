import { Component } from '@angular/core';
import { User } from './models/User';

@Component({
    selector: 'app-directive',
    template: `
        <h1 *ngIf="isTitleShow">Directive</h1>
        <ng-template [ngIf]="isTitleShow">
            <h2>Template</h2>
        </ng-template>
        <input type="checkbox" [(ngModel)]="isTitleShow" />
        <div [ngSwitch]="name">
            <div *ngSwitchCase="'Nick'">
                <p>Hello Nick</p>
            </div>
            <div *ngSwitchCase="'Vladimir'">
                <p>Hello Vladimir</p>
            </div>
            <div *ngSwitchCase="'Lexa'">
                <p>Hello Lexa</p>
            </div>
            <div *ngSwitchDefault>
                <p>Hello Stranger</p>
                <input type='text' [(ngModel)]='color' />
            </div>
        </div>
        <hr />
        <ul>
            <div Colored [color]='color' *ngFor="let user of users;
                         let i = index;
                         let isEven = even;
                         let isOdd = odd;"
                [ngClass]="{red: isEven, green: isOdd}">
                {{i + 1}}.  Name: {{user.name}}. Age: {{user.age}}
            </div>
        </ul>
    `,
    styles: [`
        h1 {
            color: magenta;
        }

        h2 {
            color: green;
        }

        .red {
            color: orange;
        }

        .green {
            color: green;
        }
    `]
})
export class DirectiveFirstTryComponent {
    public isTitleShow: boolean = false;
    public color: string = 'magenta';
    public name: string = 'Nick1';
    public users: Array<User> = [
            {name: 'Nick', age: 37},
            {name: 'Vladimir', age: 21},
            {name: 'Lexa', age: 30}
        ];
}
