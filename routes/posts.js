const express = require('express')
const Post = require('../models/Post')
const FormData = require('../helpers/FormData')

const router = express.Router()

/* GET */
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (e) {
        console.log(e)
        res.status(500).json("Error")
    }
})

router.get('/:userId', async (req, res) => {
    try {
        const posts = await Post.find({ "ownerId": +req.params.userId })
        res.json(posts)
    } catch (e) {
        console.log(e)
        res.status(500).json("Error")
    }
})

/* POST */
router.post('/', async (req, res) => {
    try {
        const post = new Post({
            ownerId: req.body.ownerId,
            text: req.body.text,
            postedOn: FormData(new Date())
        })
        const data = await post.save()
        res.status(200).json(post)
    } catch (e) {
        console.log(e)
        res.status(500).json("Error")
    }
})

/* UPDATE */
router.patch('/:postId', async (req, res) => {
    try {
         await Post.update({ _id: req.params.postId },{ $set: {text: req.body.text, editedOn: FormData(new Date())}})
         res.status(200).json({
             "message": "post has been successfully updated",
             "updatedText": req.body.text,
             "editedOn": FormData(new Date())
         })
    } catch (e) {
        console.log(e)
        res.status(500).json("Error")
    }
})

/* DELETE */
router.delete('/:postId', async (req, res) => {
    try {
        await Post.remove({ _id: req.params.postId })
        res.json({ "message": "post has been successfully removed" })
    } catch (e) {
        console.log(e)
        res.status(500).json("Error")
    }
})

module.exports = router