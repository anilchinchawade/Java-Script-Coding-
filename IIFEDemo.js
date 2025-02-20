// Immediately Invoked Function Expression (IIFE)
//Gives an error as function not wrapped by ()
// function iifeDemo(){
//     console.log("IIFE Demo Done");    
// }()

//The above problem solved as function wrapped by ()
// (function iifeDemo(){
// Named IIFE
//     console.log("IIFE Demo Done");    
// })()

//Another example with arrow function
(() => console.log("IIFE with arrow function"))();

//Another example with arrow function
(() => console.log("Another arrow function works only if above statement ends with ;"))();
