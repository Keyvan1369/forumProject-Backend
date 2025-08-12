const getUser = (req, res) => {
  console.log(req.query);

  res.status(200).send("user List");
};
const getSingleUser = (req, res) => {
  const id = req.params.id;

  console.log(req.params);

  res.status(200).send("Single List");
};
const createUser = (req, res) => {
  console.log(req.body);

  res.status(200).send("create List");
};
const updateUser = (req, res) => {
  console.log(req.params);
  console.log(req.body);

  res.status(200).send("update List");
};
const deleteUser = (req, res) => {
  console.log(req.params);

  res.status(200).send("delete List");
};
module.exports = {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
