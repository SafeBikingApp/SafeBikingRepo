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

const findIssue = async (req, res) => {
  //   const { id } = req.params;
  try {
    const foundIssue = await IssueModel.findById({ _id: id });
    if (!foundIssue) await Promise.reject("ISSUE_NOT_FOUND");
    res.json(foundIssue);
  } catch (error) {
    console.log(error);
    if (error === "ISSUE_NOT_FOUND") {
      res.status(403).json({ message: "Sorry we couldn't find this issue" });
    } else {
      res.status(500).json({ message: "Sorry something went wrong" });
    }
  }
};

const allComments = async (req, res) => {
  const { id } = req.params;
  try {
    const foundIssue = await IssueModel.findById({ _id: id });
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
  const { id } = req.params;
  const { user_id, message } = req.body;
  console.log(id);
  try {
    const foundIssue = await IssueModel.findByIdAndUpdate(
      id,
      { $push: { comments: req.body } },
      { new: true }
    );
    if (!foundIssue) await Promise.reject("ISSUE_NOT_FOUND");

    const updatedUser = UserModel.findByIdAndUpdate(
      { _id: user_id },
      { $push: { comments: req.body } },
      { new: true }
    );
    console.log(updatedUser);
    res.json(foundIssue);
  } catch (error) {
    console.log(error);
    if (error === "ISSUE_NOT_FOUND") {
      res.status(403).json({ message: "Sorry we couldn't find this issue" });
    } else {
      res.status(500).json({ message: "Sorry something went wrong" });
    }
  }
};

module.exports = { createNew, findAll, allComments, newComment };
