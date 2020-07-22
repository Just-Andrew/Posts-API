const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')
const postsRouter = require('./routes/posts')

const app = express()

/* middlewares */
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/posts', postsRouter)

/* connection to DB */
async function start() {
    await mongoose.connect(/* process.env.DB_connection */ 'DB_connection=mongodb+srv://andrew:passw0rd@cluster0.3fygq.mongodb.net/posts',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        () => {
            console.log('successfully connected')
        })
    var db = mongoose.connection
    db.on('error', () => { console.log('erroooor') })
    db.once('open', () => { console.log('openned') })

    /* sets the port my API will use */
    const port = 3001
    app.listen(port, () => {
        console.log('server has been run')
    })


}

start()