const User = require("../models/user.model");

//normal signup using name, email, password
const signUp = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (password != confirmPassword) {
      throw { message: "Passwords do not match" };
    }
    const userData = await User.findOne({ email: email, type: "client" });
    if (userData) {
      throw { message: "The user is already present" };
    }
    const createUser = await User.create({
      name: name,
      email: email,
      password: password,
      type: "client",
      isVerified: false,
    });
    return res.status(200).json({
      success: true,
      message: "User created successfully",
      data: createUser,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ error: e });
  }
};

//normal sign in
const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await User.findOne({
      email: email,
      password: password,
      type: "client",
    });
    if (!userData) {
      throw { message: "Please register first" };
    }

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: userData,
    });
  } catch (e) {
    return res.status(400).send({ error: e });
  }
};

module.exports = {
  signUp,
  signIn,
};
