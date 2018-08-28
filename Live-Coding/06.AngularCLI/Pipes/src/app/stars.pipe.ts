import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'stars'
})
export class StarPipe implements PipeTransform {
    transform(value: string, sym: string = '*'): string {
        console.log('Pure pipe');
        if (!value) {
            return '';
        }

        return sym.repeat(value.length);
    }
}

@Pipe({
    name: 'stars2',
    pure : false
})
export class Star2Pipe implements PipeTransform {
    // private _datePipe: DatePipe;
    // constructor() {
    //     this._datePipe = new DatePipe('en-US');
    // }

    transform(value: string, sym: string = '*'): string {
        console.log('Impure pipe');
        // this._datePipe.transform(value);
        if (!value) {
            return '';
        }

        return sym.repeat(value.length);
    }
}
