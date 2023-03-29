import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

const conn = async () => {
  try {
    const DbCon = await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.1pjiayw.mongodb.net/test`
    )
    console.log("conectou ao banco");
    return DbCon;
  } catch (error) {
    console.log(error)
  }
}

conn();

export {conn}