const express = require("express");
const userRouter = require("./router/userRouter");
const postRouter = require("./router/postRouter");
const commentRouter = require("./router/commentRouter");
const mongoose = require("mongoose");
const URI =
  "mongodb+srv://Turtushig-Hop2:Turtush7@cluster0.er6bsiw.mongodb.net/test";
const connection = mongoose.connection;

const app = express();
const PORT = 8000;

app.use(express.json());
mongoose.connect(URI);
app.use(userRouter);
app.use(postRouter);
app.use(commentRouter);

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(PORT || 8000, () => {
  console.log(`listening on port http://localhost:${PORT}/`);
});
