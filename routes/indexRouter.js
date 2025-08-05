
const express = require("express")
const indexRouter= express.Router()

const { index, NotFound } = require("../controllers/indexController");


indexRouter.get("/" , index)
indexRouter.get("/notFound" , NotFound)


module.exports= indexRouter