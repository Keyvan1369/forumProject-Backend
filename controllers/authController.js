const User = require("../models/user");

const login = (req, res) => {
  let { email, password } = req.body;

  email = email.trim().toLowerCase();
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!password) {
    return res.status(400).send("password is required");
  } else if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }
  res.status(200).send("login Res2");
};

const signup = async(req, res) => {
  /*   console.log(req.query);
  console.log(req.body.pass); */
  let { name, email, password } = req.body; //change const to let

  email = email.trim().toLowerCase();
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!password) {
    return res.status(400).send("password is required");
  } else if (!name) {
    return res.status(400).json({ message: "name is required" });
  } else if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }
  const user= User({
    name,
    email,
    password
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
