const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  // title: { type: String, required: true },
  // author: { type: String, required: true },
  // body: String,
  date: { type: Date, default: Date.now },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  petName: { type: String, required: true },
  breed: String,
  age: Number,
  park: String,
  ball: String,
  frisbee: String,
  email: String,
  photoUrl: String,
  info: String
});

const User = mongoose.model("Users", usersSchema);

module.exports = User;