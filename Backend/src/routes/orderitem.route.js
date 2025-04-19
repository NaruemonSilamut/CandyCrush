import express from "express";
import { getOrderItemsController, createOrderItemController, deleteOrderItemController } from "../controller/OrderItemController.js";

const router = express.Router();

router.get("/orderitem", getOrderItemsController);
router.post("/orderitem", createOrderItemController);
router.delete("/orderitem/:orderItemId", deleteOrderItemController);

export default router;
