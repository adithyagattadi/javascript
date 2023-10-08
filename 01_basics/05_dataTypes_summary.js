// primitive data type
// 7 types : string, number, boolean, null, undefined, symbol, bigInt

const name = "Adithya"
const score = 100
const isLoggedIn = false
const outsideTemp = null
let userEmail;   // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 93847372937n

// Reference (non primitive data type)
// Array, Objects, Functions 

const heros = ['Spiderman', 'batman', 'superman', 'ironman']

let myObj = {
    name: "Adi",
    age: 20,
    isEligible: true
}

const myFunc = function(){
    console.log("Hello world")
}

console.log(typeof(bigNumber))
console.log(typeof(anotherId))
console.log(typeof(outsideTemp))
console.log(typeof(heros))