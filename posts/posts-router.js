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

// GET post by ID

router.get('/:id', (req, res) => {
    const postId = req.params.id;

    db.getById(postId)
        .then(post => {
            res.status(201).json(post)
        })
        .catch(err => {
            res.status(404).json({ error: err, message: 'The post with the specified ID does not exist.' })
        })
})

// POST (add new post)

router.post('/', (req, res) => {
    const newPost = req.body;

    if (!newPost.text) {
        res.status(400).json({ errorMessage: 'Your post needs some text.' })
    }

    db.insert(newPost)
        .then(post => {
            res.status(201).json(post)
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'Could not add new post.' })
        })
})

// PUT (edit post)

router.put('/:id', (req, res) => {
    const postId = req.params.id;
    const updatedPost = req.body;

    if (!updatedPost.text) {
        res.status(400).json({ errorMessage: 'Your post needs text!' })
    }

    db.getById(postId)
        .then(post => {
            if (post) {
                db.update(postId, updatedPost)
                    .then(post => {
                        res.status(201).json(post)
                    })
                    .catch(err => {
                        res.status(500).json({ error: err, message: 'Could not update post.' })
                    })
            } else {
                res.status(404).json({ errorMessage: 'A post with that ID does not exist' })
            }
        })
})

// DELETE post

router.delete('/:id', (req, res) => {
    const postId = req.params.id;

    db.getById(postId)
        .then(post => {
            if (post) {
                db.remove(postId)
                    .then(() => {
                        res.status(200).end();
                    })
                    .catch(err => {
                        res.status(500).json({ error: err, message: 'This post could not be deleted.' })
                    })
            } else {
                res.status(404).json({ errorMessage: 'A post with that ID does not exist.' })
            }
        })
})

module.exports = router;