import express from "express";
import {
  getAllIceCream,
  getIceCreamById,
  createIceCream,
  updateIceCream,
  deleteIceCream,
} from "../controller/icecream.controller.js";

const router = express.Router();

router.get("/icecream", getAllIceCream);
router.get("/icecream/:id", getIceCreamById);
router.put("/icecream/:id", updateIceCream);
router.post("/icecream", createIceCream);
router.delete("/icecream/:id", deleteIceCream);

export default router;
