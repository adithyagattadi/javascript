let score = "3"
let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof(valueInNumber))

// "33" = 33
// "33abc" = NaN(not a number)
// true=1, false=0

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// isLoggedIn = true=1, false=0
// "" = false
// "Adi" = true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));

// ***************************** OPERATIONS ******************************

let value = 12
let negValue = -value
console.log(negValue);

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/4)
console.log(2%3)

let str1 = "Adi"
let str2 = " coder"
let str3 = str1 + str2
console.log(str3);

console.log("1"+2)
console.log("1"+"2")
console.log(1+"2")
console.log("1"+2+3)
console.log(1+2+"3")
console.log(3+"1"+2)
console.log((1+2)*4%2) // code it neatly

console.log(true)
console.log(false);
console.log(+true);
console.log(+false);


let gameCounter = 100;
// gameCounter++;
gameCounter--;
console.log(gameCounter);