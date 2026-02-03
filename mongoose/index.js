const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/TestDB")

    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));
    
/* schema design*/ 
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
})
/* model */
const User = mongoose.model("User", userSchema)
/* create document*/ 
const user1 = new User({
    name: "Sachin",
    age: 22,
    email: "sachin@gmail.com"
});
/* ===== INSERT MANY ===== */
User.insertMany([
    { name: "Sachin", age: 22, email: "sachin@gmail.com" },
    { name: "Rahul", age: 24, email: "rahul@gmail.com" },
    { name: "Amit", age: 26, email: "amit@gmail.com" },
    { name: "Sakshi", age: 23, email: "sakshi@gmail.com" },
    { name: "sonu kumar", age: 16, email: "amit@gmail.com" }

])
    .then(() => console.log("Multiple Users Saved Successfully"))
    .catch(err => console.log(err));

/* update many*/ 
User.updateMany(
    { name: "Sachin" },          // condition: jinko update karna hai
    { $set: { age: 20 } }        // new value
)
    .then(res => console.log("Updated Many Successfully:", res.modifiedCount))
    .catch(err => console.log(err));

/* read all data to verify */
User.find()
    .then(data => console.log(data))
    .catch(err => console.log(err));

/*
user1.save()
    .then(() => console.log("Data Saved"))
    .catch(err => console.log(err));*/

    /*read all the data*/ 
    
User.find()
    .then(data => console.log(data))
    .catch(err => console.log(err))

    /*read one*/ 

    
User.findOne({ name: "Sachin" })
    .then(data => console.log(data))


    /* update*/ 
    
    
User.updateOne(
    { name: "Sachin" },
    { $set: { age: 25 } }
)
    .then(() => console.log("Updated Successfully"))
    
   
    
/* delete*/


User.deleteOne({ name: "Sachin" })
    .then(() => console.log("Deleted Successfully"));


/* all data seen*/ 
User.find()
    .then(data => console.log("All Users:", data))
    .catch(err => console.log(err));
