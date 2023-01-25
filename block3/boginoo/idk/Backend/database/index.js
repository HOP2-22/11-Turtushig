const mongoose = require("mongoose");
const uri =
  "mongodb+srv://Turtushig-Hop2:mongo123@cluster0.ccvlebz.mongodb.net/test";

const connect = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
    });
    console.log("Database is successfully connected");
  } catch (error) {
    console.log("error ", error);
  }
};

module.exports = connect;
