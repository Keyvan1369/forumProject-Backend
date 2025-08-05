const login = (req, res) => {
  res.send("Login Res");
};

const signup = (req, res) => {
  res.send("signup Res");
};

const forgotPassword = (req, res) => {
  res.send("forgotPassword Res");
};



module.exports ={
    login,
    signup,
    forgotPassword
}
