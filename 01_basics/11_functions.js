function saymyName(){
    console.log("A")
    console.log("D")
    console.log("I")
    console.log("T")
    console.log("H")
    console.log("Y")
    console.log("A")
}
saymyName()



function addTwoNum(num1,num2){
    console.log(num1 + num2)
}
addTwoNum(23,56)
// addTwoNum(3, null)       //3
// addTwoNum(5,undefined)  // NaN



function mulTwoNum(num1,num2){
    let results = (num1 * num2)
    return results
}
const results = mulTwoNum(5,4)
console.log(results)


function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Adithya"))
// console.log(loginUserMessage())             //undefined


function loginUserReply(id){
    if(id===undefined){
        console.log("Please Enter ID")
        return
    }
    return `${id} just signed in`
}
console.log(loginUserReply())