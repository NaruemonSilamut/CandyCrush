import expess from "express";
import {
  getAllFlavors,
  getFlavorById,
  createFlavor,
  updateFlavor,
  deleteFlavor,
} from "../controller/flavor.controller.js";

const router = expess.Router();

router.get("/flavor", getAllFlavors);
router.get("/flavor/:id", getFlavorById);
router.post("/flavor", createFlavor);
router.put("/flavor/:id", updateFlavor);
router.delete("/flavor/:id", deleteFlavor);

export default router;
