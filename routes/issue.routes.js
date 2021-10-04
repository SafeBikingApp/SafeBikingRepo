const IssueRouter = require("express").Router();
const Issue = require("../controllers/issue.controller");

IssueRouter.get("/", Issue.findAll);

IssueRouter.post("/create", Issue.createNew);

IssueRouter.get("/:id/comments", Issue.allComments);

IssueRouter.post("/:id/comments/new", Issue.newComment);

module.exports = IssueRouter;
