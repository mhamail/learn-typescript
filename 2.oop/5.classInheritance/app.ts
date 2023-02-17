class Person {
    protected id: string = Date.now().toString();
    constructor(
        private firstName: string,
        private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}
class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        public jobTitle: string) {

        // call the constructor of the Person class:
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }
    changeId(newId: string) {
        this.id = newId
    }
}
class Employee2 extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private reports: string[]) {
        super(firstName, lastName);
    }
    addReport(report: string) {
        this.reports.push(report)
    }
}

let employee = new Employee('John', 'Doe', 'Front-end Developer');
let employee2 = new Employee2('Hong', 'Kong', []);

employee2.addReport("Finance")

employee.changeId("sffgfg")
console.log(employee.describe());

console.log(employee)
console.log(employee2)