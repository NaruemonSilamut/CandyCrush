import express from "express";
import { getAllCart, getCartById, createCart, updateCart, deleteCart } from "../controller/cart.controller.js";
const router = express.Router();

router.get("/cart", getAllCart);
router.get("/cart/:id", getCartById);
router.post("/cart", createCart);
router.put("/cart", updateCart);
router.delete("/cart", deleteCart);

export default router;
