const mongoose = require('mongoose');

const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://ranveerrajput351:QSBG4gflRrYwR6Qs@cluster0.xg4pm.mongodb.net/devCircle");
}

module.exports = {connectDB};





