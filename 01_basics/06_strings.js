const name = "Adithya"
const repoCont = 20
// console.log(name + repoCont)   (Do not use this syntax)
console.log(`Hello my name is ${name} and my repo cont is ${repoCont}`)

const gamePlay = new String("Adi-gamer-ok")
console.log(gamePlay)
console.log(gamePlay[3])
console.log(gamePlay.__proto__)


console.log(gamePlay.length);
console.log(gamePlay.toUpperCase())
console.log(gamePlay.toLowerCase())
console.log(gamePlay.charAt(2))
console.log(gamePlay.indexOf('a'))
console.log(gamePlay.lastIndexOf('d'))
console.log(gamePlay.replace('Adigamer', 'ok'))


const newString = gamePlay.substring(0,4)
console.log(newString);                       // here output paas index 0 to index 3

const anotherString = gamePlay.slice(-7,6)    
console.log(anotherString);                   // -7 count from last side and 4 from starting (d,m) => digam

const newStringOne = "     HeySupp     "
console.log(newStringOne)
console.log(newStringOne.trim())              // removes space

const url = "https://adithya@gattadi.com"
console.log(url.replace('@', '-'));
console.log(url.includes('adithya'))
console.log(url.includes('john'))

console.log(gamePlay.split('-'))             // converts strings to array 