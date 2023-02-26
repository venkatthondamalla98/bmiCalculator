const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.sendFile(__dirname + '/calculator.html')
})

app.post("/", function(req, res){
    const { add , sub, div, mul, modulo, square } = req.body;
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)
    let result = 0

    if(add === "+"){
        result = num1 + num2
    }else if(sub === "-"){
        result = num1 - num2
    }else if(div === "/"){
        result = num1 / num2
    }else if(mul === "*"){
        result = num1 * num2
    }

    res.write("<h1> Result is "+ `${result}` +"</h1>");
    res.send()
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post("/bmicalculator", function(req, res){
    const height = parseFloat(req.body.height);
    const weight = parseFloat(req.body.weight);

    const bmi = weight / (height * height)

    res.send("Your BMI is " + bmi)
})

app.listen(3000, function(){
    console.log("server is up and running")
})