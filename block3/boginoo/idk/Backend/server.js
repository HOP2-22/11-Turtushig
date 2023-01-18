const express = require("express");
const connect = require("connect");
const authRouter = require("./routes/router");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 3333;

const app = express();

connect();

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
