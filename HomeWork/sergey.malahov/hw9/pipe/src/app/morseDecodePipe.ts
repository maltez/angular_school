import {Pipe, PipeTransform} from "@angular/core";
import MORSE_ALPHABET from './morse.alphabet';

@Pipe({
    name: 'morse_decode',
})
export class MorseDecodePipe implements PipeTransform {

    transform(str: string): string {

        return str
            .split('   ')
            .map(
                a => a
                    .split(' ')
                    .map(
                        b => MORSE_ALPHABET[b]
                    ).join('')
            ).join(' ');
    }
}