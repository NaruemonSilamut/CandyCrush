import express from "express";
import { getOrderItemsController, createOrderItemController } from "../controller/OrderItemController.js";

const router = express.Router();

router.get("/", getOrderItemsController);
router.post("/", createOrderItemController);

export default router;
