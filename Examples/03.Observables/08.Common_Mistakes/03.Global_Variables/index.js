const { Observable: {fromEvent, interval} } = Rx;

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');

const start$ = fromEvent(startButton, 'click');
const interval$ = interval(1000);
const stop$ = fromEvent(stopButton, 'click');

const intervalThatStops$ = interval$
    .takeUntil(stop$);

//let count = 0;

start$
    .switchMap(() => intervalThatStops$)
    .scan((acc) => {
        return acc += 1;
    }, 0)
    .subscribe((x)=> console.log(x));


    

