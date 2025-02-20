console.log("Callback functions in JS");

// Assume that data is fecthed from server
const students = [
    {name:"Anil",subject:"FSD"},  
    {name:"Nikhil",subject:"AJP"}
]

//Following lines till line number 35 demonstrate without call -back function
function enrollStudent(student){
    setTimeout(() => {
        students.push(student);
        console.log("Student Enrolled Successfully");
    }, 3000);
}


function getStudents() {
    setTimeout(() => {
        str = "";
        let studlist = document.getElementById("students");
        students.forEach(function (student) {
            str+=`<li>${student.name}</li>`
        });

        studlist.innerHTML = str;
        console.log("Student Fetched Successfully");
    }, 1000);
}

let newStudent = {name:"Amit",subject:"FSD"}
enrollStudent(newStudent);
getStudents();

//Following lines till line number 55 demonstrate with call -back function
// function enrollStudent(student, callback){
//     setTimeout(() => {
//         students.push(student);
//         console.log("Student Enrolled Successfully");
//         callback();
//     }, 3000);
// }


// function getStudents() {
//     setTimeout(() => {
//         str = "";
//         let studlist = document.getElementById("students");
//         students.forEach(function (student) {
//             str+=`<li>${student.name}</li>`
//         });

//         studlist.innerHTML = str;
//         console.log("Student Fetched Successfully");
//     }, 1000);
// }

// let newStudent = {name:"Amit",subject:"FSD"}
// enrollStudent(newStudent, getStudents);
