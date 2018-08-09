function AddAge(age: number){
    return function(targetClass: any){
        return class {
            name = targetClass.name;
            age = age;
            sayHello = function() {
                console.log(`${name} say hello you!`);
            };
        }
    }
}

@AddAge(37)
class Person {
    public name: string = 'John';
}


const person1 = new Person();
console.log(person1);