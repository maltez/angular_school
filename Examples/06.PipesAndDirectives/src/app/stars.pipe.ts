import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'star'
})
export class StarPipe implements PipeTransform {
    transform(value: string, char: string = '*'): string {
        if (value) {
            return char.repeat(value.length);
        } else {
            return '';
        }
    }
}
