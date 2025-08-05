const express= require("express")
const { login, signup, forgotPassword } = require("../controllers/authController")
const authRouter = express.Router()


authRouter.get("/login", login)
authRouter.get("/signup", signup)
authRouter.get("/forgotPassword", forgotPassword)


module.exports= authRouter