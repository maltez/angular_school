const { Observable: { interval }, Observable } = require('rxjs');


const publisher$ = interval(300).take(10).filter(
    (val) => val % 2 === 0
);

const subscriber = publisher$.subscribe(
    (val) => {
        console.log(`Get value ${val}`);
    },
    (err) => {},
    () => {
        console.log('Finilize!');
    }
);