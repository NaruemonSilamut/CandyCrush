import express from "express";
import cors from "cors";
import authRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import icecreamRoute from "./routes/icecream.route.js";
import toppingRoute from "./routes/topping.route.js";
import flavorRoute from "./routes/flavor.route.js";
import orderRoute from "./routes/order.route.js";
import orderitemRoute from "./routes/orderitem.route.js";
import cartRoute from "./routes/cart.route.js";
import paymentRoute from "./routes/payment.route.js";
import ratingRoute from "./routes/rating.route.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoute);
app.use("/api", icecreamRoute);
app.use("/api", toppingRoute);
app.use("/api", flavorRoute);
app.use("/api", orderRoute);
app.use("/api", orderitemRoute);
app.use("/api", cartRoute);
app.use("/api", paymentRoute);
app.use("/api", ratingRoute);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
