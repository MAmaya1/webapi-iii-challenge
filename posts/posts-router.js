const express = require('express');

const db = require('../data/helpers/postDb');

const router = express.Router();

// GET posts

router.get('/', (req, res) => {
    db.get()
        .then(posts => {
            res.status(201).json(posts)
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'Could not retrieve posts.' })
        })
})

module.exports = router;