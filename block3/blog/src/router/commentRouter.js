const express = require("express");
const {
  getComments,
  getCommentById,
  createPost,
  updatePost,
  deletePost,
} = require("../controller/commentController");

const commentRouter = express.Router();

commentRouter.get("/comment", getComments);
commentRouter.get("/post/:id/comment", getCommentById);
commentRouter.post("/comment/create", createPost);
commentRouter.post("/comment", updatePost);
commentRouter.delete("/comment/:id", deletePost);

module.exports = commentRouter;
