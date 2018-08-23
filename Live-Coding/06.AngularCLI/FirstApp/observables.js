const { interval } = require('rxjs');
const { take } = require('rxjs/operators')

const tt = interval(200).pipe(take(10));

tt.subscribe(
    (val) => {
        console.log(val);
    }
);
