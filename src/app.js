const express = require('express');
const app = express();



//GET Request
app.get('/test', (req,res)=>{
    console.log('From the GET API');
    res.send("Data send successfully")
});

//POST Request
app.post('/test', (req,res)=>{
    console.log('From the POST API');
    res.send("Data added successfully")
});

//advace routing

 app.get("/ab?c", (req,res)=>{
    console.log("This route acces path with or without b");
    res.send("Data send successfully");
 });

 app.get("/ab+c", (req,res)=>{
    console.log("This route acces path with satrting as a and ending with c and any times b");
    res.send("Data send successfully from ab+c");
 });

 app.get("/ab*c", (req,res)=>{
    console.log("This route acces path with satrting as ab and ending with c and any values in between them");
    res.send("Data send successfully from ab*c");
 });


app.listen(7777,()=>{
    console.log("Server is successfully running on the port 7777.....");
});

