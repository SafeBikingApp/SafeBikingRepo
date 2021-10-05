const IssueModel = require("../models/IssueModel");
const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");

const createNew = async (req, res) => {
  const { coordinates, user_id, comments, upVotes, downVotes, pictures, type } =
    req.body;
  try {
    const newIssue = await IssueModel.create({
      coordinates,
      user_id,
      type,
      comments,
      upVotes,
      downVotes,
      reportedOn: Date.now(),
      pictures,
    });
    console.log(req.body);
    res.status(200).json({ message: " Issue created succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Sorry somthing went wrong" });
  }
};

const findAll = async (req, res) => {
  try {
    const allIssues = await IssueModel.find({});
    console.log(allIssues);
    res.status(200).json(allIssues);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Sorry something went wrong" });
  }
};

const findIssue = async (req, res, next) => {
    const { id } = req.params;
  try {
    const foundIssue = await IssueModel.findById({ _id: id });
    if (!foundIssue) await Promise.reject("ISSUE_NOT_FOUND");
    res.json(foundIssue);
  } catch (error) {
    console.log(error);
    if (error === "ISSUE_NOT_FOUND") {
      res.json({ message: "Sorry we couldn't find this issue" });
    } else {
      res.json({ message: "Sorry something went wrong" });
    }
  }

};

const allComments = async (req, res) => {
  const { id: issue_id } = req.params;
  try {
    const foundIssue = await IssueModel.findById(issue_id);
    if (!foundIssue) await Promise.reject("ISSUE_NOT_FOUND");
    res.json(foundIssue.comments);
  } catch (error) {
    console.log(error);
    if (error === "ISSUE_NOT_FOUND") {
      res.status(403).json({ message: "Sorry we couldn't find this issue" });
    } else {
      res.status(500).json({ message: "Sorry something went wrong" });
    }
  }
};

const newComment = async (req, res) => {
  const { id: issue_id } = req.params;
  const { user_id, message } = req.body;
  console.log(issue_id);
  try {
    //   adding comment to the issue document
    const updatedIssue = await IssueModel.findByIdAndUpdate(
      issue_id,
      { $push: { comments: { user_id, message, date: Date.now() } } },
      { new: true }
    );
    if (!updatedIssue) await Promise.reject("ISSUE_NOT_FOUND");

    // adding comment to the user profile
    const updatedUser = await UserModel.findByIdAndUpdate(
      { _id: user_id },
      {
        $push: {
          comments: { issue_id, message, date: Date.now() },
        },
      },
      { new: true }
    );

    // if (!updatedUser)await Promise.reject("USER_NOT_FOUND")

    res.json({ message: "new message added succesfully" });
  } catch (error) {
    console.log(error);
    if (error === "ISSUE_NOT_FOUND") {
      res.status(403).json({ message: "Sorry we couldn't find this issue" });
    } else {
      res.status(500).json({ message: "Sorry something went wrong" });
    }
  }
};
// vote param upvote || downvote
const vote = async (req, res) => {
  const { id: issue_id, vote } = req.params;
  const user_id = req.user._id.toString();
  console.log(user_id);
  try {
    const foundIssue = await IssueModel.findById(issue_id);
    if (!foundIssue) await Promise.reject("ISSUE_NOT_FOUND");

    // check if user has already up or down voted this issue
    const alreadyUpVoted = foundIssue.upVotes.includes(user_id);
    const alreadyDownVoted = foundIssue.downVotes.includes(user_id);

    if (vote === "upVote") {
      if (alreadyUpVoted) await Promise.reject("ISSUE_ALREADY_UPVOTED");
      //   add user_id to the upVotes array
      const updatedVote = await IssueModel.findByIdAndUpdate(issue_id, {
        $push: { upVotes: user_id },
      });
      //  if this issue was downvoted before, his user_id will be removed from the downVotes array
      if (alreadyDownVoted) {
        await IssueModel.findByIdAndUpdate(issue_id, {
          $pull: { downVotes: user_id },
        });
      }
      res.json({ message: "Upvote succesful" });
    }

    if (vote === "downVote") {
      if (alreadyDownVoted) await Promise.reject("ISSUE_ALREADY_DOWNVOTED");
      //   add user_id to the downVotes array
      const updatedVote = await IssueModel.findByIdAndUpdate(issue_id, {
        $push: { downVotes: user_id },
      });
      //   if this issue was upvoted before, his user_id will be removed from the upVotes array
      if (alreadyUpVoted) {
        await IssueModel.findByIdAndUpdate(issue_id, {
          $pull: { upVotes: user_id },
        });
      }
      res.json({ message: "Downvote succesful" });
    }
  } catch (error) {
    console.log(error);
    if (error === "ISSUE_ALREADY_UPVOTED") {
      res.status(403).json({ message: "User has already upvoted this issue" });
    } else if (error === "ISSUE_ALREADY_DOWNVOTED") {
      res
        .status(403)
        .json({ message: "User has already downvoted this issue" });
    } else {
      res.status(500).json({ message: "Sorry something went wrong" });
    }
  }
};

module.exports = { createNew, findAll, findIssue, allComments, newComment, vote };
