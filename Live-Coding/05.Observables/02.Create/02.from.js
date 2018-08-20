const { Observable } = require('rxjs');

const sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const arrObservable = Observable.from(sequence);

const subscriber = arrObservable.subscribe(
    (val) => {
        console.log(`This is value: ${val}`);
    },
    () => {},
    () => {
        console.log('Observable finalized');
    });