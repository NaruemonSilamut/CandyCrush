const express = require("express");
const cors = require("cors");
const prisma = require("./prismaclient");
const app = express();
const userRoute = require("./routes/user.route");

app.use(cors());
app.use(express.json());
app.use("/api", userRoute);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

