import express from "express";
import {
  getPaymentById,
  getAllPayments,
  createPayment,
  updatePayment,
  deletePayment,
} from "../controller/payment.controller.js";

const router = express.Router();

router.get("/payment", getAllPayments);
router.get("/payment/:id", getPaymentById);
router.post("/payment", createPayment);
router.put("/payment", updatePayment);
router.delete("/payment", deletePayment);

export default router;
