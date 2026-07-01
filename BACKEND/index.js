require("dotenv").config();

const mongoose = require("mongoose");

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.log(err));

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String,
    city: String,
});

const Student = mongoose.model("Student", studentSchema);

const students = [
    {
        name: "Sachin",
        age: 22,
        course: "MERN",
        city: "Hyderabad",
    },
    {
        name: "Rahul",
        age: 21,
        course: "Java",
        city: "Delhi",
    },
    {
        name: "Amit",
        age: 23,
        course: "Python",
        city: "Mumbai",
    },
    {
        name: "Rohit",
        age: 22,
        course: "MERN",
        city: "Bhopal",
    },
    {
        name: "Ankit",
        age: 20,
        course: "React",
        city: "Indore",
    },
    {
        name: "Priya",
        age: 21,
        course: "NodeJS",
        city: "Pune",
    },
    {
        name: "Neha",
        age: 22,
        course: "Java",
        city: "Ranchi",
    },
    {
        name: "Karan",
        age: 23,
        course: "MERN",
        city: "Lucknow",
    },
    {
        name: "Pooja",
        age: 20,
        course: "Python",
        city: "Patna",
    },
    {
        name: "Vikas",
        age: 24,
        course: "Full Stack",
        city: "Jaipur",
    },
];

const insertData = async () => {
    try {
        await Student.insertMany(students);
        console.log("✅ 10 Students Inserted Successfully");
        mongoose.connection.close();
    } catch (error) {
        console.log(error);
    }
};

insertData();

const getStudents = async () => {
    const students = await Student.find();
    console.log(students);
    mongoose.connection.close();
};

getStudents();