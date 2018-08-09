const { Observable: { interval } } = require('rxjs');

const publisher$ = interval(500);

const subscriber1 = publisher$.subscribe(
    (val) => {
        console.log(`[SUB1] Item : ${val}`);
    }
);

let subscriber2;
setTimeout(() => {
    subscriber2 = publisher$.subscribe(
        (val) => {
            console.log(`[SUB2] Item : ${val}`);
        }
    );
}, 2000);
 
setTimeout(() => {
    subscriber1.unsubscribe();
    subscriber2.unsubscribe();
}, 6000);
