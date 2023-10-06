const accountID = 12345
let accountEmail = "adithya@gmail.com"
var accountPassword = "123456"
accountCity = "Hyderabad"
let accountState;

// accountID = 12345 //not allowed because the value stored in const is locked, cannot be changed
accountEmail = "ag@gmail.com"
accountPassword = "asdfg"
accountCity = "hyd"

console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity, accountState])