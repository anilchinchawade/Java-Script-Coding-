const accountId = 992264
let accountEmail = "archinchawade@gmail.com"
var accountPassword = "99099989"
/* Prefer not to use var because of issue in block scope and functional scope */
accountCity = "Solapur"   //Its also allowed

accountEmail = "anilrchinchawade@gmail.com"
accountPassword = "9909998909039"
accountCity = "Las Vegas"

console.log(accountId);
console.log(accountEmail)
console.log(accountPassword);
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity])