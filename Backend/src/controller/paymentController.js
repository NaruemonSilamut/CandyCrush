import { z } from "zod";
import { createPayment, getPayment, deletePayment } from "../service/servicePayment.js";

const paymentSchema = z.object({
  orderId: z.string(), 
  paymentMethod: z.enum(["credit_card", "paypal", "bank_transfer"]),
  paymentStatus: z.enum(["pending", "completed", "failed"]),
  paymentAmount: z.number().positive({ message: "Payment amount must be positive" })
});

export const getPaymentController = async (req, res) => {
  try {
    const data = await getPayment();
    if (!data) {
      return res.status(404).json({ message: "No payment found" });
    }
    return res.status(200).json({ message: "Payment fetched successfully", data });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export const createPaymentController = async (req, res) => {
  try {
    console.log("Request body:", req.body);  // ตรวจสอบข้อมูลที่ได้รับ
    const validatedData = paymentSchema.parse(req.body);
    const data = await createPayment(validatedData);
    if (!data) {
      return res.status(404).json({ message: "Failed to create payment" });
    }
    return res.status(201).json({ message: "Payment created successfully", data });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export const deletePaymentController = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await deletePayment(id);

    if (!deleted) {
      return res.status(404).json({ message: "Payment not found or already deleted" });
    }

    return res.status(200).json({ message: "Payment deleted successfully", data: deleted });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};