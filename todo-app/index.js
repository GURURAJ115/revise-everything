const express = require("express");

const app = express();

//route handlers
app.get('/',function(req,res){
    res.send("Hello World");
})
//req-request body
app.post('/',function(req,res){
    //res - response send something(data)
    res.send("Hello World from post");
})
app.get('/asd',function(req,res){
    res.send("Hello World from asd");
})

//infinite running server
app.listen(3000);//port number