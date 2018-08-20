const { Observable: { interval } } = require('rxjs');

const publisher$ = interval(500);
const publisher2$ = publisher$.takeUntil(interval(3050));

//  publisher$.subscribe((val)=> {
//      console.log(val);
//  });

publisher2$.subscribe((val) => {
    console.log(val);
},
() => {

},
() => {
    console.log('Finalized');
});
