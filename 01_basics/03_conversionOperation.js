let score = null;

console.log(typeof(score))
console.log(typeof score)

let valueInNumber = Number(score)

console.log(valueInNumber)
console.log(typeof valueInNumber)

// "33" => 33
// "33abc" => NaN
// null => 0
// true => 1, false => 0
// undefined => Nan

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn) 
console.log(booleanIsLoggedIn)

// 1 => true, 0 => false
// "" => false
// "asjad" => true


let someNumer = 33
let stringNumber = String(someNumer)
console.log(stringNumber);
console.log(typeof stringNumber);

// ----------------------- Operations ----------------------- //

let value =3 
let negValue = -value
console.log(negValue)

console.log(2*3);

let str1 = "asjad"
let str2 = " khan"
console.log(str1 + str2)

console.log(2 + 2 % 3) 

let prefixIncrement = 3
++ prefixIncrement
console.log(prefixIncrement);
let postfixIncrement = 3
postfixIncrement ++
console.log(postfixIncrement);

// the main difference in above two is as the name suggests

// Code below for better Example
// let x = 3;
// const y = x++;

// console.log(`x:$x, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:4, b:4"
