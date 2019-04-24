const express = require('express');

const server = express();

const usersRouter = require('./users/users-router');

// Global Middleware

server.use(express.json());

// Configure Routes

server.get('/', (req, res) => {
    res.send('Hi there!');
})

server.use('/api/users', usersRouter);

module.exports = server;