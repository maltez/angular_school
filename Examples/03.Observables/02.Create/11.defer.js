const { Observable: { defer, interval }, Observable } = require('rxjs');

const intervalOrArray = ''

const publisher$ = defer(() => intervalOrArray === 'array' ? Observable.from([1,2,3,4,5,6,7]) : interval(500));

publisher$.subscribe(
    (val) => {
        console.log(`Value: ${val}`);
    }
);
