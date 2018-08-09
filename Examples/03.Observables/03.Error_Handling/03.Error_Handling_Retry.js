const { Observable: { interval } } = require('rxjs');

const publisher$ = interval(200)
    .map((val) => {
        if(val === 3){
            throw 'Unexpected Error';
        }

        return val;
    })
    //.retry(4)
    .retryWhen((err) => {
        return err.scan((acc, error) => {
            acc += 1;
            if(acc > 3){
                throw 'Maximum attempt count!'
            }

            return acc;
        }, 0)
    })
    .delay(1000);

const subscriber = publisher$.subscribe(
    (val) => {
        console.log(`I had: ${val}`);
    },
    (err) => {
        console.log(`Handle error ${err}`);
    },
    () => console.log('Finalize!')
);


