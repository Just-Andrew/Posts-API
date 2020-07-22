const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv/config")
const postsRouter = require("./routes/posts")

const app = express()

/* middlewares */
app.use(cors())
app.use(express.json({ extended: true }))
app.use("/posts", postsRouter)

/* connection to DB */
async function start() {
  try {
    await mongoose.connect(
      process.env.DB_connection,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    )
    app.listen(3001, () => console.log(`App has been started on port 3001...`));
  } catch (error) {
    console.log("server Err", error.message)
    process.exit(1)
  }
}

start();
