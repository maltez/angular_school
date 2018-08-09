const { Observable: { interval } } = require('rx');

const interval$ = interval(200).take(21);

const requestPerTime$ = interval$.bufferWithTimeOrCount(1000, 3);

const subscriber = requestPerTime$.subscribe(
    (val) => {
        console.log(`I had ${val} requests`);
    }
);