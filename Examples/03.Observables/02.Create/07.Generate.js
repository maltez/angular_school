const { Observable: { generate } } = require('rxjs');

const publisher$ = generate(
    4,
    (x) => x < 11,
    (x) => x + 2,
    (x) => `Result is ${x}`
);

const subscriber1 = publisher$.subscribe(
    (val) => {
        console.log(`[SUB1] Item : ${val}`);
    }
);
