const express = require('express');

const db = require('../data/helpers/userDb');

const router = express.Router();

// Custom Middleware

function caseChecker(req, res, next) {
    const userName = req.body.name;

    if (userName) {
        req.body.name = userName.charAt(0).toUpperCase() + userName.slice(1);
    }

    next();
}

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

router.post('/', caseChecker, (req, res) => {
    const newUser = req.body;

    if (!newUser.name) {
        res.status(400).json({ errorMessage: 'Your user needs a name.' })
    }

    db.insert(newUser)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'There was an error adding the user to the database.' })
        })
})

// PUT (update user)

router.put('/:id', caseChecker, (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;

    db.getById(userId)
        .then(user => {
            if (user) {
                db.update(userId, updatedUser)
                    .then(user => {
                        res.status(201).json(user)
                    })
                    .catch(err => {
                        res.status(500).json({ error: err, message: 'Could not update user.' })
                    })
            } else {
                res.status(404).json({ errorMessage: 'A user with that ID could not be found.' })
            }
        })
})

// DELETE user

router.delete('/:id', (req, res) => {
    const userId = req.params.id;

    db.getById(userId)
        .then(user => {
            if (user) {
                db.remove(userId)
                    .then(() => {
                        res.status(200).end();
                    })
                    .catch(err => {
                        res.status(500).json({ error: err, message: 'This user could not be deleted.' })
                    })
            } else {
                res.status(404).json({ errorMessage: 'A user with that ID does not exist.' })
            }
        })
})

module.exports = router;