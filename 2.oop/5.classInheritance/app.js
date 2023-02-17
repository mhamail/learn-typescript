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
        // call the constructor of the Person class:
        super(firstName, lastName);
        this.jobTitle = jobTitle;
        this.jobTitle = jobTitle;
    }
}
class Employee2 extends Person {
    constructor(firstName, lastName, reports) {
        super(firstName, lastName);
        this.reports = reports;
    }
    addReport(report) {
        this.reports.push(report);
    }
}
let employee = new Employee('John', 'Doe', 'Front-end Developer');
let employee2 = new Employee2('Hong', 'Kong', []);
employee2.addReport("Finance");
console.log(employee.describe());
console.log(employee);
console.log(employee2);
