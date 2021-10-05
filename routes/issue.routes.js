const IssueRouter = require("express").Router();
const Issue = require("../controllers/issue.controller");

// get all issues
IssueRouter.get("/", Issue.findAll);
// create a new issue
IssueRouter.post("/create", Issue.createNew);
// get all the comment of a given issue - /:id = issue_id
IssueRouter.get("/:id/comments", Issue.allComments);
// get a single issue by id
IssueRouter.get("/:id",Issue.findIssue)
// add new comment inside a given issue - /:id = issue_id
IssueRouter.post("/:id/comments/new", Issue.newComment);
// vote an issue id: issue_id - :vote kewords [upVote,downVote]
IssueRouter.post("/:id/:vote", Issue.vote);

module.exports = IssueRouter;
