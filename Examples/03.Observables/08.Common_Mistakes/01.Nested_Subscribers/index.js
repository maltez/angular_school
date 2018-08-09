const { Observable: {fromEvent, interval} } = Rx;

const startButton = document.querySelector('#start');
const start$ = fromEvent(startButton, 'click');
const interval$ = interval(1000);

const startInterval$ = start$.switchMap(interval$);

startInterval$.subscribe(
    (val) => console.log(val)
);

/*fromEvent(startButton, 'click')
    .subscribe((event) => {
        interval(1000).subscribe((x) => {
            console.log(x);
        });
});*/
