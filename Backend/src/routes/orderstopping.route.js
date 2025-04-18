import express from "express";
import { getOrdersController, createOrderController } from "../controller/OrdersToppingController.js";

const router = express.Router();

router.get("/", getOrdersController);
router.post("/", createOrderController);

export default router;
