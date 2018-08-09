const { Observable: { interval }, Observable } = require('rxjs');

/*const publisher = interval(300)
    .take(5)
    .reduce((red, val) => {
        return red += val;
    }, 0);*/

const publisher = interval(300)
    .take(5)
    .scan((red, val) => {
        return red += val;
    }, 100);

const subscriber = publisher.subscribe(
    (val) => {
        console.log(`Get value ${val}`);
    },
    (err) => {},
    () => {
        console.log('Finilize!');
    }
);