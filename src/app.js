const express = require("express");
const app = express();
const { connectDB } = require("./config/database");
// const {adminAuth} = require("./middleware/auth");
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User Created Successfully");
  } catch (err) {
    res.status(400).send("Failes to add user in the DB");
  }
});

//getting an user on the basis on email id
app.get("/user", async (req, res) => {
  const emailId = req.body.emailId;
  try {
    // Is we want to find the user we pass it like this
    const users = await User.find({ emailId: emailId });
    console.log("Users-->", users);
    if (users.length > 0) {
      res.send(users);
    } else {
      throw new Error();
    }
  } catch (err) {
    res.status(400).send("No record found!!!");
  }
});

//Feed API - Get all the data from the DB
app.get("/feed", async (req, res) => {
  try {
    //when we keep these filter query empty object then it will fetch all the records
    const users = await User.find({});
    if (users.length > 0) {
      res.send(users);
    } else {
      throw new Error();
    }
  } catch (err) {
    res.status(400).send("No users found!!!");
  }
});

//fetch user by ID
app.get("/userid", async(req,res)=>{
    const userId = req.body.userId;
    console.log(userId);
    try{
        const user = await User.find({_id : userId});
        if(user.length > 0){
            res.send(user);
        }else{
            throw new Error;
        }
    }catch(err){
        res.status(400).send("User Id is not present!!!");
    }
})

//delete record on the basis of id
app.delete("/users", async(req,res)=>{
    const userId = req.body.userId;
    console.log(userId);
    try{
        const user = await User.findByIdAndDelete({_id : userId});
        res.send("User Deleted Successfully!!!")
    }catch(err){
        res.status(400).send("There is problem in deletion!!!");
    }
})


//Update the record
app.patch("/users", async(req,res)=>{
    const {data,userId} = req.body.data;
    console.log("Data--->", data, userId)
    try{
        const users = await User.findByIdAndUpdate(userId,data)
        res.send({"Updated User" : users});
    }catch(err){
        res.status(400).send("Failed to update the user !!!");
    }
})

connectDB()
  .then(() => {
    console.log("Data Base Connected Sucesssfully");
    app.listen("7777", () => {
      console.log("Serve is successfully listening on port 7777");
    });
  })
  .catch(() => {
    console.log("Database can not be connectded");
  });
