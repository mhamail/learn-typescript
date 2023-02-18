class Person {
 readonly birthDate: Date;
    constructor(public name: string, private id:string,bd:Date) {
        this.name = name;
        this.id=id;
        this.birthDate=bd;
    }
    getName() {
        return `${this.name} , his id is ${this.id} and his birthday date is ${this.birthDate}`
    }
}
const person = new Person("Ali","123",new Date(1990, 12, 25))

console.log(person.getName());
