const express = require('express');

const db = require('../data/helpers/userDb');

const router = express.Router();

// GET users

router.get('/', (req, res) => {
    db.get()
        .then(users => {
            res.json(users)
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
            res.json(user)
        })
        .catch(err => {
            res.status(404).json({ error: err, message: 'The user with the specified ID does not exist' })
        })
})

module.exports = router;