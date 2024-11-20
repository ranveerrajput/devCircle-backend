const express = require('express');
const app = express();


app.use("/test",(req,res)=>{
    res.send("From the test route");

})

app.use("/hello", (req,res)=>{
    res.send("Hello hello hello");
})

app.use("/",(req,res)=>{
    res.send("Welcome to the Home Page");
})


app.listen(7777,()=>{
    console.log("Server is successfully running on the port 7777.....");
});