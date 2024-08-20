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