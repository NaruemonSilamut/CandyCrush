import express from "express";
import cors from "cors";
import authRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoute);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
