const express = require('express')
const { json } = require('body-parser')
const authRouter = require('./routes/authRouter')
const indexRouter = require('./routes/indexRouter')
const userRouter = require('./routes/userRouter')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 5010

app.use(express.json())
app.use(authRouter)
app.use(indexRouter)
app.use(userRouter)
mongoose.connect("mongodb+srv://keyvan:yRCEqJAhNS8g0GxL@cluster0.0qpal2c.mongodb.net/Forum_project")
.catch((erro)=>console.log("error db: "+erro))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
