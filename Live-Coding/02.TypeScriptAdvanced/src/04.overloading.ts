function makeEverythingOk(param: string, addParam: number): string;
function makeEverythingOk(param: number): string;
function makeEverythingOk(param: boolean): string;


function makeEverythingOk(param: string | number | boolean, addParam: number = 0): string {
    return `Everything Ok - ${param}`;
}

makeEverythingOk(12);