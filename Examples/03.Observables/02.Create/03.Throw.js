const { Observable } = require('rxjs');

const publisher = Observable.throw('Unexpected error');

publisher.subscribe(
    () => {},
    (err) => {
        console.log(`Error appears: ${err}`);
    },
    () => {
        console.log('Finalized');
    }    
);