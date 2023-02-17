class Person {
    constructor(
        private firstName: string,
        private lastName: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}
class Employee extends Person {
    private report: string;
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {
        super(firstName, lastName);
        this.report = ""
    }

    get getReport() {
    if(this.report){
        return console.log(this.report)
        }
         throw new Error("no report found")
    }
    set setReport(value: string) {
        if (!value) {
         throw new Error("please pass a value")
        }
        this.report = value;
    }
}


let employee = new Employee('John', 'Doe', 'Front-end Developer');
employee.setReport = "ok"

console.log(employee.getReport);
