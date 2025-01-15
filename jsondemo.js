//Object de-structure and JSON API intro
const course = {
    courseName : "Java Script-3",
    courseInstructor : "Anil C"
}

//Destrure the data
const {courseInstructor} = course
console.log("Destrured data: ",courseInstructor);

//Another way of Destructuring the data with short name
const {courseInstructor:instructor} = course
console.log("Destrured data: ",instructor);

