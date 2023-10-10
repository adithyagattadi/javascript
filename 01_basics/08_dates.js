let myDate = new Date()
console.log(myDate.toDateString())
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toJSON())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())

console.log(typeof(myDate))

let myCreatedDate = new Date(2023, 2, 24) 
console.log(myCreatedDate.toString())        // it automatic gives you the day

let myCreDate = new Date(2023, 2, 24, 5, 18)
console.log(myCreDate.toLocaleString())        // it gives 3/24/2023, 5:18:00 AM

let datee = new Date("03-12-2023")   // mm-dd-yyyy (indian format), 3/12/2023, 12:00:00 AM
console.log(datee.toLocaleString())

let myTimeStamp = Date.now()    //basically used in google forms, poles to check who's the first winner
console.log(myTimeStamp)
console.log(datee.getTime())    // can compare values in millisec
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())  // it gives only day output
console.log(newDate.getHours())  // it gives only hours output
console.log(newDate.getMilliseconds()) // it gives milliseconds day output
console.log(newDate.getMonth() + 1) // +1 because user not to confuse as jan starts with 0, +1 indicates jan starts from 1