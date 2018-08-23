import { Observable } from 'rxjs';

// functions for subscribe()
const observer = {
    next(value) {
        console.log(value);
    },
    error(err) {
        console.log(err);
    },
    complete() {
        console.log('complete');
    }
};

// overloading for function from
function fromObs(values: string);
function fromObs<T>(values: Array<T>);
function fromObs(values: Map<string, string>);
function fromObs<T>(values: Set<T>);

// implementation of from
function fromObs(values: any): Observable<any> {
    return new Observable(observer => {
        for (let i of values) {
            observer.next(i);
        }

        observer.complete();

        return ({
            unsubscribe() {
                console.log('unsubscribed');
            }
        });
    });
}

// implementation of range
function range(start: number, count: number, step: number = 1): Observable<number> {
    return new Observable(observer => {
        for (let i = 0; i < count; i++) {
            observer.next(start);
            start += step
        }

        observer.complete();

        return ({
            unsubscribe() {
                console.log('unsubscribed');
            }
        });
    });
}

// implementation of interval
function interval(sleep: number): Observable<number> {
    return new Observable(observer => {
        let count = 0;
        setInterval(() => {
            observer.next(count);
            count++;
        }, sleep);
    });
}

// implementation of bufferCount
function bufferCount<T>(lim: number, source: Observable<T>): Observable<T[]> {
    return new Observable(observer => {
        let buffer: T[] = [],
            count = 0;

        return source.subscribe(res => {
            if (count === lim) {
                observer.next(buffer);
                buffer = [];
                count = 0;
            }
            buffer.push(res);
            count++;
        });
    });
}

// implementation of bufferTime
function bufferTime<T>(time: number, source: Observable<T>): Observable<T[]> {
    return new Observable(observer => {
        let buffer: T[] = [];

        setInterval(() => {
            observer.next(buffer);
            buffer = [];
        }, time);

        return source.subscribe(res => {
            buffer.push(res);
        });
    });
}

const map: Map<string, string> = new Map<string, string>();
map.set('1', '2');
map.set('2', '1');
const set: Set<string> = new Set<string>();
set.add('avc');
set.add('avc2323');
fromObs<string>(set).subscribe(observer);
fromObs(map).subscribe(observer);
fromObs<number>([1,2,3,4,5]).subscribe(observer);
fromObs('acfdfds').subscribe(observer);

range(0, 3).subscribe(observer);
range(0, 10, 2).subscribe(observer);

interval(500).subscribe(observer);

const source = interval(500);

const bufC = bufferCount<number>(3, source);
bufC.subscribe(observer);

const bufT = bufferTime<number>(2000, source);
bufT.subscribe(observer);