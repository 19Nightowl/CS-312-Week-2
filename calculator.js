const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    result = calculate(req.body.firstNum, req.body.secondNum)
    res.send("The result of the calculaton is " + result);
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});

function calculate(numOne, numTwo){
    result = parseInt(numOne) + parseInt(numTwo);
    return result;
}