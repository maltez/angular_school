import { Observable, interval } from 'rxjs';
import { TimeService } from './time.service';

export class FakeTimeService extends TimeService {
    public time: Observable<number> = interval(1000);
}
