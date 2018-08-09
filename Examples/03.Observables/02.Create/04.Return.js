const { Observable } = require('rx');

const publisher = Observable.return('Single value');

publisher.subscribe(
    (val) => {
        console.log(val);
    },
    (err) => {},
    () => {
        console.log('Finilize!');
    }
)