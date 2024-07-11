import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import routes from "./routes/routes.js";
import { connectDB } from "./config/database.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api", routes);

const port = process.env.PORT;

app.listen(port || 9000, () => {
  connectDB();
  console.log(`server: http://localhost:${port}`);
});
