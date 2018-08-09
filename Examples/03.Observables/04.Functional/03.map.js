const { Observable: { interval }, Observable } = require('rxjs');

const publisher = interval(300).map(
    (val) => `Input value ${val*100}`
);

const subscriber = publisher.subscribe(
    (val) => {
        console.log(`Get value ${val}`);
    },
    (err) => {},
    () => {
        console.log('Finilize!');
    }
);