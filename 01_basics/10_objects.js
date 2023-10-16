// singleton

//object literals

const mySym = Symbol("key1")


const JSUser = {
    name: "Adithya",
    "Full name": "Adithya Gattadi",
    [mySym]: "myKey1",                //syntax for symbol
    age:20,
    location: "Hyd",
    email: "ag@gmail.com",
    isLoggedIn: true,
    lastLoggedIn: ["Monday", "Friday"]
}

console.log(JSUser.email)
console.log(JSUser["email"])      // both are correct but use this one
// console.log(JSUser.Full name)     // in this full name contains error
console.log(JSUser["Full name"])  // gives output as it store the value in string
console.log(JSUser[mySym])
console.log(typeof(mySym));

JSUser.email = "chintoWD@gmail.com"
console.log(JSUser.email)
// Object.freeze(JSUser)         //it will freeze the object, as you cannot change after it became freeze
JSUser.email = "chintoWD@microsoft.com"
console.log(JSUser.email)     // still output shows chintoWD@gmail.com, as it got freezed

JSUser.greetings = function(){
    console.log("Hello world")
}
console.log(JSUser.greetings)
console.log(JSUser.greetings())
console.log(typeof(JSUser.greetings))

JSUser.greetingsTwo = function(){
    console.log(`Hello world, ${this.name}`)
}
console.log(JSUser.greetingsTwo())