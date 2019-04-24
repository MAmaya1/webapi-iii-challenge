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

module.exports = router;