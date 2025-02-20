console.log("Promise Demo");
// Promise can be:
// resolve
// reject 
// pending

function myfunction() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if(!error){
                console.log("My Promise has been resolved");
                resolve();     
            }
            else{
                console.log("My Promise has been rejected");
                reject("promise has been not resolved");  
            }
                  
        }, 2000);        
    })
}

myfunction().then(function () {
    console.log("Thanks for resolving the promise");   
}).catch(function () {
    console.log("What man how cant you resolve the promise");
})