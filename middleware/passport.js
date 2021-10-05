require("dotenv").config();
const passport = require("passport");
const UserModel = require("../models/UserModel");
const LocalStrategy = require("passport-local").Strategy;
const authenticateUser = require("../controllers/auth.controller");

const passportMiddleware = () => {
  passport.serializeUser((user, cb) => {
    cb(null, user._id);
  });

  passport.deserializeUser((id, cb) => {
    UserModel.findById(id)
      .then((user) => {
        cb(null, user);
      })
      .catch((err) => {
        cb(err);
      });
  });

  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
      },
      authenticateUser
    )
  );
};

module.exports = passportMiddleware;
