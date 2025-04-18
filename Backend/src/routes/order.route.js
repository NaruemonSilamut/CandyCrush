import express from "express";
import { createOrderController, getOrderController, deleteOrderController } from "../controller/orderController.js";

const router = express.Router();
router.get("/order", getOrderController)
router.post("/order", createOrderController);
router.delete("/order/:orderId", deleteOrderController);

export default router;