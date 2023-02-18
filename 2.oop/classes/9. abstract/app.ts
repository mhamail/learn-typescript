abstract class Person {
    protected id: string = Date.now().toString();
    constructor(
        public firstName: string,
        public lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    abstract describe(): void;
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
    describe() {
        return `This is ${this.firstName} ${this.lastName} and his id is ${this.id}.`;
    }
}


let employee = new Employee('John', 'Doe', 'Front-end Developer');


employee.changeId("sffgfg")
console.log(employee.describe());

console.log(employee)