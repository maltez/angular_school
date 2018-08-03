const arr1: string[] = [];
const arr2: number[] = [];

function fn1 <T extends string | number>(arg:T, arr: T[]):void{
    arr.push(arg);
}

fn1<string>('str', arr1);
fn1<number>(1, arr2);


