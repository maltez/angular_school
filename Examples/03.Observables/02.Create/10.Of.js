const { Observable } = require('rxjs');

const publisher = Observable.of(1,2,3,4,5,6,7,8,9,9,10);

const subscriber = publisher.subscribe(
    (val) => {
        console.log(`Value is: ${val}`);
    },
    () => {},
    () => {
        console.log('Finalized');
    }
);
