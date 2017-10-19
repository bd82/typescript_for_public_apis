class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // changing this method's name will cause tsc to fail with:
    // error TS2322: Type '{ Person: typeof Person; School: typeof School; }' is not assignable to type 'IClasses'.
    // Types of property 'Person' are incompatible.
    // Type 'typeof Person' is not assignable to type 'new (name: string, age: number) => IPerson'.
    // Type 'Person' is not assignable to type 'IPerson'.
    // Property 'getName' is missing in type 'Person'.
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

/**
 * @type {typescript_for_public_apis.IClasses}
 */
const classes = {
    Person,
    School
};

module.exports = classes;
