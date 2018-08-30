import { Pipe, PipeTransform } from '@angular/core';

const morse = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
};

@Pipe({
    name: 'toMorse',
})
export class ToMorse implements PipeTransform {
    transform(value: string): string {
        let result = '';
        value.split('').forEach((item): void => {
            if (item.match(/[A-Z,a-z,0-9]/)) {
                result += morse[item.toUpperCase()] + ' ';
            } else {
                result += ' / ';
            }
        });
        return result;
    }
}

@Pipe({
    name: 'fromMorse'
})
export class FromMorse implements PipeTransform {
    transform(value: string): any {
        const keys = Object.keys(morse);
        let result = '';
        value.split(' ').forEach((item): void => {
            for (let i = 0; i < keys.length; i++) {
                if (morse[keys[i]] === item) { result += keys[i]; }
            }
        });
        return result;
    }
}
