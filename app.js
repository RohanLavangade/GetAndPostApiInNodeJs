const express = require("express");
const app=express();
const studentRoute=require("./api/routes/student");
const facultyRoute=require("./api/routes/faculty")
const bodyParse =require("body-parser");
const mongoose=require("mongoose");


mongoose.connect("mongodb+srv://rohhh:Rohan940@sts.anmdh.mongodb.net/?retryWrites=true&w=majority&appName=sts");

mongoose.connection.on('error',err=>{
 console.log("connection failed");
});

mongoose.connection.on('connected',connected=>{
  console.log("connection successful")
});

app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());

app.use("/student", studentRoute);
app.use("/faculty", facultyRoute);



app.use((req,res,next)=>{
  res.status(404).json({
    error:"bad reques"
  });
});

app.use((req,res ,next)=>{
      res.status(200).json({
        message:"app is running"
      });
});

module.exports=app;