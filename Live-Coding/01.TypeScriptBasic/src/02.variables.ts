let int:number = 123.45;
let bool: boolean = true;

let date = new Date(); 

const str:string = 'long string';
const arr:Array<number> = [1];
arr.push(2);

let anyType: any = 'zjhczxjhc';
anyType = int;
anyType = bool;
int = anyType;