interface Data {
    readonly name: string;

    fullname(name: string): void
}
class Person implements Data {
    name: string;
    age: number;
    constructor(n: string, age: number) {
        this.name = n;
        this.age = age;
    }
    fullname(n: string) {
        console.log(`${n} ${this.name} and his age is ${this.age}`)
    }
}
let person: Data;

person = new Person("John Doe",40)
person.name="sdfsdffsd" // because of readonly

person.fullname("my name is")

