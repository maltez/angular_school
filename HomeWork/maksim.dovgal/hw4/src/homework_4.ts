//logger decorator
function Logger(){
    return function (targetClass: any) {
        const target = new targetClass();
        const properties = getAllProperties(target, target);

        const newClass: any = class {};

        // function logger
        function log(type: string, name: string, operation: string) {
            console.log(`${type} ${name} have been ${operation}`);
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
                if (typeof Object.getPrototypeOf(copyObj[props[i]]) === 'function') {
                    // run through all properties, and at once, if property equals function, set log method to the call of the function
                    methods[props[i]] = function([...args]: any){
                        log('Function', props[i],'called' + (args.length > 0 ? 'with params: ' + args : ''));
                        return copyObj[props[i]].call(this, args);
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
                Object.defineProperty(newClass.prototype, keys[i], {
                    value: properties[keys[i]],
                    enumerable: false
                });
            }else {
                // set the fields and getters and setters for them, which contains log function
                Object.defineProperty(newClass.prototype, '_' + keys[i], {
                    value: properties[keys[i]],
                    writable: true
                });
                Object.defineProperty(newClass.prototype, keys[i], {
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

        newClass.constructor = {

        };

        return newClass;
    }
}

@Logger()
class SomeClass {
    public name: string = 'Jhon';

    public addSome(str: string): void {
        const a = 'world';
        console.log(a + this.anotherSomeMethod(str));
    }

    private anotherSomeMethod(str: string): string {
        return str;
    }
}

const someClass = new SomeClass();
console.log(someClass.name)
someClass.name = 'Vasya';
console.log(someClass.name)
someClass.addSome('!');