"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = Date.now().toString();
        this.firstName = firstName;
        this.lastName = lastName;
    }
    describe() {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}
class Employee extends Person {
    constructor(firstName, lastName, jobTitle) {
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }
    describe() {
        return super.describe() + `I'm a ${this.jobTitle}.`;
    }
}
let employee = new Employee('John', 'Doe', 'Front-end Developer');
console.log(employee.describe());
console.log(employee);
