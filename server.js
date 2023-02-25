const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + '/calculator.html')
})

app.post("/", function(req, res){
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)

    const result = num1 + num2

    res.send("Result is " + result)
})

app.listen(3000, function(){
    console.log("server is up and running")
})