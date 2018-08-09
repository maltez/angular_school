const domElement = document.querySelector('#start');

const publisher$ = Rx.Observable.fromEvent(domElement, 'click');

const subscriber = publisher$.subscribe(
    (evnt) => {
        console.log(`Get value ${evnt.x}`);
    },
    (err) => {},
    () => {
        console.log('Finilize!');
    }
);

    

