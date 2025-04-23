import express from "express";
import {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controller/order.controller.js";

const router = express.Router();

router.get("/order", getAllOrders);
router.get("/order/:id", getOrderById);
router.get("/order", createOrder);
router.get("/order/:id", updateOrder);
router.get("/order/:id", deleteOrder);

export default router;
