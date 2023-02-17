class Person {
    constructor(public name: string, private id:string) {
        this.name = name;
        this.id=id;
    }
    getName() {
        return `${this.name} and his id is ${this.id}`
    }
}
const person = new Person("Ali","123")

console.log(person.getName());
