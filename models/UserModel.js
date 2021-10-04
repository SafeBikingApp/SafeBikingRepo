const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  comments: [
    {
      issue_id: { type: mongoose.SchemaTypes.ObjectId },
      message: { type: String },
      date: { type: Date },
    },
  ],
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
