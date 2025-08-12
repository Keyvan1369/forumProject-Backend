const express = require('express')
const authRouter = require('./routes/authRouter')
const indexRouter = require('./routes/indexRouter')
const { json } = require('body-parser')
const app = express()
const port = 5010

app.use(express.json())
app.use(authRouter)
app.use(indexRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
