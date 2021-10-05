const authRouter = require("express").Router();
const User = require("../controllers/user.controller");
const passport = require("passport");

const isUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.send({ message: "Please log-in" });
  }
};

// Route to check if the user is logged in
authRouter.get("/verify", isUser, (req, res) => {
  res.send(req.user);
});

// Sending errors to client
authRouter.get("/errors", (req, res) => {
  res.send({ message: req.flash("error") });
});

// POST to Log-in
authRouter.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/api/auth/verify",
    failureRedirect: "/api/auth/errors",
    failureFlash: true,
    passReqToCallback: true,
  })
);

// POST to Log-out
authRouter.post("/log-out", (req, res) => {
  req.logOut();
  res.json({ message: "Succesfully logged out" });
  //   res.redirect("/api/auth/verify");
});

authRouter.get("/verifyAdmin", (req, res) => {
  res.send(req.user);
});

module.exports = authRouter;
