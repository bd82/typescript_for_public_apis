// Still trying to find a syntax to make the TypeScript compiler
// validate the Person implementation matches some definition from the d.ts
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name
    }

    haveBirthDay(isLeaper) {
        // born on 29th of February
        if (isLeaper === true) {
            this.age = this.age + 4;
        }
        else {
            this.age++
        }
    }
}

class School {

    constructor() {
        this.students = []
    }

    signup(newStudent) {
        this.students.push(newStudent)
    }
}

const classes = {
    Person,
    School
};

module.exports = classes;
