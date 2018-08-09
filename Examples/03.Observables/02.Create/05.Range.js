const { Observable: { range } } = require('rxjs');

const publisher = range( 10, 100 );

const subscriber1 = publisher.subscribe(
    (val) => {
        console.log(`[SUB1]: Get value: ${val}`);
    },
    (err) => console.log(`Error appears`),
    () => {
        console.log(`[SUB1] Observable completed!`);
    }
);
