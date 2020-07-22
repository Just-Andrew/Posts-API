const express = require('express')
const Post = require('../models/Post')

const router = express.Router()

router.get('/', (req, res) => {
    res.send({ a: 5, b: 2 })
})

router.post('/', async (req, res) => {
    console.log(req.body)
    const post = new Post({
        ownerId: req.body.ownerId,
        text: req.body.text
    })
    try {
        console.log('this block of code has been run')
        const data = await post.save()
        res.json(data)
        console.log('completed without errors')
    } catch (e) {
        console.log(e)
    }
})

module.exports = router