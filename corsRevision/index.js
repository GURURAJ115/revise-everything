const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

//you can use cors to avoid cross domain cors issues.
//you can whitelist a few domains inside it.
app.use(cors(
    // domains:["http://google.com","http://facebook.com"] like this
    //if empty then can be accessed from any origin.
));

//this is while in the same domain
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.post("/sum",(req,res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    console.log(a+b);
    res.json({
        answer: a+b
    })
})

app.listen(3000);