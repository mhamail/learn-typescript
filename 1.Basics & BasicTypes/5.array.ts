// let skills:any;
//  let skills = ['Problem Sovling', 'Software Design', 'Programming'];
// console.log(skills)
// skills = ['more data']
// console.log(skills)
// skills.push('more data',100)
// console.log(skills)

let skills: string[];
skills = ['Problem Sovling', 'Software Design', 'Programming', 'Software Engineering']

//show data methods
// console.log(skills[0])
// for(let data of skills){
// console.log(data)
// }
// skills.forEach((item)=>{
// console.log(item)
// })
// skills.map((item)=>console.log(item))

// filter  find
//  const data = skills.filter((item)=>item.includes("Software"))
// console.log(data)

 const data = skills.find((item)=>item.includes("Software"))
console.log(data)