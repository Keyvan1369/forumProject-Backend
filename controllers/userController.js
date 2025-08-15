const { message } = require("statuses");
const User = require("../models/user");
const { sync } = require("touch");

const getUser = async (req, res) => {
  const { sort, search, filter } = req.query;
  try {
    userList = [];
    if (sort) {
      userList = await User.find({ name: sort });
    } else if (search) {
      userList = await User.find({ name: search });
    } else if (filter) {
      userList = await User.find({ name: filter });
    } else {
      const userList = await User.find();
    }

    res.status(200).json({ userList });
  } catch (error) {
    return res.status(500).send({ message: "Interal server Error" + error });
  }
};
const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send({ message: "not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    return res.status(500).send({ message: "Interal server Error" + error });
  }
};
const createUser = async (req, res) => {
  let { name, email, password } = req.body;

  email = email.trim().toLowerCase();
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!password) {
    return res.status(400).send("password is required");
  } else if (!name) {
    return res.status(400).json({ message: "name is required" });
  } else if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }
  try {
    const user = User({ name, email, password });
    await user.save();

    res.status(201).send("User is created successfully");
  } catch (error) {
    return res.status(500).send({ message: "Interal server Error" + error });
  }
};
const updateUser = async (req, res) => {
  const id = req.params.id;

  let { name, email, password } = req.body;

  email = email.trim().toLowerCase();
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!password) {
    return res.status(400).send("password is required");
  } else if (!name) {
    return res.status(400).json({ message: "name is required" });
  } else if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }
  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        password,
      },
      { new: true }
    );
    if (!user) {
      return res.status(404).send({ message: "not found" });
    }

    res.status(201).send("User is updated successfully");
  } catch (error) {
    return res.status(500).send({ message: "Interal server Error" + error });
  }
};
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).send({ message: "not found" });
    }

    res.status(200).send({ message: "user deleted successful" });
  } catch (error) {
    return res.status(500).send({ message: "Interal server Error" + error });
  }

  res.status(200).send("delete List");
};
module.exports = {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
