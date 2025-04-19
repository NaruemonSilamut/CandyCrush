import express from "express";
import { createCartController, getCartController, deleteCartController } from "../controller/CartConterller.js";

const router = express.Router();

router.get("/cart", getCartController);
router.post("/cart", createCartController);
router.delete("/cart/:cartId", deleteCartController);

export default router;
