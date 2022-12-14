const express = require("express");
const router = express.Router();
const {
  getUsers,
  addUser,
  deleteUser,
  getUserById,
} = require("./controller/users");

router
  .get("/", getUsers)
  .post("/", addUser)
  .get("/:userId", getUserById)
  .delete("/", deleteUser);

module.exports = router;
