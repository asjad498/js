const accountId = 1;
let accountEmail = "asjad@gmail.com"
var accountPassword = "1234"
accountCity = "HEllo" // it works but never use it
let accountState;

// accountId = 2 // not allowed

accountEmail = "aaa@gmail.com"
accountPassword = "33333"
accountCity = "Hi"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

