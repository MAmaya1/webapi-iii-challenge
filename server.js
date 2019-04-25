const express = require('express');
const cors = require('cors');

const server = express();

// Import Routers

const usersRouter = require('./users/users-router');
const postsRouter = require('./posts/posts-router');

// Global Middleware

server.use(express.json());
server.use(cors());

// Configure Routes

server.get('/', (req, res) => {
    res.json({message: process.env.MOTD });
})

server.use('/api/users', usersRouter);
server.use('/api/posts', postsRouter);

module.exports = server;