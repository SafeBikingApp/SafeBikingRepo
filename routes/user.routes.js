const UserRouter = require("express").Router();
const User = require("../controllers/user.controller");

UserRouter.post("/sign-up", User.addUser);

UserRouter.put("/:id/edit", User.editUser);

UserRouter.delete("/:id/delete", User.deleteUser);

module.exports = UserRouter;