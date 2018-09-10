import {Pipe, PipeTransform} from "@angular/core";
import  MORSE_ALPHABET  from './morse.alphabet';

@Pipe({
    name: 'morse_encode',
})
export class MorseEncodePipe implements PipeTransform {

    transform(str: string): string {
        let result = '';
        for (let ch of str) {
            result += Object.keys(MORSE_ALPHABET).find(key => MORSE_ALPHABET[key] === ch);
        }

        return result;
    }
}