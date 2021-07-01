const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res) =>{
    res.send("Welcome to my Mini Project");
});


app.get("/calculator", (req,res) =>{
    res.sendFile(__dirname+"/Index.html");
});

app.post("/calculator", (req,res) =>{
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);

    let Bmi = weight / (height*height);

    res.send("The BMI of your body is :" +Bmi);
});

app.listen(8000, (req,res) =>{
    console.log("Server is Running ");
});

