class Person {
    static count: number = 100;
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
    static createPerson(name: string){
    return name
    }
}


let employee = Person.createPerson("adam");

console.log(employee,Person.count);
