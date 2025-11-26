const express = require('express')
const router = express.Router()
const posts = require('../assets/posts.js')


// index
router.get('/', (req, res) => {
    res.json(posts)
})

// show
router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    const thisPost = posts.find(post => post.id === id)
    // res.send(`Show the post with id: ${req.params.id}`)

    if (!thisPost) {
        res.send(`The post with id: ${req.params.id} doesn't exist`)
    }

    res.json(thisPost)
})

// store
router.post('/', (req, res) => {
    res.send('Store a new post here')
})

// update
router.put('/:id', (req, res) => {
    res.send(`Update the post with id: ${req.params.id}`)
})

// modify (optional)
router.patch('/:id', (req, res) => {
    res.send(`Modify the post with id: ${req.params.id}`)
})

// destroy
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    const thisPost = posts.find(post => post.id === id)

    if (!thisPost) {
        return res.status(404).json({
            error: true,
            message: 'Post not found!'
        })
    }

    posts.splice(posts.indexOf(thisPost), 1)

    res.sendStatus(204)
})

module.exports = router