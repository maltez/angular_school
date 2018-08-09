const { Observable: { interval } } = require('rxjs');

const intervalHot$ = interval(300)
    .take(10)
    .publish();

intervalHot$.connect();

intervalHot$.subscribe(
    (val) => {
        console.log(`Hello 1. Value: ${val}`);
    } 
);

setTimeout(() => {
    intervalHot$.subscribe(
        (val) => {
            console.log(`Hello 2. Value: ${val}`);
        } 
    );
}, 2000);