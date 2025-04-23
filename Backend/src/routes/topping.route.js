import express from "express";
import {
  getAllToppings,
  getToppingById,
  createTopping,
  updateTopping,
  deleteTopping,
} from "../controller/topping.controller.js";

const router = express.Router();

router.get("/topping", getAllToppings);
router.get("/topping/:id", getToppingById);
router.post("/topping", createTopping);
router.put("/topping/:id", updateTopping);
router.delete("/topping/:id", deleteTopping);

export default router;
