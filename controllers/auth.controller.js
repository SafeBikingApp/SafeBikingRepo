const UserModel = require("../models/UserModel");
require("dotenv").config();
const bcrypt = require("bcrypt");

const authenticateUser = async (req, email, password, done) => {
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return done(null, false, { message: "User not found" });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return done(null, false, { message: "Wrong Password" });
    }
    delete user.password;
    return done(null, user, { message: "Logged in Successfully" });
  } catch (error) {
    return done(error);
  }
};

module.exports = authenticateUser;
