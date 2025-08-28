const express = require("express");
const authRouter = require("./routes/authRouter");
const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/userRouter");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const port = 5010;

dotenv.config();

/* var whitelist = [process.env.ORIGIN_URL,"http://localhost:5000"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
}; */
app.use(cors());
app.use(express.json());
app.use(authRouter);
app.use(indexRouter);
app.use(userRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to DB:", err));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
