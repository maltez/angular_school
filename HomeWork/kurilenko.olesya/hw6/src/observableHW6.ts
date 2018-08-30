import { Observable, Subscription } from 'rxjs';

class MyObservable {
    static from<T>(iterableObj: Array<T> | string): Observable<T | string> {
        return new Observable(observer => {
            for (let i = 0; i < iterableObj.length; i++) {
                observer.next(iterableObj[i]);
            }
            observer.complete();
        });
    }

    static range(start: number, last: number): Observable<number> {
        return new Observable(observer => {
            if (last < start)
                observer.error(`Throw an error: Last number less start number (${start} > ${last}) `);
            do {
                observer.next(start);
                start++;
            } while (start <= last);
            observer.complete();
        });
    }

    static interval(interval: number): Observable<string> {
        return new Observable(observer => {
            if (interval <= 1) observer.error(`Throw an error: Intarval can't be < 1`);
            observer.next(`start ${interval}`);
            setInterval(() => {
                observer.next(`done`);
                observer.complete();
            }, interval);
        });
    }

    static buffer(count: number, step: number, interval: number): Observable<Array<number>> {
        return new Observable(observer => {
            if (interval <= 1 || count <= 0 || step < 1 || step > count) observer.error(`Throw an error: Intarval can't be < 1 and count >0`);

            let stepCount = 0;
            for (stepCount; stepCount <= count;) {
                if ((stepCount + step) >= count)
                    step = count - stepCount;
                this.interval(interval).subscribe(() => {
                    let bufferArr: Array<number> = [];

                    for (let stepCurr = 0; stepCurr < step; stepCurr++) {
                        bufferArr.push(stepCount++);
                    }

                    observer.next(bufferArr);

                    if (stepCount === count) {
                        observer.complete();
                    }
                });
            }
        });
    }

}

let subFrom = MyObservable.from<number>([1, 2, 3]).subscribe(el => { console.log(el) });
let subFrom1 = MyObservable.from<number>('temp').subscribe(el => { console.log(el) });

let subFrom2 = MyObservable.range(1, 5)
    .subscribe(
        (val) => console.log(`range: ${val}`),
        (err) => console.log(`Error: ${err}`),
        () => console.log('Complete')
    );

let subFrom3 = MyObservable.range(6, 5)
    .subscribe(
        (val) => console.log(`range: ${val}`),
        (err) => console.log(`Error: ${err}`),
        () => console.log('Complete')
    );

let subFrom4 = MyObservable.interval(1000)
    .subscribe(
        (val) => console.log(`interval: ${val}`),
        (err) => console.log(`Error: ${err}`),
        () => console.log('Complete')
    );
let subFrom5 = MyObservable.buffer(10, 3, 2000)
    .subscribe(
        (val) => console.log(`buffer: ${val}`),
        (err) => console.log(`Error: ${err}`),
        () => console.log('Complete')
    );

