import express from "express";
import morgan from "morgan";
import cors from "cors";
// import fileUpload from "express-fileupload";
import dotenv from 'dotenv';
dotenv.config();
// routes
import auth from "./routes/auth.js";
// Initialization
const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',');
app.use(cors({allowedOrigins}));


app.use(morgan("dev"));
app.use(express.json());



// Routes

app.use(auth);
// Error Handling
app.use((req, res) => {
  res.status(404).send("Not Found");
});

export default app;
