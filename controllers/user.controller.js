const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const userJoiSchema = require("../utils/validation");

const addUser = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    // checking if the email exist
    const userExist = await UserModel.find({ email });
    if (userExist.length) await Promise.reject("USER_ALREADY_EXIST");
    // TODO JOI VALIDATION
    // const { error:validationError } = await userJoiSchema.validateAsync(req.body);

    // // console.log("value", value);
    // console.log("error", validationError);
    // if it doesn't create a new user
    const newUser = await UserModel.create({
      email,
      username,
      password: bcrypt.hashSync(password, 10),
    });

    res.status(200).json({ message: "User created succefully" });
  } catch (error) {
    console.log(error);
    if (error === "USER_ALREADY_EXIST") {
      res.status(403).json({ message: "Sorry this user already exists" });
    } else {
      res.status(500).json({ message: "Sorry somthing went wrong" });
    }
  }
};

const editUser = async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  console.log(req.body);

  try {
    //   check if user already exists
    const userExist = await UserModel.findById({ _id: id });
    console.log(userExist);
    if (!userExist) await Promise.reject("USER_NOT_FOUND");
    // check if email already exists
    const emailExist = await UserModel.findOne({ email });
    if (emailExist) await Promise.reject("THIS_EMAIL_ALREADY_EXIST");
    let toUpdate = req.body;
    // if user is changing the password it needs to be hashed
    if (password)
      toUpdate = { ...req.body, password: bcrypt.hashSync(password, 10) };
    // updating the user
    const updatedUser = await UserModel.findByIdAndUpdate(id, toUpdate, {
      new: true,
    });

    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    if (error === "USER_NOT_FOUND") {
      res.status(403).json({ message: "Sorry user not found" });
    } else if (error === "THIS_EMAIL_ALREADY_EXIST") {
      res.status(403).json({ message: "This email is already taken" });
    } else {
      res.status(500).json({ message: "Sorry something went wrong" });
    }
  }
};

module.exports = { addUser, editUser };
