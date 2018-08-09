interface Person {
    name: string;
}

interface AgedPerson extends Person {
    age: number;
};

const person: Person = {
    name: 'John'
};

function addAge(age: number):(person: Person) => AgedPerson {
    console.log('Age added');
    return function(person): AgedPerson {
        return {
            name: person.name,
            age
        }
    }
}

const newPerson = addAge(37)(person);
console.log(newPerson);