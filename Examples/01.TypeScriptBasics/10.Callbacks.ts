function cbInp(num: number, cb:(num: number)=> void):void {
    setImmediate(()=> {
        cb(num*3);
    })
}

const cb = (num: number): void => {
    console.log(num);
}

cbInp(15, cb);