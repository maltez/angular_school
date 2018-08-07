const factorial:Function = (n:number = 3):number => (n < 2) ? 1 : factorial(n-1) * n;

const fibonacci:Function = (n:number = 2):number => n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);

const booleanToString:Function = (flag:boolean = true):string => (+flag) + '';