class Person {
  public name;
  private students: string[] = [];

    constructor(n: string) {
        this.name = n;
    }
    getName() {
        return this.name
    }
    addStudent(student: string) {
        this.students.push(student)
    }
    showStudentName=()=>{
    console.log(this.students)
    }
}
const person = new Person("Ali")
person.addStudent("Faisal")
// person.students[1]="Qureshi"

person.showStudentName();
console.log(person.getName());
