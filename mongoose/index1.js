const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/TestDB")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

/* schema */
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

/* model */
const Student = mongoose.model("Student", studentSchema);

/* CREATE */
const student = new Student({
    name: "Amit",
    age: 22,
    course: "BTech"
});

student.save()
    .then(() => {
        console.log("Student Saved");

        /* UPDATE */
        return Student.updateOne(
            { name: "Amit" },
            { $set: { age: 25 } }
        );
    })
    .then(() => {
        console.log("Student Updated");

        /* DELETE */
        return Student.deleteOne({ name: "Amit" });
    })
    .then(() => {
        console.log("Student Deleted");

        mongoose.connection.close();   // ✅ only here
    })
    .catch(err => console.log(err));
