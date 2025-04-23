import express from "express";
import {
  getAllOrderItems,
  getOrderItemById,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
} from "../controller/orderitem.controller.js";

const router = express.Router();

router.get("/orderitem", getAllOrderItems);
router.get("/orderitem/:id", getOrderItemById);
router.post("/orderitem", createOrderItem);
router.put("/orderitem/:id", updateOrderItem);
router.delete("/orderitem/:id", deleteOrderItem);

export default router;
