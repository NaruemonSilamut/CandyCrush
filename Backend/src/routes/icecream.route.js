import express from "express";
import { getIceCreamController, createIceCreamController, deleteIceCreamController } from "../controller/IcecreamController.js";

const router = express.Router();

router.get("/icecream", getIceCreamController);
router.post("/icecream", createIceCreamController);
router.delete("/icecream/:iceCreamId", deleteIceCreamController);

export default router;