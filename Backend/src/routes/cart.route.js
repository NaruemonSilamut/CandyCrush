import express from "express";
import { getCartController, createCartController } from "../controller/CartController.js";

const router = express.Router();

router.get("/", getCartController);
router.post("/", createCartController);

export default router;
