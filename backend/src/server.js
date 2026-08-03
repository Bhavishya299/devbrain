const express = require("express"); //import express from node modules
const app = express(); //function calling as app for objects

const PORT = 5000; //express port 

app.get("/" , (req,res) => {
    res.send("Welcome to DevBrain");
});
app.get("/about" , (req,res) =>{
   res.send("This is DevBrain 1.0") ;
}
app.listen(PORT , () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

