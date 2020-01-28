const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    required: true,
    unique: true,
    type: String
  },
  email: {
    required: true,
    unique: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  forget_password: {
    type: String
  }
});

let user = mongoose.model("user", userSchema);

module.exports = user;