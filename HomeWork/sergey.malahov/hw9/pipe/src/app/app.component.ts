import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<h1>{{title}}</h1>

    <input type="text" [(ngModel)]="morseText"/>
    <p>Morse message: {{morseText | morse_decode}}</p>

    <input type="text" [(ngModel)]="plainText"/>
    <p>Plain message: {{plainText | morse_encode}}</p>
    `,
})

export class AppComponent {
    title = 'pipe';
    public plainText: string = '';
    public morseText: string = '';
}
