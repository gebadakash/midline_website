const express = require("express");
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'jtavlssx_midlinesmedia'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId);
});

// MySQL Schema
const createUserTable = `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255),
    subject VARCHAR(255),
    message TEXT,
    contact VARCHAR(255),
    work VARCHAR(255)
)`;

connection.query(createUserTable, (err, results) => {
    if (err) throw err;
    console.log("Users table created successfully");
});

// Endpoint to save user data
app.post('/save', (req, res) => {
    const { username, email, subject, message, contact, work } = req.body;
    const insertUserQuery = `INSERT INTO users (username, email, subject, message, contact, work) VALUES (?, ?, ?, ?, ?, ?)`;
    connection.query(insertUserQuery, [username, email, subject, message, contact, work], (err, results) => {
        if (err) {
            console.error('Error saving user data: ' + err);
            res.status(500).json({ error: 'Error saving user data' });
            return;
        }
        res.json({ message: 'User data saved successfully' });
    });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
