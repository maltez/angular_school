//I dont know what exactly we need to recive, so i made tupple with both most frequent examples

const fibonacci: Function = function(num:number):[Array<number>, Array<number>]{
    const tupple: [Array<number>, Array<number>] = [[0], [0]];
    if (num <= 0){
        return tupple;
    }
    for (let i = 0, k = 1, m = 1; i < num-1 || m+tupple[1][i] <= num; i++){
        if(i < num-1){
            tupple[0].push(k+tupple[0][i]);
            k = tupple[0][i];
        } 
        if(m+tupple[1][i] <= num){
            tupple[1].push(m+tupple[1][i]);
            m = tupple[1][i];
        } 
        
    }
    return tupple;
}