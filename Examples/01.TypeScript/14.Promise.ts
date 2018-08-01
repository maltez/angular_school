const delay = function(sec: number, msg: string): Promise<string> {
    return new Promise((
        res: (val: string) => void,
        rej: (err: Error) => void): void => {
            setTimeout(():void=> {
                res(msg);
            }, sec* 1000);
    });
}

delay(1, 'hello')
.then((data: string):string => {
  return data;
})
.then((data:string) => {

})
.catch();