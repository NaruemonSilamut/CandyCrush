import express from "express";
import {
  getAllRatings,
  getRatingById,
  createRating,
  updateRating,
  deleteRating
} from "../controller/rating.controller.js";

const router = express.Router();

router.get("/rating", getAllRatings);
router.get("/rating/:id", getRatingById);
router.post("/rating", createRating);
router.put("/rating/:id", updateRating);
router.delete("/rating/:id", deleteRating);

export default router;
