import { Observable, interval } from 'rxjs';
const { random, floor } = Math;

export class TimeService {
    public time: Observable<number> = new Observable((observer) => {
        setInterval(() => {
            observer.next(floor(random() * 100));
        }, 1000);
    });
}
