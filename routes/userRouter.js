
const express = require("express")
const userRouter= express.Router()

const { getUser, getSingleUser, createUser, updateUser, deleteUser } = require("../controllers/userController");


userRouter.get("/users" , getUser)
userRouter.get("/users/:id" , getSingleUser)
userRouter.post("/users" , createUser) 
userRouter.put("/users/:id" , updateUser) 
userRouter.delete("/users/:id" , deleteUser) 



module.exports= userRouter 