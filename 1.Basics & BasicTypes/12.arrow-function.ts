//arrow function
// const getTotal=(...numbers: number[])=>{
//     let total = 0;
//     numbers.forEach((num) => total += num);
//     return total;
// }
// console.log(getTotal(10,10,10))

// reduce function
const getTotal=(...numbers: number[])=> {
   return numbers.reduce((acc,item)=>acc+item,0)
}
console.log(getTotal(10,10,10))