const { Observable: { defer, interval }, Observable } = require('rxjs');

const intervalOrArray = 'string'

const publisher$ = defer(() => intervalOrArray === 'string' ? Observable.from([1,2,3,4,5,6,7]) : interval(500));

publisher$.subscribe(
    (val) => {
        console.log(`Value: ${val}`);
    }
);
