const fn = function(age: number | string): string {
    if(typeof age === 'number') {
        age.toFixed(0);
    } else {
        age = age.toUpperCase();
    }
    return `My age is ${age}`;
}

fn(21.346527);
fn('Thirty years old');

type extendedType = string | boolean | symbol | number;
let a: extendedType = 12;
let b: extendedType = a