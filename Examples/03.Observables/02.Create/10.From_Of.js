const { Observable } = require('rxjs');

const publisher$ = Observable.of(1,2,3,4,5,6,7,8);

const subscriber = publisher$.subscribe(
    (val) => {
        console.log(val);
    }, 
    (err) => {
        console.log(`Error appears: ${err}`);
    },
    () => {
        console.log('Finalize!');
    }
);
