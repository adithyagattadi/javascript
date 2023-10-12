const arr = [0,1,2,3,4,5]
const myArr = ["ironman", "spiderman", "batman", "superman"]
console.log(myArr[0])
console.log(myArr.length)
arr.push(6)      //adds element in array
arr.push(7)      
arr.pop()        //delete last element in array
arr.unshift(9)   //adds element in first place of array
arr.shift()      //deletes the unshift element in array
console.log(arr)
console.log(arr.includes(9))   //output in true or false
console.log(arr.indexOf(9))    //-1 if false 

const myjoin = arr.join()
console.log(typeof(arr))
console.log(typeof(myjoin))
console.log(arr===myjoin)

//slice ----------------------------------------

console.log("A ", arr)
const myn1 = arr.slice(1,4)   //give the first value to 3rd value, 4 not counted
console.log(myn1)

//splice ----------------------------------------

console.log("B ", arr)
const myn2 = arr.splice(1,4)  //give the first value to 4th value
console.log(myn2)