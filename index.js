require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const passportMiddleware = require("./middleware/passport");
const path = require("path");

const app = express();

const routesSetUp = require("./routes/index.routes");

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "build")));

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.dt1dc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected to MONGO ATLAS"))
  .catch((err) => console.log(err));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(flash());

passportMiddleware();

app.use(passport.initialize());
app.use(passport.session());

routesSetUp(app);

app.use((req, res) =>
  res.sendFile(path.join(__dirname, "build", "index.html"))
);

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
