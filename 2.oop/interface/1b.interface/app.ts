interface Person {
    firstName: string;
    lastName: string;

    fullname(name:string):void
}

let person : Person;

person = {
    firstName: 'John',
    lastName: 'Doe',
    fullname(n:string){
    console.log(`${n} ${this.firstName} ${this.lastName}`)
    }
};

person.fullname("my name is")

