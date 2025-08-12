
const express = require("express")
const userRouter= express.Router()

const { getUser, getSingleUser, createUser, updateUser, deleteUser } = require("../controllers/userController");


userRouter.get("/user" , getUser)
userRouter.get("/user/oneUser" , getSingleUser)
userRouter.post("/user" , createUser) 
userRouter.put("/user" , updateUser) 
userRouter.delete("/user" , deleteUser) 



module.exports= userRouter 