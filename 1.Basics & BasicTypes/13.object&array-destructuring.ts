// Object destructuring
const data1 = {
    username: "Ali Adam",
    age: 45,
    subject: "science"
}

const {username,age,subject} = data1;

console.log(username)

//array destructuring

const hobbies=["exercise","sports","cooking"]
const [hobby1,hobby2,...remainingHobbies] = hobbies;
console.log(hobby1,hobby2,...remainingHobbies)


