const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const PostSchema = new Schema({
  text: { type: String },
  likes: { type: Number, default: 0 },
});

const Post = model("posts", PostSchema);

module.exports = Post;
