function myClassDecorator<T extends Function>(constructor: T):T{
    console.log('meClassDecorator!');
    return null;
}

function myFieldDecorator(target: Object, propertyKey:string){
    console.log('myFieldDecorator');
    let _val = this[propertyKey];
    let getter = function(){
        return _val;
    }
    let setter = function(newVal){
        console.log(`myFieldDecorator works with name ${newVal}!`);
        _val = newVal;
    }
    if(delete this[propertyKey]){
        Object.defineProperty(target, propertyKey, {get:getter, set:setter});
    }
}

function myMethodDecorator(target: Object, method:string, descriptor: PropertyDescriptor){
    console.log('myMethodDecorator');
    descriptor.value = function(){
        console.log(`Name: ${this.name}`);
        console.log('myMethodDecorator works!');
    }
}



function logDecorator(...args: any[]):any{
    args = args.filter(n => n != undefined);

    switch(args.length){
        case 1: return myClassDecorator.apply(this, args);
        case 2: return myFieldDecorator.apply(this, args);
        case 3: return myMethodDecorator.apply(this, args);

        default: console.error('Decorators are not valid!');
    }
}

@logDecorator
class MyClass{
    @logDecorator
    name: string;

    constructor(name:string){
        this.name = name;
    }

    @logDecorator
    print():void{
        console.log(this.name);
    }
}