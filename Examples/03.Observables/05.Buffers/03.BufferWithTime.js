const { Observable: { interval } } = require('rxjs');

const interval$ = interval(200).take(21);

const requestPerTime$ = interval$.bufferTime(1000);

const subscriber = requestPerTime$.subscribe(
    (val) => {
        console.log(`I had ${val} requests`);
    }
);