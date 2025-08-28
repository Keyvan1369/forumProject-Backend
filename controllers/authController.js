const User = require("../models/user");
const { generatHashPass, verifyPass } = require("../utils/hashPassword");
const { setToken } = require("../utils/jwt");

const login = async(req, res) => {
  let { email, password } = req.body;

  email = email.trim().toLowerCase();
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!password) {
    return res.status(400).send("password is required");
  } else if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }
  const user =await User.findOne({email})
  if(!user){
     return res.status(400).json({ message: "email or password is not correct" });
  }
  const verifypassword = verifyPass(password,user.password)
  if (!verifypassword){
     return res.status(400).json({ message: "email or password is not correct" });
    
  }
  const token = setToken({email,username:user.username,role:user.role})
  res.status(200).send({token,user});
};

const signup = async(req, res) => {
  /*   console.log(req.query);
  console.log(req.body.pass); */
  let { username, email, password } = req.body; //change const to let

  email = email.trim().toLowerCase();
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!password) {
    return res.status(400).send("password is required");
  }  if (!username) {
    return res.status(400).json({ message: "name is required" });
  }  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }
  const user1 = await User.findOne({email})
  if (user1) {
    return res.status(400).json({ message: "email already exist" });
  }
  const user2 = await User.findOne({username})
  if (user2) {
    return res.status(400).json({ message: "username already exist" });
  }

  try {
      const hashPass = generatHashPass(password)
  const user= await User({
    username,
    email,
    password:hashPass,
    role:"user"
  })
await  user.save()
res.status(201).send({
    message:"User created successful",
    user
  });
    
  } catch (error) {
    return res.status(500).json({message:error.message});
    
    
  }


  
};

const forgotPassword = (req, res) => {
  res.send("forgotPassword Res");
};

module.exports = {
  login,
  signup,
  forgotPassword,
};
