// scopes are let, var, const

let a = 100
if(true){
    let a = 10
    var b = 20       // avoid var, you can write b =20
    const c = 30
    console.log("INNER: ", a)
}

console.log(a)
console.log(b)
// console.log(c)