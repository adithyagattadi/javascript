const Score = 400
// console.log(Score)
const balance = new Number(100)
// console.log(balance)
// console.log(balance.toString().length)
// console.log(balance.toFixed(2));          // toFixed = represents the decimal value (2)=> .00 

const newNum = 123.8966
// console.log(newNum.toPrecision(3))

const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN'))  // 'en-IN' represents commas in Indian Standard ex:- 1,00,000

// ****************************** MATH **************************************

console.log(Math);
console.log(Math.abs(-4))      // output 4, gives always positive number
console.log(Math.round(4.6))   // output 5, as it is nearest of 5
console.log(Math.ceil(4.1))    // output 5, if it is above 4
console.log(Math.floor(4.8))   // output 4, if it is in region of 4
console.log(Math.sqrt(25))
console.log(Math.min(3,5,7,2,8,9))
console.log(Math.max(3,5,7,2,8,9))
console.log(Math.random())             // it gives any number between 0 to 1
console.log((Math.random() * 10) + 1 )   // (+1) to avoid 0.0 in output (rare cases)
console.log(Math.floor(Math.random() * 10) + 1 ) //gives you only single number

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1)) + min)  // (max-min+1) is formula and (+ min) because it gives the values about min number
console.log(Math.floor(Math.random() * (max-min+1)) + max)  // (+ max) because it gives the values about max number