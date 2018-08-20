const { Observable: { fromPromise } } = require('rxjs');

const promise = new Promise((res, rej) => {
    setTimeout(() => {
         res('Hello');
        //rej('Hello');
    }, 500);
});

const publisher$ = fromPromise(promise.then((data) => {
    return data
}));

const subscriber = publisher$.subscribe(
    (val) => {
        console.log(val);
    }, 
    (err) => {
        console.log(`Error appears: ${err}`);
    }
);
