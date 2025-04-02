const express = require("express");

const app = express();

function ageMiddleware(req,res,next){
    const age = req.query.age;
    if(age>18){
        next();
    }
    else{
        res.json({
            msg:"you are not of the age to ride!!!"
        })
    }
}

//can use like this globally 
// which induces this to all the routes after it.
// app.use(ageMiddleware);

app.get("/",ageMiddleware,(req,res)=>{//or you can use it like this
    //for a single route. 
    res.json({
        msg:"You have successfully ridden the ride"
    })
})

app.listen(3000);
console.log("Listening on port 3000")