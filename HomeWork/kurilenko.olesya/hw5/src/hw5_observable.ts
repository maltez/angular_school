import { Observable, Subscription } from 'rxjs';
const observable: Observable<number> = new Observable(observer => {
    let counter = 0,
        arr: Array<number> = [];
    const int: number = setInterval(() => {
        console.log(`-----This is ${counter}------`);
        arr.push(counter);
        observer.next(arr[counter++]);
    }, 500);
    //observer.error('SOS!!!!')
    setTimeout(() => {
        observer.complete();
        clearInterval(int);
    }, 6000);
});
const subscriber1: Subscription = observable.subscribe(
    (val: number) => {
        console.log(`Subscriber1: ${val}`);
    },
    (error: string) => {
        console.log(`Error was thrown. Message ${error}`);
    },
    () => {
        console.log('Observer was finalized');
    }
);
const subscriber3: Subscription = observable.subscribe(
    (val: number) => {
        console.log(`Subscriber3: ${val}`);
    },
    (error: string) => {
        console.log(`Error was thrown. Message ${error}`);
    },
    () => {
        console.log('Observer was finalized');
    }
);
let subTimeOut2 = setTimeout(() => {
    observable.subscribe(
        (val: number) => {
            console.log(`Subscriber2: ${val}`);
        });
}, 3000);
let subTimeout1 = setTimeout(() => {
    subscriber1.unsubscribe();
}, 2900);