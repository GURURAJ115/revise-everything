//creating an http server using express
//expresss is not a node default lib: npm install express

//importing the library or package whatever u wanna call it
const express = require("express");

//initializing the express app
const app = express();

//complex algorithm that you don't wanna expose
function sum(n){
    let ans=0;
    for(let i=0;i<=n;i++){
        ans=ans+i;
    }
    return ans;
}

app.get("/",function(req,res){
    // "url/?n=3"
    const n=req.query.n;
    const ans = sum(n);//calling the function.
    res.send("Hi there: "+ans);//sending the result
})

app.listen(3000);//Port number on which the app is running