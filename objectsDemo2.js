//Singleton object creation using constructor
// const metauser = new Object();

//Non-singleton object creation without using constructor
const facebookuser = {}

facebookuser.id = "1008"
facebookuser.name = "Anil"
facebookuser.isLoggedIn = false

// console.log(facebookuser)

//Nesting of objects within object at any depth
// const gmailuser ={
//     email : "anilchinchawade1@gmail.com",
//     fullName :{
//         firstName:"Anil",
//         middleName:"Rajendra",
//         lastName:"Chinchawade"
//     },
//     contactNo : 9922641108
// }

// console.log("Gmail user: ",gmailuser);
// console.log("Accessing firstName from gmailuser: ",gmailuser.fullName.firstName);

const obj1 = {
    1:"a",
    2:"b",
    3:"c",
}

const obj2 = {
    4:"d",
    5:"e",
    6:"f",
}


// const obj3 = {obj1, obj2}
// console.log("Creates object of 2 objects: ",obj3);

//If you want to combine two objects into new target {} properly then use Object.assign()
// const obj4 = Object.assign({}, obj1, obj2);
// console.log("Combine 2 objects: ",obj4);

//Use spread operator to combine 2 objects for efficient way of combine
// const obj5 = {...obj1, ...obj2}
// console.log("Combine 2 objects using spread operator: ",obj5);

//On Facebook user object created earlier
//Accessing allkeys
// console.log("Keys: ",Object.keys(facebookuser));
// console.log("Values: ",Object.values(facebookuser));
// console.log("All entries: ",Object.entries(facebookuser));

//To check whether an object has a specific property or not
console.log(facebookuser.hasOwnProperty("isLoggedIn"));
console.log(facebookuser.hasOwnProperty("isLoggedOut"));



