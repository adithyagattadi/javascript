// const tinder = new Object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Adithya"
tinderUser.isLoggedIn = false
console.log(tinderUser)

const regularUser = {
    email: "ag@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Adithya",
            lastname: "Gattadi"
        }
    }
}
console.log(regularUser.fullname.userfullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = { obj1, obj2}
// const obj3 = Object.assign(obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3)

const users = [
    {
        id: "Adi123",
        name: "OKJI"
    },
    {
        id: "Adi1234",
        name: "OKJII"
    },
    {
        id: "Adi1235",
        name: "OKJIII"
    }
]
console.log(users[0].name)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))   // use very less

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLogged'))    //false