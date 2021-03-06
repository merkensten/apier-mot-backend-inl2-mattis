import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDatabase = async () => {
  try {
    const DB_URL = process.env.DATABASE_URL;
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Koppling till MongoDB databas uppsatt.");
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

const connectToPort = (app) => {
  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`Servern körs på port: ${port}`);
  });
};

export default { connectToDatabase, connectToPort };
