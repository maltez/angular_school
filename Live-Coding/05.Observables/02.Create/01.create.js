const {Observable: { create }} = require('rxjs');
const { random, floor } = Math;

const observable = create((observer) => {
    let counter = 0
    let arr = [];
    const int = setInterval(() => {
        console.log(`-----This is ${counter}------`);
        arr.push(counter);
        observer.next(arr[counter ++]);
    }, 500);

    //observer.error('SOS!!!!')

    setTimeout(() => {
        observer.complete();
        clearInterval(int);
    }, 6000);
});

const subscriber3 = observable.subscribe(
    (val) => {
        console.log(`Subscriber1:${val}`);
    },
    (error) => {
        console.log(`Error was thrown. Message ${error}`);
    },
    () => {
        console.log('Observer war finalized');
    }
);

const subscriber = observable.subscribe(
    (val) => {
        console.log(`Subscriber3:${val}`);
    },
    (error) => {
        console.log(`Error was thrown. Message ${error}`);
    },
    () => {
        console.log('Observer war finalized');
    }
);



setTimeout(() => {
    observable.subscribe(
        (val) => {
            console.log(`Subscriber2: ${val}`);
        });
}, 3000);

setTimeout(() => {
    subscriber.unsubscribe();
}, 2900);
