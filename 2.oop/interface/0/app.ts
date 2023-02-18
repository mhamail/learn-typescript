interface Data {
    name: string;
    course?: string;
}
//interface can extends multiple interfaces
//interface ShowsData extends Data Data2 Data3

interface ShowsData extends Data {
    fullname(name: string): void
}
class Person implements ShowsData {
    name: string;
    age: number;
    course?:string;
    constructor(n: string, age: number, c?:string) {
        this.name = n;
        this.age = age;
        this.course=c;
    }
    fullname(n: string) {
        console.log(`${n} ${this.name} and his age is ${this.age}`)
    }
}
let person: ShowsData;

person = new Person("John Doe", 40)

person.fullname("my name is")

