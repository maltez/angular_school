function toString(val: string): string;
function toString(val: boolean): string;
function toString(val: number): string;

function toString(val: string | boolean | number):string {
    if(typeof val === 'string') {
        return val;
    } else if (typeof val === 'boolean') {
        return val ? '1' : '0';
    } else {
        return val.toString();
    }
}