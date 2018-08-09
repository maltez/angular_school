const { Observable: { interval }, Observable } = require('rxjs');

const interval$ = interval(500);
//const interval$ = Observable.from([1,2,3,4,5,6,7,8,9,0]);
//const publisher$ = interval$.takeUntil(interval(3000));
const publisher$ = interval$.take(5);

const subscriber = publisher$.subscribe(
    (val) => {
        console.log(`Get value ${val}`);
    },
    (err) => {},
    () => {
        console.log('Finilize!');
    }
);
