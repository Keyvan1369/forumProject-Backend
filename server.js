const express = require('express')
const authRouter = require('./routes/authRouter')
const indexRouter = require('./routes/indexRouter')
const app = express()
const port = 5000

app.use(authRouter)
app.use(indexRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
