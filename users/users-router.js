const express = require('express');

const db = require('../data/helpers/userDb');

const router = express.Router();

// GET users

router.get('/', (req, res) => {
    db.get()
        .then(users => {
            res.status(201).json(users)
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'Users information could not be retrieved.' })
        })
})

// GET user by ID

router.get('/:id', (req, res) => {
    const userId = req.params.id;

    db.getById(userId)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            res.status(404).json({ error: err, message: 'The user with the specified ID does not exist' })
        })
})

// GET user posts

router.get('/:id/posts', (req, res) => {
    const userId = req.params.id;

    db.getUserPosts(userId)
        .then(posts => {
            res.status(201).json(posts)
        })
        .catch(err => {
            res.status(404).json({ error: err, message: 'Cannot retrieve posts.' })
        })
})

// POST (add new user)

router.post('/', (req, res) => {
    const newUser = req.body;

    db.insert(newUser)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'There was an error adding the user to the database.' })
        })
})

module.exports = router;