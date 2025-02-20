console.log("AJAX Demo started");

// for (let index = 0; index < 4000; index++){
//     const element =index;
//     console.log(element)
// }

//First Way of doing things asyncronously
setTimeout(() => {
    for (let index = 0; index < 4000; index++){
        const element =index;
        console.log(element)
    }
}, 100);

console.log("AJAX Demo End");
