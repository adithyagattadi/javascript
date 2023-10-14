const heros = ["Spiderman", "batman", "superman", "ironman"]
const dc = ["thor", "hulk", "captain"]
heros.push(dc)
// console.log(heros)
// console.log(heros[3])
console.log(heros.concat(dc))

const allnewHeors = [...heros, ...dc]
console.log(allnewHeors)

const arr1 = [1,2,[4,5],6,7,[8,[9],10],11]
const arr2 = arr1.flat(Infinity)
console.log(arr2)

console.log(Array.isArray("Adithya"));
console.log(Array.from("Adithya"));
console.log(Array.from({name:"Adithya"}));    //interesting, gives empty output

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3))