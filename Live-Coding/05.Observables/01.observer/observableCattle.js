const Cattle = require('./cattle');

const logger = function() {
    console.log('Cattle is boiling');
}

const notifier = function() {
    console.log('Be attentive! Cattle has temperature 100C');
}

const message = function() {
    console.log('Ping!');
}

class ObservableCattle extends Cattle {
    constructor(){
        super();
        this.__listers = [];
    }

    addListener(listener) {
        if(typeof listener === 'function') {
            this.__listers.push(listener);
        }

        return;
    }

    removeListener(listener) {
        this.__listers = this.__listers.filter(fn => {
            return fn !== listener;
        });
    }

    __notify() {
        this.__listers.forEach(fn => {
            fn();
        });
    }

    boil() {
        this.__notify();
        super.boil();
    }
}

const cattle = new ObservableCattle();
cattle.addListener(logger);
cattle.addListener(notifier);
cattle.addListener(message);

setTimeout(() => {
    cattle.boil();
}, 1000);

setTimeout(() => {
    cattle.removeListener(message);
}, 500);

// for (let i = 0; i < 5; i++) {
//     if(i === 2) {
//         cattle.removeListener(message);
//     }
    
//     cattle.boil();
// }
