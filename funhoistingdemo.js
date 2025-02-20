
console.log(incby1(5));  //Works Well Here Also

function incby1(num){
    return num+1
}
console.log(incby1(5));  //Works Well Here



console.log(myvar(25));  //It doesn't Work Well Here
const myvar = function(num) {
    return num+3
}

console.log(myvar(25));  //Works Well Here