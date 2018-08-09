const { Observable: { interval } } = require('rxjs');

const interval$ = interval(200).take(21);

const requestPerTime$ = interval$.bufferCount(5);

const subscriber = requestPerTime$.subscribe(
    (val) => {
        console.log(`I had ${val} requests`);
    }
);