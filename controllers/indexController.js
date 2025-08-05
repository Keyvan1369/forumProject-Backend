const index = (req, res)=>  {res.send("Home")}

const NotFound = (req, res)=>  {res.send("NotFound")}


module.exports ={
    index,
    NotFound
}