const express = require('express');

const server = express();

// Import Routers

const usersRouter = require('./users/users-router');
const postsRouter = require('./posts/posts-router');

// Global Middleware

server.use(express.json());

// Configure Routes

server.get('/', (req, res) => {
    res.send('Hi there!');
})

server.use('/api/users', usersRouter);
server.use('/api/posts', postsRouter);

module.exports = server;