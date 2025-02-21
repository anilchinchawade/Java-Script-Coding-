const user = {
    username:"Anil",
    uid:5632,

    greetFunction : function (params) {
        console.log(`${this.username}, Welcome to mysite`)
        console.log(this)
    }
}
console.log(user.username);
console.log(user.greetFunction());

const thisInFunDemo = function(){
    let myname = "Anil";
    console.log(`${this.myname}, Welcome Man!`);   // Will not work here bacause myname is not an attribute of some object, It's a simple variable.  
}

thisInFunDemo()

//Arrow Function Demo-1
// const arrowFunDemo = () => {
//     let myname = "Anil";
//     console.log(`${myname}, Welcome to Arrow Function!`);   
// }

// arrowFunDemo()

//Arrow Function Demo-2
// const anotherArrowfun  = (a, b) => {
// return a+b
// }

// console.log("Addition is: ",anotherArrowfun(20, 30));

//Arrow Function Demo-3 to return premitive data and one lines code doesn't require return statement.
// const anotherArrowfun  = (a, b) =>  a * b;      //or use the following const anotherArrowfun  = (a, b) =>  (a*b);
    
// console.log("Addition is: ",anotherArrowfun(20, 30));

//Arrow Function Demo-4 to return object data without wrapping with ()
// const anotherArrowfun = () => {myname:"Anil"}
// console.log("The object is: ",anotherArrowfun());

//Arrow Function Demo-4 to return object data correctly by wrapping with ()
// const anotherArrowfun = () => ({myname:"Anil"})
// console.log("The object is: ",anotherArrowfun());