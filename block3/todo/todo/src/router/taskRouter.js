const express = require("express");
const {
  getTask,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controller/userController");

const taskRouter = express.Router();

taskRouter.get('/task', getTask)
taskRouter.get("/task", getTask);
taskRouter.put("/task/createTask", getTask);
taskRouter.post("/task/:id", getTask);
taskRouter.delete("/task/:id", getTask);

module.exports = userRouter;
