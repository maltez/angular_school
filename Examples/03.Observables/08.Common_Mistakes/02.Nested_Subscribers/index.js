const { Observable: {fromEvent, interval} } = Rx;

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');

const start$ = fromEvent(startButton, 'click');
const interval$ = interval(1000);
const stop$ = fromEvent(stopButton, 'click');


const intervalThatStop$ = interval$.takeUntil(stop$);

start$
    .switchMap(intervalThatStop$)
    .subscribe(
        (x) => console.log(x)
    );

