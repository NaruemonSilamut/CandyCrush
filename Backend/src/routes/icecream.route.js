import express from "express";
import { getIceCreamController, createIceCreamController } from "../controller/icecreamController.js";

const router = express.Router();

router.get("/", getIceCreamController);
router.post("/", createIceCreamController);

export default router;