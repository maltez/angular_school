function AddAge(age: number){
    return function(targetClass: any){
        return class {
            name = targetClass.name;
            age = age;
        }
    }
}

@AddAge(37)
class Person {
    public name: string = 'John';
}

console.log(new Person());