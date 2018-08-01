const hey = function(name: string, age: number, gender?:boolean): string {
    return `Hey ${gender ? 'Mrs': 'Mr'} ${name}. You are ${age} years old.`
};

let greeting:string = hey('Jack', 12);
console.log(greeting);

