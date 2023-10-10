import mongoose from "mongoose";
import colors from "colors";

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    const conn = await mongoose.connect(
      process.env.MONGO_URL,
      connectionParams
    );

    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
