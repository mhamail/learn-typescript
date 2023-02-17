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
}
class Employee extends Person {
    constructor(firstName, lastName, jobTitle) {
        super(firstName, lastName);
        this.jobTitle = jobTitle;
        this.report = "";
    }
    get getReport() {
        if (this.report) {
            return console.log(this.report);
        }
        throw new Error("no report found");
    }
    set setReport(value) {
        if (!value) {
            throw new Error("please pass a value");
        }
        this.report = value;
    }
}
let employee = new Employee('John', 'Doe', 'Front-end Developer');
employee.setReport = "ok";
console.log(employee.getReport);
