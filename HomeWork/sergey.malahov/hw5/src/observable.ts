import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import {takeUntil, scan} from "rxjs/operators";
import {interval, Subscription} from "rxjs";

const observable$ = Observable.timer(3000, 500)
    .pipe(scan((count: number) => count + 1, 0), takeUntil(interval(6000)));

const subscriber: Subscription = observable$.subscribe(
    (val: number) => {
        console.log(`Subscriber: ${val}`);
    },
    (error: string) => {
        console.log(`Error was thrown. Message ${error}`);
    },
    () => {
        console.log('Observer was finalized');
    });