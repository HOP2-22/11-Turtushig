const express = require("express");

const port = 8888;

const app = express();
const arr = [];

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.post("/", (req, res) => {
  res.send("post");
});

app.delete("/", (req, res) => {
  res.send("post");
});

app.put("/updatePost", (req, res) => {
  res.send("post");
});

app.listen(8888, () => {
  console.log("server listening on 8888");
});
