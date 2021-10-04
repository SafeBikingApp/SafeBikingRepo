const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema({
  coordinates: {
    lat: { type: Number, required: true },
    long: { type: Number, required: true },
  },
  type: {
    type: String,
    enum: ["obstruction", "hole", "accident", "traffic danger"],
    required: true,
  },
  user_id: { type: mongoose.SchemaTypes.ObjectId, required: true },
  comments: [
    {
      user_id: { type: mongoose.SchemaTypes.ObjectId, required: true },
      message: { type: String, required: true },
    },
  ],
  upVotes: [{ type: mongoose.SchemaTypes.ObjectId }],
  downVotes: [{ type: mongoose.SchemaTypes.ObjectId }],
  pictures: [{ type: String }],
});

const IssueModel = mongoose.model("Issue", IssueSchema);

module.exports = IssueModel;
