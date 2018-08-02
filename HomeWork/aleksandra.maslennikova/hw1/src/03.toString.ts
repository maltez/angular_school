const boolToString = function (param: boolean): string {
   if( typeof param === 'boolean') {
        return param ? '1': '0';
   }
   return 'enter boolean param'   
}

let toStringResult:string = boolToString(true);
console.log(toStringResult);

