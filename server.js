const express = require("express");
const { json } = require("body-parser");
const authRouter = require("./routes/authRouter");
const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/userRouter");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const app = express();
const port = 5010;


app.use(express.json());
app.use(authRouter);
app.use(indexRouter);
app.use(userRouter);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to DB:", err));
 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
