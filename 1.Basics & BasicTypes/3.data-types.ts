//String
let s: String;
s = "abc";
//Number
let n: number;
n = 100;
n = 5.5;
//Boolean
let b: boolean;
b = true;
if (b) {
    console.log(n)
}
else {
    console.log(s)
}
//any
let a: any;
a = "123";
a = 1;
console.log(a)
//undefined
let und: undefined;
console.log(und)
//null
let nu: null = null;
console.log(nu)

//example
function add(n1: any, n2: any) {
    console.log(n1 + n2)
}

add("10", "5")

