import express from 'express';
import { createPaymentController, getPaymentController, deletePaymentController } from '../controller/paymentController.js';

const router = express.Router();
router.get("/payment",getPaymentController);
router.post("/payment",createPaymentController);
router.delete("/payment/:id",deletePaymentController);

export default router;