const fn = function(str: string): string {
    return `**${str}**`
};

const fnCallback = function(str:string, cb: (param1: string) => void): void {
    cb(`**${str}**`);
}

let res: string = fn('Hello');
