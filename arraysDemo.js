//Array
// const myarray = [1,2,3,4,5,6,7]
// console.log("My Array is: "+myarray);

// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);
    
// }

const myarray2 = new Array(1,2,3,4,5,6)
// console.log("First element: "+myarray2[0]);

// console.log(myarray2.push(10,30));
// console.log("My Array: "+myarray2);

// console.log(myarray2.pop());
// console.log("My Array: "+myarray2);

// console.log("Before use of unshift()"+myarray2);
// console.log(myarray2.unshift(20));
// console.log("After use of unshift()"+myarray2);

// console.log("Before use of shift()"+myarray2);
// console.log(myarray2.shift());
// console.log("After use of shift()"+myarray2);

// console.log(myarray2.includes(10));
// console.log(myarray2.indexOf(4));

console.log("My array: "+myarray2);
const newarray1 = myarray2.slice(1,4);
console.log("New array: "+newarray1);
console.log("My array after slice: "+myarray2);

console.log("My array: "+myarray2);
const newarray2 = myarray2.splice(1,4);
console.log("New array: "+newarray2);
console.log("My array after splice: "+myarray2);
