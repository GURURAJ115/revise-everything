const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "iamunemployed";
const app = express();

app.use(express.json()); // will help you parse any post body

const users = [];

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You are signed up"
    })
})


app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);
    console.log(user);
    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET)
        res.json({
            token: token
        })
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
});

app.get("/me", (req, res) => {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData.username){
        const user = users.find(user => user.username === decodedData.username);
        res.json({
            username: user.username,
            password: user.password
        })
    }
    
})

app.listen(3000); // http server is listening on port 3000.