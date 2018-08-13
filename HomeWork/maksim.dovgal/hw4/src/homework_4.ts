//logger decorator
function Logger(propsForConstr: any){
    return function (targetClass: any) {
        const target = new targetClass();
        const properties = getAllProperties(target, target);

        const NewClass: any = class {
            constructor() {
                console.log(`Called constructor of the instance ${this.constructor.name}`);
            }
        };

        // function logger
        function log(type: string, name: string, operation: string) {
            console.log(`${type} '${name}' have been ${operation}`);
        }

        // function, which take all properties from the class
        function getAllProperties(obj: any, copyObj: any) {
            let props: string[] = [];
            let methods: any = {};

            do {
                const l = Object.getOwnPropertyNames(obj)
                    .concat(Object.getOwnPropertySymbols(obj).map(s => s.toString()))
                    .sort()
                    .filter((p, i, arr) =>
                        p !== 'constructor' &&
                        (i == 0 || p !== arr[i - 1]) &&
                        props.indexOf(p) === -1
                    );
                props = props.concat(l);

            }
            while (
                (obj = Object.getPrototypeOf(obj)) &&
                Object.getPrototypeOf(obj)
                );

            for (let i = 0; i < props.length; i++) {
                if (propsForConstr[props[i]]) {
                    methods[props[i]] = propsForConstr[props[i]];
                    continue;
                }
                if (typeof Object.getPrototypeOf(copyObj[props[i]]) === 'function') {
                    // run through all properties, and at once, if property equals function, set log method to the call of the function
                    methods[props[i]] = function(...args){
                        log('Function', props[i],'called ' + (args.length > 0 ? 'with params: ' + args : ''));
                        return copyObj[props[i]].apply(this, args);
                    };
                }else
                    methods[props[i]] = copyObj[props[i]];
            }

            return methods;
        }

        const keys = Object.keys(properties);

        // set properties and values to him for the our class
        for (let i = 0; i < keys.length; i++) {
            if (typeof properties[keys[i]] === 'function'){
                // set the functions
                Object.defineProperty(NewClass.prototype, keys[i], {
                    value: properties[keys[i]],
                    enumerable: false
                });
            }else {
                // set the fields and getters and setters for them, which contains log function
                Object.defineProperty(NewClass.prototype, '_' + keys[i], {
                    value: properties[keys[i]],
                    writable: true
                });
                Object.defineProperty(NewClass.prototype, keys[i], {
                    get: function() {
                        log('Variable', keys[i], 'getted:');
                        return this['_' + keys[i]];
                    },
                    set: function(val) {
                        log('Variable', keys[i], 'setted to the new value');
                        this['_' + keys[i]] = val;
                    }
                });
            }
        }

        return NewClass;
    }
}

@Logger({name: 'Jhon'})
class SomeClass {
    public name: string;
    constructor(name: string){
        this.name = name;
    }

    public addSome(str: string): void {
        this.name += this.anotherSomeMethod(str);
        console.log(this.name);
    }

    private anotherSomeMethod(str: string): string {
        return str;
    }
}

const someClass = new SomeClass('Jhon');
console.log(someClass.name);
someClass.addSome('ny');
someClass.name = 'Vasya';
console.log(someClass.name)
someClass.addSome('!');