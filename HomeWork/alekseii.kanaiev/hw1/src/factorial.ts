const factorial: Function = function(num:number):number{
    return (num <= 1)? 1 : num * this.factorial(num-1)
}