const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Pradeep@123",
    database: "employee_db",
});

db.connect((err) => {
    if (err) {
        console.log("❌ MySQL connection failed:", err.message);
        return;
    }

    console.log("✅ MySQL connected successfully");
});

module.exports = db;