const express = require('express');
const app = express()
const port = 3000

const students = [
    {
        id: 101,
        name: 'sachin kumar',
        age: 23, course: 'express'
    },
    {
         
        id: 102,
        name: 'sonali kumari',
        age: 24,
        course: 'react'
    
    }
    ,
    {

        id: 103,
        name: 'kajal kumari',
        age: 34,
        course: 'node js'

    },
    {

        id: 104,
        name: 'afjal khan',
        age: 20,
        course: 'next js'

    },
    {

        id: 105,
        name: 'arif khan',
        age: 30,
        course: 'html'

    }
];

app.get('/', (req, res) => {
    res.send('Student Management System')
})

app.get('/students/:id', (req, res) => {
    const id = Number(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    res.json(student);
});



app.listen(port, () => {
    console.log(`starting http://localhost:${port}`);
    
})

