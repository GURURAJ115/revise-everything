// function main(){
//     fetch("https://sumserver-1pm0.onrender.com/todos")
//         .then(async (response)=>{
//             const json = await response.json();
//             console.log(json.todos.length);
//         });
// }

async function main() {
    const response = await fetch("https://sumserver-1pm0.onrender.com/todos");
    const json = await response.json();
    console.log(json.todos.length);
};

main();


// //axios

const axios = require("axios");

async function main() {
    const response = await axios.get("https://sumserver-1pm0.onrender.com/todos");
    // whenever you use axios you will get the result in response.data
    //const json = await response.json(); so this is not required
    console.log(response.data.todos.length);
};

main();

// in get request the second argument will be header ,{headers:{Authorization: "Bearer"}} like this
// whereas in a post put delete request the second argument will be a body and then a header.
// or you can specify everything at one place even url method headers etc etc same as like in fetch.