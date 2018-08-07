function fn (age: number): string;
function fn (age: string): string;
function fn (age: boolean): string;


function fn (age: any): string {
    return `Hey! You are ${age}`;
}

