const bcrypt = require("bcrypt");

const generatHashPass = (password, saltRounds = 10) => {
  return bcrypt.hashSync(password, saltRounds);
};

const verifyPass = (password,hashPass) =>{
    return bcrypt.compareSync(password,hashPass)
}


module.exports = {
  generatHashPass,
  verifyPass
};
