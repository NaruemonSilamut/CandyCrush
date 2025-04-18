import express from "express";
import { getOrderItemsController, createOrderItemController } from "../controller/OrderItemController.js";

const router = express.Router();

router.get("/orderitem", getOrderItemsController);
router.post("/orderitem", createOrderItemController);

export default router;
