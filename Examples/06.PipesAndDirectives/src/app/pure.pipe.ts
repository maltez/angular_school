import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pure'
})
export class PurePipe implements PipeTransform {
    transform(value: string): string {
        console.log('Pure pipe invoke');
        if ( value ) {
            return `---${value}---`;
        } else {
            return value;
        }
    }

}

@Pipe({
    name: 'impure',
    pure: false
})
export class ImpurePipe implements PipeTransform {
    transform(value: string): string {
        console.log('ImPure pipe invoke');
        if ( value ) {
            return `---${value}---`;
        } else {
            return value;
        }
    }

}
