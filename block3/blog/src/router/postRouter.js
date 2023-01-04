const express = require("express");
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controller/postController");

const postRouter = express.Router();

postRouter.get("/post", getPosts);
postRouter.get("/post/:id", getPostById);
postRouter.post("/post/create", createPost);
postRouter.post("/post/update", updatePost);
postRouter.delete("/post/delete", deletePost);

module.exports = postRouter;
