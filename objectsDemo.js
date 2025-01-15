//Singleton - Is an object creted using constructor using Object.create()


//Object Literals
const jsuser = {
    name : "Anil",
    surname : "Chinchawade",
    location : "Solapur",
    email : "anilchinchawade1@gmail.com",
    lastLoginDays : ["Monday", "Friday"] 
}

// console.log("Accessing member of object using . opeartor");
// console.log("Name: ", jsuser.name);
// console.log("Accessing member of object using [] ");
// console.log("Name: ", jsuser["surname"]);

//Changing object content
// jsuser.email = "anilchinchawade@meta.com"
// console.log("updated Email: ", jsuser["email"]);

//Freeze the values of an object, changes won't propogate
// Object.freeze(jsuser);
// jsuser.email = "anilchinchawade@facebook.com"
// console.log("New Email: ", jsuser["email"]);

//Adding function to object
jsuser.greeting = function(){
    console.log("I am greeting function in jsuser");    
}
console.log("jsuser: ",jsuser.greeting());

//Adding function to object
jsuser.greeting2 = function(){
    console.log("I am accessing the other values of jsuser object: ",this.name);    
}
console.log("jsuser: ",jsuser.greeting2());