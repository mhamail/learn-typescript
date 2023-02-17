// let employee: object;

// let employee = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,
//     jobTitle: 'Web Developer'
// };

let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
};

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

console.log(employee);
console.log(employee.firstName);
employee.firstName = "abc"
console.log(employee.firstName);

