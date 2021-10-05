const authRouter = require("./auth.routes");
const userRouter = require("./user.routes");
const issueRouter = require("./issue.routes");

const routesSetUp = (app) => {
  app.use("/api/auth", authRouter);
  app.use("/api/users", userRouter);
  app.use("/api/issues", issueRouter);
};

module.exports = routesSetUp;
