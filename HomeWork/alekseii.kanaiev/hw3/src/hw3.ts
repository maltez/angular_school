interface Convert{
    from(val:number):string;
    to(val:string):number;
}

class BinaryConverter implements Convert{
    from(val:number):string{
        if(val <= 0){
            return '0';
        }
        let result = '';
        while(val >= 1){
            (val%2 === 0)? result = '0' : result = '1';
            val = Math.floor(val/2);
        }
        return result.split('').reverse().join('');
    }

    to(val: string):number{
        if(val.match(/[^0-1]/)){
            return 0;
        }
        let result = 0;
        for(let i = val.length, n = 0; i > 0; i--, n++){
            if(val[i-1] != '0') result += Math.pow(2, n);
        }
        return result;
    }
}

class OctalConverter implements Convert{
    private arr = ['0','1','2','3','4','5','6','7'];

    from(val: number): string {
        if(val <= 0){
            return '0';
        }
        let result = '';
        while(val >= 8){
            let mod = val%8;
            if(mod === 0){
                val /= 8;
                if (val >= 8) result += '0';
            }
            else{
                result += this.arr[mod];
                val -= mod;
            }
            result += this.arr[val];
            return result.split('').reverse().join('');
        }
    }
    to(val: string): number {
        if(val.match(/[^0-7]/)){
            return 0;
        }
        let result = 0;
        for (let i = val.length, n = 0; i > 0; i--, n++){
            if(val[i-1] != '0'){
                result += this.arr.indexOf(val[i-1]) * Math.pow(8, n);
            }
        }
        return result;
    }

}

class HexadecimalConverter implements Convert{
    private arr = ['0','1','2','3','4','5','6','7','8','9',
                    'A','B','C','D','E','F'];
                    
    from(val: number): string {
        if (val <= 0){
            return '0';
        }
        
        let result:string = '';
        while(val>=16){
            let mod = val%16;
            if (mod === 0){
                val /= 16;
                if (val>=16)result += '0';
            }
            else{
                result += this.arr[mod];
                val -= mod;
            }
        }
        result += this.arr[val];
        return result.split('').reverse().join('');
    }

    to(val: string): number {
        if (val.match(/[^0-7,A-F,a-f]/)){
            return 0;
        }
        val = val.toUpperCase();
        let result = 0;
        for (let i = val.length, n = 0; i > 0; i--, n++){
            if (val[i-1] != '0'){
                result += this.arr.indexOf(val[i-1]) * Math.pow(16, n);
            }
        }
        return result;
    }
}