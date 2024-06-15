const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){
    result = calculate(req.body.height, req.body.weight)
    res.send("Your BMI is " + result);
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});

function calculate(h, w){
    result = parseInt(w) / (parseInt(h) * parseInt(h));
    return result * 703;
}