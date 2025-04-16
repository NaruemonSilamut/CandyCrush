import express from "express";
import { createRatingController, getRatingController } from "../controller/ratingController.js";

const router = express.Router();
router.get("/rating", getRatingController)
router.post("/rating", createRatingController)

export default router;