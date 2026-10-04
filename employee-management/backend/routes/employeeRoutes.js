const express = require("express");
const router = express.Router();

const db = require("../config/db");


// GET - All Employees
router.get("/", (req, res) => {
    const sql = "SELECT * FROM employees";

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Database error",
                error: err.message,
            });
        }

        res.status(200).json(result);
    });
});


// POST - Create Employee
router.post("/", (req, res) => {
    console.log("BODY:", req.body);

    const { name, email, salary, department } = req.body || {};

    if (!name || !email) {
        return res.status(400).json({
            message: "Name and email are required",
        });
    }

    const sql = `
        INSERT INTO employees (name, email, salary, department)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, email, salary, department],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "Database error",
                    error: err.message,
                });
            }

            res.status(201).json({
                message: "Employee created successfully",
                employeeId: result.insertId,
            });
        }
    );
});


module.exports = router;