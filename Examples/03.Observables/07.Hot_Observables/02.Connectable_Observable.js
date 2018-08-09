const { Observable: { interval } } = require('rxjs');

const intervalHot$ = interval(300)
    .take(10)
    .publish()
    .refCount();

setTimeout(() => {
    intervalHot$.subscribe(
        (val) => {
            console.log(`Hello 1. Value: ${val}`);
        } 
    );
}, 1000);

setTimeout(() => {
    intervalHot$.subscribe(
        (val) => {
            console.log(`Hello 2. Value: ${val}`);
        } 
    );
}, 2000);