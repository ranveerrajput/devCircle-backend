const express = require('express');
const app = express();
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

app.listen(7777,()=>{
    console.log("Server is successfully running on the port 7777.....");
});

