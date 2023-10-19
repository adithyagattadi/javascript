function calculateCartPrice (...num1){
    return num1
}
console.log(calculateCartPrice(2,6,7))

const user = {
    username: "adi",
    price: 200
}
function handleObject(anyObj){
    console.log(`username is ${anyObj.username} and price is ${anyObj.price}`)
}
handleObject(user) 

const myNewArray = [12,34,56,78,90]
function returnSecongValue(getArray){
    return getArray[1]
}
console.log(returnSecongValue(myNewArray))
console.log(returnSecongValue[12,34,56,78,90])