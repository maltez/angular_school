import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'super'
})
export class SuperPipe implements PipeTransform {
    transform(value: string, sign: string = '*') {
        return !value ? '' : sign.repeat(value.length);
    }

}
