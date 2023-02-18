"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    describe() {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
    static createPerson(name) {
        return name;
    }
}
Person.count = 100;
let employee = Person.createPerson("adam");
console.log(employee, Person.count);
