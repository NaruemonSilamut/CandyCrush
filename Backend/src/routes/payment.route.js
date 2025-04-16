import express from 'express';
import { createPaymentController, getPaymentController } from '../controller/paymentController.js';

const router = express.Router();
router.get("/payment",getPaymentController);
router.post("/payment",createPaymentController);

export default router;