const { Observable: { interval } } = require('rxjs');

const interval$ = interval(200).take(20);

const requestPerTime$ = interval$.buffer(interval(1000));

const subscriber = requestPerTime$.subscribe(
    (val) => {
        console.log(`I had ${val} requests`);
    }
);