const express = require('express');
const app = express();

app.use(express.json());

// Status route
app.get('/status', (req, res) => {
    res.status(200).json({ status: 'Ok' });
});

// Greet route
app.get('/greet', (req, res) => {
    const { name, food } = req.query;
    if (!name || !food) {
        return res.status(400).json({ message: 'Name and food are required' });
    }
    res.status(200).json({ message: `hello ${name} would you like a ${food}` });
});

// Register route
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username) {
        return res.status(400).json({ message: 'username is missing' });
    }
    if (!password) {
        return res.status(400).json({ message: 'password is missing' });
    }
    res.status(200).json({ message: 'Registration successful' });
});

module.exports = app;
