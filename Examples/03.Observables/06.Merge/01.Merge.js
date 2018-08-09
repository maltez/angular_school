const { Observable: { interval, merge } } = require('rxjs');


const interval1$ = interval(100).take(10).map((val) => `Interval 1: ${val}`);
const interval2$ = interval(200).take(6).map((val) => `Interval 2: ${val}`);

const mergedInterval$ = merge(
    interval1$,
    interval2$
);

const subscriber = mergedInterval$.subscribe(
    (val) => console.log(val)
);