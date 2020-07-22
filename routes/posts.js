const express = require('express')
const Post = require('../models/Post')

const router = express.Router()

router.get('/', async (req, res) => {
    const posts = await Post.find((e)=> {
        if(e) console.log(e)
    })
    res.json(posts)
})

router.post('/', async (req, res) => {
    
    try {
        console.log('this block of code has been run')
        const post = new Post({
            ownerId: req.body.ownerId,
            text: req.body.text
        })
        const data = await post.save()
        res.status(200).json({"postId":post._id})
    } catch (e) {
        console.log(e)
        res.status(500).json("Error")
    }
})

module.exports = router