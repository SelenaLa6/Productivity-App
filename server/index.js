const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

app.get('/', (req, res) => {
    res.send('<p>Hello, World!</p>');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});