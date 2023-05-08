import mongoose from "mongoose";

mongoose.set('strictQuery', true)

import dotenv from 'dotenv';
dotenv.config();
export const connectToDB = () => {
  mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
};
