const User = require("../models/user");
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
  const user =await User.findOne({email,password})
  if(!user){
     return res.status(400).json({ message: "email or password is not correct" });
  }
  
  const token = setToken({email,username:user.username,role:user.role})
  res.status(200).send({token});
};

const signup = async(req, res) => {
  /*   console.log(req.query);
  console.log(req.body.pass); */
  let { username, email, password } = req.body; //change const to let

  email = email.trim().toLowerCase();
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!password) {
    return res.status(400).send("password is required");
  } else if (!username) {
    return res.status(400).json({ message: "name is required" });
  } else if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }
  const user= User({
    username,
    email,
    password,
    role:"user"
  })
  user.save()

  res.status(201).send({
    message:"User created successful",
    user
  });
};

const forgotPassword = (req, res) => {
  res.send("forgotPassword Res");
};

module.exports = {
  login,
  signup,
  forgotPassword,
};
