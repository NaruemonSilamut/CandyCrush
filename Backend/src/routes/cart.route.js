import express from "express";
import { createCartController, getCartController } from "../controller/CartConterller.js";

const router = express.Router();

router.get("/cart", getCartController);
router.post("/cart", createCartController);

export default router;
