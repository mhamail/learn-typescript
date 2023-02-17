class Person {
    protected id: string = Date.now().toString();
    constructor(
        private firstName: string,
        private lastName: string
        ) 
        {
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
        private jobTitle: string) {

        super(firstName, lastName);
    }
    describe(): string {
        return super.describe() + ` I'm a ${this.jobTitle}.`;
    }
}


let employee = new Employee('John', 'Doe', 'Front-end Developer');


console.log(employee.describe());

console.log(employee)