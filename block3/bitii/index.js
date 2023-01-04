// const { REFUSED } = require("dns");
const express = require("express");
// const http = require("http");
// const { send } = require("process");
const { getUsers } = require("./users");
const { createUsers } = require("./users");

const port = 8000;
const app = express();
app.use(express.json());

app.get("/users", getUsers);
app.post("/users", createUser);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
