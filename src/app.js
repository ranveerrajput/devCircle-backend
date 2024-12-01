const express = require('express');
const app = express();
const {connectDB} = require("./config/database");
// const {adminAuth} = require("./middleware/auth");

// app.use('/signUp', (,res)=>{
//     const user = 
// })

connectDB().then(()=>{
    console.log("Data Base Connected Sucesssfully");
    app.listen("7777", ()=>{console.log("Serve is successfully listening on port 7777")})
}).catch(()=>{
    console.log("Database can not be connectded");
});


