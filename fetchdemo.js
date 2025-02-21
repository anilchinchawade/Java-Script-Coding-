console.log("Fetch Demo");

const content = document.getElementById("content");
const btnSubmit = document.getElementById("btnSubmit");

// function fetchData() {
//     console.log("Started fetchData()");

//     url = "mydetails.txt";
//     fetch(url).then((response) => {
//         console.log("Inside First then");
//         return response.text();
//     }).then((data) => {
//         console.log("Inside Second then");
//         console.log("Received Data: " + data);
//     }).catch(() => {
//         console.log("Didn't receive a data");
//     });
// }

// console.log("Before fecthing the data");
// fetchData();
// console.log("After fecthing the data");


//Use https://api.github.com/users api for
// function fetchData() {
//     console.log("Started fetchData()");

//     url = "https://api.github.com/users";
//     fetch(url).then((response) => {
//         console.log("Inside First then");
//         return response.json();
//     }).then((data) => {
//         console.log("Inside Second then");
//         console.log("Received Data: " + JSON.stringify(data));
//         content.innerHTML = JSON.stringify(data);
//     }).catch(() => {
//         console.log("Didn't receive a data");
//     });
// }

// console.log("Before fecthing the data");
// fetchData();
// console.log("After fecthing the data");


function postData() {
    console.log("Started postData()");

    url = "https://api.restful-api.dev/objects";

    data = {
        "name": "Apple MacBook Pro 168787384",
        "data": {
            "year": 2019,
            "price": 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
        }
    };
    params = {
        method: "post",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(url, params).then(response => response.json())
        .then(data => console.log("Received Data: " + JSON.stringify(data))).catch(() => {
            console.log("Didn't receive a data");
        });
}

postData();