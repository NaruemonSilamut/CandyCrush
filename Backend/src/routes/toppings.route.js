import express from "express";

import { createToppingsController, getToppingsController, deleteToppingsController } from "../controller/toppingsController.js";

const router = express.Router();
router.get("/topping", getToppingsController);
router.post("/topping", createToppingsController);
router.delete("/topping/:toppingId", deleteToppingsController);
export default router;
