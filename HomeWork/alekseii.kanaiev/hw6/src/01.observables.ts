import { Observable, Subscription, interval } from 'rxjs';
const arr = [1,2,3,4,5,6,7,8,9,0];
// const arr = 'sad';

const results = {
    next<T>(val:T){
        console.log(val);
    },
    error(err){
        console.log(err);
    },
    complete(){
        console.log("Complete!");
    }

}

const fromObservable = function<T>(array:string|Array<T>) : Observable<string|T>{
    return  new Observable(observer => {
        for (let i = 0; i < array.length; i++){
            observer.next(array[i])
        };
        observer.complete();
    })
}; 

const sub1: Subscription = fromObservable(arr).subscribe(results);

const rangeObservable = function(a: number, b: number): Observable<number>{
    return new Observable(observer =>{
        while(a<b){
            observer.next(a);
            a++;
        };
        observer.complete()
    })
};
let a = 0;
let b = 10;
const sub2: Subscription = rangeObservable(a,b).subscribe(results);

const intervalObservable = function(intevalTime:number, endTime :number = null): Observable<number> {
    return new Observable(observer => {
        let counter = 0;
        const int = setInterval(() => {
            observer.next(counter++);
        }, intevalTime);
        if(endTime){
            setTimeout(() => {
                observer.complete();
                clearInterval(int)
            }, endTime)
        }
    });
}
let intevalTime = 500;
let endTime = 5500; 
const sub3: Subscription = intervalObservable(intevalTime, endTime).subscribe(results);