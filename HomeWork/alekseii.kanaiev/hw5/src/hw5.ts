import { Observable, of, Subscription } from 'rxjs';

const observable: Observable<number> = new Observable(observer => {
    let counter = 0;
    const int = setInterval(() => {
        observer.next(counter++)
    }, 500);
    setTimeout(() => {
        observer.complete();
        clearInterval(int)
    }, 6000)
});

const sub1: Subscription = observable.subscribe(
    (val):void => {
        console.log(`Value of sub1: ${val}`);
    },
    error => console.log(`Error ${error} in sub1 was happened`),
    () => console.log('Completed!')
);

setTimeout(() => {
    const sub2: Subscription = observable.subscribe(
        val => {
            console.log(`Value of sub2: ${val}`);
            
        },
        error => console.log(`Error ${error} sub2 was happened`),
        () => console.log(`Completed!`)
    );
}, 2000);
