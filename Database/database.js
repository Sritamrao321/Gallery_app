const mongoose = require("mongoose");
const config = require("../../server/config/uploadConfig");

const Connect = async () => {
  try {
    const con = await mongoose.connect(config.MONGO_URL);

    console.log("MongoDB Connected : ${con.connection.host}");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = Connect;
