console.log("Promise Demo");

// Assume that data is fecthed from server
const students = [
    {name:"Anil",subject:"FSD"},  
    {name:"Nikhil",subject:"AJP"}
]


function enrollStudent(student){
    return new Promise(function(resolve,reject) {
        setTimeout(() => {
            students.push(student);
            console.log("Student Enrolled Successfully");
            const error = true;
            if(!error){
                resolve();
            }
            else{
                reject();
            }
        }, 3000)        
    })    
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
enrollStudent(newStudent).then(getStudents).catch(function () {
    console.log("Some error occurred!!!")
})
