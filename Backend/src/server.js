import express from "express";
import cors from "cors";
import authRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import ratingRoute from "./routes/rating.route.js"; 
import icecreamRoute from "./routes/icecream.route.js";
import toppingsRoute from "./routes/toppings.route.js";
import cartRoute from "./routes/cart.route.js";
import orderRoute from "./routes/order.route.js";
import orderItemRoute from "./routes/orderitem.route.js";
import paymentRoute from "./routes/payment.route.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoute);
app.use("/api", ratingRoute);
app.use("/api", icecreamRoute);
app.use("/api", toppingsRoute);
app.use("/api",cartRoute)
app.use("/api",orderRoute)
app.use("/api",orderItemRoute)
app.use("/api",paymentRoute)

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
