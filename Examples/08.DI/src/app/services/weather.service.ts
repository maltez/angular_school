import { Observable, interval } from 'rxjs';
import { Injectable } from '@angular/core';
const { random } = Math;

@Injectable()
export class WeatherService {
    private serviceUrl: string;
    public id = Math.floor(random() * 100500);
    private observable: Observable<number>;

    constructor() {
        this.observable = interval(500);
        // this.observable = Observable.create((observable) => {
        //     setInterval(() => {
        //         observable.next(Math.floor(random() * 45));
        //     }, 1000);
        // });
    }

    get Temperature(): Observable<number> {
        return this.observable;
    }
}

