const express = require("express");
const connect = require("./database/index");
const userRouter = require("./routes/router");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3333;

require("dotenv").config();

const app = express();

connect();
app.use(cors());
app.use(express.json());

app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
