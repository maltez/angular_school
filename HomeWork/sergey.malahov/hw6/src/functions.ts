import {Observable} from 'rxjs/Observable';
import { isNumeric } from 'rxjs/util/isNumeric';

function from<T>(iterable: Array<T> | string): Observable<T | string> {
    return new Observable(observer => {
        for (let item of iterable)
            observer.next(item);
        observer.complete();
    });
}

function range(start: number = 0, count: number = 0): Observable<number> {
    let index = 0;
    return new Observable(observer => {
        do {
            if (index++ >= count) {
                observer.complete();
                break;
            }
            observer.next(start++);
            if (observer.closed) {
                break;
            }
        } while (true);
    });
}

function interval(period: number): Observable<number> {
    let counter = 0;
    if (!isNumeric(period) || period < 0)
        period = 0;

    return new Observable(observer => {
        let intervalHandler = setInterval(() => {
                observer.next(counter);
                counter++;
            },
            period
        );

        //  clean up data if unsubscribe.
        return {
            unsubscribe() {
                console.log('unsubscribed');
                clearInterval(intervalHandler);
                observer.complete();
            }
        };
    });
}

function bufferTime<T>(bufferTimeSpan: number, source: Observable<T>): Observable<Array<T>> {
    return new Observable(observer => {
        let buffer = [];
        source.subscribe(
            val => buffer.push(val),
        );

        let intervalHandler = setInterval(() => {
                observer.next(buffer);
                buffer = [];
            },
            bufferTimeSpan
        );
    });
}

function bufferCount<T>(bufferSize: number, source: Observable<T>): Observable<Array<T>> {
    return new Observable(observer => {
        let buffer = [];

        source.subscribe(
            val => {
                buffer.push(val);
                if (buffer.length === bufferSize){
                    observer.next(buffer);
                    buffer = [];
                }
            }
        );
    });
}

bufferCount(3, interval(300)).subscribe(
    val => console.log(`BufferCount: ${val}`),
    () => console.log('Error'),
    () => console.log('Observable finalized')
);

bufferTime(2000, interval(300)).subscribe(
    val => console.log(`BufferTime: ${val}`),
    () => console.log('Error'),
    () => console.log('Observable finalized')
);


const fromSubscription = from([1, 2, 3, 4]).subscribe(
    val => {
        console.log(`This is value: ${val}`);
    },
    () => console.log('Error'),
    () => console.log('Observable finalized')
);
const from2Subscription = from('Hello world!').subscribe(
    val => {
        console.log(`This is value: ${val}`);
    },
    () => console.log('Error'),
    () => console.log('Observable finalized')
);

const testRangeSubscription = range(12, 0).subscribe(
    val => {
        console.log(`Range value: ${val}`);
    },
    message => console.log(message),
    () => console.log('Observable finalized')
);
const rangeSubscription = range(5, 12).subscribe(
    val => {
        console.log(`Range value: ${val}`);
    },
    () => console.log('Error'),
    () => console.log('Observable finalized')
);

const intervalSubscription = interval(500).subscribe(
    val => {
        console.log(`Interval value: ${val}`);
    },
    () => console.log('Error'),
    () => console.log('Interval observable finalized')
);

setTimeout(() => intervalSubscription.unsubscribe(), 6000);
