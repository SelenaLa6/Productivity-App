const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

const home = require("./routes/Home.js");
app.use('/home', home);

const schedule = require("./routes/Schedule.js");
app.use('/schedule', schedule);

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
    console.log(`Database connected: ${process.env.DB_HOST}`);
});