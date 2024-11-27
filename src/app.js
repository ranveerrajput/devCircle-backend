const express = require('express');
const app = express();
const {connectDB} = require("./config/database");
const {adminAuth} = require("./middleware/auth");

app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req,res)=>{
    //check user is admin or not
    console.log("from /getAllData");
    res.send("Send all the user data successfully");
})

app.delete("/admin/deleteData", (req,res)=>{
    //check user is admin or not
    console.log("from /deleteData")
    res.send("Record deleted successfully");
})

connectDB().then(()=>{
    console.log("Data Base Connected Sussfully");
    app.listen("7777", ()=>{console.log("Serve is successfully listening on port 7777")})
}).catch(()=>{
    console.log("Database can not be connectded");
});


