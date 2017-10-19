// API exported by functional.js
export interface IFunctional {
    add: (a: number, b: number) => number
    subtract: (a: number, b: number) => number
    divide: (a: number, b: number) => number
}

// The exported concrete elements (const/classes)
// must match the runtime APIs exposed in index.js
export const functional: IFunctional;


// API exported by classes.js
export interface IClasses {
    Person: new(name: string, age: number) => IPerson
    School: new() => ISchool
}

export interface IPerson {
    getName(): string

    haveBirthDay(isLeap: boolean): void
}

export interface ISchool {
    signup(newStudent: IPerson): void
}

export const classes : IClasses;

// exporting as namespace allows us to reference the types via a global namespace
// in the JSDocs annotations
// See: https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#support-for-umd-module-definitions
// For more details on this syntax
export as namespace typescript_for_public_apis
