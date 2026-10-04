require("dotenv").config();

const express = require("express");
const db = require("./config/db");

const app = express();

app.use(express.json());

const employeeRoutes = require("./routes/employeeRoutes");

app.use("/api/employees", employeeRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "API is working",
    });
});

app.listen(5000, () => {
    console.log("🚀 Server running on port 5000");
});