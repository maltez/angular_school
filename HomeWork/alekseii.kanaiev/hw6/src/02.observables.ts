import { Observable, Subscription, interval } from 'rxjs';
import { buffer, bufferCount, take, bufferTime} from 'rxjs/operators';

const obs = interval(500).pipe(take(10));

const  bufferByCount = function<T>(count: number, source: Observable<T>, shift :number = null): Observable<T[]>{
    return new Observable(observer =>{
        let arr: Array<T> = [];
        source.subscribe(
            (val:T)=>{
                if(arr.length === count){
                    observer.next(arr);
                    if(shift && shift < count){
                        for (let i = 0; i < shift; i++){
                            arr.shift();
                        }
                    }else{
                        arr = [];
                    }
                }
                arr.push(val);
            },
            ()=>{},
            ()=>{
                observer.next(arr);
                observer.complete();
            }
        )
    })
}

let count = 3;
let shift = 0;

const subC: Subscription = bufferByCount(count, obs, shift).subscribe(
    <T>(val:Array<T>):void=>console.log(`bufferByCount: ${val}`),
    ()=>{},
    ()=>console.log('Completed subC!')
)

const bufferByTime = function<T>(time:number, source :Observable<T>): Observable<T[]> {
    return new Observable(observer => {
        let arr :Array<T> = [];
        const int = setInterval(()=>{
            observer.next(arr);
            arr = [];
        }, time)
        source.subscribe(
            (val:T)=>{
                arr.push(val);
            },
            ()=>{},
            ()=>{
                observer.next(arr);
                clearInterval(int);
                observer.complete();
            }
        )
    }) 
} 

let time = 2000;

const subT: Subscription = bufferByTime(time, obs).subscribe(
    <T>(val:Array<T>):void=>console.log(`bufferTime: ${val}`),
    ()=>{},
    ()=>console.log('Completed subT!')
)